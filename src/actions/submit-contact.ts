"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

import { contacts } from "@/content/contacts";
import { isRateLimited, rateLimitKeys, recordAttempt } from "@/lib/rate-limit";
import type { ContactFormState } from "@/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GENERIC_ERROR = "Something went wrong. Please try again.";
const RATE_LIMIT_ERROR = "You've reached today's limit. Please try again tomorrow.";
const FROM = `Build with Brand <${contacts.email.value}>`;

const resend = new Resend(process.env.NEXT_PRIVATE_RESEND_API_KEY);

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const honeypot = readString(formData, "bwb_hp");
  if (honeypot) {
    console.info("Contact form honeypot tripped; skipping send");
    return { ok: true };
  }

  const name = readString(formData, "name");
  const email = readString(formData, "email").toLowerCase();
  const company = readString(formData, "company");
  const projectType = readString(formData, "projectType");
  const message = readString(formData, "message");

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in your name, email, and message." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const max = parseRateLimitMax();
  const keys = rateLimitKeys(await clientIp(), email);

  if (isRateLimited(keys, max)) {
    return { ok: false, error: RATE_LIMIT_ERROR };
  }

  if (!process.env.NEXT_PRIVATE_RESEND_API_KEY) {
    console.error("NEXT_PRIVATE_RESEND_API_KEY is not set");
    return { ok: false, error: GENERIC_ERROR };
  }

  const subject = projectType
    ? `New inquiry from ${name} — ${projectType}`
    : `New inquiry from ${name}`;

  const { error } = await resend.emails.send({
    from: FROM,
    to: contacts.email.value,
    replyTo: email,
    subject,
    html: buildHtml({ name, email, company, projectType, message }),
    text: buildText({ name, email, company, projectType, message }),
  });

  if (error) {
    console.error("Resend failed to send contact email:", error.message);
    return { ok: false, error: GENERIC_ERROR };
  }

  recordAttempt(keys);
  return { ok: true };
}

function readString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function parseRateLimitMax(): number {
  const parsed = Number.parseInt(
    process.env.NEXT_PRIVATE_CONTACT_RATE_LIMIT_MAX ?? "",
    10
  );
  return Number.isInteger(parsed) && parsed > 0 ? parsed : 3;
}

async function clientIp(): Promise<string> {
  const headerStore = await headers();
  const forwarded = headerStore.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return headerStore.get("x-real-ip")?.trim() || "unknown";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildHtml({
  name,
  email,
  company,
  projectType,
  message,
}: {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}): string {
  const rows = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "—"],
    ["Project type", projectType || "—"],
    ["Message", message],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top">${label}</td><td style="padding:8px 12px;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  return `<h2>New contact form inquiry</h2><table>${rows}</table>`;
}

function buildText({
  name,
  email,
  company,
  projectType,
  message,
}: {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}): string {
  return [
    "New contact form inquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "—"}`,
    `Project type: ${projectType || "—"}`,
    "",
    "Message:",
    message,
  ].join("\n");
}

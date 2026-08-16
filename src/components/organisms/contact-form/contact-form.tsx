"use client";

import { useActionState, useEffect } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";
import { toast } from "sonner";

import { submitContact } from "@/actions/submit-contact";
import { FormField } from "@/components/atoms/form-field";
import type { ContactFormState } from "@/types";
import "./contact-form.scss";

const initialState: ContactFormState = { ok: false };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  useEffect(() => {
    if (state.ok) {
      toast.success("Message sent! We'll get back to you within 24 hours.");
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state]);

  if (state.ok) {
    return (
      <div className="contact-form__success">
        <CircleCheck className="contact-form__success-icon" />
        <h3 className="contact-form__success-title">Message sent!</h3>
        <p className="contact-form__success-desc">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="contact-form">
      <FormField
        id="name"
        name="name"
        label="Your Name"
        placeholder="Enter your name"
        required
      />
      <FormField
        id="email"
        name="email"
        type="email"
        label="Your Email"
        placeholder="Enter your email"
        required
      />
      <FormField
        id="phone"
        name="phone"
        type="number"
        label="Your Phone no."
        placeholder="Enter your phone number"
        required
      />
      <FormField
        id="company"
        name="company"
        label="Company Name"
        placeholder="Enter your company name"
      />
      <FormField
        as="textarea"
        id="message"
        name="message"
        label="Your Message"
        placeholder="Tell us about your project..."
        rows={4}
        required
      />

      {state.error ? (
        <p className="contact-form__error" role="alert">
          {state.error}
        </p>
      ) : null}

      <button type="submit" className="contact-form__submit" disabled={pending}>
        {pending ? "Sending..." : "Send Message"}
        <ArrowRight className="contact-form__submit-icon" />
      </button>

      <div className="contact-form__honeypot" aria-hidden="true">
        <input
          id="bwb_hp"
          name="bwb_hp"
          type="checkbox"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
    </form>
  );
}

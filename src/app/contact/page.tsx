import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Hero } from "@/components/marketing/hero";
import { CtaButton } from "@/components/marketing/cta-button";
import { ContactForm } from "@/components/marketing/contact-form";
import { ContactMethodCard } from "@/components/marketing/contact-method-card";
import { MapPlaceholder } from "@/components/marketing/map-placeholder";
import { FloatingPaperPlane } from "@/components/decor/floating-paper-plane";
import { FloatingSphere } from "@/components/decor/floating-sphere";

export const metadata: Metadata = {
  title: "Contact — Build With Brand",
  description: "Have a project in mind or just want to say hi? We'd love to hear from you.",
};

const quickContacts = [
  { icon: Mail, label: "Email Us", value: "hello@buildwithbrand.com" },
  { icon: Phone, label: "Call Us", value: "+91 1234567890" },
  { icon: MapPin, label: "Location", value: "India" },
];

const otherWays = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@buildwithbrand.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 1234567890",
    sub: "Mon - Sat, 10:00 AM - 7:00 PM IST",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    sub: "We're available worldwide",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sat, 10:00 AM - 7:00 PM IST",
    sub: "Sunday: Closed",
  },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Let's Connect"
        title={
          <>
            Let&apos;s build something amazing <span className="text-brand-violet">together.</span>
          </>
        }
        description="Have a project in mind or just want to say hi? We'd love to hear from you."
        extra={
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {quickContacts.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-white/5 text-brand-violet">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="text-sm text-white/50">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        }
        visual={
          <div className="relative flex size-64 items-center justify-center">
            <FloatingSphere size={70} tone="dark" className="absolute bottom-2 left-4" />
            <FloatingPaperPlane size={110} delay={0.4} className="absolute top-2 right-4" />
          </div>
        }
      />

      <section id="message-form" className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="bg-white px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-semibold text-brand-ink">Send us a message</h2>
            <p className="mt-2 text-sm text-brand-ink-secondary">
              Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="bg-brand-bg-dark px-6 py-16 text-white sm:px-10">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-semibold">Other ways to reach us</h2>
            <p className="mt-2 text-sm text-white/50">
              Prefer a different way? Choose what works best for you.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {otherWays.map((item) => (
                <ContactMethodCard key={item.label} {...item} tone="dark" />
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              {["LinkedIn", "Instagram", "Dribbble", "Twitter"].map((social) => (
                <span
                  key={social}
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 text-[0.65rem] font-semibold text-white/80"
                >
                  {social.slice(0, 2)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <MapPlaceholder />
        <div className="flex flex-col justify-center gap-4 bg-[#100b1c] px-6 py-16 text-white sm:px-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Ready to start your <span className="text-brand-violet">project?</span>
          </h2>
          <p className="max-w-sm text-sm text-white/50">
            Let&apos;s turn your ideas into powerful digital experiences that drive real results.
          </p>
          <CtaButton href="#message-form" className="mt-2 w-fit">
            Start Your Project
          </CtaButton>
        </div>
      </section>
    </>
  );
}

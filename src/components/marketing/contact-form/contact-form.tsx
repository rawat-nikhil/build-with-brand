"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";

const PROJECT_TYPES = [
  "Website Development",
  "Web Applications",
  "E-commerce Solutions",
  "UI/UX Design",
  "Something else",
];

const fieldClasses =
  "w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-brand-ink placeholder:text-black/35 outline-none focus:border-brand-violet focus:ring-2 focus:ring-brand-violet/20";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-brand-violet/20 bg-brand-violet/5 px-8 py-16 text-center">
        <CircleCheck className="size-10 text-brand-violet" />
        <h3 className="text-lg font-semibold text-brand-ink">Message sent!</h3>
        <p className="max-w-sm text-sm text-brand-ink-secondary">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-ink">
          Your Name *
        </label>
        <input id="name" name="name" type="text" required placeholder="Enter your name" className={fieldClasses} />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-ink">
          Your Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className={fieldClasses}
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-brand-ink">
          Company Name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Enter your company name"
          className={fieldClasses}
        />
      </div>

      <div>
        <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-brand-ink">
          Project Type
        </label>
        <select id="projectType" name="projectType" defaultValue="" className={fieldClasses}>
          <option value="" disabled>
            Select a service
          </option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-ink">
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your project..."
          className={fieldClasses}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-violet-2 to-brand-indigo px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(124,92,252,0.6)] transition-opacity hover:opacity-90"
      >
        Send Message
        <ArrowRight className="size-4" />
      </button>
    </form>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";

import { FormField } from "@/components/atoms/form-field";
import { projectTypes } from "@/content/project-types";
import "./contact-form.scss";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
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
    <form onSubmit={handleSubmit} className="contact-form">
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
        id="company"
        name="company"
        label="Company Name"
        placeholder="Enter your company name"
      />
      <FormField
        as="select"
        id="projectType"
        name="projectType"
        label="Project Type"
        placeholder="Select a service"
        options={projectTypes}
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

      <button type="submit" className="contact-form__submit">
        Send Message
        <ArrowRight className="contact-form__submit-icon" />
      </button>
    </form>
  );
}

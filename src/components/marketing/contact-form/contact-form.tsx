"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";
import "./contact-form.scss";

const PROJECT_TYPES = [
  "Website Development",
  "Web Applications",
  "E-commerce Solutions",
  "UI/UX Design",
  "Something else",
];

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
      <div>
        <label htmlFor="name" className="contact-form__label">
          Your Name *
        </label>
        <input id="name" name="name" type="text" required placeholder="Enter your name" className="contact-form__input" />
      </div>

      <div>
        <label htmlFor="email" className="contact-form__label">
          Your Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="contact-form__input"
        />
      </div>

      <div>
        <label htmlFor="company" className="contact-form__label">
          Company Name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Enter your company name"
          className="contact-form__input"
        />
      </div>

      <div>
        <label htmlFor="projectType" className="contact-form__label">
          Project Type
        </label>
        <select id="projectType" name="projectType" defaultValue="" className="contact-form__input">
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
        <label htmlFor="message" className="contact-form__label">
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your project..."
          className="contact-form__input"
        />
      </div>

      <button type="submit" className="contact-form__submit">
        Send Message
        <ArrowRight className="contact-form__submit-icon" />
      </button>
    </form>
  );
}

import Image from "next/image";

import { ContactForm } from "@/components/marketing/contact-form";
import { ContactMethodCard } from "@/components/marketing/contact-method-card";
import type { ContactMethod } from "@/lib/contacts";
import type { socials } from "@/lib/socials";

import "./split-form-section.scss";

interface SplitFormSectionProps {
  items: ContactMethod[];
  socials: typeof socials;
}

export function SplitFormSection({ items, socials }: SplitFormSectionProps) {
  return (
    <section id="message-form" className="split-form-section">
      <div className="split-form-section__form-panel">
        <div className="split-form-section__inner">
          <h2 className="split-form-section__section-title">Send us a message</h2>
          <p className="split-form-section__section-desc">
            Fill out the form and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="split-form-section__form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="split-form-section__info-panel">
        <div className="split-form-section__inner">
          <h2 className="split-form-section__panel-title">Other ways to reach us</h2>
          <p className="split-form-section__panel-desc">
            Prefer a different way? Choose what works best for you.
          </p>

          <div className="split-form-section__methods">
            {items.map((item) => (
              <ContactMethodCard key={item.label} {...item} tone="dark" />
            ))}
          </div>

          <div className="split-form-section__socials">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="split-form-section__social-link"
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={20}
                  height={20}
                  className="split-form-section__social-icon"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

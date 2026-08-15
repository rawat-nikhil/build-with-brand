import { ContactForm } from "@/components/organisms/contact-form";
import { ContactMethodCard } from "@/components/molecules/contact-method-card";
import { SocialLinks } from "@/components/molecules/social-links";
import type { ContactMethod, Social } from "@/types";

import "./split-form-section.scss";

interface SplitFormSectionProps {
  items: ContactMethod[];
  socials: Social[];
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

          <SocialLinks socials={socials} className="mt-8" />
        </div>
      </div>
    </section>
  );
}

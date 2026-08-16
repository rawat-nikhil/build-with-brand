import { Eyebrow } from "@/components/atoms/eyebrow";
import { CtaButton } from "@/components/atoms/cta-button";
import { FeatureCard } from "@/components/molecules/feature-card";
import { capabilities } from "@/content/capabilities";

import "./services-capabilities-section.scss";

export function ServicesCapabilitiesSection() {
  return (
    <section className="services-capabilities-section">
      <div className="services-capabilities-section__inner">
        <div className="services-capabilities-section__header">
          <div>
            <Eyebrow>Other Capabilities</Eyebrow>
            <h2 className="services-capabilities-section__heading">
              More ways we can help
            </h2>
          </div>
          <CtaButton href="/contact" variant="outline-dark" size="sm">
            Discuss Your Project
          </CtaButton>
        </div>

        <div className="services-capabilities-section__grid">
          {capabilities.map((item) => (
            <FeatureCard key={item.title} {...item} variant="dark" />
          ))}
        </div>
      </div>
    </section>
  );
}

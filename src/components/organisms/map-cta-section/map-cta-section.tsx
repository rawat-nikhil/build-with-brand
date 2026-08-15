import { CtaButton } from "@/components/atoms/cta-button";
import { MapPlaceholder } from "@/components/molecules/map-placeholder";

import "./map-cta-section.scss";

export function MapCtaSection() {
  return (
    <section className="map-cta-section">
      <MapPlaceholder />
      <div className="map-cta-section__panel">
        <h2 className="map-cta-section__title">
          Ready to start your <span className="map-cta-section__accent">project?</span>
        </h2>
        <p className="map-cta-section__desc">
          Let&apos;s turn your ideas into powerful digital experiences that drive real
          results.
        </p>
        <CtaButton href="#message-form" className="map-cta-section__button">
          Start Your Project
        </CtaButton>
      </div>
    </section>
  );
}

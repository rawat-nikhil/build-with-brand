import { Eyebrow } from "@/components/atoms/eyebrow";
import { ServiceCard } from "@/components/molecules/service-card";
import { services } from "@/content/services";

import "./services-list-section.scss";

export function ServicesListSection() {
  return (
    <section className="services-list-section">
      <div className="services-list-section__inner">
        <div className="services-list-section__header">
          <div>
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="services-list-section__heading">
              Services that power your{" "}
              <span className="services-list-section__accent">digital growth.</span>
            </h2>
          </div>
          <p className="services-list-section__desc">
            From stunning websites to powerful web applications, we provide end-to-end
            solutions to help your brand stand out and scale.
          </p>
        </div>

        <div className="services-list-section__grid">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={String(i + 1).padStart(2, "0")}
              href="/contact"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

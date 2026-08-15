import { Eyebrow } from "@/components/atoms/eyebrow";
import { ServiceCard } from "@/components/molecules/service-card";
import { services } from "@/content/services";

import "./home-services-section.scss";

export function HomeServicesSection() {
  return (
    <section className="home-services-section">
      <div className="home-services-section__inner">
        <div className="home-services-section__header">
          <div>
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="home-services-section__heading">
              Services that power your{" "}
              <span className="home-services-section__accent">digital growth.</span>
            </h2>
          </div>
          <p className="home-services-section__desc">
            From stunning websites to scalable web applications, we deliver end-to-end
            solutions tailored to your brand and business goals.
          </p>
        </div>

        <div className="home-services-section__grid">
          {services.map(({ icon, title, description }) => (
            <ServiceCard
              key={title}
              icon={icon}
              title={title}
              description={description}
              href="/services"
              linkLabel={title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

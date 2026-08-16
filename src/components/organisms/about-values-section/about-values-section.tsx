import { Eyebrow } from "@/components/atoms/eyebrow";
import { FeatureCard } from "@/components/molecules/feature-card";
import { values } from "@/content/values";

import "./about-values-section.scss";

export function AboutValuesSection() {
  return (
    <section className="about-values-section">
      <div className="about-values-section__inner">
        <div className="about-values-section__header">
          <div>
            <Eyebrow>Our Values</Eyebrow>
            <h2 className="about-values-section__heading">
              The principles that guide{" "}
              <span className="about-values-section__accent">everything</span> we do.
            </h2>
          </div>
          <p className="about-values-section__desc">
            These values shape our decisions, our work and the relationships we build.
          </p>
        </div>

        <div className="about-values-section__grid">
          {values.map((value) => (
            <FeatureCard key={value.title} {...value} variant="light" />
          ))}
        </div>
      </div>
    </section>
  );
}

import { Eyebrow } from "@/components/atoms/eyebrow";
import { FeatureCard } from "@/components/molecules/feature-card";
import { processPrinciples } from "@/content/process-principles";

import "./process-why-section.scss";

export function ProcessWhySection() {
  return (
    <section className="process-why-section">
      <div className="process-why-section__inner">
        <div className="process-why-section__header">
          <Eyebrow className="process-why-section__eyebrow">
            Why Our Process Works
          </Eyebrow>
          <h2 className="process-why-section__heading">
            Designed for clarity. Built for{" "}
            <span className="process-why-section__accent">success.</span>
          </h2>
          <p className="process-why-section__desc">
            Our process is collaborative, agile and transparent — keeping you informed and
            involved from start to finish.
          </p>
        </div>

        <div className="process-why-section__grid">
          {processPrinciples.map((item) => (
            <FeatureCard key={item.title} {...item} variant="centered" />
          ))}
        </div>
      </div>
    </section>
  );
}

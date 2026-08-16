import { Eyebrow } from "@/components/atoms/eyebrow";
import { CtaButton } from "@/components/atoms/cta-button";
import { ProcessSummary } from "@/components/molecules/process-summary";
import type { ProcessSummaryStep } from "@/types";

import "./work-process-section.scss";

interface WorkProcessSectionProps {
  steps: ProcessSummaryStep[];
}

export function WorkProcessSection({ steps }: WorkProcessSectionProps) {
  return (
    <section className="work-process-section">
      <div className="work-process-section__inner">
        <div className="work-process-section__layout">
          <div className="work-process-section__text">
            <Eyebrow>Our Approach</Eyebrow>
            <h2 className="work-process-section__heading">
              A proven process. Built for{" "}
              <span className="work-process-section__accent">results.</span>
            </h2>
            <p className="work-process-section__desc">
              We follow a structured approach to turn ideas into impactful digital
              products.
            </p>
            <CtaButton
              href="/process"
              variant="outline-light"
              size="sm"
              className="work-process-section__cta"
            >
              Our Process
            </CtaButton>
          </div>
          <ProcessSummary steps={steps} className="work-process-section__summary" />
        </div>
      </div>
    </section>
  );
}

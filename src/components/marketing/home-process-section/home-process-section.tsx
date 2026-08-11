import { Eyebrow } from "@/components/marketing/eyebrow";
import { ProcessSummary, type ProcessSummaryStep } from "@/components/marketing/process-summary";

import "./home-process-section.scss";

interface HomeProcessSectionProps {
  steps: ProcessSummaryStep[];
}

export function HomeProcessSection({ steps }: HomeProcessSectionProps) {
  return (
    <section className="home-process-section">
      <div className="home-process-section__inner">
        <div className="home-process-section__header">
          <div>
            <Eyebrow>Our Process</Eyebrow>
            <h2 className="home-process-section__heading">
              A proven process. Built for{" "}
              <span className="home-process-section__accent">results.</span>
            </h2>
          </div>
          <p className="home-process-section__desc">
            We follow a simple yet effective process to turn your ideas into impactful
            digital products.
          </p>
        </div>

        <ProcessSummary steps={steps} className="mt-16" />
      </div>
    </section>
  );
}

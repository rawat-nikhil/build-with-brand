import { Eyebrow } from "@/components/atoms/eyebrow";
import { ProcessExplorer } from "@/components/organisms/process-explorer";
import { processSteps } from "@/content/process-steps";
import type { ProcessStepData } from "@/types";

import "./process-explorer-section.scss";

const steps: ProcessStepData[] = processSteps.map((step) => {
  const Icon = step.icon;
  return {
    ...step,
    icon: <Icon className="size-4" />,
  };
});

export function ProcessExplorerSection() {
  return (
    <section className="process-explorer-section">
      <div className="process-explorer-section__inner">
        <div className="process-explorer-section__header">
          <Eyebrow className="process-explorer-section__eyebrow">How We Work</Eyebrow>
          <h2 className="process-explorer-section__heading">
            From idea to impact,{" "}
            <span className="process-explorer-section__accent">step by step.</span>
          </h2>
          <p className="process-explorer-section__desc">
            Our structured approach ensures clarity, quality and consistency at every
            stage of your project.
          </p>
        </div>

        <div className="process-explorer-section__content">
          <ProcessExplorer steps={steps} />
        </div>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";
import type { ProcessSummaryStep } from "@/types";
import "./process-summary.scss";

export function ProcessSummary({
  steps,
  className,
}: {
  steps: ProcessSummaryStep[];
  className?: string;
}) {
  return (
    <div className={cn("process-summary", className)}>
      {steps.map((step, i) => (
        <div key={step.number} className="process-summary__item">
          {i < steps.length - 1 && <span className="process-summary__connector" />}
          <span className="process-summary__icon-wrap">
            <step.icon className="process-summary__icon" />
          </span>
          <p className="process-summary__title">{step.title}</p>
          <p className="process-summary__description">{step.description}</p>
        </div>
      ))}
    </div>
  );
}

import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface ProcessSummaryStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ProcessSummary({
  steps,
  className,
}: {
  steps: ProcessSummaryStep[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4", className)}>
      {steps.map((step, i) => (
        <div key={step.number} className="relative flex flex-col items-center text-center">
          {i < steps.length - 1 && (
            <span className="absolute top-6 left-1/2 hidden h-px w-full -translate-y-1/2 bg-black/10 sm:block" />
          )}
          <span className="relative z-10 flex size-12 items-center justify-center rounded-full border-2 border-brand-violet/30 bg-white text-brand-violet">
            <step.icon className="size-5" />
          </span>
          <p className="mt-4 text-sm font-semibold text-brand-ink">{step.title}</p>
          <p className="mt-1 text-xs text-brand-ink-secondary">{step.description}</p>
        </div>
      ))}
    </div>
  );
}

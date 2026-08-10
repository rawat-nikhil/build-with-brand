"use client";

import { useState } from "react";
import { Clock, CircleCheck } from "lucide-react";

import { ProcessStep } from "@/components/marketing/process-step";

export interface ProcessStepData {
  index: string;
  icon: React.ReactNode;
  iconLarge: React.ReactNode;
  title: string;
  summary: string;
  description: string;
  bullets: string[];
  timeline: string;
}

export function ProcessExplorer({ steps }: { steps: ProcessStepData[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = steps[activeIndex];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
      <div className="flex flex-col gap-2">
        {steps.map((step, i) => (
          <ProcessStep
            key={step.title}
            index={step.index}
            icon={step.icon}
            title={step.title}
            description={step.summary}
            active={i === activeIndex}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>

      <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold tracking-[0.2em] text-brand-violet uppercase">
          Step {active.index}
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-brand-ink">{active.title}</h3>
        <p className="mt-4 text-sm text-brand-ink-secondary">{active.description}</p>

        <p className="mt-6 text-xs font-semibold tracking-[0.15em] text-brand-violet uppercase">
          What we do
        </p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {active.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2 text-sm text-brand-ink-secondary">
              <CircleCheck className="size-4 shrink-0 text-brand-violet" />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex aspect-[16/9] w-full items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet/10 via-brand-bg-light to-brand-violet/5">
          {active.iconLarge}
        </div>

        <div className="mt-6 inline-flex items-center gap-3 rounded-lg bg-brand-bg-light px-4 py-3">
          <Clock className="size-5 text-brand-violet" />
          <div>
            <p className="text-xs text-brand-ink-secondary">Timeline</p>
            <p className="text-sm font-semibold text-brand-ink">{active.timeline}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

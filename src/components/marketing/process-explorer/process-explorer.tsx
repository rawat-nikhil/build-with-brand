"use client";

import { useState } from "react";
import { Clock, CircleCheck } from "lucide-react";

import { ProcessStep } from "@/components/marketing/process-step";
import "./process-explorer.scss";

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
    <div className="process-explorer">
      <div className="process-explorer__steps">
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

      <div className="process-explorer__panel">
        <p className="process-explorer__step-label">Step {active.index}</p>
        <h3 className="process-explorer__step-title">{active.title}</h3>
        <p className="process-explorer__step-desc">{active.description}</p>

        <p className="process-explorer__bullets-label">What we do</p>
        <ul className="process-explorer__bullets">
          {active.bullets.map((bullet) => (
            <li key={bullet} className="process-explorer__bullet">
              <CircleCheck className="process-explorer__bullet-icon" />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="process-explorer__visual">{active.iconLarge}</div>

        <div className="process-explorer__timeline">
          <Clock className="process-explorer__timeline-icon" />
          <div>
            <p className="process-explorer__timeline-label">Timeline</p>
            <p className="process-explorer__timeline-value">{active.timeline}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

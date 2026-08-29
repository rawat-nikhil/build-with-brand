"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, CircleCheck } from "lucide-react";

import { ProcessStep } from "@/components/molecules/process-step";
import type { ProcessStepData } from "@/types";
import "./process-explorer.scss";

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

        <div className="process-explorer__visual">
          <Image
            src={active.image}
            alt={`${active.title} stage`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="process-explorer__image"
          />
        </div>

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

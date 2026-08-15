import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import "./process-step.scss";

interface ProcessStepProps {
  index: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  active?: boolean;
  onClick?: () => void;
}

export function ProcessStep({
  index,
  icon,
  title,
  description,
  active,
  onClick,
}: ProcessStepProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn("process-step", active && "process-step--active")}
    >
      <span className={cn("process-step__number", active && "process-step__number--active")}>
        {index}
      </span>
      <span className={cn("process-step__icon-wrap", active && "process-step__icon-wrap--active")}>
        {icon}
      </span>
      <span className="process-step__content">
        <span className="process-step__title">{title}</span>
        <span className="process-step__description">{description}</span>
      </span>
      <ChevronRight
        className={cn("process-step__chevron", active && "process-step__chevron--active")}
      />
    </button>
  );
}

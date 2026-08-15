import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

/** Condensed step used by the home and work overview strips. */
export type ProcessSummaryStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

/** Full step used by the interactive explorer on the process page. */
export type ProcessStepData = {
  index: string;
  icon: ReactNode;
  iconLarge: ReactNode;
  title: string;
  summary: string;
  description: string;
  bullets: string[];
  timeline: string;
};

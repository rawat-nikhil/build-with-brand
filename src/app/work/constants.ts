import type { Metadata } from "next";
import { Code, Compass, Rocket, Search } from "lucide-react";

import type { ProcessSummaryStep } from "@/types";

export const metadata: Metadata = {
  title: "Work — Build With Brand",
  description:
    "Ideas brought to life. A selection of websites, apps and products we've built.",
};

export const processSteps: ProcessSummaryStep[] = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "We understand your goals, audience and requirements in depth.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Plan",
    description: "We create strategy, wireframes and roadmap for your project.",
  },
  {
    number: "03",
    icon: Code,
    title: "Build",
    description: "We design, develop and test with precision and clean code.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Grow",
    description: "We launch, optimize and support your product for long-term growth.",
  },
];

import { Cloud, Rocket, Settings, TrendingUp } from "lucide-react";

import type { Feature } from "@/types";

export const capabilities: Feature[] = [
  {
    icon: Rocket,
    title: "Branding & Identity",
    description: "Build a brand that stands out and leaves a lasting impression.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Data-driven strategies to grow your reach and conversions.",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "Ongoing support and maintenance to keep your product at its best.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Reliable, scalable and secure infrastructure for your product.",
  },
];

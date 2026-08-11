import type { Metadata } from "next";
import { Code, Percent, Rocket, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Build With Brand — Digital Studio",
  description:
    "We build digital experiences that build your brand — websites, web apps, e-commerce and UI/UX design.",
};

export const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "We understand your goals, audience and requirements.",
  },
  {
    number: "02",
    icon: Percent,
    title: "Plan",
    description: "We create a strategy, wireframes and roadmap for your project.",
  },
  {
    number: "03",
    icon: Code,
    title: "Build",
    description: "We design, develop and bring your product to life.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "We launch successfully and stay with you for continuous support.",
  },
];

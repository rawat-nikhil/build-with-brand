import { Code, Compass, FlaskConical, Palette, Rocket, Search } from "lucide-react";

import type { ProcessStepContent } from "@/types";

export const processSteps: ProcessStepContent[] = [
  {
    index: "01",
    icon: Search,
    title: "Discover",
    summary: "We understand your goals, audience and requirements in depth.",
    description:
      "Every successful project starts with a deep understanding. We listen, research and analyze to uncover the real problem and opportunity.",
    bullets: [
      "Stakeholder interviews",
      "Market & competitor research",
      "Define goals and success metrics",
      "Scope and requirement gathering",
    ],
    timeline: "1 – 2 Weeks",
  },
  {
    index: "02",
    icon: Compass,
    title: "Plan",
    summary: "We create a strategy, wireframes and roadmap tailored to your project.",
    description:
      "We translate insights into an actionable plan — mapping the strategy, information architecture and project roadmap.",
    bullets: [
      "Strategy & roadmap",
      "Information architecture",
      "Wireframing",
      "Timeline & milestones",
    ],
    timeline: "1 Week",
  },
  {
    index: "03",
    icon: Palette,
    title: "Design",
    summary: "We design intuitive, engaging and pixel-perfect experiences.",
    description:
      "We craft interfaces that are as beautiful as they are usable, iterating closely with you at every step.",
    bullets: ["UI design", "Interactive prototypes", "Design system", "Usability review"],
    timeline: "2 – 3 Weeks",
  },
  {
    index: "04",
    icon: Code,
    title: "Develop",
    summary: "We build robust, scalable and secure solutions with clean code.",
    description:
      "Our engineers turn designs into fast, reliable and maintainable products using modern best practices.",
    bullets: [
      "Frontend & backend development",
      "API integrations",
      "Code reviews",
      "Performance optimization",
    ],
    timeline: "3 – 6 Weeks",
  },
  {
    index: "05",
    icon: FlaskConical,
    title: "Test",
    summary: "We ensure everything works flawlessly across devices and browsers.",
    description:
      "We rigorously test functionality, performance and accessibility before anything ships.",
    bullets: [
      "Cross-browser testing",
      "QA & bug fixing",
      "Performance audits",
      "Accessibility checks",
    ],
    timeline: "1 Week",
  },
  {
    index: "06",
    icon: Rocket,
    title: "Launch & Grow",
    summary: "We deploy your product and support you to grow and scale.",
    description:
      "We handle a smooth launch and stick around to help you measure, iterate and grow.",
    bullets: [
      "Deployment & monitoring",
      "Analytics setup",
      "Ongoing support",
      "Growth iterations",
    ],
    timeline: "Ongoing",
  },
];

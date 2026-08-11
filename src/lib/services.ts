import { Code, Monitor, Palette, ShoppingCart, type LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    icon: Monitor,
    title: "Website Development",
    description: "Modern, responsive and fast websites that represent your brand perfectly.",
    bullets: [
      "Custom Business Websites",
      "Landing Pages",
      "CMS Development",
      "Performance Optimization",
    ],
  },
  {
    icon: Code,
    title: "Web Applications",
    description: "Scalable and secure web applications built for performance and growth.",
    bullets: ["Custom Web Apps", "SaaS Development", "API Development", "Third-party Integrations"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "High-converting online stores with seamless checkout experience.",
    bullets: [
      "Shopify Development",
      "Custom E-commerce",
      "Payment Integration",
      "Store Optimization",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Clean, intuitive and engaging designs that connect with your audience.",
    bullets: ["User Research", "Wireframing & Prototyping", "UI Design", "Design Systems"],
  },
];

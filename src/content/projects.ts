import { ProjectCategory, type Project } from "@/types/project";

export const projects: Project[] = [
  {
    categories: [ProjectCategory.ECommerce, ProjectCategory.UiUxDesign],
    title: "Glow Light",
    description: "Luxury lighting store with a seamless shopping experience.",
    image: "/projects/glowlights.png",
    accent: "amber",
  },
  {
    categories: [ProjectCategory.ECommerce, ProjectCategory.UiUxDesign],
    title: "The Toki Room",
    description: "From the farms of Japan - Matcha to you.",
    image: "/projects/tokieroom.png",
    accent: "sky",
  },
  {
    categories: [ProjectCategory.WebApplication, ProjectCategory.UiUxDesign],
    title: "Invoice Ledger",
    description: "Your invoices, your way.",
    image: "/projects/invoiceledger.png",
    accent: "violet",
  },
  {
    categories: [ProjectCategory.Portfolio, ProjectCategory.UiUxDesign],
    title: "KS Supertreats",
    description: "Your journey to deliciousness & health starts here.",
    image: "/projects/kssupertreats.png",
    accent: "sky",
  },
  {
    categories: [ProjectCategory.WebApplication, ProjectCategory.UiUxDesign],
    title: "Noise",
    description: "Expereince the world of music with Noise.",
    image: "/projects/noise.png",
    accent: "amber",
  },
  {
    categories: [ProjectCategory.WebApplication, ProjectCategory.UiUxDesign],
    title: "GoVa Loan",
    description: "Easy and fast way to get a loan to financial freedom starts here.",
    image: "/projects/govaloans.png",
    accent: "emerald",
  },
  {
    categories: [ProjectCategory.WebApplication, ProjectCategory.UiUxDesign],
    title: "EBM - AI Chatbot",
    description: "Build your own AI assistant for all your business needs.",
    image: "/projects/ebm.png",
    accent: "sky",
  },
];

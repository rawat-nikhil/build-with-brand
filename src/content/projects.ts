import { ProjectCategory, type Project } from "@/types/project";

export const projects: Project[] = [
  {
    categories: [ProjectCategory.ECommerce, ProjectCategory.UiUxDesign],
    title: "Glow Light",
    description: "Luxury lighting store with a seamless shopping experience.",
    image: "/projects/glowlights.png",
    accent: "amber",
    url: "https://www.glowlighting.in/",
  },
  {
    categories: [ProjectCategory.ECommerce, ProjectCategory.UiUxDesign],
    title: "The Toki Room",
    description: "From the farms of Japan - Matcha to you.",
    image: "/projects/tokieroom.png",
    accent: "sky",
    url: "https://www.thetokiroom.com/",
  },
  {
    categories: [ProjectCategory.Portfolio, ProjectCategory.UiUxDesign],
    title: "The ARU Edition",
    description: "A personalized experience for your loved one's",
    image: "/projects/aur-edition.png",
    accent: "emerald",
    url: "https://aruedition.com/",
  },
  {
    categories: [ProjectCategory.Portfolio, ProjectCategory.UiUxDesign],
    title: "KS Supertreats",
    description: "Your journey to deliciousness & health starts here.",
    image: "/projects/kssupertreats.png",
    accent: "sky",
    url: "https://ks-supertreats.com/",
  },
  {
    categories: [ProjectCategory.WebApplication, ProjectCategory.UiUxDesign],
    title: "Invoice Ledger",
    description: "Your invoices, your way.",
    image: "/projects/invoiceledger.png",
    accent: "violet",
    url: "https://invoice-ledger-web-gnu4-ebon.vercel.app/",
  },

  {
    categories: [ProjectCategory.WebApplication, ProjectCategory.UiUxDesign],
    title: "Noise",
    description: "Expereince the world of music with Noise.",
    image: "/projects/noise.png",
    accent: "amber",
    url: "https://play.google.com/store/apps/details?id=com.noisefit&hl=en",
  },
  {
    categories: [ProjectCategory.WebApplication, ProjectCategory.UiUxDesign],
    title: "GoVa Loan",
    description: "Easy and fast way to get a loan to financial freedom starts here.",
    image: "/projects/govaloans.png",
    accent: "emerald",
    url: "https://mygova.com/",
  },
];

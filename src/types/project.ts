export const ProjectCategory = {
  WebApplication: "Web Application",
  ECommerce: "E-commerce",
  UiUxDesign: "UI/UX Design",
  Portfolio: "Portfolio",
} as const;

export type ProjectCategory = (typeof ProjectCategory)[keyof typeof ProjectCategory];

export const PROJECT_CATEGORIES: readonly ProjectCategory[] = [
  ProjectCategory.WebApplication,
  ProjectCategory.ECommerce,
  ProjectCategory.UiUxDesign,
  ProjectCategory.Portfolio,
];

export type ProjectAccent = "violet" | "amber" | "sky" | "emerald";

export type Project = {
  categories: ProjectCategory[];
  title: string;
  description: string;
  image: string;
  accent: ProjectAccent;
};

/** A filter chip; `category: null` means "show everything". */
export type ProjectFilter = {
  label: string;
  category: ProjectCategory | null;
};

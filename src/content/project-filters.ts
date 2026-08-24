import type { ProjectFilter } from "@/types";
import { PROJECT_CATEGORIES, ProjectCategory } from "@/types/project";

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  [ProjectCategory.WebApplication]: "Web Applications",
  [ProjectCategory.ECommerce]: "E-commerce",
  [ProjectCategory.UiUxDesign]: "UI/UX Design",
  [ProjectCategory.Portfolio]: "Portfolio",
};

export const projectFilters: ProjectFilter[] = [
  { label: "All Projects", category: null },
  ...PROJECT_CATEGORIES.map((category) => ({
    label: CATEGORY_LABELS[category],
    category,
  })),
];

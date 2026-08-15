export type ProjectCategory =
  "Website" | "Web Application" | "E-commerce" | "UI/UX Design";

export type ProjectAccent = "violet" | "amber" | "sky" | "emerald";

export type Project = {
  category: ProjectCategory;
  title: string;
  description: string;
  accent: ProjectAccent;
};

/** A filter chip; `category: null` means "show everything". */
export type ProjectFilter = {
  label: string;
  category: ProjectCategory | null;
};

import type { LucideIcon } from "lucide-react";

export type ContactMethod = {
  icon: LucideIcon;
  label: string;
  value: string;
  sub?: string;
};

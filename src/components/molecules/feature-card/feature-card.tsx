import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import "./feature-card.scss";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "light" | "dark" | "centered";
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = "light",
}: FeatureCardProps) {
  return (
    <div className={cn("feature-card", `feature-card--${variant}`)}>
      <span className="feature-card__icon-wrap">
        <Icon className="feature-card__icon" />
      </span>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </div>
  );
}

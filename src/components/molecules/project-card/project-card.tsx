import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import "./project-card.scss";

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  href?: string;
  accent?: "violet" | "amber" | "sky" | "emerald";
}

export function ProjectCard({
  category,
  title,
  description,
  href = "#",
  accent = "violet",
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className={cn("project-card__preview", `project-card__preview--${accent}`)}>
        {title}
      </div>
      <div className="project-card__body">
        <p className="project-card__category">{category}</p>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <Link href={href} className="project-card__link">
          View Case Study
          <ArrowRight className="project-card__link-icon" />
        </Link>
      </div>
    </div>
  );
}

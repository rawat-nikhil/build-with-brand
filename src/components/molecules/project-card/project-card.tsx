import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ProjectAccent, ProjectCategory } from "@/types";
import "./project-card.scss";

interface ProjectCardProps {
  categories: ProjectCategory[];
  title: string;
  description: string;
  image: string;
  href?: string;
  accent?: ProjectAccent;
}

export function ProjectCard({
  categories,
  title,
  description,
  image,
  href = "#",
  accent = "violet",
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className={cn("project-card__preview", `project-card__preview--${accent}`)}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="project-card__image"
        />
      </div>
      <div className="project-card__body">
        <p className="project-card__category">{categories.join(" · ")}</p>
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

"use client";

import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/marketing/project-card";
import "./projects-grid.scss";

export interface Project {
  category: "Website" | "Web Application" | "E-commerce" | "UI/UX Design";
  title: string;
  description: string;
  accent: "violet" | "amber" | "sky" | "emerald";
}

const FILTERS = ["All Projects", "Websites", "Web Applications", "E-commerce", "UI/UX Design"] as const;

const filterToCategory: Record<(typeof FILTERS)[number], Project["category"] | null> = {
  "All Projects": null,
  Websites: "Website",
  "Web Applications": "Web Application",
  "E-commerce": "E-commerce",
  "UI/UX Design": "UI/UX Design",
};

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All Projects");

  const filtered = useMemo(() => {
    const category = filterToCategory[active];
    return category ? projects.filter((p) => p.category === category) : projects;
  }, [active, projects]);

  return (
    <div>
      <div className="projects-grid__filters">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={cn(
              "projects-grid__filter",
              active === filter && "projects-grid__filter--active"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid__grid">
        {filtered.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
        {filtered.length === 0 && (
          <p className="projects-grid__empty">
            No projects in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}

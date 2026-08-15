"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/molecules/project-card";
import { ProjectFilters } from "@/components/molecules/project-filters";
import { projectFilters } from "@/content/project-filters";
import type { Project, ProjectFilter } from "@/types";
import "./projects-grid.scss";

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<ProjectFilter>(projectFilters[0]);

  const filtered = useMemo(
    () =>
      active.category ? projects.filter((p) => p.category === active.category) : projects,
    [active, projects]
  );

  return (
    <div>
      <ProjectFilters
        filters={projectFilters}
        activeLabel={active.label}
        onSelect={setActive}
      />

      <div className="projects-grid__grid">
        {filtered.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
        {filtered.length === 0 && (
          <p className="projects-grid__empty">No projects in this category yet.</p>
        )}
      </div>
    </div>
  );
}

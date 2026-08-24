"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/molecules/project-card";
import { ProjectFilters } from "@/components/molecules/project-filters";
import { projectFilters } from "@/content/project-filters";
import { projects } from "@/content/projects";
import type { ProjectCategory, ProjectFilter } from "@/types";
import "./projects-grid.scss";

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | null>(null);

  const activeLabel =
    activeCategory === null
      ? "All Projects"
      : (projectFilters.find((f) => f.category === activeCategory)?.label ??
        "All Projects");

  const filtered = useMemo(() => {
    if (!activeCategory) return projects;
    return projects.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  function handleSelect(filter: ProjectFilter) {
    setActiveCategory(filter.category);
  }

  return (
    <div>
      <ProjectFilters
        filters={projectFilters}
        activeLabel={activeLabel}
        onSelect={handleSelect}
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

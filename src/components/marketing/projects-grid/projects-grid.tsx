"use client";

import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/marketing/project-card";

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
      <div className="flex flex-wrap justify-center gap-2">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === filter
                ? "border-brand-violet/40 bg-brand-violet/15 text-brand-violet"
                : "border-white/10 text-white/60 hover:text-white"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-12 text-center text-sm text-white/40">
            No projects in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}

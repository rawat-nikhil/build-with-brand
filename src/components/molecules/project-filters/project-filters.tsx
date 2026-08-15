"use client";

import { cn } from "@/lib/utils";
import type { ProjectFilter } from "@/types";
import "./project-filters.scss";

interface ProjectFiltersProps {
  filters: ProjectFilter[];
  activeLabel: string;
  onSelect: (filter: ProjectFilter) => void;
}

export function ProjectFilters({ filters, activeLabel, onSelect }: ProjectFiltersProps) {
  return (
    <div className="project-filters">
      {filters.map((filter) => (
        <button
          key={filter.label}
          type="button"
          onClick={() => onSelect(filter)}
          className={cn(
            "project-filters__filter",
            filter.label === activeLabel && "project-filters__filter--active"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

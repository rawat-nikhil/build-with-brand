"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import type { ProjectFilter } from "@/types";
import "./project-filters.scss";

interface ProjectFiltersProps {
  filters: ProjectFilter[];
  activeLabel: string;
  onSelect: (filter: ProjectFilter) => void;
}

export function ProjectFilters({ filters, activeLabel, onSelect }: ProjectFiltersProps) {
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = activeRef.current;
    const container = el?.closest(".project-filters");
    if (!el || !(container instanceof HTMLElement)) return;

    const left = el.offsetLeft - (container.clientWidth - el.offsetWidth) / 2;
    container.scrollTo({ left, behavior: "smooth" });
  }, [activeLabel]);

  return (
    <div className="project-filters">
      {filters.map((filter) => {
        const isActive = filter.label === activeLabel;

        return (
          <button
            key={filter.category ?? "all"}
            ref={isActive ? activeRef : undefined}
            type="button"
            onClick={() => onSelect(filter)}
            className={cn(
              "project-filters__filter",
              isActive && "project-filters__filter--active"
            )}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}

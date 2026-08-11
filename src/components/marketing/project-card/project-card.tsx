import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  href?: string;
  accent?: "violet" | "amber" | "sky" | "emerald";
}

const accentGradients: Record<NonNullable<ProjectCardProps["accent"]>, string> = {
  violet: "from-brand-violet/40 via-brand-indigo/30 to-black/40",
  amber: "from-amber-500/30 via-orange-500/20 to-black/40",
  sky: "from-sky-500/30 via-blue-500/20 to-black/40",
  emerald: "from-emerald-500/30 via-teal-500/20 to-black/40",
};

export function ProjectCard({
  category,
  title,
  description,
  href = "#",
  accent = "violet",
}: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <div
        className={cn(
          "flex aspect-[4/3] items-center justify-center bg-gradient-to-br text-sm font-medium text-white/70",
          accentGradients[accent]
        )}
      >
        {title}
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold tracking-wide text-brand-violet uppercase">
          {category}
        </p>
        <h3 className="mt-2 text-base font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/50">{description}</p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-violet hover:underline"
        >
          View Case Study
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}

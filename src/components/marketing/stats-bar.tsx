import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

export function StatsBar({ stats, className }: { stats: Stat[]; className?: string }) {
  return (
    <section className={cn("border-y border-white/10 bg-brand-bg-dark py-14", className)}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
            <stat.icon className="size-6 text-brand-violet" />
            <p className="text-3xl font-semibold text-white sm:text-4xl">{stat.value}</p>
            <p className="text-sm text-white/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

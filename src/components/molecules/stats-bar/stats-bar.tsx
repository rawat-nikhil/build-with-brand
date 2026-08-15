import { cn } from "@/lib/utils";
import type { Stat } from "@/types";
import "./stats-bar.scss";

export function StatsBar({ stats, className }: { stats: Stat[]; className?: string }) {
  return (
    <section className={cn("stats-bar", className)}>
      <div className="stats-bar__inner">
        {stats.map((stat) => (
          <div key={stat.label} className="stats-bar__item">
            <stat.icon className="stats-bar__icon" />
            <p className="stats-bar__value">{stat.value}</p>
            <p className="stats-bar__label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

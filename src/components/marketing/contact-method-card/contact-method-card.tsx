import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface ContactMethodCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  sub?: string;
  tone?: "dark" | "light";
  className?: string;
}

export function ContactMethodCard({
  icon: Icon,
  label,
  value,
  sub,
  tone = "dark",
  className,
}: ContactMethodCardProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl p-4",
        tone === "dark" ? "bg-white/5" : "border border-black/5 bg-brand-bg-light",
        className
      )}
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-violet/15 text-brand-violet">
        <Icon className="size-5" />
      </span>
      <div className="min-w-0">
        <p
          className={cn(
            "text-sm font-semibold",
            tone === "dark" ? "text-white" : "text-brand-ink"
          )}
        >
          {label}
        </p>
        <p className={cn("text-sm", tone === "dark" ? "text-white/60" : "text-brand-ink-secondary")}>
          {value}
        </p>
        {sub && (
          <p className={cn("mt-0.5 text-xs", tone === "dark" ? "text-white/35" : "text-brand-ink-secondary/70")}>
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}

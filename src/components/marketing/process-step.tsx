import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface ProcessStepProps {
  index: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  active?: boolean;
  onClick?: () => void;
}

export function ProcessStep({
  index,
  icon,
  title,
  description,
  active,
  onClick,
}: ProcessStepProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-colors",
        active
          ? "border-brand-violet/20 bg-white shadow-sm"
          : "border-transparent hover:bg-black/[0.03]"
      )}
    >
      <span
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
          active ? "bg-brand-violet text-white" : "bg-black/5 text-brand-ink-secondary"
        )}
      >
        {index}
      </span>
      <span
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-lg",
          active ? "bg-brand-violet/10 text-brand-violet" : "bg-black/5 text-brand-ink-secondary"
        )}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-brand-ink">{title}</span>
        <span className="mt-1 block text-xs text-brand-ink-secondary">{description}</span>
      </span>
      <ChevronRight
        className={cn(
          "mt-1 size-4 shrink-0 transition-transform",
          active ? "text-brand-violet" : "text-black/20"
        )}
      />
    </button>
  );
}

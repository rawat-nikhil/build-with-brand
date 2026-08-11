import Link from "next/link";
import { ArrowRight, CircleCheck, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: string;
  bullets?: string[];
  href?: string;
  linkLabel?: string;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
  bullets,
  href = "#",
  linkLabel = "Explore Service",
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <span className="flex size-12 items-center justify-center rounded-xl bg-brand-violet/10 text-brand-violet">
          <Icon className="size-5" />
        </span>
        {index && <span className="text-sm font-medium text-black/25">{index}</span>}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-brand-ink">{title}</h3>
      <p className="mt-2 text-sm text-brand-ink-secondary">{description}</p>

      {bullets && (
        <ul className="mt-4 flex flex-col gap-2 text-sm text-brand-ink-secondary">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2">
              <CircleCheck className="size-4 shrink-0 text-brand-violet" />
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {bullets ? (
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-violet hover:underline"
        >
          {linkLabel}
          <ArrowRight className="size-4" />
        </Link>
      ) : (
        <Link
          href={href}
          aria-label={linkLabel}
          className="mt-6 flex size-9 items-center justify-center self-start rounded-full border border-black/10 text-brand-ink transition-colors hover:border-brand-violet hover:bg-brand-violet hover:text-white"
        >
          <ArrowRight className="size-4" />
        </Link>
      )}
    </div>
  );
}

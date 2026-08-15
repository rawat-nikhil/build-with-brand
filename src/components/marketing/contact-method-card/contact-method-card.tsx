import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import "./contact-method-card.scss";

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
  const toneModifier = tone === "dark" ? "contact-method-card--dark" : "contact-method-card--light";

  return (
    <div className={cn("contact-method-card", toneModifier, className)}>
      <span className="contact-method-card__icon-wrap">
        <Icon className="contact-method-card__icon" />
      </span>
      <div className="contact-method-card__body">
        <p className={cn("contact-method-card__label", `contact-method-card__label--${tone}`)}>
          {label}
        </p>
        <p className={cn("contact-method-card__value", `contact-method-card__value--${tone}`)}>
          {value}
        </p>
        {sub && (
          <p className={cn("contact-method-card__sub", `contact-method-card__sub--${tone}`)}>
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}

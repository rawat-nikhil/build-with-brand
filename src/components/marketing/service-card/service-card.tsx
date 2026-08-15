import Link from "next/link";
import { ArrowRight, CircleCheck, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import "./service-card.scss";

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
    <div className={cn("service-card", className)}>
      <div className="service-card__header">
        <span className="service-card__icon-wrap">
          <Icon className="service-card__icon" />
        </span>
        {index && <span className="service-card__index">{index}</span>}
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>

      {bullets && (
        <ul className="service-card__bullets">
          {bullets.map((bullet) => (
            <li key={bullet} className="service-card__bullet">
              <CircleCheck className="service-card__bullet-icon" />
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {bullets ? (
        <Link href={href} className="service-card__link">
          {linkLabel}
          <ArrowRight className="service-card__link-icon" />
        </Link>
      ) : (
        <Link
          href={href}
          aria-label={linkLabel}
          className="service-card__link-circle"
        >
          <ArrowRight className="service-card__link-icon" />
        </Link>
      )}
    </div>
  );
}

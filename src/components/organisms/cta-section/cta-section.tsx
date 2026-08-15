import { cn } from "@/lib/utils";
import "./cta-section.scss";

interface CTASectionProps {
  title: React.ReactNode;
  description: string;
  actions: React.ReactNode;
  tone?: "dark" | "light" | "gradient";
  decor?: React.ReactNode;
  className?: string;
}

const toneModifier: Record<NonNullable<CTASectionProps["tone"]>, string> = {
  dark: "cta-section--dark",
  light: "cta-section--light",
  gradient: "cta-section--gradient",
};

const descriptionToneModifier: Record<NonNullable<CTASectionProps["tone"]>, string> = {
  dark: "cta-section__description--dark",
  light: "cta-section__description--light",
  gradient: "cta-section__description--gradient",
};

export function CTASection({
  title,
  description,
  actions,
  tone = "dark",
  decor,
  className,
}: CTASectionProps) {
  return (
    <section className={cn("cta-section", toneModifier[tone], className)}>
      {decor}
      <div className="cta-section__inner">
        <h2 className="cta-section__title">{title}</h2>
        <p className={cn("cta-section__description", descriptionToneModifier[tone])}>
          {description}
        </p>
        <div className="cta-section__actions">{actions}</div>
      </div>
    </section>
  );
}

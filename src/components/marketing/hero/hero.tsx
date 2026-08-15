import Image from "next/image";

import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/marketing/eyebrow";
import "./hero.scss";

interface HeroProps {
  eyebrow?: string;
  eyebrowNode?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  actions?: React.ReactNode;
  extra?: React.ReactNode;
  extraFullWidth?: boolean;
  visual?: React.ReactNode;
  backgroundImage?: string;
  className?: string;
}

export function Hero({
  eyebrow,
  eyebrowNode,
  title,
  description,
  actions,
  extra,
  extraFullWidth,
  visual,
  backgroundImage,
  className,
}: HeroProps) {
  return (
    <section className={cn("hero", className)}>
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero__bg-image"
          />
          <div className="hero__bg-overlay" aria-hidden />
        </>
      )}
      <div className="hero__content">
        <div className="hero__grid">
          <div>
            {eyebrowNode ?? (eyebrow && <Eyebrow>{eyebrow}</Eyebrow>)}
            <h1 className="hero__heading">{title}</h1>
            <p className="hero__description">{description}</p>
            {actions && <div className="hero__actions">{actions}</div>}
            {!extraFullWidth && extra}
          </div>
          {visual && <div className="hero__visual">{visual}</div>}
        </div>
        {extraFullWidth && extra}
      </div>
    </section>
  );
}

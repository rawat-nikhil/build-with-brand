import Image from "next/image";

import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/marketing/eyebrow";

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
    <section
      className={cn(
        "relative overflow-hidden bg-brand-bg-dark px-6 pt-14 pb-20 text-white",
        className
      )}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-contain object-right"
          />
          <div
            className="absolute inset-0 bg-linear-to-r from-brand-bg-dark via-brand-bg-dark/70 to-transparent"
            aria-hidden
          />
        </>
      )}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            {eyebrowNode ?? (eyebrow && <Eyebrow>{eyebrow}</Eyebrow>)}
            <h1 className="mt-4 text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/60">{description}</p>
            {actions && (
              <div className="mt-8 flex flex-wrap items-center gap-4">{actions}</div>
            )}
            {!extraFullWidth && extra}
          </div>
          {visual && (
            <div className="relative flex min-h-70 items-center justify-center lg:justify-end">
              {visual}
            </div>
          )}
        </div>
        {extraFullWidth && extra}
      </div>
    </section>
  );
}

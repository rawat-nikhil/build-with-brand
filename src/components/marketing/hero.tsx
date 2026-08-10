import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/marketing/eyebrow";

interface HeroProps {
  eyebrow?: string;
  eyebrowNode?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  actions?: React.ReactNode;
  extra?: React.ReactNode;
  visual?: React.ReactNode;
  className?: string;
}

export function Hero({
  eyebrow,
  eyebrowNode,
  title,
  description,
  actions,
  extra,
  visual,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-brand-bg-dark px-6 pt-14 pb-20 text-white",
        className
      )}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          {eyebrowNode ?? (eyebrow && <Eyebrow>{eyebrow}</Eyebrow>)}
          <h1 className="mt-4 text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/60">{description}</p>
          {actions && (
            <div className="mt-8 flex flex-wrap items-center gap-4">{actions}</div>
          )}
          {extra}
        </div>
        {visual && (
          <div className="relative flex min-h-[280px] items-center justify-center lg:justify-end">
            {visual}
          </div>
        )}
      </div>
    </section>
  );
}

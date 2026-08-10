import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: React.ReactNode;
  description: string;
  actions: React.ReactNode;
  tone?: "dark" | "light" | "gradient";
  decor?: React.ReactNode;
  className?: string;
}

const toneClasses: Record<NonNullable<CTASectionProps["tone"]>, string> = {
  dark: "bg-brand-bg-dark text-white",
  light: "bg-gradient-to-br from-[#efe9ff] to-brand-bg-light text-brand-ink",
  gradient: "bg-gradient-to-br from-brand-violet-2 to-brand-indigo text-white",
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
    <section className={cn("relative overflow-hidden px-6 py-20", toneClasses[tone], className)}>
      {decor}
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-semibold text-balance sm:text-4xl">{title}</h2>
        <p
          className={cn(
            "max-w-xl text-sm",
            tone === "light" ? "text-brand-ink-secondary" : "text-white/70"
          )}
        >
          {description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">{actions}</div>
      </div>
    </section>
  );
}

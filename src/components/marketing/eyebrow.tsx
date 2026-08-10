import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs font-semibold tracking-[0.2em] text-brand-violet uppercase",
        className
      )}
    >
      {children}
    </p>
  );
}

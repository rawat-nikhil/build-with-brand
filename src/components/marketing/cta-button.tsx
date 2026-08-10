import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type CtaButtonVariant = "primary" | "dark-solid" | "outline-dark" | "outline-light";
type CtaButtonSize = "md" | "sm";

interface CtaButtonOwnProps {
  variant?: CtaButtonVariant;
  size?: CtaButtonSize;
  icon?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

type CtaButtonProps =
  | (CtaButtonOwnProps & {
      href: string;
      type?: never;
    })
  | (CtaButtonOwnProps & {
      href?: undefined;
      type?: "button" | "submit";
    });

const sizeClasses: Record<CtaButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  sm: "px-5 py-2.5 text-[0.8125rem]",
};

const variantClasses: Record<CtaButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-brand-violet-2 to-brand-indigo text-white shadow-[0_8px_24px_-8px_rgba(124,92,252,0.6)] hover:opacity-90",
  "dark-solid": "bg-white text-brand-ink hover:bg-white/90",
  "outline-dark": "border border-white/25 text-white hover:bg-white/10",
  "outline-light": "border border-brand-ink/15 text-brand-ink hover:bg-brand-ink/5",
};

export function CtaButton({
  variant = "primary",
  size = "md",
  icon = true,
  className,
  children,
  href,
  onClick,
  ...rest
}: CtaButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="size-4" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  const { type = "button" } = rest as Extract<CtaButtonProps, { href?: undefined }>;

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}

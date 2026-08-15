import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import "./cta-button.scss";

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

const sizeModifier: Record<CtaButtonSize, string> = {
  md: "cta-button--md",
  sm: "cta-button--sm",
};

const variantModifier: Record<CtaButtonVariant, string> = {
  primary: "cta-button--primary",
  "dark-solid": "cta-button--dark-solid",
  "outline-dark": "cta-button--outline-dark",
  "outline-light": "cta-button--outline-light",
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
    "cta-button",
    sizeModifier[size],
    variantModifier[variant],
    className
  );

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="cta-button__icon" />}
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

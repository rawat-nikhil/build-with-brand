import Link from "next/link";

import { cn } from "@/lib/utils";
import "./nav-link.scss";

interface NavLinkProps {
  href: string;
  label: string;
  active?: boolean;
  variant?: "desktop" | "mobile";
  onClick?: () => void;
}

export function NavLink({
  href,
  label,
  active = false,
  variant = "desktop",
  onClick,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn("nav-link", `nav-link--${variant}`, active && "nav-link--active")}
    >
      {label}
      {active && variant === "desktop" && <span className="nav-link__indicator" />}
    </Link>
  );
}

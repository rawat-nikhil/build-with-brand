"use client";

import { usePathname } from "next/navigation";

import { NavLink } from "@/components/atoms/nav-link";
import { navLinks } from "@/content/navigation";
import { isActiveRoute } from "@/lib/is-active-route";
import "./nav-menu.scss";

export function NavMenu() {
  const pathname = usePathname();

  return (
    <nav className="nav-menu">
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          label={link.label}
          active={isActiveRoute(pathname, link.href)}
        />
      ))}
    </nav>
  );
}

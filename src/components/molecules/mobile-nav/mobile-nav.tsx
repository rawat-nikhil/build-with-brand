"use client";

import { usePathname } from "next/navigation";

import { CtaButton } from "@/components/atoms/cta-button";
import { NavLink } from "@/components/atoms/nav-link";
import { navLinks } from "@/content/navigation";
import { isActiveRoute } from "@/lib/is-active-route";
import "./mobile-nav.scss";

export function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="mobile-nav">
      <div className="mobile-nav__inner">
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            label={link.label}
            variant="mobile"
            active={isActiveRoute(pathname, link.href)}
            onClick={onNavigate}
          />
        ))}
        <CtaButton href="/contact" size="sm" className="mt-2 w-fit" onClick={onNavigate}>
          Let&apos;s Build
        </CtaButton>
      </div>
    </nav>
  );
}

"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { BrandLogo } from "@/components/atoms/brand-logo";
import { CtaButton } from "@/components/atoms/cta-button";
import { MobileNav } from "@/components/molecules/mobile-nav";
import { NavMenu } from "@/components/molecules/nav-menu";
import "./navbar.scss";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <BrandLogo priority className="h-8" onClick={close} />

        <div className="navbar__controls">
          <NavMenu />

          <div className="navbar__cta-wrap">
            <CtaButton href="/contact" size="sm">
              Let&apos;s Build
            </CtaButton>
          </div>

          <button
            type="button"
            className="navbar__mobile-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && <MobileNav onNavigate={close} />}
    </header>
  );
}

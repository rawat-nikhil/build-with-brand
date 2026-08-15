"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { CtaButton } from "@/components/marketing/cta-button";
import "./navbar.scss";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link
          href="/"
          className="navbar__logo-link"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/header.png"
            alt="Build with Brand"
            width={645}
            height={140}
            className="navbar__logo"
            priority
          />
        </Link>

        <div className="navbar__controls">
          <nav className="navbar__nav">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "navbar__nav-link",
                    active && "navbar__nav-link--active"
                  )}
                >
                  {link.label}
                  {active && <span className="navbar__nav-indicator" />}
                </Link>
              );
            })}
          </nav>

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

      {open && (
        <nav className="navbar__mobile-nav">
          <div className="navbar__mobile-nav-inner">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "navbar__mobile-nav-link",
                    active && "navbar__mobile-nav-link--active"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <CtaButton
              href="/contact"
              size="sm"
              className="mt-2 w-fit"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Build
            </CtaButton>
          </div>
        </nav>
      )}
    </header>
  );
}

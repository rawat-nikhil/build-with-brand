"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { CtaButton } from "@/components/marketing/cta-button";

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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-bg-dark/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between py-6">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/header.png"
            alt="Build with Brand"
            width={645}
            height={140}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <div className="flex justify-between gap-5">
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-2 text-sm font-medium transition-colors uppercase",
                    active
                      ? "text-brand-violet"
                      : "text-white/80 hover:text-white",
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-brand-violet" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <CtaButton href="/contact" size="sm">
              Let&apos;s Build
            </CtaButton>
          </div>

          <button
            type="button"
            className="text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-brand-bg-dark px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm font-medium",
                    active ? "text-brand-violet" : "text-white/80",
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

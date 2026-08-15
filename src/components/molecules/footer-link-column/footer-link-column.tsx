import type { ReactNode } from "react";
import Link from "next/link";

import type { NavLink } from "@/types";
import "./footer-link-column.scss";

interface FooterLinkColumnProps {
  title: string;
  /** Renders a list of navigable links. Omit and pass `children` for plain rows. */
  links?: NavLink[];
  children?: ReactNode;
}

export function FooterLinkColumn({ title, links, children }: FooterLinkColumnProps) {
  return (
    <div>
      <h3 className="footer-link-column__heading">{title}</h3>
      <ul className="footer-link-column__list">
        {links
          ? links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link-column__link">
                  {link.label}
                </Link>
              </li>
            ))
          : children}
      </ul>
    </div>
  );
}

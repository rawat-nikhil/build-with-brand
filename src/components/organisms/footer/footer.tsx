import Link from "next/link";

import { BrandLogo } from "@/components/atoms/brand-logo";
import { FooterLinkColumn } from "@/components/molecules/footer-link-column";
import { SocialLinks } from "@/components/molecules/social-links";
import { contacts } from "@/content/contacts";
import { legalLinks, navLinks } from "@/content/navigation";
import { services } from "@/content/services";
import { socials } from "@/content/socials";
import "./footer.scss";

const quickContacts = [contacts.email, contacts.phone, contacts.location];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <BrandLogo width={700} height={200} className="h-10" />
          <p className="footer__tagline">
            We help businesses and creators build digital products that are meaningful,
            functional and designed to grow.
          </p>
          <SocialLinks socials={socials} className="pt-1" />
        </div>

        <FooterLinkColumn title="Quick Links" links={navLinks} />

        <FooterLinkColumn title="Services">
          {services.map((service) => (
            <li key={service.title}>{service.title}</li>
          ))}
        </FooterLinkColumn>

        <FooterLinkColumn title="Contact">
          {quickContacts.map((item) => (
            <li key={item.label} className="footer__contact-item">
              <item.icon className="footer__contact-icon" />
              {item.value}
            </li>
          ))}
        </FooterLinkColumn>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p>© {new Date().getFullYear()} Build With Brand. All rights reserved.</p>
          <div className="footer__legal-links">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="footer__legal-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

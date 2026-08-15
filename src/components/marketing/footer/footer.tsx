import Image from "next/image";
import Link from "next/link";

import { services } from "@/lib/services";
import { socials } from "@/lib/socials";
import { contacts } from "@/lib/contacts";
import "./footer.scss";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function SocialIcon({ label, icon }: { label: string; icon: string }) {
  return (
    <span className="footer__social-btn">
      <Image
        src={icon}
        alt={label}
        width={20}
        height={20}
        className="footer__social-img"
      />
    </span>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <Link href="/" className="footer__logo-link">
            <Image
              src="/header.png"
              alt="Build with Brand"
              width={700}
              height={200}
              className="footer__logo"
            />
          </Link>
          <p className="footer__tagline">
            We help businesses and creators build digital products that are
            meaningful, functional and designed to grow.
          </p>
          <div className="footer__socials">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <SocialIcon label={social.label} icon={social.icon} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="footer__col-heading">Quick Links</h3>
          <ul className="footer__col-list">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer__col-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__col-heading">Services</h3>
          <ul className="footer__col-list">
            {services.map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__col-heading">Contact</h3>
          <ul className="footer__col-list">
            {[contacts.email, contacts.phone, contacts.location].map((item) => (
              <li key={item.label} className="footer__contact-item">
                <item.icon className="footer__contact-icon" />
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p>
            © {new Date().getFullYear()} Build With Brand. All rights reserved.
          </p>
          <div className="footer__legal-links">
            <a href="#" className="footer__legal-link">
              Privacy Policy
            </a>
            <a href="#" className="footer__legal-link">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

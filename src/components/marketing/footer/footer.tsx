import Image from "next/image";
import Link from "next/link";

import { services } from "@/lib/services";
import { socials } from "@/lib/socials";
import { contacts } from "@/lib/contacts";

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
    <span className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
      <Image
        src={icon}
        alt={label}
        width={20}
        height={20}
        className="size-4 object-contain brightness-0 invert"
      />
    </span>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-bg-dark text-white/70">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/header.png"
              alt="Build with Brand"
              width={700}
              height={200}
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-sm text-white/60">
            We help businesses and creators build digital products that are
            meaningful, functional and designed to grow.
          </p>
          <div className="flex gap-3 pt-1">
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
          <h3 className="text-sm font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Services</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {services.map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {[contacts.email, contacts.phone, contacts.location].map((item) => (
              <li key={item.label} className="flex items-center gap-2">
                <item.icon className="size-4 text-brand-violet" />
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-4 px-6 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Build With Brand. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

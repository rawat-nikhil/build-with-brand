import { Hero } from "@/components/marketing/hero";
import { CtaButton } from "@/components/marketing/cta-button";
import { HeroPaginationDots } from "@/components/marketing/hero-pagination-dots";

import "./home-hero.scss";

const AVATARS = [
  { initials: "GL", name: "Glow Lighting" },
  { initials: "TR", name: "The Toki Room" },
  { initials: "IL", name: "Invoice Ledger" },
  { initials: "KS", name: "KS Supertreats" },
];

export function HomeHero() {
  return (
    <Hero
      backgroundImage="/hero-banner.png"
      eyebrowNode={
        <span className="home-hero__eyebrow">
          <span className="home-hero__dot" />
          BUILD WITH PURPOSE. BRAND WITH IMPACT.
        </span>
      }
      title={
        <>
          We build digital experiences that build{" "}
          <span className="home-hero__accent">your brand.</span>
        </>
      }
      description="We help businesses and creators turn ideas into powerful digital products that are beautiful, fast and built to grow."
      actions={
        <>
          <CtaButton href="/services">Explore Services</CtaButton>
          <CtaButton href="/work" variant="outline-dark" icon={false}>
            View Our Work
          </CtaButton>
        </>
      }
      extra={
        <div className="home-hero__trusted">
          <div className="home-hero__avatars">
            {AVATARS.map(({ initials, name }) => (
              <span key={initials} className="home-hero__avatar" title={name}>
                {initials}
              </span>
            ))}
          </div>
          <p className="home-hero__trusted-text">
            Trusted by 50+ clients
            <br />
            worldwide
          </p>
        </div>
      }
      visual={<HeroPaginationDots />}
      className="min-h-128 pt-10"
    />
  );
}

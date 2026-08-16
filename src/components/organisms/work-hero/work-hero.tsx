import { Hero } from "@/components/organisms/hero";
import { CtaButton } from "@/components/atoms/cta-button";
import { FloatingSphere } from "@/components/atoms/floating-sphere";
import { FloatingGlassPanel } from "@/components/atoms/floating-glass-panel";

import "./work-hero.scss";

export function WorkHero() {
  return (
    <Hero
      eyebrow="Our Work"
      title={
        <>
          Ideas brought to life. Impact that{" "}
          <span className="work-hero__accent">lasts.</span>
        </>
      }
      description="We partner with ambitious businesses and creators to design and build digital products that solve real problems and drive meaningful growth."
      actions={<CtaButton href="/contact">Start Your Project</CtaButton>}
      visual={
        <div className="work-hero__visual">
          <FloatingGlassPanel
            width={150}
            height={110}
            delay={0.3}
            className="absolute top-4 left-4"
          />
          <FloatingGlassPanel
            width={140}
            height={100}
            delay={0.8}
            className="absolute right-2 bottom-8"
          />
          <FloatingSphere
            size={50}
            tone="violet"
            delay={1.2}
            className="absolute right-8 top-0"
          />
        </div>
      }
    />
  );
}

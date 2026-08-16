import { Hero } from "@/components/organisms/hero";
import { CtaButton } from "@/components/atoms/cta-button";
import { CubeCluster } from "@/components/molecules/cube-cluster";

import "./process-hero.scss";

export function ProcessHero() {
  return (
    <Hero
      eyebrow="Our Process"
      title={
        <>
          A proven process. Built for{" "}
          <span className="process-hero__accent">results.</span>
        </>
      }
      description="We follow a simple, transparent and collaborative process to turn your ideas into impactful digital products."
      actions={<CtaButton href="/contact">Start Your Project</CtaButton>}
      visual={<CubeCluster size={280} />}
    />
  );
}

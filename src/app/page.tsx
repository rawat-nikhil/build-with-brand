import { HomeHero } from "@/components/organisms/home-hero";
import { HomeServicesSection } from "@/components/organisms/home-services-section";
import { HomeProcessSection } from "@/components/organisms/home-process-section";
import { StatsBar } from "@/components/molecules/stats-bar";
import { CTASection } from "@/components/organisms/cta-section";
import { CtaButton } from "@/components/atoms/cta-button";
import { FloatingCube } from "@/components/atoms/floating-cube";
import { FloatingSphere } from "@/components/atoms/floating-sphere";
import { stats } from "@/content/stats";
import { processSteps } from "./constants";
import "./page.scss";

export { metadata } from "./constants";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeServicesSection />
      <HomeProcessSection steps={processSteps} />
      <StatsBar stats={stats} />
      <CTASection
        tone="gradient"
        title="Ready to build something amazing together?"
        description="Let's turn your ideas into powerful digital experiences that grow your brand."
        actions={
          <CtaButton href="/contact" variant="dark-solid">
            Start Your Project
          </CtaButton>
        }
        decor={
          <>
            <FloatingCube size={90} tone="dark" className="home-page__cta-cube" />
            <FloatingSphere
              size={70}
              tone="dark"
              delay={1}
              className="home-page__cta-sphere"
            />
          </>
        }
      />
    </>
  );
}

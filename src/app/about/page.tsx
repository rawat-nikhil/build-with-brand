import { AboutHero } from "@/components/organisms/about-hero";
import { AboutStorySection } from "@/components/organisms/about-story-section";
import { AboutValuesSection } from "@/components/organisms/about-values-section";
import { AboutTeamSection } from "@/components/organisms/about-team-section";
import { StatsBar } from "@/components/molecules/stats-bar";
import { CTASection } from "@/components/organisms/cta-section";
import { CtaButton } from "@/components/atoms/cta-button";
import { FloatingCube } from "@/components/atoms/floating-cube";
import { FloatingSphere } from "@/components/atoms/floating-sphere";
import { stats } from "@/content/stats";
import "./page.scss";

export { metadata } from "./constants";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StatsBar stats={stats} />
      <AboutStorySection />
      <AboutValuesSection />
      <AboutTeamSection />
      <CTASection
        tone="light"
        title={
          <>
            Let&apos;s build something amazing{" "}
            <span className="about-page__accent">together.</span>
          </>
        }
        description="Have a project in mind? Let's turn your ideas into powerful digital experiences."
        actions={<CtaButton href="/contact">Start Your Project</CtaButton>}
        decor={
          <>
            <FloatingCube size={70} tone="violet" className="about-page__cta-cube-1" />
            <FloatingSphere
              size={60}
              tone="violet"
              delay={1}
              className="about-page__cta-sphere-1"
            />
          </>
        }
      />
    </>
  );
}

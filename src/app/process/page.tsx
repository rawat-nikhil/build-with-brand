import { ProcessHero } from "@/components/organisms/process-hero";
import { ProcessExplorerSection } from "@/components/organisms/process-explorer-section";
import { ProcessWhySection } from "@/components/organisms/process-why-section";
import { CTASection } from "@/components/organisms/cta-section";
import { CtaButton } from "@/components/atoms/cta-button";
import { FloatingSphere } from "@/components/atoms/floating-sphere";
import "./page.scss";

export { metadata } from "./constants";

export default function ProcessPage() {
  return (
    <>
      <ProcessHero />
      <ProcessExplorerSection />
      <ProcessWhySection />
      <CTASection
        tone="dark"
        title="Ready to start your project?"
        description="Let's build something amazing together."
        actions={
          <>
            <CtaButton href="/contact">Let&apos;s Build</CtaButton>
            <CtaButton href="/contact" variant="outline-dark" icon={false}>
              Schedule a Call
            </CtaButton>
          </>
        }
        decor={
          <>
            <FloatingSphere
              size={70}
              tone="dark"
              className="process-page__cta-sphere-1"
            />
            <FloatingSphere
              size={50}
              tone="violet"
              delay={1}
              className="process-page__cta-sphere-2"
            />
          </>
        }
      />
    </>
  );
}

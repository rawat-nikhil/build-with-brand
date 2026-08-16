import { WorkHero } from "@/components/organisms/work-hero";
import { WorkProjectsSection } from "@/components/organisms/work-projects-section";
import { WorkProcessSection } from "@/components/organisms/work-process-section";
import { WorkClientsSection } from "@/components/organisms/work-clients-section";
import { CTASection } from "@/components/organisms/cta-section";
import { CtaButton } from "@/components/atoms/cta-button";
import { processSteps } from "./constants";

export { metadata } from "./constants";

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkProjectsSection />
      <WorkProcessSection steps={processSteps} />
      <WorkClientsSection />
      <CTASection
        tone="gradient"
        title="Have a project in mind?"
        description="Let's build something amazing together."
        actions={
          <CtaButton href="/contact" variant="dark-solid">
            Let&apos;s Build
          </CtaButton>
        }
      />
    </>
  );
}

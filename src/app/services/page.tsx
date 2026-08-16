import { Phone } from "lucide-react";

import { ServicesHero } from "@/components/organisms/services-hero";
import { ServicesListSection } from "@/components/organisms/services-list-section";
import { ServicesCapabilitiesSection } from "@/components/organisms/services-capabilities-section";
import { CTASection } from "@/components/organisms/cta-section";
import { CtaButton } from "@/components/atoms/cta-button";
import { FloatingCube } from "@/components/atoms/floating-cube";
import { FloatingSphere } from "@/components/atoms/floating-sphere";
import "./page.scss";

export { metadata } from "./constants";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesListSection />
      <ServicesCapabilitiesSection />
      <CTASection
        tone="gradient"
        title={
          <>
            Have a <span className="text-white/90">project</span> in mind?
          </>
        }
        description="Let's build something amazing together."
        actions={
          <>
            <CtaButton href="/contact" variant="dark-solid">
              Start Your Project
            </CtaButton>
            <CtaButton href="/contact" variant="outline-dark" icon={false}>
              <Phone className="size-4" />
              Schedule a Call
            </CtaButton>
          </>
        }
        decor={
          <>
            <FloatingSphere size={80} tone="dark" className="services-page__cta-sphere" />
            <FloatingCube
              size={90}
              tone="dark"
              delay={1}
              className="services-page__cta-cube"
            />
          </>
        }
      />
    </>
  );
}

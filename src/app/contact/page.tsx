import { Hero } from "@/components/marketing/hero";
import { IconInfoList } from "@/components/marketing/icon-info-list";
import { SplitFormSection } from "@/components/marketing/split-form-section";
import { MapCtaSection } from "@/components/marketing/map-cta-section";
import { FloatingPaperPlane } from "@/components/decor/floating-paper-plane";
import { FloatingSphere } from "@/components/decor/floating-sphere";
import { socials } from "@/lib/socials";
import { quickContacts, otherWays } from "./constants";
import "./page.scss";

export { metadata } from "./constants";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <Hero
        eyebrow="Let's Connect"
        title={
          <>
            Let&apos;s build something amazing{" "}
            <span className="contact-page__accent">together.</span>
          </>
        }
        description="Have a project in mind or just want to say hi? We'd love to hear from you."
        extra={<IconInfoList items={quickContacts} />}
        visual={
          <div className="contact-page__visual">
            <FloatingSphere
              size={70}
              tone="dark"
              className="absolute bottom-2 left-4"
            />
            <FloatingPaperPlane
              size={110}
              delay={0.4}
              className="absolute top-2 right-4"
            />
          </div>
        }
      />

      <SplitFormSection items={otherWays} socials={socials} />

      <MapCtaSection />
    </div>
  );
}

import { Hero } from "@/components/organisms/hero";
import { IconInfoList } from "@/components/molecules/icon-info-list";
import { SplitFormSection } from "@/components/organisms/split-form-section";
import { MapCtaSection } from "@/components/organisms/map-cta-section";
import { FloatingPaperPlane } from "@/components/atoms/floating-paper-plane";
import { FloatingSphere } from "@/components/atoms/floating-sphere";
import { socials } from "@/content/socials";
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
        extraFullWidth
        visual={
          <div className="contact-page__visual">
            <FloatingSphere size={70} tone="dark" className="absolute bottom-2 left-4" />
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

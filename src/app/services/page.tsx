import type { Metadata } from "next";
import { Cloud, Phone, Rocket, Settings, Target, TrendingUp } from "lucide-react";

import { Hero } from "@/components/marketing/hero";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { CtaButton } from "@/components/marketing/cta-button";
import { ServiceCard } from "@/components/marketing/service-card";
import { CTASection } from "@/components/marketing/cta-section";
import { FloatingCube } from "@/components/decor/floating-cube";
import { FloatingSphere } from "@/components/decor/floating-sphere";
import { services } from "@/lib/services";
import "./page.scss";

export const metadata: Metadata = {
  title: "Services — Build With Brand",
  description:
    "Digital solutions that drive real growth: websites, web applications, e-commerce and UI/UX design.",
};

const otherCapabilities = [
  {
    icon: Rocket,
    title: "Branding & Identity",
    description: "Build a brand that stands out and leaves a lasting impression.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Data-driven strategies to grow your reach and conversions.",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "Ongoing support and maintenance to keep your product at its best.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Reliable, scalable and secure infrastructure for your product.",
  },
];

function ServicesHeroVisual() {
  return (
    <div className="services-page__hero-visual">
      <FloatingCube size={150} tone="violet" duration={8} className="relative z-10" />
      <FloatingCube size={70} tone="dark" duration={7} delay={0.4} className="absolute bottom-4 left-2" />
      <FloatingCube size={60} tone="dark" duration={9} delay={1} className="absolute right-0 bottom-10" />
      <FloatingCube size={50} tone="dark" duration={10} delay={1.6} className="absolute top-2 right-6" />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Our Services"
        title={
          <>
            Digital solutions that drive <span className="services-page__accent">real growth.</span>
          </>
        }
        description="We design and build digital products that are modern, scalable and tailored to your business goals."
        visual={<ServicesHeroVisual />}
        extra={
          <div className="services-page__hero-extra">
            <div className="services-page__feature-item">
              <span className="services-page__feature-icon-wrap">
                <Target className="services-page__feature-icon" />
              </span>
              <div>
                <p className="services-page__feature-title">Strategy First</p>
                <p className="services-page__feature-desc">
                  We start with understanding your business and audience.
                </p>
              </div>
            </div>
            <div className="services-page__feature-item">
              <span className="services-page__feature-icon-wrap">
                <TrendingUp className="services-page__feature-icon" />
              </span>
              <div>
                <p className="services-page__feature-title">Results Driven</p>
                <p className="services-page__feature-desc">
                  Our solutions are built to deliver measurable impact.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <section className="services-page__main">
        <div className="services-page__main-inner">
          <div className="services-page__section-header">
            <div>
              <Eyebrow>What We Do</Eyebrow>
              <h2 className="services-page__section-heading">
                Services that power your <span className="services-page__accent">digital growth.</span>
              </h2>
            </div>
            <p className="services-page__section-desc">
              From stunning websites to powerful web applications, we provide end-to-end
              solutions to help your brand stand out and scale.
            </p>
          </div>

          <div className="services-page__services-grid">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                {...service}
                index={String(i + 1).padStart(2, "0")}
                href="/contact"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="services-page__other">
        <div className="services-page__other-inner">
          <div className="services-page__other-header">
            <div>
              <Eyebrow>Other Capabilities</Eyebrow>
              <h2 className="services-page__other-heading">More ways we can help</h2>
            </div>
            <CtaButton href="/contact" variant="outline-dark" size="sm">
              Discuss Your Project
            </CtaButton>
          </div>

          <div className="services-page__other-grid">
            {otherCapabilities.map((item) => (
              <div key={item.title} className="services-page__other-card">
                <span className="services-page__other-icon-wrap">
                  <item.icon className="services-page__other-icon" />
                </span>
                <h3 className="services-page__other-title">{item.title}</h3>
                <p className="services-page__other-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <FloatingCube size={90} tone="dark" delay={1} className="services-page__cta-cube" />
          </>
        }
      />
    </>
  );
}

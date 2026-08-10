import type { Metadata } from "next";
import {
  Cloud,
  Code,
  Monitor,
  Palette,
  Phone,
  Rocket,
  Settings,
  ShoppingCart,
  Target,
  TrendingUp,
} from "lucide-react";

import { Hero } from "@/components/marketing/hero";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { CtaButton } from "@/components/marketing/cta-button";
import { ServiceCard } from "@/components/marketing/service-card";
import { CTASection } from "@/components/marketing/cta-section";
import { FloatingCube } from "@/components/decor/floating-cube";
import { FloatingSphere } from "@/components/decor/floating-sphere";

export const metadata: Metadata = {
  title: "Services — Build With Brand",
  description:
    "Digital solutions that drive real growth: websites, web applications, e-commerce and UI/UX design.",
};

const detailedServices = [
  {
    icon: Monitor,
    index: "01",
    title: "Website Development",
    description: "Modern, responsive and fast websites that represent your brand perfectly.",
    bullets: [
      "Custom Business Websites",
      "Landing Pages",
      "CMS Development",
      "Performance Optimization",
    ],
  },
  {
    icon: Code,
    index: "02",
    title: "Web Applications",
    description: "Scalable and secure web applications built for performance and growth.",
    bullets: ["Custom Web Apps", "SaaS Development", "API Development", "Third-party Integrations"],
  },
  {
    icon: ShoppingCart,
    index: "03",
    title: "E-commerce Solutions",
    description: "High-converting online stores with seamless checkout and great user experience.",
    bullets: [
      "Shopify Development",
      "Custom E-commerce",
      "Payment Integration",
      "Store Optimization",
    ],
  },
  {
    icon: Palette,
    index: "04",
    title: "UI/UX Design",
    description: "Clean, intuitive and engaging designs that connect with your audience.",
    bullets: ["User Research", "Wireframing & Prototyping", "UI Design", "Design Systems"],
  },
];

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
    <div className="relative flex size-72 items-center justify-center">
      <FloatingCube size={150} tone="violet" duration={8} className="relative z-10" />
      <FloatingCube
        size={70}
        tone="dark"
        duration={7}
        delay={0.4}
        className="absolute bottom-4 left-2"
      />
      <FloatingCube
        size={60}
        tone="dark"
        duration={9}
        delay={1}
        className="absolute right-0 bottom-10"
      />
      <FloatingCube
        size={50}
        tone="dark"
        duration={10}
        delay={1.6}
        className="absolute top-2 right-6"
      />
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
            Digital solutions that drive <span className="text-brand-violet">real growth.</span>
          </>
        }
        description="We design and build digital products that are modern, scalable and tailored to your business goals."
        visual={<ServicesHeroVisual />}
        extra={
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-violet/10 text-brand-violet">
                <Target className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Strategy First</p>
                <p className="mt-1 text-sm text-white/50">
                  We start with understanding your business and audience.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-violet/10 text-brand-violet">
                <TrendingUp className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Results Driven</p>
                <p className="mt-1 text-sm text-white/50">
                  Our solutions are built to deliver measurable impact.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <section className="bg-brand-bg-light px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>What We Do</Eyebrow>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold text-brand-ink sm:text-4xl">
                Services that power your <span className="text-brand-violet">digital growth.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-brand-ink-secondary">
              From stunning websites to powerful web applications, we provide end-to-end
              solutions to help your brand stand out and scale.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {detailedServices.map((service) => (
              <ServiceCard key={service.title} {...service} href="/contact" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bg-dark px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>Other Capabilities</Eyebrow>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">More ways we can help</h2>
            </div>
            <CtaButton href="/contact" variant="outline-dark" size="sm">
              Discuss Your Project
            </CtaButton>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherCapabilities.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/3 p-6">
                <span className="flex size-11 items-center justify-center rounded-lg bg-brand-violet/10 text-brand-violet">
                  <item.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/50">{item.description}</p>
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
            <FloatingSphere size={80} tone="dark" className="absolute bottom-6 left-8 hidden md:block" />
            <FloatingCube size={90} tone="dark" delay={1} className="absolute right-10 bottom-4 hidden md:block" />
          </>
        }
      />
    </>
  );
}

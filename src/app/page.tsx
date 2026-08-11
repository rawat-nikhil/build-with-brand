import type { Metadata } from "next";
import { Code, Percent, Rocket, Search } from "lucide-react";

import { Hero } from "@/components/marketing/hero";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { CtaButton } from "@/components/marketing/cta-button";
import { ServiceCard } from "@/components/marketing/service-card";
import { ProcessSummary } from "@/components/marketing/process-summary";
import { StatsBar } from "@/components/marketing/stats-bar";
import { CTASection } from "@/components/marketing/cta-section";
import { HeroPaginationDots } from "@/components/marketing/hero-pagination-dots";
import { FloatingCube } from "@/components/decor/floating-cube";
import { FloatingSphere } from "@/components/decor/floating-sphere";
import { services } from "@/lib/services";
import { stats } from "@/lib/stats";

export const metadata: Metadata = {
  title: "Build With Brand — Digital Studio",
  description:
    "We build digital experiences that build your brand — websites, web apps, e-commerce and UI/UX design.",
};

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "We understand your goals, audience and requirements.",
  },
  {
    number: "02",
    icon: Percent,
    title: "Plan",
    description: "We create a strategy, wireframes and roadmap for your project.",
  },
  {
    number: "03",
    icon: Code,
    title: "Build",
    description: "We design, develop and bring your product to life.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "We launch successfully and stay with you for continuous support.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        backgroundImage="/hero-banner.png"
        eyebrowNode={
          <span className="mb-2 inline-flex w-fit items-center gap-2 border-white/15 py-1.5 text-xs text-white/70">
            <span className="size-1.5 rounded-full bg-brand-violet" />
            BUILD WITH PURPOSE. BRAND WITH IMPACT.
          </span>
        }
        title={
          <>
            We build digital experiences that build{" "}
            <span className="text-brand-violet">your brand.</span>
          </>
        }
        description="We help businesses and creators turn ideas into powerful digital products that are beautiful, fast and built to grow."
        actions={
          <>
            <CtaButton href="/services">Explore Services</CtaButton>
            <CtaButton href="/work" variant="outline-dark" icon={false}>
              View Our Work
            </CtaButton>
          </>
        }
        extra={
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-3">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="size-9 rounded-full border-2 border-brand-bg-dark bg-gradient-to-br from-white/30 to-white/5"
                />
              ))}
            </div>
            <p className="text-sm text-white/50">
              Trusted by 50+ clients
              <br />
              worldwide
            </p>
          </div>
        }
        visual={<HeroPaginationDots />}
        className="min-h-128 pt-10"
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
              From stunning websites to scalable web applications, we deliver end-to-end
              solutions tailored to your brand and business goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon, title, description }) => (
              <ServiceCard
                key={title}
                icon={icon}
                title={title}
                description={description}
                href="/services"
                linkLabel={title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>Our Process</Eyebrow>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold text-brand-ink sm:text-4xl">
                A proven process. Built for <span className="text-brand-violet">results.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-brand-ink-secondary">
              We follow a simple yet effective process to turn your ideas into impactful
              digital products.
            </p>
          </div>

          <ProcessSummary steps={processSteps} className="mt-16" />
        </div>
      </section>

      <StatsBar stats={stats} />

      <CTASection
        tone="gradient"
        title="Ready to build something amazing together?"
        description="Let's turn your ideas into powerful digital experiences that grow your brand."
        actions={<CtaButton href="/contact" variant="dark-solid">Start Your Project</CtaButton>}
        decor={
          <>
            <FloatingCube size={90} tone="dark" className="absolute bottom-4 left-6 hidden md:block" />
            <FloatingSphere size={70} tone="dark" delay={1} className="absolute right-8 bottom-6 hidden md:block" />
          </>
        }
      />
    </>
  );
}

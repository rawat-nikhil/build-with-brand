import type { Metadata } from "next";
import { Aperture, Circle, Code, Compass, Hexagon, Rocket, Search, Sparkle } from "lucide-react";

import { Hero } from "@/components/marketing/hero";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { CtaButton } from "@/components/marketing/cta-button";
import { ProcessSummary } from "@/components/marketing/process-summary";
import { CTASection } from "@/components/marketing/cta-section";
import { ProjectsGrid, type Project } from "@/components/marketing/projects-grid";
import { FloatingSphere } from "@/components/decor/floating-sphere";
import { FloatingGlassPanel } from "@/components/decor/floating-glass-panel";

export const metadata: Metadata = {
  title: "Work — Build With Brand",
  description: "Ideas brought to life. A selection of websites, apps and products we've built.",
};

const projects: Project[] = [
  {
    category: "E-commerce",
    title: "Glow Light",
    description: "Luxury lighting store with a seamless shopping experience.",
    accent: "amber",
  },
  {
    category: "Web Application",
    title: "Taskora",
    description: "Smart task management app for teams to plan, track and deliver more.",
    accent: "sky",
  },
  {
    category: "Web Application",
    title: "Finova",
    description: "AI-powered finance platform helping users manage and grow wealth.",
    accent: "violet",
  },
  {
    category: "Website",
    title: "Wanderly",
    description: "Travel discovery platform inspiring users to explore the world.",
    accent: "sky",
  },
  {
    category: "E-commerce",
    title: "Havenly",
    description: "Premium furniture store with elegant design and smooth checkout.",
    accent: "amber",
  },
  {
    category: "Website",
    title: "Studio Vertex",
    description: "Creative agency website built to showcase work and attract high-value clients.",
    accent: "emerald",
  },
];

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "We understand your goals, audience and requirements in depth.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Plan",
    description: "We create strategy, wireframes and roadmap for your project.",
  },
  {
    number: "03",
    icon: Code,
    title: "Build",
    description: "We design, develop and test with precision and clean code.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Grow",
    description: "We launch, optimize and support your product for long-term growth.",
  },
];

const clients = [
  { name: "Glow Light", icon: Circle },
  { name: "Taskora", icon: Hexagon },
  { name: "Finova", icon: Aperture },
  { name: "Wanderly", icon: Compass },
  { name: "Havenly", icon: Sparkle },
  { name: "Studio Vertex", icon: Hexagon },
];

export default function WorkPage() {
  return (
    <>
      <Hero
        eyebrow="Our Work"
        title={
          <>
            Ideas brought to life. Impact that <span className="text-brand-violet">lasts.</span>
          </>
        }
        description="We partner with ambitious businesses and creators to design and build digital products that solve real problems and drive meaningful growth."
        actions={<CtaButton href="/contact">Start Your Project</CtaButton>}
        visual={
          <div className="relative flex size-72 items-center justify-center">
            <FloatingGlassPanel width={150} height={110} delay={0.3} className="absolute top-4 left-4" />
            <FloatingGlassPanel width={140} height={100} delay={0.8} className="absolute right-2 bottom-8" />
            <FloatingSphere size={50} tone="violet" delay={1.2} className="absolute right-8 top-0" />
          </div>
        }
      />

      <section className="bg-brand-bg-dark px-6 pb-20 text-white">
        <div className="mx-auto max-w-7xl">
          <ProjectsGrid projects={projects} />
        </div>
      </section>

      <section className="bg-brand-bg-light px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-sm">
              <Eyebrow>Our Approach</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold text-brand-ink">
                A proven process. Built for <span className="text-brand-violet">results.</span>
              </h2>
              <p className="mt-4 text-sm text-brand-ink-secondary">
                We follow a structured approach to turn ideas into impactful digital products.
              </p>
              <CtaButton href="/process" variant="outline-light" size="sm" className="mt-6">
                Our Process
              </CtaButton>
            </div>
            <ProcessSummary steps={processSteps} className="flex-1" />
          </div>
        </div>
      </section>

      <section className="bg-brand-bg-dark px-6 py-14 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
            Trusted by businesses and creators worldwide
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clients.map((client) => (
              <div key={client.name} className="flex items-center gap-2 text-white/40">
                <client.icon className="size-4" />
                <span className="text-sm font-medium">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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

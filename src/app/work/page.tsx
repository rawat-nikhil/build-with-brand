import type { Metadata } from "next";
import {
  Aperture,
  Circle,
  Code,
  Compass,
  Hexagon,
  Rocket,
  Search,
  Sparkle,
} from "lucide-react";

import { Hero } from "@/components/organisms/hero";
import { Eyebrow } from "@/components/atoms/eyebrow";
import { CtaButton } from "@/components/atoms/cta-button";
import { ProcessSummary } from "@/components/molecules/process-summary";
import { CTASection } from "@/components/organisms/cta-section";
import { ProjectsGrid } from "@/components/organisms/projects-grid";
import type { Project } from "@/types";
import { FloatingSphere } from "@/components/atoms/floating-sphere";
import { FloatingGlassPanel } from "@/components/atoms/floating-glass-panel";
import "./page.scss";

export const metadata: Metadata = {
  title: "Work — Build With Brand",
  description:
    "Ideas brought to life. A selection of websites, apps and products we've built.",
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
    description:
      "Creative agency website built to showcase work and attract high-value clients.",
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
            Ideas brought to life. Impact that{" "}
            <span className="work-page__accent">lasts.</span>
          </>
        }
        description="We partner with ambitious businesses and creators to design and build digital products that solve real problems and drive meaningful growth."
        actions={<CtaButton href="/contact">Start Your Project</CtaButton>}
        visual={
          <div className="work-page__hero-visual">
            <FloatingGlassPanel
              width={150}
              height={110}
              delay={0.3}
              className="absolute top-4 left-4"
            />
            <FloatingGlassPanel
              width={140}
              height={100}
              delay={0.8}
              className="absolute right-2 bottom-8"
            />
            <FloatingSphere
              size={50}
              tone="violet"
              delay={1.2}
              className="absolute right-8 top-0"
            />
          </div>
        }
      />

      <section className="work-page__projects">
        <div className="work-page__projects-inner">
          <ProjectsGrid projects={projects} />
        </div>
      </section>

      <section className="work-page__process">
        <div className="work-page__process-inner">
          <div className="work-page__process-layout">
            <div className="work-page__process-text">
              <Eyebrow>Our Approach</Eyebrow>
              <h2 className="work-page__process-heading">
                A proven process. Built for{" "}
                <span className="work-page__accent">results.</span>
              </h2>
              <p className="work-page__process-desc">
                We follow a structured approach to turn ideas into impactful digital
                products.
              </p>
              <CtaButton
                href="/process"
                variant="outline-light"
                size="sm"
                className="work-page__process-cta"
              >
                Our Process
              </CtaButton>
            </div>
            <ProcessSummary steps={processSteps} className="work-page__process-summary" />
          </div>
        </div>
      </section>

      <section className="work-page__clients">
        <div className="work-page__clients-inner">
          <p className="work-page__clients-label">
            Trusted by businesses and creators worldwide
          </p>
          <div className="work-page__clients-list">
            {clients.map((client) => (
              <div key={client.name} className="work-page__client-item">
                <client.icon className="work-page__client-icon" />
                <span className="work-page__client-name">{client.name}</span>
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

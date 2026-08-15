import type { Metadata } from "next";
import { Code, Compass, FlaskConical, Palette, Rocket, Search, ShieldCheck, Target, TrendingUp, Users } from "lucide-react";

import { Hero } from "@/components/marketing/hero";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { CtaButton } from "@/components/marketing/cta-button";
import { CTASection } from "@/components/marketing/cta-section";
import { ProcessExplorer, type ProcessStepData } from "@/components/marketing/process-explorer";
import { CubeCluster } from "@/components/decor/cube-cluster";
import { FloatingSphere } from "@/components/decor/floating-sphere";
import "./page.scss";

export const metadata: Metadata = {
  title: "Process — Build With Brand",
  description: "A proven, transparent process — from discovery to launch and growth.",
};

const steps: ProcessStepData[] = [
  {
    index: "01",
    icon: <Search className="size-4" />,
    iconLarge: <Search className="size-12 text-brand-violet/40" />,
    title: "Discover",
    summary: "We understand your goals, audience and requirements in depth.",
    description:
      "Every successful project starts with a deep understanding. We listen, research and analyze to uncover the real problem and opportunity.",
    bullets: [
      "Stakeholder interviews",
      "Market & competitor research",
      "Define goals and success metrics",
      "Scope and requirement gathering",
    ],
    timeline: "1 – 2 Weeks",
  },
  {
    index: "02",
    icon: <Compass className="size-4" />,
    iconLarge: <Compass className="size-12 text-brand-violet/40" />,
    title: "Plan",
    summary: "We create a strategy, wireframes and roadmap tailored to your project.",
    description:
      "We translate insights into an actionable plan — mapping the strategy, information architecture and project roadmap.",
    bullets: ["Strategy & roadmap", "Information architecture", "Wireframing", "Timeline & milestones"],
    timeline: "1 Week",
  },
  {
    index: "03",
    icon: <Palette className="size-4" />,
    iconLarge: <Palette className="size-12 text-brand-violet/40" />,
    title: "Design",
    summary: "We design intuitive, engaging and pixel-perfect experiences.",
    description:
      "We craft interfaces that are as beautiful as they are usable, iterating closely with you at every step.",
    bullets: ["UI design", "Interactive prototypes", "Design system", "Usability review"],
    timeline: "2 – 3 Weeks",
  },
  {
    index: "04",
    icon: <Code className="size-4" />,
    iconLarge: <Code className="size-12 text-brand-violet/40" />,
    title: "Develop",
    summary: "We build robust, scalable and secure solutions with clean code.",
    description:
      "Our engineers turn designs into fast, reliable and maintainable products using modern best practices.",
    bullets: ["Frontend & backend development", "API integrations", "Code reviews", "Performance optimization"],
    timeline: "3 – 6 Weeks",
  },
  {
    index: "05",
    icon: <FlaskConical className="size-4" />,
    iconLarge: <FlaskConical className="size-12 text-brand-violet/40" />,
    title: "Test",
    summary: "We ensure everything works flawlessly across devices and browsers.",
    description:
      "We rigorously test functionality, performance and accessibility before anything ships.",
    bullets: ["Cross-browser testing", "QA & bug fixing", "Performance audits", "Accessibility checks"],
    timeline: "1 Week",
  },
  {
    index: "06",
    icon: <Rocket className="size-4" />,
    iconLarge: <Rocket className="size-12 text-brand-violet/40" />,
    title: "Launch & Grow",
    summary: "We deploy your product and support you to grow and scale.",
    description:
      "We handle a smooth launch and stick around to help you measure, iterate and grow.",
    bullets: ["Deployment & monitoring", "Analytics setup", "Ongoing support", "Growth iterations"],
    timeline: "Ongoing",
  },
];

const whyItWorks = [
  {
    icon: Users,
    title: "Collaborative",
    description: "We work closely with you at every step.",
  },
  {
    icon: Target,
    title: "Transparent",
    description: "Clear communication and real-time updates.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Focused",
    description: "High standards in design, development and testing.",
  },
  {
    icon: TrendingUp,
    title: "Results Driven",
    description: "Focused on delivering impact and measurable results.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Hero
        eyebrow="Our Process"
        title={
          <>
            A proven process. Built for <span className="process-page__accent">results.</span>
          </>
        }
        description="We follow a simple, transparent and collaborative process to turn your ideas into impactful digital products."
        actions={<CtaButton href="/contact">Start Your Project</CtaButton>}
        visual={<CubeCluster size={280} />}
      />

      <section className="process-page__explorer">
        <div className="process-page__explorer-inner">
          <div className="process-page__explorer-header">
            <Eyebrow className="process-page__explorer-eyebrow">How We Work</Eyebrow>
            <h2 className="process-page__explorer-heading">
              From idea to impact, <span className="process-page__accent">step by step.</span>
            </h2>
            <p className="process-page__explorer-desc">
              Our structured approach ensures clarity, quality and consistency at every stage of
              your project.
            </p>
          </div>

          <div className="process-page__explorer-content">
            <ProcessExplorer steps={steps} />
          </div>
        </div>
      </section>

      <section className="process-page__why">
        <div className="process-page__why-inner">
          <div className="process-page__why-header">
            <Eyebrow className="process-page__why-eyebrow">Why Our Process Works</Eyebrow>
            <h2 className="process-page__why-heading">
              Designed for clarity. Built for <span className="process-page__accent">success.</span>
            </h2>
            <p className="process-page__why-desc">
              Our process is collaborative, agile and transparent — keeping you informed and
              involved from start to finish.
            </p>
          </div>

          <div className="process-page__why-grid">
            {whyItWorks.map((item) => (
              <div key={item.title} className="process-page__why-card">
                <span className="process-page__why-icon-wrap">
                  <item.icon className="process-page__why-icon" />
                </span>
                <h3 className="process-page__why-title">{item.title}</h3>
                <p className="process-page__why-desc-text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <FloatingSphere size={70} tone="dark" className="process-page__cta-sphere-1" />
            <FloatingSphere size={50} tone="violet" delay={1} className="process-page__cta-sphere-2" />
          </>
        }
      />
    </>
  );
}

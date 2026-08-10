import type { Metadata } from "next";
import { Code, Compass, FlaskConical, Palette, Rocket, Search, ShieldCheck, Target, TrendingUp, Users } from "lucide-react";

import { Hero } from "@/components/marketing/hero";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { CtaButton } from "@/components/marketing/cta-button";
import { CTASection } from "@/components/marketing/cta-section";
import { ProcessExplorer, type ProcessStepData } from "@/components/marketing/process-explorer";
import { CubeCluster } from "@/components/decor/cube-cluster";
import { FloatingSphere } from "@/components/decor/floating-sphere";

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
            A proven process. Built for <span className="text-brand-violet">results.</span>
          </>
        }
        description="We follow a simple, transparent and collaborative process to turn your ideas into impactful digital products."
        actions={<CtaButton href="/contact">Start Your Project</CtaButton>}
        visual={<CubeCluster size={280} />}
      />

      <section className="bg-brand-bg-light px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="text-center">How We Work</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold text-brand-ink sm:text-4xl">
              From idea to impact, <span className="text-brand-violet">step by step.</span>
            </h2>
            <p className="mt-4 text-sm text-brand-ink-secondary">
              Our structured approach ensures clarity, quality and consistency at every stage of
              your project.
            </p>
          </div>

          <div className="mt-14">
            <ProcessExplorer steps={steps} />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="text-center">Why Our Process Works</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold text-brand-ink sm:text-4xl">
              Designed for clarity. Built for <span className="text-brand-violet">success.</span>
            </h2>
            <p className="mt-4 text-sm text-brand-ink-secondary">
              Our process is collaborative, agile and transparent — keeping you informed and
              involved from start to finish.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyItWorks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-black/5 p-6 text-center">
                <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-brand-violet/10 text-brand-violet">
                  <item.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-ink-secondary">{item.description}</p>
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
            <FloatingSphere size={70} tone="dark" className="absolute bottom-8 left-10 hidden md:block" />
            <FloatingSphere size={50} tone="violet" delay={1} className="absolute top-10 right-16 hidden md:block" />
          </>
        }
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gem, Play, ShieldCheck, Users, Zap } from "lucide-react";

import { Hero } from "@/components/marketing/hero";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { CtaButton } from "@/components/marketing/cta-button";
import { StatsBar } from "@/components/marketing/stats-bar";
import { TeamCard } from "@/components/marketing/team-card";
import { CTASection } from "@/components/marketing/cta-section";
import { FloatingCube } from "@/components/decor/floating-cube";
import { FloatingSphere } from "@/components/decor/floating-sphere";
import { FloatingGlassPanel } from "@/components/decor/floating-glass-panel";
import { stats } from "@/lib/stats";

export const metadata: Metadata = {
  title: "About — Build With Brand",
  description:
    "We're a digital studio helping businesses and creators build meaningful, functional digital products.",
};

const values = [
  {
    icon: Gem,
    title: "Quality First",
    description: "We never compromise on quality. Every pixel, every line of code matters.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Your goals are our goals. We work closely with you to deliver real results.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We embrace new ideas and technologies to create better solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Honesty and transparency build trust, and trust builds lasting relationships.",
  },
];

const team = [
  { name: "Nikhil Rawat", role: "Founder & CEO" },
  { name: "Aastha Negi", role: "UI/UX Designer" },
  { name: "Ankit Bisht", role: "Full Stack Developer" },
  { name: "Mayank Joshi", role: "Front End Developer" },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Us"
        title={
          <>
            We build digital experiences that build{" "}
            <span className="text-brand-violet">your brand.</span>
          </>
        }
        description="Build With Brand is a digital studio helping businesses and creators turn ideas into powerful digital products that are meaningful, functional and designed to grow."
        actions={
          <Link
            href="/about#team"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 py-2 pr-5 pl-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-white text-brand-ink">
              <Play className="size-3.5 fill-current" />
            </span>
            Meet The Team
          </Link>
        }
        visual={
          <div className="relative flex size-72 items-center justify-center">
            <FloatingGlassPanel width={130} height={170} delay={0.4} className="absolute top-6 left-0" />
            <FloatingCube size={170} tone="dark" className="absolute right-0 bottom-0" />
            <FloatingSphere size={60} tone="violet" delay={1} className="absolute top-0 right-10" />
          </div>
        }
      />

      <StatsBar stats={stats} />

      <section className="bg-brand-bg-light px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold text-brand-ink sm:text-4xl">
              How it all <span className="text-brand-violet">started.</span>
            </h2>
            <p className="mt-6 text-sm text-brand-ink-secondary">
              Build With Brand started with a simple belief — great design and technology can
              transform businesses.
            </p>
            <p className="mt-4 text-sm text-brand-ink-secondary">
              What began as a small team of passionate developers and designers has grown into a
              digital studio trusted by brands across the globe.
            </p>
            <Link
              href="/work"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-violet hover:underline"
            >
              Our Journey
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-bg-dark via-[#171223] to-black">
            <p className="px-6 text-center text-2xl leading-tight font-semibold text-white/80 sm:text-3xl">
              BUILD
              <br />
              WITH
              <br />
              PURPOSE.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>Our Values</Eyebrow>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold text-brand-ink sm:text-4xl">
                The principles that guide <span className="text-brand-violet">everything</span> we
                do.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-brand-ink-secondary">
              These values shape our decisions, our work and the relationships we build.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-violet/10 text-brand-violet">
                  <value.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-brand-ink">{value.title}</h3>
                <p className="mt-2 text-sm text-brand-ink-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="bg-brand-bg-dark px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>Our Team</Eyebrow>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold sm:text-4xl">
                A team of builders, thinkers and <span className="text-brand-violet">creators.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-white/50">
              We&apos;re a tight-knit team of designers, developers and strategists who love what
              we do and take pride in what we build.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <CtaButton href="/contact" variant="outline-dark" size="sm">
              Join Our Team
            </CtaButton>
          </div>
        </div>
      </section>

      <CTASection
        tone="light"
        title={
          <>
            Let&apos;s build something amazing <span className="text-brand-violet">together.</span>
          </>
        }
        description="Have a project in mind? Let's turn your ideas into powerful digital experiences."
        actions={<CtaButton href="/contact">Start Your Project</CtaButton>}
        decor={
          <>
            <FloatingCube size={70} tone="violet" className="absolute bottom-8 left-10 hidden md:block" />
            <FloatingSphere size={60} tone="violet" delay={1} className="absolute top-10 right-14 hidden md:block" />
          </>
        }
      />
    </>
  );
}

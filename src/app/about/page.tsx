import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gem, Play, ShieldCheck, Users, Zap } from "lucide-react";

import { Hero } from "@/components/organisms/hero";
import { Eyebrow } from "@/components/atoms/eyebrow";
import { CtaButton } from "@/components/atoms/cta-button";
import { StatsBar } from "@/components/molecules/stats-bar";
import { TeamCard } from "@/components/molecules/team-card";
import { CTASection } from "@/components/organisms/cta-section";
import { FloatingCube } from "@/components/atoms/floating-cube";
import { FloatingSphere } from "@/components/atoms/floating-sphere";
import { FloatingGlassPanel } from "@/components/atoms/floating-glass-panel";
import { stats } from "@/content/stats";
import "./page.scss";

export const metadata: Metadata = {
  title: "About — Build With Brand",
  description:
    "We're a digital studio helping businesses and creators build meaningful, functional digital products.",
};

const values = [
  {
    icon: Gem,
    title: "Quality First",
    description:
      "We never compromise on quality. Every pixel, every line of code matters.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description:
      "Your goals are our goals. We work closely with you to deliver real results.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We embrace new ideas and technologies to create better solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Honesty and transparency build trust, and trust builds lasting relationships.",
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
            <span className="about-page__accent">your brand.</span>
          </>
        }
        description="Build With Brand is a digital studio helping businesses and creators turn ideas into powerful digital products that are meaningful, functional and designed to grow."
        actions={
          <Link href="/about#team" className="about-page__hero-action">
            <span className="about-page__hero-action-icon">
              <Play className="about-page__hero-play-icon" />
            </span>
            Meet The Team
          </Link>
        }
        visual={
          <div className="about-page__hero-visual">
            <FloatingGlassPanel
              width={130}
              height={170}
              delay={0.4}
              className="absolute top-6 left-0"
            />
            <FloatingCube size={170} tone="dark" className="absolute right-0 bottom-0" />
            <FloatingSphere
              size={60}
              tone="violet"
              delay={1}
              className="absolute top-0 right-10"
            />
          </div>
        }
      />

      <StatsBar stats={stats} />

      <section className="about-page__story">
        <div className="about-page__story-inner">
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="about-page__story-heading">
              How it all <span className="about-page__accent">started.</span>
            </h2>
            <p className="about-page__story-body">
              Build With Brand started with a simple belief — great design and technology
              can transform businesses.
            </p>
            <p className="about-page__story-body-2">
              What began as a small team of passionate developers and designers has grown
              into a digital studio trusted by brands across the globe.
            </p>
            <Link href="/work" className="about-page__story-link">
              Our Journey
              <ArrowRight className="about-page__story-link-icon" />
            </Link>
          </div>
          <div className="about-page__story-visual">
            <p className="about-page__story-visual-text">
              BUILD
              <br />
              WITH
              <br />
              PURPOSE.
            </p>
          </div>
        </div>
      </section>

      <section className="about-page__values">
        <div className="about-page__values-inner">
          <div className="about-page__section-header">
            <div>
              <Eyebrow>Our Values</Eyebrow>
              <h2 className="about-page__section-heading">
                The principles that guide{" "}
                <span className="about-page__accent">everything</span> we do.
              </h2>
            </div>
            <p className="about-page__section-desc">
              These values shape our decisions, our work and the relationships we build.
            </p>
          </div>

          <div className="about-page__values-grid">
            {values.map((value) => (
              <div key={value.title} className="about-page__value-card">
                <span className="about-page__value-icon-wrap">
                  <value.icon className="about-page__value-icon" />
                </span>
                <h3 className="about-page__value-title">{value.title}</h3>
                <p className="about-page__value-desc">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="about-page__team">
        <div className="about-page__team-inner">
          <div className="about-page__team-header">
            <div>
              <Eyebrow>Our Team</Eyebrow>
              <h2 className="about-page__team-heading">
                A team of builders, thinkers and{" "}
                <span className="about-page__accent">creators.</span>
              </h2>
            </div>
            <p className="about-page__team-desc">
              We&apos;re a tight-knit team of designers, developers and strategists who
              love what we do and take pride in what we build.
            </p>
          </div>

          <div className="about-page__team-grid">
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>

          <div className="about-page__team-cta">
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
            Let&apos;s build something amazing{" "}
            <span className="about-page__accent">together.</span>
          </>
        }
        description="Have a project in mind? Let's turn your ideas into powerful digital experiences."
        actions={<CtaButton href="/contact">Start Your Project</CtaButton>}
        decor={
          <>
            <FloatingCube size={70} tone="violet" className="about-page__cta-cube-1" />
            <FloatingSphere
              size={60}
              tone="violet"
              delay={1}
              className="about-page__cta-sphere-1"
            />
          </>
        }
      />
    </>
  );
}

import { Target, TrendingUp } from "lucide-react";

import { Hero } from "@/components/organisms/hero";
import { FloatingCube } from "@/components/atoms/floating-cube";

import "./services-hero.scss";

function ServicesHeroVisual() {
  return (
    <div className="services-hero__visual">
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

export function ServicesHero() {
  return (
    <Hero
      eyebrow="Our Services"
      title={
        <>
          Digital solutions that drive{" "}
          <span className="services-hero__accent">real growth.</span>
        </>
      }
      description="We design and build digital products that are modern, scalable and tailored to your business goals."
      visual={<ServicesHeroVisual />}
      extra={
        <div className="services-hero__extra">
          <div className="services-hero__feature-item">
            <span className="services-hero__feature-icon-wrap">
              <Target className="services-hero__feature-icon" />
            </span>
            <div>
              <p className="services-hero__feature-title">Strategy First</p>
              <p className="services-hero__feature-desc">
                We start with understanding your business and audience.
              </p>
            </div>
          </div>
          <div className="services-hero__feature-item">
            <span className="services-hero__feature-icon-wrap">
              <TrendingUp className="services-hero__feature-icon" />
            </span>
            <div>
              <p className="services-hero__feature-title">Results Driven</p>
              <p className="services-hero__feature-desc">
                Our solutions are built to deliver measurable impact.
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
}

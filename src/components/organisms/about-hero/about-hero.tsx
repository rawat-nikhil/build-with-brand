import Link from "next/link";
import { Play } from "lucide-react";

import { Hero } from "@/components/organisms/hero";
import { FloatingCube } from "@/components/atoms/floating-cube";
import { FloatingSphere } from "@/components/atoms/floating-sphere";
import { FloatingGlassPanel } from "@/components/atoms/floating-glass-panel";

import "./about-hero.scss";

export function AboutHero() {
  return (
    <Hero
      eyebrow="About Us"
      title={
        <>
          We build digital experiences that build{" "}
          <span className="about-hero__accent">your brand.</span>
        </>
      }
      description="Build With Brand is a digital studio helping businesses and creators turn ideas into powerful digital products that are meaningful, functional and designed to grow."
      actions={
        <Link href="/about#team" className="about-hero__action">
          <span className="about-hero__action-icon">
            <Play className="about-hero__play-icon" />
          </span>
          Meet The Team
        </Link>
      }
      visual={
        <div className="about-hero__visual">
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
  );
}

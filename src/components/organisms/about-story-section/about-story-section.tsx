import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Eyebrow } from "@/components/atoms/eyebrow";

import "./about-story-section.scss";

export function AboutStorySection() {
  return (
    <section className="about-story-section">
      <div className="about-story-section__inner">
        <div>
          <Eyebrow>Our Story</Eyebrow>
          <h2 className="about-story-section__heading">
            How it all <span className="about-story-section__accent">started.</span>
          </h2>
          <p className="about-story-section__body">
            Build With Brand started with a simple belief — great design and technology
            can transform businesses.
          </p>
          <p className="about-story-section__body-2">
            What began as a small team of passionate developers and designers has grown
            into a digital studio trusted by brands across the globe.
          </p>
          <Link href="/work" className="about-story-section__link">
            Our Journey
            <ArrowRight className="about-story-section__link-icon" />
          </Link>
        </div>
        <div className="about-story-section__visual">
          <p className="about-story-section__visual-text">
            BUILD
            <br />
            WITH
            <br />
            PURPOSE.
          </p>
        </div>
      </div>
    </section>
  );
}

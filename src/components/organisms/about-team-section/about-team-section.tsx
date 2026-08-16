import { Eyebrow } from "@/components/atoms/eyebrow";
import { CtaButton } from "@/components/atoms/cta-button";
import { TeamCard } from "@/components/molecules/team-card";
import { team } from "@/content/team";

import "./about-team-section.scss";

export function AboutTeamSection() {
  return (
    <section id="team" className="about-team-section">
      <div className="about-team-section__inner">
        <div className="about-team-section__header">
          <div>
            <Eyebrow>Our Team</Eyebrow>
            <h2 className="about-team-section__heading">
              A team of builders, thinkers and{" "}
              <span className="about-team-section__accent">creators.</span>
            </h2>
          </div>
          <p className="about-team-section__desc">
            We&apos;re a tight-knit team of designers, developers and strategists who love
            what we do and take pride in what we build.
          </p>
        </div>

        <div className="about-team-section__grid">
          {team.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>

        <div className="about-team-section__cta">
          <CtaButton href="/contact" variant="outline-dark" size="sm">
            Join Our Team
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

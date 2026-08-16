"use client";

import { useCallback, useEffect, useState } from "react";

import { Eyebrow } from "@/components/atoms/eyebrow";
import { CtaButton } from "@/components/atoms/cta-button";
import { TeamCard } from "@/components/molecules/team-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { team } from "@/content/team";

import "./about-team-section.scss";

export function AboutTeamSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback((embla: CarouselApi) => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api.off("reInit", onSelect);
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

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

        <Carousel
          className="about-team-section__carousel"
          opts={{ align: "start", loop: false }}
          setApi={setApi}
        >
          <CarouselContent className="about-team-section__track">
            {team.map((member) => (
              <CarouselItem
                key={member.name}
                className="about-team-section__slide basis-[80%] sm:basis-1/2 lg:basis-1/4"
              >
                <TeamCard {...member} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="about-team-section__arrow" />
          <CarouselNext className="about-team-section__arrow" />
        </Carousel>

        <div className="about-team-section__dots">
          {team.map((member, index) => (
            <button
              key={member.name}
              type="button"
              className={
                index === selected
                  ? "about-team-section__dot about-team-section__dot--active"
                  : "about-team-section__dot"
              }
              aria-label={`Go to ${member.name}`}
              aria-current={index === selected || undefined}
              onClick={() => api?.scrollTo(index)}
            />
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

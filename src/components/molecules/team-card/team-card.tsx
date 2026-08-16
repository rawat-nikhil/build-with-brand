import Image from "next/image";

import "./team-card.scss";

interface TeamCardProps {
  name: string;
  role: string;
  photo?: string;
  linkedinHref?: string;
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TeamCard({ name, role, photo, linkedinHref = "#" }: TeamCardProps) {
  return (
    <div className="team-card group">
      <div className="team-card__visual">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 25vw"
            className="team-card__photo"
          />
        ) : (
          initials(name)
        )}
      </div>
      <div className="team-card__overlay">
        <div>
          <p className="team-card__name">{name}</p>
          <p className="team-card__role">{role}</p>
        </div>
        <a
          href={linkedinHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`${name} on LinkedIn`}
          className="team-card__linkedin"
        >
          in
        </a>
      </div>
    </div>
  );
}

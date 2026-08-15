import "./team-card.scss";

interface TeamCardProps {
  name: string;
  role: string;
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

export function TeamCard({ name, role, linkedinHref = "#" }: TeamCardProps) {
  return (
    <div className="team-card group">
      <div className="team-card__visual">{initials(name)}</div>
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

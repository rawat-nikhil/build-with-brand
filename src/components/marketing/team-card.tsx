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
    <div className="group relative overflow-hidden rounded-2xl bg-white/5">
      <div className="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-white/15 via-white/5 to-transparent text-4xl font-semibold text-white/25 transition-all duration-300 group-hover:grayscale-0">
        {initials(name)}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/85 to-transparent p-4 pt-10">
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-white/60">{role}</p>
        </div>
        <a
          href={linkedinHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`${name} on LinkedIn`}
          className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-[0.65rem] font-semibold text-white transition-colors hover:bg-brand-violet"
        >
          in
        </a>
      </div>
    </div>
  );
}

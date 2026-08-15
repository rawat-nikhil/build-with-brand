import { SocialIcon } from "@/components/atoms/social-icon";
import { cn } from "@/lib/utils";
import type { Social } from "@/types";
import "./social-links.scss";

export function SocialLinks({
  socials,
  className,
}: {
  socials: Social[];
  className?: string;
}) {
  return (
    <div className={cn("social-links", className)}>
      {socials.map((social) => (
        <SocialIcon key={social.label} {...social} />
      ))}
    </div>
  );
}

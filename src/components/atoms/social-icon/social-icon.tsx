import Image from "next/image";

import type { Social } from "@/types";
import "./social-icon.scss";

export function SocialIcon({ label, href, icon }: Social) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="social-icon"
    >
      <Image
        src={icon}
        alt={label}
        width={20}
        height={20}
        className="social-icon__image"
      />
    </a>
  );
}

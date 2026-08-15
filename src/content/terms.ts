import type { LegalDocument } from "@/types";

import { contacts } from "./contacts";

export const terms: LegalDocument = {
  title: "Terms & Conditions",
  description:
    "These terms govern your use of the Build With Brand website. By using the site, you agree to them.",
  lastUpdated: "15 August 2026",
  sections: [
    {
      heading: "Agreement",
      paragraphs: [
        "These terms apply to the public website operated by Build With Brand, a digital studio based in India. If you do not agree, please do not use the site.",
      ],
    },
    {
      heading: "Use of the website",
      paragraphs: [
        "You may browse the site for information about our studio and services. You agree not to misuse the site, attempt to disrupt it, or use it for unlawful purposes.",
        "Content on the site is for general information. It is not a proposal, quote, or contract unless we say so in writing.",
      ],
    },
    {
      heading: "Enquiries and services",
      paragraphs: [
        "Submitting the contact form is an enquiry, not a booking. Any design, development, or other work is provided only under a separate written agreement that sets scope, fees, and timelines.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "The site’s text, layout, branding, and other materials belong to Build With Brand or their respective owners. You may not copy, republish, or reuse them without permission, except for personal, non-commercial viewing.",
      ],
    },
    {
      heading: "No warranty",
      paragraphs: [
        "The site is provided as-is. We do not warrant that it will always be available, error-free, or current. We may change or withdraw content at any time.",
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        "To the extent permitted by law, Build With Brand is not liable for any loss arising from your use of, or inability to use, this website. This does not limit liability that cannot be excluded under applicable law.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of India. Courts in India have exclusive jurisdiction over disputes arising from the site or these terms.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [`Questions about these terms can be sent to ${contacts.email.value}.`],
    },
  ],
};

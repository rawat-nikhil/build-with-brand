import type { LegalDocument } from "@/types";

import { contacts } from "./contacts";

export const privacy: LegalDocument = {
  title: "Privacy Policy",
  description:
    "This policy explains what information we collect when you use the Build With Brand website, how we use it, and how to reach us.",
  lastUpdated: "15 August 2026",
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        "Build With Brand is a digital studio based in India. We design and build digital products for businesses and creators.",
        `Questions about this policy can be sent to ${contacts.email.value}.`,
      ],
    },
    {
      heading: "Information we collect",
      paragraphs: [
        "If you use the contact form on this site, we ask for the details needed to reply to your enquiry:",
      ],
      bullets: [
        "Your name",
        "Your email address",
        "Company name, if you provide it",
        "Project type",
        "Your message",
      ],
    },
    {
      heading: "How we use your information",
      paragraphs: [
        "We use contact-form submissions only to understand your enquiry and respond. We do not sell your information or use it for advertising.",
      ],
    },
    {
      heading: "Cookies and analytics",
      paragraphs: [
        "This website does not set analytics or advertising cookies, and it does not use third-party tracking scripts.",
        "If that changes, we will update this policy to describe what is collected and why.",
      ],
    },
    {
      heading: "Sharing",
      paragraphs: [
        "We do not share contact-form submissions with third parties for their own marketing. We may share information if required by law, or with a service provider who helps us operate the site — only as needed to deliver that service.",
      ],
    },
    {
      heading: "Retention",
      paragraphs: [
        "We keep enquiry details for as long as needed to respond and, if a project follows, to manage that relationship. We delete or anonymise records when they are no longer needed.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "You can ask us what personal information we hold about you, request a correction, or ask us to delete it. Write to us at the email below and we will respond as promptly as we can.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        `Email ${contacts.email.value} if you have a privacy question or request.`,
      ],
    },
  ],
};

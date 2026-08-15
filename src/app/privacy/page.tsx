import type { Metadata } from "next";

import { LegalDocument } from "@/components/organisms/legal-document";
import { privacy } from "@/content/privacy";
import "./page.scss";

export const metadata: Metadata = {
  title: "Privacy Policy — Build With Brand",
  description: privacy.description,
};

export default function PrivacyPage() {
  return (
    <div className="privacy-page">
      <LegalDocument document={privacy} />
    </div>
  );
}

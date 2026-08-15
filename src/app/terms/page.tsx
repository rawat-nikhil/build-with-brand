import type { Metadata } from "next";

import { LegalDocument } from "@/components/organisms/legal-document";
import { terms } from "@/content/terms";
import "./page.scss";

export const metadata: Metadata = {
  title: "Terms & Conditions — Build With Brand",
  description: terms.description,
};

export default function TermsPage() {
  return (
    <div className="terms-page">
      <LegalDocument document={terms} />
    </div>
  );
}

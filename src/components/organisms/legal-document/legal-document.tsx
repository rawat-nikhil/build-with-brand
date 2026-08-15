import { Eyebrow } from "@/components/atoms/eyebrow";
import type { LegalDocument as LegalDocumentData } from "@/types";
import "./legal-document.scss";

interface LegalDocumentProps {
  document: LegalDocumentData;
}

export function LegalDocument({ document }: LegalDocumentProps) {
  return (
    <article className="legal-document">
      <header className="legal-document__header">
        <div className="legal-document__header-inner">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="legal-document__title">{document.title}</h1>
          <p className="legal-document__updated">Last updated {document.lastUpdated}</p>
          <p className="legal-document__intro">{document.description}</p>
        </div>
      </header>

      <div className="legal-document__body">
        {document.sections.map((section) => (
          <section key={section.heading} className="legal-document__section">
            <h2 className="legal-document__heading">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="legal-document__paragraph">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="legal-document__list">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}

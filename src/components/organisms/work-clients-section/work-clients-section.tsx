import { clients } from "@/content/clients";

import "./work-clients-section.scss";

const clientRows = [clients, clients];

export function WorkClientsSection() {
  return (
    <section className="work-clients-section">
      <div className="work-clients-section__inner">
        <p className="work-clients-section__label">
          Trusted by businesses and creators worldwide
        </p>
      </div>
      <div className="work-clients-section__marquee">
        <div className="work-clients-section__track">
          {clientRows.map((row, index) => (
            <ul
              key={index}
              className="work-clients-section__list"
              aria-hidden={index === 1 || undefined}
            >
              {row.map((client) => (
                <li key={client.name} className="work-clients-section__item">
                  <span className="work-clients-section__name">{client.name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

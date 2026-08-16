import { clients } from "@/content/clients";

import "./work-clients-section.scss";

export function WorkClientsSection() {
  return (
    <section className="work-clients-section">
      <div className="work-clients-section__inner">
        <p className="work-clients-section__label">
          Trusted by businesses and creators worldwide
        </p>
        <div className="work-clients-section__list">
          {clients.map((client) => (
            <div key={client.name} className="work-clients-section__item">
              <client.icon className="work-clients-section__icon" />
              <span className="work-clients-section__name">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

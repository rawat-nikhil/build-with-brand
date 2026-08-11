import type { ContactMethod } from "@/lib/contacts";

import "./icon-info-list.scss";

interface IconInfoListProps {
  items: ContactMethod[];
}

export function IconInfoList({ items }: IconInfoListProps) {
  return (
    <div className="icon-info-list">
      {items.map((item) => (
        <div key={item.label} className="icon-info-list__item">
          <span className="icon-info-list__icon">
            <item.icon className="size-5" />
          </span>
          <div className="icon-info-list__content">
            <p className="icon-info-list__label">{item.label}</p>
            <p className="icon-info-list__value">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

import { MapPin } from "lucide-react";
import "./map-placeholder.scss";

const LABELS = [
  { label: "Paschim Vihar", top: "8%", left: "8%" },
  { label: "Rohini", top: "34%", left: "4%" },
  { label: "Dwarka", top: "78%", left: "10%" },
  { label: "Indirapuram", top: "10%", left: "62%" },
  { label: "Vasundhara", top: "22%", left: "80%" },
  { label: "Chandni Chowk", top: "40%", left: "38%" },
  { label: "Hauz Khas", top: "68%", left: "42%" },
  { label: "Lajpat Nagar", top: "82%", left: "56%" },
  { label: "Noida", top: "50%", left: "88%" },
  { label: "Greater Noida", top: "88%", left: "82%" },
];

export function MapPlaceholder() {
  return (
    <div className="map-placeholder">
      <div
        className="map-placeholder__grid"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {LABELS.map((item) => (
        <span
          key={item.label}
          className="map-placeholder__label"
          style={{ top: item.top, left: item.left }}
        >
          {item.label}
        </span>
      ))}
      <div className="map-placeholder__pin-wrapper">
        <span className="map-placeholder__pin-pulse" />
        <span className="map-placeholder__pin">
          <MapPin className="map-placeholder__pin-icon" />
        </span>
      </div>
    </div>
  );
}

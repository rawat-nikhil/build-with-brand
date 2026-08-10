import { MapPin } from "lucide-react";

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
    <div className="relative h-full min-h-[320px] w-full overflow-hidden bg-[#0d0d12]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {LABELS.map((item) => (
        <span
          key={item.label}
          className="absolute text-[0.65rem] tracking-wide text-white/25 uppercase"
          style={{ top: item.top, left: item.left }}
        >
          {item.label}
        </span>
      ))}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute inset-0 -m-4 animate-ping rounded-full bg-brand-violet/30" />
        <span className="relative flex size-9 items-center justify-center rounded-full bg-brand-violet shadow-[0_0_30px_rgba(139,92,246,0.6)]">
          <MapPin className="size-5 fill-white text-white" />
        </span>
      </div>
    </div>
  );
}

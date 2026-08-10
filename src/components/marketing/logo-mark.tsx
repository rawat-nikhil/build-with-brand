export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        width: "1.75rem",
        height: "1.75rem",
        borderRadius: "9999px",
        background:
          "conic-gradient(from 210deg, #7c5cfc, #f5f3ff 30%, #7c5cfc 60%, #0a0a0f 90%)",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.15) inset",
      }}
      aria-hidden
    />
  );
}

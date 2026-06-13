export default function PageHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section
      className="pt-36 pb-20 relative overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(37,99,235,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <span className="text-[11px] font-mono tracking-[0.22em] text-[#2563EB] uppercase block mb-4">
          {label}
        </span>
        <h1
          className="font-black leading-[1.1] tracking-[-0.02em]"
          style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "#0F172A" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-base leading-[1.8] max-w-xl" style={{ color: "#64748B" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

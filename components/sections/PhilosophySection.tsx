import AnimatedSection from "@/components/ui/AnimatedSection";

const STATEMENTS = [
  {
    jp: "中小企業の可能性を、テクノロジーで広げる。",
    en: "Expanding possibilities with technology.",
  },
  {
    jp: "地域企業が正しく選ばれる仕組みをつくる。",
    en: "Building systems for the right choices.",
  },
];

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="py-28 relative overflow-hidden"
      style={{ background: "#F8FAFC" }}
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
        <AnimatedSection>
          <span className="text-[11px] font-mono tracking-[0.22em] text-[#2563EB] uppercase block mb-4">
            Philosophy
          </span>
          <h2
            className="font-black leading-[1.1] tracking-[-0.02em] mb-16"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)", color: "#0F172A" }}
          >
            企業理念
          </h2>
        </AnimatedSection>

        <div className="space-y-px">
          {STATEMENTS.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div
                className="border-b py-10"
                style={{ borderColor: "#E2E8F0" }}
              >
                <p
                  className="font-black leading-[1.2] tracking-[-0.01em] mb-3"
                  style={{ fontSize: "clamp(22px, 3vw, 40px)", color: "#0F172A" }}
                >
                  {s.jp}
                </p>
                <p className="text-sm font-mono tracking-wider" style={{ color: "#64748B" }}>
                  {s.en}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

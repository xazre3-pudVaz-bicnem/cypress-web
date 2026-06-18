import Link from "next/link";
import Image from "next/image";
import { CaseStudy, SERVICE_BADGE_COLORS } from "@/lib/data/caseStudies";

export default function CaseCard({ c }: { c: CaseStudy }) {
  return (
    <Link
      href={`/cases/${c.slug}`}
      className="case-card"
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #E8E4DC",
        background: "#FFFFFF",
        textDecoration: "none",
        transition: "box-shadow 0.22s, transform 0.22s",
        height: "100%",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", overflow: "hidden", background: "#F0ECE6" }}>
        <Image
          src={c.image}
          alt={c.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Header */}
      <div style={{ padding: "22px 24px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
          <span
            style={{
              fontSize: "10px",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.08em",
              color: "#9CA3AF",
              background: "#F0ECE6",
              padding: "3px 10px",
            }}
          >
            {c.industry}
          </span>
          <span style={{ fontSize: "10px", color: "#9CA3AF", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
            {c.city ? `${c.region}${c.city}` : c.region}
          </span>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "16px",
            color: "#0B1628",
            fontWeight: 700,
            lineHeight: 1.5,
            marginBottom: "10px",
          }}
        >
          {c.title}
        </h2>
        <p
          style={{
            fontSize: "12px",
            color: "#6B7280",
            lineHeight: "1.75",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {c.summary}
        </p>
      </div>

      {/* Services */}
      <div
        style={{
          padding: "0 24px 16px",
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          flex: 1,
          alignItems: "flex-start",
        }}
      >
        {c.services.map((s) => (
          <span
            key={s}
            style={{
              fontSize: "10px",
              padding: "3px 10px",
              border: `1px solid ${SERVICE_BADGE_COLORS[s] || "#C4BAB0"}`,
              color: SERVICE_BADGE_COLORS[s] || "#6B7280",
              letterSpacing: "0.05em",
              fontFamily: "var(--font-display)",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "14px 24px",
          borderTop: "1px solid #F0ECE6",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
          {c.publishedAt.replace(/-/g, ".")}
        </span>
        <span style={{ fontSize: "12px", color: "#C4A96A", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
          詳細を見る →
        </span>
      </div>
    </Link>
  );
}

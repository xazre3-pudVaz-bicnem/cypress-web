"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { CaseStudy } from "@/lib/data/caseStudies";
import CaseCard from "./CaseCard";

interface ChipOption {
  slug: string;
  label: string;
}

interface Props {
  cases: CaseStudy[];
  serviceOptions: ChipOption[];
  industryOptions: ChipOption[];
  regionOptions: string[];
}

export default function CaseFilter({ cases, serviceOptions, industryOptions, regionOptions }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const service = searchParams.get("service") || "";
  const industry = searchParams.get("industry") || "";
  const region = searchParams.get("region") || "";

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const reset = () => router.replace(pathname, { scroll: false });

  const filtered = useMemo(() => {
    return cases.filter((c) => {
      if (service && !c.serviceSlugs.includes(service)) return false;
      if (industry && c.industrySlug !== industry) return false;
      if (region && c.region !== region) return false;
      return true;
    });
  }, [cases, service, industry, region]);

  const hasFilter = Boolean(service || industry || region);

  return (
    <div>
      {/* Filter bar */}
      <div
        style={{
          border: "1px solid #E8E4DC",
          background: "#FFFFFF",
          padding: "clamp(20px, 3vw, 28px)",
          marginBottom: "clamp(28px, 4vw, 40px)",
        }}
      >
        <FilterGroup label="サービス" options={serviceOptions} active={service} onSelect={(v) => setParam("service", v)} />
        <FilterGroup label="業種" options={industryOptions} active={industry} onSelect={(v) => setParam("industry", v)} />
        <FilterGroup
          label="エリア"
          options={regionOptions.map((r) => ({ slug: r, label: r }))}
          active={region}
          onSelect={(v) => setParam("region", v)}
          last
        />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "18px", flexWrap: "wrap", gap: "12px" }}>
          <span style={{ fontSize: "13px", color: "#6B7280", fontFamily: "var(--font-sans)" }}>
            <strong style={{ color: "#0B1628", fontFamily: "var(--font-serif)", fontSize: "16px" }}>{filtered.length}</strong>{" "}
            件の事例
          </span>
          {hasFilter && (
            <button
              type="button"
              onClick={reset}
              style={{
                fontSize: "12px",
                color: "#6B7280",
                background: "transparent",
                border: "1px solid #E8E4DC",
                padding: "6px 14px",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                letterSpacing: "0.03em",
              }}
            >
              すべてリセット ×
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gap: "clamp(20px, 3vw, 32px)",
          }}
        >
          {filtered.map((c) => (
            <CaseCard key={c.slug} c={c} />
          ))}
        </div>
      ) : (
        <p style={{ fontSize: "14px", color: "#6B7280", padding: "48px 0", textAlign: "center" }}>
          条件に一致する事例が見つかりませんでした。フィルターをリセットしてお試しください。
        </p>
      )}

      <style>{`
        .case-card:hover {
          box-shadow: 0 8px 32px rgba(11,22,40,0.09);
          transform: translateY(-2px);
        }
        .case-filter-chip:hover { border-color: #C4A96A; color: #0B1628; }
      `}</style>
    </div>
  );
}

function FilterGroup({
  label,
  options,
  active,
  onSelect,
  last,
}: {
  label: string;
  options: ChipOption[];
  active: string;
  onSelect: (v: string) => void;
  last?: boolean;
}) {
  return (
    <div style={{ marginBottom: last ? 0 : "16px" }}>
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "10px",
          letterSpacing: "0.18em",
          color: "#9CA3AF",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}
      >
        {label}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        <Chip label="すべて" selected={!active} onClick={() => onSelect("")} />
        {options.map((o) => (
          <Chip key={o.slug} label={o.label} selected={active === o.slug} onClick={() => onSelect(o.slug)} />
        ))}
      </div>
    </div>
  );
}

function Chip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="case-filter-chip"
      style={{
        fontSize: "12px",
        padding: "5px 13px",
        border: `1px solid ${selected ? "#0B1628" : "#E8E4DC"}`,
        background: selected ? "#0B1628" : "#FFFFFF",
        color: selected ? "#FFFFFF" : "#6B7280",
        cursor: "pointer",
        letterSpacing: "0.03em",
        fontFamily: "var(--font-sans)",
        transition: "border-color 0.18s, color 0.18s",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}

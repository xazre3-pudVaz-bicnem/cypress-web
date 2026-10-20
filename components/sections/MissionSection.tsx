"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const MVV = [
  {
    type: "Mission",
    label: "存在意義",
    headline: "AIの力で、地域の中小企業を強くする。",
    body: "日本の経済を支える中小企業が、大企業と同じデジタル競争力を持てる世界を作る。AIとWebマーケティングの力で、すべての企業に公平な集客機会を提供します。",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    accentColor: "#2563EB",
    bgColor: "rgba(37,99,235,0.06)",
  },
  {
    type: "Vision",
    label: "目指す世界",
    headline: "AI×Webで、集客に悩む企業をゼロにする。",
    body: "5年以内に、AI・MEO・SEO・AIOを組み合わせた次世代マーケティングで、1,000社以上の中小企業の集客課題を解決する。そのノウハウを日本全国に広める。",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    accentColor: "#06B6D4",
    bgColor: "rgba(6,182,212,0.06)",
  },
  {
    type: "Value",
    label: "大切にする価値観",
    headline: "成果にこだわり、顧客と共に走る。",
    body: "美しいデザインより成果。報告より改善。見た目より数字。私たちは常にクライアントの事業成長にコミットし、伴走型で結果を出し続けます。",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    accentColor: "#8B5CF6",
    bgColor: "rgba(139,92,246,0.06)",
  },
];

export default function MissionSection() {
  return (
    <section className="py-28" style={{ background: "#F8FAFC" }}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel>Philosophy</SectionLabel>
          <h2
            className="font-black leading-tight tracking-tight mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "#0F172A" }}
          >
            Mission / Vision / Value
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "#64748B" }}>
            私たちが存在する理由、目指す世界、大切にする価値観。
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {MVV.map((item, i) => (
            <ScrollReveal key={item.type} delay={i * 0.12}>
              <div
                className="group bg-white rounded-2xl p-8 h-full flex flex-col transition-all duration-300 cursor-default"
                style={{
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  borderTopWidth: "3px",
                  borderTopColor: item.accentColor,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 12px 32px rgba(37,99,235,0.1)";
                  el.style.borderColor = "#BFDBFE";
                  el.style.borderTopColor = item.accentColor;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)";
                  el.style.borderColor = "#E2E8F0";
                  el.style.borderTopColor = item.accentColor;
                }}
              >
                {/* Icon + badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: item.bgColor, color: item.accentColor }}
                  >
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <div
                      className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-0.5"
                      style={{ color: item.accentColor }}
                    >
                      {item.type}
                    </div>
                    <div className="text-[10px]" style={{ color: "#94A3B8" }}>{item.label}</div>
                  </div>
                </div>

                {/* Headline */}
                <h3 className="font-black text-lg leading-snug mb-4" style={{ color: "#0F172A" }}>
                  {item.headline}
                </h3>

                {/* Body */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#64748B" }}>
                  {item.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const POSITIONS = [
  { href: "/recruit/sales", title: "営業職", desc: "AI×Webマーケのソリューション営業" },
  { href: "/recruit/marketing", title: "マーケター", desc: "SEO・MEO・AIO施策を担当" },
];

export default function RecruitCTASection() {
  return (
    <section
      className="py-20"
      style={{
        background: "#EFF6FF",
        borderTop: "1px solid #DBEAFE",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline + CTA */}
          <ScrollReveal>
            <SectionLabel>Recruit</SectionLabel>
            <h2
              className="font-black leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)", color: "#0F172A" }}
            >
              一緒に未来を創りませんか
            </h2>
            <p className="leading-relaxed mb-8 text-[15px]" style={{ color: "#334155" }}>
              AI×Webマーケティングの最前線で、クライアントの成長に直接貢献できる仕事です。
              実力主義・フルリモート可・成果で評価されるカルチャーです。
            </p>
            <Link
              href="/recruit"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all hover:opacity-90 hover:scale-105"
              style={{
                background: "#2563EB",
                boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
              }}
            >
              採用情報を見る
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </ScrollReveal>

          {/* Right: Position cards */}
          <ScrollReveal delay={0.15}>
            <div className="space-y-3">
              {POSITIONS.map((p) => (
                <Link key={p.href} href={p.href} className="group block">
                  <div
                    className="bg-white rounded-2xl p-5 flex items-center justify-between transition-all duration-300"
                    style={{
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.transform = "translateY(-2px)";
                      el.style.boxShadow = "0 8px 24px rgba(37,99,235,0.1)";
                      el.style.borderColor = "#BFDBFE";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)";
                      el.style.borderColor = "#E2E8F0";
                    }}
                  >
                    <div>
                      <div className="font-semibold text-sm mb-1" style={{ color: "#0F172A" }}>
                        {p.title}
                      </div>
                      <div className="text-xs" style={{ color: "#64748B" }}>{p.desc}</div>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 group-hover:translate-x-1"
                      style={{
                        background: "rgba(37,99,235,0.08)",
                        color: "#2563EB",
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}

              {/* Info card */}
              <div
                className="bg-white rounded-2xl p-5"
                style={{
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(37,99,235,0.08)",
                      color: "#2563EB",
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "#0F172A" }}>
                      フルリモート・東京勤務選択可
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "#64748B" }}>
                      成果主義・フレックス制度あり
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

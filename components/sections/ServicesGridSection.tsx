"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const SERVICES = [
  {
    href: "/services/meo",
    name: "MEO対策",
    tagline: "Googleマップで上位表示",
    description: "地域ビジネスの集客をGoogleマップで劇的に改善。上位3位表示達成率94%の実績。",
    borderColor: "#10B981",
    iconColor: "#10B981",
    iconBg: "rgba(16,185,129,0.08)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    stat: "94%",
    statLabel: "上位3位達成率",
  },
  {
    href: "/services/seo",
    name: "SEO対策",
    tagline: "検索上位で継続集客",
    description: "テクニカル・コンテンツ・外部対策を一気通貫で実施。自然検索流入を平均340%改善。",
    borderColor: "#2563EB",
    iconColor: "#2563EB",
    iconBg: "rgba(37,99,235,0.08)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
    stat: "+340%",
    statLabel: "自然検索流入増加",
  },
  {
    href: "/services/aio",
    name: "AIO対策",
    tagline: "AI検索で引用される企業へ",
    description: "ChatGPT・Gemini・Perplexityに推薦される企業になる。AI検索時代の先行戦略。",
    borderColor: "#8B5CF6",
    iconColor: "#8B5CF6",
    iconBg: "rgba(139,92,246,0.08)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z M18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    stat: "78%",
    statLabel: "AI引用率向上",
  },
  {
    href: "/services/web-design",
    name: "ホームページ制作",
    tagline: "売れるサイトを設計する",
    description: "SEO・AIO・CVR改善まで設計する高品質なWebサイト制作。問い合わせ平均2.8倍増。",
    borderColor: "#F59E0B",
    iconColor: "#F59E0B",
    iconBg: "rgba(245,158,11,0.08)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
      </svg>
    ),
    stat: "2.8倍",
    statLabel: "問い合わせ増加",
  },
  {
    href: "/services/sns",
    name: "SNS運用",
    tagline: "SNSをビジネスの武器に",
    description: "Instagram・X・TikTokの戦略立案からコンテンツ制作まで。フォロワー平均5.8倍増。",
    borderColor: "#EC4899",
    iconColor: "#EC4899",
    iconBg: "rgba(236,72,153,0.08)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
      </svg>
    ),
    stat: "5.8倍",
    statLabel: "フォロワー増加",
  },
  {
    href: "/services/ai",
    name: "AI導入支援",
    tagline: "AIで業務を革命する",
    description: "業務自動化・AIチャットボット・AI活用研修まで。業務工数を平均65%削減します。",
    borderColor: "#06B6D4",
    iconColor: "#06B6D4",
    iconBg: "rgba(6,182,212,0.08)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
    stat: "−65%",
    statLabel: "業務工数削減",
  },
];

export default function ServicesGridSection() {
  return (
    <section className="py-28" style={{ background: "#F8FAFC" }}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel>Services</SectionLabel>
          <h2
            className="font-black leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "#0F172A" }}
          >
            6つの専門サービスで
            <br />
            集客を最大化
          </h2>
          <p style={{ color: "#64748B" }}>
            MEO・SEO・AIO・Web制作・SNS・AIの6領域でワンストップ支援。
          </p>
          <div className="mt-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: "#2563EB" }}
            >
              すべてのサービスを見る
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.href} delay={i * 0.08}>
              <Link href={s.href} className="group block h-full">
                <div
                  className="h-full bg-white rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
                  style={{
                    border: "1px solid #E2E8F0",
                    borderLeftWidth: "3px",
                    borderLeftColor: s.borderColor,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "0 12px 32px rgba(37,99,235,0.1)";
                    el.style.borderColor = "#BFDBFE";
                    el.style.borderLeftColor = s.borderColor;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)";
                    el.style.borderColor = "#E2E8F0";
                    el.style.borderLeftColor = s.borderColor;
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: s.iconBg, color: s.iconColor }}
                    >
                      {s.icon}
                    </div>
                    <div className="text-right">
                      <div className="font-black text-lg leading-none" style={{ color: s.iconColor }}>
                        {s.stat}
                      </div>
                      <div className="text-[10px] mt-0.5" style={{ color: "#94A3B8" }}>{s.statLabel}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-1.5" style={{ color: "#94A3B8" }}>
                      {s.tagline}
                    </div>
                    <h3 className="font-bold text-base mb-2" style={{ color: "#0F172A" }}>{s.name}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{s.description}</p>
                  </div>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-1.5 text-sm mt-auto pt-2 font-medium"
                    style={{ color: s.iconColor }}
                  >
                    詳しく見る
                    <svg
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

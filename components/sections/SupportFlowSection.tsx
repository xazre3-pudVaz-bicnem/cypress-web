"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const STEPS = [
  {
    step: 1,
    stepLabel: "01",
    title: "無料相談・ヒアリング",
    description: "現状の集客課題・目標・予算をヒアリング。Webサイト・MEO・SNSなど現状を診断します。",
    duration: "1〜2営業日",
  },
  {
    step: 2,
    stepLabel: "02",
    title: "現状分析・競合調査",
    description: "SEO・MEO・サイト診断ツールで現状を分析。競合上位サイトを徹底調査し、勝ち筋を特定します。",
    duration: "3〜5営業日",
  },
  {
    step: 3,
    stepLabel: "03",
    title: "戦略立案・提案",
    description: "分析結果を基に、最も費用対効果の高い施策を優先順位付けして提案。数値目標とロードマップを提示します。",
    duration: "2〜3営業日",
  },
  {
    step: 4,
    stepLabel: "04",
    title: "施策実施・制作",
    description: "承認いただいた施策を実行。MEO最適化・コンテンツ制作・サイト改修など、迅速に実施します。",
    duration: "1〜4週間",
  },
  {
    step: 5,
    stepLabel: "05",
    title: "効果測定・改善",
    description: "月次で成果をレポーティング。データに基づいてPDCAを回し、継続的な改善で成果を最大化します。",
    duration: "月次継続",
  },
];

export default function SupportFlowSection() {
  return (
    <section className="py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel>Flow</SectionLabel>
          <h2
            className="font-black leading-tight tracking-tight mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "#0F172A" }}
          >
            支援の流れ
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "#64748B" }}>
            初回相談から成果創出まで、5つのステップで伴走支援します。
          </p>
        </ScrollReveal>

        {/* Desktop: horizontal steps */}
        <div className="hidden md:flex items-start">
          {STEPS.map((s, i) => (
            <div key={s.step} className="flex-1 relative">
              <ScrollReveal delay={i * 0.1}>
                {/* Connector line between steps */}
                {i < STEPS.length - 1 && (
                  <div
                    className="absolute top-7 left-[calc(50%+28px)] right-0 h-px pointer-events-none z-0"
                    style={{ background: "linear-gradient(to right, #2563EB40, #2563EB20)" }}
                  >
                    {/* Arrow head */}
                    <div
                      className="absolute right-0 top-1/2 -translate-y-1/2"
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "4px solid transparent",
                        borderBottom: "4px solid transparent",
                        borderLeft: "6px solid #2563EB40",
                      }}
                    />
                  </div>
                )}

                <div className="relative z-10 flex flex-col items-center text-center px-4">
                  {/* Step circle */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-black text-white text-base mb-5 shrink-0"
                    style={{
                      background: "#2563EB",
                      boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
                    }}
                  >
                    {s.stepLabel}
                  </div>

                  <h3 className="font-bold text-sm mb-2 leading-snug" style={{ color: "#0F172A" }}>
                    {s.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: "#64748B" }}>
                    {s.description}
                  </p>
                  <span
                    className="text-[10px] font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(37,99,235,0.08)",
                      color: "#2563EB",
                    }}
                  >
                    {s.duration}
                  </span>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* Mobile: vertical steps */}
        <div className="md:hidden space-y-4">
          {STEPS.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 0.1}>
              <div
                className="bg-white rounded-2xl p-5 relative"
                style={{
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                {/* Vertical connector */}
                {i < STEPS.length - 1 && (
                  <div
                    className="absolute left-[42px] bottom-0 w-px pointer-events-none"
                    style={{
                      height: "calc(100% + 1rem)",
                      background: "rgba(37,99,235,0.2)",
                      transform: "translateY(100%)",
                      top: "auto",
                    }}
                  />
                )}
                <div className="flex gap-4 items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm shrink-0"
                    style={{
                      background: "#2563EB",
                      boxShadow: "0 4px 12px rgba(37,99,235,0.25)",
                    }}
                  >
                    {s.stepLabel}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                      <h3 className="font-bold text-sm" style={{ color: "#0F172A" }}>{s.title}</h3>
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(37,99,235,0.08)", color: "#2563EB" }}
                      >
                        {s.duration}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

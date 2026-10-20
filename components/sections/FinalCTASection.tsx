"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function FinalCTASection() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "#2563EB" }}
    >
      {/* Subtle dot/grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft radial highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/80 mb-8"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            無料相談受付中
          </div>

          {/* Headline */}
          <h2
            className="font-black text-white leading-[1.08] tracking-tight mb-6"
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            まずは無料で
            <br />
            相談する
          </h2>

          {/* Sub copy */}
          <p
            className="text-base leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            現状の課題をヒアリングし、最も費用対効果の高い施策から提案します。
            <br />
            相談・見積りは完全無料。まずはお気軽にどうぞ。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 hover:shadow-lg"
              style={{
                background: "#ffffff",
                color: "#2563EB",
                boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
              }}
            >
              無料相談・お問い合わせ
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-medium text-base text-white transition-all hover:bg-white/10"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              サービスを見る
            </Link>
          </div>

          {/* Fine print */}
          <p className="text-xs mt-8" style={{ color: "rgba(255,255,255,0.5)" }}>
            営業時間：平日 10:00〜18:00　|　返信は1〜2営業日以内
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

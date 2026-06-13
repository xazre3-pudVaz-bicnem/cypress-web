"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function RepresentativeMessageSection() {
  return (
    <section className="py-28" style={{ background: "#F8FAFC" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo side */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden relative"
                style={{
                  aspectRatio: "4/5",
                  boxShadow: "0 20px 60px rgba(37,99,235,0.12)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=85"
                  alt="代表取締役 織田 春樹"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(15,23,42,0.3) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Name tag overlay */}
              <div
                className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4"
                style={{
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                }}
              >
                <div className="font-black text-sm" style={{ color: "#0F172A" }}>
                  代表取締役 &nbsp;織田 春樹
                </div>
                <div className="text-xs mt-0.5" style={{ color: "#64748B" }}>
                  株式会社サイプレス
                </div>
              </div>

              {/* Decorative accent */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{
                  background: "rgba(37,99,235,0.08)",
                  border: "1px solid rgba(37,99,235,0.15)",
                }}
              >
                <svg className="w-9 h-9" style={{ color: "#2563EB" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
              </div>
            </div>
          </ScrollReveal>

          {/* Message side */}
          <ScrollReveal direction="right">
            <SectionLabel>Message</SectionLabel>
            <h2
              className="font-black leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(24px, 3vw, 38px)", color: "#0F172A" }}
            >
              代表メッセージ
            </h2>

            <div className="space-y-5 text-[15px] leading-[1.9]" style={{ color: "#334155" }}>
              <p>
                「ホームページを作ったが集客できない」「広告費ばかりかかる」「SNSが続かない」—
                中小企業の経営者の多くが、こうしたデジタルマーケティングの課題を抱えています。
              </p>
              <p>
                私たちサイプレスは、MEO・SEO・AIOというデジタル集客の三本柱に、
                AIの力を掛け合わせることで、中小企業でも大企業と同じ競争力を持てると信じています。
              </p>
              <p>
                数字に裏打ちされた戦略、伴走型の支援体制、そして成果にこだわる姿勢—
                これが私たちの強みです。あなたの事業の成長に、真剣に向き合います。
              </p>
            </div>

            <div
              className="mt-10 pt-8"
              style={{ borderTop: "1px solid #E2E8F0" }}
            >
              <div className="font-black text-xl mb-0.5" style={{ color: "#0F172A" }}>
                代表取締役&ensp;織田 春樹
              </div>
              <div className="text-sm" style={{ color: "#64748B" }}>株式会社サイプレス</div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

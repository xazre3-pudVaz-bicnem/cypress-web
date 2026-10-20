"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

const STATS = [
  { value: "200+", label: "累計支援社数" },
  { value: "94%", label: "MEO上位表示率" },
  { value: "+340%", label: "平均検索流入増" },
];

const TAGS = ["MEO対策", "SEO対策", "AIO対策", "AI活用支援", "Web制作", "SNS運用"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-20 md:pt-12 md:pb-28">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#EFF6FF 1px, transparent 1px), linear-gradient(to right, #EFF6FF 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.6,
        }}
      />
      {/* Blue glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, rgba(37,99,235,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
                style={{ background: "#EFF6FF", color: "#2563EB", border: "1px solid #BFDBFE" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                AI × Webマーケティング｜累計200社以上の支援実績
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
              className="font-black text-[#0F172A] leading-[1.05] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(44px, 6vw, 76px)" }}
            >
              集客の<br />
              <span
                style={{
                  background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                常識を、
              </span>
              <br />変える。
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.18 }}
              className="text-[#475569] text-lg leading-relaxed mb-10 max-w-md"
            >
              MEO・SEO・AIO・AI活用を組み合わせた独自の集客戦略で、
              地域の中小企業がデジタル競争に勝てる仕組みをつくります。
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.26 }}
              className="flex flex-col sm:flex-row gap-3 mb-14"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-white text-[15px] transition-all hover:scale-105 hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)]"
                style={{ background: "#2563EB" }}
              >
                無料相談を予約する
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-[#334155] text-[15px] transition-all hover:bg-slate-100"
                style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
              >
                サービス一覧を見る
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.36 }}
              className="flex items-center gap-8"
            >
              {STATS.map((s, i) => (
                <div key={s.label} className={i > 0 ? "pl-8 border-l border-[#E2E8F0]" : ""}>
                  <div className="font-black text-2xl text-[#0F172A] leading-none mb-1">{s.value}</div>
                  <div className="text-[11px] text-[#94A3B8]">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — photo frame */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="relative hidden lg:block"
          >
            {/* Main image frame */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                boxShadow: "0 24px 64px rgba(37,99,235,0.15), 0 4px 16px rgba(0,0,0,0.08)",
                border: "1px solid rgba(37,99,235,0.1)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85"
                alt="AIマーケティング・データ分析ダッシュボード"
                width={900}
                height={600}
                className="w-full object-cover"
                priority
                style={{ aspectRatio: "3/2" }}
              />
              {/* Overlay gradient at bottom */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(15,23,42,0.12) 0%, transparent 50%)" }}
              />
            </div>

            {/* Floating stat card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -left-8 -bottom-6 rounded-2xl p-4 bg-white"
              style={{
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                border: "1px solid #E2E8F0",
                minWidth: "160px",
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="text-[10px] text-[#64748B] font-medium">MEO順位</span>
              </div>
              <div className="font-black text-xl text-[#0F172A]">TOP 3</div>
              <div className="text-[10px] text-[#10B981] font-medium mt-0.5">達成率 94%</div>
            </motion.div>

            {/* Floating stat card 2 */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="absolute -right-6 top-8 rounded-2xl p-4 bg-white"
              style={{
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                border: "1px solid #E2E8F0",
                minWidth: "140px",
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span className="text-[10px] text-[#64748B] font-medium">検索流入</span>
              </div>
              <div className="font-black text-xl text-[#0F172A]">+340%</div>
              <div className="text-[10px] text-[#2563EB] font-medium mt-0.5">SEO実績</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-2"
        >
          <span className="text-[12px] text-[#94A3B8] mr-2 self-center">支援領域：</span>
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-[12px] font-medium text-[#334155]"
              style={{ background: "#F1F5F9", border: "1px solid #E2E8F0" }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

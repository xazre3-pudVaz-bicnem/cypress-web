"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    num: "01",
    label: "MEO対策",
    en: "Local Map SEO",
    href: "/services/meo",
    hubHref: "/meo",
    img: "/ChatGPT Image 2026年6月14日 21_09_09 (6).png",
    alt: "Googleマップ上位表示 — MEO対策サービス",
    body: "Googleビジネスプロフィールを最適化し、地域名+業種キーワードでの検索上位を狙います。来店・予約・電話問い合わせが増える、地域集客の核心です。",
    stat: "来店数",
    accentColor: "#B8924A",
    bg: "#FFFFFF",
  },
  {
    num: "02",
    label: "SEO対策",
    en: "Search Engine Optimization",
    href: "/services/seo",
    hubHref: "/seo",
    img: "/ChatGPT Image 2026年6月14日 21_08_58 (5).png",
    alt: "検索上位表示 — SEO対策サービス",
    body: "キーワード設計・コンテンツSEO・テクニカルSEOを組み合わせ、広告費ゼロで検索流入を増やします。中長期の集客基盤を構築します。",
    stat: "検索流入",
    accentColor: "#2A9BA0",
    bg: "#F8F6F2",
  },
  {
    num: "03",
    label: "AIO対策",
    en: "AI Search Optimization",
    href: "/services/aio",
    hubHref: "/aio",
    img: "/ChatGPT Image 2026年6月14日 21_08_58 (6).png",
    alt: "AI検索対策 — AIO・ChatGPT対応サービス",
    body: "ChatGPT・Gemini・PerplexityなどのAI検索に引用されるサイトへ。E-E-A-T強化・構造化データ・FAQ設計でAI検索時代の集客を実現します。",
    stat: "AI引用率",
    accentColor: "#7C5FC0",
    bg: "#FFFFFF",
  },
  {
    num: "04",
    label: "ホームページ制作",
    en: "Web Production",
    href: "/services/web-design",
    hubHref: "/web-design",
    img: "/ChatGPT Image 2026年6月13日 20_02_56.png",
    alt: "ホームページ制作 — Next.js高速サイト",
    body: "集客・CVR・SEOを設計した高品質サイトを制作。デザインの美しさだけでなく、問い合わせ・来店・採用につながる導線設計を重視します。",
    stat: "問い合わせ率",
    accentColor: "#C07820",
    bg: "#F8F6F2",
  },
  {
    num: "05",
    label: "SNS運用",
    en: "Social Media Management",
    href: "/services/sns",
    hubHref: "/sns",
    img: "/ChatGPT Image 2026年6月13日 20_01_28.png",
    alt: "SNS運用代行 — Instagram・LINE",
    body: "Instagram・Google投稿・LINEなどのSNS運用を代行。投稿設計・画像制作・分析まで継続的な情報発信を支援し、MEOとの相乗効果を生みます。",
    stat: "フォロワー数",
    accentColor: "#B0406A",
    bg: "#FFFFFF",
  },
  {
    num: "06",
    label: "AI活用支援",
    en: "AI Business Integration",
    href: "/services/ai",
    hubHref: "/ai",
    img: "/ChatGPT Image 2026年6月14日 21_09_09 (5).png",
    alt: "AI活用支援 — 業務自動化・ChatGPT導入",
    body: "ChatGPT・Make・Zapierを活用した業務効率化・自動化の伴走支援。ブログ自動生成・SNS投稿自動化・問い合わせ対応ボットなど導入から運用まで。",
    stat: "業務効率化",
    accentColor: "#1E8A5C",
    bg: "#F8F6F2",
  },
];

type PanelProps = {
  svc: (typeof SERVICES)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
};

function ServicePanel({ svc, index, scrollYProgress }: PanelProps) {
  const N = SERVICES.length;
  const segSize = 1 / N;
  const start = index * segSize;
  const end = (index + 1) * segSize;
  const fade = segSize * 0.28;

  const inputRange =
    index === 0
      ? [0, end - fade, end]
      : index === N - 1
      ? [start, start + fade, 1]
      : [start, start + fade, end - fade, end];

  const outputOpacity =
    index === 0
      ? [1, 1, 0]
      : index === N - 1
      ? [0, 1, 1]
      : [0, 1, 1, 0];

  const outputY =
    index === 0
      ? ["0px", "0px", "-24px"]
      : index === N - 1
      ? ["24px", "0px", "0px"]
      : ["24px", "0px", "0px", "-24px"];

  const opacity = useTransform(scrollYProgress, inputRange, outputOpacity);
  const y = useTransform(scrollYProgress, inputRange, outputY);

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        opacity,
        y,
        background: svc.bg,
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(90deg, ${svc.accentColor}60 0%, transparent 50%)`,
        }}
      />
      {/* Bottom border */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "#E8E4DC",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 60px)",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 6vw, 100px)",
          alignItems: "center",
        }}
        className="scroll-story-grid"
      >
        {/* Left */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "10px",
              letterSpacing: "0.3em",
              color: svc.accentColor,
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            {svc.en}
          </p>
          <div style={{ overflow: "hidden" }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(80px, 14vw, 180px)",
                color: "rgba(11,22,40,0.04)",
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              {svc.num}
            </p>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(28px, 4vw, 52px)",
              color: "#0B1628",
              fontWeight: 700,
              lineHeight: 1.2,
              marginTop: "-20px",
              marginBottom: "24px",
            }}
          >
            {svc.label}
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "#6B7280",
              lineHeight: "1.95",
              marginBottom: "32px",
              maxWidth: "400px",
            }}
          >
            {svc.body}
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link
              href={svc.href}
              style={{
                fontSize: "12px",
                fontFamily: "var(--font-display)",
                letterSpacing: "0.08em",
                color: "#0B1628",
                borderBottom: `1px solid ${svc.accentColor}80`,
                paddingBottom: "3px",
                textDecoration: "none",
              }}
            >
              サービス詳細
            </Link>
            <Link
              href={svc.hubHref}
              style={{
                fontSize: "12px",
                fontFamily: "var(--font-display)",
                letterSpacing: "0.08em",
                color: "#9CA3AF",
                borderBottom: "1px solid #E8E4DC",
                paddingBottom: "3px",
                textDecoration: "none",
              }}
            >
              詳しく学ぶ
            </Link>
          </div>
        </div>

        {/* Right: image */}
        <div style={{ position: "relative", height: "clamp(300px, 45vh, 520px)", overflow: "hidden" }}>
          <Image
            src={svc.img}
            alt={svc.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Stat label */}
          <div
            style={{
              position: "absolute",
              bottom: "24px",
              right: "24px",
              padding: "10px 16px",
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(8px)",
              border: `1px solid ${svc.accentColor}30`,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "9px",
                letterSpacing: "0.2em",
                color: svc.accentColor,
                textTransform: "uppercase",
              }}
            >
              {svc.stat} UP
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProgressDots({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "36px",
        right: "clamp(24px, 5vw, 60px)",
        display: "flex",
        gap: "8px",
        zIndex: 20,
      }}
    >
      {SERVICES.map((svc, i) => {
        const N = SERVICES.length;
        const start = i / N;
        const end = (i + 1) / N;
        const active = useTransform(scrollYProgress, [start, (start + end) / 2, end], [0, 1, 0]);
        return (
          <motion.div
            key={svc.num}
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: useTransform(
                active,
                [0, 1],
                ["rgba(11,22,40,0.15)", svc.accentColor]
              ),
              scale: useTransform(active, [0, 1], [1, 1.5]),
            }}
          />
        );
      })}
    </div>
  );
}

function SectionLabel({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "36px",
        left: "clamp(24px, 5vw, 60px)",
        zIndex: 20,
        pointerEvents: "none",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "9px",
          letterSpacing: "0.3em",
          color: "#9CA3AF",
          textTransform: "uppercase",
        }}
      >
        Services
      </p>
    </div>
  );
}

export default function ScrollStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} style={{ position: "relative", height: `${SERVICES.length * 100}vh` }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        {SERVICES.map((svc, i) => (
          <ServicePanel key={svc.num} svc={svc} index={i} scrollYProgress={scrollYProgress} />
        ))}
        <SectionLabel scrollYProgress={scrollYProgress} />
        <ProgressDots scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}

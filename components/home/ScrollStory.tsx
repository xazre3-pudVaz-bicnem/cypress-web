"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    accentColor: "#B8924A",
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
    accentColor: "#2A9BA0",
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
    accentColor: "#7C5FC0",
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
    accentColor: "#C07820",
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
    accentColor: "#B0406A",
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
    accentColor: "#1E8A5C",
  },
];

function ServiceCard({ svc, index }: { svc: (typeof SERVICES)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 34, clipPath: "inset(10% 0% 0% 0%)" }}
      animate={inView ? { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" } : {}}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.1 }}
      style={{
        background: "#FFFFFF",
        border: "1px solid #E8E4DC",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
      className="service-story-card"
    >
      {/* Image */}
      <div className="card-img" style={{ position: "relative", height: "clamp(120px, 12vw, 168px)", flexShrink: 0, overflow: "hidden" }}>
        <Image
          src={svc.img}
          alt={svc.alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: `linear-gradient(90deg, ${svc.accentColor}, transparent)`,
            zIndex: 2,
          }}
        />
        <span className="card-sheen" aria-hidden />
      </div>

      {/* Content */}
      <div
        style={{
          padding: "clamp(18px, 2.2vw, 24px)",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "9px",
              letterSpacing: "0.2em",
              color: svc.accentColor,
              opacity: 0.8,
            }}
          >
            {svc.num}
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "9px",
              letterSpacing: "0.18em",
              color: "#9CA3AF",
              textTransform: "uppercase",
            }}
          >
            {svc.en}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(16px, 1.6vw, 19px)",
            color: "#0B1628",
            fontWeight: 700,
            lineHeight: 1.3,
            marginBottom: "10px",
          }}
        >
          {svc.label}
        </h3>

        <p
          style={{
            fontSize: "12px",
            color: "#6B7280",
            lineHeight: "1.85",
            marginBottom: "18px",
            flex: 1,
          }}
        >
          {svc.body}
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link
            href={svc.href}
            style={{
              fontSize: "11px",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.06em",
              color: "#0B1628",
              borderBottom: `1px solid ${svc.accentColor}70`,
              paddingBottom: "2px",
              textDecoration: "none",
            }}
          >
            サービス詳細
          </Link>
          <Link
            href={svc.hubHref}
            style={{
              fontSize: "11px",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.06em",
              color: "#9CA3AF",
              borderBottom: "1px solid #E8E4DC",
              paddingBottom: "2px",
              textDecoration: "none",
            }}
          >
            詳しく学ぶ
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ScrollStory() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-5%" });

  return (
    <section style={{ background: "#FFFFFF", borderTop: "1px solid #E8E4DC" }}>
      <div
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "clamp(64px, 10vh, 104px) clamp(24px, 5vw, 60px)",
        }}
      >
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginBottom: "clamp(32px, 5vh, 52px)",
            paddingBottom: "clamp(20px, 3vh, 32px)",
            borderBottom: "1px solid #E8E4DC",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.3em",
                color: "#9CA3AF",
                fontSize: "10px",
                marginBottom: "10px",
                textTransform: "uppercase",
              }}
            >
              Services
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px, 2.8vw, 34px)",
                color: "#0B1628",
                fontWeight: 700,
                lineHeight: 1.25,
              }}
            >
              集客のための6サービス
            </h2>
          </div>
          <Link
            href="/services"
            style={{
              fontSize: "12px",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.08em",
              color: "#6B7280",
              textDecoration: "none",
              borderBottom: "1px solid #D1C9BE",
              paddingBottom: "2px",
              whiteSpace: "nowrap",
            }}
          >
            サービス一覧を見る →
          </Link>
        </motion.div>

        {/* Card grid */}
        <div className="service-story-grid">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.num} svc={svc} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .service-story-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(16px, 2.5vw, 28px);
        }
        .service-story-card {
          transition: box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1), transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s;
        }
        .service-story-card:hover {
          box-shadow: 0 18px 48px rgba(11,22,40,0.13);
          transform: translateY(-5px);
          border-color: #D8CFC0;
        }
        .service-story-card .card-img img {
          transition: transform 1.1s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }
        .service-story-card:hover .card-img img {
          transform: scale(1.07);
        }
        .card-sheen {
          position: absolute;
          top: -20%;
          bottom: -20%;
          left: 0;
          width: 45%;
          background: linear-gradient(100deg, transparent 0%, rgba(255,255,255,0.28) 50%, transparent 100%);
          transform: translateX(-140%) skewX(-14deg);
          transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
          z-index: 1;
        }
        .service-story-card:hover .card-sheen {
          transform: translateX(340%) skewX(-14deg);
        }
        @media (prefers-reduced-motion: reduce) {
          .service-story-card,
          .service-story-card .card-img img,
          .card-sheen {
            transition: none;
          }
        }
        @media (max-width: 1024px) {
          .service-story-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .service-story-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

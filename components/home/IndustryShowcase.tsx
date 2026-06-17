"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const INDUSTRIES = [
  { label: "飲食店", en: "Restaurant", href: "/industries/restaurant", img: "/ChatGPT Image 2026年6月14日 21_09_20 (1).png" },
  { label: "美容室・サロン", en: "Beauty Salon", href: "/industries/beauty", img: "/ChatGPT Image 2026年6月14日 21_09_20 (2).png" },
  { label: "クリニック", en: "Clinic", href: "/industries/clinic", img: "/ChatGPT Image 2026年6月14日 21_09_20 (3).png" },
  { label: "建設・リフォーム", en: "Construction", href: "/industries/construction", img: "/ChatGPT Image 2026年6月14日 21_09_20 (4).png" },
  { label: "不動産", en: "Real Estate", href: "/industries/real-estate", img: "/ChatGPT Image 2026年6月14日 21_09_20 (5).png" },
  { label: "士業・専門職", en: "Professional", href: "/industries/professional-service", img: "/ChatGPT Image 2026年6月14日 21_09_20 (6).png" },
  { label: "清掃業", en: "Cleaning", href: "/industries/cleaning", img: "/ChatGPT Image 2026年6月14日 21_09_21 (7).png" },
  { label: "整骨院", en: "Osteopathic", href: "/industries/osteopathic", img: "/ChatGPT Image 2026年6月14日 21_09_21 (8).png" },
  { label: "ペット", en: "Pet Shop", href: "/industries/pet-shop", img: "/ChatGPT Image 2026年6月14日 21_09_21 (9).png" },
  { label: "スクール", en: "School", href: "/industries/school", img: "/ChatGPT Image 2026年6月14日 21_09_21 (10).png" },
];

const ROW2 = [
  { label: "ヘアサロン", en: "Hair Salon", href: "/industries/hair-salon", img: "/ChatGPT Image 2026年6月14日 21_10_24 (1).png" },
  { label: "ネイルサロン", en: "Nail Salon", href: "/industries/nail-salon", img: "/ChatGPT Image 2026年6月14日 21_10_24 (2).png" },
  { label: "リノベーション", en: "Renovation", href: "/industries/renovation", img: "/ChatGPT Image 2026年6月14日 21_10_24 (3).png" },
  { label: "水道・設備", en: "Plumbing", href: "/industries/plumbing", img: "/ChatGPT Image 2026年6月14日 21_10_24 (4).png" },
  { label: "地域店舗", en: "Local Store", href: "/industries/local-store", img: "/ChatGPT Image 2026年6月14日 21_10_24 (5).png" },
  { label: "歯科・医療", en: "Dental/Medical", href: "/industries/clinic", img: "/ChatGPT Image 2026年6月14日 21_10_24 (6).png" },
  { label: "飲食店", en: "Restaurant", href: "/industries/restaurant", img: "/ChatGPT Image 2026年6月14日 21_10_25 (7).png" },
  { label: "美容室・サロン", en: "Beauty Salon", href: "/industries/beauty", img: "/ChatGPT Image 2026年6月14日 21_10_25 (8).png" },
  { label: "クリニック", en: "Clinic", href: "/industries/clinic", img: "/ChatGPT Image 2026年6月14日 21_10_25 (9).png" },
  { label: "建設・リフォーム", en: "Construction", href: "/industries/construction", img: "/ChatGPT Image 2026年6月14日 21_10_25 (10).png" },
];

function IndustryCard({ item }: { item: (typeof INDUSTRIES)[0] }) {
  return (
    <Link
      href={item.href}
      style={{
        position: "relative",
        display: "block",
        width: "200px",
        height: "260px",
        flexShrink: 0,
        overflow: "hidden",
        marginRight: "16px",
        textDecoration: "none",
      }}
      className="industry-card"
    >
      <Image
        src={item.img}
        alt={item.label}
        fill
        className="object-cover industry-card-img"
        sizes="200px"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(6,14,28,0.88) 0%, rgba(6,14,28,0.1) 60%)",
        }}
      />
      <div style={{ position: "absolute", bottom: "20px", left: "16px", right: "16px" }}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "9px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "4px",
            textTransform: "uppercase",
          }}
        >
          {item.en}
        </p>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "14px",
            color: "#ffffff",
            fontWeight: 600,
          }}
        >
          {item.label}
        </p>
      </div>
    </Link>
  );
}

export default function IndustryShowcase() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-8%" });

  const row1 = [...INDUSTRIES, ...INDUSTRIES];
  const row2 = [...ROW2, ...ROW2];

  return (
    <section style={{ background: "#FFFFFF", overflow: "hidden", padding: "clamp(64px, 9vh, 112px) 0", borderTop: "1px solid #E8E4DC" }}>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .marquee-row-left { animation: marqueeLeft 40s linear infinite; }
          .marquee-row-right { animation: marqueeRight 40s linear infinite; }
        }
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .industry-card-img { transition: transform 0.6s cubic-bezier(0.22,1,0.36,1); }
        .industry-card:hover .industry-card-img { transform: scale(1.06); }
      `}</style>

      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 60px)",
          marginBottom: "clamp(40px, 5vh, 64px)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "0.3em",
            color: "#9CA3AF",
            fontSize: "10px",
            marginBottom: "16px",
            textTransform: "uppercase",
          }}
        >
          Industries
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(22px, 3vw, 38px)",
              color: "#0B1628",
              fontWeight: 700,
              lineHeight: 1.25,
            }}
          >
            幅広い業種に対応。
          </h2>
          <Link
            href="/industries"
            style={{
              fontSize: "12px",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.08em",
              color: "#6B7280",
              borderBottom: "1px solid #D1C9BE",
              paddingBottom: "2px",
              textDecoration: "none",
            }}
          >
            業種一覧を見る →
          </Link>
        </div>
      </motion.div>

      {/* Row 1: left-to-right */}
      <div style={{ overflow: "hidden", marginBottom: "16px" }}>
        <div
          className="marquee-row-left"
          style={{ display: "flex", width: "max-content" }}
        >
          {row1.map((item, i) => (
            <IndustryCard key={`r1-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2: right-to-left */}
      <div style={{ overflow: "hidden" }}>
        <div
          className="marquee-row-right"
          style={{ display: "flex", width: "max-content" }}
        >
          {row2.map((item, i) => (
            <IndustryCard key={`r2-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

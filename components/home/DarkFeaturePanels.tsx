"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PANELS = [
  {
    num: "01",
    title: "SEOに強いサイト構造",
    body: "検索エンジンが評価するサイト設計を起点に、コンテンツ・内部リンク・テクニカル要素を整備します。キーワード設計から始め、検索意図に合ったページ構造で検索上位を狙います。",
    href: "/seo",
    label: "SEO対策を詳しく",
    img: "/ChatGPT Image 2026年6月13日 19_22_31.png",
    accent: "#7EC8C8",
  },
  {
    num: "02",
    title: "Googleマップからの来店導線",
    body: "Googleビジネスプロフィールを最適化し、地域名＋業種キーワードでの検索上位表示を実現します。口コミ・写真・投稿を継続的に改善し、マップ検索からの来店率を高めます。",
    href: "/meo",
    label: "MEO対策を詳しく",
    img: "/ChatGPT Image 2026年6月14日 21_09_09 (6).png",
    accent: "#C4A96A",
  },
  {
    num: "03",
    title: "AI検索に拾われる情報設計",
    body: "ChatGPT・GeminiなどのAI検索エンジンは、信頼性が高く構造化された情報を優先的に引用します。E-E-A-T・FAQ・構造化データを整え、AI検索時代に備えた設計を行います。",
    href: "/aio",
    label: "AIO対策を詳しく",
    img: "/ChatGPT Image 2026年6月14日 21_08_58 (6).png",
    accent: "#A78BFA",
  },
  {
    num: "04",
    title: "問い合わせにつながる導線設計",
    body: "アクセスを集めるだけでは売上は変わりません。ユーザーの行動を設計し、問い合わせ・予約・購入へ誘導する導線をサイト全体で構築します。CVRを最大化する設計思想です。",
    href: "/web-design",
    label: "Web制作を詳しく",
    img: "/ChatGPT Image 2026年6月13日 20_02_56.png",
    accent: "#F59E0B",
  },
];

function Panel({ panel }: { panel: (typeof PANELS)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      style={{
        padding: "clamp(40px, 6vh, 80px) 0",
        borderBottom: "1px solid #E8E4DC",
        position: "relative",
      }}
    >
      <div className="dark-panel-row">
        {/* Text content */}
        <div>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-display)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: panel.accent,
              opacity: 0.7,
              marginBottom: "14px",
            }}
          >
            {panel.num}
          </span>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(18px, 2.2vw, 28px)",
              color: "#0B1628",
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: "16px",
            }}
          >
            {panel.title}
          </h3>
          <p
            style={{
              fontSize: "13px",
              color: "#6B7280",
              lineHeight: "1.95",
              marginBottom: "24px",
              maxWidth: "520px",
            }}
          >
            {panel.body}
          </p>
          <Link
            href={panel.href}
            style={{
              fontSize: "11px",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.1em",
              color: "#9CA3AF",
              borderBottom: "1px solid #D1C9BE",
              paddingBottom: "2px",
              textDecoration: "none",
            }}
          >
            {panel.label}&nbsp;→
          </Link>
        </div>

        {/* Image */}
        <div
          className="dark-panel-img"
          style={{ position: "relative", overflow: "hidden", flexShrink: 0 }}
        >
          <Image
            src={panel.img}
            alt={panel.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 28vw"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(245,243,238,0.2) 0%, transparent 70%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: `linear-gradient(90deg, ${panel.accent}60, transparent)`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function DarkFeaturePanels() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });

  return (
    <section
      style={{
        background: "#F8F6F2",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid #E8E4DC",
      }}
    >
      <div
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 60px)",
        }}
      >
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            paddingTop: "clamp(64px, 10vh, 112px)",
            paddingBottom: "clamp(40px, 5vh, 64px)",
            borderBottom: "1px solid #E8E4DC",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "0.3em",
              color: "#9CA3AF",
              fontSize: "10px",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            What We Do
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(22px, 3.2vw, 40px)",
              color: "#0B1628",
              lineHeight: 1.25,
              fontWeight: 700,
            }}
          >
            集客を設計する、4つの軸。
          </h2>
        </motion.div>

        {/* Panels */}
        {PANELS.map((panel) => (
          <Panel key={panel.num} panel={panel} />
        ))}
      </div>

      <div style={{ height: "clamp(40px, 6vh, 72px)" }} />

      <style>{`
        .dark-panel-row {
          display: grid;
          grid-template-columns: 1fr clamp(180px, 28vw, 340px);
          gap: clamp(28px, 4vw, 64px);
          align-items: center;
        }
        .dark-panel-img {
          height: clamp(140px, 18vw, 220px);
        }
        @media (max-width: 768px) {
          .dark-panel-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .dark-panel-img {
            height: 200px;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

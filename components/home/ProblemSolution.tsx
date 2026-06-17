"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ITEMS = [
  {
    problem: "問い合わせが増えない",
    solution: "集客動線の設計から見直します。SEO・MEO・導線設計・CTAの最適化により、サイトへの流入とコンバージョンを同時に改善します。",
    href: "/problems/no-inquiries",
    service: "SEO + Web制作",
    serviceHref: "/services",
  },
  {
    problem: "Googleマップに表示されない",
    solution: "Googleビジネスプロフィールの整備・カテゴリ最適化・口コミ獲得・NAP統一により、地域検索での上位表示を実現します。",
    href: "/problems/google-not-showing",
    service: "MEO対策",
    serviceHref: "/services/meo",
  },
  {
    problem: "検索順位が上がらない",
    solution: "キーワード設計の見直し・コンテンツの質向上・テクニカルSEOの改善を組み合わせ、持続的な順位改善を行います。",
    href: "/problems/poor-seo-ranking",
    service: "SEO対策",
    serviceHref: "/services/seo",
  },
  {
    problem: "AI検索に出てこない",
    solution: "E-E-A-T強化・構造化データ・FAQ最適化・llms.txt設定により、ChatGPT・Geminiなどへの引用率を高めます。",
    href: "/problems/chatgpt-not-mentioned",
    service: "AIO対策",
    serviceHref: "/services/aio",
  },
  {
    problem: "SNS投稿が成果につながらない",
    solution: "投稿コンセプトの設計から始め、MEOとの連携・ハッシュタグ戦略・エンゲージメント改善で集客導線を構築します。",
    href: "/problems/sns-no-results",
    service: "SNS運用",
    serviceHref: "/services/sns",
  },
  {
    problem: "競合に検索で負けている",
    solution: "競合分析・キーワードギャップ調査・コンテンツ差別化により、ニッチキーワードから確実に上位表示を狙います。",
    href: "/problems/losing-to-competitors",
    service: "SEO対策",
    serviceHref: "/services/seo",
  },
];

export default function ProblemSolution() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      style={{
        background: "#F5F3EE",
        padding: "clamp(72px, 10vh, 120px) 0",
        overflow: "hidden",
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
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "clamp(40px, 6vh, 64px)" }}
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
            Problems &amp; Solutions
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(22px, 3vw, 38px)",
              color: "#0B1628",
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            よくあるWeb集客の課題。
          </h2>
        </motion.div>

        {/* Desktop: 2-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(32px, 5vw, 72px)",
          }}
          className="problem-grid"
        >
          {/* Left: problem list */}
          <div>
            {ITEMS.map((item, i) => (
              <motion.button
                key={item.problem}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 * i }}
                onClick={() => setActive(i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid #E8E4DC",
                  padding: "20px 0",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    color: active === i ? "#0B1628" : "#C4BAB0",
                    minWidth: "24px",
                    transition: "color 0.3s",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(14px, 1.4vw, 17px)",
                    color: active === i ? "#0B1628" : "#6B7280",
                    fontWeight: active === i ? 700 : 400,
                    transition: "color 0.3s, font-weight 0.3s",
                    lineHeight: 1.4,
                  }}
                >
                  {item.problem}
                </span>
                {active === i && (
                  <motion.div
                    layoutId="active-indicator"
                    style={{
                      marginLeft: "auto",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "#0B1628",
                      flexShrink: 0,
                    }}
                  />
                )}
              </motion.button>
            ))}

            <div style={{ paddingTop: "32px" }}>
              <Link
                href="/problems"
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
                すべてのお悩みを見る →
              </Link>
            </div>
          </div>

          {/* Right: solution panel */}
          <div
            style={{
              position: "relative",
              minHeight: "320px",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#ffffff",
                  border: "1px solid #E8E4DC",
                  padding: "clamp(28px, 4vw, 44px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "9px",
                      letterSpacing: "0.25em",
                      color: "#9CA3AF",
                      textTransform: "uppercase",
                      marginBottom: "20px",
                    }}
                  >
                    Solution
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(14px, 1.6vw, 18px)",
                      color: "#6B7280",
                      fontWeight: 400,
                      marginBottom: "16px",
                      lineHeight: 1.4,
                    }}
                  >
                    {ITEMS[active].problem}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(17px, 2vw, 22px)",
                      color: "#0B1628",
                      fontWeight: 700,
                      lineHeight: 1.6,
                      marginBottom: "24px",
                    }}
                  >
                    {ITEMS[active].solution}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: "1px solid #E8E4DC",
                    paddingTop: "20px",
                    flexWrap: "wrap",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      padding: "5px 12px",
                      border: "1px solid #E8E4DC",
                      color: "#374151",
                      fontFamily: "var(--font-display)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {ITEMS[active].service}
                  </span>
                  <Link
                    href={ITEMS[active].href}
                    style={{
                      fontSize: "12px",
                      fontFamily: "var(--font-display)",
                      letterSpacing: "0.08em",
                      color: "#0B1628",
                      borderBottom: "1px solid #0B1628",
                      paddingBottom: "2px",
                      textDecoration: "none",
                    }}
                  >
                    詳しく見る →
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .problem-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

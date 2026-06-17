"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const NODES = [
  { label: "MEO対策", en: "Local Map", href: "/meo", x: 50, y: 5, accent: "#C4A96A", desc: "Googleマップ上位" },
  { label: "SEO対策", en: "Search SEO", href: "/seo", x: 90, y: 38, accent: "#7EC8C8", desc: "検索上位表示" },
  { label: "AIO対策", en: "AI Search", href: "/aio", x: 75, y: 80, accent: "#A78BFA", desc: "AI検索引用" },
  { label: "Web制作", en: "Production", href: "/web-design", x: 25, y: 80, accent: "#F59E0B", desc: "問い合わせ受け皿" },
  { label: "SNS運用", en: "Social", href: "/sns", x: 10, y: 38, accent: "#F472B6", desc: "認知・MEO連携" },
  { label: "AI活用", en: "AI Biz", href: "/ai", x: 50, y: 65, accent: "#34D399", desc: "業務効率化" },
];

export default function ServiceEcosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section
      style={{
        background: "#0B1628",
        padding: "clamp(72px, 10vh, 120px) 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(124,195,200,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

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
          style={{ marginBottom: "clamp(48px, 6vh, 80px)", maxWidth: "560px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "0.3em",
              color: "rgba(196,169,106,0.55)",
              fontSize: "10px",
              marginBottom: "16px",
              textTransform: "uppercase",
            }}
          >
            Ecosystem
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(22px, 3vw, 38px)",
              color: "#ffffff",
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: "16px",
            }}
          >
            6つの事業は、<br />連動して機能する。
          </h2>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.42)", lineHeight: "1.9" }}>
            MEO・SEO・AIO・Web制作・SNS・AI活用は独立したサービスではなく、互いに連動することで複数の集客経路を構築します。
          </p>
        </motion.div>

        {/* Grid layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.05)",
          }}
          className="ecosystem-grid"
        >
          {NODES.map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.08 }}
            >
              <Link
                href={node.href}
                style={{ textDecoration: "none", display: "block" }}
                className="ecosystem-node"
              >
                <div
                  style={{
                    padding: "clamp(24px, 3vw, 40px)",
                    background: "#0B1628",
                    position: "relative",
                    overflow: "hidden",
                    minHeight: "160px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  className="ecosystem-inner"
                >
                  {/* Accent top line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: `linear-gradient(90deg, ${node.accent}50, transparent)`,
                      transformOrigin: "left",
                    }}
                  />

                  {/* Content */}
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "9px",
                        letterSpacing: "0.22em",
                        color: node.accent,
                        opacity: 0.7,
                        textTransform: "uppercase",
                        marginBottom: "12px",
                      }}
                    >
                      {node.en}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(15px, 1.6vw, 19px)",
                        color: "#ffffff",
                        fontWeight: 700,
                        marginBottom: "8px",
                      }}
                    >
                      {node.label}
                    </p>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.38)", lineHeight: "1.6" }}>
                      {node.desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div style={{ marginTop: "20px" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontFamily: "var(--font-display)",
                        letterSpacing: "0.08em",
                        color: "rgba(255,255,255,0.2)",
                      }}
                    >
                      詳しく →
                    </span>
                  </div>

                  {/* Hover glow */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `radial-gradient(circle at 30% 50%, ${node.accent}08 0%, transparent 65%)`,
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Center connection label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            textAlign: "center",
            marginTop: "48px",
            padding: "24px",
            border: "1px solid rgba(255,255,255,0.06)",
            display: "inline-block",
            width: "100%",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(13px, 1.5vw, 16px)",
              color: "rgba(255,255,255,0.35)",
              lineHeight: "1.9",
            }}
          >
            6つを組み合わせることで、検索 → マップ → AI → SNS → サイト → 問い合わせの
            <br className="hidden md:block" />
            集客フローが完成します。
          </p>
          <Link
            href="/services"
            style={{
              display: "inline-block",
              marginTop: "16px",
              fontSize: "12px",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.4)",
              borderBottom: "1px solid rgba(255,255,255,0.12)",
              paddingBottom: "2px",
              textDecoration: "none",
            }}
          >
            サービス一覧を見る →
          </Link>
        </motion.div>
      </div>

      <style>{`
        @media (hover: hover) {
          .ecosystem-node .ecosystem-inner {
            transition: background 0.3s ease;
          }
          .ecosystem-node:hover .ecosystem-inner {
            background: #0F1E38;
          }
        }
        @media (max-width: 640px) {
          .ecosystem-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

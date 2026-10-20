"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const NODES = [
  { num: "01", label: "MEO対策", en: "Local Map", href: "/meo", accent: "#C4A96A", desc: "Googleマップ上位表示で来店・電話・予約を増やす。地域集客の核心です。" },
  { num: "02", label: "SEO対策", en: "Search SEO", href: "/seo", accent: "#2A9BA0", desc: "広告費ゼロで検索流入を増やす。中長期の集客基盤を構築します。" },
  { num: "03", label: "AIO対策", en: "AI Search", href: "/aio", accent: "#7C5FC0", desc: "ChatGPT・Geminiに引用されるサイトへ。AI検索時代の集客設計。" },
  { num: "04", label: "Web制作", en: "Production", href: "/web-design", accent: "#C07820", desc: "問い合わせにつながる高品質サイト。SEO・CVR設計を重視。" },
  { num: "05", label: "SNS運用", en: "Social", href: "/sns", accent: "#B0406A", desc: "Instagram・LINE・Google投稿を代行。MEOとの相乗効果を生む。" },
  { num: "06", label: "AI活用支援", en: "AI Biz", href: "/ai", accent: "#1E8A5C", desc: "ChatGPT・Make・Zapierで業務効率化。AIを現場に導入します。" },
];

export default function ServiceEcosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "clamp(80px, 11vh, 128px) 0",
        overflow: "hidden",
        position: "relative",
        borderTop: "1px solid #E8E4DC",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "clamp(300px, 45vw, 700px)",
          height: "clamp(300px, 45vw, 700px)",
          borderRadius: "50%",
          border: "1px solid rgba(11,22,40,0.04)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-3%",
          width: "clamp(200px, 30vw, 480px)",
          height: "clamp(200px, 30vw, 480px)",
          borderRadius: "50%",
          border: "1px solid rgba(11,22,40,0.03)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 60px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "clamp(48px, 7vh, 80px)" }}
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
            Ecosystem
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(22px, 3vw, 38px)",
              color: "#0B1628",
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: "16px",
              maxWidth: "480px",
            }}
          >
            6つの事業は、<br />連動して機能する。
          </h2>
          <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: "1.9", maxWidth: "520px" }}>
            MEO・SEO・AIO・Web制作・SNS・AI活用は独立したサービスではなく、互いに連動することで複数の集客経路を構築します。
          </p>
        </motion.div>

        {/* Card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(16px, 2.5vw, 28px)",
          }}
          className="ecosystem-grid"
        >
          {NODES.map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.07 }}
            >
              <Link
                href={node.href}
                style={{ textDecoration: "none", display: "block" }}
                className="eco-card-link"
              >
                <div
                  style={{
                    padding: "clamp(24px, 3vw, 36px)",
                    background: "#FFFFFF",
                    border: "1px solid #E8E4DC",
                    borderRadius: "2px",
                    position: "relative",
                    overflow: "hidden",
                    minHeight: "200px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 2px 12px rgba(11,22,40,0.04)",
                    transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  }}
                  className="eco-card-inner"
                >
                  {/* Accent top line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: `linear-gradient(90deg, ${node.accent}70 0%, transparent 60%)`,
                    }}
                  />

                  <div>
                    {/* Number + EN label row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "9px",
                          letterSpacing: "0.22em",
                          color: node.accent,
                          textTransform: "uppercase",
                        }}
                      >
                        {node.en}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "11px",
                          letterSpacing: "0.1em",
                          color: "rgba(11,22,40,0.1)",
                          fontWeight: 300,
                        }}
                      >
                        {node.num}
                      </span>
                    </div>

                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(16px, 1.7vw, 20px)",
                        color: "#0B1628",
                        fontWeight: 700,
                        marginBottom: "12px",
                        lineHeight: 1.3,
                      }}
                    >
                      {node.label}
                    </p>
                    <p style={{ fontSize: "12px", color: "#6B7280", lineHeight: "1.75" }}>
                      {node.desc}
                    </p>
                  </div>

                  <div style={{ marginTop: "20px" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontFamily: "var(--font-display)",
                        letterSpacing: "0.08em",
                        color: "#C4BAB0",
                        borderBottom: "1px solid #E8E4DC",
                        paddingBottom: "1px",
                      }}
                    >
                      詳しく →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Connection note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.75 }}
          style={{
            textAlign: "center",
            marginTop: "clamp(40px, 5vh, 60px)",
            padding: "clamp(20px, 3vw, 32px)",
            border: "1px solid #E8E4DC",
            background: "#F8F6F2",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(13px, 1.4vw, 16px)",
              color: "#6B7280",
              lineHeight: "1.9",
            }}
          >
            6つを組み合わせることで、検索 → マップ → AI → SNS → サイト → 問い合わせの集客フローが完成します。
          </p>
          <Link
            href="/services"
            style={{
              display: "inline-block",
              marginTop: "14px",
              fontSize: "12px",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.1em",
              color: "#6B7280",
              borderBottom: "1px solid #D1C9BE",
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
          .eco-card-link:hover .eco-card-inner {
            box-shadow: 0 8px 32px rgba(11,22,40,0.09) !important;
            transform: translateY(-2px);
          }
        }
        @media (max-width: 640px) {
          .ecosystem-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 420px) {
          .ecosystem-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

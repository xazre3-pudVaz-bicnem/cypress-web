"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function FinalContactBand() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      style={{
        background: "#0B1628",
        position: "relative",
        overflow: "hidden",
        padding: "clamp(80px, 12vh, 140px) 0",
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src="/ChatGPT Image 2026年6月13日 19_11_20.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          style={{ opacity: 0.06 }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(11,22,40,0.96) 40%, rgba(11,22,40,0.75) 100%)",
        }}
      />

      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(196,169,106,0.3) 40%, rgba(196,169,106,0.3) 60%, transparent)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 60px)",
        }}
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "clamp(40px, 6vw, 96px)",
            alignItems: "center",
          }}
          className="contact-band-grid"
        >
          {/* Left */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.3em",
                color: "rgba(196,169,106,0.55)",
                fontSize: "10px",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              Contact
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(24px, 3.2vw, 44px)",
                color: "#ffffff",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: "20px",
              }}
            >
              Web集客に関する<br />ご相談を承っています。
            </h2>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: "1.95",
                marginBottom: "36px",
                maxWidth: "480px",
              }}
            >
              MEO・SEO・AIO・ホームページ制作・SNS運用に関するご相談を、初回無料でお受けしています。現在の状況をお聞きしたうえで、必要な施策をご提案します。
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  background: "#ffffff",
                  color: "#0B1628",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  fontFamily: "var(--font-serif)",
                  textDecoration: "none",
                }}
              >
                無料相談・お問い合わせ
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 24px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "13px",
                  letterSpacing: "0.05em",
                  fontFamily: "var(--font-display)",
                  textDecoration: "none",
                }}
              >
                サービス一覧
              </Link>
            </div>
          </div>

          {/* Right: links grid */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { label: "料金・費用について", sub: "各サービスの費用感", href: "/cost", prefix: "Cost" },
              { label: "ご利用の流れ", sub: "相談から運用開始まで", href: "/process", prefix: "Process" },
              { label: "よくある質問", sub: "お客様からの質問一覧", href: "/faq", prefix: "FAQ" },
              { label: "会社概要", sub: "株式会社サイプレスについて", href: "/company", prefix: "Company" },
            ].map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "18px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  textDecoration: "none",
                  gap: "16px",
                }}
                className="contact-link"
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "9px",
                      letterSpacing: "0.22em",
                      color: "rgba(255,255,255,0.25)",
                      marginBottom: "4px",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.prefix}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.7)",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.28)", marginTop: "2px" }}>
                    {item.sub}
                  </p>
                </div>
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth={2}
                  style={{ flexShrink: 0 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Company info row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            marginTop: "clamp(48px, 6vh, 72px)",
            paddingTop: "28px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            gap: "32px",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "13px",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "4px",
              }}
            >
              株式会社サイプレス
            </p>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.05em" }}>
              東京都葛飾区白鳥4-6-1-623&nbsp;&nbsp;|&nbsp;&nbsp;consulting.meo@gmail.com
            </p>
          </div>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {[
              { label: "プライバシーポリシー", href: "/privacy-policy" },
              { label: "会社概要", href: "/company/profile" },
              { label: "採用情報", href: "/recruit" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.2)",
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.05em",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact-link { transition: opacity 0.2s; }
        .contact-link:hover { opacity: 0.75; }
        @media (max-width: 640px) {
          .contact-band-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

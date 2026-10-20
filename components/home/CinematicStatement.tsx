"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const QUOTE = "正しい会社が、正しく選ばれる世界をつくりたい。";

/**
 * ピン留めシネマティック・ステートメント。
 * スクロールに連動して理念の一文字ずつが「点灯」し、
 * 背後で巨大な CYPRESS ワードマークがゆっくりスケールする。
 */
function Char({
  ch,
  index,
  total,
  progress,
}: {
  ch: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // 文字ごとの点灯ウィンドウ（0.15〜0.62 の間で順番に）
  const start = 0.15 + (index / total) * 0.42;
  const end = start + 0.06;
  const opacity = useTransform(progress, [start, end], [0.13, 1]);
  const y = useTransform(progress, [start, end], [10, 0]);

  return (
    <motion.span
      aria-hidden
      style={{
        opacity,
        y,
        display: "inline-block",
        willChange: "opacity, transform",
      }}
    >
      {ch}
    </motion.span>
  );
}

export default function CinematicStatement() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // 巨大ワードマークの呼吸
  const markScale = useTransform(scrollYProgress, [0, 1], [0.92, 1.18]);
  const markOpacity = useTransform(scrollYProgress, [0, 0.25, 0.85, 1], [0, 0.07, 0.07, 0]);

  // 本文とリンクは文字点灯が終わってから登場
  const bodyOpacity = useTransform(scrollYProgress, [0.66, 0.82], [0, 1]);
  const bodyY = useTransform(scrollYProgress, [0.66, 0.82], [28, 0]);

  // ラベルの登場
  const labelOpacity = useTransform(scrollYProgress, [0.05, 0.18], [0, 1]);

  // 真鍮ラインの伸長
  const lineScale = useTransform(scrollYProgress, [0.12, 0.6], [0, 1]);

  const chars = QUOTE.split("");

  return (
    <section
      ref={trackRef}
      style={{ height: "260vh", position: "relative", background: "#060E1C", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100svh",
          minHeight: "620px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Subtle blueprint grid */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Vignette */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 110% 85% at 50% 50%, transparent 50%, rgba(3,8,18,0.6) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* 巨大ワードマーク */}
        <motion.p
          aria-hidden
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
            scale: markScale,
            opacity: markOpacity,
            fontFamily: "var(--font-display)",
            fontSize: "clamp(90px, 17vw, 280px)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            color: "#C4A96A",
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
            lineHeight: 1,
          }}
        >
          CYPRESS
        </motion.p>

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "880px",
            margin: "0 auto",
            padding: "0 clamp(24px, 5vw, 60px)",
            textAlign: "center",
          }}
        >
          <motion.p
            style={{
              opacity: labelOpacity,
              fontFamily: "var(--font-display)",
              letterSpacing: "0.32em",
              color: "rgba(196,169,106,0.75)",
              fontSize: "10px",
              marginBottom: "34px",
              textTransform: "uppercase",
            }}
          >
            Philosophy
          </motion.p>

          {/* スクロール連動で一文字ずつ点灯する理念 */}
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(24px, 4.2vw, 52px)",
              color: "#FFFFFF",
              lineHeight: 1.75,
              fontWeight: 700,
              marginBottom: "34px",
              letterSpacing: "0.02em",
            }}
          >
            <span className="sr-only">{QUOTE}</span>
            {chars.map((ch, i) => (
              <Char key={i} ch={ch} index={i} total={chars.length} progress={scrollYProgress} />
            ))}
          </p>

          {/* 真鍮ライン */}
          <motion.div
            aria-hidden
            style={{
              scaleX: lineScale,
              transformOrigin: "50% 50%",
              height: "1px",
              width: "min(320px, 60%)",
              margin: "0 auto 34px",
              background: "linear-gradient(90deg, transparent, rgba(196,169,106,0.55), transparent)",
            }}
          />

          <motion.div style={{ opacity: bodyOpacity, y: bodyY }}>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.55)",
                lineHeight: "1.95",
                maxWidth: "560px",
                margin: "0 auto 32px",
              }}
            >
              素晴らしい技術・サービス・想いを持ちながら、Web上での露出が少ないだけで機会を逃している中小企業が数多く存在します。AIとWebマーケティングを活用し、その橋渡しをすることが私たちの使命です。
            </p>
            <Link
              href="/company/philosophy"
              style={{
                fontSize: "12px",
                fontFamily: "var(--font-display)",
                letterSpacing: "0.1em",
                color: "rgba(196,169,106,0.85)",
                borderBottom: "1px solid rgba(196,169,106,0.4)",
                paddingBottom: "2px",
                textDecoration: "none",
              }}
            >
              企業理念を読む →
            </Link>
          </motion.div>
        </div>

        {/* コーナーティック（設計図の趣） */}
        {([
          { top: "28px", left: "28px", borderTop: "1px solid", borderLeft: "1px solid" },
          { top: "28px", right: "28px", borderTop: "1px solid", borderRight: "1px solid" },
          { bottom: "28px", left: "28px", borderBottom: "1px solid", borderLeft: "1px solid" },
          { bottom: "28px", right: "28px", borderBottom: "1px solid", borderRight: "1px solid" },
        ] as const).map((pos, i) => (
          <div
            key={i}
            aria-hidden
            style={{
              position: "absolute",
              width: "22px",
              height: "22px",
              color: "rgba(196,169,106,0.35)",
              borderColor: "rgba(196,169,106,0.35)",
              ...pos,
            }}
          />
        ))}
      </div>
    </section>
  );
}

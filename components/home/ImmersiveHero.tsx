"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, type MotionValue } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const BRASS = "#C4A96A";

// フィルムグレイン（インラインSVGノイズ）
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

/* ─── 巨大タイポ：1文字ずつのマスクリビール ─── */
function GiantWord({
  word,
  delay,
  style,
  exitY,
}: {
  word: string;
  delay: number;
  style: React.CSSProperties;
  exitY: MotionValue<string>;
}) {
  return (
    <motion.div style={{ y: exitY }}>
      <div style={{ overflow: "hidden", padding: "0.06em 0" }}>
        <span className="sr-only">{word}</span>
        <div
          aria-hidden
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(52px, 11vw, 168px)",
            fontWeight: 300,
            letterSpacing: "-0.01em",
            lineHeight: 0.98,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            ...style,
          }}
        >
          {word.split("").map((ch, i) => (
            <motion.span
              key={i}
              initial={{ y: "112%", rotate: 4, opacity: 0, filter: "blur(12px)" }}
              animate={{ y: 0, rotate: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.15, ease: EASE, delay: delay + i * 0.03 }}
              style={{ display: "inline-block", willChange: "transform", transformOrigin: "0% 100%" }}
            >
              {ch === " " ? " " : ch}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── レーダー／オービタルシーン（MEO＝マップ集客のメタファー） ─── */
function RadarScene() {
  const pins = [
    { left: "63%", top: "31%", delay: 2.2 },
    { left: "38%", top: "24%", delay: 3.1 },
    { left: "71%", top: "58%", delay: 4.0 },
    { left: "30%", top: "63%", delay: 4.9 },
  ];
  return (
    <div
      aria-hidden
      className="radar-scene"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "min(92vw, 860px)",
        aspectRatio: "1 / 1",
        pointerEvents: "none",
      }}
    >
      {/* 同心円リング */}
      <svg viewBox="0 0 800 800" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <circle cx="400" cy="400" r="150" fill="none" stroke="rgba(196,169,106,0.16)" strokeWidth="1" />
        <circle cx="400" cy="400" r="245" fill="none" stroke="rgba(196,169,106,0.10)" strokeWidth="1" strokeDasharray="2 10" className="ring-spin-slow" style={{ transformOrigin: "400px 400px" }} />
        <circle cx="400" cy="400" r="330" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        <circle cx="400" cy="400" r="396" fill="none" stroke="rgba(196,169,106,0.08)" strokeWidth="1" strokeDasharray="1 14" className="ring-spin-rev" style={{ transformOrigin: "400px 400px" }} />
        {/* 十字クロスヘア */}
        <line x1="400" y1="30" x2="400" y2="120" stroke="rgba(196,169,106,0.22)" strokeWidth="1" />
        <line x1="400" y1="680" x2="400" y2="770" stroke="rgba(196,169,106,0.22)" strokeWidth="1" />
        <line x1="30" y1="400" x2="120" y2="400" stroke="rgba(196,169,106,0.22)" strokeWidth="1" />
        <line x1="680" y1="400" x2="770" y2="400" stroke="rgba(196,169,106,0.22)" strokeWidth="1" />
        {/* 目盛りティック */}
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i * 10 * Math.PI) / 180;
          const x1 = 400 + Math.cos(a) * 388;
          const y1 = 400 + Math.sin(a) * 388;
          const x2 = 400 + Math.cos(a) * (i % 9 === 0 ? 372 : 380);
          const y2 = 400 + Math.sin(a) * (i % 9 === 0 ? 372 : 380);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.10)" strokeWidth="1" />;
        })}
      </svg>

      {/* レーダースイープ（回転する扇形の光） */}
      <div
        className="radar-sweep"
        style={{
          position: "absolute",
          inset: "9%",
          borderRadius: "50%",
          background: `conic-gradient(from 0deg, rgba(196,169,106,0.20) 0deg, rgba(196,169,106,0.05) 42deg, transparent 70deg, transparent 360deg)`,
          maskImage: "radial-gradient(circle, black 0%, black 62%, transparent 66%)",
          WebkitMaskImage: "radial-gradient(circle, black 0%, black 62%, transparent 66%)",
        }}
      />

      {/* シグナルピン（見込み客が見つける瞬間） */}
      {pins.map((p, i) => (
        <div key={i} style={{ position: "absolute", left: p.left, top: p.top }}>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: p.delay, duration: 0.5, ease: EASE }}
            style={{
              position: "absolute",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: BRASS,
              boxShadow: `0 0 12px ${BRASS}`,
            }}
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0], scale: [0.4, 2.6, 3.4] }}
            transition={{ delay: p.delay, duration: 2.6, repeat: Infinity, repeatDelay: 1.6, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: "-8px",
              top: "-8px",
              width: "21px",
              height: "21px",
              borderRadius: "50%",
              border: `1px solid ${BRASS}`,
            }}
          />
        </div>
      ))}
    </div>
  );
}

/* ─── サービスマーキー（無限スクロールの帯） ─── */
const SERVICES_TEXT = ["MEO", "SEO", "AIO", "WEB PRODUCTION", "SNS", "AI INTEGRATION"];

function MarqueeBand() {
  const row = SERVICES_TEXT.map((s, i) => (
    <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
      <span style={{ padding: "0 28px" }}>{s}</span>
      <span style={{ color: "rgba(196,169,106,0.55)", fontSize: "8px" }}>✳</span>
    </span>
  ));
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.9, duration: 1.2 }}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(4,10,22,0.55)",
        backdropFilter: "blur(6px)",
        overflow: "hidden",
        zIndex: 12,
      }}
    >
      <span className="sr-only">MEO / SEO / AIO / Web Production / SNS / AI</span>
      <div aria-hidden className="hero-marquee" style={{ display: "flex", whiteSpace: "nowrap", padding: "13px 0" }}>
        {[0, 1, 2, 3].map((n) => (
          <div
            key={n}
            style={{
              display: "inline-flex",
              flexShrink: 0,
              fontFamily: "var(--font-display)",
              fontSize: "11px",
              letterSpacing: "0.32em",
              color: "rgba(255,255,255,0.38)",
            }}
          >
            {row}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── HUDコーナーディテール ─── */
function HudDetail({ style, lines, delay }: { style: React.CSSProperties; lines: string[]; delay: number }) {
  return (
    <motion.div
      aria-hidden
      className="hud-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 1 }}
      style={{
        position: "absolute",
        zIndex: 11,
        fontFamily: "var(--font-display)",
        fontSize: "9px",
        letterSpacing: "0.22em",
        lineHeight: 2,
        color: "rgba(255,255,255,0.28)",
        textTransform: "uppercase",
        ...style,
      }}
    >
      {lines.map((l, i) => (
        <div key={i}>{l}</div>
      ))}
    </motion.div>
  );
}

export default function ImmersiveHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });
  const radarX = useTransform(springX, [-0.5, 0.5], ["-2.5%", "2.5%"]);
  const radarY = useTransform(springY, [-0.5, 0.5], ["-1.8%", "1.8%"]);
  const typeX = useTransform(springX, [-0.5, 0.5], ["0.8%", "-0.8%"]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  // カメラを押し込むような退場
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const radarExitScale = useTransform(scrollYProgress, [0, 1], [1, 1.55]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.35, 0.7], [1, 1.4, 0]);
  const wordY1 = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);
  const wordY2 = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const wordY3 = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]);
  const subY = useTransform(scrollYProgress, [0, 1], ["0%", "230%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        height: "100svh",
        minHeight: "700px",
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(ellipse 140% 100% at 50% -10%, #0E1D33 0%, #081226 45%, #04091495 100%), #040914",
      }}
    >
      {/* ── 地平線の光（サンライズブルーム） ── */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 2.2, ease: "easeOut" }}
        style={{ position: "absolute", inset: 0, opacity: glowOpacity }}
      >
        <div
          className="horizon-glow"
          style={{
            position: "absolute",
            left: "-10%",
            right: "-10%",
            bottom: "-38%",
            height: "78%",
            background:
              "radial-gradient(ellipse 55% 48% at 50% 100%, rgba(224,168,86,0.34) 0%, rgba(196,124,58,0.16) 34%, rgba(140,84,52,0.07) 55%, transparent 72%)",
          }}
        />
      </motion.div>

      {/* 地平線ライン */}
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: EASE }}
        style={{
          position: "absolute",
          bottom: "23%",
          left: "6%",
          right: "6%",
          height: "1px",
          transformOrigin: "50% 50%",
          background: `linear-gradient(90deg, transparent, rgba(224,168,86,0.5) 30%, rgba(224,168,86,0.5) 70%, transparent)`,
          zIndex: 3,
        }}
      />

      {/* ── レーダーシーン（マウスパララックス＋スクロール拡大退場） ── */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          x: radarX,
          y: radarY,
          scale: radarExitScale,
          opacity: sceneOpacity,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 1.6, ease: EASE }}
          style={{ position: "absolute", inset: 0 }}
        >
          <RadarScene />
        </motion.div>
      </motion.div>

      {/* パースペクティブグリッド（床面） */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "23%",
          backgroundImage:
            "linear-gradient(rgba(196,169,106,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(196,169,106,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          transform: "perspective(420px) rotateX(58deg)",
          transformOrigin: "50% 0%",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 90%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 90%)",
        }}
      />

      {/* ── メインタイポグラフィ ── */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 clamp(20px, 4vw, 48px)",
          scale: sceneScale,
          opacity: sceneOpacity,
          x: typeX,
        }}
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.7em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.25 }}
          style={{
            fontFamily: "var(--font-display)",
            color: "rgba(196,169,106,0.8)",
            fontSize: "10px",
            textTransform: "uppercase",
            marginBottom: "clamp(24px, 3.5vh, 44px)",
          }}
        >
          AI × Web Marketing Agency — Tokyo
        </motion.p>

        <GiantWord
          word="Reach."
          delay={0.55}
          exitY={wordY1}
          style={{ color: "#FFFFFF" }}
        />
        <GiantWord
          word="Be Chosen."
          delay={0.78}
          exitY={wordY2}
          style={{
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.5)",
          }}
        />
        <GiantWord
          word="Grow."
          delay={1.01}
          exitY={wordY3}
          style={{
            background: `linear-gradient(115deg, #E8CD96 0%, ${BRASS} 45%, #8F7439 100%)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 1.45 }}
          style={{ y: subY, marginTop: "clamp(28px, 4.5vh, 52px)" }}
        >
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(15px, 1.9vw, 22px)",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            中小企業のWeb集客を、設計から運用まで。
          </h1>
        </motion.div>
      </motion.div>

      {/* ── HUDディテール ── */}
      <HudDetail
        delay={1.7}
        style={{ top: "88px", left: "clamp(20px, 4vw, 48px)", textAlign: "left" }}
        lines={["Tokyo — Katsushika", "35.7532° N / 139.8478° E"]}
      />
      <HudDetail
        delay={1.85}
        style={{ top: "88px", right: "clamp(20px, 4vw, 48px)", textAlign: "right" }}
        lines={["Cypress Inc.", "Est. 2026"]}
      />
      <HudDetail
        delay={2.0}
        style={{ bottom: "76px", right: "clamp(20px, 4vw, 48px)", textAlign: "right" }}
        lines={["Signal Acquired", "Local Search Intelligence"]}
      />

      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "76px",
          left: "clamp(20px, 4vw, 48px)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          zIndex: 11,
        }}
      >
        <div style={{ width: "1px", height: "44px", background: "rgba(255,255,255,0.12)", position: "relative", overflow: "hidden" }}>
          <motion.div
            style={{ position: "absolute", top: 0, left: 0, right: 0, height: "45%", background: "rgba(196,169,106,0.8)" }}
            animate={{ y: ["0%", "230%"] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "9px",
            letterSpacing: "0.3em",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </p>
      </motion.div>

      {/* ビネット＋グレイン */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 120% 95% at 50% 42%, transparent 52%, rgba(2,6,14,0.62) 100%)",
          pointerEvents: "none",
          zIndex: 8,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: GRAIN,
          opacity: 0.06,
          mixBlendMode: "overlay",
          pointerEvents: "none",
          zIndex: 9,
        }}
      />

      {/* サービスマーキー */}
      <MarqueeBand />

      <style>{`
        .hero-marquee {
          animation: hero-marquee-slide 36s linear infinite;
        }
        @keyframes hero-marquee-slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .radar-sweep {
          animation: radar-rotate 7.5s linear infinite;
        }
        @keyframes radar-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .ring-spin-slow {
          animation: radar-rotate 70s linear infinite;
        }
        .ring-spin-rev {
          animation: radar-rotate 100s linear infinite reverse;
        }
        .horizon-glow {
          animation: glow-breathe 9s ease-in-out infinite alternate;
        }
        @keyframes glow-breathe {
          from { opacity: 0.75; transform: scaleX(1); }
          to { opacity: 1; transform: scaleX(1.06); }
        }
        @media (max-width: 640px) {
          .hud-detail { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-marquee, .radar-sweep, .ring-spin-slow, .ring-spin-rev, .horizon-glow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

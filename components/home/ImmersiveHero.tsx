"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, type MotionValue } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

// フィルムグレイン（インラインSVGノイズ）
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

const WORDS = ["Reach.", "Be Chosen.", "Grow."] as const;

function RevealWord({
  word,
  wordIndex,
  color,
  exitY,
  paddingBottom,
}: {
  word: string;
  wordIndex: number;
  color: string;
  exitY: MotionValue<string>;
  paddingBottom: string;
}) {
  return (
    <motion.div style={{ y: exitY, lineHeight: 1 }}>
      <div style={{ overflow: "hidden", paddingBottom }}>
        <span className="sr-only">{word}</span>
        <div
          aria-hidden
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(50px, 8.5vw, 124px)",
            color,
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          {word.split("").map((ch, i) => (
            <motion.span
              key={`${ch}-${i}`}
              aria-hidden
              initial={{ y: "115%", rotate: 5, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, rotate: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 1.1,
                ease: EASE,
                delay: 0.12 + wordIndex * 0.16 + i * 0.028,
              }}
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

/**
 * ヒーロー背景動画の読み込み可否。
 * LCPは常に hero.jpg（priority付きImage）が担い、動画はマウント後に後追いで読む。
 * 以下のいずれかに該当する場合は動画を読み込まない（静止画のまま）:
 *  - prefers-reduced-motion: reduce
 *  - Save-Data が有効、または低速回線（2G/3G）
 *  - 狭い画面（モバイルは2.8MBの転送に見合わない）
 */
function shouldLoadHeroVideo(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (window.innerWidth < 768) return false;

  const conn = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }
  ).connection;
  if (conn?.saveData) return false;
  if (conn?.effectiveType && /(^|-)2g$|3g/.test(conn.effectiveType)) return false;

  return true;
}

export default function ImmersiveHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // src は最初空。条件を満たしたときだけ後から差し込む（preload="none" と併せて初期転送を防ぐ）
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (!shouldLoadHeroVideo()) return;

    let idleId: number | undefined;
    let timeoutId: number | undefined;

    // 動画の転送がLCPと帯域を奪い合わないよう、load 完了 → アイドル、の順で読み込む。
    const schedule = () => {
      const ric = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number })
        .requestIdleCallback;
      if (ric) idleId = ric(() => setVideoSrc("/hero-loop.mp4"), { timeout: 2000 });
      else timeoutId = window.setTimeout(() => setVideoSrc("/hero-loop.mp4"), 500);
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      window.removeEventListener("load", schedule);
      const cic = (window as Window & { cancelIdleCallback?: (h: number) => void }).cancelIdleCallback;
      if (idleId !== undefined) cic?.(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  // src が入ったら明示的に再生を試みる（autoPlay が効かないブラウザ対策）
  useEffect(() => {
    if (!videoSrc) return;
    videoRef.current?.play().catch(() => {
      /* 自動再生がブロックされた場合は静止画のまま。表示は崩れない。 */
    });
  }, [videoSrc]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 35, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 35, damping: 22 });
  const bgMoveX = useTransform(springX, [-0.5, 0.5], ["-3%", "3%"]);
  const bgMoveY = useTransform(springY, [-0.5, 0.5], ["-2%", "2%"]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const subY = useTransform(scrollYProgress, [0, 1], ["0%", "180%"]);

  // 3語がそれぞれ異なる速度で退場する（奥行きパララックス）
  const wordY1 = useTransform(scrollYProgress, [0, 1], ["0%", "46%"]);
  const wordY2 = useTransform(scrollYProgress, [0, 1], ["0%", "88%"]);
  const wordY3 = useTransform(scrollYProgress, [0, 1], ["0%", "140%"]);
  const wordYs = [wordY1, wordY2, wordY3];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={containerRef}
      style={{ height: "100svh", minHeight: "680px", position: "relative", overflow: "hidden", background: "#060E1C" }}
      onMouseMove={handleMouseMove}
    >
      {/* Parallax background: 外層=マウス+スクロール / 内層=常時ケンバーンズ */}
      <motion.div style={{ position: "absolute", inset: "-6%", x: bgMoveX, y: bgMoveY, scale: bgScale }}>
        <motion.div
          style={{ position: "absolute", inset: 0, y: bgY }}
          animate={{ scale: [1.02, 1.09] }}
          transition={{ duration: 22, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
        >
          {/* LCP要素。動画が再生できない環境ではこのまま背景として残る。 */}
          <Image
            src="/hero.jpg"
            alt="株式会社サイプレス — Web集客支援"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          {/* 背景ループ動画。hero.jpg の上にフェードインで重ねる。
              scaleX(-1): 光の塊が左に寄っており左寄せの見出しと競合するため左右反転する。
              scale(1.05): 動画に焼き込まれたフィルム風の黒縁・角丸を切り落とす。
              poster属性は付けない。真下の next/image が同じ hero.jpg を最適化して表示しており、
              poster を指定すると未最適化の原本を二重取得してLCPを押し下げる。 */}
          {videoSrc && (
            <video
              ref={videoRef}
              src={videoSrc}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden
              tabIndex={-1}
              onCanPlay={() => setVideoReady(true)}
              className="object-cover"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                transform: "scaleX(-1) scale(1.05)",
                opacity: videoReady ? 1 : 0,
                transition: "opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
                pointerEvents: "none",
              }}
            />
          )}
        </motion.div>
      </motion.div>

      {/* Second layer texture */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src="/ChatGPT Image 2026年6月13日 19_22_31.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          style={{ opacity: 0.12, mixBlendMode: "luminosity" }}
        />
      </div>

      {/* Cinematic gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(155deg, rgba(6,14,28,0.90) 0%, rgba(11,22,40,0.68) 48%, rgba(6,14,28,0.85) 100%)",
        }}
      />

      {/* Vignette（映画的な周辺減光） */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 120% 90% at 50% 45%, transparent 55%, rgba(3,8,18,0.55) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Film grain */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: GRAIN,
          opacity: 0.055,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />

      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      {/* Horizontal light line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.5 }}
        style={{
          position: "absolute",
          bottom: "38%",
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, rgba(196,169,106,0.22), rgba(255,255,255,0.05) 40%, transparent 90%)",
          transformOrigin: "left",
        }}
      />

      {/* 真鍮色のライトビーム（初回のみ斜めに一閃） */}
      <motion.div
        aria-hidden
        initial={{ x: "-70%", opacity: 0 }}
        animate={{ x: "170%", opacity: [0, 0.6, 0] }}
        transition={{ duration: 1.9, ease: "easeInOut", delay: 1.15 }}
        style={{
          position: "absolute",
          top: "-20%",
          bottom: "-20%",
          width: "34%",
          background:
            "linear-gradient(100deg, transparent 0%, rgba(196,169,106,0.06) 35%, rgba(255,255,255,0.10) 50%, rgba(196,169,106,0.06) 65%, transparent 100%)",
          transform: "skewX(-12deg)",
          pointerEvents: "none",
          zIndex: 5,
        }}
      />

      {/* Main content */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          opacity: contentOpacity,
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 60px)",
        }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12, letterSpacing: "0.55em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.32em" }}
          transition={{ duration: 1.2, ease: EASE }}
          style={{
            fontFamily: "var(--font-display)",
            color: "rgba(196,169,106,0.65)",
            fontSize: "10px",
            textTransform: "uppercase",
            marginBottom: "36px",
          }}
        >
          AI × Web Marketing Agency — Tokyo
        </motion.p>

        {/* Display headline — 文字単位のマスクリビール */}
        {WORDS.map((word, i) => (
          <RevealWord
            key={word}
            word={word}
            wordIndex={i}
            color={i === 0 ? "#ffffff" : i === 1 ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.06)"}
            exitY={wordYs[i]}
            paddingBottom={i < 2 ? "4px" : "48px"}
          />
        ))}

        {/* Japanese subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.85 }}
          style={{ y: subY }}
        >
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(15px, 1.8vw, 21px)",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.7,
              marginBottom: "10px",
              fontWeight: 400,
            }}
          >
            中小企業のWeb集客を、設計から運用まで。
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.05 }}
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.1em",
              fontFamily: "var(--font-display)",
            }}
          >
            MEO&nbsp;&nbsp;/&nbsp;&nbsp;SEO&nbsp;&nbsp;/&nbsp;&nbsp;AIO&nbsp;&nbsp;/&nbsp;&nbsp;Web Production&nbsp;&nbsp;/&nbsp;&nbsp;SNS&nbsp;&nbsp;/&nbsp;&nbsp;AI
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          zIndex: 10,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "9px",
            letterSpacing: "0.28em",
            color: "rgba(255,255,255,0.25)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </p>
        <div
          style={{
            width: "1px",
            height: "52px",
            background: "rgba(255,255,255,0.1)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              background: "rgba(196,169,106,0.75)",
              height: "42%",
            }}
            animate={{ y: ["0%", "220%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "160px",
          background: "linear-gradient(to top, rgba(6,14,28,0.6) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ImmersiveHero() {
  const containerRef = useRef<HTMLDivElement>(null);
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
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

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
      {/* Parallax background */}
      <motion.div
        style={{ position: "absolute", inset: "-6%", x: bgMoveX, y: bgMoveY, scale: bgScale }}
      >
        <Image
          src="/hero.png"
          alt="株式会社サイプレス — Web集客支援"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Second layer texture */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src="/ChatGPT Image 2026年6月13日 19_22_31.png"
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
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        style={{
          position: "absolute",
          bottom: "38%",
          left: 0,
          right: 0,
          height: "1px",
          background: "rgba(255,255,255,0.04)",
          transformOrigin: "left",
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
          y: contentY,
          opacity: contentOpacity,
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 60px)",
        }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "0.32em",
            color: "rgba(196,169,106,0.65)",
            fontSize: "10px",
            textTransform: "uppercase",
            marginBottom: "36px",
          }}
        >
          AI × Web Marketing Agency — Tokyo
        </motion.p>

        {/* Display headline */}
        {(["Reach.", "Be Chosen.", "Grow."] as const).map((word, i) => (
          <div key={word} style={{ overflow: "hidden", lineHeight: 1 }}>
            <motion.div
              initial={{ y: "108%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.08 + i * 0.12 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(50px, 8.5vw, 124px)",
                color: i === 0 ? "#ffffff" : i === 1 ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.06)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                textTransform: "uppercase",
                paddingBottom: i < 2 ? "4px" : "48px",
              }}
            >
              {word}
            </motion.div>
          </div>
        ))}

        {/* Japanese subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
        >
          <p
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
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.1em",
              fontFamily: "var(--font-display)",
            }}
          >
            MEO&nbsp;&nbsp;/&nbsp;&nbsp;SEO&nbsp;&nbsp;/&nbsp;&nbsp;AIO&nbsp;&nbsp;/&nbsp;&nbsp;Web Production&nbsp;&nbsp;/&nbsp;&nbsp;SNS&nbsp;&nbsp;/&nbsp;&nbsp;AI
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{ marginTop: "44px", display: "flex", gap: "36px", alignItems: "center", flexWrap: "wrap" }}
        >
          <Link
            href="/contact"
            style={{
              fontSize: "12px",
              letterSpacing: "0.12em",
              color: "#ffffff",
              borderBottom: "1px solid rgba(255,255,255,0.45)",
              paddingBottom: "3px",
              fontFamily: "var(--font-display)",
              textDecoration: "none",
            }}
          >
            無料相談する
          </Link>
          <Link
            href="/services"
            style={{
              fontSize: "12px",
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.38)",
              borderBottom: "1px solid rgba(255,255,255,0.12)",
              paddingBottom: "3px",
              fontFamily: "var(--font-display)",
              textDecoration: "none",
            }}
          >
            サービスを見る
          </Link>
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
              background: "rgba(255,255,255,0.55)",
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

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ImmersiveHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={containerRef}
      style={{
        height: "100svh",
        minHeight: "680px",
        position: "relative",
        overflow: "hidden",
        background: "#FFFFFF",
        borderBottom: "1px solid #E8E4DC",
      }}
    >
      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(11,22,40,0.055) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          pointerEvents: "none",
        }}
      />

      {/* Decorative circles top-right */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-8%",
          width: "clamp(400px, 55vw, 800px)",
          height: "clamp(400px, 55vw, 800px)",
          borderRadius: "50%",
          border: "1px solid rgba(11,22,40,0.045)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-5%",
          right: "5%",
          width: "clamp(250px, 36vw, 560px)",
          height: "clamp(250px, 36vw, 560px)",
          borderRadius: "50%",
          border: "1px solid rgba(11,22,40,0.035)",
          pointerEvents: "none",
        }}
      />

      {/* Thin horizontal accent line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        style={{
          position: "absolute",
          top: "38%",
          left: 0,
          right: 0,
          height: "1px",
          background: "rgba(11,22,40,0.04)",
          transformOrigin: "left",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "clamp(32px, 5vw, 80px)",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 60px)",
          y: contentY,
          opacity: contentOpacity,
        }}
        className="hero-content-grid"
      >
        {/* Left: text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "0.32em",
              color: "#B8924A",
              fontSize: "10px",
              textTransform: "uppercase",
              marginBottom: "32px",
            }}
          >
            AI × Web Marketing Agency — Tokyo
          </motion.p>

          {(["Reach.", "Be Chosen.", "Grow."] as const).map((word, i) => (
            <div key={word} style={{ overflow: "hidden", lineHeight: 1 }}>
              <motion.div
                initial={{ y: "108%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.08 + i * 0.12 }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(44px, 7vw, 104px)",
                  color:
                    i === 0
                      ? "#0B1628"
                      : i === 1
                      ? "rgba(11,22,40,0.2)"
                      : "rgba(11,22,40,0.07)",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  textTransform: "uppercase",
                  paddingBottom: i < 2 ? "4px" : "36px",
                }}
              >
                {word}
              </motion.div>
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(14px, 1.5vw, 18px)",
                color: "#0B1628",
                lineHeight: 1.75,
                marginBottom: "10px",
                fontWeight: 400,
              }}
            >
              中小企業のWeb集客を、設計から運用まで。
            </p>
            <p
              style={{
                fontSize: "11px",
                color: "#9CA3AF",
                letterSpacing: "0.1em",
                fontFamily: "var(--font-display)",
              }}
            >
              MEO&nbsp;&nbsp;/&nbsp;&nbsp;SEO&nbsp;&nbsp;/&nbsp;&nbsp;AIO&nbsp;&nbsp;/&nbsp;&nbsp;Web Production&nbsp;&nbsp;/&nbsp;&nbsp;SNS&nbsp;&nbsp;/&nbsp;&nbsp;AI
            </p>
          </motion.div>
        </div>

        {/* Right: hero image */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          style={{ y: imageY, position: "relative" }}
          className="hero-image-col"
        >
          <div
            style={{
              position: "relative",
              height: "clamp(360px, 60vh, 680px)",
              overflow: "hidden",
              borderRadius: "2px",
              boxShadow: "0 8px 48px rgba(11,22,40,0.1), 0 2px 8px rgba(11,22,40,0.06)",
            }}
          >
            <Image
              src="/hero.png"
              alt="株式会社サイプレス — Web集客支援"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(248,246,242,0.12) 0%, transparent 55%)",
              }}
            />
          </div>

          {/* Decorative frame corners */}
          <div
            style={{
              position: "absolute",
              bottom: "-16px",
              left: "-16px",
              width: "88px",
              height: "88px",
              border: "1px solid #E8E4DC",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "-16px",
              right: "-16px",
              width: "56px",
              height: "56px",
              border: "1px solid #E8E4DC",
              pointerEvents: "none",
            }}
          />
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
            color: "rgba(11,22,40,0.25)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </p>
        <div
          style={{
            width: "1px",
            height: "52px",
            background: "rgba(11,22,40,0.1)",
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
              background: "rgba(11,22,40,0.4)",
              height: "42%",
            }}
            animate={{ y: ["0%", "220%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-content-grid {
            grid-template-columns: 1fr !important;
            padding-top: 72px !important;
            align-items: flex-start !important;
          }
          .hero-image-col {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

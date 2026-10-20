"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";

/**
 * トップページ専用のモーション基盤。
 * - Lenis による慣性スムーススクロール（reduced-motion 時は無効）
 * - ページ上部の真鍮色スクロールプログレスバー
 * - MotionConfig reducedMotion="user" で全アニメーションが OS 設定を尊重
 */
export default function HomeMotionProvider({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      {/* Scroll progress hairline */}
      <motion.div
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          transformOrigin: "0% 50%",
          scaleX: progress,
          background: "linear-gradient(90deg, #C4A96A 0%, rgba(196,169,106,0.35) 100%)",
          zIndex: 200,
          pointerEvents: "none",
        }}
      />
      {children}
    </MotionConfig>
  );
}

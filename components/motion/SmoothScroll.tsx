"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";
import { useMotionEnabled } from "./motionPreference";

declare global {
  interface Window {
    /** ヘッダーのモバイルメニューなどから一時停止できるよう公開している（window.lenis は Lenis 自身が使う） */
    __cyLenis?: Lenis;
  }
}

/**
 * 慣性スムーススクロール（Lenis）。モーションOFF・視差効果を減らす設定のときは使わない。
 * MotionConfig で framer-motion のアニメーションも OS 設定に合わせる。
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const enabled = useMotionEnabled();

  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    window.__cyLenis = lenis;
    let frame = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      if (window.__cyLenis === lenis) window.__cyLenis = undefined;
    };
  }, [enabled]);

  return <MotionConfig reducedMotion={enabled ? "never" : "always"}>{children}</MotionConfig>;
}

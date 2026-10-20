"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowLink from "@/components/ui/ArrowLink";
import FadeUp from "@/components/motion/FadeUp";

/**
 * 会社紹介（青い帯）。巨大な「Company」が中央に止まって薄くなり、その上に理念が流れてくる。
 * 背景にはロゴのひし形を何重にも描いた線画を置く。
 */
export default function HomeCompany() {
  const ref = useRef<HTMLElement>(null);
  const [top, setTop] = useState(0);
  const [vh, setVh] = useState(900);
  useEffect(() => {
    const measure = () => {
      if (!ref.current) return;
      setTop(ref.current.getBoundingClientRect().top + window.scrollY);
      setVh(window.innerHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    return () => ro.disconnect();
  }, []);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [top, top + vh * 0.3, top + vh * 0.6], [1, 0.3, 0.12]);
  const artRotate = useTransform(scrollY, [top - vh, top + vh * 2], [-8, 8]);

  return (
    <section ref={ref} aria-labelledby="home-company-title" className="relative overflow-clip text-white" style={{ background: "var(--v2-blue)" }}>
      <motion.div aria-hidden className="pointer-events-none absolute left-1/2 top-[28%] w-[min(1100px,120vw)] -translate-x-1/2" style={{ rotate: artRotate }}>
        <DiamondLines />
      </motion.div>

      <div aria-hidden className="pointer-events-none sticky top-1/2 z-0 -translate-y-1/2 px-[var(--v2-gutter)]">
        <motion.p className="v2-display v2-giant leading-none" style={{ opacity }}>
          Company
        </motion.p>
      </div>

      <div className="relative z-10 px-[var(--v2-gutter)] pb-28 pt-[60svh] text-center md:pb-40 md:pt-[70svh]">
        <h2 id="home-company-title" className="sr-only">
          会社情報（ビジョン・ミッション）
        </h2>
        <FadeUp>
          <p className="v2-display text-[14px] opacity-80">Vision</p>
          <p className="mt-4 text-[clamp(24px,2.6vw,38px)] font-bold leading-[1.55] tracking-[0.03em]">
            AIとWebの力で、
            <br />
            地域経済を再生する
          </p>
        </FadeUp>
        <FadeUp className="mt-16 md:mt-20">
          <p className="v2-display text-[14px] opacity-80">Mission</p>
          <p className="mt-4 text-[clamp(24px,2.6vw,38px)] font-bold leading-[1.55] tracking-[0.03em]">
            地域企業が、正しく選ばれる
            <br className="md:hidden" />
            仕組みをつくる
          </p>
          <p className="mx-auto mt-8 max-w-[34em] text-[14px] font-semibold leading-[2.1] opacity-90">
            良いサービスを持つ地域の会社が、検索やAIの時代でも見つけられ、正しく比較され、選ばれること。
            私たちは東京・葛飾区を拠点に、その仕組みを一社ずつ一緒につくっています。
          </p>
        </FadeUp>
        <FadeUp className="mt-12 flex flex-wrap justify-center gap-3">
          <ArrowLink href="/company/profile" variant="white">
            会社概要
          </ArrowLink>
          <ArrowLink href="/company/philosophy" variant="white">
            ミッション・ビジョン・バリュー
          </ArrowLink>
          <ArrowLink href="/company/message" variant="white">
            代表メッセージ
          </ArrowLink>
        </FadeUp>
      </div>
    </section>
  );
}

/** ロゴのひし形（2つの山括弧）を少しずつ大きくして重ねた線画 */
function DiamondLines() {
  const rings = Array.from({ length: 9 }, (_, i) => 18 + i * 9);
  return (
    <svg viewBox="0 0 200 200" className="h-auto w-full" fill="none" stroke="#fff" strokeOpacity="0.13" strokeWidth="0.35">
      {rings.map((r) => (
        <g key={r}>
          <path d={`M100 ${100 - r} L${100 - r} 100 L100 ${100 + r} L${100 + r * 0.45} ${100 + r * 0.55}`} />
          <path d={`M${100 + r * 0.56} ${100 + r * 0.44} L${100 + r} 100 L${100 + r * 0.13} ${100 - r * 0.87}`} />
        </g>
      ))}
    </svg>
  );
}

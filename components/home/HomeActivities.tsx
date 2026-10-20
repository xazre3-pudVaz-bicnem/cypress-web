"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionStyle, type MotionValue } from "framer-motion";

const WORDS: { text: string; blue?: boolean }[] = [{ text: "Cypress", blue: true }, { text: "Latest" }, { text: "Activities" }];

/**
 * 「Cypress Latest Activities」の巨大な文字が横へ流れ、青い背景が円になって右へ縮んでいく帯（PC）。
 * 円の中に入った文字は輪郭線だけで見せる。最後は円が文末の「点」になる。
 * スマホでは固定せず、見出しとして表示する。
 */
export default function HomeActivities() {
  const ref = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 1440, h: 900, text: 3000 });

  useEffect(() => {
    const measure = () =>
      setSize({ w: window.innerWidth, h: window.innerHeight, text: textRef.current?.scrollWidth ?? 3000 });
    measure();
    const ro = new ResizeObserver(measure);
    if (textRef.current) ro.observe(textRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const { w, h, text } = size;
  const endText = w * 0.8; // 最後に文末が来る位置
  const x = useTransform(p, [0, 1], [w * 0.42, endText - text]);
  const dotX = endText + h * 0.075;
  const cover = Math.hypot(w, h);
  const r = useTransform(p, [0, 0.12, 0.35, 0.62, 0.82, 0.95], [cover, h * 1.05, h * 0.72, h * 0.4, h * 0.16, h * 0.05]);
  const cx = useTransform(p, [0, 0.12, 0.35, 0.62, 0.82, 0.95], [w * 0.5, w * 0.72, w * 0.8, w * 0.86, dotX + h * 0.02, dotX]);
  const clip = useTransform([r, cx] as MotionValue<number>[], ([rr, xx]: number[]) => `circle(${rr}px at ${xx}px 50%)`);

  // 漂うマーク: 左下から入り、文字の上を進んで、最後は点の中に収まる
  const mx = useTransform(p, [0, 0.3, 0.6, 0.82, 0.95], [w * 0.12, w * 0.4, w * 0.62, dotX - 30, dotX]);
  const my = useTransform(p, [0, 0.3, 0.6, 0.82, 0.95], [h * 0.78, h * 0.26, h * 0.3, h * 0.42, h * 0.5]);
  const ms = useTransform(p, [0, 0.82, 0.95], [1, 0.8, 0.42]);
  const mr = useTransform(p, [0, 0.5, 1], [-12, 10, 0]);

  return (
    <section ref={ref} aria-labelledby="home-activities-title" className="relative bg-white md:h-[300svh]">
      <h2 id="home-activities-title" className="v2-display px-[var(--v2-gutter)] pt-24 text-[clamp(52px,14vw,96px)] leading-[0.95] md:sr-only">
        <span className="block text-[var(--v2-blue)]">Latest</span>
        <span className="block">Activities</span>
        <span className="sr-only">最新のお知らせ・ブログ</span>
      </h2>

      <div aria-hidden className="sticky top-0 hidden h-[100svh] overflow-hidden md:block">
        {/* 白地の上の文字 */}
        <motion.div ref={textRef} className="absolute left-0 top-1/2 -translate-y-1/2" style={{ x }}>
          <Line progress={p} mode="fill" />
        </motion.div>
        {/* 青い円（中では輪郭の文字） */}
        <motion.div className="absolute inset-0" style={{ clipPath: clip, WebkitClipPath: clip, background: "var(--v2-blue)" }}>
          <motion.div className="absolute left-0 top-1/2 -translate-y-1/2" style={{ x }}>
            <Line progress={p} mode="outline" />
          </motion.div>
        </motion.div>
        <motion.div className="absolute left-0 top-0 h-[88px] w-[88px]" style={{ x: mx, y: my, scale: ms, rotate: mr, translateX: "-50%", translateY: "-50%" }}>
          <Image src="/images/v2/mark-3d.png" alt="" fill sizes="88px" className="object-contain drop-shadow-[0_12px_18px_rgba(4,40,90,0.25)]" />
        </motion.div>
      </div>
    </section>
  );
}

function Line({ progress, mode }: { progress: MotionValue<number>; mode: "fill" | "outline" }) {
  let i = 0;
  return (
    <motion.p
      className="v2-display flex whitespace-nowrap text-[17vw] leading-none"
      style={{ letterSpacing: "-0.03em", "--p": progress } as unknown as MotionStyle}
    >
      {WORDS.map((word, wi) => (
        <span key={wi} className="inline-flex" style={{ marginRight: wi < WORDS.length - 1 ? "0.25em" : 0 }}>
          {Array.from(word.text).map((ch) => {
            const index = i++;
            return (
              <span
                key={index}
                className="cy-wave-char inline-block"
                style={{
                  "--i": index,
                  ...(mode === "outline"
                    ? { color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.42)" }
                    : { color: word.blue ? "var(--v2-blue)" : "var(--v2-ink)" }),
                } as unknown as CSSProperties}
              >
                {ch}
              </span>
            );
          })}
        </span>
      ))}
    </motion.p>
  );
}

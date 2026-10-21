"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useTransform, type MotionStyle } from "framer-motion";
import MotionToggle from "@/components/motion/MotionToggle";
import HeroCanvas from "./HeroCanvas";

/** イントロ画面が消えはじめる時刻（ms）。CSS の .cy-intro のアニメーションと合わせる。 */
const INTRO_END = 1900;

const STATEMENT: { text: string; em?: boolean }[][] = [
  [{ text: "検索される仕組み", em: true }, { text: "と" }],
  [{ text: "選ばれる理由", em: true }, { text: "を" }],
  [{ text: "ひとつのチームでつくる" }],
];
const STATEMENT_LEAD = [
  "サイプレスは、MEO・SEO・AIOとWeb制作で、",
  "地域の会社が「見つけられ、選ばれる」状態をつくる",
  "Webマーケティングカンパニーです。",
];

const PILLARS = [
  {
    pill: "Local Search Marketing",
    line1: "Search to",
    line2: "Visit",
    text: ["MEO・SEO・AIOで、検索から", "来店・問い合わせまでの道をつくる"],
    href: "/services",
    label: "View Details：Web集客サービスの詳細",
    image: "/images/v2/pillar-search.jpg",
  },
  {
    pill: "Web & Creative",
    line1: "Design to",
    line2: "Convert",
    text: ["ホームページとSNSで、", "比べられても選ばれる理由を届ける"],
    href: "/services/web-design",
    label: "View Details：ホームページ制作の詳細",
    image: "/images/v2/pillar-design.jpg",
  },
];

/**
 * トップのヒーロー〜ステートメント〜2つの柱。
 * PC では 3D を画面中央に固定したまま円形に縮め、その周りに文章を出す（スクロール連動）。
 * スマホでは固定せず、縦に並べたふつうの流れで見せる。
 */
export default function HomeHero() {
  const wrapRef = useRef<HTMLElement>(null);
  const [desktop, setDesktop] = useState(false);
  const [intro] = useState(() => (typeof window === "undefined" ? false : !document.documentElement.classList.contains("cy-intro-skip")));
  const [vp, setVp] = useState({ w: 1440, h: 900 });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => {
      setDesktop(mq.matches);
      setVp({ w: window.innerWidth, h: window.innerHeight });
    };
    sync();
    mq.addEventListener("change", sync);
    window.addEventListener("resize", sync);
    // 一度見たイントロは、このタブを開いている間は繰り返さない（ページ内遷移で戻ってきたときも）
    try {
      sessionStorage.setItem("cy-intro", "1");
    } catch {}
    const done = window.setTimeout(() => document.documentElement.classList.add("cy-intro-skip"), INTRO_END + 800);
    return () => {
      mq.removeEventListener("change", sync);
      window.removeEventListener("resize", sync);
      window.clearTimeout(done);
    };
  }, []);

  const { scrollY } = useScroll();
  const H = vp.h;
  const cover = Math.hypot(vp.w, vp.h) / 2 + 2;
  const rEnd = Math.min(150, Math.max(104, H * 0.15));

  // スクロール量（px）→ 各要素の状態。スマホでは 0 の状態のまま止める。
  const s = useTransform(scrollY, (y) => (desktop ? y : 0));
  const radius = useTransform(
    s,
    [0, H * 0.15, H * 0.33, H * 0.5, H * 0.67, H * 0.83, H],
    [cover, cover, Math.max(H * 0.6, rEnd), Math.max(H * 0.383, rEnd), Math.max(H * 0.25, rEnd), Math.max(H * 0.174, rEnd), rEnd]
  );
  const clip = useTransform(radius, (r) => (r >= cover - 1 ? "none" : `circle(${r}px at 50% 50%)`));
  const innerScale = useTransform(s, [0, H * 0.4, H], [1, 1, 0.52]);
  const ringSize = useTransform(radius, (r) => `${r * 2}px`);
  const ringOpacity = useTransform(s, [H * 0.1, H * 0.45], [0, 1]);
  const copyOpacity = useTransform(s, [0, H * 0.17], [1, 0]);
  const copyY = useTransform(s, [0, H * 0.17], [0, -48]);
  const stageBg = useTransform(s, [H * 1.2, H * 1.45], ["#ffffff", "#f0f1f2"]);
  // -0.15〜0 は「まだ見せない」区間（流れてくる途中で薄く見えないように）
  const reveal = useTransform(s, [H * 0.68, H * 0.8, H * 1.3], [-0.15, 0, 1]);
  const leadReveal = useTransform(s, [H * 1.1, H * 1.4], [0, 1]);

  // 3D を囲むガラスの縁は、円が画面より小さくなってから見せる
  const [ringOn, setRingOn] = useState(false);
  useMotionValueEvent(radius, "change", (r) => setRingOn(r < cover * 0.9));

  return (
    <section ref={wrapRef} aria-labelledby="home-hero-title" className="relative" style={{ background: "var(--v2-bg)" }}>
      {/* ── 3D を映すステージ（PC では固定） ───────────────────────────── */}
      <motion.div
        className="relative h-[100svh] overflow-hidden md:sticky md:top-0"
        style={{ background: desktop ? stageBg : "#0a4c8f" }}
      >
        <motion.div className="absolute inset-0" style={{ clipPath: clip, WebkitClipPath: clip }}>
          <motion.div className="absolute inset-0" style={{ scale: innerScale }}>
            <HeroCanvas playIntro={intro} introAt={INTRO_END - 200} />
          </motion.div>
        </motion.div>

        {ringOn && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: ringSize,
              height: ringSize,
              opacity: ringOpacity,
              boxShadow:
                "inset 0 0 0 1.5px rgba(255,255,255,0.55), inset 0 0 28px 6px rgba(190,220,255,0.55), 0 0 0 1px rgba(9,111,200,0.12), 0 18px 50px rgba(9,111,200,0.18)",
            }}
          />
        )}

        {/* ヒーローの文字 */}
        <motion.div className="pointer-events-none absolute inset-0 text-white" style={{ opacity: copyOpacity, y: copyY }}>
          <h1 id="home-hero-title" className="absolute inset-x-0 top-[50%] -translate-y-[42%] px-[var(--v2-gutter)]">
            <span aria-hidden className="v2-display cy-hero-title block text-[19vw] leading-[0.92] md:whitespace-nowrap md:text-[10.1vw] md:leading-[0.95]">
              <span className="block md:inline">
                <SplitReveal text="Be found," />
              </span>
              <span className="hidden md:inline">{" "}</span>
              <span className="block md:inline">
                <SplitReveal text="be chosen" offset={9} />
              </span>
            </span>
            <span className="sr-only">株式会社サイプレス｜東京・葛飾区のWebマーケティング会社（MEO・SEO・AIO・ホームページ制作）</span>
          </h1>
          <p className="cy-hero-sub absolute bottom-[11svh] left-[var(--v2-gutter)] text-[20px] font-bold leading-[1.5] tracking-[0.02em] md:bottom-[97px] md:text-[32px]">
            検索の先にいるお客さまと、
            <br />
            地域の会社をつなぐWebマーケティング
          </p>
        </motion.div>
        <motion.div className="absolute right-4 top-[84px] md:right-8 md:top-[128px]" style={{ opacity: copyOpacity }}>
          <div className="cy-hero-sub">
            <MotionToggle tone="light" />
          </div>
        </motion.div>
      </motion.div>

      {/* ── ステージに重なって流れる中身 ─────────────────────────────── */}
      <div className="relative md:-mt-[100svh]">
        <div aria-hidden className="hidden h-[75svh] md:block" />

        {/* ステートメント（PC: 0.6画面ぶん固定 → 上へ流れる） */}
        <div className="md:h-[170svh]">
          {/* PC ではスクロール連動で1文字ずつ出すので、準備ができるまで隠しておく */}
          <div
            className={`flex items-center px-[var(--v2-gutter)] py-20 md:sticky md:top-0 md:h-[100svh] md:py-0 ${desktop ? "" : "md:opacity-0"}`}
          >
            <div className="grid w-full gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-0">
              <motion.h2
                className="text-[24px] font-bold leading-[1.5] tracking-[0.02em] md:text-[clamp(30px,3.33vw,52px)] md:leading-[1.4]"
                aria-label={STATEMENT.map((l) => l.map((p) => p.text).join("")).join("")}
                style={desktop ? ({ "--r": reveal } as unknown as MotionStyle) : undefined}
              >
                <StatementLines desktop={desktop} />
              </motion.h2>
              <div aria-hidden className="hidden md:block" style={{ width: rEnd * 2 + 80 }} />
              <motion.p
                className="text-[14px] font-medium leading-[2] md:justify-self-end md:text-[clamp(13px,1vw,15px)]"
                style={desktop ? { opacity: leadReveal } : undefined}
              >
                {STATEMENT_LEAD.map((line, i) => (
                  <span key={i} className="md:block">
                    {line}
                  </span>
                ))}
              </motion.p>
            </div>
          </div>
        </div>

        <div aria-hidden className="hidden h-[5svh] md:block" />
        <Pillars />
      </div>
    </section>
  );
}

/** 読み込み時に1文字ずつ下から現れる英字（CSS アニメーション） */
function SplitReveal({ text, offset = 0 }: { text: string; offset?: number }) {
  return (
    <>
      {Array.from(text).map((ch, i) => (
        <span key={i} className="v2-mask" style={{ paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
          <span className="cy-char inline-block" style={{ "--i": i + offset } as CSSProperties}>
            {ch === " " ? " " : ch}
          </span>
        </span>
      ))}
    </>
  );
}

/** スクロールに合わせて1文字ずつ濃くなる見出し（濃さは親の --r から CSS で計算する） */
function StatementLines({ desktop }: { desktop: boolean }) {
  const chars = STATEMENT.flatMap((line) => line.flatMap((part) => Array.from(part.text)));
  const total = chars.length;
  let index = 0;
  return (
    <>
      {STATEMENT.map((line, li) => (
        <span key={li} aria-hidden className="block">
          {line.map((part, pi) => (
            <span key={pi} style={{ color: part.em ? "var(--v2-blue)" : undefined }}>
              {Array.from(part.text).map((ch) => {
                const i = index++;
                return desktop ? (
                  <span key={i} className="cy-reveal-char" style={{ "--at": (i / total).toFixed(3) } as CSSProperties}>
                    {ch}
                  </span>
                ) : (
                  <span key={i}>{ch}</span>
                );
              })}
            </span>
          ))}
        </span>
      ))}
    </>
  );
}

// ─── 2つの柱 ─────────────────────────────────────────────────────────────────

function Pillars() {
  return (
    <div className="relative md:h-[100svh]">
      {/* 中央を縦に通る細い線（PC）。円はステージ側で、この区画の中央に止まる */}
      <span aria-hidden className="absolute inset-y-0 left-1/2 hidden w-px md:block" style={{ background: "rgba(51,51,51,0.16)" }} />
      <div className="grid gap-16 px-[var(--v2-gutter)] pb-24 md:h-full md:grid-cols-2 md:gap-0 md:pb-0 md:pt-[19svh]">
        {PILLARS.map((p, i) => (
          <article key={p.line1} className={`flex flex-col ${i === 1 ? "md:items-end md:text-right" : "md:items-start"} items-center text-center md:text-left`}>
            <p className="v2-pill bg-[var(--v2-blue)] text-white">{p.pill}</p>
            <h2 className="v2-display mt-4 text-[44px] leading-[0.9] md:text-[clamp(48px,6.05vw,104px)]">
              <span className="block">{p.line1}</span>
              <span className="block text-[var(--v2-blue)]">{p.line2}</span>
            </h2>
            {/* スマホでは円の代わりに、柱ごとの立体イラストを見せる */}
            <div className="relative mt-6 aspect-square w-[min(72vw,320px)] md:hidden">
              <Image
                src={p.image}
                alt=""
                fill
                sizes="72vw"
                className="object-contain"
                style={{ maskImage: "radial-gradient(closest-side, #000 78%, transparent)", WebkitMaskImage: "radial-gradient(closest-side, #000 78%, transparent)" }}
              />
            </div>
            <p className="mt-5 text-[17px] font-bold leading-[1.75] tracking-[0.02em] md:mt-6 md:text-[clamp(16px,1.35vw,20px)]">
              {p.text.map((t) => (
                <span key={t} className="block">
                  {t}
                </span>
              ))}
            </p>
            <Link href={p.href} className="group mt-6 inline-flex items-center gap-2.5 text-[16px] font-semibold" aria-label={p.label}>
              View Details
              <span
                aria-hidden
                className="grid h-6 w-6 place-items-center rounded-full bg-[var(--v2-blue)] text-white transition-transform duration-500 group-hover:translate-x-1"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1.5 5h7M5.5 2l3 3-3 3" />
                </svg>
              </span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

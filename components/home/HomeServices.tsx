"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useMediaQuery } from "@/components/motion/useMediaQuery";

const SERVICES = [
  { en: "MEO", ja: "Googleマップで見つけてもらうための地図検索対策", href: "/services/meo", image: "/images/v2/svc-meo.jpg", icon: "star" },
  { en: "SEO", ja: "検索結果で選ばれるためのサイト設計と記事づくり", href: "/services/seo", image: "/images/v2/svc-seo.jpg", icon: "pin" },
  { en: "AIO", ja: "ChatGPT・Geminiなど、AI検索に引用される情報設計", href: "/services/aio", image: "/images/v2/svc-aio.jpg", icon: "spark" },
  { en: "Web Design", ja: "問い合わせにつながるホームページ制作", href: "/services/web-design", image: "/images/v2/svc-web.jpg", icon: "window" },
  { en: "Social Media", ja: "InstagramなどSNSの運用と発信の設計", href: "/services/sns", image: "/images/v2/svc-sns.jpg", icon: "bubble" },
  { en: "AI Support", ja: "日々の業務にAIを取り入れる導入・活用支援", href: "/services/ai", image: "/images/v2/svc-ai.jpg", icon: "plus" },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * 青い帯のサービス一覧（参考サイトの Design Platforms にあたる）。
 * 見出しは画面に入るとき珊瑚色から白へ塗り替わり、行にホバーすると画像の丸がカーソルについてくる。
 */
export default function HomeServices() {
  const headRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({ target: headRef, offset: ["start end", "center 35%"] });
  const sweep = useTransform(scrollYProgress, [0.35, 1], ["100%", "0%"]);

  return (
    <section aria-labelledby="home-services-title" className="relative text-white" style={{ background: "var(--v2-blue)" }}>
      <div className="px-[var(--v2-gutter)] pb-20 pt-24 md:pb-28 md:pt-[18vh]">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <h2 ref={headRef} id="home-services-title" className="v2-display v2-giant">
            <motion.span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #ffffff 0%, #ffffff 42%, #ff9c8c 58%, #ff9c8c 100%)",
                backgroundSize: "260% 100%",
                backgroundPositionX: sweep,
                WebkitBackgroundClip: "text",
              }}
            >
              <span className="block">Our</span>
              <span className="block pl-[0.4em]">Services</span>
            </motion.span>
            <span className="sr-only">サービス一覧</span>
          </h2>
          <p className="text-[15px] font-bold leading-[1.9] tracking-[0.02em] md:mb-4 md:text-[clamp(14px,1.1vw,17px)]">
            地域の集客に必要なことを、
            <br />
            ひとつのチームで。
            <br />
            地図・検索・AI・SNS・Webサイトを
            <br />
            つなげて設計します。
          </p>
        </div>

        <ServiceList />
      </div>
    </section>
  );
}

function ServiceList() {
  const [hover, setHover] = useState<number | null>(null);
  const [open, setOpen] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 26, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 26, mass: 0.6 });
  const fine = useMediaQuery("(pointer: fine) and (min-width: 768px)");

  return (
    <ul
      ref={listRef}
      className="relative mt-16 border-t border-white/25 md:mt-24"
      onMouseMove={(e) => {
        const r = listRef.current?.getBoundingClientRect();
        if (!r) return;
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      onMouseLeave={() => setHover(null)}
    >
      {/* カーソルについてくる丸い画像（PC） */}
      <AnimatePresence>
        {fine && hover !== null && (
          <motion.div
            key="bubble"
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-20 h-[clamp(200px,20vw,300px)] w-[clamp(200px,20vw,300px)] overflow-hidden rounded-full shadow-[0_24px_60px_rgba(4,40,90,0.35)]"
            style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={hover}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.15 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <Image src={SERVICES[hover].image} alt="" fill sizes="300px" className="object-cover" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {SERVICES.map((s, i) => {
        const expanded = open === i;
        return (
          <li key={s.en} className="border-b border-white/25" onMouseEnter={() => setHover(i)}>
            <div className="flex items-center gap-4">
              <Link href={s.href} className="group flex flex-1 items-start gap-4 py-6 md:items-center md:gap-6 md:py-7">
                <ServiceIcon kind={s.icon} />
                <span className="flex-1">
                  <span className="v2-display block text-[clamp(28px,2.6vw,40px)] leading-none transition-transform duration-500 group-hover:translate-x-2" style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}>
                    {s.en}
                  </span>
                  <span className="mt-2 block text-[12px] font-bold tracking-[0.02em] opacity-90 md:text-[13px]">{s.ja}</span>
                </span>
                <span
                  aria-hidden
                  className="hidden h-9 w-9 place-items-center rounded-full border border-white/40 transition-colors duration-300 group-hover:bg-white group-hover:text-[var(--v2-blue)] md:grid"
                >
                  <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1.5 5h7M5.5 2l3 3-3 3" />
                  </svg>
                </span>
              </Link>
              {/* スマホでは「＋」で画像を開く */}
              <button
                type="button"
                aria-label={`${s.en}のイメージを${expanded ? "閉じる" : "見る"}`}
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? null : i)}
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/20 transition-transform duration-300 md:hidden"
                style={{ transform: expanded ? "rotate(45deg)" : "none" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M6 1v10M1 6h10" />
                </svg>
              </button>
            </div>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  className="overflow-hidden md:hidden"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <div className="relative mx-auto mb-6 aspect-square w-[70%] overflow-hidden rounded-full">
                    <Image src={s.image} alt="" fill sizes="70vw" className="object-cover" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}

/** 行頭の小さな白い記号（ヒーローの立体と同じ形の仲間） */
function ServiceIcon({ kind }: { kind: (typeof SERVICES)[number]["icon"] }) {
  const paths: Record<string, string> = {
    star: "M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z",
    pin: "M10 1.5a6.2 6.2 0 0 0-6.2 6.2c0 4.6 6.2 10.8 6.2 10.8s6.2-6.2 6.2-10.8A6.2 6.2 0 0 0 10 1.5zm0 8.6a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8z",
    spark: "M10 1c.8 5.2 3.8 8.2 9 9-5.2.8-8.2 3.8-9 9-.8-5.2-3.8-8.2-9-9 5.2-.8 8.2-3.8 9-9z",
    window: "M4 3h12a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 16 17H4a2.5 2.5 0 0 1-2.5-2.5v-9A2.5 2.5 0 0 1 4 3zm0 4.2v7.3h12V7.2z",
    bubble: "M10 2.5c4.7 0 8.5 3 8.5 6.8S14.7 16 10 16c-.9 0-1.8-.1-2.6-.3L3 18l1.2-3.6C2.6 13.2 1.5 11.3 1.5 9.3c0-3.8 3.8-6.8 8.5-6.8z",
    plus: "M8 1.5h4v6.5h6.5v4H12v6.5H8V12H1.5V8H8z",
  };
  return (
    <svg aria-hidden width="20" height="20" viewBox="0 0 20 20" className="mt-1 shrink-0 md:mt-0" fill="currentColor" fillRule="evenodd">
      <path d={paths[kind]} />
    </svg>
  );
}

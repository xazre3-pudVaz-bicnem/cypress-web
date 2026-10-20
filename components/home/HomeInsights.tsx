"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowLink from "@/components/ui/ArrowLink";

export interface InsightCard {
  href: string;
  title: string;
  date: string;
  tags: string[];
  image: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;
/** カードの縦位置を少しずつずらす（参考サイトと同じく右へ行くほど下げる） */
const OFFSETS = ["md:mt-0", "md:mt-7", "md:mt-14"];

/**
 * 濃紺の帯に、巨大な「Insights」を画面中央に固定して置き、その上を記事カードが流れていく。
 * 文字はカードが近づくにつれて薄くなる（参考サイトの Client Interview にあたる）。
 */
export default function HomeInsights({ items }: { items: InsightCard[] }) {
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
  // 文字が中央に止まってから約半画面でカードが下から入り、そこから薄くなっていく
  const opacity = useTransform(scrollY, [top, top + vh * 0.33, top + vh * 0.66], [1, 0.35, 0.14]);

  return (
    <section ref={ref} aria-labelledby="home-insights-title" className="relative overflow-clip text-white" style={{ background: "var(--v2-navy)" }}>
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[url('/images/v2/contour.svg')] bg-cover bg-center" />
      <h2 id="home-insights-title" className="sr-only">
        Insights（Web集客の専門コラム）
      </h2>

      {/* 画面中央に止まる巨大な文字。上半分はセクションの上端で切れて見える */}
      <div aria-hidden className="pointer-events-none sticky top-1/2 z-0 -translate-y-1/2 text-center">
        <motion.p className="cy-deco-text v2-display v2-giant whitespace-nowrap leading-none" data-text="Insights" style={{ opacity }} />
      </div>

      <div className="relative z-10 px-[var(--v2-gutter)] pb-28 pt-[70svh] md:pb-36 md:pt-[80svh]">
        <ul className="mx-auto grid max-w-[1180px] gap-14 md:grid-cols-3 md:gap-[clamp(24px,3vw,48px)]">
          {items.map((item, i) => (
            <motion.li
              key={item.href}
              className={OFFSETS[i % 3]}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 1, ease: EASE, delay: i * 0.1 }}
            >
              <Link href={item.href} className="group block">
                <span className="relative block aspect-[3/2] overflow-hidden rounded-[8px]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.05]"
                    style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                  />
                </span>
                <time className="mt-4 block text-[12px] font-semibold tracking-[0.04em] opacity-80" dateTime={item.date}>
                  {item.date.replace(/-/g, ".")}
                </time>
                <h3 className="mt-2 line-clamp-3 text-[clamp(18px,1.55vw,22px)] font-bold leading-[1.45] tracking-[0.02em] transition-opacity duration-300 group-hover:opacity-75">
                  {item.title}
                </h3>
                <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[12px] font-semibold opacity-70">
                  {item.tags.slice(0, 4).map((t) => (
                    <span key={t}>#{t}</span>
                  ))}
                </p>
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="mx-auto mt-14 max-w-[1180px]">
          <ArrowLink href="/column">View All</ArrowLink>
        </div>
      </div>
    </section>
  );
}

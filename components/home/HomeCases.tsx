"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import RevealLines from "@/components/motion/RevealLines";
import ArrowLink from "@/components/ui/ArrowLink";

export interface CaseCard {
  slug: string;
  title: string;
  industry: string;
  region: string;
  services: string[];
  image: string;
}

const FILTERS = ["すべて", "ホームページ制作", "MEO対策", "SEO対策", "SNS運用"] as const;
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * 支援事例（参考サイトの Featured Work にあたる）。
 * 左の絞り込みはスクロールしても残り、右に 2 列で事例カードを並べる。
 */
export default function HomeCases({ cases }: { cases: CaseCard[] }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("すべて");
  const shown = (filter === "すべて" ? cases : cases.filter((c) => c.services.includes(filter))).slice(0, 6);

  return (
    <section aria-labelledby="home-cases-title" className="relative px-[var(--v2-gutter)] pb-28 pt-24 md:pb-40 md:pt-[22vh]">
      <h2 id="home-cases-title" className="v2-display v2-giant">
        <RevealLines lines={["Case", "Studies"]} lineClassName={(i) => (i === 0 ? "text-[var(--v2-blue)]" : "")} />
        <span className="sr-only">支援事例</span>
      </h2>

      <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-0">
        {/* 絞り込み（PC は縦に並べて固定、スマホは横に折り返すタグ） */}
        <div className="md:relative">
          <ul aria-label="サービスで絞り込む" className="flex flex-wrap gap-2 md:sticky md:top-[120px] md:block md:space-y-1">
            {FILTERS.map((f) => {
              const active = f === filter;
              return (
                <li key={f}>
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(f)}
                    className={`group relative inline-flex items-center rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors duration-300 md:border-0 md:px-0 md:py-1 md:pl-4 ${
                      active
                        ? "border-[var(--v2-blue)] bg-[var(--v2-blue)] text-white md:bg-transparent md:text-[var(--v2-blue)]"
                        : "border-[var(--v2-line)] bg-white/60 text-[var(--v2-ink)] hover:text-[var(--v2-blue)] md:bg-transparent"
                    }`}
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[var(--v2-blue)] transition-transform duration-300 md:block"
                      style={{ transform: `translateY(-50%) scale(${active ? 1 : 0})` }}
                    />
                    {f}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <motion.ul layout className="grid gap-x-[clamp(20px,2.4vw,36px)] gap-y-14 sm:grid-cols-2 md:gap-y-20">
            <AnimatePresence mode="popLayout" initial={false}>
              {shown.map((c, i) => (
                <motion.li
                  key={c.slug}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.9, ease: EASE, delay: (i % 2) * 0.08 }}
                >
                  <Link href={`/cases/${c.slug}`} className="group block">
                    <span className="relative block aspect-[4/5] overflow-hidden rounded-[6px] bg-[var(--v2-blue-pale)]">
                      <Image
                        src={c.image}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 30vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]"
                        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                      />
                    </span>
                    <span className="mt-5 flex flex-wrap gap-1.5">
                      {c.services.slice(0, 3).map((s) => (
                        <span key={s} className="v2-pill border border-[var(--v2-blue)] px-2.5 py-1 text-[11px] text-[var(--v2-blue)]">
                          {s}
                        </span>
                      ))}
                    </span>
                    <h3 className="mt-3 text-[clamp(18px,1.55vw,22px)] font-bold leading-[1.4] transition-colors duration-300 group-hover:text-[var(--v2-blue)]">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-[12px] font-medium text-[var(--v2-ink-sub)]">
                      {c.region}｜{c.industry}
                    </p>
                  </Link>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>

          <div className="mt-16 flex justify-center md:mt-24">
            <ArrowLink href="/cases" variant="outline">
              All Cases
            </ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}

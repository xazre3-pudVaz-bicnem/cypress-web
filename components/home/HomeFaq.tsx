"use client";

import { useState } from "react";
import RevealLines from "@/components/motion/RevealLines";
import ArrowLink from "@/components/ui/ArrowLink";

/**
 * よくあるご質問。回答は閉じていても HTML に残し（検索エンジン・AI が読めるように）、
 * 高さのアニメーションだけで開閉する。
 */
export default function HomeFaq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section aria-labelledby="home-faq-title" className="bg-white px-[var(--v2-gutter)] pb-28 pt-8 md:pb-40">
      <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <div>
          {/* 見出しとリンクをまとめて固定する（見出しだけ固定すると、リンクが見出しの下に潜り込む） */}
          <div className="md:sticky md:top-[120px]">
            <h2 id="home-faq-title">
              <span className="v2-display block text-[clamp(64px,9vw,128px)] text-[var(--v2-blue)]">
                <RevealLines lines={["FAQ"]} />
              </span>
              <span className="mt-3 block text-[15px] font-bold tracking-[0.04em]">よくあるご質問</span>
            </h2>
            <div className="mt-8 hidden md:block">
              <ArrowLink href="/faq">すべての質問を見る</ArrowLink>
            </div>
          </div>
        </div>
        <ul className="border-t" style={{ borderColor: "var(--v2-line)" }}>
          {items.map((item, i) => {
            const expanded = open === i;
            return (
              <li key={item.q} className="border-b" style={{ borderColor: "var(--v2-line)" }}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={expanded}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(expanded ? null : i)}
                    className="group flex w-full items-start gap-4 py-6 text-left md:py-7"
                  >
                    <span className="v2-display mt-0.5 text-[18px] text-[var(--v2-blue)]">Q</span>
                    <span className="flex-1 text-[16px] font-bold leading-[1.6] tracking-[0.02em] transition-colors group-hover:text-[var(--v2-blue)] md:text-[18px]">
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-white transition-transform duration-500"
                      style={{ background: "var(--v2-blue)", transform: expanded ? "rotate(45deg)" : "none", transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                    >
                      <svg width="11" height="11" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M6 1v10M1 6h10" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className="grid transition-[grid-template-rows] duration-500"
                  style={{ gridTemplateRows: expanded ? "1fr" : "0fr", transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 pl-8 pr-11 text-[14px] font-medium leading-[2] text-[var(--v2-ink-sub)]" style={{ overflowWrap: "anywhere" }}>
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="md:hidden">
          <ArrowLink href="/faq">すべての質問を見る</ArrowLink>
        </div>
      </div>
    </section>
  );
}

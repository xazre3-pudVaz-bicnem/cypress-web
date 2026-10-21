"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  items: FaqItem[];
  heading?: string;
  bgColor?: string;
}

/**
 * 下層ページ共通の「よくある質問」（トップの FAQ と同じ見た目）。
 * 回答は閉じていても HTML に残し（検索エンジン・AI が読めるように）、高さのアニメーションだけで開閉する。
 */
export default function FaqSection({ items, heading = "よくある質問", bgColor = "#FFFFFF" }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-[var(--v2-gutter)] py-20 md:py-28" style={{ background: bgColor }}>
      <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <div>
          <p className="v2-display text-[clamp(56px,7vw,104px)] leading-[0.95] text-[var(--v2-blue)]" aria-hidden>
            FAQ
          </p>
          <h2 className="mt-3 text-[16px] font-bold tracking-[0.04em] md:text-[18px]">{heading}</h2>
        </div>
        <ul className="border-t" style={{ borderColor: "var(--v2-line)" }}>
          {items.map((item, i) => {
            const expanded = open === i;
            return (
              <li key={i} className="border-b" style={{ borderColor: "var(--v2-line)" }}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    className="group flex w-full items-start gap-4 py-6 text-left"
                    onClick={() => setOpen(expanded ? null : i)}
                  >
                    <span className="v2-display mt-0.5 text-[18px] text-[var(--v2-blue)]">Q</span>
                    <span className="flex-1 text-[15px] font-bold leading-[1.7] tracking-[0.02em] transition-colors group-hover:text-[var(--v2-blue)] md:text-[17px]">
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-white transition-transform duration-500"
                      style={{ background: "var(--v2-blue)", transform: expanded ? "rotate(45deg)" : "none" }}
                    >
                      <svg width="11" height="11" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M6 1v10M1 6h10" />
                      </svg>
                    </span>
                  </button>
                </h3>
                {/* 閉じている回答も検索エンジンが読めるよう、HTMLには常に含めて高さだけ0にする */}
                <div
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
      </div>
    </section>
  );
}

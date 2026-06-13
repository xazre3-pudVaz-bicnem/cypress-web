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

export default function FaqSection({ items, heading = "よくある質問", bgColor = "#FFFFFF" }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-24" style={{ background: bgColor }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>FAQ</p>
          <h2 className="font-black text-[26px] md:text-[30px]" style={{ color: "#0F172A" }}>{heading}</h2>
        </div>
        <div className="max-w-3xl">
          {items.map((item, i) => (
            <div key={i} style={{ borderBottom: "1px solid #E8E4DC" }}>
              <button
                className="w-full flex items-start justify-between gap-4 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-[15px] font-medium leading-relaxed" style={{ color: "#0F172A" }}>
                  {item.q}
                </span>
                <svg
                  className="w-5 h-5 shrink-0 mt-0.5 transition-transform"
                  style={{ transform: open === i ? "rotate(45deg)" : "", color: "#9CA3AF" }}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
              {open === i && (
                <div className="pb-5">
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const NUMBERS = [
  { value: 200, suffix: "+", label: "累計支援実績", sub: "企業・店舗", color: "#2563EB" },
  { value: 94, suffix: "%", label: "MEO上位表示率", sub: "TOP3達成率", color: "#10B981" },
  { value: 340, suffix: "%", prefix: "+", label: "自然検索流入増加", sub: "SEO対策平均", color: "#2563EB" },
  { value: 65, suffix: "%", prefix: "−", label: "AI工数削減", sub: "AI導入実績", color: "#06B6D4" },
  { value: 98, suffix: "%", label: "継続率", sub: "解約率2%以下", color: "#10B981" },
  { value: 4.8, suffix: "", label: "顧客満足度", sub: "5点満点平均", color: "#F59E0B", decimals: 1 },
];

function Counter({ value, suffix = "", prefix = "", decimals = 0, color }: {
  value: number; suffix?: string; prefix?: string; decimals?: number; color: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * value).toFixed(decimals)));
      if (elapsed >= duration) clearInterval(tick);
    }, 16);
    return () => clearInterval(tick);
  }, [isInView, value, decimals]);
  return <span ref={ref} className="font-black tabular-nums" style={{ color }}>{prefix}{count.toFixed(decimals)}{suffix}</span>;
}

export default function NumbersSection() {
  return (
    <section className="py-24 md:py-32" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Results</SectionLabel>
          <h2 className="font-black text-[#0F172A] leading-tight tracking-tight" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
            数字が証明する、<span style={{ color: "#2563EB" }}>成果</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {NUMBERS.map((n) => (
            <div key={n.label} className="bg-white rounded-2xl p-6 text-center transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(37,99,235,0.1)]" style={{ border: "1px solid #E2E8F0", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <div className="text-3xl md:text-4xl mb-2" style={{ lineHeight: 1 }}>
                <Counter value={n.value} suffix={n.suffix} prefix={n.prefix} decimals={n.decimals} color={n.color} />
              </div>
              <div className="font-semibold text-[#0F172A] text-[13px] mb-1">{n.label}</div>
              <div className="text-[11px] text-[#94A3B8]">{n.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


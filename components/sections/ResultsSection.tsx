"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const results = [
  { name: "宝宮設備", category: "ホームページ制作", detail: "MEO・SEO対策込み" },
  { name: "VERTEX", category: "ホームページ制作", detail: "コンバージョン改善" },
  { name: "丸義", category: "MEO対策", detail: "Googleマップ上位表示" },
  {
    name: "アトリエスプリング",
    category: "ホームページ制作",
    detail: "ブランドサイト制作",
  },
  { name: "カルカモ", category: "ホームページ制作", detail: "テイクアウト店舗" },
  { name: "竹原タタミ店", category: "MEO / SEO対策", detail: "地域集客強化" },
  { name: "その他多数", category: "各種支援", detail: "個別ご相談ください" },
];

const DOUBLED = [...results, ...results];

export default function ResultsSection() {
  return (
    <section id="results" className="py-32 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <span className="text-[11px] font-mono tracking-[0.22em] text-[#b0b0b0] uppercase block mb-4">
          04 / Results
        </span>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: EASE }}
            className="font-black text-[#0a0a0a] leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
          >
            制作実績
          </motion.h2>
          <p className="text-[#a3a3a3] text-sm">
            全ての実績はお問い合わせください
          </p>
        </div>
      </div>

      <div className="marquee-wrapper overflow-hidden">
        <div className="animate-marquee gap-5" style={{ paddingLeft: "20px" }}>
          {DOUBLED.map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 bg-white border border-[#ebebeb] rounded-2xl p-7"
            >
              <span className="text-[10px] font-mono text-[#b0b0b0] uppercase tracking-wider block mb-4">
                {r.category}
              </span>
              <h3 className="font-bold text-[#0a0a0a] text-xl mb-2">
                {r.name}
              </h3>
              <p className="text-[#525252] text-sm">{r.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

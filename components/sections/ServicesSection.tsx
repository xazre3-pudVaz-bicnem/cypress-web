"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    num: "01",
    title: "MEO対策",
    desc: "Googleマップで上位表示。地域の検索で見つけてもらう仕組みを構築します。口コミ管理・GBP最適化も含む包括支援。",
    tags: ["口コミ管理", "GBP最適化", "競合分析"],
  },
  {
    num: "02",
    title: "SEO対策",
    desc: "Google検索で上位表示。コンテンツ戦略から技術的SEOまで、持続的な集客を実現します。",
    tags: ["キーワード分析", "コンテンツSEO", "内部対策"],
  },
  {
    num: "03",
    title: "AIO対策",
    desc: "ChatGPT・Gemini・Perplexityなど、AI検索エンジンから引用されやすいコンテンツ設計。E-E-A-T強化も対応。",
    tags: ["E-E-A-T強化", "構造化データ", "AI最適化"],
  },
  {
    num: "04",
    title: "ホームページ制作",
    desc: "成果にこだわったWebサイト制作。SEO・CV率・デザイン品質を同時に追求します。最短2週間で公開。",
    tags: ["Next.js", "CV設計", "スマホ最適化"],
  },
  {
    num: "05",
    title: "SNS運用",
    desc: "Instagram・X・LINEなどのSNS運用代行。投稿・分析・改善を一貫してサポートします。",
    tags: ["Instagram", "LINE活用", "コンテンツ制作"],
  },
  {
    num: "06",
    title: "AI導入支援",
    desc: "業務効率化・チャットボット・自動化ツールなど、AIを活用した経営改善を支援します。",
    tags: ["業務自動化", "AI活用", "DX推進"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[11px] font-mono tracking-[0.22em] text-[#b0b0b0] uppercase block mb-4">
              03 / Services
            </span>
            <h2
              className="font-black text-[#0a0a0a] leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
            >
              提供サービス
            </h2>
          </div>
          <p className="text-[#525252] text-sm leading-relaxed max-w-xs">
            集客に必要な施策を
            <br />
            ワンストップで提供します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.article
              key={s.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
              className="group border border-[#ebebeb] rounded-2xl p-8 hover:border-[#0a0a0a] transition-colors cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[11px] font-mono text-[#b0b0b0]">
                  {s.num}
                </span>
                <div className="w-6 h-6 rounded-full border border-[#ebebeb] group-hover:border-[#0a0a0a] flex items-center justify-center transition-colors">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path
                      d="M1 8L8 1M8 1H3M8 1V6"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="font-bold text-[#0a0a0a] text-xl mb-3">
                {s.title}
              </h3>
              <p className="text-[#525252] text-sm leading-[1.8] mb-6">
                {s.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-[#a3a3a3] border border-[#ebebeb] rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

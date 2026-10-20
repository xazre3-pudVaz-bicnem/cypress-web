"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    num: "01",
    title: "無料相談",
    desc: "現在の課題や目標をヒアリング。オンライン・電話・対面すべて対応します。",
  },
  {
    num: "02",
    title: "提案・見積",
    desc: "最適な施策と価格をご提案。押し売りは一切ありません。",
  },
  {
    num: "03",
    title: "制作・実装",
    desc: "最短2週間でサイト公開。MEO・SEO設定も並行して進めます。",
  },
  {
    num: "04",
    title: "運用開始",
    desc: "公開後もデータを監視し、月次レポートを提供します。",
  },
  {
    num: "05",
    title: "継続改善",
    desc: "成果データをもとに施策を最適化。長期的に伴走します。",
  },
];

export default function FlowSection() {
  return (
    <section className="py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-[11px] font-mono tracking-[0.22em] text-[#b0b0b0] uppercase block mb-4">
            07 / Flow
          </span>
          <h2
            className="font-black text-[#0a0a0a] leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
          >
            導入の流れ
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
              className="relative bg-white border border-[#ebebeb] rounded-2xl p-7"
            >
              <span className="text-[11px] font-mono text-[#b0b0b0] block mb-5">
                {step.num}
              </span>
              <h3 className="font-bold text-[#0a0a0a] text-base mb-3">
                {step.title}
              </h3>
              <p className="text-[#525252] text-sm leading-[1.8]">{step.desc}</p>

              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-[#fafafa] p-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2 6h8M6 2l4 4-4 4"
                      stroke="#c8c8c8"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

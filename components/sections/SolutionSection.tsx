"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const items = ["MEO", "SEO", "AIO", "HP制作", "SNS運用", "AI自動化"];

export default function SolutionSection() {
  return (
    <section className="py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[11px] font-mono tracking-[0.22em] text-[#b0b0b0] uppercase">
            02 / Solution
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: EASE }}
              className="font-black text-[#0a0a0a] leading-[1.1] tracking-[-0.02em] mb-7"
              style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
            >
              すべて、
              <br />
              サイプレスが
              <br />
              解決します。
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.12 }}
              className="text-[#525252] text-base leading-[1.9]"
            >
              集客に必要なすべての施策を、一社で統合的にサポート。
              <br />
              バラバラな業者に依頼する非効率を解消し、
              <br />
              一貫した戦略で成果を最大化します。
            </motion.p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: EASE, delay: i * 0.06 }}
                className="bg-white border border-[#e8e8e8] rounded-2xl p-6 text-center hover:border-[#c0c0c0] transition-colors"
              >
                <span className="font-bold text-[#0a0a0a] text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

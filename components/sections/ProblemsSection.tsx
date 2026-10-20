"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const problems = [
  "HPを作ったのに、問い合わせが来ない",
  "Googleで競合より下に表示されている",
  "SNSを始めたが投稿が続かない",
  "求人募集しても応募が一切来ない",
  "広告費だけが増え続け、成果が出ない",
];

export default function ProblemsSection() {
  return (
    <section className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-[11px] font-mono tracking-[0.22em] text-[#444] uppercase">
            01 / Problem
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: EASE }}
          className="font-black text-white leading-[1.1] tracking-[-0.02em] mb-16"
          style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
        >
          こんなお悩み、
          <br />
          ありませんか？
        </motion.h2>

        <div>
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.07 }}
              className="border-t border-[#1c1c1c] py-6 flex items-center gap-6 group cursor-default"
            >
              <span className="text-[11px] font-mono text-[#3a3a3a] tabular-nums shrink-0 w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-white/70 text-base sm:text-lg group-hover:text-white/95 transition-colors">
                {p}
              </span>
            </motion.div>
          ))}
          <div className="border-t border-[#1c1c1c]" />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const FAQS = [
  {
    q: "どのサービスから始めればいいですか？",
    a: "まずは無料相談をお申し込みください。現状の集客課題・目標・予算をヒアリングし、費用対効果が最も高いサービスからご提案します。多くの地域ビジネスではMEO対策から始めるのが効果的です。",
  },
  {
    q: "中小企業・個人事業主でも対応していただけますか？",
    a: "はい、むしろ中小企業・個人事業主のご支援が私たちの得意領域です。予算規模に応じたプランをご用意しており、小規模から始めることも可能です。",
  },
  {
    q: "成果が出るまでどのくらいかかりますか？",
    a: "MEO対策は2〜3ヶ月、SEO対策は3〜6ヶ月、AIO対策は1〜3ヶ月で初期成果が確認できる場合が多いです。競合状況や対象エリアによって異なります。",
  },
  {
    q: "複数のサービスを組み合わせることはできますか？",
    a: "はい、MEO+SEO+AIOなど複数サービスの組み合わせにより相乗効果が生まれます。まとめてご依頼いただく場合は、パッケージ料金でご提供しています。",
  },
  {
    q: "月額の費用はいくらくらいですか？",
    a: "サービス内容・対象エリア・競合状況によって異なります。MEO対策は月額3〜10万円、SEO対策は月額10〜30万円が一般的な目安です。まずは無料相談でお見積りします。",
  },
  {
    q: "契約期間の縛りはありますか？",
    a: "基本的には月次契約・毎月更新です。ただし、SEOなど成果が出るまで時間がかかるサービスは、最低3〜6ヶ月の継続をお願いしています。途中解約の場合も違約金等はありません。",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.05}>
      <div
        className="transition-all duration-200"
        style={{
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <button
          className="w-full flex items-start justify-between gap-4 py-5 text-left"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <div className="flex items-start gap-3">
            <span
              className="shrink-0 font-black text-sm mt-0.5"
              style={{ color: "#2563EB" }}
            >
              Q
            </span>
            <span className="font-medium text-sm leading-relaxed" style={{ color: "#0F172A" }}>
              {q}
            </span>
          </div>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
            style={{
              background: open ? "#2563EB" : "rgba(37,99,235,0.08)",
              color: open ? "#ffffff" : "#2563EB",
              border: "1px solid rgba(37,99,235,0.2)",
            }}
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </motion.span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="flex items-start gap-3 pb-5">
                <span
                  className="shrink-0 font-black text-sm mt-0.5"
                  style={{ color: "#64748B" }}
                >
                  A
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                  {a}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export default function HomeFAQSection() {
  return (
    <section className="py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel>FAQ</SectionLabel>
          <h2
            className="font-black leading-tight tracking-tight mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#0F172A" }}
          >
            よくある質問
          </h2>
          <p style={{ color: "#64748B" }}>
            ご不明な点はお気軽にお問い合わせください。
          </p>
        </ScrollReveal>

        <div
          className="bg-white rounded-2xl px-6 overflow-hidden"
          style={{
            border: "1px solid #E2E8F0",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          {FAQS.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

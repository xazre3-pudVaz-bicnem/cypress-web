"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const faqs = [
  {
    q: "費用はどのくらいかかりますか？",
    a: "サービス内容・規模によって異なります。ホームページ制作は15万円〜、MEO対策は月額3万円〜でご提供しています。まずは無料相談でご要望をお聞かせください。",
  },
  {
    q: "制作期間はどのくらいですか？",
    a: "最短2週間でのサイト公開が可能です。標準的なコーポレートサイトで3〜4週間が目安です。お急ぎの場合はご相談ください。",
  },
  {
    q: "SEO・MEO効果が出るまでの期間は？",
    a: "MEO対策は最短1〜3ヶ月で効果が出始めます。SEO対策は3〜6ヶ月が目安ですが、競合状況やキーワードによって異なります。",
  },
  {
    q: "他社で制作したサイトの運用も依頼できますか？",
    a: "はい、既存サイトのSEO対策・MEO対策・改善も承っています。まず現状を診断した上でご提案します。",
  },
  {
    q: "どのような業種・業態に対応していますか？",
    a: "建築・リフォーム業、士業（弁護士・税理士等）、医療・歯科・美容院、飲食店、採用強化を希望する企業など幅広い業種に対応しています。",
  },
  {
    q: "契約期間の縛りはありますか？",
    a: "月額サービスは最低3ヶ月からのご契約をお願いしていますが、それ以降は1ヶ月単位でご継続いただけます。",
  },
  {
    q: "AIはどのように活用しているのですか？",
    a: "コンテンツ制作の効率化、競合分析、キーワード調査、チャットボット構築など様々な場面でAIを活用しています。AIをツールとして使いこなし、人間の判断と組み合わせることで高品質なサービスを提供しています。",
  },
  {
    q: "進捗や成果はどのように報告してもらえますか？",
    a: "月次レポートで順位変動・アクセス数・問い合わせ数などをお伝えします。Google AnalyticsやSearch Consoleへのアクセス権をご共有いただければリアルタイムでデータを確認できます。",
  },
  {
    q: "相談・見積もりは無料ですか？",
    a: "はい、完全無料です。オンライン・電話・対面のいずれも対応しています。しつこい営業は一切しませんので、お気軽にご相談ください。",
  },
  {
    q: "東京以外の企業でも対応できますか？",
    a: "全国対応しています。基本的にオンラインでのやり取りになりますが、品質は変わりません。これまでも全国各地の企業様をサポートしてきた実績があります。",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-[11px] font-mono tracking-[0.22em] text-[#b0b0b0] uppercase block mb-4">
            08 / FAQ
          </span>
          <h2
            className="font-black text-[#0a0a0a] leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
          >
            よくある質問
          </h2>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-[#f0f0f0]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-7 flex items-start justify-between gap-6 text-left group"
              >
                <div className="flex gap-5 items-start">
                  <span className="text-[11px] font-mono text-[#b0b0b0] mt-0.5 shrink-0">
                    Q{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-[#0a0a0a] text-base group-hover:text-[#525252] transition-colors leading-[1.7]">
                    {faq.q}
                  </span>
                </div>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.22, ease: EASE }}
                  className="shrink-0 mt-1 text-[#a3a3a3]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 2v12M2 8h12"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="pb-7 pl-10">
                      <p className="text-[#525252] text-base leading-[1.9]">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="border-t border-[#f0f0f0]" />
        </div>
      </div>
    </section>
  );
}

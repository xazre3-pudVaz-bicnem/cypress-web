"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const STEPS = [
  {
    num: "01",
    title: "現状分析・ヒアリング",
    body: "現在の集客状況・競合・ターゲット・課題をヒアリングします。Googleアナリティクス・サーチコンソール・マップ順位など、数値から現状を把握します。",
    tag: "無料",
  },
  {
    num: "02",
    title: "キーワード・戦略設計",
    body: "狙うキーワード・地域・業種を整理し、MEO/SEO/AIOそれぞれの優先順位を設計します。競合との差別化ポイントを明確にします。",
    tag: "戦略",
  },
  {
    num: "03",
    title: "サイト・Googleプロフィール整備",
    body: "ホームページの構造設計またはGoogleビジネスプロフィールの最適化を実施します。SEO・MEO・AIOの基盤を同時に構築します。",
    tag: "制作",
  },
  {
    num: "04",
    title: "SEO/MEO/AIO実装",
    body: "コンテンツ作成・構造化データ・内部リンク・llms.txtなど、各施策を実装します。AIを活用して実装スピードを上げます。",
    tag: "実装",
  },
  {
    num: "05",
    title: "公開・リリース",
    body: "サイト公開・MEO設定完了後、検索エンジンへのインデックス申請・Search Consoleへの登録を行います。",
    tag: "公開",
  },
  {
    num: "06",
    title: "計測・分析",
    body: "公開後のアクセス数・順位・問い合わせ数を計測します。月次レポートを提供し、改善ポイントを特定します。",
    tag: "運用",
  },
  {
    num: "07",
    title: "継続改善・コンテンツ更新",
    body: "ブログ・SNS投稿・Googleプロフィール更新をAIを活用しながら継続します。更新頻度が高いほど検索評価が向上します。",
    tag: "継続",
  },
];

function Step({
  step,
  index,
  isLast,
}: {
  step: (typeof STEPS)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 * index }}
      style={{ display: "flex", gap: "clamp(20px, 3vw, 40px)", position: "relative" }}
    >
      {/* Left: number + line */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
          width: "48px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            border: "1px solid #E8E4DC",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            background: "#F8F6F2",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "11px",
              letterSpacing: "0.1em",
              color: "#9CA3AF",
            }}
          >
            {step.num}
          </span>
        </div>
        {!isLast && (
          <motion.div
            style={{
              width: "1px",
              flex: 1,
              marginTop: "8px",
              background: "#E8E4DC",
              minHeight: "48px",
            }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, ease: "linear", delay: 0.2 + 0.05 * index }}
          />
        )}
      </div>

      {/* Right: content */}
      <div style={{ paddingBottom: isLast ? "0" : "clamp(32px, 4vh, 52px)", paddingTop: "8px", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(15px, 1.6vw, 18px)",
              color: "#0B1628",
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            {step.title}
          </h3>
          <span
            style={{
              fontSize: "10px",
              padding: "2px 8px",
              border: "1px solid #E8E4DC",
              color: "#9CA3AF",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.08em",
              flexShrink: 0,
            }}
          >
            {step.tag}
          </span>
        </div>
        <p
          style={{
            fontSize: "13px",
            color: "#9CA3AF",
            lineHeight: "1.9",
          }}
        >
          {step.body}
        </p>
      </div>
    </motion.div>
  );
}

export default function HomeProcess() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-10%" });

  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "clamp(72px, 10vh, 120px) 0",
        borderTop: "1px solid #E8E4DC",
      }}
    >
      <div
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 60px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "clamp(40px, 6vw, 96px)",
            alignItems: "start",
          }}
          className="process-grid"
        >
          {/* Left: header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "sticky", top: "96px" }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.3em",
                color: "#9CA3AF",
                fontSize: "10px",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              Process
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(22px, 3vw, 38px)",
                color: "#0B1628",
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: "24px",
              }}
            >
              ご支援の<br />流れ。
            </h2>
            <p
              style={{
                fontSize: "13px",
                color: "#6B7280",
                lineHeight: "1.9",
                marginBottom: "32px",
              }}
            >
              初回相談から公開・継続運用まで、一貫してサポートします。
            </p>
            <Link
              href="/process"
              style={{
                fontSize: "12px",
                fontFamily: "var(--font-display)",
                letterSpacing: "0.08em",
                color: "#9CA3AF",
                borderBottom: "1px solid #D1C9BE",
                paddingBottom: "2px",
                textDecoration: "none",
              }}
            >
              詳しい流れを見る →
            </Link>
          </motion.div>

          {/* Right: steps */}
          <div>
            {STEPS.map((step, i) => (
              <Step key={step.num} step={step} index={i} isLast={i === STEPS.length - 1} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
          .process-grid > *:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}

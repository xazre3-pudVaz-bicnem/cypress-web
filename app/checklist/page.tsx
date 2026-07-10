import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import { checklistPages } from "@/lib/data/checklistPages";

export const metadata: Metadata = {
  title: "Webマーケティング チェックリスト一覧｜MEO・SEO・SNS・ホームページ｜株式会社サイプレス",
  description:
    "MEO初期設定・SEO対策・SNS運用・ホームページ公開前・AIO対策など、Webマーケティングのチェックリストを多数公開しています。施策の漏れを防ぐセルフチェックにご利用ください。",
  keywords: ["MEO チェックリスト", "SEO チェックリスト", "ホームページ 公開前チェック", "Web集客 セルフチェック"],
  openGraph: {
    title: "Webマーケティング チェックリスト一覧｜MEO・SEO・SNS・ホームページ｜株式会社サイプレス",
    description: "MEO・SEO・SNS・ホームページのチェックリスト集。施策の漏れを防ぐセルフチェックにご利用ください。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/checklist" },
};

const faqItems = [
  {
    q: "チェックリストはどのように使えばいいですか？",
    a: "各チェックリストに記載された項目を、自社の現状と照らし合わせてチェックします。✓が多いほど施策が充実していることを意味し、✓がついていない項目が改善の優先候補です。一気に全項目を対応するのではなく、効果の高い項目から順に対応することをお勧めします。",
  },
  {
    q: "チェックリストをやってみたが何から始めればいいかわかりません",
    a: "チェックリストで未対応項目が多い場合は、まず「基本設定系」から着手することをお勧めします。MEOならGBPの基本情報整備、SEOならページタイトル・メタディスクリプションの最適化など、基礎的な施策が優先度高いです。不明な場合は無料相談でアドバイスします。",
  },
  {
    q: "チェックリストは誰でも使えますか？",
    a: "はい、Web集客の経験がない方でも使いやすいように用語解説を含めて作成しています。「この項目の意味がわからない」という場合は、各用語集ページや無料相談でご説明します。",
  },
];

export default function ChecklistPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", gap: "6px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>チェックリスト</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Checklist</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              Webマーケティング<br />チェックリスト
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "12px" }}>
              MEO対策・SEO対策・SNS運用・ホームページ公開・AIO対策の各場面で確認すべき項目をまとめたチェックリストです。
              施策の漏れを防ぎ、確実に成果につなげてください。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              チェックリストで自社の状況を把握し、優先的に取り組むべき施策を特定しましょう。
              不明点や対応が難しい項目については無料相談でご相談ください。
            </p>
          </div>
        </section>

        {/* Image band */}
        <section style={{ position: "relative", height: "270px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_18_57.jpg"
            alt="Webマーケティングチェックリスト"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.5)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(18px,2.5vw,28px)", lineHeight: 1.5 }}>
                施策の漏れをなくす。<br />プロが作るチェックリスト集。
              </p>
            </div>
          </div>
        </section>

        {/* Checklist pages grid */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>All Checklists</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              チェックリスト一覧
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "#ece8e0" }}>
              {checklistPages.map((page) => {
                const totalItems = page.sections.reduce((acc, s) => acc + s.items.length, 0);
                return (
                  <Link
                    key={page.slug}
                    href={`/checklist/${page.slug}`}
                    style={{ background: "#ffffff", padding: "28px", textDecoration: "none", display: "block" }}
                  >
                    <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", fontSize: "10px", color: "#9ca3af", marginBottom: "8px" }}>
                      {page.titleEn}
                    </p>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px", lineHeight: 1.4 }}>
                      {page.title}
                    </p>
                    <p style={{ fontSize: "12px", color: "#c4b89a", fontWeight: 600, marginBottom: "8px" }}>
                      {totalItems}項目のチェック
                    </p>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>
                      {page.intro.slice(0, 55)}...
                    </p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "12px", fontSize: "12px", color: "#9ca3af" }}>
                      チェックリストを見る
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="チェックリストについてよくある質問" bgColor="#f9f8f5" />

        <RelatedPages
          links={[
            { href: "/guide", label: "Web集客ガイド", desc: "実践的なガイド集" },
            { href: "/knowledge", label: "ナレッジベース", desc: "専門知識の解説" },
            { href: "/goals", label: "目的別施策プラン", desc: "達成目標から施策を選ぶ" },
            { href: "/problems", label: "お悩み別ページ", desc: "症状から解決策を見つける" },
            { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ集客" },
            { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示" },
            { href: "/contact", label: "無料相談", desc: "専門家に相談する" },
          ]}
        />

        <PageContactCTA
          heading="自社の状況を診断してほしい方は"
          body="チェックリストで気になる項目があればお気軽にご相談ください。専門家が状況を診断して改善策をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}

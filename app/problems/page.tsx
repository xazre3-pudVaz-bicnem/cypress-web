import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import { problemPages } from "@/lib/data/problemPages";

export const metadata: Metadata = {
  title: "Web集客のお悩み別ページ｜問い合わせゼロ・順位低下・競合負けを解決｜サイプレス",
  description:
    "Web集客・MEO・SEO・ホームページ制作に関するお悩みを症状別に解説。問い合わせがゼロ、Googleに表示されない、競合に負けている——あなたの悩みから解決策を見つけてください。東京・全国対応。",
  keywords: ["Web集客 悩み", "問い合わせゼロ", "Googleマップ 表示されない", "SEO 順位下落", "ホームページ 集客できない"],
  openGraph: {
    title: "Web集客のお悩み別ページ｜問い合わせゼロ・順位低下・競合負け｜株式会社サイプレス",
    description: "Web集客のお悩みを症状別に解説。あなたの悩みから解決策を見つけてください。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/problems" },
};

const faqItems = [
  {
    q: "どのお悩みが自分に当てはまるかわかりません",
    a: "最も重要な指標は「問い合わせ・来店数」です。問い合わせが少なければ「問い合わせゼロ」ページから、Googleマップに出ないなら「Googleマップに表示されない」ページから読み始めてください。複数に当てはまる場合は無料相談でお聞きします。",
  },
  {
    q: "ホームページはあるのに集客できていない原因は？",
    a: "主な原因は：①検索から流入がない（SEO・MEO未対策）、②流入はあるが問い合わせしてもらえない（CV率の低さ・導線設計の問題）、③ターゲット外のキーワードで流入している（キーワード設計の誤り）の3つです。まずはアクセス解析を確認することが解決の第一歩です。",
  },
  {
    q: "SEO対策をやっているのに効果が出ません",
    a: "「やっている」だけでは不十分なケースが多いです。コンテンツの品質・ターゲットキーワードの適切さ・内部リンク構造・ページ表示速度・モバイル対応など複合的な要因で決まります。現状の施策内容を診断した上で、何が不足しているかをお伝えします。",
  },
  {
    q: "競合他社にGoogleマップで負けています",
    a: "Googleマップの順位は「関連性・距離・知名度」の3要素で決まります。知名度（口コミ件数・評価スコア・GBP更新頻度）が最もコントロールしやすい要因です。競合のGBP状況を分析し、何が劣っているかを特定することが逆転の出発点です。",
  },
  {
    q: "問い合わせは来るが成約しません",
    a: "集客の問題というより、問い合わせ後の対応（レスポンス速度・提案内容・料金設定）やサイトでの事前情報提供が課題のケースが多いです。ホームページで「費用感」「実績」「信頼性」を事前に見せることで、問い合わせの質と成約率が改善します。",
  },
];

export default function ProblemsPage() {
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
              <span style={{ color: "#0d1b2a" }}>お悩み別</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Problems</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              あなたのお悩みから解決策を見つける
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "12px" }}>
              Web集客・MEO・SEO・ホームページに関するお悩みを症状別にまとめました。
              「問い合わせがゼロ」「Googleに表示されない」「競合に負けている」——
              当てはまるお悩みを選ぶと、原因・リスク・解決策がわかります。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              多くのケースで、お悩みは単一の原因ではなく複数が絡み合っています。
              まず最も深刻な症状から読み始め、不明点は無料相談でお聞きください。
            </p>
          </div>
        </section>

        {/* Image band */}
        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_18_57.png"
            alt="Web集客の悩みを解決するデジタルマーケティング戦略"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.55)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(18px,2.5vw,30px)", lineHeight: 1.5 }}>
                症状から原因を特定し、<br />最短で解決策にたどり着く。
              </p>
            </div>
          </div>
        </section>

        {/* Problem pages grid */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>All Problems</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              お悩み別ページ一覧
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "#ece8e0" }}>
              {problemPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/problems/${page.slug}`}
                  style={{ background: "#ffffff", padding: "28px", textDecoration: "none", display: "block" }}
                >
                  <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", fontSize: "10px", color: "#9ca3af", marginBottom: "8px" }}>
                    {page.titleEn}
                  </p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "#0d1b2a", fontWeight: 700, marginBottom: "10px" }}>
                    {page.title}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>
                    {page.intro.slice(0, 60)}...
                  </p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "12px", fontSize: "12px", color: "#9ca3af" }}>
                    解決策を見る
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 悩みの根本原因 */}
        <section style={{ background: "#f9f8f5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Root Causes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              Web集客の悩みに共通する4つの根本原因
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "そもそも見つけてもらえていない（露出不足）",
                  b: "Googleマップ・Google検索・SNSで自社が表示されないと、存在を知ってもらえません。MEO・SEO・SNS運用でまず「見つけてもらえる状態」を作ることが集客の第一歩です。",
                },
                {
                  n: "02",
                  t: "見つけてもらえても問い合わせしてもらえない（CV率の低さ）",
                  b: "流入はあるが問い合わせがない場合、ホームページの導線設計・信頼性要素・料金の明確さに問題があります。ユーザーが「この会社に頼もう」と決断するための情報と導線を整備することが必要です。",
                },
                {
                  n: "03",
                  t: "口コミ・評判が少なく選ばれない（信頼性の欠如）",
                  b: "Googleマップの口コミが少ない・低評価が多い場合、比較検討でのコンバージョンが下がります。口コミ獲得の仕組みを構築し、既存顧客の声を積極的に収集することが信頼性強化の鍵です。",
                },
                {
                  n: "04",
                  t: "施策はやっているが継続できない（リソース不足）",
                  b: "「忙しくてGBP更新が止まった」「SNSを始めたが続かない」というケースは多いです。運用代行・仕組み化・自動化を組み合わせることで、少ないリソースでも継続的な集客施策が可能になります。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "20px", fontWeight: 700, minWidth: "36px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="Web集客のお悩みについてよくある質問" bgColor="#FFFFFF" />

        <RelatedPages
          links={[
            { href: "/goals", label: "目的別施策プラン", desc: "やりたいことから施策を選ぶ" },
            { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ集客の改善" },
            { href: "/services/seo", label: "SEO対策サービス", desc: "検索順位を改善" },
            { href: "/services/web-design", label: "ホームページ制作", desc: "集客力の高いサイト制作" },
            { href: "/meo", label: "MEO対策とは", desc: "Googleマップ上位表示の基礎" },
            { href: "/seo", label: "SEO対策とは", desc: "検索上位表示の基礎知識" },
            { href: "/guide", label: "Web集客ガイド", desc: "実践的なガイド" },
            { href: "/support", label: "サポート・保守管理", desc: "継続的な運用支援" },
            { href: "/knowledge", label: "ナレッジベース", desc: "専門知識の解説" },
            { href: "/contact", label: "無料相談", desc: "現状診断を無料で実施" },
          ]}
        />

        <PageContactCTA
          heading="お悩みをご相談ください"
          body="どのお悩みも、まずは無料相談で現状診断と改善の方向性をお伝えします。お気軽にお問い合わせください。"
        />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import { goalPages } from "@/lib/data/goalPages";

export const metadata: Metadata = {
  title: "目的別Web集客プラン｜問い合わせ増加・上位表示・口コミ獲得｜株式会社サイプレス",
  description:
    "「問い合わせを増やしたい」「Googleマップ上位を取りたい」「AI検索に表示されたい」——あなたの目的に合ったWeb集客の施策とステップをご提案します。目標別・課題別に最適な集客プランを解説。",
  keywords: ["Web集客 目的別", "MEO 目的", "SEO 目的", "問い合わせ増加", "Googleマップ上位", "口コミ増加"],
  openGraph: {
    title: "目的別Web集客プラン｜問い合わせ増加・上位表示・口コミ獲得｜株式会社サイプレス",
    description: "達成したいビジネス目標から逆算して最適な施策プランを提示します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/goals" },
};

const faqItems = [
  {
    q: "どの施策から始めればいいかわかりません",
    a: "「今すぐ来店・問い合わせを増やしたい」ならMEO対策（Googleマップ最適化）が最も即効性があります。「中長期で安定した集客をしたい」ならSEO対策、「AI検索での認知を高めたい」ならAIO対策から始めるのが効果的です。まずは現状の課題を無料診断でお伝えします。",
  },
  {
    q: "複数の目的が重なる場合はどうすればいいですか？",
    a: "よくあることです。例えば「問い合わせを増やしたい×口コミも増やしたい」場合、MEO対策（順位改善）と口コミ獲得の仕組み化を同時に進めることで相乗効果が生まれます。当社では複数目的を統合したプランをご提案しています。",
  },
  {
    q: "予算が限られている場合、どの施策を優先すべきですか？",
    a: "地域ビジネスなら、まずGoogleビジネスプロフィールの最適化（MEO基本設定）が最もコスト対効果が高いです。次に口コミ獲得の仕組み化、その次にSEO対策の順が一般的です。予算に応じた優先順位を無料相談でご提案します。",
  },
  {
    q: "成果が出るまでどのくらいかかりますか？",
    a: "目的と施策によって異なります。MEO対策の基本最適化は2〜4週間で効果が見え始めるケースがあります。SEO対策は3〜6ヶ月の継続が必要です。AIO対策はAIモデルの更新タイミングに依存します。いずれも継続的な取り組みで安定した成果につながります。",
  },
  {
    q: "ホームページがない状態でもMEO対策はできますか？",
    a: "はい、Googleビジネスプロフィールだけでも基本的なMEO対策は開始できます。ただし、ホームページがあることでMEOの順位評価が高まり、問い合わせ転換率も大幅に向上します。並行してシンプルなホームページを制作することをお勧めします。",
  },
];

export default function GoalsPage() {
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
              <span style={{ color: "#0d1b2a" }}>目的別</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Goals</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              目的からWeb集客の施策を選ぶ
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "12px" }}>
              達成したいビジネス目標から逆算して、必要な施策・ステップ・担当サービスをわかりやすくご説明します。
              「問い合わせを増やしたい」「Googleマップ上位を獲りたい」「AI検索に出てきたい」など、
              あなたの目的に合ったページをご覧ください。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              目的が複数ある場合や「何から始めれば良いかわからない」という場合は、無料相談でご状況をお聞きした上で
              優先度の高い施策からご提案します。
            </p>
          </div>
        </section>

        {/* Image band */}
        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 00_32_58.png"
            alt="ビジネス目標達成のためのWeb集客戦略"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.55)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(18px,2.5vw,30px)", lineHeight: 1.5 }}>
                目標設定から施策選択・実行まで。<br />ゴール逆算型のWeb集客支援。
              </p>
            </div>
          </div>
        </section>

        {/* Goal pages grid */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>All Goals</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              目的別施策プラン一覧
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "#ece8e0" }}>
              {goalPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/goals/${page.slug}`}
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
                    施策プランを見る
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How to use */}
        <section style={{ background: "#f9f8f5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>How It Works</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              目的別ページの使い方
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "あなたの目的に近いページを選ぶ", b: "「問い合わせを増やしたい」「Googleマップで上位に出たい」「口コミを増やしたい」など、現在達成したいことに最も近いページを選択してください。複数に当てはまる場合は優先度の高いものから始めましょう。" },
                { n: "02", t: "推奨施策・ステップを確認する", b: "各ページでは、その目的を達成するために必要な施策と実施ステップが具体的に説明されています。どの施策から始めるべきか、どのくらいの期間がかかるかを把握できます。" },
                { n: "03", t: "関連するサービスページを確認する", b: "施策の詳細・費用感・対応内容はサービスページに記載しています。目的別ページで方向性を確認し、サービスページで具体的な支援内容を確認する流れをお勧めします。" },
                { n: "04", t: "不明点は無料相談で確認する", b: "「自社にどれが合うか判断できない」「複数の施策を組み合わせたい」という場合は、無料相談でご状況をお聞きした上で最適なプランをご提案します。お気軽にご相談ください。" },
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

        <FaqSection items={faqItems} heading="目的別Web集客についてよくある質問" bgColor="#FFFFFF" />

        <RelatedPages
          links={[
            { href: "/problems", label: "お悩み別ページ", desc: "症状別の解決策を見つける" },
            { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ上位表示" },
            { href: "/services/seo", label: "SEO対策サービス", desc: "検索順位改善で集客" },
            { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索での引用・推薦" },
            { href: "/services/sns", label: "SNS運用サービス", desc: "SNSで集客・ファン獲得" },
            { href: "/services/web-design", label: "ホームページ制作", desc: "集客できるサイト制作" },
            { href: "/meo", label: "MEO対策とは", desc: "Googleマップ集客の基礎" },
            { href: "/seo", label: "SEO対策とは", desc: "検索上位表示の基礎" },
            { href: "/guide", label: "Web集客ガイド", desc: "実践的なガイド集" },
            { href: "/knowledge", label: "ナレッジベース", desc: "専門知識の解説記事" },
          ]}
        />

        <PageContactCTA
          heading="目的を教えてください"
          body="「何を達成したいか」をお聞かせいただければ、最適な施策プランを無料でご提案します。現状の課題診断から始められます。"
        />
      </main>
      <Footer />
    </>
  );
}

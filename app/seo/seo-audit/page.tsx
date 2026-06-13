import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SEO監査（SEO Audit）｜現状診断から改善へ",
  description: "サイト全体のSEO課題を体系的に診断するSEO監査。インデックス状況・速度・コンテンツ・内部リンク・構造化データなど10項目以上を網羅的に調査します。",
};

const faqItems = [
  { q: "SEO監査はどのくらいの頻度で行うべきですか？", a: "年1〜2回の定期監査が推奨されます。また、サイトリニューアル後・アルゴリズムアップデート後・順位が急落した際は即時監査を行うことが重要です。" },
  { q: "SEO監査で使用するツールは何ですか？", a: "Google Search Console・Google Analytics・Screaming Frog・Ahrefs・Semrushなどを組み合わせて使用します。無料ツールでもGoogle Search Consoleだけで多くの問題を発見できます。" },
  { q: "SEO監査の結果、どのくらいで改善効果が出ますか？", a: "技術的な問題の修正（クロールエラー・速度改善など）は1〜2ヶ月で効果が出ることが多いです。コンテンツやリンクの改善は3〜6ヶ月以上かかります。" },
  { q: "SEO監査は自分でできますか？", a: "Google Search Consoleを使えば基本的な問題は自分で発見できます。より詳細な分析や改善策の立案には専門的な知識が必要なため、プロに依頼することで精度の高い診断が可能です。" },
  { q: "SEO監査とペナルティ解除は別ですか？", a: "SEO監査はSEO全般の診断です。Googleペナルティを受けている場合は手動ペナルティの確認・原因特定・リンク否認・再審査申請という別の手続きが必要です。" },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO対策の基礎" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "技術的SEO対策" },
  { href: "/seo/internal-seo", label: "内部SEO", desc: "サイト内部の最適化" },
  { href: "/seo/search-console", label: "Search Console活用", desc: "Googleツールの使い方" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/seo">SEO対策</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              SEO監査
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>SEO Audit</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              SEO監査｜現状診断から改善計画へ
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              SEO対策を実施しているのに順位が上がらない、以前より下がった、どこに問題があるかわからない——そのような場合はSEO監査（SEO Audit）で現状を体系的に診断します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_14_54.png" alt="SEO監査・現状診断" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>What is SEO Audit</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
              SEO監査とは何か
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                SEO監査とは、Webサイト全体のSEO上の課題を網羅的に調査・分析するプロセスです。インデックス状況・クロールエラー・ページ速度・コンテンツ品質・内部リンク・構造化データ・被リンクなど、SEOに影響するすべての要素を体系的にチェックします。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                闇雲にコンテンツを増やしたり、リンクを購入したりする前に、まず現状の問題点を正確に把握することが重要です。SEO監査によって「どの問題が最も順位に影響しているか」を特定し、優先順位をつけた改善計画を立てます。
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Audit Items</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              SEO監査の対象項目
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "インデックス状況の確認", b: "Google Search Consoleで対象ページが正常にインデックスされているか確認します。noindexの誤設定やインデックス除外ページを特定します。" },
                { n: "02", t: "クロールエラー・404ページの特定", b: "Googlebot がクロールできないページや、存在しないページへのリンクを特定します。301リダイレクトの設定状況もチェックします。" },
                { n: "03", t: "重複コンテンツ・canonical設定", b: "URLのバリエーション（www/非www、http/https、末尾スラッシュ有無）による重複、canonical設定の正確性を確認します。" },
                { n: "04", t: "ページ速度・Core Web Vitals", b: "LCP・CLS・INPのスコアをPageSpeed Insightsで測定。特にモバイルでの速度は重点チェック項目です。" },
                { n: "05", t: "内部リンク・サイト構造", b: "重要ページへの内部リンクが適切に設置されているか、孤立ページ（どこからもリンクされていないページ）がないかを確認します。" },
                { n: "06", t: "タイトル・メタディスクリプション・見出しの最適化", b: "各ページのtitle・meta description・H1タグが最適化されているか、重複していないかをチェックします。" },
                { n: "07", t: "構造化データの実装状況", b: "Schema.orgの実装有無・エラーをGoogle リッチリザルトテストで確認します。FAQ・Organization・BreadcrumbListなどの実装をチェック。" },
                { n: "08", t: "コンテンツの品質・キーワード対応状況", b: "各ページが対応するキーワードの検索意図に応えているか、薄いコンテンツ（コンテンツ量が少ないページ）がないかを評価します。" },
                { n: "09", t: "外部リンク・被リンク状況", b: "どのサイトからリンクされているか、スパムリンクが含まれていないか、被リンクプロファイルの健全性を確認します。" },
                { n: "10", t: "モバイル対応状況", b: "Googleのモバイルフレンドリーテストで問題がないか、モバイルとPCでコンテンツに差異がないかをチェックします。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="SEO監査のご依頼" body="現在のSEO状況を診断し、優先度の高い改善項目をレポートします。順位が伸びない・下がった・リニューアル後に効果が出ないなどのお悩みをお聞かせください。" />
      </main>
      <Footer />
    </>
  );
}

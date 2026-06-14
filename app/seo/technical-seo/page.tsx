import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "テクニカルSEOとは｜表示速度・クロール・Core Web Vitals改善｜株式会社サイプレス",
  description:
    "テクニカルSEOの基礎から実践まで解説。Core Web Vitals・ページ速度・クロール最適化・モバイル対応・インデックス管理・構造化データ実装まで技術的なSEO対策を体系的に網羅。",
  keywords: ["テクニカルSEO", "Core Web Vitals", "ページ速度最適化", "クロール最適化", "モバイルSEO", "インデックス管理"],
  openGraph: {
    title: "テクニカルSEOとは｜表示速度・クロール・Core Web Vitals改善｜株式会社サイプレス",
    description: "テクニカルSEOの実践ガイド。Core Web Vitals・表示速度・クロール最適化・構造化データ実装まで解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/technical-seo" },
};

const faqItems = [
  {
    q: "Core Web Vitalsとは何ですか？SEOへの影響は？",
    a: "Core Web VitalsはGoogleが定める3つのページ体験指標です。LCP（最大コンテンツの描画時間：2.5秒以内が良好）・CLS（レイアウトシフト：0.1以下が良好）・FID/INP（インタラクティビティ：200ms以下が良好）で構成されます。2021年以降、Google検索のランキング要因として正式に採用されており、スコアが低いと順位に不利に働きます。",
  },
  {
    q: "Lighthouseのパフォーマンススコアを上げるには？",
    a: "主な改善施策として、画像のWebP変換・サイズ最適化、JavaScriptの遅延読み込み・コード分割、CSSの圧縮・クリティカルCSSのインライン化、フォントの最適化（`font-display: swap`）、サーバー応答時間の短縮（CDN活用・キャッシュ設定）などがあります。Next.jsを使用している場合は`next/image`・`next/font`の活用で大幅な改善が可能です。",
  },
  {
    q: "クロールバジェットとは何ですか？管理するには？",
    a: "クロールバジェットとは、Googlebotが一定期間内にサイトをクロールするページ数の上限のことです。大規模サイトや更新頻度の高いサイトで重要な概念です。不要なページへのnoindex設定・XMLサイトマップの整備・robots.txtの適切な設定によって、重要なページへのクロールを集中させることができます。",
  },
  {
    q: "モバイルファーストインデックスとは何ですか？",
    a: "Googleがインデックスとランキングの判断にモバイル版のページを主に使用する方針のことです。2023年時点で全サイトに適用されています。モバイルとPCでコンテンツが異なる場合、モバイル版の内容が評価されます。モバイルでの表示速度・使いやすさ・コンテンツの完全性が重要です。",
  },
  {
    q: "サイトリニューアル時にSEO評価を引き継ぐには？",
    a: "301リダイレクトの設定が最重要です。旧URLから新URLへの恒久的なリダイレクトを全ページに設定することで、SEO評価を新URLに引き継ぎます。また新しいXMLサイトマップのSearch Consoleへの登録・旧サイトのURLのクロールリクエスト停止（robots.txt）・内部リンクの更新も重要です。",
  },
  {
    q: "JavaScriptサイト（React・Vue・Next.js）のSEOはどうすればいいですか？",
    a: "SPAやSSRフレームワークでは、JavaScriptが実行されないとコンテンツが表示されない場合があります。Next.jsなどのSSR/SSGフレームワークを使用することで、HTMLとしてコンテンツが提供され、クローラーが確実にコンテンツを読み取れるようになります。また、Googleの動的レンダリングにも対応が必要な場合があります。",
  },
  {
    q: "テクニカルSEOの診断はどのように行いますか？",
    a: "Screaming Frogなどのクロールツール・Google Search Console・PageSpeed Insights・GTmetrixなどのツールを組み合わせて診断します。クロールエラー・インデックス問題・ページ速度・モバイル対応・構造化データのエラーを一括でチェックし、優先度の高い課題から対処します。",
  },
  {
    q: "HTTPSへの移行はSEOに影響しますか？",
    a: "はい。Googleは2014年からHTTPSを軽微なランキング要因として採用しています。また、HTTPSでないサイトはChromeで「保護されていない通信」と表示され、ユーザーの信頼性低下・直帰率上昇につながります。まだHTTPのサイトは早急にHTTPSへ移行することを推奨します。移行時は301リダイレクトの設定が必須です。",
  },
  {
    q: "テクニカルSEOの改善効果はどのくらいで出ますか？",
    a: "技術的な修正（クロールエラーの解消・表示速度の改善）は、Googleの再クロール後（数日〜数週間）に反映されることがあります。ただし順位への実質的な影響が出るには1〜3ヶ月かかることが多いです。Core Web Vitalsの改善はユーザー体験向上と合わせて、中長期的な順位改善に貢献します。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO全体の概要" },
  { href: "/seo/internal-seo", label: "内部SEO", desc: "タイトル・見出し・URL最適化" },
  { href: "/seo/page-speed", label: "ページ速度最適化", desc: "Core Web VitalsとLighthouseスコア改善" },
  { href: "/seo/mobile-seo", label: "モバイルSEO", desc: "モバイルファーストインデックス対応" },
  { href: "/seo/structured-data", label: "構造化データ実装", desc: "JSON-LD・Schema.org設定" },
  { href: "/seo/seo-audit", label: "SEO診断", desc: "テクニカルSEOの現状評価" },
  { href: "/seo/search-console", label: "サーチコンソール活用", desc: "クロール・インデックス管理" },
  { href: "/web-design/page-speed", label: "Web制作のパフォーマンス", desc: "表示速度を考慮したサイト設計" },
  { href: "/web-design/nextjs", label: "Next.jsでのサイト制作", desc: "SEOに強いSSR/SSGサイト" },
  { href: "/knowledge/technical-seo", label: "テクニカルSEO基礎", desc: "技術的SEOの入門ガイド" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援" },
  { href: "/checklist/technical-seo", label: "テクニカルSEOチェックリスト", desc: "技術的な確認項目一覧" },
];

export default function TechnicalSeoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/seo" style={{ color: "#6B7280" }} className="hover:underline">SEO対策</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>テクニカルSEO</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Technical SEO</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              テクニカルSEO
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              テクニカルSEOとは、Webサイトの技術的な側面を改善することで、検索エンジンがサイトを正しくクロール・インデックスできるようにする施策です。表示速度・クロール最適化・Core Web Vitals・モバイル対応・構造化データなどが主な対象です。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              どれだけ質の高いコンテンツを作っても、テクニカルSEOに問題があると検索エンジンにコンテンツが届きません。サイトの技術的な土台を整えることが、SEO全体の効率を最大化する前提条件です。
            </p>
          </div>
        </section>

        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image src="/4.png" alt="テクニカルSEO・ページ速度改善・Core Web Vitals" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.2)" }} />
        </section>

        {/* テクニカルSEOの主要領域 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Key Areas</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              テクニカルSEOの主要領域
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                {
                  title: "Core Web Vitals（コアウェブバイタル）",
                  body: "LCP（最大コンテンツの描画：2.5秒以内）・CLS（レイアウトシフト：0.1以下）・INP（インタラクティビティ：200ms以下）の3指標です。2021年以降Googleのランキング要因として正式採用されており、PageSpeed InsightsでField Dataを確認して改善を進めます。",
                },
                {
                  title: "ページ表示速度最適化",
                  body: "画像のWebP変換・サイズ最適化・遅延読み込み、JavaScriptとCSSの圧縮・コード分割、サーバー応答時間の短縮（CDN活用・キャッシュ設定）、フォント最適化（font-display: swap）などで改善します。",
                },
                {
                  title: "クロール最適化・インデックス管理",
                  body: "XMLサイトマップの整備・Search Consoleへの登録、robots.txtの適切な設定、クロールエラーの解消、URLの正規化（canonical設定）、重複ページのnoindex設定によって、重要なページへのクロールを集中させます。",
                },
                {
                  title: "モバイルファーストインデックス対応",
                  body: "Googleはモバイル版のページをベースにインデックスと評価を行います。モバイルでのコンテンツ完全性・表示速度・UI操作性の確認が必須です。レスポンシブデザインの採用と、モバイル固有のキャッシュ設定も重要です。",
                },
                {
                  title: "HTTPS・セキュリティ対応",
                  body: "全ページのHTTPS化（SSL証明書の適切な設定）、混在コンテンツ（HTTPとHTTPSの混在）の解消が必要です。HTTPのサイトはChromeで警告が表示され、ユーザーの信頼性に影響します。HTTPSへの移行時は301リダイレクトが必須です。",
                },
                {
                  title: "JavaScript SEO（SPA・React・Next.js）",
                  body: "JavaScriptでコンテンツを描画するSPAはクローラーが読み取れない場合があります。Next.jsのSSR/SSGを活用してHTMLとしてコンテンツを提供することが、JavaScriptサイトのSEO改善の基本です。",
                },
                {
                  title: "構造化データ（Schema.org）実装",
                  body: "JSON-LD形式でFAQPage・BreadcrumbList・Article・Organization・LocalBusinessなどを実装します。リッチリザルト（強調表示）の獲得可能性を高め、AI検索での引用にも貢献します。Google Rich Results Testで定期的に検証します。",
                },
                {
                  title: "国際化・ hreflang設定",
                  body: "複数言語・地域に対応するサイトでは、hreflang属性を正しく設定することで、各言語・地域の検索ユーザーに適切なページが表示されるようになります。設定ミスは重複コンテンツ問題を引き起こすこともあります。",
                },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスの支援 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Our Support</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのテクニカルSEO支援
            </h2>
            <div className="max-w-4xl">
              {[
                { title: "テクニカルSEO診断", body: "クロールツール・Search Console・PageSpeed Insightsを使い、現在の技術的な問題を網羅的に調査します。優先度付きの改善リストを作成し、影響の大きい課題から着手します。" },
                { title: "Core Web Vitals改善", body: "LCP・CLS・INPの現状スコアを確認し、画像最適化・JS遅延読み込み・レイアウト安定化などの具体的な改善を実施します。Lighthouse 90点以上を目標に改善します。" },
                { title: "構造化データ実装", body: "JSON-LD形式でFAQPage・BreadcrumbList・Article・Organization等の構造化データを実装します。Next.js・WordPress・その他CMSに対応。Google Rich Results Testで検証します。" },
                { title: "クロール・インデックス最適化", body: "XMLサイトマップ・robots.txt・noindex設定・canonical設定を見直し、重要なページへのクロールが確実に行われるよう最適化します。クロールエラーを解消します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="テクニカルSEOについてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="テクニカルSEOのご相談・無料診断"
          body="サイトの技術的なSEO課題を診断し、優先度の高い改善施策をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}

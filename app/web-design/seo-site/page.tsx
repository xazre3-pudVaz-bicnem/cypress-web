import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SEO特化サイト制作｜検索流入を最大化するWebサイト設計｜株式会社サイプレス",
  description:
    "SEO特化サイト制作の専門ガイド。キーワード設計・コンテンツ構造・Core Web Vitals・構造化データ・内部リンク設計まで、検索流入を最大化するサイト設計を解説。",
  keywords: ["SEO特化サイト", "SEOサイト制作", "SEOに強いホームページ", "検索上位サイト制作", "コンテンツSEOサイト"],
  openGraph: {
    title: "SEO特化サイト制作｜検索流入を最大化するWebサイト設計｜株式会社サイプレス",
    description: "SEO特化サイト制作のガイド。キーワード設計・コンテンツ構造・Core Web Vitals最適化まで解説。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/seo-site" },
};

const faqItems = [
  {
    q: "SEO特化サイトとは何ですか？通常のサイト制作と何が違いますか？",
    a: "SEO特化サイトとは、検索エンジンからの流入を主な集客チャネルとして設計されたWebサイトです。通常のサイト制作がデザイン・機能を中心とするのに対し、SEO特化サイトではキーワード設計・コンテンツ構造・内部リンク設計・Core Web Vitals・構造化データが最優先で設計されます。",
  },
  {
    q: "Next.jsとWordPressのどちらがSEOに有利ですか？",
    a: "両方ともSEOに対応できますが、特性が異なります。Next.jsはSSG/SSRにより超高速表示・Core Web Vitals最適化が得意です。WordPressはコンテンツの更新が容易でブログ運用に向いています。SEO特化サイトを自社で頻繁に更新したい場合はWordPress、エンジニアが対応できてパフォーマンスを最優先する場合はNext.jsをお勧めします。",
  },
  {
    q: "コンテンツはどのくらい必要ですか？",
    a: "対策キーワードの数とサイロ構造によりますが、SEO特化サイトとして機能するには最低でもトップページ・主要サービスページ5〜10ページ・コラム/ブログ記事10〜20本程度からスタートします。制作後も月次でコンテンツを追加する継続的な運用が成果を出すための前提です。",
  },
  {
    q: "リニューアルでSEO評価を引き継ぎながらSEO特化サイトに刷新できますか？",
    a: "はい可能です。既存サイトのURL設計・現在の順位・被リンクの状況を調査し、リニューアル設計に反映します。301リダイレクトの設定・URLマッピング・内部リンク更新によってSEO評価を新サイトに引き継ぎつつ、より強固なSEO設計を採用します。",
  },
  {
    q: "AIO（AI検索最適化）もSEO特化サイトに組み込めますか？",
    a: "はい。サイプレスではSEO・AIO・MEOを統合した設計をお勧めしています。SEO特化サイト制作にAIO対策（E-E-A-T強化・構造化データ・FAQ充実・llms.txt設置）を組み合わせることで、Google検索とAI検索の両方からの流入を獲得できます。",
  },
];

const relatedLinks = [
  { href: "/services/web-design", label: "Web制作サービス", desc: "サイプレスの制作サービス" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイト公開後のSEO支援" },
  { href: "/web-design", label: "Web制作とは", desc: "Webサイト制作の基礎" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "企業の顔となるWebサイト" },
  { href: "/cost/web-design", label: "Web制作の費用", desc: "SEO特化サイトの料金目安" },
  { href: "/contact", label: "無料相談", desc: "SEO特化サイトのご相談" },
];

export default function SeoSitePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pb-20" style={{ background: "#FFFFFF", paddingTop: "128px" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/web-design" style={{ color: "#6B7280" }} className="hover:underline">Web制作</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>SEO特化サイト制作</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>SEO-Focused Site</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SEO特化サイト制作
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              SEO特化サイトとは、検索エンジンからの流入を主な集客チャネルとして設計されたWebサイトです。キーワード設計・コンテンツ構造・Core Web Vitals・構造化データ・内部リンク設計が最優先で組み込まれたサイトを制作します。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              広告費をかけずに継続的な検索流入を獲得するWebサイトは、長期的な集客基盤として大きな資産となります。SEO・AIO・MEOを統合した設計で、Google検索とAI検索の両方からの認知・流入を最大化します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section className="relative flex items-center justify-center" style={{ height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_22_31.png" alt="SEO特化サイト制作・コンテンツSEO・検索上位表示のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.5)" }} />
          <div className="relative text-center px-6">
            <p className="font-black" style={{ fontSize: "clamp(20px,3vw,36px)", color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>検索流入を、長期的な資産へ</p>
          </div>
        </section>

        {/* SEO未対応サイトの課題 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>SEO Risks</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              SEO未対応サイトが失い続ける4つのビジネス機会
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "広告費に頼り続ける体質", b: "SEO対策のないサイトは広告を止めたとたん流入がゼロになります。SEOで自然検索から集客できる体制を作ることで、広告費に依存しない集客基盤を築けます。" },
                { t: "競合に検索流入を奪われ続ける", b: "ターゲットキーワードで競合が上位表示されている間、その検索需要は100%競合のものです。毎日の検索回数×365日×数年分の集客を失い続けています。" },
                { t: "内部SEOの欠如でインデックスされない", b: "title・description・canonical・構造化データが正しく設定されていないと、良いコンテンツを作っても検索エンジンに正しく評価されません。技術的SEOは集客の前提条件です。" },
                { t: "コンテンツがあっても流入ゼロ", b: "キーワード戦略なしに作られたコンテンツは誰も検索しないキーワードへの答えになっています。検索意図に沿ったコンテンツ設計なしには、記事を量産しても流入は増えません。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 設計戦略 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Design Strategy</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SEO特化サイトの設計戦略
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "キーワード設計・トピッククラスター", body: "ビジネス目標から逆算したキーワード調査・グループ化・ページ割り当てを行います。ピラーページとクラスターページで構成されるサイロ構造を設計し、サイト全体の専門性をGoogleに示します。" },
                { title: "URL・サイト構造の設計", body: "SEOに強いURL設計（シンプル・キーワード含む・階層明確）とサイト構造（3階層以内・関連ページの内部リンク充実）を最初から設計します。後から変えにくいため制作前の設計が最重要です。" },
                { title: "Core Web Vitals・パフォーマンス最適化", body: "LCP・CLS・INP改善とLighthouse高スコアを目標にします。next/image・next/font・コード分割・CDNを活用して最速の表示を実現します。" },
                { title: "構造化データの網羅的実装", body: "BreadcrumbList・FAQPage・Organization・LocalBusiness・Article・WebSiteをページタイプに応じて実装します。リッチリザルト獲得とAIO対策に同時に貢献します。" },
                { title: "コンテンツ設計・内部リンク設計", body: "キーワードグループごとのコンテンツカレンダーと、ページ間の内部リンクマップを設計します。新規ページを追加するたびに既存ページとの相互リンクを設定する運用プロセスも設計します。" },
                { title: "E-E-A-T・AIO対策の組み込み", body: "著者情報・会社情報の明示、llms.txt設置、FAQの充実、一次情報の掲載など、Google評価とAI引用の両方に貢献するE-E-A-T設計をサイト全体に組み込みます。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* なぜ重要か */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Why It Matters</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SEO特化サイト制作がなぜ重要か
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "広告費に依存しない集客基盤を作れる", body: "リスティング広告は予算が続く限りしか集客できません。SEO特化サイトは一度上位表示されれば、継続的に無料で集客し続ける資産となります。" },
                { title: "競合との差別化が可視化できる", body: "専門性の高いコンテンツをサイトに積み上げることで、業界内での権威性が確立されます。AI検索においても専門家として引用される機会が増えます。" },
                { title: "SEO・AIO・CVの三位一体設計が可能", body: "検索流入を獲得しながら、ページ内でコンバージョンも最大化する設計を同時に行います。集客と成約の両輪を1つのサイトで実現できます。" },
                { title: "制作コストがそのまま長期資産になる", body: "制作に投じたコストはサイトとして資産化されます。運用を継続するほどSEO評価が蓄積し、費用対効果は時間とともに高まります。" },
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

        <FaqSection items={faqItems} heading="SEO特化サイト制作についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="SEO特化サイト制作のご相談"
          body="検索流入を最大化するWebサイトの設計・制作をトータルでご支援します。"
        />
      </main>
      <Footer />
    </>
  );
}

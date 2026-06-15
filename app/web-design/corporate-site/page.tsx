import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "コーポレートサイト制作｜企業ブランドと信頼を伝えるWebサイト設計｜株式会社サイプレス",
  description:
    "コーポレートサイト（会社サイト）制作の専門ガイド。企業ブランドと信頼を伝えるデザイン設計・SEO・CV改善まで解説。Next.js・WordPress対応。東京都葛飾区を拠点に全国対応。",
  keywords: ["コーポレートサイト制作", "会社サイト制作", "企業サイト", "Webサイト制作", "Next.js制作", "WordPress制作"],
  openGraph: {
    title: "コーポレートサイト制作｜企業ブランドと信頼を伝えるWebサイト設計｜株式会社サイプレス",
    description: "コーポレートサイト制作のガイド。企業ブランドと信頼を伝えるデザイン設計・SEO・CV改善まで解説。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/corporate-site" },
};

const faqItems = [
  {
    q: "コーポレートサイトとは何ですか？必ずSSLは必要ですか？",
    a: "コーポレートサイトとは、企業の顔となる公式Webサイトです。会社概要・サービス・事業内容・採用情報・ニュースなどを掲載し、取引先・求職者・メディアなど様々なステークホルダーに企業情報を提供します。SSLは現在必須です。HTTPのサイトはChromeで警告が表示され、信頼性に影響します。",
  },
  {
    q: "コーポレートサイトに掲載すべきコンテンツは？",
    a: "最低限必要なのは、①会社概要（社名・代表者名・設立年月・所在地・事業内容）、②サービス・事業内容、③お問い合わせフォーム・連絡先、④プライバシーポリシーです。これに加えて採用情報・ニュース・実績・コラムを追加することで、SEO・採用・ブランディングに貢献します。",
  },
  {
    q: "コーポレートサイトのSEO対策はどうすればいいですか？",
    a: "まず全ページの内部SEO（タイトル・メタディスクリプション・見出し・canonical・構造化データ）を整備します。次に、ターゲットとするキーワードに対応したコンテンツページ（サービスページ・コラム・事例）を充実させます。コーポレートサイトは企業の信頼性を伝えるページとしてE-E-A-T向上にも貢献します。",
  },
  {
    q: "制作費用の目安は？",
    a: "コーポレートサイト（5〜15ページ）の制作費用は、デザインの複雑さ・機能・ページ数によって変わります。シンプルな構成から複雑なカスタム設計まで幅広く対応しています。まずは無料相談でご要件をお聞かせいただき、お見積もりをご提示します。",
  },
  {
    q: "既存サイトのリニューアルも依頼できますか？",
    a: "はい、既存サイトのリニューアルに多数対応しています。現在のサイトのSEO評価を引き継ぐためのURL設計・301リダイレクト・内部リンク更新まで一貫して対応します。デザインだけでなくSEO・パフォーマンス・CV改善も含めたリニューアルが得意です。",
  },
];

const relatedLinks = [
  { href: "/services/web-design", label: "Web制作サービス", desc: "サイプレスの制作サービス" },
  { href: "/web-design", label: "Web制作とは", desc: "Webサイト制作の基礎" },
  { href: "/web-design/seo-site", label: "SEO特化サイト制作", desc: "検索流入を最大化するサイト" },
  { href: "/web-design/recruit-site", label: "採用サイト制作", desc: "採用強化のためのサイト" },
  { href: "/cost/web-design", label: "Web制作の費用", desc: "料金プランと相場" },
  { href: "/contact", label: "無料相談", desc: "コーポレートサイトのご相談" },
];

export default function CorporateSitePage() {
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
              <span style={{ color: "#0F172A" }}>コーポレートサイト制作</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Corporate Site</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              コーポレートサイト制作
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              コーポレートサイトは企業の顔となる最重要のWebサイトです。取引先・求職者・メディア・一般ユーザーなど、多様なステークホルダーに企業の信頼性・ブランド・実力を伝えるサイト設計が重要です。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              単なるデザインの美しさではなく、SEO・CV改善・E-E-A-T強化・パフォーマンス最適化まで含めた「ビジネスに貢献するコーポレートサイト」を設計・制作します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section className="relative flex items-center justify-center" style={{ height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_08_58 (6).png" alt="コーポレートサイト制作・企業サイト設計のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.5)" }} />
          <div className="relative text-center px-6">
            <p className="font-black" style={{ fontSize: "clamp(20px,3vw,36px)", color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>企業ブランドと信頼を、Webで伝える</p>
          </div>
        </section>

        {/* コーポレートサイト課題 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Common Problems</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              コーポレートサイトがない・古い企業が失っている4つの機会
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "取引・入札機会の喪失", b: "企業間取引では担当者が必ずWebサイトを確認します。情報が古いサイト・存在しないサイトは「信頼できない会社」と判断され、商談に進む前に失注しています。" },
                { t: "採用応募者数の減少", b: "求職者の約90%が応募前にWebサイトを確認します。会社の文化・事業内容・働き方が伝わらないサイトは、優秀な候補者が応募をやめる要因となります。" },
                { t: "SEO流入機会のゼロ", b: "会社名・サービス名・業種+地域など、潜在顧客が検索するキーワードに対してWebサイトが答えていないと、検索からの問い合わせがゼロのままです。" },
                { t: "競合比較で選ばれない", b: "複数社を比較検討する顧客は必ずWebサイトの質で判断します。競合がわかりやすく充実したサイトを持っていれば、サイトの質だけで敗北します。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 設計要素 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Design Elements</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              コーポレートサイト制作の重要要素
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "ブランドアイデンティティの表現", body: "企業の理念・ビジョン・世界観をビジュアルで伝えるデザインを設計します。カラー・フォント・トーン＆マナーを統一し、ブランドとして記憶に残るサイトを目指します。" },
                { title: "信頼性・権威性の可視化", body: "代表者プロフィール・会社概要・設立年月・資格・受賞歴・取引先紹介・メディア掲載などの信頼要素を適切に配置します。E-E-A-TとAIO対策にも直結します。" },
                { title: "SEOに強いページ構成", body: "全ページのメタデータ・見出し・URL・構造化データを最適化します。サービスページ・コラム・事例ページがSEOでの集客基盤となる設計を行います。" },
                { title: "問い合わせ導線の設計（CV改善）", body: "電話・メール・フォーム・LINEへの自然な誘導動線を設計します。ファーストビュー・各セクション・フッターでのCTA配置でコンバージョン率を高めます。" },
                { title: "Core Web Vitals・パフォーマンス最適化", body: "画像最適化・コード分割・フォント最適化・CDN活用でLighthouseスコア向上を目標とします。表示速度の改善はSEOとユーザー体験に直結します。" },
                { title: "採用・IR情報との統合", body: "採用情報ページの設計・IR情報の掲載・ニュース・プレスリリースのCMS化まで一貫して設計します。企業の成長に合わせて拡張できるスケーラブルな設計を心がけます。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 選ぶポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>How to Choose</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              コーポレートサイト制作会社の選ぶポイント
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "SEO・パフォーマンス対応力", body: "デザインだけでなく内部SEO・Core Web Vitals・構造化データ実装まで対応できる会社を選びましょう。制作後の集客がビジネス成果に直結します。" },
                { title: "CMS選定の提案力", body: "Next.js・WordPress・Headless CMSなど、運用体制・更新頻度・予算に合った最適なCMSを提案できる会社が理想です。一社一提案が重要です。" },
                { title: "リニューアル実績と301対応", body: "既存サイトのSEO評価を引き継いだリニューアル実績があるか確認しましょう。URLマッピング・301リダイレクト設計を正確にできる会社を選んでください。" },
                { title: "制作後の保守・運用サポート", body: "Webサイトは公開後の運用が重要です。月次保守・コンテンツ追加・SEO改善を継続的に依頼できる体制があるか確認しましょう。" },
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

        <FaqSection items={faqItems} heading="コーポレートサイト制作についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="コーポレートサイト制作のご相談"
          body="企業ブランドと信頼を伝えるコーポレートサイトの設計・制作をご支援します。まずはお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}

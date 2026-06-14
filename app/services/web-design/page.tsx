import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Web制作サービス｜SEOに強い高品質なWebサイト制作｜株式会社サイプレス",
  description:
    "株式会社サイプレスのWeb制作サービス。Next.js・WordPress対応。コーポレートサイト・採用サイト・サービスサイト・SEO特化サイトまで幅広く対応。東京都葛飾区を拠点に全国対応。",
  keywords: ["Web制作", "ホームページ制作", "Next.js制作", "WordPress制作", "コーポレートサイト", "SEOサイト"],
  openGraph: {
    title: "Web制作サービス｜SEOに強い高品質なWebサイト制作｜株式会社サイプレス",
    description: "サイプレスのWeb制作サービス。Next.js・WordPress対応のSEOに強いサイト制作。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services/web-design" },
};

const faqItems = [
  {
    q: "Web制作の費用はどのくらいかかりますか？",
    a: "サイトの規模・ページ数・機能・デザインの複雑さによって異なります。シンプルなコーポレートサイト（5〜10ページ）から複雑なサービスサイト・採用サイトまで幅広く対応しています。まずは無料相談でご要件をお聞かせいただき、お見積もりをご提示します。詳細は料金ページをご覧ください。",
  },
  {
    q: "Next.jsとWordPressのどちらで作るのがいいですか？",
    a: "更新頻度が高い・ブログが必要・担当者がCMSで更新したいという場合はWordPressが適しています。表示速度・セキュリティ・SEO性能を重視する・更新頻度が低い・フリーランスエンジニアが社内にいるという場合はNext.jsが適しています。ご要件に合わせて最適な技術を選定します。",
  },
  {
    q: "制作後の保守・更新対応はありますか？",
    a: "はい、月次保守プラン（セキュリティ更新・バックアップ・軽微なテキスト修正）をご用意しています。また、コンテンツ更新代行・追加ページ制作も別途ご対応します。",
  },
  {
    q: "SEOを意識したサイト制作をお願いできますか？",
    a: "はい、全ての制作物にSEO基礎実装（メタデータ・構造化データ・サイトマップ・canonical・内部リンク設計）を含めています。さらにSEO特化サイト制作プランでは、キーワード設計・コンテンツ設計・Core Web Vitals最適化まで一貫してご対応します。",
  },
  {
    q: "スマートフォン対応（レスポンシブ）は標準対応ですか？",
    a: "はい、全ての制作物でモバイルファーストのレスポンシブデザインを標準実装しています。GoogleのモバイルファーストインデックスへのSEO対応・Core Web VitalsのモバイルスコアもすべてのプロジェクトでKPIとして設定します。",
  },
  {
    q: "デザインのイメージが決まっていない場合でも依頼できますか？",
    a: "はい、ブランドコンセプトの整理・参考サイトの収集・デザイン方向性のヒアリングから始めます。競合調査・ターゲットペルソナの設定・ブランドカラー選定まで一緒に進めることも可能です。",
  },
  {
    q: "制作期間はどのくらいかかりますか？",
    a: "シンプルなコーポレートサイト（5〜10ページ）で2〜3ヶ月程度が目安です。規模・機能・デザインの複雑さ・お客様のレスポンス速度によって前後します。タイトなスケジュールの場合は事前にご相談ください。",
  },
  {
    q: "リニューアルでSEO評価を引き継ぐことはできますか？",
    a: "はい、リニューアル時のSEO評価引き継ぎ（301リダイレクト設定・URLマッピング・内部リンク更新・新旧URLのインデックス移行）を確実に対応します。SEOを考慮したリニューアル設計が得意です。",
  },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Webサイト制作の基礎" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "企業サイトの設計・制作" },
  { href: "/web-design/recruit-site", label: "採用サイト制作", desc: "採用強化のためのサイト" },
  { href: "/web-design/seo-site", label: "SEO特化サイト制作", desc: "検索流入を最大化するサイト" },
  { href: "/web-design/service-site", label: "サービスサイト制作", desc: "CV重視のサービスLP" },
  { href: "/web-design/wordpress", label: "WordPress制作", desc: "CMS型サイトの制作" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "制作後のSEO対策" },
  { href: "/cost/web-design", label: "Web制作の費用", desc: "料金プランと相場" },
  { href: "/area/tokyo", label: "東京のWeb制作", desc: "東京エリアの制作実績" },
  { href: "/guide/how-to-choose-web-design-company", label: "Web制作会社の選び方", desc: "失敗しない選定ガイド" },
  { href: "/checklist/web-design", label: "Web制作チェックリスト", desc: "制作前の確認項目" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
];

const siteTypes = [
  { type: "コーポレートサイト", desc: "ブランドと信頼を伝える企業サイト。会社概要・サービス・採用情報・ニュースを統合した企業の顔となるWebサイトを設計します。", link: "/web-design/corporate-site" },
  { type: "採用サイト", desc: "求職者の共感と応募意欲を高める採用特化サイト。企業文化・チーム・働く環境をビジュアルで伝え、応募率向上を目指します。", link: "/web-design/recruit-site" },
  { type: "SEO特化サイト", desc: "検索エンジンからの流入を最大化するSEO設計のサイト。キーワード設計・コンテンツ構造・Core Web Vitalsを優先した設計です。", link: "/web-design/seo-site" },
  { type: "サービスサイト・LP", desc: "サービスの価値を伝えてコンバージョン（問い合わせ・申し込み）につなげるサービスサイトまたはランディングページです。", link: "/web-design/service-site" },
  { type: "WordPress制作", desc: "担当者がCMSで更新できるWordPressサイト。ブログ・ニュース・実績ページの更新を内製化したい企業に適したプランです。", link: "/web-design/wordpress" },
];

export default function ServicesWebDesignPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/services" style={{ color: "#6B7280" }} className="hover:underline">サービス</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>Web制作</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Web Design Service</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              Web制作サービス
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              株式会社サイプレスのWeb制作サービスは、デザインの美しさだけでなく、SEO・パフォーマンス・コンバージョン設計を同時に満たす本番品質のWebサイトを制作します。Next.js・WordPressに対応しています。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-8" style={{ color: "#374151" }}>
              単なるデザイン制作ではなく、ビジネス目標から逆算したコンテンツ設計・集客設計・SEO設計を含む「成果を出すWebサイト」を制作します。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ border: "1.5px solid #0F172A", color: "#0F172A" }}>
                無料相談・お問い合わせ
              </Link>
              <Link href="/cost/web-design" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ border: "1.5px solid #D1D5DB", color: "#374151" }}>
                料金・プランを見る
              </Link>
            </div>
          </div>
        </section>

        <section className="relative" style={{ height: "320px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_13_52.png" alt="Web制作サービス・コーポレートサイト・SEOサイト設計のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.2)" }} />
        </section>

        {/* サイトタイプ */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Site Types</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              対応サイトタイプ
            </h2>
            <div className="max-w-4xl space-y-0">
              {siteTypes.map((item, i) => (
                <div key={i} className="flex gap-6 py-6 group" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.type}</p>
                    <p className="text-[14px] leading-[1.9] mb-3" style={{ color: "#374151" }}>{item.desc}</p>
                    <Link href={item.link} className="text-[12px] font-medium" style={{ color: "#6B7280" }}>
                      詳細を見る →
                    </Link>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* こだわり */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Our Approach</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのWeb制作の特徴
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "SEO設計を制作段階から組み込む", body: "ページ設計段階でキーワード設計・URL設計・内部リンク設計・コンテンツ構成を決め、制作とSEOを一体として進めます。後からSEO対策を追加するより、はるかに高い費用対効果を実現します。" },
                { title: "Core Web Vitals・パフォーマンス重視", body: "Lighthouse 90点以上・LCP 2.5秒以内・CLS 0.1以下を全案件の標準目標とします。next/image・next/font・コード分割・CDNなどの最適化を標準実装します。" },
                { title: "コンバージョン設計（CV改善）", body: "美しいだけのサイトは作りません。問い合わせ・電話・LINE・申し込みへの導線設計・CTAの配置・フォーム最適化・FAQ（不安解消）を含むCV設計を標準で行います。" },
                { title: "構造化データの標準実装", body: "BreadcrumbList・FAQPage・Organization・LocalBusinessなどのJSON-LD構造化データを全案件で実装します。リッチリザルト獲得・AI検索（AIO）対策にも貢献します。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="Web制作サービスについてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="Web制作サービスの無料相談"
          body="ご要件・目的をお聞かせいただき、最適な制作プランとお見積もりをご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}

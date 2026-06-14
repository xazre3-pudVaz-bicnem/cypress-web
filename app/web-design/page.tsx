import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Webサイト制作とは｜SEO・CV・パフォーマンスを兼ね備えたサイト設計｜株式会社サイプレス",
  description:
    "Webサイト制作の基礎から実践まで解説。コーポレートサイト・採用サイト・SEO特化サイト・サービスサイト・WordPressの種類と選び方、制作費用の目安、制作会社の選び方まで網羅。",
  keywords: ["Webサイト制作", "ホームページ制作", "Web制作会社", "サイト制作費用", "Next.js制作", "WordPress制作"],
  openGraph: {
    title: "Webサイト制作とは｜SEO・CV・パフォーマンスを兼ね備えたサイト設計｜株式会社サイプレス",
    description: "Webサイト制作の総合ガイド。種類・費用・選び方・SEO・CV改善まで解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design" },
};

const faqItems = [
  {
    q: "Webサイト制作の費用相場はどのくらいですか？",
    a: "シンプルなコーポレートサイト（5〜10ページ）で50〜150万円、SEO特化サイト・採用サイトで100〜300万円、EC機能付きサイトで200万円〜が一般的な相場です。フリーランスへの依頼は30〜80万円と安価ですが、品質・保守体制に差があります。まずは要件を整理した上でお見積もりを取ることをお勧めします。",
  },
  {
    q: "Next.jsとWordPressのどちらがいいですか？",
    a: "Next.jsは表示速度・セキュリティ・SEOパフォーマンスに優れますが、更新にエンジニアが必要です。WordPressは管理画面から誰でも更新できますが、プラグインの脆弱性リスクがあります。更新頻度・社内体制・予算によって最適な選択が異なります。ご要件をお聞かせいただければ最適な技術をご提案します。",
  },
  {
    q: "Webサイト制作でよくある失敗は？",
    a: "①デザインにこだわりすぎてSEO・CV設計が抜け落ちる、②制作後に更新・保守体制を考えていない、③モバイルでの表示速度が遅い、④問い合わせ導線（CTA・フォーム）が不明確、⑤SEOを後付けで考える（URL・コンテンツ設計は最初から重要）、などが多いです。",
  },
  {
    q: "SEOを意識したサイト制作はどこに依頼すればいいですか？",
    a: "SEOとWeb制作を一体で対応できる会社・フリーランスへの依頼が最も効果的です。デザインのみ得意な会社にSEOを後から依頼すると、URL設計・コンテンツ構造・技術設計が最初からSEOを考慮していないため効果が出にくいことがあります。制作前の提案段階でSEO設計が含まれているかを確認することが重要です。",
  },
  {
    q: "制作会社に依頼するかフリーランスに依頼するか迷っています。",
    a: "フリーランスはコストが安く対応が柔軟な反面、保守・長期サポート・複数専門領域（デザイン・開発・SEO）の対応力に限界があることがあります。制作会社は費用が高めですが、複数の専門家が関わり長期的なサポートが期待できます。規模・予算・継続的なサポートの必要性で判断してください。",
  },
  {
    q: "制作後の集客はどうすればいいですか？",
    a: "主な集客方法は、①SEO対策（コンテンツ追加・内部SEO・被リンク獲得）、②MEO対策（地域ビジネスの場合）、③SNS運用（Instagram・X・LINE）、④リスティング広告・Meta広告、⑤メルマガ・LINEマーケティングです。制作後すぐに集客するには広告が有効で、中長期的にはSEOが最もROIが高い傾向があります。",
  },
  {
    q: "スマートフォン対応は必須ですか？",
    a: "はい、必須です。現在のWebサイトへのアクセスは60〜70%以上がスマートフォンからです。また、GoogleのモバイルファーストインデックスによりモバイルでのSEO評価がPCより重視されます。モバイルファーストのレスポンシブデザインは現代のWeb制作の大前提です。",
  },
  {
    q: "Webサイト制作にどのくらいの時間がかかりますか？",
    a: "シンプルなコーポレートサイト（5〜10ページ）で2〜3ヶ月、SEO特化サイトや採用サイトで3〜4ヶ月、EC・会員サイトなど機能が多いものは4〜6ヶ月以上かかることもあります。制作期間はヒアリング・設計・デザイン・コーディング・テスト・公開という工程によって構成されます。",
  },
];

const subPages = [
  { href: "/web-design/corporate-site", title: "コーポレートサイト制作", desc: "企業の信頼とブランドを伝えるWebサイト" },
  { href: "/web-design/recruit-site", title: "採用サイト制作", desc: "求職者の応募意欲を高める採用特化サイト" },
  { href: "/web-design/seo-site", title: "SEO特化サイト制作", desc: "検索流入を最大化するコンテンツ設計" },
  { href: "/web-design/service-site", title: "サービスサイト・LP制作", desc: "問い合わせ・申し込みを増やすCV設計" },
  { href: "/web-design/wordpress", title: "WordPress制作", desc: "CMS対応・担当者が更新できるサイト" },
];

const relatedLinks = [
  { href: "/services/web-design", label: "Web制作サービス", desc: "サイプレスの制作実績・プラン" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "制作後の検索集客強化" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ集客" },
  { href: "/cost/web-design", label: "Web制作の費用", desc: "料金プランと相場" },
  { href: "/guide/how-to-choose-web-design-company", label: "Web制作会社の選び方", desc: "失敗しない選定ガイド" },
  { href: "/checklist/web-design", label: "Web制作チェックリスト", desc: "制作前の確認項目一覧" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "制作段階のSEO設計" },
  { href: "/seo/structured-data", label: "構造化データ実装", desc: "JSON-LD・Schema.org設定" },
  { href: "/area/tokyo", label: "東京のWeb制作", desc: "東京エリアの制作対応" },
  { href: "/area/katsushika", label: "葛飾区のWeb制作", desc: "葛飾区エリアの制作対応" },
  { href: "/column/web-design", label: "Web制作コラム", desc: "Webサイト制作の基礎知識" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
];

export default function WebDesignPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>Web制作</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Web Design</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              Webサイト制作
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              Webサイト制作は「デザインを作ること」ではなく「ビジネス目標を達成するための手段を設計すること」です。美しいデザイン・検索でのトップ表示・問い合わせへのコンバージョン・保守のしやすさ・高速表示を同時に満たすサイト制作を行います。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              コーポレートサイト・採用サイト・SEO特化サイト・サービスサイト・WordPressまで、目的に合ったサイト設計と制作をご提供します。
            </p>
          </div>
        </section>

        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image src="/1.png" alt="Webサイト制作・コーポレートサイト・SEOサイト設計のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.15)" }} />
        </section>

        {/* サイト種類 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Site Types</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              目的に合わせたWebサイト制作
            </h2>
            <div className="max-w-4xl space-y-0">
              {subPages.map((page, i) => (
                <Link key={i} href={page.href} className="block group py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-[15px] mb-2 group-hover:underline" style={{ color: "#0d1b2a" }}>{page.title}</p>
                      <p className="text-[14px] leading-[1.8]" style={{ color: "#374151" }}>{page.desc}</p>
                    </div>
                    <span className="shrink-0 ml-6 text-[13px] mt-1" style={{ color: "#9CA3AF" }}>→</span>
                  </div>
                </Link>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 制作のこだわり */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Our Approach</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのWeb制作の5つのこだわり
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "美しいデザイン × 成果の両立", body: "デザインの洗練さと、SEO・CV・パフォーマンスを同時に実現します。単なる美しいデザインでは集客・問い合わせにつながりません。ビジネス目標を中心に設計します。" },
                { title: "SEO設計を制作段階から組み込む", body: "キーワード設計・URL設計・内部リンク設計・コンテンツ構造を最初から考慮します。後からSEOを追加する場合よりはるかに高い費用対効果を実現できます。" },
                { title: "Core Web Vitals・表示速度の最優先", body: "Lighthouse 90点以上・LCP 2.5秒以内を標準目標とします。next/imageやnext/fontを活用し、ユーザー体験とSEO評価を同時に高めます。" },
                { title: "構造化データ・AIO対策の標準実装", body: "BreadcrumbList・FAQPage・Organizationなどの構造化データを全案件で実装。リッチリザルトとAI検索（AIO）からの認知・引用に同時対応します。" },
                { title: "公開後の集客・改善まで一貫サポート", body: "制作で終わりではなく、公開後のSEO対策・MEO対策・コンテンツ追加・リライト・CV改善まで継続的にサポートします。長期的なWebマーケティングのパートナーとして伴走します。" },
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

        <FaqSection items={faqItems} heading="Webサイト制作についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="Webサイト制作のご相談・無料見積もり"
          body="ご要件・目的をお聞かせいただき、最適なサイト設計と費用のご提案をします。"
        />
      </main>
      <Footer />
    </>
  );
}

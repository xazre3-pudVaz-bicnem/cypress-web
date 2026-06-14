import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Organization構造化データ｜AIO・SEO対策｜株式会社サイプレス",
  description:
    "Organization SchemaのJSON-LD実装でGoogleとAIに企業情報を正確に伝える。会社名・住所・代表者・SNSリンクの構造化からナレッジグラフ登録まで徹底解説。",
  keywords: ["Organization Schema", "構造化データ", "AIO対策", "SEO", "JSON-LD", "ナレッジグラフ"],
  openGraph: {
    title: "Organization構造化データ｜AIO・SEO対策｜株式会社サイプレス",
    description: "Organization Schemaの実装でGoogleとAIへの企業認識を最大化する方法を解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/aio/organization-data" },
};

const ITEMS = [
  {
    num: "01",
    title: "会社名（name）",
    body: "正式な法人名を記述します。「株式会社」の位置を統一し、略称や通称と使い分けを明確にします。name フィールドはナレッジグラフのエンティティ識別に最も重要な情報です。",
  },
  {
    num: "02",
    title: "URL・ロゴ・説明文",
    body: "公式Webサイトのurl・高解像度のロゴ画像（logo）・企業概要の説明文（description）を記述します。ロゴはGoogleのナレッジパネルに表示されるため、正方形または横長の鮮明な画像を用意します。",
  },
  {
    num: "03",
    title: "住所（PostalAddress）",
    body: "PostalAddress SchemaでstreetAddress・addressLocality・addressRegion・postalCode・addressCountryを記述します。Google マップ・ナレッジグラフ・Googleビジネスプロフィールとの整合性を確保することが重要です。",
  },
  {
    num: "04",
    title: "電話番号・メールアドレス",
    body: "telephone・emailフィールドに代表連絡先を記述します。NAPサイテーション（Name, Address, Phone）の一貫性はローカルSEOにも直結するため、すべてのオンライン媒体で統一した表記にします。",
  },
  {
    num: "05",
    title: "事業内容・専門分野（knowsAbout）",
    body: "knowsAboutフィールドで企業の専門分野・事業内容を記述します。これによりGoogleとAIが「この会社が何の専門家か」を理解し、業界関連クエリでの言及頻度が高まります。",
  },
  {
    num: "06",
    title: "代表者情報（founder/employee）",
    body: "founderまたはemployeeフィールドにPerson Schemaを入れ子にして代表者名・役職・プロフィールURLを記述します。著者情報の構造化はE-E-A-Tシグナルの強化に最も効果的な施策のひとつです。",
  },
  {
    num: "07",
    title: "SNSリンク（sameAs）",
    body: "sameAsフィールドにX（旧Twitter）・Instagram・LinkedIn・Facebookなどの公式SNSアカウントURLを配列で記述します。sameAsリンクはエンティティの同一性を確認するシグナルとしてナレッジグラフ登録に貢献します。",
  },
  {
    num: "08",
    title: "設立年・従業員数",
    body: "foundingDateとnumberOfEmployeesフィールドで企業規模・歴史を伝えます。設立年の記述は信頼性・権威性シグナルとなり、AI検索での引用判断に影響します。",
  },
];

const FAQ_ITEMS = [
  {
    q: "Organization SchemaはどこにJSON-LDで実装しますか？",
    a: "通常はサイト全ページに共通で読み込まれるlayoutファイルのheadセクション、またはトップページのheadに実装します。Next.jsでは<Script type='application/ld+json'>コンポーネントを使って実装するのが一般的です。",
  },
  {
    q: "Organization SchemaとLocalBusiness Schemaの違いは何ですか？",
    a: "LocalBusiness Schemaは地域ビジネス（店舗・事務所を持つ企業）向けで、Organization Schemaのサブタイプです。地域ビジネスの場合はLocalBusinessを使い、openingHours（営業時間）・hasMap（地図）なども記述することでローカルSEOに効果的です。",
  },
  {
    q: "実装後すぐに効果が出ますか？",
    a: "Googleのクロール・インデックスにより、実装後数週間〜数ヶ月でナレッジパネルの表示や検索結果の改善が見られることが多いです。Google Search ConsoleのリッチリザルトテストでSchemaが正しく認識されているか確認できます。",
  },
  {
    q: "WordPress・Next.js以外のCMSでも実装できますか？",
    a: "はい。JSON-LDはHTMLのheadタグ内に記述するだけのため、どのCMSやフレームワークでも実装可能です。WordPressならプラグイン（Yoast SEO・Schema & Structured Data for WP）を使う方法もあります。",
  },
  {
    q: "Schemaの記述内容を変更した場合はどうなりますか？",
    a: "変更後Googleがクロールした段階で更新されます。情報変更（住所移転・代表者交代等）の際は速やかにSchemaも更新し、全媒体の情報と整合させることが重要です。",
  },
];

export default function OrganizationDataPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/aio" className="hover:underline" style={{ color: "#6B7280" }}>AIO対策</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>Organization構造化データ</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "#6B7280" }}>
              Organization Schema
            </p>
            <h1 className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              Organization構造化データ<br />AIO・SEO対策の基盤
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              Organization Schemaは会社情報をGoogleとAIが機械的に理解できるJSON-LD形式で記述する構造化データです。
              ナレッジグラフ登録・ナレッジパネル表示・AI引用率向上のすべてに関わる、AIO対策の基礎的な実装です。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_19_44.png"
            alt="Organization構造化データ・JSON-LD実装のデジタルイメージ"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.18)" }} />
        </section>

        {/* Organizationスキーマとは */}
        <section className="py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "#6B7280" }}>
                Overview
              </p>
              <h2 className="font-black text-[28px] leading-tight mb-8" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
                Organizationスキーマとは
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                Organization SchemaはSchema.orgで定義された構造化データの一種で、企業・団体に関する情報を
                機械可読な形式で記述します。JSON-LDとしてHTMLのheadタグ内に実装することで、
                GoogleのクローラーとAIが会社情報を正確に解析・記録できるようになります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                これはGoogleのナレッジグラフへの情報浸透に直接貢献し、ブランド名検索時のナレッジパネル表示、
                AI検索での企業引用精度の向上、そしてLocalBusiness Schemaとの組み合わせによる
                ローカルSEO強化にも繋がります。AIO対策の最初の一歩として最優先で実装すべき施策です。
              </p>
            </div>
          </div>
        </section>

        {/* 主要情報 */}
        <section className="py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "#6B7280" }}>
              Required Fields
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              Organizationスキーマに含める主要情報
            </h2>
            <div className="max-w-3xl">
              {ITEMS.map((item) => (
                <div key={item.num} className="flex gap-6 py-6" style={{ borderTop: "1px solid #ece8e0" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #ece8e0" }} />
            </div>
          </div>
        </section>

        {/* 実装方法 */}
        <section className="py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "#6B7280" }}>
                Implementation
              </p>
              <h2 className="font-black text-[28px] mb-8" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
                実装方法
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                Organization SchemaはJSON-LDとして実装するのが推奨形式です。HTMLのheadタグ内に
                {"<script type=\"application/ld+json\">"}タグで囲み、スキーマオブジェクトを記述します。
                Next.jsではlayout.tsxのheadセクション、WordPressではfunctions.phpへの追記か専用プラグインで実装します。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                実装後はGoogleの「リッチリザルトテスト」または「スキーママークアップバリデーター」で
                エラーなく認識されているか確認します。Google Search ConsoleのEnhancementsタブでも
                構造化データの状態を確認できます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                サイプレスではOrganization Schema・LocalBusiness Schema・Person Schemaの
                実装から検証・継続的な情報更新まで、構造化データ対応をワンストップで支援します。
              </p>
            </div>
          </div>
        </section>

        <FaqSection items={FAQ_ITEMS} heading="Organization構造化データに関するよくある質問" bgColor="#FFFFFF" />

        <RelatedPages
          links={[
            { href: "/aio", label: "AIO対策", desc: "AI検索最適化の全体戦略" },
            { href: "/aio/structured-data", label: "構造化データ全般", desc: "Schema.org実装ガイド" },
            { href: "/aio/entity-optimization", label: "エンティティ最適化", desc: "Googleへのエンティティ認識" },
            { href: "/seo/structured-data", label: "SEO構造化データ", desc: "SEO観点のSchema活用" },
            { href: "/services/aio", label: "AIO対策サービス", desc: "サービス内容と料金" },
          ]}
        />

        <PageContactCTA
          heading="Organization構造化データの実装はサイプレスへ"
          body="JSON-LDによるOrganization Schema実装・ナレッジグラフ登録支援・構造化データの継続管理をご提案します。現状のSchema実装状況を無料で診断します。"
        />
      </main>
      <Footer />
    </>
  );
}

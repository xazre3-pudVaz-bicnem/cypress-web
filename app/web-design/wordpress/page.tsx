import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "WordPress制作・連携 | カスタムテーマとヘッドレスCMS対応",
  description: "株式会社サイプレスのWordPress制作・連携サービス。ブログ・記事の継続更新に最適なCMS構成、カスタムテーマによる高品質デザイン、Next.js+WordPress（ヘッドレスCMS）構成まで対応します。",
  keywords: ["WordPress制作", "WordPressカスタマイズ", "ヘッドレスCMS", "Next.js WordPress", "CMS導入"],
  openGraph: {
    title: "WordPress制作・連携 | 株式会社サイプレス",
    description: "コンテンツを継続更新できるWordPress構成。カスタムテーマからヘッドレスCMSまで対応。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/web-design/wordpress" },
};

const APPROACHES = [
  {
    num: "01",
    title: "ブログ・記事の継続更新に最適",
    body: "WordPressは世界で最も広く使われているCMSです。専門知識なしにブログ記事・お知らせ・採用情報などを追加・編集・削除できます。SEOの観点からもコンテンツの継続更新は重要で、WordPressはその環境を構築しやすい選択肢です。",
  },
  {
    num: "02",
    title: "カスタムテーマによる高品質デザイン",
    body: "既製テーマ（テンプレート）の流用ではなく、ブランドに合わせたカスタムテーマを設計します。デザインの自由度が高く、「よくあるWordPressサイト」とは一線を画した品質のサイトを制作できます。",
  },
  {
    num: "03",
    title: "Next.js + WordPress（ヘッドレスCMS）構成",
    body: "WordPressをバックエンドのCMS（コンテンツ管理システム）として使い、フロントエンドをNext.jsで構築するヘッドレスCMS構成に対応しています。表示速度・セキュリティ・SEO性能が高く、大規模サイトや高速表示を重視する場合に最適です。",
  },
  {
    num: "04",
    title: "SEOプラグイン活用",
    body: "Yoast SEO等のSEOプラグインを導入し、記事・ページごとのメタ情報設定をシンプルな操作で行える環境を整えます。サイトマップの自動生成・構造化データ出力・OGP設定も合わせて対応します。",
  },
  {
    num: "05",
    title: "更新研修・マニュアル提供",
    body: "WordPress納品後、実際の画面を見ながら基本操作（記事投稿・修正・画像アップロード）を研修します。操作マニュアルも提供するので、担当者が変わっても安定した運用が続けられます。",
  },
];

const FAQ_ITEMS = [
  {
    q: "WordPressとNext.jsはどちらを選ぶべきですか？",
    a: "更新頻度が高くブログや記事を社内で書き続けたい場合はWordPress、表示速度・セキュリティ・カスタマイズ性を優先する場合はNext.jsが適しています。両者を組み合わせたヘッドレスCMS構成もあります。要件に合わせてご提案します。",
  },
  {
    q: "既存のWordPressサイトのリニューアルもできますか？",
    a: "はい。現行サイトの内容を引き継ぎながら、デザイン・機能・SEO設計を刷新するリニューアルに対応しています。記事データの移行・URLリダイレクト設定も含めて対応します。",
  },
  {
    q: "WordPressのセキュリティ対策はしてもらえますか？",
    a: "はい。ログインURL変更・ブルートフォース対策・不要なファイル削除・定期バックアップ設定など、基本的なセキュリティ対策を実施します。保守プランに加入することで継続的な管理も可能です。",
  },
  {
    q: "プラグインの追加・カスタマイズもお願いできますか？",
    a: "はい。予約システム・会員機能・EC機能など、目的に合ったプラグインの選定・設定・カスタマイズに対応します。プラグイン同士の競合や表示崩れの確認も行います。",
  },
  {
    q: "ヘッドレスCMS構成はどんな場合に向いていますか？",
    a: "表示速度を最大化したい・複数チャネル（Web・アプリ・メール）に同じコンテンツを配信したい・セキュリティをより高めたい場合に向いています。通常のWordPress構成よりも開発コストは高くなります。",
  },
];

export default function WordPressPage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== Hero ===== */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              WordPress
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 54px)", color: "#0F172A" }}
            >
              WordPress連携・WordPress制作
            </h1>
            <p className="text-[17px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              コンテンツの継続更新に最適なCMS構成を提供します。カスタムテーマによる高品質デザインから、Next.js連携のヘッドレスCMS構成まで対応します。
            </p>
          </div>
        </section>

        {/* ===== Breadcrumb ===== */}
        <nav className="py-4" style={{ borderTop: "1px solid #F0EDE6", borderBottom: "1px solid #F0EDE6", background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <ol className="flex items-center gap-2 text-[12px]" style={{ color: "#9CA3AF" }}>
              <li><Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link></li>
              <li>/</li>
              <li><Link href="/web-design" className="hover:underline" style={{ color: "#6B7280" }}>ホームページ制作</Link></li>
              <li>/</li>
              <li style={{ color: "#0F172A" }}>WordPress連携・WordPress制作</li>
            </ol>
          </div>
        </nav>

        {/* ===== What is WordPress ===== */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                About WordPress
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                WordPressとは
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                WordPressは世界中のWebサイトの約40%以上で使われているオープンソースのCMS（コンテンツ管理システム）です。記事の投稿・編集・削除をHTMLの知識なしに行えるため、社内でコンテンツを継続更新したい企業に広く採用されています。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                普及率が高いゆえに、既製テーマを流用しただけの「量産型サイト」も多く存在します。サイプレスではカスタムテーマ設計を基本とし、ブランドに合ったオリジナルデザインのWordPressサイトを制作します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                また、WordPressをバックエンドのCMSとして使い、フロントエンドをNext.jsで構築する「ヘッドレスCMS構成」にも対応しています。この構成では表示速度・セキュリティ・SEO性能を大幅に向上させることができます。
              </p>
            </div>
          </div>
        </section>

        {/* ===== Approaches ===== */}
        <section className="py-24 md:py-32" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Our Approach
              </p>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                WordPressを活用した制作
              </h2>
            </div>
            <div>
              {APPROACHES.map((item) => (
                <div
                  key={item.num}
                  className="grid md:grid-cols-[80px_1fr] gap-6 md:gap-10 py-8"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-3" style={{ color: "#0F172A" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <FaqSection items={FAQ_ITEMS} heading="WordPress制作 よくある質問" />

        {/* ===== Related ===== */}
        <RelatedPages
          links={[
            { href: "/web-design", label: "ホームページ制作", desc: "Web制作サービス一覧" },
            { href: "/web-design/seo-site", label: "SEOに強いサイト制作", desc: "検索流入を意識した設計" },
            { href: "/services/seo", label: "SEO対策", desc: "検索順位改善の総合支援" },
          ]}
        />

        {/* ===== CTA ===== */}
        <PageContactCTA
          heading="WordPress制作のご相談"
          body="WordPressによるサイト制作・リニューアル・ヘッドレスCMS構成のご相談を承っています。要件に合わせた最適な構成をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}

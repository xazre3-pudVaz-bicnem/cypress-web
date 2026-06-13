import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "AIコンテンツ制作支援 | ブログ・SNS・GBP投稿の効率化",
  description: "株式会社サイプレスのAIコンテンツ制作支援。ブログ記事の企画・下書き作成、SNS投稿文の自動生成、GBP投稿の効率化、メールマガジン作成など、コンテンツ制作業務をAIで効率化します。",
  keywords: ["AIコンテンツ制作", "ブログ記事自動化", "SNS投稿自動化", "GBP投稿", "コンテンツマーケティング支援"],
  openGraph: {
    title: "AIコンテンツ制作支援 | 株式会社サイプレス",
    description: "ブログ・SNS・GBP投稿・メルマガのコンテンツ制作をAIで効率化します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/ai/content" },
};

const SUPPORTS = [
  {
    num: "01",
    title: "ブログ記事の企画・下書き作成",
    body: "キーワード選定・タイトル案作成・見出し構成・本文の下書きをAIで効率化します。担当者はAIが作成した下書きを確認・修正するだけで記事が完成するため、1記事あたりの制作時間を大幅に削減できます。SEOを意識した構成設計も合わせて行います。",
  },
  {
    num: "02",
    title: "SNS投稿文の自動生成",
    body: "ブランドのトーン・過去の投稿スタイルを学習したうえで、Instagram・X・FacebookなどのSNS投稿文を自動生成します。週次・月次での投稿計画に合わせて一括生成することもできます。ハッシュタグ選定・絵文字調整にも対応します。",
  },
  {
    num: "03",
    title: "GBP投稿コンテンツの効率化",
    body: "Googleビジネスプロフィール（GBP）への投稿はMEO評価に影響します。季節・キャンペーン・新メニュー・スタッフ紹介など、定期投稿に必要なコンテンツをAIで効率的に生成し、投稿頻度を維持する体制を構築します。",
  },
  {
    num: "04",
    title: "メールマガジンの作成支援",
    body: "顧客向けメールマガジンの構成設計・件名案・本文作成をAIでサポートします。顧客セグメントごとのパーソナライズ文章や、クリック率を高める件名A/Bテスト案の生成にも対応します。",
  },
];

const FAQ_ITEMS = [
  {
    q: "AIが作成したコンテンツはSEOに悪影響がありますか？",
    a: "AIが作成したコンテンツ自体はGoogleのガイドラインに違反しません。重要なのは「人のために役立つコンテンツか」という点です。AIの下書きを人間が確認・修正し、独自の情報・体験を加えることで、SEOに評価されるコンテンツになります。",
  },
  {
    q: "すべての工程を自動化できますか？",
    a: "完全自動化は推奨していません。AIが下書き・企画・構成を担い、人間が確認・修正・承認するハイブリッドな体制が最も効果的です。ブランドの声（トーン＆マナー）を守りながら品質を維持するフローを設計します。",
  },
  {
    q: "どんな業種・ジャンルのコンテンツでも対応できますか？",
    a: "幅広い業種に対応しています。専門性が高い分野（医療・法律・金融など）では、専門家の監修・確認プロセスを組み込んだフローをご提案します。",
  },
  {
    q: "既存のブログやSNSアカウントに合わせた文体で作成できますか？",
    a: "はい。既存コンテンツを分析し、文体・トーン・よく使う表現を学習したうえでコンテンツを生成します。既存ブランドの世界観を維持しながら効率化できます。",
  },
  {
    q: "Webマーケティング支援との組み合わせは可能ですか？",
    a: "はい。SEO対策・MEO対策とAIコンテンツ制作支援を組み合わせることで、継続的なコンテンツ更新が実現しやすくなります。サイプレスはWebマーケティング全般を支援しているため、コンテンツの方向性をマーケティング戦略と一致させながら効率化を進めます。",
  },
];

export default function ContentPage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== Hero ===== */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              AI Content Creation
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 54px)", color: "#0F172A" }}
            >
              AIコンテンツ制作支援
            </h1>
            <p className="text-[17px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              ブログ記事・SNS投稿・GBP投稿・メールマガジンなど、コンテンツ制作業務をAIで効率化し、継続的な情報発信を実現します。
            </p>
          </div>
        </section>

        {/* ===== Breadcrumb ===== */}
        <nav className="py-4" style={{ borderTop: "1px solid #F0EDE6", borderBottom: "1px solid #F0EDE6", background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <ol className="flex items-center gap-2 text-[12px]" style={{ color: "#9CA3AF" }}>
              <li><Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link></li>
              <li>/</li>
              <li><Link href="/ai" className="hover:underline" style={{ color: "#6B7280" }}>AI活用支援</Link></li>
              <li>/</li>
              <li style={{ color: "#0F172A" }}>AIコンテンツ制作支援</li>
            </ol>
          </div>
        </nav>

        {/* ===== What is Content AI ===== */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                Overview
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                AIを活用したコンテンツ制作
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                SEO・MEO・SNS運用において、コンテンツの継続的な更新は効果を維持・向上させるために不可欠です。しかし多くの中小企業では、コンテンツ制作のリソース不足から更新が滞り、検索評価が下がるという問題を抱えています。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                AIを活用することで、コンテンツ制作にかかる時間を大幅に削減しながら、更新の継続性を確保できます。1記事2〜3時間かかっていた作業が30〜60分で完了するケースも多く、担当者の負担を減らしながら発信量を増やすことができます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                ただし、AIが生成したコンテンツをそのまま公開することは推奨しません。AIは下書き・企画・構成の効率化に使い、最終確認と修正は人間が行う体制を構築することで、品質を保ちながら効率化を実現します。
              </p>
            </div>
          </div>
        </section>

        {/* ===== Supports ===== */}
        <section className="py-24 md:py-32" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Support Areas
              </p>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                支援内容
              </h2>
            </div>
            <div>
              {SUPPORTS.map((item) => (
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
        <FaqSection items={FAQ_ITEMS} heading="AIコンテンツ制作支援 よくある質問" />

        {/* ===== Related ===== */}
        <RelatedPages
          links={[
            { href: "/ai", label: "AI活用支援", desc: "AI支援サービス一覧" },
            { href: "/ai/automation", label: "業務自動化", desc: "繰り返し業務の自動化" },
            { href: "/services/seo", label: "SEO対策", desc: "コンテンツSEOとの連動" },
          ]}
        />

        {/* ===== CTA ===== */}
        <PageContactCTA
          heading="AIコンテンツ制作支援のご相談"
          body="ブログ・SNS・GBP投稿の更新が続かない、コンテンツ制作に時間がかかりすぎているという課題をお持ちの方はご相談ください。AIを使った効率化プランをご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}

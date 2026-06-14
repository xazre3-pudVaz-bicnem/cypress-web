import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "サービスサイト・LP制作｜コンバージョンを高める設計のWebサイト｜株式会社サイプレス",
  description:
    "サービスサイト・ランディングページ（LP）制作の専門ガイド。問い合わせ・申し込み・資料請求を増やすCV重視の設計・コピーライティング・SEO・A/Bテストまで解説。",
  keywords: ["サービスサイト制作", "LP制作", "ランディングページ", "コンバージョン最適化", "CV改善", "リード獲得サイト"],
  openGraph: {
    title: "サービスサイト・LP制作｜コンバージョンを高める設計のWebサイト｜株式会社サイプレス",
    description: "サービスサイト・LP制作のガイド。問い合わせ・申し込みを増やすCV重視の設計を解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/service-site" },
};

const faqItems = [
  {
    q: "サービスサイトとランディングページ（LP）の違いは何ですか？",
    a: "サービスサイトは複数ページで構成され、サービス詳細・料金・FAQ・事例・会社概要など多くの情報を提供します。LPは1ページで完結し、特定の商品・サービスへの問い合わせ・申し込みを誘導することに特化しています。SEO流入を狙う場合はサービスサイト、広告（リスティング・SNS広告）のランディング先にはLPが向いています。",
  },
  {
    q: "サービスサイトのCVR（コンバージョン率）を上げるには？",
    a: "①ファーストビューでの価値提案の明確化、②社会的証明（事例・口コミ・受賞歴）の配置、③FAQ（不安解消）の充実、④CTA（行動喚起）ボタンの最適配置と文言改善、⑤フォームの入力項目最小化、⑥ページ表示速度の改善、が主な改善ポイントです。",
  },
  {
    q: "BtoBサービスとBtoCサービスでは設計が違いますか？",
    a: "はい、異なります。BtoBは意思決定者が複数・検討期間が長いため、詳細な機能説明・事例・資料ダウンロードが重要です。BtoCは感情的な共感・即決促進・わかりやすさが重要で、シンプルな構成と行動喚起を優先します。",
  },
  {
    q: "SEOとCV（コンバージョン）は両立できますか？",
    a: "はい、両立できます。SEOで集客し、そのページのCVRを高める設計が理想です。ただし、SEO向けのコンテンツ量（説明・FAQなど）とCV向けのすっきりした構成は相反する面もあるため、ページの役割を明確にしてSEO用コンテンツページとCV用ページを分けて設計することも有効です。",
  },
  {
    q: "問い合わせフォームの最適化もお願いできますか？",
    a: "はい。入力項目の最小化（必須項目は名前・メール・お問い合わせ内容の3項目が理想）・確認画面の廃止（1ステップ送信）・エラーメッセージの分かりやすさ・完了後のサンクスページの設計まで対応します。",
  },
  {
    q: "ヒートマップ・A/Bテストの導入もできますか？",
    a: "はい。Microsoft Clarity（無料ヒートマップ）の導入・Google Analytics 4のイベント計測設定・A/Bテストツール（Google Optimize、VWO等）の設定支援に対応しています。データに基づいた継続的なCV改善を支援します。",
  },
  {
    q: "コピーライティング（文章）も制作してもらえますか？",
    a: "はい。サービスの強み・ターゲット・競合との差別化ポイントをヒアリングし、SEO・ブランドビジョン・CVを同時に考慮したキャッチコピー・本文・CTAの文言を制作します。",
  },
  {
    q: "制作期間はどのくらいかかりますか？",
    a: "シンプルなLP（1ページ）で3〜4週間、複数ページのサービスサイトで2〜3ヶ月が目安です。コンテンツの用意状況・デザインの複雑さ・修正回数によって前後します。",
  },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Webサイト制作の基礎" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "企業の顔となるWebサイト" },
  { href: "/web-design/seo-site", label: "SEO特化サイト制作", desc: "検索流入を最大化するサイト" },
  { href: "/web-design/wordpress", label: "WordPress制作", desc: "CMS型サービスサイト" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サイプレスの制作サービス" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービスサイトのSEO対策" },
  { href: "/cost/web-design", label: "Web制作の費用", desc: "LP・サービスサイトの料金" },
  { href: "/guide/how-to-choose-web-design-company", label: "Web制作会社の選び方", desc: "CV改善対応会社の選定" },
  { href: "/checklist/web-design", label: "Web制作チェックリスト", desc: "サービスサイト制作の確認項目" },
  { href: "/area/tokyo", label: "東京のWeb制作", desc: "東京エリアの制作対応" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
  { href: "/contact", label: "無料相談", desc: "サービスサイト制作のご相談" },
];

export default function ServiceSitePage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/web-design" style={{ color: "#6B7280" }} className="hover:underline">Web制作</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>サービスサイト・LP制作</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Service Site / LP</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サービスサイト・LP制作
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              サービスサイト・ランディングページ（LP）は、問い合わせ・申し込み・資料請求などのコンバージョン（CV）を最大化するための設計が最重要です。美しいデザインだけでなく、ユーザーの行動を促す心理設計・コピーライティング・CTA配置が成果を左右します。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              SEOによるオーガニック流入と広告（リスティング・SNS広告）からのトラフィックを受け止め、確実にCVに結びつけるサービスサイト・LPを設計・制作します。
            </p>
          </div>
        </section>

        <section className="relative" style={{ height: "300px", overflow: "hidden" }}>
          <Image src="/6.png" alt="サービスサイト・LP制作・コンバージョン最適化のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.2)" }} />
        </section>

        {/* CV重視の設計要素 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Conversion Design</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              コンバージョンを高めるサービスサイト設計
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "ファーストビューの価値提案", body: "ユーザーがページに来た最初の3秒で「これは自分に関係ある」と感じさせることが最重要です。キャッチコピー・サブコピー・CTA・ビジュアルでサービスの価値を瞬時に伝えます。" },
                { title: "社会的証明の配置", body: "実際のお客様の声・事例・数字・メディア掲載・資格・受賞などの信頼要素を適切な場所に配置します。「他の人も使っている」という安心感がCVRを高めます。" },
                { title: "FAQ（不安解消）セクション", body: "「本当に効果があるの？」「費用はいくら？」「解約できる？」など、ユーザーが持ちがちな不安を先回りして解消するFAQを充実させます。FAQはSEOとAIOにも貢献します。" },
                { title: "CTA（行動喚起）の最適化", body: "CTA（問い合わせ・申し込み・資料請求ボタン）の文言・色・配置・サイズを最適化します。「無料相談はこちら」より「今すぐ無料で相談する」の方が行動を促す表現として効果的です。" },
                { title: "フォームの最適化", body: "入力項目の最小化（名前・メール・内容の3項目が理想）・確認画面の廃止・エラーメッセージの改善・完了ページへのGAイベント設定でフォームの離脱率を下げます。" },
                { title: "ヒートマップ・計測の設計", body: "Microsoftの無料ヒートマップ（Clarity）やGA4のイベント計測を設置し、ユーザーの行動データをもとに継続的なCV改善を行えるデータ計測体制を構築します。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="サービスサイト・LP制作についてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="サービスサイト・LP制作のご相談"
          body="問い合わせ・申し込みを増やすCV重視のサービスサイト・LP設計をご支援します。"
        />
      </main>
      <Footer />
    </>
  );
}

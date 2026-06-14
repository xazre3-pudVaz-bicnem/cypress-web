import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "採用サイト制作｜求職者の応募意欲を高める採用特化Webサイト｜株式会社サイプレス",
  description:
    "採用サイト制作の専門ガイド。求職者の共感と応募意欲を高めるデザイン設計・コンテンツ設計・SEO対策・採用広告との連携まで体系的に解説。Next.js・WordPress対応。",
  keywords: ["採用サイト制作", "リクルートサイト", "採用特化サイト", "採用ブランディング", "求人サイト制作"],
  openGraph: {
    title: "採用サイト制作｜求職者の応募意欲を高める採用特化Webサイト｜株式会社サイプレス",
    description: "採用サイト制作のガイド。求職者の共感と応募意欲を高めるデザイン・コンテンツ・SEO対策まで解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/recruit-site" },
};

const faqItems = [
  {
    q: "採用サイトを持つと採用活動にどう影響しますか？",
    a: "採用サイトがあると、求職者がエントリー前に企業の文化・働く環境・社員の声を詳しく確認できます。その結果、企業理解が深まった状態での応募が増え、内定後の辞退率や早期離職率の低下につながるケースがあります。また「会社名 採用」「会社名 口コミ」などの指名検索にも対応できます。",
  },
  {
    q: "採用サイトに載せるべきコンテンツは？",
    a: "企業の理念・ビジョン・文化（会社の雰囲気がわかるもの）、社員インタビュー・一日の仕事の流れ、福利厚生・給与・休暇制度、キャリアパス・成長環境、オフィス環境・チームの雰囲気がわかる写真・動画が重要です。求職者が「ここで働きたい」と感じるコンテンツ設計が採用成功の鍵です。",
  },
  {
    q: "採用サイトのSEO対策はどうすればいいですか？",
    a: "「会社名 採用」「業種 転職 エリア」などのキーワードに対する内部SEO最適化が基本です。また採用ブログ・社員インタビュー記事などのコンテンツ制作でオーガニック流入を獲得することも有効です。求人情報にはJobPosting構造化データの実装が推奨されます。",
  },
  {
    q: "採用サイトとコーポレートサイトは分けた方がいいですか？",
    a: "独立した採用サイト（recruit.〇〇.co.jpなど）と、コーポレートサイト内の採用ページ（〇〇.co.jp/recruit）の2つの形式があります。採用活動に力を入れる・採用専用のブランディングをしたいという場合は独立サイトが効果的です。コストを抑えたい・採用人数が少ない場合はコーポレートサイト内での設計が現実的です。",
  },
  {
    q: "採用広告（Indeed・LinkedIn・Green等）との連携はできますか？",
    a: "はい。Indeed・LinkedIn・Green・Wantedlyなど主要な採用媒体からのリンクを採用サイトの特定ページに誘導する構成を設計します。また、採用サイトに掲載した求人情報とIndeed等の自動連携（Indeed クローリング）についてもサポートできます。",
  },
  {
    q: "スタートアップや小規模企業でも採用サイトは効果的ですか？",
    a: "はい、むしろ大手に比べて認知度が低い小規模企業こそ、採用サイトでのブランディングが重要です。社風・働き方・創業ストーリーなど、大手にはない独自の魅力を伝えることで、共感した候補者からの応募を増やすことができます。",
  },
  {
    q: "採用サイト制作の費用はどのくらいかかりますか？",
    a: "採用サイトのページ数・機能（応募フォーム・動画・社員紹介）・デザインの複雑さによって異なります。シンプルな採用ランディングページから複数職種・社員インタビュー掲載の本格サイトまで対応しています。まずは無料相談でご要件をお聞かせください。",
  },
  {
    q: "動画コンテンツも組み込めますか？",
    a: "はい、YouTubeやVimeoなどの動画プラットフォームに埋め込む形式での実装が可能です。会社説明動画・社員インタビュー動画・オフィス紹介動画などを採用サイトに組み込むことで、求職者への情報伝達力が高まります。",
  },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Webサイト制作の基礎" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "企業の顔となるWebサイト" },
  { href: "/web-design/seo-site", label: "SEO特化サイト制作", desc: "検索流入を最大化するサイト" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サイプレスの制作サービス" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "採用サイトのSEO対策" },
  { href: "/cost/web-design", label: "Web制作の費用", desc: "採用サイトの料金目安" },
  { href: "/guide/how-to-choose-web-design-company", label: "Web制作会社の選び方", desc: "失敗しない選定ガイド" },
  { href: "/checklist/web-design", label: "Web制作チェックリスト", desc: "制作前の確認項目" },
  { href: "/area/tokyo", label: "東京のWeb制作", desc: "東京エリアの制作対応" },
  { href: "/recruit", label: "サイプレスの採用情報", desc: "サイプレスの求人情報" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
  { href: "/contact", label: "無料相談", desc: "採用サイト制作のご相談" },
];

export default function RecruitSitePage() {
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
              <span style={{ color: "#0F172A" }}>採用サイト制作</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Recruit Site</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              採用サイト制作
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              採用サイトは、求職者に「ここで働きたい」と感じてもらうための採用特化Webサイトです。企業の文化・働く環境・社員の声・キャリアパスをビジュアルで伝え、応募率と内定承諾率の向上を目指します。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              コーポレートサイトの採用ページと独立した採用サイトのどちらにも対応しています。求職者が最も重要視する「企業文化の伝わりやすさ」を優先したコンテンツ設計と、SEO・採用広告との連携も含めて設計します。
            </p>
          </div>
        </section>

        <section className="relative" style={{ height: "320px", overflow: "hidden" }}>
          <Image src="/3.png" alt="採用サイト制作・リクルートサイト・採用ブランディングのイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.2)" }} />
        </section>

        {/* 採用サイトの重要要素 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Key Elements</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              求職者の共感を高める採用サイトの要素
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "企業の理念・ビジョンの明文化", body: "求職者が最も重視するのは「この会社はどんな会社か」「何を大切にしているか」という部分です。ミッション・ビジョン・バリューを言語化し、ビジュアルで伝えることが採用サイトの根幹です。" },
                { title: "社員インタビュー・リアルな声", body: "実際に働く社員の生の声（入社動機・仕事のやりがい・チームの雰囲気・成長実感）は、求職者が「入社後のイメージ」を持つために不可欠です。多様な職種・年次・バックグラウンドの社員を掲載します。" },
                { title: "一日の仕事の流れ・職種詳細", body: "抽象的な職種説明ではなく、「実際に1日どのように過ごしているか」を具体的に伝えます。仕事内容・使うツール・チームメンバーとのやり取りなど、就業後のリアルなイメージを伝えます。" },
                { title: "オフィス・環境の可視化", body: "オフィスの写真・チームランチ・社内イベントなど、「この会社の空気感」を写真・動画で伝えます。テキストより画像の方が伝わりやすいのが採用コンテンツの特徴です。" },
                { title: "福利厚生・働き方の明示", body: "給与・休暇制度・リモートワーク可否・育児支援・研修制度などを具体的に明示します。求職者が「働きやすい環境か」を判断するために最重要の情報の一つです。" },
                { title: "キャリアパス・成長機会の表現", body: "入社後どのように成長できるか・どんなキャリアパスがあるかを具体的な事例（先輩社員のキャリア変遷）で伝えます。成長意欲の高い求職者が最も注目するセクションです。" },
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

        <FaqSection items={faqItems} heading="採用サイト制作についてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="採用サイト制作のご相談"
          body="求職者の共感と応募意欲を高める採用サイトの設計・制作をご支援します。"
        />
      </main>
      <Footer />
    </>
  );
}

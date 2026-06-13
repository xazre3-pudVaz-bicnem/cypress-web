import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SNS投稿企画｜集客につながるコンテンツ制作",
  description: "SNSの投稿企画・コンテンツ制作。ターゲットの関心・季節・イベントを踏まえた投稿ネタ出し・キャプション・ハッシュタグをAI活用で効率的に制作。",
};

const faqItems = [
  { q: "SNSの投稿ネタが思いつかなくなったらどうすればいいですか？", a: "コンテンツカレンダーを事前に作成し、商品・サービス紹介・スタッフ紹介・お客様の声・季節イベント・業界知識・舞台裏など投稿カテゴリを決めておくことで、ネタ切れを防げます。" },
  { q: "投稿のキャプション（文章）は誰が書きますか？", a: "株式会社サイプレスが担当します。ヒアリングでブランドのトーン・マナーを把握した上で、AIを活用しながらブランドらしい文章を作成します。最終確認は必ずクライアント様に行います。" },
  { q: "投稿頻度はどのくらい必要ですか？", a: "フィード投稿は週3〜5回、ストーリーズは毎日が理想です。ただし継続が最も重要なため、無理のない頻度を設定します。" },
  { q: "投稿の効果はどうやって測定しますか？", a: "Instagramインサイト（リーチ・エンゲージメント・プロフィール訪問数・フォロワー増加数）を月次で分析します。成果の高い投稿タイプ・ハッシュタグ・投稿時間帯を特定して改善します。" },
];

const relatedLinks = [
  { href: "/sns", label: "SNS集客とは", desc: "SNS集客の概要" },
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタ集客" },
  { href: "/sns/content-calendar", label: "コンテンツカレンダー", desc: "投稿スケジュール" },
  { href: "/sns/hashtag", label: "ハッシュタグ戦略", desc: "ハッシュタグ選定" },
  { href: "/ai/blog-automation", label: "AIブログ自動化", desc: "AI活用コンテンツ制作" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/sns">SNS集客</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              投稿企画
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Post Planning</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              SNS投稿企画｜集客につながるコンテンツ制作
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              SNSで集客するためには「何を・誰に・どう伝えるか」を戦略的に企画することが重要です。ターゲットの関心・季節・ブランドの世界観を踏まえたSNS投稿コンテンツをAI活用で効率的に制作します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_10_29.png" alt="SNS投稿企画・コンテンツ制作" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.18)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Content Types</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              効果的なSNS投稿コンテンツの種類
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "商品・サービス紹介投稿", b: "提供するサービス・商品の特徴・メリット・使い方を紹介する投稿です。写真1枚よりカルーセル（複数枚）形式が保存率・エンゲージメントが高い傾向があります。" },
                { n: "02", t: "ビフォーアフター投稿", b: "美容室・リフォーム・ハウスクリーニングなどの業種で特に効果的です。施術・施工前後の変化を視覚的に示すことで、サービスの価値を直感的に伝えられます。" },
                { n: "03", t: "スタッフ・舞台裏紹介", b: "スタッフの人柄・こだわり・日常の仕事風景を紹介することで親近感と信頼感が生まれます。「この人から買いたい/ここに来たい」という感情的なつながりを作ります。" },
                { n: "04", t: "お客様の声・口コミ", b: "実際の顧客の声・感想を投稿することで社会的証明を提供します。テキスト引用・インタビュー動画・レビュースクリーンショットなど複数の形式で活用できます。" },
                { n: "05", t: "季節・イベント連動コンテンツ", b: "季節のメニュー・年末年始・バレンタイン・母の日などのイベントに合わせた投稿は発見性が高まります。2〜3週間前からの告知が効果的です。" },
                { n: "06", t: "教育・知識提供コンテンツ", b: "業界の豆知識・使い方・選び方など顧客に役立つ情報を提供するコンテンツは保存数が高く、専門家としての信頼感を高めます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#f8f6f2" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="SNS投稿企画のご相談" body="投稿ネタ切れ・SNSが続かない・効果が出ないなどのお悩みをご相談ください。AI活用で効率的かつ継続できるSNS投稿の仕組みを設計します。" />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SNS投稿企画・運用設計｜集客につながるコンテンツ制作",
  description: "SNSの投稿企画・コンテンツ制作。ターゲットの関心・季節・イベントを踏まえた投稿ネタ出し・キャプション・ハッシュタグをAI活用で効率的に制作。",
  keywords: ["SNS投稿企画", "コンテンツ制作", "SNS運用設計", "投稿ネタ", "キャプション制作"],
  openGraph: {
    title: "SNS投稿企画・運用設計｜集客につながるコンテンツ制作",
    description: "SNSの投稿企画・コンテンツ制作。ターゲットの関心・季節・イベントを踏まえた投稿ネタ出し・キャプション・ハッシュタグをAI活用で効率的に制作。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_18_57.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/sns/post-planning" },
};

const faqItems = [
  { q: "SNSの投稿ネタが思いつかなくなったらどうすればいいですか？", a: "コンテンツカレンダーを事前に作成し、商品・サービス紹介・スタッフ紹介・お客様の声・季節イベント・業界知識・舞台裏など投稿カテゴリを決めておくことで、ネタ切れを防げます。" },
  { q: "投稿のキャプション（文章）は誰が書きますか？", a: "株式会社サイプレスが担当します。ヒアリングでブランドのトーン・マナーを把握した上で、AIを活用しながらブランドらしい文章を作成します。最終確認は必ずクライアント様に行います。" },
  { q: "投稿頻度はどのくらい必要ですか？", a: "フィード投稿は週3〜5回、ストーリーズは毎日が理想です。ただし継続が最も重要なため、無理のない頻度を設定します。" },
  { q: "投稿の効果はどうやって測定しますか？", a: "Instagramインサイト（リーチ・エンゲージメント・プロフィール訪問数・フォロワー増加数）を月次で分析します。成果の高い投稿タイプ・ハッシュタグ・投稿時間帯を特定して改善します。" },
  { q: "競合アカウントの分析もしてもらえますか？", a: "はい。同業他社の優良アカウントを調査し、エンゲージメントが高いコンテンツタイプ・投稿頻度・ハッシュタグ戦略を参考にした運用設計を行います。" },
];

const relatedLinks = [
  { href: "/sns", label: "SNS集客とは", desc: "SNS集客の概要" },
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタ集客の実践" },
  { href: "/sns/content-calendar", label: "コンテンツカレンダー", desc: "投稿スケジュール管理" },
  { href: "/sns/hashtag", label: "ハッシュタグ戦略", desc: "ハッシュタグ選定" },
  { href: "/sns/photo-direction", label: "写真ディレクション", desc: "SNS写真の品質" },
  { href: "/sns/local-sns", label: "地域SNS集客", desc: "地元向けSNS戦略" },
  { href: "/ai/blog-automation", label: "AIブログ自動化", desc: "AI活用コンテンツ制作" },
  { href: "/services/sns", label: "SNSサービス詳細", desc: "SNS運用サービス" },
];

const contentItems = [
  { title: "ターゲット分析と投稿設計", body: "「誰に届けるか」を明確にすることが投稿企画の出発点です。年齢・性別・興味・行動パターンを分析し、ターゲットが「見たい・保存したい・シェアしたい」と思うコンテンツを設計します。" },
  { title: "投稿カテゴリの設定", body: "商品・サービス紹介・スタッフ紹介・お客様の声・舞台裏・業界知識・季節情報など5〜7のカテゴリを設定します。カテゴリのローテーションで投稿の多様性を保ちながら継続できます。" },
  { title: "キャプションライティング", body: "SNSのキャプションは「最初の1〜2行」が最重要です。「続きを読む」を押してもらうための冒頭フック・本文・CTA（行動喚起）の3部構成でブランドらしい文章を制作します。" },
  { title: "AIを活用した効率化", body: "ChatGPT・Claude等のAIツールを使って投稿アイデアのリストアップ・キャプションの下書き・ハッシュタグ候補生成を効率化します。AIの出力をブランドらしく磨く編集力が最終的な品質を決めます。" },
  { title: "最適な投稿タイミングの設計", body: "インサイトデータから「フォロワーが最もアクティブな曜日・時間帯」を分析します。一般的には平日19〜21時・土日は12時前後が反応が高い傾向です。予約投稿ツールで最適タイミングに自動公開します。" },
  { title: "月次PDCAと改善", body: "毎月インサイトデータをまとめ「エンゲージメント率が高かった投稿」「リーチが多かった投稿」を分析します。好調パターンを翌月の投稿計画に増やし、継続的にアカウントを成長させます。" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "56px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", gap: "6px", alignItems: "center" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/sns" style={{ color: "#6B7280" }}>SNS集客</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>投稿企画・運用設計</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Post Planning</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              SNS投稿企画・運用設計｜集客につながるコンテンツ制作
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              SNSで集客するためには「何を・誰に・どう伝えるか」を戦略的に企画することが重要です。ターゲットの関心・季節・ブランドの世界観を踏まえたSNS投稿コンテンツをAI活用で効率的に制作します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              投稿ネタ出し・キャプションライティング・ハッシュタグ設計・最適タイミングの設定まで一貫して担当します。毎月のインサイト分析をもとにPDCAを回し、アカウントを着実に成長させます。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_57.png" alt="SNS投稿企画" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.65)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(18px,3vw,28px)", fontWeight: 700, letterSpacing: "0.05em", textAlign: "center" }}>
              戦略のある投稿が、集客に変わる。
            </p>
          </div>
        </div>

        {/* SNS運用失敗パターン */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Common Mistakes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              SNS運用で成果が出ない4つのパターン
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "投稿目的が不明確", b: "「とりあえず投稿する」運用では何を達成したいのか曖昧なまま時間だけが過ぎます。来店促進・認知拡大・指名検索増加など明確な目的を設定することが集客の出発点です。" },
                { t: "ターゲットを意識していない投稿", b: "全員に向けた投稿は誰にも刺さりません。30代女性・地域在住・美容に関心ありなど具体的なターゲット像を持つことで共感を得られるコンテンツが生まれます。" },
                { t: "単発投稿で継続できない", b: "SNSは長期戦です。月に数回しか投稿しないアカウントはアルゴリズムに評価されず、フォロワーの記憶にも残りません。継続できる仕組みとスケジュール設計が必要です。" },
                { t: "データを見ずに改善できない", b: "インサイトデータを確認せずに「感覚で投稿」を続けても成長しません。どの投稿がリーチ・エンゲージメントを獲得したかを月次で分析し、勝ちパターンを増やす運用が重要です。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textAlign: "center" }}>CONTENT STRATEGY</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, textAlign: "center", marginBottom: "48px" }}>
              投稿企画・運用設計の6ステップ
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
              {contentItems.map((item, i) => (
                <div key={i} style={{ padding: "32px", background: "#f8f6f2", borderRadius: "4px", borderTop: "3px solid #c4b89a" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", letterSpacing: "0.2em", marginBottom: "10px" }}>STEP {String(i + 1).padStart(2, "0")}</p>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "17px", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>{item.title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.85", color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA />
      </main>
      <Footer />
    </>
  );
}

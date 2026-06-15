import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Instagram運用代行｜中小企業・店舗向けインスタ集客支援",
  description: "中小企業・店舗のInstagram運用代行。投稿企画・写真ディレクション・ハッシュタグ設定・フォロワー増加・インサイト分析でInstagramからの集客を強化。",
  keywords: ["Instagram運用代行", "インスタ集客", "SNS運用", "フォロワー増加", "Instagram マーケティング"],
  openGraph: {
    title: "Instagram運用代行｜中小企業・店舗向けインスタ集客支援",
    description: "中小企業・店舗のInstagram運用代行。投稿企画・写真ディレクション・ハッシュタグ設定・フォロワー増加・インサイト分析でInstagramからの集客を強化。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_21_48.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/sns/instagram" },
};

const faqItems = [
  { q: "Instagramはどんな業種に向いていますか？", a: "飲食店・美容室・ネイル・エステ・小売店・ファッション・インテリア・不動産など、視覚的に魅力を伝えやすい業種に特に向いています。before&after・商品写真・店内雰囲気が効果的なコンテンツです。" },
  { q: "Instagram運用でフォロワーはどのくらい増えますか？", a: "業種・エリア・投稿頻度・コンテンツ品質によって大きく異なります。月30〜100フォロワーが最初の目安ですが、集客の目標はフォロワー数よりもプロフィール訪問・DM・リンククリック数です。" },
  { q: "Instagramの投稿頻度はどのくらいがいいですか？", a: "週3〜5投稿が理想的です。無理なく継続できる頻度を優先し、品質を保つことが重要です。ストーリーズは毎日・フィードは週3〜5投稿の組み合わせが効果的です。" },
  { q: "Instagram運用の費用はどのくらいですか？", a: "月額3〜8万円程度が一般的な相場です。投稿数・写真撮影の有無・ライティング・分析レポートの内容によって変わります。コンテンツ企画のみ・運用代行すべて込みなど柔軟にご相談ください。" },
  { q: "Instagramから来店・問い合わせにつながりますか？", a: "はい。プロフィールのURL・DMへの誘導・電話番号の掲載・Instagramショッピング（物販）など、適切な導線設計で来店・問い合わせにつなげることができます。" },
];

const relatedLinks = [
  { href: "/sns", label: "SNS集客とは", desc: "SNS集客の概要" },
  { href: "/sns/hashtag", label: "ハッシュタグ戦略", desc: "効果的なハッシュタグ" },
  { href: "/sns/photo-direction", label: "写真ディレクション", desc: "SNS写真の撮り方" },
  { href: "/sns/content-calendar", label: "コンテンツカレンダー", desc: "投稿スケジュール" },
  { href: "/sns/post-planning", label: "投稿企画・運用設計", desc: "コンテンツ制作" },
  { href: "/sns/local-sns", label: "地域SNS集客", desc: "地域向けSNS戦略" },
  { href: "/services/sns", label: "SNSサービス詳細", desc: "SNS運用サービス" },
  { href: "/ai/sns-automation", label: "SNS自動化", desc: "AIによる効率化" },
];

const contentItems = [
  { title: "プロフィール最適化", body: "Instagramのプロフィールは「お店の看板」です。アイコン・ユーザーネーム・プロフィール文・ハイライトを整えることで、フォローに至る確率が大きく変わります。" },
  { title: "フィード投稿の企画・制作", body: "ターゲットの関心・季節・ブランドの世界観を踏まえた投稿を週3〜5回制作します。キャプション・ハッシュタグも含めて一貫したブランドトーンで表現します。" },
  { title: "ストーリーズの活用", body: "ストーリーズは毎日更新が理想です。「本日のおすすめ」「限定情報」「アンケート機能」を使ったフォロワーとのコミュニケーションがエンゲージメント向上に直結します。" },
  { title: "リール動画の制作・活用", body: "リールはInstagramが最も拡散させる動画フォーマットです。15〜30秒のショート動画を月2〜4本制作することで、フォロワー外へのリーチが飛躍的に増加します。" },
  { title: "ハッシュタグ・地域タグ設計", body: "業種・地域・ターゲットに応じた最適なハッシュタグセットを設計します。ビッグ・ミドル・ニッチの3層と地域タグを組み合わせて、新規ユーザーへのリーチを最大化します。" },
  { title: "インサイト分析と改善", body: "月次でリーチ・エンゲージメント・プロフィール訪問数・フォロワー変動を分析します。成果の高い投稿タイプを特定し、翌月のコンテンツ計画に反映してPDCAを回します。" },
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
              <span style={{ color: "#0d1b2a" }}>Instagram運用</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Instagram Marketing</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              Instagram運用代行｜中小企業・店舗の集客強化
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              Instagramは視覚的なコンテンツで商品・サービス・店舗の魅力を伝えられる集客プラットフォームです。投稿企画・写真ディレクション・ハッシュタグ戦略・分析改善を一貫して支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              プロフィール最適化からリール動画制作・インサイト分析まで、Instagramを「集客チャネル」として機能させるための施策を月次で実施します。フォロワー数より「来店・問い合わせ」につながる運用を最優先します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_21_48.png" alt="Instagram運用" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.65)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(18px,3vw,28px)", fontWeight: 700, letterSpacing: "0.05em", textAlign: "center" }}>
              Instagramを、集客エンジンに変える。
            </p>
          </div>
        </div>

        {/* 集客できないInstagramの共通点 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Common Issues</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              Instagramで集客できないアカウントの4つの共通点
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "プロフィールが最適化されていない", b: "プロフィール文・アイコン・ハイライトが整っていないと、投稿を見てプロフィールページに来たユーザーがフォローせずに離脱します。第一印象が集客の入り口です。" },
                { t: "投稿頻度が不安定で継続できない", b: "週1回の投稿と週5回の投稿が繰り返されるムラがあるアカウントはアルゴリズムに評価されません。週3〜5回の安定した投稿が成長の基本条件です。" },
                { t: "写真の品質・統一感がない", b: "明るさ・色調・構図がバラバラのフィードはブランドイメージが伝わらず、フォローに至りません。カラートーンを統一するだけで印象が大きく変わります。" },
                { t: "分析なしで改善サイクルが回らない", b: "インサイトを確認せず感覚だけで投稿を続けても成長しません。何がリーチしたか・何がエンゲージメントを生んだかを毎月確認してPDCAを回すことが集客力向上の鍵です。" },
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
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textAlign: "center" }}>OUR APPROACH</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, textAlign: "center", marginBottom: "48px" }}>
              Instagram運用の6つの施策
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
              {contentItems.map((item, i) => (
                <div key={i} style={{ padding: "32px", background: "#f8f6f2", borderRadius: "4px", borderTop: "3px solid #c4b89a" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", letterSpacing: "0.2em", marginBottom: "10px" }}>{String(i + 1).padStart(2, "0")}</p>
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

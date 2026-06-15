import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SNS写真・ビジュアルディレクション｜集客につながる写真の撮り方・構成",
  description: "SNS集客に効果的な写真ディレクション。料理・商品・店内・施術のスマートフォン撮影のコツ・構図・ライティング・フィードのトンマナ統一で魅力的なInstagramを作る方法。",
  keywords: ["SNS写真", "ビジュアルディレクション", "Instagram 写真", "フィード統一感", "スマートフォン撮影"],
  openGraph: {
    title: "SNS写真・ビジュアルディレクション｜集客につながる写真の撮り方・構成",
    description: "SNS集客に効果的な写真ディレクション。料理・商品・店内・施術のスマートフォン撮影のコツ・構図・ライティング・フィードのトンマナ統一で魅力的なInstagramを作る方法。",
    images: [{ url: "/ChatGPT Image 2026年6月14日 21_08_58 (6).png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/sns/photo-direction" },
};

const faqItems = [
  { q: "スマートフォンでもSNS用の良い写真は撮れますか？", a: "はい。最新のスマートフォンは高品質な写真が撮れます。撮影のポイントは自然光の活用・水平を保つ・背景をシンプルにする・ポートレートモードの活用などです。" },
  { q: "プロのカメラマンを使わないといけませんか？", a: "必須ではありません。ただし高品質なブランド写真（店頭・スタッフ・空間）は年1〜2回のプロ撮影が効果的です。日常の投稿写真はスマートフォンで対応する組み合わせが現実的です。" },
  { q: "Instagramのフィードのトンマナ（雰囲気の統一感）はなぜ重要ですか？", a: "プロフィールページを見たときに統一感があると「このアカウントはセンスがいい・信頼できる」という印象を与えます。フォローに至るかどうかはプロフィールページの第一印象に大きく左右されます。" },
  { q: "商品・料理の写真を魅力的に見せるコツは？", a: "自然光（窓際）での撮影・シンプルな背景・商品の最も魅力的な角度（斜め上・真俯瞰等）・食べ物はクローズアップで質感を出す・小物でスタイリングするなどが効果的です。" },
  { q: "写真の編集（加工）はどのアプリが使いやすいですか？", a: "Lightroom Mobile（無料機能で十分）・VSCO・Snapseedが定番です。フィルターを統一することで写真全体のトーンが揃い、フィードの統一感が生まれます。" },
];

const relatedLinks = [
  { href: "/sns", label: "SNS集客とは", desc: "SNS集客の概要" },
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタ集客の基本" },
  { href: "/sns/post-planning", label: "投稿企画・運用設計", desc: "コンテンツ企画" },
  { href: "/sns/content-calendar", label: "コンテンツカレンダー", desc: "投稿スケジュール" },
  { href: "/sns/hashtag", label: "ハッシュタグ戦略", desc: "タグ選定" },
  { href: "/sns/local-sns", label: "地域SNS集客", desc: "地元向けSNS" },
  { href: "/services/sns", label: "SNSサービス詳細", desc: "SNS運用サービス" },
  { href: "/ai/sns-automation", label: "SNS自動化", desc: "AI活用コンテンツ制作" },
];

const contentItems = [
  { title: "自然光の活用", body: "窓際の柔らかい自然光が最も美しく料理・商品を映します。直射日光は避け、カーテン越しの拡散光が最適です。晴れた日の午前〜昼間の時間帯が撮影に適しています。" },
  { title: "構図と撮影アングル", body: "料理・商品は「斜め45度」「真俯瞰（真上）」が基本です。人物・空間は「目線の高さ」が自然です。三分割法で被写体を配置し、余白を活かした構図が洗練された印象を与えます。" },
  { title: "背景のシンプル化", body: "背景が散らかっていると商品の魅力が半減します。白い壁・木目のテーブル・大理石シートなどシンプルな背景を用意することで、被写体が際立ちます。100均でも撮影背景は揃えられます。" },
  { title: "フィードのカラートーン統一", body: "Instagramのプロフィールで「統一感」を出すには、すべての写真を同じフィルター・色温度・明るさで編集します。ブランドカラーを決め、それに合ったトーンで統一することが重要です。" },
  { title: "スタイリングと小物の活用", body: "商品や料理の周りに季節の花・食器・布を配置することで「世界観」が生まれます。ブランドイメージに合った小物を3〜5個常備しておくと、日々の撮影に活用できます。" },
  { title: "動画・リール用の撮影テクニック", body: "リール用は縦型（9:16）で撮影します。手ブレを防ぐためのスタビライザー（安価なもので可）・自然な動きを見せるスロー撮影・テキストオーバーレイで内容を伝えるのが基本パターンです。" },
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
              <span style={{ color: "#0d1b2a" }}>写真ディレクション</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Photo Direction</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              SNS写真ディレクション｜集客写真の撮り方設計
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              SNSは視覚的なプラットフォームです。写真の質がエンゲージメントと集客力に直結します。スマートフォンでも実践できる写真の撮り方・構図・ライティング・フィードの統一感をご支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              プロカメラマンに頼らなくても、撮影の「型」を知れば写真品質は大きく向上します。フィードを見た瞬間に「このお店に行きたい」と思わせるビジュアル戦略を設計します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_08_58 (6).png" alt="SNS写真ディレクション" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.65)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(18px,3vw,28px)", fontWeight: 700, letterSpacing: "0.05em", textAlign: "center" }}>
              美しい写真が、フォローと来店を生む。
            </p>
          </div>
        </div>

        {/* 写真品質が集客に与える影響 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Visual Impact</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              SNS写真の品質が集客に与える4つの影響
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "第一印象でフォローされない", b: "Instagramではユーザーが投稿を見てプロフィールに飛び、0.3秒でフォローするかを判断します。写真の統一感・クオリティがないプロフィールはこの瞬間に離脱されます。" },
                { t: "エンゲージメント率が上がらない", b: "暗い・ピントが甘い・構図が悪い写真はスクロールで素通りされます。「保存したい」「コメントしたい」と思われる写真だけがアルゴリズムに評価されリーチが広がります。" },
                { t: "ブランドイメージが伝わらない", b: "写真のカラートーン・スタイリング・雰囲気がバラバラだと「どんなお店・サービスか」が伝わりません。一貫したビジュアルこそがブランドを作り指名検索につながります。" },
                { t: "プロフィールページで来店意欲が下がる", b: "予約・購入を検討しているユーザーが最終確認でプロフィールを見ます。この時点でビジュアルに魅力がないと来店・問い合わせに至りません。写真は最後のクロージングです。" },
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
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textAlign: "center" }}>VISUAL DIRECTION</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, textAlign: "center", marginBottom: "48px" }}>
              SNS写真を美しくする6つのポイント
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
              {contentItems.map((item, i) => (
                <div key={i} style={{ padding: "32px", background: "#f8f6f2", borderRadius: "4px", borderLeft: "3px solid #c4b89a" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", letterSpacing: "0.2em", marginBottom: "10px" }}>POINT {String(i + 1).padStart(2, "0")}</p>
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

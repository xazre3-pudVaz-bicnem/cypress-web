import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Googleビジネスプロフィール投稿活用｜SNS×GBP連携で集客を強化｜株式会社サイプレス",
  description:
    "GoogleビジネスプロフィールをSNSチャネルとして活用する投稿・写真戦略。InstagramとGBPの連携設計・投稿テンプレート・効果測定まで一貫してサポート。",
  keywords: [
    "Googleビジネスプロフィール投稿",
    "GBP SNS連携",
    "MEO SNS",
    "Google投稿活用",
    "GBP写真戦略",
  ],
  openGraph: {
    title: "Googleビジネスプロフィール投稿活用｜SNS×GBP連携で集客を強化｜株式会社サイプレス",
    description:
      "GoogleビジネスプロフィールをSNSチャネルとして活用する投稿・写真戦略。InstagramとGBPの連携設計から効果測定まで。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://www.cypress-all.co.jp/sns/google-business-profile",
  },
};

const faqItems = [
  {
    q: "Googleビジネスプロフィールの投稿はどのくらいの頻度で投稿すべきですか？",
    a: "週1〜2回が推奨されます。最新情報投稿は7日間で非表示になるため、定期的な更新が必要です。新商品・サービス・イベント・お知らせなど情報のある時は積極的に投稿します。",
  },
  {
    q: "GBP投稿とInstagramの投稿は同じ内容でいいですか？",
    a: "同じ内容でも問題ありませんが、GBPはGoogle検索・マップで表示されるため、営業時間の変更・特別オファー・新メニュー告知など「今すぐ行動したい」情報を優先します。",
  },
  {
    q: "Googleビジネスプロフィールの投稿で写真は必要ですか？",
    a: "はい。写真付き投稿はエンゲージメントが高まります。商品・料理・店内写真・スタッフ写真など投稿内容に合った写真を必ず添付します。",
  },
  {
    q: "GBP投稿はSEO（検索順位）に影響しますか？",
    a: "GBP投稿は直接の検索順位への影響は限定的ですが、アクティブなGBP（定期更新している）はMEOローカルパックの順位に影響する可能性があります。SNSコンテンツとの一括管理で継続更新しやすくなります。",
  },
  {
    q: "GBP投稿の文字数制限はありますか？",
    a: "最新情報投稿は1,500文字まで入力できますが、検索結果の表示では冒頭100〜150文字が見えます。重要な情報・キーワード・CTAは文章の先頭に配置することを推奨します。",
  },
  {
    q: "GBP投稿に使える画像サイズの推奨はありますか？",
    a: "推奨は720×540px以上（4:3比率）またはJPEG/PNG形式で10MB以下です。Instagramの正方形（1080×1080px）もGBPで表示されますが、横長（1200×900px）が最も見栄えがよく投稿に適しています。",
  },
  {
    q: "GBP投稿のCTAボタンにはどんな種類がありますか？",
    a: "「詳細を表示」「今すぐ注文」「今すぐ予約」「今すぐ申し込む」「今すぐ購入」「詳しくはこちら」「今すぐ電話」の7種類が設定できます。投稿の目的に合ったCTAを選ぶことで、Webサイトや予約ページへの誘導効率が高まります。",
  },
  {
    q: "InstagramとGBPを同時に管理する方法はありますか？",
    a: "Metaのビジネスマネージャーを使うとInstagramを一元管理できますが、GBPは別ツールです。コンテンツカレンダーにGBP投稿枠を追加し、Instagram用素材をGBP仕様にリサイズして転用するワークフローが効率的です。",
  },
  {
    q: "GBP写真とInstagram写真を一本化できますか？",
    a: "はい。撮影時点でGBP用（横長）とInstagram用（正方形・縦長）の両フォーマットを押さえておくと、素材を使い回せます。ブランドカラー・フィルターも統一することでGBPとSNS全体の世界観が一貫します。",
  },
  {
    q: "GBPのオファー投稿はクーポンとして使えますか？",
    a: "はい。オファー投稿にはクーポンコード・利用条件・有効期限を設定でき、来店時に画面提示で割引を受けられる設計ができます。LINE公式アカウントのクーポンと組み合わせると集客効果が高まります。",
  },
  {
    q: "GBP投稿の効果はどこで確認できますか？",
    a: "GBPのインサイト（パフォーマンス）で「投稿の表示回数」「投稿CTAクリック数」を確認できます。またGBP経由のWebサイトクリックやルート検索数もインサイトに表示され、投稿後の行動変化を追えます。",
  },
  {
    q: "GBP投稿は競合との差別化になりますか？",
    a: "定期投稿を続けている店舗はまだ少ないため、週1〜2回の投稿を継続するだけで競合との差別化になります。特にGoogleマップの検索結果で投稿内容が表示されると、選択時の印象が大きく変わります。",
  },
  {
    q: "動画をGBP投稿に使うことはできますか？",
    a: "はい。30秒以内・100MB以下の動画をGBP投稿に添付できます。店内の雰囲気・スタッフの紹介・商品の使い方など動画コンテンツは静止画より閲覧時間が延び、印象に残りやすくなります。",
  },
  {
    q: "季節キャンペーンをGBP投稿でどう活かすべきですか？",
    a: "イベント投稿を使い、キャンペーン開始日〜終了日を設定します。期間中はマップ上でキャンペーン情報が表示されます。Instagram・LINE公式アカウントとクロス投稿することでリーチを最大化できます。",
  },
  {
    q: "GBP投稿は予約システムと連携できますか？",
    a: "はい。CTAボタン「今すぐ予約」にホットペッパービューティー・Googleの予約システム・自社予約ページのURLを設定できます。投稿から直接予約導線を作ることで来店ハードルを下げられます。",
  },
  {
    q: "GBP投稿を自動化する方法はありますか？",
    a: "GBPはAPIを公開しており、一部のSNS管理ツール（Buffer・Hootsuite等）でGBP投稿をスケジュール管理できます。コンテンツカレンダーと連動させることで運用工数を削減できます。",
  },
  {
    q: "GBP写真の登録枚数に制限はありますか？",
    a: "枚数の上限はありません。ただし古い・低画質の写真が多いと全体の印象が下がります。定期的に新しい高画質写真を追加しつつ、古い写真を整理することで検索ユーザーへの第一印象を常に最良に保てます。",
  },
  {
    q: "ユーザーが投稿した写真（口コミ写真）をコントロールできますか？",
    a: "ユーザー投稿写真は直接削除できませんが、不適切な写真はGoogleに報告できます。店舗側の公式写真を多数・高品質で登録しておくことで、検索時に表示される写真の多数を占めることができます。",
  },
  {
    q: "GBP投稿がGoogleニュースや検索結果に表示されることはありますか？",
    a: "GBP投稿はGoogle検索結果のナレッジパネル・Googleマップの投稿タブ・モバイルの検索結果に表示されます。地名＋業種の検索で上位表示された際に投稿内容が目に触れる機会が増えます。",
  },
  {
    q: "複数店舗を持つ場合、GBP投稿はどう管理すればいいですか？",
    a: "GBPのビジネスグループ機能を使うと複数拠点をまとめて管理できます。共通投稿（キャンペーン・新商品）は一括投稿ツールで効率化し、店舗固有の情報（スタッフ・地域イベント）は各店舗担当者が投稿する役割分担が効果的です。",
  },
];

const relatedLinks = [
  { href: "/sns", label: "SNS集客とは", desc: "SNS集客の全体概要" },
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタ集客戦略" },
  { href: "/sns/line", label: "LINE公式アカウント", desc: "LINE集客と自動化" },
  { href: "/sns/local-sns", label: "地域SNS集客", desc: "地域ターゲットSNS" },
  { href: "/sns/facebook", label: "Facebook運用", desc: "Facebook集客戦略" },
  { href: "/sns/tiktok", label: "TikTok運用", desc: "動画SNS集客" },
  { href: "/sns/youtube", label: "YouTube運用", desc: "動画マーケティング" },
  { href: "/sns/twitter-x", label: "X（Twitter）運用", desc: "X集客と拡散戦略" },
  { href: "/meo", label: "MEO対策とは", desc: "Googleマップ上位表示" },
  { href: "/meo/google-business-profile", label: "MEO×GBP最適化", desc: "MEOランキング対策" },
  { href: "/meo/local-seo", label: "ローカルSEO", desc: "地域検索最適化" },
  { href: "/meo/review-management", label: "口コミ管理", desc: "レビュー獲得施策" },
  { href: "/seo", label: "SEO対策とは", desc: "検索エンジン最適化" },
  { href: "/seo/content-marketing", label: "コンテンツマーケ", desc: "SEO記事・コンテンツ" },
  { href: "/services/sns-management", label: "SNS運用代行", desc: "SNS一括管理サービス" },
  { href: "/services/meo", label: "MEOサービス詳細", desc: "MEO対策サービス" },
  { href: "/services/website", label: "Webサイト制作", desc: "集客サイト制作" },
  { href: "/industry/restaurant", label: "飲食店の集客", desc: "飲食業界の施策" },
  { href: "/industry/salon", label: "美容室・サロン集客", desc: "サロン向け戦略" },
  { href: "/industry/dental", label: "歯科医院の集客", desc: "歯科向け施策" },
  { href: "/industry/realestate", label: "不動産の集客", desc: "不動産向け施策" },
  { href: "/area/tokyo", label: "東京エリアの集客", desc: "東京対応エリア" },
  { href: "/area/osaka", label: "大阪エリアの集客", desc: "大阪対応エリア" },
  { href: "/contact", label: "無料相談・お問い合わせ", desc: "まずはご相談" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>

        {/* =================== Hero =================== */}
        <section style={{ background: "#F9F8F5" }} className="pt-32 pb-20">
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", marginBottom: "24px" }} aria-label="パンくず">
              <Link href="/" style={{ color: "#9CA3AF" }}>ホーム</Link>
              <span style={{ margin: "0 8px", color: "#9CA3AF" }}>/</span>
              <Link href="/sns" style={{ color: "#9CA3AF" }}>SNS集客</Link>
              <span style={{ margin: "0 8px", color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#374151" }}>Googleビジネスプロフィール投稿活用</span>
            </nav>

            <p
              className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5"
              style={{ color: "#6B7280" }}
            >
              Google Business Profile × SNS
            </p>

            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px,4vw,44px)",
                color: "#0d1b2a",
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              Googleビジネスプロフィール投稿活用
            </h1>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                color: "#374151",
                marginTop: "20px",
                maxWidth: "640px",
              }}
            >
              GoogleビジネスプロフィールはMEOツールであると同時に、Google検索・マップ上で機能するSNSチャネルです。
              最新情報投稿・写真投稿をInstagramや他SNSと連携させることで、投稿コストを抑えながら集客接点を最大化します。
            </p>
          </div>
        </section>

        {/* =================== Hero Image =================== */}
        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_19_44.jpg"
            alt="Googleビジネスプロフィール投稿活用イメージ"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* =================== Section A: このページでわかること =================== */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p
              className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5"
              style={{ color: "#6B7280" }}
            >
              What You&apos;ll Learn
            </p>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              このページでわかること
            </h2>

            <div style={{ maxWidth: "680px" }}>
              <div style={{ display: "flex", gap: "16px", padding: "16px 0", borderTop: "1px solid #E8E4DC", alignItems: "flex-start" }}>
                <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "16px", lineHeight: "1.6", flexShrink: 0 }}>→</span>
                <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8", margin: 0 }}>GBPの投稿機能がSNSチャネルとして果たす役割と他SNSとの違い</p>
              </div>
              <div style={{ display: "flex", gap: "16px", padding: "16px 0", borderTop: "1px solid #E8E4DC", alignItems: "flex-start" }}>
                <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "16px", lineHeight: "1.6", flexShrink: 0 }}>→</span>
                <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8", margin: 0 }}>InstagramコンテンツをGBPに転用するための仕様・フォーマットの違い</p>
              </div>
              <div style={{ display: "flex", gap: "16px", padding: "16px 0", borderTop: "1px solid #E8E4DC", alignItems: "flex-start" }}>
                <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "16px", lineHeight: "1.6", flexShrink: 0 }}>→</span>
                <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8", margin: 0 }}>最新情報投稿・オファー投稿・イベント投稿の特性と使い分け方</p>
              </div>
              <div style={{ display: "flex", gap: "16px", padding: "16px 0", borderTop: "1px solid #E8E4DC", alignItems: "flex-start" }}>
                <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "16px", lineHeight: "1.6", flexShrink: 0 }}>→</span>
                <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8", margin: 0 }}>週次投稿カレンダーへGBP投稿枠を組み込む具体的なワークフロー</p>
              </div>
              <div style={{ display: "flex", gap: "16px", padding: "16px 0", borderTop: "1px solid #E8E4DC", alignItems: "flex-start" }}>
                <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "16px", lineHeight: "1.6", flexShrink: 0 }}>→</span>
                <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8", margin: 0 }}>CTAボタン設定・リンク設計で予約・問い合わせを増やす方法</p>
              </div>
              <div style={{ display: "flex", gap: "16px", padding: "16px 0", borderTop: "1px solid #E8E4DC", alignItems: "flex-start" }}>
                <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "16px", lineHeight: "1.6", flexShrink: 0 }}>→</span>
                <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8", margin: 0 }}>GBPインサイトで投稿効果を測定し改善するPDCAの回し方</p>
              </div>
            </div>
          </div>
        </section>

        {/* =================== GBP投稿の種類 =================== */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p
              className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5"
              style={{ color: "#6B7280" }}
            >
              Post Types
            </p>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              GBP投稿の種類と活用法
            </h2>

            <div style={{ maxWidth: "720px" }}>
              <div style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>01</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>最新情報投稿（7日間有効）</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>お知らせ・新メニュー・スタッフ情報・日常の業務風景など幅広い内容を投稿できます。7日間で自動で非表示になるため、週1〜2回の更新が重要です。写真付きが効果的です。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>02</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>イベント投稿（期間設定可能）</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>セール・新商品発売・特別企画など期間限定のイベント情報を投稿できます。開始日・終了日を設定できるため、キャンペーン期間中はマップ上で目立たせることができます。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>03</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>オファー投稿（クーポン機能）</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>割引・特典・初回限定価格などのオファーを投稿できます。ボタンテキスト（「今すぐ注文」「詳細を表示」等）を設定でき、来店・予約・問い合わせへの直接誘導が可能です。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>04</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>商品・サービス投稿</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>提供する商品・サービスを写真・説明・価格と一緒に掲載できます。検索結果のGBPパネルに表示されるため、来店前の情報収集段階のユーザーに商品を知ってもらう機会になります。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>05</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>Q&amp;A（よくある質問）の管理</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>GBPのQ&A機能でよく聞かれる質問と回答をあらかじめ設定します。「営業時間は？」「駐車場は？」「予約は必要？」などの質問に回答することでユーザーの疑問を解消し来店を促します。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================== Section B: よくある課題と原因 =================== */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p
              className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5"
              style={{ color: "#6B7280" }}
            >
              Common Issues
            </p>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              よくある課題と原因
            </h2>

            <p
              style={{
                fontSize: "15px",
                color: "#374151",
                marginBottom: "48px",
                maxWidth: "600px",
                lineHeight: "1.8",
              }}
            >
              GBP投稿をSNS連携チャネルとして活用できていない店舗に共通する課題と、その背景にある原因を整理します。
            </p>

            <div style={{ maxWidth: "720px" }}>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>01</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>GBPの投稿機能をそもそも使っていない</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>GBPをプロフィール登録のみで終わらせ、投稿機能の存在を知らないケースが多くあります。Google検索・マップ上の掲載情報が静的なままで、ユーザーへの情報更新がされていない状態です。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>02</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>MEOとSNSを別々のチームが管理している</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>MEOはWeb担当、SNSはマーケ担当と分業しているため、コンテンツの重複管理や情報の不一致が起きやすくなります。投稿素材の共有がされず、制作工数が無駄に増えている状態です。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>03</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>InstagramのコンテンツをGBPに転用していない</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>Instagramで投稿した写真・キャプションが使い回せることを知らず、GBP用にゼロから素材を作ろうとするため更新が止まります。仕様の違いを理解すれば転用ルールが設計できます。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>04</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>GBP写真とInstagram写真のフォーマットが統一されていない</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>Instagramは正方形・縦長が多いのに対し、GBPは横長（4:3）が推奨です。撮影時点でフォーマットを意識していないため、GBP用に切り抜くと被写体が欠けるトラブルが発生します。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>05</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>GBP投稿の文字数・画像仕様を把握していない</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>最新情報投稿の文字数上限（1,500文字）や画像サイズ推奨（720×540px以上）を知らないまま投稿しているため、表示崩れや重要情報の切れが生じます。仕様理解が投稿品質の基礎です。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>06</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>CTAボタンの設定・活用ができていない</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>GBP投稿にはCTAボタンを設定できますが、未設定のまま投稿しているケースが大半です。「今すぐ予約」「今すぐ注文」などのCTAがないと、投稿を見たユーザーが次の行動に移りにくくなります。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>07</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>GBP投稿の効果測定をしていない</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>GBPインサイトで投稿の表示回数・CTAクリック数を確認できますが、ほとんどの店舗が見ていません。効果測定なしでは改善のPDCAが回らず、投稿の質・頻度が最適化されません。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>08</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>キャンペーン・特典投稿の活用が不足している</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>オファー投稿・イベント投稿の使い方を知らず、すべて最新情報投稿で代用してしまっています。種類を使い分けることでクーポンコード設定・有効期限表示など集客効果の高い機能が使えます。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>09</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>GBP投稿とWebサイトの連動設計がない</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>GBP投稿のCTAリンクをトップページのみに設定しているため、投稿で宣伝したサービスのランディングページへ誘導できていません。投稿内容に対応したページへのリンク設計が必要です。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>10</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>競合のGBP投稿を研究していない</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>同業・同エリアの競合がどんな投稿をしているかを把握していないため、差別化のヒントを得られていません。競合のGBP投稿を定期的に観察することで、自社の投稿戦略を磨けます。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================== Section C: 業種別の活用ポイント =================== */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p
              className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5"
              style={{ color: "#6B7280" }}
            >
              By Industry
            </p>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              業種別の活用ポイント
            </h2>

            <p
              style={{
                fontSize: "15px",
                color: "#374151",
                marginBottom: "48px",
                maxWidth: "600px",
                lineHeight: "1.8",
              }}
            >
              GBP×SNS連携の効果は業種によって異なります。それぞれの業種が最大の成果を得るための投稿テーマと戦略を示します。
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "0",
              }}
            >
              <div style={{ padding: "28px 24px", borderTop: "1px solid #E8E4DC", borderRight: "1px solid #E8E4DC" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                  <span className="text-[12px] font-mono shrink-0" style={{ color: "#9CA3AF" }}>01</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a" }}>飲食店</p>
                </div>
                <p style={{ fontSize: "12px", fontWeight: 600, color: "#c4b89a", marginBottom: "8px", letterSpacing: "0.05em" }}>日替わりメニュー・イベント・季節限定投稿</p>
                <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>「今日のランチ」「週末限定メニュー」「○月の新メニュー」など鮮度の高い情報を週3回以上投稿。Instagramのフード写真をGBPにも転用し、来店を促すCTAで「今すぐ注文」や「予約する」を設定します。</p>
              </div>
              <div style={{ padding: "28px 24px", borderTop: "1px solid #E8E4DC", borderRight: "1px solid #E8E4DC" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                  <span className="text-[12px] font-mono shrink-0" style={{ color: "#9CA3AF" }}>02</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a" }}>美容室・ヘアサロン</p>
                </div>
                <p style={{ fontSize: "12px", fontWeight: 600, color: "#c4b89a", marginBottom: "8px", letterSpacing: "0.05em" }}>新メニュー・スタッフ・キャンペーン投稿</p>
                <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>新しいカラーメニュー・トレンドスタイルの施術写真をInstagramとGBPで同時展開。スタッフ紹介投稿で親しみやすさを演出し、初回割引クーポンはオファー投稿で設定します。</p>
              </div>
              <div style={{ padding: "28px 24px", borderTop: "1px solid #E8E4DC", borderRight: "1px solid #E8E4DC" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                  <span className="text-[12px] font-mono shrink-0" style={{ color: "#9CA3AF" }}>03</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a" }}>歯科医院</p>
                </div>
                <p style={{ fontSize: "12px", fontWeight: 600, color: "#c4b89a", marginBottom: "8px", letterSpacing: "0.05em" }}>お知らせ・予防情報・特典投稿</p>
                <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>休診日変更・診療時間のお知らせはすぐに投稿する習慣が重要です。「歯周病予防のポイント」などの予防歯科コンテンツは専門性を示しAIO対策にもなります。初診特典はオファー投稿で展開します。</p>
              </div>
              <div style={{ padding: "28px 24px", borderTop: "1px solid #E8E4DC", borderRight: "1px solid #E8E4DC" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                  <span className="text-[12px] font-mono shrink-0" style={{ color: "#9CA3AF" }}>04</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a" }}>整骨院・接骨院</p>
                </div>
                <p style={{ fontSize: "12px", fontWeight: 600, color: "#c4b89a", marginBottom: "8px", letterSpacing: "0.05em" }}>健康情報・季節の体調ケア情報</p>
                <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>「梅雨時の肩こりケア」「冬の腰痛対策」など季節に合った健康情報を投稿することで、悩みを持つ潜在層にアプローチできます。施術の様子や院内写真でリラックスできる雰囲気を伝えます。</p>
              </div>
              <div style={{ padding: "28px 24px", borderTop: "1px solid #E8E4DC", borderRight: "1px solid #E8E4DC" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                  <span className="text-[12px] font-mono shrink-0" style={{ color: "#9CA3AF" }}>05</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a" }}>リフォーム・工務店</p>
                </div>
                <p style={{ fontSize: "12px", fontWeight: 600, color: "#c4b89a", marginBottom: "8px", letterSpacing: "0.05em" }}>施工事例・季節提案投稿</p>
                <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>「ビフォーアフター」投稿はInstagramで好まれるだけでなく、GBP上でも強力な実績訴求になります。「夏前の断熱リフォーム」「冬支度のサッシ交換」など季節に先行した提案投稿が有効です。</p>
              </div>
              <div style={{ padding: "28px 24px", borderTop: "1px solid #E8E4DC", borderRight: "1px solid #E8E4DC" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                  <span className="text-[12px] font-mono shrink-0" style={{ color: "#9CA3AF" }}>06</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a" }}>小売・雑貨店</p>
                </div>
                <p style={{ fontSize: "12px", fontWeight: 600, color: "#c4b89a", marginBottom: "8px", letterSpacing: "0.05em" }}>新商品・セール・使用シーン投稿</p>
                <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>入荷情報・セール開始日をGBP投稿で告知し、Webショップや来店への誘導リンクを設定します。商品の使用シーンや生活提案型の写真はInstagramとGBPの両方で活用できます。</p>
              </div>
              <div style={{ padding: "28px 24px", borderTop: "1px solid #E8E4DC", borderRight: "1px solid #E8E4DC" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                  <span className="text-[12px] font-mono shrink-0" style={{ color: "#9CA3AF" }}>07</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a" }}>学習塾・教室</p>
                </div>
                <p style={{ fontSize: "12px", fontWeight: 600, color: "#c4b89a", marginBottom: "8px", letterSpacing: "0.05em" }}>合格速報・体験授業・説明会投稿</p>
                <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>合格発表の季節の「合格速報」投稿は保護者の目に触れやすく、信頼性を高めます。体験授業・説明会の告知はイベント投稿で開催日を設定し、申し込みリンクをCTAに設定します。</p>
              </div>
              <div style={{ padding: "28px 24px", borderTop: "1px solid #E8E4DC", borderRight: "1px solid #E8E4DC" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                  <span className="text-[12px] font-mono shrink-0" style={{ color: "#9CA3AF" }}>08</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a" }}>不動産会社</p>
                </div>
                <p style={{ fontSize: "12px", fontWeight: 600, color: "#c4b89a", marginBottom: "8px", letterSpacing: "0.05em" }}>新着物件・地域情報投稿</p>
                <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>「新着物件：○○駅徒歩5分 2LDK」などの物件情報を写真付きで投稿し、詳細ページへのリンクを設定します。地域の生活情報（新店舗オープン・公園整備など）を投稿することで地域密着感を演出します。</p>
              </div>
            </div>
          </div>
        </section>

        {/* =================== Section D: 実装・運用フロー =================== */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p
              className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5"
              style={{ color: "#6B7280" }}
            >
              Implementation Flow
            </p>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              実装・運用フロー
            </h2>

            <p
              style={{
                fontSize: "15px",
                color: "#374151",
                marginBottom: "48px",
                maxWidth: "600px",
                lineHeight: "1.8",
              }}
            >
              GBP投稿をSNS戦略に組み込むための10ステップです。初回設定から月次効果測定まで、運用を仕組み化する手順を示します。
            </p>

            <div style={{ maxWidth: "720px" }}>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>01</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>GBP投稿機能の仕様確認</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>投稿の種類（最新情報・イベント・オファー）と文字数制限（1,500文字）・画像サイズ推奨（720×540px以上）・CTAボタンの7種類を確認します。仕様理解が投稿品質の基礎となります。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>02</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>SNS投稿とGBP投稿の連携設計</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>InstagramとGBPを別々に運用するのではなく、同一テーマのコンテンツを両チャネルに展開するワークフローを設計します。担当者・承認フロー・投稿ツールを確定させます。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>03</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>Instagramコンテンツの転用ルール策定</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>Instagramの正方形（1080×1080px）投稿からGBP用横長（1200×900px）にトリミングできるよう、撮影時の構図ガイドラインを作成します。キャプションの転用方法も明文化します。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>04</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>週次投稿カレンダーへのGBP投稿枠追加</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>既存のSNS投稿カレンダーにGBP投稿の枠を追加します。週1〜2回のGBP投稿日を決め、投稿テーマ（お知らせ/特典/イベント/商品）をあらかじめ割り当てます。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>05</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>写真・動画素材の共通化</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>Instagram・GBP・LINE共通で使える素材ライブラリを構築します。撮影時にGBP横長・Instagram正方形・LINE縦長の各フォーマットを押さえることで、素材の使い回しが可能になります。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>06</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>投稿テンプレートの作成</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>お知らせ・特典・イベント・商品紹介の4カテゴリーごとに投稿テンプレートを作成します。冒頭に重要情報・キーワード、末尾にCTA誘導文とリンクを含めた構成を定型化します。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>07</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>CTAボタンとリンク先の設定</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>各投稿の目的に応じたCTAボタン（予約・注文・申し込み・詳細）を設定し、リンク先を投稿内容に対応したWebページやLP・予約システムに紐付けます。トップページへの一律リンクは避けます。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>08</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>GBPインサイトの確認ルーティン設定</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>毎週末にGBPインサイトで「投稿の表示回数」「CTAクリック数」「Webサイトクリック数」「電話タップ数」を確認するルーティンを設定します。週次データを記録するスプレッドシートを用意します。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>09</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>SNSとの効果比較分析</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>同テーマの投稿をInstagramとGBPで展開し、エンゲージメント・クリック数・来店・予約への貢献をチャネル別に比較します。チャネルごとの強みを把握して配分を最適化します。</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>10</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>月次効果測定とプラン改善</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>月次でGBP投稿の累計閲覧数・CTA合計クリック数・月間投稿数・Instagram流用率を集計します。目標値との差異を分析し、翌月の投稿テーマ・頻度・フォーマットを改善します。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================== Section E: 成果を見るための指標 =================== */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p
              className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5"
              style={{ color: "#6B7280" }}
            >
              KPI &amp; Metrics
            </p>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              成果を見るための指標
            </h2>

            <p
              style={{
                fontSize: "15px",
                color: "#374151",
                marginBottom: "48px",
                maxWidth: "600px",
                lineHeight: "1.8",
              }}
            >
              GBP×SNS連携施策の効果を定量的に把握するための主要指標です。確認場所と活用方法を合わせて記載します。
            </p>

            <div style={{ maxWidth: "720px" }}>
              <div style={{ padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <div style={{ display: "flex", gap: "20px", marginBottom: "6px" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>01</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a" }}>GBP投稿閲覧数</p>
                </div>
                <div style={{ paddingLeft: "44px" }}>
                  <p style={{ fontSize: "12px", color: "#c4b89a", fontWeight: 600, marginBottom: "4px", letterSpacing: "0.04em" }}>確認場所：GBPインサイト ＞ 投稿タブ</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>投稿ごとの表示回数を確認し、どのテーマ・フォーマットが多く閲覧されているかを把握します。閲覧数の高い投稿の傾向を次回以降に反映します。</p>
                </div>
              </div>
              <div style={{ padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <div style={{ display: "flex", gap: "20px", marginBottom: "6px" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>02</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a" }}>投稿CTAタップ数</p>
                </div>
                <div style={{ paddingLeft: "44px" }}>
                  <p style={{ fontSize: "12px", color: "#c4b89a", fontWeight: 600, marginBottom: "4px", letterSpacing: "0.04em" }}>確認場所：GBPインサイト ＞ 投稿タブ ＞ アクション</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>投稿に設定したCTAボタン（予約・注文・詳細）がタップされた回数を計測します。CTAのテキスト変更や投稿内の誘導文改善によって改善できる指標です。</p>
                </div>
              </div>
              <div style={{ padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <div style={{ display: "flex", gap: "20px", marginBottom: "6px" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>03</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a" }}>月間投稿数</p>
                </div>
                <div style={{ paddingLeft: "44px" }}>
                  <p style={{ fontSize: "12px", color: "#c4b89a", fontWeight: 600, marginBottom: "4px", letterSpacing: "0.04em" }}>確認場所：GBP管理画面 ＞ 投稿履歴</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>月に何回GBP投稿を行えたかを記録します。目標週2回（月8回）を維持できているかの継続性指標であり、運用体制の健全性を示します。</p>
                </div>
              </div>
              <div style={{ padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <div style={{ display: "flex", gap: "20px", marginBottom: "6px" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>04</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a" }}>Instagram流用率</p>
                </div>
                <div style={{ paddingLeft: "44px" }}>
                  <p style={{ fontSize: "12px", color: "#c4b89a", fontWeight: 600, marginBottom: "4px", letterSpacing: "0.04em" }}>確認場所：自社投稿カレンダー</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>GBP投稿のうち、Instagramコンテンツから転用したものの割合を追います。流用率が高いほど投稿コストが低く、運用効率が良好な状態です。目標は50%以上を推奨します。</p>
                </div>
              </div>
              <div style={{ padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <div style={{ display: "flex", gap: "20px", marginBottom: "6px" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>05</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a" }}>GBP経由Webサイトクリック数</p>
                </div>
                <div style={{ paddingLeft: "44px" }}>
                  <p style={{ fontSize: "12px", color: "#c4b89a", fontWeight: 600, marginBottom: "4px", letterSpacing: "0.04em" }}>確認場所：GBPインサイト ＞ パフォーマンス ＞ Webサイト</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>GBPからWebサイトへ移動したユーザー数です。投稿CTAのリンク先改善やLP最適化によって増やせます。Googleアナリティクスの参照元「google / organic」とも照合します。</p>
                </div>
              </div>
              <div style={{ padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <div style={{ display: "flex", gap: "20px", marginBottom: "6px" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>06</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a" }}>投稿後の電話タップ数変化</p>
                </div>
                <div style={{ paddingLeft: "44px" }}>
                  <p style={{ fontSize: "12px", color: "#c4b89a", fontWeight: 600, marginBottom: "4px", letterSpacing: "0.04em" }}>確認場所：GBPインサイト ＞ 通話</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>特定の投稿後1週間の電話タップ数の増減を記録します。特典・キャンペーン投稿の直後に増加する傾向があり、投稿の実集客への寄与を測る補助指標になります。</p>
                </div>
              </div>
              <div style={{ padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                <div style={{ display: "flex", gap: "20px", marginBottom: "6px" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>07</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a" }}>写真閲覧数推移</p>
                </div>
                <div style={{ paddingLeft: "44px" }}>
                  <p style={{ fontSize: "12px", color: "#c4b89a", fontWeight: 600, marginBottom: "4px", letterSpacing: "0.04em" }}>確認場所：GBPインサイト ＞ 写真</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>GBPに登録した写真の累計閲覧数を月次で記録します。新しい高品質写真を追加するたびに閲覧数が増える傾向があり、写真更新頻度の目安になります。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="GBP投稿・SNS連携のご相談"
          body="GoogleビジネスプロフィールをSNSチャネルとして最大活用するための投稿戦略・Instagram連携・効果測定設計をご支援します。まずはお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}

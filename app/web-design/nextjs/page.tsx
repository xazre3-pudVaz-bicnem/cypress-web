import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Next.js制作｜高速・SEOに強いWebサイト制作｜株式会社サイプレス",
  description:
    "Next.jsを使ったSEOに強く高速なWebサイト制作。SSG・SSR・App Routerによる最適化、next/imageによる画像最適化、Vercelとの組み合わせで最高のパフォーマンスを実現。",
  keywords: ["Next.js制作", "Next.js Web制作", "高速サイト制作", "React制作", "SSG制作"],
  openGraph: {
    title: "Next.js制作｜高速・SEOに強いWebサイト制作",
    description:
      "Next.js+TypeScript+Vercel構成でSEOと表示速度を最大化。Lighthouse 90+を実現するWeb制作。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/nextjs" },
};

const faqItems = [
  {
    q: "Next.jsとWordPressはどちらがいいですか？",
    a: "SEO・パフォーマンス・セキュリティ面ではNext.jsが優れています。ただし更新の頻度・担当者のITリテラシー・予算によって最適な選択は変わります。更新が少ない・技術リソースがある場合はNext.jsが最適です。",
  },
  {
    q: "Next.jsで作ったサイトはどこに公開しますか？",
    a: "Vercel（Next.js開発元が提供するホスティングサービス）が最も推奨されます。GitHubと連携した自動デプロイ・世界規模のCDN・自動SSL・高速な配信が無料プランから利用できます。",
  },
  {
    q: "Next.jsサイトの管理画面はありますか？",
    a: "Next.js自体に管理画面機能はありませんが、ヘッドレスWordPress（WordPress CMSとNext.jsフロントエンドの組み合わせ）やSanity・ContentfulなどのヘッドレスCMSを組み合わせることで管理画面を持てます。",
  },
  {
    q: "制作期間はどのくらいかかりますか？",
    a: "コーポレートサイトの規模感で、設計〜公開まで4〜8週間が目安です。ページ数・デザインの複雑さ・機能要件によって変わります。",
  },
  {
    q: "既存のWordPressサイトからNext.jsに移行できますか？",
    a: "はい。WordPressのコンテンツをそのままにフロントエンドをNext.jsに切り替える「ヘッドレスWordPress」への移行が可能です。WordPressの使い慣れた管理画面はそのまま使えます。",
  },
  {
    q: "Next.jsはどんな企業に向いていますか？",
    a: "技術系スタートアップ・集客重視のコーポレートサイト・SEOを重視するサービスサイト・更新頻度が低いサイトに向いています。WordPressの管理画面に慣れた担当者がいる場合はヘッドレスWordPressも選択肢です。",
  },
  {
    q: "Next.jsサイトのSEO設定は難しいですか？",
    a: "Next.jsのApp Routerではmetadata APIを使ってページごとのtitle・description・OGP・構造化データを簡単に設定できます。サイトマップの自動生成（app/sitemap.ts）・robots.txtも標準対応しています。",
  },
  {
    q: "App RouterとPages Routerの違いは何ですか？",
    a: "App Router（app/ディレクトリ）はNext.js 13以降の推奨構成です。Server Components・Streaming・ネストレイアウトに対応し、パフォーマンスと開発効率が大幅に向上します。新規制作ではApp Routerを採用します。",
  },
  {
    q: "Server ComponentsとClient Componentsはどう使い分けますか？",
    a: "Server Componentsはデータ取得・SEO・静的表示に使い、Client Componentsはインタラクション・状態管理（useState/useEffect）が必要な箇所に限定します。デフォルトをServer Componentsにすることで初期JSバンドルを最小化できます。",
  },
  {
    q: "TypeScriptは必須ですか？",
    a: "必須ではありませんが、サイプレスでは全プロジェクトでTypeScriptを採用しています。型安全性により開発中のバグを防ぎ、長期保守での変更コストを大幅に削減できます。",
  },
  {
    q: "ヘッドレスCMSとはどんなものですか？",
    a: "SanityやContentful・MicroCMSなどのサービスです。コンテンツ管理画面（バックエンド）とフロントエンドを分離する構成で、Next.jsと組み合わせることで高速な表示と使いやすい管理画面を両立できます。",
  },
  {
    q: "ISR（増分静的再生成）はどんな場面で使いますか？",
    a: "ブログ・ニュース・製品ページなど「定期的に更新されるが毎回ビルドは不要」なページに最適です。ISRを使うとビルドなしでページを最新化しつつ、静的配信の速度を維持できます。",
  },
  {
    q: "Next.jsサイトのセキュリティはWordPressより強いですか？",
    a: "はい。Next.jsによる静的HTML配信はサーバーサイドへの直接攻撃リスクが低く、WordPressのようなプラグイン脆弱性もありません。ただしAPIルートを使う場合は認証設計が必要です。",
  },
  {
    q: "Vercel以外のホスティングでも使えますか？",
    a: "はい。AWS（Amplify・Lambda）・Google Cloud Run・Netlify・自社VPSなどでも動作します。ただしVercelはNext.js最適化機能（Edge Functions・Image Optimization）が最もシームレスに機能します。",
  },
  {
    q: "既存のWordPressサイトを残しながらNext.jsに段階移行できますか？",
    a: "はい。特定ページのみNext.jsに移行し、残りをWordPressで運用するハイブリッド構成も可能です。リバースプロキシ設定やSubpathルーティングを使って同一ドメインで共存させられます。",
  },
  {
    q: "Next.jsサイトの保守はどう行いますか？",
    a: "npm dependenciesの定期更新（Dependabotを使った自動PR）・Next.jsバージョンアップ対応・コンテンツ更新・Lighthouseスコアの定期計測を月次または四半期ごとに実施することを推奨しています。",
  },
  {
    q: "制作費用の目安を教えてください。",
    a: "シンプルなコーポレートサイト（5〜10ページ）で30〜60万円、ヘッドレスCMS連携・アニメーション実装を含む本格的なサービスサイトで60〜150万円が目安です。要件に応じて見積もりをご提示します。",
  },
  {
    q: "Next.jsでECサイトは作れますか？",
    a: "はい。Shopify・Commerce.js・Stripe APIと組み合わせたECサイト構築が可能です。商品ページをSSGで静的生成し検索・カートはClient Componentsで実装するハイブリッド構成が最適です。",
  },
  {
    q: "Next.js制作会社を選ぶ際のポイントは？",
    a: "App RouterとServer Componentsの理解度・TypeScriptの採用有無・Vercelへの知見・SEO設定（metadata/sitemap/構造化データ）の実装実績を確認することが重要です。実績サイトのLighthouseスコアも確認しましょう。",
  },
  {
    q: "フリーランスとNext.js制作会社の違いは？",
    a: "制作会社はデザイン・コーディング・SEO・保守を一貫して対応できる体制があります。フリーランスはコスト面で有利な場合がありますが、保守対応の継続性・複数領域のカバー範囲で制作会社が安心できます。",
  },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の基礎" },
  { href: "/web-design/vercel", label: "Vercelホスティング", desc: "Vercelでの公開" },
  { href: "/web-design/headless-wordpress", label: "ヘッドレスWordPress", desc: "WP+Next.js構成" },
  { href: "/web-design/seo-site", label: "SEO対応サイト制作", desc: "SEO特化の制作" },
  { href: "/web-design/page-speed", label: "ページ速度改善", desc: "Core Web Vitals最適化" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "企業サイト制作" },
  { href: "/web-design/lp", label: "ランディングページ制作", desc: "LP制作" },
  { href: "/web-design/mobile-friendly", label: "スマートフォン対応", desc: "モバイル最適化" },
  { href: "/web-design/cms", label: "CMS導入", desc: "CMSによる更新体制" },
  { href: "/web-design/renewal", label: "サイトリニューアル", desc: "既存サイトの刷新" },
  { href: "/seo", label: "SEO対策とは", desc: "SEOの基礎知識" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "技術面のSEO改善" },
  { href: "/seo/page-speed", label: "SEO観点の速度改善", desc: "速度とSEOの関係" },
  { href: "/seo/structured-data", label: "構造化データ", desc: "Schema.org実装" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
  { href: "/services/seo", label: "SEOサービス", desc: "SEO支援サービス" },
  { href: "/industry/restaurant", label: "飲食店向けWeb制作", desc: "飲食業の制作事例" },
  { href: "/industry/salon", label: "美容室向けWeb制作", desc: "美容業の制作事例" },
  { href: "/industry/dental", label: "歯科向けWeb制作", desc: "歯科医院の制作" },
  { href: "/industry/construction", label: "建設業向けWeb制作", desc: "建設業の制作事例" },
  { href: "/industry/btob", label: "BtoB向けWeb制作", desc: "法人向けサイト" },
  { href: "/industry/ec", label: "ECサイト制作", desc: "ECサイト構築" },
  { href: "/works", label: "制作実績", desc: "実績・ポートフォリオ" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談はこちら" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="pt-32 pb-20" style={{ background: "#F9F8F5" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav
              style={{
                fontSize: "12px",
                color: "#9CA3AF",
                marginBottom: "24px",
                display: "flex",
                gap: "6px",
                alignItems: "center",
              }}
            >
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/web-design" style={{ color: "#6B7280" }}>ホームページ制作</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>Next.js制作</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Next.js Development
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
              Next.js制作｜高速・SEOに強いWebサイト
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
              Next.jsはReact製のフルスタックWebフレームワークです。静的生成（SSG）・サーバーサイドレンダリング（SSR）・画像最適化・フォント最適化が標準搭載され、SEOとパフォーマンスに優れたサイトを効率的に構築できます。
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                color: "#374151",
                marginTop: "12px",
                maxWidth: "640px",
              }}
            >
              サイプレスではNext.js + TypeScript + Tailwind CSS + Vercelの構成を標準として、Lighthouse全項目90+を目標に制作します。SEO設定・構造化データ・サイトマップも標準実装です。
            </p>
          </div>
        </section>

        {/* ── Hero image ───────────────────────────────────── */}
        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_20_52.jpg"
            alt="Next.jsでのWeb制作"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "clamp(16px,2vw,24px)",
                  lineHeight: 1.6,
                }}
              >
                速さとSEOを同時に実現する、次世代の制作基盤。<br />
                Next.js + Vercelで、競合サイトを圧倒する。
              </p>
            </div>
          </div>
        </section>

        {/* ── Section A: このページでわかること ─────────────── */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What You Will Learn
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "36px",
              }}
            >
              このページでわかること
            </h2>
            <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column" }}>
              {[
                "Next.jsがWordPressより速くSEOに強い理由",
                "SSG・SSR・ISRをどう使い分けるか",
                "App RouterとServer Componentsの設計思想",
                "Next.js制作の実際の進め方と技術スタック",
                "業種ごとのNext.js活用ポイントと制作事例の傾向",
                "制作会社選びで確認すべき技術的チェックポイント",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "14px 0",
                    borderTop: "1px solid #E8E4DC",
                  }}
                >
                  <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "15px", lineHeight: "1.6", flexShrink: 0 }}>
                    →
                  </span>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.7" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WordPress comparison ─────────────────────────── */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>
              Next.js vs WordPress
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#ffffff",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              WordPressとNext.jsを比較する4つの観点
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "24px",
                maxWidth: "900px",
              }}
            >
              {[
                {
                  t: "表示速度",
                  b: "WordPress：PHPがサーバーで実行されHTMLを動的生成するため、表示に0.5〜2秒かかることも。Next.js：SSGでビルド時にHTMLを静的生成するため、サーバー処理なしで高速表示。",
                },
                {
                  t: "セキュリティ",
                  b: "WordPress：プラグインの脆弱性が頻繁に発見され、更新を怠るとハッキングリスクが高まります。Next.js：静的HTML配信のため、サーバーサイドへの攻撃リスクが大幅に低下。",
                },
                {
                  t: "SEO対応",
                  b: "WordPress：プラグイン（Yoast等）に依存し、テーマの出力するHTMLに縛られます。Next.js：metadataを完全制御でき、構造化データ・サイトマップをコードレベルで最適化可能。",
                },
                {
                  t: "保守性",
                  b: "WordPress：プラグインの相性問題・更新による破壊的変更・テーマの依存関係管理が複雑。Next.js：依存関係がシンプルで、npm管理による一元的なバージョン管理が可能。",
                },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#ffffff",
                      marginBottom: "10px",
                    }}
                  >
                    {item.t}
                  </p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Next.js ──────────────────────────────────── */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Why Next.js
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
              Next.jsがSEO・パフォーマンスに強い理由
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "SSG（静的生成）・SSR（サーバーレンダリング）",
                  b: "ページをビルド時に静的HTMLとして生成（SSG）するか、リクエスト時にサーバーで生成（SSR）するかを柔軟に選択できます。SSGは超高速・SSRは動的コンテンツに対応します。",
                },
                {
                  n: "02",
                  t: "next/imageによる自動画像最適化",
                  b: "画像をWebP形式に自動変換・遅延読み込み・サイズの自動最適化を行います。Core Web Vitals（LCP・CLS）の改善に直結する機能です。",
                },
                {
                  n: "03",
                  t: "next/fontによるフォント最適化",
                  b: "Googleフォントなどを最適化して読み込み、フォントによる表示遅延（CLS）をゼロにします。フォントファイルは自己ホスティングされ、外部リクエストが発生しません。",
                },
                {
                  n: "04",
                  t: "App Routerによる効率的なレイアウト管理",
                  b: "共通レイアウト（ヘッダー・フッター）・ページ固有レイアウトをネストした構造で管理できます。コードの重複を減らし保守性が高まります。",
                },
                {
                  n: "05",
                  t: "自動コード分割",
                  b: "各ページに必要なJavaScriptのみを読み込む自動コード分割により、初期読み込み量を最小化します。",
                },
                {
                  n: "06",
                  t: "Vercelとの最適な組み合わせ",
                  b: "Next.jsの開発元Vercelのホスティングと組み合わせることで、Edge Network（世界規模のCDN）による超高速配信が実現します。",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "6px",
                      }}
                    >
                      {item.t}
                    </p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section B: よくある課題と原因 ───────────────── */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Common Challenges
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
              よくある課題と原因
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "WordPressが重くSEOに悪影響している",
                  b: "PHPによる動的レンダリングとプラグインの過多が原因です。Lighthouseスコアが50を下回るWordPressサイトは珍しくなく、Core Web Vitalsの悪化がGoogleの評価に直結します。",
                },
                {
                  n: "02",
                  t: "動的ページと静的ページを使い分けたい",
                  b: "WordPressでは全ページが動的処理されるため最適化が困難です。Next.jsはページ単位でSSG・SSR・ISRを選択でき、コンテンツの性質に合わせた配信戦略を取れます。",
                },
                {
                  n: "03",
                  t: "React/Next.jsを活用したいが社内に知見がない",
                  b: "ReactのコンポーネントベースのUIとNext.jsのルーティング・データ取得の理解が必要です。サイプレスでは設計から実装・ドキュメント作成まで対応し、引き継ぎ体制を整えます。",
                },
                {
                  n: "04",
                  t: "VercelへのデプロイとCI/CDの設定が分からない",
                  b: "GitHubリポジトリとVercelを接続するだけでプッシュ時の自動デプロイ・プレビュー環境が構築できます。設定の複雑さは低く、初期構築時に設定すれば以降は自動化されます。",
                },
                {
                  n: "05",
                  t: "TypeScriptとの組み合わせが難しい",
                  b: "型定義・APIレスポンスの型付け・コンポーネントのProps型定義の習熟が必要です。サイプレスでは全プロジェクトでTypeScriptを採用しており、型設計も含めて対応します。",
                },
                {
                  n: "06",
                  t: "既存WordPressからの移行コストが不明",
                  b: "コンテンツ量・ページ数・カスタム機能の複雑さで移行コストは大きく変わります。ヘッドレスWordPress構成であればコンテンツをそのまま活用でき、フロントエンドのみ刷新できます。",
                },
                {
                  n: "07",
                  t: "CMSとの連携（ヘッドレスCMS）が分からない",
                  b: "Sanity・Contentful・MicroCMSなどのAPIベースCMSとNext.jsの接続はfetch APIまたはSDKで実現します。サイプレスではCMS選定・API設計・管理画面構築も一括対応します。",
                },
                {
                  n: "08",
                  t: "App RouterとPages Routerの違いが分からない",
                  b: "Next.js 13以降はApp Router（app/ディレクトリ）が推奨です。Server Components・Streamingに対応し性能が向上します。既存のPages Router資産との共存も可能です。",
                },
                {
                  n: "09",
                  t: "Server ComponentsとClient Componentsの使い分けが分からない",
                  b: "データ取得・SEO・静的表示はServer Components、インタラクション（useState/useEffect）はClient Componentsが原則です。設計段階でのコンポーネント分類が品質に直結します。",
                },
                {
                  n: "10",
                  t: "Next.js制作会社の選び方が分からない",
                  b: "実績サイトのLighthouseスコア・App Router対応の有無・TypeScript採用・SEO実装（metadata/sitemap/構造化データ）への知見が主要な確認ポイントです。",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "6px",
                      }}
                    >
                      {item.t}
                    </p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section C: 業種別の活用ポイント ─────────────── */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Industry Use Cases
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
              業種別のNext.js活用ポイント
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1px",
                background: "#E8E4DC",
              }}
            >
              {[
                {
                  industry: "飲食店",
                  point: "メニュー・予約の高速表示",
                  detail:
                    "メニューページをSSGで静的生成することでモバイルからの閲覧速度を最大化。予約フォームはClient Componentsで実装し、ページ全体の速度を落とさず機能を追加できます。",
                },
                {
                  industry: "美容室・サロン",
                  point: "施術写真ギャラリー・予約フォーム",
                  detail:
                    "next/imageによる施術写真の自動WebP変換と遅延読み込みで、ギャラリーが多くても高速表示を維持。LINEや予約システムとの連携もAPIルートで実装できます。",
                },
                {
                  industry: "歯科・クリニック",
                  point: "診療情報の静的生成・高速化",
                  detail:
                    "診療科目・医師紹介・アクセスページをSSGで静的生成し、モバイルでの高速表示を実現。LocalBusiness Schemaと組み合わせることでMEO効果も高まります。",
                },
                {
                  industry: "建設・工務店",
                  point: "施工事例のSSG・画像最適化",
                  detail:
                    "施工事例ページをSSGで大量生成し、工事写真はnext/imageで最適化。施工前後の高解像度画像もLighthouse 90+を維持しながら掲載できます。",
                },
                {
                  industry: "士業・コンサル",
                  point: "ブログ×専門情報のISR",
                  detail:
                    "法律・税務・会計の専門コラムをMicroCMS等と連携したISRで最新化しつつ高速配信。E-E-A-T強化のための著者情報・FAQSchemaも標準実装します。",
                },
                {
                  industry: "BtoB・SaaS",
                  point: "マーケティングサイト+アプリの分離",
                  detail:
                    "マーケティングサイト（Next.js/Vercel）とWebアプリ（別ドメイン）を分離することで、SEO最適化されたサイトと高機能アプリを独立して開発・改善できます。",
                },
                {
                  industry: "ECサイト",
                  point: "商品ページのSSG+検索のSSR",
                  detail:
                    "商品ページはSSGで高速化しつつ、検索・フィルタリングはSSRまたはClient Sideで処理するハイブリッド設計。Shopify Storefront APIとの連携も対応します。",
                },
                {
                  industry: "メディア・ブログ",
                  point: "記事コンテンツのISR",
                  detail:
                    "大量の記事ページをISRで定期再生成することで、CMSでの更新がビルドなしで自動反映。サイトマップの自動生成でクロール効率も最大化します。",
                },
              ].map((item, i) => (
                <div key={i} style={{ background: "#FFFFFF", padding: "28px 24px" }}>
                  <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                    {item.industry}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#0d1b2a",
                      marginBottom: "10px",
                    }}
                  >
                    {item.point}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section D: 技術選定・実装フロー ─────────────── */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Implementation Flow
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
              技術選定・実装フロー
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "要件定義・技術選定（SSG/SSR/ISR）",
                  b: "更新頻度・コンテンツの動的性・予算・保守体制を整理し、ページ単位で最適なレンダリング方式（SSG/SSR/ISR）を決定します。CMS連携の有無もここで確定します。",
                },
                {
                  n: "02",
                  t: "プロジェクト初期設定（TypeScript/Tailwind/shadcn）",
                  b: "create-next-appでプロジェクトを作成し、TypeScript・Tailwind CSS・shadcn/uiを設定。ESLint・Prettierの設定とGitリポジトリの初期化も行います。",
                },
                {
                  n: "03",
                  t: "ディレクトリ構造設計（App Router）",
                  b: "app/ディレクトリのルーティング設計・components/の分類（ui/sections/layout）・lib/（ユーティリティ）・data/（コンテンツデータ）の構成を確定します。",
                },
                {
                  n: "04",
                  t: "コンポーネント設計（Atomic Design）",
                  b: "Atoms（Button・Input等）→Molecules（FormField等）→Organisms（Header・HeroSection等）の順にコンポーネントを設計。再利用性と保守性を確保します。",
                },
                {
                  n: "05",
                  t: "ページ実装",
                  b: "デザインカンプをもとにページコンポーネントを実装。Server Componentsをデフォルトとし、インタラクションが必要な箇所のみClient Componentsを配置します。",
                },
                {
                  n: "06",
                  t: "SEO設定（metadata/sitemap/robots）",
                  b: "全ページにmetadata（title/description/OGP）を設定。app/sitemap.tsでサイトマップ自動生成・robots.txtを配置。FAQPage・Organization等のSchema.orgを実装します。",
                },
                {
                  n: "07",
                  t: "画像最適化（next/image）",
                  b: "全画像をnext/imageに置き換え、fillまたはwidths/heightsを設定。sizes属性でレスポンシブ最適化を実施。重要画像にはpriority属性を付与してLCPを改善します。",
                },
                {
                  n: "08",
                  t: "Vercelデプロイ設定",
                  b: "GitHubリポジトリとVercelを接続し自動デプロイを設定。環境変数・カスタムドメイン・SSL証明書の設定。プレビューデプロイでの確認フローも整備します。",
                },
                {
                  n: "09",
                  t: "パフォーマンス計測",
                  b: "Lighthouse CI・PageSpeed Insightsでパフォーマンス・アクセシビリティ・SEO・ベストプラクティスの全スコアを計測。目標値（90+）を達成するまで改善を繰り返します。",
                },
                {
                  n: "10",
                  t: "保守・更新体制構築",
                  b: "Dependabotによるnpm依存関係の自動更新PR設定・定期的なLighthouse計測フロー・コンテンツ更新マニュアルを整備し、公開後の運用体制を確立します。",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "6px",
                      }}
                    >
                      {item.t}
                    </p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section E: 成果を見るための指標 ─────────────── */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              KPIs &amp; Metrics
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
              成果を見るための指標
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "Lighthouse全項目スコア（目標90+）",
                  b: "Chrome DevToolsまたはLighthouse CIで計測。Performance・Accessibility・Best Practices・SEOの4項目が全て90以上であることを目標とします。",
                },
                {
                  n: "02",
                  t: "Core Web Vitals（LCP・INP・CLS）",
                  b: "Google Search ConsoleのCore Web Vitalsレポートで実ユーザーデータを確認。LCP 2.5秒以内・INP 200ms以下・CLS 0.1以下が「良好」の基準です。",
                },
                {
                  n: "03",
                  t: "ページ読み込み時間",
                  b: "PageSpeed Insights（pagespeed.web.dev）でモバイル・PCそれぞれのTTFB（初回バイト到達時間）とFCP（初回コンテンツ描画）を計測します。",
                },
                {
                  n: "04",
                  t: "ビルド時間",
                  b: "VercelのデプロイダッシュボードでBuild Durationを確認。ページ数増加に伴うビルド時間の肥大化をISRや動的生成の最適化でコントロールします。",
                },
                {
                  n: "05",
                  t: "サーバーコスト",
                  b: "Vercelの月次使用量（帯域幅・Function実行時間）をダッシュボードで確認。SSGの活用でFunction実行を最小化しコストを抑制できます。",
                },
                {
                  n: "06",
                  t: "オーガニック流入数推移",
                  b: "Google Search ConsoleとGA4でオーガニック検索からのセッション数・クリック数・表示回数の変化を月次で追跡。制作後3〜6ヶ月での増加を確認します。",
                },
                {
                  n: "07",
                  t: "開発工数削減率",
                  b: "再利用可能なコンポーネント設計・TypeScriptによるバグ削減・自動デプロイにより、保守・更新の工数削減効果を定性的に評価します。",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "6px",
                      }}
                    >
                      {item.t}
                    </p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Inline CTA ───────────────────────────────────── */}
        <section style={{ background: "#F9F8F5", padding: "64px 0" }}>
          <div
            style={{
              maxWidth: "72rem",
              margin: "0 auto",
              padding: "0 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Get Started
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,28px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              Next.jsサイト制作の第一歩を踏み出す
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#374151",
                lineHeight: "1.9",
                maxWidth: "520px",
                marginBottom: "32px",
              }}
            >
              現在のWordPressサイトの課題・移行コストの試算・Next.jsで実現できることを無料でご相談いただけます。
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                padding: "14px 40px",
                background: "#0F172A",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "14px",
                letterSpacing: "0.08em",
                textDecoration: "none",
              }}
            >
              無料相談はこちら
            </Link>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#FFFFFF" heading="Next.js制作についてよくある質問" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="Next.jsサイト制作のご相談"
          body="Next.js+TypeScript+Tailwind CSSによるコーポレートサイト・サービスサイト・SEO対応サイトの制作をご相談ください。設計から公開・保守まで対応します。"
        />
      </main>
      <Footer />
    </>
  );
}

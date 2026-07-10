import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ヘッドレスWordPress制作｜Next.js+WordPress連携で高速サイト構築｜株式会社サイプレス",
  description: "WordPressをCMSとして使い、フロントエンドをNext.jsで構築するヘッドレス構成。使い慣れたWP管理画面を保ちながら、Lighthouse90+・高速配信・セキュリティ強化を実現。REST API・WPGraphQL対応。",
  keywords: ["ヘッドレスWordPress", "Headless WordPress", "Next.js WordPress", "WP REST API", "ヘッドレスCMS", "WPGraphQL", "ISR", "WordPress高速化"],
  openGraph: {
    title: "ヘッドレスWordPress制作｜Next.js+WordPress連携で高速サイト構築",
    description: "WP管理画面を保ちながらNext.jsフロントエンドで超高速化。ヘッドレスWordPress制作の専門支援。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/headless-wordpress" },
};

const faqItems = [
  { q: "ヘッドレスWordPressと通常のWordPressの違いは何ですか？", a: "通常のWordPressはサーバーでPHPを実行しHTMLを生成します。ヘッドレスはWordPressをAPIサーバーとして使い、フロントエンド（見た目）をNext.jsで別途構築します。管理画面はWordPressそのままですが、表示速度・セキュリティ・SEOが大きく改善します。" },
  { q: "既存のWordPressサイトをヘッドレスに移行できますか？", a: "はい。WordPressのコンテンツ（記事・画像・カテゴリ等）はそのまま活用できます。フロントエンドをNext.jsで新たに構築し、WP REST APIまたはGraphQL（WPGraphQL）でデータを取得する構成に移行します。" },
  { q: "WordPressのプラグインはヘッドレスでも使えますか？", a: "管理画面で使うプラグイン（SEOプラグイン・フォームプラグイン等）は基本的に使えます。ただし表示系のプラグイン（スライダー・ページビルダー等）はNext.js側で代替実装が必要です。" },
  { q: "ヘッドレス構成の開発・制作費用はどのくらいですか？", a: "通常のWordPressより開発工数が増えるため、制作費用は高くなります。ただし表示速度・セキュリティ・SEOのメリットが長期的な費用対効果につながります。" },
  { q: "ヘッドレスWordPressのホスティングはどこに置きますか？", a: "Next.jsフロントエンドはVercel（推奨）、WordPress（バックエンド）は従来のサーバー（さくらインターネット・XServer等）またはWordPress専用ホスティングに置きます。" },
  { q: "WP REST APIとWPGraphQLはどちらがいいですか？", a: "シンプルな構成ではWP REST APIが導入しやすいです。複雑なデータ取得・柔軟なクエリが必要な場合はWPGraphQLが有効です。サイプレスでは要件に応じてご提案します。" },
  { q: "ヘッドレスWordPressの更新方法は通常と同じですか？", a: "はい。記事・固定ページの更新はWordPress管理画面から通常通り行います。技術的な変更は不要です。フロントエンドのNext.jsはISR（増分静的再生成）を活用してリアルタイムに近い更新も可能です。" },
  { q: "ISR（インクリメンタル静的再生成）とはどういう機能ですか？", a: "ISRはNext.jsの機能で、ビルド時に静的HTMLを生成しつつ、指定秒数ごとに再生成できます。WordPressで記事を更新すると、設定した間隔（例：60秒）後にフロントエンドに自動反映されます。完全な静的生成と動的配信の中間に位置します。" },
  { q: "Webhookを設定すると記事更新がリアルタイムに反映されますか？", a: "はい。WordPressのWebhook（投稿時に外部URLへHTTPリクエスト送信）を設定し、VercelのOn-Demand ISRと連携させることで、記事保存のほぼ即時にフロントエンドが更新されます。" },
  { q: "ACF（Advanced Custom Fields）はヘッドレスで使えますか？", a: "はい。ACFで追加したカスタムフィールドはWP REST APIやWPGraphQLで取得できます。WPGraphQLの場合はACF to WPGraphQLプラグインを使うと、カスタムフィールドをGraphQLクエリで簡単に取得できます。" },
  { q: "画像はWordPressメディアライブラリで管理できますか？", a: "はい。WordPressメディアライブラリで管理した画像のURLをAPIで取得し、Next.jsのImage最適化（next/image）で配信します。自動リサイズ・WebP変換・Lazy Loadが適用されるため、画像パフォーマンスも大幅に向上します。" },
  { q: "WordPress管理画面のURLは外部に公開しますか？", a: "セキュリティ向上のため、WordPressのAPIサーバーは外部からのアクセスを制限する設定を推奨します。wp-adminのURL変更・IP制限・認証ヘッダー必須化などの対策を組み合わせることでセキュリティを強化できます。" },
  { q: "ヘッドレス構成のSEOはどうなりますか？", a: "Next.jsによりページごとのメタタグ・OGP・構造化データ・サイトマップを完全にコントロールできます。サーバーサイドレンダリング（SSR）または静的生成（SSG）により、クローラーが確実にコンテンツを読み取れます。" },
  { q: "通常WordPressサイトとヘッドレスでLighthouseスコアはどれほど変わりますか？", a: "通常WordPressでは最適化してもLighthouseスコアが60〜75程度になるケースが多いです。ヘッドレス構成（Next.js+Vercel）では90〜98程度を実現できます。ページ表示速度（LCP）が2秒以上改善するケースも多くあります。" },
  { q: "カスタム投稿タイプはヘッドレスで使えますか？", a: "はい。WordPress側でカスタム投稿タイプを設定しREST APIを有効にすると、Next.jsからAPIで取得できます。施工事例・スタッフ・物件情報など、業種固有のコンテンツタイプをAPIで柔軟に管理できます。" },
  { q: "ヘッドレス移行にかかる期間はどのくらいですか？", a: "コンテンツ量・機能要件によって異なります。シンプルなコーポレートサイトで2〜4週間、大規模サイトや複雑なカスタム機能がある場合は2〜3ヶ月程度が目安です。既存WordPressの調査から始めてご提案します。" },
  { q: "非エンジニアがコンテンツ管理できますか？", a: "はい。コンテンツの更新は従来通りWordPress管理画面で行います。記事の投稿・編集・画像アップロード・カテゴリ管理は通常のWordPressと変わりません。エンジニアへの依頼なしに担当者が更新できます。" },
  { q: "ヘッドレス構成でフォームはどうやって実装しますか？", a: "Contact Form 7・WPFormsなどのWordPressフォームプラグインをAPIで呼び出す方法と、Next.js側でReact Hook FormとAPI Routes（またはServer Actions）を使って完全にカスタム実装する方法があります。要件に応じて選択します。" },
  { q: "ヘッドレスWordPressでECサイトは構築できますか？", a: "WooCommerceをAPIとして使いNext.jsフロントで商品表示・カート・決済を構築するアーキテクチャが可能です。ただし複雑度が高いため、ShopifyやStripeとの組み合わせも含めて要件整理からご相談ください。" },
  { q: "導入後の保守・運用はどうなりますか？", a: "WordPressの更新・プラグイン管理とNext.jsフロントエンドの保守の両方が必要です。サイプレスでは月次保守プランでWordPressセキュリティ更新・フロントエンドの依存パッケージ更新・パフォーマンス監視をまとめてサポートします。" },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の概要" },
  { href: "/web-design/nextjs", label: "Next.js制作", desc: "Next.jsでの開発" },
  { href: "/web-design/wordpress", label: "WordPress制作", desc: "通常のWordPress" },
  { href: "/web-design/vercel", label: "Vercelホスティング", desc: "Vercelでの公開" },
  { href: "/web-design/page-speed", label: "ページ速度改善", desc: "表示速度の最適化" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
  { href: "/web-design/seo-site", label: "SEO対応サイト制作", desc: "SEO特化の制作" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "企業サイト制作" },
  { href: "/web-design/lp", label: "LP制作", desc: "ランディングページ" },
  { href: "/web-design/renewal", label: "サイトリニューアル", desc: "既存サイトの刷新" },
  { href: "/web-design/maintenance", label: "保守・メンテナンス", desc: "公開後の維持管理" },
  { href: "/web-design/responsive", label: "レスポンシブデザイン", desc: "スマホ対応デザイン" },
  { href: "/web-design/ec", label: "ECサイト制作", desc: "ネットショップ構築" },
  { href: "/web-design/design", label: "Webデザイン", desc: "デザイン制作" },
  { href: "/seo", label: "SEO対策", desc: "検索流入の改善" },
  { href: "/seo/technical", label: "テクニカルSEO", desc: "技術的なSEO対策" },
  { href: "/seo/content", label: "コンテンツSEO", desc: "コンテンツで集客" },
  { href: "/services", label: "サービス一覧", desc: "全サービスを見る" },
  { href: "/industry/restaurant", label: "飲食店向け制作", desc: "飲食業界の実績" },
  { href: "/industry/medical", label: "医療・クリニック向け", desc: "医療機関の制作" },
  { href: "/industry/real-estate", label: "不動産向け制作", desc: "不動産業界の実績" },
  { href: "/industry/btob", label: "BtoB企業向け", desc: "法人向けサイト" },
  { href: "/about", label: "サイプレスについて", desc: "会社・制作理念" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談はこちら" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#F9F8F5" }} className="pt-32 pb-20">
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px", display: "flex", gap: "6px", alignItems: "center" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/web-design" style={{ color: "#6B7280" }}>ホームページ制作</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>ヘッドレスWordPress</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Headless WordPress</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              ヘッドレスWordPress｜Next.js+WP連携で高速サイト構築
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              ヘッドレスWordPressとは、WordPressをコンテンツ管理システム（CMS）として使い、フロントエンド（ユーザーが見る画面）をNext.jsで別途構築する手法です。WordPressの使いやすさを保ちながら、速度・SEO・セキュリティを大幅に改善できます。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "12px", maxWidth: "640px" }}>
              「WordPressの管理画面は使いたい、でも速度とセキュリティが不安」という企業に最適な構成です。WP REST APIを通じてNext.jsがコンテンツを取得し、Vercelで超高速配信します。
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 00_32_58.jpg" alt="ヘッドレスWordPress制作" fill sizes="100vw" className="object-cover" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                WordPressの使いやすさはそのままに、<br />Next.jsの速さとSEO強度を手に入れる。
              </p>
            </div>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              このページでわかること
            </h2>
            <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                "ヘッドレスWordPressと通常WordPressの具体的な違いと選び方",
                "REST APIとWPGraphQLの違い・用途に応じた技術選定の考え方",
                "ISR（インクリメンタル静的再生成）でWordPress更新を自動反映する仕組み",
                "飲食・不動産・医療・BtoBなど業種別のヘッドレスWordPress活用ポイント",
                "既存WordPressからのヘッドレス移行10ステップの実装フロー",
                "Lighthouseスコア・表示速度・セキュリティインシデントなど成果を測る7つのKPI",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", padding: "14px 0", borderTop: "1px solid #E8E4DC", alignItems: "flex-start" }}>
                  <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "16px", lineHeight: "1.6", flexShrink: 0 }}>→</span>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WordPress Problems → Solutions */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.15em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>WordPress Problems → Solutions</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "40px" }}>
              通常WordPressの4つの課題とヘッドレスの解決策
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "表示速度の限界", b: "通常WP：PHPがサーバーでHTMLを毎回生成するため、どれだけ最適化してもLighthouseの限界がある。ヘッドレス：Next.jsのSSGでHTMLをビルド時に生成し、静的ファイルとして高速配信。" },
                { t: "セキュリティリスク", b: "通常WP：プラグインの脆弱性・ブルートフォース攻撃・SQLインジェクションのリスクが常に存在。ヘッドレス：フロントエンドが静的HTMLのためサーバーサイド攻撃の多くを回避できる。" },
                { t: "デザインの制約", b: "通常WP：テーマのHTML/CSS構造に縛られ、自由なデザインが困難。カスタムCSSの競合も発生しやすい。ヘッドレス：Next.js側でHTML/CSSを完全制御。Tailwind CSSで自由なデザインが実現。" },
                { t: "スケーリングの課題", b: "通常WP：サーバーリソースの上限があり、アクセス急増時にサイトが落ちる可能性。ヘッドレス：Vercelのサーバーレスアーキテクチャが自動スケーリングするため、高トラフィックにも耐性がある。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#FFFFFF", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Benefits</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ヘッドレス構成のメリット
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "表示速度が圧倒的に速い（SSG生成）", b: "Next.jsのSSGでビルド時にHTMLを静的生成することで、PHPの実行が不要になります。Lighthouse・Core Web Vitalsのスコアが大幅に向上します。" },
                { n: "02", t: "セキュリティリスクの大幅低減", b: "フロントエンドがNext.js（静的HTML）になるため、WordPressのPHP脆弱性・プラグイン脆弱性を攻撃されるリスクが低下します。APIサーバーとしてのWPは非公開にできます。" },
                { n: "03", t: "WordPressの管理画面はそのまま", b: "担当者は慣れたWordPressの管理画面で記事更新・画像追加を行います。技術的な変更は一切不要です。「更新しやすい」という既存メリットを保ちつつ速度を改善できます。" },
                { n: "04", t: "Next.jsによるSEO最適化", b: "ページごとの適切なmetadata・構造化データ・サイトマップ・ページ速度の完全コントロールが可能です。WordPressテーマの制約から解放されます。" },
                { n: "05", t: "Vercelによる高速CDN配信", b: "Next.jsをVercelにデプロイすることで世界規模のEdge Networkから配信されます。国内外からのアクセス速度が大幅に改善します。" },
                { n: "06", t: "開発の自由度が高い", b: "WordPressテーマのHTML・CSS制約がなく、デザインと機能を完全に自由に実装できます。Tailwind CSS・Framer Motionなど最新技術を使ったサイト制作が可能です。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Issues</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px" }}>
              よくある課題と原因
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "640px" }}>
              ヘッドレスWordPress導入を検討するときに直面しやすい10の課題と、その背景にある原因を解説します。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                { n: "01", t: "WordPressで管理しているコンテンツをそのまま使いたいが表示が遅い", b: "通常WordPressのPHPレンダリングはリクエストのたびにサーバー処理が発生するため、速度に限界があります。ヘッドレス構成でNext.jsのSSG・ISRを採用すれば、既存コンテンツを活かしながら高速化できます。" },
                { n: "02", t: "WordPressのセキュリティリスクが怖い", b: "WordPressはCMS市場のシェアが高いため、脆弱性を狙った攻撃も多いです。ヘッドレス構成でフロントエンドを静的HTMLにすることで、PHPインジェクション・ブルートフォース攻撃などの攻撃対象面を大幅に縮小できます。" },
                { n: "03", t: "非エンジニアがコンテンツ管理できる環境が必要", b: "エンジニアに依頼しないと記事更新できない環境は運用コストが高くなります。ヘッドレス構成でもWordPress管理画面はそのまま使えるため、非エンジニアが従来通りにコンテンツ管理できます。" },
                { n: "04", t: "通常WordPressとヘッドレスの違いが分からない", b: "「ヘッドレス」という言葉の意味が分かりにくく、何が変わるのか見えにくいです。シンプルに言えば「WordPressはデータ管理・Next.jsは画面表示」に役割を分離する構成です。管理者の操作は変わりません。" },
                { n: "05", t: "REST APIとGraphQLの選び方が分からない", b: "WP REST APIは追加プラグイン不要で即時利用でき、シンプルな構成に向いています。WPGraphQLは複雑なデータ取得を1回のクエリで効率化できますが、プラグイン導入と学習コストが発生します。" },
                { n: "06", t: "WordPress管理画面をそのまま使えるか心配", b: "ヘッドレス化してもWordPress管理画面は一切変わりません。記事・固定ページ・メディアライブラリ・カスタム投稿タイプの操作は従来通りです。技術的な変更は開発者側にのみ生じます。" },
                { n: "07", t: "CMSを移行せずにフロントだけ刷新したい", b: "「WordPressは慣れているので変えたくないが、サイトのデザインと速度を改善したい」という要望にヘッドレス構成は最適です。コンテンツはそのままにフロントエンドだけ全面リニューアルできます。" },
                { n: "08", t: "ISR（Incremental Static Regeneration）の設定が難しい", b: "ISRはNext.jsのfetch関数のrevalidateオプションで設定します。記事の更新頻度に合わせて数十秒〜数分の再生成間隔を設定するだけで、キャッシュの自動更新が機能します。" },
                { n: "09", t: "画像管理をWordPressで続けたい", b: "WordPressメディアライブラリで管理した画像URLをAPIで取得し、next/imageで最適配信できます。自動WebP変換・適切なサイズでの配信・Lazy Loadが適用されるため、画像パフォーマンスも向上します。" },
                { n: "10", t: "ヘッドレスCMS移行のコストが不明", b: "コンテンツ量・カスタム投稿タイプ数・フォーム・会員機能などの複雑度によって工数が変わります。サイプレスでは既存サイト調査の上で詳細な見積もりを提示します。初期投資と長期的なメンテナンスコストを合わせてご説明します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section C: 業種別の活用ポイント */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Industry Use Cases</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px" }}>
              業種別の活用ポイント
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "640px" }}>
              ヘッドレスWordPressのメリットは業種によって異なります。各業種の典型的な活用シナリオを紹介します。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
              {[
                { industry: "飲食店", point: "メニュー・ブログはWP管理、フロントはNext.js", detail: "メニュー情報・スタッフブログ・お知らせをWordPress管理画面で更新しNext.jsで高速表示します。SEO記事もWPエディタで書けるため、担当者の運用負担を増やさずに高速化できます。" },
                { industry: "美容室・サロン", point: "お知らせ・スタッフ情報をWP管理", detail: "スタッフのプロフィール・施術メニュー・空き状況お知らせをWordPressのカスタム投稿で管理します。ACFで「得意なスタイル」「経験年数」などのカスタムフィールドも柔軟に設定できます。" },
                { industry: "建設・工務店", point: "施工事例をWP投稿で管理", detail: "施工事例はカスタム投稿タイプ「case」を作成し、工事種別・場所・使用材料などをACFで管理します。Next.jsフロントで洗練されたギャラリーデザインを実現しつつ、更新は管理画面だけで完結します。" },
                { industry: "不動産", point: "物件情報の定期更新とヘッドレス表示", detail: "物件情報カスタム投稿タイプで間取り・価格・所在地・画像を管理します。ISRで物件更新から数分以内に反映し、Next.jsフロントで高速かつSEOに強い物件一覧・詳細ページを構築できます。" },
                { industry: "学習塾・教育", point: "コラム・合格実績のWP管理", detail: "受験対策コラム・合格実績・講師紹介をWordPressで管理します。SEOコラムはYoast SEOプラグインで最適化しながら、フロントはNext.jsで高速表示・OGP自動生成を実装できます。" },
                { industry: "医療・クリニック", point: "お知らせ・医師情報のCMS管理", detail: "休診日・新着情報を管理者がWordPress管理画面で更新します。医師・スタッフ情報はカスタム投稿でACF管理し、Next.js側でSchemaマークアップ（MedicalOrganization）を実装します。" },
                { industry: "BtoB・製造", point: "製品情報・ホワイトペーパーのCMS管理", detail: "製品カタログ・技術資料・事例紹介をWordPressのカスタム投稿で管理します。ホワイトペーパーはPDFをメディアライブラリで管理し、Next.jsフロントでゲート付きダウンロードページを構築できます。" },
                { industry: "メディア・オウンドメディア", point: "記事コンテンツのWP×Next.js", detail: "大量の記事コンテンツをWordPress管理画面で効率的に運用しながら、Next.jsのISRで更新を高速反映します。カテゴリ・タグ・著者ページもAPIで取得してSEOに強い構成を実現します。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>{item.industry}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.point}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: 技術選定・実装フロー */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px" }}>
              技術選定・実装フロー
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "640px" }}>
              ヘッドレスWordPressの要件整理から本番公開・Webhook設定まで、10ステップで解説します。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                { n: "01", t: "要件整理（コンテンツ更新頻度・管理者スキル）", b: "更新頻度（日次・週次・月次）・管理者のITリテラシー・カスタム投稿タイプの必要数・フォーム要件などを整理します。これによりISRのrevalidate秒数やAPIの選定方針が決まります。" },
                { n: "02", t: "WordPress REST API or GraphQL（WPGraphQL）選定", b: "シンプルなサイトはWP REST API（追加プラグイン不要）を推奨します。複数の投稿タイプを一度に取得する・複雑なリレーションがある場合はWPGraphQLプラグインを導入してGraphQLで効率的に取得します。" },
                { n: "03", t: "Next.jsプロジェクト設定", b: "create-next-appで新規プロジェクトを作成し、TypeScript・Tailwind CSS・App Routerを有効化します。WordPressのAPIエンドポイントURL（WORDPRESS_API_URL）を環境変数に設定します。" },
                { n: "04", t: "WordPressからのデータ取得実装", b: "app/posts/[slug]/page.tsxなどでfetch関数を使ってWP REST APIから投稿データを取得します。generateStaticParamsで全スラッグを静的生成対象として登録します。" },
                { n: "05", t: "ISR設定（revalidate秒数）", b: "fetchオプションにnext: { revalidate: 60 }を設定することで、最大60秒ごとにページが再生成されます。更新頻度が低いページは3600（1時間）、頻繁に更新するページは30〜60秒に設定します。" },
                { n: "06", t: "カスタム投稿タイプ設計", b: "WordPress側でregister_post_typeを使って施工事例・スタッフ・物件などのカスタム投稿タイプを作成します。show_in_rest: trueを設定してREST APIで取得可能にします。" },
                { n: "07", t: "ACF（Advanced Custom Fields）連携", b: "ACFプラグインでカスタムフィールドを設定し、ACF to REST API（またはACF to WPGraphQL）プラグインでAPIから取得できるようにします。フロントエンドで動的にコンテンツを組み立てます。" },
                { n: "08", t: "画像最適化（next/image + WP Media）", b: "WP REST APIから取得した画像URLをnext/imageのsrcに渡します。next.config.jsのimages.remotePattersにWordPressドメインを追加することで最適化配信が有効になります。" },
                { n: "09", t: "Vercelデプロイ設定", b: "VercelにNext.jsプロジェクトを連携し、WORDPRESS_API_URLなどの環境変数をVercel EnvironmentsのProductionに設定します。デプロイ後にAPIからデータが正常取得できるか確認します。" },
                { n: "10", t: "WordPress側のWebhook設定", b: "WordPressのpost_updated・publish_postアクションフックでVercelのOn-Demand ISR APIへHTTPリクエストを送信します。これにより記事保存のほぼ即時にフロントエンドが自動更新されます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs & Metrics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px" }}>
              成果を見るための指標
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "640px" }}>
              ヘッドレスWordPress導入の効果を定量的に把握するための7つのKPIと確認場所を整理しました。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "ページ表示速度（WP直接比較）", b: "Google PageSpeed InsightsまたはWebPageTestで移行前後の速度を比較します。通常WordPressからのヘッドレス移行でLCP（最大コンテンツ描画）が50〜70%改善するケースが多くあります。" },
                { n: "02", t: "Lighthouseスコア（90+）", b: "Chrome DevToolsまたはPageSpeed InsightsでPerformance・SEO・Accessibility・Best Practicesの4項目を測定します。ヘッドレス+Vercel構成では全項目90+を目標とします。" },
                { n: "03", t: "CMS更新からの反映時間（ISR）", b: "WordPress管理画面で記事を更新してから、フロントエンドに反映されるまでの時間を計測します。ISRのrevalidate設定値と実際の反映時間を確認し、Webhook設定でほぼリアルタイム反映の実現を目指します。" },
                { n: "04", t: "WordPressセキュリティインシデント（0）", b: "WordPressの管理画面ログイン試行・不審なリクエストをサーバーログとセキュリティプラグイン（Wordfence等）で監視します。フロントエンドの静的化でインシデントリスクが低下することを定量的に確認します。" },
                { n: "05", t: "コンテンツ更新の非エンジニア対応率", b: "月次の更新作業のうちエンジニア依頼なしに担当者が完了した割合を記録します。ヘッドレス構成はWP管理画面が変わらないため、移行後も高い非エンジニア対応率を維持できます。" },
                { n: "06", t: "開発工数（移行後の保守）", b: "移行後の月次保守工数（プラグイン更新・フロントエンド依存パッケージ更新・不具合対応）を記録します。フロントとバックエンドの関心が分離されることで、デザイン変更がCMSに影響しない保守のしやすさを実感できます。" },
                { n: "07", t: "オーガニック流入数推移", b: "Google Search Consoleで移行前後のオーガニック検索クリック数・表示回数を比較します。Lighthouseスコア向上・Core Web Vitals改善がGoogle検索順位に与える影響を数ヶ月単位で追跡します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{ background: "#0d1b2a", padding: "72px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Get Started</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,28px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "16px" }}>
              WordPressの使いやすさを保ちながら高速化する
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9", marginBottom: "32px", maxWidth: "520px", margin: "0 auto 32px" }}>
              既存WordPressサイトのヘッドレス移行・新規ヘッドレスWP+Next.js制作をご相談ください。
            </p>
            <Link href="/contact" style={{ display: "inline-block", background: "#0F172A", color: "#FFFFFF", padding: "14px 40px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.05em", border: "1px solid rgba(196,184,154,0.4)", textDecoration: "none" }}>
              無料相談を申し込む
            </Link>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#F9F8F5" heading="ヘッドレスWordPressについてよくある質問" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="ヘッドレスWordPress制作のご相談" body="既存WordPressサイトのヘッドレス移行・新規ヘッドレスWP+Next.js制作をご相談ください。WordPressの使いやすさを保ちながら、速度とSEOを最大化します。" />
      </main>
      <Footer />
    </>
  );
}

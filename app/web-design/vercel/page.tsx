import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Vercelホスティング｜Next.jsサイトの最速デプロイとEdge Network活用｜株式会社サイプレス",
  description: "Next.jsと組み合わせて使うVercelホスティングの特徴・メリット。世界規模CDN・自動デプロイ・CI/CDパイプライン・プレビューデプロイ・Core Web Vitals分析・無料プランから使えるサーバーレスホスティング。",
  keywords: ["Vercel", "Vercelホスティング", "Next.js公開", "サーバーレスホスティング", "Edge Network", "CI/CD", "プレビューデプロイ", "Vercelデプロイ"],
  openGraph: {
    title: "Vercelホスティング｜Next.jsサイトの最速デプロイとEdge Network活用",
    description: "世界規模Edge CDN・GitHub自動デプロイ・無料SSL。Next.jsサイトの最適な公開環境Vercelの活用支援。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/vercel" },
};

const faqItems = [
  { q: "Vercelは無料で使えますか？", a: "はい。個人・小規模サイト向けの無料プランがあります。月間100GBの帯域幅・自動デプロイ・SSLなどが無料で利用できます。商用サイトや高トラフィックサイトにはProプラン（月$20〜）が必要です。" },
  { q: "VercelはWordPressにも使えますか？", a: "Vercelは静的サイト・Next.js・Reactに最適化されたホスティングです。WordPress（PHP）の直接ホスティングには対応していませんが、ヘッドレスWordPress（フロントエンドをNext.jsで構築）なら利用できます。" },
  { q: "Vercelのデプロイはどのくらい速いですか？", a: "GitHubにプッシュすると通常30秒〜2分でデプロイが完了します。プレビューURLが自動生成されるため、本番公開前の確認も簡単です。" },
  { q: "VercelでのSEOはどうですか？", a: "Vercelは高速なEdge Networkによる配信でCore Web Vitalsに有利です。SSL・HTTP/2・Gzip圧縮が標準で対応しており、SEOに必要なインフラ条件を満たしています。" },
  { q: "既存のサイトをVercelに移行できますか？", a: "Next.js・Nuxt・Astro・SvelteKitなどのフレームワークを使ったサイトはVercelへの移行が容易です。PHP・WordPressサイトの場合はフロントエンドの再構築が必要です。" },
  { q: "Vercelの日本語サポートはありますか？", a: "公式ドキュメントは英語が主ですが、コミュニティや解説記事は日本語でも豊富にあります。サイプレスではVercel導入・設定・トラブル対応を日本語でサポートします。" },
  { q: "Vercelのプレビュー機能はどう使いますか？", a: "GitHubのブランチにプッシュするたびに、そのブランチ専用のプレビューURLが自動生成されます。デザイン確認・機能テスト・クライアントへのレビュー依頼がURLを共有するだけで完了します。" },
  { q: "カスタムドメインの設定は難しいですか？", a: "VercelのダッシュボードでドメインURLを入力し、ドメイン管理会社のDNS設定にCNAMEまたはAレコードを追加するだけです。SSL証明書は自動発行されます。設定は通常10〜30分で完了します。" },
  { q: "環境変数はどこで管理しますか？", a: "Vercelのダッシュボード「Settings > Environment Variables」で管理します。本番・プレビュー・開発それぞれに異なる値を設定できます。コードにシークレットを直接書く必要がなく、セキュアに管理できます。" },
  { q: "Vercelのエッジ関数とはなんですか？", a: "Vercelのエッジ関数（Edge Functions）はCDNのエッジロケーションで実行されるサーバーレス関数です。通常のサーバーレス関数より起動が速く、認証・リダイレクト・A/Bテストなどをリクエストの近くで処理できます。" },
  { q: "デプロイに失敗した場合はどうなりますか？", a: "ビルドエラーが発生した場合、Vercelは自動的に直前の成功デプロイにロールバックします。本番サイトがダウンすることなく、エラーログをダッシュボードで確認して修正できます。" },
  { q: "Vercelでチーム開発はできますか？", a: "Proプラン以上でチーム機能が使えます。複数メンバーを招待し、デプロイ権限・環境変数の閲覧制限などを設定できます。SlackやDiscordへのデプロイ通知連携も可能です。" },
  { q: "Vercelはサーバーサイドレンダリング（SSR）に対応していますか？", a: "はい。Next.jsのSSR・SSG・ISRいずれにも対応しています。APIルートやServer Actionsもサーバーレス関数として自動デプロイされます。" },
  { q: "Vercel Analyticsは有料ですか？", a: "基本的なWeb Vitals（Core Web Vitals）の確認は無料プランでも利用できます。より詳細なリアルユーザーモニタリングはProプランで利用可能です。" },
  { q: "デプロイ時間を短縮する方法はありますか？", a: "Next.jsのキャッシュ設定を最適化する、不要な依存パッケージを削除する、Turbopackを採用するなどの方法があります。Vercelはビルドキャッシュを自動で活用するため、差分ビルドは高速です。" },
  { q: "Vercelとさくらインターネットの違いは？", a: "さくらインターネット等の共用サーバーはPHPなどのサーバーサイドアプリを動かすのに向いています。VercelはNext.js等のモダンフロントエンドに特化しており、自動デプロイ・Edge CDN・Web Vitals分析など開発生産性が大きく異なります。" },
  { q: "Vercelのダウンタイムはどれくらいですか？", a: "Vercelは99.99%以上の稼働率を目標とするSLAを提供しています。デプロイ中も現在稼働中のバージョンがリクエストに応答するため、デプロイによるダウンタイムはありません。" },
  { q: "GitHubリポジトリが非公開でも使えますか？", a: "はい。VercelはGitHubのPrivateリポジトリに対応しています。OAuth認証によりセキュアにリポジトリへアクセスします。GitLab・Bitbucketにも対応しています。" },
  { q: "Vercelの料金はどのくらいかかりますか？", a: "Hobbyプラン（個人）は無料、Proプランは月$20/ユーザー、Enterpriseプランはカスタム価格です。日本円での請求には対応していないため、クレジットカードでのUSD払いになります。サイプレスでは代理契約・管理も承ります。" },
  { q: "Vercel以外のホスティングと比較して何が違いますか？", a: "Netlify・AWS Amplify・Cloudflare Pagesと比較すると、VercelはNext.jsとの親和性と最適化が他を圧倒しています。Next.jsを使うなら開発元であるVercelのホスティングが最も安定した動作と最新機能を得られます。" },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の概要" },
  { href: "/web-design/nextjs", label: "Next.js制作", desc: "Next.jsでの開発" },
  { href: "/web-design/page-speed", label: "ページ速度改善", desc: "表示速度の最適化" },
  { href: "/web-design/headless-wordpress", label: "ヘッドレスWordPress", desc: "WP+Next.js構成" },
  { href: "/web-design/maintenance", label: "保守・メンテナンス", desc: "公開後の維持管理" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "企業サイト制作" },
  { href: "/web-design/seo-site", label: "SEO対応サイト制作", desc: "SEO特化制作" },
  { href: "/web-design/wordpress", label: "WordPress制作", desc: "通常のWordPress" },
  { href: "/web-design/lp", label: "LP制作", desc: "ランディングページ" },
  { href: "/web-design/renewal", label: "サイトリニューアル", desc: "既存サイトの刷新" },
  { href: "/web-design/responsive", label: "レスポンシブデザイン", desc: "スマホ対応デザイン" },
  { href: "/web-design/ec", label: "ECサイト制作", desc: "ネットショップ構築" },
  { href: "/web-design/design", label: "Webデザイン", desc: "デザイン制作" },
  { href: "/seo", label: "SEO対策", desc: "検索流入の改善" },
  { href: "/seo/technical", label: "テクニカルSEO", desc: "技術的なSEO対策" },
  { href: "/seo/content", label: "コンテンツSEO", desc: "コンテンツで集客" },
  { href: "/services", label: "サービス一覧", desc: "全サービスを見る" },
  { href: "/industry/restaurant", label: "飲食店向け制作", desc: "飲食業界の実績" },
  { href: "/industry/medical", label: "医療・クリニック向け", desc: "医療機関の制作" },
  { href: "/industry/btob", label: "BtoB企業向け", desc: "法人向けサイト" },
  { href: "/industry/beauty", label: "美容室・サロン向け", desc: "美容業界の制作" },
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
              <span style={{ color: "#0d1b2a" }}>Vercelホスティング</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Vercel Hosting</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              Vercelホスティング｜Next.jsの最速デプロイとEdge Network活用
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              VercelはNext.jsの開発元が提供するサーバーレスホスティングサービスです。GitHubと連携した自動デプロイ・世界規模CDN・Core Web Vitals分析など、高速でセキュアなWeb公開環境を提供します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "12px", maxWidth: "640px" }}>
              GitHubにコードをプッシュするだけでサイトが自動更新され、プレビューURLも自動発行されます。FTPでの手動アップロードや証明書の手動更新は不要です。
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_10_29.png" alt="Vercelホスティング" fill sizes="100vw" className="object-cover" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                GitHubにプッシュするだけで公開完了。<br />世界規模のCDNが、高速配信を自動実現します。
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
                "VercelとNext.jsの組み合わせが高速配信に強い理由",
                "従来の共用サーバーホスティングとVercelの具体的な違い",
                "GitHubを使ったCI/CDパイプライン・自動デプロイの仕組み",
                "プレビューデプロイを活用してレビュー・QAを効率化する方法",
                "飲食・美容・医療・BtoBなど業種別のVercel活用ポイント",
                "Vercel導入から本番公開までの10ステップの実装フロー",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", padding: "14px 0", borderTop: "1px solid #E8E4DC", alignItems: "flex-start" }}>
                  <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "16px", lineHeight: "1.6", flexShrink: 0 }}>→</span>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vercel vs Traditional Hosting */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.15em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Vercel vs Traditional Hosting</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "40px" }}>
              従来ホスティングとVercelの4つの違い
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "配信速度・インフラ", b: "共用サーバー：単一サーバーでの配信のため、アクセス集中時に遅くなる。Vercel：世界100か所以上のEdgeロケーションから最も近いサーバーが応答するため、常に高速配信。" },
                { t: "デプロイの手間", b: "従来：FTPでファイルをアップロード、または手動でSSH接続してコマンド実行が必要。Vercel：GitHubにpushするだけで自動ビルド・デプロイ完了。変更がリアルタイムで反映。" },
                { t: "SSL証明書の管理", b: "従来：SSL証明書を年次で取得・更新し、サーバーに設定する手間が発生。証明書切れのリスクも。Vercel：SSL証明書の発行・更新が自動化。設定不要で常時HTTPS。" },
                { t: "スケーリング", b: "共用サーバー：アクセス急増時にサーバーが落ちるリスクがあり、プランアップグレードが必要。Vercel：サーバーレスアーキテクチャにより自動スケーリング。突発的なアクセス増加にも対応。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#FFFFFF", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Key Benefits</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              Vercelを使うメリット
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "世界規模のEdge Networkによる高速配信", b: "Vercelは世界100か所以上のEdgeロケーションからコンテンツを配信します。日本のユーザーには日本に近いサーバーから応答するため、表示速度が大幅に向上します。" },
                { n: "02", t: "CI/CDパイプライン（GitHub自動デプロイ）", b: "GitHubにコードをプッシュすると自動でビルド・テスト・デプロイが実行されます。本番環境への反映が数分で完了し、開発フローが効率化されます。" },
                { n: "03", t: "プレビューURL機能", b: "ブランチごとにプレビューURLが自動生成されます。デザイン確認・クライアントレビュー・テストが本番環境に影響なく行えます。" },
                { n: "04", t: "Vercel Analytics・Speed Insights", b: "リアルユーザーのCore Web VitalsデータをVercelのダッシュボードで確認できます。LCP・CLS・INPの問題を発見して改善できます。" },
                { n: "05", t: "自動SSL・HTTP/2対応", b: "HTTPS証明書の取得・更新が自動化されています。HTTP/2によりリクエストの多重化が可能になり、表示速度が改善します。" },
                { n: "06", t: "無料プランから始められる", b: "個人・スモールビジネスは無料プランで十分な機能を利用できます。トラフィックが増えた段階でProプランにアップグレードする柔軟な運用が可能です。" },
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
              Vercel導入前に多くのチームが直面する課題をまとめました。各課題の背景を理解することで、Vercelが解決策になる理由が見えてきます。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                { n: "01", t: "サーバー設定が複雑でデプロイできない", b: "従来のサーバーはnginx・Apache・node.jsのプロセス管理など多くの設定が必要です。Vercelはフレームワークを自動検出してビルド設定を提案するため、インフラ知識がなくても公開できます。" },
                { n: "02", t: "本番環境のダウンタイムが心配", b: "手動デプロイや不安定なサーバーでは更新中にサイトが落ちるリスクがあります。Vercelはアトミックデプロイ方式を採用しており、デプロイ中も常に安定したバージョンがリクエストを処理します。" },
                { n: "03", t: "開発環境と本番環境の差が大きい", b: "ローカルで動くのに本番でエラーになる「環境差分」は開発あるあるです。Vercelのプレビューデプロイは本番と同じ環境でテストできるため、環境差分によるバグを事前に発見できます。" },
                { n: "04", t: "CI/CDパイプラインの設定が難しい", b: "GitHub ActionsやJenkinsなどでCI/CDを組むには設定ファイルの記述・シークレット管理・デプロイスクリプトなど多くの作業が必要です。VercelはGitHubリポジトリを連携するだけでCI/CDが自動構築されます。" },
                { n: "05", t: "カスタムドメイン設定方法が分からない", b: "ドメイン購入後のDNS設定・SSL証明書取得・サーバーへの適用はつまずきやすいポイントです。VercelはダッシュボードでドメインURLを入力するとDNS設定の手順が表示され、SSL証明書は自動発行されます。" },
                { n: "06", t: "環境変数の管理が煩雑", b: "APIキーやデータベース接続情報をコードに直書きするとセキュリティリスクが生じます。VercelのEnvironment Variables機能で本番・プレビュー・開発ごとに安全に管理でき、チームでの共有も簡単です。" },
                { n: "07", t: "プレビューデプロイの活用方法が分からない", b: "「本番に上げる前に確認したい」というニーズはあっても、環境構築コストで断念するケースがあります。VercelはプッシュのたびにプレビューURLを自動生成するため、ゼロコストでレビュー環境が手に入ります。" },
                { n: "08", t: "Vercelの料金体系が分からない", b: "Hobby（無料）・Pro（$20/月）・Enterprise（カスタム）の3プランがあります。個人や小規模サイトは無料で始めて、チーム開発や商用サービスはProプランへ移行するのが一般的なパターンです。" },
                { n: "09", t: "チームでの開発・デプロイフローが確立していない", b: "複数人が異なるブランチで作業するとデプロイのコンフリクトや意図しない本番反映が起きやすくなります。Vercelはブランチごとのプレビュー環境とマージ時の本番デプロイフローを自動で提供します。" },
                { n: "10", t: "エッジ関数の使い方が分からない", b: "Edge FunctionsはサーバーレスよりもさらにCDNのエッジで動くため、レイテンシを最小化できます。認証処理・リダイレクト・A/Bテストなど「ユーザーに最も近い場所で動かしたい処理」に最適です。" },
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
              Vercelの自動デプロイ・プレビュー機能・Edge Networkは業種ごとに異なる価値を生み出します。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
              {[
                { industry: "飲食店", point: "メニュー更新・予約ページのゼロダウンタイムデプロイ", detail: "昼営業中でも深夜に仕込んだメニュー変更をプッシュするだけで公開できます。アトミックデプロイのため更新中の表示崩れが起きません。" },
                { industry: "美容室・サロン", point: "施術写真更新のCI/CD自動化", detail: "Instagramで撮影した施術写真をCMSに追加するだけでサイトへの反映が自動化されます。スタッフが月次で更新するフローを整備できます。" },
                { industry: "歯科・クリニック", point: "診療情報の安定配信とSLA保証", detail: "診療時間・休診日・医師情報などは患者が最も参照する情報です。VercelのEdge Networkにより高稼働率・高速配信で信頼性の高い情報提供が実現します。" },
                { industry: "建設・工務店", point: "施工事例の定期追加とプレビュー確認", detail: "新しい施工事例をプレビューURLでクライアントに確認してもらい、OKが出たらマージして本番公開する承認フローを導入できます。" },
                { industry: "BtoB・SaaS", point: "ステージング環境でのQAフロー確立", detail: "本番・ステージング・開発の3環境をVercelのブランチ戦略で管理できます。大型アップデート前にステージングで十分なQAを実施してから本番リリースするフローが整います。" },
                { industry: "EC・ネットショップ", point: "セール・キャンペーンの即時デプロイ", detail: "セールバナーやキャンペーンページを事前にプレビューで確認し、開始時刻にマージしてワンクリックで本番公開できます。タイムセールへの即応性が向上します。" },
                { industry: "メディア・ブログ", point: "記事公開の自動化とプレビュー確認", detail: "CMS（Contentful・Notion等）での記事作成→Vercelへの自動デプロイ→プレビューURLで確認という効率的なパブリッシュフローを構築できます。" },
                { industry: "学習塾・教育", point: "授業資料・動画の安定配信", detail: "資料PDF・授業動画リンクなどを定期更新するサイトでも、Vercelの高稼働率と高速配信により生徒・保護者への安定したコンテンツ提供が可能です。" },
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
              Vercelでのサイト公開から運用設定まで、10ステップの具体的な実装フローを解説します。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                { n: "01", t: "Vercelアカウント作成", b: "vercel.comにアクセスしGitHub・GitLab・Bitbucketアカウントでサインアップします。Hobbyプランは無料で利用でき、クレジットカード不要です。" },
                { n: "02", t: "GitHubリポジトリ連携", b: "「New Project」からGitHubリポジトリを選択します。パブリック・プライベートリポジトリ両方に対応。初回連携時にOAuth認証を行います。" },
                { n: "03", t: "プロジェクト設定（フレームワーク・ビルドコマンド）", b: "Vercelが自動でNext.jsを検出し、ビルドコマンド（next build）・出力ディレクトリを設定します。カスタムスクリプトがある場合は手動で上書き設定できます。" },
                { n: "04", t: "環境変数設定", b: "APIキー・データベースURL・シークレットなどをSettings > Environment Variablesで設定します。Production・Preview・Developmentそれぞれに異なる値を設定可能です。" },
                { n: "05", t: "カスタムドメイン設定", b: "Settings > DomainsでドメインURLを追加します。Vercelが表示するCNAMEまたはAレコードをドメイン管理会社のDNS設定に追加します。反映は通常数分〜数時間で完了します。" },
                { n: "06", t: "SSL証明書自動発行確認", b: "カスタムドメインのDNSが反映されると、Vercelが自動でLet's Encrypt証明書を発行します。ダッシュボードで「Valid Configuration」と表示されれば完了です。" },
                { n: "07", t: "プレビューデプロイ設定", b: "mainブランチ以外のプッシュで自動プレビューURLが生成されます。必要に応じてブランチごとのデプロイ設定や、特定ブランチのみを本番デプロイする設定をカスタマイズします。" },
                { n: "08", t: "チームメンバー招待", b: "Settings > Team MembersでメールアドレスまたはGitHubアカウントを招待します。権限はOwner・Member・Viewerから選択でき、Proプラン以上で複数メンバーの管理が可能です。" },
                { n: "09", t: "デプロイ通知設定（Slack連携等）", b: "Settings > IntegrationsからSlack・Discord・Webhookを設定します。デプロイ成功・失敗・プレビュー生成のタイミングでチームへ通知が届くよう設定します。" },
                { n: "10", t: "Analytics・Web Vitals監視設定", b: "Analytics・Speed Insightsタブを有効化します。リアルユーザーのLCP・CLS・INP・TTFBデータが収集され始め、パフォーマンス改善のベースラインとして活用できます。" },
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
              Vercel導入の効果を定量的に把握するための7つのKPIと確認場所を整理しました。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "デプロイ時間", b: "Vercelダッシュボードの「Deployments」タブで各デプロイの所要時間を確認できます。通常30秒〜2分を目標とし、ビルド時間が増加した場合はキャッシュ設定や依存関係を見直します。" },
                { n: "02", t: "ページ読み込み速度（Edge Network経由）", b: "Vercel Speed InsightsまたはGoogle PageSpeed Insightsで測定します。Vercelのグローバル配信により従来比で30〜60%の改善が期待できます。" },
                { n: "03", t: "サイト稼働率", b: "Vercel Statusページ（status.vercel.com）とVercel Analyticsのエラーレートで監視します。99.99%以上の稼働率がVercelのSLA目標値です。" },
                { n: "04", t: "Core Web Vitals（Vercel Analytics）", b: "Vercel Speed InsightsでLCP・CLS・INPのリアルユーザーデータを確認します。LCP 2.5秒以内・CLS 0.1以下・INP 200ms以下を目標とします。" },
                { n: "05", t: "デプロイ頻度", b: "Vercelダッシュボードのデプロイ履歴で週次・月次のデプロイ回数を確認します。CI/CDが機能しているかの定量指標になり、頻繁なデプロイが開発速度の向上を示します。" },
                { n: "06", t: "プレビューデプロイ活用率", b: "プルリクエストに対してプレビューURLをレビューに活用している割合をGitHubのPR履歴から確認します。活用率が高いほどレビュー品質とデプロイの安全性が向上します。" },
                { n: "07", t: "TTFB（Time to First Byte）", b: "Vercel Speed Insightsまたは Chrome DevTools の「Network」タブで計測します。Edge Networkからの配信ではTTFB 100ms以下が目安で、サーバーサイドの処理速度改善の指標になります。" },
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
              Next.js + Vercelでの高速サイト制作を相談する
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9", marginBottom: "32px", maxWidth: "520px", margin: "0 auto 32px" }}>
              Vercel構成のWebサイト制作・既存サイトのVercel移行をサポートします。まずはお気軽にご相談ください。
            </p>
            <Link href="/contact" style={{ display: "inline-block", background: "#0F172A", color: "#FFFFFF", padding: "14px 40px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.05em", border: "1px solid rgba(196,184,154,0.4)", textDecoration: "none" }}>
              無料相談を申し込む
            </Link>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#F9F8F5" heading="Vercelホスティングについてよくある質問" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="Vercel構成のWebサイト制作ご相談" body="Next.js+Vercel構成でのWebサイト制作・既存サイトのVercel移行をご支援します。高速・SEO対応・自動デプロイの開発環境をご相談ください。" />
      </main>
      <Footer />
    </>
  );
}

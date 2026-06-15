import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Vercelホスティング｜Next.jsサイトの高速公開｜株式会社サイプレス",
  description: "Next.jsと組み合わせて使うVercelホスティングの特徴・メリット。世界規模CDN・自動デプロイ・Core Web Vitals分析・無料プランから使えるサーバーレスホスティング。",
  keywords: ["Vercel", "Vercelホスティング", "Next.js公開", "サーバーレスホスティング", "Edge Network"],
  openGraph: {
    title: "Vercelホスティング｜Next.jsサイトの高速公開",
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
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の概要" },
  { href: "/web-design/nextjs", label: "Next.js制作", desc: "Next.jsでの開発" },
  { href: "/web-design/page-speed", label: "ページ速度改善", desc: "表示速度の最適化" },
  { href: "/web-design/headless-wordpress", label: "ヘッドレスWordPress", desc: "WP+Next.js構成" },
  { href: "/web-design/maintenance", label: "保守・メンテナンス", desc: "公開後の維持管理" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "企業サイト制作" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談はこちら" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", gap: "6px", alignItems: "center" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/web-design" style={{ color: "#6B7280" }}>ホームページ制作</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>Vercelホスティング</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Vercel Hosting</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              Vercelホスティング｜Next.jsの最適な公開環境
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              VercelはNext.jsの開発元が提供するサーバーレスホスティングサービスです。GitHubと連携した自動デプロイ・世界規模CDN・Core Web Vitals分析など、高速でセキュアなWeb公開環境を提供します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "12px", maxWidth: "640px" }}>
              GitHubにコードをプッシュするだけでサイトが自動更新され、プレビューURLも自動発行されます。FTPでの手動アップロードや証明書の手動更新は不要です。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_10_29.png" alt="Vercelホスティング" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                GitHubにプッシュするだけで公開完了。<br />世界規模のCDNが、高速配信を自動実現します。
              </p>
            </div>
          </div>
        </section>

        {/* 従来ホスティングとの比較 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Vercel vs Traditional Hosting</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
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
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Key Benefits</p>
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
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", minWidth: "28px", fontWeight: 700 }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#f8f6f2" heading="Vercelホスティングについてよくある質問" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="Vercel構成のWebサイト制作ご相談" body="Next.js+Vercel構成でのWebサイト制作・既存サイトのVercel移行をご支援します。高速・SEO対応・自動デプロイの開発環境をご相談ください。" />
      </main>
      <Footer />
    </>
  );
}

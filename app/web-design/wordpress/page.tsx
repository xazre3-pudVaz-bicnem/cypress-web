import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "WordPress制作｜CMS対応の高品質なWebサイト制作｜株式会社サイプレス",
  description:
    "WordPress制作の専門ガイド。担当者が更新できるCMS型Webサイト・SEO対応・高速化・セキュリティ対策まで解説。コーポレートサイト・SEOブログ・採用サイトに対応。東京都葛飾区を拠点に全国対応。",
  keywords: ["WordPress制作", "ワードプレス制作", "CMS制作", "WordPress開発", "WordPress SEO", "ホームページ制作"],
  openGraph: {
    title: "WordPress制作｜CMS対応の高品質なWebサイト制作｜株式会社サイプレス",
    description: "WordPress制作のガイド。CMS対応・SEO・高速化・セキュリティ対策まで解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/wordpress" },
};

const faqItems = [
  {
    q: "WordPressとNext.jsのどちらが向いていますか？",
    a: "自社スタッフが記事・ページを頻繁に更新したい・ブログ運用を重視したい・更新コストを下げたいという場合はWordPressが向いています。表示速度・セキュリティ・パフォーマンスを最優先する・エンジニアが対応できるという場合はNext.jsが向いています。ご要件に合わせてご提案します。",
  },
  {
    q: "WordPressのSEO対策はどこまでできますか？",
    a: "Yoast SEO等のプラグインを活用したメタデータ最適化、XML Sitemap自動生成、構造化データ実装（JSON-LD）、パーマリンク設計、表示速度最適化（画像圧縮・キャッシュ・CDN設定）まで一貫して対応します。テーマ設計段階からSEOを考慮したコーディングを行います。",
  },
  {
    q: "WordPressのセキュリティ対策は必要ですか？",
    a: "はい、WordPressはシェアが高いためサイバー攻撃のターゲットになりやすいです。定期的なコアアップデート・プラグインアップデート・定期バックアップ・ログイン制限・WAF設定が最低限必要です。サイプレスでは月次保守プランでこれらの対応を代行します。",
  },
  {
    q: "テーマはどうしますか？カスタムテーマを制作してもらえますか？",
    a: "はい、デザイン要件に応じてカスタムテーマを制作します。既製テーマ（Cocoon・SWELL・GeneratePress等）のカスタマイズも対応します。SEO・パフォーマンス・保守性を考慮したテーマ設計を行います。テーマ選定のご相談からも対応します。",
  },
  {
    q: "制作後の保守・更新対応はありますか？",
    a: "月次保守プランを提供しています。コアアップデート・プラグインアップデート・定期バックアップ・セキュリティ監視・軽微なテキスト修正の対応を行います。また追加ページの制作・デザイン修正も別途承ります。",
  },
  {
    q: "既存のWordPressサイトのリニューアルも依頼できますか？",
    a: "はい、既存WordPressサイトのリニューアル（デザイン刷新・テーマ変更・SEO改善）に対応しています。現在のSEO評価を引き継ぎながら新デザインに移行するための設計を行います。リニューアル時のドメイン変更・URL変更の際の301リダイレクト設定も対応します。",
  },
  {
    q: "WordPressの表示速度が遅い場合はどうすればいいですか？",
    a: "WordPressの表示速度改善には、①画像の最適化（WebP変換・サイズ調整）、②キャッシュプラグインの設定（WP Super Cache・W3 Total Cache等）、③不要なプラグインの整理、④CDNの導入（Cloudflare等）、⑤ホスティングの見直し（VPS・専用サーバーへの移行）が主な施策です。現状診断からご対応します。",
  },
  {
    q: "WordPressサイトのGoogleアナリティクス・Search Console設定も依頼できますか？",
    a: "はい、Google Analytics 4・Google Search Consoleの設置・設定、Googleタグマネージャーの導入も対応します。制作後のデータ計測体制の整備まで一貫してサポートします。",
  },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Webサイト制作の基礎" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "WordPress型企業サイト" },
  { href: "/web-design/seo-site", label: "SEO特化サイト制作", desc: "WordPressとSEOの組み合わせ" },
  { href: "/web-design/service-site", label: "サービスサイト制作", desc: "WordPressでのLP制作" },
  { href: "/support/wordpress", label: "WordPress保守サポート", desc: "アップデート・バックアップ管理" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サイプレスの制作サービス" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "WordPress SEO対策" },
  { href: "/cost/web-design", label: "Web制作の費用", desc: "WordPress制作の料金目安" },
  { href: "/guide/how-to-choose-web-design-company", label: "Web制作会社の選び方", desc: "WordPress対応会社の選定" },
  { href: "/checklist/web-design", label: "Web制作チェックリスト", desc: "WordPress制作の確認項目" },
  { href: "/area/tokyo", label: "東京のWeb制作", desc: "東京エリアのWordPress制作" },
  { href: "/contact", label: "無料相談", desc: "WordPress制作のご相談" },
];

export default function WordpressPage() {
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
              <span style={{ color: "#0F172A" }}>WordPress制作</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>WordPress</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              WordPress制作
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              WordPressは世界のWebサイトの40%以上で使用されているCMS（コンテンツ管理システム）です。担当者が管理画面から記事・ページを更新できる点が最大の強みで、ブログ運用・ニュース更新・コンテンツSEOに適しています。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              サイプレスでは、SEO・パフォーマンス・セキュリティを考慮したWordPressサイトを制作します。カスタムテーマ制作・既製テーマのカスタマイズ・既存サイトのリニューアルまで対応しています。
            </p>
          </div>
        </section>

        <section className="relative" style={{ height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="WordPress制作・CMS・コンテンツ管理システムのイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* WordPress選択の課題 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Common Mistakes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              WordPress制作で失敗する4つのよくあるミス
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "テーマを設定するだけで終わる", b: "既製テーマを購入して設置するだけでは、SEO設定・パフォーマンス最適化・セキュリティ対策が不十分なままです。Webサイトとして機能させるには適切なカスタマイズが必要です。" },
                { t: "プラグインを入れすぎる", b: "便利だからと多数のプラグインをインストールすると表示速度が低下し、プラグイン同士の競合やセキュリティリスクが増加します。最低限必要なプラグインに絞ることが重要です。" },
                { t: "セキュリティ設定を後回しにする", b: "WordPressは世界シェアが高いためサイバー攻撃のターゲットになりやすいです。ログインURL変更・2段階認証・定期バックアップなどの設定を最初から行う必要があります。" },
                { t: "SSL・キャッシュ・CDNを設定しない", b: "HTTPS化・ブラウザキャッシュ・CDN設定をしないままでは表示速度が遅くSEO評価も低くなります。これらはWordPressでの標準的な設定として最初から行うべき項目です。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WordPress制作の特徴 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Key Features</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのWordPress制作の特徴
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "SEOに強いWordPress構築", body: "パーマリンク設計・メタデータ最適化・XML Sitemap・構造化データ（JSON-LD）・表示速度最適化まで、SEOのベストプラクティスを組み込んだWordPressを構築します。Yoast SEO等の優秀なSEOプラグインも活用します。" },
                { title: "カスタムテーマ制作・デザイン", body: "既製テーマに縛られない、ブランドに合ったカスタムテーマを制作します。デザインの自由度が高く、コーポレートサイト・採用サイト・サービスサイトなど様々な用途に対応します。" },
                { title: "パフォーマンス最適化", body: "画像WebP変換・キャッシュ設定・不要プラグイン排除・CDN設定により、WordPressでも高いパフォーマンス（Lighthouse 80点以上）を実現します。" },
                { title: "セキュリティ対策の標準実装", body: "ログイン制限・CAPTCHA・ファイル編集禁止・不要なユーザーロール削除・SSL設定など、WordPressのセキュリティ設定を標準で実施します。" },
                { title: "担当者向けの操作マニュアル", body: "制作完了後、自社スタッフが更新できるよう操作マニュアルをご提供します。記事の追加・修正方法・画像のアップロード方法などを図解で説明します。" },
                { title: "月次保守プランのご提供", body: "WordPressコア・テーマ・プラグインの月次アップデート、定期バックアップ、セキュリティ監視を行う月次保守プランを提供しています。更新漏れによるセキュリティリスクを防ぎます。" },
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

        <FaqSection items={faqItems} heading="WordPress制作についてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="WordPress制作のご相談"
          body="CMS対応のWebサイト制作から保守サポートまでトータルでご支援します。"
        />
      </main>
      <Footer />
    </>
  );
}

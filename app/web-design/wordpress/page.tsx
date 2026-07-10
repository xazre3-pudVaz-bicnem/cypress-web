import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "WordPress制作・カスタマイズ｜管理しやすく高速なWordPressサイト制作｜株式会社サイプレス",
  description:
    "WordPress制作・カスタマイズの専門ガイド。テーマ選定・セキュリティ対策・高速化・SEO設定・既存サイトリニューアルまで解説。飲食・美容室・歯科・建設・士業・不動産など業種別対応。東京都葛飾区を拠点に全国対応。",
  keywords: [
    "WordPress制作",
    "ワードプレス制作",
    "CMS制作",
    "WordPress開発",
    "WordPress SEO",
    "WordPress高速化",
    "WordPressカスタマイズ",
    "WordPressセキュリティ",
    "ホームページ制作",
  ],
  openGraph: {
    title: "WordPress制作・カスタマイズ｜管理しやすく高速なWordPressサイト制作｜株式会社サイプレス",
    description:
      "WordPress制作・カスタマイズの専門ガイド。テーマ選定・セキュリティ・高速化・SEO設定まで解説。業種別の活用ポイントと制作フローも紹介。",
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
    a: "はい、デザイン要件に応じてカスタムテーマを制作します。既製テーマ（Cocoon・SWELL・Snow Monkey・GeneratePress等）のカスタマイズも対応します。SEO・パフォーマンス・保守性を考慮したテーマ設計を行います。テーマ選定のご相談からも対応します。",
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
    a: "WordPressの表示速度改善には、①画像の最適化（WebP変換・サイズ調整）、②キャッシュプラグインの設定（WP Rocket・WP Super Cache等）、③不要なプラグインの整理、④CDNの導入（Cloudflare等）、⑤ホスティングの見直し（VPS・専用サーバーへの移行）が主な施策です。現状診断からご対応します。",
  },
  {
    q: "WordPressサイトのGoogleアナリティクス・Search Console設定も依頼できますか？",
    a: "はい、Google Analytics 4・Google Search Consoleの設置・設定、Googleタグマネージャーの導入も対応します。制作後のデータ計測体制の整備まで一貫してサポートします。",
  },
  {
    q: "WordPressに不正アクセスやウイルス感染が発生した場合はどう対応しますか？",
    a: "感染が確認された場合は、バックアップからの復元・マルウェアの除去・脆弱なプラグインの特定・パスワードの全変更・WAF導入を行います。事後対応より事前のセキュリティ設定が重要なため、制作時点での設定を推奨しています。",
  },
  {
    q: "Yoast SEOやAll in One SEOの設定を代行してもらえますか？",
    a: "はい、SEOプラグインの初期設定（サイトマップ・メタデータ・構造化データ）の代行が可能です。各ページのtitleタグ・descriptionの最適化についても合わせてご対応します。",
  },
  {
    q: "WordPressのバージョンアップ後にサイトが壊れました。修復できますか？",
    a: "はい、バックアップが存在する場合は復元対応が可能です。プラグインの競合・テーマの非互換が主な原因です。月次保守プランでは更新前にステージング環境での確認を行い、本番環境への影響を最小化しています。",
  },
  {
    q: "WooCommerceを使ったEC機能の追加はできますか？",
    a: "はい、WooCommerceを使った商品管理・カート・決済機能の実装が可能です。決済方法（クレジットカード・銀行振込・コンビニ支払い）の設定・配送設定・商品登録サポートまで対応します。",
  },
  {
    q: "WordPress制作の費用感を教えてください。",
    a: "既製テーマを活用したシンプルなコーポレートサイトで30〜60万円程度、カスタムテーマ制作を含む本格的なサイトで60〜150万円程度が目安です。ページ数・機能要件・カスタマイズ内容によって変わりますので、ご要件をお聞きした上でお見積りします。",
  },
  {
    q: "WordPress制作の期間はどのくらいかかりますか？",
    a: "要件定義から納品まで、シンプルなコーポレートサイトで4〜8週間、機能が多いサイトや大規模なサイトで8〜16週間が目安です。コンテンツのご準備状況によっても変わります。",
  },
  {
    q: "操作マニュアルはもらえますか？担当者が更新できるようになりますか？",
    a: "はい、制作完了後に操作マニュアルをPDF形式でご提供します。記事の追加・修正・画像アップロードの手順を図解で説明します。また、オンラインでの操作レクチャー（60分程度）も実施します。",
  },
  {
    q: "マルチサイト構成（複数サイトを1つのWordPressで管理）にも対応できますか？",
    a: "はい、WordPress Multisiteを活用したマルチサイト構成に対応しています。グループ企業・複数ブランドのサイトを一元管理したい場合にご提案できます。",
  },
  {
    q: "サーバー・ドメインの手配もお願いできますか？",
    a: "はい、サーバー（エックスサーバー・ConoHa WING・さくらのVPS等）とドメインの選定・手配のサポートが可能です。既にお持ちのサーバー・ドメインへのインストール対応も行います。",
  },
  {
    q: "Gutenberg（ブロックエディタ）に対応していますか？",
    a: "はい、Gutenbergブロックエディタに完全対応したテーマ設計・カスタムブロック開発が可能です。担当者が直感的にページを編集できる環境を構築します。",
  },
  {
    q: "WordPressからNext.jsへの移行を検討していますが、相談できますか？",
    a: "はい、WordPressからNext.js（またはヘッドレスCMS構成）への移行相談に対応しています。コンテンツ移行・URLの引き継ぎ・リダイレクト設計まで含めたご提案が可能です。",
  },
  {
    q: "バックアップはどのように取っていますか？",
    a: "UpdraftPlus等のバックアッププラグインを使い、データベースとファイルを定期的（週次または日次）に外部ストレージ（Google Drive・Amazon S3等）へ自動保存する設定を行います。月次保守プランに含まれています。",
  },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Webサイト制作の基礎知識" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "WordPress型企業サイト" },
  { href: "/web-design/seo-site", label: "SEO特化サイト制作", desc: "WordPressとSEOの組み合わせ" },
  { href: "/web-design/service-site", label: "サービスサイト制作", desc: "WordPressでのLP制作" },
  { href: "/web-design/landing-page", label: "ランディングページ制作", desc: "CV重視のWordPress LP" },
  { href: "/web-design/ec-site", label: "ECサイト制作", desc: "WooCommerceによるEC構築" },
  { href: "/web-design/renewal", label: "サイトリニューアル", desc: "既存WordPressの刷新" },
  { href: "/web-design/blog", label: "ブログ・オウンドメディア制作", desc: "WordPressブログ運用" },
  { href: "/web-design/nextjs", label: "Next.js制作", desc: "WordPressからの移行先" },
  { href: "/web-design/headless-cms", label: "ヘッドレスCMS制作", desc: "WordPress APIとの連携" },
  { href: "/support/wordpress", label: "WordPress保守サポート", desc: "アップデート・バックアップ管理" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サイプレスの制作サービス一覧" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "WordPress SEO対策" },
  { href: "/services/security", label: "セキュリティ対策", desc: "WordPressセキュリティ強化" },
  { href: "/cost/web-design", label: "Web制作の費用", desc: "WordPress制作の料金目安" },
  { href: "/guide/how-to-choose-web-design-company", label: "Web制作会社の選び方", desc: "WordPress対応会社の選定" },
  { href: "/checklist/web-design", label: "Web制作チェックリスト", desc: "WordPress制作の確認項目" },
  { href: "/industry/restaurant", label: "飲食業のWeb制作", desc: "WordPressによるメニュー更新" },
  { href: "/industry/beauty", label: "美容室のWeb制作", desc: "スタッフ・予約情報の更新" },
  { href: "/industry/clinic", label: "クリニックのWeb制作", desc: "医療機関のWordPress活用" },
  { href: "/industry/construction", label: "建設業のWeb制作", desc: "施工事例の定期追加" },
  { href: "/industry/real-estate", label: "不動産のWeb制作", desc: "物件情報の頻繁な更新" },
  { href: "/area/tokyo", label: "東京のWeb制作", desc: "東京エリアのWordPress制作" },
  { href: "/contact", label: "無料相談", desc: "WordPress制作のご相談" },
];

export default function WordpressPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/web-design" style={{ color: "#6B7280" }} className="hover:underline">Web制作</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>WordPress制作</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>WordPress</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              WordPress制作・カスタマイズ
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              WordPressは世界のWebサイトの40%以上で使用されているCMS（コンテンツ管理システム）です。担当者が管理画面から記事・ページを更新できる点が最大の強みで、ブログ運用・ニュース更新・コンテンツSEOに適しています。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              サイプレスでは、SEO・パフォーマンス・セキュリティを考慮したWordPressサイトを制作します。カスタムテーマ制作・既製テーマのカスタマイズ・既存サイトのリニューアルから、速度改善・セキュリティ強化まで幅広く対応しています。
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative" style={{ height: "300px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_20_52.jpg"
            alt="WordPress制作・CMS・コンテンツ管理システムのイメージ"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-0">
              {[
                "WordPressが向いているサイト・向いていないサイトの違いと選定基準",
                "WordPress制作でよくある失敗・課題とその根本原因",
                "業種ごとのWordPress活用ポイントと具体的な運用イメージ",
                "サイプレスが行うWordPress制作の10ステップフロー",
                "制作後に成果を確認するための具体的なKPI指標",
                "セキュリティ・速度・SEOを同時に満たすWordPress構築の考え方",
              ].map((text, i) => (
                <div key={i} className="flex gap-4 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="shrink-0 font-bold text-[14px]" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{text}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Issues</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  title: "WordPressが重くてページが遅い",
                  body: "プラグインの過多・画像の最適化不足・キャッシュ未設定が主な原因です。共有サーバーのリソース制限も影響するため、WP Rocketの導入やサーバーグレードアップが有効な対策になります。",
                },
                {
                  title: "プラグインが多すぎてセキュリティリスクが高い",
                  body: "更新が止まった古いプラグインや、類似機能を持つプラグインの重複導入が脆弱性の温床になります。必要最小限のプラグインに整理し、定期的なアップデートを習慣化することが重要です。",
                },
                {
                  title: "テーマのカスタマイズが難しく思い通りのデザインにならない",
                  body: "既製テーマはカスタマイズの自由度に限界があり、CSS上書きによる対応はメンテナンス性が低下します。要件に応じてカスタムテーマ制作またはブロックテーマへの移行を検討すべきです。",
                },
                {
                  title: "不正アクセス・ウイルス感染のリスクがある",
                  body: "WordPressのシェアの高さがサイバー攻撃の標的になりやすい理由です。ログインURLの変更・2段階認証・WAF導入・定期バックアップの4点を最低限実施することでリスクを大幅に低減できます。",
                },
                {
                  title: "WordPressのバージョンアップでサイトが壊れた",
                  body: "テーマやプラグインの非互換によりコアアップデート後に表示崩れや機能停止が発生することがあります。ステージング環境での事前確認と更新前のフルバックアップが必須の対策です。",
                },
                {
                  title: "管理画面が使いにくく担当者が更新できない",
                  body: "初期設定のままでは担当者にとって不要な機能が多く、操作に迷うことがあります。役割ごとの権限設定・Gutenbergの活用・操作マニュアルの整備で更新のハードルを下げることができます。",
                },
                {
                  title: "既存WordPressサイトのデザインを刷新したい",
                  body: "長年使用したテーマの見た目が古くなり、モバイル対応も不十分なケースがあります。SEOの引き継ぎ（URLの維持・301リダイレクト設定）に配慮しながら新テーマへ移行する計画が必要です。",
                },
                {
                  title: "スマートフォンで表示崩れが多い",
                  body: "古いテーマやプラグインのCSSがモバイルビューポートに対応していないことが原因です。レスポンシブ対応のテーマへの移行とモバイルファーストのCSS設計で解消できます。",
                },
                {
                  title: "SEOプラグイン（Yoast / AIOSEO）の設定方法が分からない",
                  body: "インストールだけでは効果が出ません。サイトマップの送信設定・各ページのtitleとdescriptionの最適化・構造化データの有効化まで設定して初めて機能します。初期設定の代行も対応可能です。",
                },
                {
                  title: "WordPressからNext.jsへの移行を検討中",
                  body: "表示速度とセキュリティの限界を感じてヘッドレス構成への移行を検討するケースが増えています。コンテンツの移行先選定・URL引き継ぎ・開発コストの試算をご相談ベースで進めることが可能です。",
                },
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

        {/* WordPress制作の特徴（existing, moved after Section B) */}
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

        {/* Section C: 業種別の活用ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の活用ポイント
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "#E8E4DC" }}>
              {[
                {
                  industry: "飲食店",
                  point: "メニュー・お知らせ更新が簡単",
                  detail: "カスタム投稿タイプでメニューを管理し、担当者が画像とテキストを差し替えるだけで更新が完結します。季節メニューの差し替えや臨時休業のお知らせも管理画面から即時反映できます。",
                },
                {
                  industry: "美容室",
                  point: "スタッフ情報・予約ページの更新",
                  detail: "スタッフプロフィールや担当メニューの更新を自社で行えます。予約システム（LINE予約・ホットペッパー誘導）との連携ボタン設置も対応し、集客導線を整えます。",
                },
                {
                  industry: "歯科・クリニック",
                  point: "お知らせ・ブログの自社更新",
                  detail: "診療時間の変更・休診日のお知らせ・医療コラムの追加を院内スタッフが行えます。E-E-A-Tを意識した専門性の高いコンテンツ更新がSEOにも貢献します。",
                },
                {
                  industry: "建設・リフォーム",
                  point: "施工事例の定期追加",
                  detail: "施工事例をカスタム投稿タイプで管理し、工種・エリア・予算などでフィルタリングできる一覧ページを構築します。定期的な事例追加がSEOとCVの両方に効果的です。",
                },
                {
                  industry: "士業（弁護士・税理士等）",
                  point: "ブログ・コラムの継続執筆",
                  detail: "専門分野のコラム更新を自社で継続することで、専門性の高いオーガニック流入を獲得できます。カテゴリ設計・内部リンク設計を制作時から意識した構成を組みます。",
                },
                {
                  industry: "不動産",
                  point: "物件情報の頻繁な更新",
                  detail: "物件情報を専用カスタム投稿で管理し、間取り・価格・エリアで絞り込める検索機能を実装します。更新頻度が高い業種のため、管理画面の使いやすさを特に重視して設計します。",
                },
                {
                  industry: "学習塾・スクール",
                  point: "合格実績・ブログ更新",
                  detail: "合格実績・講師紹介・授業風景ブログを自社更新できます。季節ごとのキャンペーン情報やイベント告知の更新も担当者が対応できる構成にします。",
                },
                {
                  industry: "EC（物販・通販）",
                  point: "WooCommerceによる商品管理",
                  detail: "WooCommerceを活用した商品登録・在庫管理・注文管理が可能です。クレジットカード・コンビニ・銀行振込など複数の決済方法に対応し、物販の売上拡大をサポートします。",
                },
              ].map((item, i) => (
                <div key={i} style={{ background: "#FFFFFF", padding: "28px 24px" }}>
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-2" style={{ color: "#c4b89a" }}>{item.industry}</p>
                  <p className="font-bold text-[15px] mb-3" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.point}</p>
                  <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: 制作・実装フロー */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Production Flow</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              制作・実装フロー
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  title: "現状WordPress診断",
                  body: "既存サイトがある場合は速度・セキュリティ・SEO・プラグイン構成を診断します。Lighthouse・GTmetrix・WPScan等を用いて現状の課題を数値で把握し、改善方針を定めます。",
                },
                {
                  title: "目的・要件整理（更新頻度 / 機能 / 予算）",
                  body: "更新頻度・担当者のITリテラシー・必要な機能（ブログ・お知らせ・フォーム・EC等）・予算・納期を整理します。要件の優先度を明確にすることで制作コストを最適化します。",
                },
                {
                  title: "テーマ選定（カスタムテーマ / Cocoon / Snow Monkey等）",
                  body: "デザイン要件・更新のしやすさ・SEO対応状況を考慮して最適なテーマを選定します。デザイン自由度が高い場合はカスタムテーマ、コスト優先の場合は優秀な国産テーマ（Cocoon・Snow Monkey等）を活用します。",
                },
                {
                  title: "プラグイン選定（SEO / セキュリティ / バックアップ）",
                  body: "SEO（Yoast SEO・All in One SEO）・セキュリティ（Wordfence・SiteGuard）・バックアップ（UpdraftPlus）・キャッシュ（WP Rocket）など、目的ごとに信頼性の高いプラグインを厳選します。",
                },
                {
                  title: "デザインカスタマイズ",
                  body: "Figmaでワイヤーフレーム・デザインカンプを制作し、承認後にテーマへ実装します。ブランドカラー・フォント・余白設計をそろえ、モバイルファーストで全デバイスの表示を確認します。",
                },
                {
                  title: "コンテンツ移行",
                  body: "既存サイトのテキスト・画像・記事データを新環境へ移行します。XMLエクスポート・インポート機能を活用し、URLの変更が生じる場合は301リダイレクトを設定してSEO評価を引き継ぎます。",
                },
                {
                  title: "SEO設定（Yoast / 構造化データ）",
                  body: "SEOプラグインの初期設定・各ページのtitle・description設定・XMLサイトマップの送信・構造化データ（JSON-LD）の実装を行います。Google Search Consoleへの登録・確認も実施します。",
                },
                {
                  title: "セキュリティ設定（WAF / IP制限）",
                  body: "ログインURL変更・ブルートフォース攻撃対策・ファイルパーミッション設定・WAF有効化・管理画面へのIP制限を設定します。SSL証明書の自動更新設定も確認します。",
                },
                {
                  title: "速度最適化（キャッシュ / 画像圧縮）",
                  body: "WP Rocketによるページキャッシュ・CSSとJSの結合圧縮・画像のWebP変換・遅延読み込み・Cloudflare CDN設定を行います。目標はモバイルLighthouseスコア70点以上です。",
                },
                {
                  title: "納品・管理画面操作説明",
                  body: "本番環境への移行・DNS切り替え後、担当者向けに管理画面の操作説明（オンライン60分）と操作マニュアル（PDF）をご提供します。納品後のフォロー期間（30日間）も設けています。",
                },
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

        {/* Section E: 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  kpi: "ページ表示速度（WP Rocket等導入後）",
                  detail: "GTmetrix・PageSpeed Insights でLCP（最大コンテンツの描画）を2.5秒以内、FCP（最初のコンテンツ描画）を1.8秒以内を目標とします。WP Rocketや画像最適化の効果を導入前後で比較します。",
                },
                {
                  kpi: "Lighthouseスコア",
                  detail: "Chromeデベロッパーツールで測定します。パフォーマンス・アクセシビリティ・ベストプラクティス・SEOの4項目すべてで70点以上、可能な場合は80点以上を目標とします。",
                },
                {
                  kpi: "セキュリティインシデント数（目標: 0件）",
                  detail: "Wordfenceや SiteGuard のログで不正ログイン試行・マルウェア検出件数を月次で確認します。インシデントゼロを目標にWAFとバックアップ体制を維持します。",
                },
                {
                  kpi: "バックアップ実行頻度",
                  detail: "UpdraftPlus等のバックアップログで定期実行を確認します。月次保守プランでは週次バックアップを基本とし、外部ストレージへの保存成功を毎回記録します。",
                },
                {
                  kpi: "プラグイン最新化率",
                  detail: "WordPress管理画面のアップデート通知を確認し、コア・テーマ・プラグインのアップデート適用率を100%維持することを目標とします。古いプラグインが脆弱性の原因となるため月次で対応します。",
                },
                {
                  kpi: "コンテンツ更新頻度",
                  detail: "Google Search Consoleのインデックス状況やGA4のセッション数を参考に、ブログ・お知らせの更新が月次・週次で継続されているかを確認します。更新頻度はSEO評価にも影響します。",
                },
                {
                  kpi: "月間オーガニック流入数",
                  detail: "GA4のチャネル別セッション数でオーガニック検索からの流入を毎月モニタリングします。SEO設定・コンテンツ更新・サイトマップ送信の複合効果として流入数の増加傾向を確認します。",
                },
                {
                  kpi: "問い合わせ・CV数",
                  detail: "GA4のコンバージョン設定（フォーム送信・電話タップ・LINE遷移）で月次のCV数を計測します。WordPressのContact Form 7やWPFormsと連携したトラッキングを設定します。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.kpi}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Common Mistakes (dark section, preserved from original) */}
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

        <FaqSection items={faqItems} heading="WordPress制作についてよくある質問" bgColor="#F9F8F5" />
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

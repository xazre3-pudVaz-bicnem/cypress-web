import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "スマートフォン対応・モバイルフレンドリー化｜レスポンシブデザインとモバイルUX改善｜株式会社サイプレス",
  description: "スマートフォン対応・モバイルフレンドリー化のWeb制作。レスポンシブデザイン・Core Web Vitals最適化・タップ操作設計・モバイルUX改善で離脱率を下げCVRを向上します。",
  keywords: ["スマートフォン対応", "モバイルフレンドリー", "レスポンシブデザイン", "モバイルファースト", "モバイルUX改善", "Core Web Vitals"],
  openGraph: {
    title: "スマートフォン対応・モバイルフレンドリー化｜レスポンシブデザインとモバイルUX改善",
    description: "レスポンシブデザイン・Core Web Vitals最適化・タップ操作設計でモバイルからの集客・CVRを改善します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/mobile-friendly" },
};

const faqItems = [
  { q: "レスポンシブデザインとスマートフォン専用サイトはどちらがいいですか？", a: "現在はレスポンシブデザイン（1つのURLで全デバイス対応）が推奨されます。スマートフォン専用サイト（m.example.com等）はURL分離・SEO重複・管理の複雑さなどのデメリットがあり、Googleも推奨していません。" },
  { q: "既存のPCサイトをスマートフォン対応にできますか？", a: "はい。既存サイトのコードを修正してレスポンシブ化する方法と、スマートフォンビューのCSSを追加する方法があります。サイトの規模・構造によって対応方法と費用が異なりますので、まず現状確認からご相談ください。" },
  { q: "スマートフォン対応していないとSEOにどう影響しますか？", a: "Googleのモバイルファーストインデックスにより、スマートフォン対応していないサイトはSEO評価が低くなります。また、スマートフォンユーザーの離脱率が上がることで間接的にも順位に影響します。" },
  { q: "スマートフォン対応の制作費用はどのくらいですか？", a: "新規制作の場合は最初からレスポンシブで設計するため追加費用は発生しません。既存サイトの改修の場合はサイト規模によりますが、10〜50万円程度が目安です。まず無料診断でお見積りします。" },
  { q: "スマートフォン対応後の確認方法は？", a: "Googleのモバイルフレンドリーテスト・Google Search Consoleのモバイルユーザビリティレポート・実機での確認（iPhone・Android複数機種）を組み合わせて確認します。" },
  { q: "Googleのモバイルファーストインデックスとは何ですか？", a: "Googleがサイトを評価する際に、PCではなくスマートフォン版のコンテンツを基準とするインデックスの方式です。2023年以降、全サイトがモバイルファーストインデックス対象となっています。" },
  { q: "タッチ操作に特有の注意点はありますか？", a: "ボタンのサイズ（44×44px以上）・クリック可能要素の間隔（8px以上）・スワイプとスクロールの区別・ホバー演出のタップ代替などがスマートフォン特有の注意点です。" },
  { q: "Core Web Vitalsとは何ですか？", a: "GoogleがSEOの評価指標としているページ体験の指標です。LCP（最大コンテンツの読み込み時間・2.5秒以内目標）・CLS（レイアウトの安定性・0.1以下目標）・FID/INP（操作への応答速度）の3つが主な指標です。" },
  { q: "モバイルでのCVRを改善するにはどうすればいいですか？", a: "CTAボタンのサイズ・配置の最適化・フォームの入力項目削減・電話番号のタップtoコール設定・ページ読み込み速度の改善が主な施策です。現状の離脱ポイントをヒートマップで分析してから対策を立てます。" },
  { q: "ハンバーガーメニューの設計で気をつけることは？", a: "開閉のアニメーション・階層の深さ・メニュー項目数・フォントサイズが重要です。階層が深すぎると迷子になるため、2階層以内を推奨しています。重要な導線はフッターにも配置します。" },
  { q: "スマートフォンでの画像表示を最適化するにはどうすればいいですか？", a: "next/imageコンポーネントを使用することで、デバイスの画面サイズに合わせた最適な画像サイズを自動配信できます。WebP形式への変換・遅延読み込み（Lazy Load）も自動で対応します。" },
  { q: "フォームのモバイル最適化とは何をしますか？", a: "入力フィールドのサイズ拡大・キーボードタイプの最適化（数字入力フィールドにはnumericキーボードを表示）・エラーメッセージの見やすい配置・入力中の横スクロール防止などを実施します。" },
  { q: "スマートフォンでのページ速度を改善するには？", a: "画像のWebP変換・遅延読み込み・不要なJavaScriptの削除・フォントの最適化・キャッシュ設定が主な施策です。LighthouseのモバイルスコアをベースにボトルネックをPr特定して対応します。" },
  { q: "レスポンシブ化の工数はどのくらいかかりますか？", a: "サイトの規模・現状のコード品質・CMSの種類によって大きく異なります。シンプルな10ページ以内のサイトであれば1〜2週間、大規模なサイトは1〜3ヶ月かかる場合もあります。" },
  { q: "モバイルとPCで表示するコンテンツを変えてもいいですか？", a: "基本的にはPCとスマートフォンで同じコンテンツを表示することをGoogleは推奨しています。CSSで表示・非表示を切り替えることは問題ありませんが、重要なコンテンツをスマートフォンで非表示にするのは避けてください。" },
  { q: "スマートフォン対応の検証はどんなデバイスで行いますか？", a: "実機確認はiPhone（最新モデル・1〜2世代前）・Android（Google Pixel・Samsung Galaxy）を使用します。これに加えてChrome DevToolsのエミュレーション・Google Mobile-Friendly Testで確認します。" },
  { q: "モバイルユーザビリティエラーとは何ですか？", a: "Google Search Consoleに表示されるモバイル表示の問題です。クリック可能な要素が近すぎる・テキストが小さすぎる・ビューポートが設定されていない・コンテンツが画面幅より広いなどのエラーがあります。" },
  { q: "モバイルファーストで設計するとはどういう意味ですか？", a: "デザイン・コーディングの順番としてスマートフォン画面を先に設計し、後からPC用のレイアウトを追加していく考え方です。Tailwind CSSのブレイクポイントではデフォルトがモバイル、`md:` `lg:`でPC用スタイルを追加します。" },
  { q: "AMP（Accelerated Mobile Pages）対応は必要ですか？", a: "現在はAMPの重要性が以前より低下しており、Core Web Vitalsを通常ページで達成できれば十分です。AMPは実装・管理コストが高い割に効果が限定的なため、基本的には推奨していません。" },
  { q: "モバイル対応後、どのくらいで効果が出ますか？", a: "Core Web Vitalsの改善はGoogleの再クロール後（通常数週間〜1ヶ月）にSEOに反映されます。UX改善によるCVR向上は公開直後から数値に現れ始めることがあります。Analyticsで継続的にモニタリングします。" },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の概要" },
  { href: "/web-design/page-speed", label: "ページ速度改善", desc: "表示速度の最適化" },
  { href: "/web-design/maintenance", label: "保守・メンテナンス", desc: "継続的なサイト管理" },
  { href: "/web-design/nextjs", label: "Next.js制作", desc: "Next.jsでの開発" },
  { href: "/web-design/wordpress", label: "WordPress制作", desc: "WordPress制作" },
  { href: "/web-design/contact-form", label: "フォーム最適化", desc: "モバイルフォーム設計" },
  { href: "/web-design/lp", label: "LP制作", desc: "ランディングページ" },
  { href: "/web-design/renewal", label: "サイトリニューアル", desc: "既存サイトの刷新" },
  { href: "/web-design/vercel", label: "Vercelホスティング", desc: "高速CDN配信" },
  { href: "/web-design/cms", label: "CMS導入", desc: "コンテンツ管理システム" },
  { href: "/seo", label: "SEO対策", desc: "検索エンジン最適化" },
  { href: "/seo/mobile-seo", label: "モバイルSEO", desc: "スマートフォンSEO" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "技術的なSEO改善" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域ビジネスのSEO" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
  { href: "/services/seo", label: "SEOサービス", desc: "SEO支援" },
  { href: "/services/consulting", label: "Webコンサルティング", desc: "戦略立案" },
  { href: "/industry/restaurant", label: "飲食店Web制作", desc: "飲食業界の実績" },
  { href: "/industry/beauty", label: "美容室Web制作", desc: "美容業界の実績" },
  { href: "/industry/clinic", label: "クリニックWeb制作", desc: "医療・歯科の実績" },
  { href: "/industry/construction", label: "建設・リフォームWeb制作", desc: "建設業界の実績" },
  { href: "/industry/real-estate", label: "不動産Web制作", desc: "不動産業界の実績" },
  { href: "/blog", label: "Web制作ブログ", desc: "最新情報・ノウハウ" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談はこちら" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#F9F8F5" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", marginBottom: "24px", display: "flex", gap: "6px", alignItems: "center" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <Link href="/web-design" style={{ color: "#6B7280" }}>ホームページ制作</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>スマートフォン対応</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Mobile First Design</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              スマートフォン対応・モバイルフレンドリー化
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              Web検索の6割以上がスマートフォンから行われる現在、モバイル対応はサイト制作の最優先事項です。レスポンシブデザインとモバイルUXの最適化で、どのデバイスでも快適に使えるサイトを制作します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "12px", maxWidth: "640px" }}>
              Googleのモバイルファーストインデックスでは、スマートフォン版のコンテンツがSEO評価の基準になります。PCとスマートフォンで同等の情報量・品質を提供することが集客の前提条件です。
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_03.png" alt="スマートフォン対応Web制作" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                検索の6割はスマートフォンから。<br />モバイル最適化なしでは、集客の半分以上を失う。
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
            <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "モバイル未対応サイトがSEOと集客に与える具体的なダメージ",
                "レスポンシブデザインとスマートフォン専用サイトの違いと選択基準",
                "Core Web Vitalsのモバイル指標とその改善方法",
                "業種ごとに異なるモバイルUXの設計ポイント",
                "モバイルフレンドリー化の実際の対応フローと確認方法",
                "効果測定に使うKPIと計測ツールの活用方法",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "15px", flexShrink: 0, marginTop: "2px" }}>→</span>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Risks dark section */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Risks of Non-Responsive</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              スマートフォン未対応サイトが失う4つの機会
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "直帰率の急上昇", b: "スマートフォンで横スクロールが発生したり文字が小さすぎたりすると、ユーザーは数秒で離脱します。直帰率の上昇はSEO評価にも間接的に影響します。" },
                { t: "Googleの評価低下", b: "モバイルファーストインデックスにより、スマートフォン対応していないサイトはSEO評価が下がります。検索順位が落ちることで、毎日の集客機会が失われます。" },
                { t: "集客機会の喪失", b: "検索流入の6割以上がスマートフォンからです。スマートフォン非対応サイトは、この大多数の潜在顧客に「見づらい」「使いにくい」という印象を与えています。" },
                { t: "ブランド信頼の低下", b: "スマートフォンで見づらいサイトは「古い会社」「テクノロジーに疎い会社」という印象を与えます。高品質なサービスを提供していても、Webの見た目で信頼を損なうことがあります。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Problems & Causes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              よくある課題と原因
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                { t: "スマホで見るとレイアウトが崩れる", b: "PCを前提に固定幅（px）で設計されたサイトをそのままスマートフォンで表示すると、要素がはみ出したり重なったりします。CSSにメディアクエリが設定されていないか、設定が不十分なことが主な原因です。" },
                { t: "テキストが小さすぎて読めない", b: "PCで読みやすい12〜13pxのテキストはスマートフォンで見ると非常に小さく見えます。ブラウザが自動で文字を拡大することがありますが、それがレイアウトのズレを引き起こすこともあります。" },
                { t: "ボタンが小さくてタップしにくい", b: "PCではマウスカーソルで正確にクリックできますが、スマートフォンでは指でタップするため44px以上のタップ領域が必要です。小さなボタンはタップミスを誘発しCVRを低下させます。" },
                { t: "スマホでのページ表示が遅い", b: "PC向けに最適化された大きな画像・複数のJavaScriptファイル・未使用のCSSが読み込まれることで、モバイル回線環境での表示が遅くなります。LighthouseのモバイルスコアがPC比で大幅に低いケースが多いです。" },
                { t: "ハンバーガーメニューが使いにくい", b: "メニューが開閉しない・開いてもリンクがタップできない・メニューが画面外にはみ出すなどの問題がよく起きます。JavaScriptの実装ミスやz-indexの設定誤りが主な原因です。" },
                { t: "画像がはみ出る・圧縮されていない", b: "max-width: 100%の設定がない画像は親要素からはみ出して横スクロールを引き起こします。また、PC向けの大きな画像をそのまま表示するとデータ量が多くなり読み込み速度に悪影響を与えます。" },
                { t: "フォームがスマホで入力しにくい", b: "入力フィールドが小さすぎる・スクロールしないと送信ボタンに届かない・キーボードが表示されると画面が切れてフィールドが見えなくなるなどの問題がCVRを大きく下げます。" },
                { t: "モバイルでのCVが低い", b: "PCとモバイルのCVRを比較するとモバイルが大幅に低いケースがあります。ページ速度・タップUI・フォームの使いにくさ・CTAの視認性が複合的に影響していることが多く、ヒートマップ分析が有効です。" },
                { t: "Google Search ConsoleにモバイルUsabilityエラーが出ている", b: "「クリック可能な要素が近すぎます」「テキストが小さすぎて読めません」などのエラーは放置するとモバイルインデックスでの評価に影響します。定期的なSearch Consoleの確認と対応が必要です。" },
                { t: "PCデザインをそのままスマホに押し込んでいる", b: "PCで4カラムのグリッドをスマートフォンでそのまま表示したり、横幅いっぱいの表をそのまま表示したりするケースです。スマートフォン用のレイアウト変更を加えることで大幅にUXが改善します。" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation items */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              スマートフォン対応の実装方針
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "レスポンシブデザイン（Flexbox・Grid・Tailwind CSS）", b: "CSSのFlexbox・Grid・メディアクエリを使って、画面幅に応じてレイアウトが自動調整されるレスポンシブデザインを実装します。Tailwind CSSによる効率的な実装で高品質なレスポンシブを実現します。" },
                { n: "02", t: "文字サイズ・行間・余白のモバイル最適化", b: "スマートフォンでの読みやすさを優先した文字サイズ（16px以上）・行間（1.7〜1.9）・ボタン間の余白を確保します。PCとスマートフォンで適切なサイズに自動調整します。" },
                { n: "03", t: "タップターゲットの最小サイズ確保", b: "ボタン・リンク・メニューアイテムは指でタップできる最小サイズ（44×44px以上）を確保します。Googleのモバイルユーザビリティガイドラインに準拠した実装です。" },
                { n: "04", t: "横スクロールの完全排除", b: "すべてのコンテンツが画面幅内に収まるよう設計します。表・画像・埋め込みコンテンツなどで横スクロールが発生しないよう詳細に対応します。" },
                { n: "05", t: "画像サイズの最適化（next/image）", b: "next/imageコンポーネントによりスマートフォンの画面解像度・サイズに応じた最適な画像を自動配信します。不必要に大きな画像を読み込まないため表示速度が大幅に改善します。" },
                { n: "06", t: "モバイルフォームの操作性向上", b: "入力フォームのフィールドサイズ・キーボードタイプの最適化・エラーメッセージの表示位置など、スマートフォンでのフォーム操作を細部まで最適化します。" },
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

        {/* Section C: 業種別の活用ポイント */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Industry Use Cases</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              業種別の活用ポイント
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "0" }}>
              {[
                { industry: "飲食店", point: "スマホで地図・電話タップがすぐできる", detail: "「店舗を見つけてすぐ電話・予約」という行動パターンに合わせ、電話番号のタップtoコール・Googleマップへの誘導ボタンをファーストビューに配置します。営業時間・メニューも1スクロール以内で見えるレイアウトにします。" },
                { industry: "美容室", point: "Instagram連携・写真重視のモバイルUI", detail: "施術事例写真のスワイプギャラリー・Instagramフィードの埋め込み・スタイリストへの指名予約ボタンをモバイルファーストで設計します。写真の読み込み速度最適化も重要です。" },
                { industry: "歯科・クリニック", point: "予約・地図・電話への即時アクセス", detail: "症状が出たとき・初めて行くときに「すぐ電話できる」「場所がわかる」「診療時間が確認できる」この3つをモバイルのファーストビューに収めます。Web予約ボタンも目立つ位置に配置します。" },
                { industry: "建設・リフォーム", point: "施工事例写真のモバイル最適化", detail: "Before/Afterの比較写真・施工プロセスの写真は横スワイプで閲覧できるスライダーが効果的です。写真のWebP化と遅延読み込みで、画像が多くても速い表示速度を維持します。" },
                { industry: "士業（弁護士・税理士等）", point: "相談フォームへのスムーズな誘導", detail: "悩みを持ったユーザーが「相談してみようか」と思ったときにすぐフォームにたどり着けるよう、相談フォームへのCTAをスクロール追従の固定ボタンとして設置します。フォームはスマホで入力しやすく最適化します。" },
                { industry: "不動産", point: "物件写真のスワイプ操作", detail: "物件詳細ページの写真はスワイプで次の写真に移れるカルーセルUIが必須です。地図・間取り・設備情報のモバイル表示最適化と、問い合わせ・来場予約への簡単な導線設計が成約率に影響します。" },
                { industry: "学習塾", point: "資料請求・体験申込の簡便化", detail: "スマートフォンで資料請求・体験授業申込ができるよう、フォームの入力項目を最小化します。保護者が子どものそばでスマートフォン操作している状況を想定し、素早く完了できる設計にします。" },
                { industry: "EC・通販", point: "商品選択・決済のモバイル最適化", detail: "商品一覧のグリッド表示・カートへの追加ボタンサイズ・決済フォームのモバイル入力最適化が売上に直結します。Apple Pay・Google Payなどのモバイル決済への対応も検討します。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", borderTop: "1px solid #E8E4DC", borderRight: i % 2 === 0 ? "1px solid #E8E4DC" : "none" }}>
                  <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: "6px", textTransform: "uppercase" }}>{item.industry}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "10px" }}>{item.point}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: 対応・実装フロー */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              対応・実装フロー
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                { t: "現状のモバイル表示確認（実機・Chrome DevTools）", b: "iPhone・Androidの実機複数台とChrome DevToolsのエミュレーションで現状の表示を確認します。横スクロール・文字の小ささ・タップしにくいUI・レイアウト崩れを記録します。" },
                { t: "Google Mobile-Friendly Testの実施", b: "GoogleのMobile-Friendly Testで各ページの評価を確認します。合否だけでなく、具体的な問題点のリストが表示されるため、修正箇所の特定に活用します。" },
                { t: "Lighthouse モバイルスコア測定", b: "Chrome DevToolsのLighthouseでパフォーマンス・SEO・アクセシビリティのモバイルスコアを測定します。各項目のスコアと改善提案を確認し、優先度をつけます。" },
                { t: "問題箇所のリストアップ", b: "実機確認・Mobile-Friendly Test・Lighthouseの結果を統合して問題箇所一覧を作成します。影響度（CVRへの影響・SEOへの影響）と修正コストで優先順位をつけます。" },
                { t: "レスポンシブブレイクポイント設計", b: "スマートフォン（〜767px）・タブレット（768〜1023px）・PC（1024px〜）のブレイクポイントを設計します。各画面幅でのレイアウト変更方針をワイヤーフレームで確認します。" },
                { t: "タップターゲットサイズ確認（44px以上）", b: "ボタン・リンク・ナビゲーション要素のサイズを44×44px以上に拡大します。要素間の間隔も8px以上確保し、誤タップが起きにくいUIに修正します。" },
                { t: "フォント・行間の最適化", b: "本文フォントサイズを16px以上・行間を1.7〜1.9に設定します。見出しのサイズはPCより小さく設定し、スマートフォン画面内に適切に収まるよう調整します。" },
                { t: "画像のWebP化・遅延読み込み", b: "既存のJPEG・PNG画像をWebP形式に変換し、ファイルサイズを削減します。スクロールしないと見えない画像には遅延読み込みを設定し、初期表示速度を改善します。" },
                { t: "フォームのモバイルUX改善", b: "入力フィールドのサイズ拡大・適切なinputtype設定（tel・email・number等）・エラーメッセージの視認性改善・送信ボタンのサイズ拡大を実施します。" },
                { t: "公開後のCore Web Vitals確認", b: "公開後にPageSpeed InsightsでモバイルのCore Web Vitals（LCP・INP・CLS）を測定します。Google Search ConsoleのCore Web Vitalsレポートで実際のユーザーデータも確認します。" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
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
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs & Metrics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              成果を見るための指標
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                { kpi: "Lighthouse モバイルスコア", target: "90+目標", where: "Chrome DevTools / PageSpeed Insights", desc: "パフォーマンス・アクセシビリティ・SEOのモバイルスコアを定期的に測定します。スコアが下がった場合は追加したプラグインや画像が原因であることが多く、特定して改善します。" },
                { kpi: "Core Web Vitals モバイル（LCP・INP・CLS）", target: "LCP 2.5秒以内 / CLS 0.1以下", where: "PageSpeed Insights / Search Console", desc: "LCP（最大コンテンツの読み込み時間）・CLS（レイアウトの安定性）・FID/INP（応答速度）の3指標をモバイルで測定します。いずれも「良好」範囲に入ることを目標にします。" },
                { kpi: "モバイルCVR", target: "PCのCVR比80%以上", where: "Google Analytics（セグメント分割）", desc: "スマートフォンからの問い合わせ・資料請求・予約などのコンバージョン率を、PCとセグメント別に比較します。差が大きい場合はモバイルUXに改善余地があります。" },
                { kpi: "モバイル直帰率", target: "改善前比10ポイント以上低下", where: "Google Analytics（デバイスセグメント）", desc: "スマートフォンからのアクセスのうち、1ページだけ見て離脱した割合です。高い直帰率はページ速度・コンテンツの関連性・UXの問題を示しています。" },
                { kpi: "モバイル平均滞在時間", target: "改善前比20%以上向上", where: "Google Analytics（デバイスセグメント）", desc: "スマートフォンユーザーがサイト内で過ごす平均時間です。短い場合は読みにくさ・コンテンツの関連性・速度の問題が疑われます。改善後の比較で効果を測定します。" },
                { kpi: "Google Search ConsoleのモバイルUXエラー数", target: "0件目標", where: "Google Search Console（ページエクスペリエンス）", desc: "「クリック可能な要素が近すぎます」「テキストが小さすぎて読めません」などのモバイルエラー件数をゼロにすることを目標とします。月次で確認します。" },
                { kpi: "モバイルトラフィック比率", target: "推移のモニタリング", where: "Google Analytics（デバイスカテゴリ）", desc: "全アクセスに占めるスマートフォンからのアクセスの割合を把握します。モバイル比率が高いサイトほどモバイル最適化の優先度が高く、改善効果も大きくなります。" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "4px" }}>
                      <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a" }}>{item.kpi}</p>
                      <span style={{ fontSize: "12px", fontWeight: 600, color: "#c4b89a", letterSpacing: "0.05em" }}>{item.target}</span>
                    </div>
                    <p style={{ fontSize: "11px", color: "#9CA3AF", marginBottom: "6px" }}>計測場所: {item.where}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#FFFFFF" heading="スマートフォン対応についてよくある質問" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="スマートフォン対応制作のご相談" body="新規のスマートフォン対応サイト制作・既存サイトのモバイルフレンドリー化改修をご相談ください。現状のモバイル表示を無料で診断し、改善提案を行います。" />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ホームページ保守・メンテナンス｜セキュリティ・更新・バックアップ｜株式会社サイプレス",
  description: "Webサイトの保守・管理サービス。WordPressセキュリティ対策・定期バックアップ・プラグイン更新・コンテンツ更新・月次レポートで安心して使えるサイトを維持します。",
  keywords: ["ホームページ保守", "Web保守", "WordPress保守", "メンテナンス", "セキュリティ対策", "バックアップ", "サイト管理"],
  openGraph: {
    title: "ホームページ保守・メンテナンス｜セキュリティ・更新・バックアップ",
    description: "WordPressセキュリティ対策・定期バックアップ・プラグイン更新・コンテンツ更新で継続的なサイト運用を支援します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/maintenance" },
};

const faqItems = [
  { q: "保守・メンテナンスの月額費用はどのくらいですか？", a: "内容によりますが、基本的なセキュリティ監視・バックアップ・CMS更新で月額1〜3万円程度が目安です。コンテンツ更新・SEOレポートを含む場合は3〜8万円程度になります。まずは現状のサイト診断を無料で実施し、必要な保守内容をご提案します。" },
  { q: "保守契約なしで放置するとどうなりますか？", a: "WordPressプラグインの脆弱性放置によるハッキングリスク、バックアップなしでのデータ消失リスク、古い情報が表示されることによるユーザー信頼低下などが発生する可能性があります。保守なしのサイトは時間とともにリスクが積み重なります。" },
  { q: "コンテンツの更新（ブログ・お知らせ）も依頼できますか？", a: "はい。月次のブログ記事作成・お知らせ更新・スタッフ紹介の追加などのコンテンツ更新も対応しています。AIを活用して効率的に制作し、SEOを意識したコンテンツをご提供します。" },
  { q: "サイトがハッキングされた場合も対応してもらえますか？", a: "保守契約の内容によります。マルウェア除去・脆弱性対応・バックアップからの復旧を含む緊急対応オプションも提供しています。ハッキング後の対応は通常の保守より費用・時間がかかるため、予防的な保守契約を推奨しています。" },
  { q: "Next.jsで作ったサイトの保守も対応できますか？", a: "はい。Next.js・Vercel構成のサイトの保守に対応しています。依存パッケージの更新・セキュリティ脆弱性の対応・コンテンツ更新をサポートします。WordPressとは異なる保守内容になりますので、お気軽にご相談ください。" },
  { q: "他社が制作したサイトの保守を引き継いでもらえますか？", a: "はい。他社制作のサイトの保守引き継ぎに対応しています。まず現状のサイト状態（セキュリティ・バックアップ状況・プラグインバージョンなど）を診断してから対応内容をご提案します。引き継ぎに際して追加の初期費用が発生する場合があります。" },
  { q: "月次レポートはどんな内容が含まれますか？", a: "アクセス数の推移・検索順位の変動・実施した保守内容・翌月の対応予定を月次レポートとしてご報告します。Google AnalyticsとSearch Consoleのデータを合わせてご共有し、改善提案も盛り込みます。" },
  { q: "保守プランにWordPressのバージョンアップは含まれますか？", a: "はい。Wordpressコア・テーマ・プラグインのバージョンアップはすべての保守プランに含まれています。更新前にステージング環境でテストを行い、サイトへの影響を確認してから本番環境に適用します。" },
  { q: "バックアップはどのくらいの頻度で取りますか？", a: "プランによりますが、データベースは日次・ファイルは週次のバックアップが標準です。重要な更新前には手動バックアップも実施します。バックアップデータはクラウドストレージに30日分以上保管します。" },
  { q: "SSL証明書の更新も保守に含まれますか？", a: "はい。SSL証明書の有効期限の管理・更新作業は保守契約に含まれます。SSL切れによる「安全でない」警告がユーザーに表示される前に確実に対応します。自動更新の設定も可能です。" },
  { q: "ドメインやサーバーの更新代行もしてもらえますか？", a: "ドメイン・サーバーの更新時期の管理・ご連絡は保守契約に含まれています。代金の立替払いや更新作業の代行も対応可能です（別途費用が発生する場合があります）。" },
  { q: "保守対象のCMSはWordPressだけですか？", a: "WordPressが中心ですが、Next.js・Jamstack構成のサイト・独自CMSのサイトも対応しています。使用技術を問わず現状を確認の上でご提案します。" },
  { q: "保守費用は経費として計上できますか？", a: "保守・メンテナンスの費用は一般的に損金算入できるサービス費用として計上可能です。会計処理の詳細については税理士・顧問会計士にご確認ください。" },
  { q: "保守契約の最低期間はありますか？", a: "最低契約期間は3ヶ月からとしています。長期契約（6ヶ月・1年）の場合は月額費用の割引があります。まずは短期間お試しいただき、継続するか判断していただけます。" },
  { q: "セキュリティ診断だけ依頼できますか？", a: "はい。スポットでのセキュリティ診断のみの対応も可能です。WordPressの脆弱性スキャン・バックアップ状況の確認・不審なファイルの検査などを実施し、報告書をご提出します。" },
  { q: "対応時間・緊急連絡の方法は？", a: "平日10〜18時を通常対応時間としています。サイトダウン・ハッキングなどの緊急時は専用フォームから連絡いただければ優先対応します。緊急対応オプションを追加することで24時間365日の監視も可能です。" },
  { q: "保守レポートは何で共有されますか？", a: "PDFレポートをメールでご送付するほか、Google スプレッドシートやNotionでリアルタイムに確認できる形式にも対応しています。共有方法はご希望に合わせて調整します。" },
  { q: "WordPressのプラグインを自分で更新すると壊れないですか？", a: "プラグインの更新は互換性の問題でサイトが壊れるリスクがあります。特にPageBuilderプラグインやWooCommerceなどは更新前のテストが必須です。保守契約では必ずテスト環境で確認してから本番に適用します。" },
  { q: "既存の保守会社から切り替えたい場合はどうすればいいですか？", a: "現状の保守内容・費用・サーバー環境をヒアリングし、切り替えコストを最小化したお乗り換えプランをご提案します。サーバー移転が必要な場合も含めて対応しています。" },
  { q: "新規制作と同時に保守契約もできますか？", a: "はい。Web制作と保守契約をセットでご契約いただけます。制作段階から保守を見据えた設計（バックアップ設定・セキュリティプラグイン設定など）を行うため、より安全なサイトを公開できます。" },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の概要" },
  { href: "/web-design/wordpress", label: "WordPress制作", desc: "WordPress制作" },
  { href: "/web-design/nextjs", label: "Next.js制作", desc: "Next.js制作" },
  { href: "/web-design/page-speed", label: "ページ速度改善", desc: "表示速度の最適化" },
  { href: "/web-design/vercel", label: "Vercelホスティング", desc: "高速ホスティング" },
  { href: "/web-design/mobile-friendly", label: "スマートフォン対応", desc: "モバイルフレンドリー化" },
  { href: "/web-design/contact-form", label: "フォーム最適化", desc: "問い合わせフォーム設計" },
  { href: "/web-design/lp", label: "LP制作", desc: "ランディングページ" },
  { href: "/web-design/renewal", label: "サイトリニューアル", desc: "既存サイトの刷新" },
  { href: "/web-design/cms", label: "CMS導入", desc: "コンテンツ管理システム" },
  { href: "/seo", label: "SEO対策", desc: "検索エンジン最適化" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "技術的なSEO改善" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域ビジネスのSEO" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "制作サービス" },
  { href: "/services/seo", label: "SEOサービス", desc: "SEO支援" },
  { href: "/services/consulting", label: "Webコンサルティング", desc: "戦略立案" },
  { href: "/company/support-policy", label: "サポート方針", desc: "継続支援の考え方" },
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
              <span style={{ color: "#0d1b2a" }}>保守・メンテナンス</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Web Maintenance</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              ホームページ保守・メンテナンス
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              Webサイトは公開がゴールではありません。継続的なセキュリティ対策・コンテンツ更新・バックアップ管理により、サイトの価値を維持・向上させます。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "12px", maxWidth: "640px" }}>
              「制作して終わり」ではなく、公開後も長期パートナーとして伴走します。月次レポートで進捗を透明に共有し、継続的な改善提案を行います。
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_10_29.png" alt="ホームページ保守・メンテナンス" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                公開して終わりでは、Webは資産にならない。<br />継続的な保守・改善で集客力を高め続けます。
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
                "保守なしのサイトが抱えるセキュリティ・データ消失リスクの実態",
                "WordPressの脆弱性放置がどのようなインシデントにつながるか",
                "バックアップ・SSL・プラグイン管理の具体的な実施方法",
                "業種ごとに異なる更新頻度・保守ニーズの違い",
                "保守サービスの実際の対応フローと月次レポートの内容",
                "費用対効果を判断するためのKPIと計測方法",
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
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Risks Without Maintenance</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              保守を怠ると起きる4つのリスク
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "セキュリティ侵害・情報漏洩", b: "WordPressプラグインの古いバージョンには既知の脆弱性があります。更新を怠ると悪意あるコードが埋め込まれ、顧客情報の流出・サイト改ざんが発生するリスクがあります。" },
                { t: "データ消失の危機", b: "定期バックアップなしのまま、サーバー障害・ハッキング・誤操作が起きるとサイトのコンテンツをすべて失います。数年分の記事・画像・問い合わせデータが一瞬で消えてしまいます。" },
                { t: "表示崩れの長期放置", b: "ブラウザのアップデートやスマートフォンOSの更新で、ある日突然レイアウトが崩れることがあります。保守なしでは発見が遅れ、崩れたまま顧客に見せ続ける状態になります。" },
                { t: "SEO評価の低下", b: "コンテンツの鮮度が落ちると、Googleは「更新されていないサイト」として評価を下げます。定期的な情報更新・SSL維持・クロールエラー対応が継続的に必要です。" },
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
                { t: "WordPressが不正アクセスされた", b: "古いバージョンのプラグインや推測されやすい管理者パスワードが主な原因です。ブルートフォース攻撃・脆弱性を突いた自動攻撃は毎日世界中で発生しており、対策なしのサイトは標的になりやすい状態です。" },
                { t: "プラグイン更新を放置してサイトが壊れた", b: "互換性の確認なしにプラグインをまとめて更新すると、テーマや他プラグインとの競合でサイトが真っ白になることがあります。更新は一つずつ・テスト環境で確認してから本番反映するのが安全な手順です。" },
                { t: "バックアップを取っていなかった", b: "「レンタルサーバーが自動でバックアップしている」と思い込んでいるケースが多くありますが、サーバー側のバックアップは保持期間が短い・復旧に費用がかかるケースが多いです。自社でのバックアップ管理が必須です。" },
                { t: "担当者が変わりサイトの管理ができない", b: "前任者がログイン情報を持ったままになっていたり、管理画面のパスワードが共有されていないケースがよくあります。引き継ぎ時の棚卸しと、パスワード管理ツールの導入が有効な対策です。" },
                { t: "ドメイン・サーバーの更新を忘れた", b: "ドメインの更新を忘れると第三者に取得されてしまい、取り戻せないケースがあります。サーバー更新を忘れるとサイト・メールが停止します。更新時期の管理・リマインダー設定が必要です。" },
                { t: "SSLが切れた", b: "SSL証明書の有効期限が切れると、ブラウザに「安全でないサイト」と警告が表示され、ユーザーが離脱します。Googleのランキング要因にもなっているため、SEOにも悪影響を与えます。" },
                { t: "ページが表示されない・遅くなった", b: "サーバーの負荷上昇・プラグインの肥大化・データベースの最適化不足が原因のことが多いです。放置すると検索順位の低下・ユーザーの離脱につながります。定期的なパフォーマンス測定と改善が必要です。" },
                { t: "コンテンツ更新を頼む先がない", b: "制作会社との取引が終わっていて、写真の差し替えやお知らせの追記を自分でできない・頼めないという状況はよくあります。保守契約があれば小さな更新も気軽に依頼できます。" },
                { t: "保守費用の妥当性が分からない", b: "月額費用の相場観がなく、現在の保守費用が高いのか安いのかが分からないというご相談をよくいただきます。対応内容・稼働時間・実績を照らし合わせて判断するためのチェックポイントをご説明します。" },
                { t: "セキュリティ診断をしたことがない", b: "サイトを公開してから一度もセキュリティ診断をしていないケースは珍しくありません。マルウェアが埋め込まれていても見た目には分からないことが多く、定期的なスキャンが重要です。" },
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

        {/* Maintenance items */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Maintenance Items</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              保守・メンテナンスの対応内容
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "CMS・プラグインのアップデート", b: "WordPressコア・テーマ・プラグインを定期的に最新バージョンに更新します。古いバージョンはセキュリティ脆弱性の原因となります。更新前のテスト環境での確認も実施します。" },
                { n: "02", t: "セキュリティ監視・不正アクセス対策", b: "マルウェアスキャン・不正ログイン試行の監視・ファイアウォール設定を維持します。問題を早期発見して被害を最小化します。" },
                { n: "03", t: "定期バックアップの取得・保管", b: "サイトデータ・データベースの定期バックアップを取得し、クラウドストレージに保管します。不測の事態でもバックアップから迅速に復旧できます。" },
                { n: "04", t: "コンテンツ更新・ブログ投稿支援", b: "お知らせ更新・ブログ記事投稿・スタッフ情報の変更など、コンテンツの更新をサポートします。AIを活用した記事作成も対応しています。" },
                { n: "05", t: "アクセス解析・SEO状況のモニタリング", b: "Google AnalyticsとSearch Consoleのデータを月次でレポートします。アクセス数の変化・順位の変動・改善提案を定期的にご報告します。" },
                { n: "06", t: "表示崩れ・不具合対応", b: "ブラウザ更新・スマートフォンOSの更新による表示崩れ・リンク切れ・フォームエラーなどの不具合を発見・修正します。" },
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
                { industry: "飲食店", point: "メニュー・営業時間更新の頻度が高い", detail: "季節メニューの切り替え・臨時休業のお知らせ・Googleビジネスプロフィールとの情報統一が保守の中心です。更新を素早く行うためのCMS設定が重要です。" },
                { industry: "美容室", point: "キャンペーン・スタッフ情報の定期更新", detail: "スタッフの入退職・担当メニューの変更・期間限定キャンペーンは頻繁に発生します。写真付きスタッフページの更新や予約システムとの連携維持が保守の主な内容です。" },
                { industry: "歯科・クリニック", point: "診療時間・担当医師の更新対応", detail: "診療時間の変更・非常勤医師の担当日更新・学会休診のお知らせは患者さんの来院に直結します。誤った情報の長期掲載は信頼低下につながるため、迅速な更新体制が重要です。" },
                { industry: "建設・リフォーム", point: "施工事例の定期追加", detail: "完工した施工事例の写真・コメントを定期的に追加することで、SEO効果と信頼性向上が得られます。月1件以上の事例追加を目標に、更新作業をサポートします。" },
                { industry: "士業（弁護士・税理士等）", point: "法改正・料金改定への迅速な対応", detail: "法律の改正・料金プランの変更・サービス内容の追加は情報の正確性が特に求められます。古い情報が残っていることによる誤解・トラブルを防ぐため、変更時の迅速な更新が必須です。" },
                { industry: "不動産", point: "物件情報の頻繁な更新", detail: "売却済み・成約済み物件の削除・新着物件の追加は頻度が高く、更新の遅れが問い合わせ機会の損失につながります。効率的な物件情報管理の仕組みとセットで保守をご提案します。" },
                { industry: "学習塾", point: "カリキュラム・合格実績の更新", detail: "年度ごとの合格実績・コース料金・体験授業の案内は入塾検討者が必ず確認する情報です。古い年度の実績が残っていると信頼を損なうため、年度切り替えのタイミングでの更新が重要です。" },
                { industry: "EC・通販", point: "商品情報・在庫状況の更新", detail: "品切れ商品の表示管理・新商品の追加・季節商品の切り替えは売上に直結します。決済システム・在庫管理システムとの連携維持も保守の重要な要素です。" },
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
                { t: "現状サイトのセキュリティ診断", b: "マルウェアスキャン・不審なファイルの検査・管理画面へのアクセス制限状況を確認します。問題箇所を洗い出し、優先度をつけた対応計画を策定します。" },
                { t: "WordPress・プラグインバージョン確認", b: "現在のWordPressコアバージョン・テーマ・全プラグインのバージョンを一覧化します。セキュリティ上の問題があるバージョンを特定し、アップデート計画を立てます。" },
                { t: "バックアップ設定（日次・週次・月次）", b: "バックアッププラグインの設定・保存先（クラウドストレージ）の設定を行います。データベースと全ファイルをスケジュールに沿って自動取得する仕組みを構築します。" },
                { t: "SSL証明書の確認・更新", b: "SSL証明書の有効期限を確認し、自動更新の設定状態を確認します。有効期限が近い場合は即時更新し、以後の自動更新が確実に動作するよう設定します。" },
                { t: "セキュリティプラグイン設定", b: "ログイン試行回数の制限・管理画面URLの変更・二要素認証の導入・ファイル変更検知の設定を行います。不正アクセスの難易度を上げる多層防御を構築します。" },
                { t: "不要プラグイン・テーマの削除", b: "使用していない休眠プラグインやテーマは脆弱性の温床になります。有効化されていなくても存在するだけでリスクがあるため、不要なものは完全削除します。" },
                { t: "コアアップデート・プラグイン更新対応", b: "テスト環境でアップデートを先行実施し、表示崩れ・機能不具合がないことを確認してから本番に反映します。重要な更新は月1回のサイクルで対応します。" },
                { t: "月次レポート提出", b: "実施した保守作業の一覧・アクセス数の推移・検索順位の変動・翌月の対応予定をまとめたレポートを毎月提出します。数値の変化に対する分析コメントも添付します。" },
                { t: "コンテンツ更新対応", b: "お知らせ・ブログ記事・スタッフ情報・施工事例などのコンテンツ更新を随時受け付けます。依頼から反映まで通常2〜3営業日で対応します。" },
                { t: "年次の総合チェック", b: "年に一度、サイト全体の総合診断を実施します。セキュリティ・パフォーマンス・SEO・コンテンツの鮮度を総合評価し、翌年の改善計画を提案します。" },
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
                { kpi: "サイト稼働率", target: "99.9%目標", where: "サーバー管理画面・UptimeRobot", desc: "サイトが正常に表示されている時間の割合です。99.9%を下回る場合はサーバー設定やプラグインの問題が疑われます。月次レポートで推移を確認します。" },
                { kpi: "セキュリティインシデント件数", target: "0件目標", where: "セキュリティプラグインのログ", desc: "マルウェア検出・不正ログイン成功・ファイル改ざんの件数です。ゼロを維持することが目標ですが、不審なアクセス試行件数の推移も合わせて監視します。" },
                { kpi: "バックアップ実行率", target: "100%目標", where: "バックアッププラグインのログ", desc: "設定したスケジュール通りにバックアップが実行されているかを確認します。失敗が続いている場合はプラグインの設定見直しや保存先の容量確認が必要です。" },
                { kpi: "ページ速度スコア推移", target: "Lighthouse 90+", where: "PageSpeed Insights / Lighthouse", desc: "プラグインの追加・画像の増加によりページ速度が低下することがあります。月次でスコアを計測し、悪化傾向があれば原因を特定して改善します。" },
                { kpi: "プラグイン最新化率", target: "100%目標", where: "WordPress管理画面", desc: "インストール済みプラグインのうち最新バージョンに更新されているものの割合です。未更新プラグインはセキュリティリスクになるため、高い水準を維持します。" },
                { kpi: "月次更新件数", target: "依頼内容による", where: "作業ログ・月次レポート", desc: "その月にコンテンツ更新・不具合修正・設定変更などを何件対応したかを記録します。更新件数が増えるとSEOにも好影響を与えます。" },
                { kpi: "問い合わせ対応時間", target: "平日翌営業日以内", where: "メール・チケットシステム", desc: "保守に関する問い合わせ・作業依頼への最初の返信までにかかる時間です。緊急度の高い問い合わせへの優先対応も含めて管理します。" },
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

        <FaqSection items={faqItems} bgColor="#FFFFFF" heading="保守・メンテナンスについてよくある質問" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="保守・メンテナンスのご相談" body="現在のサイトの保守状況を確認し、最適な保守プランをご提案します。制作後の保守から既存サイトの引き継ぎ保守まで対応しています。" />
      </main>
      <Footer />
    </>
  );
}

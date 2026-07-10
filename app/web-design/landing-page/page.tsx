import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ランディングページ制作（LP）｜CV特化Webページ｜株式会社サイプレス",
  description: "問い合わせ・申し込み・購入に特化したランディングページ（LP）制作。ファーストビュー設計・信頼要素・FAQ・CTAで高いコンバージョン率を実現します。",
  keywords: ["ランディングページ制作", "LP制作", "CV率向上", "コンバージョン最適化", "Web制作"],
  openGraph: {
    title: "ランディングページ制作（LP）｜CV特化Webページ",
    description: "問い合わせ・申し込みに特化したLP制作。ファーストビュー・信頼要素・FAQ・CTA設計で高CV率を実現。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/landing-page" },
};

const faqItems = [
  { q: "ランディングページとコーポレートサイトの違いは？", a: "コーポレートサイトは会社・サービス全体を紹介する複数ページのサイトです。ランディングページは特定の1つのアクション（申し込み・購入・問い合わせ）に特化した1ページのサイトです。CV（コンバージョン）最大化が目的です。" },
  { q: "ランディングページのSEO効果はありますか？", a: "LPは単独ではSEO効果が出にくいです。広告（リスティング広告・SNS広告）のランディング先として使い、SEOはブログ・コーポレートサイトで対応するのが一般的な使い分けです。" },
  { q: "LP制作の費用相場はどのくらいですか？", a: "デザイン・文章作成・コーディング・スマートフォン対応を含む本格的なLPは30〜100万円程度が相場です。テンプレートを使ったシンプルなLPであれば10〜30万円程度から対応可能です。" },
  { q: "LPの制作期間はどのくらいかかりますか？", a: "ヒアリング・設計から公開まで、通常2〜4週間が目安です。修正対応・素材の準備状況によって前後します。" },
  { q: "A/Bテストはしてもらえますか？", a: "LPのA/Bテスト（2パターンのデザイン・文章を比較してCV率が高い方を採用する手法）に対応しています。Google Optimize（終了）の代替ツールとしてVWO・ABsmartlyなどを活用できます。" },
  { q: "既存LPのCV率改善もできますか？", a: "はい。現在のLPをヒートマップツールやGoogleアナリティクスで分析し、ファーストビュー・CTA・フォームの改善ポイントを特定します。制作から改善まで一貫して対応します。" },
  { q: "LPにSEOは必要ですか？", a: "広告のLPはSEOより広告品質スコアが重要です。ただしオーガニック集客もあわせて行う場合は、LPとは別にSEOコンテンツを用意することをおすすめします。" },
  { q: "LPのファーストビューで何を伝えるべきですか？", a: "「何のサービスか」「誰に向けたものか」「どんな価値があるか」「信頼できるか」の4点をファーストビューで伝えることが理想です。キャッチコピー・サブコピー・CTA・ビジュアルをセットで設計します。" },
  { q: "コピーライティングはお任せできますか？", a: "はい。ターゲット・商材・競合分析をもとに、ヒーローコピー・ベネフィット訴求・FAQなど全文のコピーライティングに対応しています。クライアント様にご確認いただきながら仕上げます。" },
  { q: "広告（リスティング・SNS）との連携はできますか？", a: "はい。Google広告・Meta広告・LINE広告などの広告のランディング先としてLPを最適化します。広告文とLPのメッセージを一致させることで品質スコアを高め、広告費用対効果を改善します。" },
  { q: "LPの表示速度はどう担保しますか？", a: "Next.jsによるSSG（静的生成）・next/imageによる画像最適化・フォント最適化・不要なJSの排除でCore Web Vitalsのスコアを最適化します。LCP 2.5秒以内・CLS 0.1以下を目標にします。" },
  { q: "ヒートマップツールの設置はできますか？", a: "はい。Hotjar・Mouseflow・Clarity（Microsoft）などのヒートマップツールを設置できます。クリック分布・スクロール深度・フォーム離脱分析のデータをもとに改善提案を行います。" },
  { q: "LP公開後の改善サポートはありますか？", a: "公開後の数値モニタリング・改善提案・A/Bテスト実施まで月次でサポートするプランをご用意しています。公開して終わりではなく、継続的に改善することでCV率を高めていきます。" },
  { q: "LPにChatGPTやAIチャットを組み込めますか？", a: "はい。LP内にチャットボット（AIチャット・ルールベース）を設置することで、24時間の問い合わせ対応・離脱防止・FAQ自動回答が可能になります。LINEチャットとの連携も対応しています。" },
  { q: "イベント・キャンペーン専用のLPは作れますか？", a: "はい。期間限定キャンペーン・セミナー・イベントなど、特定目的の一時的なLPを短期間・低コストで制作します。締め切りカウントダウン・早期特典などの訴求要素も実装可能です。" },
  { q: "既存のコーポレートサイトとは別にLPを作る理由は？", a: "コーポレートサイトはナビゲーションがあり、ユーザーが別ページに移動できます。LPはナビゲーションを排除し、1つのCTAに向けて設計するため、広告からのCV率が高くなります。" },
  { q: "LPで動画を使いたい場合は対応できますか？", a: "はい。ヒーローエリアへの動画背景・サービス説明動画・お客様インタビュー動画の埋め込みに対応しています。動画ファイルの最適化（WebM変換・遅延読み込み）でパフォーマンスも維持します。" },
  { q: "LPのデザインはどのようなスタイルに対応していますか？", a: "ミニマル・高級感・ポップ・医療・士業向けなど、業種・ターゲット・商材に合わせたデザインスタイルで制作します。参考デザインをご提示いただければ、それに近いテイストで設計します。" },
  { q: "WordPressでLPを作ることはできますか？", a: "WordPressでのLP制作も可能ですが、パフォーマンス・セキュリティ・表現の自由度の観点からNext.jsでの制作をおすすめしています。更新が必要なコンテンツはCMSと連携することで解決できます。" },
  { q: "LPの著作権はどちらに帰属しますか？", a: "制作物の著作権は納品・入金完了後にクライアント様に帰属します。使用したフォント・画像素材・ライブラリのライセンスは制作時に明示します。詳細はご契約時にご確認ください。" },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の概要" },
  { href: "/web-design/service-site", label: "サービスサイト制作", desc: "サービス紹介サイト" },
  { href: "/web-design/contact-form", label: "お問い合わせフォーム", desc: "フォーム最適化" },
  { href: "/web-design/mobile-friendly", label: "スマートフォン対応", desc: "モバイル最適化" },
  { href: "/web-design/page-speed", label: "ページ速度改善", desc: "表示速度の最適化" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
  { href: "/web-design/nextjs", label: "Next.js制作", desc: "高速LP開発" },
  { href: "/web-design/corporate", label: "コーポレートサイト制作", desc: "企業サイト制作" },
  { href: "/web-design/seo", label: "SEO対策", desc: "検索流入を増やす" },
  { href: "/web-design/renewal", label: "サイトリニューアル", desc: "既存サイトの改善" },
  { href: "/web-design/blog", label: "ブログ・コンテンツ制作", desc: "SEOコンテンツ" },
  { href: "/web-design/analytics", label: "アクセス解析設定", desc: "GA4・GTM設定" },
  { href: "/web-design/maintenance", label: "保守・メンテナンス", desc: "公開後の維持管理" },
  { href: "/web-design/accessibility", label: "アクセシビリティ対応", desc: "誰でも使えるサイト" },
  { href: "/industries/restaurant", label: "飲食店のWeb制作", desc: "飲食業界向けLP" },
  { href: "/industries/beauty", label: "美容室のWeb制作", desc: "美容業界向けLP" },
  { href: "/industries/dental", label: "歯科医院のWeb制作", desc: "歯科業界向けLP" },
  { href: "/industries/construction", label: "建設・リフォームのWeb制作", desc: "建設業界向けLP" },
  { href: "/industries/legal", label: "士業のWeb制作", desc: "士業向けLP" },
  { href: "/industries/real-estate", label: "不動産のWeb制作", desc: "不動産業界向けLP" },
  { href: "/industries/school", label: "学習塾のWeb制作", desc: "教育業界向けLP" },
  { href: "/industries/ec", label: "EC・通販のWeb制作", desc: "EC業界向けLP" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談はこちら" },
  { href: "/services", label: "サービス一覧", desc: "提供サービス全体" },
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
              <span style={{ color: "#9CA3AF" }}>/</span>
              <Link href="/web-design" style={{ color: "#6B7280" }}>ホームページ制作</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>ランディングページ制作</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Landing Page</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              ランディングページ制作｜CV最大化設計
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              ランディングページ（LP）は、1つのアクション（問い合わせ・申し込み・購入）に特化したWebページです。ファーストビューからCTAまで、ユーザーが迷わず行動できる導線設計で高いCV率を実現します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "12px", maxWidth: "640px" }}>
              コピーライティング・デザイン・フォーム設計・スマートフォン対応・A/Bテストまで一貫して担当します。「見栄えが良いだけ」ではなく「成果が出る」LPを制作します。
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_12_19.jpg" alt="ランディングページ制作" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                成果が出るLPには、設計の法則がある。<br />ファーストビューからCTAまで戦略的に設計します。
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
            <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column" }}>
              {[
                "CVが取れないランディングページに共通する設計上の問題とその解決策",
                "ファーストビューで3秒以内に価値を伝えるためのコピーとビジュアルの設計方法",
                "信頼要素・社会的証明・FAQの配置で問い合わせへの心理的障壁を下げる方法",
                "CTAボタンの配置・テキスト・デザインがCV率に与える影響と改善のポイント",
                "スマートフォン対応・ページ速度最適化でLPのパフォーマンスを維持する方法",
                "ヒートマップ・A/Bテスト・GA4を使ったLP改善の継続サイクルの回し方",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", gap: "14px", padding: "16px 0", borderTop: "1px solid #E8E4DC", alignItems: "flex-start" }}>
                  <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "15px", flexShrink: 0 }}>→</span>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Issues</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              よくある課題と原因
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                { n: "01", t: "LPはあるが問い合わせ・購入がない", b: "LPが存在しているにも関わらずCVが発生しない場合、ページ全体の構成・コピー・導線のいずれかに問題があります。まずGA4・ヒートマップで離脱ポイントを特定し、仮説を立てて改善することが先決です。" },
                { n: "02", t: "ファーストビューが弱い", b: "ページを開いて3秒以内に「何のサービスか」「誰のためか」が伝わらないと、多くのユーザーはスクロールせずに離脱します。ファーストビューは全ページの中で最も多くのユーザーが見る唯一の場所であり、最優先で最適化すべき箇所です。" },
                { n: "03", t: "ヒーローコピーが刺さらない", b: "「高品質なサービスを提供します」「お客様に寄り添います」といった抽象的なコピーはターゲットに届きません。「〇〇で悩んでいる△△の方へ」のようにターゲットと課題を具体的に言語化したコピーに変えることで、スクロール率が大きく改善します。" },
                { n: "04", t: "信頼要素が不足している", b: "「怪しい」「本当に大丈夫か」という不安が残っているとCVには至りません。実績数値・お客様の声・会社情報・代表者プロフィール・メディア掲載実績などの信頼要素を複数組み合わせて配置することが重要です。" },
                { n: "05", t: "CTAボタンの位置・色が悪い", b: "申し込みボタンがページ最下部にしかない場合、ファーストビューで興味を持ったユーザーが行動できず離脱します。ファーストビュー・中間・最下部の3か所以上にCTAを設置し、ボタンは周囲と明確に差別化されたデザインにします。" },
                { n: "06", t: "離脱率が高い", b: "LPのバウンス率・離脱率が高い場合、ページの内容がユーザーの期待と合っていないか、ページの読み込みが遅い可能性があります。広告文とLPのメッセージの整合性・ページ速度・ファーストビューの改善が有効です。" },
                { n: "07", t: "スクロール深度が浅い", b: "ユーザーがページの上部しか見ていない場合、ファーストビューで興味を持てていないか、コンテンツが長すぎて読む気が起きていない状態です。セクションごとの情報密度・見出しの磁力・ビジュアルのリズムを改善します。" },
                { n: "08", t: "スマホでのLPが崩れる", b: "PCデザインをベースに制作されたLPがスマートフォンで文字がはみ出す・ボタンが小さい・画像が歪むといった問題が起きているケースがあります。モバイルファーストで設計し直すことで、スマートフォンユーザーのCV率が改善します。" },
                { n: "09", t: "A/Bテストをしたことがない", b: "公開後に「このデザインで合っているか」「このコピーが最善か」を勘に頼って判断している場合、改善の根拠がありません。A/Bテストを定常的に回すことで、データに基づいた継続的な改善が可能になります。" },
                { n: "10", t: "LPと広告文の整合性がない", b: "Google広告で「初回無料相談」と訴求しているのに、LPにその情報がない・目立たない場合、ユーザーは期待を裏切られた感覚になり離脱します。広告文とLPのファーストビューのメッセージを一致させることで品質スコアも改善します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CVが取れないLPの共通パターン — existing dark section */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Common Mistakes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "40px" }}>
              CVが取れないLPの4つの共通パターン
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "ファーストビューで伝わらない", b: "ページを開いて3秒以内に「何のサービスか」「自分に関係あるか」「信頼できるか」が伝わらないと離脱します。キャッチコピーとビジュアルを最優先で最適化する必要があります。" },
                { t: "信頼要素が不足している", b: "「怪しい」「大丈夫かな」という不安を解消できていないLPはCVが伸びません。実績・お客様の声・会社情報・資格などの信頼要素を戦略的に配置します。" },
                { t: "CTAのタイミングが悪い", b: "申し込みボタンがページ最下部にしかないケースは損失が大きいです。ファーストビュー・中間・最下部の3か所にCTAを設置することでCV機会を最大化します。" },
                { t: "フォームが長すぎる", b: "必要な情報を収集しようとするあまり、フォームが10項目以上になっているケースは離脱率が急上昇します。後で電話確認できる情報はフォームから削除するのが原則です。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#FFFFFF", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section C: 業種別の活用ポイント */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Industry Use Cases</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              業種別の活用ポイント
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                { n: "01", industry: "飲食店", use: "テイクアウト・ケータリング特化LP", b: "テイクアウトメニューの特集LPはSNS広告との相性が高く、限定メニューの告知・期間限定オファーで即時集客が可能です。ケータリングLPでは対応エリア・メニュー・実績写真・見積もりフォームを1ページにまとめ、問い合わせまでの導線を短縮します。" },
                { n: "02", industry: "美容室", use: "初回来店特典LP", b: "「初回限定〇〇円オフ」「初回トリートメント無料」などの特典を訴求する初回来店専用LPはリスティング広告・Instagram広告との組み合わせで高いCV率を発揮します。施術ビフォーアフター写真・スタイリスト紹介・予約フォームをセットで設計します。" },
                { n: "03", industry: "歯科医院", use: "矯正・インプラント専門LP", b: "自由診療（矯正・インプラント・ホワイトニング）は単価が高く、患者が慎重に比較検討します。症例写真・治療期間・費用の目安・担当医師のプロフィール・無料カウンセリングへのCTAを設置し、不安を丁寧に解消する構成が有効です。" },
                { n: "04", industry: "建設・リフォーム", use: "外壁塗装・水回りリフォームLP", b: "「外壁塗装の費用相場・時期」など検索ニーズに合わせたLPはリスティング広告で高い費用対効果を発揮します。施工事例・ビフォーアフター写真・保証内容・無料見積もりフォームを中心に設計し、地域名を含む訴求で競合との差別化を図ります。" },
                { n: "05", industry: "士業（税理士・社労士等）", use: "初回無料相談LP", b: "税務・労務・法律相談などの士業LPでは、専門知識への敷居を下げる「初回無料相談」への誘導が中心です。代表者の顔写真・資格・経歴・得意分野を明示し、相談内容のカテゴリ別FAQで不安を解消します。相談フォームは最小項目設計が重要です。" },
                { n: "06", industry: "不動産", use: "売却査定LP・賃貸物件LP", b: "不動産売却査定LPは「60秒で査定額がわかる」など即時性を訴求し、住所・物件情報の最小入力で査定申込に誘導します。賃貸物件LPは物件特集ページとして間取り・写真・設備・周辺環境をワンスクロールで確認できる設計が入居問い合わせを増やします。" },
                { n: "07", industry: "学習塾", use: "春期・夏期講習LP", b: "季節講習LPは「申込締切日」のカウントダウン・「残席〇〇名」の希少性訴求でCVを促進します。講習内容・対象学年・費用・日程を明確に記載し、体験授業予約フォームへの誘導を複数箇所に設置します。保護者向けの安心感訴求も重要です。" },
                { n: "08", industry: "EC・商品販売", use: "商品販売LP", b: "EC・D2C商品のLPは商品の世界観・使用シーン・素材・製造背景をビジュアルで伝えることが購買決定に直結します。お客様の声・使用前後の変化・保証内容・FAQ・限定オファーを組み合わせ、購入ボタンまでの障壁を最小化します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <div style={{ display: "flex", gap: "10px", alignItems: "baseline", marginBottom: "6px" }}>
                      <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a" }}>{item.industry}</p>
                      <p style={{ fontSize: "12px", color: "#c4b89a", fontWeight: 600 }}>{item.use}</p>
                    </div>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CV率を高めるLPの必須要素 — existing section */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>LP Elements</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              CV率を高めるLPの必須要素
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "ファーストビューでの価値提案", b: "ページを開いて3秒以内に「何のページか」「自分に関係あるか」「信頼できるか」が伝わるファーストビューを設計します。キャッチコピー・ビジュアル・CTA（行動喚起）ボタンを最上部に配置します。" },
                { n: "02", t: "課題提起と共感", b: "ターゲットが抱える悩み・課題・不満を言語化して共感を生みます。「こういう困りごとはありませんか？」という問いかけでスクロールを続けてもらうための構成です。" },
                { n: "03", t: "サービス内容・特徴の明確な説明", b: "何ができるのか・他と何が違うのか・なぜ良いのかを明確に説明します。抽象的な説明ではなく、具体的な数字・事実・プロセスで伝えます。" },
                { n: "04", t: "信頼要素の組み込み", b: "実績数・導入事例・お客様の声・メディア掲載・資格・会社情報など、信頼性を高める要素を戦略的に配置します。「大丈夫かな？」という不安を解消します。" },
                { n: "05", t: "FAQ（よくある質問）で不安を解消", b: "申し込み前に生じる典型的な疑問・不安を事前に解消するFAQを設置します。「これって〇〇は対象外？」「料金はいくら？」などの質問に答えることでCTAへの障壁を下げます。" },
                { n: "06", t: "入力最小化のフォーム設計", b: "問い合わせフォームの入力項目は最小限にします。名前・メール・内容の3項目から始め、必要に応じて追加する方針で設計します。フォームが長いほど離脱率が上がります。" },
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

        {/* Section D: 制作・実装フロー */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Production Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              LP制作・実装フロー
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                { n: "01", t: "ターゲット・目的の定義", b: "「誰に」「何をしてもらうか」「広告から来るのかSEOからか」を明確にします。ターゲットペルソナの課題・動機・反論を整理し、LPで伝えるべきメッセージの方向性を定めます。目的がぶれないようにこの工程を丁寧に行います。" },
                { n: "02", t: "競合LP分析", b: "同じキーワード・ターゲットの競合LPを10〜20件分析します。ファーストビューのコピー・信頼要素の種類・CTA設計・フォームの項目数・価格訴求の有無などを比較し、差別化ポイントを明確にします。" },
                { n: "03", t: "CVシナリオ設計", b: "ユーザーがLPに到達してから申し込みに至るまでの感情・行動の流れ（CVシナリオ）を設計します。「認知→共感→理解→信頼→行動」の各フェーズで何を伝えるべきかを定義し、セクション構成に落とし込みます。" },
                { n: "04", t: "コピーライティング（ヒーロー・ベネフィット・社会的証明・CTA）", b: "ヒーローコピー（キャッチコピー・サブコピー）・ベネフィット訴求・お客様の声の文章・FAQ・CTAボタンのテキストを作成します。ターゲットの言語感覚・検索キーワード・競合との差別化を意識して執筆します。" },
                { n: "05", t: "ワイヤーフレーム作成", b: "セクション構成・コンテンツの配置・CTAの位置をワイヤーフレーム（設計図）で可視化します。FigmaまたはXDで作成し、クライアントと構成の認識を合わせてからデザイン工程に進みます。" },
                { n: "06", t: "デザイン制作", b: "ブランドカラー・フォント・ビジュアル方針に基づいてLPのデザインを制作します。ファーストビュー・CTAボタン・信頼要素のビジュアル・スマートフォンデザインを含むすべての画面を設計します。" },
                { n: "07", t: "フロントエンド実装（Next.js・速度最適化）", b: "Next.jsのSSG（静的生成）でLPを実装します。next/imageによる画像最適化・フォントの最適化・不要なJavaScriptの排除でCore Web Vitalsのスコアを最適化します。LCP 2.5秒以内・CLS 0.1以下を達成します。" },
                { n: "08", t: "計測タグ設定（GA4・GTM・広告CV）", b: "Googleタグマネージャー（GTM）でGA4・Google広告・Meta広告のコンバージョンタグを設定します。フォーム送信完了イベント・スクロール深度・CTAクリックイベントを計測し、広告の最適化シグナルを正確に送ります。" },
                { n: "09", t: "公開・動作確認", b: "本番環境への公開前に、PC・スマートフォン・タブレットでのデザイン確認・フォーム送信テスト・自動返信メール確認・ページ速度計測・SEOメタデータの確認を行います。広告のリンク先として問題がないことを確認してから公開します。" },
                { n: "10", t: "改善サイクル（ヒートマップ・A/Bテスト）", b: "公開後はGA4でCV率・離脱率・スクロール深度をモニタリングし、ヒートマップでユーザー行動を分析します。仮説を立ててA/Bテストを実施し、CV率が高い方を採用する改善サイクルを継続的に回します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
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
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs &amp; Measurement</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              成果を見るための指標（KPI）
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                { n: "01", t: "LPのCV率", measure: "GA4 → コンバージョン数 / セッション数", b: "LPに訪問したユーザーのうち、目的のアクション（申し込み・問い合わせ・購入）を完了した割合です。業種・商材・広告種別によって異なりますが、2〜5%を目安に改善を続けます。" },
                { n: "02", t: "ファーストビュー離脱率", measure: "GA4 スクロール深度イベント / Hotjar スクロールマップ", b: "ファーストビューだけを見て離脱したユーザーの割合です。この数値が高い場合はキャッチコピー・ビジュアル・ページ速度に問題があります。ファーストビューの改善はCV率向上への直接的なインパクトがあります。" },
                { n: "03", t: "スクロール深度", measure: "GA4 → スクロールイベント（25%・50%・75%・90%）", b: "ページのどこまでユーザーがスクロールしたかを計測します。信頼要素・FAQが掲載されているセクションまで到達しているかを確認し、到達率が低いセクション以前のコンテンツ改善を優先します。" },
                { n: "04", t: "平均滞在時間", measure: "GA4 → エンゲージメント → 平均エンゲージメント時間", b: "滞在時間が短すぎる場合はファーストビューで離脱している・コンテンツに興味が持てていない可能性があります。LPの場合、2〜4分程度の滞在時間が一般的なCV発生の目安です。" },
                { n: "05", t: "CTAクリック率", measure: "GA4 → クリックイベント / GTMでのCTAクリック計測", b: "CTAボタンがクリックされた割合です。クリック率が低い場合はボタンの視認性・テキスト・配置位置に問題があります。位置・色・テキストのA/Bテストで改善します。" },
                { n: "06", t: "広告ROAS（費用対効果）", measure: "Google広告 / Meta広告管理画面 → ROAS", b: "LP経由の広告費に対して何倍の売上が発生したかを示す指標です。LPのCV率が上がることで同じ広告費でのROASが改善します。LPの改善と広告の最適化をセットで行います。" },
                { n: "07", t: "月間CV数", measure: "GA4 → コンバージョン数の月次推移", b: "月次の問い合わせ・申し込み・購入件数の絶対数です。CV率が同じでも、広告のクリック数・オーガニックトラフィックが増えればCV数は増加します。CV率と合わせてトラフィック量も並行してモニタリングします。" },
              ].map((item) => (
                <div key={item.n} style={{ padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "4px" }}>{item.t}</p>
                      <p style={{ fontSize: "11px", color: "#c4b89a", fontWeight: 600, marginBottom: "8px", fontFamily: "var(--font-mono, monospace)" }}>{item.measure}</p>
                      <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#FFFFFF" heading="ランディングページについてよくある質問" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="ランディングページ制作のご相談"
          body="問い合わせ・申し込み・予約に特化したLPの制作をご相談ください。ヒアリング・設計・コピー・デザイン・コーディング・A/Bテストまで一貫して対応します。"
        />
      </main>
      <Footer />
    </>
  );
}

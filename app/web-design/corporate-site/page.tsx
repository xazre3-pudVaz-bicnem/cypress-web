import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "コーポレートサイト制作｜企業ブランドと信頼を伝えるWebサイト設計｜株式会社サイプレス",
  description:
    "コーポレートサイト（会社サイト）制作の専門ガイド。企業ブランドと信頼を伝えるデザイン設計・SEO・CV改善まで解説。Next.js・WordPress対応。東京都葛飾区を拠点に全国対応。",
  keywords: ["コーポレートサイト制作", "会社サイト制作", "企業サイト", "Webサイト制作", "Next.js制作", "WordPress制作"],
  openGraph: {
    title: "コーポレートサイト制作｜企業ブランドと信頼を伝えるWebサイト設計｜株式会社サイプレス",
    description: "コーポレートサイト制作のガイド。企業ブランドと信頼を伝えるデザイン設計・SEO・CV改善まで解説。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/corporate-site" },
};

const faqItems = [
  {
    q: "コーポレートサイトとは何ですか？必ずSSLは必要ですか？",
    a: "コーポレートサイトとは、企業の顔となる公式Webサイトです。会社概要・サービス・事業内容・採用情報・ニュースなどを掲載し、取引先・求職者・メディアなど様々なステークホルダーに企業情報を提供します。SSLは現在必須です。HTTPのサイトはChromeで警告が表示され、信頼性に影響します。",
  },
  {
    q: "コーポレートサイトに掲載すべきコンテンツは？",
    a: "最低限必要なのは、①会社概要（社名・代表者名・設立年月・所在地・事業内容）、②サービス・事業内容、③お問い合わせフォーム・連絡先、④プライバシーポリシーです。これに加えて採用情報・ニュース・実績・コラムを追加することで、SEO・採用・ブランディングに貢献します。",
  },
  {
    q: "コーポレートサイトのSEO対策はどうすればいいですか？",
    a: "まず全ページの内部SEO（タイトル・メタディスクリプション・見出し・canonical・構造化データ）を整備します。次に、ターゲットとするキーワードに対応したコンテンツページ（サービスページ・コラム・事例）を充実させます。コーポレートサイトは企業の信頼性を伝えるページとしてE-E-A-T向上にも貢献します。",
  },
  {
    q: "制作費用の目安は？",
    a: "コーポレートサイト（5〜15ページ）の制作費用は、デザインの複雑さ・機能・ページ数によって変わります。シンプルな構成から複雑なカスタム設計まで幅広く対応しています。まずは無料相談でご要件をお聞かせいただき、お見積もりをご提示します。",
  },
  {
    q: "既存サイトのリニューアルも依頼できますか？",
    a: "はい、既存サイトのリニューアルに多数対応しています。現在のサイトのSEO評価を引き継ぐためのURL設計・301リダイレクト・内部リンク更新まで一貫して対応します。デザインだけでなくSEO・パフォーマンス・CV改善も含めたリニューアルが得意です。",
  },
  {
    q: "制作期間はどれくらいかかりますか？",
    a: "一般的なコーポレートサイト（10〜15ページ程度）の場合、ヒアリングから公開まで2〜3ヶ月が目安です。ページ数・機能・コンテンツ準備の状況によって変動します。スケジュールのご希望があれば、ご相談の上で対応可能かご回答します。",
  },
  {
    q: "CMSは何を使いますか？WordPressはできますか？",
    a: "Next.js（ヘッドレスCMS連携）・WordPress・Webflowなど、運用体制・更新頻度・予算に合ったCMSを提案します。WordPressは多数の実績があります。ブログや採用情報を自社で更新したい場合は管理画面のトレーニングも含めてサポートします。",
  },
  {
    q: "スマートフォン対応（レスポンシブデザイン）は標準対応ですか？",
    a: "はい、全案件でMobile Firstのレスポンシブデザインが標準です。スマートフォン・タブレット・PCの各デバイスで最適な表示・導線になるよう設計します。Google検索でのモバイルファーストインデックスへの対応も含まれます。",
  },
  {
    q: "お問い合わせフォームの設置・メール転送の設定もできますか？",
    a: "はい、フォームの設計・設置・メール転送設定まで含めて対応します。スパム対策（reCAPTCHA）・自動返信メール設定・複数宛先への転送なども対応可能です。フォームのデザインもサイト全体のトーンに合わせて制作します。",
  },
  {
    q: "構造化データ（Schema.org）の実装は対応していますか？",
    a: "はい、Organization・LocalBusiness・BreadcrumbList・FAQPage・Articleなど、ページの内容に応じた構造化データをJSON-LD形式で実装します。Googleのリッチリザルト対象となり、検索結果での表示強化・AIO対策にも貢献します。",
  },
  {
    q: "Lighthouseスコアやコアウェブバイタルの改善はできますか？",
    a: "はい、LCP・INP・CLSなどのCore Web Vitalsの最適化を標準で行います。画像のWebP変換・next/imageによるLazy Load・フォント最適化・コード分割などを実装し、Lighthouseスコア90以上を目標とします。",
  },
  {
    q: "採用情報ページも同時に制作できますか？",
    a: "はい、コーポレートサイト内の採用情報ページ（/recruit）も含めて設計・制作できます。社員インタビュー・募集要項・応募フォームまで一貫して制作します。採用専用サイトとして独立させる場合も対応しています。",
  },
  {
    q: "Googleアナリティクス・サーチコンソールの設定もお願いできますか？",
    a: "はい、Google Analytics 4（GA4）・Google Search Consoleの初期設定・連携まで対応します。公開後の流入状況・問い合わせ数・ページ滞在時間などのKPIを確認できる環境を整えた上で納品します。",
  },
  {
    q: "OGP（SNSシェア時の画像・タイトル）の設定は対応していますか？",
    a: "はい、全ページのOGP設定（og:title・og:description・og:image）を標準で行います。X（旧Twitter）・Facebookでシェアされたときにブランドイメージのあるカードとして表示されるよう設計します。",
  },
  {
    q: "多言語対応（日英など）のコーポレートサイトも制作できますか？",
    a: "はい、日英など多言語対応のコーポレートサイトも制作実績があります。Next.jsのi18n機能を活用し、各言語のSEO設定（hreflang）・URL設計まで対応します。翻訳コンテンツのご準備が必要ですが、翻訳パートナーのご紹介も可能です。",
  },
  {
    q: "制作後の運用・保守サポートはありますか？",
    a: "はい、月次保守プラン（セキュリティアップデート・バックアップ・軽微な修正）をご用意しています。コンテンツ追加・デザイン修正・SEO改善なども月次サポートとして継続的にご依頼いただけます。公開後も長期的なパートナーとして関わります。",
  },
  {
    q: "代表者プロフィール・社員紹介ページのデザインも対応できますか？",
    a: "はい、代表者・役員・社員紹介ページのデザイン・コーディングに対応しています。プロフィール写真の撮影（フォトグラファーのご紹介）・テキスト原稿のライティングサポートも含めて相談可能です。E-E-A-T強化の観点からも重要なコンテンツです。",
  },
  {
    q: "IRページ（投資家向け情報）の制作も可能ですか？",
    a: "はい、上場企業・上場準備中の企業向けにIRページの制作実績があります。株主・投資家向けの情報開示ページ・財務情報のビジュアル化・PDFダウンロード機能などの実装が可能です。コーポレートサイトと統合した設計を行います。",
  },
  {
    q: "写真・動画の撮影からお願いできますか？",
    a: "はい、プロカメラマン・動画クリエイターのネットワークを通じて、オフィス撮影・代表者インタビュー動画・製品写真の撮影もコーディネートできます。高品質なビジュアルがサイトの印象と信頼性を大きく高めます。",
  },
  {
    q: "競合他社のサイト分析・デザイン調査もしてもらえますか？",
    a: "はい、ヒアリング時に競合サイトの分析（デザイン・SEO・コンテンツ・CV設計）を行い、差別化ポイントを明確にしてからデザイン提案を行います。業界内での独自ポジションを視覚的に表現することが重要だと考えています。",
  },
];

const relatedLinks = [
  { href: "/services/web-design", label: "Web制作サービス", desc: "サイプレスの制作サービス" },
  { href: "/web-design", label: "Web制作とは", desc: "Webサイト制作の基礎" },
  { href: "/web-design/seo-site", label: "SEO特化サイト制作", desc: "検索流入を最大化するサイト" },
  { href: "/web-design/recruit-site", label: "採用サイト制作", desc: "採用強化のためのサイト" },
  { href: "/web-design/ec-site", label: "ECサイト制作", desc: "売れるネットショップ設計" },
  { href: "/web-design/lp", label: "LP制作", desc: "コンバージョン特化のランディングページ" },
  { href: "/web-design/wordpress", label: "WordPress制作", desc: "運用しやすいCMS制作" },
  { href: "/web-design/renewal", label: "サイトリニューアル", desc: "SEO評価を引き継いだ刷新" },
  { href: "/web-design/one-page", label: "ワンページサイト制作", desc: "スクロール型のシンプルな企業サイト" },
  { href: "/web-design/portfolio", label: "ポートフォリオサイト制作", desc: "実績・作品集のWebサイト" },
  { href: "/seo", label: "SEO対策", desc: "検索上位表示のための施策" },
  { href: "/seo/internal-seo", label: "内部SEO対策", desc: "技術SEO・構造化データ" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "記事・コラムによる集客" },
  { href: "/seo/local-seo", label: "ローカルSEO・MEO", desc: "地域ビジネスの検索対策" },
  { href: "/services/branding", label: "ブランディング支援", desc: "企業ブランドの設計・構築" },
  { href: "/services/maintenance", label: "保守・運用サポート", desc: "公開後の継続サポート" },
  { href: "/cost/web-design", label: "Web制作の費用", desc: "料金プランと相場" },
  { href: "/cost/corporate-site", label: "コーポレートサイトの費用", desc: "具体的な料金目安" },
  { href: "/industry/it", label: "IT・SaaS企業のWeb制作", desc: "テック企業向け制作実績" },
  { href: "/industry/manufacturing", label: "製造業のWeb制作", desc: "工場・メーカー向け設計" },
  { href: "/industry/construction", label: "建設・ゼネコンのWeb制作", desc: "工事実績・会社信頼性の表現" },
  { href: "/industry/medical", label: "医療法人のWeb制作", desc: "クリニック・病院サイト" },
  { href: "/contact", label: "無料相談", desc: "コーポレートサイトのご相談" },
  { href: "/case", label: "制作実績", desc: "サイプレスの制作事例" },
];

export default function CorporateSitePage() {
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
              <span style={{ color: "#0F172A" }}>コーポレートサイト制作</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Corporate Site</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              コーポレートサイト制作
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              コーポレートサイトは企業の顔となる最重要のWebサイトです。取引先・求職者・メディア・一般ユーザーなど、多様なステークホルダーに企業の信頼性・ブランド・実力を伝えるサイト設計が重要です。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              単なるデザインの美しさではなく、SEO・CV改善・E-E-A-T強化・パフォーマンス最適化まで含めた「ビジネスに貢献するコーポレートサイト」を設計・制作します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section className="relative flex items-center justify-center" style={{ height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_08_58 (6).png" alt="コーポレートサイト制作・企業サイト設計のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.5)" }} />
          <div className="relative text-center px-6">
            <p className="font-black" style={{ fontSize: "clamp(20px,3vw,36px)", color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>企業ブランドと信頼を、Webで伝える</p>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-4">
              {[
                "コーポレートサイトが企業の信頼性・問い合わせ数・採用応募数にどう影響するか",
                "業種ごとに異なるコーポレートサイト設計のポイントと優先すべきコンテンツ",
                "よくある課題（問い合わせが来ない・情報が古い・競合と似ている）の根本原因",
                "ヒアリングから公開までの制作フロー10ステップの全体像",
                "制作後に成果を測定するための具体的なKPIと確認場所",
                "コーポレートサイト制作会社の選び方と依頼前に確認すべき質問リスト",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 font-bold" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[14px] leading-[1.85]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* コーポレートサイト課題 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", fontWeight: 600 }}>Common Problems</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              コーポレートサイトがない・古い企業が失っている4つの機会
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "取引・入札機会の喪失", b: "企業間取引では担当者が必ずWebサイトを確認します。情報が古いサイト・存在しないサイトは「信頼できない会社」と判断され、商談に進む前に失注しています。" },
                { t: "採用応募者数の減少", b: "求職者の約90%が応募前にWebサイトを確認します。会社の文化・事業内容・働き方が伝わらないサイトは、優秀な候補者が応募をやめる要因となります。" },
                { t: "SEO流入機会のゼロ", b: "会社名・サービス名・業種+地域など、潜在顧客が検索するキーワードに対してWebサイトが答えていないと、検索からの問い合わせがゼロのままです。" },
                { t: "競合比較で選ばれない", b: "複数社を比較検討する顧客は必ずWebサイトの質で判断します。競合がわかりやすく充実したサイトを持っていれば、サイトの質だけで敗北します。" },
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
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Root Causes</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "会社案内だけで問い合わせが来ない", body: "会社概要・事業内容を羅列しただけのサイトは、顧客の「自分にとって何が得か」という疑問に答えていません。問い合わせが来るサイトは、顧客の課題に対して自社がどう解決できるかを明示的に伝えています。" },
                { title: "ビジョン・強みが伝わらない", body: "「〇〇を通じて社会に貢献する」という抽象的な表現は誰にも刺さりません。具体的な実績・数字・事例・お客様の声と組み合わせることで、はじめてビジョンと強みが「信じてもらえる言葉」になります。" },
                { title: "採用候補者に響かない", body: "採用に特化したコンテンツ（社員インタビュー・一日の流れ・キャリアパス）がなければ、求職者は「どんな人が働いているか」をイメージできません。採用候補者の視点でコンテンツを設計することが不可欠です。" },
                { title: "競合と似たようなサイトになっている", body: "業界のテンプレートを流用した結果、競合と区別できないサイトが生まれます。ブランドコンセプト・色・フォント・写真のトーンを一から設計し、「あの会社のサイト」と記憶に残る独自性が必要です。" },
                { title: "更新が面倒で情報が古くなっている", body: "CMSの使いにくさや更新フローの複雑さが、担当者の更新意欲を削ぎます。更新頻度・担当者スキル・運用体制に合ったCMSを選定し、誰でも簡単に更新できる仕組みを設計することが根本解決です。" },
                { title: "スマホ表示が最適化されていない", body: "スマートフォンからの流入が全体の60〜70%を占める現在、PCデザインをそのままスマホに縮小表示するサイトはユーザー体験が著しく低下します。Mobile Firstで設計し、指での操作・読みやすさを最優先にする必要があります。" },
                { title: "問い合わせフォームが使いにくい", body: "入力項目が多い・エラーが不親切・送信後の案内がない、といった問題がコンバージョンを下げています。入力項目の最小化・リアルタイムバリデーション・送信後の自動返信設定が問い合わせ率改善の基本です。" },
                { title: "SEO対策が全くされていない", body: "メタデータが全ページ同一・見出し構造が乱れている・構造化データがない、という状態では検索エンジンにサイトの内容が正しく伝わりません。内部SEOの整備はサイト公開と同時に行うべき最優先作業です。" },
                { title: "ブランドカラー・デザインに統一感がない", body: "色・フォント・余白・写真のトーンがページごとにバラバラなサイトは、信頼性と高級感を損ないます。デザインシステムを策定し、全ページで統一されたビジュアル言語を使うことがブランド強化につながります。" },
                { title: "制作会社の提案が画一的", body: "業種・ターゲット・事業規模を無視した「テンプレート提案」では、自社の課題は解決しません。競合分析・ブランドコンセプト・KPI設計から始めるオーダーメイドの提案を行う制作会社を選ぶことが重要です。" },
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

        {/* 設計要素 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Design Elements</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              コーポレートサイト制作の重要要素
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "ブランドアイデンティティの表現", body: "企業の理念・ビジョン・世界観をビジュアルで伝えるデザインを設計します。カラー・フォント・トーン＆マナーを統一し、ブランドとして記憶に残るサイトを目指します。" },
                { title: "信頼性・権威性の可視化", body: "代表者プロフィール・会社概要・設立年月・資格・受賞歴・取引先紹介・メディア掲載などの信頼要素を適切に配置します。E-E-A-TとAIO対策にも直結します。" },
                { title: "SEOに強いページ構成", body: "全ページのメタデータ・見出し・URL・構造化データを最適化します。サービスページ・コラム・事例ページがSEOでの集客基盤となる設計を行います。" },
                { title: "問い合わせ導線の設計（CV改善）", body: "電話・メール・フォーム・LINEへの自然な誘導動線を設計します。ファーストビュー・各セクション・フッターでのCTA配置でコンバージョン率を高めます。" },
                { title: "Core Web Vitals・パフォーマンス最適化", body: "画像最適化・コード分割・フォント最適化・CDN活用でLighthouseスコア向上を目標とします。表示速度の改善はSEOとユーザー体験に直結します。" },
                { title: "採用・IR情報との統合", body: "採用情報ページの設計・IR情報の掲載・ニュース・プレスリリースのCMS化まで一貫して設計します。企業の成長に合わせて拡張できるスケーラブルな設計を心がけます。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
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
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl">
              {[
                { industry: "IT / SaaS", point: "技術力・製品・採用の三位一体設計が重要。製品紹介ページ・技術ブログ・採用ページを有機的に連携させ、エンジニア・ビジネス職・投資家の三者に同時に訴求します。OGP・構造化データによるAIO対策も優先度が高い業種です。" },
                { industry: "製造業", point: "工場・製品・技術力の「見える化」が差別化の鍵。製品仕様ページ・工場見学動画・品質管理体制・JISなどの認証情報を掲載し、BtoB取引先の信頼を獲得します。カタログPDFのダウンロード導線も重要です。" },
                { industry: "建設・ゼネコン", point: "施工実績・安全への取組み・環境配慮（SDGs）の表現が問われます。写真・動画による施工事例ページを充実させ、入札・発注担当者への訴求力を高めます。地域名を含む施工実績ページはSEOにも貢献します。" },
                { industry: "士業・コンサル", point: "専門性・実績・代表者プロフィールが信頼獲得の三本柱。弁護士・税理士・社労士などは「この先生に任せたい」と感じさせる代表者の顔と実績を前面に出します。FAQページはAIO対策としても有効です。" },
                { industry: "医療法人", point: "理念・医師紹介・施設の安心感が患者の選択基準。医師のプロフィール・診療科目・設備写真・アクセス情報を整備し、Googleマップ連携・口コミ導線も含めた包括的なローカルSEO設計が必要です。" },
                { industry: "不動産", point: "エリア・実績・会社の信頼性が選ばれる理由。取扱エリアごとの地域ページ・スタッフ紹介・成約事例を掲載し、「地域の不動産なら〇〇」というブランドポジションを確立します。口コミ・評価の表示も重要です。" },
                { industry: "学習塾・教育", point: "理念・講師紹介・合格実績の三点セットが入塾判断を左右します。保護者が安心できる講師プロフィールと、具体的な指導方針・カリキュラムの説明、合格校リスト（個人特定しない形）の掲載が効果的です。" },
                { industry: "BtoB製品・商社", point: "カタログ・仕様・販売網の情報整備が取引拡大につながります。製品カテゴリ別のページ設計・PDFカタログのダウンロード機能・取引先リスト・販売代理店情報を整備し、展示会や営業活動の補完ツールとして活用します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.industry}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.point}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
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
                { step: "ヒアリング（ブランド・競合・ターゲット）", body: "事業内容・競合サイト・ターゲットペルソナ・現在の課題・目標KPIを詳細にヒアリングします。ここで決まる方向性が制作全体の品質を左右するため、最も時間をかけるフェーズです。" },
                { step: "サイトマップ設計", body: "ヒアリング結果をもとに、全ページの構成・URL設計・情報階層を決定します。SEOキーワードとの対応・問い合わせ導線・更新しやすいCMS設計を同時に検討します。" },
                { step: "デザインコンセプト提案", body: "ブランドカラー・タイポグラフィ・ビジュアルの方向性をムードボードで提示します。「何を伝えたいか」「誰に伝えたいか」をデザインに落とし込む最重要フェーズです。" },
                { step: "ワイヤーフレーム確認", body: "各ページのレイアウト・コンテンツ配置・導線をワイヤーフレームで確認します。デザイン着手前に情報設計の認識を合わせることで、手戻りを防ぎます。" },
                { step: "UI/UXデザイン制作", body: "Figmaで全ページのデザインカンプを作成します。PC・スマートフォン両方のデザインを制作し、クライアント確認を行います。修正対応もこのフェーズで完結させます。" },
                { step: "コンテンツ（コピー・写真）の準備", body: "ライティング・写真撮影・既存素材の整理を行います。コピーはSEOキーワードを自然に含めつつ、顧客の行動意欲を高める文章を設計します。写真の品質がサイトの印象を大きく左右します。" },
                { step: "Next.jsによるフロントエンド実装", body: "デザインカンプをもとにNext.js・TypeScript・Tailwind CSSでコーディングします。レスポンシブ対応・アニメーション・CMS連携・フォーム実装を行います。" },
                { step: "SEO設定（metadata・structuredData）", body: "全ページのmeta title・description・OGP・canonical・構造化データ（JSON-LD）を設定します。Google Search Consoleへの送信・サイトマップ生成も行います。" },
                { step: "テスト・品質確認", body: "クロスブラウザ・クロスデバイステスト・リンクチェック・フォーム動作確認・Lighthouseスコア測定・アクセシビリティ確認を実施します。本番環境での最終確認も行います。" },
                { step: "公開・アクセス解析設定", body: "本番環境へのデプロイ・DNS設定・SSL設定を行います。GA4・Google Search ConsoleのURL登録・目標設定（問い合わせコンバージョン）を設定し、公開後すぐにデータ計測を開始します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.step}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 選ぶポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>How to Choose</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              コーポレートサイト制作会社の選ぶポイント
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "SEO・パフォーマンス対応力", body: "デザインだけでなく内部SEO・Core Web Vitals・構造化データ実装まで対応できる会社を選びましょう。制作後の集客がビジネス成果に直結します。" },
                { title: "CMS選定の提案力", body: "Next.js・WordPress・Headless CMSなど、運用体制・更新頻度・予算に合った最適なCMSを提案できる会社が理想です。一社一提案が重要です。" },
                { title: "リニューアル実績と301対応", body: "既存サイトのSEO評価を引き継いだリニューアル実績があるか確認しましょう。URLマッピング・301リダイレクト設計を正確にできる会社を選んでください。" },
                { title: "制作後の保守・運用サポート", body: "Webサイトは公開後の運用が重要です。月次保守・コンテンツ追加・SEO改善を継続的に依頼できる体制があるか確認しましょう。" },
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
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs to Track</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { kpi: "月間セッション数", where: "GA4 > レポート > ライフサイクル > 集客", body: "サイト全体への訪問数。公開後3ヶ月・6ヶ月・12ヶ月の推移を追い、SEO施策・広告の効果を定量評価します。" },
                { kpi: "直帰率（エンゲージメント率）", where: "GA4 > エンゲージメント > 概要", body: "訪問者がサイトに滞在せず離脱した割合。直帰率が高いページはコンテンツ・デザイン・表示速度に問題がある可能性があります。" },
                { kpi: "平均ページ滞在時間", where: "GA4 > レポート > エンゲージメント > ページとスクリーン", body: "コンテンツの品質と読まれ方を示す指標。滞在時間が短いページはコンテンツの見直しか、ユーザーの検索意図とのズレを疑います。" },
                { kpi: "問い合わせ数（コンバージョン数）", where: "GA4 > レポート > コンバージョン", body: "フォーム送信・電話ボタンクリック・LINEボタンクリックなどをコンバージョンとして設定し、月次で追跡します。コーポレートサイトの最終KPIです。" },
                { kpi: "採用応募数", where: "GA4コンバージョン設定 + 採用フォーム管理画面", body: "採用ページからの応募フォーム送信数を計測します。採用強化を目的とする企業では問い合わせ数と並ぶ重要KPIです。" },
                { kpi: "Lighthouseスコア（90+）", where: "Chrome DevTools > Lighthouse / PageSpeed Insights", body: "パフォーマンス・アクセシビリティ・SEO・ベストプラクティスの4項目で90以上を目標とします。特にパフォーマンススコアはLCP・CLSに直結します。" },
                { kpi: "オーガニック流入数", where: "GA4 > 集客 > トラフィック獲得 > セッションのデフォルト チャネル グループ", body: "広告費ゼロの自然検索からの流入数。コンテンツSEO・内部SEO施策の成果を測る指標として6ヶ月以上の長期で追跡します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-1" style={{ color: "#0d1b2a" }}>{item.kpi}</p>
                    <p className="text-[11px] mb-2" style={{ color: "#9CA3AF" }}>確認場所：{item.where}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* ページ構成例 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Page Structure</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              コーポレートサイトの標準ページ構成例
            </h2>
            <p className="text-[14px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              業種・事業規模によって異なりますが、以下がコーポレートサイトの標準的なページ構成です。各ページにSEOキーワードと構造化データを設定し、目的別の導線を設計します。
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl">
              {[
                { page: "トップページ（/）", desc: "ファーストビュー・ブランドメッセージ・事業概要・実績・お客様の声・CTAを配置します。全ステークホルダーに向けた「企業の顔」となるページです。" },
                { page: "会社概要（/about）", desc: "会社名・代表者・設立年月・所在地・資本金・事業内容・グループ会社・沿革・受賞歴を掲載します。Organization構造化データを実装します。" },
                { page: "サービス一覧（/services）", desc: "提供サービスのカテゴリ一覧ページ。各サービスページへの誘導と、サービス全体の整合性をわかりやすく伝えます。" },
                { page: "サービス詳細（/services/[slug]）", desc: "各サービスの詳細・メリット・導入事例・料金・FAQ・CTAを掲載します。SEOの主要集客ページとして各キーワードに最適化します。" },
                { page: "実績・事例（/cases）", desc: "導入企業名・業種・課題・解決策・成果を掲載します。信頼性とE-E-A-Tの強化に直結し、問い合わせの決め手になるページです。" },
                { page: "ニュース・お知らせ（/news）", desc: "プレスリリース・受賞報告・サービス更新情報を掲載します。定期的な更新がGoogleのクロール頻度向上とE-E-A-T強化につながります。" },
                { page: "採用情報（/recruit）", desc: "募集要項・社員インタビュー・福利厚生・応募フォームを掲載します。JobPosting構造化データを実装しGoogleしごと検索に対応します。" },
                { page: "お問い合わせ（/contact）", desc: "最小限の入力項目・スマートフォン最適化フォーム・自動返信メール設定を備えます。コーポレートサイトのコンバージョンゴールとなるページです。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[14px] mb-2" style={{ color: "#0d1b2a" }}>{item.page}</p>
                    <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* サイプレスが選ばれる理由 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Why Cypress</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのコーポレートサイト制作の強み
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "デザイン×SEO×CV改善を同時設計", body: "デザイン専門・SEO専門に分業せず、ブランドデザイン・内部SEO・コンバージョン改善を一つのチームで同時に設計します。「美しいだけのサイト」「集客できないサイト」を作りません。" },
                { title: "Next.js製の高速・高品質なフロントエンド", body: "React・Next.js・TypeScriptによるモダンなフロントエンド実装で、Lighthouseスコア90+・LCP 2.5秒以内を標準で目指します。パフォーマンスが高いサイトはSEOと直帰率の両方に好影響を与えます。" },
                { title: "中小企業・スタートアップの実績多数", body: "大手だけでなく、中小企業・個人事業主・スタートアップのコーポレートサイト制作を多数手がけています。予算・スケジュール・運用体制に合わせた現実的な提案が得意です。" },
                { title: "構造化データ・AIO対策まで網羅", body: "Organization・BreadcrumbList・FAQPage・Articleなどの構造化データをJSON-LD形式で実装し、Google検索でのリッチリザルト対応とAI検索（ChatGPT・Gemini・Perplexity）からの引用を狙います。" },
                { title: "リニューアル時のSEO引継ぎ対応", body: "既存サイトのURL設計・301リダイレクトマップ・内部リンク更新を丁寧に行い、リニューアル後のSEO評価の急落を防ぎます。リニューアルに伴うオーガニック流入減少は対策次第で最小化できます。" },
                { title: "公開後の保守・運用サポート", body: "月次保守プランによるセキュリティ更新・バックアップ・コンテンツ追加・SEO改善を継続的に提供します。公開後も長期的なビジネスパートナーとして関わり続けます。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* よくあるご要望と対応内容 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Requests</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくあるご要望と対応内容
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { req: "「5年前に作ったサイトをリニューアルしたい」", res: "現在サイトのSEO評価・アクセス解析・競合分析から始めます。デザイン刷新・コンテンツ整理・SEO設定・Core Web Vitals改善を一気通貫で対応します。URLが変わる場合は301リダイレクト設計まで含めて対応します。" },
                { req: "「Wordで管理していた会社案内をWebにしたい」", res: "会社概要・事業内容・採用情報・お問い合わせを備えたコーポレートサイトを一から設計します。WordPressまたはヘッドレスCMSで、担当者が自社で更新できる仕組みと合わせて構築します。" },
                { req: "「問い合わせが全然来ないサイトを改善したい」", res: "GA4・ヒートマップ・検索キーワードを分析し、離脱ページ・CTAの問題を特定します。フォームのUI改善・CTA配置変更・サービスページのコンテンツ強化など、データに基づいた改善提案を行います。" },
                { req: "「採用応募が増えるようにしたい」", res: "採用情報ページの設計強化・社員インタビューコンテンツの追加・JobPosting構造化データの実装を行います。コーポレートサイト内の採用ページか、独立した採用サイトかはご予算・採用規模に合わせて提案します。" },
                { req: "「競合と差別化できるデザインにしたい」", res: "競合サイト5〜10社の分析（デザイン・構成・キーワード・CV設計）を行い、差別化のポイントを明確にします。ブランドコンセプトから設計し、「あの会社のサイト」と記憶に残る独自のデザインを制作します。" },
                { req: "「英語版・多言語サイトも作りたい」", res: "Next.jsのi18n機能を活用し、日本語・英語・中国語などの多言語対応サイトを構築します。hreflang設定・各言語でのSEO最適化・翻訳コーディネートまで含めて対応可能です。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.req}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.res}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16" style={{ background: "#0d1b2a" }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#c4b89a" }}>Free Consultation</p>
            <h2 className="font-black mb-6" style={{ fontSize: "clamp(22px,3vw,34px)", color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>
              まずは無料相談から始めましょう
            </h2>
            <p className="text-[15px] leading-[1.9] mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              コーポレートサイトのリニューアル・新規制作・SEO改善など、まずは現在の課題をお聞かせください。お見積もりは無料です。
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 font-bold text-[14px] tracking-wide"
              style={{ background: "#0F172A", color: "#FFFFFF", border: "1px solid rgba(196,184,154,0.4)" }}
            >
              無料相談を申し込む
            </Link>
          </div>
        </section>

        <FaqSection items={faqItems} heading="コーポレートサイト制作についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="コーポレートサイト制作のご相談"
          body="企業ブランドと信頼を伝えるコーポレートサイトの設計・制作をご支援します。まずはお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}

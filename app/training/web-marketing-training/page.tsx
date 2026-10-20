import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import SubsidyDisclaimer from "@/components/shared/SubsidyDisclaimer";

const BASE = "https://www.cypress-all.co.jp";
const URL = `${BASE}/training/web-marketing-training`;

export const metadata: Metadata = {
  title: "Webマーケティング研修の導入相談｜SEO・MEO・SNS・AI活用を学ぶ法人研修｜株式会社サイプレス",
  description:
    "法人向けWebマーケティング研修の導入相談。SEO・MEO・SNS運用・Googleビジネスプロフィール・AIO活用を社内で学ぶ研修を、実績ある提携研修会社へおつなぎします。",
  keywords: [
    "Webマーケティング研修 助成金",
    "SEO研修 法人",
    "MEO研修 法人",
    "SNS運用研修 法人",
    "Googleビジネスプロフィール 研修",
    "Web担当者 研修",
  ],
  openGraph: {
    title: "Webマーケティング研修の導入相談｜SEO・MEO・SNS・AI活用を学ぶ法人研修",
    description:
      "SEO・MEO・SNS運用を社内で判断できる人材を育てる法人研修の導入相談。実績ある提携研修会社をご紹介します。",
    images: [{ url: "/ChatGPT Image 2026年6月14日 21_09_09 (4).jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
    url: URL,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: URL },
};

const targetCompanies = [
  { title: "外注に任せきりで判断ができない", body: "施策の良し悪しを社内で評価できず、提案をそのまま受け入れるしかない状態を変えたい企業。" },
  { title: "Web担当者を社内に置きたい", body: "採用ではなく既存社員の育成でWeb運用を内製化したい企業。" },
  { title: "店舗の集客を強化したい", body: "Googleマップや口コミの運用を、店舗スタッフ自身で回せるようにしたい企業。" },
  { title: "広告費に頼らない集客をつくりたい", body: "検索・SNSからの流入を積み上げる中長期の集客基盤を社内で理解したい企業。" },
];

const themes = [
  { label: "Web集客の全体設計", desc: "検索・SNS・広告それぞれの役割と使い分けを整理し、自社の優先順位を決められるようにします。" },
  { label: "SEO研修", desc: "キーワードの考え方、コンテンツ設計、内部施策の基礎を学び、外注先の提案を評価できる状態を目指します。" },
  { label: "MEO研修", desc: "Googleビジネスプロフィールの運用と、地域名を含む検索での上位表示に必要な考え方を扱います。" },
  { label: "SNS運用研修", desc: "投稿設計・運用体制づくり・効果測定の基本を学び、継続できる運用の型をつくります。" },
  { label: "Googleビジネスプロフィール研修", desc: "プロフィール情報の整備、写真・投稿の運用、口コミへの返信対応を実践的に扱います。" },
  { label: "AI・AIO活用研修", desc: "生成AIを使った制作業務の効率化と、AI検索に引用されるための情報設計の考え方を学びます。" },
];

const detailBlocks = [
  {
    heading: "SEO研修",
    body: "検索エンジンがどのようにページを評価するかを理解し、自社サイトのどこに手を入れるべきかを判断できる状態を目指します。キーワードの選び方、検索意図の読み解き方、記事構成の設計、内部リンクの考え方といった基礎を扱います。技術的な実装まで社内で行う必要はありません。外注先の提案が妥当かを評価できるだけでも、施策の質は大きく変わります。",
    href: "/seo",
    linkLabel: "SEO対策の詳細を見る",
  },
  {
    heading: "MEO研修",
    body: "店舗や拠点を持つ企業にとって、Googleマップからの流入は来店・電話に直結します。Googleがローカル検索の順位を決める要素（関連性・距離・知名度）を理解し、プロフィール情報の整備、カテゴリ設定、写真投稿、口コミ獲得と返信をどう回すかを学びます。日々の運用を店舗スタッフが担えるようになることが目標です。",
    href: "/meo",
    linkLabel: "MEO対策の詳細を見る",
  },
  {
    heading: "SNS運用研修",
    body: "SNSは継続が最も難しい施策です。誰が・いつ・何を投稿するのかを決める運用体制の設計から扱います。投稿ネタの集め方、写真の撮り方の基本、反応を見て改善する流れまでを学び、担当者が変わっても運用が止まらない状態をつくります。",
    href: "/services/sns",
    linkLabel: "SNS運用支援の詳細を見る",
  },
  {
    heading: "Googleビジネスプロフィール研修",
    body: "MEOの中核となるGoogleビジネスプロフィールの運用に絞った内容です。営業時間・住所・電話番号といった基本情報の整合性、カテゴリの選び方、写真と投稿の更新頻度、口コミへの返信文の書き方を実践的に扱います。店舗運営の現場でそのまま使える内容を目指します。",
    href: "/meo/google-business-profile",
    linkLabel: "GBP最適化の詳細を見る",
  },
  {
    heading: "AI・AIO活用研修",
    body: "生成AIを使った記事構成づくりや文章の言い換えなど、Web運用業務の効率化を扱います。あわせて、ChatGPTやGeminiなどのAI検索に自社情報が引用されるための情報設計（AIO対策）の考え方も学びます。検索の入口が変わりつつある今、押さえておきたい領域です。",
    href: "/aio",
    linkLabel: "AIO対策の詳細を見る",
  },
];

const faqItems = [
  {
    q: "Webマーケティング研修は人材開発支援助成金の対象になりますか？",
    a: "対象になるかどうかは、訓練計画の内容、対象となる労働者、研修の実施形態、申請内容などをもとに個別に判断されます。研修テーマがWebマーケティングであれば自動的に対象になるというものではありません。株式会社サイプレスおよび提携研修会社は、採択や支給を保証するものではありません。",
  },
  {
    q: "サイプレスが研修を実施するのですか？",
    a: "いいえ。株式会社サイプレスは研修導入を検討する企業と実績ある提携研修会社をつなぐ紹介窓口です。研修の実施・契約・カリキュラム詳細の説明・受講証明等の発行は提携研修会社が対応します。",
  },
  {
    q: "助成金の申請手続きを手伝ってもらえますか？",
    a: "いいえ。サイプレスは助成金の申請書作成、計画届作成、支給申請、労働局対応などの申請代行を行っていません。申請手続きは、申請企業自身または社会保険労務士等の専門家へご相談ください。",
  },
  {
    q: "Webの知識がまったくない社員でも受講できますか？",
    a: "受講対象者のスキルレベルに応じてカリキュラムの方向性を提携研修会社と相談できます。用語の説明から始まる基礎的な内容から相談いただけます。",
  },
  {
    q: "SEOとMEOのどちらを先に学ぶべきですか？",
    a: "店舗や拠点を持ち、来店・電話が売上につながる業種であればMEOから着手する価値が大きくなります。商圏を限定しない事業やBtoBであればSEOが中心になります。ヒアリングを通じて優先順位を整理します。",
  },
  {
    q: "研修を受ければ社内でWeb運用を内製化できますか？",
    a: "研修は内製化の出発点です。何を判断すべきかが分かる状態になれば、外注先の提案を評価したり、日々の運用を社内で回せるようになります。すべてを一度に内製化する必要はありません。",
  },
  {
    q: "サイプレスのSEO・MEOサービスを契約する必要がありますか？",
    a: "いいえ。研修導入のご相談と、サイプレスのWebマーケティングサービスのご契約は別のものです。研修のご相談のみでも問題ありません。",
  },
  {
    q: "研修費用はいくらですか？",
    a: "研修費用は、テーマ・時間・受講人数・実施形式によって変わるため、提携研修会社との相談のなかで確定します。サイプレスへのご相談・紹介について企業様から費用をいただくことはありません。",
  },
  {
    q: "問い合わせた情報は提携研修会社に共有されますか？",
    a: "お問い合わせフォームの同意欄にチェックをいただいた場合に限り、会社名・ご担当者名・連絡先・お問い合わせ内容を提携研修会社へ共有します。同意がない場合は共有しません。",
  },
];

const relatedLinks = [
  { href: "/training/reskilling-subsidy", label: "リスキリング研修相談", desc: "研修導入相談の中心ページ" },
  { href: "/training/ai-dx-reskilling", label: "AI・DXリスキリング研修", desc: "AI・DX研修の導入相談" },
  { href: "/training/chatgpt-ai-training", label: "ChatGPT・生成AI研修", desc: "社員向けAI活用研修" },
  { href: "/training/hr-development-subsidy-guide", label: "助成金を検討する前に", desc: "制度の確認ポイント" },
  { href: "/training/reskilling-training-company-referral", label: "研修会社の紹介相談", desc: "研修会社選びの相談" },
  { href: "/seo", label: "SEO対策", desc: "検索流入を増やす施策" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップ集客" },
  { href: "/aio", label: "AIO対策", desc: "AI検索に引用されるサイトへ" },
  { href: "/web-design", label: "ホームページ制作", desc: "集客できるサイト設計" },
  { href: "/contact", label: "お問い合わせ", desc: "Web研修のご相談" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${BASE}/` },
    { "@type": "ListItem", position: 2, name: "リスキリング研修相談", item: `${BASE}/training/reskilling-subsidy` },
    { "@type": "ListItem", position: 3, name: "Webマーケティング研修の導入相談", item: URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": URL,
  url: URL,
  name: "Webマーケティング研修の導入相談",
  description:
    "法人向けWebマーケティング研修の導入相談。SEO・MEO・SNS運用・Googleビジネスプロフィール・AIO活用を社内で学ぶ研修を、実績ある提携研修会社へおつなぎします。",
  inLanguage: "ja",
  isPartOf: { "@id": `${BASE}/#website` },
  publisher: { "@id": `${BASE}/#organization` },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Webマーケティング研修の導入相談・提携研修会社の紹介",
  serviceType: "研修会社紹介・研修導入相談",
  description:
    "SEO・MEO・SNS運用・AIO活用をテーマとする法人研修について、導入を検討する企業からの相談を受け付け、実績ある提携研修会社を紹介する窓口サービスです。助成金の申請代行は行いません。",
  provider: { "@id": `${BASE}/#organization` },
  areaServed: { "@type": "Country", name: "日本" },
  audience: { "@type": "BusinessAudience", name: "Webマーケティング研修の導入を検討する法人・中小企業" },
  url: URL,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function WebMarketingTrainingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section style={{ background: "#0d1b2a", position: "relative", paddingTop: "128px", paddingBottom: "80px", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/ChatGPT Image 2026年6月14日 21_09_09 (4).jpg"
              alt="中小企業向けWebマーケティング研修の導入相談イメージ"
              fill
              className="object-cover"
              sizes="100vw"
              priority
              style={{ opacity: 0.16 }}
            />
          </div>
          <div style={{ position: "relative", zIndex: 10, maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "32px" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.4)" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/training/reskilling-subsidy" style={{ color: "rgba(255,255,255,0.4)" }}>リスキリング研修相談</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span>Webマーケティング研修</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "16px" }}>
              Web Marketing Training
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,4.2vw,46px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.25, marginBottom: "28px" }}>
              Webマーケティング研修の導入相談
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.95", color: "rgba(255,255,255,0.78)", maxWidth: "640px", marginBottom: "36px" }}>
              SEO・MEO・SNS運用・AI活用を、社内で判断できる人材を育てる。外注に任せきりの状態から抜け出すための法人研修を、実績ある提携研修会社へおつなぎします。
            </p>
            <Link
              href="/contact?type=web-marketing-training"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[14px] font-medium transition-all"
              style={{ background: "#ffffff", color: "#0d1b2a" }}
            >
              Webマーケティング研修について相談する
            </Link>
            <p style={{ fontSize: "12px", lineHeight: "1.9", color: "rgba(255,255,255,0.55)", maxWidth: "640px", marginTop: "28px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              株式会社サイプレスは研修会社への紹介窓口です。助成金の申請代行は行わず、採択・支給を保証するものではありません。
            </p>
          </div>
        </section>

        {/* ── 必要な企業 ─────────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Who Needs It</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              Webマーケティング研修が必要な企業
            </h2>
            <div className="grid md:grid-cols-2 gap-5" style={{ maxWidth: "880px" }}>
              {targetCompanies.map((item) => (
                <div key={item.title} style={{ background: "#f8f6f2", border: "1px solid #e8e4dc", padding: "24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "10px" }}>{item.title}</p>
                  <p style={{ fontSize: "13.5px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 研修テーマ例 ───────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Themes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "18px" }}>
              研修テーマ例
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "2.0", color: "#374151", maxWidth: "720px", marginBottom: "44px" }}>
              以下は提携研修会社と相談できるテーマの例です。これらのテーマが必ず助成金の対象になるという意味ではありません。
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {themes.map((item) => (
                <div key={item.label} style={{ background: "#ffffff", border: "1px solid #e8e4dc", padding: "22px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "14.5px", fontWeight: 700, color: "#0d1b2a", marginBottom: "9px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 各研修の詳細 ───────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Details</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "44px" }}>
              研修内容の詳細
            </h2>
            <div style={{ maxWidth: "780px" }}>
              {detailBlocks.map((block) => (
                <div key={block.heading} style={{ padding: "28px 0", borderTop: "1px solid #e8e4dc" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "18px", fontWeight: 700, color: "#0d1b2a", marginBottom: "12px" }}>
                    {block.heading}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "2.0", marginBottom: "14px" }}>{block.body}</p>
                  <Link href={block.href} style={{ fontSize: "13px", color: "#0d1b2a", textDecoration: "underline" }}>
                    {block.linkLabel} →
                  </Link>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        {/* ── 助成金活用の注意点 ─────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Before You Apply</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.35, marginBottom: "28px" }}>
                助成金活用を検討する場合の注意点
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "18px" }}>
                Webマーケティングをテーマとする研修についても、研修テーマだけで助成の対象が決まるわけではありません。訓練計画の内容、対象となる労働者、研修の実施形態、申請のタイミングなどが個別に確認されます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "18px" }}>
                申請には順序があり、研修を実施したあとに申請すればよいというものではありません。研修会社を決める前に、社労士等の専門家や管轄労働局へ確認しておくことをおすすめします。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151" }}>
                株式会社サイプレスは、助成金の申請書作成、計画届作成、支給申請、労働局対応などの申請代行は行っていません。申請手続きは申請企業自身、または委任を受けた社会保険労務士等の専門家が行うものです。
              </p>
            </div>
          </div>
        </section>

        {/* ── 提携研修会社の紹介 ─────────────────────────────── */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", fontSize: "11px", marginBottom: "14px" }}>Referral</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.35, marginBottom: "26px" }}>
                提携研修会社の紹介
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "rgba(255,255,255,0.75)", marginBottom: "18px" }}>
                株式会社サイプレスは研修会社ではありません。ご相談内容をお伺いしたうえで、Webマーケティングのテーマに対応できる実績ある提携研修会社をご紹介します。研修の実施・契約・カリキュラム詳細の説明・受講証明等の発行は、提携研修会社が対応します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "rgba(255,255,255,0.75)" }}>
                なお、サイプレス自身はSEO・MEO・AIO・ホームページ制作を提供するWebマーケティング会社です。研修ではなく施策の実行そのものをご希望の場合は、サービスページをご覧ください。
              </p>
              <Link href="/services" className="inline-block mt-8 text-[13px] underline" style={{ color: "#ffffff" }}>
                サイプレスのサービス一覧を見る →
              </Link>
            </div>
          </div>
        </section>

        <SubsidyDisclaimer bgColor="#ffffff" />

        <FaqSection items={faqItems} heading="Webマーケティング研修についてよくある質問" bgColor="#f8f6f2" />

        <RelatedPages links={relatedLinks} heading="関連ページ" />

        <PageContactCTA
          heading="Webマーケティング研修の導入についてご相談ください"
          body="「外注先の提案を評価できるようになりたい」「店舗スタッフがGoogleマップを運用できるようにしたい」といったご相談を承っています。内容をお伺いしたうえで、実績ある提携研修会社をご紹介します。"
          href="/contact?type=web-marketing-training"
          ctaLabel="Webマーケティング研修について相談する"
          note="株式会社サイプレスは研修会社への紹介窓口です。助成金の申請代行は行っておらず、採択・支給を保証するものではありません。"
        />
      </main>
      <Footer />
    </>
  );
}

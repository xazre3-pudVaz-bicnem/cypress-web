import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import SubsidyDisclaimer from "@/components/shared/SubsidyDisclaimer";
import { CYPRESS_SCOPE, REFERRAL_FLOW, TRAINING_THEMES } from "@/lib/data/trainingPages";

const BASE = "https://www.cypress-all.co.jp";
const URL = `${BASE}/training`;

export const metadata: Metadata = {
  title: "法人研修の導入相談｜AI・DX・Webマーケティング研修｜株式会社サイプレス",
  description:
    "法人向けAI研修・DX研修・Webマーケティング研修の導入相談窓口。人材開発支援助成金の活用を検討する企業向けに、実績ある提携研修会社をご紹介します。申請代行は行いません。",
  keywords: [
    "法人研修",
    "企業研修 相談",
    "リスキリング研修",
    "AI研修 法人",
    "DX研修 法人",
    "社員研修 研修会社 紹介",
    "人材開発支援助成金 研修",
  ],
  openGraph: {
    title: "法人研修の導入相談｜AI・DX・Webマーケティング研修",
    description:
      "法人向けAI・DX・Webマーケティング研修の導入相談窓口。実績ある提携研修会社をご紹介します。",
    images: [{ url: "/ChatGPT Image 2026年6月14日 21_13_52.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
    url: URL,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: URL },
};

const PAGES = [
  {
    href: "/training/reskilling-subsidy",
    num: "01",
    label: "リスキリング研修相談",
    en: "Reskilling Training",
    desc: "人材開発支援助成金の活用を検討している企業向けの研修導入相談。研修テーマの整理から提携研修会社の紹介までを扱う中心ページです。",
  },
  {
    href: "/training/ai-dx-reskilling",
    num: "02",
    label: "AI・DXリスキリング研修",
    en: "AI & DX Reskilling",
    desc: "生成AIの業務活用と社内DX推進を学ぶ法人研修。「ツールは入れたが定着しない」「DXの進め方が分からない」という課題に対応します。",
  },
  {
    href: "/training/chatgpt-ai-training",
    num: "03",
    label: "ChatGPT・生成AI研修",
    en: "Generative AI Training",
    desc: "営業・事務・管理職など職種別に、実業務を題材とした生成AI活用を学ぶ研修。安全に使うための社内ルールづくりも扱います。",
  },
  {
    href: "/training/web-marketing-training",
    num: "04",
    label: "Webマーケティング研修",
    en: "Web Marketing Training",
    desc: "SEO・MEO・SNS運用・AIO活用を社内で判断できる人材を育てる研修。外注に任せきりの状態から抜け出すことを目指します。",
  },
  {
    href: "/training/hr-development-subsidy-guide",
    num: "05",
    label: "助成金を検討する前に",
    en: "Subsidy Guide",
    desc: "人材開発支援助成金の概要と、研修導入・研修会社選び・申請にあたって企業が確認すべきポイントを整理しました。",
  },
  {
    href: "/training/reskilling-training-company-referral",
    num: "06",
    label: "研修会社の紹介相談",
    en: "Company Referral",
    desc: "「どの研修会社を選べばよいか分からない」という段階からのご相談。研修会社選びで確認すべきことと紹介の流れを説明します。",
  },
];

const faqItems = [
  {
    q: "株式会社サイプレスは研修を実施しているのですか？",
    a: "いいえ。株式会社サイプレスはWebマーケティング会社であり、研修を実施する研修会社ではありません。研修導入を検討する企業と、実績ある提携研修会社をつなぐ紹介窓口として対応しています。研修の実施・契約・カリキュラム詳細の説明・受講証明等の発行は提携研修会社が行います。",
  },
  {
    q: "助成金の申請代行はしてもらえますか？",
    a: "いいえ。サイプレスは助成金の申請書作成、計画届作成、支給申請、労働局対応などの申請代行を行っていません。社会保険労務士業務も行いません。申請手続きは、申請企業自身または社会保険労務士等の専門家へご相談ください。",
  },
  {
    q: "助成金を活用すれば研修費用の負担はなくなりますか？",
    a: "いいえ。助成金の支給可否は、申請企業の状況、訓練計画、対象者、研修内容、申請内容などにより判断されます。株式会社サイプレスおよび提携研修会社は、採択・支給・受給を保証するものではありません。研修は自己負担でも価値のある投資として検討することをおすすめします。",
  },
  {
    q: "相談するのに費用はかかりますか？",
    a: "研修導入に関するご相談・提携研修会社のご紹介について、企業様から費用をいただくことはありません。研修そのものの費用は、提携研修会社との契約内容により決まります。",
  },
  {
    q: "どのような研修テーマを相談できますか？",
    a: "AI活用研修、ChatGPT・生成AI研修、DX推進研修、業務効率化研修、Webマーケティング研修、SEO・MEO・AIO基礎研修、SNS運用研修、営業活動のデジタル化研修、Googleビジネスプロフィール活用研修、Web担当者育成研修などを提携研修会社と相談できます。",
  },
  {
    q: "どの研修テーマが自社に合うか分からなくても相談できますか？",
    a: "はい。「社員にAIを使えるようになってほしい」「Web集客を社内で分かる人を育てたい」といった課題感の段階でご相談いただけます。ヒアリングを通じて、課題に対してどのテーマが適しているかを一緒に整理します。",
  },
  {
    q: "紹介を受けたあと、必ず契約しなければなりませんか？",
    a: "いいえ。提携研修会社との打ち合わせの結果、条件が合わなければお断りいただいて構いません。紹介を受けたことによる契約義務や費用は発生しません。",
  },
  {
    q: "問い合わせた情報は提携研修会社に共有されますか？",
    a: "お問い合わせフォームの同意欄にチェックをいただいた場合に限り、会社名・ご担当者名・連絡先・お問い合わせ内容を提携研修会社へ共有します。同意がない場合は共有しません。詳細はプライバシーポリシーをご確認ください。",
  },
  {
    q: "オンライン研修にも対応していますか？",
    a: "実施形式は提携研修会社との相談によります。集合形式・オンライン形式のどちらを希望されるかをお問い合わせ時にお知らせいただければ、対応可能な提携研修会社をご紹介します。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "株式会社サイプレスは東京都葛飾区を拠点としていますが、研修導入のご相談はオンラインで全国対応しています。研修の実施形式や実施地域は、提携研修会社との相談により決まります。",
  },
];

const relatedLinks = [
  { href: "/training/reskilling-subsidy", label: "リスキリング研修相談", desc: "研修導入相談の中心ページ" },
  { href: "/training/ai-dx-reskilling", label: "AI・DXリスキリング研修", desc: "AI・DX研修の導入相談" },
  { href: "/training/chatgpt-ai-training", label: "ChatGPT・生成AI研修", desc: "職種別のAI活用研修" },
  { href: "/training/web-marketing-training", label: "Webマーケティング研修", desc: "SEO・MEO・SNSを学ぶ" },
  { href: "/training/hr-development-subsidy-guide", label: "助成金を検討する前に", desc: "制度の確認ポイント" },
  { href: "/partner/training-company-referral", label: "研修会社紹介パートナー制度", desc: "紹介窓口の仕組み" },
  { href: "/column/category/training", label: "研修・人材育成コラム", desc: "専門コラム一覧" },
  { href: "/ai", label: "AI活用支援", desc: "業務自動化・AI導入支援" },
  { href: "/seo", label: "SEO対策", desc: "検索流入を増やす施策" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップ集客" },
  { href: "/services", label: "サービス一覧", desc: "Web集客支援の全体像" },
  { href: "/contact", label: "お問い合わせ", desc: "研修導入のご相談" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${BASE}/` },
    { "@type": "ListItem", position: 2, name: "法人研修の導入相談", item: URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": URL,
  url: URL,
  name: "法人研修の導入相談",
  description:
    "法人向けAI研修・DX研修・Webマーケティング研修の導入相談窓口。人材開発支援助成金の活用を検討する企業向けに、実績ある提携研修会社をご紹介します。",
  inLanguage: "ja",
  isPartOf: { "@id": `${BASE}/#website` },
  publisher: { "@id": `${BASE}/#organization` },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "法人研修の導入相談ページ一覧",
  itemListElement: PAGES.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.label,
    url: `${BASE}${p.href}`,
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "法人研修の導入相談・提携研修会社の紹介",
  serviceType: "研修会社紹介・研修導入相談",
  description:
    "AI研修・DX研修・Webマーケティング研修などの法人研修について、導入を検討する企業からの相談を受け付け、実績ある提携研修会社を紹介する窓口サービスです。研修の実施は提携研修会社が行い、助成金の申請代行は行いません。",
  provider: { "@id": `${BASE}/#organization` },
  areaServed: { "@type": "Country", name: "日本" },
  audience: { "@type": "BusinessAudience", name: "研修導入を検討する法人・中小企業" },
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

export default function TrainingHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section style={{ background: "#0d1b2a", position: "relative", paddingTop: "128px", paddingBottom: "80px", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/ChatGPT Image 2026年6月14日 21_13_52.jpg"
              alt="法人向けAI・DX・Webマーケティング研修の導入相談イメージ"
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
              <span>法人研修の導入相談</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "16px" }}>
              Corporate Training
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,4.2vw,46px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.25, marginBottom: "28px" }}>
              法人研修の導入相談
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.95", color: "rgba(255,255,255,0.78)", maxWidth: "660px", marginBottom: "36px" }}>
              AI研修・DX研修・Webマーケティング研修の導入を検討している企業向けの相談窓口です。株式会社サイプレスは研修会社ではなく、課題に合った実績ある提携研修会社をおつなぎする紹介窓口として対応します。人材開発支援助成金の活用を検討している企業からのご相談も承ります。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?type=reskilling"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[14px] font-medium transition-all"
                style={{ background: "#ffffff", color: "#0d1b2a" }}
              >
                研修導入について相談する
              </Link>
              <Link
                href="/training/reskilling-subsidy"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[14px] font-medium transition-all hover:bg-white hover:text-[#0d1b2a]"
                style={{ border: "1px solid rgba(255,255,255,0.5)", color: "#ffffff" }}
              >
                リスキリング研修相談を見る
              </Link>
            </div>
            <p style={{ fontSize: "12px", lineHeight: "1.9", color: "rgba(255,255,255,0.55)", maxWidth: "660px", marginTop: "28px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              株式会社サイプレスは助成金の申請代行および社会保険労務士業務を行いません。助成金の採択・支給・受給を保証するものではありません。支給可否は申請企業の状況、訓練計画、対象者、研修内容、申請内容等により判断されます。
            </p>
          </div>
        </section>

        {/* ── 相談できるページ一覧 ───────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Pages</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "44px" }}>
              目的から選ぶ
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PAGES.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  style={{
                    display: "block",
                    background: "#f8f6f2",
                    border: "1px solid #e8e4dc",
                    padding: "26px",
                    textDecoration: "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "10px", color: "#c4b89a", letterSpacing: "0.18em" }}>{p.num}</span>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "9px", color: "#9ca3af", letterSpacing: "0.18em", textTransform: "uppercase" }}>{p.en}</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15.5px", fontWeight: 700, color: "#0d1b2a", marginBottom: "10px" }}>{p.label}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{p.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 相談できる研修テーマ ───────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Themes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "18px" }}>
              相談できる研修テーマ
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "2.0", color: "#374151", maxWidth: "720px", marginBottom: "44px" }}>
              以下は提携研修会社と相談できるテーマの例です。これらのテーマが必ず助成金の対象になるという意味ではありません。
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {TRAINING_THEMES.map((item) => (
                <div key={item.label} style={{ background: "#ffffff", border: "1px solid #e8e4dc", padding: "22px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "14.5px", fontWeight: 700, color: "#0d1b2a", marginBottom: "9px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── サイプレスの立ち位置 ───────────────────────────── */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", fontSize: "11px", marginBottom: "14px" }}>Our Position</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.35, marginBottom: "24px" }}>
              サイプレスは「紹介窓口」です
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "2.05", color: "rgba(255,255,255,0.75)", maxWidth: "760px", marginBottom: "48px" }}>
              研修の実施・契約・カリキュラム詳細の説明・受講証明等の発行は提携研修会社が対応します。助成金の申請手続き、計画届作成、支給申請、労働局対応は、申請企業自身または社労士等の専門家が行うものです。
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div style={{ border: "1px solid rgba(255,255,255,0.16)", padding: "30px" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "18px" }}>行うこと</p>
                {CYPRESS_SCOPE.does.map((item) => (
                  <div key={item} style={{ display: "flex", gap: "12px", padding: "11px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <span style={{ color: "#ffffff", flexShrink: 0, fontSize: "13px" }}>✓</span>
                    <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.78)", lineHeight: "1.8" }}>{item}</p>
                  </div>
                ))}
              </div>
              <div style={{ border: "1px solid rgba(255,255,255,0.16)", padding: "30px", background: "rgba(255,255,255,0.03)" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "18px" }}>行わないこと</p>
                {CYPRESS_SCOPE.doesNot.map((item) => (
                  <div key={item} style={{ display: "flex", gap: "12px", padding: "11px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <span style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0, fontSize: "13px" }}>×</span>
                    <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 相談から紹介までの流れ ─────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              相談から紹介までの流れ
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {REFERRAL_FLOW.map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "24px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", minWidth: "28px", paddingTop: "3px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15.5px", color: "#0d1b2a", marginBottom: "8px" }}>{item.title}</p>
                    <p style={{ fontSize: "13.5px", color: "#374151", lineHeight: "1.95" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        <SubsidyDisclaimer bgColor="#f8f6f2" />

        <FaqSection items={faqItems} heading="法人研修の導入相談についてよくある質問" bgColor="#ffffff" />

        <RelatedPages links={relatedLinks} heading="関連ページ" />

        <PageContactCTA
          heading="法人研修の導入についてご相談ください"
          body="AI研修・DX研修・Webマーケティング研修の導入を検討している企業様からのご相談を承っています。課題感の段階でも構いません。内容をお伺いしたうえで、実績ある提携研修会社をご紹介します。"
          href="/contact?type=reskilling"
          ctaLabel="研修導入について相談する"
          note="株式会社サイプレスは研修会社への紹介窓口です。助成金の申請代行および社会保険労務士業務は行っておらず、採択・支給を保証するものではありません。"
        />
      </main>
      <Footer />
    </>
  );
}

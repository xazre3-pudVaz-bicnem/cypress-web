import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import SubsidyDisclaimer from "@/components/shared/SubsidyDisclaimer";
import {
  CYPRESS_SCOPE,
  PARTNER_TRAINING_FEATURES,
  REFERRAL_FLOW,
  RESKILLING_DRIVERS,
  TRAINING_THEMES,
} from "@/lib/data/trainingPages";

const BASE = "https://www.cypress-all.co.jp";
const URL = `${BASE}/training/reskilling-subsidy`;

export const metadata: Metadata = {
  title: "人材開発支援助成金の活用を検討できるリスキリング研修相談｜AI・DX・Web研修｜株式会社サイプレス",
  description:
    "人材開発支援助成金の活用を検討している企業向けに、AI研修・DX研修・Webマーケティング研修などのリスキリング研修導入を相談できます。実績ある提携研修会社をご紹介します。",
  keywords: [
    "人材開発支援助成金 研修",
    "人材開発支援助成金 リスキリング",
    "事業展開等リスキリング支援コース 研修",
    "リスキリング研修 助成金",
    "DX研修 助成金",
    "AI研修 助成金",
    "中小企業 リスキリング研修",
  ],
  openGraph: {
    title: "人材開発支援助成金の活用を検討できるリスキリング研修相談｜AI・DX・Web研修",
    description:
      "助成金の活用を検討している企業向けのリスキリング研修導入相談。AI・DX・Webマーケティング研修に対応する実績ある提携研修会社をご紹介します。",
    images: [{ url: "/ChatGPT Image 2026年6月14日 21_13_52.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
    url: URL,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: URL },
};

const faqItems = [
  {
    q: "人材開発支援助成金を使えば研修費は必ず助成されますか？",
    a: "いいえ。助成金の支給可否は、企業の状況、訓練計画、対象者、研修内容、申請内容などにより判断されます。株式会社サイプレスおよび提携研修会社は、採択や支給を保証するものではありません。",
  },
  {
    q: "サイプレスは助成金の申請代行をしてくれますか？",
    a: "いいえ。株式会社サイプレスは助成金の申請書作成、計画届作成、支給申請、労働局対応などの申請代行は行っていません。申請手続きは、申請企業自身または社労士等の専門家へご相談ください。",
  },
  {
    q: "どのような研修を紹介できますか？",
    a: "AI活用研修、ChatGPT・生成AI研修、DX研修、Webマーケティング研修、SEO・MEO研修、SNS運用研修など、企業の課題に応じた研修を提携研修会社と相談できます。",
  },
  {
    q: "研修会社は実績がありますか？",
    a: "提携研修会社は、法人向け研修を複数回実施している実績があります。具体的な内容や対応可否は、お問い合わせ後に確認します。",
  },
  {
    q: "サイプレスは研修会社なのですか？",
    a: "いいえ。株式会社サイプレスはWebマーケティング会社であり、研修を実施する会社ではありません。研修導入を検討する企業と、実績ある提携研修会社をつなぐ紹介窓口として対応しています。研修の実施・契約・カリキュラムの詳細説明・受講証明等の発行は提携研修会社が行います。",
  },
  {
    q: "助成金の金額や助成率はいくらですか？",
    a: "助成率・上限額などの数値は改定される可能性があるため、本サイトには掲載していません。最新の金額・要件は厚生労働省の公式ページ、または管轄労働局・社労士等にご確認ください。",
  },
  {
    q: "相談すると費用がかかりますか？",
    a: "研修導入に関する初回のご相談・提携研修会社のご紹介について、企業様から費用をいただくことはありません。研修そのものの費用は、提携研修会社との契約内容により決まります。",
  },
  {
    q: "問い合わせた情報は提携研修会社に共有されますか？",
    a: "お問い合わせフォームの同意欄にチェックをいただいた場合に限り、会社名・ご担当者名・連絡先・お問い合わせ内容を提携研修会社へ共有します。同意がない場合は共有しません。詳細はプライバシーポリシーをご確認ください。",
  },
  {
    q: "どの研修テーマが自社に合うか分かりません。相談できますか？",
    a: "はい。「社員にAIを使えるようになってほしい」「Web集客を社内で分かる人を育てたい」といった課題感の段階でご相談いただけます。ヒアリングを通じて、課題に対してどのテーマが適しているかを一緒に整理します。",
  },
  {
    q: "事業展開等リスキリング支援コースとは何ですか？",
    a: "人材開発支援助成金のコースのひとつで、新規事業の立ち上げなどの事業展開に伴い新たな分野で必要となる知識・技能を習得させる訓練や、DX・グリーン化の推進に必要な人材育成のための訓練を実施した場合に、訓練経費や訓練期間中の賃金の一部等が助成される制度です。対象要件や助成内容は変更される場合があるため、必ず厚生労働省の公式情報をご確認ください。",
  },
  {
    q: "申請手続きは誰が行うのですか？",
    a: "申請手続きは、申請企業自身、または委任を受けた社会保険労務士等の専門家が行います。サイプレスおよび提携研修会社が申請手続きを代行することはありません。",
  },
  {
    q: "研修はオンラインでも実施できますか？",
    a: "実施形式は提携研修会社との相談によります。集合形式・オンライン形式のどちらを希望されるかをお問い合わせ時にお知らせいただければ、対応可能な提携研修会社をご紹介します。",
  },
  {
    q: "何名から研修を依頼できますか？",
    a: "対象人数の下限・上限は提携研修会社および研修テーマによって異なります。想定する受講人数をお伝えいただければ、対応可能かを確認したうえでご案内します。",
  },
  {
    q: "紹介を受けたあと、必ず契約しなければなりませんか？",
    a: "いいえ。提携研修会社との打ち合わせの結果、条件が合わなければお断りいただいて構いません。紹介を受けたことによる契約義務や費用は発生しません。",
  },
];

const commonInquiries = [
  "社員にAIを使えるようになってほしい",
  "DX研修を導入したい",
  "Webマーケティングを社内で学ばせたい",
  "営業担当にAI活用を学ばせたい",
  "助成金を活用できる研修を探している",
  "どの研修テーマが自社に合うか分からない",
  "研修会社を探している",
  "申請手続きは社労士に相談したい",
];

const relatedLinks = [
  { href: "/training/ai-dx-reskilling", label: "AI・DXリスキリング研修", desc: "AI・DX研修の導入相談" },
  { href: "/training/chatgpt-ai-training", label: "ChatGPT・生成AI研修", desc: "社員向けAI活用研修" },
  { href: "/training/web-marketing-training", label: "Webマーケティング研修", desc: "SEO・MEO・SNSを学ぶ" },
  { href: "/training/hr-development-subsidy-guide", label: "助成金を検討する前に", desc: "制度の確認ポイント" },
  { href: "/training/reskilling-training-company-referral", label: "研修会社の紹介相談", desc: "研修会社選びの相談" },
  { href: "/partner/training-company-referral", label: "研修会社紹介パートナー制度", desc: "紹介窓口の仕組み" },
  { href: "/ai", label: "AI活用支援", desc: "業務自動化・AI導入支援" },
  { href: "/seo", label: "SEO対策", desc: "検索流入を増やす施策" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップ集客" },
  { href: "/aio", label: "AIO対策", desc: "AI検索に引用されるサイトへ" },
  { href: "/contact", label: "お問い合わせ", desc: "研修導入のご相談" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${BASE}/` },
    { "@type": "ListItem", position: 2, name: "人材開発支援助成金の活用を検討できるリスキリング研修相談", item: URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": URL,
  url: URL,
  name: "人材開発支援助成金の活用を検討できるリスキリング研修相談",
  description:
    "人材開発支援助成金の活用を検討している企業向けに、AI研修・DX研修・Webマーケティング研修などのリスキリング研修導入を相談できます。実績ある提携研修会社をご紹介します。",
  inLanguage: "ja",
  isPartOf: { "@id": `${BASE}/#website` },
  about: { "@type": "Thing", name: "リスキリング研修・人材開発支援助成金" },
  publisher: { "@id": `${BASE}/#organization` },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "リスキリング研修の導入相談・提携研修会社の紹介",
  serviceType: "研修会社紹介・研修導入相談",
  description:
    "AI研修・DX研修・Webマーケティング研修などのリスキリング研修について、導入を検討する企業からの相談を受け付け、実績ある提携研修会社を紹介する窓口サービスです。助成金の申請代行は行いません。",
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

export default function ReskillingSubsidyPage() {
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
              src="/ChatGPT Image 2026年6月14日 21_13_52.jpg"
              alt="人材開発支援助成金の活用を検討する企業向け研修相談イメージ"
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
              <span>リスキリング研修相談</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "16px" }}>
              Reskilling Training
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,4.2vw,46px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.25, marginBottom: "28px" }}>
              人材開発支援助成金の活用を検討できる<br className="hidden md:block" />リスキリング研修相談
            </h1>
            <p style={{ fontSize: "17px", lineHeight: "1.9", color: "#ffffff", fontWeight: 700, maxWidth: "640px", marginBottom: "18px" }}>
              AI・DX・Webマーケティングのリスキリング研修を、<br className="hidden md:block" />
              実績ある提携研修会社へおつなぎします。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.95", color: "rgba(255,255,255,0.72)", maxWidth: "620px", marginBottom: "36px" }}>
              株式会社サイプレスは研修会社ではなく、研修導入を検討する企業と提携研修会社をつなぐ紹介窓口です。人材開発支援助成金の活用を検討している企業からのご相談も承っています。
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
                href="/contact?type=training-referral"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[14px] font-medium transition-all hover:bg-white hover:text-[#0d1b2a]"
                style={{ border: "1px solid rgba(255,255,255,0.5)", color: "#ffffff" }}
              >
                提携研修会社の紹介を相談する
              </Link>
            </div>

            <p style={{ fontSize: "12px", lineHeight: "1.9", color: "rgba(255,255,255,0.55)", maxWidth: "640px", marginTop: "28px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              株式会社サイプレスは助成金の申請代行を行いません。助成金の採択・支給・受給を保証するものではありません。支給可否は申請企業の状況、訓練計画、対象者、研修内容、申請内容等により判断されます。
            </p>
          </div>
        </section>

        {/* ── なぜ検討する企業が増えているか ───────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Background</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.35, marginBottom: "20px" }}>
              人材開発支援助成金とリスキリング研修を<br className="hidden md:block" />検討する企業が増えている理由
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151", maxWidth: "720px", marginBottom: "44px" }}>
              採用が難しくなるなかで、既存社員のスキルを引き上げる「リスキリング」に取り組む中小企業が増えています。とくにAI活用とDX推進は、業種を問わず共通の課題になっています。
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {RESKILLING_DRIVERS.map((item) => (
                <div key={item.title} style={{ background: "#f8f6f2", border: "1px solid #e8e4dc", padding: "24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "10px" }}>{item.title}</p>
                  <p style={{ fontSize: "13.5px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 事業展開等リスキリング支援コースとは ─────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>About The Program</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.35, marginBottom: "28px" }}>
                事業展開等リスキリング支援コースとは
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "18px" }}>
                事業展開等リスキリング支援コースは、厚生労働省の「人材開発支援助成金」に設けられているコースのひとつです。新規事業の立ち上げなどの事業展開に伴い、新たな分野で必要となる知識・技能を習得させるための訓練を実施した場合や、事業展開は伴わないものの企業内のDX化・グリーン化の推進に必要な人材育成のための訓練を実施した場合に、訓練経費や訓練期間中の賃金の一部等が助成される制度です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "18px" }}>
                AI活用やDX推進をテーマとした研修は、この制度の趣旨と重なる領域です。そのため「自社の研修が助成金の活用を検討できる内容にあたるか」を確認したいというご相談が増えています。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "28px" }}>
                ただし、実際に助成の対象となるかどうかは、訓練計画の内容、対象となる労働者、研修の実施形態、申請のタイミングなど、複数の要素によって個別に判断されます。研修を受講すれば自動的に助成されるという制度ではありません。
              </p>

              <div style={{ background: "#ffffff", border: "1px solid #e8e4dc", borderLeft: "3px solid #0d1b2a", padding: "24px 26px" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#0d1b2a", marginBottom: "10px" }}>必ずご確認ください</p>
                <p style={{ fontSize: "13.5px", lineHeight: "1.95", color: "#374151" }}>
                  制度内容、対象要件、助成率、上限額、申請期限、必要書類は変更される可能性があります。最新情報は必ず厚生労働省、管轄労働局、社労士等へご確認ください。本ページでは、改定により古くなりうる助成率・上限額などの数値は掲載していません。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 対象になり得る研修テーマ ─────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Training Themes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.35, marginBottom: "18px" }}>
              助成金の活用を検討できる研修テーマ
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "2.0", color: "#374151", maxWidth: "720px", marginBottom: "44px" }}>
              以下は、提携研修会社と相談できる研修テーマの例です。これらのテーマが必ず助成金の対象になるという意味ではありません。対象可否は訓練計画・対象者・研修内容などをもとに個別に判断されます。
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {TRAINING_THEMES.map((item) => (
                <div key={item.label} style={{ background: "#f8f6f2", border: "1px solid #e8e4dc", padding: "22px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "14.5px", fontWeight: 700, color: "#0d1b2a", marginBottom: "9px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── サイプレスの立ち位置 ────────────────────────────── */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", fontSize: "11px", marginBottom: "14px" }}>Our Position</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.35, marginBottom: "24px" }}>
              サイプレスは「紹介窓口」です
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "2.05", color: "rgba(255,255,255,0.75)", maxWidth: "760px", marginBottom: "48px" }}>
              株式会社サイプレスは、研修導入を検討する企業と、実績ある提携研修会社をつなぐ紹介窓口です。研修の実施、契約、カリキュラム詳細の説明、受講証明等の発行は提携研修会社が対応します。助成金の申請手続き、計画届作成、支給申請、労働局対応は、申請企業自身または社労士等の専門家が行うものです。
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div style={{ border: "1px solid rgba(255,255,255,0.16)", padding: "30px" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "18px" }}>
                  サイプレスが行うこと
                </p>
                {CYPRESS_SCOPE.does.map((item) => (
                  <div key={item} style={{ display: "flex", gap: "12px", padding: "11px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <span style={{ color: "#ffffff", flexShrink: 0, fontSize: "13px" }}>✓</span>
                    <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.78)", lineHeight: "1.8" }}>{item}</p>
                  </div>
                ))}
              </div>
              <div style={{ border: "1px solid rgba(255,255,255,0.16)", padding: "30px", background: "rgba(255,255,255,0.03)" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "18px" }}>
                  サイプレスが行わないこと
                </p>
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

        {/* ── 提携研修会社の特徴 ──────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Partner Training Companies</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.35, marginBottom: "40px" }}>
              提携研修会社の特徴
            </h2>
            <div style={{ maxWidth: "780px" }}>
              {PARTNER_TRAINING_FEATURES.map((item) => (
                <div key={item.title} style={{ padding: "22px 0", borderTop: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15.5px", fontWeight: 700, color: "#0d1b2a", marginBottom: "9px" }}>{item.title}</p>
                  <p style={{ fontSize: "13.5px", color: "#374151", lineHeight: "1.95" }}>{item.body}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        {/* ── 相談から紹介までの流れ ──────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
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

        {/* ── よくある相談内容 ───────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Common Inquiries</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "36px" }}>
              よくある相談内容
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8" style={{ maxWidth: "820px" }}>
              {commonInquiries.map((item) => (
                <div key={item} style={{ display: "flex", gap: "12px", padding: "15px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ color: "#c4b89a", flexShrink: 0, fontSize: "13px", paddingTop: "1px" }}>—</span>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SubsidyDisclaimer bgColor="#f8f6f2" />

        <FaqSection items={faqItems} heading="リスキリング研修・助成金についてよくある質問" bgColor="#ffffff" />

        <RelatedPages links={relatedLinks} heading="関連ページ" />

        <PageContactCTA
          heading="リスキリング研修の導入についてご相談ください"
          body="AI研修・DX研修・Webマーケティング研修の導入を検討している企業様からのご相談を承っています。課題感の段階でも構いません。内容をお伺いしたうえで、実績ある提携研修会社をご紹介します。"
          href="/contact?type=reskilling"
          ctaLabel="リスキリング研修について相談する"
          note="株式会社サイプレスは研修会社への紹介窓口です。助成金の申請代行は行っておらず、採択・支給を保証するものではありません。申請手続きは申請企業自身または社労士等の専門家へご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}

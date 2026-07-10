import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import SubsidyDisclaimer from "@/components/shared/SubsidyDisclaimer";
import { REFERRAL_FLOW } from "@/lib/data/trainingPages";

const BASE = "https://www.cypress-all.co.jp";
const URL = `${BASE}/partner/training-company-referral`;

export const metadata: Metadata = {
  title: "研修会社紹介パートナー制度｜リスキリング研修・AI研修・DX研修の相談窓口｜株式会社サイプレス",
  description:
    "株式会社サイプレスは研修会社ではなく、実績ある提携研修会社への紹介窓口です。サイプレス・提携研修会社・申請企業と社労士それぞれの役割、紹介の流れ、禁止している営業表現をご説明します。",
  keywords: [
    "研修会社 紹介",
    "研修会社紹介 パートナー",
    "リスキリング研修 紹介窓口",
    "AI研修会社 紹介",
    "助成金対応 研修会社 紹介",
  ],
  openGraph: {
    title: "研修会社紹介パートナー制度｜リスキリング研修・AI研修・DX研修の相談窓口",
    description:
      "サイプレスは研修会社ではなく紹介窓口です。それぞれの役割と紹介の流れをご説明します。",
    images: [{ url: "/ChatGPT Image 2026年6月14日 21_08_57 (2).jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
    url: URL,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: URL },
};

const roles = [
  {
    actor: "株式会社サイプレス",
    subtitle: "紹介窓口",
    items: [
      "研修導入を検討する企業からのご相談受付",
      "課題・対象者・研修テーマのヒアリング",
      "テーマに合った提携研修会社のご紹介",
      "提携研修会社との顔合わせの調整",
    ],
    excludes: [
      "研修の実施",
      "助成金の申請代行",
      "社会保険労務士業務",
      "助成金の採択・支給の保証",
    ],
  },
  {
    actor: "提携研修会社",
    subtitle: "研修の実施主体",
    items: [
      "研修カリキュラムの設計・詳細説明",
      "研修の実施（集合形式・オンライン形式）",
      "研修に関する契約の締結",
      "受講証明等の書類の発行",
    ],
    excludes: [
      "助成金の申請代行",
      "助成金の採択・支給の保証",
    ],
  },
  {
    actor: "申請企業・社労士等",
    subtitle: "助成金申請の主体",
    items: [
      "助成金の対象要件の確認",
      "訓練計画・計画届の作成",
      "支給申請の手続き",
      "管轄労働局への対応",
    ],
    excludes: [],
  },
];

const referralThemes = [
  { label: "AI活用研修", desc: "AIの基礎理解から自社業務への当てはめまで。" },
  { label: "ChatGPT・生成AI研修", desc: "職種別の実践的な生成AI活用。" },
  { label: "DX推進研修", desc: "業務のデジタル化の進め方と社内推進。" },
  { label: "業務効率化研修", desc: "定型業務の洗い出しと自動化の考え方。" },
  { label: "Webマーケティング研修", desc: "SEO・MEO・SNSを含む集客の全体設計。" },
  { label: "Web担当者育成研修", desc: "社内でWeb運用を担う人材の育成。" },
];

const prohibitedExpressions = [
  "助成金が必ず使えます",
  "実質無料で研修できます",
  "研修費が戻ってきます",
  "最大◯◯万円もらえます",
  "申請すれば通ります",
  "助成金対象確定",
  "採択保証・支給保証",
  "受給率◯％",
  "無料で申請サポート",
  "申請書類作成まで対応",
  "労働局対応も代行",
  "社労士不要",
];

const faqItems = [
  {
    q: "サイプレスは研修会社ですか？",
    a: "いいえ。株式会社サイプレスはWebマーケティング会社であり、研修を実施する会社ではありません。研修導入を検討する企業と、実績ある提携研修会社をつなぐ紹介窓口として対応しています。",
  },
  {
    q: "紹介手数料はどのような仕組みですか？",
    a: "提携研修会社との間で紹介に関する取り決めを設けています。具体的な料率・条件は個別にご案内しています。なお、研修導入を検討する企業様からご相談・ご紹介の費用をいただくことはありません。",
  },
  {
    q: "企業側に費用は発生しますか？",
    a: "サイプレスへのご相談・提携研修会社のご紹介について、企業様から費用をいただくことはありません。研修そのものの費用は、提携研修会社との契約内容により決まります。",
  },
  {
    q: "助成金の申請代行はしてもらえますか？",
    a: "いいえ。サイプレスも提携研修会社も、助成金の申請書作成、計画届作成、支給申請、労働局対応などの申請代行は行いません。申請手続きは、申請企業自身または社会保険労務士等の専門家が行うものです。",
  },
  {
    q: "助成金の採択・支給は保証されますか？",
    a: "いいえ。支給可否は、申請企業の状況、訓練計画、対象者、研修内容、申請内容などにより判断されます。サイプレスおよび提携研修会社は、採択や支給を保証するものではありません。",
  },
  {
    q: "問い合わせた情報はどこまで共有されますか？",
    a: "お問い合わせフォームの同意欄にチェックをいただいた場合に限り、会社名・ご担当者名・連絡先・お問い合わせ内容を提携研修会社へ共有します。同意がない場合は共有しません。詳細はプライバシーポリシーをご確認ください。",
  },
  {
    q: "紹介を受けたあと、必ず契約しなければなりませんか？",
    a: "いいえ。提携研修会社との打ち合わせの結果、条件が合わなければお断りいただいて構いません。紹介を受けたことによる契約義務や費用は発生しません。",
  },
  {
    q: "提携研修会社の社名を教えてもらえますか？",
    a: "ご相談内容をお伺いしたうえで、テーマに対応できる提携研修会社をご案内します。サイト上での社名の掲載については、提携研修会社との取り決めにもとづき対応しています。",
  },
  {
    q: "この制度と、既存の取次店・販売代理店制度は違うものですか？",
    a: "はい、別のものです。取次店・販売代理店制度は、サイプレスのWebマーケティングサービス（MEO・SEO・ホームページ制作等）を紹介いただく仕組みです。本ページの研修会社紹介は、研修導入を検討する企業を提携研修会社へおつなぎする窓口機能を指します。",
  },
];

const relatedLinks = [
  { href: "/training/reskilling-subsidy", label: "リスキリング研修相談", desc: "研修導入相談の中心ページ" },
  { href: "/training/reskilling-training-company-referral", label: "研修会社の紹介相談", desc: "研修会社選びの相談" },
  { href: "/training/hr-development-subsidy-guide", label: "助成金を検討する前に", desc: "制度の確認ポイント" },
  { href: "/training/ai-dx-reskilling", label: "AI・DXリスキリング研修", desc: "AI・DX研修の導入相談" },
  { href: "/partner", label: "パートナー制度", desc: "各種パートナー制度の一覧" },
  { href: "/partner/referral", label: "取次店・紹介パートナー", desc: "Web集客サービスの紹介制度" },
  { href: "/privacy-policy", label: "プライバシーポリシー", desc: "個人情報の取り扱い" },
  { href: "/services", label: "サービス一覧", desc: "Web集客支援の全体像" },
  { href: "/contact", label: "お問い合わせ", desc: "研修会社紹介のご相談" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${BASE}/` },
    { "@type": "ListItem", position: 2, name: "パートナー制度", item: `${BASE}/partner` },
    { "@type": "ListItem", position: 3, name: "研修会社紹介パートナー制度", item: URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": URL,
  url: URL,
  name: "研修会社紹介パートナー制度",
  description:
    "株式会社サイプレスは研修会社ではなく、実績ある提携研修会社への紹介窓口です。サイプレス・提携研修会社・申請企業と社労士それぞれの役割、紹介の流れ、禁止している営業表現をご説明します。",
  inLanguage: "ja",
  isPartOf: { "@id": `${BASE}/#website` },
  publisher: { "@id": `${BASE}/#organization` },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "研修会社紹介パートナー制度",
  serviceType: "研修会社紹介窓口",
  description:
    "研修導入を検討する企業と実績ある提携研修会社をつなぐ紹介窓口です。研修の実施は提携研修会社が行い、助成金の申請手続きは申請企業または社労士等が行います。サイプレスは申請代行を行いません。",
  provider: { "@id": `${BASE}/#organization` },
  areaServed: { "@type": "Country", name: "日本" },
  audience: { "@type": "BusinessAudience", name: "研修導入を検討する法人・提携を検討する研修会社" },
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

export default function TrainingCompanyReferralPartnerPage() {
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
              src="/ChatGPT Image 2026年6月14日 21_08_57 (2).jpg"
              alt="研修会社紹介パートナー制度・提携のイメージ"
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
              <Link href="/partner" style={{ color: "rgba(255,255,255,0.4)" }}>パートナー制度</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span>研修会社紹介パートナー制度</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "16px" }}>
              Referral Model
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,4.2vw,46px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.25, marginBottom: "28px" }}>
              研修会社紹介パートナー制度
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.95", color: "rgba(255,255,255,0.78)", maxWidth: "660px", marginBottom: "36px" }}>
              株式会社サイプレスは研修会社そのものではなく、実績ある提携研修会社への紹介窓口です。誰が何を担当するのかを明確にし、企業様が安心して研修導入を検討できる状態をつくります。
            </p>
            <Link
              href="/contact?type=training-referral"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[14px] font-medium transition-all"
              style={{ background: "#ffffff", color: "#0d1b2a" }}
            >
              研修会社紹介について相談する
            </Link>
          </div>
        </section>

        {/* ── 3者の役割 ──────────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Roles</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.35, marginBottom: "18px" }}>
              それぞれの役割
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "2.0", color: "#374151", maxWidth: "720px", marginBottom: "44px" }}>
              研修導入と助成金の検討には、3つの立場が関わります。役割の境界を曖昧にしないことが、トラブルを防ぐ最も確実な方法です。
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {roles.map((role) => (
                <div key={role.actor} style={{ background: "#f8f6f2", border: "1px solid #e8e4dc", padding: "28px" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "10px", letterSpacing: "0.18em", color: "#c4b89a", marginBottom: "10px", textTransform: "uppercase" }}>
                    {role.subtitle}
                  </p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "18px" }}>
                    {role.actor}
                  </p>
                  {role.items.map((item) => (
                    <div key={item} style={{ display: "flex", gap: "10px", padding: "9px 0", borderTop: "1px solid #e8e4dc" }}>
                      <span style={{ color: "#0d1b2a", flexShrink: 0, fontSize: "12px" }}>✓</span>
                      <p style={{ fontSize: "12.5px", color: "#374151", lineHeight: "1.8" }}>{item}</p>
                    </div>
                  ))}
                  {role.excludes.length > 0 && (
                    <>
                      <p style={{ fontSize: "11px", color: "#9ca3af", marginTop: "18px", marginBottom: "6px", fontWeight: 600 }}>行わないこと</p>
                      {role.excludes.map((item) => (
                        <div key={item} style={{ display: "flex", gap: "10px", padding: "8px 0", borderTop: "1px solid #e8e4dc" }}>
                          <span style={{ color: "#9ca3af", flexShrink: 0, fontSize: "12px" }}>×</span>
                          <p style={{ fontSize: "12.5px", color: "#9ca3af", lineHeight: "1.8" }}>{item}</p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 紹介できる研修テーマ ───────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Themes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              紹介できる研修テーマ
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {referralThemes.map((item) => (
                <div key={item.label} style={{ background: "#ffffff", border: "1px solid #e8e4dc", padding: "22px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "14.5px", fontWeight: 700, color: "#0d1b2a", marginBottom: "9px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 紹介手数料モデル ───────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Referral Fee</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.35, marginBottom: "28px" }}>
                紹介手数料モデル
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "18px" }}>
                株式会社サイプレスは、提携研修会社との間で紹介に関する取り決めを設けています。研修導入を検討する企業様から、ご相談や提携研修会社のご紹介について費用をいただくことはありません。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "18px" }}>
                紹介手数料の具体的な料率・条件については、提携研修会社との取り決めにもとづき個別にご案内しています。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151" }}>
                なお、紹介手数料の有無にかかわらず、企業様の課題に合わない研修をご紹介することはありません。テーマが合わない場合は、その旨をお伝えします。
              </p>
            </div>
          </div>
        </section>

        {/* ── 問い合わせから紹介までの流れ ───────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              問い合わせから紹介までの流れ
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

        {/* ── 禁止している営業表現 ───────────────────────────── */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", fontSize: "11px", marginBottom: "14px" }}>Prohibited</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.35, marginBottom: "24px" }}>
              禁止している営業表現
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "2.05", color: "rgba(255,255,255,0.75)", maxWidth: "760px", marginBottom: "44px" }}>
              助成金の活用を訴求する際、事実と異なる期待を与える表現が使われることがあります。サイプレスは、自社のサイト・提案・営業活動において以下の表現を使用しません。他社から同様の説明を受けた場合は、その根拠を慎重にご確認ください。
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8" style={{ maxWidth: "900px" }}>
              {prohibitedExpressions.map((item) => (
                <div key={item} style={{ display: "flex", gap: "12px", padding: "13px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0, fontSize: "13px" }}>×</span>
                  <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.72)", lineHeight: "1.8" }}>{item}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "13.5px", lineHeight: "2.0", color: "rgba(255,255,255,0.6)", maxWidth: "760px", marginTop: "36px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              助成金の支給可否は、申請企業の状況、訓練計画、対象者、研修内容、申請内容等により判断されます。株式会社サイプレスおよび提携研修会社は、採択・支給・受給を保証するものではありません。
            </p>
          </div>
        </section>

        {/* ── 個人情報の取り扱い ─────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Privacy</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.35, marginBottom: "26px" }}>
                個人情報の取り扱い
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "18px" }}>
                提携研修会社をご紹介するにあたり、会社名・ご担当者名・連絡先・お問い合わせ内容を提携研修会社へ共有します。この共有は、お問い合わせフォームの同意欄にチェックをいただいた場合に限り行います。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151" }}>
                同意がない場合、提携研修会社へ情報を共有することはありません。共有された情報は、提携研修会社が研修に関するご連絡・ご提案を行う目的にのみ使用します。
              </p>
              <Link href="/privacy-policy" className="inline-block mt-8 text-[13px] underline" style={{ color: "#0d1b2a" }}>
                プライバシーポリシーを見る →
              </Link>
            </div>
          </div>
        </section>

        <SubsidyDisclaimer bgColor="#f8f6f2" />

        <FaqSection items={faqItems} heading="研修会社紹介パートナー制度についてよくある質問" bgColor="#ffffff" />

        <RelatedPages links={relatedLinks} heading="関連ページ" />

        <PageContactCTA
          heading="研修会社紹介についてご相談ください"
          body="研修導入を検討している企業様、また提携をご検討の研修会社様からのお問い合わせを承っています。役割と条件を明確にしたうえで進めます。"
          href="/contact?type=training-referral"
          ctaLabel="研修会社紹介について相談する"
          note="株式会社サイプレスは研修会社への紹介窓口です。助成金の申請代行および社会保険労務士業務は行っておらず、採択・支給を保証するものではありません。"
        />
      </main>
      <Footer />
    </>
  );
}

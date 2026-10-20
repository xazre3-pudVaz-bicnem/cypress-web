import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import SubsidyDisclaimer from "@/components/shared/SubsidyDisclaimer";
import { PARTNER_TRAINING_FEATURES, REFERRAL_FLOW } from "@/lib/data/trainingPages";

const BASE = "https://www.cypress-all.co.jp";
const URL = `${BASE}/training/reskilling-training-company-referral`;

export const metadata: Metadata = {
  title: "リスキリング研修会社の紹介相談｜AI・DX・Webマーケティング研修｜株式会社サイプレス",
  description:
    "AI研修・DX研修・Webマーケティング研修に対応する実績ある提携研修会社をご紹介します。研修会社選びで確認すべきこと、紹介までの流れ、情報共有の同意についてご説明します。",
  keywords: [
    "リスキリング研修会社",
    "研修会社 紹介",
    "AI研修会社 紹介",
    "DX研修会社 紹介",
    "助成金対応 研修会社 紹介",
    "社員研修 研修会社 紹介",
  ],
  openGraph: {
    title: "リスキリング研修会社の紹介相談｜AI・DX・Webマーケティング研修",
    description:
      "AI・DX・Webマーケティング研修に対応する実績ある提携研修会社をご紹介します。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_11_20.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
    url: URL,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: URL },
};

const whyIncreasing = [
  { title: "研修会社の数が多く、比較の軸が持てない", body: "同じ「AI研修」でも会社によって内容が大きく異なり、何を基準に選べばよいか分からないという声が多く聞かれます。" },
  { title: "自社の課題に合う研修が分からない", body: "「AIを学ばせたい」という要望はあっても、どのテーマ・どの深さが自社に必要かを判断できないケースがあります。" },
  { title: "問い合わせ対応の負担が大きい", body: "複数の研修会社へ個別に問い合わせ、同じ説明を繰り返す時間が取れないという課題があります。" },
  { title: "助成金の活用を検討しており、進め方を整理したい", body: "研修選びと助成金の確認をどの順序で進めるべきかが分からず、着手できないという相談があります。" },
];

const checkPoints = [
  { title: "自社の課題に合わせて内容を相談できるか", body: "既製のカリキュラムをそのまま提供するだけでなく、業務課題に合わせた調整ができるかを確認します。" },
  { title: "受講対象者のレベルに対応できるか", body: "初めて触れる社員向けの基礎から、実務で使いこなす段階まで、どこに合わせられるかを確認します。" },
  { title: "実施形式・時間・人数の条件が合うか", body: "集合形式かオンライン形式か、半日か複数回か、受講人数の下限・上限はどうかを確認します。" },
  { title: "発行される書類の範囲が明確か", body: "受講証明やカリキュラムの詳細など、どのような書類を発行してもらえるかを事前に確認します。" },
  { title: "助成金の採択や支給を断言していないか", body: "支給可否は申請企業の状況・訓練計画・対象者・研修内容・申請内容等により判断されます。採択や支給を断言する説明があった場合は、その根拠を慎重に確認してください。" },
  { title: "研修そのものの価値で選べるか", body: "助成金の活用可否にかかわらず、その研修が自社の課題解決に役立つかを基準に選ぶことをおすすめします。" },
];

const referralThemes = [
  "AI活用研修",
  "ChatGPT・生成AI活用研修",
  "DX推進研修",
  "業務効率化研修",
  "Webマーケティング研修",
  "SEO・MEO・AIO基礎研修",
  "SNS運用研修",
  "営業活動のデジタル化研修",
  "Googleビジネスプロフィール活用研修",
  "Web担当者育成研修",
];

const faqItems = [
  {
    q: "紹介にあたって費用はかかりますか？",
    a: "研修導入に関する初回のご相談・提携研修会社のご紹介について、企業様から費用をいただくことはありません。研修そのものの費用は、提携研修会社との契約内容により決まります。",
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
    q: "サイプレスが研修を実施するのですか？",
    a: "いいえ。株式会社サイプレスは研修導入を検討する企業と実績ある提携研修会社をつなぐ紹介窓口です。研修の実施・契約・カリキュラム詳細の説明・受講証明等の発行は提携研修会社が対応します。",
  },
  {
    q: "助成金の申請代行はしてもらえますか？",
    a: "いいえ。サイプレスは助成金の申請書作成、計画届作成、支給申請、労働局対応などの申請代行を行っていません。申請手続きは、申請企業自身または社会保険労務士等の専門家へご相談ください。",
  },
  {
    q: "助成金の活用を検討していますが、対象になるか教えてもらえますか？",
    a: "対象可否の判断はサイプレスでは行えません。支給可否は、申請企業の状況、訓練計画、対象者、研修内容、申請内容などにより判断されます。管轄の労働局または社会保険労務士等の専門家へご確認ください。",
  },
  {
    q: "どのような研修テーマを紹介できますか？",
    a: "AI活用研修、ChatGPT・生成AI研修、DX研修、Webマーケティング研修、SEO・MEO研修、SNS運用研修などのテーマで、提携研修会社と相談できます。",
  },
  {
    q: "紹介された研修会社の実績を教えてもらえますか？",
    a: "提携研修会社は法人向け研修を複数回実施している実績があります。具体的な実績内容や対応可否については、お問い合わせ後に提携研修会社へ確認したうえでご案内します。事実確認が取れていない実績を掲載することはしていません。",
  },
];

const relatedLinks = [
  { href: "/training/reskilling-subsidy", label: "リスキリング研修相談", desc: "研修導入相談の中心ページ" },
  { href: "/training/ai-dx-reskilling", label: "AI・DXリスキリング研修", desc: "AI・DX研修の導入相談" },
  { href: "/training/chatgpt-ai-training", label: "ChatGPT・生成AI研修", desc: "社員向けAI活用研修" },
  { href: "/training/web-marketing-training", label: "Webマーケティング研修", desc: "SEO・MEO・SNSを学ぶ" },
  { href: "/training/hr-development-subsidy-guide", label: "助成金を検討する前に", desc: "制度の確認ポイント" },
  { href: "/partner/training-company-referral", label: "研修会社紹介パートナー制度", desc: "紹介窓口の仕組み" },
  { href: "/privacy-policy", label: "プライバシーポリシー", desc: "個人情報の取り扱い" },
  { href: "/services", label: "サービス一覧", desc: "Web集客支援の全体像" },
  { href: "/contact", label: "お問い合わせ", desc: "研修会社紹介のご相談" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${BASE}/` },
    { "@type": "ListItem", position: 2, name: "リスキリング研修相談", item: `${BASE}/training/reskilling-subsidy` },
    { "@type": "ListItem", position: 3, name: "リスキリング研修会社の紹介相談", item: URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": URL,
  url: URL,
  name: "リスキリング研修会社の紹介相談",
  description:
    "AI研修・DX研修・Webマーケティング研修に対応する実績ある提携研修会社をご紹介します。研修会社選びで確認すべきこと、紹介までの流れ、情報共有の同意についてご説明します。",
  inLanguage: "ja",
  isPartOf: { "@id": `${BASE}/#website` },
  publisher: { "@id": `${BASE}/#organization` },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "リスキリング研修会社の紹介",
  serviceType: "研修会社紹介",
  description:
    "AI・DX・Webマーケティングのテーマに対応する実績ある提携研修会社を、研修導入を検討する企業に紹介する窓口サービスです。研修の実施は提携研修会社が行い、助成金の申請代行は行いません。",
  provider: { "@id": `${BASE}/#organization` },
  areaServed: { "@type": "Country", name: "日本" },
  audience: { "@type": "BusinessAudience", name: "研修会社を探している法人・中小企業" },
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

export default function ReskillingTrainingCompanyReferralPage() {
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
              src="/ChatGPT Image 2026年6月13日 19_11_20.jpg"
              alt="提携研修会社への紹介相談イメージ"
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
              <span>研修会社の紹介相談</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "16px" }}>
              Training Company Referral
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,4.2vw,46px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.25, marginBottom: "28px" }}>
              リスキリング研修会社の紹介相談
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.95", color: "rgba(255,255,255,0.78)", maxWidth: "640px", marginBottom: "36px" }}>
              AI研修・DX研修・Webマーケティング研修に対応する、実績ある提携研修会社をご紹介します。「どの研修会社を選べばよいか分からない」という段階からご相談いただけます。
            </p>
            <Link
              href="/contact?type=training-referral"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[14px] font-medium transition-all"
              style={{ background: "#ffffff", color: "#0d1b2a" }}
            >
              研修会社の紹介を相談する
            </Link>
            <p style={{ fontSize: "12px", lineHeight: "1.9", color: "rgba(255,255,255,0.55)", maxWidth: "640px", marginTop: "28px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              株式会社サイプレスは研修会社への紹介窓口です。助成金の申請代行は行わず、採択・支給を保証するものではありません。
            </p>
          </div>
        </section>

        {/* ── 研修会社を探す企業が増えている理由 ─────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Background</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              研修会社を探す企業が増えている理由
            </h2>
            <div className="grid md:grid-cols-2 gap-5" style={{ maxWidth: "880px" }}>
              {whyIncreasing.map((item) => (
                <div key={item.title} style={{ background: "#f8f6f2", border: "1px solid #e8e4dc", padding: "24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "10px" }}>{item.title}</p>
                  <p style={{ fontSize: "13.5px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 研修会社選びで確認すべきこと ───────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Check Points</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              研修会社選びで確認すべきこと
            </h2>
            <div style={{ maxWidth: "780px" }}>
              {checkPoints.map((item) => (
                <div key={item.title} style={{ padding: "22px 0", borderTop: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15.5px", fontWeight: 700, color: "#0d1b2a", marginBottom: "9px" }}>{item.title}</p>
                  <p style={{ fontSize: "13.5px", color: "#374151", lineHeight: "1.95" }}>{item.body}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        {/* ── 紹介できるテーマ ───────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Themes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "18px" }}>
              提携研修会社を紹介できるテーマ
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "2.0", color: "#374151", maxWidth: "720px", marginBottom: "40px" }}>
              以下のテーマについて、提携研修会社と相談できます。これらのテーマが必ず助成金の対象になるという意味ではありません。
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8" style={{ maxWidth: "900px" }}>
              {referralThemes.map((theme) => (
                <div key={theme} style={{ display: "flex", gap: "12px", padding: "14px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ color: "#c4b89a", flexShrink: 0, fontSize: "13px", paddingTop: "1px" }}>—</span>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8" }}>{theme}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 提携研修会社の特徴 ─────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Partner Training Companies</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
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

        {/* ── 紹介までの流れ ─────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              紹介までの流れ
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

        {/* ── 個人情報共有に関する同意 ───────────────────────── */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", fontSize: "11px", marginBottom: "14px" }}>Consent</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.35, marginBottom: "26px" }}>
                個人情報の共有に関する同意について
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "rgba(255,255,255,0.75)", marginBottom: "18px" }}>
                提携研修会社をご紹介するにあたり、お問い合わせいただいた内容の一部を提携研修会社へ共有する必要があります。共有する情報は、会社名・ご担当者名・連絡先・お問い合わせ内容です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "rgba(255,255,255,0.75)", marginBottom: "18px" }}>
                この共有は、お問い合わせフォームの同意欄にチェックをいただいた場合に限り行います。チェックがない場合、提携研修会社へ情報を共有することはありません。同意いただかない場合でも、サイプレスからのご返信は行います。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "rgba(255,255,255,0.75)" }}>
                共有された情報は、提携研修会社が研修に関するご連絡・ご提案を行う目的にのみ使用します。詳細はプライバシーポリシーをご確認ください。
              </p>
              <Link href="/privacy-policy" className="inline-block mt-8 text-[13px] underline" style={{ color: "#ffffff" }}>
                プライバシーポリシーを見る →
              </Link>
            </div>
          </div>
        </section>

        <SubsidyDisclaimer bgColor="#ffffff" />

        <FaqSection items={faqItems} heading="研修会社の紹介についてよくある質問" bgColor="#f8f6f2" />

        <RelatedPages links={relatedLinks} heading="関連ページ" />

        <PageContactCTA
          heading="研修会社の紹介についてご相談ください"
          body="「どの研修会社を選べばよいか分からない」「複数社に問い合わせる時間がない」という段階からご相談いただけます。課題をお伺いしたうえで、テーマに合った実績ある提携研修会社をご紹介します。"
          href="/contact?type=training-referral"
          ctaLabel="研修会社の紹介を相談する"
          note="提携研修会社への情報共有は、お問い合わせフォームの同意欄にチェックをいただいた場合に限り行います。株式会社サイプレスは助成金の申請代行を行っておらず、採択・支給を保証するものではありません。"
        />
      </main>
      <Footer />
    </>
  );
}

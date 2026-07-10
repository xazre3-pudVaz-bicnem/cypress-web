import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import SubsidyDisclaimer from "@/components/shared/SubsidyDisclaimer";
import { CYPRESS_SCOPE, MHLW_SUBSIDY_URL, SUBSIDY_CONFIRMED_ON } from "@/lib/data/trainingPages";

const BASE = "https://www.cypress-all.co.jp";
const URL = `${BASE}/training/hr-development-subsidy-guide`;

export const metadata: Metadata = {
  title: "人材開発支援助成金を活用した研修を検討する前に確認したいこと｜株式会社サイプレス",
  description:
    "人材開発支援助成金の活用を検討して研修導入を考える企業向けに、制度の概要、確認すべきポイント、研修会社を選ぶ前の注意点を整理しました。申請手続きは社労士等へご相談ください。",
  keywords: [
    "人材開発支援助成金 研修",
    "人材開発支援助成金 申請前",
    "事業展開等リスキリング支援コース 研修",
    "助成金 研修 注意点",
    "助成金 研修 相談",
  ],
  openGraph: {
    title: "人材開発支援助成金を活用した研修を検討する前に確認したいこと",
    description:
      "制度の概要と、研修導入・研修会社選び・申請にあたって企業が確認すべきポイントを整理しました。",
    images: [{ url: "/ChatGPT Image 2026年6月14日 21_08_57 (3).jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
    url: URL,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: URL },
};

const beforeTraining = [
  {
    n: "01",
    title: "解決したい課題を言語化する",
    body: "「AIを学ばせたい」ではなく「営業の提案準備に時間がかかりすぎている」といった業務課題に落とし込みます。課題が明確なほど、適切な研修テーマを選べます。",
  },
  {
    n: "02",
    title: "誰に受けさせるかを決める",
    body: "対象者の職種・人数・現在のスキルレベルを整理します。助成金の制度上も、対象となる労働者の範囲は重要な要素になります。",
  },
  {
    n: "03",
    title: "実施したい時期を決める",
    body: "申請には手続きの順序と期限が定められている場合があります。研修の実施時期から逆算して、いつまでに何を確認すべきかを把握します。",
  },
  {
    n: "04",
    title: "社労士等の専門家に相談する先を確保する",
    body: "助成金の対象要件の確認や申請手続きは、申請企業自身または社会保険労務士等の専門家が行います。顧問社労士がいない場合は、相談先を早めに検討します。",
  },
  {
    n: "05",
    title: "管轄労働局・厚生労働省の最新情報を確認する",
    body: "制度内容、対象要件、助成率、上限額、申請期限、必要書類は変更される可能性があります。着手前に必ず公式情報を確認します。",
  },
];

const beforeChoosingCompany = [
  {
    title: "研修内容を自社の課題に合わせて相談できるか",
    body: "既製のカリキュラムをそのまま提供するだけか、自社の業務課題に合わせて内容を調整できるかを確認します。",
  },
  {
    title: "対象者・人数・実施形式に対応できるか",
    body: "受講人数の下限・上限、集合形式かオンライン形式か、複数回に分けられるかなど、実施条件を確認します。",
  },
  {
    title: "研修に関する書類の発行範囲を確認する",
    body: "受講証明やカリキュラムの詳細など、どのような書類を発行してもらえるかを事前に確認します。助成金の申請にあたって必要となる書類は、社労士等および管轄労働局へご確認ください。",
  },
  {
    title: "「助成金が必ず使える」と説明する会社に注意する",
    body: "助成金の支給可否は、申請企業の状況・訓練計画・対象者・研修内容・申請内容等により判断されます。採択や支給を断言する説明があった場合は、その根拠を慎重に確認してください。",
  },
  {
    title: "研修そのものの価値で判断する",
    body: "助成金の活用可否にかかわらず、その研修が自社の課題解決に役立つかを基準に選ぶことをおすすめします。",
  },
];

const applicationNotes = [
  "助成金の支給可否は、申請企業の状況、訓練計画、対象者、研修内容、申請内容等により個別に判断されます。研修を受講すれば自動的に助成されるものではありません。",
  "申請には手続きの順序が定められている場合があります。研修を実施したあとに申請すればよいとは限らないため、着手前に確認が必要です。",
  "申請手続きは、申請企業自身、または委任を受けた社会保険労務士等の専門家が行います。",
  "制度内容、対象要件、助成率、上限額、申請期限、必要書類は改定される可能性があります。着手前に厚生労働省・管轄労働局の公式情報をご確認ください。",
  "本ページは制度の概要を整理したものであり、個別の企業における対象可否を判断するものではありません。",
];

const faqItems = [
  {
    q: "人材開発支援助成金とは何ですか？",
    a: "事業主等が雇用する労働者に対して、計画に沿って職務に関連した専門的な知識・技能を習得させる訓練を実施した場合などに、訓練経費や訓練期間中の賃金の一部等が助成される、厚生労働省の制度です。複数のコースが設けられています。",
  },
  {
    q: "事業展開等リスキリング支援コースとは何ですか？",
    a: "人材開発支援助成金のコースのひとつです。新規事業の立ち上げなどの事業展開に伴い新たな分野で必要となる知識・技能を習得させる訓練や、事業展開は伴わないものの企業内のDX化・グリーン化の推進に必要な人材育成のための訓練を実施した場合に助成の対象となりうるコースです。対象要件や助成内容は変更される場合があります。",
  },
  {
    q: "助成率や上限額はいくらですか？",
    a: "助成率・上限額などの数値は改定される可能性があるため、本サイトには掲載していません。最新の金額・要件は厚生労働省の公式ページ、または管轄労働局・社労士等にご確認ください。",
  },
  {
    q: "研修を受ければ必ず助成金を受け取れますか？",
    a: "いいえ。支給可否は、申請企業の状況、訓練計画、対象者、研修内容、申請内容などにより判断されます。株式会社サイプレスおよび提携研修会社は、採択や支給を保証するものではありません。",
  },
  {
    q: "サイプレスは助成金の申請代行をしてくれますか？",
    a: "いいえ。株式会社サイプレスは助成金の申請書作成、計画届作成、支給申請、労働局対応などの申請代行は行っていません。また社会保険労務士業務も行いません。申請手続きは、申請企業自身または社労士等の専門家へご相談ください。",
  },
  {
    q: "申請の相談はどこにすればよいですか？",
    a: "制度の対象要件や申請手続きについては、管轄の労働局、または社会保険労務士等の専門家へご相談ください。厚生労働省の公式ページでも最新の情報をご確認いただけます。",
  },
  {
    q: "研修会社を先に決めてよいですか？",
    a: "助成金の活用を検討している場合、申請手続きに順序や期限が定められていることがあります。研修会社を決める前に、社労士等の専門家や管轄労働局へ手続きの流れを確認しておくことをおすすめします。",
  },
  {
    q: "サイプレスに相談できるのはどこまでですか？",
    a: "研修導入に関するご相談（課題の整理、研修テーマの検討、実績ある提携研修会社のご紹介）までです。助成金の対象可否の判断や申請手続きについてはお答えできないため、社労士等の専門家・管轄労働局へご確認ください。",
  },
  {
    q: "顧問社労士がいない場合はどうすればよいですか？",
    a: "管轄の労働局へ直接お問い合わせいただくか、社会保険労務士へご相談ください。サイプレスから社労士をご紹介することはしておりません。",
  },
  {
    q: "研修の受講証明などの書類は誰が発行しますか？",
    a: "研修の実施・契約・受講証明等の発行は、提携研修会社が対応します。助成金の申請にあたってどのような書類が必要かは、社労士等および管轄労働局へご確認ください。",
  },
];

const relatedLinks = [
  { href: "/training/reskilling-subsidy", label: "リスキリング研修相談", desc: "研修導入相談の中心ページ" },
  { href: "/training/ai-dx-reskilling", label: "AI・DXリスキリング研修", desc: "AI・DX研修の導入相談" },
  { href: "/training/chatgpt-ai-training", label: "ChatGPT・生成AI研修", desc: "社員向けAI活用研修" },
  { href: "/training/web-marketing-training", label: "Webマーケティング研修", desc: "SEO・MEO・SNSを学ぶ" },
  { href: "/training/reskilling-training-company-referral", label: "研修会社の紹介相談", desc: "研修会社選びの相談" },
  { href: "/partner/training-company-referral", label: "研修会社紹介パートナー制度", desc: "紹介窓口の仕組み" },
  { href: "/ai", label: "AI活用支援", desc: "業務自動化・AI導入支援" },
  { href: "/services", label: "サービス一覧", desc: "Web集客支援の全体像" },
  { href: "/contact", label: "お問い合わせ", desc: "研修導入のご相談" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${BASE}/` },
    { "@type": "ListItem", position: 2, name: "リスキリング研修相談", item: `${BASE}/training/reskilling-subsidy` },
    { "@type": "ListItem", position: 3, name: "人材開発支援助成金を活用した研修を検討する前に確認したいこと", item: URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": URL,
  url: URL,
  name: "人材開発支援助成金を活用した研修を検討する前に確認したいこと",
  description:
    "人材開発支援助成金の活用を検討して研修導入を考える企業向けに、制度の概要、確認すべきポイント、研修会社を選ぶ前の注意点を整理しました。",
  inLanguage: "ja",
  isPartOf: { "@id": `${BASE}/#website` },
  publisher: { "@id": `${BASE}/#organization` },
  citation: {
    "@type": "CreativeWork",
    name: "厚生労働省「人材開発支援助成金」",
    url: MHLW_SUBSIDY_URL,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "助成金の活用を検討できる研修の導入相談",
  serviceType: "研修会社紹介・研修導入相談",
  description:
    "人材開発支援助成金の活用を検討している企業からの研修導入相談を受け付け、実績ある提携研修会社を紹介する窓口サービスです。助成金の申請代行および社会保険労務士業務は行いません。",
  provider: { "@id": `${BASE}/#organization` },
  areaServed: { "@type": "Country", name: "日本" },
  audience: { "@type": "BusinessAudience", name: "助成金の活用を検討する法人・中小企業" },
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

export default function HrDevelopmentSubsidyGuidePage() {
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
              src="/ChatGPT Image 2026年6月14日 21_08_57 (3).jpg"
              alt="人材開発支援助成金の活用を検討する企業向け研修相談イメージ"
              fill
              className="object-cover"
              sizes="100vw"
              priority
              style={{ opacity: 0.14 }}
            />
          </div>
          <div style={{ position: "relative", zIndex: 10, maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "32px" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.4)" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/training/reskilling-subsidy" style={{ color: "rgba(255,255,255,0.4)" }}>リスキリング研修相談</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span>助成金を検討する前に</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "16px" }}>
              Subsidy Guide
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(23px,3.9vw,43px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.3, marginBottom: "28px" }}>
              人材開発支援助成金を活用した研修を<br className="hidden md:block" />検討する前に確認したいこと
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.95", color: "rgba(255,255,255,0.78)", maxWidth: "660px", marginBottom: "36px" }}>
              制度の概要と、研修導入・研修会社選び・申請にあたって企業が確認すべきポイントを整理しました。株式会社サイプレスは申請代行を行わない紹介窓口の立場から、事実にもとづく情報のみを掲載しています。
            </p>
            <Link
              href="/contact?type=subsidy-training"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[14px] font-medium transition-all"
              style={{ background: "#ffffff", color: "#0d1b2a" }}
            >
              助成金活用を検討できる研修について相談する
            </Link>
            <p style={{ fontSize: "12px", lineHeight: "1.9", color: "rgba(255,255,255,0.55)", maxWidth: "660px", marginTop: "28px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              本ページは制度の概要を整理したものであり、個別企業の対象可否を判断するものではありません。助成金の申請手続き・対象要件の確認は、申請企業自身または社労士等の専門家、管轄労働局へご相談ください。
            </p>
          </div>
        </section>

        {/* ── 人材開発支援助成金とは ─────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Overview</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.35, marginBottom: "28px" }}>
                人材開発支援助成金とは
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "18px" }}>
                人材開発支援助成金は、厚生労働省が設けている雇用関係助成金のひとつです。事業主等が雇用する労働者に対して、計画に沿って職務に関連した専門的な知識・技能を習得させる訓練を実施した場合や、教育訓練休暇等の制度を導入して労働者に適用した場合に、訓練経費や訓練期間中の賃金の一部等が助成されます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151" }}>
                制度には複数のコースが設けられており、目的や訓練内容によって適用されるコースが異なります。どのコースに該当するか、また対象となるかどうかは、企業の状況と訓練計画の内容によって個別に判断されます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 事業展開等リスキリング支援コース ───────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>The Course</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.35, marginBottom: "28px" }}>
                事業展開等リスキリング支援コースとは
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "18px" }}>
                事業展開等リスキリング支援コースは、人材開発支援助成金のコースのひとつです。新規事業の立ち上げなどの事業展開に伴い、新たな分野で必要となる知識・技能を習得させるための訓練を実施した場合が対象となりうるほか、事業展開を伴わない場合でも、企業内のDX化やグリーン・カーボンニュートラル化を推進するために必要な人材育成のための訓練が対象となりうるとされています。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "28px" }}>
                AI活用・DX推進をテーマとした研修は、このコースの趣旨と重なる領域です。ただし、研修テーマが一致していれば自動的に対象になるわけではありません。訓練計画の内容、対象となる労働者、実施形態、申請内容などをもとに、個別に判断されます。
              </p>

              <div style={{ background: "#ffffff", border: "1px solid #e8e4dc", borderLeft: "3px solid #0d1b2a", padding: "24px 26px" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#0d1b2a", marginBottom: "10px" }}>数値情報について</p>
                <p style={{ fontSize: "13.5px", lineHeight: "1.95", color: "#374151" }}>
                  助成率・上限額・対象経費の範囲などの数値は改定される可能性があるため、本ページには掲載していません。最新の数値は厚生労働省の公式ページ、または管轄労働局・社労士等にご確認ください（本ページの公式情報確認日：{SUBSIDY_CONFIRMED_ON}）。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 研修を検討する前に確認すること ─────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Checklist</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              研修を検討する前に確認すること
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {beforeTraining.map((item) => (
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

        {/* ── 研修会社を選ぶ前に確認すること ─────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Choosing A Company</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              研修会社を選ぶ前に確認すること
            </h2>
            <div style={{ maxWidth: "780px" }}>
              {beforeChoosingCompany.map((item) => (
                <div key={item.title} style={{ padding: "22px 0", borderTop: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15.5px", fontWeight: 700, color: "#0d1b2a", marginBottom: "9px" }}>{item.title}</p>
                  <p style={{ fontSize: "13.5px", color: "#374151", lineHeight: "1.95" }}>{item.body}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        {/* ── 助成金申請に関する注意点 ───────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Application Notes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "36px" }}>
              助成金申請に関する注意点
            </h2>
            <div style={{ maxWidth: "780px" }}>
              {applicationNotes.map((note) => (
                <div key={note} style={{ display: "flex", gap: "14px", padding: "18px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ color: "#c4b89a", flexShrink: 0, fontSize: "13px", paddingTop: "2px" }}>—</span>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.95" }}>{note}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        {/* ── サイプレスが行うこと・行わないこと ─────────────── */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", fontSize: "11px", marginBottom: "14px" }}>Our Scope</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.35, marginBottom: "24px" }}>
              サイプレスが行うこと、行わないこと
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "2.05", color: "rgba(255,255,255,0.75)", maxWidth: "760px", marginBottom: "48px" }}>
              株式会社サイプレスはWebマーケティング会社であり、研修会社でも助成金の申請代行業者でもありません。社会保険労務士業務も行いません。できることとできないことを明確にしています。
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

        {/* ── 提携研修会社の紹介 ─────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Referral</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.35, marginBottom: "26px" }}>
                提携研修会社の紹介
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "18px" }}>
                助成金の対象可否とは切り離して、まずは自社の課題に合う研修を検討したいという段階からご相談いただけます。ご相談内容をお伺いしたうえで、AI・DX・Webマーケティングのテーマに対応できる実績ある提携研修会社をご紹介します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151" }}>
                提携研修会社へ会社名・ご担当者名・連絡先・お問い合わせ内容を共有するのは、お問い合わせフォームの同意欄にチェックをいただいた場合に限ります。
              </p>
              <Link href="/training/reskilling-training-company-referral" className="inline-block mt-8 text-[13px] underline" style={{ color: "#0d1b2a" }}>
                研修会社の紹介相談について見る →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 公式情報リンク ─────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "72px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Official Sources</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.6vw,29px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "24px" }}>
                公式情報リンク
              </h2>
              <p style={{ fontSize: "14.5px", lineHeight: "2.0", color: "#374151", marginBottom: "26px" }}>
                制度の詳細、対象要件、助成率、上限額、申請期限、必要書類、申請様式については、必ず厚生労働省の公式ページをご確認ください。あわせて、管轄の労働局または社会保険労務士等の専門家へのご相談をおすすめします。
              </p>
              <div style={{ background: "#ffffff", border: "1px solid #e8e4dc", padding: "24px 26px" }}>
                <a
                  href={MHLW_SUBSIDY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] font-medium underline"
                  style={{ color: "#0d1b2a" }}
                >
                  厚生労働省「人材開発支援助成金」公式ページ
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <p style={{ fontSize: "12.5px", color: "#9ca3af", marginTop: "12px", lineHeight: "1.85" }}>
                  確認日：{SUBSIDY_CONFIRMED_ON}<br />
                  制度内容は改定される場合があります。本ページの記載が最新であることを保証するものではありません。申請前に必ず公式情報をご確認ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        <SubsidyDisclaimer bgColor="#ffffff" />

        <FaqSection items={faqItems} heading="人材開発支援助成金と研修についてよくある質問" bgColor="#f8f6f2" />

        <RelatedPages links={relatedLinks} heading="関連ページ" />

        <PageContactCTA
          heading="助成金活用を検討できる研修についてご相談ください"
          body="「助成金の活用を検討しているが、まず自社に合う研修を知りたい」という段階からご相談いただけます。内容をお伺いしたうえで、実績ある提携研修会社をご紹介します。"
          href="/contact?type=subsidy-training"
          ctaLabel="助成金活用を検討できる研修について相談する"
          note="株式会社サイプレスは助成金の申請代行および社会保険労務士業務を行いません。対象要件の確認・申請手続きは、申請企業自身または社労士等の専門家、管轄労働局へご相談ください。採択・支給を保証するものではありません。"
        />
      </main>
      <Footer />
    </>
  );
}

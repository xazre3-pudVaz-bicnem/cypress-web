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
const URL = `${BASE}/training/ai-dx-reskilling`;

export const metadata: Metadata = {
  title: "AI・DXリスキリング研修の導入相談｜人材開発支援助成金の活用検討にも対応｜株式会社サイプレス",
  description:
    "中小企業向けAI・DXリスキリング研修の導入相談。生成AIの業務活用、社内DXの進め方を学ぶ法人研修を、実績ある提携研修会社へおつなぎします。助成金の活用を検討する企業にも対応。",
  keywords: [
    "AI研修 助成金",
    "DX研修 助成金",
    "AI DX リスキリング研修",
    "中小企業 AI研修",
    "法人向け DX研修",
    "社員 AI活用 研修",
  ],
  openGraph: {
    title: "AI・DXリスキリング研修の導入相談｜人材開発支援助成金の活用検討にも対応",
    description:
      "生成AIの業務活用と社内DX推進を学ぶ法人研修の導入相談。実績ある提携研修会社をご紹介します。",
    images: [{ url: "/ChatGPT Image 2026年6月14日 21_09_20 (6).jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
    url: URL,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: URL },
};

const trainingThemes = [
  { label: "生成AIの基礎", desc: "生成AIが何をできて何が苦手かを理解し、業務で使う際の判断軸を持てるようにします。" },
  { label: "ChatGPTの業務活用", desc: "プロンプトの組み立て方を学び、日常業務に落とし込む方法を扱います。" },
  { label: "社内文書作成", desc: "議事録・報告書・マニュアルなど、社内文書の作成をAIで効率化する手順を学びます。" },
  { label: "営業資料作成", desc: "提案資料の構成づくりや文面作成にAIを活用し、準備時間を短縮する方法を扱います。" },
  { label: "顧客対応文の作成", desc: "問い合わせ返信やお礼文など、顧客対応文の下書き作成にAIを使う方法を学びます。" },
  { label: "業務効率化", desc: "定型業務を洗い出し、どこを自動化・省力化できるかを見極める視点を養います。" },
  { label: "Web集客へのAI活用", desc: "記事作成の下書き、キーワードの洗い出しなど、Web集客業務へのAI活用を扱います。" },
  { label: "社内DXの進め方", desc: "紙・手作業の業務をデジタルに置き換える順序と、社内で合意形成を進める方法を学びます。" },
  { label: "AI活用時の注意点", desc: "情報漏えい・著作権・誤情報など、業務利用で押さえるべきリスクと社内ルールづくりを扱います。" },
];

const targets = [
  { title: "経営者・経営層", body: "AI・DXに投資する判断をするために、何ができて何ができないかの全体像を掴みたい方。" },
  { title: "管理職・部門責任者", body: "部門の業務のどこにAIを適用すべきかを判断し、メンバーに指示できるようになりたい方。" },
  { title: "一般社員（事務・営業）", body: "日々の業務でAIを実際に使いこなし、作業時間を減らしたい方。" },
  { title: "Web・情報システム担当者", body: "社内のDX推進役として、ツール選定と定着までを担う方。" },
];

const faqItems = [
  {
    q: "AI研修・DX研修は人材開発支援助成金の対象になりますか？",
    a: "対象になるかどうかは、訓練計画の内容、対象となる労働者、研修の実施形態、申請内容などをもとに個別に判断されます。研修テーマがAI・DXであれば自動的に対象になるというものではありません。株式会社サイプレスおよび提携研修会社は、採択や支給を保証するものではありません。",
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
    q: "AIをまったく使ったことがない社員でも受講できますか？",
    a: "受講対象者のスキルレベルに応じてカリキュラムの方向性を提携研修会社と相談できます。初めて触れる社員向けの基礎的な内容から相談いただけます。",
  },
  {
    q: "研修時間や実施形式は選べますか？",
    a: "半日・1日・複数回に分けるといった研修時間の設計や、集合形式・オンライン形式の選択は、提携研修会社との相談によって決まります。ご希望をお問い合わせ時にお知らせください。",
  },
  {
    q: "AI研修とDX研修は分けて実施する必要がありますか？",
    a: "課題によって異なります。まず生成AIを社員が使えるようにしたいのか、業務プロセス全体をデジタルに置き換えたいのかによって、適したテーマと順序が変わります。ヒアリングを通じて整理します。",
  },
  {
    q: "研修費用はいくらですか？",
    a: "研修費用は、テーマ・時間・受講人数・実施形式によって変わるため、提携研修会社との相談のなかで確定します。サイプレスへのご相談・紹介について企業様から費用をいただくことはありません。",
  },
  {
    q: "情報セキュリティが心配です。AI活用の注意点も扱えますか？",
    a: "はい。情報漏えい・著作権・誤情報といった業務利用上のリスクと、社内ルールの整備は多くの企業が求めるテーマです。提携研修会社と内容を相談できます。",
  },
  {
    q: "問い合わせた情報は提携研修会社に共有されますか？",
    a: "お問い合わせフォームの同意欄にチェックをいただいた場合に限り、会社名・ご担当者名・連絡先・お問い合わせ内容を提携研修会社へ共有します。同意がない場合は共有しません。",
  },
];

const relatedLinks = [
  { href: "/training/reskilling-subsidy", label: "リスキリング研修相談", desc: "研修導入相談の中心ページ" },
  { href: "/training/chatgpt-ai-training", label: "ChatGPT・生成AI研修", desc: "社員向けAI活用研修" },
  { href: "/training/web-marketing-training", label: "Webマーケティング研修", desc: "SEO・MEO・SNSを学ぶ" },
  { href: "/training/hr-development-subsidy-guide", label: "助成金を検討する前に", desc: "制度の確認ポイント" },
  { href: "/training/reskilling-training-company-referral", label: "研修会社の紹介相談", desc: "研修会社選びの相談" },
  { href: "/ai", label: "AI活用支援", desc: "業務自動化・AI導入支援" },
  { href: "/aio", label: "AIO対策", desc: "AI検索に引用されるサイトへ" },
  { href: "/services", label: "サービス一覧", desc: "Web集客支援の全体像" },
  { href: "/contact", label: "お問い合わせ", desc: "AI・DX研修のご相談" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${BASE}/` },
    { "@type": "ListItem", position: 2, name: "リスキリング研修相談", item: `${BASE}/training/reskilling-subsidy` },
    { "@type": "ListItem", position: 3, name: "AI・DXリスキリング研修の導入相談", item: URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": URL,
  url: URL,
  name: "AI・DXリスキリング研修の導入相談",
  description:
    "中小企業向けAI・DXリスキリング研修の導入相談。生成AIの業務活用、社内DXの進め方を学ぶ法人研修を、実績ある提携研修会社へおつなぎします。",
  inLanguage: "ja",
  isPartOf: { "@id": `${BASE}/#website` },
  publisher: { "@id": `${BASE}/#organization` },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI・DXリスキリング研修の導入相談・提携研修会社の紹介",
  serviceType: "研修会社紹介・研修導入相談",
  description:
    "生成AIの業務活用や社内DX推進をテーマとする法人研修について、導入を検討する企業からの相談を受け付け、実績ある提携研修会社を紹介する窓口サービスです。助成金の申請代行は行いません。",
  provider: { "@id": `${BASE}/#organization` },
  areaServed: { "@type": "Country", name: "日本" },
  audience: { "@type": "BusinessAudience", name: "AI・DX研修の導入を検討する法人・中小企業" },
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

export default function AiDxReskillingPage() {
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
              src="/ChatGPT Image 2026年6月14日 21_09_20 (6).jpg"
              alt="法人向けAI・DXリスキリング研修の相談イメージ"
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
              <span>AI・DX研修</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "16px" }}>
              AI &amp; DX Reskilling
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,4.2vw,46px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.25, marginBottom: "28px" }}>
              AI・DXリスキリング研修の導入相談
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.95", color: "rgba(255,255,255,0.78)", maxWidth: "640px", marginBottom: "36px" }}>
              「生成AIを導入したが社員が使いこなせない」「DXを進めたいが何から手をつけるか分からない」。そうした課題に対応する法人向け研修を、実績ある提携研修会社へおつなぎします。人材開発支援助成金の活用を検討している企業からのご相談も承っています。
            </p>
            <Link
              href="/contact?type=ai-dx-training"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[14px] font-medium transition-all"
              style={{ background: "#ffffff", color: "#0d1b2a" }}
            >
              AI・DX研修について相談する
            </Link>
            <p style={{ fontSize: "12px", lineHeight: "1.9", color: "rgba(255,255,255,0.55)", maxWidth: "640px", marginTop: "28px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              株式会社サイプレスは研修会社への紹介窓口です。助成金の申請代行は行わず、採択・支給を保証するものではありません。
            </p>
          </div>
        </section>

        {/* ── 背景 ─────────────────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Background</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.35, marginBottom: "28px" }}>
                AI・DX研修が必要とされる背景
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "18px" }}>
                生成AIの登場によって、文書作成・情報整理・アイデア出しといった業務の進め方が大きく変わりました。ツールを契約する企業は増えましたが、実際に使いこなせている社員は一部にとどまり、投資が成果に結びついていないという相談が目立ちます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "18px" }}>
                DXについても同様です。基幹システムを入れ替えるだけでは、現場の紙・手作業はなくなりません。どの業務から着手し、誰が推進するのかを社内で描けるかどうかが分かれ目になります。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151" }}>
                ツール導入ではなく、使う人のスキルを引き上げること。これがリスキリング研修に取り組む企業が増えている理由です。とくに採用が難しい中小企業では、既存社員の能力を高める方針が現実的な選択肢になっています。
              </p>
            </div>
          </div>
        </section>

        {/* ── 中小企業が学ぶべき内容 ──────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>What To Learn</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.35, marginBottom: "28px" }}>
                中小企業がAI・DX研修で学ぶべき内容
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "18px" }}>
                最初に必要なのは、専門的なAIの理論ではなく「自社の業務のどこに使えるか」を判断できる力です。生成AIが得意なこと（下書き作成・要約・言い換え・発想の拡張）と苦手なこと（事実の正確性・最新情報・数値計算）を理解していれば、業務への当てはめは自然に進みます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "18px" }}>
                次に、実際に手を動かして使えるようになること。研修中に自社の実業務を題材にして操作すると、現場に戻ったあとの定着率が変わります。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151" }}>
                そして、社内で安全に使うためのルールづくりです。顧客情報や機密情報をどこまで入力してよいか、生成された文章の事実確認を誰が行うか。この整理を怠ると、活用が進むほどリスクが増していきます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 研修テーマ例 ───────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Themes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.35, marginBottom: "18px" }}>
              研修テーマ例
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "2.0", color: "#374151", maxWidth: "720px", marginBottom: "44px" }}>
              以下は提携研修会社と相談できるテーマの例です。これらのテーマが必ず助成金の対象になるという意味ではありません。
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {trainingThemes.map((item) => (
                <div key={item.label} style={{ background: "#f8f6f2", border: "1px solid #e8e4dc", padding: "22px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "14.5px", fontWeight: 700, color: "#0d1b2a", marginBottom: "9px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 研修対象者 ─────────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Audience</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              研修対象者
            </h2>
            <div className="grid md:grid-cols-2 gap-5" style={{ maxWidth: "880px" }}>
              {targets.map((item) => (
                <div key={item.title} style={{ background: "#ffffff", border: "1px solid #e8e4dc", padding: "24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "10px" }}>{item.title}</p>
                  <p style={{ fontSize: "13.5px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 助成金活用を検討する場合の注意点 ────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Before You Apply</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.35, marginBottom: "28px" }}>
                人材開発支援助成金の活用を検討する場合の注意点
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "18px" }}>
                AI・DXをテーマとする研修は、人材開発支援助成金の趣旨と重なる領域です。しかし、研修テーマがAI・DXであれば自動的に助成の対象になるわけではありません。訓練計画の内容、対象となる労働者、研修の実施形態、申請のタイミングなどが個別に確認されます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "18px" }}>
                また、申請には順序があります。研修を実施したあとに申請すればよいというものではなく、事前に必要な手続きが定められている場合があります。研修会社を決める前に、社労士等の専門家や管轄労働局へ確認しておくことをおすすめします。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151" }}>
                株式会社サイプレスは、助成金の申請書作成、計画届作成、支給申請、労働局対応などの申請代行は行っていません。申請手続きは申請企業自身、または委任を受けた社会保険労務士等の専門家が行うものです。
              </p>
            </div>
          </div>
        </section>

        {/* ── 提携研修会社の紹介について ─────────────────────── */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", fontSize: "11px", marginBottom: "14px" }}>Referral</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.35, marginBottom: "26px" }}>
                提携研修会社の紹介について
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "rgba(255,255,255,0.75)", marginBottom: "18px" }}>
                株式会社サイプレスは研修会社ではありません。ご相談内容をお伺いしたうえで、AI・DXのテーマに対応できる実績ある提携研修会社をご紹介します。研修の実施・契約・カリキュラム詳細の説明・受講証明等の発行は、提携研修会社が対応します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "rgba(255,255,255,0.75)" }}>
                提携研修会社へ会社名・ご担当者名・連絡先・お問い合わせ内容を共有するのは、お問い合わせフォームの同意欄にチェックをいただいた場合に限ります。
              </p>
              <Link
                href="/partner/training-company-referral"
                className="inline-block mt-8 text-[13px] underline"
                style={{ color: "#ffffff" }}
              >
                研修会社紹介パートナー制度の詳細を見る →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 相談から紹介までの流れ ──────────────────────────── */}
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

        <FaqSection items={faqItems} heading="AI・DXリスキリング研修についてよくある質問" bgColor="#ffffff" />

        <RelatedPages links={relatedLinks} heading="関連ページ" />

        <PageContactCTA
          heading="AI・DX研修の導入についてご相談ください"
          body="「社員が生成AIを使いこなせない」「DXの進め方が分からない」といった課題感の段階でご相談いただけます。内容をお伺いしたうえで、実績ある提携研修会社をご紹介します。"
          href="/contact?type=ai-dx-training"
          ctaLabel="AI・DX研修について相談する"
          note="株式会社サイプレスは研修会社への紹介窓口です。助成金の申請代行は行っておらず、採択・支給を保証するものではありません。"
        />
      </main>
      <Footer />
    </>
  );
}

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
const URL = `${BASE}/training/chatgpt-ai-training`;

export const metadata: Metadata = {
  title: "ChatGPT・生成AI研修の導入相談｜社員向けAI活用・リスキリング研修｜株式会社サイプレス",
  description:
    "社員向けChatGPT・生成AI研修の導入相談。営業・事務・管理職など職種別のAI活用を学ぶ法人研修を、実績ある提携研修会社へおつなぎします。助成金の活用を検討する企業にも対応。",
  keywords: [
    "ChatGPT研修 助成金",
    "生成AI研修 助成金",
    "社員向け ChatGPT研修",
    "法人向け 生成AI研修",
    "AI活用研修 法人",
    "ChatGPT 社員研修",
  ],
  openGraph: {
    title: "ChatGPT・生成AI研修の導入相談｜社員向けAI活用・リスキリング研修",
    description:
      "職種別の生成AI活用を学ぶ法人研修の導入相談。実績ある提携研修会社をご紹介します。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_20_52.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
    url: URL,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: URL },
};

const skills = [
  { title: "プロンプトの基本", body: "何をしてほしいか、どんな条件で、どんな形式で出力するか。指示の型を身につけると出力の質が安定します。" },
  { title: "下書きを任せて仕上げは人が行う", body: "生成AIは0を1にするのが得意です。完成品を求めるのではなく、下書きを早く出させて人が磨く進め方を学びます。" },
  { title: "事実確認の習慣", body: "生成AIは誤った情報をもっともらしく提示することがあります。何を確認すべきかの判断基準を持つことが不可欠です。" },
  { title: "入力してよい情報の線引き", body: "顧客情報・機密情報をどこまで入力してよいか。ツールの設定と社内ルールの両面から理解します。" },
  { title: "自社業務への当てはめ", body: "自分の業務のどこにAIを差し込めるかを洗い出し、実際に試すところまでを研修内で行います。" },
];

const jobUseCases = [
  { role: "営業", body: "提案資料の構成づくり、商談前の企業情報の整理、フォローメールの下書き作成に活用します。" },
  { role: "事務", body: "議事録の要約、データの整形、社内文書のたたき台作成など、定型作業の時間を圧縮します。" },
  { role: "管理職", body: "報告資料の要点整理、部下へのフィードバック文の下書き、会議アジェンダの設計に使います。" },
  { role: "採用", body: "求人票の文面づくり、応募者への案内文、面接質問の設計といった業務を効率化します。" },
  { role: "広報", body: "プレスリリースの下書き、SNS投稿文の案出し、社内報の構成づくりに活用します。" },
  { role: "Web担当者", body: "記事の構成案、キーワードの洗い出し、既存文章の言い換えなど、Web運用業務を支えます。" },
  { role: "店舗運営", body: "Googleビジネスプロフィールの投稿文、口コミへの返信文、販促文面の作成に使います。" },
  { role: "カスタマー対応", body: "問い合わせ返信の下書き、FAQ原稿の整理、対応履歴の要約に活用します。" },
];

const curriculum = [
  { n: "01", title: "生成AIの全体像と業務での位置づけ", body: "何が得意で何が苦手かを整理し、業務に使う際の判断軸をつくります。" },
  { n: "02", title: "プロンプトの組み立て方", body: "指示の型を学び、意図した出力を安定して得られるようにします。" },
  { n: "03", title: "職種別の実践演習", body: "受講者自身の実業務を題材に、その場で手を動かして試します。" },
  { n: "04", title: "リスクと社内ルールづくり", body: "情報漏えい・著作権・誤情報への対処と、社内で守るべきルールを整理します。" },
  { n: "05", title: "定着に向けた次のアクション", body: "研修後に社内で活用を広げるための進め方を確認します。" },
];

const faqItems = [
  {
    q: "ChatGPT・生成AI研修は人材開発支援助成金の対象になりますか？",
    a: "対象になるかどうかは、訓練計画の内容、対象となる労働者、研修の実施形態、申請内容などをもとに個別に判断されます。研修テーマが生成AIであれば自動的に対象になるというものではありません。株式会社サイプレスおよび提携研修会社は、採択や支給を保証するものではありません。",
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
    q: "ChatGPTを触ったことがない社員でも受講できますか？",
    a: "受講対象者のスキルレベルに応じて、カリキュラムの方向性を提携研修会社と相談できます。初めて触れる社員向けの基礎的な内容から相談いただけます。",
  },
  {
    q: "職種ごとに内容を変えられますか？",
    a: "営業・事務・管理職・Web担当など、受講者の職種に合わせた演習内容を提携研修会社と相談できます。実業務を題材にすると定着しやすくなります。",
  },
  {
    q: "社内で使うAIツールが決まっていなくても相談できますか？",
    a: "はい。どのツールを使うべきかという段階からご相談いただけます。ツール選定の考え方も研修テーマに含めることを相談できます。",
  },
  {
    q: "情報漏えいが心配です。研修で対策を扱えますか？",
    a: "はい。入力してよい情報の線引き、ツール側の設定、社内ルールの整備は多くの企業が求めるテーマです。提携研修会社と内容を相談できます。",
  },
  {
    q: "研修費用はいくらですか？",
    a: "研修費用は、テーマ・時間・受講人数・実施形式によって変わるため、提携研修会社との相談のなかで確定します。サイプレスへのご相談・紹介について企業様から費用をいただくことはありません。",
  },
];

const relatedLinks = [
  { href: "/training/reskilling-subsidy", label: "リスキリング研修相談", desc: "研修導入相談の中心ページ" },
  { href: "/training/ai-dx-reskilling", label: "AI・DXリスキリング研修", desc: "AI・DX研修の導入相談" },
  { href: "/training/web-marketing-training", label: "Webマーケティング研修", desc: "SEO・MEO・SNSを学ぶ" },
  { href: "/training/hr-development-subsidy-guide", label: "助成金を検討する前に", desc: "制度の確認ポイント" },
  { href: "/training/reskilling-training-company-referral", label: "研修会社の紹介相談", desc: "研修会社選びの相談" },
  { href: "/ai", label: "AI活用支援", desc: "業務自動化・AI導入支援" },
  { href: "/aio", label: "AIO対策", desc: "AI検索に引用されるサイトへ" },
  { href: "/services", label: "サービス一覧", desc: "Web集客支援の全体像" },
  { href: "/contact", label: "お問い合わせ", desc: "生成AI研修のご相談" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${BASE}/` },
    { "@type": "ListItem", position: 2, name: "リスキリング研修相談", item: `${BASE}/training/reskilling-subsidy` },
    { "@type": "ListItem", position: 3, name: "ChatGPT・生成AI研修の導入相談", item: URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": URL,
  url: URL,
  name: "ChatGPT・生成AI研修の導入相談",
  description:
    "社員向けChatGPT・生成AI研修の導入相談。営業・事務・管理職など職種別のAI活用を学ぶ法人研修を、実績ある提携研修会社へおつなぎします。",
  inLanguage: "ja",
  isPartOf: { "@id": `${BASE}/#website` },
  publisher: { "@id": `${BASE}/#organization` },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ChatGPT・生成AI研修の導入相談・提携研修会社の紹介",
  serviceType: "研修会社紹介・研修導入相談",
  description:
    "職種別の生成AI活用をテーマとする法人研修について、導入を検討する企業からの相談を受け付け、実績ある提携研修会社を紹介する窓口サービスです。助成金の申請代行は行いません。",
  provider: { "@id": `${BASE}/#organization` },
  areaServed: { "@type": "Country", name: "日本" },
  audience: { "@type": "BusinessAudience", name: "生成AI研修の導入を検討する法人・中小企業" },
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

export default function ChatGptAiTrainingPage() {
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
              src="/ChatGPT Image 2026年6月13日 19_20_52.jpg"
              alt="社員向けChatGPT・生成AI活用研修の導入相談イメージ"
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
              <span>ChatGPT・生成AI研修</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "16px" }}>
              Generative AI Training
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,4.2vw,46px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.25, marginBottom: "28px" }}>
              ChatGPT・生成AI研修の導入相談
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.95", color: "rgba(255,255,255,0.78)", maxWidth: "640px", marginBottom: "36px" }}>
              ツールを契約しただけでは、社員の業務は変わりません。職種ごとの実業務を題材に、生成AIを使いこなすための法人研修を、実績ある提携研修会社へおつなぎします。
            </p>
            <Link
              href="/contact?type=chatgpt-training"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[14px] font-medium transition-all"
              style={{ background: "#ffffff", color: "#0d1b2a" }}
            >
              ChatGPT・生成AI研修について相談する
            </Link>
            <p style={{ fontSize: "12px", lineHeight: "1.9", color: "rgba(255,255,255,0.55)", maxWidth: "640px", marginTop: "28px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              株式会社サイプレスは研修会社への紹介窓口です。助成金の申請代行は行わず、採択・支給を保証するものではありません。
            </p>
          </div>
        </section>

        {/* ── なぜ必要か ─────────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Why</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.35, marginBottom: "28px" }}>
                ChatGPT・生成AI研修が企業に必要な理由
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "18px" }}>
                多くの企業で「ツールは導入したが、使っているのは一部の社員だけ」という状態が起きています。生成AIは検索エンジンとは使い方が異なり、聞き方によって出力の質が大きく変わります。この違いを知らないまま触ると「思ったより使えない」という結論に至りやすくなります。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "18px" }}>
                また、社員が自己流で使い始めると、顧客情報を入力してしまう、生成された文章を確認せずに社外へ出してしまうといったリスクが生じます。活用が広がるほど、ルールの不在は問題になります。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151" }}>
                研修の目的は、ツールの操作を覚えることではありません。自分の業務のどこに使えるかを判断でき、安全に使える状態をつくることです。
              </p>
            </div>
          </div>
        </section>

        {/* ── 学ぶべきスキル ─────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Skills</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              社員が学ぶべきAI活用スキル
            </h2>
            <div style={{ maxWidth: "780px" }}>
              {skills.map((item) => (
                <div key={item.title} style={{ padding: "22px 0", borderTop: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15.5px", fontWeight: 700, color: "#0d1b2a", marginBottom: "9px" }}>{item.title}</p>
                  <p style={{ fontSize: "13.5px", color: "#374151", lineHeight: "1.95" }}>{item.body}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        {/* ── 職種別の活用例 ─────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>By Role</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              職種別の活用例
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {jobUseCases.map((item) => (
                <div key={item.role} style={{ background: "#f8f6f2", border: "1px solid #e8e4dc", padding: "22px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "14.5px", fontWeight: 700, color: "#0d1b2a", marginBottom: "9px" }}>{item.role}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── カリキュラム例 ─────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Curriculum</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "18px" }}>
              研修カリキュラム例
            </h2>
            <p style={{ fontSize: "14.5px", lineHeight: "2.0", color: "#374151", maxWidth: "720px", marginBottom: "40px" }}>
              以下は構成の一例です。実際のカリキュラム・時間配分・演習内容は、提携研修会社と受講対象者に合わせて相談のうえ決まります。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {curriculum.map((item) => (
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

        {/* ── 助成金活用の注意点 ─────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "760px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Before You Apply</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px,3vw,33px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.35, marginBottom: "28px" }}>
                助成金活用を検討する場合の注意点
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "#374151", marginBottom: "18px" }}>
                生成AIをテーマとする研修は、人材開発支援助成金の趣旨と重なる領域ですが、研修テーマが生成AIであれば自動的に助成の対象になるわけではありません。訓練計画の内容、対象となる労働者、研修の実施形態、申請のタイミングなどが個別に確認されます。
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
                株式会社サイプレスは研修会社ではありません。ご相談内容をお伺いしたうえで、生成AI活用のテーマに対応できる実績ある提携研修会社をご紹介します。研修の実施・契約・カリキュラム詳細の説明・受講証明等の発行は、提携研修会社が対応します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.05", color: "rgba(255,255,255,0.75)" }}>
                提携研修会社へ会社名・ご担当者名・連絡先・お問い合わせ内容を共有するのは、お問い合わせフォームの同意欄にチェックをいただいた場合に限ります。
              </p>
              <Link href="/partner/training-company-referral" className="inline-block mt-8 text-[13px] underline" style={{ color: "#ffffff" }}>
                研修会社紹介パートナー制度の詳細を見る →
              </Link>
            </div>
          </div>
        </section>

        <SubsidyDisclaimer bgColor="#f8f6f2" />

        <FaqSection items={faqItems} heading="ChatGPT・生成AI研修についてよくある質問" bgColor="#ffffff" />

        <RelatedPages links={relatedLinks} heading="関連ページ" />

        <PageContactCTA
          heading="ChatGPT・生成AI研修の導入についてご相談ください"
          body="「ツールは入れたが定着しない」「職種ごとに実践的な内容を学ばせたい」といったご相談を承っています。内容をお伺いしたうえで、実績ある提携研修会社をご紹介します。"
          href="/contact?type=chatgpt-training"
          ctaLabel="ChatGPT・生成AI研修について相談する"
          note="株式会社サイプレスは研修会社への紹介窓口です。助成金の申請代行は行っておらず、採択・支給を保証するものではありません。"
        />
      </main>
      <Footer />
    </>
  );
}

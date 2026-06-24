import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "営業職 正社員募集｜Webマーケティング・MEO・SEO営業｜株式会社サイプレス【東京・未経験歓迎】",
  description:
    "株式会社サイプレスの営業職（正社員）募集。東京都葛飾区拠点。MEO対策・SEO対策・ホームページ制作・AIO対策を中小企業経営者へ提案する法人営業。月給35万円以上・年間休日130日・学歴不問・未経験歓迎。",
  keywords: [
    "株式会社サイプレス 営業 求人",
    "Webマーケティング 営業 正社員 東京",
    "MEO対策 営業職 求人",
    "SEO営業 正社員 東京",
    "AIO 営業 求人",
    "未経験 Webマーケティング 正社員",
    "法人営業 正社員 東京 葛飾区",
    "中小企業向け 営業 正社員",
    "月給35万 営業 東京",
    "IT 営業 未経験 東京",
  ],
  openGraph: {
    title: "営業職 正社員募集｜Webマーケティング・MEO・SEO営業｜株式会社サイプレス【東京・未経験歓迎】",
    description: "月給35万円以上・年間休日130日・未経験歓迎・学歴不問。MEO・SEO・ホームページを東京の中小企業経営者に提案する提案型法人営業。東京都葛飾区拠点の株式会社サイプレス。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/recruit/sales" },
};

const faqItems = [
  {
    q: "営業職の仕事内容を具体的に教えてください。",
    a: "飲食店・美容室・クリニック・建設業・士業など中小ビジネスの経営者へ、MEO対策・SEO対策・ホームページ制作・AIO対策・AI活用支援を提案する法人営業です。商材はサイプレスが制作・保守・運用まで一貫対応するため、あなたが担当するのは「提案と受注」に集中できます。",
  },
  {
    q: "未経験でも応募できますか？",
    a: "はい、歓迎します。Webマーケティングや営業の経験は不問です。「経営者と話すのが好き」「成長意欲が高い」「しっかり稼ぎたい」という方であれば活躍できます。入社後は商材知識研修・提案トークの練習・同行サポートで着実にスキルを身につけられます。",
  },
  {
    q: "月給35万円以上とは、未経験でも同額ですか？",
    a: "給与は経験・スキル・面談での評価をもとに個別に決定します。ご経験・ご状況について面談時に詳しくお聞きしたうえでご案内します。",
  },
  {
    q: "年間休日130日とはどのような休日ですか？",
    a: "土日祝日を基本としています。詳細は面談時にご説明します。プライベートを大切にしながら、仕事でしっかり成果を出していただく環境を用意しています。",
  },
  {
    q: "営業のターゲットはどのような企業ですか？",
    a: "主に中小企業の経営者・オーナーです。飲食店・美容室・クリニック・歯科・建設業・リフォーム会社・士業（税理士・社労士等）・整体院・学習塾など、地域密着型ビジネスを中心に幅広い業種を担当します。",
  },
  {
    q: "ノルマはありますか？",
    a: "目標数字はありますが、「追い込む」スタイルではなく、PDCAを回しながら戦略的に受注を増やすスタイルを推奨しています。上司や同僚と連携しながら課題を解決するチーム営業です。",
  },
  {
    q: "飛び込み営業やテレアポはありますか？",
    a: "手法については面談時に詳しくお伝えします。多様なアプローチを試しながら、自分に合ったスタイルで成果を出せるよう支援します。",
  },
  {
    q: "売る商材はどのようなものですか？難しくないですか？",
    a: "MEO対策・SEO対策・ホームページ制作・AIO対策・AI活用支援です。「お客さまのお店をGoogleマップの上位に表示させる」「検索で見つけてもらえるようにする」という分かりやすい価値提供のため、説明しやすい商材です。研修で十分理解してから現場に立てます。",
  },
  {
    q: "制作や技術的な作業も担当しますか？",
    a: "いいえ。制作・保守管理・運用はすべてサイプレスの社内チームが担当します。営業担当者は「提案と受注・顧客との関係構築」に専念できます。",
  },
  {
    q: "どのようなキャリアパスがありますか？",
    a: "個人営業として成果を積み上げた後、チームリーダー・マネージャーへのキャリアアップが可能です。また、特定業種・特定エリアのスペシャリストとして専門性を高めるキャリアも選べます。成長の方向性を一緒に考えます。",
  },
  {
    q: "研修・サポート体制はどうなっていますか？",
    a: "入社後は商材知識・提案トーク・業界研究の研修を行います。慣れるまでは同行訪問で先輩のやり取りを見ながら学べます。一人で抱え込まないよう、チームでフォローする体制を整えています。",
  },
  {
    q: "雇用形態と試用期間を教えてください。",
    a: "正社員（正規雇用）です。試用期間については面談時にお伝えします。",
  },
  {
    q: "勤務地はどこですか？リモートワークは可能ですか？",
    a: "本社は東京都葛飾区白鳥4-6-1-623です。勤務形態の詳細は面談時にご確認ください。",
  },
  {
    q: "応募に必要な書類や条件はありますか？",
    a: "学歴・職歴・資格などの制限はありません。お問い合わせフォームよりエントリーいただければ、書類などについて個別にご案内します。",
  },
  {
    q: "選考フローを教えてください。",
    a: "①お問い合わせフォームよりエントリー → ②書類確認 → ③面談（1〜2回） → ④内定 という流れです。オンライン面談にも対応しています。",
  },
  {
    q: "Webマーケティングの知識がまったくなくても大丈夫ですか？",
    a: "はい、大丈夫です。MEO・SEO・AIなどの専門用語や仕組みは入社後の研修で習得できます。「なぜこの施策がお客様の売上につながるか」を理解してから提案できるよう、丁寧にサポートします。",
  },
  {
    q: "Webマーケティング業界の将来性はありますか？",
    a: "はい。中小企業のデジタル化・AI対応の需要は今後さらに拡大する見込みです。MEO対策・SEO対策・AIを活用した業務効率化のニーズは急増しており、この領域の営業スキルは中長期的に市場価値の高いキャリアになります。",
  },
  {
    q: "成果次第で収入は上がりますか？",
    a: "はい。成果次第で高収入を狙える環境を整えています。ただし「必ず○万円になる」という断定はできません。実績・評価に応じた給与改定の仕組みについては面談時にご説明します。",
  },
  {
    q: "入社前に疑問を解消したい場合、気軽に相談できますか？",
    a: "はい。選考に関係なく事前にオンラインで話を聞くことも可能です。「本当に向いているか」「環境が自分に合うか」を確認してから応募したい方はお気軽にお問い合わせください。",
  },
  {
    q: "副業・ダブルワークはできますか？",
    a: "詳細は面談時にご確認ください。雇用契約の内容によって異なります。",
  },
];

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Webマーケティング営業（正社員）",
  description:
    "MEO対策・SEO対策・ホームページ制作・AIO対策・AI活用支援を中小企業経営者へ提案する提案型法人営業職。未経験歓迎。月給35万円以上・年間休日130日。",
  identifier: {
    "@type": "PropertyValue",
    name: "株式会社サイプレス",
    value: "cypress-sales-2026",
  },
  hiringOrganization: {
    "@type": "Organization",
    name: "株式会社サイプレス",
    sameAs: "https://www.cypress-all.co.jp",
    logo: "https://www.cypress-all.co.jp/logo.png",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "白鳥4-6-1-623",
      addressLocality: "葛飾区",
      addressRegion: "東京都",
      postalCode: "125-0061",
      addressCountry: "JP",
    },
  },
  employmentType: "FULL_TIME",
  datePosted: "2026-06-14",
  validThrough: "2026-12-31",
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "JPY",
    value: {
      "@type": "QuantitativeValue",
      minValue: 350000,
      unitText: "MONTH",
    },
  },
  jobBenefits: "年間休日130日、正社員雇用、未経験歓迎、入社研修あり",
  qualifications: "学歴・職歴・資格不問。成長意欲のある方歓迎。",
  applicantLocationRequirements: {
    "@type": "Country",
    name: "Japan",
  },
  directApply: true,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
    { "@type": "ListItem", position: 2, name: "採用情報", item: "https://www.cypress-all.co.jp/recruit" },
    { "@type": "ListItem", position: 3, name: "正社員営業職募集", item: "https://www.cypress-all.co.jp/recruit/sales" },
  ],
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

export default function RecruitSalesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section style={{ background: "#0d1b2a", position: "relative", paddingTop: "128px", paddingBottom: "80px", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/ChatGPT Image 2026年6月14日 21_13_52.png"
              alt="株式会社サイプレス 営業チームミーティング風景"
              fill
              className="object-cover"
              sizes="100vw"
              priority
              style={{ opacity: 0.2 }}
            />
          </div>
          <div style={{ position: "relative", zIndex: 10, maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <nav style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "32px" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.4)" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/recruit" style={{ color: "rgba(255,255,255,0.4)" }}>採用情報</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span>正社員・営業職募集</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "16px" }}>Sales / Full-time</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,4.5vw,50px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.2, marginBottom: "28px" }}>
              Webマーケティング営業<br />正社員募集
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "32px" }}>
              {[
                { label: "月給", value: "35万円以上" },
                { label: "年間休日", value: "130日" },
                { label: "雇用形態", value: "正社員" },
                { label: "経験", value: "未経験歓迎" },
              ].map((item) => (
                <div key={item.label} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", padding: "10px 20px", borderRadius: "4px" }}>
                  <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", marginBottom: "2px", letterSpacing: "0.1em" }}>{item.label}</p>
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}>{item.value}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "rgba(255,255,255,0.75)", maxWidth: "600px" }}>
              MEO対策・SEO対策・ホームページ制作・AIO対策を、中小ビジネスの経営者へ提案する法人営業職。
              制作・保守・運用はサイプレスが担当するため、あなたは<strong style={{ color: "#ffffff" }}>提案と受注に集中</strong>できます。
            </p>
          </div>
        </section>

        {/* ── Webマーケティング営業とは ──────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>What Is This Job</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.4, marginBottom: "28px" }}>
                Webマーケティング営業とは
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151", marginBottom: "18px" }}>
                Webマーケティング営業とは、中小企業の経営者に対して「Webを使った集客・販促・採用の課題を解決する」提案を行う法人営業職です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151", marginBottom: "18px" }}>
                従来の「ものを売る」営業とは異なり、「お客様のビジネス課題を聞いて、最適な解決策を提案する」コンサルティング型の営業スタイルです。一度受注した顧客とは長期的な関係が続くため、信頼関係を積み上げることがこの仕事の本質になります。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151" }}>
                扱う商材はMEO対策・SEO対策・ホームページ制作・AIO対策（AI検索最適化）・AI活用支援です。いずれも「Googleで見つけてもらいやすくする」「AIにも引用されるWebサイトにする」という目的の商材で、経営者が直感的に価値を理解しやすい特徴があります。
              </p>
            </div>
          </div>
        </section>

        {/* ── サイプレスで営業をする意味 ─────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Why Cypress</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.4, marginBottom: "28px" }}>
                サイプレスで営業をする意味
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151", marginBottom: "18px" }}>
                Web集客支援の会社は多くありますが、サイプレスで働くことには明確な違いがあります。
              </p>
              <div style={{ marginBottom: "24px" }}>
                {[
                  { t: "制作・保守がすべて社内完結", b: "外注への丸投げではなく、制作・施策・運用・レポートを社内チームが担当します。「売ったはいいが対応できない」という問題が起きにくく、お客様への提案に自信を持てます。" },
                  { t: "MEO・SEO・AIO・AI活用を横断提案できる", b: "単一商材ではなく、Googleマップ・検索・AI検索・ホームページを組み合わせた複合提案が可能です。顧客の課題に最も適した提案ができるため、成約率が高まります。" },
                  { t: "ChatGPT・AI時代の最前線で働ける", b: "AIO対策・AI活用支援という最新商材を扱える環境です。「AI時代に価値が上がる営業スキル」を身につけながら、顧客に実際の価値を届けられます。" },
                ].map((item) => (
                  <div key={item.t} style={{ padding: "20px 0", borderTop: "1px solid #e8e4dc" }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #e8e4dc" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 募集メッセージ ──────────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Message</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.4, marginBottom: "28px" }}>
                「稼ぎながら、休める」<br />
                その両方を本気で実現してほしい
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151", marginBottom: "18px" }}>
                株式会社サイプレスは、MEO対策・SEO対策・ホームページ制作・AI活用支援を通じて、日本全国の中小ビジネスのWeb集客を支援するマーケティング会社です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151", marginBottom: "18px" }}>
                私たちが募集するのは、経営者と向き合い、「集客の課題を解決したい」という一人ひとりのニーズを聞き、最適なプランを提案できる営業職です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151" }}>
                制作・保守・運用はすべて社内チームが担当します。あなたは提案と受注、そして顧客との長期的な関係構築に専念できます。Webマーケティングの知識は入社後に習得できます。「稼ぎたい」「成長したい」という意欲があれば、ぜひ一緒に働きましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── 仕事の魅力 ─────────────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Highlights</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              この仕事の4つの魅力
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  n: "01",
                  title: "月給35万円以上 × 年間休日130日",
                  body: "収入とプライベートを両立できる環境を整えています。「稼げるけど休めない」「休めるけど稼げない」どちらも不要。両方を本気で実現します。",
                },
                {
                  n: "02",
                  title: "制作・保守はサイプレスが全対応",
                  body: "ホームページ制作・MEO施策・SEOコンテンツ・AIツール導入まで、すべてサイプレス社内チームが担当。営業は提案と受注に集中できます。",
                },
                {
                  n: "03",
                  title: "AI時代に価値が上がる商材を扱える",
                  body: "MEO対策・SEO対策・AIO対策（AI検索対策）・AI活用支援は、今後ますます需要が拡大する成長領域です。この商材を深く理解した営業経験は、中長期的な市場価値につながります。",
                },
                {
                  n: "04",
                  title: "経営者と対等に話せる提案型営業",
                  body: "ターゲットは中小企業の経営者・オーナー。「集客の悩みを解決したい」という切実なニーズに応える仕事です。単なる数字合わせではなく、経営者の課題解決パートナーとして信頼されるポジションです。",
                },
              ].map((item) => (
                <div key={item.n} style={{ padding: "32px", background: "#ffffff", border: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", marginBottom: "10px" }}>{item.n}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "17px", fontWeight: 700, color: "#0d1b2a", marginBottom: "12px" }}>{item.title}</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 月給35万円以上について ──────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Salary</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "24px" }}>
                月給35万円以上について
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151", marginBottom: "18px" }}>
                「Webマーケティング営業」と聞くと、インセンティブ頼みで基本給が低いイメージを持つ方もいるかもしれません。サイプレスでは月給35万円以上を提示しています。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151", marginBottom: "18px" }}>
                具体的な給与は、あなたの経験・スキル・面談時の評価をもとに個別に決定します。「必ず○万円になる」という断定はしませんが、成果次第で高収入を狙える環境を整えています。
              </p>
              <div style={{ background: "#f8f6f2", border: "1px solid #e8e4dc", padding: "24px", marginBottom: "18px" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "12px" }}>給与に関するよくある疑問</p>
                {[
                  "未経験でも35万円以上ですか？ → 経験・スキルにより個別決定。面談でご確認ください。",
                  "インセンティブ・歩合はありますか？ → 詳細は面談時にご説明します。",
                  "昇給タイミングはいつですか？ → 評価サイクルについては面談でご確認ください。",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", padding: "8px 0", borderTop: "1px solid #e8e4dc", fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>
                    <span style={{ flexShrink: 0, color: "#c4b89a" }}>Q</span>
                    <span>{item}</span>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #e8e4dc" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 年間休日130日について ────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Holiday</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "24px" }}>
                年間休日130日の考え方
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151", marginBottom: "18px" }}>
                週休2日（土日）＋祝日ベースで年間休日を130日設けています。「働く日数を減らして生産性を上げる」という考え方のもと、オン・オフを明確にした働き方を推進しています。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151", marginBottom: "18px" }}>
                営業職は「働けば働くほど成果が出る」という面もありますが、疲弊した状態では質の高い提案ができません。十分な休暇を取ることで、顧客との商談でベストなパフォーマンスを発揮してほしいという考えから、年間130日の休日を設けています。
              </p>
              <div style={{ background: "#ffffff", border: "1px solid #e8e4dc", padding: "20px" }}>
                <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>
                  休日の詳細（有給休暇・特別休暇等）は面談時にご確認ください。年間休日130日を超える休暇取得についても個別にご相談いただけます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 仕事内容 ───────────────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Job Description</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              仕事内容
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "ヒアリング・課題発見", b: "中小企業の経営者・オーナーと面談し、Web集客の現状・課題・目標をヒアリングします。「問い合わせが少ない」「Googleマップで上位表示されない」「競合に負けている」などの課題を整理します。" },
                { n: "02", t: "提案書作成・プレゼン", b: "MEO対策・SEO対策・ホームページ制作・AIO対策・AI活用支援の中から、顧客の課題に最も効果的なプランを選んで提案書を作成。経営者に分かりやすく提示します。" },
                { n: "03", t: "受注・契約締結", b: "提案内容に合意いただいた後、契約手続きを行います。制作・保守・運用の引き継ぎは社内チームへ。顧客対応はアフターフォローに移行します。" },
                { n: "04", t: "アフターフォロー・追加提案", b: "既存顧客への定期連絡・成果報告・追加プランの提案を行います。長期的な信頼関係を積み上げることで、安定した受注基盤を構築します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "24px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", minWidth: "28px", paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        {/* ── 1日の流れ ─────────────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Daily Schedule</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ある1日の流れ（例）
            </h2>
            <div style={{ maxWidth: "680px" }}>
              {[
                { time: "9:00", title: "出社・メール確認・予定整理", body: "当日の商談・連絡事項を確認。提案書の最終チェックを行います。" },
                { time: "10:00", title: "新規顧客へのアプローチ・商談準備", body: "新規商談の準備（企業リサーチ・提案内容の整理）や既存顧客へのフォロー連絡を行います。" },
                { time: "11:00", title: "商談①（午前）", body: "地域の飲食店オーナーとMEO対策について商談。現在の課題をヒアリングし、提案内容を説明します。" },
                { time: "13:00", title: "昼休憩", body: "自由に過ごせます。" },
                { time: "14:00", title: "商談②（午後）", body: "美容院オーナーへSEO対策＋ホームページ制作のセット提案。過去事例を示しながら価値を説明します。" },
                { time: "16:00", title: "提案書作成・社内共有", body: "翌日以降の商談に向けた提案書作成。社内チームとの情報共有・受注後の引き継ぎ対応。" },
                { time: "18:00", title: "退社", body: "業務終了。プライベートの時間を大切にしてください。" },
              ].map((item) => (
                <div key={item.time} style={{ display: "flex", gap: "20px", padding: "16px 0", borderTop: "1px solid #e8e4dc", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", minWidth: "52px", paddingTop: "2px" }}>{item.time}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "4px" }}>{item.title}</p>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
              <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "12px" }}>※上記はあくまでも一例です。実際の業務はプロジェクトや状況によって異なります。</p>
            </div>
          </div>
        </section>

        {/* ── よくある提案パターン ─────────────────────────────────── */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", fontSize: "11px", marginBottom: "14px" }}>Proposal Patterns</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              よくある提案パターン
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  situation: "飲食店・美容院・整体院などの地域店舗",
                  proposal: "MEO対策（Googleマップ上位表示）を軸に提案。「お客様がGoogleマップで検索した際にお店が上位に出るようにしましょう」という分かりやすい提案。",
                },
                {
                  situation: "ホームページはあるが集客できていない企業",
                  proposal: "SEO対策＋コンテンツ制作の提案。「今のサイトを改善してGoogle検索で見つけてもらいやすくしましょう」という改善提案。",
                },
                {
                  situation: "ホームページが古い・ない企業",
                  proposal: "ホームページ制作＋SEO対策のセット提案。「集客できるサイトを作り、同時に検索対策も進めましょう」という新規構築提案。",
                },
                {
                  situation: "採用に困っている企業",
                  proposal: "採用特化ページ制作＋採用SEO対策の提案。「求人票だけでなく、御社の魅力を伝える採用ページで応募者を増やしましょう」という提案。",
                },
                {
                  situation: "ChatGPT・AI検索に関心がある経営者",
                  proposal: "AIO対策（AI検索最適化）の提案。「ChatGPTで業界情報を調べた際に御社が引用されるようにしましょう」という最新商材提案。",
                },
                {
                  situation: "業務効率化に関心がある企業",
                  proposal: "AI活用支援の提案。「ChatGPTを使った業務自動化・メール文書作成効率化を支援します」という提案。",
                },
              ].map((item, i) => (
                <div key={i} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "24px" }}>
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "8px", fontFamily: "var(--font-display)" }}>PATTERN {String(i + 1).padStart(2, "0")}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "14px", fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: "10px" }}>{item.situation}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: "1.9" }}>{item.proposal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 提案する商材 ───────────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Products</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              提案する商材
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", marginBottom: "40px" }}>制作・保守・運用はすべてサイプレスが担当。営業は提案に専念できます。</p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { label: "MEO対策", desc: "Googleビジネスプロフィールを最適化し、地図検索で上位表示。地域の経営者に最も刺さる商材です。" },
                { label: "SEO対策", desc: "検索エンジンからの自然流入を増やす施策。長期的な集客基盤を構築します。" },
                { label: "ホームページ制作", desc: "問い合わせにつながるプロ品質のサイト制作。WordPressや高速フレームワーク対応。" },
                { label: "AIO対策", desc: "ChatGPT・Gemini・Perplexityなど、AI検索エンジンからの引用・露出を増やす最新施策。" },
                { label: "AI活用支援", desc: "業務自動化・チャットボット・AIコンテンツ生成など、中小企業のAI導入を支援します。" },
                { label: "SNS運用", desc: "Instagram・LINE・Google口コミなどを活用した集客・ブランディング支援。" },
              ].map((item) => (
                <div key={item.label} style={{ background: "#ffffff", border: "1px solid #e8e4dc", padding: "24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 販売しやすい理由 ────────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Why It Sells</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              この商材が売りやすい理由
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "経営者が「集客の悩み」を抱えていることを知っている", body: "「Googleマップに表示されない」「問い合わせが来ない」という悩みは、中小ビジネスの多くが共通して抱えています。課題が明確なため、提案のスタート地点が分かりやすい商材です。" },
                { title: "費用対効果が説明しやすい", body: "「月額でGoogleマップ上位表示 → 問い合わせ増加 → 売上増」という流れを示せます。費用の根拠を経営者の視点で説明しやすく、納得感が生まれやすい商材です。" },
                { title: "競合との比較で勝てるケースが多い", body: "中小企業のWeb集客はまだ整備されていないケースが多く、MEO・SEOを丁寧に行うだけで差が生まれます。「今は何もしていない」という経営者ほど、提案のインパクトが大きくなります。" },
                { title: "AI時代の追い風がある", body: "ChatGPT・Geminiなど生成AIの普及で「AIにも引用されるWebサイト・Googleマップ」の重要性が急速に認識されています。AIO対策・AI活用支援という新商材が加わることで、提案の切り口がさらに広がっています。" },
              ].map((item) => (
                <div key={item.title} style={{ border: "1px solid #e8e4dc", padding: "28px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "12px" }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 求める人物像 ────────────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Ideal Candidate</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              向いている人・向いていない人
            </h2>
            <div className="grid md:grid-cols-2 gap-10" style={{ maxWidth: "880px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "16px", paddingBottom: "10px", borderBottom: "2px solid #0d1b2a" }}>こんな方に来てほしい</p>
                {[
                  "経営者・ビジネスオーナーと対話することが好き、または目指している",
                  "成長意欲が高く、自ら学んで成果を出したい",
                  "「しっかり稼ぎたい」という明確な意欲がある",
                  "チームで動きながら、自分の役割を果たせる",
                  "新しいことを吸収するのが苦でない（AI・Webの最新知識）",
                  "誠実にお客様と向き合いたい",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "12px", padding: "10px 0", borderTop: "1px solid #e8e4dc" }}>
                    <span style={{ color: "#0d1b2a", flexShrink: 0 }}>✓</span>
                    <p style={{ fontSize: "14px", color: "#374151" }}>{item}</p>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #e8e4dc" }} />
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#9ca3af", marginBottom: "16px", paddingBottom: "10px", borderBottom: "2px solid #e8e4dc" }}>こんな方は向いていないかも</p>
                {[
                  "安定収入だけを求め、成長・挑戦への意欲がない方",
                  "顧客と向き合うのが苦手で、完全に内向きの業務だけをしたい方",
                  "日々変化するAI・Webのトレンドを追うことに抵抗がある方",
                  "数字や目標に向き合うことを避けたい方",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "12px", padding: "10px 0", borderTop: "1px solid #e8e4dc" }}>
                    <span style={{ color: "#9ca3af", flexShrink: 0 }}>×</span>
                    <p style={{ fontSize: "14px", color: "#9ca3af" }}>{item}</p>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #e8e4dc" }} />
                <div style={{ background: "#ffffff", border: "1px solid #e8e4dc", padding: "16px", marginTop: "16px" }}>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>
                    「自分がどちらか分からない」という方も歓迎します。面談でお話を聞かせてください。
                  </p>
                </div>
              </div>
            </div>
            <div style={{ maxWidth: "640px", marginTop: "48px" }}>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "16px" }}>歓迎する経験（必須ではありません）</p>
              {[
                "法人営業・個人営業の経験（業種不問）",
                "Webマーケティング・SEO・MEO関連の知識",
                "飲食・美容・建設・医療・士業などのビジネス経験",
                "スタートアップ・ベンチャー経験",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "12px", padding: "10px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ color: "#9ca3af", flexShrink: 0 }}>◇</span>
                  <p style={{ fontSize: "14px", color: "#374151" }}>{item}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        {/* ── 選考で見るポイント ───────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Selection Criteria</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "28px" }}>
                選考で見るポイント
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151", marginBottom: "24px" }}>
                学歴・職歴・資格は問いません。面談では以下の点を中心にお話しします。
              </p>
              {[
                { point: "誠実さ・人柄", desc: "顧客に誠実に向き合えるか。誇大説明・虚偽説明をしないか。長期的な信頼関係を大切にできるか。" },
                { point: "成長意欲", desc: "学ぶことへの抵抗がないか。新しい知識（AI・Webマーケティング）を吸収しようとする姿勢があるか。" },
                { point: "仕事への動機", desc: "なぜこの仕事に興味を持ったか。収入・成長・社会貢献など、自分の動機が明確か。" },
                { point: "コミュニケーション力", desc: "経営者と対話できるか。相手の話を聞いて整理し、分かりやすく説明できるか。" },
              ].map((item) => (
                <div key={item.point} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a", fontSize: "13px", fontWeight: 700, minWidth: "120px", paddingTop: "2px" }}>{item.point}</span>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.desc}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        {/* ── 入社後のサポート ──────────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Onboarding Support</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              入社後のサポート
            </h2>
            <div className="grid md:grid-cols-3 gap-6" style={{ maxWidth: "900px" }}>
              {[
                { phase: "入社〜1ヶ月", title: "商材知識研修", body: "MEO・SEO・AIO・ホームページ制作・AI活用支援の仕組みと価値を学ぶ研修。「なぜ顧客の役に立つのか」を理解することが目的です。" },
                { phase: "1〜3ヶ月", title: "提案トーク習得", body: "提案資料の使い方・商談の進め方・よくある質問への回答方法を習得。先輩の同行から始め、一人立ちを目指します。" },
                { phase: "3ヶ月以降", title: "独立営業＋フォロー", body: "一人で商談・受注できるようになったあとも、チームで情報共有しながら課題を解決する体制を継続します。" },
              ].map((item) => (
                <div key={item.phase} style={{ background: "#ffffff", border: "1px solid #e8e4dc", padding: "28px" }}>
                  <p style={{ fontSize: "11px", color: "#9ca3af", marginBottom: "6px", fontFamily: "var(--font-display)" }}>{item.phase}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "10px" }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 募集要項 ───────────────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Requirements</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              募集要項
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { label: "職種", value: "Webマーケティング営業（法人営業）" },
                { label: "雇用形態", value: "正社員（正規雇用）" },
                { label: "月給", value: "35万円以上（経験・スキルにより決定）" },
                { label: "年間休日", value: "130日（詳細は面談時にご説明します）" },
                { label: "勤務地", value: "東京都葛飾区白鳥4-6-1-623（詳細は面談時に確認）" },
                { label: "仕事内容", value: "MEO対策・SEO対策・ホームページ制作・AIO対策・AI活用支援を中小企業経営者へ提案する法人営業" },
                { label: "対象", value: "学歴・職歴・資格不問。成長意欲のある方歓迎。未経験可。" },
                { label: "研修", value: "入社後は商材知識・提案トーク研修・同行サポートあり" },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", gap: "32px", padding: "16px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ width: "100px", flexShrink: 0, fontSize: "13px", fontWeight: 600, color: "#0d1b2a" }}>{row.label}</span>
                  <span style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{row.value}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        {/* ── キャリアパス ────────────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Career Path</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              キャリアパス
            </h2>
            <div className="grid md:grid-cols-3 gap-6" style={{ maxWidth: "900px" }}>
              {[
                { phase: "入社〜6ヶ月", title: "基礎習得・提案デビュー", body: "商材知識・提案トーク・業界理解を習得。先輩の同行から始まり、自分で提案・受注できるようになることを目標にします。" },
                { phase: "6ヶ月〜2年", title: "個人目標達成・専門性強化", body: "独立した営業担当として受注を積み上げます。特定業種（飲食・医療・建設など）のスペシャリストとして専門性を高める道もあります。" },
                { phase: "2年以降", title: "リーダー・マネジメント", body: "チームリーダー・マネージャーとしてメンバーの育成・組織目標の達成を担うキャリアが開きます。成長の方向性を一緒に設計します。" },
              ].map((item) => (
                <div key={item.phase} style={{ border: "1px solid #e8e4dc", padding: "28px", background: "#ffffff" }}>
                  <p style={{ fontSize: "11px", color: "#9ca3af", marginBottom: "6px", fontFamily: "var(--font-display)" }}>{item.phase}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "10px" }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 会社情報 ───────────────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Company Info</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "32px" }}>会社概要</h2>
            <div style={{ maxWidth: "680px" }}>
              {[
                { label: "会社名", value: "株式会社サイプレス" },
                { label: "代表取締役", value: "織田 春樹" },
                { label: "設立", value: "2026年5月13日" },
                { label: "所在地", value: "東京都葛飾区白鳥4-6-1-623" },
                { label: "事業内容", value: "Webマーケティング支援（MEO・SEO・AIO対策）・ホームページ制作・AI活用支援・SNS運用" },
                { label: "お問い合わせ", value: "info@cypress-all.co.jp" },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", gap: "32px", padding: "14px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ width: "120px", flexShrink: 0, fontSize: "13px", fontWeight: 600, color: "#0d1b2a" }}>{row.label}</span>
                  <span style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{row.value}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        {/* ── 選考フロー ──────────────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Selection Process</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              選考フロー
            </h2>
            <div style={{ maxWidth: "680px" }}>
              {[
                { step: "Step 1", title: "エントリー", body: "お問い合わせフォームよりエントリーいただきます。履歴書は後日でも大丈夫です。" },
                { step: "Step 2", title: "書類確認・日程調整", body: "エントリー内容を確認後、面談日程をメールにてご案内します（通常2〜3営業日以内）。" },
                { step: "Step 3", title: "面談（1〜2回）", body: "会社・仕事内容・あなたの経歴・志望動機についてお話しします。オンライン面談に対応しています。" },
                { step: "Step 4", title: "内定・入社", body: "面談後、内定をお伝えします。入社日・条件など個別にご相談いただけます。" },
              ].map((item, i) => (
                <div key={item.step} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #e8e4dc" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "40px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#0d1b2a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#ffffff", fontSize: "12px", fontWeight: 700 }}>{i + 1}</span>
                    </div>
                  </div>
                  <div style={{ paddingTop: "4px" }}>
                    <p style={{ fontSize: "11px", color: "#9ca3af", marginBottom: "4px", fontFamily: "var(--font-display)" }}>{item.step}</p>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "6px" }}>{item.title}</p>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="正社員営業職の採用についてよくある質問" bgColor="#ffffff" />

        {/* ── エントリーCTA ────────────────────────────────────────── */}
        <PageContactCTA
          heading="まずはお気軽にエントリーください"
          body="選考に関するご質問・エントリーはお問い合わせフォームから。オンライン面談対応可。学歴・職歴不問、未経験歓迎です。"
        />
      </main>
      <Footer />
    </>
  );
}

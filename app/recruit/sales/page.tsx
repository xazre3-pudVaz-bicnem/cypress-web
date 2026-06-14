import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "正社員募集｜Webマーケティング営業・法人営業｜株式会社サイプレス",
  description:
    "株式会社サイプレスの正社員営業職募集。MEO対策・SEO対策・ホームページ制作を中小企業経営者へ提案する提案型法人営業。月給35万円以上・年間休日130日・未経験歓迎。東京葛飾区。",
  keywords: [
    "Webマーケティング 営業 求人",
    "MEO対策 営業職",
    "SEO営業 正社員",
    "未経験 Webマーケティング 求人",
    "法人営業 正社員 東京",
    "中小企業向け 営業 求人",
  ],
  openGraph: {
    title: "正社員募集｜Webマーケティング営業・法人営業｜株式会社サイプレス",
    description: "月給35万円以上・年間休日130日。MEO・SEO・ホームページを中小企業経営者に提案する提案型法人営業。未経験歓迎。",
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
];

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Webマーケティング営業（正社員）",
  description:
    "MEO対策・SEO対策・ホームページ制作・AIO対策・AI活用支援を中小企業経営者へ提案する提案型法人営業職。未経験歓迎。月給35万円以上・年間休日130日。",
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
      addressCountry: "JP",
    },
  },
  employmentType: "FULL_TIME",
  datePosted: "2026-06-14",
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "JPY",
    value: {
      "@type": "QuantitativeValue",
      minValue: 350000,
      unitText: "MONTH",
    },
  },
  jobBenefits: "年間休日130日、正社員雇用、未経験歓迎",
  qualifications: "学歴・職歴・資格不問。成長意欲のある方歓迎。",
  applicantLocationRequirements: {
    "@type": "Country",
    name: "Japan",
  },
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
        <section style={{ background: "#0d1b2a", position: "relative", padding: "100px 0 80px", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/ChatGPT Image 2026年6月14日 21_13_52.png"
              alt="株式会社サイプレス 営業チームミーティング"
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

        {/* ── 売る商材 ───────────────────────────────────────────── */}
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
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", fontSize: "11px", marginBottom: "14px" }}>Why It Sells</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              この商材が売りやすい理由
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "経営者が「集客の悩み」を抱えていることを知っている", body: "「Googleマップに表示されない」「問い合わせが来ない」という悩みは、中小ビジネスの多くが共通して抱えています。課題が明確なため、提案のスタート地点が分かりやすい商材です。" },
                { title: "費用対効果が説明しやすい", body: "「月3万円でGoogleマップ上位表示 → 月5件の問い合わせ増加 → 単価5万円なら月25万円の売上増」という試算を示せます。費用の根拠を数字で示しやすく、経営者が納得しやすい商材です。" },
                { title: "競合との比較で勝てるケースが多い", body: "中小企業のWeb集客はまだ整備されていないケースが多く、MEO・SEOを丁寧に行うだけで差が生まれます。「今は何もしていない」という経営者ほど、提案のインパクトが大きくなります。" },
                { title: "AI時代の追い風がある", body: "ChatGPT・Geminiなど生成AIの普及で「AIにも引用されるWebサイト・Googleマップ」の重要性が急速に認識されています。AIO対策・AI活用支援という新商材が加わることで、提案の切り口がさらに広がっています。" },
              ].map((item) => (
                <div key={item.title} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "28px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: "1.9" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 求める人物像 ────────────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Ideal Candidate</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              求める人物像
            </h2>
            <div style={{ maxWidth: "640px" }}>
              <div style={{ marginBottom: "32px" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "16px" }}>こんな方に来てほしい</p>
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
          </div>
        </section>

        {/* ── 募集要項 ───────────────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
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
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
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
                <div key={item.phase} style={{ border: "1px solid #e8e4dc", padding: "28px" }}>
                  <p style={{ fontSize: "11px", color: "#9ca3af", marginBottom: "6px", fontFamily: "var(--font-display)" }}>{item.phase}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "10px" }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 会社情報 ───────────────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
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
                { label: "お問い合わせ", value: "consulting.meo@gmail.com" },
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
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
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

        <FaqSection items={faqItems} heading="正社員営業職の採用についてよくある質問" bgColor="#f8f6f2" />

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

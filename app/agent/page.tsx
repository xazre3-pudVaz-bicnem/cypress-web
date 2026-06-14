import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "販売代理店募集｜ホームページ制作・MEO対策・SEO対策の代理店募集｜株式会社サイプレス",
  description:
    "株式会社サイプレスの販売代理店（業務委託）募集。MEO対策・SEO対策・ホームページ制作・AIO対策・AI活用支援を中小企業へ販売。制作・保守・運用はサイプレスが全対応。代理店は販売に専念。",
  keywords: [
    "販売代理店 募集 Webマーケティング",
    "MEO対策 代理店",
    "SEO対策 代理店",
    "ホームページ制作 代理店",
    "副業 Webマーケティング 代理店",
    "副収入 代理店",
  ],
  openGraph: {
    title: "販売代理店募集｜ホームページ制作・MEO対策・SEO対策の代理店募集｜株式会社サイプレス",
    description: "制作・保守・運用はサイプレスが全対応。代理店は販売に専念するだけ。Web制作リソース不要。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/agent" },
};

const faqItems = [
  {
    q: "販売代理店とはどのような仕組みですか？",
    a: "代理店様はサイプレスのMEO対策・SEO対策・ホームページ制作・AIO対策・AI活用支援を中小企業の経営者へ販売します。制作・保守管理・運用の実務はすべてサイプレスが対応します。代理店様のご担当は「販売」のみです。",
  },
  {
    q: "代理店になるために必要な条件はありますか？",
    a: "特定の資格・業種・法人格などの制限はありません。個人事業主・法人どちらでも応募いただけます。Webマーケティングの専門知識も必須ではありません。「販売できる顧客接点がある」「提案営業ができる」という方であればご相談ください。",
  },
  {
    q: "Web制作やシステムの知識は必要ですか？",
    a: "いいえ、不要です。制作・保守・運用・技術対応はすべてサイプレスが担当します。代理店様は顧客へのヒアリング・提案・受注に専念していただけます。",
  },
  {
    q: "代理店が担当する業務は何ですか？",
    a: "①顧客のWeb集客の課題をヒアリングする、②サイプレスの商材を提案する、③受注・契約手続きを行う、という3つが基本業務です。契約後の実務・顧客対応・運用報告はサイプレスが対応します。",
  },
  {
    q: "販売できる商材は何ですか？",
    a: "MEO対策（Googleマップ上位表示）・SEO対策（検索上位表示）・ホームページ制作・AIO対策（AI検索対策）・AI活用支援・SNS運用支援です。顧客の課題に合わせて最適な商材を選んで提案できます。",
  },
  {
    q: "手数料・報酬の仕組みはどうなっていますか？",
    a: "報酬体系の詳細は個別のご相談の中でご案内します。具体的な料率は契約内容・販売量などを踏まえて個別に協議させていただきます。まずはお問い合わせください。",
  },
  {
    q: "副業として販売代理店をすることはできますか？",
    a: "はい、可能です。本業と並行して副業・副収入として活動いただける体制を想定しています。既存の顧客接点・人脈を活かして販売していただけます。",
  },
  {
    q: "販売ノルマはありますか？",
    a: "強制的なノルマは設けていません。ただし、長期的にお互いにとって有益な関係を維持するため、活動状況について定期的なコミュニケーションをお願いしています。",
  },
  {
    q: "代理店専用のサポートや研修はありますか？",
    a: "はい。商材の説明資料・提案トークの参考資料・よくある質問への回答集など、販売を支援するツールをご用意します。不明点はサイプレスの担当者にいつでもご相談いただけます。",
  },
  {
    q: "どのような業種の顧客に販売できますか？",
    a: "飲食店・美容室・クリニック・歯科・建設業・リフォーム会社・士業・整体院・学習塾・ペットショップ・不動産など、Web集客に課題を感じている中小企業全般が対象です。特定業種に限らず、顧客接点があれば幅広く提案できます。",
  },
  {
    q: "自社でWebサイトを持っていない顧客にも提案できますか？",
    a: "はい、特に効果的です。「Webサイトがない」「今のサイトが古い」という経営者はホームページ制作・MEO対策の両方をワンストップで提案できる絶好の案件です。",
  },
  {
    q: "既存の取引先・顧客がいない状態から始められますか？",
    a: "既存の顧客接点をお持ちの方を主に想定していますが、新規開拓で始めたいという方もご相談ください。商材・提案方法・ターゲット選定についてサポートします。",
  },
  {
    q: "代理店契約の期間や解約条件はどうなっていますか？",
    a: "契約期間・解約条件は個別契約の内容によります。詳細はご相談の上で決定します。",
  },
  {
    q: "代理店として活動する地域に制限はありますか？",
    a: "特定の地域制限は設けていません。サイプレスはオンライン対応が可能なため、全国の中小企業へ販売していただけます。",
  },
  {
    q: "代理店から紹介した案件の進捗は確認できますか？",
    a: "はい。受注後の進捗状況はサイプレスの担当者を通じて定期的にお伝えします。顧客への対応状況を把握できる体制を整えます。",
  },
  {
    q: "サイプレスに直接連絡しなければならない場面はありますか？",
    a: "提案内容の確認・見積もりの作成・顧客からの技術的な質問など、代理店様が対応しきれない場面はサイプレスがバックアップします。必要に応じて三者面談にも対応します。",
  },
  {
    q: "代理店の申し込みから活動開始まで、どのくらいかかりますか？",
    a: "ご相談・面談・契約手続きを経て、通常2〜4週間程度で活動を開始いただけます。詳細はご状況によります。",
  },
  {
    q: "既存の事業（Web制作・コンサル等）を持っている場合、競合しませんか？",
    a: "サイプレスは中小企業向けのWeb集客に特化しているため、既存事業との棲み分けが可能なケースが多いです。詳細はご相談ください。",
  },
  {
    q: "AI・デジタル系の商材に強みがなくても販売できますか？",
    a: "はい。MEO対策・ホームページ制作など、技術的な説明をサポートする資料・トークスクリプトを提供します。専門知識がなくても「お客様の集客の悩みを聞いて提案できる」ことの方が重要です。",
  },
  {
    q: "法人として代理店契約することもできますか？",
    a: "はい、法人・個人事業主どちらでも対応可能です。詳細は個別にご相談ください。",
  },
  {
    q: "申し込み方法を教えてください。",
    a: "お問い合わせフォームより「販売代理店募集への応募」の旨をお知らせください。担当者より2〜3営業日以内にご連絡します。",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "販売代理店プログラム",
  provider: {
    "@type": "Organization",
    name: "株式会社サイプレス",
    url: "https://www.cypress-all.co.jp",
  },
  description:
    "MEO対策・SEO対策・ホームページ制作・AIO対策を中小企業へ販売する代理店プログラム。制作・保守・運用はサイプレスが全対応。",
  areaServed: { "@type": "Country", name: "Japan" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
    { "@type": "ListItem", position: 2, name: "販売代理店募集", item: "https://www.cypress-all.co.jp/agent" },
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

export default function AgentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section style={{ background: "#0d1b2a", position: "relative", padding: "100px 0 80px", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/ChatGPT Image 2026年6月14日 21_09_09 (4).png"
              alt="販売代理店 ビジネスパートナーとの商談"
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
              <span>販売代理店募集</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "16px" }}>Sales Agency</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,4.5vw,50px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.2, marginBottom: "28px" }}>
              販売代理店募集
            </h1>
            <p style={{ fontSize: "18px", lineHeight: "1.9", color: "#ffffff", fontWeight: 700, maxWidth: "600px", marginBottom: "16px" }}>
              制作・保守・運用はすべてサイプレスが担当。<br />
              代理店は<span style={{ borderBottom: "2px solid rgba(255,255,255,0.4)" }}>販売に専念</span>するだけです。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "rgba(255,255,255,0.7)", maxWidth: "560px" }}>
              MEO対策・SEO対策・ホームページ制作・AIO対策・AI活用支援を中小企業の経営者へ提案する販売代理店パートナーを募集しています。Webや制作のリソースは一切不要です。
            </p>
          </div>
        </section>

        {/* ── 3つのポイント ────────────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Key Points</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              サイプレスの代理店プログラムが選ばれる理由
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  n: "01",
                  title: "制作・保守・運用は完全サポート",
                  body: "ホームページ制作・MEO施策・SEOコンテンツ・AIツール導入・保守管理・月次運用レポートまで、すべてサイプレスが担当します。代理店様に技術的な知識やリソースは一切不要です。",
                },
                {
                  n: "02",
                  title: "需要が高く・説明しやすい商材",
                  body: "「Googleマップで上位に出たい」「ホームページから問い合わせを増やしたい」という中小経営者の悩みに直結する商材です。費用対効果を数字で示せるため、提案が通りやすい特長があります。",
                },
                {
                  n: "03",
                  title: "既存の顧客接点・人脈が活かせる",
                  body: "経営者・自営業者・士業・コンサルタントなど、すでに中小企業との接点をお持ちの方は特に活動しやすいプログラムです。副業・副収入として始めることも可能です。",
                },
              ].map((item) => (
                <div key={item.n} style={{ padding: "32px", background: "#f8f6f2", border: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", marginBottom: "10px" }}>{item.n}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "17px", fontWeight: 700, color: "#0d1b2a", marginBottom: "12px" }}>{item.title}</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 役割分担 ───────────────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Role Division</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              代理店様とサイプレスの役割分担
            </h2>
            <div className="grid md:grid-cols-2 gap-8" style={{ maxWidth: "820px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "20px", padding: "12px 16px", background: "#e8e4dc" }}>代理店様のご担当（販売のみ）</p>
                {[
                  "顧客のWeb集客の課題をヒアリング",
                  "商材の提案・プレゼン",
                  "受注・契約手続き",
                  "顧客との関係維持・追加提案",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", padding: "10px 0", borderTop: "1px solid #e8e4dc" }}>
                    <span style={{ color: "#0d1b2a", flexShrink: 0 }}>✓</span>
                    <p style={{ fontSize: "14px", color: "#374151" }}>{item}</p>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #e8e4dc" }} />
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "20px", padding: "12px 16px", background: "#0d1b2a" }}>サイプレスが担当（制作・運用・保守）</p>
                {[
                  "ホームページ・LPの設計・制作",
                  "MEO対策の実施・Googleビジネスプロフィール管理",
                  "SEOコンテンツの制作・更新",
                  "AIO対策・AI活用支援の実装",
                  "サーバー・保守管理",
                  "月次運用レポートの作成",
                  "顧客からの技術的な問い合わせ対応",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", padding: "10px 0", borderTop: "1px solid #e8e4dc" }}>
                    <span style={{ color: "#9ca3af", flexShrink: 0 }}>→</span>
                    <p style={{ fontSize: "14px", color: "#374151" }}>{item}</p>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #e8e4dc" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 販売できる商材 ──────────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Products</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              提案できる商材ラインナップ
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", marginBottom: "40px" }}>制作・保守・運用はすべてサイプレスが対応。代理店様は提案に集中できます。</p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { label: "MEO対策", desc: "Googleマップ・Googleビジネスプロフィールの最適化で「地域名＋業種」の検索での上位表示を実現。地域ビジネスに最も需要が高い商材。" },
                { label: "SEO対策", desc: "Google検索からの自然流入を増やすコンテンツ・技術対策。長期的な集客基盤の構築。" },
                { label: "ホームページ制作", desc: "問い合わせにつながるプロ品質のサイト制作。WordPress・高速フレームワーク対応。更新・保守もサイプレスが担当。" },
                { label: "AIO対策", desc: "ChatGPT・Gemini・Perplexityなど生成AI検索エンジンからの引用・露出を増やす最新施策。" },
                { label: "AI活用支援", desc: "業務自動化・チャットボット・AIコンテンツ生成など、中小企業のAI導入を支援。" },
                { label: "SNS運用支援", desc: "Instagram・LINE・Google口コミなどを活用した集客・ブランディング支援。" },
              ].map((item) => (
                <div key={item.label} style={{ background: "#f8f6f2", border: "1px solid #e8e4dc", padding: "24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── こんな方に向いている ──────────────────────────────── */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", fontSize: "11px", marginBottom: "14px" }}>Who It&apos;s For</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              こんな方に向いています
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "中小企業・経営者との接点がある方", body: "商工会・異業種交流会・士業・コンサルタント・営業職など、中小企業オーナーとのつながりがある方は特に活動しやすい環境です。" },
                { title: "既存事業の付加価値として提案したい方", body: "会計・法務・人事・ITサポートなど、別サービスを提供しながら「Web集客も一緒に提案できる」というポジションを確立したい方に最適です。" },
                { title: "副業・副収入として始めたい方", body: "本業と並行して活動できます。販売量に応じた報酬体系のため、自分のペースで収入を増やせます。" },
                { title: "Webマーケティングの商材を扱いたい元・現営業職", body: "法人営業・個人営業の経験をお持ちで、AI・Web集客という成長市場の商材を扱いたい方に向いています。" },
              ].map((item) => (
                <div key={item.title} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "28px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "10px" }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: "1.9" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ターゲット顧客例 ────────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Target Customers</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              提案先の顧客例
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", marginBottom: "36px" }}>Web集客に課題を持つ中小企業であれば、業種を問わず提案できます。</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", maxWidth: "820px" }}>
              {[
                "飲食店・カフェ・居酒屋",
                "美容室・ヘアサロン・ネイルサロン",
                "クリニック・歯科医院",
                "整体院・接骨院・エステ",
                "建設業・リフォーム会社",
                "水道・電気・設備工事",
                "不動産会社・賃貸管理",
                "税理士・社労士・行政書士",
                "学習塾・英会話・スクール",
                "ペットショップ・トリミング",
                "小売店・アパレル・雑貨",
                "ヨガ・フィットネス・整骨院",
              ].map((tag) => (
                <span key={tag} style={{ padding: "8px 16px", border: "1px solid #e8e4dc", fontSize: "13px", color: "#374151", background: "#f8f6f2" }}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── サポート体制 ───────────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Support</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              代理店様へのサポート体制
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { n: "01", title: "提案資料・説明ツールの提供", body: "商材の説明資料・提案書テンプレート・よくある質問への回答集など、販売を支援するツールを提供します。" },
                { n: "02", title: "専任担当者によるバックアップ", body: "代理店様の活動をサポートするサイプレスの担当者が個別につきます。不明点はいつでもご相談ください。" },
                { n: "03", title: "三者商談への同席対応", body: "顧客への説明が難しい場合や、専門的な質問が出た場合は、サイプレスの担当者が商談に同席してサポートします（オンライン可）。" },
              ].map((item) => (
                <div key={item.n} style={{ padding: "28px", background: "#ffffff", border: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", marginBottom: "10px" }}>{item.n}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "10px" }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── お申し込みの流れ ────────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>How to Apply</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              代理店申し込みの流れ
            </h2>
            <div style={{ maxWidth: "680px" }}>
              {[
                { step: "Step 1", title: "お問い合わせ", body: "お問い合わせフォームより「販売代理店への応募」の旨をお知らせください。現在の状況・ご希望も記載いただけるとスムーズです。" },
                { step: "Step 2", title: "担当者よりご連絡", body: "通常2〜3営業日以内に担当者よりメールにてご連絡します。日程を調整のうえ、オンラインまたは対面で面談を行います。" },
                { step: "Step 3", title: "条件・契約内容のご確認", body: "報酬体系・契約内容・活動方法などについて詳しくご説明します。ご不明点はこの段階でご確認ください。" },
                { step: "Step 4", title: "契約・活動開始", body: "契約締結後、提案資料・サポートツールをご提供します。通常2〜4週間程度で活動を開始いただけます。" },
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

        {/* ── 会社情報 ───────────────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Company Info</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "32px" }}>運営会社</h2>
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

        <FaqSection items={faqItems} heading="販売代理店募集についてよくある質問" bgColor="#ffffff" />

        <PageContactCTA
          heading="販売代理店のご相談・お申し込みはこちら"
          body="まずはお気軽にお問い合わせください。制作リソース不要・Webの専門知識不要。販売に専念できる環境でご活躍いただけます。"
        />
      </main>
      <Footer />
    </>
  );
}

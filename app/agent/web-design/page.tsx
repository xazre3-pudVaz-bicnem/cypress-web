import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "ホームページ制作の販売代理店募集｜制作・保守はサイプレスが対応｜株式会社サイプレス",
  description:
    "株式会社サイプレスでは、ホームページ制作を販売いただける代理店様を募集しています。制作・保守管理・運用はサイプレスが対応するため、代理店様は販売活動に集中できます。Web制作リソース不要。",
  keywords: [
    "ホームページ制作 代理店募集",
    "ホームページ制作 販売代理店募集",
    "Web制作 代理店募集",
    "ホームページ制作 取次店",
    "Web制作 商材 代理店",
    "ホームページ制作 パートナー募集",
  ],
  openGraph: {
    title: "ホームページ制作の販売代理店募集｜制作・保守はサイプレスが対応｜株式会社サイプレス",
    description: "ホームページ制作の販売代理店募集。制作・保守はサイプレスが全対応。Web制作リソース不要で販売に集中できます。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/agent/web-design" },
};

const faqItems = [
  {
    q: "ホームページ制作代理店とはどのような仕組みですか？",
    a: "サイプレスのホームページ制作サービスを代理店様が顧客へ提案・販売する仕組みです。制作・コーディング・保守管理・SEO基盤設計はすべてサイプレスが担当します。代理店様のご担当は顧客へのヒアリング・提案・受注のみです。",
  },
  {
    q: "Web制作の知識や技術者がいなくても代理店になれますか？",
    a: "はい、不要です。HTML・CSS・WordPress・プログラミングなどの知識は一切不要です。「顧客にホームページが必要と感じた」「古いサイトをリニューアルしたい顧客がいる」という接点があれば、それだけで販売できます。",
  },
  {
    q: "制作費用の相場や提案価格はどのように決まりますか？",
    a: "ご契約内容によって価格帯が異なります。詳細は個別面談の中でご案内します。顧客の規模・要件・機能に応じた複数のプランをご用意しています。",
  },
  {
    q: "代理店の報酬・マージンはどのくらいですか？",
    a: "報酬体系の詳細は個別のご相談の中でお伝えします。顧客の成約内容・販売量・契約形態によって個別に協議させていただきます。まずはお問い合わせください。",
  },
  {
    q: "どのような顧客にホームページ制作を提案できますか？",
    a: "ホームページを持っていない中小企業、サイトが古い・スマホ対応していない企業、問い合わせが少ない企業、採用に困っている企業、Googleで見つからない企業などが主なターゲットです。特に飲食店・美容室・医療・建設・士業・地域店舗が提案しやすい業種です。",
  },
  {
    q: "月額の保守管理はサイプレスが担当しますか？",
    a: "はい。公開後の保守管理・SSL更新・プラグイン管理・セキュリティ対応はサイプレスが担当します。代理店様は制作後の技術的な対応を気にする必要がありません。",
  },
  {
    q: "WordPress・Next.jsどちらにも対応していますか？",
    a: "はい。WordPress・Next.js・その他のCMSに対応しています。顧客の目的・運用体制に合わせて最適な技術選定をサイプレスが行います。",
  },
  {
    q: "代理店向けの提案資料はもらえますか？",
    a: "はい。ホームページ制作の必要性・サービス内容・制作事例・費用感などを説明するための提案サポート資料をご提供します。顧客に見せられる資料形式でご用意します。",
  },
  {
    q: "顧客が内容を変更したい・追加したい場合はどうなりますか？",
    a: "顧客の変更・追加要望はサイプレスが対応します。代理店様は変更内容を取りまとめてサイプレスへ連絡いただくだけです。技術的な対応は不要です。",
  },
  {
    q: "MEO対策やSEO対策とのセット提案はできますか？",
    a: "はい。ホームページ制作に加え、MEO対策・SEO対策・AIO対策・SNS運用などをセットで提案できます。複合商材として提案することで、顧客への価値提供が大きくなり、成約率も高まります。",
  },
  {
    q: "既存の顧客がいない状態から代理店として始められますか？",
    a: "既存の顧客接点や人脈をお持ちの方が活動しやすいですが、新規開拓で始めたいという方もご相談ください。商材・ターゲット選定・提案方法についてサポートします。",
  },
  {
    q: "どのくらいの期間で代理店活動を開始できますか？",
    a: "お問い合わせから面談・契約・サポートツール提供まで、通常2〜4週間程度で活動開始いただけます。",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ホームページ制作販売代理店プログラム",
  provider: {
    "@type": "Organization",
    name: "株式会社サイプレス",
    url: "https://www.cypress-all.co.jp",
  },
  description: "ホームページ制作を中小企業へ販売する代理店プログラム。制作・保守・運用はサイプレスが全対応。",
  areaServed: { "@type": "Country", name: "Japan" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
    { "@type": "ListItem", position: 2, name: "販売代理店募集", item: "https://www.cypress-all.co.jp/agent" },
    { "@type": "ListItem", position: 3, name: "ホームページ制作代理店", item: "https://www.cypress-all.co.jp/agent/web-design" },
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

export default function AgentWebDesignPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#0d1b2a", position: "relative", padding: "100px 0 80px", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/ChatGPT Image 2026年6月14日 21_09_09 (4).png"
              alt="ホームページ制作の販売代理店 ビジネスパートナーとの商談風景"
              fill
              className="object-cover"
              sizes="100vw"
              priority
              style={{ opacity: 0.18 }}
            />
          </div>
          <div style={{ position: "relative", zIndex: 10, maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <nav style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "32px" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.4)" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/agent" style={{ color: "rgba(255,255,255,0.4)" }}>販売代理店募集</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span>ホームページ制作代理店</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "16px" }}>Web Design Agency</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,4vw,48px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px" }}>
              ホームページ制作の<br />販売代理店募集
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "rgba(255,255,255,0.8)", maxWidth: "600px", marginBottom: "12px" }}>
              制作・保守管理・運用はサイプレスが全対応。<br />
              代理店様は<strong style={{ color: "#ffffff" }}>販売に専念</strong>するだけ。Web制作リソース不要。
            </p>
          </div>
        </section>

        {/* ホームページ制作代理店とは */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>What Is It</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "28px" }}>
              ホームページ制作代理店とは
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151", marginBottom: "18px" }}>
                ホームページ制作代理店とは、株式会社サイプレスのWeb制作サービスを、代理店様が中小企業の経営者・オーナーへ提案・販売する仕組みです。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151", marginBottom: "18px" }}>
                サイト設計・デザイン・コーディング・WordPress/Next.js構築・SEO基盤設計・ドメイン・サーバー設定・公開後の保守管理まで、すべてサイプレスの制作チームが担当します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151" }}>
                代理店様が行うのは「顧客のWeb集客の課題を聞き、ホームページ制作を提案し、受注につなげる」販売活動のみです。HTML・CSS・プログラミングなどの技術知識は一切不要です。
              </p>
            </div>
          </div>
        </section>

        {/* 役割分担 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Role Division</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              代理店様とサイプレスの役割分担
            </h2>
            <div className="grid md:grid-cols-2 gap-8" style={{ maxWidth: "820px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "20px", padding: "12px 16px", background: "#e8e4dc" }}>代理店様のご担当（販売のみ）</p>
                {[
                  "見込み顧客の開拓・アポイント",
                  "Webサイトの必要性・課題ヒアリング",
                  "サービス内容・費用感の説明",
                  "商談設定・クロージング",
                  "契約前の情報共有・書類手続き",
                  "必要に応じた顧客フォロー",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", padding: "10px 0", borderTop: "1px solid #e8e4dc" }}>
                    <span style={{ color: "#0d1b2a", flexShrink: 0 }}>✓</span>
                    <p style={{ fontSize: "14px", color: "#374151" }}>{item}</p>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #e8e4dc" }} />
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "20px", padding: "12px 16px", background: "#0d1b2a" }}>サイプレスが担当（制作・保守全般）</p>
                {[
                  "Webサイトの企画・構成設計",
                  "デザイン・UI設計",
                  "コーディング（WordPress/Next.js）",
                  "ドメイン・サーバー設定サポート",
                  "SEO基盤設計・meta・構造化データ",
                  "スマートフォン対応・表示速度最適化",
                  "公開後の保守管理・SSL・更新対応",
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

        {/* 売りやすい理由 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", fontSize: "11px", marginBottom: "14px" }}>Why It Sells</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              ホームページ制作が代理店商材として売りやすい5つの理由
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { n: "01", title: "古いサイトのリニューアル需要が大きい", body: "「5年以上前に作ったまま」「スマホで見づらい」「情報が古い」という中小企業は今も非常に多く、リニューアル提案の受容率が高い商材です。" },
                { n: "02", title: "採用サイト需要が急増している", body: "人手不足が深刻な業種では「採用専用ページ・採用サイトを作りたい」というニーズが高まっています。求人費用の代替としてホームページ制作への投資意欲が高い顧客層です。" },
                { n: "03", title: "MEO・SEO・AIOとのセット提案が強い", body: "ホームページ制作だけでなく、同時にMEO対策・SEO対策・AIO対策を提案することで、顧客の集客課題をまとめて解決できます。複合提案により単価も上がります。" },
                { n: "04", title: "月額保守管理につながる継続収益", body: "ホームページ制作後に月額保守管理・SEO運用・MEO対策の継続契約につながるため、一度の受注で長期的な顧客関係と継続収益を生みやすいです。" },
                { n: "05", title: "中小企業に提案しやすい価格帯", body: "大手に比べリーズナブルな価格設定で、コスト感が合いやすい中小企業・個人事業主に提案しやすい商材です。費用対効果を説明しやすく成約率も高い傾向があります。" },
              ].map((item) => (
                <div key={item.n} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "28px" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.3)", fontSize: "11px", marginBottom: "10px" }}>{item.n}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "10px" }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: "1.9" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 相性の良い代理店 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Ideal Partners</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              相性の良い代理店・パートナー
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", marginBottom: "36px" }}>以下のような方・企業様にホームページ制作代理店として活動いただきやすい環境です。</p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { label: "営業会社・法人営業", desc: "法人顧客への提案スキルと顧客基盤を活かしてホームページ制作を提案できます。" },
                { label: "広告代理店", desc: "Web広告・チラシ・動画と組み合わせた集客提案でホームページ制作を追加できます。" },
                { label: "印刷会社・看板会社", desc: "既存顧客のオフライン販促と合わせてWebサイト制作を提案できます。" },
                { label: "士業（税理士・社労士等）", desc: "顧問先の経営者にWeb集客の重要性を伝え、ホームページ制作を紹介できます。" },
                { label: "地域企業・コンサル", desc: "地域に密着した中小企業との接点を活かした提案に向いています。" },
                { label: "フリーランス営業", desc: "個人で中小企業へ提案活動をしている方が副収入として活動しやすいです。" },
              ].map((item) => (
                <div key={item.label} style={{ background: "#f8f6f2", border: "1px solid #e8e4dc", padding: "24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 提案しやすい顧客例 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Target Customers</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              提案しやすい顧客の特徴
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", marginBottom: "32px" }}>以下のような状況にある中小企業・経営者へのアプローチが成約につながりやすいです。</p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { title: "ホームページが5年以上前のまま", body: "古いデザイン・スマホ非対応・情報が更新されていないサイトを持つ企業は、リニューアルの必要性を感じています。提案を受け入れやすい状態です。" },
                { title: "スマートフォンで見づらいと言われた", body: "スマホ対応（レスポンシブ）でないサイトはGoogleでの評価も下がります。「スマホで見にくい」という実感がある経営者への提案は効果的です。" },
                { title: "問い合わせが少ない・来ない", body: "「ホームページは持っているが問い合わせが0件に近い」という企業は、サイトの構造・SEO・CTAに課題があるケースが多く、改善提案のチャンスです。" },
                { title: "採用応募が少ない", body: "人手不足に悩む飲食店・建設業・介護業などは採用サイト制作・採用ページ強化のニーズが高い層です。" },
                { title: "GoogleやSNSで見つからないと感じている", body: "「自分の会社をGoogleで検索しても出てこない」という経営者にはSEO対策・MEO対策とセットでホームページ制作を提案できます。" },
                { title: "ブログや情報更新が止まっている", body: "「ブログを書こうとしたが続かなかった」という企業はWordPressによる更新しやすいサイト構築とSEOコンテンツ運用の提案が刺さります。" },
              ].map((item) => (
                <div key={item.title} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #e8e4dc" }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.title}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        {/* 販売フロー */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Sales Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ホームページ制作代理店の販売フロー
            </h2>
            <div style={{ maxWidth: "680px" }}>
              {[
                { step: "Step 1", title: "見込み顧客のヒアリング", body: "「今のホームページに満足していますか？」「問い合わせは来ていますか？」「採用はうまくいっていますか？」など、経営者の課題を引き出します。" },
                { step: "Step 2", title: "現状のサイトを確認・課題整理", body: "顧客のWebサイトをその場でスマートフォンで確認。古さ・見づらさ・問い合わせフォームの有無などを視覚的に共有しながら課題を整理します。" },
                { step: "Step 3", title: "サイプレスの担当者を紹介・提案書作成", body: "サイプレスの担当者とオンラインや三者面談でサービス内容・費用感・制作事例を説明。顧客に合ったプランの提案書を作成します。" },
                { step: "Step 4", title: "受注・契約", body: "顧客の合意後、契約手続きを行います。制作開始後の対応はサイプレスが引き継ぎます。" },
                { step: "Step 5", title: "制作開始・納品・保守", body: "設計・デザイン・制作・公開・保守管理をサイプレスが行います。代理店様は顧客への経過報告のみで対応できます。" },
              ].map((item, i) => (
                <div key={item.step} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #e8e4dc" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#0d1b2a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "4px" }}>
                    <span style={{ color: "#ffffff", fontSize: "12px", fontWeight: 700 }}>{i + 1}</span>
                  </div>
                  <div>
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

        {/* 関連代理店ページ */}
        <section style={{ background: "#f8f6f2", padding: "64px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Related Pages</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px,2.5vw,26px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "24px" }}>その他の代理店募集ページ</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: "/agent", label: "販売代理店募集トップ", desc: "代理店プログラム全体の概要" },
                { href: "/agent/meo", label: "MEO対策の販売代理店募集", desc: "店舗集客商材を扱いたい方へ" },
                { href: "/agent/seo", label: "SEO対策の販売代理店募集", desc: "検索集客商材を扱いたい方へ" },
                { href: "/agent/aio", label: "AIO対策の販売代理店募集", desc: "AI検索対策商材を扱いたい方へ" },
                { href: "/agent/faq", label: "代理店募集FAQ", desc: "よくある質問をまとめて確認" },
                { href: "/partner/referral", label: "取次店・紹介パートナー募集", desc: "紹介するだけの軽い参加形式" },
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{ display: "block", padding: "20px 24px", background: "#ffffff", border: "1px solid #e8e4dc", textDecoration: "none" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "4px" }}>{item.label}</p>
                  <p style={{ fontSize: "12px", color: "#9ca3af" }}>{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="ホームページ制作代理店募集についてよくある質問" bgColor="#ffffff" />
        <PageContactCTA
          heading="ホームページ制作代理店のご相談・お申し込み"
          body="Web制作リソース不要で販売に専念できます。まずはお気軽にお問い合わせください。"
        />
      </main>
      <Footer />
    </>
  );
}

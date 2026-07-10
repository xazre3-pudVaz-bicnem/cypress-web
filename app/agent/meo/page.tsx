import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "MEO対策の販売代理店募集｜Googleマップ集客商材を副業・本業で販売｜株式会社サイプレス",
  description:
    "株式会社サイプレスのMEO対策販売代理店募集。Googleビジネスプロフィール運用・Googleマップ上位表示支援を飲食店・美容室・整体・歯科などへ提案・販売。MEO運用の実務はサイプレスが全対応。副業・個人事業主・法人歓迎。",
  keywords: [
    "MEO対策 代理店募集",
    "MEO対策 販売代理店",
    "Googleビジネスプロフィール 代理店",
    "MEO 商材 代理店",
    "MEO 取次店 副業",
    "Googleマップ 代理店 募集",
    "MEO対策 代理店 報酬",
    "MEO 代理店 未経験",
    "店舗集客 代理店",
  ],
  openGraph: {
    title: "MEO対策の販売代理店募集｜Googleマップ集客商材を副業・本業で販売｜株式会社サイプレス",
    description: "MEO運用はサイプレスが全対応。代理店は販売に専念するだけ。飲食店・美容室・整体・歯科に提案しやすい店舗集客商材。副業・個人事業主歓迎。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/agent/meo" },
};

const faqItems = [
  {
    q: "MEO対策代理店とはどのような仕組みですか？",
    a: "サイプレスのMEO対策（Googleビジネスプロフィール運用・Googleマップ最適化）サービスを、代理店様が飲食店・美容室・整体・歯科などの店舗経営者へ提案・販売する仕組みです。実際のMEO施策・運用・レポート作成はサイプレスが担当します。",
  },
  {
    q: "MEO対策の知識がなくても代理店になれますか？",
    a: "はい、なれます。「Googleマップで上位に表示させてお客さまを増やす対策です」という基本的な説明ができれば十分です。詳しい技術知識はサイプレスがバックアップします。提案サポート資料もご提供します。",
  },
  {
    q: "MEO対策はどのような業種に提案できますか？",
    a: "Googleマップで検索される地域ビジネスすべてに提案できます。特に飲食店・カフェ・美容室・ヘアサロン・ネイルサロン・整体・接骨院・整骨院・歯科医院・クリニック・ペットサロン・清掃業・リフォーム会社などが提案しやすい業種です。",
  },
  {
    q: "Googleビジネスプロフィールの管理はサイプレスが行いますか？",
    a: "はい。GBPの最適化・写真投稿・情報更新・投稿運用・口コミ返信サポート・カテゴリ設定などをサイプレスが担当します。代理店様が技術的な対応をする必要はありません。",
  },
  {
    q: "MEO対策の効果はどのくらいで出ますか？",
    a: "一般的に1〜3ヶ月程度でGoogleマップの順位に変化が表れることが多いですが、競合状況・地域・業種によって異なります。顧客への説明時は断定せず、継続的な施策が必要であることを伝えてください。",
  },
  {
    q: "代理店の報酬・マージンはどのくらいですか？",
    a: "報酬体系の詳細は個別のご相談の中でお伝えします。顧客の成約内容・販売量・契約形態によって個別に協議させていただきます。まずはお問い合わせください。",
  },
  {
    q: "MEO対策と一緒にホームページ制作も提案できますか？",
    a: "はい。MEO対策とホームページ制作のセット提案が非常に効果的です。「Googleマップで見つけてもらい、ホームページで詳細を確認して問い合わせてもらう」という集客の流れを顧客に説明できます。",
  },
  {
    q: "口コミ管理もサービスに含まれますか？",
    a: "口コミへの返信サポート・口コミ獲得の促進方法のアドバイスはサービスに含まれます。ただし口コミの投稿は実際のお客様にお願いするものです。不正な口コミ操作は行いません。",
  },
  {
    q: "月次の運用レポートはありますか？",
    a: "はい。Googleマップの順位変動・閲覧数・ルート案内数・問い合わせ数などを含む月次レポートをサイプレスが作成します。代理店様から顧客に共有していただくことで、継続契約につながります。",
  },
  {
    q: "競合他社のMEO対策とどう差別化して提案しますか？",
    a: "サイプレスはMEO対策に加えてSEO・AIO・ホームページ制作も提供できるため、「Web集客全般をワンストップで支援できる」ことが差別化ポイントです。MEO単体ではなく、集客全体の改善として提案することが有効です。",
  },
  {
    q: "ホームページを持っていない店舗にも提案できますか？",
    a: "はい。ホームページがない店舗でもMEO対策は有効です。さらに「Googleマップで見つけてもらった後の詳細確認先としてホームページも必要」という提案でセット受注につなげることができます。",
  },
  {
    q: "申し込みから代理店活動開始まで、どのくらいかかりますか？",
    a: "お問い合わせから面談・契約・サポートツール提供まで、通常2〜4週間程度で活動開始いただけます。",
  },
  {
    q: "代理店向けの提案資料やサポートツールは提供されますか？",
    a: "はい。MEO対策の必要性・効果・サイプレスのサービス内容を説明するための提案サポート資料をご提供します。顧客への説明や商談時にそのままご活用いただける形式で用意しています。",
  },
  {
    q: "既存の取引先に紹介するだけでもいいですか？",
    a: "はい。既存の顧客・取引先にサイプレスを紹介する形での参加も可能です。紹介中心の活動形式については取次店・紹介パートナープログラムもご案内できます。",
  },
  {
    q: "MEO対策で成果が出なかった場合の対応はどうなりますか？",
    a: "MEO対策の効果は競合状況・地域・業種によって異なります。成果保証は行っておりませんが、施策内容・改善ポイントについて継続的に分析・対応します。顧客への説明時も断定的な保証表現はされないようお願いしています。",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MEO対策販売代理店プログラム",
  provider: {
    "@type": "Organization",
    name: "株式会社サイプレス",
    url: "https://www.cypress-all.co.jp",
  },
  description: "MEO対策・Googleビジネスプロフィール運用を中小企業店舗へ販売する代理店プログラム。運用・レポートはサイプレスが全対応。",
  areaServed: { "@type": "Country", name: "Japan" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
    { "@type": "ListItem", position: 2, name: "販売代理店募集", item: "https://www.cypress-all.co.jp/agent" },
    { "@type": "ListItem", position: 3, name: "MEO対策代理店", item: "https://www.cypress-all.co.jp/agent/meo" },
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

export default function AgentMeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#0d1b2a", position: "relative", paddingTop: "128px", paddingBottom: "80px", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/ChatGPT Image 2026年6月14日 21_09_09 (4).jpg"
              alt="MEO対策販売代理店 店舗集客提案の商談風景"
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
              <span>MEO対策代理店</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "16px" }}>MEO Agency</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,4vw,48px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px" }}>
              MEO対策の<br />販売代理店募集
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "rgba(255,255,255,0.8)", maxWidth: "580px" }}>
              店舗集客に強い商材。Googleマップ上位表示の需要は急増中。<br />
              運用・レポートはサイプレスが全対応。代理店は<strong style={{ color: "#ffffff" }}>提案のみ</strong>。
            </p>
          </div>
        </section>

        {/* MEO対策が代理店商材として売りやすい理由 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Why MEO</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              MEO対策が代理店商材として販売しやすい理由
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { n: "01", title: "飲食・美容・医療と相性抜群", body: "地域密着型の店舗業種は「近くの○○」という検索での来店が多く、Googleマップ上位表示への需要が高い業種です。" },
                { n: "02", title: "ホームページより説明が簡単", body: "「Googleマップの上位に出ることで来店が増える」という説明は直感的に分かりやすく、ホームページ制作よりも受け入れられやすい面があります。" },
                { n: "03", title: "月額継続契約で安定収益", body: "MEO対策は月額運用の継続サービスです。一度の受注で長期的な継続収益が生まれるため、コストパフォーマンスの良い商材です。" },
                { n: "04", title: "ホームページとセット提案が強い", body: "MEO対策でGoogleマップに誘導し、ホームページで詳細を確認・問い合わせてもらう流れを一緒に提案できます。" },
                { n: "05", title: "AI検索時代の重要性が高まっている", body: "AIO対策（AI検索最適化）との組み合わせで、より広いWeb集客を提案できます。今後ますます重要になる商材です。" },
                { n: "06", title: "経営者が課題を認識している", body: "「マップに出てこない」「競合が上位にいる」という課題を自覚している経営者が多く、提案を受け入れやすい状態になっています。" },
              ].map((item) => (
                <div key={item.n} style={{ padding: "24px", background: "#f8f6f2", border: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", marginBottom: "8px" }}>{item.n}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.body}</p>
                </div>
              ))}
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
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "20px", padding: "12px 16px", background: "#e8e4dc" }}>代理店様のご担当</p>
                {["見込み店舗の開拓・アポイント", "MEO対策の必要性・効果の説明", "サイプレスの担当者紹介・商談設定", "顧客情報の共有・受注手続き", "必要に応じた顧客フォロー"].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", padding: "10px 0", borderTop: "1px solid #e8e4dc" }}>
                    <span style={{ color: "#0d1b2a", flexShrink: 0 }}>✓</span>
                    <p style={{ fontSize: "14px", color: "#374151" }}>{item}</p>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #e8e4dc" }} />
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "20px", padding: "12px 16px", background: "#0d1b2a" }}>サイプレスが担当</p>
                {["Googleビジネスプロフィール分析・最適化", "カテゴリ・サービス情報の整備", "写真投稿・Googleポスト投稿運用", "口コミへの返信サポート", "Googleマップ順位改善施策の実施", "月次運用レポートの作成", "顧客からの技術的な問い合わせ対応"].map((item) => (
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

        {/* 提案しやすい業種 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", fontSize: "11px", marginBottom: "14px" }}>Target Industries</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#ffffff", fontWeight: 700, marginBottom: "12px" }}>
              MEO対策代理店として提案しやすい業種
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", marginBottom: "32px" }}>地域密着型のビジネスであれば、ほぼすべての業種に提案できます。</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", maxWidth: "820px" }}>
              {["飲食店・カフェ・居酒屋・ラーメン店", "美容室・ヘアサロン", "ネイルサロン・エステ", "整体院・接骨院・整骨院", "歯科医院・クリニック", "ペットサロン・トリミング", "清掃業・ハウスクリーニング", "リフォーム会社・工務店", "水道工事・電気工事", "不動産会社・賃貸管理", "学習塾・英会話スクール", "フィットネス・ヨガスタジオ", "小売店・アパレル", "介護・デイサービス", "法律事務所・税理士"].map((tag) => (
                <span key={tag} style={{ padding: "8px 14px", border: "1px solid rgba(255,255,255,0.2)", fontSize: "13px", color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.04)" }}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* セット提案 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Bundle Proposal</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ホームページ制作・SEO・AIOとのセット提案
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { label: "MEO＋ホームページ制作", desc: "Googleマップで来店意欲を高め、ホームページで詳細確認・問い合わせへ誘導。最も成約しやすい組み合わせです。" },
                { label: "MEO＋SEO対策", desc: "Googleマップと検索結果の両方で上位表示を狙う二軸の集客戦略。地域ビジネスの集客を最大化します。" },
                { label: "MEO＋AIO対策", desc: "AI検索（ChatGPT・Gemini）からも引用・紹介されるよう最適化。次世代型のWeb集客をパッケージで提案できます。" },
              ].map((item) => (
                <div key={item.label} style={{ background: "#f8f6f2", border: "1px solid #e8e4dc", padding: "24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 提案しやすい顧客の特徴 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Target Customers</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              MEO対策を提案しやすい顧客の特徴
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", marginBottom: "36px" }}>以下のような状況にある地域ビジネス経営者へのアプローチが成約につながりやすいです。</p>
            <div className="grid md:grid-cols-2 gap-5" style={{ maxWidth: "820px" }}>
              {[
                { title: "Googleマップで競合に負けていると感じている", body: "「同業他社がマップの上位に表示されているのに自社は出てこない」という経営者は、課題を既に認識しているため提案が受け入れられやすいです。" },
                { title: "口コミが少ない・管理できていない", body: "「口コミが少なくて来店につながらない」「悪い口コミへの返し方がわからない」という店舗経営者にとって、口コミ管理支援は非常に価値ある提案です。" },
                { title: "「近くの○○」での表示がない", body: "スマートフォンで「近くの飲食店・美容室・歯科」と検索した際に自店が表示されないという経営者は、MEO対策の必要性を直感的に理解しやすいです。" },
                { title: "Googleビジネスプロフィールを放置している", body: "GBPを登録したきり更新していない、写真が少ない、営業時間が古いままという店舗は多く、改善余地が明確なため提案しやすいです。" },
                { title: "ホームページへのアクセスが少ない", body: "「ホームページを作ったが来店に繋がらない」という店舗には、MEO対策でGoogleマップ経由の流入を増やすことをセット提案できます。" },
                { title: "新規客の獲得に苦しんでいる", body: "常連客に頼りきりで新規集客の手段が乏しい地域店舗は、Googleマップ経由の新規来店増加への期待値が高く、提案が刺さりやすいです。" },
              ].map((item) => (
                <div key={item.title} style={{ padding: "24px", background: "#f8f6f2", border: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 販売フロー */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Sales Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              MEO対策代理店の販売フロー
            </h2>
            <div style={{ maxWidth: "680px" }}>
              {[
                { step: "Step 1", title: "見込み顧客の発掘・アプローチ", body: "飲食店・美容室・整体院など地域ビジネスを対象に、Googleマップで検索して「上位に出ていない店舗」を発掘します。顧客自身に検索して見てもらうと課題認識につながります。" },
                { step: "Step 2", title: "MEO対策の必要性をヒアリングで引き出す", body: "「マップで上位に出てきたらどう思いますか？」「現在の来店経路はどこからですか？」などのヒアリングで、経営者に課題を認識してもらいます。" },
                { step: "Step 3", title: "サイプレスのサービス内容・費用感を説明", body: "提案サポート資料を使ってサービス内容・対応内容・費用感をご説明します。サイプレスの担当者との三者面談を設定することも可能です。" },
                { step: "Step 4", title: "受注・契約手続き", body: "顧客の合意後、契約書面を取り交わします。以降の実務対応（GBP設定・写真投稿・レポート）はサイプレスが行います。" },
                { step: "Step 5", title: "継続フォロー・追加提案", body: "月次レポートを顧客に共有しながら継続的な関係を維持します。効果が出た段階でホームページ制作・SEO対策の追加提案を行うチャンスにもなります。" },
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

        {/* 関連ページ */}
        <section style={{ background: "#f8f6f2", padding: "64px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 700, color: "#0d1b2a", marginBottom: "24px" }}>関連ページ</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { href: "/agent", label: "販売代理店募集トップ" },
                { href: "/agent/web-design", label: "ホームページ制作代理店募集" },
                { href: "/agent/seo", label: "SEO対策代理店募集" },
                { href: "/agent/aio", label: "AIO対策代理店募集" },
                { href: "/agent/faq", label: "代理店募集FAQ" },
                { href: "/partner/referral", label: "取次店・紹介パートナー募集" },
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{ display: "block", padding: "16px 20px", background: "#ffffff", border: "1px solid #e8e4dc", textDecoration: "none", fontSize: "14px", color: "#0d1b2a", fontFamily: "var(--font-serif)", fontWeight: 600 }}>
                  {item.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="MEO対策代理店募集についてよくある質問" bgColor="#ffffff" />
        <PageContactCTA
          heading="MEO対策代理店のご相談・お申し込み"
          body="店舗集客商材を扱いたい方はお気軽にお問い合わせください。運用・レポートはサイプレスが全対応です。"
        />
      </main>
      <Footer />
    </>
  );
}

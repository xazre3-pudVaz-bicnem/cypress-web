import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "Web集客サービスの販売代理店・取次店募集｜ホームページ制作・SEO・MEO｜株式会社サイプレス",
  description:
    "株式会社サイプレスでは、ホームページ制作、SEO対策、MEO対策、AIO対策などのWeb集客サービスを紹介できる販売代理店・取次店を募集しています。",
  keywords: [
    "販売代理店募集 Web制作",
    "取次店募集 Webマーケティング",
    "SEO 代理店",
    "MEO 代理店",
    "ホームページ制作 代理店",
    "Web制作 代理店募集",
    "営業パートナー募集",
    "副業 営業 Web",
    "販売代理店 Web集客",
    "紹介パートナー SEO MEO",
  ],
  openGraph: {
    title: "Web集客サービスの販売代理店・取次店募集｜ホームページ制作・SEO・MEO",
    description: "株式会社サイプレスでは、ホームページ制作、SEO対策、MEO対策、AIO対策などのWeb集客サービスを紹介できる販売代理店・取次店を募集しています。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://www.cypress-all.co.jp/partner/local-sales-agent",
  },
};

const faqItems = [
  {
    q: "販売代理店と取次店（紹介パートナー）の違いは何ですか？",
    a: "取次店（紹介パートナー）は「紹介するだけ」のシンプルな仕組みです。知人・顧客・取引先をサイプレスにつなぎ、成約した場合に報酬が発生します。販売代理店は提案・見積・受注まで担当するより積極的な関与を想定しています。まずは取次店から始めることも可能です。",
  },
  {
    q: "専門知識がなくても代理店・取次店になれますか？",
    a: "はい。SEO・MEO・ホームページ制作の専門知識がなくても活動できます。「Web集客に困っている事業者を知っている」「紹介できる人脈がある」「地域ビジネスとのつながりがある」方であれば、サービスの詳細説明はサイプレスが担当します。サービス説明の簡易資料も提供します。",
  },
  {
    q: "副業として活動できますか？",
    a: "はい、本業・別事業と並行して活動できます。既存の人脈・取引先・知人の事業者から紹介いただく形で、副収入を得る可能性があります。ただし、成約には商談内容や提案先の状況が影響します。成果を保証するものではありません。",
  },
  {
    q: "紹介できるサービスにはどんなものがありますか？",
    a: "ホームページ制作（Next.js・WordPress対応）、SEO対策、MEO対策（Googleビジネスプロフィール最適化）、AIO対策（AI検索対策）、SNS運用支援、Web集客パッケージプランなどを紹介できます。中小企業・店舗向けに提案しやすい商材が揃っています。",
  },
  {
    q: "報酬・紹介料の仕組みを教えてください。",
    a: "報酬体系の詳細は個別のご相談の中でご案内します。紹介案件の内容・成約状況などを踏まえて個別に協議させていただきます。まずはお問い合わせください。",
  },
  {
    q: "紹介後の提案・制作・運用はサイプレスが担当しますか？",
    a: "はい。紹介後の提案・制作・保守・運用・顧客対応はすべてサイプレスが担当します。パートナーの皆様の役割は「紹介すること」です。専門的な説明が必要な場面では、サイプレスの担当者が三者面談に同席することも可能です。",
  },
  {
    q: "紹介できる対象はどのような業種・事業者ですか？",
    a: "飲食店・美容室・クリニック・歯科・整体院・建設業・リフォーム会社・士業・不動産会社・学習塾・ペットショップ・清掃業・小売業など、Web集客に課題を持つ中小ビジネス全般が対象です。「ホームページをそろそろ作りたい」「Googleマップに出てきたい」という経営者の紹介を歓迎しています。",
  },
  {
    q: "活動地域に制限はありますか？",
    a: "全国対応可能です。サイプレスはオンライン対応のため、地域を問わず紹介いただけます。葛飾区・東京都内は特に対応実績が豊富です。",
  },
  {
    q: "紹介先が成約しなかった場合はどうなりますか？",
    a: "成約しなかった場合は報酬は発生しません。紹介していただくこと自体への費用負担はありませんので、気軽にご紹介いただける方を歓迎しています。",
  },
  {
    q: "誇大な表現で営業してしまってよいですか？",
    a: "いいえ、絶対に禁止です。「必ず1位になれる」「絶対に集客できる」などの成果保証・順位保証表現は禁止しています。正確な情報提供を前提とした紹介のみお願いしています。誇大表現・虚偽表現による営業はパートナー契約の解除対象になります。",
  },
  {
    q: "既存事業とWeb集客代理店の活動が競合することはありますか？",
    a: "サイプレスは中小企業向けのWeb集客（MEO・SEO・ホームページ制作・AIO）に特化しているため、既存事業との棲み分けが可能なケースが多いです。競合可能性がある場合は事前にご相談ください。",
  },
  {
    q: "法人として代理店契約はできますか？",
    a: "はい、法人・個人事業主どちらでもご相談いただけます。詳細はお問い合わせください。",
  },
];

const S = {
  label: { fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" as const },
  h2: { fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" },
  body: { fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "36px" },
  container: { maxWidth: "72rem", margin: "0 auto", padding: "0 24px" },
  divider: { display: "flex", gap: "24px", padding: "24px 0", borderTop: "1px solid #E8E4DC" } as React.CSSProperties,
  num: { fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "32px", paddingTop: "2px" },
  itemTitle: { fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" },
  itemBody: { fontSize: "14px", color: "#374151", lineHeight: "1.9" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
        { "@type": "ListItem", position: 2, name: "パートナー制度", item: "https://www.cypress-all.co.jp/partner" },
        { "@type": "ListItem", position: 3, name: "販売代理店・取次店募集", item: "https://www.cypress-all.co.jp/partner/local-sales-agent" },
      ],
    },
    {
      "@type": "Service",
      name: "Web集客サービスの販売代理店・取次店制度",
      provider: {
        "@type": "Organization",
        name: "株式会社サイプレス",
        url: "https://www.cypress-all.co.jp",
        address: { "@type": "PostalAddress", addressCountry: "JP", postalCode: "124-0816", addressRegion: "東京都", addressLocality: "葛飾区", streetAddress: "白鳥4-6-1-623" },
        email: "info@cypress-all.co.jp",
      },
      description: "ホームページ制作、SEO対策、MEO対策、AIO対策などのWeb集客サービスを紹介できる販売代理店・取次店制度。全国対応。",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>

        {/* HERO */}
        <section style={{ background: "#0d1b2a", paddingTop: "128px", paddingBottom: "80px" }}>
          <div style={S.container}>
            <nav style={{ fontSize: "12px", color: "#6B7280", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/partner" style={{ color: "#6B7280" }}>パートナー制度</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#9CA3AF" }}>販売代理店・取次店募集</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Sales Partner</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,4vw,44px)", color: "#FFFFFF", fontWeight: 700, lineHeight: 1.3, marginBottom: "24px" }}>
              Web集客サービスの<br />販売代理店・取次店募集
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#9CA3AF", maxWidth: "640px", marginBottom: "16px" }}>
              株式会社サイプレスでは、ホームページ制作、SEO対策、MEO対策、AIO対策などのWeb集客サービスを地域の事業者へ紹介できる販売代理店・取次店を募集しています。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.85", color: "#6B7280", maxWidth: "640px", marginBottom: "40px" }}>
              成約には商談内容や提案先の状況が影響します。成果・収入を保証するものではありません。誇大表現・虚偽表現による営業は禁止しています。
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <Link href="/contact" style={{ display: "inline-block", background: "#c4b89a", color: "#0d1b2a", padding: "14px 28px", fontSize: "14px", fontWeight: 700, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px" }}>
                代理店・取次店について相談する
              </Link>
              <Link href="/partner/katsushika-startup" style={{ display: "inline-block", background: "transparent", color: "#c4b89a", padding: "14px 28px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px", border: "1px solid #c4b89a" }}>
                葛飾区起業者向けパートナー制度を見る
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2: SERVICES TO SELL */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Products</p>
            <h2 style={S.h2}>紹介できるサービス</h2>
            <p style={S.body}>中小企業・店舗向けに設計された、提案しやすいWeb集客サービスが揃っています。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px", maxWidth: "900px" }}>
              {[
                { t: "ホームページ制作", b: "Next.js・WordPress対応の高速・SEO対応サイト制作。中小企業向けのシンプルなパッケージから、EC・採用サイトまで対応。地域事業者へ提案しやすいサービスです。" },
                { t: "SEO対策", b: "地域名＋業種キーワードでの上位表示を目指すローカルSEO。コンテンツ設計・技術SEO・構造化データ実装まで対応。継続運用で効果が積み上がります。" },
                { t: "MEO対策", b: "Googleビジネスプロフィールの最適化・写真投稿・口コミ管理・定期投稿代行。Googleマップでの地域検索上位を目指します。" },
                { t: "AIO対策（AI検索対策）", b: "ChatGPT・Gemini・Perplexityなどのai検索で引用されやすいコンテンツ・構造化データの設計。次世代の集客環境への対応として注目されています。" },
                { t: "SNS運用支援", b: "Instagram・X（旧Twitter）等のコンテンツ作成・投稿代行・ハッシュタグ設計。ホームページやGBPとの連動設計で集客効果を高めます。" },
                { t: "Web集客パッケージ", b: "ホームページ制作・SEO・MEO・問い合わせ導線設計をセットで提供するパッケージプラン。予算が決まっている事業者へ提案しやすい商材です。" },
              ].map((item) => (
                <div key={item.t} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "24px 20px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: WHO IS IT FOR */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>For Whom</p>
            <h2 style={S.h2}>向いている方</h2>
            <p style={S.body}>特定の資格・業種は問いません。地域事業者とのつながりや営業経験を持つ方が活動しやすい制度です。</p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "地域事業者との人脈・つながりがある", b: "飲食店・美容室・クリニック・不動産・建設業など、中小ビジネスを経営している知人・取引先・顧客をお持ちの方は紹介活動がしやすい環境にあります。" },
                { n: "02", t: "営業経験・法人営業のノウハウがある", b: "過去に法人営業・代理店営業・営業コンサルタントとして活動していた方は、経営者へのアプローチや提案のタイミングを見極めやすく、紹介活動に活かせます。" },
                { n: "03", t: "副業として営業案件を持ちたい", b: "本業の傍ら、既存の人脈を活かして副収入を得たい方。紹介するだけで関与を最小限にしたい方にも取次店制度が適しています。" },
                { n: "04", t: "自社サービスに追加商材を持ちたい", b: "税理士・社労士・FP・保険代理店・コンサルタント・工務店等、既存顧客にWeb集客のニーズがある方。顧客へのワンストップ提案に活用できます。" },
                { n: "05", t: "創業初期の収益柱を作りたい", b: "葛飾区をはじめ、新たに事業を始めた方が、自社サービスと並行して地域のWeb集客ニーズに応える形で収益の柱の一つを作る選択肢として活用できます。" },
                { n: "06", t: "Web業界・マーケティングに興味がある", b: "専門知識がなくても始められますが、SEO・MEO・ホームページ制作への関心が高い方は、学びながら活動の幅を広げることができます。" },
              ].map((item) => (
                <div key={item.n} style={S.divider}>
                  <span style={S.num}>{item.n}</span>
                  <div>
                    <p style={S.itemTitle}>{item.t}</p>
                    <p style={S.itemBody}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: PROGRAM TYPES */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Program Types</p>
            <h2 style={S.h2}>販売代理店と取次店（紹介パートナー）の違い</h2>
            <p style={S.body}>関与の深さに応じて、取次店・販売代理店の2種類の関わり方を選択できます。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", maxWidth: "860px" }}>
              {[
                {
                  type: "取次店（紹介パートナー）",
                  sub: "紹介するだけ",
                  items: ["知人・顧客をサイプレスに紹介する", "提案・制作・運用はサイプレスが担当", "専門知識は不要", "副業・小さく始めたい方に適している", "成約時に報酬が発生"],
                },
                {
                  type: "販売代理店",
                  sub: "提案から関与",
                  items: ["見込み客への提案・見積を担当", "サイプレスと連携して受注を進める", "Webマーケティングの基礎知識があると活動しやすい", "より積極的な関与で収益を目指す方向け", "詳細はご相談ください"],
                },
              ].map((prog) => (
                <div key={prog.type} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "18px", color: "#0d1b2a", marginBottom: "4px" }}>{prog.type}</p>
                  <p style={{ fontSize: "13px", color: "#c4b89a", fontWeight: 600, marginBottom: "16px" }}>{prog.sub}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {prog.items.map((item) => (
                      <li key={item} style={{ fontSize: "14px", color: "#374151", lineHeight: "1.85", paddingBottom: "8px", borderBottom: "1px solid #F1F5F9", marginBottom: "8px" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: PRODUCT STRENGTHS */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Strengths</p>
            <h2 style={S.h2}>商材の強み</h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "制作から運用まで一貫対応できる", b: "ホームページ制作・SEO・MEO・SNS運用まで、ワンストップで提供できるため、顧客の「全部まとめてお願いしたい」というニーズに応えやすいです。" },
                { n: "02", t: "中小企業・店舗向けに提案しやすい", b: "飲食・美容・整体・士業・建設など、地域密着型の事業者に向けた商材が豊富です。「Googleで上位に出たい」「ホームページから問い合わせを増やしたい」という課題に直接対応できます。" },
                { n: "03", t: "高単価商材がある", b: "ホームページ制作は数十万〜数百万円、MEO・SEOの継続運用も月次固定費として安定しやすい商材です。成約1件あたりの報酬規模が大きいです。" },
                { n: "04", t: "継続運用につながりやすい", b: "SEO・MEO・SNS運用は1回の成約で月次継続収益につながります。顧客が続けている間、定期的な報酬が発生する可能性があります（条件は個別にご相談ください）。" },
                { n: "05", t: "葛飾区・東京東部での実績・地域密着", b: "株式会社サイプレスは葛飾区白鳥に拠点を持ち、地域事業者との取引実績があります。地元での信頼性を活かした紹介が可能です。" },
              ].map((item) => (
                <div key={item.n} style={S.divider}>
                  <span style={S.num}>{item.n}</span>
                  <div>
                    <p style={S.itemTitle}>{item.t}</p>
                    <p style={S.itemBody}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: NOTICE */}
        <section style={{ background: "#f8f6f2", padding: "72px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Important Notice</p>
            <h2 style={S.h2}>活動にあたっての注意事項</h2>
            <div style={{ background: "#FEF9E7", border: "1px solid #F0C060", borderRadius: "8px", padding: "24px 28px", maxWidth: "800px" }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  "成果保証・順位保証・収入保証の表現を使わないこと",
                  "「必ず成約する」「必ず1位になれる」などの誇大表現は禁止",
                  "紹介先事業者への正確な情報提供を優先すること",
                  "強引・押し売り営業の禁止",
                  "報酬は成約が成立した場合に発生（条件は個別協議）",
                  "サイプレスが制作・運用を担当すること（パートナーは紹介が主な役割）",
                  "サイプレスのサービス内容・料金については正確な情報のみ案内すること",
                  "活動開始前にサイプレスとの合意を得ること",
                ].map((item) => (
                  <li key={item} style={{ fontSize: "14px", color: "#713F12", lineHeight: "1.75", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ width: "6px", height: "6px", background: "#B45309", borderRadius: "50%", flexShrink: 0, marginTop: "7px" }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 7: 対象エリアと葛飾区特化ページ */}
        <section style={{ background: "#ffffff", padding: "72px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Coverage & Related</p>
            <h2 style={S.h2}>対応エリアと関連ページ</h2>
            <p style={S.body}>
              全国対応の販売代理店・取次店制度を提供しています。葛飾区での起業者向けには、専用の詳細ページもご用意しています。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "14px", maxWidth: "900px" }}>
              {[
                { href: "/partner/katsushika-startup", label: "葛飾区で起業する方向けパートナー制度", desc: "創業初期の収益柱として検討できる葛飾区特化ページ" },
                { href: "/area/tokyo/katsushika/startup-revenue-streams", label: "葛飾区創業初期の収益柱づくり", desc: "収益柱の考え方・パートナー制度の活用方法" },
                { href: "/area/tokyo/katsushika/start-business", label: "葛飾区で起業する方へ（ハブページ）", desc: "開業準備・Web集客・パートナー制度の総合ガイド" },
                { href: "/partner", label: "販売パートナー制度一覧", desc: "すべてのパートナー制度を確認する" },
                { href: "/pricing/web-growth-package", label: "Web集客パッケージ料金", desc: "紹介可能な商材の料金目安" },
                { href: "/web-design", label: "ホームページ制作", desc: "制作サービス詳細・実績" },
                { href: "/seo", label: "SEO対策", desc: "地域名キーワードの上位表示支援" },
                { href: "/meo", label: "MEO対策", desc: "Googleマップでの集客支援" },
                { href: "/column/local-sales-agent-checklist", label: "代理店・取次店を始める前のチェックリスト", desc: "活動前に確認すべき項目まとめ" },
                { href: "/column/web-production-sales-agent", label: "ホームページ制作を商材にする代理店モデル", desc: "仕組み・メリット・注意点を解説" },
                { href: "/column/sales-agent-ng-expression", label: "代理店で避けるべき誇大表現", desc: "正しい説明方法ガイド" },
                { href: "/contact", label: "お問い合わせ・制度相談", desc: "まずはご相談ください" },
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "16px 14px", textDecoration: "none", display: "block" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "13px", color: "#0d1b2a", marginBottom: "4px", lineHeight: 1.5 }}>{item.label}</p>
                  <p style={{ fontSize: "11px", color: "#6B7280" }}>{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FaqSection
          items={faqItems}
          heading="販売代理店・取次店制度についてよくある質問"
          bgColor="#F9F8F5"
        />

        <PageContactCTA
          heading="販売代理店・取次店制度について、まずはご相談ください"
          body="Web集客サービスの販売代理店・取次店（紹介パートナー）制度に関するご質問・ご相談はお問い合わせフォームからお気軽にどうぞ。葛飾区での起業・創業と組み合わせてパートナー活動を検討している方も歓迎です。"
        />

      </main>
      <Footer />
    </>
  );
}

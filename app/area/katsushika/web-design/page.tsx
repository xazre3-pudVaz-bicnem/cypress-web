import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "葛飾区のホームページ制作会社｜SEOに強い集客サイトを地域密着で｜株式会社サイプレス",
  description:
    "葛飾区のホームページ制作は地元・白鳥拠点のサイプレスへ。亀有・金町・新小岩・柴又・立石など区内全域に訪問対応。SEO標準設計・スマホ最適化・高速表示の集客サイトを10万円台から制作。補助金活用の相談も可能です。",
  keywords: [
    "葛飾区 ホームページ制作",
    "葛飾区 ホームページ制作会社",
    "葛飾区 Web制作",
    "葛飾区 ホームページ作成",
    "亀有 ホームページ制作",
    "金町 ホームページ制作",
    "新小岩 ホームページ制作",
    "葛飾区 ホームページ 補助金",
  ],
  openGraph: {
    title: "葛飾区のホームページ制作会社｜SEOに強い集客サイトを地域密着で",
    description:
      "葛飾区拠点のホームページ制作会社。対面打ち合わせ・訪問対応。SEO標準設計・スマホ最適化・高速表示の集客サイトを10万円台から。補助金活用の相談も可能。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/area/katsushika/web-design" },
};

const faqItems = [
  {
    q: "葛飾区のホームページ制作の費用はどのくらいですか？",
    a: "個人事業主・店舗向けの小規模サイト（5ページ前後）は10〜50万円、中小企業のコーポレートサイトは50〜150万円が目安です。ランディングページ（LP）1枚の制作にも対応しています。ページ数・デザイン・機能（予約・EC等）により変動するため、まずは無料相談で概算見積もりをご提示します。",
  },
  {
    q: "制作期間はどのくらいかかりますか？",
    a: "小規模サイトで1〜2か月、コーポレートサイトで2〜3か月が目安です。原稿・写真素材の準備状況によって前後します。オープン日・開業日が決まっている場合は逆算したスケジュールを組みますので、お早めにご相談ください。",
  },
  {
    q: "葛飾区内で対面での打ち合わせは可能ですか？",
    a: "はい。サイプレスは葛飾区白鳥4-6-1-623に拠点があり、亀有・金町・新小岩・柴又・立石・青砥・高砂・お花茶屋・堀切など区内全域への訪問打ち合わせに対応しています。店舗・事務所の雰囲気を実際に拝見してデザインに反映できることが地元制作会社の強みです。",
  },
  {
    q: "葛飾区のホームページ制作に補助金は使えますか？",
    a: "葛飾区にはホームページ作成費用の一部を補助する制度が設けられている年度があります。制度内容・受付状況は年度によって変わるため、必ず葛飾区公式サイトで最新情報をご確認ください。サイプレスでは申請に必要な見積書・制作内容の整理をサポートしています（採択・支給を保証するものではありません）。",
  },
  {
    q: "SEO対策込みでホームページを制作してもらえますか？",
    a: "はい。サイプレスの制作はSEO内部対策（タイトル・見出し設計、構造化データ、サイトマップ、表示速度最適化、スマホ対応）を標準で含みます。「葛飾区 ○○」「亀有 ○○」など地域キーワードでの上位表示を狙う設計を制作段階から組み込むことが、後付けのSEOよりも費用対効果が高い方法です。",
  },
  {
    q: "スマホ対応（レスポンシブ）はしてもらえますか？",
    a: "はい、全プラン標準対応です。地域ビジネスの検索の7〜8割はスマートフォン経由のため、スマホでの見やすさ・押しやすい電話ボタン・地図への導線を優先して設計します（モバイルファースト設計）。",
  },
  {
    q: "ホームページのリニューアルにも対応していますか？",
    a: "はい。「デザインが古い」「スマホで見づらい」「更新できる人がいない」「問い合わせが来ない」といった既存サイトの課題を診断し、リニューアルプランを提案します。現サイトのアクセス状況・検索順位を分析し、SEO評価を引き継ぐ移行設計（URL・リダイレクト設計）まで対応します。",
  },
  {
    q: "制作後の更新・保守もお願いできますか？",
    a: "はい。月額1〜3万円の保守プランで、テキスト・画像の更新代行、サーバー・ドメイン管理、セキュリティ対応、軽微な改修に対応します。自分で更新したい方にはCMS（WordPressなど）を組み込み、更新方法のレクチャーも行います。",
  },
  {
    q: "WordPressでの制作は可能ですか？",
    a: "はい。更新性を重視する場合はWordPress、表示速度・セキュリティを最重視する場合はNext.jsによる静的サイトなど、目的に応じて最適な構成を提案します。ブログ部分だけWordPressにするハイブリッド構成にも対応しています。",
  },
  {
    q: "ホームページ用の写真撮影もお願いできますか？",
    a: "はい。葛飾区内の店舗・事務所であれば、外観・内観・スタッフ・商品などの写真撮影の手配に対応できます。地域のお客様は「お店の雰囲気が分かる写真」を重視するため、プロ品質の写真はホームページの成約率を大きく左右します。",
  },
  {
    q: "個人事業主・開業したばかりでも依頼できますか？",
    a: "はい、歓迎しています。葛飾区で開業する個人事業主・小規模事業者向けに、名刺代わりの1ページサイトから段階的に拡張できるプランを用意しています。創業期は予算が限られるため、まず必要最小限で公開し、売上に応じて育てていく進め方を推奨しています。",
  },
  {
    q: "飲食店や美容室のホームページも作れますか？",
    a: "はい。飲食店・美容室・整骨院・歯科・工務店・士業・学習塾など、葛飾区の主要業種すべてに対応しています。業種ごとに必要な機能（メニュー表・予約導線・施術事例・施工事例・料金表）を押さえた構成を提案します。",
  },
  {
    q: "Googleマップ対策（MEO）もセットで依頼できますか？",
    a: "はい。ホームページ制作とMEO対策（Googleビジネスプロフィール最適化）をセットで依頼いただくケースが最も多いです。ホームページとGBPの情報を統一することで地域検索での信頼性が高まり、「検索でもマップでも見つかる」状態を作れます。",
  },
  {
    q: "遠方の制作会社や格安サービスと何が違いますか？",
    a: "地元葛飾区での対面サポートと、SEO・MEO・集客まで含めた設計が違いです。格安テンプレートサービスは初期費用を抑えられますが、SEO設計・独自デザイン・集客導線が弱く「作ったのに問い合わせが来ない」状態になりがちです。サイプレスは制作後の集客成果までを見据えて設計します。",
  },
  {
    q: "ドメインやサーバーの取得も任せられますか？",
    a: "はい。独自ドメインの取得・サーバー契約・メールアドレス設定まで一括で代行します。既にお持ちのドメインを引き継ぐことも可能です。所有権はお客様名義にするため、将来他社に切り替える場合も資産として残ります。",
  },
  {
    q: "急ぎでホームページが必要です。最短どのくらいで公開できますか？",
    a: "1ページ構成のシンプルなサイトであれば、素材が揃っている場合2〜3週間程度で公開できるケースがあります。開業日・イベント日が迫っている場合は、まず最小構成で公開し、後から拡充する2段階方式を提案します。",
  },
  {
    q: "ホームページを作れば集客できますか？",
    a: "ホームページは集客の「土台」であり、公開しただけでは検索流入は限定的です。効果を出すには、地域キーワードでのSEO対策・Googleビジネスプロフィール（MEO）・SNSとの連携が必要です。サイプレスは制作とセットで集客施策までワンストップで支援します。",
  },
  {
    q: "見積もり・相談だけでも大丈夫ですか？",
    a: "はい、相談・見積もりは無料です。「何から始めればいいか分からない」段階でも問題ありません。葛飾区内であれば訪問での相談にも対応します。しつこい営業は行いませんので、お気軽にお問い合わせください。",
  },
];

const relatedLinks = [
  { href: "/area/katsushika", label: "葛飾区の集客支援トップ", desc: "SEO・MEO・Web制作の総合案内" },
  { href: "/area/katsushika/seo", label: "葛飾区のSEO対策", desc: "地域キーワードで検索上位へ" },
  { href: "/area/katsushika/meo", label: "葛飾区のMEO対策", desc: "Googleマップで上位表示" },
  { href: "/area/katsushika/web-design-subsidy", label: "葛飾区のHP制作・補助金活用", desc: "補助金活用時の進め方" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "サービス全体の詳細" },
  { href: "/cost/web-design", label: "ホームページ制作の費用相場", desc: "料金の内訳と目安" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "会社サイトの作り方" },
  { href: "/web-design/landing-page", label: "LP制作", desc: "1枚完結の集客ページ" },
  { href: "/web-design/seo-site", label: "SEOに強いサイト制作", desc: "検索される構造設計" },
  { href: "/web-design/mobile-friendly", label: "スマホ対応サイト", desc: "モバイル最適化" },
  { href: "/web-design/maintenance", label: "保守・運用サポート", desc: "公開後の管理体制" },
  { href: "/cases/service/web-design", label: "ホームページ制作の成功事例", desc: "施策別の事例紹介" },
  { href: "/area/adachi", label: "足立区の集客支援", desc: "隣接エリアも対応" },
  { href: "/area/edogawa", label: "江戸川区の集客支援", desc: "隣接エリアも対応" },
  { href: "/area/sumida", label: "墨田区の集客支援", desc: "隣接エリアも対応" },
  { href: "/company", label: "会社情報", desc: "サイプレスについて" },
  { href: "/faq", label: "よくある質問", desc: "サービスへのご質問" },
  { href: "/contact", label: "お問い合わせ", desc: "無料相談はこちら" },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
          { "@type": "ListItem", position: 2, name: "対応エリア", item: "https://www.cypress-all.co.jp/area" },
          { "@type": "ListItem", position: 3, name: "葛飾区", item: "https://www.cypress-all.co.jp/area/katsushika" },
          { "@type": "ListItem", position: 4, name: "葛飾区のホームページ制作", item: "https://www.cypress-all.co.jp/area/katsushika/web-design" },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.cypress-all.co.jp/area/katsushika/web-design#localbusiness",
        name: "株式会社サイプレス",
        alternateName: "Cypress",
        url: "https://www.cypress-all.co.jp/area/katsushika/web-design",
        description:
          "東京都葛飾区のホームページ制作会社。SEO内部対策・スマホ最適化・高速表示を標準としたWebサイト制作を、亀有・金町・新小岩・柴又・立石など葛飾区全域への訪問対応で提供します。",
        address: {
          "@type": "PostalAddress",
          addressCountry: "JP",
          postalCode: "124-0816",
          addressRegion: "東京都",
          addressLocality: "葛飾区",
          streetAddress: "白鳥4-6-1-623",
        },
        email: "info@cypress-all.co.jp",
        areaServed: [
          { "@type": "AdministrativeArea", name: "東京都葛飾区" },
          { "@type": "AdministrativeArea", name: "東京都足立区" },
          { "@type": "AdministrativeArea", name: "東京都江戸川区" },
          { "@type": "AdministrativeArea", name: "東京都墨田区" },
        ],
        knowsAbout: ["ホームページ制作", "Webデザイン", "SEO対策", "MEO対策", "レスポンシブデザイン", "WordPress", "Next.js"],
      },
      {
        "@type": "Service",
        "@id": "https://www.cypress-all.co.jp/area/katsushika/web-design#service",
        name: "葛飾区のホームページ制作",
        serviceType: "ホームページ制作・Webサイト制作",
        provider: { "@id": "https://www.cypress-all.co.jp/area/katsushika/web-design#localbusiness" },
        areaServed: { "@type": "AdministrativeArea", name: "東京都葛飾区" },
        description:
          "葛飾区の中小企業・店舗・個人事業主向けのホームページ制作サービス。SEO標準設計・スマホ最適化・高速表示。小規模サイト10〜50万円、コーポレートサイト50〜150万円が目安。",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area" style={{ color: "#6B7280" }}>対応エリア</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area/katsushika" style={{ color: "#6B7280" }}>葛飾区</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>ホームページ制作</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Katsushika — Web Design</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              葛飾区のホームページ制作
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "660px", marginBottom: "16px" }}>
              株式会社サイプレスは、葛飾区白鳥に拠点を置くホームページ制作会社です。亀有・金町・新小岩・柴又・立石・青砥・高砂・お花茶屋・堀切など区内全域への訪問打ち合わせに対応し、SEO内部対策・スマホ最適化・高速表示を標準搭載した「集客できるホームページ」を制作します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "660px" }}>
              小規模サイトは10万円台から。葛飾区のホームページ作成関連の補助金活用のご相談、制作後のSEO対策・MEO対策・保守運用まで、地元の会社としてワンストップで伴走します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_12_19.png"
            alt="葛飾区のホームページ制作 — 打ち合わせ風景"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* Section 1: こんなお悩みありませんか */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Problems</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              葛飾区の事業者様から寄せられるホームページの悩み
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { t: "ホームページがまだない", b: "開業したがホームページがなく、名刺やチラシだけで営業している。お客様に「ネットで調べたが出てこなかった」と言われた。" },
                { t: "作ったのに問い合わせが来ない", b: "数年前に作ったホームページから問い合わせがほとんど来ない。「葛飾区 ○○」で検索しても自社サイトが出てこない。" },
                { t: "デザインが古い・スマホで見づらい", b: "スマホで開くと文字が小さく崩れて表示される。デザインが古く、競合店と比べて信頼感で負けている気がする。" },
                { t: "更新できる人がいない", b: "制作した業者と連絡が取れない、更新のたびに高額な費用がかかる。営業時間やメニューの変更が自分でできない。" },
                { t: "何から始めればいいか分からない", b: "ホームページ・SNS・Googleマップ、どれから手を付けるべきか分からない。相談できる地元の専門家がいない。" },
                { t: "補助金を使いたいが手続きが不安", b: "葛飾区の補助金制度を使ってホームページを作りたいが、見積書の準備や制作内容の整理を手伝ってほしい。" },
              ].map((item) => (
                <div key={item.t} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginTop: "40px" }}>
              これらはすべて、葛飾区内の店舗・中小企業・個人事業主の方から実際にご相談いただく内容です。サイプレスは「作って終わり」ではなく、検索で見つかり、問い合わせにつながるホームページを地域密着で制作します。
            </p>
          </div>
        </section>

        {/* Section 2: 選ばれる理由 */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Why Cypress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              葛飾区のホームページ制作でサイプレスが選ばれる6つの理由
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "葛飾区拠点 — 対面打ち合わせ・訪問対応", b: "葛飾区白鳥の地元企業だから、亀有・金町・新小岩・柴又・立石など区内全域へすぐに伺えます。店舗の雰囲気・商圏・お客様層を実際に見てデザインと文章に反映できるのは、地元制作会社ならではの強みです。" },
                { n: "02", t: "SEO内部対策を標準搭載", b: "「葛飾区 ○○」「亀有 ○○」など地域キーワードで検索されるための内部SEO（タイトル設計・見出し構造・構造化データ・サイトマップ）を制作段階から組み込みます。後付けのSEOより費用対効果が高い方法です。" },
                { n: "03", t: "高速表示・スマホ最適化", b: "Next.js等のモダン技術による高速なサイトを構築します。表示速度は検索順位と離脱率に直結する要素です。地域検索の7〜8割を占めるスマホユーザーを最優先した設計（モバイルファースト）を徹底します。" },
                { n: "04", t: "集客まで見据えたワンストップ支援", b: "制作後のSEO対策・MEO対策（Googleマップ）・SNS運用まで一社で対応します。ホームページとGoogleビジネスプロフィールの情報を統一し、「検索でもマップでも見つかる」状態を作ります。" },
                { n: "05", t: "中小企業・個人事業主に合わせた適正価格", b: "小規模サイトは10万円台から。創業期はまず最小構成で公開し、売上に応じて拡張していく段階的なプランも提案します。葛飾区のホームページ関連補助金を活用する場合の見積整理もサポートします。" },
                { n: "06", t: "公開後の保守・更新も地元で安心", b: "月額1〜3万円の保守プランで更新代行・サーバー管理・セキュリティ対応まで任せられます。「業者と連絡が取れない」という他社制作サイトの引き継ぎ・リニューアル相談にも対応しています。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "24px", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "32px", paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: 料金プラン */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Price</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              葛飾区のホームページ制作 — 料金の目安
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              ページ数・デザイン・機能により変動しますが、目安となる料金帯は以下のとおりです。すべてのプランにSEO内部対策・スマホ対応・SSL設定を含みます。正式なお見積もりは無料でご提示します。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "40px" }}>
              {[
                {
                  plan: "ランディングページ（LP）",
                  price: "20〜40万円",
                  desc: "1ページ完結の集客特化ページ。キャンペーン・採用・単一サービスの訴求に。広告出稿との相性も抜群です。",
                  items: ["構成・コピーライティング", "レスポンシブデザイン", "問い合わせフォーム", "効果測定タグ設定"],
                },
                {
                  plan: "小規模サイト・店舗サイト",
                  price: "10〜50万円",
                  desc: "個人事業主・店舗向けの5ページ前後の構成。開業時の情報発信基盤として最適。段階的な拡張も可能です。",
                  items: ["トップ＋下層4ページ前後", "SEO内部対策", "スマホ最適化", "Googleマップ・SNS連携"],
                },
                {
                  plan: "コーポレートサイト",
                  price: "50〜150万円",
                  desc: "中小企業の信頼構築・採用・集客を担う本格サイト。ブランド設計から構造化データまで実装します。",
                  items: ["ブランド・構成設計", "10ページ以上の本格構成", "CMS（更新システム）", "構造化データ・AIO対応"],
                },
              ].map((item) => (
                <div key={item.plan} style={{ border: "1px solid #E8E4DC", borderRadius: "8px", padding: "32px 28px", background: "#FFFFFF" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "17px", color: "#0d1b2a", marginBottom: "8px" }}>{item.plan}</p>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "#c4b89a", fontWeight: 600, marginBottom: "14px" }}>{item.price}<span style={{ fontSize: "12px", color: "#9CA3AF", marginLeft: "6px" }}>（税別・目安）</span></p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85", marginBottom: "16px" }}>{item.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {item.items.map((li) => (
                      <li key={li} style={{ fontSize: "13px", color: "#374151", lineHeight: "2", paddingLeft: "16px", position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: "#c4b89a" }}>✓</span>{li}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "24px 28px", maxWidth: "800px" }}>
              <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>保守・運用サポート：月額1〜3万円</p>
              <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>
                テキスト・画像の更新代行、サーバー・ドメイン管理、セキュリティ対応、アクセスレポートを含みます。SEO対策（月額3万円〜）・MEO対策（月額2万円〜）とのセットプランもご用意しています。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 制作の流れ */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              ホームページ制作の流れ（ご相談から公開まで）
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "56px" }}>
              葛飾区内は訪問での打ち合わせ、遠方・お忙しい方はZoom・メールでも進行できます。小規模サイトで1〜2か月、コーポレートサイトで2〜3か月が公開までの目安です。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { step: "STEP 01", t: "無料相談・ヒアリング（訪問 or オンライン）", b: "事業内容・ターゲット・現状の集客課題・ご予算を伺います。既存サイトがある場合はアクセス状況・検索順位も無料で診断します。" },
                { step: "STEP 02", t: "構成・お見積もりのご提案", b: "サイトの目的（集客・信頼構築・採用）に合わせたページ構成・デザイン方針・狙う検索キーワードを整理し、正式なお見積もりを提示します。補助金活用時は申請に必要な見積内容の整理もこの段階で行います。" },
                { step: "STEP 03", t: "デザイン制作", b: "貴社の強み・ブランドイメージ・葛飾区のお客様層に合わせたデザインを制作します。トップページのデザイン確認・修正を経て、全ページへ展開します。" },
                { step: "STEP 04", t: "コンテンツ制作・SEO内部設計", b: "検索キーワードを踏まえた文章作成のサポート、タイトル・見出し・構造化データの実装を行います。写真素材が必要な場合は撮影の手配も可能です。" },
                { step: "STEP 05", t: "実装・動作確認", b: "スマホ・タブレット・PCでの表示確認、表示速度の最適化、フォームの動作テスト、SSL・セキュリティ設定を行います。" },
                { step: "STEP 06", t: "公開・検索エンジン登録", b: "本番公開後、Googleサーチコンソール・サイトマップの登録、Googleビジネスプロフィールとの連携設定まで行い、検索される状態を整えます。" },
                { step: "STEP 07", t: "運用開始・集客施策へ", b: "公開後は保守プランでの更新代行、またはSEO・MEO対策による集客強化フェーズへ移行します。月次レポートで効果を確認しながら改善を続けます。" },
              ].map((item, idx) => (
                <div key={item.step} style={{ display: "flex", gap: "24px", padding: "28px 0", borderTop: idx === 0 ? "none" : "1px solid #E8E4DC" }}>
                  <div style={{ minWidth: "80px" }}>
                    <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", letterSpacing: "0.1em", display: "block" }}>{item.step}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: エリア対応 */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Service Area</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              葛飾区全域のホームページ制作に対応
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              葛飾区内はすべて訪問打ち合わせの対象エリアです。各エリアの商圏・お客様層を踏まえた構成・デザイン・キーワード設計を行います。隣接する足立区・江戸川区・墨田区も対応しています。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { area: "亀有", desc: "アリオ亀有を中心に商業が集積する激戦区。競合店との差別化を打ち出すデザインと「亀有 ○○」キーワードのSEO設計で、選ばれる理由が伝わるホームページを制作します。" },
                { area: "金町", desc: "JR・京成の2路線が使えるファミリー層の多いエリア。学習塾・医療・美容など生活密着業種のホームページでは、安心感・料金の透明性・アクセス情報の充実が成約の鍵になります。" },
                { area: "新小岩", desc: "総武線快速で都心と直結する商圏の広いエリア。江戸川区側からの来店も見込めるため、周辺エリアを含めたキーワード設計と導線設計で広域集客を狙います。" },
                { area: "柴又", desc: "柴又帝釈天を擁する観光エリア。観光客向けには写真を活かしたビジュアル重視の構成、多言語対応・食べ歩き系キーワードのSEOなど、観光集客に強いホームページを提案します。" },
                { area: "立石・青砥", desc: "せんべろの聖地として注目される立石と、京成本線・押上線が交わる青砥。飲食店の熱量・雰囲気が伝わる写真中心の構成と、SNS連携を組み込んだサイトが効果的です。" },
                { area: "高砂・お花茶屋・堀切", desc: "住宅地が中心の生活密着エリア。整体・美容室・教室業などは、地域住民の「近くの○○」検索に応えるローカルSEO設計とGoogleマップ連携で、着実に集客できるサイトを作ります。" },
              ].map((item) => (
                <div key={item.area} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "17px", color: "#0d1b2a", marginBottom: "10px" }}>{item.area}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: 業種別 */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Industry</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              業種別のホームページ制作ポイント（葛飾区）
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              業種によって、ホームページに載せるべき情報・必要な機能・狙うキーワードは大きく異なります。葛飾区の地域特性と業種ノウハウを掛け合わせて設計します。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "飲食店", b: "メニュー・写真・営業時間・予約導線が核。Googleマップとの連携、食べログ等に依存しない自社予約の受け皿として機能させます。柴又・立石では観光客向けの英語メニュー掲載も効果的です。" },
                { n: "02", t: "美容室・ネイル・エステ", b: "施術メニュー・料金表・スタッフ紹介・施術事例（ビフォーアフター）で「行く前の不安」を解消します。ホットペッパー依存から脱却する指名予約の導線を設計し、InstagramとGBPを連携させます。" },
                { n: "03", t: "整骨院・治療院・クリニック", b: "症状別ページ（腰痛・肩こり・交通事故等）の充実が地域SEOの決め手です。診療時間・保険適用・院内写真・スタッフの資格情報で信頼性を高め、予約フォーム・電話ボタンを最短導線に配置します。" },
                { n: "04", t: "工務店・リフォーム", b: "施工事例の蓄積が最大の営業資産になります。事例を「葛飾区○○の外壁塗装」のように地域名付きで公開する構造にし、施工エリア・価格帯・保証内容を明示して問い合わせのハードルを下げます。" },
                { n: "05", t: "士業（税理士・行政書士・司法書士）", b: "相談分野別ページ（相続・会社設立・許認可等）と料金の透明性が重要です。専門コラムを蓄積できるブログ機能を組み込み、E-E-A-T（専門性・信頼性）を高める著者情報・実績の構造化まで実装します。" },
                { n: "06", t: "学習塾・教室業", b: "指導方針・合格実績・料金・講師紹介・保護者の声が判断材料になります。体験申し込みフォームを目立たせ、「金町 塾」「亀有 個別指導」など駅名キーワードでのSEO設計を行います。" },
                { n: "07", t: "小売・EC", b: "実店舗の商品をオンラインでも販売したい場合、Shopify・BASE等のECカート連携に対応します。店舗案内とネットショップを一体化させ、地域のお客様のリピート購入につなげます。" },
                { n: "08", t: "企業サイト・採用サイト", b: "葛飾区の製造業・建設業・運送業など、BtoB企業や採用強化を目的としたコーポレートサイトも多数対応しています。会社の信頼性を伝える実績・代表メッセージ・採用情報の設計を行います。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "24px", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "32px", paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: 補助金 */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Subsidy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              葛飾区の補助金を活用したホームページ制作
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "36px" }}>
              葛飾区では、区内中小企業向けにホームページ作成費の一部を補助する制度が設けられている年度があります。制度の有無・条件・受付状況は年度により変わるため、必ず葛飾区公式サイトで最新情報をご確認ください。サイプレスでは、申請に必要となる制作内容・見積書の整理を無料でサポートしています（採択・支給を保証するものではありません）。
            </p>
            <Link
              href="/area/katsushika/web-design-subsidy"
              style={{
                display: "inline-block",
                background: "#0d1b2a",
                color: "#fff",
                padding: "13px 24px",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textDecoration: "none",
                borderRadius: "4px",
              }}
            >
              補助金活用の進め方を詳しく見る →
            </Link>
          </div>
        </section>

        {/* Section 8: 制作後の集客（SEO/MEO連携） */}
        <section style={{ background: "#0d1b2a", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>After Launch</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "16px" }}>
              「作って終わり」にしない。公開後の集客まで一貫支援
            </h2>
            <p style={{ fontSize: "15px", color: "#9CA3AF", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              ホームページは公開してからが本番です。サイプレスは葛飾区の地域検索データを踏まえたSEO対策・MEO対策で、制作したサイトを「集客装置」に育てます。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
              {[
                { t: "葛飾区のSEO対策", b: "「葛飾区 ○○」「亀有 ○○」など地域キーワードでの検索上位を狙うコンテンツSEO・内部改善を月次で実施します。", href: "/area/katsushika/seo", cta: "葛飾区のSEO対策を見る" },
                { t: "葛飾区のMEO対策", b: "Googleマップでの上位表示を狙うGoogleビジネスプロフィール最適化・口コミ獲得支援・投稿代行を提供します。", href: "/area/katsushika/meo", cta: "葛飾区のMEO対策を見る" },
                { t: "SNS運用・AI活用", b: "Instagram運用やAIチャットボット・ブログ自動化など、ホームページと連動した集客チャネルの拡張を支援します。", href: "/services/sns", cta: "SNS運用支援を見る" },
              ].map((item) => (
                <div key={item.t} style={{ border: "1px solid rgba(196,184,154,0.3)", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "17px", color: "#FFFFFF", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: "1.9", marginBottom: "16px" }}>{item.b}</p>
                  <Link href={item.href} style={{ fontSize: "13px", color: "#c4b89a", textDecoration: "none", fontWeight: 600 }}>
                    {item.cta} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="葛飾区のホームページ制作 — よくある質問" bgColor="#F9F8F5" />

        {/* 成功事例への誘導 */}
        <section style={{ background: "#FFFFFF", padding: "clamp(48px, 7vh, 80px) 0", borderTop: "1px solid #E8E4DC" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "16px", textTransform: "uppercase" }}>Success Cases</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "26px", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              ホームページ制作・Web集客の成功事例
            </h2>
            <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "1.9", maxWidth: "620px", marginBottom: "24px" }}>
              業種別・施策別の成功事例を公開しています。同業種の事例をご覧いただくと、完成後のイメージが掴みやすくなります。
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {[
                { label: "ホームページ制作の成功事例", href: "/cases/service/web-design" },
                { label: "飲食店の成功事例", href: "/cases/industry/restaurant" },
                { label: "美容室・サロンの成功事例", href: "/cases/industry/beauty-salon" },
                { label: "クリニックの成功事例", href: "/cases/industry/clinic" },
                { label: "成功事例一覧", href: "/cases" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{
                  fontSize: "13px", color: "#374151", textDecoration: "none",
                  padding: "8px 16px", border: "1px solid #E8E4DC", background: "#FFFFFF",
                  letterSpacing: "0.02em",
                }}>
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="葛飾区のホームページ制作、まずは無料相談から"
          body="お見積もり・ご相談は無料です。亀有・金町・新小岩・柴又・立石など葛飾区内全域への訪問打ち合わせに対応しています。補助金活用のご相談もお気軽にどうぞ。"
        />
      </main>
      <Footer />
    </>
  );
}

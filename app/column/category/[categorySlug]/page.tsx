import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ALL_COLUMN_TOPICS } from "@/lib/data/column";

export const COLUMN_CATEGORY_DEFS: {
  slug: string;
  name: string;
  nameEn: string;
  description: string;
  relatedService: string;
  faq: { q: string; a: string }[];
}[] = [
  {
    slug: "seo",
    name: "SEO対策",
    nameEn: "SEO",
    description:
      "Googleで上位表示を実現するSEO対策の実践ノウハウを専門家が解説します。内部SEO・コンテンツSEO・テクニカルSEO・ローカルSEOまで、中小企業が今日から取り組める検索上位表示戦略を体系的にお届けします。",
    relatedService: "/seo",
    faq: [
      { q: "SEO対策のコラムはどんな人向けですか？", a: "中小企業の経営者・Web担当者・ホームページ制作を検討している方向けに、実務で使えるSEO知識を分かりやすく解説しています。" },
      { q: "SEO対策は自社でできますか？", a: "基本的な内部SEOや記事作成は自社でも実施できます。ただし競合分析・テクニカルSEO・被リンク獲得は専門知識が必要なため、プロのサポートと組み合わせると効果的です。" },
      { q: "SEO対策の効果はどのくらいで出ますか？", a: "早い場合で1〜3ヶ月、一般的には3〜6ヶ月を目安に変化が現れます。継続的な施策で安定した検索流入を構築できます。" },
    ],
  },
  {
    slug: "meo",
    name: "MEO対策",
    nameEn: "MEO",
    description:
      "GoogleマップでNO.1表示を目指すMEO対策の実践ノウハウをお届けします。Googleビジネスプロフィールの最適化から口コミ対策・写真投稿・投稿機能活用まで、地域ビジネスが今すぐ実践できる手法を徹底解説します。",
    relatedService: "/meo",
    faq: [
      { q: "MEO対策コラムはどんな業種に役立ちますか？", a: "飲食店・美容室・整体院・歯科・クリニック・リフォーム会社など、来店・予約・問い合わせが発生する地域ビジネスすべてに役立ちます。" },
      { q: "Googleビジネスプロフィールは無料ですか？", a: "登録・管理は無料です。ただし最適化作業や継続運用には時間と専門知識が必要なため、効率的に進めたい場合は専門会社への依頼も選択肢です。" },
      { q: "MEO対策と通常のSEO対策は何が違いますか？", a: "MEOはGoogleマップ・ローカルパックでの表示最適化、SEOは通常検索結果での上位表示を目指します。地域ビジネスには両方の対策が効果的です。" },
    ],
  },
  {
    slug: "aio",
    name: "AIO・AI検索対策",
    nameEn: "AIO",
    description:
      "ChatGPT・Gemini・Perplexity・Google AI Overviewで自社が引用・推薦されるAIO対策を解説します。AI検索が普及する今、従来のSEOに加えて必要なAI検索最適化の考え方と実践手順を専門家がお届けします。",
    relatedService: "/aio",
    faq: [
      { q: "AIO対策はなぜ必要ですか？", a: "AI検索（ChatGPT・Gemini・Perplexity）の利用者が急増しており、AI検索で自社が引用されることで従来の検索以外からの集客が期待できます。今から対策を始めることが重要です。" },
      { q: "AIO対策はSEO対策と別に行う必要がありますか？", a: "AIO対策とSEO対策は多くの部分で重複します。E-E-A-T向上・構造化データ・FAQ設計などはどちらにも有効な施策です。SEO対策を強化しながらAIO視点を加えると効率的です。" },
      { q: "AI検索に引用されているか確認する方法は？", a: "ChatGPT・Gemini・Perplexityで自社名や業種・地域のキーワードを検索し、回答に自社情報が含まれるか確認できます。定期的にモニタリングすることをお勧めします。" },
    ],
  },
  {
    slug: "web-design",
    name: "ホームページ制作",
    nameEn: "Web Design",
    description:
      "問い合わせが増えるホームページ制作の設計・導線・構成について実務家向けに解説します。SEOに強いサイト構成・スマホ対応・信頼性設計・LP制作との違いまで、Web制作で失敗しないための知識を体系的にお届けします。",
    relatedService: "/web-design",
    faq: [
      { q: "ホームページ制作コラムはどんな内容ですか？", a: "中小企業・店舗のホームページ制作で知っておくべき設計・導線・SEO対応・スマホ最適化などの実践的な知識を解説しています。制作前・制作中・リニューアル検討中の方に役立てていただけます。" },
      { q: "ホームページ制作後に何をすればいいですか？", a: "SEO対策・MEO対策・コンテンツ更新・アクセス解析が基本です。制作して終わりではなく、継続的な改善が集客力を高めます。" },
      { q: "ホームページ制作の費用相場はどのくらいですか？", a: "中小企業向けは30〜100万円程度が相場ですが、機能・ページ数・デザインの複雑さにより異なります。SEO対策や運用サポートを含めたパッケージも選択肢です。" },
    ],
  },
  {
    slug: "industries",
    name: "業種別Web集客",
    nameEn: "Industry Web Marketing",
    description:
      "飲食店・美容室・整体院・クリニック・不動産・リフォーム・学習塾など、業種ごとのWeb集客・SEO・MEO対策の実践ノウハウを解説します。業種特有の検索意図・競合環境・成功パターンを踏まえた専門コラムです。",
    relatedService: "/services",
    faq: [
      { q: "業種別コラムの対象業種を教えてください", a: "飲食店・美容室・整体院・整骨院・クリニック・歯科・リフォーム・工務店・不動産・ペットショップ・学習塾・士業・清掃業・小売店・宿泊施設・エステ・ジムなど幅広く対応しています。" },
      { q: "業種によってSEO対策の方法が違いますか？", a: "はい。業種によって競合の強さ・検索されるキーワード・ユーザーの行動が異なります。飲食店ならMEO重視、クリニックなら診療科目別ページ、士業なら専門知識コンテンツなど業種ごとに最適な戦略があります。" },
      { q: "自分の業種のコラムを探すにはどうすればいいですか？", a: "カテゴリページの記事一覧から業種名で検索するか、各記事タイトルで絞り込んでください。見つからない業種はお問い合わせください。" },
    ],
  },
  {
    slug: "local-seo",
    name: "地域SEO",
    nameEn: "Local SEO",
    description:
      "葛飾区・東京・千葉・埼玉・神奈川など、地域特化キーワードで上位表示を狙うローカルSEOの実践手法を解説します。地域名を含むキーワード設計・エリアページ構成・MEO連動まで、地域ビジネスの集客力を高める専門コラムです。",
    relatedService: "/meo",
    faq: [
      { q: "地域SEOとは何ですか？", a: "「葛飾区 整体院」「渋谷 美容室」など地域名を含む検索キーワードで自社サイトを上位表示させるためのSEO対策です。地域ビジネスが広告費をかけずに地元集客できる有力な手法です。" },
      { q: "地域ページを増やすだけでSEO効果がありますか？", a: "薄い内容の地域ページを量産するだけでは効果が低く、Googleに低品質と判断されるリスクがあります。各エリアの特性・ニーズに合わせた専門的なコンテンツを作ることが重要です。" },
      { q: "MEOと地域SEOはどう使い分けますか？", a: "MEOはGoogleマップ・ローカルパックでの表示、地域SEOは通常の検索結果での上位表示を目指します。どちらも地域名検索への対応ですが、施策内容が異なります。両方を組み合わせることで集客効果が最大化します。" },
    ],
  },
  {
    slug: "case-study",
    name: "成功事例解説",
    nameEn: "Case Study",
    description:
      "飲食店・美容室・整体院・不動産・リフォームなど、実際のWebサイト改善・SEO対策・MEO対策の成功パターンを解説します。数値や施策の具体性にこだわり、同業種・同規模の事業者が参考にできる専門コラムです。",
    relatedService: "/cases",
    faq: [
      { q: "成功事例コラムはどんな内容ですか？", a: "実際のWebサイト改善事例をもとに、どんな課題があり、どんな施策を行い、どのような結果が得られたかを解説します。業種・施策別に整理していますので、自社に近い事例を探せます。" },
      { q: "架空の事例は掲載されていますか？", a: "架空の事例・数値・お客様の声は一切掲載していません。実際の改善パターンや設計手法をもとに、専門家の観点で解説しています。" },
      { q: "自社の事例を掲載してもらえますか？", a: "お問い合わせください。取材・掲載のご相談を承っています。" },
    ],
  },
  {
    slug: "sns",
    name: "SNS運用",
    nameEn: "SNS",
    description:
      "Instagram・Googleビジネスプロフィール投稿・SNS運用代行の実践ノウハウを解説します。SNSだけに依存しない集客設計の考え方や、ホームページ・MEO・SEOとSNSを連動させる方法を専門家がお届けします。",
    relatedService: "/sns",
    faq: [
      { q: "SNS運用だけで集客できますか？", a: "SNS単体での集客には限界があります。検索からの流入（SEO・MEO）を柱にしつつ、SNSをブランド認知・リピーター育成に活用する設計が持続的な集客につながります。" },
      { q: "Instagramはどんな業種に向いていますか？", a: "美容室・エステ・飲食店・ネイルサロンなどビジュアルで魅力を伝えやすい業種に特に効果的です。写真・動画の質と投稿の継続性が重要です。" },
      { q: "SNS運用代行を依頼する際の注意点は？", a: "ブランドイメージ・投稿方針・禁止事項を代行会社と共有することが重要です。また、ホームページへの誘導設計（プロフィールリンク・投稿内CTA）もあわせて設計してもらうことをお勧めします。" },
    ],
  },
  {
    slug: "search-console",
    name: "Search Console改善",
    nameEn: "Search Console",
    description:
      "Googleサーチコンソールを使ったSEO改善の実践手順を解説します。クリック率（CTR）改善・インデックス対策・検索順位11〜20位の引き上げ・月次SEOレポート作成まで、データに基づいたSEO改善手法をお届けします。",
    relatedService: "/seo",
    faq: [
      { q: "サーチコンソールは無料で使えますか？", a: "はい、Googleサーチコンソールは無料のツールです。Googleアカウントがあればすぐに利用を開始できます。ただしサイトのオーナー確認が必要です。" },
      { q: "サーチコンソールで何が確認できますか？", a: "検索クエリ・クリック数・表示回数・平均掲載順位・インデックス状況・ページ速度の問題・Core Web Vitalsなど、SEO改善に必要な情報を無料で確認できます。" },
      { q: "サーチコンソールを設定したことがないのですが、どうすれば良いですか？", a: "まずGoogleサーチコンソールにアクセスし、サイトのURLを追加してオーナー確認を完了させてください。設定方法は関連コラムでも解説しています。" },
    ],
  },
  {
    slug: "web-marketing",
    name: "Web集客戦略",
    nameEn: "Web Marketing",
    description:
      "SEO・MEO・SNS・広告を組み合わせたWeb集客戦略の設計方法を解説します。ホームページ制作後の集客設計・外注前の整理・料金ページの重要性・月額運用の改善項目など、中小企業のWeb集客を体系的に強化するコラムです。",
    relatedService: "/services",
    faq: [
      { q: "Web集客戦略コラムはどんな方に向いていますか？", a: "ホームページを作ったが集客につながらない・SEO・MEO・SNS・広告の使い分けが分からない・Web集客を外注したいが何から始めればいいか分からない方に特に役立ちます。" },
      { q: "SEO・MEO・SNS・広告はどれから始めれば良いですか？", a: "まずGoogleビジネスプロフィール（MEO）の整備と、ホームページの基本SEO対応から着手することを推奨します。無料でできる集客基盤を先に整えてから、有料広告やSNSを組み合わせると効率的です。" },
      { q: "Web集客を外注する際に注意すべきことは？", a: "目的・予算・成果指標（KPI）を先に決めてから依頼することが重要です。「とりあえず任せる」では期待外れの結果になりがちです。何を改善したいかを明確にして依頼しましょう。" },
    ],
  },
  {
    slug: "training",
    name: "研修・人材育成",
    nameEn: "Training",
    description:
      "AI研修・DX研修・Webマーケティング研修など、リスキリング研修の導入を検討する企業向けのコラムです。人材開発支援助成金の活用を検討する際の注意点、研修会社の選び方、社内で定着させる進め方を解説します。株式会社サイプレスは研修会社への紹介窓口であり、助成金の申請代行は行っていません。",
    relatedService: "/training/reskilling-subsidy",
    faq: [
      { q: "研修・人材育成コラムはどんな方に向いていますか？", a: "社員にAIやDXのスキルを身につけさせたい経営者・人事担当者、Web集客を社内で理解できる人材を育てたい企業の方に向けた内容です。" },
      { q: "サイプレスは研修を実施しているのですか？", a: "いいえ。株式会社サイプレスはWebマーケティング会社であり、研修を実施する会社ではありません。研修導入を検討する企業と、実績ある提携研修会社をつなぐ紹介窓口として対応しています。" },
      { q: "助成金の申請代行はしてもらえますか？", a: "いいえ。サイプレスは助成金の申請書作成、計画届作成、支給申請、労働局対応などの申請代行を行っていません。申請手続きは、申請企業自身または社会保険労務士等の専門家へご相談ください。また、助成金の採択・支給を保証するものではありません。" },
    ],
  },
];

export const COLUMN_CATEGORY_MAP = Object.fromEntries(
  COLUMN_CATEGORY_DEFS.map((c) => [c.slug, c])
);

export async function generateStaticParams() {
  return COLUMN_CATEGORY_DEFS.map((c) => ({ categorySlug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}): Promise<Metadata> {
  const { categorySlug } = await params;
  const cat = COLUMN_CATEGORY_MAP[categorySlug];
  if (!cat) return { title: "カテゴリが見つかりません" };

  return {
    title: `${cat.name}の専門コラム｜SEO・MEO・Web集客ノウハウ｜株式会社サイプレス`,
    description: cat.description.slice(0, 120),
    keywords: [
      cat.name,
      `${cat.name} 東京`,
      `${cat.name} 中小企業`,
      "株式会社サイプレス",
      "東京 葛飾区",
      "Webマーケティング",
    ],
    alternates: {
      canonical: `https://www.cypress-all.co.jp/column/category/${categorySlug}`,
    },
    openGraph: {
      title: `${cat.name}の専門コラム｜株式会社サイプレス`,
      description: cat.description.slice(0, 120),
      locale: "ja_JP",
      type: "website",
    },
  };
}

export default async function ColumnCategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;
  const cat = COLUMN_CATEGORY_MAP[categorySlug];
  if (!cat) notFound();

  const articles = ALL_COLUMN_TOPICS.filter(
    (t) => t.categorySlug === categorySlug
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp" },
          { "@type": "ListItem", position: 2, name: "専門コラム", item: "https://www.cypress-all.co.jp/column" },
          { "@type": "ListItem", position: 3, name: cat.name, item: `https://www.cypress-all.co.jp/column/category/${categorySlug}` },
        ],
      },
      {
        "@type": "CollectionPage",
        name: `${cat.name}の専門コラム`,
        description: cat.description,
        url: `https://www.cypress-all.co.jp/column/category/${categorySlug}`,
        hasPart: articles.map((a) => ({
          "@type": "Article",
          headline: a.title,
          url: `https://www.cypress-all.co.jp/column/${a.slug}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: cat.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main style={{ background: "#ffffff", minHeight: "100vh" }}>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "56px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/column" style={{ color: "#9ca3af", textDecoration: "none" }}>専門コラム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              {cat.name}
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4a96a", fontSize: "11px", marginBottom: "12px" }}>
              {cat.nameEn}
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,4vw,40px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              {cat.name}の専門コラム
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              {cat.description}
            </p>
            <p style={{ fontSize: "13px", color: "#9ca3af", marginTop: "16px" }}>
              {articles.length}件のコラム
            </p>
          </div>
        </section>

        {/* カテゴリナビ */}
        <section style={{ borderBottom: "1px solid #ece8e0", background: "#ffffff" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "flex", gap: "0", overflowX: "auto" }}>
              {COLUMN_CATEGORY_DEFS.map((c) => (
                <Link
                  key={c.slug}
                  href={`/column/category/${c.slug}`}
                  style={{
                    display: "block",
                    padding: "14px 20px",
                    fontSize: "13px",
                    whiteSpace: "nowrap",
                    color: c.slug === categorySlug ? "#0d1b2a" : "#6b7280",
                    borderBottom: c.slug === categorySlug ? "2px solid #c4a96a" : "2px solid transparent",
                    textDecoration: "none",
                    fontWeight: c.slug === categorySlug ? 600 : 400,
                  }}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "64px 24px" }}>
          {/* lg未満では1カラムに畳む。280pxのサイドバーが固定のままだと
              スマホで横スクロールが発生するため。minmax(0,1fr) は長いURL等で
              1frトラックが min-content まで広がるのを防ぐ。 */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-12 lg:gap-16 items-start">
            {/* 記事一覧 */}
            <div className="min-w-0">
              {articles.length === 0 ? (
                <div style={{ padding: "80px 0", textAlign: "center", color: "#9ca3af" }}>
                  <p>このカテゴリのコラムは準備中です。</p>
                </div>
              ) : (
                articles.map((article) => (
                  <article
                    key={article.slug}
                    style={{ borderBottom: "1px solid #ece8e0", paddingBottom: "40px", marginBottom: "40px" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                      {article.publishedAt && (
                        <time dateTime={article.publishedAt} style={{ fontSize: "12px", color: "#9ca3af", fontFamily: "var(--font-display)" }}>
                          {article.publishedAt.replace(/-/g, ".")}
                        </time>
                      )}
                      <span style={{ fontSize: "11px", padding: "2px 8px", background: "#f0ede8", color: "#374151" }}>
                        {cat.name}
                      </span>
                      {article.primaryKeyword && (
                        <span style={{ fontSize: "11px", color: "#9ca3af" }}>
                          {article.primaryKeyword}
                        </span>
                      )}
                    </div>
                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(16px,2vw,20px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.4, marginBottom: "12px" }}>
                      <Link href={`/column/${article.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                        {article.title}
                      </Link>
                    </h2>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8" }}>
                      {article.metaDescription.slice(0, 130)}
                      {article.metaDescription.length > 130 ? "…" : ""}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "16px" }}>
                      <Link
                        href={`/column/${article.slug}`}
                        style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#0d1b2a", textDecoration: "none" }}
                      >
                        続きを読む
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                      {article.readingTime && (
                        <span style={{ fontSize: "12px", color: "#9ca3af" }}>約{article.readingTime}分</span>
                      )}
                    </div>
                  </article>
                ))
              )}
            </div>

            {/* サイドバー（1カラムに畳まれるlg未満ではstickyを無効化） */}
            <aside className="w-full min-w-0 lg:sticky lg:top-[88px]">
              {/* カテゴリリスト */}
              <div style={{ marginBottom: "40px" }}>
                <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", fontSize: "11px", color: "#9ca3af", marginBottom: "16px" }}>
                  Categories
                </p>
                {COLUMN_CATEGORY_DEFS.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/column/category/${c.slug}`}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "10px 0",
                      borderBottom: "1px solid #ece8e0",
                      fontSize: "13px",
                      color: c.slug === categorySlug ? "#0d1b2a" : "#374151",
                      textDecoration: "none",
                      fontWeight: c.slug === categorySlug ? 600 : 400,
                    }}
                  >
                    <span>{c.name}</span>
                    <span style={{ color: "#9ca3af", fontSize: "11px" }}>{c.nameEn}</span>
                  </Link>
                ))}
              </div>

              {/* 関連サービス */}
              <div style={{ background: "#f8f6f2", padding: "24px", border: "1px solid #ece8e0", marginBottom: "24px" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "14px", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
                  関連サービス
                </p>
                <Link
                  href={cat.relatedService}
                  style={{ display: "block", fontSize: "13px", color: "#374151", textDecoration: "none", marginBottom: "8px", lineHeight: 1.6 }}
                >
                  → {cat.name}サービスの詳細を見る
                </Link>
                <Link
                  href="/contact"
                  style={{ display: "block", fontSize: "13px", color: "#374151", textDecoration: "none" }}
                >
                  → 無料相談・お問い合わせ
                </Link>
              </div>

              {/* CTA */}
              <div style={{ background: "#0d1b2a", padding: "24px" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "14px", color: "#ffffff", fontWeight: 700, marginBottom: "10px" }}>
                  Web集客の無料相談
                </p>
                <p style={{ fontSize: "12px", color: "#c4a96a", lineHeight: "1.8", marginBottom: "16px" }}>
                  {cat.name}についてご不明な点はお気軽にご相談ください。
                </p>
                <Link
                  href="/contact"
                  style={{ display: "block", textAlign: "center", padding: "10px", fontSize: "13px", background: "#c4a96a", color: "#0d1b2a", textDecoration: "none", fontWeight: 600 }}
                >
                  無料相談はこちら
                </Link>
              </div>
            </aside>
          </div>

          {/* FAQ */}
          <section style={{ marginTop: "80px", paddingTop: "64px", borderTop: "1px solid #ece8e0" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", fontSize: "11px", color: "#9ca3af", marginBottom: "8px" }}>FAQ</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              よくある質問
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {cat.faq.map((f, i) => (
                <div key={i} style={{ borderBottom: "1px solid #ece8e0", paddingBottom: "28px", marginBottom: "28px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px", lineHeight: 1.5 }}>
                    Q. {f.q}
                  </p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

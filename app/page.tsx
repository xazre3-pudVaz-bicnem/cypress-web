import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IntroOverlay from "@/components/home/hero/IntroOverlay";
import HomeHero from "@/components/home/hero/HomeHero";
import HomeCases, { type CaseCard } from "@/components/home/HomeCases";
import HomeInsights, { type InsightCard } from "@/components/home/HomeInsights";
import HomeServices from "@/components/home/HomeServices";
import HomeActivities from "@/components/home/HomeActivities";
import HomeUpdates, { type UpdateItem } from "@/components/home/HomeUpdates";
import HomeGroupBanner from "@/components/home/HomeGroupBanner";
import HomeFaq from "@/components/home/HomeFaq";
import HomeCompany from "@/components/home/HomeCompany";
import HomeCareers from "@/components/home/HomeCareers";
import HomeContact from "@/components/home/HomeContact";
import Deferred from "@/components/ui/Deferred";
import { CASES } from "@/lib/data/cases";
import { getLatestColumns } from "@/lib/data/columns";
import { getLatestNews } from "@/lib/data/news";
import { HOME_FAQ } from "@/lib/data/homeFaq";
import { getRecentPosts, CATEGORY_NAMES as BLOG_CATEGORIES } from "@/lib/blog";

export const metadata: Metadata = {
  title: "株式会社サイプレス｜MEO・SEO・AIO・ホームページ制作｜東京葛飾区のWebマーケティング会社",
  description:
    "株式会社サイプレスは東京都葛飾区拠点のWebマーケティング会社。MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援を通じて、東京23区・全国の中小企業のWeb集客を一気通貫で支援します。初回相談無料。",
  keywords: [
    "株式会社サイプレス",
    "サイプレス 東京",
    "Cypress Webマーケティング",
    "MEO対策 東京",
    "SEO対策 東京",
    "AIO対策 東京",
    "ホームページ制作 東京",
    "Webマーケティング 葛飾区",
    "葛飾区 SEO対策",
    "葛飾区 MEO対策",
    "葛飾区 ホームページ制作",
    "中小企業 Web集客 東京",
    "AI検索対策 東京",
    "Googleマップ集客 東京",
    "東京 Webマーケティング会社",
  ],
  openGraph: {
    title: "株式会社サイプレス｜MEO・SEO・AIO・ホームページ制作｜東京葛飾区のWebマーケティング会社",
    description:
      "東京都葛飾区拠点のWebマーケティング会社。MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援。東京23区・全国の中小企業のWeb集客を一気通貫で支援します。",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: "株式会社サイプレス 東京葛飾区のWebマーケティング会社" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp" },
};

// layout.tsx で Organization + WebSite スキーマ（@id付き）を出力済みのため、
// homepage では WebPage スキーマ + speakable のみ追加する
const homePageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.cypress-all.co.jp/#webpage",
      url: "https://www.cypress-all.co.jp/",
      name: "株式会社サイプレス｜MEO・SEO・AIO・ホームページ制作｜葛飾区Webマーケティング",
      description:
        "株式会社サイプレスは東京都葛飾区を拠点に、MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援を提供するWebマーケティング会社です。中小企業・地域店舗のWeb集客を一気通貫で支援します。",
      inLanguage: "ja",
      isPartOf: { "@id": "https://www.cypress-all.co.jp/#website" },
      about: { "@id": "https://www.cypress-all.co.jp/#organization" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp" },
        ],
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".hero-description"],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: HOME_FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

/** 事例ごとのイメージ画像（2026-10 刷新で作成した立体イラスト） */
const CASE_IMAGES: Record<string, string> = {
  "water-heater-seo": "/images/v2/case-water-heater.jpg",
  "tatami-store-renewal": "/images/v2/case-tatami.jpg",
  "relaxation-salon-meo": "/images/v2/case-salon.jpg",
  "freight-jobs-seo": "/images/v2/case-freight.jpg",
  "interior-corporate-site": "/images/v2/case-interior.jpg",
  "restaurant-gbp": "/images/v2/case-restaurant.jpg",
  "cleaning-meo-sns": "/images/v2/case-cleaning.jpg",
};

/** コラムのカテゴリごとのカード画像 */
const COLUMN_IMAGES: Record<string, string> = {
  SEO: "/images/v2/svc-seo.jpg",
  MEO: "/images/v2/svc-meo.jpg",
  AIO: "/images/v2/svc-aio.jpg",
  AI: "/images/v2/svc-ai.jpg",
  ホームページ制作: "/images/v2/svc-web.jpg",
  SNS運用: "/images/v2/svc-sns.jpg",
  採用: "/images/v2/life-meeting.jpg",
  Webマーケティング: "/images/v2/life-desk.jpg",
};

/** ブログのカテゴリごとのカード画像 */
const BLOG_IMAGES: Record<string, string> = {
  seo: "/images/v2/svc-seo.jpg",
  meo: "/images/v2/svc-meo.jpg",
  aio: "/images/v2/svc-aio.jpg",
  "web-design": "/images/v2/svc-web.jpg",
  sns: "/images/v2/svc-sns.jpg",
  ai: "/images/v2/svc-ai.jpg",
};

export default function Home() {
  const caseCards: CaseCard[] = [...CASES]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map((c) => ({
      slug: c.slug,
      title: c.title,
      industry: c.industry,
      region: c.region,
      services: c.services,
      image: CASE_IMAGES[c.slug] ?? "/images/v2/case-interior.jpg",
    }));
  const insights: InsightCard[] = getLatestColumns(3).map((c) => ({
    href: `/column/${c.slug}`,
    title: c.title,
    date: c.publishedAt,
    tags: c.tags,
    image: COLUMN_IMAGES[c.category] ?? "/images/v2/life-desk.jpg",
  }));
  const news: UpdateItem[] = getLatestNews(3).map((n) => ({
    href: `/news/${n.slug}`,
    title: n.title,
    date: n.publishedAt,
    label: n.category,
  }));
  const posts: UpdateItem[] = getRecentPosts(3).map((p) => ({
    href: `/blog/${p.slug}`,
    title: p.title,
    date: p.date,
    label: BLOG_CATEGORIES[p.category] ?? "ブログ",
    image: BLOG_IMAGES[p.category],
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }} />
      <IntroOverlay />
      <Header variant="overlay" introFade />
        <main className="v2" style={{ background: "var(--v2-bg)" }}>
          {/* 1. ヒーロー → 円に縮む 3D → ステートメント → 2つの柱 */}
          <HomeHero />
          {/* 2 以降は画面に近づくまで描画計算を省く（初回表示を軽くする） */}
          {/* 2. 支援事例 */}
          <Deferred size={3200}>
            <HomeCases cases={caseCards} />
          </Deferred>
          {/* 3. 専門コラム（濃紺の帯） */}
          <Deferred size={1600}>
            <HomeInsights items={insights} />
          </Deferred>
          {/* 4. サービス一覧（青い帯） */}
          <Deferred size={1450}>
            <HomeServices />
          </Deferred>
          {/* 5. 最新情報（流れる巨大文字 → お知らせ・ブログ） */}
          <HomeActivities />
          <Deferred size={1500}>
            <HomeUpdates
              groups={[
                { title: "News", ja: "お知らせ", href: "/news", items: news },
                { title: "Blog", ja: "ブログ", href: "/blog", items: posts },
              ]}
            />
          </Deferred>
          {/* 6. そのほかの事業（軽貨物・太陽光） */}
          <Deferred size={520}>
            <HomeGroupBanner />
          </Deferred>
          {/* 7. よくあるご質問 */}
          <Deferred size={800}>
            <HomeFaq items={HOME_FAQ} />
          </Deferred>
          {/* 8. 会社情報 */}
          <Deferred size={1450}>
            <HomeCompany />
          </Deferred>
          {/* 9. 採用 */}
          <Deferred size={980}>
            <HomeCareers />
          </Deferred>
          {/* 10. お問い合わせ */}
          <Deferred size={1000}>
            <HomeContact />
          </Deferred>
        </main>
      <Footer />
    </>
  );
}

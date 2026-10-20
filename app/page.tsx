import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/home/HomeHero";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import ProblemsGrid from "@/components/home/ProblemsGrid";
import ReasonsSection from "@/components/home/ReasonsSection";
import CasesAndColumns from "@/components/home/CasesAndColumns";
import BusinessCards from "@/components/shared/BusinessCards";
import FaqSection from "@/components/shared/FaqSection";
import PageContactCTA from "@/components/shared/PageContactCTA";
import Steps from "@/components/ui/Steps";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";

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
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "株式会社サイプレス 東京葛飾区のWebマーケティング会社" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp" },
};

const SITE_URL = "https://www.cypress-all.co.jp";

// 画面に出すFAQと構造化データ（FAQPage）は同じ配列から作り、内容を一致させる。
const HOME_FAQ = [
  {
    q: "株式会社サイプレスはどんな会社ですか？",
    a: "東京都葛飾区亀有（〒125-0061）を拠点とする会社です。MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援のWebマーケティング事業を中心に、軽貨物事業と太陽光事業（SOLAR SHIFT）も運営しています。代表取締役は織田 春樹、設立は2026年5月13日です。",
  },
  {
    q: "葛飾区でWebマーケティングを依頼できる会社はありますか？",
    a: "株式会社サイプレスは葛飾区亀有に拠点を置き、葛飾区・足立区・江戸川区など東京東部エリアには訪問して、MEO対策・SEO対策・ホームページ制作をご支援しています。全国の方にはオンラインで対応します。",
  },
  {
    q: "MEO対策・SEO対策の費用はいくらですか？",
    a: "目安はMEO対策が月2〜15万円、SEO対策が月5〜30万円、ホームページ制作が50〜300万円程度です。店舗数や競合状況で変わるため、無料相談でお見積りをお出しします。",
  },
  {
    q: "ChatGPT・Gemini・PerplexityなどのAI検索にも対応できますか？",
    a: "はい。AIO対策（AI検索最適化）として、構造化データの実装、FAQ設計、E-E-A-Tの強化、llms.txtの設置など、AIに引用・推薦されるための施策を行います。",
  },
];

const PROCESS = [
  { title: "無料相談", body: "今の集客状況とご希望を伺います。オンラインでも対応します。" },
  { title: "調査・ご提案", body: "競合と現状を分析し、優先順位をつけた施策をご提案します。" },
  { title: "制作・実装", body: "サイト・Googleビジネスプロフィール・コンテンツを整えます。" },
  { title: "運用・改善", body: "毎月の数値をもとに、成果が出るまで改善を続けます。" },
];

// layout.tsx で Organization + WebSite スキーマ（@id付き）を出力済みのため、
// トップページでは WebPage と FAQPage のみ追加する
const homePageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: "株式会社サイプレス｜MEO・SEO・AIO・ホームページ制作｜葛飾区Webマーケティング",
      description:
        "株式会社サイプレスは東京都葛飾区亀有を拠点に、MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援を提供するWebマーケティング会社です。中小企業・地域店舗のWeb集客を一気通貫で支援します。",
      inLanguage: "ja",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL }],
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

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }} />
      <Header />
      <main>
        <HomeHero />
        <ServicesShowcase />
        <ProblemsGrid />
        <ReasonsSection />

        <Section tone="white" labelledBy="home-business">
          <SectionHeading
            id="home-business"
            eyebrow="Business"
            title="Webから、物流、エネルギーまで。"
            lead="本業のWebマーケティングに加えて、軽貨物配送と太陽光発電の導入サポートも運営しています。地域に必要なものを、確実に届ける会社でありたいと考えています。"
            action={
              <ButtonLink href="/business" variant="secondary">
                事業内容
              </ButtonLink>
            }
          />
          <BusinessCards />
        </Section>

        <Section tone="surface" labelledBy="home-process">
          <SectionHeading
            id="home-process"
            eyebrow="Process"
            title="ご相談から、成果が出るまで。"
            lead="初回のご相談は無料です。無理な契約はおすすめしません。"
            action={
              <ButtonLink href="/process" variant="secondary">
                詳しい流れ
              </ButtonLink>
            }
          />
          <Steps steps={PROCESS} />
        </Section>

        <CasesAndColumns />
        <FaqSection items={HOME_FAQ} bgColor="#F4F6FA" />
        <PageContactCTA
          heading="まずは、今の集客を一緒に整理しませんか。"
          body="何から始めればいいか分からない段階でも大丈夫です。状況を伺い、必要な施策だけをご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}

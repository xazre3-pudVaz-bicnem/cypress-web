import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "サイトマップ｜株式会社サイプレス",
  alternates: { canonical: "https://www.cypress-all.co.jp/sitemap" },
  description: "株式会社サイプレスのサイトマップ。MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援の全ページ一覧です。",
};

interface SitemapSection {
  heading: string;
  headingEn: string;
  links: { href: string; label: string }[];
}

const sections: SitemapSection[] = [
  {
    heading: "会社情報",
    headingEn: "Company",
    links: [
      { href: "/company", label: "会社概要" },
      { href: "/company/message", label: "代表挨拶" },
      { href: "/company/philosophy", label: "企業理念" },
      { href: "/company/profile", label: "会社情報" },
      { href: "/company/history", label: "沿革" },
      { href: "/company/value", label: "サービスの価値" },
      { href: "/company/support-policy", label: "サポートポリシー" },
      { href: "/company/area", label: "アクセス" },
    ],
  },
  {
    heading: "事業内容",
    headingEn: "Services",
    links: [
      { href: "/services/meo", label: "MEO対策" },
      { href: "/services/seo", label: "SEO対策" },
      { href: "/services/aio", label: "AIO対策" },
      { href: "/services/web-design", label: "ホームページ制作" },
      { href: "/services/sns", label: "SNS運用" },
      { href: "/services/ai", label: "AI活用支援" },
    ],
  },
  {
    heading: "SEO対策",
    headingEn: "SEO",
    links: [
      { href: "/seo", label: "SEO対策とは" },
      { href: "/seo/internal-seo", label: "内部SEO" },
      { href: "/seo/content-seo", label: "コンテンツSEO" },
      { href: "/seo/technical-seo", label: "テクニカルSEO" },
      { href: "/seo/local-seo", label: "地域SEO" },
      { href: "/seo/keyword-research", label: "キーワード調査" },
      { href: "/seo/blog-strategy", label: "ブログ戦略" },
      { href: "/seo/e-e-a-t", label: "E-E-A-T対策" },
      { href: "/seo/link-building", label: "被リンク対策" },
      { href: "/seo/schema-markup", label: "構造化データ" },
      { href: "/seo/page-speed", label: "ページ速度改善" },
      { href: "/seo/mobile-seo", label: "モバイルSEO" },
      { href: "/seo/seo-analysis", label: "SEO分析・レポート" },
      { href: "/seo/competitor-analysis", label: "競合分析" },
      { href: "/seo/ai-seo", label: "AI時代のSEO" },
    ],
  },
  {
    heading: "MEO対策",
    headingEn: "MEO",
    links: [
      { href: "/meo", label: "MEO対策とは" },
      { href: "/meo/google-business-profile", label: "GBP最適化" },
      { href: "/meo/review-management", label: "口コミ対策" },
      { href: "/meo/ranking", label: "順位改善" },
      { href: "/meo/photo-posting", label: "写真投稿" },
      { href: "/meo/meo-audit", label: "MEO監査" },
      { href: "/meo/local-pack", label: "ローカルパック対策" },
      { href: "/meo/map-seo", label: "マップSEO" },
      { href: "/meo/competitor-meo", label: "競合MEO分析" },
      { href: "/meo/multi-location", label: "多店舗MEO管理" },
      { href: "/meo/gbp-post", label: "GBP投稿運用" },
      { href: "/meo/qa-management", label: "Q&A管理" },
    ],
  },
  {
    heading: "AIO対策",
    headingEn: "AIO",
    links: [
      { href: "/aio", label: "AIO対策とは" },
      { href: "/aio/chatgpt", label: "ChatGPT対策" },
      { href: "/aio/ai-overview", label: "AI Overview" },
      { href: "/aio/structured-data", label: "構造化データ" },
      { href: "/aio/llms-txt", label: "LLMS.txt" },
      { href: "/aio/faq-optimization", label: "FAQ最適化" },
      { href: "/aio/e-e-a-t", label: "E-E-A-T" },
      { href: "/aio/author-info", label: "著者情報最適化" },
      { href: "/aio/perplexity", label: "Perplexity対策" },
      { href: "/aio/gemini", label: "Gemini対策" },
    ],
  },
  {
    heading: "Web制作",
    headingEn: "Web Design",
    links: [
      { href: "/web-design", label: "ホームページ制作" },
      { href: "/web-design/corporate-site", label: "コーポレートサイト" },
      { href: "/web-design/seo-site", label: "SEO対応サイト" },
      { href: "/web-design/nextjs", label: "Next.js制作" },
      { href: "/web-design/vercel", label: "Vercelホスティング" },
      { href: "/web-design/headless-wordpress", label: "ヘッドレスWP" },
      { href: "/web-design/landing-page", label: "LP制作" },
      { href: "/web-design/mobile-friendly", label: "スマホ対応" },
      { href: "/web-design/page-speed", label: "速度改善" },
      { href: "/web-design/contact-form", label: "フォーム最適化" },
      { href: "/web-design/maintenance", label: "保守管理" },
    ],
  },
  {
    heading: "SNS運用",
    headingEn: "SNS",
    links: [
      { href: "/sns", label: "SNS運用代行" },
      { href: "/sns/instagram", label: "Instagram運用" },
      { href: "/sns/post-planning", label: "投稿企画" },
      { href: "/sns/hashtag", label: "ハッシュタグ戦略" },
      { href: "/sns/local-sns", label: "地域SNS活用" },
      { href: "/sns/google-business-profile", label: "GBP投稿" },
      { href: "/sns/content-calendar", label: "コンテンツカレンダー" },
      { href: "/sns/photo-direction", label: "写真ディレクション" },
    ],
  },
  {
    heading: "AI活用",
    headingEn: "AI",
    links: [
      { href: "/ai", label: "AI活用支援" },
      { href: "/ai/automation", label: "業務自動化" },
      { href: "/ai/chatgpt-business", label: "ChatGPT活用" },
      { href: "/ai/content-generation", label: "AI記事生成" },
      { href: "/ai/seo-tools", label: "AIツール活用" },
      { href: "/ai/workflow", label: "AIワークフロー" },
    ],
  },
  {
    heading: "業種別対応",
    headingEn: "Industries",
    links: [
      { href: "/industries", label: "業種別対応一覧" },
      { href: "/industries/restaurant", label: "飲食店" },
      { href: "/industries/beauty", label: "美容室" },
      { href: "/industries/clinic", label: "医療・歯科" },
      { href: "/industries/construction", label: "建設業" },
      { href: "/industries/real-estate", label: "不動産" },
      { href: "/industries/professional-service", label: "士業" },
      { href: "/industries/cleaning", label: "清掃業" },
      { href: "/industries/local-store", label: "地域店舗" },
    ],
  },
  {
    heading: "対応エリア",
    headingEn: "Area",
    links: [
      { href: "/area", label: "対応エリア一覧" },
      { href: "/area/tokyo", label: "東京都" },
      { href: "/area/katsushika", label: "葛飾区" },
      { href: "/area/chiba", label: "千葉県" },
      { href: "/area/saitama", label: "埼玉県" },
      { href: "/area/adachi", label: "足立区" },
      { href: "/area/edogawa", label: "江戸川区" },
      { href: "/area/sumida", label: "墨田区" },
      { href: "/area/kanagawa", label: "神奈川県" },
      { href: "/area/nationwide", label: "全国対応" },
    ],
  },
  {
    heading: "お悩み別",
    headingEn: "Problems",
    links: [
      { href: "/problems", label: "お悩み一覧" },
      { href: "/problems/no-inquiries", label: "問い合わせがゼロ" },
      { href: "/problems/google-not-showing", label: "Googleに表示されない" },
      { href: "/problems/losing-to-competitors", label: "競合に負けている" },
      { href: "/problems/website-old", label: "ホームページが古い" },
      { href: "/problems/map-ranking-low", label: "マップ順位が低い" },
      { href: "/problems/chatgpt-not-mentioned", label: "AIに名前が出ない" },
    ],
  },
  {
    heading: "目的別",
    headingEn: "Goals",
    links: [
      { href: "/goals", label: "目的別一覧" },
      { href: "/goals/increase-inquiries", label: "問い合わせを増やしたい" },
      { href: "/goals/google-top", label: "Google上位表示" },
      { href: "/goals/meo-top", label: "マップ上位を取りたい" },
      { href: "/goals/increase-reviews", label: "口コミを増やしたい" },
      { href: "/goals/ai-search-exposure", label: "AI検索に表示されたい" },
    ],
  },
  {
    heading: "組み合わせプラン",
    headingEn: "Solutions",
    links: [
      { href: "/solutions", label: "ソリューション一覧" },
      { href: "/solutions/meo-seo", label: "MEO×SEO統合対策" },
      { href: "/solutions/local-complete", label: "地域集客完全パッケージ" },
      { href: "/solutions/restaurant-marketing", label: "飲食店特化マーケティング" },
      { href: "/solutions/new-store-opening", label: "新規開店集客" },
    ],
  },
  {
    heading: "ガイド",
    headingEn: "Guide",
    links: [
      { href: "/guide", label: "ガイド一覧" },
      { href: "/guide/how-to-choose-meo-company", label: "MEO会社の選び方" },
      { href: "/guide/meo-vs-seo", label: "MEO vs SEO比較" },
      { href: "/guide/google-business-profile-setup", label: "GBP初期設定" },
      { href: "/guide/review-collection", label: "口コミ獲得ガイド" },
      { href: "/guide/aio-basics", label: "AIO対策入門" },
    ],
  },
  {
    heading: "用語集",
    headingEn: "Glossary",
    links: [
      { href: "/glossary", label: "用語集一覧" },
      { href: "/glossary/meo", label: "MEO" },
      { href: "/glossary/seo", label: "SEO" },
      { href: "/glossary/aio", label: "AIO" },
      { href: "/glossary/google-business-profile", label: "Googleビジネスプロフィール" },
      { href: "/glossary/e-e-a-t", label: "E-E-A-T" },
      { href: "/glossary/core-web-vitals", label: "Core Web Vitals" },
      { href: "/glossary/llms-txt", label: "llms.txt" },
    ],
  },
  {
    heading: "チェックリスト",
    headingEn: "Checklist",
    links: [
      { href: "/checklist", label: "チェックリスト一覧" },
      { href: "/checklist/meo", label: "MEOチェックリスト" },
      { href: "/checklist/seo", label: "SEOチェックリスト" },
      { href: "/checklist/gbp", label: "GBPチェックリスト" },
      { href: "/checklist/homepage", label: "HPチェックリスト" },
      { href: "/checklist/new-website", label: "新規公開前チェック" },
    ],
  },
  {
    heading: "費用・料金",
    headingEn: "Cost",
    links: [
      { href: "/cost", label: "費用・料金一覧" },
      { href: "/cost/meo", label: "MEO料金相場" },
      { href: "/cost/seo", label: "SEO料金相場" },
      { href: "/cost/homepage", label: "HP制作費用" },
      { href: "/cost/comparison", label: "費用比較" },
    ],
  },
  {
    heading: "ご利用の流れ",
    headingEn: "Process",
    links: [
      { href: "/process", label: "サービスの流れ" },
      { href: "/process/consultation", label: "無料相談" },
      { href: "/process/proposal", label: "ご提案" },
      { href: "/process/meo-launch", label: "MEO開始の流れ" },
      { href: "/process/reporting", label: "レポート報告" },
    ],
  },
  {
    heading: "サポート",
    headingEn: "Support",
    links: [
      { href: "/support", label: "サポート一覧" },
      { href: "/support/operation", label: "運用サポート" },
      { href: "/support/monthly-report", label: "月次レポート" },
      { href: "/support/consulting", label: "コンサルティング" },
    ],
  },
  {
    heading: "よくある質問",
    headingEn: "FAQ",
    links: [
      { href: "/faq", label: "FAQ一覧" },
      { href: "/faq/meo-basics", label: "MEO FAQ" },
      { href: "/faq/seo-basics", label: "SEO FAQ" },
      { href: "/faq/cost-payment", label: "料金 FAQ" },
      { href: "/faq/results", label: "成果・効果 FAQ" },
      { href: "/faq/contract-flow", label: "契約の流れ FAQ" },
    ],
  },
  {
    heading: "コラム",
    headingEn: "Column",
    links: [
      { href: "/column", label: "専門コラム一覧" },
      { href: "/column/meo-ranking-2024", label: "MEO対策完全ガイド" },
      { href: "/column/aio-chatgpt-strategy", label: "AIO対策実践戦略" },
      { href: "/column/seo-content-strategy", label: "コンテンツSEO" },
    ],
  },
  {
    heading: "ブログ",
    headingEn: "Blog",
    links: [
      { href: "/blog", label: "ブログ一覧" },
    ],
  },
  {
    heading: "採用情報",
    headingEn: "Recruit",
    links: [
      { href: "/recruit", label: "採用情報トップ" },
      { href: "/recruit/job-description", label: "募集要項" },
      { href: "/recruit/message", label: "代表メッセージ" },
      { href: "/recruit/remote-work", label: "リモートワーク制度" },
      { href: "/recruit/entry", label: "応募エントリー" },
    ],
  },
  {
    heading: "その他",
    headingEn: "Other",
    links: [
      { href: "/contact", label: "お問い合わせ" },
      { href: "/news", label: "お知らせ" },
      { href: "/privacy-policy", label: "プライバシーポリシー" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              サイトマップ
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Sitemap</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              サイトマップ
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px" }}>
              株式会社サイプレスの全ページ一覧です。
            </p>
          </div>
        </section>

        {/* Sitemap grid */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "48px" }}>
              {sections.map((section) => (
                <div key={section.heading}>
                  <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", fontSize: "10px", color: "#9ca3af", marginBottom: "8px" }}>
                    {section.headingEn}
                  </p>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "15px", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px", paddingBottom: "8px", borderBottom: "1px solid #ece8e0" }}>
                    {section.heading}
                  </h2>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {section.links.map((link) => (
                      <li key={link.href} style={{ marginBottom: "4px" }}>
                        <Link
                          href={link.href}
                          style={{ fontSize: "13px", color: "#374151", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", padding: "3px 0" }}
                        >
                          <span style={{ color: "#ece8e0", fontSize: "10px" }}>›</span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { MetadataRoute } from "next";
import { ALL_COLUMN_TOPICS } from "@/lib/data/column";
import { COLUMNS } from "@/lib/data/columns";
import { getAllCaseSlugs, getAllServiceSlugs, getAllIndustrySlugs } from "@/lib/data/caseStudies";
import { getAllPosts } from "@/lib/blog";

const BASE = "https://www.cypress-all.co.jp";

// ビルド時刻を毎回lastModifiedにすると、更新していないページまで
// 「今日更新した」とGoogleに伝えてしまい、鮮度シグナルの信頼性を損なう。
// サイト全体の基準日（このファイルを最後に手動更新した日）のみ固定値で使う。
const SITE_BASE_DATE = new Date("2026-07-10");

function urls(paths: string[], opts: Partial<MetadataRoute.Sitemap[0]> = {}): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${BASE}${p}`, lastModified: SITE_BASE_DATE, ...opts }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // トップ
    ...urls([""], { changeFrequency: "weekly", priority: 1.0 }),

    // 会社情報
    ...urls([
      "/company/about-cypress",
    ], { changeFrequency: "monthly", priority: 0.85 }),
    ...urls([
      "/company", "/company/message", "/company/philosophy", "/company/profile",
      "/company/history", "/company/value", "/company/support-policy", "/company/area",
    ], { changeFrequency: "monthly", priority: 0.7 }),

    // サービス
    ...urls([
      "/services",
    ], { changeFrequency: "monthly", priority: 0.9 }),
    ...urls([
      "/services/meo", "/services/seo", "/services/aio",
      "/services/web-design", "/services/sns", "/services/ai",
    ], { changeFrequency: "monthly", priority: 0.8 }),

    // SEO・MEO・AIO ハブページ（優先度高）
    ...urls([
      "/seo", "/meo", "/aio", "/web-design",
    ], { changeFrequency: "weekly", priority: 0.9 }),

    // SEO専門
    ...urls([
      "/seo/internal-seo", "/seo/content-seo", "/seo/technical-seo",
      "/seo/local-seo", "/seo/keyword-research", "/seo/blog-strategy",
      "/seo/page-speed", "/seo/mobile-seo", "/seo/search-console",
      "/seo/seo-audit", "/seo/seo-writing", "/seo/structured-data",
      "/seo/site-structure", "/seo/external-seo",
    ], { changeFrequency: "monthly", priority: 0.8 }),

    // MEO専門
    ...urls([
      "/meo/google-business-profile", "/meo/review-management",
      "/meo/ranking", "/meo/photo-posting", "/meo/meo-audit",
      "/meo/beauty-salon-meo", "/meo/category-setting", "/meo/clinic-meo",
      "/meo/construction-meo", "/meo/google-post", "/meo/local-keyword",
      "/meo/map-ranking", "/meo/nap", "/meo/restaurant-meo", "/meo/store-marketing",
    ], { changeFrequency: "monthly", priority: 0.8 }),

    // AIO専門
    ...urls([
      "/aio/chatgpt", "/aio/ai-overview", "/aio/structured-data",
      "/aio/llms-txt", "/aio/faq-optimization", "/aio/ai-search",
      "/aio/answer-engine-optimization", "/aio/entity-optimization",
      "/aio/generative-search", "/aio/knowledge-graph",
      "/aio/llm-optimization", "/aio/organization-data",
    ], { changeFrequency: "monthly", priority: 0.8 }),

    // AI活用
    ...urls([
      "/ai", "/ai/automation", "/ai/chatbot", "/ai/content", "/ai/workflow",
      "/ai/blog-automation", "/ai/customer-support", "/ai/internal-tools",
      "/ai/prompt-design", "/ai/sns-automation",
    ], { changeFrequency: "monthly", priority: 0.7 }),

    // Web制作
    ...urls([
      "/web-design/corporate-site", "/web-design/seo-site",
      "/web-design/nextjs", "/web-design/vercel", "/web-design/headless-wordpress",
      "/web-design/landing-page", "/web-design/mobile-friendly",
      "/web-design/page-speed", "/web-design/contact-form", "/web-design/maintenance",
      "/web-design/recruit-site", "/web-design/service-site", "/web-design/wordpress",
    ], { changeFrequency: "monthly", priority: 0.8 }),

    // SNS
    ...urls([
      "/sns", "/sns/instagram", "/sns/post-planning", "/sns/hashtag",
      "/sns/local-sns", "/sns/google-business-profile",
      "/sns/content-calendar", "/sns/photo-direction",
    ], { changeFrequency: "monthly", priority: 0.7 }),

    // 業種別
    ...urls([
      "/industries", "/industries/restaurant", "/industries/beauty",
      "/industries/clinic", "/industries/construction", "/industries/real-estate",
      "/industries/professional-service", "/industries/cleaning", "/industries/local-store",
      "/industries/hair-salon", "/industries/nail-salon", "/industries/pet-shop",
      "/industries/renovation", "/industries/plumbing", "/industries/school",
      "/industries/osteopathic",
    ], { changeFrequency: "monthly", priority: 0.7 }),

    // 業種 × サービス sub-pages
    ...urls([
      "/industries/restaurant/meo", "/industries/restaurant/sns", "/industries/restaurant/web-design",
      "/industries/restaurant/aio",
      "/industries/beauty/meo", "/industries/beauty/sns", "/industries/beauty/web-design",
      "/industries/clinic/meo", "/industries/clinic/web-design", "/industries/clinic/seo",
      "/industries/construction/meo", "/industries/construction/seo",
      "/industries/real-estate/meo", "/industries/real-estate/seo",
      "/industries/professional-service/meo", "/industries/professional-service/seo",
      "/industries/cleaning/meo", "/industries/cleaning/seo",
      "/industries/local-store/meo",
      "/industries/hair-salon/meo", "/industries/hair-salon/sns",
      "/industries/nail-salon/meo", "/industries/nail-salon/sns",
      "/industries/pet-shop/meo",
      "/industries/renovation/meo", "/industries/renovation/seo",
      "/industries/plumbing/meo",
      "/industries/school/meo", "/industries/school/web-design",
      "/industries/osteopathic/meo", "/industries/osteopathic/sns",
    ], { changeFrequency: "monthly", priority: 0.7 }),

    // 対応エリア
    ...urls([
      "/area", "/area/tokyo", "/area/katsushika", "/area/tokyo/katsushika", "/area/chiba",
      "/area/saitama", "/area/adachi", "/area/edogawa",
      "/area/sumida", "/area/kanagawa", "/area/nationwide",
      "/area/arakawa", "/area/koto", "/area/taito",
      "/area/kita", "/area/toshima",
    ], { changeFrequency: "monthly", priority: 0.7 }),

    // エリア × サービス sub-pages
    ...urls([
      "/area/tokyo/meo", "/area/tokyo/seo", "/area/tokyo/web-design", "/area/tokyo/aio",
      "/area/katsushika/meo", "/area/katsushika/seo", "/area/katsushika/web-design",
      "/area/katsushika/web-design-subsidy",
      "/area/katsushika/start-business",
      "/area/katsushika/startup-web-marketing",
      "/area/tokyo/katsushika/start-business",
      "/area/tokyo/katsushika/start-business-checklist",
      "/area/tokyo/katsushika/startup-funding",
      "/area/tokyo/katsushika/startup-web-marketing",
      "/area/tokyo/katsushika/startup-revenue-streams",
      "/area/tokyo/katsushika/web-design-subsidy",
      "/area/adachi/meo", "/area/adachi/seo", "/area/adachi/web-design",
      "/area/edogawa/meo", "/area/edogawa/seo",
      "/area/sumida/meo", "/area/sumida/seo",
      "/area/chiba/meo", "/area/chiba/seo",
      "/area/saitama/meo", "/area/saitama/seo",
      "/area/kanagawa/meo", "/area/kanagawa/seo",
      "/area/nationwide/meo", "/area/nationwide/seo", "/area/nationwide/web-design",
    ], { changeFrequency: "monthly", priority: 0.7 }),

    // ナレッジ
    ...urls([
      "/knowledge",
      "/knowledge/meo-vs-seo",
      "/knowledge/google-business-profile-setup",
      "/knowledge/meo-ranking-factors",
      "/knowledge/review-strategy",
      "/knowledge/seo-basics",
      "/knowledge/keyword-research",
      "/knowledge/content-seo",
      "/knowledge/technical-seo",
      "/knowledge/schema-markup",
      "/knowledge/aio-basics",
      "/knowledge/eeat",
      "/knowledge/website-speed",
      "/knowledge/internal-linking",
      "/knowledge/local-seo-guide",
      "/knowledge/gbp-posts",
      "/knowledge/sns-marketing-basics",
      "/knowledge/instagram-tips",
      "/knowledge/line-official",
      "/knowledge/web-design-guide",
      "/knowledge/ai-business",
      "/knowledge/meta-tags",
      "/knowledge/chatgpt-seo",
      "/knowledge/google-ads-vs-seo",
      "/knowledge/mobile-optimization",
    ], { changeFrequency: "monthly", priority: 0.8 }),

    // お悩み別
    ...urls([
      "/problems",
      "/problems/no-inquiries",
      "/problems/google-not-showing",
      "/problems/losing-to-competitors",
      "/problems/website-old",
      "/problems/sns-no-results",
      "/problems/no-reviews",
      "/problems/poor-seo-ranking",
      "/problems/no-repeat-customers",
      "/problems/no-online-presence",
      "/problems/expensive-ads",
      "/problems/chatgpt-not-mentioned",
      "/problems/map-ranking-low",
      "/problems/new-store-no-customers",
      "/problems/rebrand-needed",
      "/problems/outsource-marketing",
      "/problems/no-time-for-marketing",
      "/problems/dont-know-which-service",
      "/problems/website-not-found-local",
      "/problems/competitor-google-top",
      "/problems/content-not-converting",
    ], { changeFrequency: "monthly", priority: 0.7 }),

    // 目的別
    ...urls([
      "/goals",
      "/goals/increase-inquiries",
      "/goals/google-top",
      "/goals/meo-top",
      "/goals/increase-reviews",
      "/goals/new-customer-acquisition",
      "/goals/brand-awareness",
      "/goals/sns-followers",
      "/goals/ai-search-exposure",
      "/goals/homepage-redesign",
      "/goals/reduce-ad-cost",
      "/goals/website-conversion",
      "/goals/local-seo",
      "/goals/content-marketing",
      "/goals/automation",
      "/goals/regional-expansion",
      "/goals/improve-reputation",
      "/goals/total-digital-marketing",
    ], { changeFrequency: "monthly", priority: 0.7 }),

    // ソリューション
    ...urls([
      "/solutions",
      "/solutions/meo-seo",
      "/solutions/meo-sns",
      "/solutions/seo-content",
      "/solutions/web-design-seo",
      "/solutions/aio-seo",
      "/solutions/meo-web",
      "/solutions/local-complete",
      "/solutions/restaurant-marketing",
      "/solutions/beauty-marketing",
      "/solutions/clinic-marketing",
      "/solutions/corporate-seo",
      "/solutions/startup-web",
      "/solutions/real-estate-meo",
      "/solutions/construction-web",
      "/solutions/e-commerce-seo",
      "/solutions/ai-content",
      "/solutions/reputation-management",
      "/solutions/new-store-opening",
      "/solutions/full-outsource",
    ], { changeFrequency: "monthly", priority: 0.7 }),

    // ガイド
    ...urls([
      "/guide",
      "/guide/how-to-choose-meo-company",
      "/guide/how-to-choose-seo-company",
      "/guide/meo-vs-seo",
      "/guide/seo-vs-listing-ads",
      "/guide/google-business-profile-setup",
      "/guide/review-collection",
      "/guide/keyword-research-basics",
      "/guide/local-seo-basics",
      "/guide/homepage-cost-guide",
      "/guide/meo-cost-guide",
      "/guide/seo-cost-guide",
      "/guide/blog-seo-setup",
      "/guide/google-analytics-basics",
      "/guide/sns-for-local-business",
      "/guide/aio-basics",
      "/guide/chatgpt-seo-strategy",
      "/guide/schema-markup-guide",
      "/guide/mobile-seo-guide",
      "/guide/core-web-vitals-guide",
      "/guide/content-seo-basics",
      "/guide/competitor-analysis-method",
    ], { changeFrequency: "monthly", priority: 0.7 }),

    // 用語集
    ...urls([
      "/glossary",
      "/glossary/meo", "/glossary/gbp", "/glossary/local-pack",
      "/glossary/seo", "/glossary/e-e-a-t", "/glossary/core-web-vitals",
      "/glossary/aio", "/glossary/llms-txt", "/glossary/schema-org",
      "/glossary/cv-rate", "/glossary/cta", "/glossary/og-image",
      "/glossary/kpi", "/glossary/pdca", "/glossary/content-marketing",
      "/glossary/sns-marketing", "/glossary/google-ads",
      "/glossary/responsive-design", "/glossary/cms", "/glossary/lp",
      "/glossary/domain-authority", "/glossary/isr",
      "/glossary/meta-description", "/glossary/sitemap-xml",
      "/glossary/bounce-rate",
    ], { changeFrequency: "monthly", priority: 0.6 }),

    // チェックリスト
    ...urls([
      "/checklist",
      "/checklist/meo-setup", "/checklist/meo-monthly",
      "/checklist/seo-basics", "/checklist/content-seo",
      "/checklist/website-launch", "/checklist/sns-account-setup",
      "/checklist/review-management", "/checklist/gbp-photo",
      "/checklist/website-speed", "/checklist/new-store",
      "/checklist/annual-seo", "/checklist/aio-readiness",
      "/checklist/sns-monthly", "/checklist/contact-form",
      "/checklist/local-seo", "/checklist/reputation",
      "/checklist/website-redesign", "/checklist/analytics-confirmation",
    ], { changeFrequency: "monthly", priority: 0.6 }),

    // 料金パッケージ
    ...urls([
      "/pricing/web-growth-package",
    ], { changeFrequency: "monthly", priority: 0.8 }),

    // 費用・料金
    ...urls([
      "/cost",
      "/cost/meo", "/cost/seo", "/cost/homepage", "/cost/lp",
      "/cost/corporate-site", "/cost/sns", "/cost/aio",
      "/cost/content-writing", "/cost/web-maintenance",
      "/cost/comparison", "/cost/small-business",
      "/cost/monthly-breakdown", "/cost/free-consultation",
      "/cost/ai-cost-reduction", "/cost/total-package",
    ], { changeFrequency: "monthly", priority: 0.8 }),

    // ご利用の流れ
    ...urls([
      "/process",
      "/process/consultation", "/process/proposal", "/process/contract",
      "/process/onboarding", "/process/meo-launch", "/process/seo-launch",
      "/process/website-production", "/process/reporting",
      "/process/review-cycle", "/process/improvement",
      "/process/expansion", "/process/handover",
    ], { changeFrequency: "monthly", priority: 0.6 }),

    // サポート
    ...urls([
      "/support",
      "/support/operation", "/support/reporting",
      "/support/consulting", "/support/troubleshooting",
      "/support/training", "/support/handover",
      "/support/audit", "/support/account-management",
      "/support/content-creation", "/support/analytics-setup",
    ], { changeFrequency: "monthly", priority: 0.6 }),

    // FAQ
    ...urls([
      "/faq",
      "/faq/meo-basics", "/faq/seo-basics", "/faq/web-design-basics",
      "/faq/sns-marketing", "/faq/aio-chatgpt", "/faq/cost-payment",
      "/faq/contract-flow", "/faq/results", "/faq/security-privacy",
      "/faq/local-business", "/faq/industry-specific",
      "/faq/comparison", "/faq/ai-tools",
    ], { changeFrequency: "monthly", priority: 0.7 }),

    // 成功事例
    ...urls(["/cases"], { changeFrequency: "weekly", priority: 0.9 }),
    ...urls(
      getAllServiceSlugs().map((s) => `/cases/service/${s}`),
      { changeFrequency: "monthly", priority: 0.8 }
    ),
    ...urls(
      getAllIndustrySlugs().map((s) => `/cases/industry/${s}`),
      { changeFrequency: "monthly", priority: 0.8 }
    ),
    ...urls(
      getAllCaseSlugs().map((slug) => `/cases/${slug}`),
      { changeFrequency: "monthly", priority: 0.75 }
    ),

    // コラムカテゴリページ
    ...urls([
      "/column/category/seo",
      "/column/category/meo",
      "/column/category/aio",
      "/column/category/web-design",
      "/column/category/industries",
      "/column/category/local-seo",
      "/column/category/case-study",
      "/column/category/sns",
      "/column/category/search-console",
      "/column/category/web-marketing",
      "/column/category/training",
    ], { changeFrequency: "weekly", priority: 0.85 }),

    // コラム専門ガイド（トピックページ）— 各記事の実際の公開日・更新日を反映
    ...ALL_COLUMN_TOPICS.map((t) => ({
      url: `${BASE}/column/${t.slug}`,
      lastModified: new Date(t.updatedAt ?? t.publishedAt ?? SITE_BASE_DATE),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // コラム記事（薄い記事）
    ...urls(
      ["/column", ...COLUMNS.map((c) => `/column/${c.slug}`)],
      { changeFrequency: "weekly", priority: 0.7 }
    ),

    // ブログ index・カテゴリページ
    ...urls([
      "/blog",
      "/blog/category/meo", "/blog/category/seo",
      "/blog/category/aio", "/blog/category/web-design",
      "/blog/category/sns", "/blog/category/ai",
    ], { changeFrequency: "daily", priority: 0.7 }),

    // ブログ個別記事（日次cronで自動追加される記事を含む。実際の公開日を反映）
    ...getAllPosts().map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(p.date || SITE_BASE_DATE),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),

    // 採用
    ...urls([
      "/recruit", "/recruit/sales",
    ], { changeFrequency: "monthly", priority: 0.8 }),

    // パートナー・代理店
    ...urls([
      "/agent", "/agent/web-design", "/agent/meo", "/agent/seo", "/agent/aio", "/agent/faq",
      "/partner", "/partner/referral", "/partner/local-sales-agent", "/partner/katsushika-startup",
      "/partner/training-company-referral",
    ], { changeFrequency: "monthly", priority: 0.8 }),

    // リスキリング研修・人材開発支援助成金（中心ページを最優先）
    ...urls([
      "/training/reskilling-subsidy",
    ], { changeFrequency: "weekly", priority: 0.9 }),
    ...urls([
      "/training/ai-dx-reskilling", "/training/chatgpt-ai-training",
      "/training/web-marketing-training", "/training/hr-development-subsidy-guide",
      "/training/reskilling-training-company-referral",
    ], { changeFrequency: "monthly", priority: 0.85 }),

    // その他
    ...urls([
      "/contact", "/news", "/sitemap", "/privacy-policy",
    ], { changeFrequency: "monthly", priority: 0.5 }),
  ];
}

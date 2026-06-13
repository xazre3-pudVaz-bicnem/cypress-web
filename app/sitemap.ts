import type { MetadataRoute } from "next";

const BASE = "https://cypress-web.com";

function urls(paths: string[], opts: Partial<MetadataRoute.Sitemap[0]> = {}): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${BASE}${p}`, lastModified: new Date(), ...opts }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // トップ
    ...urls([""], { changeFrequency: "weekly", priority: 1.0 }),

    // 会社情報
    ...urls([
      "/company", "/company/message", "/company/philosophy", "/company/profile",
      "/company/history", "/company/value", "/company/support-policy", "/company/area",
    ], { changeFrequency: "monthly", priority: 0.7 }),

    // サービス
    ...urls([
      "/services/meo", "/services/seo", "/services/aio",
      "/services/web-design", "/services/sns", "/services/ai",
    ], { changeFrequency: "monthly", priority: 0.8 }),

    // SEO専門
    ...urls([
      "/seo", "/seo/internal-seo", "/seo/content-seo", "/seo/technical-seo",
      "/seo/local-seo", "/seo/keyword-research", "/seo/blog-strategy",
      "/seo/e-e-a-t", "/seo/link-building", "/seo/schema-markup",
      "/seo/page-speed", "/seo/mobile-seo", "/seo/seo-analysis",
      "/seo/competitor-analysis", "/seo/ai-seo",
    ], { changeFrequency: "monthly", priority: 0.8 }),

    // MEO専門
    ...urls([
      "/meo", "/meo/google-business-profile", "/meo/review-management",
      "/meo/ranking", "/meo/photo-posting", "/meo/meo-audit",
      "/meo/local-pack", "/meo/map-seo", "/meo/competitor-meo",
      "/meo/multi-location", "/meo/gbp-post", "/meo/qa-management",
    ], { changeFrequency: "monthly", priority: 0.8 }),

    // AIO専門
    ...urls([
      "/aio", "/aio/chatgpt", "/aio/ai-overview", "/aio/structured-data",
      "/aio/llms-txt", "/aio/faq-optimization", "/aio/e-e-a-t",
      "/aio/author-info", "/aio/perplexity", "/aio/gemini",
    ], { changeFrequency: "monthly", priority: 0.8 }),

    // AI活用
    ...urls([
      "/ai", "/ai/automation", "/ai/chatgpt-business", "/ai/content-generation",
      "/ai/seo-tools", "/ai/workflow",
    ], { changeFrequency: "monthly", priority: 0.7 }),

    // Web制作
    ...urls([
      "/web-design", "/web-design/corporate-site", "/web-design/seo-site",
      "/web-design/nextjs", "/web-design/vercel", "/web-design/headless-wordpress",
      "/web-design/landing-page", "/web-design/mobile-friendly",
      "/web-design/page-speed", "/web-design/contact-form", "/web-design/maintenance",
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
    ], { changeFrequency: "monthly", priority: 0.7 }),

    // 業種 × サービス sub-pages
    ...urls([
      "/industries/restaurant/meo", "/industries/restaurant/sns", "/industries/restaurant/web-design",
      "/industries/beauty/meo", "/industries/beauty/sns",
      "/industries/clinic/meo", "/industries/clinic/web-design",
      "/industries/construction/meo", "/industries/construction/seo",
      "/industries/real-estate/meo", "/industries/real-estate/seo",
      "/industries/professional-service/meo", "/industries/professional-service/seo",
      "/industries/cleaning/meo",
      "/industries/local-store/meo",
    ], { changeFrequency: "monthly", priority: 0.7 }),

    // 対応エリア
    ...urls([
      "/area", "/area/tokyo", "/area/katsushika", "/area/chiba",
      "/area/saitama", "/area/adachi", "/area/edogawa",
      "/area/sumida", "/area/kanagawa", "/area/nationwide",
    ], { changeFrequency: "monthly", priority: 0.7 }),

    // エリア × サービス sub-pages
    ...urls([
      "/area/tokyo/meo", "/area/tokyo/seo",
      "/area/katsushika/meo", "/area/katsushika/seo", "/area/katsushika/web-design",
      "/area/adachi/meo",
      "/area/edogawa/meo",
      "/area/sumida/meo",
      "/area/chiba/meo",
      "/area/saitama/meo",
      "/area/kanagawa/meo",
      "/area/nationwide/meo",
    ], { changeFrequency: "monthly", priority: 0.7 }),

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
      "/glossary/meo", "/glossary/seo", "/glossary/aio",
      "/glossary/google-business-profile", "/glossary/keyword",
      "/glossary/organic-search", "/glossary/serp",
      "/glossary/core-web-vitals", "/glossary/e-e-a-t",
      "/glossary/structured-data", "/glossary/local-seo",
      "/glossary/content-marketing", "/glossary/backlink",
      "/glossary/meta-tag", "/glossary/canonical",
      "/glossary/llms-txt", "/glossary/ai-overview",
      "/glossary/chatgpt", "/glossary/perplexity",
      "/glossary/knowledge-panel", "/glossary/google-maps",
      "/glossary/review-management", "/glossary/ctr",
      "/glossary/conversion", "/glossary/mobile-first",
      "/glossary/page-speed", "/glossary/sitemap-xml",
      "/glossary/robots-txt", "/glossary/internal-link",
    ], { changeFrequency: "monthly", priority: 0.6 }),

    // チェックリスト
    ...urls([
      "/checklist",
      "/checklist/meo", "/checklist/seo", "/checklist/gbp",
      "/checklist/homepage", "/checklist/core-web-vitals",
      "/checklist/mobile", "/checklist/content", "/checklist/schema",
      "/checklist/local-seo", "/checklist/sns", "/checklist/review",
      "/checklist/contact-form", "/checklist/new-website",
      "/checklist/website-redesign", "/checklist/aio",
      "/checklist/analytics", "/checklist/competitor",
      "/checklist/keyword", "/checklist/annual-seo",
      "/checklist/restaurant-meo",
    ], { changeFrequency: "monthly", priority: 0.6 }),

    // 費用・料金
    ...urls([
      "/cost",
      "/cost/meo", "/cost/seo", "/cost/homepage", "/cost/lp",
      "/cost/corporate-site", "/cost/sns", "/cost/aio",
      "/cost/content-writing", "/cost/web-maintenance",
      "/cost/comparison", "/cost/small-business",
      "/cost/monthly-breakdown", "/cost/free-consultation",
      "/cost/ai-cost-reduction", "/cost/total-package",
    ], { changeFrequency: "monthly", priority: 0.7 }),

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
      "/support/operation", "/support/monthly-report",
      "/support/consulting", "/support/training", "/support/tools",
      "/support/emergency", "/support/analytics",
      "/support/content-support", "/support/handover", "/support/annual-plan",
    ], { changeFrequency: "monthly", priority: 0.6 }),

    // FAQ
    ...urls([
      "/faq",
      "/faq/meo", "/faq/seo", "/faq/aio", "/faq/homepage",
      "/faq/sns", "/faq/cost", "/faq/contract", "/faq/results",
      "/faq/reporting", "/faq/ai", "/faq/local-business",
      "/faq/beginner", "/faq/compare",
    ], { changeFrequency: "monthly", priority: 0.7 }),

    // コラム
    ...urls([
      "/column",
      "/column/meo-ranking-2024", "/column/aio-chatgpt-strategy",
      "/column/seo-content-strategy", "/column/local-seo-complete-guide",
      "/column/gbp-optimization-tips", "/column/review-strategy-2024",
      "/column/mobile-first-design-guide", "/column/chatgpt-business-use",
      "/column/nextjs-seo-advantage", "/column/schema-markup-complete",
      "/column/core-web-vitals-2024", "/column/sns-local-business-strategy",
      "/column/ai-overview-impact", "/column/gbp-photo-guide",
      "/column/keyword-strategy-guide", "/column/instagram-for-restaurant",
      "/column/web-design-cv-improvement", "/column/meo-seo-combination",
      "/column/content-creation-ai", "/column/small-business-web-marketing",
    ], { changeFrequency: "weekly", priority: 0.7 }),

    // ブログ (index + category pages — individual posts handled by WP)
    ...urls([
      "/blog",
      "/blog/category/meo", "/blog/category/seo",
      "/blog/category/aio", "/blog/category/web-design",
      "/blog/category/sns", "/blog/category/ai",
    ], { changeFrequency: "daily", priority: 0.7 }),

    // 採用
    ...urls([
      "/recruit", "/recruit/entry", "/recruit/message",
      "/recruit/job-description", "/recruit/remote-work",
    ], { changeFrequency: "monthly", priority: 0.7 }),

    // その他
    ...urls([
      "/contact", "/news", "/sitemap", "/privacy-policy",
    ], { changeFrequency: "monthly", priority: 0.5 }),
  ];
}

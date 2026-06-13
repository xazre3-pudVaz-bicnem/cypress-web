import type { MetadataRoute } from "next";

const BASE = "https://cypress-marketing.co.jp";

const staticPages: MetadataRoute.Sitemap = [
  // トップ
  { url: BASE, changeFrequency: "weekly", priority: 1.0 },

  // 会社情報
  { url: `${BASE}/company`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/company/message`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/company/philosophy`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/company/profile`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/company/history`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/company/value`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/company/support-policy`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/company/security-policy`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/company/area`, changeFrequency: "monthly", priority: 0.6 },

  // 事業内容
  { url: `${BASE}/business`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/business/web-marketing`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/business/local-marketing`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/business/ai-marketing`, changeFrequency: "monthly", priority: 0.7 },

  // サービス
  { url: `${BASE}/services`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE}/services/meo`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/services/seo`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/services/aio`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/services/web-design`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/services/sns`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/services/ai`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/services/consulting`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/services/maintenance`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/services/content-writing`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/services/reputation-management`, changeFrequency: "monthly", priority: 0.6 },

  // SEO専門
  { url: `${BASE}/seo`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE}/seo/internal-seo`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/seo/content-seo`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/seo/technical-seo`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/seo/local-seo`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/seo/external-seo`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/seo/keyword-research`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/seo/site-structure`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/seo/blog-strategy`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/seo/structured-data`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/seo/page-speed`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/seo/mobile-seo`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/seo/seo-audit`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/seo/search-console`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/seo/seo-writing`, changeFrequency: "monthly", priority: 0.6 },

  // MEO専門
  { url: `${BASE}/meo`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE}/meo/google-business-profile`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/meo/review-management`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/meo/ranking`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/meo/store-marketing`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/meo/local-keyword`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/meo/photo-posting`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/meo/google-post`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/meo/category-setting`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/meo/nap`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/meo/meo-audit`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/meo/map-ranking`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/meo/restaurant-meo`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/meo/beauty-salon-meo`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/meo/clinic-meo`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/meo/construction-meo`, changeFrequency: "monthly", priority: 0.7 },

  // AIO専門
  { url: `${BASE}/aio`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE}/aio/chatgpt`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/aio/generative-search`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/aio/llm-optimization`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/aio/ai-search`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/aio/structured-data`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/aio/faq-optimization`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/aio/entity-optimization`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/aio/organization-data`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/aio/ai-overview`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/aio/llms-txt`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/aio/knowledge-graph`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/aio/answer-engine-optimization`, changeFrequency: "monthly", priority: 0.7 },

  // AI活用
  { url: `${BASE}/ai`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/ai/automation`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/ai/chatbot`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/ai/content`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/ai/workflow`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/ai/blog-automation`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/ai/sns-automation`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/ai/customer-support`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/ai/internal-tools`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/ai/prompt-design`, changeFrequency: "monthly", priority: 0.6 },

  // Web制作
  { url: `${BASE}/web-design`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/web-design/corporate-site`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/web-design/recruit-site`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/web-design/service-site`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/web-design/seo-site`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/web-design/wordpress`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/web-design/nextjs`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/web-design/vercel`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/web-design/headless-wordpress`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/web-design/landing-page`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/web-design/mobile-friendly`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/web-design/page-speed`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/web-design/contact-form`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/web-design/maintenance`, changeFrequency: "monthly", priority: 0.6 },

  // SNS
  { url: `${BASE}/sns`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/sns/instagram`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/sns/google-business-profile`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/sns/post-planning`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/sns/hashtag`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/sns/local-sns`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/sns/content-calendar`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/sns/photo-direction`, changeFrequency: "monthly", priority: 0.5 },

  // 採用
  { url: `${BASE}/recruit`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/recruit/sales`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/recruit/marketing`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/recruit/environment`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/recruit/career`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/recruit/faq`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/recruit/entry`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/recruit/message`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/recruit/job-description`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/recruit/remote-work`, changeFrequency: "monthly", priority: 0.6 },

  // 業種別
  { url: `${BASE}/industries`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/industries/restaurant`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/industries/beauty`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/industries/clinic`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/industries/construction`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/industries/real-estate`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/industries/professional-service`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/industries/cleaning`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/industries/recruitment`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/industries/local-store`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/industries/ec`, changeFrequency: "monthly", priority: 0.6 },

  // 地域
  { url: `${BASE}/area`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/area/tokyo`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/area/katsushika`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/area/adachi`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/area/edogawa`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/area/sumida`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/area/chiba`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/area/saitama`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/area/kanagawa`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/area/nationwide`, changeFrequency: "monthly", priority: 0.6 },

  // コラム・ニュース
  { url: `${BASE}/column`, changeFrequency: "weekly", priority: 0.7 },
  { url: `${BASE}/news`, changeFrequency: "weekly", priority: 0.6 },

  // お問い合わせ
  { url: `${BASE}/contact`, changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPages.map((page) => ({
    ...page,
    lastModified: new Date(),
  }));
}

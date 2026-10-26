import type { MetadataRoute } from "next";

// /robots.txt はこのファイルだけで出す（public/robots.txt は置かない。置いても使われず二重管理になる）。
// /_next/ は塞がない。ページの描画に必要な JS・CSS と、最適化した画像（/_next/image）が入っており、
// 塞ぐと Google がページを正しく描画できず、画像もインデックスされない。
// AI 検索のクローラー（GPTBot・ClaudeBot・PerplexityBot・Google-Extended など）も "*" の許可に含まれる。
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin"],
      },
    ],
    sitemap: "https://www.cypress-all.co.jp/sitemap.xml",
    host: "https://www.cypress-all.co.jp",
  };
}

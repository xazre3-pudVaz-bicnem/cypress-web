import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://www.cypress-all.co.jp/sitemap.xml",
    host: "https://www.cypress-all.co.jp",
  };
}

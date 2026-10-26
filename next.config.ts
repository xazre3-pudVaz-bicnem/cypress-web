import fs from "fs";
import path from "path";
import type { NextConfig } from "next";
import { CONSOLIDATED_PAGES, REMOVED_PRICING_PAGES } from "./lib/data/consolidatedPages";

/**
 * 同じテーマで繰り返し生成されていたブログ記事（content/blog-archive/ に退避）を、
 * まとめ先の元の記事（日付なしの URL）へ恒久的に転送する。評価を1本に集め、重複ページを無くすため。
 * ファイル名は「YYYY-MM-DD-<元のslug>-YYYYMMDD.md」。
 */
function blogArchiveRedirects() {
  const dir = path.join(process.cwd(), "content/blog-archive");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
      return { source: `/blog/${slug}`, destination: `/blog/${slug.replace(/-20\d{6}$/, "")}`, permanent: true };
    });
}

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...blogArchiveRedirects(),
      // 検索意図が同じで評価を食い合っていたページは、残した側へ恒久的に転送する
      ...Object.entries(CONSOLIDATED_PAGES).map(([source, destination]) => ({ source, destination, permanent: true })),
      // 料金を載せていたページは削除したので、内容の近いページへ恒久的に転送する
      ...Object.entries(REMOVED_PRICING_PAGES).map(([source, destination]) => ({ source, destination, permanent: true })),
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "wp.cypress-all.co.jp",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
      },
    ],
  },
  async headers() {
    return [
      {
        // public/ 配下の静的ファイルは既定で max-age=0 になり、
        // 2.8MBのヒーロー動画を再訪のたびに再検証してしまうためキャッシュを効かせる。
        // ファイル名にハッシュが付かないため immutable は使わず、
        // 差し替え時は hero-loop-v2.mp4 のようにリネームすること。
        source: "/hero-loop.mp4",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

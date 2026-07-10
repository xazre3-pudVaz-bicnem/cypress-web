import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

import type { Metadata } from "next";

// 社内向けの管理画面。検索結果にもAI検索にも出さない（robots.ts でもクロールを拒否している）。
export const metadata: Metadata = {
  title: "チャット管理｜株式会社サイプレス",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-dvh bg-[#F9F8F5] text-[#1a2332]">{children}</div>;
}

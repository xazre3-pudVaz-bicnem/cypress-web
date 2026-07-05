import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "専門コラム一覧｜MEO・SEO・AIO・Web制作の実践ノウハウ｜株式会社サイプレス",
  description:
    "MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用の専門コラム一覧。東京葛飾区のWebマーケティング会社サイプレスが、中小企業のWeb集客に役立つ実践ノウハウを解説します。",
  alternates: { canonical: "https://www.cypress-all.co.jp/column" },
};

export default function ColumnLayout({ children }: { children: React.ReactNode }) {
  return children;
}

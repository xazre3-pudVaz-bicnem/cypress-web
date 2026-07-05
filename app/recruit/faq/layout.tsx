import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "採用FAQ｜よくある質問｜株式会社サイプレス採用情報",
  description:
    "株式会社サイプレスの採用に関するよくある質問。未経験応募・リモートワーク・選考フロー・働き方・待遇について、応募前の疑問にお答えします。",
  alternates: { canonical: "https://www.cypress-all.co.jp/recruit/faq" },
};

export default function RecruitFaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}

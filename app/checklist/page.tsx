import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import { checklistPages } from "@/lib/data/checklistPages";

export const metadata: Metadata = {
  title: "Webマーケティング チェックリスト一覧｜MEO・SEO・SNS・ホームページ｜株式会社サイプレス",
  description: "MEO初期設定・SEO対策・SNS運用・ホームページ公開前・AIO対策など、Webマーケティングのチェックリストを多数公開しています。",
};

export default function ChecklistPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              チェックリスト
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Checklist</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              Webマーケティング<br />チェックリスト
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              MEO対策・SEO対策・SNS運用・ホームページ公開・AIO対策の各場面で確認すべき項目をまとめたチェックリストです。施策の漏れを防ぎ、確実に成果につなげてください。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "#ece8e0" }}>
              {checklistPages.map((page) => {
                const totalItems = page.sections.reduce((acc, s) => acc + s.items.length, 0);
                return (
                  <Link
                    key={page.slug}
                    href={`/checklist/${page.slug}`}
                    style={{ background: "#ffffff", padding: "28px", textDecoration: "none", display: "block" }}
                  >
                    <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", fontSize: "10px", color: "#9ca3af", marginBottom: "8px" }}>
                      {page.titleEn}
                    </p>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px", lineHeight: 1.4 }}>
                      {page.title}
                    </p>
                    <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px" }}>
                      {totalItems}項目のチェック
                    </p>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>
                      {page.intro.slice(0, 55)}...
                    </p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "12px", fontSize: "12px", color: "#9ca3af" }}>
                      チェックリストを見る
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <PageContactCTA
          heading="自社の状況を診断してほしい方は"
          body="チェックリストで気になる項目があればお気軽にご相談ください。専門家が状況を診断して改善策をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}

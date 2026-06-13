import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "全国対応｜SEO対策・AIO対策・Web制作は日本全国リモート対応",
  description: "株式会社サイプレスはSEO対策・AIO対策・AI活用支援・Web制作を全国リモートで対応。Zoom・Google Meetでのオンライン相談・ご提案・納品まで完全対応。",
};

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全エリア" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都の集客支援" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索対策" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area">対応エリア</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              全国対応
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Nationwide</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              全国対応｜SEO・AIO・Web制作のリモート支援
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              株式会社サイプレスのSEO対策・AIO対策・AI活用支援・Web制作はオンラインで完全対応可能です。北海道から沖縄まで、日本全国どこからでもご依頼いただけます。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Remote Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              全国対応のサービスフロー
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "オンライン初回相談（Zoom / Google Meet）", b: "まずはZoom・Google Meetでの30〜60分の初回相談から始まります。現状のWeb集客の課題・目標・予算をヒアリングし、最適な施策をご提案します。全国どこからでも参加いただけます。" },
                { n: "02", t: "オンラインでのご提案・お見積もり", b: "ヒアリング内容をもとに施策内容・スケジュール・費用のご提案書を作成し、オンラインまたはメールでご説明します。ご質問・修正にも丁寧に対応します。" },
                { n: "03", t: "リモートでの施策実行・制作", b: "SEO対策・コンテンツ制作・Web制作・AIO対策など、施策実行はすべてリモートで完結します。進捗はプロジェクト管理ツール・メール・Zoomで定期報告します。" },
                { n: "04", t: "オンラインでの納品・レポーティング", b: "制作物の確認・納品・月次レポートもすべてオンラインで対応します。修正対応・追加施策のご相談もリモートで迅速に対応します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="全国どこからでもご相談ください" body="SEO対策・AIO対策・AI活用支援・Web制作は全国リモート対応です。まずはZoomでの無料相談から始めましょう。お気軽にお問い合わせください。" />
      </main>
      <Footer />
    </>
  );
}

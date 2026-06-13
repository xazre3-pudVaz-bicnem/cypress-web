import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "墨田区のSEO対策・MEO対策・ホームページ制作",
  description: "墨田区のSEO対策・MEO対策・ホームページ制作。錦糸町・押上・向島エリアの中小企業・店舗のWeb集客を葛飾区拠点の株式会社サイプレスが支援。",
};

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全エリア" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区（拠点）" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都全域" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
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
              墨田区
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Sumida</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              墨田区のSEO・MEO対策・ホームページ制作
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              東京スカイツリーを擁する墨田区（錦糸町・押上・向島エリア）の中小企業・店舗のSEO対策・MEO対策・ホームページ制作を支援します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_14_54.png" alt="墨田区のSEO・MEO対策" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              墨田区での対応サービス
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "錦糸町・押上・向島のMEO対策", b: "「錦糸町 居酒屋」「押上 カフェ」「向島 整体」など墨田区各エリアの地域検索でGoogleマップ上位表示を目指します。葛飾区隣接のため訪問相談・打ち合わせにも迅速に対応できます。" },
                { n: "02", t: "墨田区の中小企業向けSEO・ホームページ制作", b: "墨田区内の飲食店・サービス業・各種店舗のSEO対策・ホームページ制作を行います。地域密着で丁寧な集客支援を提供します。" },
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
        <PageContactCTA heading="墨田区のWeb集客ご相談" body="錦糸町・押上・向島エリアのSEO対策・MEO対策・ホームページ制作をご相談ください。葛飾区隣接のため訪問対応も迅速です。" />
      </main>
      <Footer />
    </>
  );
}

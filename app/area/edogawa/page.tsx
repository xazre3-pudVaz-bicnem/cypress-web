import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "江戸川区のSEO対策・MEO対策・ホームページ制作",
  description: "江戸川区のSEO対策・MEO対策・ホームページ制作。小岩・葛西・篠崎・西葛西エリアの中小企業・店舗のWeb集客を葛飾区拠点の株式会社サイプレスが支援。",
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
              江戸川区
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Edogawa</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              江戸川区のSEO・MEO対策・ホームページ制作
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              葛飾区に隣接する江戸川区（小岩・葛西・篠崎・西葛西エリア）の中小企業・店舗のSEO対策・MEO対策・ホームページ制作を支援します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_12_19.png" alt="江戸川区のSEO・MEO対策" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              江戸川区での対応サービス
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "小岩・葛西・西葛西のMEO対策", b: "「小岩 居酒屋」「葛西 美容室」「西葛西 歯科」「篠崎 整骨院」など江戸川区各エリアの地域検索でGoogleマップ上位表示を目指します。訪問相談にも迅速に対応できます。" },
                { n: "02", t: "江戸川区の中小企業向けSEO・ホームページ制作", b: "江戸川区内の各業種に対応したSEO対策・ホームページ制作を行います。葛飾区に隣接しているため、地域密着での集客支援を提供できます。" },
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
        <PageContactCTA heading="江戸川区のWeb集客ご相談" body="小岩・葛西・西葛西・篠崎エリアのSEO対策・MEO対策・ホームページ制作をご相談ください。葛飾区隣接のため訪問対応も迅速です。" />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "神奈川県のSEO対策・MEO対策・Web制作｜横浜・川崎・相模原の中小企業支援",
  description: "神奈川県のSEO対策・MEO対策・ホームページ制作。横浜市・川崎市・相模原市の中小企業・店舗のWeb集客をオンラインで支援する株式会社サイプレス。",
};

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全エリア" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都全域" },
  { href: "/area/nationwide", label: "全国対応", desc: "リモートで全国対応" },
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
              神奈川県
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Kanagawa</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              神奈川県のSEO・MEO対策・Web制作
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              神奈川県（横浜市・川崎市・相模原市）の中小企業・店舗のSEO対策・MEO対策・ホームページ制作をオンラインで支援します。Zoom・Google Meetでの相談・ご提案・納品まで完全対応します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="神奈川県のSEO・MEO対策" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              神奈川県での対応サービス
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "横浜・川崎・相模原のMEO対策", b: "「横浜市 美容室」「川崎 居酒屋」「相模原 歯科」など神奈川県各エリアの地域検索でGoogleマップ上位表示を目指します。オンラインでの完全リモート対応で全施策を実施します。" },
                { n: "02", t: "神奈川県の中小企業向けSEO対策", b: "神奈川県内の地域特性を活かしたローカルSEO戦略を設計します。横浜・川崎など競合の多いエリアでも成果を出せるキーワード戦略を立案します。" },
                { n: "03", t: "神奈川県でのホームページ・LP制作（オンライン対応）", b: "神奈川県内の各業種に対応したホームページ・LP制作をオンラインで完結します。打ち合わせから納品まですべてZoom・メールで対応できます。" },
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
        <PageContactCTA heading="神奈川県のWeb集客ご相談" body="横浜市・川崎市・相模原市のSEO対策・MEO対策・ホームページ制作をご相談ください。オンライン（Zoom）でのご相談に完全対応しています。" />
      </main>
      <Footer />
    </>
  );
}

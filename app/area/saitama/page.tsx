import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "埼玉県のSEO対策・MEO対策・Web制作｜さいたま・川口・草加の中小企業支援",
  description: "埼玉県のSEO対策・MEO対策・ホームページ制作。さいたま市・川口市・草加市・越谷市の中小企業・店舗のWeb集客を葛飾区拠点の株式会社サイプレスが支援。",
};

const faqItems = [
  { q: "埼玉県での対面相談は可能ですか？", a: "はい。葛飾区に近い川口市・草加市・越谷市への訪問相談に対応しています。さいたま市はオンライン（Zoom）でのご相談が基本ですが、ご要望に応じて対応します。" },
  { q: "埼玉県のSEO・MEO対策に対応していますか？", a: "はい。川口・草加・越谷・さいたまなど埼玉県各エリアのSEO対策・MEO対策に対応しています。地域名+業種キーワードでの地域SEO・Googleマップ対策を実施します。" },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全エリア" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都の集客支援" },
  { href: "/area/chiba", label: "千葉県", desc: "千葉県の集客支援" },
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
              埼玉県
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Saitama</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              埼玉県のSEO・MEO対策・Web制作
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              東京都葛飾区に隣接する埼玉県（川口市・草加市・越谷市・さいたま市など）の中小企業・店舗のSEO対策・MEO対策・ホームページ制作を支援します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_10_29.png" alt="埼玉県のSEO・MEO対策" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.18)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Local Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              埼玉県での対応サービス
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "川口・草加・越谷のMEO対策", b: "「川口市 美容室」「草加 居酒屋」「越谷 歯科」など埼玉県各エリアの地域検索でGoogleマップ上位表示を目指します。Googleビジネスプロフィールの完全最適化から口コミ増加まで対応します。" },
                { n: "02", t: "埼玉県の中小企業向けSEO対策", b: "埼玉県内の地域特性を活かしたローカルSEO戦略を設計します。さいたま市・川口市など競合の多いエリアでも成果を出せるキーワード戦略を立案します。" },
                { n: "03", t: "埼玉県でのホームページ・LP制作", b: "埼玉県内の各業種に対応したホームページ・ランディングページ制作を行います。SEO対応・高速表示・スマートフォン最適化のサイトをNext.jsで制作します。" },
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

        <FaqSection items={faqItems} bgColor="#f8f6f2" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="埼玉県のWeb集客ご相談" body="川口市・草加市・越谷市・さいたま市のSEO対策・MEO対策・ホームページ制作をご相談ください。オンライン・訪問いずれも対応しています。" />
      </main>
      <Footer />
    </>
  );
}

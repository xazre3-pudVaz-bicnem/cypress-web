import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "千葉県のSEO対策・MEO対策・Web制作｜市川・松戸・船橋・柏の中小企業支援",
  description: "千葉県のSEO対策・MEO対策・ホームページ制作。市川市・松戸市・船橋市・柏市・千葉市の中小企業・個人事業主のWeb集客を葛飾区拠点の株式会社サイプレスが支援。",
};

const faqItems = [
  { q: "千葉県での対面相談は可能ですか？", a: "はい。葛飾区に隣接する市川市・松戸市・柏市への訪問相談に対応しています。船橋市・千葉市などはオンライン（Zoom）でのご相談をお勧めしていますが、ご要望があれば訪問も対応可能です。" },
  { q: "千葉県でのMEO対策の効果はどのくらいで出ますか？", a: "業種・エリアの競合状況によりますが、正しい施策で3〜6か月での順位向上が目安です。松戸・市川など都内隣接エリアは競合が多いため、継続的な施策が重要です。" },
  { q: "千葉県の飲食店・小売店の集客支援に対応していますか？", a: "はい。千葉県の飲食店・美容室・クリニック・サービス業のMEO対策・ホームページ制作・Instagram運用支援に対応しています。" },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全エリア" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都の集客支援" },
  { href: "/area/saitama", label: "埼玉県", desc: "埼玉県の集客支援" },
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
              千葉県
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Chiba</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              千葉県のSEO・MEO対策・Web制作
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              東京都葛飾区に隣接する千葉県（市川市・松戸市・船橋市・柏市など）の中小企業・店舗のSEO対策・MEO対策・ホームページ制作を支援します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_12_19.png" alt="千葉県のSEO・MEO対策" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Local Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              千葉県での対応サービス
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "市川・松戸・船橋・柏のMEO対策", b: "「市川市 歯科」「松戸 美容室」「船橋 居酒屋」「柏 整骨院」など千葉県各エリアの地域検索でGoogleマップ上位表示を目指します。地域名+業種キーワードの最適化を行います。" },
                { n: "02", t: "千葉県内の中小企業向けSEO対策", b: "千葉県内の地域特性を活かしたローカルSEO戦略を設計します。「千葉市 〇〇」「船橋市 〇〇」などの地域名+業種キーワードで地元ユーザーへのアプローチを強化します。" },
                { n: "03", t: "千葉県でのホームページ・LP制作", b: "千葉県内の各業種に対応したホームページ・ランディングページ制作を行います。Next.js+TypeScript構成の高速・SEO対応サイトを制作します。" },
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
        <PageContactCTA heading="千葉県のWeb集客ご相談" body="市川市・松戸市・船橋市・柏市・千葉市のSEO対策・MEO対策・ホームページ制作をご相談ください。訪問相談・オンライン相談ともに対応しています。" />
      </main>
      <Footer />
    </>
  );
}

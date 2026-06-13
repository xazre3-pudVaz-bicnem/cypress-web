import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "東京都のSEO対策・MEO対策・Web制作｜葛飾区拠点の集客支援",
  description: "東京都のSEO対策・MEO対策・ホームページ制作。葛飾区・足立区・江戸川区・墨田区・世田谷区・渋谷区など東京23区全域の中小企業のWeb集客を支援。",
};

const faqItems = [
  { q: "東京都内での対面相談は可能ですか？", a: "はい。葛飾区・足立区・江戸川区・墨田区など東京東部エリアへの訪問相談に対応しています。新宿・渋谷・品川など都内全域もご相談ください。オンライン相談（Zoom）も随時対応しています。" },
  { q: "東京都でのMEO対策の効果はどのくらい出ますか？", a: "競合が多い東京では継続的なMEO施策が重要です。Googleビジネスプロフィールの完全最適化・口コミ増加・投稿継続により、通常3〜6か月で順位向上が見られます。" },
  { q: "東京でのSEO対策費用の相場はどのくらいですか？", a: "内容によりますが、月額3〜10万円程度がコンサルティング・施策実行込みの一般的な相場です。競合の激しいキーワードや多くのページが対象の場合は費用が上がります。" },
  { q: "東京の中小企業でもSEOで上位表示できますか？", a: "はい。地域名+業種のローカルSEO・ニッチなキーワード・コンテンツSEOにより、大企業と競わずに集客できるキーワードを特定して対策します。" },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全エリア" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区の集客支援" },
  { href: "/area/adachi", label: "足立区", desc: "足立区の集客支援" },
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
              東京都
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Tokyo</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              東京都のSEO・MEO対策・Web制作
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              株式会社サイプレスは東京都葛飾区を拠点に、東京都23区・多摩地域の中小企業・個人事業主のSEO対策・MEO対策・Web制作を支援します。競争の激しい東京でも成果の出る集客戦略を提供します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_03.png" alt="東京都のSEO・MEO対策" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Services in Tokyo</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              東京都での対応サービス
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "東京都内のMEO対策（Googleマップ上位表示）", b: "「○○区 美容室」「○○駅 居酒屋」などの地域検索でGoogleマップ上位表示を目指します。東京は競合が多いため、Googleビジネスプロフィールの完全最適化・口コミ戦略・定期投稿が特に重要です。" },
                { n: "02", t: "東京の中小企業向けSEO対策", b: "大企業が競合にいる「汎用キーワード」を避け、地域名+業種のローカルキーワード・専門性の高いニッチキーワードで確実に上位を狙う戦略を設計します。" },
                { n: "03", t: "東京都内の業種別ホームページ制作", b: "飲食店・美容室・クリニック・士業・不動産・コンサルタントなど、東京の各業種に特化したホームページ・LP制作を行います。Next.js+TypeScript+Tailwind CSSによる高速・SEO対応サイトを制作します。" },
                { n: "04", t: "AIO対策・AI検索最適化", b: "ChatGPT・Geminiなどから「東京の○○業者」として引用されるための情報設計を行います。構造化データ・FAQ・著者情報・専門性の高いコンテンツで AI検索での存在感を高めます。" },
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
        <PageContactCTA heading="東京都のWeb集客ご相談" body="東京都内のSEO対策・MEO対策・ホームページ制作をご相談ください。葛飾区・足立区・江戸川区への訪問相談・都内全域のオンライン相談に対応しています。" />
      </main>
      <Footer />
    </>
  );
}

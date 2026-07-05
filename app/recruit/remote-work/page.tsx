import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "リモートワーク制度｜株式会社サイプレスの働き方",
  alternates: { canonical: "https://www.cypress-all.co.jp/recruit/remote-work" },
  description: "株式会社サイプレスのリモートワーク制度。フルリモート・フルフレックス・AIツール支給・書籍補助で場所を問わず成果を出せる働き方。全国どこからでも働けます。",
};

const faqItems = [
  { q: "完全リモートですか？", a: "はい。フルリモートが基本です。週1回のオンライン朝礼（Zoom）と月1回の任意の全体MTGがありますが、物理的な出社義務はありません。全国どこからでも働けます。" },
  { q: "勤務時間は自由ですか？", a: "フルフレックス制（コアタイムなし）を採用しています。成果を基準に評価するため、何時から何時まで働くかはご自身で決めていただけます。" },
  { q: "AIツールは自分で用意する必要がありますか？", a: "いいえ。ChatGPT Plus・Claude Pro等の主要AIツールの費用は会社が負担します。業務に必要なツールは会社で契約します。" },
  { q: "海外や地方からも働けますか？", a: "はい。インターネット環境があれば国内のどこからでも働けます。海外在住の場合はご相談ください。" },
];

const relatedLinks = [
  { href: "/recruit", label: "採用情報トップ", desc: "採用ページ" },
  { href: "/recruit/job-description", label: "募集要項", desc: "応募条件・詳細" },
  { href: "/recruit/message", label: "代表メッセージ", desc: "代表からのメッセージ" },
  { href: "/recruit/entry", label: "応募エントリー", desc: "エントリーはこちら" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/recruit">採用情報</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              リモートワーク制度
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Remote Work</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              リモートワーク制度
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              株式会社サイプレスはフルリモート・フルフレックスが基本です。場所を選ばず成果を出せる環境で、自分のペースでWeb集客の専門家として成長できます。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Work Style</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              サイプレスの働き方
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "フルリモート（場所不問）", b: "オフィスへの出社義務はありません。自宅・カフェ・コワーキングスペース・地方・海外など、インターネット環境があれば国内どこからでも働けます。" },
                { n: "02", t: "フルフレックス（時間自由）", b: "コアタイムなしのフルフレックス制度を採用しています。朝型・夜型・子育て中など、ライフスタイルに合わせた時間配分で仕事ができます。成果で評価します。" },
                { n: "03", t: "AIツール費用を会社負担", b: "ChatGPT Plus・Claude Pro・Perplexity等のAIツール利用費を会社が負担します。最新のAIを業務に積極的に活用することを推奨しています。" },
                { n: "04", t: "書籍・オンライン講座補助", b: "SEO・Web制作・マーケティング・AI関連の書籍・Udemy等のオンライン講座費用を会社が負担します。継続的な学習を会社として支援します。" },
                { n: "05", t: "週1回のオンライン朝礼", b: "週1回・30分のZoom朝礼で進捗共有・相談・情報交換を行います。それ以外のコミュニケーションはSlackで非同期で行います。" },
                { n: "06", t: "成果ベースの評価・昇給", b: "稼働時間ではなく成果を評価します。クライアントの集客成果・顧客満足度・新しいスキル習得を評価基準とした明確な昇給制度があります。" },
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
        <PageContactCTA heading="一緒に働きませんか" body="フルリモート・フルフレックスでWeb集客の専門家として働きたい方、ぜひお話しましょう。採用エントリーはお問い合わせフォームからどうぞ。" />
      </main>
      <Footer />
    </>
  );
}

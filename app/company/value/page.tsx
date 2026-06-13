import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "企業理念・バリュー｜株式会社サイプレス",
  description: "株式会社サイプレスの企業理念・バリュー・大切にしていること。Web集客支援を通じて地域の中小企業・個人事業主の成長に貢献するという使命と価値観。",
};

const relatedLinks = [
  { href: "/company", label: "会社概要", desc: "サイプレス会社情報" },
  { href: "/company/support-policy", label: "サポート方針", desc: "支援スタンス" },
  { href: "/recruit", label: "採用情報", desc: "仲間を募集しています" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談はこちら" },
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
              <Link href="/company">会社情報</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              企業理念・バリュー
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Value & Philosophy</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              企業理念・バリュー
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              株式会社サイプレスが大切にしている考え方・行動指針・お客様との関係における価値観をお伝えします。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "720px", marginBottom: "64px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px" }}>Mission</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>ミッション</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#0d1b2a", fontFamily: "var(--font-serif)", fontWeight: 500, borderLeft: "3px solid #0d1b2a", paddingLeft: "20px" }}>
                すべての地域ビジネスが、Webを通じて正当に評価される世界をつくる。
              </p>
              <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9", marginTop: "16px" }}>
                技術力・専門知識・資金力があっても、Webでの発信力がなければ顧客に届かない——そんな不条理をなくしたいと思っています。本当に良いサービスを持つ事業者が、正当に選ばれる仕組みを提供することが私たちの使命です。
              </p>
            </div>

            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px" }}>Values</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>バリュー</h2>
              {[
                { n: "01", t: "成果にコミットする", b: "「制作した」「施策を実施した」ことがゴールではありません。問い合わせ増加・来店数増加・売上向上という実際の成果にこだわります。施策の効果を継続的に測定し、改善を繰り返します。" },
                { n: "02", t: "誠実に、わかりやすく伝える", b: "専門用語を使わず、何をなぜ行うのか・どんな効果が期待できるのかをわかりやすく説明します。お客様が自分でも理解して判断できる状態を作ることを大切にしています。" },
                { n: "03", t: "長期的な関係を築く", b: "一度きりの制作・施策ではなく、成果が出続ける長期パートナーとしての関係を目指します。定期的なレポートと改善提案で、お客様のビジネス成長を継続的にサポートします。" },
                { n: "04", t: "最新技術を実用化する", b: "AI・最新のSEO手法・新しいWeb技術を常にキャッチアップし、実際のお客様支援に活用します。「理論だけ」ではなく「実際に使えるもの」に厳選して導入します。" },
                { n: "05", t: "地域と社会に貢献する", b: "葛飾区を拠点に、地域の中小企業・個人事業主の発展を支援します。地域のビジネスが元気になることで、地域全体が豊かになるというサイクルを大切にしています。" },
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
        <PageContactCTA heading="私たちの考えに共感いただけたら" body="株式会社サイプレスのWeb集客支援にご興味をお持ちの方は、まずはお気軽にご相談ください。一緒に成果を作る長期パートナーとして貢献します。" />
      </main>
      <Footer />
    </>
  );
}

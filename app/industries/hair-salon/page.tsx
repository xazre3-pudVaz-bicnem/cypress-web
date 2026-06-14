import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ヘアサロン・美容院のWeb集客｜MEO・Instagram・SNS運用｜株式会社サイプレス",
  description: "ヘアサロン・美容院のWeb集客。Googleマップ上位表示（MEO）・Instagram運用・ホームページ制作で新規顧客来店と指名予約を増やします。東京都内・全国対応。",
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/hair-salon" },
};

const faqItems = [
  { q: "ヘアサロンはMEOとInstagramどちらから始めるべきですか？", a: "新規集客が目的ならMEO優先です。「駅名＋美容院」の検索からの来店は最も購買意欲が高いです。フォロワー増加・ブランド構築はInstagramが得意です。予算があれば並行して行うことを推奨します。" },
  { q: "美容院のGoogleマップ口コミはどうやって増やせますか？", a: "施術後にQRコード・LINEで口コミリンクを送るフローが最も効果的です。「よろしければGoogleマップに感想を」と一言添えるだけで口コミ率が上がります。" },
  { q: "ホットペッパーに掲載しているのにGoogleマップも必要ですか？", a: "必要です。ホットペッパーはポータルサイト内のみの集客ですが、Googleマップは外部からの自然流入です。Googleマップ経由の顧客はポータル依存からの脱却にもつながります。" },
  { q: "ヘアサロンのInstagramのフォロワーを増やすコツは？", a: "ビフォーアフター・スタイリングプロセスのリール動画が最も拡散されます。週2〜3回の継続投稿と地域ハッシュタグの活用がフォロワー増加の鍵です。" },
];

const relatedLinks = [
  { href: "/industries/beauty", label: "美容室向けサービス", desc: "美容室・サロン総合" },
  { href: "/industries/nail-salon", label: "ネイルサロン向けサービス", desc: "ネイルサロン集客" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化" },
  { href: "/services/sns", label: "SNS運用代行", desc: "Instagram運用" },
  { href: "/industries", label: "業種別Web集客", desc: "全業種一覧" },
];

export default function HairSalonPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries">業種別Web集客</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              ヘアサロン・美容院
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Hair Salon</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              ヘアサロン・美容院のWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              ヘアサロン・美容院の集客はGoogleマップとInstagramの二本柱が最も効果的です。MEO対策でGoogleマップ上位表示を実現し、Instagram運用でファン化・指名予約を増やします。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ヘアサロン向けサービス一覧
            </h2>
            <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "800px" }}>
              {[
                { href: "/industries/hair-salon/meo", label: "ヘアサロンのMEO対策", desc: "Googleマップ上位表示で新規来店増加" },
                { href: "/industries/hair-salon/sns", label: "ヘアサロンのSNS運用", desc: "Instagram・LINE公式で指名予約を増やす" },
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{ display: "block", padding: "24px", border: "1px solid #e8e4dc", textDecoration: "none", background: "#f9f8f5" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "6px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#6b7280" }}>{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "MEOでGoogleマップ「美容院」上位を獲得", b: "「〇〇駅 美容院」「近くの美容室」でGoogleマップ上位に表示されることが最も費用対効果の高い新規集客手段です。GBPの最適化・写真充実・口コミ獲得でMEO順位を高めます。" },
                { n: "02", t: "Instagramで「行きたいサロン」を演出", b: "スタイル写真・ビフォーアフター・リール動画で「ここに行きたい！」という来店動機を作ります。スタイリスト個人アカウントと店舗アカウントの組み合わせが指名予約に最も効果的です。" },
                { n: "03", t: "LINE公式でリピーター定着", b: "来店後のLINE登録を促し、クーポン・次回予約リマインド・新メニュー情報を配信。再来店率の向上と顧客との継続的な関係構築を実現します。" },
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

        <FaqSection items={faqItems} bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="ヘアサロン・美容院のWeb集客ご相談" body="MEO対策・Instagram運用・ホームページ制作まで、ヘアサロン専門の集客支援をご提供します。" />
      </main>
      <Footer />
    </>
  );
}

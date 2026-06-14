import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ヘアサロン・美容院のWeb集客｜MEO対策・Instagram運用で新規来店と指名予約を増やす｜株式会社サイプレス",
  description: "ヘアサロン・美容院のWeb集客。Googleマップ上位表示（MEO）・Instagram運用・ホームページ制作で新規顧客来店と指名予約を増やします。ホットペッパー依存脱却も支援。",
  keywords: ["ヘアサロン MEO対策", "美容院 集客", "美容室 Googleマップ", "ヘアサロン Instagram", "美容院 ホームページ"],
  openGraph: {
    title: "ヘアサロン・美容院のWeb集客｜MEO対策・Instagram運用で新規来店と指名予約を増やす｜株式会社サイプレス",
    description: "ヘアサロン・美容院のWeb集客。MEO・Instagram・ホームページで新規来店と指名予約を増やします。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/hair-salon" },
};

const faqItems = [
  {
    q: "ヘアサロンはMEOとInstagramどちらから始めるべきですか？",
    a: "新規集客が目的ならMEO優先です。「駅名＋美容院」の検索からの来店は最も購買意欲が高く、予約直結率も高いです。Instagramはフォロワー増加・ブランド構築・指名育成が得意です。予算があれば並行して行うことが最大の効果を生みます。",
  },
  {
    q: "美容院のGoogleマップ口コミはどうやって増やせますか？",
    a: "施術後にQRコード・LINEで口コミリンクを送るフローが最も効果的です。「よろしければGoogleマップに感想を」と一言添えるだけで口コミ率が上がります。来店直後の満足度が高いタイミングを逃さないことが重要です。",
  },
  {
    q: "ホットペッパービューティーに掲載しているのにGoogleマップも必要ですか？",
    a: "必要です。ホットペッパーはポータルサイト内のみの集客ですが、Googleマップは外部からの自然流入です。Googleマップ経由の顧客は手数料が発生せず、自社顧客として定着しやすいため、ポータル依存からの脱却にもつながります。",
  },
  {
    q: "ヘアサロンのInstagramのフォロワーを増やすコツは？",
    a: "ビフォーアフター・スタイリングプロセスのリール動画が最も拡散されます。週2〜3回の継続投稿と地域ハッシュタグ（例：#葛飾区美容院、#亀有ヘアサロン）の活用がローカルフォロワーを増やす鍵です。スタイリスト個人アカウントとの連携も有効です。",
  },
  {
    q: "個人経営・小規模のヘアサロンでもWeb集客はできますか？",
    a: "はい。個人経営のサロンこそGoogleマップ集客が効果的です。大手チェーンよりも競合が少なく、丁寧なサービスと地元密着を口コミで積み上げることで、3〜6ヶ月以内にGoogleマップ上位表示を実現できるケースが多いです。",
  },
  {
    q: "ヘアサロンのホームページには何を掲載すべきですか？",
    a: "メニュー・料金表・スタイリスト紹介・サロンの雰囲気写真・アクセス・予約フォームが必須です。スタイリストの個性や得意なスタイルを前面に出すことで指名予約を促せます。Instagramの埋め込みでスタイル実績をリアルタイムで見せる設計も効果的です。",
  },
  {
    q: "LINE公式アカウントはヘアサロンの集客に役立ちますか？",
    a: "非常に有効です。来店後のLINE登録を促し、クーポン・次回予約リマインド・新メニュー告知を配信することでリピート率が向上します。予約受付をLINEで行うことで電話対応の負担軽減にもなります。",
  },
  {
    q: "美容院のWeb集客にどのくらいの費用がかかりますか？",
    a: "MEO対策は月額2〜4万円、Instagram運用代行は月額3〜8万円、ホームページ制作は30〜80万円が目安です。現状のGoogleマップ順位・競合状況・SNSフォロワー数に応じて最適なプランをご提案します。まずは無料相談をご利用ください。",
  },
];

const relatedLinks = [
  { href: "/industries/hair-salon/meo", label: "ヘアサロンのMEO対策", desc: "Googleマップ上位表示で新規来店増加" },
  { href: "/industries/hair-salon/sns", label: "ヘアサロンのSNS・Instagram運用", desc: "Instagram・LINE公式で指名予約を増やす" },
  { href: "/industries/beauty", label: "美容業向けサービス", desc: "エステ・脱毛サロンの集客" },
  { href: "/industries/nail-salon", label: "ネイルサロン向けサービス", desc: "ネイルサロン集客" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "Instagram運用代行の詳細" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "ヘアサロン向けサイト制作" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/contact", label: "無料相談", desc: "ヘアサロン・美容院のWeb集客相談" },
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
              ヘアサロン・美容院の集客はGoogleマップとInstagramの二本柱が最も効果的です。MEO対策でGoogleマップ上位表示を実現し、Instagram運用でファン化・指名予約を増やします。ホットペッパー依存から自社集客への転換も支援します。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              個人サロン・少人数サロン・多店舗展開まで、ヘアサロンの規模・スタイルに応じた集客戦略をご提案します。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "72px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Key Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ヘアサロン・美容院向けサービス
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", maxWidth: "900px" }}>
              {[
                {
                  href: "/industries/hair-salon/meo",
                  label: "ヘアサロンのMEO対策",
                  desc: "「〇〇駅 美容院」「近くの美容室」でGoogleマップ上位表示。来店意欲の高い新規顧客を直接獲得します。",
                },
                {
                  href: "/industries/hair-salon/sns",
                  label: "ヘアサロンのSNS・Instagram運用",
                  desc: "ビフォーアフター・スタイリング動画でフォロワーを増やし、指名予約につなげる運用代行サービスです。",
                },
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{ display: "block", padding: "28px", border: "1px solid #e8e4dc", textDecoration: "none", background: "#f9f8f5" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.8" }}>{item.desc}</p>
                  <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "12px" }}>詳細を見る →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#f8f6f2", padding: "72px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ヘアサロン集客の3つの柱
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "MEOでGoogleマップ「美容院」上位を獲得",
                  b: "「〇〇駅 美容院」「近くの美容室」でGoogleマップ上位に表示されることが最も費用対効果の高い新規集客手段です。GBPの最適化・写真充実・口コミ獲得でMEO順位を高めます。",
                },
                {
                  n: "02",
                  t: "Instagramで「行きたいサロン」を演出",
                  b: "スタイル写真・ビフォーアフター・リール動画で「ここに行きたい！」という来店動機を作ります。スタイリスト個人アカウントと店舗アカウントの組み合わせが指名予約に最も効果的です。",
                },
                {
                  n: "03",
                  t: "LINE公式でリピーター定着・離脱防止",
                  b: "来店後のLINE登録を促し、クーポン・次回予約リマインド・新メニュー情報を配信。再来店率の向上と顧客との継続的な関係構築でリピーター定着率を高めます。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #e8e4dc" }}>
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

        <FaqSection items={faqItems} heading="ヘアサロン・美容院のWeb集客についてよくある質問" bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="ヘアサロン・美容院のWeb集客ご相談"
          body="MEO対策・Instagram運用・ホームページ制作まで、ヘアサロン専門の集客支援をご提供します。ホットペッパー依存からの脱却相談も歓迎です。"
        />
      </main>
      <Footer />
    </>
  );
}

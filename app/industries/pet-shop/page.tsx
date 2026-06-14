import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ペットショップ・トリミングサロンのWeb集客｜MEO対策・Instagram運用｜株式会社サイプレス",
  description: "ペットショップ・トリミングサロン・ドッグカフェ向けWeb集客支援。Googleマップ上位表示（MEO）・Instagram運用で新規顧客来店と定期利用を増やします。",
  keywords: ["ペットショップ MEO対策", "トリミングサロン 集客", "ペットショップ Googleマップ", "ドッグサロン Instagram", "ペットショップ ホームページ"],
  openGraph: {
    title: "ペットショップ・トリミングサロンのWeb集客｜MEO対策・Instagram運用｜株式会社サイプレス",
    description: "ペットショップ・トリミングサロン向けWeb集客。MEO・Instagram・ホームページで新規顧客と定期利用を増やします。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/pet-shop" },
};

const faqItems = [
  {
    q: "ペットショップの集客にはGoogleマップとInstagramどちらが効果的ですか？",
    a: "「今すぐトリミングをお願いしたい」という即来店意欲の高いユーザーにはGoogleマップ（MEO）が有効です。Instagramはペットのかわいいビフォーアフター写真や施術動画でファンを育て、定期利用につなげます。両方を組み合わせることで最大効果が得られます。",
  },
  {
    q: "トリミングサロンの口コミをGoogleに増やすには？",
    a: "施術後に完成したペットの写真を撮影する際に、口コミQRコードが印刷されたカードを一緒に渡す方法が最も効果的です。かわいい仕上がりに満足しているオーナーは口コミ投稿のハードルが下がりやすいため、タイミングが重要です。",
  },
  {
    q: "トリミング予約をオンライン化したいのですが対応できますか？",
    a: "はい。ホームページへの予約フォーム設置・LINE公式アカウントでのオンライン予約受付・Googleビジネスプロフィールへの予約ボタン設定まで対応しています。電話対応の負担軽減と予約漏れ防止に効果的です。",
  },
  {
    q: "ペットショップのInstagram運用で効果的なコンテンツは？",
    a: "トリミング前後のビフォーアフター写真・施術中の動画・来店ペットの紹介投稿が最も反応が高くなります。季節ごとのトリミングスタイル提案や、ペットケアのTipsコンテンツもフォロワー増加に効果的です。",
  },
  {
    q: "ペットショップのGoogleマップ順位はどのくらいで上がりますか？",
    a: "競合の少ないエリアでは1〜2ヶ月、競合が多い場合は3〜6ヶ月が目安です。Googleビジネスプロフィールの完全整備・写真充実・口コミ獲得を同時に進めることで改善が早まります。",
  },
  {
    q: "個人経営のドッグサロンでもWeb集客は始められますか？",
    a: "はい。個人経営の小規模サロンにとってGoogleマップは特に効果的です。大手チェーンよりも競合が少なく、地域特化した口コミと丁寧な対応がGoogleマップ上位表示を実現しやすい環境です。低予算から始められます。",
  },
  {
    q: "ペットショップのホームページには何を掲載すべきですか？",
    a: "トリミングメニューと料金表（犬種・サイズ別）・施術写真ギャラリー・スタッフ紹介・アクセス・予約フォームが必須項目です。初めて来店するオーナーが安心できる情報（使用シャンプー・施術環境・資格情報）も掲載することで問い合わせ率が上がります。",
  },
  {
    q: "ペットグッズを販売するECサイトとトリミングサロンのWeb集客は同時に対応できますか？",
    a: "はい。ECサイトのSEO対策とトリミングサロンのMEO対策は異なる施策ですが、同一サイト内での統合設計も可能です。ECとリアル店舗の相乗効果を意識したWeb戦略をご提案します。",
  },
];

const relatedLinks = [
  { href: "/industries/pet-shop/meo", label: "ペットショップのMEO対策", desc: "Googleマップ上位表示で来店増加" },
  { href: "/industries/local-store", label: "地域店舗向けサービス", desc: "地域密着型店舗の集客" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "Instagram運用代行の詳細" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "ペットショップ向けサイト制作" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/knowledge/review-strategy", label: "口コミ獲得戦略", desc: "口コミを増やす方法" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの対応" },
  { href: "/contact", label: "無料相談", desc: "ペットショップのWeb集客相談" },
];

export default function PetShopPage() {
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
              ペットショップ・トリミングサロン
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Pet Shop & Trimming</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              ペットショップ・トリミングサロンのWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              ペットショップ・トリミングサロン・ドッグカフェは「〇〇駅 トリミング」「近くのペットショップ」でGoogleマップ検索されることが多く、MEO対策が特に効果的です。かわいいペットのビフォーアフター写真を活用したInstagram集客との組み合わせで、新規来店と定期利用の両方を実現します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_09_21 (8).png" alt="ペットのトリミングを行うグルーミングサロン — ペットショップ・トリミングサロンのMEO対策" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "72px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Key Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ペットショップ・トリミングサロン向けサービス
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", maxWidth: "900px" }}>
              {[
                {
                  href: "/industries/pet-shop/meo",
                  label: "ペットショップのMEO対策",
                  desc: "「〇〇駅 トリミング」「近くのペットショップ」でGoogleマップ上位表示を実現。来店意欲の高い新規顧客を獲得します。",
                },
                {
                  href: "/services/sns",
                  label: "ペットショップのSNS・Instagram運用",
                  desc: "ビフォーアフター写真・施術動画・来店ペット紹介でフォロワーを増やし、定期利用につなげます。",
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
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Why It Works</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ペットショップ集客でMEOが特に効果的な理由
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "「近くで今すぐ」の検索が多い業種",
                  b: "ペットのトリミング・ペット用品の購入は「今日・今週中に」という緊急度の高い検索が多く、Googleマップ上位に表示されるだけで来店につながりやすいです。",
                },
                {
                  n: "02",
                  t: "口コミ数と写真が信頼形成に直結する",
                  b: "ペットを大切にするオーナーは丁寧に選ぶため、口コミの件数・評価・施術写真が来店の判断材料になります。GBPの写真充実と口コミ獲得が集客の核心です。",
                },
                {
                  n: "03",
                  t: "定期利用で高いリピート率を誇る業種",
                  b: "トリミング・爪切り・シャンプーなど定期的なケアが必要なサービスのため、初回来店から定期顧客への転換が高く、MEO投資のROIが長期で高まります。",
                },
                {
                  n: "04",
                  t: "Instagramとの相乗効果が大きい",
                  b: "かわいいペットの写真はInstagramで自然に拡散され、地域フォロワーからの集客とGoogleマップ評価の向上（訪問者増加による知名度アップ）に相乗効果が生まれます。",
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

        <FaqSection items={faqItems} heading="ペットショップ・トリミングサロンのWeb集客についてよくある質問" bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="ペットショップ・トリミングサロンのWeb集客ご相談"
          body="MEO対策・Instagram運用・ホームページ制作でペットショップ・トリミングサロンの新規来店と定期顧客を増やします。まずは無料相談からお気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "水道・設備工事業のWeb集客｜MEO対策で緊急依頼の問い合わせを増やす｜株式会社サイプレス",
  description: "水道工事・排水管・電気工事・設備業のWeb集客。Googleマップ上位表示（MEO）・ホームページ制作で緊急依頼の問い合わせを増やします。24時間対応・地域密着のMEO対策。",
  keywords: ["水道工事 MEO対策", "設備工事 集客", "水道業者 Googleマップ", "配管工事 集客", "水道 緊急 MEO"],
  openGraph: {
    title: "水道・設備工事業のWeb集客｜MEO対策で緊急依頼の問い合わせを増やす｜株式会社サイプレス",
    description: "水道工事・設備業のWeb集客。MEO・ホームページ制作で緊急依頼と通常工事の問い合わせを増やします。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/plumbing" },
};

const faqItems = [
  {
    q: "水道・設備工事業のMEO対策は緊急依頼に有効ですか？",
    a: "非常に有効です。水漏れ・詰まり・水道管破裂などの緊急依頼はGoogleマップで「近くの水道業者」「水道修理 〇〇区 24時間」と即座に検索されます。Googleマップ上位表示が最も直接的に緊急問い合わせにつながります。",
  },
  {
    q: "設備工事業のGBP（Googleビジネスプロフィール）で特に重要な項目は何ですか？",
    a: "電話番号（クリックで即発信できること）・営業時間（24時間対応の場合はその旨を明記）・対応サービスカテゴリ・対応エリアが特に重要です。緊急性の高いユーザーは迷わず電話できる状態を求めており、情報不足は他業者への流出につながります。",
  },
  {
    q: "水道工事業の口コミはどうやって集めますか？",
    a: "工事完了後のフォローアップ（お礼の連絡時に口コミリンクを送付）が最も効果的です。「先日はご利用ありがとうございました。よろしければGoogleにご感想をいただけますか」という一言と共にURL・QRコードを送ることで口コミ率が大幅に向上します。",
  },
  {
    q: "水道・設備工事業のホームページに何を載せるべきですか？",
    a: "対応サービス一覧（水漏れ・つまり・給湯器・リフォームなど）・料金の目安・対応エリア・資格情報（水道工事士・管工事施工管理技士等）・施工事例・緊急時の電話番号が必須です。スマートフォンで即電話できるボタンを目立たせることが特に重要です。",
  },
  {
    q: "地域の水道業者として複数エリアの集客ができますか？",
    a: "はい。主要対応エリアごとにエリアページ（例：/area/葛飾区、/area/足立区）を作成し、「葛飾区 水道工事」「足立区 水漏れ修理」などのキーワードで検索上位を目指す施策が効果的です。MEOの対応エリア設定と組み合わせて実施します。",
  },
  {
    q: "水道業の季節的な集客の増減はありますか？",
    a: "冬場（1〜2月）は凍結による水道管破裂の緊急依頼が増えます。梅雨時期は排水管詰まりが増えます。これらのシーズンに合わせたGBP投稿（凍結対策のお知らせ等）や、予防工事に関するコンテンツ発信が集客に効果的です。",
  },
  {
    q: "大手の水道修理業者に対してどう差別化できますか？",
    a: "地域密着・地元業者・顔の見える対応・適正料金という強みをGBPプロフィール・口コミ・ホームページで前面に出します。大手チェーンは料金の不透明さや対応の画一性への不満が多く、地元業者の丁寧さと安心感を差別化ポイントにできます。",
  },
  {
    q: "リフォーム・増改築も扱っている場合、集客をどう設計しますか？",
    a: "緊急修理（MEO中心）と計画的なリフォーム（SEO・ホームページ中心）でターゲットユーザーが異なります。緊急修理はMEO・電話獲得を最優先、リフォームはSEOとホームページでの施工事例紹介・問い合わせ誘導を重視する二軸設計が効果的です。",
  },
];

const relatedLinks = [
  { href: "/industries/plumbing/meo", label: "水道・設備工事業のMEO対策", desc: "緊急依頼をGoogleマップで獲得" },
  { href: "/industries/renovation", label: "リフォーム・工務店", desc: "リフォーム集客の支援" },
  { href: "/industries/construction", label: "建設業・工務店", desc: "建設業のWeb集客" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "水道業向けサイト制作" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示で集客" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの対応" },
  { href: "/contact", label: "無料相談", desc: "水道・設備工事業のWeb集客相談" },
];

export default function PlumbingPage() {
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
              水道・設備工事業
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Plumbing & Utilities</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              水道・設備工事業のWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              水漏れ・詰まり・給湯器交換などの緊急依頼はGoogleマップ検索が圧倒的に多く、MEO対策が最も直接的に問い合わせを増やします。「〇〇区 水道修理」「近くの設備工事」での上位表示を実現して、地域の緊急依頼を確実に獲得します。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              計画的な工事・リフォーム案件の集客にはSEOとホームページの整備が有効です。緊急依頼（MEO）と計画工事（SEO）の二軸で、年間を通じた安定した集客体制を構築します。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "72px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Key Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              水道・設備工事業向けサービス
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", maxWidth: "900px" }}>
              {[
                {
                  href: "/industries/plumbing/meo",
                  label: "水道・設備工事業のMEO対策",
                  desc: "「水漏れ 〇〇区」「近くの水道業者」でGoogleマップ上位表示を実現。緊急依頼の問い合わせを直接獲得します。",
                },
                {
                  href: "/services/web-design",
                  label: "水道業向けホームページ制作",
                  desc: "スマホから即電話できる設計・対応エリア明記・施工事例・料金表示で信頼と問い合わせ数を向上させます。",
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
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Why MEO Wins</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              水道・設備業にMEO対策が特に効果的な理由
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "緊急性の高い検索が多く来店から即依頼になる",
                  b: "「今すぐ直してほしい」という緊急性の高い検索では、Googleマップ上位の業者に即電話する行動パターンが主流です。最短で受注につながる集客チャネルです。",
                },
                {
                  n: "02",
                  t: "電話番号の視認性が顧客獲得を左右する",
                  b: "スマートフォンのGoogleマップではビジネス名の下に「電話する」ボタンが表示されます。GBPに正確な電話番号が設定されているだけで、競合より問い合わせが増えます。",
                },
                {
                  n: "03",
                  t: "24時間対応表示が差別化になる",
                  b: "「24時間対応」「土日祝対応」をGBPに明記することで、緊急性の高いユーザーに選ばれやすくなります。深夜・早朝の問い合わせは特にGoogleマップ経由が多いです。",
                },
                {
                  n: "04",
                  t: "地元業者としての信頼性が口コミで伝わる",
                  b: "Googleの口コミで「丁寧な対応」「料金が明確」「説明がわかりやすい」という評価が積み上がることで、大手チェーンに対する地元業者の信頼が形成されます。",
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

        <FaqSection items={faqItems} heading="水道・設備工事業のWeb集客についてよくある質問" bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="水道・設備工事業のWeb集客ご相談"
          body="MEO対策・ホームページ制作で緊急依頼と計画工事の問い合わせを増やします。まずは無料相談からお気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}

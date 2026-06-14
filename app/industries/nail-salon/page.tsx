import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ネイルサロンのWeb集客｜MEO対策・Instagram運用で新規客と定期予約を増やす｜株式会社サイプレス",
  description: "ネイルサロン向けWeb集客支援。Googleマップ上位表示（MEO）・Instagram運用・ホームページ制作で新規顧客来店と定期予約を増やします。東京都内・全国対応。",
  keywords: ["ネイルサロン MEO対策", "ネイルサロン Instagram", "ネイルサロン 集客", "ネイルサロン Googleマップ", "ネイルサロン ホームページ"],
  openGraph: {
    title: "ネイルサロンのWeb集客｜MEO対策・Instagram運用で新規客と定期予約を増やす｜株式会社サイプレス",
    description: "ネイルサロン向けWeb集客。MEO・Instagram・ホームページで新規顧客来店と定期予約を増やします。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/nail-salon" },
};

const faqItems = [
  {
    q: "ネイルサロンの集客にはMEOとInstagramどちらが大切ですか？",
    a: "どちらも重要ですが、役割が違います。Googleマップ（MEO）は「今すぐネイルしたい」という即来店意欲の高いユーザーを獲得でき、InstagramはビジュアルでファンになってもらいSNSフォロワーから定期顧客を育てます。予算があれば両方を並行して行うことが最も効果的です。",
  },
  {
    q: "個人経営のネイルサロンでもMEO対策はできますか？",
    a: "はい。個人サロン・プライベートサロンほどGoogleマップからの集客効果が大きいです。大手チェーンに比べて競合が少なく、Googleビジネスプロフィールの整備・写真充実・口コミ獲得で3〜6ヶ月以内に上位に表示されるケースが多いです。",
  },
  {
    q: "ネイルサロンのInstagramのフォロワーを増やすにはどうすればいいですか？",
    a: "ネイルデザインの仕上がり写真・施術プロセス動画（リール）・季節のトレンドデザイン紹介が最も拡散されます。週2〜3回の定期投稿と地域ハッシュタグ（例：#葛飾区ネイル、#亀有ネイルサロン）の活用でローカルフォロワーを増やせます。",
  },
  {
    q: "ネイルサロンの口コミはどうやって増やしますか？",
    a: "施術後に完成したネイルの写真を撮影する際に、口コミQRコードが印刷されたカードを一緒に渡す方法が効果的です。LINE公式アカウント経由で施術後のフォローメッセージに口コミリンクを添付する方法も口コミ獲得率が高まります。",
  },
  {
    q: "ホットペッパービューティーからの自社予約への移行は可能ですか？",
    a: "はい。まずGoogleビジネスプロフィールの予約ボタン設定と自社ホームページの予約フォームを整備します。既存の顧客にはLINE公式アカウントへの登録を促し、直接予約に誘導することでポータル依存度を段階的に下げられます。",
  },
  {
    q: "ネイルサロンに特化したホームページの制作は可能ですか？",
    a: "はい。ネイルデザインギャラリー・料金表・施術メニュー・ネイリストプロフィール・予約フォームを備えたネイルサロン向けホームページを制作します。SEO対策と組み合わせて検索流入も同時に強化します。",
  },
  {
    q: "季節ごとのトレンドデザインをSNSとGBPに投稿するのは効果的ですか？",
    a: "非常に効果的です。クリスマス・バレンタイン・桜・夏など季節のトレンドデザインはユーザーの検索意欲と一致しており、拡散・保存されやすくなります。GBPへの定期投稿とInstagram投稿を連携することで集客効果が最大化します。",
  },
  {
    q: "ネイルサロンのWeb集客にどのくらいの費用がかかりますか？",
    a: "MEO対策は月額2〜4万円、Instagram運用代行は月額3〜8万円、ホームページ制作は30〜80万円（機能・デザインによる）が目安です。現状のSNSフォロワー数・口コミ数・競合状況に応じて最適なプランをご提案します。まずは無料相談をご活用ください。",
  },
];

const relatedLinks = [
  { href: "/industries/nail-salon/meo", label: "ネイルサロンのMEO対策", desc: "Googleマップ上位表示で来店増加" },
  { href: "/industries/nail-salon/sns", label: "ネイルサロンのSNS運用", desc: "Instagram運用でファンを増やす" },
  { href: "/industries/hair-salon", label: "ヘアサロン向けサービス", desc: "美容院・ヘアサロンの集客" },
  { href: "/industries/beauty", label: "美容業向けサービス", desc: "エステ・脱毛サロンの集客" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "Instagram運用代行の詳細" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "ネイルサロン向けサイト制作" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/contact", label: "無料相談", desc: "ネイルサロンのWeb集客相談" },
];

export default function NailSalonPage() {
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
              ネイルサロン
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Nail Salon</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              ネイルサロンのWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              ネイルサロンの集客はビジュアル重視のInstagramとGoogleマップ（MEO）の組み合わせが最も効果的です。「〇〇駅 ネイルサロン」の検索からの来店と、Instagramのデザイン投稿からのファン獲得の両方を同時に強化します。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              個人サロン・プライベートネイルサロン・自宅サロンなど規模を問わず、Webからの集客体制を構築します。ホットペッパービューティーへの依存から脱却したい方のご相談も歓迎します。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "72px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Key Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ネイルサロン向けサービス
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", maxWidth: "900px" }}>
              {[
                {
                  href: "/industries/nail-salon/meo",
                  label: "ネイルサロンのMEO対策",
                  desc: "「〇〇駅 ネイルサロン」「近くのネイルサロン」でGoogleマップ上位表示。来店意欲の高いユーザーを直接獲得します。",
                },
                {
                  href: "/industries/nail-salon/sns",
                  label: "ネイルサロンのSNS・Instagram運用",
                  desc: "デザイン写真・リール動画でフォロワーを増やし、SNS経由の予約を獲得する運用代行サービスです。",
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
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Strategy Points</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ネイルサロン集客の4つの柱
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "MEO（Googleマップ）で即来店客を獲得",
                  b: "「〇〇駅 ネイルサロン」「近くのネイルサロン」での検索はその日・翌日の予約意欲が高いため、Googleマップ上位表示が直接売上につながります。",
                },
                {
                  n: "02",
                  t: "Instagram・SNSでデザイン見本を発信してファンを育てる",
                  b: "ネイルデザインのビフォーアフター・季節トレンドデザイン・施術動画はInstagramで特に拡散されやすく、フォロワーが定期顧客になる流れを作ります。",
                },
                {
                  n: "03",
                  t: "LINE公式アカウントでリピーター管理を自動化",
                  b: "LINE登録を促し、施術後のフォロー・次回予約リマインド・新デザイン告知を自動配信することでリピート率と客単価を向上させます。",
                },
                {
                  n: "04",
                  t: "ホームページでブランドイメージと信頼を確立",
                  b: "デザインギャラリー・料金表・ネイリストプロフィール・予約フォームを整えたホームページは、SNS・マップからの訪問者を予約に転換する最重要の受け皿です。",
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

        <FaqSection items={faqItems} heading="ネイルサロンのWeb集客についてよくある質問" bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="ネイルサロンのWeb集客ご相談"
          body="MEO対策・Instagram運用・ホームページ制作でネイルサロンの新規来店と定期予約を増やします。まずは無料相談からお気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "医療クリニック・歯科・整骨院のWeb集客｜MEO・医療SEO対策｜株式会社サイプレス",
  description: "クリニック・歯科・整骨院・整形外科のWeb集客。Googleマップ上位表示・患者向けホームページ・予約導線・医療SEO・口コミ管理で新患獲得を支援します。医療広告ガイドライン対応。",
  keywords: ["クリニック MEO対策", "歯科 集客", "医療 Googleマップ", "クリニック ホームページ", "医療SEO"],
  openGraph: {
    title: "医療クリニック・歯科・整骨院のWeb集客｜MEO・医療SEO対策｜株式会社サイプレス",
    description: "クリニック・歯科・整骨院のWeb集客。MEO・ホームページ・医療SEOで新患獲得を支援します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/clinic" },
};

const faqItems = [
  { q: "クリニックのMEOはどのくらいで効果が出ますか？", a: "Googleビジネスプロフィールの最適化・写真投稿・口コミ増加を継続すると、早ければ1〜2か月、通常3〜6か月でGoogleマップの順位向上が見られます。競合状況によって異なります。" },
  { q: "医療機関のWebサイトには薬機法・医療広告ガイドラインの制約がありますか？", a: "はい。医療広告ガイドラインにより「治った」「最高の治療」などの表現・未承認医薬品・比較優良広告は禁止されています。制作時に必ずガイドラインを確認した上で制作します。" },
  { q: "クリニックのホームページに予約システムは必要ですか？", a: "はい。24時間対応のオンライン予約は新患獲得に効果的です。電話予約の負荷軽減にもなります。LINEミニアプリ・EPARK・自社システムなど複数の選択肢があります。" },
  { q: "Googleクチコミ管理はどのようにすればいいですか？", a: "不当な口コミには「Googleビジネスプロフィール」から削除申請が可能です。患者満足度の高い診療後に口コミ投稿を促すフローを整備することで、良好な評判を維持できます。" },
  { q: "SEO対策でクリニックが狙うべきキーワードは？", a: "「○○市 歯科」「○○区 内科」などの地域名+診療科目が主要キーワードです。症状系（「腰痛 整骨院 ○○」）・施術名（「矯正歯科 ○○駅」）も重要です。" },
  { q: "クリニックのSNS（Instagram・X）活用は効果がありますか？", a: "医療機関のSNSは健康情報の発信・院内の雰囲気紹介・スタッフ紹介に向いています。治療効果の誇大表現は避け、患者教育コンテンツ（正しい歯磨き方法、腰痛予防ストレッチ等）として発信することでエンゲージメントを高めつつ医療広告ガイドラインを遵守できます。" },
  { q: "患者のオンライン予約率を上げるにはどうすればいいですか？", a: "ホームページのわかりやすい場所（ファーストビュー・固定ヘッダー）に予約ボタンを設置し、クリック数を最小化する設計が重要です。LINEからの予約・電話での予約の両方を提供することで予約の機会損失を防ぎます。" },
  { q: "開業前のクリニックでもWeb集客の準備はできますか？", a: "開業の3〜6ヶ月前からGoogleビジネスプロフィールの設定・ホームページの制作・地域SEO対策を開始することを推奨します。開業時点でGoogleマップに表示された状態にしておくことで、開業初月から新患獲得を開始できます。" },
];

const relatedLinks = [
  { href: "/meo/clinic-meo", label: "医療クリニックのMEO対策", desc: "Googleマップ上位表示で新患獲得" },
  { href: "/industries/osteopathic", label: "整体院・接骨院のWeb集客", desc: "整体院・接骨院の集客支援" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "医療SEOで検索上位を実現" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "クリニック向けサイト制作" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/knowledge/gbp-optimization", label: "GBP最適化の方法", desc: "Googleビジネスプロフィール活用" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの対応" },
  { href: "/contact", label: "無料相談", desc: "クリニック・医療機関のWeb集客相談" },
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
              <Link href="/industries">業種別Web集客</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              医療クリニック・歯科・整骨院
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Medical Clinic</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              医療クリニック・歯科・整骨院のWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              医療機関のWeb集客は、患者が安心して受診を決断できる信頼構築が最優先です。MEO（Googleマップ対策）・ホームページ・口コミ管理を組み合わせた新患獲得の仕組みを設計します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_12_19.png" alt="医療クリニックのWeb集客" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              クリニック・医療機関のWeb集客戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "MEOでGoogleマップの地域検索上位を獲得", b: "「○○市 歯科」「○○駅 内科」などの地域検索でGoogleマップ上位表示を目指します。Googleビジネスプロフィールの診療時間・科目・写真・設備情報を完全に整備します。" },
                { n: "02", t: "信頼を高める患者向けホームページ", b: "院長プロフィール・診療方針・設備紹介・スタッフ紹介・よくある質問など、患者が安心して選べる情報を整理したホームページを制作します。医療広告ガイドライン準拠で制作します。" },
                { n: "03", t: "口コミ管理・評判モニタリング", b: "Googleクチコミの定期確認・返信・不当口コミの削除申請を行います。良い口コミを増やすための依頼フロー（QRコード・LINE送信）を整備します。" },
                { n: "04", t: "オンライン予約システムの導入", b: "24時間対応のオンライン予約で「今すぐ予約したい」患者を取りこぼさない仕組みを構築します。LINEミニアプリ・EPARKなど信頼性の高い予約システムと連携します。" },
                { n: "05", t: "症状別・地域別の医療SEOコンテンツ", b: "「腰痛 原因 治療 ○○市」「矯正歯科 ○○駅 費用」など患者が検索するキーワードを狙ったコンテンツを作成します。E-E-A-T（経験・専門性・権威性・信頼性）を意識した専門性の高いコンテンツです。" },
                { n: "06", t: "患者満足度向上のデジタル対応", b: "LINE公式アカウントによるリマインダー・予約確認・術後フォロー・アンケートなど、診療体験全体をデジタルで改善します。患者満足度の向上が口コミ増加につながります。" },
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
        <PageContactCTA heading="クリニック・医療機関のWeb集客ご相談" body="クリニック・歯科医院・整骨院・整形外科のMEO対策・ホームページ制作・SEO対策をご相談ください。医療広告ガイドラインに準拠した集客支援を提供します。" />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "整体院・接骨院・整骨院のWeb集客｜MEO対策・SNS運用で新規患者を増やす｜株式会社サイプレス",
  description: "整体院・接骨院・整骨院向けのWeb集客支援。Googleマップ上位表示（MEO）・SNS運用・ホームページ制作で新規患者来院とリピーター定着を実現します。医療広告ガイドライン対応。",
  keywords: ["整体院 MEO対策", "接骨院 集客", "整骨院 Googleマップ", "整体院 ホームページ", "接骨院 SNS"],
  openGraph: {
    title: "整体院・接骨院・整骨院のWeb集客｜MEO対策・SNS運用で新規患者を増やす｜株式会社サイプレス",
    description: "整体院・接骨院・整骨院向けWeb集客。MEO・SNS・ホームページで新規患者獲得とリピーター定着を支援。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/osteopathic" },
};

const faqItems = [
  {
    q: "整体院のMEO対策はどのくらいで効果が出ますか？",
    a: "一般的に2〜4ヶ月で順位変動が見られます。Googleビジネスプロフィールの写真充実・口コミ獲得・定期投稿を並行して進めることで改善スピードが上がります。競合の少ないエリアでは1〜2ヶ月で3位以内に入るケースもあります。",
  },
  {
    q: "接骨院・整骨院は医療広告ガイドラインに注意が必要ですか？",
    a: "はい。保険適用に関する誇大表現・症状の治癒を断言する表現・比較優良広告は規制対象となります。サイプレスではガイドラインを遵守しながらMEO・ホームページを最適化します。事前確認を徹底してコンプライアンスリスクを回避します。",
  },
  {
    q: "整体院のGoogleマップ口コミを増やすにはどうすればいいですか？",
    a: "施術後にQRコードや紙のカードでGoogleの口コミリンクを提示する方法が最も効果的です。LINE公式アカウントを持っている場合は、施術後のフォローメッセージに口コミリンクを添付する方法もおすすめです。来店から1〜2日以内の依頼が最もコンバージョン率が高くなります。",
  },
  {
    q: "ホットペッパービューティーに掲載しているのに別途Web集客が必要ですか？",
    a: "はい。ホットペッパーはプラットフォーム内の集客に限定されます。GoogleマップのMEO対策は「整体院 〇〇駅近く」「腰痛 接骨院 葛飾区」といった能動的な検索に対応でき、プラットフォーム依存からの脱却にもつながります。",
  },
  {
    q: "整体院のSNS（Instagram・X）運用は効果がありますか？",
    a: "姿勢改善のビフォーアフター・ストレッチ動画・体の悩みに関する解説コンテンツはエンゲージメントが高く、新規患者の来院動機になります。ただし、医療的効能の誇大表現は避け、教育的コンテンツとして発信することが重要です。",
  },
  {
    q: "整体院のホームページは必要ですか？",
    a: "はい。Googleビジネスプロフィールのリンク先としてホームページは必須です。施術内容・料金・アクセス・施術者プロフィール・お客様の声を掲載したサイトがあることで、問い合わせ・予約率が大幅に向上します。",
  },
  {
    q: "複数店舗を運営していますが、各店舗別に対応できますか？",
    a: "はい。各店舗ごとにGoogleビジネスプロフィールを設定・最適化し、エリアごとのMEO対策を実施します。複数店舗の場合は拠点ごとに異なる地域・キーワードを狙うことで全店舗の集客を効率的に強化できます。",
  },
  {
    q: "自費診療と保険診療の両方を告知する際の注意点は？",
    a: "保険診療では柔道整復師法・あんまマッサージ指圧師法等の規制があります。自費診療はより自由に告知できますが、医療広告ガイドラインの範囲内で行う必要があります。具体的な適応症状の断定的な記載は避け、「対応可能なお悩み」という表現を推奨します。",
  },
];

const relatedLinks = [
  { href: "/industries/osteopathic/meo", label: "整体院のMEO対策", desc: "Googleマップ上位表示で新規患者獲得" },
  { href: "/industries/osteopathic/sns", label: "整体院のSNS運用", desc: "体の悩み解決コンテンツで集客" },
  { href: "/industries/clinic", label: "クリニック・医療機関", desc: "医療施設のWeb集客" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "SNS運用代行の詳細" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "整体院向けサイト制作" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの対応" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/contact", label: "無料相談", desc: "整体院・接骨院のWeb集客相談" },
];

export default function OsteopathicPage() {
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
              整体院・接骨院
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Osteopathic Clinic</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              整体院・接骨院・整骨院のWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              整体院・接骨院は「腰痛」「肩こり」「〇〇駅 整体」などの症状・地域名でGoogleマップ検索されることが多く、MEO対策が特に有効です。新規患者獲得からリピーター定着まで、医療広告ガイドラインに配慮しながら総合的に支援します。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              「院名で検索しても出てこない」「Googleマップで競合整体院の下に表示されている」「新規患者が紹介以外で増えない」—これらのお悩みを持つ整体院・接骨院・整骨院の集客改善を専門的に支援します。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "72px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Key Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              整体院・接骨院向けサービス
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", maxWidth: "900px" }}>
              {[
                {
                  href: "/industries/osteopathic/meo",
                  label: "整体院・接骨院のMEO対策",
                  desc: "「腰痛 整体 〇〇区」「肩こり 整骨院 〇〇駅」などでGoogleマップ上位表示を実現。新規患者の来院数を増やします。",
                },
                {
                  href: "/industries/osteopathic/sns",
                  label: "整体院・接骨院のSNS運用",
                  desc: "体の悩み解決コンテンツ・ストレッチ動画・ビフォーアフターでSNS集客を強化します。医療広告ガイドライン対応。",
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
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Why MEO Matters</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              整体院・接骨院にMEO対策が特に有効な理由
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "症状名＋地域名での検索が最も多い",
                  b: "「腰痛 整体 葛飾区」「肩こり 整骨院 亀有」のように症状と地域を組み合わせて検索するユーザーは来院意欲が高く、Googleマップ上位表示による集客効果が大きいです。",
                },
                {
                  n: "02",
                  t: "近接エリアの競合が少ない場合が多い",
                  b: "大手チェーンと比べると個人院・地域密着型の整体院は競合数が少ない傾向があり、正しいMEO対策をすれば上位表示が比較的早期に実現できます。",
                },
                {
                  n: "03",
                  t: "口コミが信頼構築に直結する業種",
                  b: "施術の効果・施術者の人柄・清潔感などをGoogle口コミで確認してから予約するユーザーが多く、口コミ数と評価点がそのまま来院数に反映されます。",
                },
                {
                  n: "04",
                  t: "ホットペッパー依存からの脱却",
                  b: "ポータルサイトへの掲載費・手数料を削減し、自社のGoogleマップ・ホームページ経由の直接予約を増やすことで収益性を改善できます。",
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

        <FaqSection items={faqItems} heading="整体院・接骨院のWeb集客についてよくある質問" bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="整体院・接骨院のWeb集客ご相談"
          body="MEO対策・SNS運用・ホームページ制作で新規患者来院とリピーター定着を実現します。医療広告ガイドライン対応のコンプライアンス配慮も含めてご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}

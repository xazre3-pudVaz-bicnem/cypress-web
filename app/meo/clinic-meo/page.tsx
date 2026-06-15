import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "医療・歯科クリニックのMEO対策｜患者集客支援",
  description: "医療・歯科クリニックのGoogleマップ集客。診療科目・時間・口コミ管理・Web予約連携など医療機関特有のMEO対策で新規患者獲得を支援します。",
  keywords: ["クリニック MEO対策", "歯科 Googleマップ", "医療機関 集客", "病院 GBP最適化"],
  openGraph: {
    title: "医療・歯科クリニックのMEO対策｜患者集客支援",
    description: "医療・歯科クリニックのGoogleマップ集客。診療科目・時間・口コミ管理・Web予約連携など医療機関特有のMEO対策で新規患者獲得を支援します。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_21_48.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/clinic-meo" },
};

const faqItems = [
  { q: "医療機関がMEO対策をする際の注意点はありますか？", a: "医療広告ガイドラインに基づき、誇張表現・保証表現・根拠のない比較などは禁止されています。GBPの説明文・投稿内容が医療広告規制に準拠しているか確認が必要です。" },
  { q: "クリニックの口コミ対策はどうすればいいですか？", a: "患者様から同意を得たうえで口コミをお願いする案内を作成します。診察後のメール・院内掲示・QRコードなどで誘導します。悪い口コミには個別に丁寧に返信し、改善姿勢を示します。" },
  { q: "Web予約システムとGBPを連携できますか？", a: "はい、GBPにWeb予約URLを設定できます。自社の予約システム・EPARK・カルテット・LINE公式アカウントなどのURLを登録することで、GBPから直接予約につながります。" },
  { q: "複数診療科がある場合のカテゴリ設定はどうすればいいですか？", a: "プライマリカテゴリにメインの診療科（例：内科）を設定し、セカンダリカテゴリに対応する他の科（例：小児科・皮膚科）を追加します。最大9つのカテゴリを設定できます。" },
  { q: "開業したばかりのクリニックでもMEO効果はありますか？", a: "はい。開業直後はGBP情報の充実・写真の充実・定期投稿から始めることが重要です。口コミが少ない初期でも、情報が完全なGBPは競合に比べて有利です。長期的に口コミを積み上げることで順位が上がります。" },
];

const relatedLinks = [
  { href: "/industries/clinic", label: "医療のWeb集客", desc: "医療機関向け支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO対策の基礎" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細" },
  { href: "/meo/review-management", label: "口コミ対策", desc: "口コミ管理" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "GBP設定" },
  { href: "/meo/map-ranking", label: "マップ上位表示", desc: "ローカルパック対策" },
  { href: "/meo/meo-audit", label: "MEO診断", desc: "現状診断サービス" },
  { href: "/meo/photo-posting", label: "写真投稿対策", desc: "GBP写真の最適化" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#9CA3AF" }}>ホーム</Link>
              <span style={{ margin: "0 8px", color: "#9CA3AF" }}>/</span>
              <Link href="/meo" style={{ color: "#9CA3AF" }}>MEO対策</Link>
              <span style={{ margin: "0 8px", color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#374151" }}>医療・歯科のMEO対策</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Medical MEO</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              医療・歯科クリニックのMEO対策
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              「近く 歯科」「〇〇市 内科 土曜診療」——患者が病院を探す際、Googleマップは最も使われるツールのひとつです。医療機関特有の注意点を踏まえたMEO対策で、新規患者の来院を増やします。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              医療広告ガイドラインへの準拠を守りながら、診療科目・診療時間・院内写真・口コミ対応を最適化することで、患者にとって「選びやすいクリニック」としてGoogleマップ上に認識されます。開業前の設定から継続的な運用管理まで、医療機関の集客課題を専門的にサポートします。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_21_48.png" alt="医療・歯科クリニックのMEO対策" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.55)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(16px,2.5vw,24px)", letterSpacing: "0.05em", textAlign: "center" }}>
              患者に選ばれるクリニックへ
            </p>
          </div>
        </section>

        {/* クリニックMEO課題 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Clinic MEO Challenges</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              クリニック・歯科がMEO対策をしないと起きる4つのリスク
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "地域検索で競合医院に負ける", b: "「○○市 歯科」「近くの内科」などで検索した患者は、ローカルパック上位3院しか見ません。MEO対策なしでは新規患者のほとんどが競合クリニックへ流れ続けます。" },
                { t: "新患獲得の機会を失う", b: "引越してきた住民・かかりつけ医を探している患者は必ずGoogleマップで検索します。GBPが最適化されていないクリニックはこの重要な新患獲得機会を失っています。" },
                { t: "口コミが管理されないまま拡散する", b: "低評価の口コミに返信しないまま放置すると、他の患者の印象が悪化します。誠実な返信が信頼回復と評判管理の基本です。全口コミへの返信が重要です。" },
                { t: "オンライン予約導線が機能しない", b: "GBPの予約URLが未設定、または古いURLのままでは、予約したい患者がその場で離脱します。GBPから直接予約できる導線設計が患者数向上に直結します。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Key Actions</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              医療・歯科特有のGBP設定ポイント
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "診療科目・専門分野の正確な設定", b: "プライマリカテゴリとセカンダリカテゴリで対応する診療科目をすべて設定します。「歯科」「矯正歯科」「口腔外科」など関連カテゴリを最大9つ追加できます。" },
                { n: "02", t: "診療時間・休診日の詳細設定", b: "曜日ごとの診療時間・休診日を正確に設定し、祝祭日は都度更新します。「土曜診療」「夜間診療」は特別営業時間として設定することで、条件検索でヒットします。" },
                { n: "03", t: "保険診療・自由診療の明記", b: "GBP説明文で保険適用・自由診療・混合診療の対応を明記します。患者が受診前に費用感を把握できることで来院のハードルが下がります。" },
                { n: "04", t: "駐車場・バリアフリー情報の設定", b: "属性設定で駐車場有無・バリアフリー対応・授乳室の有無などを設定します。育児中の親御さんや高齢者への配慮をアピールできます。" },
                { n: "05", t: "医師・スタッフの写真掲載", b: "院長・スタッフの顔写真・診察風景の写真を掲載することで、初診への不安を和らげます。清潔感のある院内写真も重要です。" },
                { n: "06", t: "口コミへの丁寧な個別返信", b: "患者のプライバシーに配慮しながら、口コミへの感謝と改善姿勢を示す返信を行います。医療広告ガイドラインに準拠した表現を使います。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9CA3AF", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Why It Matters</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              クリニックにMEO対策が重要な理由
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "患者の7割はGoogleマップで病院を検索する", b: "「近く 歯科」「〇〇駅 内科 土曜」などのGoogleマップ検索が病院選びの入口になっています。MEO対策なしでは競合クリニックに新患を奪われる可能性があります。" },
                { n: "02", t: "口コミが受診判断に直結する", b: "クリニックは「失敗したくない」心理が強いため、口コミの件数と評価が受診決定を左右します。高評価の口コミが多いクリニックは同条件の競合より選ばれやすくなります。" },
                { n: "03", t: "Web予約との連携で予約離脱を防ぐ", b: "GBPから直接予約できる状態にすることで、検索から予約までの導線を短縮し、離脱を防ぎます。特にスマートフォンからのアクセスで効果が顕著です。" },
                { n: "04", t: "医療広告ガイドラインを守りながら集客できる", b: "GBPのコンテンツは医療広告規制の範囲内で最適化できます。事実に基づいた情報を正確に伝えることで、安全かつ効果的な集客が可能です。" },
                { n: "05", t: "開業直後から地域認知度を高められる", b: "開業前からGBPを設定・最適化することで、地域での認知度を早期に高められます。口コミが少ない時期でも写真・情報充実で差別化できます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9CA3AF", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="医療機関のMEO対策ご相談" body="医療広告ガイドラインを踏まえた適切なGBP運用・MEO対策を支援します。開業前の設定支援から継続的な運用管理まで、医療機関の集客課題をお気軽にご相談ください。" />
      </main>
      <Footer />
    </>
  );
}

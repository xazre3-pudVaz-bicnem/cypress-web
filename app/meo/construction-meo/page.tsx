import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "建設業・工務店のMEO対策｜地域集客支援",
  description: "建設業・工務店・リフォーム会社のGoogleマップ集客。施工実績写真・対応エリア設定・口コミ獲得など建設業特有のMEO対策で問い合わせを増やします。",
  keywords: ["工務店 MEO対策", "建設業 Googleマップ", "リフォーム 集客", "建設会社 GBP最適化"],
  openGraph: {
    title: "建設業・工務店のMEO対策｜地域集客支援",
    description: "建設業・工務店・リフォーム会社のGoogleマップ集客。施工実績写真・対応エリア設定・口コミ獲得など建設業特有のMEO対策で問い合わせを増やします。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_18_57.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/construction-meo" },
};

const faqItems = [
  { q: "建設業でMEO対策は効果がありますか？", a: "はい。「〇〇市 工務店」「〇〇区 リフォーム」などの地域検索でGoogleマップ上位に表示されることで、問い合わせが増加します。特に地域密着型の工務店・リフォーム会社には効果的です。" },
  { q: "施工エリアが広い場合のGBP設定はどうすればいいですか？", a: "サービス提供エリアの設定で、施工対象の市区町村を追加します。ただし距離が離れるほど表示されにくくなるため、Webサイトに各エリアのページを作ることで補完します。" },
  { q: "建設業で口コミを集めるのが難しいのですが？", a: "施主様に施工完了後にメール・LINE・ハガキでお礼をお送りする際、口コミのお願いを添えます。QRコードを記載した口コミ依頼カードを手渡しするのも効果的です。" },
  { q: "建設業許可番号はGBPに記載できますか？", a: "GBPの説明文に建設業許可番号・一級建築士事務所登録番号などを記載できます。信頼性・専門性のアピールになります。" },
  { q: "リフォームと新築のGBPは別に作るべきですか？", a: "通常は1拠点1GBPが推奨です。リフォーム・新築・外構など複数事業を扱う場合は、GBPのサービス欄に全事業を登録し、Webサイトに各ページを作って対応します。" },
];

const relatedLinks = [
  { href: "/industries/construction", label: "建設業のWeb集客", desc: "建設業向け総合支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO対策の基礎" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細" },
  { href: "/meo/local-keyword", label: "ローカルキーワード", desc: "地域キーワード対策" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "GBP設定" },
  { href: "/meo/photo-posting", label: "写真投稿対策", desc: "施工写真の最適化" },
  { href: "/meo/review-management", label: "口コミ対策", desc: "口コミ獲得・返信" },
  { href: "/meo/meo-audit", label: "MEO診断", desc: "現状診断サービス" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px", color: "#9CA3AF" }}>/</span>
              <Link href="/meo" style={{ color: "#6B7280" }}>MEO対策</Link>
              <span style={{ margin: "0 8px", color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#374151" }}>建設業のMEO対策</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Construction MEO</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              建設業・工務店のMEO対策
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              「〇〇市 工務店」「〇〇区 リフォーム 評判」——地域の建設会社・工務店を探す人の多くはGoogleマップを使います。施工実績の写真と信頼できる口コミが、受注につながる問い合わせを生み出します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              建設業はホームページを持っていても更新が少なく、Googleマップで競合に埋もれてしまうケースが多くあります。GBPの施工実績写真・対応エリア設定・資格情報・口コミ対応を整備することで、検索ユーザーから「信頼できる地域の業者」として選ばれやすくなります。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_57.png" alt="建設業・工務店のMEO対策" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.55)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(16px,2.5vw,24px)", letterSpacing: "0.05em", textAlign: "center" }}>
              地域から選ばれる工務店へ
            </p>
          </div>
        </section>

        {/* 建設業MEO課題 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Construction MEO Challenges</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              工務店・建設業がMEO対策で失っている4つの集客機会
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "「○○市 工務店」で見つけてもらえない", b: "外壁塗装・リフォーム・新築を検討している地域住民は必ずGoogleマップで近くの工務店を検索します。ローカルパックに入れない工務店は、最も購買意欲の高いユーザーを取り逃しています。" },
                { t: "施工写真がなく信頼感が伝わらない", b: "建設・リフォームは高額発注のため、見込み客は実績写真を最重要視します。GBPに施工前後のビフォーアフター写真がないと、実力が伝わらず問い合わせに至りません。" },
                { t: "口コミがゼロで選ばれない", b: "建設業は信頼が選択の根拠になります。口コミが少ない工務店は「本当に大丈夫か」という不安が払拭されず、問い合わせを他社に持っていかれます。" },
                { t: "完工実績がGoogleに伝わっていない", b: "GBPの定期投稿機能を使って施工実績・お客様の声・季節のメンテナンス情報を発信することで、Googleからの評価とユーザーの信頼が同時に高まります。" },
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
              建設業特有のGBP最適化ポイント
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "施工実績・完成写真の豊富な投稿", b: "外壁塗装・リフォーム・新築など施工前後の写真を多数掲載します。実績が視覚的に伝わることで、問い合わせ前の信頼獲得につながります。" },
                { n: "02", t: "対応エリアの正確な設定", b: "サービス提供エリアの市区町村を正確に設定します。エリア外からの問い合わせを防ぎ、対応可能な地域からの問い合わせを増やします。" },
                { n: "03", t: "事業内容（工事種別）の詳細設定", b: "注文住宅・リフォーム・外構工事・屋根工事など提供するすべての工事種別をサービス欄に登録します。具体的なサービス名でのキーワード検索にヒットします。" },
                { n: "04", t: "資格・認定・許可番号の記載", b: "建設業許可番号・一級建築士事務所・各種資格・メーカー認定店などを説明文に記載します。専門性と信頼性のアピールになります。" },
                { n: "05", t: "施主様からの口コミ獲得", b: "工事完了後のお礼とともに口コミをお願いするフローを作ります。「親切だった」「仕上がりが良かった」などの具体的な口コミが新規問い合わせの背中を押します。" },
                { n: "06", t: "Google投稿で施工事例を発信", b: "完成した施工事例・お客様の声・季節のキャンペーンなどをGoogle投稿で定期発信します。アクティブなGBPはGoogleの評価が上がります。" },
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
              建設業にMEO対策が必要な理由
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "高単価案件の問い合わせが増える", b: "「新築建て替え 〇〇市」「外壁塗装 〇〇区 相場」などの検索はリフォーム・建設の具体的な検討者です。MEO対策でこうした高意欲ユーザーに直接リーチできます。" },
                { n: "02", t: "紹介以外の新規顧客を獲得できる", b: "工務店は紹介頼みになりがちですが、Googleマップ経由で全く新しい顧客層にアプローチできます。エリアを問わず検索ユーザーに届く仕組みを構築します。" },
                { n: "03", t: "施工写真が最大の差別化になる", b: "競合と差をつけるには実績を「見せる」ことが効果的です。施工前後の比較写真・完成写真を多数掲載することで、技術力と誠実さを視覚的に証明できます。" },
                { n: "04", t: "問い合わせ件数の変動を把握できる", b: "GBPのインサイト機能で検索数・電話タップ数・ルート検索数などのデータを確認できます。集客施策の効果測定と改善に活用できます。" },
                { n: "05", t: "地域での知名度と信頼性が向上する", b: "Googleマップ上位表示・口コミ高評価を維持することで、「この地域の信頼できる工務店」としてのポジションを確立できます。長期的な集客基盤となります。" },
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
        <PageContactCTA heading="建設業のMEO対策ご相談" body="工務店・リフォーム会社・建設業のGoogleマップ集客を支援します。GBP最適化・施工写真の投稿・口コミ対策まで一括でサポートします。" />
      </main>
      <Footer />
    </>
  );
}

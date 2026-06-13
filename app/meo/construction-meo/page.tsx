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
};

const faqItems = [
  { q: "建設業でMEO対策は効果がありますか？", a: "はい。「〇〇市 工務店」「〇〇区 リフォーム」などの地域検索でGoogleマップ上位に表示されることで、問い合わせが増加します。特に地域密着型の工務店・リフォーム会社には効果的です。" },
  { q: "施工エリアが広い場合のGBP設定はどうすればいいですか？", a: "サービス提供エリアの設定で、施工対象の市区町村を追加します。ただし距離が離れるほど表示されにくくなるため、Webサイトに各エリアのページを作ることで補完します。" },
  { q: "建設業で口コミを集めるのが難しいのですが？", a: "施主様に施工完了後にメール・LINE・ハガキでお礼をお送りする際、口コミのお願いを添えます。QRコードを記載した口コミ依頼カードを手渡しするのも効果的です。" },
  { q: "建設業許可番号はGBPに記載できますか？", a: "GBPの説明文に建設業許可番号・一級建築士事務所登録番号などを記載できます。信頼性・専門性のアピールになります。" },
  { q: "リフォームと新築のGBPは別に作るべきですか？", a: "通常は1拠点1GBPが推奨です。リフォーム・新築・外構など複数事業を扱う場合は、GBPのサービス欄に全事業を登録し、Webサイトに各ページを作って対応します。" },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策とは", desc: "MEO対策の基礎" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "GBP設定" },
  { href: "/meo/local-keyword", label: "ローカルキーワード", desc: "地域キーワード対策" },
  { href: "/industries/construction", label: "建設業のWeb集客", desc: "建設業向け総合支援" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細" },
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
              <Link href="/meo">MEO対策</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              建設業のMEO対策
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Construction MEO</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              建設業・工務店のMEO対策
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              「〇〇市 工務店」「〇〇区 リフォーム 評判」——地域の建設会社・工務店を探す人の多くはGoogleマップを使います。施工実績の写真と信頼できる口コミが、受注につながる問い合わせを生み出します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_14_54.png" alt="建設業・工務店のMEO対策" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Key Actions</p>
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
        <PageContactCTA heading="建設業のMEO対策ご相談" body="工務店・リフォーム会社・建設業のGoogleマップ集客を支援します。GBP最適化・施工写真の投稿・口コミ対策まで一括でサポートします。" />
      </main>
      <Footer />
    </>
  );
}

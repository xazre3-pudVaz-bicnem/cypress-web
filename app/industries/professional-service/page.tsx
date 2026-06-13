import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "士業・コンサルタントのWeb集客｜税理士・司法書士・社労士",
  description: "税理士・司法書士・行政書士・社労士・弁護士などの士業・コンサルタントのWeb集客。SEO・MEO・ホームページ制作で顧問先・相談案件を継続的に獲得。",
};

const faqItems = [
  { q: "士業のホームページで最も重要なコンテンツは何ですか？", a: "専門家としての信頼性（資格・実績・所属団体）・得意分野の具体的な説明・費用の目安・問い合わせ導線が重要です。「この先生に相談したい」という決断を後押しする情報構成が必要です。" },
  { q: "税理士・弁護士のMEO対策は有効ですか？", a: "はい。「○○市 税理士」「○○駅 弁護士 相談」など地域名での検索でGoogleマップに上位表示されることは、地域の個人・中小企業顧客の獲得に効果的です。" },
  { q: "士業のSEO対策で狙うべきキーワードは？", a: "「○○市 確定申告 税理士」「相続 手続き ○○区」「会社設立 行政書士 ○○」など、顧客が抱える具体的な課題+地域名+士業名の組み合わせが効果的です。" },
  { q: "コンサルタントのホームページはどう差別化すべきですか？", a: "支援実績・クライアントの声・解決した課題の具体例・代表者の経歴・考え方・提供価値の独自性を明確に伝えることで差別化できます。「なぜこの先生/コンサルタントなのか」が伝わることが重要です。" },
  { q: "士業のブログ・コラムはSEOに効果がありますか？", a: "はい。専門知識を活かした解説記事・事例紹介・法改正情報などのコンテンツは、顧客の疑問を解決しながらSEO評価も高めます。E-E-A-T（専門性・権威性・信頼性）が評価されます。" },
];

const relatedLinks = [
  { href: "/industries", label: "業種別Web集客", desc: "業種別トップ" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索対策" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
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
              士業・コンサルタント
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Professional Services</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              士業・コンサルタントのWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              税理士・司法書士・行政書士・社労士・弁護士・コンサルタントのWeb集客は、専門家としての信頼性と具体的な解決力を伝えることが核心です。SEO・MEO・ホームページで継続的な相談案件を獲得します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_03.png" alt="士業・コンサルタントのWeb集客" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              士業・コンサルタントのWeb集客戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "専門性・信頼性を示すホームページ", b: "資格・実績・所属団体・支援事例・代表者プロフィールを丁寧に掲載し、「信頼できる専門家」という第一印象を作ります。費用の目安を明示することで問い合わせ前の不安を解消します。" },
                { n: "02", t: "地域検索でのMEO対策", b: "「○○市 税理士」「○○区 司法書士」など地域名での検索でGoogleマップ上位表示を目指します。事務所写真・業務内容・口コミを充実させて選ばれる理由を明確にします。" },
                { n: "03", t: "専門コンテンツでSEOと信頼を構築", b: "税制改正解説・相続手続きガイド・会社設立の手順など、顧客の疑問に答える専門コンテンツを蓄積します。E-E-A-T（経験・専門性・権威性・信頼性）がSEO評価を高めます。" },
                { n: "04", t: "AIO対策でAI検索からの指名を獲得", b: "ChatGPT・Geminiなどで「○○市のおすすめ税理士」と検索されたとき引用される事務所になるための情報構造を整備します。専門性の高いコンテンツ・著者情報・FAQ実装が重要です。" },
                { n: "05", t: "初回相談の敷居を下げる導線設計", b: "「30分無料相談」「メールで気軽に質問」など初回接触の心理的障壁を下げる施策を設置します。問い合わせフォームは入力3項目以内を目標にシンプルに設計します。" },
                { n: "06", t: "紹介・リピートを生むデジタル関係構築", b: "メールマガジン・LINE公式アカウントで税制・法改正・最新情報を定期発信することで、既存顧客との関係を維持しつつ紹介につながる信頼を醸成します。" },
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
        <PageContactCTA heading="士業・コンサルタントのWeb集客ご相談" body="税理士・司法書士・行政書士・社労士・弁護士・コンサルタントのSEO・MEO・ホームページ制作をご相談ください。専門家としての信頼を構築する集客を設計します。" />
      </main>
      <Footer />
    </>
  );
}

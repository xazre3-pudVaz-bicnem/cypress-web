import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Googleナレッジグラフ対策｜AIに認識される企業になる｜AIO",
  description: "GoogleナレッジグラフへのエンティティとしてのGoogleの認識を高めるAIO対策。Organization構造化データ・GBP連携・権威サイト掲載で企業の知名度を向上。",
};

const faqItems = [
  { q: "Googleナレッジグラフに登録されるとどう変わりますか？", a: "ブランド名で検索した際に右側に「ナレッジパネル」が表示されるようになります。会社情報・ロゴ・SNSリンク・関連情報が一覧で表示され、信頼性と認知度が大きく向上します。" },
  { q: "中小企業もナレッジグラフに登録されますか？", a: "はい。ウィキペディアへの掲載は難しくても、GBP・公式サイト・SNSアカウント・プレスリリースなどを整備することで、Googleがエンティティとして認識する可能性があります。" },
  { q: "ナレッジグラフに間違った情報が表示されています。修正できますか？", a: "ナレッジパネルが表示されている場合、「ナレッジパネルをフィードバック」から修正要請を出せます。GBP・公式サイト・構造化データの情報を正確にすることで修正されやすくなります。" },
  { q: "AI検索とナレッジグラフはどう関係していますか？", a: "GoogleのAI（Gemini等）はナレッジグラフのデータを学習・参照しています。ナレッジグラフに登録されることで、AI検索での回答にも企業情報が引用される可能性が高まります。" },
  { q: "構造化データを実装すればナレッジグラフに登録されますか？", a: "構造化データの実装はGoogleがエンティティを認識するための重要なシグナルですが、それだけでは不十分です。GBP・SNS・被リンク・プレスリリースなど複数のシグナルを組み合わせることが重要です。" },
];

const relatedLinks = [
  { href: "/aio", label: "AIO対策とは", desc: "AIO対策の基礎" },
  { href: "/aio/entity-optimization", label: "エンティティ最適化", desc: "エンティティの認識向上" },
  { href: "/aio/organization-data", label: "Organization構造化データ", desc: "Schema実装" },
  { href: "/aio/llm-optimization", label: "LLM最適化", desc: "AI言語モデル対策" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "サービス詳細" },
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
              <Link href="/aio">AIO対策</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              ナレッジグラフ
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Knowledge Graph</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              Googleナレッジグラフ対策｜AIに認識される企業へ
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              Googleナレッジグラフは、Googleが管理する実体（企業・人物・場所・概念）の知識データベースです。ここに登録されることで、AI検索での引用率が上がり、ブランドとしての権威性が高まります。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="Googleナレッジグラフ対策" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.25)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ナレッジグラフへの情報浸透方法
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "Organizationスキーマの正確な実装", b: "サイトに会社名・URL・ロゴ・住所・電話・メール・SNSリンク（sameAs）を含むOrganizationスキーマをJSON-LDで実装します。Googleが企業エンティティを認識するための最重要ステップです。" },
                { n: "02", t: "Googleビジネスプロフィールとの整合", b: "GBPの会社名・住所・電話・ウェブサイトURLをWebサイトの情報と完全に一致させます。情報の一貫性がGoogleの信頼性評価を高めます。" },
                { n: "03", t: "SNS公式アカウントの整備とsameAsリンク", b: "X（旧Twitter）・Instagram・LinkedIn・FacebookなどのSNS公式アカウントURLをOrganizationスキーマのsameAsプロパティに追加します。" },
                { n: "04", t: "権威サイト・業界メディアへの掲載", b: "業界メディア・ニュースサイト・専門家ディレクトリへの掲載はGoogleの権威性評価を高めます。プレスリリース配信・メディア取材への対応が有効です。" },
                { n: "05", t: "プレスリリースの継続的な発信", b: "PR TIMESなどのプレスリリース配信サービスで企業活動を定期発信します。信頼性の高い複数のサイトに企業情報が掲載されることでエンティティとしての認識が強化されます。" },
                { n: "06", t: "ウィキペディアへの掲載（長期目標）", b: "ウィキペディアへの掲載はナレッジグラフ登録の最も強力なシグナルです。一定の社会的実績・メディア掲載歴・独立した情報源からの言及が必要です。" },
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
        <PageContactCTA heading="ナレッジグラフ対策のご相談" body="Organizationスキーマの実装・GBPとの整合・SNS整備・プレスリリース戦略など、Googleナレッジグラフへの登録を支援します。AI検索時代のブランド戦略をご相談ください。" />
      </main>
      <Footer />
    </>
  );
}

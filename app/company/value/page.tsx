import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "企業理念・バリュー｜株式会社サイプレス",
  description:
    "株式会社サイプレスの企業理念・バリュー・大切にしていること。Web集客支援を通じて地域の中小企業・個人事業主の成長に貢献するという使命と価値観を詳しくご紹介します。",
  openGraph: {
    title: "企業理念・バリュー｜株式会社サイプレス",
    description: "サイプレスが大切にする使命・価値観・行動指針。誠実さと成果へのコミットメントを支援の核心に。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/company/value" },
};

const faqItems = [
  {
    q: "サイプレスが最も大切にしていることは何ですか？",
    a: "お客様のビジネスに実際の成果をもたらすことです。「制作した」「施策を打った」ことではなく、問い合わせ増加・来店数増加・売上向上という実際の変化にこだわります。成果が出るまで戦略を調整しながら伴走します。",
  },
  {
    q: "地域の中小企業を支援する理由は何ですか？",
    a: "良いサービスや技術を持っているのにWebでの発信力がなく、顧客に届かない事業者が多いと感じているからです。大手企業に比べてWebマーケティング投資が難しい中小企業・個人事業主が、正当に評価される機会を作ることが私たちの使命です。",
  },
  {
    q: "長期的な関係を重視するとはどういう意味ですか？",
    a: "Web集客の成果は一度の施策ではなく、継続的な改善によって積み上がります。月次レポートによる進捗共有・改善提案の継続・Googleアルゴリズム変更への対応などを通じて、短期的な成果だけでなく持続可能な集客基盤を構築します。",
  },
];

const relatedLinks = [
  { href: "/company", label: "会社概要", desc: "サイプレス会社情報" },
  { href: "/company/message", label: "代表メッセージ", desc: "代表・織田春樹より" },
  { href: "/company/philosophy", label: "経営方針", desc: "事業への姿勢と方針" },
  { href: "/company/support-policy", label: "サポート方針", desc: "支援スタンスの詳細" },
  { href: "/recruit", label: "採用情報", desc: "仲間を募集しています" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談はこちら" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", gap: "6px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/company" style={{ color: "#6B7280" }}>会社情報</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>企業理念・バリュー</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Value & Philosophy</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              企業理念・バリュー
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              株式会社サイプレスが大切にしている考え方・行動指針・お客様との関係における価値観をお伝えします。
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "720px", marginBottom: "72px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px" }}>Mission</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>ミッション</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#0d1b2a", fontFamily: "var(--font-serif)", fontWeight: 500, borderLeft: "3px solid #0d1b2a", paddingLeft: "20px", marginBottom: "20px" }}>
                すべての地域ビジネスが、Webを通じて正当に評価される世界をつくる。
              </p>
              <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9", marginBottom: "12px" }}>
                技術力・専門知識・資金力があっても、Webでの発信力がなければ顧客に届かない——そんな不条理をなくしたいと思っています。本当に良いサービスを持つ事業者が、正当に選ばれる仕組みを提供することが私たちの使命です。
              </p>
              <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>
                葛飾区を拠点に、地域密着型の支援から全国対応まで、中小企業・個人事業主のWeb集客課題を解決することで、その地域のビジネス全体を豊かにするサイクルを作り続けます。
              </p>
            </div>

            <div style={{ maxWidth: "720px", marginBottom: "72px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px" }}>Vision</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>ビジョン</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#0d1b2a", fontFamily: "var(--font-serif)", fontWeight: 500, borderLeft: "3px solid #c4b89a", paddingLeft: "20px", marginBottom: "20px" }}>
                Web集客を、特定の大企業だけの専売特許にしない。
              </p>
              <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>
                SEO対策・MEO対策・AIO対策・SNS運用・Web制作はすべて、知識と実行力があれば小さな会社でも大きな成果を出せる分野です。私たちはその知識と実行力を中小企業・個人事業主のもとへ届けることで、競争の公平性を高めていきます。
              </p>
            </div>

            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px" }}>Values</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>バリュー</h2>
              {[
                { n: "01", t: "成果にコミットする", b: "「制作した」「施策を実施した」ことがゴールではありません。問い合わせ増加・来店数増加・売上向上という実際の成果にこだわります。施策の効果を継続的に測定し、改善を繰り返します。" },
                { n: "02", t: "誠実に、わかりやすく伝える", b: "専門用語を使わず、何をなぜ行うのか・どんな効果が期待できるのかをわかりやすく説明します。お客様が自分でも理解して判断できる状態を作ることを大切にしています。" },
                { n: "03", t: "長期的な関係を築く", b: "一度きりの制作・施策ではなく、成果が出続ける長期パートナーとしての関係を目指します。定期的なレポートと改善提案で、お客様のビジネス成長を継続的にサポートします。" },
                { n: "04", t: "最新技術を実用化する", b: "AI・最新のSEO手法・新しいWeb技術を常にキャッチアップし、実際のお客様支援に活用します。「理論だけ」ではなく「実際に使えるもの」に厳選して導入します。" },
                { n: "05", t: "地域と社会に貢献する", b: "葛飾区を拠点に、地域の中小企業・個人事業主の発展を支援します。地域のビジネスが元気になることで、地域全体が豊かになるというサイクルを大切にしています。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "18px", fontWeight: 700, minWidth: "32px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 行動規範 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Code of Conduct</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              行動規範
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "成果保証はしない、でも成果にこだわる", b: "SEO・MEO・AIO対策において、具体的な成果を保証することはしません。ただし、成果を出すための施策選定・改善・継続を全力で行います。" },
                { t: "誇大表現を使わない", b: "根拠のない実績数・No.1表現・過大な約束は行いません。正確な情報と現実的な見通しをお伝えすることを徹底します。" },
                { t: "お客様の意思決定を支援する", b: "押し売りや不必要なサービスの追加提案はしません。お客様が自分の意思で最適な選択ができるよう、必要な情報を提供します。" },
                { t: "守秘義務を徹底する", b: "お客様のビジネス情報・競合戦略・データはすべて厳重に管理します。第三者への開示は行いません。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="企業理念についてよくある質問" bgColor="#f9f8f5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="私たちの考えに共感いただけたら"
          body="株式会社サイプレスのWeb集客支援にご興味をお持ちの方は、まずはお気軽にご相談ください。一緒に成果を作る長期パートナーとして貢献します。"
        />
      </main>
      <Footer />
    </>
  );
}

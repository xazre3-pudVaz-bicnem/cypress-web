import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "採用情報｜Webマーケティング営業 正社員募集｜株式会社サイプレス",
  description:
    "株式会社サイプレスの採用情報。MEO対策・SEO対策・ホームページ制作を提案するWebマーケティング営業（正社員）を募集中。月給35万円以上・年間休日130日・未経験歓迎。東京葛飾区。",
  keywords: ["Webマーケティング 営業 求人", "MEO 営業 求人", "SEO 営業 求人", "未経験 Webマーケティング 営業", "東京 Webマーケティング 求人"],
  openGraph: {
    title: "採用情報｜Webマーケティング営業 正社員募集｜株式会社サイプレス",
    description: "Webマーケティング営業（正社員）募集。月給35万円以上・年間休日130日・未経験歓迎。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/recruit" },
};

const faqItems = [
  {
    q: "現在、どの職種を募集していますか？",
    a: "現在はWebマーケティング営業職（正社員）のみ募集しています。MEO対策・SEO対策・ホームページ制作・AIO対策・AI活用支援などを中小企業の経営者へ提案する営業ポジションです。",
  },
  {
    q: "未経験でも応募できますか？",
    a: "はい、歓迎します。Webマーケティングや営業の経験がなくても、「成長意欲がある」「経営者と対話できる力をつけたい」「しっかり稼ぎたい」という方であればご応募ください。入社後のサポート体制を整えています。",
  },
  {
    q: "月給35万円以上とありますが、未経験でも同額ですか？",
    a: "給与は経験・スキル・面談での評価をもとに決定します。詳細は面談時にご案内します。",
  },
  {
    q: "年間休日130日は本当ですか？",
    a: "はい。仕事の成果を出しながら、プライベートも充実させていただくことを大切にしています。詳細は面談時にご確認ください。",
  },
  {
    q: "選考フローを教えてください。",
    a: "まずはお問い合わせフォームよりエントリーください。書類確認後、面談（1〜2回）を経て内定という流れです。オンライン面談にも対応しています。",
  },
];

export default function RecruitPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#0d1b2a", position: "relative", padding: "100px 0 72px", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/ChatGPT Image 2026年6月14日 21_13_52.png"
              alt="株式会社サイプレス採用 チームミーティング"
              fill
              className="object-cover"
              sizes="100vw"
              priority
              style={{ opacity: 0.18 }}
            />
          </div>
          <div style={{ position: "relative", zIndex: 10, maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <nav style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "32px" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.4)" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span>採用情報</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "16px" }}>Careers</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(30px,4.5vw,52px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px" }}>
              採用情報
            </h1>
            <p style={{ fontSize: "17px", lineHeight: "1.9", color: "rgba(255,255,255,0.75)", maxWidth: "560px", marginBottom: "12px" }}>
              現在募集しているのは<strong style={{ color: "#ffffff" }}>Webマーケティング営業（正社員）</strong>のみです。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "rgba(255,255,255,0.6)", maxWidth: "540px" }}>
              MEO対策・SEO対策・ホームページ制作などのWeb集客商材を、中小企業の経営者へ提案する営業職です。
            </p>
          </div>
        </section>

        {/* 募集ポジション — 営業職のみ */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Open Positions</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              現在の募集職種
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", marginBottom: "40px" }}>現在募集しているのは営業職のみです。マーケティング職・ライター・AIオペレーターは現在募集していません。</p>
            <Link
              href="/recruit/sales"
              style={{ display: "block", borderTop: "1px solid #e8e4dc", borderBottom: "1px solid #e8e4dc", padding: "32px 0", textDecoration: "none" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>
                    Webマーケティング営業（正社員）
                  </p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", maxWidth: "560px", marginBottom: "16px" }}>
                    MEO対策・SEO対策・ホームページ制作・AIO対策を中小企業の経営者へ提案する営業職です。月給35万円以上・年間休日130日。未経験歓迎。
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {["月給35万円以上", "年間休日130日", "正社員", "未経験歓迎", "提案型営業"].map((tag) => (
                      <span key={tag} style={{ fontSize: "11px", padding: "4px 12px", background: "#e8e4dc", color: "#374151", borderRadius: "100px" }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <span style={{ color: "#9ca3af", fontSize: "20px", marginLeft: "24px", flexShrink: 0 }}>→</span>
              </div>
            </Link>
          </div>
        </section>

        {/* 働く理由 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Why Cypress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              サイプレスで働く理由
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  n: "01",
                  title: "稼げる × 休める",
                  body: "月給35万円以上・年間休日130日。仕事もプライベートも本気で充実させてほしいという考え方が根本にあります。",
                },
                {
                  n: "02",
                  title: "AI時代に強い営業スキルが身につく",
                  body: "MEO・SEO・AIO・AI活用支援という成長領域の商材を扱い、提案力・経営者対応力を磨ける環境です。",
                },
                {
                  n: "03",
                  title: "成長とキャリアの選択肢が広い",
                  body: "成果次第で高収入を狙え、チームリーダー・マネジメントなど複数のキャリアパスがあります。",
                },
              ].map((item) => (
                <div key={item.n} style={{ padding: "28px", background: "#f8f6f2", border: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", marginBottom: "10px" }}>{item.n}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "10px" }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 会社情報 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Company Info</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "32px" }}>会社基本情報</h2>
            <div style={{ maxWidth: "680px" }}>
              {[
                { label: "会社名", value: "株式会社サイプレス" },
                { label: "代表取締役", value: "織田 春樹" },
                { label: "設立", value: "2026年5月13日" },
                { label: "所在地", value: "東京都葛飾区白鳥4-6-1-623" },
                { label: "事業内容", value: "Webマーケティング支援（MEO・SEO・AIO対策）・ホームページ制作・AI活用支援・SNS運用" },
                { label: "お問い合わせ", value: "consulting.meo@gmail.com" },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", gap: "32px", padding: "14px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ width: "120px", flexShrink: 0, fontSize: "13px", fontWeight: 600, color: "#0d1b2a" }}>{row.label}</span>
                  <span style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{row.value}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="採用についてよくある質問" bgColor="#ffffff" />
        <PageContactCTA
          heading="採用エントリー・ご質問はこちら"
          body="営業職の採用に関するご質問・エントリーは、お問い合わせフォームよりお気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}

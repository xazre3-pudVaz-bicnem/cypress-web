import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import { supportPages } from "@/lib/data/supportPages";

export const metadata: Metadata = {
  title: "サポート・運用支援一覧｜継続運用・コンサルティング・研修｜株式会社サイプレス",
  description:
    "Web集客の継続運用サポート・月次レポーティング・コンサルティング・社内研修・トラブル対応・アナリティクス設定まで、幅広いサポートサービスを提供します。",
  keywords: ["Web集客 サポート", "MEO 運用代行", "SEO 継続支援", "マーケティング コンサルティング", "Web集客 研修"],
  openGraph: {
    title: "サポート・運用支援一覧｜継続運用・コンサルティング・研修｜株式会社サイプレス",
    description: "Web集客の継続運用サポート・月次レポーティング・コンサルティングまで幅広く対応。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/support" },
};

const faqItems = [
  {
    q: "サポートは最低何ヶ月から利用できますか？",
    a: "継続運用サポートは3ヶ月からのご利用をお願いしています。Web集客は短期では効果が安定しにくいため、最低3〜6ヶ月の継続が成果につながります。単発のコンサルティングや研修は1回からご利用可能です。",
  },
  {
    q: "運用を途中でやめた場合、それまでの成果はどうなりますか？",
    a: "MEO対策・SEO対策で積み上げた順位・口コミ・コンテンツは、サポートを終了しても維持されます。ただし競合が継続的に対策を行う環境では、放置すると徐々に順位が下がります。サポート終了後の自社運用方法もご支援します。",
  },
  {
    q: "社内にWeb担当者がいないのですが、サポートを利用できますか？",
    a: "はい、むしろWeb担当者がいない中小企業こそサポートの主なお客様です。GBP更新・SEO施策・レポート確認まですべてを代行または伴走で支援します。担当者様の工数を最小限に抑えた運用体制をご提案します。",
  },
  {
    q: "コンサルティングと運用代行はどう違いますか？",
    a: "コンサルティングは「戦略立案・方向性のアドバイス・施策の優先付け」を行い、実施は自社で行う形です。運用代行はGBP投稿・口コミ返信・SEO施策実施まですべてを代行します。予算・リソースに応じて最適な形をご提案します。",
  },
  {
    q: "月次レポートの内容を教えてください",
    a: "MEO管理プランではGoogleビジネスプロフィールのインサイト（表示回数・電話タップ数・ルート検索数・写真閲覧数）の推移、実施施策のまとめ、口コミ状況、次月の施策計画を含むレポートをご提供します。数値の解説と改善提案も含みます。",
  },
];

export default function SupportPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", gap: "6px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>サポート</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Support</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              サポート・運用支援
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "12px" }}>
              Web集客は「作って終わり」ではありません。継続的な運用・改善・データ分析でこそ成果が積み上がります。
              サイプレスのサポートサービスで、長期的な集客力を構築します。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              月次運用代行から、コンサルティング・社内研修・トラブル対応まで、
              貴社の体制・予算・目標に合わせたサポートプランをご提案します。
            </p>
          </div>
        </section>

        {/* Image band */}
        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_21_48.jpg"
            alt="Web集客サポート・継続的な運用支援"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.5)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(18px,2.5vw,30px)", lineHeight: 1.5 }}>
                「やって終わり」にしない。<br />継続的な改善で集客力を高める。
              </p>
            </div>
          </div>
        </section>

        {/* Support pages grid */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>All Support</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              サポート・運用支援一覧
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "#ece8e0" }}>
              {supportPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/support/${page.slug}`}
                  style={{ background: "#ffffff", padding: "28px", textDecoration: "none", display: "block" }}
                >
                  <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", fontSize: "10px", color: "#9ca3af", marginBottom: "8px" }}>
                    {page.titleEn}
                  </p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", color: "#0d1b2a", fontWeight: 700, marginBottom: "10px", lineHeight: 1.4 }}>
                    {page.title}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>
                    {page.intro.slice(0, 60)}...
                  </p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "12px", fontSize: "12px", color: "#9ca3af" }}>
                    詳しく見る
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why継続サポートが重要か */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Why Continuous</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              継続サポートが集客成果に直結する理由
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "rgba(196,184,154,0.2)", maxWidth: "900px" }}>
              {[
                { label: "Googleアルゴリズムは変化し続ける", desc: "MEO・SEOの評価基準は定期的にアップデートされます。一度設定して終わりにすると、アップデートで順位が下がるリスクがあります。" },
                { label: "口コミは継続的に獲得し続ける必要がある", desc: "口コミの最新性はGoogleマップの順位評価に影響します。継続的な口コミ獲得と返信が必要です。" },
                { label: "競合も継続的に施策を実施している", desc: "競合が継続的にMEO・SEO対策をしている中で、自社が止まれば相対的に評価が下がります。" },
                { label: "データ蓄積で改善精度が上がる", desc: "月次データを積み上げることで、どの施策がどのくらい効果があるかが明確になり、PDCA精度が上がります。" },
              ].map((item) => (
                <div key={item.label} style={{ padding: "28px", background: "#0d1b2a" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "10px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: "1.8" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="サポート・運用支援についてよくある質問" bgColor="#f9f8f5" />

        <RelatedPages
          links={[
            { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ集客の運用支援" },
            { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示の継続支援" },
            { href: "/services/sns", label: "SNS運用サービス", desc: "SNSの継続的な運用代行" },
            { href: "/process", label: "ご利用の流れ", desc: "相談から運用開始までのステップ" },
            { href: "/cost", label: "費用・料金ガイド", desc: "各サポートの費用相場" },
            { href: "/guide", label: "Web集客ガイド", desc: "実践的なガイド集" },
            { href: "/contact", label: "無料相談", desc: "サポート内容のご相談" },
          ]}
        />

        <PageContactCTA
          heading="どんなサポートが必要か相談しませんか"
          body="現在の状況・課題・ご予算をお聞かせいただければ、最適なサポートプランをご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}

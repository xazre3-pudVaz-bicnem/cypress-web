import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "パートナー制度｜取次店・販売代理店・紹介パートナー募集｜株式会社サイプレス",
  description:
    "株式会社サイプレスのパートナー制度一覧。取次店（紹介パートナー）・販売代理店・葛飾区起業者向けパートナー制度など、Web集客サービスの紹介・販売に関わるパートナープログラムをご案内します。",
  keywords: [
    "パートナー制度 Web集客",
    "取次店 募集",
    "販売代理店 募集",
    "紹介パートナー 募集",
    "Web制作 代理店",
    "SEO 代理店",
    "MEO 代理店",
    "葛飾区 代理店募集",
    "副業 営業 パートナー",
  ],
  openGraph: {
    title: "パートナー制度｜取次店・販売代理店・紹介パートナー募集",
    description: "株式会社サイプレスのパートナー制度一覧。Web集客サービスの紹介・販売に関わるパートナープログラムをご案内します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/partner" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
    { "@type": "ListItem", position: 2, name: "パートナー制度", item: "https://www.cypress-all.co.jp/partner" },
  ],
};

const programs = [
  {
    href: "/partner/referral",
    label: "取次店（紹介パートナー）",
    sub: "紹介するだけのシンプルな制度",
    desc: "知人・顧客・取引先をサイプレスに紹介するだけ。提案・制作・保守・運用はすべてサイプレスが担当します。専門知識不要で始められる、最もシンプルなパートナー制度です。",
    tags: ["紹介のみ", "知識不要", "副業に最適"],
  },
  {
    href: "/partner/local-sales-agent",
    label: "販売代理店・取次店募集",
    sub: "全国向けの代理店・営業パートナー制度",
    desc: "ホームページ制作・SEO・MEO・AIOなどのWeb集客サービスを地域事業者へ紹介できる販売代理店・取次店を全国で募集しています。営業経験・人脈を活かして活動したい方向け。",
    tags: ["全国対応", "法人・個人可", "高単価商材"],
  },
  {
    href: "/partner/katsushika-startup",
    label: "葛飾区起業者向け販売パートナー制度",
    sub: "葛飾区で創業する方向けの特化制度",
    desc: "葛飾区で起業・創業する方に向けた特化型パートナー制度。創業初期の収益柱の一つとして、地域事業者へWeb集客サービスを紹介できる制度を用意しています。",
    tags: ["葛飾区特化", "創業者向け", "自社事業と並行"],
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>

        {/* HERO */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "72px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>パートナー制度</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Partner Programs</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "24px" }}>
              パートナー制度
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              株式会社サイプレスでは、ホームページ制作・SEO対策・MEO対策・AIO対策などのWeb集客サービスを地域事業者へ紹介できる複数のパートナー制度を用意しています。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.85", color: "#6B7280", maxWidth: "640px" }}>
              成約には商談内容や提案先の状況が影響します。成果・収入を保証するものではありません。無理な営業ではなく、必要としている事業者への紹介を前提にしています。
            </p>
          </div>
        </section>

        {/* PROGRAM LIST */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Programs</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>パートナー制度の一覧</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px", maxWidth: "800px" }}>
              {programs.map((prog) => (
                <Link key={prog.href} href={prog.href} style={{ display: "block", background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "32px 28px", textDecoration: "none" }}>
                  <p style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "8px" }}>{prog.sub}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "20px", color: "#0d1b2a", marginBottom: "12px" }}>{prog.label}</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9", marginBottom: "16px" }}>{prog.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {prog.tags.map((tag) => (
                      <span key={tag} style={{ fontSize: "11px", background: "#0d1b2a", color: "#fff", padding: "3px 10px", borderRadius: "3px", fontWeight: 600 }}>{tag}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageContactCTA
          heading="パートナー制度について、まずはご相談ください"
          body="取次店・販売代理店・葛飾区起業者向けパートナー制度に関するご質問はお問い合わせフォームからお気軽にどうぞ。成果・収入を保証するものではありません。"
        />

      </main>
      <Footer />
    </>
  );
}

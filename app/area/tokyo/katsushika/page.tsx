import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "葛飾区で起業・創業する方向けガイド｜開業準備からWeb集客まで｜株式会社サイプレス",
  description:
    "葛飾区で起業・創業を検討している方向けに、開業準備チェックリスト、創業資金確認、Web集客ガイド、ホームページ補助金、収益柱づくり、販売パートナー制度を解説します。",
  keywords: [
    "葛飾区 起業",
    "葛飾区 創業",
    "葛飾区 開業",
    "東京都葛飾区 起業",
  ],
  openGraph: {
    title: "葛飾区で起業・創業する方向けガイド｜開業準備からWeb集客まで",
    description: "葛飾区で起業・創業を検討している方向けに、開業準備チェックリスト、創業資金確認、Web集客ガイド、ホームページ補助金、収益柱づくり、販売パートナー制度を解説します。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://www.cypress-all.co.jp/area/tokyo/katsushika",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
        { "@type": "ListItem", position: 2, name: "エリア", item: "https://www.cypress-all.co.jp/area" },
        { "@type": "ListItem", position: 3, name: "東京都葛飾区", item: "https://www.cypress-all.co.jp/area/tokyo/katsushika" },
      ],
    },
    {
      "@type": "WebPage",
      name: "葛飾区で起業・創業する方向けガイド",
      url: "https://www.cypress-all.co.jp/area/tokyo/katsushika",
      description: "葛飾区で起業・創業を検討している方向けに、開業準備チェックリスト、創業資金確認、Web集客ガイド、ホームページ補助金、収益柱づくり、販売パートナー制度を解説します。",
      provider: {
        "@type": "Organization",
        name: "株式会社サイプレス",
        url: "https://www.cypress-all.co.jp",
      },
    },
  ],
};

const S = {
  label: { fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" as const },
  h2: { fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" },
  body: { fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "36px" },
  container: { maxWidth: "72rem", margin: "0 auto", padding: "0 24px" },
};

const cards = [
  {
    href: "/area/tokyo/katsushika/start-business",
    title: "葛飾区で起業・創業する方へ（詳細版）",
    desc: "開業準備・Web集客・収益柱づくり・販売パートナー制度をまとめて確認できる創業者向けハブページです。葛飾区で創業する方が確認すべき情報を9つのセクションで解説しています。",
  },
  {
    href: "/area/tokyo/katsushika/start-business-checklist",
    title: "葛飾区で起業する前に確認したい開業準備チェックリスト",
    desc: "事業設計・資金計画・集客導線・ホームページ制作・Googleビジネスプロフィール・SNS・営業先・収益柱の8カテゴリ、計57項目のチェックリストです。",
  },
  {
    href: "/area/tokyo/katsushika/startup-funding",
    title: "葛飾区で創業資金・融資・補助金を確認する前に知っておきたいこと",
    desc: "創業融資・補助金・ホームページ作成費補助の確認ポイントと注意点を整理しています。申請前に必ず公式サイトで最新情報をご確認ください。",
  },
  {
    href: "/area/tokyo/katsushika/startup-web-marketing",
    title: "葛飾区で創業する方向けWeb集客ガイド",
    desc: "ホームページ制作・SEO・MEO・Googleビジネスプロフィール・SNSの優先順位と始め方を解説。創業直後からできる集客対策をまとめました。",
  },
  {
    href: "/area/tokyo/katsushika/startup-revenue-streams",
    title: "葛飾区で創業初期に収益柱を増やす方法",
    desc: "創業初期に売上が安定しにくい理由と、Web集客サービスを地域事業者へ紹介できる販売パートナー制度の活用方法を解説します。",
  },
  {
    href: "/area/tokyo/katsushika/web-design-subsidy",
    title: "葛飾区のホームページ制作・補助金活用支援",
    desc: "葛飾区のホームページ制作と補助金・助成金の確認ポイントを解説。SEO・MEO対応ホームページ制作と、ホームページ作成費補助の注意点をまとめています。",
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
          <div style={S.container}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area" style={{ color: "#6B7280" }}>エリア</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>東京都葛飾区</span>
            </nav>
            <p style={S.label}>Katsushika — Startup Guide</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "24px" }}>
              葛飾区で起業・創業する方向けガイド
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "36px" }}>
              葛飾区で起業・創業を検討している方向けに、開業準備チェックリスト、創業資金・制度確認、Web集客ガイド、ホームページ補助金活用、収益柱づくり、販売パートナー制度を6つのページにまとめました。
            </p>
          </div>
        </section>

        {/* CARDS */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Contents</p>
            <h2 style={S.h2}>葛飾区起業ガイド — 目次</h2>
            <p style={S.body}>下記の6ページから、必要な情報をご確認ください。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
              {cards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "24px 22px", textDecoration: "none", display: "block" }}
                >
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "10px", lineHeight: 1.5 }}>{card.title}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{card.desc}</p>
                  <p style={{ fontSize: "12px", color: "#c4b89a", marginTop: "12px", fontWeight: 600 }}>詳細を見る →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageContactCTA
          heading="葛飾区でのWeb集客・起業相談はお気軽に"
          body="ホームページ制作、SEO、MEO、販売パートナー制度に関するご質問はお気軽にどうぞ。"
        />

      </main>
      <Footer />
    </>
  );
}

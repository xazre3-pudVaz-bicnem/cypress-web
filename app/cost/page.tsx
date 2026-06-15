import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import { costPages } from "@/lib/data/costPages";

export const metadata: Metadata = {
  title: "MEO・SEO・ホームページ制作の費用・料金相場｜株式会社サイプレス",
  description:
    "MEO対策・SEO対策・ホームページ制作・SNS運用の費用相場を解説。月額料金・初期費用・プラン内訳を透明に公開します。無料見積もり相談受付中。東京・全国対応。",
  keywords: ["MEO費用", "SEO費用相場", "ホームページ制作費用", "Web集客 料金", "SNS運用 費用"],
  openGraph: {
    title: "MEO・SEO・ホームページ制作の費用・料金相場｜株式会社サイプレス",
    description: "各サービスの費用・料金相場を透明に公開。初期費用・月額費用・プランの内訳まで解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/cost" },
};

const faqItems = [
  {
    q: "費用に消費税は含まれますか？",
    a: "各ページに掲載している費用はすべて税抜き（税別）の参考価格です。実際のご請求額には消費税（10%）が加算されます。正確なお見積もりは無料相談後にご提示します。",
  },
  {
    q: "最低いくらから依頼できますか？",
    a: "MEO対策の基本プランは月2〜3万円（税別）程度からご用意しています。ご予算に応じた最適な施策プランをご提案しますので、まずは無料相談でご状況をお聞かせください。",
  },
  {
    q: "複数のサービスをまとめて依頼すると割引はありますか？",
    a: "MEO対策とSEO対策、またはMEO対策とホームページ制作をセットでご依頼いただく場合は、個別依頼よりリーズナブルな統合プランをご提案できる場合があります。詳細はご相談ください。",
  },
  {
    q: "月額費用はいつ請求されますか？",
    a: "通常、毎月末または月初にご請求書を発行します。お支払いは銀行振込でお願いしています。詳細な支払いサイクルはご契約時にご確認いただけます。",
  },
  {
    q: "費用対効果の見込みはありますか？",
    a: "具体的な成果保証はできませんが、現状診断を元に「どのような改善が見込めるか」を可能な限りご説明します。MEO対策であればGoogleビジネスプロフィールのインサイトデータ、SEO対策であれば競合の順位状況などを参考にご提案します。",
  },
];

export default function CostPage() {
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
              <span style={{ color: "#0d1b2a" }}>費用・料金</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Cost & Pricing</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              費用・料金相場
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "12px" }}>
              各サービスの費用・料金相場を透明に公開します。
              初期費用・月額費用・プランの内訳まで、サービスごとにわかりやすくご説明します。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              実際のお見積もりは現状・競合状況・ご要望によって変動します。
              まずは無料相談でご状況をお聞きし、最適なプランをご提案します。
            </p>
          </div>
        </section>

        {/* Image band */}
        <section style={{ position: "relative", height: "280px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 00_32_58.png"
            alt="Web集客・MEO・SEO費用相場ガイド"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.5)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(18px,2.5vw,28px)", lineHeight: 1.5 }}>
                料金を透明に。<br />あなたの予算に最適なプランを提案します。
              </p>
            </div>
          </div>
        </section>

        {/* Quick overview table */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Quick Overview</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "32px" }}>
              サービス別料金の目安
            </h2>
            <div style={{ maxWidth: "800px", overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                <thead>
                  <tr style={{ background: "#0d1b2a" }}>
                    <th style={{ textAlign: "left", padding: "14px 16px", color: "#ffffff", fontWeight: 600 }}>サービス</th>
                    <th style={{ textAlign: "left", padding: "14px 16px", color: "#ffffff", fontWeight: 600 }}>初期費用</th>
                    <th style={{ textAlign: "left", padding: "14px 16px", color: "#ffffff", fontWeight: 600 }}>月額費用</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: "MEO対策（基本）", initial: "3〜5万円", monthly: "2〜5万円/月" },
                    { service: "MEO対策（競合激化エリア）", initial: "5〜10万円", monthly: "5〜15万円/月" },
                    { service: "SEO対策", initial: "5〜15万円", monthly: "3〜15万円/月" },
                    { service: "コーポレートサイト制作", initial: "50〜200万円", monthly: "1〜3万円（保守）" },
                    { service: "SNS運用代行", initial: "3〜5万円", monthly: "3〜10万円/月" },
                    { service: "AIO対策", initial: "5〜10万円", monthly: "3〜8万円/月" },
                  ].map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#ffffff" : "#f9f8f5", borderBottom: "1px solid #E8E4DC" }}>
                      <td style={{ padding: "14px 16px", color: "#0d1b2a", fontWeight: 500 }}>{row.service}</td>
                      <td style={{ padding: "14px 16px", color: "#374151" }}>{row.initial}</td>
                      <td style={{ padding: "14px 16px", color: "#c4b89a", fontWeight: 600 }}>{row.monthly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: "12px", fontSize: "12px", color: "#9ca3af" }}>
              ※上記は参考価格（税別）です。実際の費用は競合状況・範囲・ご要望によって異なります。
            </p>
          </div>
        </section>

        {/* Cost pages grid */}
        <section style={{ background: "#f9f8f5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Detail Pages</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              サービス別 費用・料金ガイド
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "#ece8e0" }}>
              {costPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/cost/${page.slug}`}
                  style={{ background: "#ffffff", padding: "28px", textDecoration: "none", display: "block" }}
                >
                  <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", fontSize: "10px", color: "#9ca3af", marginBottom: "8px" }}>
                    {page.titleEn}
                  </p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", color: "#0d1b2a", fontWeight: 700, marginBottom: "10px", lineHeight: 1.4 }}>
                    {page.title}
                  </p>
                  {page.priceRanges[0] && (
                    <p style={{ fontSize: "13px", color: "#c4b89a", fontWeight: 700, marginBottom: "8px" }}>
                      {page.priceRanges[0].price}〜
                    </p>
                  )}
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>
                    {page.intro.slice(0, 55)}...
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

        <FaqSection items={faqItems} heading="費用・料金についてよくある質問" bgColor="#FFFFFF" />

        <RelatedPages
          links={[
            { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ集客の詳細" },
            { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示の詳細" },
            { href: "/services/web-design", label: "ホームページ制作", desc: "サイト制作費用の詳細" },
            { href: "/services/sns", label: "SNS運用サービス", desc: "SNS運用費用の詳細" },
            { href: "/process", label: "ご利用の流れ", desc: "相談から開始までのステップ" },
            { href: "/guide", label: "業者選び方ガイド", desc: "Web集客業者の選び方" },
            { href: "/contact", label: "無料見積もり相談", desc: "お気軽にご相談ください" },
          ]}
        />

        <PageContactCTA
          heading="無料お見積もりを取りましょう"
          body="予算・ご要望をお聞かせいただければ、最適なプランとお見積もりを無料でご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}

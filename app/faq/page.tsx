import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";
import { faqPages } from "@/lib/data/faqPages";

export const metadata: Metadata = {
  title: "よくある質問（FAQ）｜MEO・SEO・ホームページ制作｜株式会社サイプレス",
  description:
    "サイプレスへのよくある質問一覧。MEO・SEO・SNS・ホームページ制作・AIO・費用・契約・セキュリティなど、カテゴリ別にまとめています。疑問点はこちらで解決してください。",
  keywords: ["サイプレス よくある質問", "MEO 質問", "SEO 費用 質問", "Web集客 FAQ"],
  openGraph: {
    title: "よくある質問（FAQ）｜MEO・SEO・ホームページ制作｜株式会社サイプレス",
    description: "MEO・SEO・SNS・ホームページ制作のよくある質問をカテゴリ別にまとめました。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/faq" },
};

export default function FaqPage() {
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
              <span style={{ color: "#0d1b2a" }}>よくある質問</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>FAQ</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              よくある質問
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "12px" }}>
              お客様からよくいただくご質問をカテゴリ別にまとめました。
              MEO・SEO・SNS・ホームページ制作・費用・契約など、
              気になる項目のカテゴリページでお確かめください。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              解決しない場合はお気軽にお問い合わせください。
              通常1〜2営業日以内にご回答します。
            </p>
          </div>
        </section>

        {/* Image band */}
        <section style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_12_19.jpg"
            alt="よくある質問・FAQ"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.5)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(18px,2.5vw,28px)", lineHeight: 1.5 }}>
                疑問はすぐに解決。<br />カテゴリから質問を探してください。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ pages grid */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Categories</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              質問カテゴリ一覧
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "#ece8e0" }}>
              {faqPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/faq/${page.slug}`}
                  style={{ background: "#ffffff", padding: "28px", textDecoration: "none", display: "block" }}
                >
                  <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", fontSize: "10px", color: "#9ca3af", marginBottom: "8px" }}>
                    {page.titleEn}
                  </p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", color: "#0d1b2a", fontWeight: 700, marginBottom: "10px", lineHeight: 1.4 }}>
                    {page.title}
                  </p>
                  <p style={{ fontSize: "12px", color: "#c4b89a", marginBottom: "8px", fontWeight: 600 }}>
                    {page.faqs.length}件の質問
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>
                    {page.intro.slice(0, 55)}...
                  </p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "12px", fontSize: "12px", color: "#9ca3af" }}>
                    質問を見る
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 費用・よく聞かれる3つの質問 */}
        <section style={{ background: "#f9f8f5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Top Questions</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              特によく聞かれる質問
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  q: "MEO対策とSEO対策はどちらを先にすべきですか？",
                  a: "地域ビジネス（来店型・予約型）の場合はMEO対策を先に始めることをお勧めします。Googleマップからの来店・問い合わせが最も即効性があります。SEO対策は中長期的な施策であり、MEOで基盤を作りながら並行して進めるのが効率的です。",
                },
                {
                  q: "費用はどのくらいからスタートできますか？",
                  a: "MEO対策の基本プランは月2〜3万円程度からスタートできます。ホームページ制作は内容によって異なりますが、シンプルなコーポレートサイトは50万円〜、SEO対策は月3〜10万円程度が一般的な相場です。詳細は費用ガイドページまたは無料相談でご確認ください。",
                },
                {
                  q: "契約後にサービス内容を変更できますか？",
                  a: "はい、月次レポートを確認しながら必要に応じて施策の調整・追加が可能です。ご状況やご予算の変化に合わせて柔軟に対応します。大きな変更が必要な場合は、改めてプラン設計をご提案します。",
                },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px 0", borderBottom: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "10px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "#c4b89a", fontWeight: 700, flexShrink: 0 }}>Q.</span>
                    {item.q}
                  </p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9", paddingLeft: "24px" }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedPages
          links={[
            { href: "/cost", label: "費用・料金ガイド", desc: "各サービスの費用相場を確認" },
            { href: "/process", label: "ご利用の流れ", desc: "相談から開始までのステップ" },
            { href: "/guide", label: "Web集客ガイド", desc: "実践的なガイド集" },
            { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ集客の詳細" },
            { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示の詳細" },
            { href: "/services/web-design", label: "ホームページ制作", desc: "集客サイトの制作詳細" },
            { href: "/contact", label: "お問い合わせ", desc: "FAQで解決しない場合はこちら" },
          ]}
        />

        <PageContactCTA
          heading="ご不明な点はお気軽にご相談ください"
          body="FAQで解決しなかった場合は、お問い合わせフォームまたはLINEでお気軽にご質問ください。"
        />
      </main>
      <Footer />
    </>
  );
}

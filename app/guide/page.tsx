import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import { guidePages } from "@/lib/data/guidePages";

export const metadata: Metadata = {
  title: "Web集客・SEO・MEOガイド｜選び方・費用・基礎知識｜株式会社サイプレス",
  description:
    "MEO対策会社の選び方・SEO費用相場・Google口コミ獲得方法・AIO入門など、Web集客に必要な実践ガイドを専門家が解説します。地域ビジネス・中小企業の集客担当者向けの実践的な情報。",
  keywords: ["MEO対策 選び方", "SEO費用相場", "Web集客ガイド", "口コミ獲得方法", "AIO入門"],
  openGraph: {
    title: "Web集客・SEO・MEOガイド｜選び方・費用・基礎知識｜株式会社サイプレス",
    description: "MEO・SEO・AIO対策の実践ガイド。選び方・費用・基礎知識を専門家が解説します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/guide" },
};

const faqItems = [
  {
    q: "ガイドとナレッジの違いは何ですか？",
    a: "ガイドは「MEO対策の始め方」「会社の選び方」など実践的なアクション方法を解説するコンテンツです。ナレッジは「MEOとは何か」「AIOの仕組み」など用語・概念・背景知識を深掘りするコンテンツです。まず知識を得たい方はナレッジから、すぐ実践したい方はガイドから読むことをお勧めします。",
  },
  {
    q: "Web集客を始めるにあたって最初に読むべきガイドはどれですか？",
    a: "地域ビジネスの方はまず「MEO対策の始め方」を、EC・サービス業の方は「SEO対策の費用相場と選び方」を読むことをお勧めします。「何から始めればいいかわからない」という方は無料相談で現状をお聞きした上でご案内します。",
  },
  {
    q: "ガイドの内容は定期的に更新されますか？",
    a: "はい、GoogleアルゴリズムのアップデートやMEO対策の最新トレンドに合わせて定期的に内容を更新しています。AI検索（AIO）など新しい分野のガイドも随時追加しています。",
  },
  {
    q: "ガイドの内容を実践したいが自分でできるか不安です",
    a: "ガイドは自社で実践できる内容を前提に作成していますが、競合が激しいエリアや業種では専門家のサポートが有効です。まずガイドを読んで概要を把握し、その上で支援が必要な部分をご相談いただくのが効率的です。",
  },
];

export default function GuidePage() {
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
              <span style={{ color: "#0d1b2a" }}>ガイド</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Guide</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              Web集客・SEO・MEOガイド
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "12px" }}>
              MEO対策・SEO対策・AIO対策・ホームページ制作に関する実践的なガイドを、専門家がわかりやすく解説します。
              「どうやって始めるか」「業者はどう選ぶか」「費用はどのくらいか」を具体的に説明しています。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              各ガイドにはチェックリスト・FAQ・関連リンクを収録しており、読んですぐ実践に移せる設計になっています。
              疑問があれば無料相談でお気軽にお聞きください。
            </p>
          </div>
        </section>

        {/* Image band */}
        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_20_52.jpg"
            alt="Web集客ガイド・SEO・MEO実践ガイド"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.55)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(18px,2.5vw,30px)", lineHeight: 1.5 }}>
                読んですぐ実践できる。<br />プロが書く集客ガイド集。
              </p>
            </div>
          </div>
        </section>

        {/* Guide pages grid */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>All Guides</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ガイド一覧
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "#ece8e0" }}>
              {guidePages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/guide/${page.slug}`}
                  style={{ background: "#ffffff", padding: "28px", textDecoration: "none", display: "block" }}
                >
                  <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", fontSize: "10px", color: "#9ca3af", marginBottom: "8px" }}>
                    {page.titleEn}
                  </p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", color: "#0d1b2a", fontWeight: 700, marginBottom: "10px", lineHeight: 1.4 }}>
                    {page.title}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>
                    {page.intro.slice(0, 55)}...
                  </p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "12px", fontSize: "12px", color: "#9ca3af" }}>
                    ガイドを読む
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Callout: knowledge vs guide */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Other Resources</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              ガイドと合わせて読みたいコンテンツ
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1px", background: "rgba(196,184,154,0.2)" }}>
              {[
                { href: "/knowledge", label: "ナレッジベース", desc: "用語・概念・背景知識の体系的な解説" },
                { href: "/goals", label: "目的別施策プラン", desc: "達成したい目標から施策を選ぶ" },
                { href: "/problems", label: "お悩み別ページ", desc: "症状から原因・解決策を見つける" },
                { href: "/checklist", label: "チェックリスト", desc: "自社の集客状況をセルフチェック" },
                { href: "/cost", label: "費用・料金ガイド", desc: "MEO・SEO・Web制作の費用相場" },
                { href: "/faq", label: "よくある質問", desc: "よく寄せられる疑問への回答集" },
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{ display: "block", padding: "28px", background: "#0d1b2a", textDecoration: "none" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: "1.8" }}>{item.desc}</p>
                  <p style={{ fontSize: "12px", color: "#c4b89a", marginTop: "10px" }}>読む →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="ガイドについてよくある質問" bgColor="#f9f8f5" />

        <RelatedPages
          links={[
            { href: "/knowledge", label: "ナレッジベース", desc: "専門知識の体系的な解説" },
            { href: "/goals", label: "目的別施策プラン", desc: "達成目標から施策を選ぶ" },
            { href: "/problems", label: "お悩み別ページ", desc: "症状から解決策を見つける" },
            { href: "/checklist", label: "チェックリスト", desc: "集客状況のセルフチェック" },
            { href: "/cost", label: "費用・料金ガイド", desc: "MEO・SEO・Web制作の費用相場" },
            { href: "/meo", label: "MEO対策とは", desc: "Googleマップ集客の基礎" },
            { href: "/seo", label: "SEO対策とは", desc: "検索上位表示の基礎知識" },
            { href: "/aio", label: "AIO対策とは", desc: "AI検索最適化の基礎" },
            { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ集客支援" },
            { href: "/contact", label: "無料相談", desc: "ガイドを読んで疑問があればご相談" },
          ]}
        />

        <PageContactCTA
          heading="専門家に直接ご相談ください"
          body="ガイドを読んで疑問が出た方、自社に当てはめた具体的なアドバイスが欲しい方はお問い合わせください。"
        />
      </main>
      <Footer />
    </>
  );
}

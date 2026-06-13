import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SNS集客・運用代行｜Instagram・Googleビジネスプロフィール",
  description: "中小企業・店舗向けのSNS集客支援。Instagram運用・投稿企画・ハッシュタグ戦略・Googleビジネスプロフィール投稿・コンテンツカレンダー・写真ディレクションに対応。",
};

const services = [
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタグラムの企画・投稿・分析" },
  { href: "/sns/post-planning", label: "投稿企画", desc: "SNS投稿コンテンツの企画・制作" },
  { href: "/sns/hashtag", label: "ハッシュタグ戦略", desc: "効果的なハッシュタグ選定" },
  { href: "/sns/local-sns", label: "地域SNS集客", desc: "地域ターゲットのSNS活用" },
  { href: "/sns/google-business-profile", label: "Googleビジネスプロフィール", desc: "GBP投稿・情報最適化" },
  { href: "/sns/content-calendar", label: "コンテンツカレンダー", desc: "SNS投稿スケジュール管理" },
  { href: "/sns/photo-direction", label: "写真ディレクション", desc: "SNS用写真の撮影指示・制作" },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
  { href: "/services/sns", label: "SNSサービス詳細", desc: "SNS運用サービス" },
  { href: "/industries", label: "業種別Web集客", desc: "業種別集客" },
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
              SNS集客・運用
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>SNS Marketing</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              SNS集客・運用代行
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              Instagram・Googleビジネスプロフィールを活用した中小企業・店舗のSNS集客を支援します。投稿企画・ハッシュタグ戦略・コンテンツカレンダー・写真ディレクションまで一貫してサポートします。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>SNS Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              SNS集客サービス一覧
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
              {services.map((s) => (
                <Link key={s.href} href={s.href} style={{ display: "block", padding: "28px", border: "1px solid #ece8e0", background: "#fafaf8", textDecoration: "none" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>{s.label}</p>
                  <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.7" }}>{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Why SNS</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              SNS集客が重要な理由
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "SEO・MEOを補完する接点の多様化", b: "Google検索・Googleマップ（MEO）だけでなく、InstagramやGoogleビジネスプロフィールからの流入を増やすことで、顧客との接点を複数持つ集客設計が可能です。" },
                { n: "02", t: "視覚的コンテンツで来店・購買決断を促す", b: "料理・施術・施工・商品の写真・動画は、テキスト情報より圧倒的に購買意欲を高めます。Instagramなどのビジュアルプラットフォームは「見て欲しくなる」集客に最適です。" },
                { n: "03", t: "ファン化・リピート促進につながる", b: "定期的なSNS投稿により店舗・ブランドを記憶してもらい、次回来店・リピート購買を促します。フォロワーはすでに興味を持つ顕在顧客です。" },
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

        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="SNS集客のご相談" body="Instagram運用・Googleビジネスプロフィール最適化・コンテンツ制作をご相談ください。SNSと他のWeb集客を連動させた戦略を設計します。" />
      </main>
      <Footer />
    </>
  );
}

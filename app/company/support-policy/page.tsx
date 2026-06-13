import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "サポート方針｜株式会社サイプレスの支援スタンス",
  description: "株式会社サイプレスのサポート方針。制作後の継続支援・月次レポート・改善提案・透明性のある進捗共有で、Web集客の成果を長期的に最大化する支援スタンス。",
};

const relatedLinks = [
  { href: "/company", label: "会社概要", desc: "サイプレス会社情報" },
  { href: "/company/value", label: "企業理念・バリュー", desc: "大切にしていること" },
  { href: "/services", label: "サービス一覧", desc: "提供サービス" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談はこちら" },
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
              <Link href="/company">会社情報</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              サポート方針
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Support Policy</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              サポート方針
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              株式会社サイプレスは「制作して終わり」「施策して終わり」ではなく、長期的な成果を生み出し続けるパートナーとしての関係を大切にしています。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Our Policy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              サポートの考え方
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "成果が出るまで伴走する", b: "Web集客は短期間で劇的に変わるものではありません。SEO効果の発現には3〜6か月、定着には1年以上かかることがあります。成果が出るまで戦略を調整しながら伴走します。" },
                { n: "02", t: "月次レポートで進捗を透明に共有", b: "Google Search Console・Google Analytics・MEO順位のデータを月次でレポートします。何が良くなっているか・何を改善すべきかを数字で明確に共有します。" },
                { n: "03", t: "わかりやすい説明で自立を支援", b: "専門用語を使わず、施策の目的・方法・期待効果をわかりやすく説明します。お客様が自分でも理解して判断できる状態を作ることで、長期的な自立を支援します。" },
                { n: "04", t: "迅速なレスポンスと柔軟な対応", b: "ご連絡には原則24時間以内に返信します（土日は翌営業日）。急なご相談・突発的な変更にも柔軟に対応します。「気軽に相談できる」関係を大切にしています。" },
                { n: "05", t: "継続的な改善提案", b: "毎月の報告に加え、Googleのアルゴリズム変更・新しい集客手法・競合動向など、お客様のビジネスに関連する最新情報をプロアクティブにお伝えします。" },
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
        <PageContactCTA heading="サポートについてのご相談" body="Web集客のサポート内容・料金・対応範囲についてお気軽にご相談ください。まずはオンラインでの初回相談（無料）からお気軽にどうぞ。" />
      </main>
      <Footer />
    </>
  );
}

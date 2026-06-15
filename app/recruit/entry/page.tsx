import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "応募エントリー｜株式会社サイプレス採用情報",
  description: "株式会社サイプレスへの応募エントリーページ。Web集客支援（SEO・MEO・AI活用・Web制作）に携わりたい方のエントリー受付。リモートワーク対応・フルフレックス。",
};

const relatedLinks = [
  { href: "/recruit", label: "採用情報トップ", desc: "採用ページ" },
  { href: "/recruit/job-description", label: "募集要項", desc: "応募条件・詳細" },
  { href: "/recruit/message", label: "代表メッセージ", desc: "代表からのメッセージ" },
  { href: "/recruit/remote-work", label: "リモートワーク制度", desc: "働き方の詳細" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/recruit">採用情報</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              応募エントリー
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Entry</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              応募エントリー
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              株式会社サイプレスへの応募エントリーを受け付けています。まずはお問い合わせフォームから「採用エントリー」として送信してください。担当者より3営業日以内にご連絡します。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Process</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              選考フロー
            </h2>
            <div style={{ maxWidth: "640px" }}>
              {[
                { n: "01", t: "エントリー（お問い合わせフォームから）", b: "採用エントリーとして、お名前・連絡先・希望職種・簡単な自己紹介・志望理由をお問い合わせフォームからお送りください。" },
                { n: "02", t: "書類選考（3〜5営業日以内に結果連絡）", b: "ご送付いただいた内容をもとに書類選考を行います。結果はメールにてご連絡します。通過の方には面接日程のご連絡をします。" },
                { n: "03", t: "カジュアル面談（オンライン・30〜60分）", b: "代表または担当者とのZoomでのカジュアル面談を行います。仕事内容・働き方・給与など疑問点を解消する場です。選考というより相互理解の場です。" },
                { n: "04", t: "最終面接・条件確認", b: "カジュアル面談後、双方が前向きな場合に最終面接を行います。入社時期・給与・働き方の詳細を確認して内定に至ります。" },
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
        <PageContactCTA heading="採用エントリーはこちら" body="お問い合わせフォームから「採用エントリー」として、お名前・ご連絡先・希望職種・簡単な自己紹介をお送りください。まずはカジュアルなお話から始めましょう。" />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "会社のアクセス・所在地｜株式会社サイプレス（葛飾区白鳥）",
  description: "株式会社サイプレスの所在地・アクセス方法。東京都葛飾区白鳥4-6-1-623。亀有駅から徒歩圏内。対面相談・オンライン相談いずれも対応可能。",
};

const relatedLinks = [
  { href: "/company", label: "会社概要", desc: "サイプレス会社情報" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリア" },
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリア" },
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
              アクセス
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Access</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              アクセス・所在地
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              株式会社サイプレスは東京都葛飾区白鳥に拠点を置いています。対面での打ち合わせ・オンライン相談いずれも対応しています。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", maxWidth: "900px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px" }}>Location</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#0d1b2a", fontWeight: 700, marginBottom: "24px" }}>所在地</h2>
                <table style={{ fontSize: "14px", lineHeight: "2.2", width: "100%" }}>
                  <tbody>
                    <tr style={{ borderTop: "1px solid #ece8e0" }}>
                      <td style={{ color: "#9ca3af", paddingTop: "10px", paddingBottom: "10px", whiteSpace: "nowrap", paddingRight: "16px" }}>会社名</td>
                      <td style={{ color: "#1a2332", paddingTop: "10px", paddingBottom: "10px" }}>株式会社サイプレス</td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #ece8e0" }}>
                      <td style={{ color: "#9ca3af", paddingTop: "10px", paddingBottom: "10px", whiteSpace: "nowrap", paddingRight: "16px" }}>住所</td>
                      <td style={{ color: "#1a2332", paddingTop: "10px", paddingBottom: "10px" }}>〒125-0052<br />東京都葛飾区白鳥4-6-1-623</td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #ece8e0" }}>
                      <td style={{ color: "#9ca3af", paddingTop: "10px", paddingBottom: "10px", whiteSpace: "nowrap", paddingRight: "16px" }}>最寄駅</td>
                      <td style={{ color: "#1a2332", paddingTop: "10px", paddingBottom: "10px" }}>JR常磐線 亀有駅</td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #ece8e0" }}>
                      <td style={{ color: "#9ca3af", paddingTop: "10px", paddingBottom: "10px", whiteSpace: "nowrap", paddingRight: "16px" }}>電話</td>
                      <td style={{ color: "#1a2332", paddingTop: "10px", paddingBottom: "10px" }}>お問い合わせフォームよりご連絡ください</td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #ece8e0" }}>
                      <td style={{ color: "#9ca3af", paddingTop: "10px", paddingBottom: "10px", whiteSpace: "nowrap", paddingRight: "16px" }}>メール</td>
                      <td style={{ color: "#1a2332", paddingTop: "10px", paddingBottom: "10px" }}>consulting.meo@gmail.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px" }}>Consultation</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#0d1b2a", fontWeight: 700, marginBottom: "24px" }}>相談方法</h2>
                <div>
                  {[
                    { t: "対面相談（葛飾区・近隣エリア）", b: "葛飾区・足立区・江戸川区・墨田区など近隣エリアへの訪問相談に対応しています。ご希望の場所でお打ち合わせします。" },
                    { t: "オンライン相談（全国対応）", b: "Zoom・Google MeetでのオンラインWEB相談に対応しています。全国どこからでもご相談いただけます。" },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: "16px 0", borderTop: "1px solid #ece8e0" }}>
                      <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "14px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                      <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="まずはお気軽にご相談ください" body="対面・オンラインどちらでもご相談に対応しています。東京都葛飾区白鳥が拠点のため、首都圏の方は訪問相談も可能です。" />
      </main>
      <Footer />
    </>
  );
}

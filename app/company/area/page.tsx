import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "会社のアクセス・所在地｜株式会社サイプレス（葛飾区白鳥）",
  description:
    "株式会社サイプレスの所在地・アクセス方法。東京都葛飾区白鳥4-6-1-623。亀有駅近辺。対面相談・オンライン相談いずれも対応可能。首都圏への訪問対応、全国リモート対応。",
  openGraph: {
    title: "会社のアクセス・所在地｜株式会社サイプレス（葛飾区白鳥）",
    description: "東京都葛飾区白鳥に拠点。対面・オンライン両対応でMEO・SEO・Web集客をご支援。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/company/area" },
};

const faqItems = [
  {
    q: "対面での打ち合わせは可能ですか？",
    a: "はい、葛飾区・足立区・江戸川区・墨田区などの近隣エリアへの訪問相談に対応しています。また、千葉・埼玉・東京都内全域への訪問も事前のご連絡があればご対応できます。まずはお問い合わせください。",
  },
  {
    q: "遠方（地方）でもサービスを受けられますか？",
    a: "はい、SEO対策・AIO対策・Web制作・AI活用支援はオンライン（Zoom・Google Meet）でのご相談・提案・納品が可能です。MEO対策もGoogleビジネスプロフィールのリモート管理で全国対応しています。北海道・九州・沖縄のお客様にも対応しています。",
  },
  {
    q: "初回の相談はどこで行いますか？",
    a: "初回相談はオンライン（Zoom）が最もスムーズです。画面共有で現状のWebサイト・GBP・競合状況を一緒に確認しながら課題をお聞きします。首都圏にお住まいの場合は訪問相談も可能です。",
  },
  {
    q: "オフィスへの来訪は可能ですか？",
    a: "事前のご予約をいただければ対応可能です。所在地は東京都葛飾区白鳥4-6-1-623です。なお、恐れ入りますが事前予約なしの飛び込みご訪問はご対応が難しい場合があります。お問い合わせフォームよりご連絡ください。",
  },
];

const relatedLinks = [
  { href: "/company", label: "会社概要", desc: "サイプレス会社情報" },
  { href: "/company/profile", label: "会社プロフィール", desc: "詳細な会社情報" },
  { href: "/company/message", label: "代表メッセージ", desc: "代表・織田春樹より" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリア" },
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリア" },
  { href: "/area/nationwide", label: "全国対応", desc: "リモートで全国サポート" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談はこちら" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", gap: "6px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/company" style={{ color: "#6B7280" }}>会社情報</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>アクセス</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Access</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              アクセス・所在地
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "12px" }}>
              株式会社サイプレスは東京都葛飾区白鳥に拠点を置いています。対面での打ち合わせ・オンライン相談いずれも対応しています。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              首都圏（東京・千葉・埼玉・神奈川）は訪問相談も可能です。SEO・AIO・Web制作・AI活用はオンライン（Zoom）で全国どこからでもご相談いただけます。
            </p>
          </div>
        </section>

        {/* Image band */}
        <section style={{ position: "relative", height: "240px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_22_31.png"
            alt="株式会社サイプレス 葛飾区オフィス"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.5)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                東京都葛飾区白鳥が拠点。<br />対面・オンライン両対応で全国をサポート。
              </p>
            </div>
          </div>
        </section>

        {/* Location & consultation */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "64px", maxWidth: "900px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px" }}>Location</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#0d1b2a", fontWeight: 700, marginBottom: "24px" }}>所在地</h2>
                <table style={{ fontSize: "14px", lineHeight: "2.2", width: "100%" }}>
                  <tbody>
                    {[
                      { label: "会社名", value: "株式会社サイプレス" },
                      { label: "住所", value: "〒125-0052\n東京都葛飾区白鳥4-6-1-623" },
                      { label: "最寄駅", value: "JR常磐線 亀有駅" },
                      { label: "電話", value: "お問い合わせフォームよりご連絡ください" },
                      { label: "メール", value: "consulting.meo@gmail.com" },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderTop: "1px solid #ece8e0" }}>
                        <td style={{ color: "#9ca3af", paddingTop: "10px", paddingBottom: "10px", whiteSpace: "nowrap", paddingRight: "16px", verticalAlign: "top" }}>{row.label}</td>
                        <td style={{ color: "#0d1b2a", paddingTop: "10px", paddingBottom: "10px" }}>
                          {row.value.split("\n").map((line, j) => (
                            <span key={j}>{line}{j < row.value.split("\n").length - 1 && <br />}</span>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div>
                <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px" }}>Consultation</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#0d1b2a", fontWeight: 700, marginBottom: "24px" }}>相談方法</h2>
                <div>
                  {[
                    { n: "01", t: "対面相談（首都圏対応）", b: "葛飾区・足立区・江戸川区・墨田区など近隣エリアへの訪問相談に対応。東京都内・千葉・埼玉・神奈川も事前相談のうえ対応します。" },
                    { n: "02", t: "オンライン相談（全国対応）", b: "Zoom・Google MeetでのオンラインWEB相談に対応。資料共有・画面共有しながら詳しく状況をお伺いします。全国どこからでもご相談いただけます。" },
                    { n: "03", t: "メール・フォームで事前相談", b: "簡単な質問・概算見積もりはお問い合わせフォームまたはメールでも受け付けています。通常1〜2営業日以内にご返信します。" },
                  ].map((item) => (
                    <div key={item.n} style={{ padding: "16px 0", borderTop: "1px solid #ece8e0", display: "flex", gap: "12px" }}>
                      <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "14px", fontWeight: 700, minWidth: "28px" }}>{item.n}</span>
                      <div>
                        <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "14px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                        <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Online support highlight */}
        <section style={{ background: "#f9f8f5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Coverage</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "32px" }}>
              サービスの対応範囲
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "20px" }}>
                MEO対策はGoogleビジネスプロフィールをリモートで管理するため、物理的な拠点がどこにあっても対応可能です。月次レポートはGoogleドキュメントで共有し、定例MTGはZoomで実施します。
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
                {[
                  { label: "MEO対策", coverage: "全国対応（リモート）" },
                  { label: "SEO対策", coverage: "全国対応（リモート）" },
                  { label: "AIO対策", coverage: "全国対応（リモート）" },
                  { label: "SNS運用支援", coverage: "全国対応（リモート）" },
                  { label: "Web制作", coverage: "全国対応（リモート）" },
                  { label: "AI活用支援", coverage: "全国対応（リモート）" },
                  { label: "対面コンサルティング", coverage: "首都圏（東京・千葉・埼玉・神奈川）" },
                ].map((item, i) => (
                  <div key={i} style={{ padding: "14px 18px", background: "#ffffff", border: "1px solid #e8e4dc", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "13px", color: "#0d1b2a", fontWeight: 600 }}>{item.label}</span>
                    <span style={{ fontSize: "12px", color: "#c4b89a", fontWeight: 500, whiteSpace: "nowrap" }}>{item.coverage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="アクセス・相談方法についてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="まずはお気軽にご相談ください"
          body="対面・オンラインどちらでもご相談に対応しています。東京都葛飾区白鳥が拠点のため、首都圏の方は訪問相談も可能です。"
        />
      </main>
      <Footer />
    </>
  );
}

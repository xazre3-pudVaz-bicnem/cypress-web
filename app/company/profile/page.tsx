import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "会社概要 | 株式会社サイプレス",
  description: "株式会社サイプレスの会社概要。会社名・代表取締役・設立・所在地・事業内容など基本情報一覧。東京都葛飾区のWebマーケティング会社。全国対応。",
  keywords: ["会社概要", "企業情報", "株式会社サイプレス", "東京", "葛飾区", "Webマーケティング"],
  openGraph: {
    title: "会社概要 | 株式会社サイプレス",
    description: "株式会社サイプレスの会社概要。東京都葛飾区のWebマーケティング会社。MEO・SEO・AIO対策、ホームページ制作を全国対応で提供。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-marketing.jp/company/profile" },
};

const PROFILE_ROWS = [
  { label: "会社名", value: "株式会社サイプレス" },
  { label: "代表取締役", value: "織田 春樹" },
  { label: "設立", value: "2022年4月" },
  { label: "所在地", value: "〒124-0816 東京都葛飾区白鳥4-6-1-623" },
  { label: "対応エリア", value: "全国（オンライン対応）" },
  { label: "資本金", value: "記載なし（非公開）" },
  {
    label: "事業内容",
    value:
      "Webマーケティング支援、MEO対策、SEO対策、AIO対策、ホームページ制作、SNS運用、AI活用支援",
  },
  { label: "取引実績", value: "全国の中小企業・店舗・士業など" },
];

export default function ProfilePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 md:py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-10" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:text-[#0F172A] transition-colors">ホーム</Link>
              <span>/</span>
              <Link href="/company" className="hover:text-[#0F172A] transition-colors">会社情報</Link>
              <span>/</span>
              <span style={{ color: "#374151" }}>会社概要</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Company Profile
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "#0F172A" }}
            >
              会社概要
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              株式会社サイプレスの基本情報一覧です。MEO・SEO・AIO対策・ホームページ制作・SNS運用・AI活用支援を通じて、地域中小企業のWeb集客を支援しています。
            </p>
          </div>
        </section>

        {/* Profile table */}
        <section className="py-20 md:py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Corporate Information
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-12"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0F172A" }}
            >
              基本情報
            </h2>
            <div className="max-w-3xl">
              <dl>
                {PROFILE_ROWS.map((row, i) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[140px_1fr] sm:grid-cols-[200px_1fr]"
                    style={{
                      borderTop: "1px solid #E8E4DC",
                      borderBottom: i === PROFILE_ROWS.length - 1 ? "1px solid #E8E4DC" : "none",
                    }}
                  >
                    <dt
                      className="py-4 pr-6 text-[14px] font-medium"
                      style={{
                        color: "#6B7280",
                        background: "#F9F8F5",
                        borderRight: "1px solid #E8E4DC",
                        paddingLeft: "0",
                      }}
                    >
                      {row.label}
                    </dt>
                    <dd
                      className="py-4 pl-6 text-[14px]"
                      style={{ color: "#374151", background: "#FFFFFF" }}
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Business summary */}
        <section className="py-20 md:py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Business Areas
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-12"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0F172A" }}
            >
              事業内容
            </h2>
            <div className="max-w-3xl space-y-0">
              {[
                {
                  num: "01",
                  label: "MEO対策",
                  body: "Googleマップ上の表示順位改善。Googleビジネスプロフィールの最適化・写真・投稿・口コミ対策を支援します。",
                },
                {
                  num: "02",
                  label: "SEO対策",
                  body: "Google自然検索での流入増加。内部SEO・コンテンツSEO・テクニカルSEO・被リンク対策を総合的に実施します。",
                },
                {
                  num: "03",
                  label: "AIO対策",
                  body: "ChatGPT・Gemini・Perplexityなど、AI検索エンジンからの引用・回答表示を目指した情報設計を行います。",
                },
                {
                  num: "04",
                  label: "ホームページ制作",
                  body: "集客・問い合わせ・採用を目的とした設計。表示速度・SEO・モバイル対応を兼ね備えたサイトを制作します。",
                },
                {
                  num: "05",
                  label: "SNS運用",
                  body: "Instagram・X・LINE公式アカウントの投稿企画・文章作成・分析・改善まで一貫して支援します。",
                },
                {
                  num: "06",
                  label: "AI活用支援",
                  body: "業務効率化・チャットボット構築・コンテンツ制作自動化など、AIを活用した経営改善を伴走支援します。",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="grid grid-cols-[48px_1fr] gap-6 py-6"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono pt-0.5" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <p className="font-black text-[15px] mb-1.5" style={{ color: "#0F172A" }}>{item.label}</p>
                    <p className="text-[14px] leading-[1.8]" style={{ color: "#6B7280" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Access */}
        <section className="py-20 md:py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Access
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-10"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0F172A" }}
            >
              所在地・アクセス
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl items-start">
              <div>
                <address className="not-italic">
                  <p className="text-[14px] font-medium mb-1" style={{ color: "#9CA3AF" }}>郵便番号</p>
                  <p className="text-[15px] mb-5" style={{ color: "#374151" }}>〒124-0816</p>
                  <p className="text-[14px] font-medium mb-1" style={{ color: "#9CA3AF" }}>所在地</p>
                  <p className="text-[15px] mb-5" style={{ color: "#374151" }}>東京都葛飾区白鳥4-6-1-623</p>
                  <p className="text-[14px] font-medium mb-1" style={{ color: "#9CA3AF" }}>対応エリア</p>
                  <p className="text-[15px]" style={{ color: "#374151" }}>全国（オンライン対応）</p>
                </address>
                <div className="mt-8">
                  <a
                    href="https://maps.google.com/?q=東京都葛飾区白鳥4-6-1-623"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] font-medium transition-colors hover:text-[#0F172A]"
                    style={{ color: "#374151", borderBottom: "1px solid #D1C9BE", paddingBottom: "2px" }}
                  >
                    Googleマップで確認 →
                  </a>
                </div>
              </div>
              <div
                className="p-8"
                style={{ background: "#FFFFFF", border: "1px solid #E8E4DC" }}
              >
                <p className="text-[13px] font-medium mb-4" style={{ color: "#0F172A" }}>ご来社について</p>
                <p className="text-[14px] leading-[1.9]" style={{ color: "#6B7280" }}>
                  通常、商談・ご相談はオンライン（Zoom・Google Meet）にて対応しております。ご来社をご希望の場合は、事前にお問い合わせフォームよりご連絡ください。
                </p>
                <div className="mt-6" style={{ borderTop: "1px solid #E8E4DC", paddingTop: "20px" }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-medium transition-all hover:bg-[#0F172A] hover:text-white"
                    style={{ border: "1px solid #0F172A", color: "#0F172A" }}
                  >
                    お問い合わせ
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PageContactCTA />
      </main>
      <Footer />
    </>
  );
}

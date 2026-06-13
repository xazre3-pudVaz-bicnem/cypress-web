import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "沿革 | 株式会社サイプレス",
  description: "株式会社サイプレスの設立から現在までの沿革。2022年4月の設立以来、MEO・SEO・AIO・ホームページ制作・SNS運用・AI活用支援と事業を拡充してきた歩み。",
  keywords: ["沿革", "会社の歴史", "株式会社サイプレス", "設立", "Webマーケティング"],
  openGraph: {
    title: "沿革 | 株式会社サイプレス",
    description: "株式会社サイプレスの設立から現在までの沿革。2022年設立のWebマーケティング会社の成長の歩み。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-marketing.jp/company/history" },
};

const HISTORY = [
  {
    date: "2022年4月",
    title: "株式会社サイプレス設立",
    body: "東京都葛飾区にて株式会社サイプレスを設立。代表取締役に織田春樹が就任。地域中小企業のWeb集客を支援するWebマーケティング支援事業を開始。",
  },
  {
    date: "2022年6月",
    title: "MEO対策・SEO対策サービスの提供開始",
    body: "Googleビジネスプロフィールの最適化を軸にしたMEO対策サービスと、技術的SEO・コンテンツSEOを組み合わせたSEO対策サービスの提供を本格開始。",
  },
  {
    date: "2022年12月",
    title: "ホームページ制作サービス開始",
    body: "集客設計を起点とした、表示速度・SEO・モバイル対応を兼ね備えたホームページ制作サービスの提供を開始。単なる見た目の制作ではなく、集客と問い合わせを目的とした設計を特徴とする。",
  },
  {
    date: "2023年6月",
    title: "AIO対策サービス開始（ChatGPT・AI検索対策）",
    body: "ChatGPT・Gemini・Perplexityなど、AI検索エンジンからの引用・回答表示を狙ったAIO（AI最適化）対策サービスの提供を開始。構造化データ・FAQ設計・E-E-A-T強化を柱とした独自メソッドを確立。",
  },
  {
    date: "2023年10月",
    title: "SNS運用代行サービス開始",
    body: "Instagram・X（旧Twitter）・LINE公式アカウントの運用代行サービスを追加。MEO・SEOとの連動を意識した情報発信設計を特徴とする。投稿企画・文章作成・分析・改善まで一貫して支援。",
  },
  {
    date: "2024年3月",
    title: "AI活用支援サービス開始（業務効率化・チャットボット）",
    body: "業務フローの自動化・チャットボット構築・AIを使ったコンテンツ制作効率化など、中小企業向けのAI活用支援サービスを開始。Webマーケティングとの連携で、継続的な情報発信体制の構築を支援。",
  },
  {
    date: "2024年以降",
    title: "継続的な支援実績の積み上げ",
    body: "全国の中小企業・店舗・士業・医療機関など幅広い業種での支援を継続。Webマーケティングとの連動による複合的な集客設計を強みに、各クライアントの課題に合わせた伴走支援を展開している。",
  },
];

export default function HistoryPage() {
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
              <span style={{ color: "#374151" }}>沿革</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              History
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "#0F172A" }}
            >
              沿革
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              2022年4月の設立以来、サービスを段階的に拡充しながら、地域中小企業のWeb集客支援を続けてきた歩みをご紹介します。
            </p>
          </div>
        </section>

        {/* Company overview — 2-column visual section */}
        <section className="py-20 md:py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden" style={{ height: "320px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_10_29.png"
                  alt="落ち着いたオフィス環境でノートパソコンを使うスタッフ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  Our Foundation
                </p>
                <h2
                  className="font-black leading-tight tracking-tight mb-6"
                  style={{ fontSize: "clamp(22px, 2.8vw, 34px)", color: "#0F172A" }}
                >
                  創業のビジョンと歩み
                </h2>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  株式会社サイプレスは2022年4月、「地域企業が、正しく選ばれる仕組みをつくる」という理念のもと東京都葛飾区で設立されました。良い仕事をしているのにデジタルで可視化されていない中小企業のために、MEO・SEO・AIOを組み合わせた集客支援を開始。創業以来、一社一社と誠実に向き合いながらサービスの幅を着実に広げてきました。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 md:py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl space-y-0">
              {HISTORY.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[160px_1fr] gap-8 py-8"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <div>
                    <p className="text-[13px] font-medium" style={{ color: "#6B7280" }}>{item.date}</p>
                  </div>
                  <div>
                    <p className="font-black text-[16px] mb-3" style={{ color: "#0F172A" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Company overview paragraph */}
        <section className="py-20 md:py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                Overview
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0F172A" }}
              >
                株式会社サイプレスについて
              </h2>
              <div className="space-y-4 text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                <p>
                  株式会社サイプレスは、2022年4月に東京都葛飾区で設立したWebマーケティング会社です。「地域企業が、正しく選ばれる仕組みをつくる」という理念のもと、MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援という6つの領域で、地域中小企業のWeb集客を総合的に支援しています。
                </p>
                <p>
                  設立から現在まで、サービスの幅を着実に広げながら、一社一社のクライアントと向き合い、成果が出るまで伴走する姿勢を大切にしてきました。単発の制作・対策に終わらず、継続的な改善と運用まで関与することで、持続的な集客の仕組みを構築することが私たちの仕事です。
                </p>
                <p>
                  オンラインにて全国対応しており、業種・規模を問わず、Web集客に課題を抱える中小企業・店舗・士業・医療機関などのご相談を承っています。
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/company/profile"
                  className="inline-flex items-center gap-2 text-[13px] font-medium transition-colors hover:text-[#0F172A]"
                  style={{ color: "#374151", borderBottom: "1px solid #D1C9BE", paddingBottom: "2px" }}
                >
                  会社概要を見る →
                </Link>
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

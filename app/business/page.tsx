import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "事業内容｜MEO・SEO・AIO・ホームページ制作・SNS・AI支援｜株式会社サイプレス",
  description:
    "株式会社サイプレスの事業内容。MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援の6事業で中小企業の集客を総合支援します。東京・全国対応。",
  keywords: ["事業内容", "MEO対策", "SEO対策", "AIO対策", "ホームページ制作", "SNS運用", "AI活用支援"],
};

const SERVICES = [
  {
    num: "01",
    title: "MEO対策",
    slug: "meo",
    description:
      "Googleマップでの上位表示を実現し、地域の検索ユーザーへの集客を支援します。Googleビジネスプロフィール（GBP）の最適化・口コミ管理・競合分析など、MEOに必要な施策を一貫して提供します。",
    points: [
      "Googleビジネスプロフィール最適化",
      "口コミ管理・返信代行",
      "競合分析・順位モニタリング",
      "写真・投稿コンテンツ制作",
      "月次レポート提供",
    ],
    target: "店舗ビジネス・飲食・美容・医療・士業など地域密着型ビジネス",
  },
  {
    num: "02",
    title: "SEO対策",
    slug: "seo",
    description:
      "Google検索での自然流入を増やすための施策を総合的に提供します。キーワード分析・コンテンツ制作・技術的SEO・内部リンク最適化まで、持続的な集客基盤を構築します。",
    points: [
      "キーワード調査・競合分析",
      "SEOコンテンツ制作・ライティング",
      "内部SEO・サイト構造最適化",
      "被リンク獲得支援",
      "Search Console・Analytics分析",
    ],
    target: "Webからの問い合わせ・採用・認知拡大を目的とする全業種の企業",
  },
  {
    num: "03",
    title: "AIO対策",
    slug: "aio",
    description:
      "ChatGPT・Gemini・Perplexityなど、AI検索エンジンからの引用・回答表示を最適化します。E-E-A-T強化・構造化データ・FAQ最適化など、次世代の検索に対応したコンテンツ設計を行います。",
    points: [
      "E-E-A-T（経験・専門性・権威性・信頼性）強化",
      "構造化データ・Schema.org実装",
      "FAQ・Q&Aコンテンツ最適化",
      "著者情報・会社情報の構造化",
      "AI検索での回答表示モニタリング",
    ],
    target: "専門性の高いサービス・士業・医療・コンサルティング業",
  },
  {
    num: "04",
    title: "ホームページ制作",
    slug: "web-design",
    description:
      "成果にこだわったWebサイトを制作します。デザイン・SEO・コンバージョン率・パフォーマンスをすべて高水準で実現し、集客から問い合わせまでの導線を構築します。最新技術（Next.js等）を用いた高速・高品質なサイトを提供します。",
    points: [
      "コーポレートサイト・LPの制作",
      "SEO・AIO対応のコンテンツ設計",
      "モバイルファーストのレスポンシブデザイン",
      "Core Web Vitals最適化",
      "制作後の運用・改善サポート",
    ],
    target: "ホームページの新規制作・リニューアルを検討している全業種の企業",
  },
  {
    num: "05",
    title: "SNS運用",
    slug: "sns",
    description:
      "Instagram・X（旧Twitter）・LINEなどのSNS運用を代行します。投稿企画・制作・分析・改善まで一貫して対応し、ブランドの認知拡大と顧客獲得を継続的に支援します。",
    points: [
      "SNS戦略立案・アカウント設計",
      "投稿コンテンツ企画・制作",
      "ハッシュタグ戦略・エンゲージメント向上",
      "月次分析レポート提供",
      "広告運用との連携",
    ],
    target: "認知拡大・ファン獲得・採用強化を目指す企業・店舗",
  },
  {
    num: "06",
    title: "AI活用支援",
    slug: "ai",
    description:
      "業務効率化・チャットボット構築・自動化ツール導入など、AIを活用した経営改善を支援します。現場の課題に合わせたAIソリューションを設計し、中小企業のDX推進をサポートします。",
    points: [
      "AI業務効率化コンサルティング",
      "チャットボット・FAQ自動化構築",
      "コンテンツ制作へのAI活用",
      "社内AIリテラシー向上支援",
      "AIツール選定・導入サポート",
    ],
    target: "業務効率化・DX推進を目指す中小企業・スタートアップ",
  },
];

export default function BusinessPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#FFFFFF", minHeight: "100vh" }}>
        {/* Hero */}
        <section className="pt-32 pb-16" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] text-[#6B7280] mb-8">
              <Link href="/" className="hover:text-[#0F172A] transition-colors">
                ホーム
              </Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#0F172A" }}>事業内容</span>
            </nav>
            <h1
              className="font-black text-[#0F172A] leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
            >
              事業内容
            </h1>
            <p className="text-[#374151] text-base leading-relaxed max-w-2xl">
              MEO・SEO・AIO・ホームページ制作・SNS運用・AI活用支援の6事業で、
              中小企業の集客を根本から変えます。
            </p>
          </div>
        </section>

        {/* ===== Hero Image ===== */}
        <div className="relative w-full overflow-hidden" style={{ height: "420px" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_18_57.png"
            alt="サイプレスのWebマーケティング支援・デジタル会議"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.2)" }} />
        </div>

        {/* Services */}
        <section className="pb-24 max-w-6xl mx-auto px-6">
          <div>
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.05}>
                {i === 3 && (
                  <div className="relative w-full my-6 overflow-hidden" style={{ height: "240px" }}>
                    <Image src="/1.png" alt="サイプレスのWebマーケティング支援" fill className="object-cover" sizes="100vw" />
                    <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.2)" }} />
                  </div>
                )}
                <div
                  className="py-12"
                  style={{
                    borderTop: "1px solid #E8E4DC",
                  }}
                >
                  <div className="grid lg:grid-cols-[auto_1fr_1fr] gap-8 lg:gap-12">
                    {/* Number */}
                    <div className="lg:w-16">
                      <span
                        className="font-mono text-xs"
                        style={{ color: "#9CA3AF" }}
                      >
                        {s.num}
                      </span>
                    </div>

                    {/* Left: Title + Description */}
                    <div>
                      <h2
                        className="font-black text-[#0F172A] leading-tight mb-5"
                        style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
                      >
                        {s.title}
                      </h2>
                      <p className="text-[#374151] text-sm leading-relaxed mb-5">
                        {s.description}
                      </p>
                      <p className="text-[#6B7280] text-xs leading-relaxed mb-6">
                        対象：{s.target}
                      </p>
                      <Link
                        href={`/services/${s.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-medium transition-colors"
                        style={{ color: "#0F172A" }}
                      >
                        詳しく見る
                        <svg
                          width="12"
                          height="12"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </Link>
                    </div>

                    {/* Right: Key Points */}
                    <div>
                      <p
                        className="text-[10px] font-mono tracking-widest text-[#9CA3AF] mb-4 uppercase"
                      >
                        主なサービス内容
                      </p>
                      <ul className="space-y-3">
                        {s.points.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-3 text-[#374151] text-sm"
                          >
                            <span
                              className="mt-2 shrink-0 block w-1 h-1 rounded-full"
                              style={{ background: "#0F172A" }}
                            />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: "1px solid #E8E4DC" }} />
          </div>
        </section>

        {/* Support Overview */}
        <section
          className="py-20"
          style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal>
              <h2
                className="font-bold text-[#0F172A] text-xl mb-6"
              >
                総合的な支援体制
              </h2>
              <p className="text-[#374151] text-sm leading-relaxed max-w-2xl mb-8">
                6つのサービスは独立した施策としてではなく、相互に連携することでより大きな効果を発揮します。
                MEOとSEOで集客基盤を構築し、AIOで次世代の検索に対応。ホームページ制作でCV率を高め、SNS運用とAI活用で業務を効率化する。
                これが私たちの一気通貫支援です。
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "集客 → MEO・SEO・AIOで検索全方位をカバー",
                  "制作 → ホームページ制作でCV率を最大化",
                  "拡散 → SNS運用でブランド認知を継続的に積み上げる",
                  "効率化 → AI活用支援で業務コストを削減",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#374151]">
                    <span
                      className="mt-2 shrink-0 block w-1 h-1 rounded-full"
                      style={{ background: "#0F172A" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all hover:bg-[#0F172A] hover:text-white"
                style={{
                  border: "1px solid #0F172A",
                  color: "#0F172A",
                }}
              >
                お問い合わせ・ご相談
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

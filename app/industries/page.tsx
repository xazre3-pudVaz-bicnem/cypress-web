import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import PageContactCTA from "@/components/shared/PageContactCTA"
import FaqSection from "@/components/shared/FaqSection"
import RelatedPages from "@/components/shared/RelatedPages"

export const metadata: Metadata = {
  title: "業種別Webマーケティング支援｜株式会社サイプレス",
  description: "飲食・美容・医療・建設・不動産・士業など業種ごとに最適化されたWebマーケティング・MEO・SEO対策を提供。業種の特性に合わせた集客戦略で成果を最大化します。",
  keywords: ["業種別Webマーケティング", "業種別MEO", "業種別SEO", "飲食店集客", "美容室集客", "医療クリニック集客"],
  openGraph: {
    title: "業種別Webマーケティング支援｜株式会社サイプレス",
    description: "業種ごとに最適な集客方法は異なります。飲食・美容・医療・建設など、業種特化のWebマーケティング支援。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries" },
}

const INDUSTRIES = [
  { href: "/industries/restaurant", label: "飲食店", desc: "MEO対策・Instagram・口コミ獲得で来店数を増やす" },
  { href: "/industries/beauty", label: "美容室・サロン", desc: "ホットペッパーとの連携・SNS・予約導線設計" },
  { href: "/industries/hair-salon", label: "ヘアサロン・美容院", desc: "Googleマップ上位・Instagram・指名予約を増やす" },
  { href: "/industries/nail-salon", label: "ネイルサロン", desc: "デザイン写真SNS・MEOで新規予約と定期来店" },
  { href: "/industries/osteopathic", label: "整体院・接骨院", desc: "腰痛・肩こり症状検索でのGoogleマップ上位表示" },
  { href: "/industries/clinic", label: "医療・歯科クリニック", desc: "地域検索対応・患者向けコンテンツ・Web予約連携" },
  { href: "/industries/construction", label: "建設業・工務店", desc: "施工事例コンテンツ・地域SEO・問い合わせ導線" },
  { href: "/industries/renovation", label: "リフォーム・リノベーション", desc: "施工事例・MEO・SEOで見積もり依頼を増やす" },
  { href: "/industries/plumbing", label: "水道・設備工事業", desc: "緊急依頼をGoogleマップから獲得するMEO対策" },
  { href: "/industries/real-estate", label: "不動産", desc: "物件ページSEO・地域ページ最適化・MEO対応" },
  { href: "/industries/school", label: "学習塾・スクール", desc: "体験授業申込み特化サイト・MEOで入塾相談増加" },
  { href: "/industries/pet-shop", label: "ペットショップ・トリミング", desc: "「近くのトリミング」検索でGoogleマップ上位表示" },
  { href: "/industries/professional-service", label: "士業・コンサル", desc: "専門キーワード・地域検索対応・E-E-A-T構築" },
  { href: "/industries/cleaning", label: "清掃業", desc: "地域密着MEO・ハウスクリーニング検索対策" },
  { href: "/industries/local-store", label: "地域店舗", desc: "小売・サービス業の地域集客・MEO・SNS運用" },
]

const faqItems = [
  {
    q: "業種によってWebマーケティングの方法が変わるのですか？",
    a: "はい、業種によって顧客の検索行動・意思決定プロセス・利用するプラットフォームが大きく異なります。例えば飲食店はGoogleマップとInstagramが最重要ですが、士業はSEOと専門性コンテンツが集客の中心です。業種ごとに最適な施策を組み合わせることで、費用対効果が大幅に向上します。",
  },
  {
    q: "どの業種でもMEO対策は効果がありますか？",
    a: "地域で顧客が検索する業種ではMEO対策が有効です。飲食・美容・医療・建設・不動産・整骨院・税理士など、「近くの〇〇」と検索されやすい業種には特に効果的です。一方、全国向けのEC等はSEOやAIO対策のほうが優先度が高くなります。",
  },
  {
    q: "複数の業種をまたぐ事業でも対応できますか？",
    a: "はい、対応可能です。例えばリフォーム会社が建設とインテリアを兼ねる場合など、メインの集客チャネルを整理した上で、業種横断的な施策をご提案します。まずは現状ヒアリングから始めますので、お気軽にご相談ください。",
  },
  {
    q: "業種特化の支援とは具体的に何が違うのですか？",
    a: "業種ごとに異なるキーワード戦略・競合環境・プラットフォーム活用・口コミ傾向を踏まえた上で施策を設計します。例えば飲食店では「渋谷 ランチ」のような地域＋シーン系キーワードが重要ですが、医療機関は「症状＋地域名」や「専門外来＋地域名」が集客に直結します。業種理解のないマーケターと業種に精通したマーケターでは成果が大きく変わります。",
  },
  {
    q: "初めてWebマーケティングに取り組む事業者でも大丈夫ですか？",
    a: "はい、Webマーケティングが初めての事業者様でも安心して取り組めるように、現状分析・優先施策の提案・実装・効果測定まで一貫してサポートします。まずは何もしない状態から最低限整えるべき施策をご提案するところから始めます。",
  },
]

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>業種別対応</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)", letterSpacing: "0.25em" }}>
              Industries
            </p>
            <h1 className="font-black text-[40px] md:text-[56px] leading-tight tracking-tight mb-6" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別Webマーケティング支援
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              業種によって最適な集客方法は異なります。飲食・美容・医療・建設など、業種ごとに顧客の検索行動・利用するプラットフォーム・意思決定プロセスが違います。サイプレスは各業種の特性を深く理解した上で、成果につながるWebマーケティング戦略を設計します。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image src="/1.png" alt="業種別Webマーケティング・集客支援" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.20)" }} />
        </section>

        {/* Why industry-specific matters */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)", letterSpacing: "0.25em" }}>
              Why Industry-Specific
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種ごとに集客戦略が変わる理由
            </h2>
            <div className="max-w-3xl space-y-6">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                「Webマーケティング」と一口に言っても、飲食店と法律事務所では全く異なる集客チャネルが有効です。飲食店の場合、「渋谷 ランチ」「近く カフェ」のようにGoogleマップとInstagramが購買直前の検索行動の中心となります。一方、弁護士や税理士はGoogleで「離婚 弁護士 東京」などの専門キーワードで検索されるため、SEOと専門性の高いコンテンツが集客の核心です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                また、業種によってユーザーの口コミへの依存度・予約ツールとの連携ニーズ・季節変動・競合環境も大きく異なります。これらを理解せずに施策を打ち続けることは、費用対効果を下げる原因となります。サイプレスは業種ごとに異なる集客の特性を把握した上で、最適な施策の組み合わせをご提案します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                対応業種は飲食店・美容室・医療機関・建設業・不動産・士業・清掃業・地域店舗など幅広く対応しています。業種に精通したマーケターが、実際の検索データと競合分析に基づいた施策を立案・実行します。まずはお気軽にご相談ください。
              </p>
            </div>
          </div>
        </section>

        {/* Industries list */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)", letterSpacing: "0.25em" }}>
              Supported Industries
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              対応業種一覧
            </h2>
            <div className="max-w-3xl">
              {INDUSTRIES.map((industry, i) => (
                <Link key={industry.href} href={industry.href}>
                  <div
                    className="flex gap-6 py-6 hover:opacity-80 transition-opacity"
                    style={{ borderTop: "1px solid #ece8e0", borderBottom: i === INDUSTRIES.length - 1 ? "1px solid #ece8e0" : undefined }}
                  >
                    <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-bold text-[16px] mb-2 hover:underline" style={{ color: "#0d1b2a" }}>{industry.label}</h3>
                      <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{industry.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスの業種別支援 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)", letterSpacing: "0.25em" }}>
              Our Approach
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスの業種別支援アプローチ
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                サイプレスでは、支援を開始する前に必ず業種特有の集客環境を調査します。対象業種における主要キーワードの検索ボリューム・競合の施策状況・口コミの傾向・利用されるプラットフォームを確認した上で、優先すべき施策をご提案します。MEO・SEO・SNS・コンテンツマーケティング・Web制作を業種別に組み合わせることで、最短で成果につながる戦略を設計します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                月次レポートで施策の進捗・効果を共有し、改善点を継続的に対応します。業種ごとの季節変動・新しい競合の出現・Googleのアルゴリズム変更にも迅速に対応します。業種を問わず、成果にこだわった伴走型の支援を提供しています。
              </p>
              <div className="pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-[14px] font-medium transition-all hover:bg-[#0F172A] hover:text-white"
                  style={{ border: "1px solid #0F172A", color: "#0F172A" }}
                >
                  サービス一覧を見る
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="業種別Webマーケティングに関するよくある質問" bgColor="#F9F8F5" />

        <RelatedPages
          links={[
            { href: "/meo", label: "MEO対策", desc: "Googleマップ上位表示" },
            { href: "/seo", label: "SEO対策", desc: "Google検索での集客" },
            { href: "/services", label: "サービス一覧", desc: "全サービスの概要" },
            { href: "/area", label: "対応エリア", desc: "全国対応・オンライン完結" },
            { href: "/contact", label: "無料相談", desc: "まずはご相談ください" },
          ]}
        />

        <PageContactCTA
          heading="業種別Webマーケティングのご相談はサイプレスへ"
          body="業種特有の集客課題に対して、最適な施策の組み合わせをご提案します。まずは現状の集客状況と課題をお聞かせください。無料診断・初回相談を承っています。"
        />
      </main>
      <Footer />
    </>
  )
}

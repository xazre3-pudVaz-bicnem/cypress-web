import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "地域SEO・ローカルSEOとは｜地域ビジネスの検索上位表示対策｜株式会社サイプレス",
  description:
    "地域SEO（ローカルSEO）の施策を解説。地域名キーワード最適化・対応エリアページ・Googleビジネスプロフィール連携・ローカルサイテーション・LocalBusinessスキーマなど、地域ビジネスの集客に特化した対策を説明します。",
  keywords: ["地域SEO", "ローカルSEO", "地域名キーワード", "Googleビジネスプロフィール", "LocalBusiness", "エリアページ"],
  openGraph: {
    title: "地域SEO・ローカルSEOとは｜地域ビジネスの検索上位表示対策｜株式会社サイプレス",
    description:
      "地域SEO（ローカルSEO）の施策を解説。地域名キーワード最適化・対応エリアページ・Googleビジネスプロフィール連携・ローカルサイテーション・LocalBusinessスキーマなど、地域ビジネスの集客に特化した対策を説明します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/seo/local-seo" },
};

const measures = [
  {
    title: "地域名キーワードのページ最適化",
    body: "「渋谷区 Webデザイン」「大阪 SEO対策」のように地域名＋サービス・業種のキーワードを含むページを整備します。タイトルタグ・H1・本文・メタディスクリプションに地域名を自然に含め、Googleがサービス提供エリアとその専門性を関連付けて認識できるよう設計します。",
  },
  {
    title: "対応エリアページの設置",
    body: "複数の地域にサービスを提供している場合、各エリアに特化したページを制作します。単なる地名の差し替えではなく、そのエリア固有の情報・事例・特性を含めたオリジナルコンテンツを用意することで、薄いコンテンツと判断されるリスクを避けます。対応エリアの網羅性はローカル検索での信頼性に直結します。",
  },
  {
    title: "Googleビジネスプロフィールとの連携",
    body: "Googleビジネスプロフィール（GBP）に記載されている店舗名・住所・電話番号・URL・カテゴリなどの情報をWebサイトと完全に一致させます。NAP（Name・Address・Phone）情報の整合性はローカル検索の評価要因の一つです。GBPで設定しているサービスエリアやカテゴリをWebサイトの内容とも一致させることが重要です。",
  },
  {
    title: "ローカルサイテーション整合",
    body: "ホットペッパー・エキテン・Yelp・業界特化の情報サイトなど、各種ディレクトリサイト・口コミサイトに掲載されているNAP情報（店舗名・住所・電話番号）の一致を確認・修正します。情報の不一致はGoogleが信頼性を判断する際のマイナス要因となります。特に引越しや改番後は速やかに全媒体を更新します。",
  },
  {
    title: "地域特化コンテンツの作成",
    body: "対象エリアに特化したブログ記事・事例紹介・地域の課題解決情報を制作します。「○○市で人気のWebデザイン会社の選び方」「△△区の飲食店がSEOで集客を増やした事例」など、地域名を含む実用的なコンテンツは地域検索での評価向上に効果的です。地域の人々に役立つ情報として継続的に発信することが重要です。",
  },
  {
    title: "店舗・拠点情報のSchema設定",
    body: "LocalBusiness（または業種別のより詳細なスキーマ）構造化データを実装し、Googleが店舗の種類・所在地・営業時間・連絡先・サービス内容を機械的に把握できるようにします。正確な構造化データにより、ローカル検索での表示品質が向上し、ナレッジパネルの情報充実にもつながります。",
  },
];

const faqItems = [
  {
    q: "地域SEOとMEOはどちらを先にやるべきですか？",
    a: "MEO（Googleマップ最適化）とローカルSEOは並行して取り組むことをお勧めします。MEOはGoogleマップ・ローカルパックへの表示を強化し、ローカルSEOはWebサイト経由の検索流入を強化します。どちらかに特化するより、両方を同時に整備することで検索結果ページでの露出面積を最大化できます。まずGoogleビジネスプロフィールの整備が基礎となります。",
  },
  {
    q: "対応エリアページはどれくらい作ればいいですか？",
    a: "実際にサービスを提供しているエリアの数に応じます。サービス提供エリアが10市区町村であれば、最終的には10ページを目指すのが理想です。ただし内容の薄いページを大量に作ることはGoogleに低品質コンテンツと判断されるリスクがあります。まず主要エリア3〜5ページを充実した内容で作成し、実績や事例が蓄積されたら他のエリアページを追加するアプローチが現実的です。",
  },
  {
    q: "地域SEOは全国向けビジネスでも必要ですか？",
    a: "全国向けのオンラインビジネスであれば地域SEOの優先度は低いですが、本社・オフィスのある地域での認知度向上・採用活動・地域メディアへの露出などにローカルSEOが効果的な場面があります。一方で店舗集客・出張サービス・地域密着ビジネスには地域SEOは必須施策です。",
  },
  {
    q: "NAP情報の不一致がSEOに与える影響はどれくらいですか？",
    a: "NAP情報（店舗名・住所・電話番号）の不一致はローカル検索の評価を下げる要因とされています。引越し・電話番号変更・屋号変更の際は、Googleビジネスプロフィール・Webサイト・各種ディレクトリサイト・SNSすべての情報を速やかに統一することが重要です。放置すると古い情報を参照したユーザーが来店できないなど機会損失にもつながります。",
  },
  {
    q: "地域SEOの効果が出るまでどのくらいかかりますか？",
    a: "NAP情報の統一やLocalBusinessスキーマの実装は比較的早く（1〜2ヶ月）Googleに反映されます。対応エリアページやコンテンツの効果が出るまでは3〜6ヶ月が目安です。MEOと組み合わせて継続的に口コミ獲得・GBP情報の充実を行うことで、ローカル検索での存在感を段階的に高めていけます。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEOの基礎・全体像" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップ上位表示" },
  { href: "/meo/google-business-profile", label: "Googleビジネスプロフィール", desc: "GBP最適化ガイド" },
  { href: "/meo/local-keyword", label: "ローカルキーワード", desc: "地域名キーワード戦略" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
];

export default function LocalSeoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-16 pb-14" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 mb-6">
              <Link href="/" className="text-[12px] hover:text-[#0F172A] transition-colors" style={{ color: "#9CA3AF" }}>ホーム</Link>
              <span className="text-[12px]" style={{ color: "#9CA3AF" }}>/</span>
              <Link href="/seo" className="text-[12px] hover:text-[#0F172A] transition-colors" style={{ color: "#9CA3AF" }}>SEO対策</Link>
              <span className="text-[12px]" style={{ color: "#9CA3AF" }}>/</span>
              <span className="text-[12px]" style={{ color: "#374151" }}>地域SEO・ローカルSEO</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Local SEO</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "#0F172A" }}>
              地域SEO・ローカルSEO
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              地域SEOとは、特定の地域・エリアに関連する検索キーワードで上位表示されるための施策です。「渋谷 美容院」「横浜市 税理士」のような地域名＋業種・サービスの検索から、地元のお客様を継続的に集客します。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_14_54.png"
            alt="グラフとノートパソコンを囲んだミーティングで分析を実施している様子"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.15)" }} />
        </section>

        {/* 地域SEOとは */}
        <section className="py-16" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-black text-[22px] md:text-[26px] mb-6" style={{ color: "#0F172A" }}>地域SEOとは — 全国SEOとの違い</h2>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                地域SEO（ローカルSEO）とは、特定の地域・市区町村を対象とした検索キーワードで上位表示されることを目指すSEOの手法です。全国規模のSEOと異なり、競合は地域内の同業他社に限定されるため、適切な施策を行えば中小規模のビジネスでも上位表示を狙いやすいのが特徴です。
              </p>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                「○○市 歯科医院」「△△区 リフォーム」など地域名＋業種・サービスで検索するユーザーは、実際にそのサービスを必要としている購買意欲の高いユーザーです。そのため地域SEOからの流入はコンバージョン率が高く、費用対効果の高い集客チャネルとなります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                地域SEOはWebサイトの最適化だけでなく、Googleビジネスプロフィール（GBP）との連携・ローカルサイテーション管理・LocalBusiness構造化データなど、通常のSEOにはない要素が加わります。MEOと組み合わせることで、Googleの検索結果ページにおける露出機会を最大化できます。
              </p>
            </div>
          </div>
        </section>

        {/* 地域SEOに必要な施策 */}
        <section className="py-16" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#9CA3AF" }}>Measures</p>
              <h2 className="font-black text-[22px] md:text-[26px]" style={{ color: "#0F172A" }}>地域SEOに必要な施策</h2>
            </div>
            <div className="max-w-3xl">
              {measures.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0F172A" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* MEOとの関係 */}
        <section className="py-16" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-black text-[22px] md:text-[26px] mb-6" style={{ color: "#0F172A" }}>MEOとの関係 — 地図検索と有機検索を両立する</h2>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                MEO（Map Engine Optimization）はGoogleマップのローカルパック（地図表示エリア）への表示を最適化する施策です。地域SEOとMEOは異なる施策ですが、対象が同じ地域ビジネスの集客であり、多くの要素で相互補完しています。
              </p>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                Googleで地域名＋業種を検索すると、検索結果上部に地図と3つの店舗情報が表示される「ローカルパック」が表示されます。このローカルパックへの表示がMEOの目標です。さらにその下に通常の検索結果（オーガニック結果）が並びますが、ここへの表示が地域SEOの目標です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                MEOとローカルSEOを両立させることで、同じ検索クエリに対してローカルパックと有機検索結果の両方に表示され、ページ上でのプレゼンスを最大化できます。Webサイトの地域コンテンツ充実はGBPの評価にも好影響を与えることが知られており、二つの施策は相乗効果があります。
              </p>
            </div>
          </div>
        </section>

        {/* 2-col: text + image */}
        <section className="py-16" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-black text-[22px] mb-5" style={{ color: "#0F172A" }}>ローカルSEOの戦略：地域密着で競合に勝つ</h2>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  地域SEOで成果を出すには、地域名キーワードの網羅的な整備・対応エリアページの充実・Googleビジネスプロフィールとの情報統一が基本です。「○○市 + サービス名」で上位表示されることで、購買意欲の高い地域ユーザーを継続的に獲得できます。MEOと連携することで、ローカルパックと有機検索の両方に露出し、検索結果での存在感を最大化します。
                </p>
              </div>
              <div className="relative" style={{ height: "320px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_12_19.png"
                  alt="2名がドキュメントとタブレットを使って打ち合わせをしている様子"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="地域SEOについてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="地域SEO・ローカルSEOのご相談"
          body="地域名キーワードでの上位表示からMEOとの連携まで、地域ビジネスの集客をサイプレスが戦略的に支援します。まずは現状の集客課題をお聞かせください。"
        />
      </main>
      <Footer />
    </>
  );
}

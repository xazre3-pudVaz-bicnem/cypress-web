import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "マーケティング職採用｜SEO・MEO・AIO担当｜株式会社サイプレス",
  description:
    "株式会社サイプレスのマーケティング職採用情報。SEO・MEO・AIO（AI検索最適化）・コンテンツ制作・AI活用を担当するポジションです。経験不問・成長重視の採用。東京葛飾区。",
  keywords: ["マーケティング職 採用", "SEO担当 求人", "MEO対策 求人", "AIO対策 求人", "AIマーケティング 求人 東京"],
  openGraph: {
    title: "マーケティング職採用｜SEO・MEO・AIO担当｜株式会社サイプレス",
    description: "サイプレスのマーケティング職採用。SEO・MEO・AIO・AI活用を担当するポジションです。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/recruit/marketing" },
};

const faqItems = [
  {
    q: "マーケティング職の主な業務を教えてください。",
    a: "クライアントのSEO対策（コンテンツ制作・内部SEO・構造化データ実装）、MEO対策（Googleビジネスプロフィール最適化・口コミ対策）、AIO対策（FAQ充実・E-E-A-T強化・AI検索での引用獲得）、レポーティング、改善提案が主な業務です。AIツールを積極活用した効率化も推進します。",
  },
  {
    q: "SEOやMEOの経験がなくても応募できますか？",
    a: "はい。SEO・MEO・AIOについて自ら学ぼうとする意欲が最も重要です。ChatGPTなどのAIツールを使ってコンテンツを作成したことがある、Webマーケティングに興味がある、GoogleアナリティクスやSearch Consoleを触ったことがある程度の方でも歓迎します。",
  },
  {
    q: "具体的にどんなツールを使いますか？",
    a: "Google Search Console・Google Analytics 4・Google Business Profile（MEO）・Googleスプレッドシート・Notion、そしてChatGPT・Claude等の生成AIツールを日常的に使います。ツールの使い方はOJTでご案内します。",
  },
  {
    q: "1クライアントにどのくらい関わりますか？",
    a: "1名が複数クライアントを担当します。月次レポートの作成・施策の実施・改善提案まで一貫して担当するため、クライアントの成果に直接つながる仕事のやりがいがあります。",
  },
  {
    q: "キャリアパスはどうなっていますか？",
    a: "マーケター→シニアマーケター→ストラテジストというキャリアパスを想定しています。SEO・MEO・AIO・AI活用の幅広い専門知識を身につけることで、Webマーケティングのゼネラリストとしての市場価値を高められます。",
  },
  {
    q: "AI活用はどんな業務に使いますか？",
    a: "コンテンツのドラフト生成・キーワード調査の効率化・競合分析・レポートコメントの生成・FAQコンテンツの作成などにAIを活用します。AIを使って業務時間を短縮し、戦略的な業務に集中できる環境を作っています。",
  },
  {
    q: "リモートワークは可能ですか？",
    a: "ご相談の上で対応可能です。面接でご確認ください。本社は東京都葛飾区白鳥4-6-1-623です。",
  },
  {
    q: "給与・待遇はどうなっていますか？",
    a: "経験・スキルに応じて個別に設定します。詳細は面接時にご確認ください。まずはお気軽にご連絡ください。",
  },
];

const relatedLinks = [
  { href: "/recruit", label: "採用情報トップ", desc: "全ポジションの概要" },
  { href: "/recruit/sales", label: "営業職採用", desc: "提案営業ポジション" },
  { href: "/company", label: "会社概要", desc: "株式会社サイプレスについて" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "担当するSEO業務の内容" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "担当するMEO業務の内容" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "担当するAIO業務の内容" },
  { href: "/ai", label: "AI活用マーケティング", desc: "AI活用の取り組み" },
  { href: "/seo", label: "SEO対策", desc: "SEO対策の詳細" },
  { href: "/aio", label: "AIO対策", desc: "AIO対策の詳細" },
  { href: "/meo", label: "MEO対策", desc: "MEO対策の詳細" },
  { href: "/contact", label: "お問い合わせ", desc: "採用エントリー" },
  { href: "/column/seo", label: "SEOコラム", desc: "業務関連の最新情報" },
];

export default function RecruitMarketingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/recruit" style={{ color: "#6B7280" }} className="hover:underline">採用情報</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>マーケティング職</span>
            </nav>
            <div className="mb-4">
              <span className="text-[11px] px-3 py-1 rounded-full font-semibold" style={{ background: "#0d1b2a", color: "#FFFFFF" }}>積極採用中</span>
            </div>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Marketing Position</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              マーケティング職
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              SEO・MEO・AIO（AI検索最適化）・AI活用を中心に、クライアントのWebマーケティング戦略立案から施策実施・改善まで担当するポジションです。AIツールを積極的に活用しながら成果を追求します。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              業務経験よりも「Webマーケティングで成果を出したい」という意欲と、学習姿勢を重視します。未経験の方もご応募ください。
            </p>
          </div>
        </section>

        {/* 求人詳細 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Job Details</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              求人詳細
            </h2>
            <div className="max-w-3xl">
              {[
                { label: "職種", value: "Webマーケティング担当（SEO・MEO・AIO）" },
                { label: "雇用形態", value: "正社員・業務委託（ご相談の上で対応）" },
                { label: "主な業務", value: "SEO対策・MEO対策・AIO対策・コンテンツ制作・月次レポート・改善提案・AI活用推進" },
                { label: "求める人材", value: "Webマーケティングに強い関心がある方・AIツール活用に前向きな方・自走できる方" },
                { label: "経験・スキル", value: "不問（マーケティング・ライティング・AI活用のいずれかの経験があれば尚可）" },
                { label: "勤務地", value: "東京都葛飾区白鳥4-6-1-623（リモート相談可）" },
                { label: "給与", value: "経験・スキルに応じて個別設定（面接時にご相談）" },
              ].map((row, i) => (
                <div key={i} className="flex gap-8 py-4" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="w-28 shrink-0 text-[13px] font-semibold" style={{ color: "#0d1b2a" }}>{row.label}</span>
                  <span className="text-[13px] leading-[1.8]" style={{ color: "#374151" }}>{row.value}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 求める人物像 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Ideal Candidate</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              求める人物像
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 max-w-5xl">
              {[
                { title: "自走できる方", body: "指示を待つのではなく、自分で課題を見つけて解決策を考えて動ける方。スタートアップフェーズでは、この姿勢が最も重要です。" },
                { title: "AI活用に積極的な方", body: "ChatGPT・Claude等のAIツールを業務効率化に積極的に活用しようとする方。「AIを使いこなして生産性を上げたい」という方を歓迎します。" },
                { title: "数字で成果を追う方", body: "感覚ではなく、SEO検索順位・流入数・問い合わせ数・MEOインサイト等のデータをもとに施策を考えられる方。" },
                { title: "素直に学べる方", body: "SEO・MEO・AIOの知識が日々アップデートされる領域のため、新しい情報をすぐに取り込んで実践できる学習姿勢がある方。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[14px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[13px] leading-[1.8]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="マーケティング職採用についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="マーケティング職へのエントリー"
          body="応募・お問い合わせはお問い合わせフォームよりご連絡ください。まずはカジュアルなご相談も歓迎です。"
        />
      </main>
      <Footer />
    </>
  );
}

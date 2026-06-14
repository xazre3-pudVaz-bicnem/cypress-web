import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "営業職採用｜Web制作・SEO・AIマーケティングの提案営業｜株式会社サイプレス",
  description:
    "株式会社サイプレスの営業職採用情報。中小ビジネスへのSEO・MEO・AIO・Web制作・AI活用支援の提案営業ポジションです。経験不問・裁量大・成長環境。東京葛飾区。",
  keywords: ["営業職 採用", "Webマーケ営業 求人", "SEO 営業 東京", "提案営業 求人", "スタートアップ 営業 東京"],
  openGraph: {
    title: "営業職採用｜Web制作・SEO・AIマーケティングの提案営業｜株式会社サイプレス",
    description: "サイプレスの営業職採用。中小ビジネスへのSEO・MEO・AIO・Web制作・AI活用支援の提案営業。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/recruit/sales" },
};

const faqItems = [
  {
    q: "営業職の主な業務を教えてください。",
    a: "中小ビジネスオーナーへのWebマーケティング支援（SEO・MEO・AIO・Web制作・AI活用・SNS運用）の新規提案営業が主な業務です。顧客の課題をヒアリングし、最適なソリューションを提案します。オンライン商談対応も含みます。",
  },
  {
    q: "営業経験がなくても応募できますか？",
    a: "はい、歓迎します。SEO・MEO・Webマーケティングに興味があり、顧客の課題解決をしたいという意欲があればご応募ください。提案できる商材を深く理解することが成果の鍵のため、サービス知識のインプットを並行して行います。",
  },
  {
    q: "どんなクライアントに提案しますか？",
    a: "飲食・美容・医療・建設・不動産・士業・小売など幅広い中小ビジネスオーナーが主なターゲットです。「MEOで地域集客を強化したい」「SEOで問い合わせを増やしたい」「AIでマーケティング業務を効率化したい」などのニーズに応えます。",
  },
  {
    q: "ノルマはありますか？",
    a: "目標数字は設定しますが、人を追い詰めるノルマではなく、チームで達成を目指す目標設定です。提案の質を高めることで自然と成果につながる環境を作ります。",
  },
  {
    q: "提案するサービスについて詳しくなれますか？",
    a: "SEO・MEO・AIO・AI活用・Web制作について、マーケティング担当と連携してキャッチアップできる環境です。提案する商材を深く理解した上で提案できるように、社内勉強会や実務を通じた学習をサポートします。",
  },
  {
    q: "どのように新規顧客を開拓しますか？",
    a: "オンラインマーケティング（SEO経由の問い合わせ・SNS・広告）、紹介、業界団体・コミュニティなど、複数のチャネルを組み合わせて開拓します。会社のWebサイト自体がSEO・AIO対策済みのため、Web経由での問い合わせを獲得できる体制を整えています。",
  },
  {
    q: "AIツールを営業業務にも使いますか？",
    a: "はい。提案資料作成の効率化・顧客へのフォローメール文案生成・ヒアリング内容の要約・競合調査などにAIを積極活用します。AIを使った営業効率化も業務の一部です。",
  },
  {
    q: "給与・待遇はどうなっていますか？",
    a: "経験・スキルに応じて個別に設定します。インセンティブ制度の導入も検討中です。詳細は面接時にご確認ください。まずはお気軽にご連絡ください。",
  },
];

const relatedLinks = [
  { href: "/recruit", label: "採用情報トップ", desc: "全ポジションの概要" },
  { href: "/recruit/marketing", label: "マーケティング職採用", desc: "SEO・MEO・AIO担当" },
  { href: "/company", label: "会社概要", desc: "株式会社サイプレスについて" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "提案するSEO支援の内容" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "提案するMEO支援の内容" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "提案するWeb制作の内容" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "提案するAIO支援の内容" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "提案するAI活用支援の内容" },
  { href: "/ai", label: "AI活用マーケティング", desc: "AI活用の取り組み" },
  { href: "/aio", label: "AIO対策", desc: "AIO対策の詳細" },
  { href: "/contact", label: "お問い合わせ", desc: "採用エントリー" },
  { href: "/column/seo", label: "SEOコラム", desc: "業務関連の最新情報" },
];

export default function RecruitSalesPage() {
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
              <span style={{ color: "#0F172A" }}>営業職</span>
            </nav>
            <div className="mb-4">
              <span className="text-[11px] px-3 py-1 rounded-full font-semibold" style={{ background: "#0d1b2a", color: "#FFFFFF" }}>積極採用中</span>
            </div>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Sales Position</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              営業職
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              中小ビジネスオーナーへのSEO・MEO・AIO・Web制作・AI活用支援の提案営業ポジションです。顧客の課題を深くヒアリングし、最適なソリューションを提案します。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              「顧客の売上・集客を本質的に改善したい」という気持ちを持ち、AIツールを駆使しながら効率的に提案活動できる方を歓迎します。営業経験よりも意欲と姿勢を重視します。
            </p>
          </div>
        </section>

        <section className="relative" style={{ height: "260px", overflow: "hidden" }}>
          <Image src="/8.png" alt="株式会社サイプレス営業職採用・提案型営業の職場イメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.3)" }} />
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
                { label: "職種", value: "営業職（Webマーケティング支援の新規提案営業）" },
                { label: "雇用形態", value: "正社員・業務委託（ご相談の上で対応）" },
                { label: "主な業務", value: "新規顧客の開拓・ヒアリング・提案・契約・フォロー・マーケティングチームとの連携" },
                { label: "提案するサービス", value: "SEO対策・MEO対策・AIO対策・Web制作・AI活用支援・SNS運用" },
                { label: "求める人材", value: "顧客課題解決への強い関心・自走できる方・AIツール活用に積極的な方" },
                { label: "経験・スキル", value: "不問（営業経験・Webマーケ知識・AI活用経験のいずれかがあれば尚可）" },
                { label: "勤務地", value: "東京都葛飾区白鳥4-6-1-623（リモート相談可）" },
                { label: "給与", value: "経験・スキルに応じて個別設定（面接時にご相談）" },
              ].map((row, i) => (
                <div key={i} className="flex gap-8 py-4" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="w-32 shrink-0 text-[13px] font-semibold" style={{ color: "#0d1b2a" }}>{row.label}</span>
                  <span className="text-[13px] leading-[1.8]" style={{ color: "#374151" }}>{row.value}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 提案する商材 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Sell</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              提案する商材
            </h2>
            <div className="max-w-5xl grid md:grid-cols-3 gap-6">
              {[
                { title: "SEO対策", desc: "Google検索での上位表示を狙い、Webサイトへの有機流入とお問い合わせを増やします。" },
                { title: "MEO対策", desc: "Googleマップでの上位表示により、地域の見込み客からの来店・問い合わせを増やします。" },
                { title: "AIO対策", desc: "ChatGPT・Gemini等のAI検索で引用されるコンテンツ設計で、新しい集客チャネルを開拓します。" },
                { title: "Web制作", desc: "コンバージョン設計・SEO・デザインを兼ね備えた「売れるWebサイト」を制作します。" },
                { title: "AI活用支援", desc: "業務自動化・チャットボット・AIコンテンツ制作体制の構築で業務効率を高めます。" },
                { title: "SNS運用", desc: "Instagram・LINE等の運用支援でフォロワーを顧客に変えるコンテンツ戦略を立案します。" },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}>
                  <p className="font-bold text-[13px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[12px] leading-[1.8]" style={{ color: "#374151" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="営業職採用についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="営業職へのエントリー"
          body="応募・お問い合わせはお問い合わせフォームよりご連絡ください。カジュアルなご相談も歓迎です。"
        />
      </main>
      <Footer />
    </>
  );
}

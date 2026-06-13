import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "マーケター職 | 採用情報",
  description: "株式会社サイプレスのマーケター職採用情報。MEO・SEO・AIO・SNS・AI活用の実務担当。クライアントの集客改善を横断的に担当するWebマーケターを募集します。",
  keywords: ["マーケター採用", "SEO担当", "MEO担当", "Webマーケティング", "株式会社サイプレス"],
  openGraph: {
    title: "マーケター職 採用情報 | 株式会社サイプレス",
    description: "MEO・SEO・AIO・SNS・AI活用の実務担当。クライアントの集客改善を横断的に担うポジション。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/recruit/marketing" },
};

const JOB_TABLE = [
  { label: "職種", value: "Webマーケター（MEO / SEO / AIO / SNS / AI活用）" },
  { label: "雇用形態", value: "正社員" },
  { label: "給与", value: "月給30〜50万円（経験・能力による）" },
  { label: "就業時間", value: "9:00〜18:00（フレックス制）" },
  { label: "休日", value: "完全週休2日制・年間休日130日" },
  { label: "勤務地", value: "フルリモート可" },
  { label: "応募資格", value: "Webマーケティング経験者優遇（ポテンシャル採用あり）" },
  { label: "待遇", value: "社会保険完備・書籍購入補助・資格取得支援・AIツール費用補助" },
];

const SKILLS = [
  {
    num: "01",
    title: "SEO・MEO・AIOの実務スキル",
    body: "各サービスの施策設計・実行・レポーティングを担当します。キーワード調査・Googleビジネスプロフィール最適化・構造化データ実装など、実務を通じて体系的に習得できます。",
  },
  {
    num: "02",
    title: "データ分析・改善提案",
    body: "Googleアナリティクス・サーチコンソール・順位計測ツールなどを使ったデータ分析から、改善施策の立案・実行・効果検証まで一貫して担当します。数値で成果を確認しながら仕事が進められます。",
  },
  {
    num: "03",
    title: "AIツールの活用",
    body: "GPT・Gemini等のAIツールを業務に組み込み、コンテンツ生成・データ整理・レポート作成の効率化を実践します。AIを使いこなせるマーケターとしてのスキルが身につきます。",
  },
  {
    num: "04",
    title: "クライアントとの連携",
    body: "担当クライアントとの定期的なコミュニケーション・進捗報告・提案を行います。経営者と直接話し合いながら施策を進める経験は、マーケターとして大きな成長につながります。",
  },
];

const FAQ_ITEMS = [
  {
    q: "マーケティング未経験でも応募できますか？",
    a: "数値を見ながらロジカルに考える姿勢があれば、業界経験がなくても応募可能です。ポテンシャル採用として、意欲重視で選考します。入社後はOJTで実務を学べます。",
  },
  {
    q: "SEO・MEOのどちらかしか経験がありませんが問題ありませんか？",
    a: "問題ありません。入社後に担当領域を広げながら、横断的なスキルを習得できます。1領域での経験があれば、他の領域への応用は比較的スムーズです。",
  },
  {
    q: "AIツールの経験は必要ですか？",
    a: "必須ではありませんが、ChatGPT等の基本的な利用経験があれば歓迎します。業務でのAI活用は入社後に実践を通じて習得できます。",
  },
  {
    q: "クライアントは何社程度担当しますか？",
    a: "経験・習熟度によって異なりますが、10〜20社程度の担当を目安にしています。少数精鋭で一社一社に深く関わるスタイルです。",
  },
  {
    q: "成長の機会や社内研修はありますか？",
    a: "書籍購入補助・セミナー参加補助・資格取得支援のほか、社内での知識共有ミーティングを定期的に実施しています。業界の最新動向をキャッチアップする環境を整えています。",
  },
];

export default function MarketingRecruitPage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== Hero ===== */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Marketer Position
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 54px)", color: "#0F172A" }}
            >
              マーケター職
            </h1>
            <p className="text-[17px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              MEO・SEO・AIO・SNS・AIを横断的に活用し、クライアントの集客課題を解決するWebマーケターを募集します。
            </p>
          </div>
        </section>

        {/* ===== Breadcrumb ===== */}
        <nav className="py-4" style={{ borderTop: "1px solid #F0EDE6", borderBottom: "1px solid #F0EDE6", background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <ol className="flex items-center gap-2 text-[12px]" style={{ color: "#9CA3AF" }}>
              <li><Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link></li>
              <li>/</li>
              <li><Link href="/recruit" className="hover:underline" style={{ color: "#6B7280" }}>採用情報</Link></li>
              <li>/</li>
              <li style={{ color: "#0F172A" }}>マーケター職</li>
            </ol>
          </div>
        </nav>

        {/* ===== Job Description ===== */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                Job Description
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                仕事内容
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                担当クライアントのWebマーケティング施策の企画・実行・分析・改善報告を一貫して担当します。MEO対策・SEO対策・AIO対策・SNS運用という複数の領域を横断しながら、集客の数値改善を目指します。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                Googleアナリティクス・サーチコンソール・順位計測ツール等を使ったデータ分析から改善提案まで、数値を軸にした仕事の進め方が求められます。AIツールを積極的に活用して業務効率を高めながら、クライアントへの提案品質を上げる姿勢も重視します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                クライアントとは月次レポートや定期ミーティングを通じて継続的に関わります。施策の効果が数値として現れ、クライアントから感謝をいただける瞬間はこの仕事の大きなやりがいです。
              </p>
            </div>
          </div>
        </section>

        {/* ===== Skills ===== */}
        <section className="py-24 md:py-32" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Required Skills
              </p>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                必要なスキル
              </h2>
            </div>
            <div>
              {SKILLS.map((item) => (
                <div
                  key={item.num}
                  className="grid md:grid-cols-[80px_1fr] gap-6 md:gap-10 py-8"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-3" style={{ color: "#0F172A" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* ===== Job Table ===== */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Requirements
              </p>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                募集要項
              </h2>
            </div>
            <div className="max-w-2xl">
              {JOB_TABLE.map((row) => (
                <div
                  key={row.label}
                  className="flex gap-8 py-5"
                  style={{ borderBottom: "1px solid #F0EDE6" }}
                >
                  <dt className="text-[13px] shrink-0 w-24" style={{ color: "#9CA3AF" }}>{row.label}</dt>
                  <dd className="text-[14px] leading-relaxed" style={{ color: "#374151" }}>{row.value}</dd>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <FaqSection items={FAQ_ITEMS} heading="マーケター職 よくある質問" bgColor="#F9F8F5" />

        {/* ===== Related ===== */}
        <RelatedPages
          links={[
            { href: "/recruit", label: "採用情報トップ", desc: "募集職種一覧" },
            { href: "/recruit/sales", label: "Webマーケティング営業", desc: "提案営業職の詳細" },
          ]}
        />

        {/* ===== CTA ===== */}
        <PageContactCTA
          heading="マーケター職へのご応募"
          body="採用に関するご質問・ご応募はお問い合わせフォームよりご連絡ください。まずはカジュアルにお話しすることも歓迎しています。"
        />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AI活用支援サービス｜業務自動化・チャットボット・AIコンテンツ活用｜株式会社サイプレス",
  description:
    "株式会社サイプレスのAI活用支援サービス。ChatGPT・Claude等のLLMを活用した業務効率化・チャットボット構築・AIコンテンツ制作支援・ワークフロー自動化をご支援。東京都葛飾区を拠点に全国対応。",
  keywords: ["AI活用支援", "ChatGPT活用", "業務自動化", "チャットボット構築", "AIマーケティング", "AI業務効率化"],
  openGraph: {
    title: "AI活用支援サービス｜業務自動化・チャットボット・AIコンテンツ活用｜株式会社サイプレス",
    description: "サイプレスのAI活用支援サービス。ChatGPT・Claude活用から業務自動化・チャットボット構築まで一貫支援。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services/ai" },
};

const faqItems = [
  {
    q: "AI活用支援はどんな企業に向いていますか？",
    a: "繰り返し業務が多い・コンテンツ制作に時間がかかっている・お問い合わせ対応を効率化したい・マーケティング業務の一部を自動化したいという企業に向いています。業種を問わず、リソースが限られる中小企業や個人事業主の方にも適しています。",
  },
  {
    q: "ChatGPTやClaudeをビジネスに活用するには何が必要ですか？",
    a: "まず活用目的の明確化（どの業務を効率化したいか）と、適切なプロンプト設計が必要です。また、社内データとの連携が必要な場合はAPIの設定・カスタムGPTの構築が必要になります。サイプレスではプロンプト設計から導入支援・社員教育まで対応します。",
  },
  {
    q: "チャットボットはどのようなシステムで構築しますか？",
    a: "用途に応じて、ChatGPT APIを活用したカスタムチャットボット、LINE公式アカウントとの連携チャットボット、Webサイト組み込みのチャットボットなどを構築します。知識ベース（FAQ・製品情報）を連携した高精度な回答ができるシステムの設計も可能です。",
  },
  {
    q: "AIを使ったコンテンツ制作支援とはどういうサービスですか？",
    a: "AIを活用したSEO記事・SNS投稿・メルマガ・商品説明文などのコンテンツ制作ワークフローの設計と支援を行います。AIが生成したドラフトに対して、人間が専門知識・一次情報を追加して品質を高める「AI×人間協働」のコンテンツ制作体制を構築します。",
  },
  {
    q: "業務自動化はどの範囲まで対応できますか？",
    a: "主にマーケティング・広報・カスタマーサポート・社内文書作成などの知識業務の自動化を支援しています。Zapier・Make（旧Integromat）・n8nなどのノーコード自動化ツールとAIの組み合わせによるワークフロー自動化が得意です。本格的なシステム開発が必要な案件は外部開発者と連携します。",
  },
  {
    q: "AI活用にはどのくらいのコストがかかりますか？",
    a: "ChatGPT APIやClaude API自体の費用は使用量に応じた従量課金（月数千円〜）です。サイプレスの支援費用は、導入コンサルティング・プロンプト設計・ワークフロー構築の内容によって異なります。まずは無料相談で現状の課題と目標をお聞かせください。",
  },
  {
    q: "社員がAIを活用できるように研修してもらえますか？",
    a: "はい、ChatGPT・Claude等のLLMの基本的な使い方から、業務別の活用事例・プロンプト作成のコツまでを解説するAI活用研修（オンライン・対面）を実施しています。参加者のスキルレベルや業種に合わせてカスタマイズします。",
  },
  {
    q: "SEO対策やAIO対策と組み合わせて依頼できますか？",
    a: "はい、AI活用支援をSEO・AIO・MEO・Web制作と組み合わせた統合的なWebマーケティング支援が可能です。AIを使った効率的なコンテンツSEOの運用体制構築と、SEO対策を一緒に進めることで、費用対効果の高い集客基盤を構築できます。",
  },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用とは", desc: "AIマーケティングの基礎知識" },
  { href: "/ai/automation", label: "業務自動化", desc: "マーケティング業務のAI自動化" },
  { href: "/ai/chatbot", label: "チャットボット構築", desc: "AIチャットボットの導入" },
  { href: "/ai/content", label: "AIコンテンツ制作", desc: "AI×人間協働のコンテンツ制作" },
  { href: "/ai/workflow", label: "AIワークフロー設計", desc: "n8n・Zapierとの連携" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索最適化" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "AIを活用したコンテンツSEO" },
  { href: "/knowledge/chatgpt-business", label: "ChatGPTビジネス活用", desc: "具体的な活用事例" },
  { href: "/knowledge/ai-prompt", label: "プロンプト設計ガイド", desc: "効果的なプロンプトの書き方" },
  { href: "/column/seo", label: "SEOコラム", desc: "AI×マーケティングの最新情報" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
  { href: "/contact", label: "無料相談", desc: "AI活用支援のご相談" },
];

export default function ServicesAiPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/services" style={{ color: "#6B7280" }} className="hover:underline">サービス</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>AI活用支援</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>AI Utilization Service</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AI活用支援サービス
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              株式会社サイプレスのAI活用支援サービスは、ChatGPT・Claudeなどの生成AIを活用した業務効率化・チャットボット構築・コンテンツ制作支援・ワークフロー自動化をご支援します。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-8" style={{ color: "#374151" }}>
              AIツールを導入するだけでなく、実際にビジネス成果につながる使い方を設計します。SEO・AIO・MEOとの統合支援も可能です。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ border: "1.5px solid #0F172A", color: "#0F172A" }}>
                無料相談・お問い合わせ
              </Link>
            </div>
          </div>
        </section>

        <section className="relative" style={{ height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_09_09 (4).png" alt="AI活用支援・業務自動化・ChatGPT活用のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.2)" }} />
        </section>

        {/* サービス内容 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Service Details</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AI活用支援サービスの内容
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "AI活用コンサルティング", body: "現在の業務フローを確認し、AIで効率化できるポイントを特定します。ChatGPT・Claude・Gemini等のツール選定と活用計画を策定します。" },
                { title: "プロンプト設計支援", body: "業種・業務内容に合わせた効果的なプロンプトを設計します。業務別のプロンプトライブラリを構築し、社内での活用を定着させます。" },
                { title: "チャットボット構築", body: "ChatGPT APIを活用したWebサイト組み込みチャットボット・LINE連携チャットボット・社内Q&Aボットを構築します。" },
                { title: "ワークフロー自動化", body: "Zapier・Make・n8nなどのノーコード自動化ツールとAIを組み合わせ、コンテンツ制作・メール対応・レポート作成などの業務を自動化します。" },
                { title: "AIコンテンツ制作体制の構築", body: "AI生成コンテンツをベースに、人間が専門知識・一次情報を追加するAI×人間協働のコンテンツ制作ワークフローを設計します。" },
                { title: "AI活用研修", body: "ChatGPT・Claude等の基本から業務別活用事例まで解説するオンライン研修を実施します。参加者のスキルに合わせてカスタマイズします。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AIを活用しないリスク */}
        <section className="py-20" style={{ background: "#0d1b2a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a", fontFamily: "var(--font-display)" }}>Why Act Now</p>
            <h2 className="font-black text-[26px] mb-12" style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>
              AIを活用しないリスク｜なぜ今取り組むべきか
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  num: "01",
                  title: "AIを使う競合との生産性格差が拡大している",
                  body: "AIで生産性3〜5倍の競合に対し、AIを使わない企業は徐々に競争力を失う。同じリソースで成果に差が開き続ける構造になっている。",
                },
                {
                  num: "02",
                  title: "コンテンツ制作・SEOで大差がつき始めている",
                  body: "AIを活用したコンテンツ制作は量・質ともに向上し、AI未導入企業との検索順位差が広がっている。コンテンツ競争に遅れるリスクが現実になっている。",
                },
                {
                  num: "03",
                  title: "カスタマーサポートのコスト構造が変わりつつある",
                  body: "AI活用でサポートコストを大幅削減した事例が増えている。導入のタイミングを逃すと、コスト競争力でも差がつく。（数字は可能性を示すものであり保証ではありません）",
                },
                {
                  num: "04",
                  title: "AI活用スキルが人材獲得にも影響する",
                  body: "AI活用環境の整備は優秀な人材の採用・定着にもプラスに働く。「AIを使える職場かどうか」が求職者の判断基準になりつつある。",
                },
                {
                  num: "05",
                  title: "早期導入者ほど学習データ・ノウハウが蓄積される",
                  body: "今始めることで後から始めた競合より圧倒的な優位性を持てる。AIは使えば使うほど自社に合ったノウハウが蓄積され、差別化が深まる。",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-8 py-8" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <span className="text-[28px] font-black shrink-0 leading-none" style={{ color: "#c4b89a", fontFamily: "var(--font-display)" }}>{item.num}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#FFFFFF" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#9CA3AF" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />
            </div>
          </div>
        </section>

        {/* 業種別AI活用事例 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Use Cases by Industry</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別AI活用事例
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  industry: "飲食業",
                  cases: ["メニュー説明・おすすめコメントのAI生成", "SNS投稿文・季節キャンペーン文章の自動作成"],
                },
                {
                  industry: "美容室",
                  cases: ["予約対応チャットボットの構築", "口コミ返信文の自動生成・効率化"],
                },
                {
                  industry: "医療クリニック",
                  cases: ["患者向けFAQページのAI補助制作", "問い合わせ対応の効率化・自動振り分け"],
                },
                {
                  industry: "不動産",
                  cases: ["物件説明文・特徴コピーのAI生成", "問い合わせへの自動初回返信設計"],
                },
                {
                  industry: "士業・コンサル",
                  cases: ["提案書・企画書ドラフトのAI補助", "クライアントレポートの自動生成フロー"],
                },
                {
                  industry: "EC・小売",
                  cases: ["商品説明文・SEOタイトルのAI一括生成", "メルマガ・ステップメールの自動作成"],
                },
              ].map((item, i) => (
                <div key={i} className="p-6" style={{ background: "#FFFFFF", border: "1px solid #E8E4DC" }}>
                  <p className="font-bold text-[14px] mb-4" style={{ color: "#c4b89a", fontFamily: "var(--font-display)" }}>{item.industry}</p>
                  <ul className="space-y-2">
                    {item.cases.map((c, j) => (
                      <li key={j} className="flex gap-2 text-[13px] leading-[1.8]" style={{ color: "#374151" }}>
                        <span className="shrink-0" style={{ color: "#c4b89a" }}>—</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 選ばれる4つの理由 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Why Choose Us</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのAI活用支援が選ばれる4つの理由
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  num: "01",
                  title: "マーケティングと連動したAI支援",
                  body: "SEO・MEO・AIOと連携した包括的なAI活用を設計します。単独のAI導入ではなく、集客全体の効率化を視野に入れた支援が強みです。",
                },
                {
                  num: "02",
                  title: "ビジネス成果にフォーカスした設計",
                  body: "「AIを導入すること」ではなく「業務効率化・集客増加」を目的に支援します。ツールありきではなく、課題解決から逆算した設計を行います。",
                },
                {
                  num: "03",
                  title: "ノーコードツールとの組み合わせ",
                  body: "Zapier・Make・n8nを活用した現実的な自動化を提案します。大規模なシステム開発なしに、すぐに動かせる自動化を優先します。",
                },
                {
                  num: "04",
                  title: "継続的なフォローアップ",
                  body: "導入後も月次ミーティングで活用状況を確認・改善提案を続けます。AI活用は導入がゴールではなく、継続的な改善で成果が出るものと考えています。",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-6 py-8" style={{ borderTop: "1px solid #E8E4DC", borderLeft: "3px solid #c4b89a", paddingLeft: "24px", marginLeft: "-3px" }}>
                  <span className="text-[20px] font-black shrink-0" style={{ color: "#c4b89a", fontFamily: "var(--font-display)" }}>{item.num}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AI活用支援サービスについてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AI活用支援の無料相談"
          body="現在の業務課題をお聞きし、AIを活用した効率化・自動化の方法をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}

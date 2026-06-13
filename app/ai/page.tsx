import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "AI活用支援 | 業務効率化・自動化・チャットボット構築",
  description: "株式会社サイプレスのAI活用支援。業務自動化・AIチャットボット構築・コンテンツ制作支援・ワークフロー改善を通じて、中小企業のAI導入を伴走支援します。",
  keywords: ["AI活用支援", "AI導入", "業務自動化", "AIチャットボット", "DX支援", "AI効率化"],
  openGraph: {
    title: "AI活用支援 | 株式会社サイプレス",
    description: "業務自動化・チャットボット・コンテンツ制作・ワークフロー改善を通じたAI活用支援。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/ai" },
};

const SUB_PAGES = [
  {
    href: "/ai/automation",
    title: "業務自動化",
    desc: "問い合わせ自動返信・データ集計・定期レポート・SNS配信など、繰り返し業務をAIで自動化します。",
  },
  {
    href: "/ai/chatbot",
    title: "AIチャットボット構築",
    desc: "GPT・RAGを活用した顧客対応・社内FAQ・採用問い合わせ対応のチャットボットを構築します。",
  },
  {
    href: "/ai/content",
    title: "AIコンテンツ制作支援",
    desc: "ブログ記事・SNS投稿・GBP投稿・メールマガジンなど、コンテンツ制作をAIで効率化します。",
  },
  {
    href: "/ai/workflow",
    title: "AIワークフロー改善",
    desc: "営業・採用・レポート作成・コンテンツ発信など、業務フロー全体をAIで最適化します。",
  },
];

const FAQ_ITEMS = [
  {
    q: "AI活用支援はどんな業種・規模の企業に向いていますか？",
    a: "業種を問わず対応しています。特に繰り返し業務が多い企業・少人数で多くの業務を担っている企業・情報発信の継続に課題を抱える企業に効果的です。「何から始めればいいかわからない」段階からご相談ください。",
  },
  {
    q: "AIツールは何を使いますか？",
    a: "OpenAIのGPT・Anthropic Claude・Google Geminiなどの大規模言語モデルのほか、n8n・Zapier・Make等のワークフロー自動化ツール、Notion AI・ChatPDFなどの業務支援ツールを活用します。要件に合わせて最適なツールを選定します。",
  },
  {
    q: "社内にエンジニアがいなくても導入できますか？",
    a: "はい。ノーコード・ローコードツールを活用することで、社内エンジニアなしに多くの自動化・AI活用を実現できます。導入後の運用も含めてサポートします。",
  },
  {
    q: "費用はどのくらいかかりますか？",
    a: "内容によって大きく異なります。シンプルな自動化フロー構築で5〜15万円、チャットボット構築で15〜50万円以上が目安です。まずは現状の業務課題をお聞きし、費用対効果の高い施策からご提案します。",
  },
  {
    q: "Webマーケティング支援と組み合わせることはできますか？",
    a: "はい。AIを活用してSEO記事・GBP投稿・SNSコンテンツを効率的に制作・発信する体制を構築することで、MEO・SEOの継続運用コストを下げながら効果を高めることができます。",
  },
];

export default function AiIndexPage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== Hero ===== */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              AI Implementation
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(30px, 4.5vw, 58px)", color: "#0F172A" }}
            >
              AI活用支援
            </h1>
            <p className="text-[17px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              業務自動化・チャットボット構築・コンテンツ制作支援・ワークフロー改善を通じて、中小企業のAI導入を伴走支援します。
            </p>
          </div>
        </section>

        {/* ===== Breadcrumb ===== */}
        <nav className="py-4" style={{ borderTop: "1px solid #F0EDE6", borderBottom: "1px solid #F0EDE6", background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <ol className="flex items-center gap-2 text-[12px]" style={{ color: "#9CA3AF" }}>
              <li><Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link></li>
              <li>/</li>
              <li style={{ color: "#0F172A" }}>AI活用支援</li>
            </ol>
          </div>
        </nav>

        {/* ===== Hero Image ===== */}
        <div className="relative w-full overflow-hidden" style={{ height: "400px" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_20_52.png"
            alt="AI活用支援のデジタルオーバーレイ・タイピング作業"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.3)" }} />
        </div>

        {/* ===== What is AI Support ===== */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                Overview
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                AI活用支援とは
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                「AIを使いたいが何から始めればいいかわからない」という企業が増えています。ChatGPTやその他のAIツールは急速に普及していますが、実際に業務に組み込んで効果を出すには、適切なツール選定・業務フローの再設計・導入後の運用体制が必要です。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                サイプレスのAI活用支援は、業務自動化・チャットボット構築・コンテンツ制作の効率化・ワークフロー改善という4つの領域で、中小企業のAI導入を伴走支援します。単にツールを紹介するのではなく、実際に業務に落とし込んで運用できる状態まで支援します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                また、AI活用はWebマーケティングとの連動でより大きな効果を発揮します。AIを使ってSEO記事・SNS投稿・GBP投稿コンテンツを継続的に生産する体制を整えることで、情報発信のコストを下げながら集客力を高めることができます。
              </p>
            </div>
          </div>
        </section>

        {/* ===== Sub Pages ===== */}
        <section className="py-24 md:py-32" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Services
              </p>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                AI活用支援の内容
              </h2>
            </div>
            <div>
              {SUB_PAGES.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group block py-8"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <div className="grid md:grid-cols-[240px_1fr_auto] gap-4 md:gap-8 items-start">
                    <h3 className="font-bold text-[17px] group-hover:underline" style={{ color: "#0F172A" }}>
                      {page.title}
                    </h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>
                      {page.desc}
                    </p>
                    <span className="text-[13px] font-medium shrink-0" style={{ color: "#6B7280" }}>
                      詳しく見る →
                    </span>
                  </div>
                </Link>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* ===== Integration with Marketing ===== */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                Integration
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                Webマーケティングとの連動
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                MEO・SEO・AIOの効果を持続させるには、コンテンツの継続的な更新が不可欠です。しかし多くの中小企業では、社内リソースの不足から更新が止まってしまうケースが多く見られます。AIはこの課題を解決する強力な手段です。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                Googleビジネスプロフィールへの投稿・ブログ記事の下書き作成・SNSコンテンツの生成など、定期的に発生するコンテンツ制作業務をAIで自動化・効率化することで、少人数でも継続的な情報発信が可能になります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                サイプレスでは、AI活用支援とWebマーケティング支援を組み合わせたトータルの集客改善も承っています。現在のマーケティング状況とリソースをお聞きし、AIをどこにどう組み込むかをご提案します。
              </p>
            </div>
          </div>
        </section>

        {/* ===== AI活用で変わること 2-col ===== */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative overflow-hidden" style={{ height: "300px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_18_57.png"
                  alt="AI活用支援のデジタル会議・データ活用"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                  Transformation
                </p>
                <h2
                  className="font-black leading-tight tracking-tight mb-6"
                  style={{ fontSize: "clamp(20px, 2.5vw, 32px)", color: "#0F172A" }}
                >
                  AI活用で変わること
                </h2>
                <p className="text-[14px] leading-[1.9] mb-4" style={{ color: "#374151" }}>
                  AIを業務に組み込むことで、繰り返し作業の時間が削減され、担当者はより創造的・判断的な業務に集中できるようになります。中小企業でも、大企業と同等の情報処理・コンテンツ発信が可能になります。
                </p>
                <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>
                  自動化・チャットボット・コンテンツ生成・ワークフロー改善—どこから始めればよいか分からない段階からご相談ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <FaqSection items={FAQ_ITEMS} heading="AI活用支援 よくある質問" bgColor="#F9F8F5" />

        {/* ===== Related ===== */}
        <RelatedPages
          links={[
            { href: "/services/ai", label: "AI活用支援サービス概要", desc: "サービス詳細・料金" },
            { href: "/ai/automation", label: "業務自動化", desc: "繰り返し業務のAI自動化" },
            { href: "/ai/chatbot", label: "AIチャットボット構築", desc: "GPT/RAGを活用した対話システム" },
            { href: "/services/seo", label: "SEO対策", desc: "AI連動したコンテンツSEO" },
          ]}
        />

        {/* ===== CTA ===== */}
        <PageContactCTA
          heading="AI活用に関するご相談"
          body="「何から始めればいいかわからない」という段階からご相談を承っています。業務課題をお聞きし、費用対効果の高いAI活用プランをご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}

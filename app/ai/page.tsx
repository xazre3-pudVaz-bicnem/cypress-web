import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AI活用マーケティングとは｜生成AIで集客・業務効率を高める方法｜株式会社サイプレス",
  description:
    "AI活用マーケティングの基礎から実践まで解説。ChatGPT・Claude等の生成AIを活用したコンテンツ制作・チャットボット・業務自動化・AIO対策まで体系的に網羅。",
  keywords: ["AI活用マーケティング", "生成AI", "ChatGPT活用", "AIマーケティング", "AI業務効率化", "AIO対策"],
  openGraph: {
    title: "AI活用マーケティングとは｜生成AIで集客・業務効率を高める方法｜株式会社サイプレス",
    description: "AI活用マーケティングの実践ガイド。ChatGPT活用から業務自動化・AIO対策まで解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/ai" },
};

const faqItems = [
  {
    q: "AI活用マーケティングとは何ですか？",
    a: "ChatGPT・Claude・Geminiなどの生成AIを活用して、マーケティング業務（コンテンツ制作・SEO・SNS・広告・分析）を効率化・高度化する取り組みです。AIを活用することで少ないリソースで多くのコンテンツを制作できるようになり、マーケティング担当者がより戦略的な業務に集中できるようになります。",
  },
  {
    q: "AI活用でSEO対策は変わりますか？",
    a: "変わります。AIを使ったコンテンツ生成の普及により、コンテンツの質（一次情報・専門性・E-E-A-T）がより重要になっています。また、ChatGPT・Gemini等のAI検索での引用を獲得するAIO（AI Optimization）が新たな集客チャネルとして重要になっています。SEOとAIOを統合した戦略が現代のマーケティングの基本です。",
  },
  {
    q: "生成AIでコンテンツを量産してもSEOに有効ですか？",
    a: "AIで生成したままの薄いコンテンツを量産することはSEOにとって逆効果の場合があります。AIは構成・下書き・アイデア出しには有効ですが、専門知識・一次情報・独自の視点を人間が追加することで、AIにはない価値を持つコンテンツが生まれます。質を保証した上でのAI活用が重要です。",
  },
  {
    q: "AI検索（ChatGPT・Perplexity等）で自社情報が引用されるには？",
    a: "E-E-A-Tが高いコンテンツ（専門性・一次情報・著者情報の明示）、FAQ形式のコンテンツの充実、構造化データ（FAQPage・Organization等）の実装、llms.txtの設置が有効です。AI検索は「信頼できる情報源」からの引用を優先する傾向があります。",
  },
  {
    q: "チャットボットを導入するとどんなメリットがありますか？",
    a: "24時間365日の問い合わせ対応・FAQへの自動回答・リード情報の自動収集・担当者への問い合わせ内容の振り分けなどが主なメリットです。特に問い合わせ件数が多い・営業時間外の問い合わせが多いビジネスで効果的です。",
  },
  {
    q: "AIを活用した業務自動化はどこから始めればいいですか？",
    a: "まず「繰り返し行っている業務」をリストアップし、AIで代替・支援できる業務を特定します。コンテンツ生成・メール文案・議事録作成・レポート集計などが始めやすい領域です。最初からフル自動化を目指すより、特定業務の効率化から始めて少しずつ範囲を広げることをお勧めします。",
  },
  {
    q: "AIを使うと仕事が奪われますか？",
    a: "特定の繰り返し業務はAIが代替しますが、戦略立案・創造的な判断・人間関係・一次情報の収集・品質管理などはAIが苦手な領域です。AIを活用してルーティン業務を効率化し、より高付加価値な仕事に集中できる環境を作ることが、AIと人間の協働の正しいあり方です。",
  },
  {
    q: "AI活用支援のサービスについて詳しく教えてください。",
    a: "サイプレスでは、AI活用コンサルティング・プロンプト設計支援・チャットボット構築・ワークフロー自動化・AIコンテンツ制作体制の構築・AI活用研修を提供しています。SEO・AIO・MEOとの統合支援も可能です。まずは無料相談でご状況をお聞かせください。",
  },
];

const relatedLinks = [
  { href: "/ai/automation", label: "業務自動化", desc: "マーケティング業務のAI自動化" },
  { href: "/ai/chatbot", label: "チャットボット構築", desc: "AIチャットボットの導入" },
  { href: "/ai/content", label: "AIコンテンツ制作", desc: "AI×人間協働のコンテンツ制作" },
  { href: "/ai/workflow", label: "AIワークフロー設計", desc: "n8n・Zapierとの連携" },
  { href: "/aio", label: "AIO対策", desc: "AI検索最適化" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "サイプレスのAI支援" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索への引用獲得" },
  { href: "/seo", label: "SEO対策", desc: "SEOとAIOの統合戦略" },
  { href: "/knowledge/chatgpt-business", label: "ChatGPTビジネス活用", desc: "具体的な活用事例" },
  { href: "/knowledge/ai-prompt", label: "プロンプト設計ガイド", desc: "効果的なプロンプトの書き方" },
  { href: "/column/seo", label: "SEOコラム", desc: "AI×マーケティングの最新情報" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
];

const aiAreas = [
  { href: "/ai/content", title: "AIコンテンツ制作", desc: "SEO記事・SNS投稿・コピーをAI活用で効率化する方法" },
  { href: "/ai/automation", title: "業務自動化", desc: "繰り返し業務をAIとノーコードツールで自動化" },
  { href: "/ai/chatbot", title: "チャットボット構築", desc: "問い合わせ対応・FAQ回答を24時間自動化" },
  { href: "/ai/workflow", title: "AIワークフロー設計", desc: "n8n・Zapier・MakeとAIを組み合わせた業務設計" },
];

export default function AiPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>AI活用</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>AI Marketing</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AI活用マーケティング
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              ChatGPT・Claude・Geminiなどの生成AIは、マーケティング業務を根本から変えるツールです。コンテンツ制作・SEO・チャットボット・業務自動化にAIを活用することで、限られたリソースで最大の成果を出せるようになります。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              一方でAI検索（ChatGPT・Perplexity・Gemini）が普及したことで、AI検索に引用されるAIO（AI Optimization）も重要な集客チャネルになっています。SEO・MEO・AIOを統合した戦略が現代のWebマーケティングの基本です。
            </p>
          </div>
        </section>

        <section className="relative" style={{ height: "320px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 19_12_19.png" alt="AI活用マーケティング・生成AI・ChatGPT業務活用のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.2)" }} />
        </section>

        {/* AI活用の主要領域 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Key Areas</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AI活用の主要領域
            </h2>
            <div className="max-w-4xl space-y-0">
              {aiAreas.map((area, i) => (
                <Link key={i} href={area.href} className="block group py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-[15px] mb-2 group-hover:underline" style={{ color: "#0d1b2a" }}>{area.title}</p>
                      <p className="text-[14px] leading-[1.8]" style={{ color: "#374151" }}>{area.desc}</p>
                    </div>
                    <span className="shrink-0 ml-6 text-[13px] mt-1" style={{ color: "#9CA3AF" }}>→</span>
                  </div>
                </Link>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* AIとSEO・AIOの関係 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>AI × SEO × AIO</p>
            <h2 className="font-black text-[26px] mb-8" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AI時代のSEO・AIO統合戦略
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
              {[
                { title: "AI × SEO", body: "AIを使ってコンテンツ制作を効率化しながら、E-E-A-Tが高い独自コンテンツを積み上げる。AI生成コンテンツは人間が品質向上を必ず行う。" },
                { title: "AI × AIO", body: "ChatGPT・Perplexity等のAI検索に引用されるFAQ充実・構造化データ実装・E-E-A-T強化・llms.txt設置で、AI検索からの流入を獲得する。" },
                { title: "AI × 業務効率化", body: "コンテンツ制作・チャットボット・レポート作成などの繰り返し業務をAIで効率化し、戦略的な業務への集中と施策スピードの向上を実現する。" },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}>
                  <p className="font-bold text-[14px] mb-3" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[13px] leading-[1.8]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AI活用マーケティングについてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AI活用支援のご相談"
          body="AI活用による業務効率化・コンテンツSEO・AIO対策をトータルでご支援します。"
        />
      </main>
      <Footer />
    </>
  );
}

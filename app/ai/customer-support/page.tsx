import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AIカスタマーサポートとは｜チャットボット・自動応答で顧客対応を効率化｜株式会社サイプレス",
  description:
    "AIチャットボットによるカスタマーサポートの自動化。FAQへの自動応答・24時間対応・問い合わせ振り分けで顧客満足度と業務効率を同時に向上させる方法を解説。",
  keywords: ["AIカスタマーサポート", "チャットボット 自動応答", "FAQ自動化", "24時間対応 AI", "顧客対応 自動化"],
  openGraph: {
    title: "AIカスタマーサポートとは｜チャットボット・自動応答で顧客対応を効率化｜株式会社サイプレス",
    description: "AIチャットボットで24時間FAQ自動対応・問い合わせ振り分けを実現。顧客満足度と業務効率を同時に高める方法を解説。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_22_31.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/ai/customer-support" },
};

const faqItems = [
  {
    q: "中小企業でもAIカスタマーサポートを導入できますか？",
    a: "はい。ChatGPTを活用したシンプルなFAQ自動応答から始められます。ノーコードツール（Dify・Botpress・LINE公式アカウント）を使えば専門的なプログラミング知識がなくても導入できます。",
  },
  {
    q: "AIチャットボットと人間のオペレーターはどう使い分けますか？",
    a: "FAQ・よくある問い合わせはAIが対応し、複雑な案件・クレーム・個別相談は人間にエスカレーションする「ハイブリッド型」が効果的です。AIが対応できない場合は自動でオペレーターに転送します。",
  },
  {
    q: "導入コストはどのくらいかかりますか？",
    a: "ChatGPT APIを使ったシンプルなチャットボットは月数千円〜数万円から導入可能です。カスタム開発・CRMシステム連携などが必要な場合は別途費用が発生します。まずは無料相談でご要件をお聞かせください。",
  },
  {
    q: "AIが誤った回答をした場合はどう対処しますか？",
    a: "「ハルシネーション（誤情報の生成）」リスクに備え、AIの回答範囲を自社FAQデータに限定するRAG（検索拡張生成）技術が有効です。定期的な回答品質チェックと改善も重要です。",
  },
  {
    q: "LINE公式アカウントでAI自動応答はできますか？",
    a: "はい。LINE公式アカウントのMessaging APIを使い、ChatGPT等のAIと連携したチャットボットを構築できます。予約受付・FAQ対応・キャンペーン告知などに活用できます。",
  },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用支援とは", desc: "AI支援の概要" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "サービス詳細" },
  { href: "/ai/chatbot", label: "AIチャットボット構築", desc: "チャットボットの設計と実装" },
  { href: "/ai/automation", label: "AI業務自動化", desc: "業務全体の自動化" },
  { href: "/ai/internal-tools", label: "AI社内ツール", desc: "社内業務のAI化" },
  { href: "/ai/workflow", label: "AIワークフロー設計", desc: "n8n・Zapierとの連携" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "LINE公式アカウント運用" },
  { href: "/contact", label: "無料相談", desc: "AIカスタマーサポートのご相談" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#FFFFFF", paddingTop: "128px", paddingBottom: "64px" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/ai" style={{ color: "#6B7280" }} className="hover:underline">AI活用支援</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>AIカスタマーサポート</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>AI Customer Support</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIカスタマーサポート
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              AIチャットボットを活用することで、24時間対応・FAQ自動回答・問い合わせ振り分けが可能になります。スタッフの対応工数を削減しながら、顧客満足度を維持・向上させます。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              すべての問い合わせをAIに任せるのではなく、「AIが対応できる範囲と人間が対応すべき範囲」を明確に設計することが導入成功の鍵です。ハイブリッド型のカスタマーサポート体制を構築します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section className="relative" style={{ height: "260px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_22_31.png"
            alt="AIカスタマーサポート・チャットボット・自動応答システムのイメージ"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-center px-8 md:px-20" style={{ background: "rgba(13,27,42,0.5)" }}>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#c4b89a", fontFamily: "var(--font-display)" }}>AI × Support</p>
              <p className="font-black text-[22px] md:text-[28px] leading-snug" style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>
                24時間365日、AIが<br />顧客対応の最前線に立つ
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Capabilities</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIカスタマーサポートで対応できる業務
            </h2>
            <div className="max-w-4xl">
              {[
                { n: "01", t: "FAQへの自動応答", b: "「営業時間は？」「料金は？」「対応エリアは？」など繰り返し同じ質問への回答をAIが自動処理します。スタッフの対応工数を大幅に削減できます。" },
                { n: "02", t: "予約受付・変更対応", b: "飲食店・美容室・医療機関などの予約受付をAIが自動対応します。空き状況確認・予約確定・リマインド送信まで自動化できます。" },
                { n: "03", t: "問い合わせの振り分け・エスカレーション", b: "問い合わせの内容を自動判断し、担当部署・担当者に自動振り分けします。AI対応の限界（クレーム・複雑な案件）では人間に自動転送します。" },
                { n: "04", t: "24時間対応体制の構築", b: "夜間・休日でもAIが初期対応を行います。「営業時間外です。翌日〇時に担当者から連絡します」など適切な自動応答で機会損失を防ぎます。" },
                { n: "05", t: "多言語対応", b: "英語・中国語・韓国語など複数言語での自動応答が可能です。インバウンド対応や海外顧客へのサポートに活用できます。" },
              ].map((item) => (
                <div key={item.n} className="flex gap-6 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.t}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Implementation Steps */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>How to Implement</p>
            <h2 className="font-black text-[26px] mb-6" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIカスタマーサポート導入の流れ
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              導入成功のカギは「対応範囲の設計」と「知識ベースの整備」にあります。まずよくある問い合わせを洗い出し、AIが対応する範囲と人間にエスカレーションする条件を明確化してから構築を進めます。
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "STEP 1: 対応範囲と知識ベースの設計", body: "まず自社でよくある問い合わせをリストアップし、AIが回答できるFAQを整理します。「どこまでAIが対応し、どこから人間に引き継ぐか」の条件を明確に定義します。" },
                { title: "STEP 2: チャットボットの構築・設定", body: "ChatGPT API・Claude API等を活用し、整備した知識ベース（RAG）を組み込んだチャットボットを構築します。Webサイト・LINE・Slackなど接点に合わせたシステムを選択します。" },
                { title: "STEP 3: テスト・品質チェック", body: "実際にさまざまな問い合わせパターンでテストし、誤回答・ハルシネーションがないか確認します。エスカレーション条件が正しく機能するかも検証します。" },
                { title: "STEP 4: 運用・継続改善", body: "本番稼働後も定期的に回答品質をモニタリングし、FAQの追加・プロンプトの改善・知識ベースの更新を継続します。顧客フィードバックを活かした改善が重要です。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AIカスタマーサポートについてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AIカスタマーサポート導入のご相談"
          body="チャットボット構築・LINE連携・FAQ自動応答システムの導入をサポートします。業種・規模・予算に合わせた最適なAIサポート体制をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}

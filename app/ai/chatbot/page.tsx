import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "AIチャットボット構築 | GPT・RAGを活用した対話システム",
  description: "株式会社サイプレスのAIチャットボット構築。GPTとRAGを活用した顧客問い合わせ対応・社内FAQ・採用対応・予約受付の自動化チャットボットを構築します。",
  keywords: ["AIチャットボット", "チャットボット構築", "GPT", "RAG", "FAQ自動化", "問い合わせ自動化"],
  openGraph: {
    title: "AIチャットボット構築 | 株式会社サイプレス",
    description: "GPT・RAGを活用した顧客対応・社内FAQ・採用問い合わせ対応のチャットボットを構築します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/ai/chatbot" },
};

const SCENES = [
  {
    num: "01",
    title: "顧客問い合わせ自動対応",
    body: "Webサイトに設置したチャットボットが、よくある質問・サービス内容・料金・営業時間などの問い合わせに24時間自動で回答します。有人対応が必要な問い合わせを絞り込むことで、カスタマーサポートの工数を大幅に削減できます。",
  },
  {
    num: "02",
    title: "社内FAQ自動化",
    body: "社内規定・マニュアル・手順書などのドキュメントをRAG（検索拡張生成）で連携し、社員が質問するとリアルタイムで正確な回答を返すシステムを構築します。新入社員の教育コスト削減や、ベテラン社員への問い合わせ負荷軽減に効果的です。",
  },
  {
    num: "03",
    title: "採用問い合わせ対応",
    body: "採用サイトに設置したチャットボットが、求人内容・選考フロー・勤務条件などの質問に自動回答します。採用担当者への直接問い合わせを減らしながら、応募者の疑問を迅速に解消し、応募率向上にも貢献します。",
  },
  {
    num: "04",
    title: "予約受付自動化",
    body: "空き状況の確認・日程調整・予約確定・リマインド送信を自動化した予約チャットボットを構築します。LINE・Webサイト・Googleビジネスプロフィールなど複数チャネルへの対応も可能です。",
  },
];

const FAQ_ITEMS = [
  {
    q: "RAGとは何ですか？",
    a: "RAG（Retrieval-Augmented Generation）は、AIが回答を生成する際に、あらかじめ登録したドキュメントや社内データを検索して参照する仕組みです。GPT単体よりも正確で根拠のある回答が可能になり、社内固有の情報に対応したチャットボットを実現できます。",
  },
  {
    q: "どのようなプラットフォームに設置できますか？",
    a: "WebサイトへのJavaScript埋め込み・LINE公式アカウント・Slack・NotionなどのプラットフォームへのBot連携に対応しています。要件に合わせた設置先をご提案します。",
  },
  {
    q: "自社のドキュメントやデータを学習させることはできますか？",
    a: "はい。RAGを活用することで、自社のPDF・Word・スプレッドシート・Webサイトなどのコンテンツをチャットボットが参照できるようになります。完全に社内情報に特化したボットを構築できます。",
  },
  {
    q: "チャットボットの回答精度はどのくらいですか？",
    a: "RAGに登録するドキュメントの質と量によって大きく変わります。導入前にテスト運用を行い、回答精度を確認してから本番リリースします。導入後も改善サポートを続けます。",
  },
  {
    q: "導入後のメンテナンスはどうなりますか？",
    a: "社内ドキュメントの更新に合わせたRAGデータの更新、回答精度の定期チェック、プロンプトの改善などの保守サポートプランをご用意しています。",
  },
];

export default function ChatbotPage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== Hero ===== */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              AI Chatbot
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 54px)", color: "#0F172A" }}
            >
              AIチャットボット構築
            </h1>
            <p className="text-[17px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              GPT・RAGを活用した顧客対応・社内FAQ・採用問い合わせ・予約受付の自動化チャットボットを構築します。
            </p>
          </div>
        </section>

        {/* ===== Breadcrumb ===== */}
        <nav className="py-4" style={{ borderTop: "1px solid #F0EDE6", borderBottom: "1px solid #F0EDE6", background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <ol className="flex items-center gap-2 text-[12px]" style={{ color: "#9CA3AF" }}>
              <li><Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link></li>
              <li>/</li>
              <li><Link href="/ai" className="hover:underline" style={{ color: "#6B7280" }}>AI活用支援</Link></li>
              <li>/</li>
              <li style={{ color: "#0F172A" }}>AIチャットボット構築</li>
            </ol>
          </div>
        </nav>

        {/* ===== Hero Image ===== */}
        <div className="relative w-full overflow-hidden" style={{ height: "360px" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_20_52.png"
            alt="AIチャットボットのデジタルインターフェース・タイピング"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.3)" }} />
        </div>

        {/* ===== What is AI Chatbot ===== */}
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
                AIチャットボットとは
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                従来のチャットボットは、あらかじめ設定したシナリオ（選択肢・キーワード）に沿った回答しかできず、イレギュラーな質問への対応が難しいものでした。GPT（大規模言語モデル）を活用したAIチャットボットは、自然な文章での質問を理解し、文脈に合わせた柔軟な回答が可能です。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                さらにRAG（検索拡張生成）を組み合わせることで、自社固有の情報（商品情報・社内規定・FAQ・マニュアル）をリアルタイムで参照しながら回答するシステムを構築できます。GPTの汎用性と社内データの専門性を掛け合わせた、高精度な対話システムです。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                WebサイトへのBot設置・LINE連携・Slack連携など、すでに顧客や社員が使っているプラットフォームへの組み込みが可能です。24時間対応・多言語対応・大量の問い合わせへの同時対応など、人的対応では難しい課題を解決します。
              </p>
            </div>
          </div>
        </section>

        {/* ===== Scenes ===== */}
        <section className="py-24 md:py-32" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Use Cases
              </p>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                活用シーン
              </h2>
            </div>
            <div>
              {SCENES.map((item) => (
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

        {/* ===== 2-col DIGITAL_PHONE + text ===== */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative overflow-hidden" style={{ height: "300px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_18_03.png"
                  alt="AIチャットボット・スマートフォンとデジタルアイコン"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                  Deployment
                </p>
                <h2
                  className="font-black leading-tight tracking-tight mb-6"
                  style={{ fontSize: "clamp(20px, 2.5vw, 32px)", color: "#0F172A" }}
                >
                  複数チャネルへの展開
                </h2>
                <p className="text-[14px] leading-[1.9] mb-4" style={{ color: "#374151" }}>
                  WebサイトへのJavaScript埋め込みだけでなく、LINE公式アカウント・Slack・NotionなどへのBot連携も可能です。顧客・社員がすでに使っているプラットフォームに直接組み込むことで、利用率が高まります。
                </p>
                <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>
                  RAGによる自社データとの連携で、一般的なAIでは答えられない社内固有の質問にも正確に回答できます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <FaqSection items={FAQ_ITEMS} heading="AIチャットボット よくある質問" />

        {/* ===== Related ===== */}
        <RelatedPages
          links={[
            { href: "/ai", label: "AI活用支援", desc: "AI支援サービス一覧" },
            { href: "/ai/automation", label: "業務自動化", desc: "繰り返し業務の自動化" },
            { href: "/services/ai", label: "AI活用支援サービス概要", desc: "サービス詳細・料金" },
          ]}
        />

        {/* ===== CTA ===== */}
        <PageContactCTA
          heading="AIチャットボット構築のご相談"
          body="どんな用途でどんなチャットボットが必要か、現状の問い合わせ対応の課題をお聞かせください。要件に合ったシステム設計をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}

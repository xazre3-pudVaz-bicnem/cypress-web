import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "コンテンツカレンダー作成｜SNS投稿を継続するためのスケジュール管理",
  description: "SNS投稿を継続するためのコンテンツカレンダーの作り方。季節イベント・投稿カテゴリ・頻度・担当を事前に設計してSNS運用のネタ切れと投稿ムラを防ぎます。",
};

const faqItems = [
  { q: "コンテンツカレンダーはどのくらいの期間で作りますか？", a: "1か月単位で作成し、月末に翌月分を準備するサイクルが運用しやすいです。季節イベントなど2〜3か月先が決まっているものは先行して計画に入れます。" },
  { q: "投稿ネタが毎月思いつかない場合はどうすればいいですか？", a: "投稿カテゴリ（商品紹介・スタッフ紹介・お客様の声・季節情報・知識提供等）を先に決めておき、カテゴリローテーションで投稿を計画します。AIを使った投稿アイデア出しも活用できます。" },
  { q: "コンテンツカレンダーはどのツールで管理すればいいですか？", a: "Notionテーブル・Googleスプレッドシート・Trelloなどが使いやすいです。日付・投稿カテゴリ・写真ファイル・キャプション・ハッシュタグ・担当者・公開ステータスを管理できる形式が理想です。" },
  { q: "複数のSNSプラットフォームを同時に管理するには？", a: "コンテンツカレンダーにInstagram・Googleビジネスプロフィール・Xなど複数チャネルの列を追加して一元管理します。Buffer・Metricoolなどのソーシャルメディア管理ツールを活用すると効率化できます。" },
];

const relatedLinks = [
  { href: "/sns", label: "SNS集客とは", desc: "SNS集客の概要" },
  { href: "/sns/post-planning", label: "投稿企画", desc: "コンテンツ制作" },
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタ集客" },
  { href: "/ai/sns-automation", label: "SNS自動化", desc: "AIによる自動化" },
  { href: "/services/sns", label: "SNSサービス詳細", desc: "SNS運用サービス" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/sns">SNS集客</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              コンテンツカレンダー
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Content Calendar</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              コンテンツカレンダー｜SNS投稿を継続する仕組み
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              SNS集客で最も重要なのは「継続」です。ネタ切れ・投稿ムラを防ぐためのコンテンツカレンダーを作成し、戦略的に計画された投稿を継続できる仕組みを構築します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_10_29.png" alt="コンテンツカレンダー・SNS投稿管理" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.18)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Calendar Elements</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              コンテンツカレンダーの設計要素
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "投稿カテゴリの設計", b: "商品・サービス紹介・スタッフ紹介・お客様の声・季節情報・業界知識・舞台裏など、毎月バランスよく投稿できるカテゴリを設計します。カテゴリを決めることでネタ出しが格段に楽になります。" },
                { n: "02", t: "季節・イベントの先取り計画", b: "バレンタイン・母の日・お盆・ハロウィン・年末年始など2〜3か月先のイベントを事前にカレンダーに入れます。需要が高まる前から関連コンテンツを発信することで先手を打てます。" },
                { n: "03", t: "投稿頻度と担当の設定", b: "フィード週3〜5回・ストーリーズ毎日などの目標頻度を設定し、担当者・撮影スケジュール・承認フローを明確にします。無理のない頻度設定が継続の鍵です。" },
                { n: "04", t: "写真・素材の事前準備", b: "投稿に必要な写真・動画・デザイン素材を1〜2週間前に準備します。素材が手元にある状態でカレンダーを作ることで投稿直前の焦りを防げます。" },
                { n: "05", t: "AI活用によるキャプション量産", b: "ChatGPT・Claude等のAIを活用してキャプション案を素早く生成します。「○○の写真に合うInstagramキャプションを5案作成して」などのプロンプトで効率的にコンテンツを制作できます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#f8f6f2" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="コンテンツカレンダー作成のご相談" body="SNS投稿のコンテンツカレンダー作成・投稿企画・運用代行をご相談ください。継続できる仕組みを設計して、SNS集客を長期的な資産にします。" />
      </main>
      <Footer />
    </>
  );
}

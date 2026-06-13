import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SNS投稿自動化｜AI活用で継続的な情報発信",
  description: "AIを使ったSNS投稿の自動化・効率化。Instagram・X・Googleビジネスプロフィールへの投稿文生成・スケジュール管理でSNS運用を継続させる方法を解説。",
};

const faqItems = [
  { q: "SNS投稿を完全に自動化することはできますか？", a: "技術的には可能ですが、完全自動化はリスクが伴います。事実誤認・炎上リスク・ブランドトーンのずれなどが発生しやすいため、AIが下書きを生成→人間がチェック・投稿する「半自動化」が現実的かつ効果的です。" },
  { q: "SNS自動化に使えるツールは何がありますか？", a: "投稿スケジュール管理にはBuffer・Hootsuite・Later・Metricool、投稿文生成にはChatGPT・Claude、Instagram自動投稿にはMeta Business Suite（公式）が利用できます。" },
  { q: "GBP（Googleビジネスプロフィール）の投稿も自動化できますか？", a: "GBP投稿はGoogle公式APIを通じて自動投稿が可能です。ただし公式ツールでの直接自動投稿は制限があるため、APIを活用したカスタムシステムの構築が必要な場合があります。" },
  { q: "AIが生成したSNS投稿文はそのまま使えますか？", a: "下書きとして活用することを推奨します。ブランドのトーン・口調・絵文字の使い方・ハッシュタグの選定は人間がチェックします。繰り返し使うことでAIがブランドの書き方を学習し、精度が上がります。" },
  { q: "SNS投稿の頻度はどのくらいが理想ですか？", a: "Instagramは週3〜5回、X（旧Twitter）は毎日1〜3回、GBP投稿は週1〜2回が目安です。継続性が最重要のため、自動化でまず「途切れない体制」を作ることが先決です。" },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用支援とは", desc: "AI支援の概要" },
  { href: "/ai/blog-automation", label: "AIブログ自動化", desc: "ブログ記事の自動化" },
  { href: "/ai/workflow", label: "AI業務自動化", desc: "業務ワークフロー" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "SNS運用代行" },
  { href: "/meo/google-post", label: "Google投稿", desc: "GBP投稿運用" },
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
              <Link href="/ai">AI活用支援</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              SNS投稿自動化
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>AI — SNS Automation</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              SNS投稿自動化｜AIで継続的な情報発信
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              SNSは継続的な発信が最も重要ですが、毎回投稿文を考えるのは時間がかかります。AIを活用した投稿文生成と自動スケジューリングで、途切れない情報発信体制を作ります。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_03.png" alt="SNS投稿自動化" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Automatable Tasks</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              自動化できるSNS業務
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "Instagram投稿文・ハッシュタグの生成", b: "商品写真や施術写真にAIが説明文・キャプション・ハッシュタグを生成します。業種・ターゲット・投稿頻度などの情報を学習させることで、ブランドに合った文章を量産できます。" },
                { n: "02", t: "GBP（Googleビジネスプロフィール）への投稿", b: "最新情報・イベント・商品情報の投稿文をAIが生成し、スケジュール管理します。Googleが評価する「アクティブなビジネス」としての状態を維持できます。" },
                { n: "03", t: "X（旧Twitter）の定期投稿", b: "業界情報・ブログ更新告知・お客様の声などを定期投稿するスケジュールをAIと連携して管理します。Buffer等のツールで事前予約投稿が可能です。" },
                { n: "04", t: "投稿スケジュールの管理（Buffer等連携）", b: "Buffer・Later・Hootsuite等のスケジューリングツールと連携し、最適な投稿時間に自動で発信します。曜日・時間帯別のエンゲージメントデータに基づいた最適投稿時間を設定できます。" },
                { n: "05", t: "投稿実績のレポート自動集計", b: "各SNSのインサイト（リーチ数・エンゲージメント率・フォロワー増減）を週次・月次で自動集計し、レポート化します。効果的な投稿パターンの分析と改善に活用できます。" },
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
        <PageContactCTA heading="SNS自動化のご相談" body="AIを活用したSNS投稿文の生成・スケジュール管理・効果測定の仕組みを構築します。Instagram・GBP・Xの継続的な運用体制をお気軽にご相談ください。" />
      </main>
      <Footer />
    </>
  );
}

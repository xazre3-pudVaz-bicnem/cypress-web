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
  keywords: ["コンテンツカレンダー", "SNS投稿計画", "SNS運用", "投稿スケジュール", "SNS継続"],
  openGraph: {
    title: "コンテンツカレンダー作成｜SNS投稿を継続するためのスケジュール管理",
    description: "SNS投稿を継続するためのコンテンツカレンダーの作り方。季節イベント・投稿カテゴリ・頻度・担当を事前に設計してSNS運用のネタ切れと投稿ムラを防ぎます。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_18_57.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/sns/content-calendar" },
};

const faqItems = [
  { q: "コンテンツカレンダーはどのくらいの期間で作りますか？", a: "1か月単位で作成し、月末に翌月分を準備するサイクルが運用しやすいです。季節イベントなど2〜3か月先が決まっているものは先行して計画に入れます。" },
  { q: "投稿ネタが毎月思いつかない場合はどうすればいいですか？", a: "投稿カテゴリ（商品紹介・スタッフ紹介・お客様の声・季節情報・知識提供等）を先に決めておき、カテゴリローテーションで投稿を計画します。AIを使った投稿アイデア出しも活用できます。" },
  { q: "コンテンツカレンダーはどのツールで管理すればいいですか？", a: "Notionテーブル・Googleスプレッドシート・Trelloなどが使いやすいです。日付・投稿カテゴリ・写真ファイル・キャプション・ハッシュタグ・担当者・公開ステータスを管理できる形式が理想です。" },
  { q: "複数のSNSプラットフォームを同時に管理するには？", a: "コンテンツカレンダーにInstagram・Googleビジネスプロフィール・Xなど複数チャネルの列を追加して一元管理します。Buffer・Metricoolなどのソーシャルメディア管理ツールを活用すると効率化できます。" },
  { q: "カレンダーを作っても続かない場合のコツは？", a: "月初に15〜30分だけカレンダーを埋める「計画デー」を設けることが継続のコツです。完璧に埋めようとせず、空白があってもOKという意識で運用することが長続きの秘訣です。" },
];

const relatedLinks = [
  { href: "/sns", label: "SNS集客とは", desc: "SNS集客の概要" },
  { href: "/sns/post-planning", label: "投稿企画・運用設計", desc: "コンテンツ制作の基礎" },
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタ集客の実践" },
  { href: "/sns/hashtag", label: "ハッシュタグ戦略", desc: "効果的なタグ選定" },
  { href: "/sns/photo-direction", label: "写真ディレクション", desc: "SNS写真の品質向上" },
  { href: "/ai/sns-automation", label: "SNS自動化", desc: "AIによる自動化" },
  { href: "/sns/local-sns", label: "地域SNS集客", desc: "地元向けSNS戦略" },
  { href: "/services/sns", label: "SNSサービス詳細", desc: "SNS運用サービス一覧" },
];

const contentItems = [
  { title: "投稿カテゴリの設計", body: "商品・スタッフ・お客様の声・季節・知識提供など、ブランドに合った5〜7のカテゴリを先に決めます。カテゴリが決まれば「今日何を投稿しよう」という悩みがなくなります。" },
  { title: "月間スケジュールへの落とし込み", body: "月の始めに祝日・季節イベント・キャンペーン日程を書き込み、そこにカテゴリを当てはめていきます。週3〜5投稿を目標に、空白を埋める意識で計画します。" },
  { title: "素材・撮影スケジュールの管理", body: "投稿日から逆算して「いつ撮影するか」「いつキャプションを書くか」を決めます。前週までに素材を用意できる体制が、投稿クオリティを安定させます。" },
  { title: "AIを活用したネタ出し", body: "ChatGPTなどのAIツールに「業種・ターゲット・月のテーマ」を伝えるだけで投稿アイデアのリストを生成できます。AIのアイデアをベースに自社らしい投稿に仕上げる流れが効率的です。" },
  { title: "複数チャネルの一元管理", body: "Instagram・Googleビジネスプロフィール・X（旧Twitter）など複数のSNSを使う場合は、1つのカレンダーで一元管理します。Buffer・Metricoolなどのツールで予約投稿も活用できます。" },
  { title: "月末の振り返りと改善", body: "月末にインサイトデータを見て「エンゲージメントが高かった投稿タイプ」を確認します。翌月のカレンダーに好調カテゴリを増やし、PDCAを回すことで集客力が着実に上がります。" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "56px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", gap: "6px", alignItems: "center" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/sns" style={{ color: "#6B7280" }}>SNS集客</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>コンテンツカレンダー</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Content Calendar</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              コンテンツカレンダー｜SNS投稿を継続する仕組み
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              SNS集客で最も重要なのは「継続」です。ネタ切れ・投稿ムラを防ぐためのコンテンツカレンダーを作成し、戦略的に計画された投稿を継続できる仕組みを構築します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              投稿カテゴリ・撮影スケジュール・キャプション制作・予約投稿まで一括管理できるカレンダーを活用することで、月間の投稿計画を30分以内に立てることが可能になります。継続こそが最大の差別化戦略です。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_57.png" alt="SNSコンテンツカレンダー" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.65)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(18px,3vw,28px)", fontWeight: 700, letterSpacing: "0.05em", textAlign: "center" }}>
              計画があれば、SNSは怖くない。
            </p>
          </div>
        </div>

        {/* カレンダーなし運用のリスク */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Risks Without Planning</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              コンテンツカレンダーなし運用の4つのリスク
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "ネタ切れで投稿が止まる", b: "「今日何を投稿しよう」と毎回考えると、やがてアイデアが尽きて投稿が停止します。カテゴリとスケジュールを先に決めておくことで、ネタ切れは根本的に防げます。" },
                { t: "投稿頻度のムラが大きくなる", b: "計画がないと忙しい時期に投稿がゼロになり、暇な時期に連投するムラが生まれます。アルゴリズムは一定頻度の投稿を好み、ムラがあるアカウントはリーチが下がります。" },
                { t: "重要な季節・イベントを見逃す", b: "バレンタイン・お盆・年末年始などの商機になる時期をカレンダーなしだと直前まで気づかず、素材が間に合わないまま機会を逃します。事前計画が集客の機会を最大化します。" },
                { t: "複数担当者間での連携不足", b: "「誰がいつ何を投稿するか」が不明確なまま運用すると、投稿漏れ・重複・クオリティのばらつきが起きます。カレンダーによる一元管理が複数人運用の基本です。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textAlign: "center" }}>HOW IT WORKS</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, textAlign: "center", marginBottom: "48px" }}>
              コンテンツカレンダーの設計ステップ
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
              {contentItems.map((item, i) => (
                <div key={i} style={{ padding: "32px", background: "#f8f6f2", borderRadius: "4px", borderTop: "3px solid #c4b89a" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", letterSpacing: "0.2em", marginBottom: "10px" }}>STEP {String(i + 1).padStart(2, "0")}</p>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "17px", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>{item.title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.85", color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ランディングページ制作（LP）｜CV特化Webページ｜株式会社サイプレス",
  description: "問い合わせ・申し込み・購入に特化したランディングページ（LP）制作。ファーストビュー設計・信頼要素・FAQ・CTAで高いコンバージョン率を実現します。",
  keywords: ["ランディングページ制作", "LP制作", "CV率向上", "コンバージョン最適化", "Web制作"],
  openGraph: {
    title: "ランディングページ制作（LP）｜CV特化Webページ",
    description: "問い合わせ・申し込みに特化したLP制作。ファーストビュー・信頼要素・FAQ・CTA設計で高CV率を実現。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/landing-page" },
};

const faqItems = [
  { q: "ランディングページとコーポレートサイトの違いは？", a: "コーポレートサイトは会社・サービス全体を紹介する複数ページのサイトです。ランディングページは特定の1つのアクション（申し込み・購入・問い合わせ）に特化した1ページのサイトです。CV（コンバージョン）最大化が目的です。" },
  { q: "ランディングページのSEO効果はありますか？", a: "LPは単独ではSEO効果が出にくいです。広告（リスティング広告・SNS広告）のランディング先として使い、SEOはブログ・コーポレートサイトで対応するのが一般的な使い分けです。" },
  { q: "LP制作の費用相場はどのくらいですか？", a: "デザイン・文章作成・コーディング・スマートフォン対応を含む本格的なLPは30〜100万円程度が相場です。テンプレートを使ったシンプルなLPであれば10〜30万円程度から対応可能です。" },
  { q: "LPの制作期間はどのくらいかかりますか？", a: "ヒアリング・設計から公開まで、通常2〜4週間が目安です。修正対応・素材の準備状況によって前後します。" },
  { q: "A/Bテストはしてもらえますか？", a: "LPのA/Bテスト（2パターンのデザイン・文章を比較してCV率が高い方を採用する手法）に対応しています。Google Optimize（終了）の代替ツールとしてVWO・ABsmartlyなどを活用できます。" },
  { q: "既存LPのCV率改善もできますか？", a: "はい。現在のLPをヒートマップツールやGoogleアナリティクスで分析し、ファーストビュー・CTA・フォームの改善ポイントを特定します。制作から改善まで一貫して対応します。" },
  { q: "LPにSEOは必要ですか？", a: "広告のLPはSEOより広告品質スコアが重要です。ただしオーガニック集客もあわせて行う場合は、LPとは別にSEOコンテンツを用意することをおすすめします。" },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の概要" },
  { href: "/web-design/service-site", label: "サービスサイト制作", desc: "サービス紹介サイト" },
  { href: "/web-design/contact-form", label: "お問い合わせフォーム", desc: "フォーム最適化" },
  { href: "/web-design/mobile-friendly", label: "スマートフォン対応", desc: "モバイル対応" },
  { href: "/web-design/page-speed", label: "ページ速度改善", desc: "表示速度の最適化" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
  { href: "/web-design/nextjs", label: "Next.js制作", desc: "高速LP開発" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談はこちら" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", gap: "6px", alignItems: "center" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/web-design" style={{ color: "#6B7280" }}>ホームページ制作</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>ランディングページ制作</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Landing Page</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              ランディングページ制作｜CV最大化設計
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              ランディングページ（LP）は、1つのアクション（問い合わせ・申し込み・購入）に特化したWebページです。ファーストビューからCTAまで、ユーザーが迷わず行動できる導線設計で高いCV率を実現します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "12px", maxWidth: "640px" }}>
              コピーライティング・デザイン・フォーム設計・スマートフォン対応・A/Bテストまで一貫して担当します。「見栄えが良いだけ」ではなく「成果が出る」LPを制作します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_12_19.png" alt="ランディングページ制作" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                成果が出るLPには、設計の法則がある。<br />ファーストビューからCTAまで戦略的に設計します。
              </p>
            </div>
          </div>
        </section>

        {/* CVが取れないLPの共通パターン */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Common Mistakes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              CVが取れないLPの4つの共通パターン
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "ファーストビューで伝わらない", b: "ページを開いて3秒以内に「何のサービスか」「自分に関係あるか」「信頼できるか」が伝わらないと離脱します。キャッチコピーとビジュアルを最優先で最適化する必要があります。" },
                { t: "信頼要素が不足している", b: "「怪しい」「大丈夫かな」という不安を解消できていないLPはCVが伸びません。実績・お客様の声・会社情報・資格などの信頼要素を戦略的に配置します。" },
                { t: "CTAのタイミングが悪い", b: "申し込みボタンがページ最下部にしかないケースは損失が大きいです。ファーストビュー・中間・最下部の3か所にCTAを設置することでCV機会を最大化します。" },
                { t: "フォームが長すぎる", b: "必要な情報を収集しようとするあまり、フォームが10項目以上になっているケースは離脱率が急上昇します。後で電話確認できる情報はフォームから削除するのが原則です。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>LP Elements</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              CV率を高めるLPの必須要素
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "ファーストビューでの価値提案", b: "ページを開いて3秒以内に「何のページか」「自分に関係あるか」「信頼できるか」が伝わるファーストビューを設計します。キャッチコピー・ビジュアル・CTA（行動喚起）ボタンを最上部に配置します。" },
                { n: "02", t: "課題提起と共感", b: "ターゲットが抱える悩み・課題・不満を言語化して共感を生みます。「こういう困りごとはありませんか？」という問いかけでスクロールを続けてもらうための構成です。" },
                { n: "03", t: "サービス内容・特徴の明確な説明", b: "何ができるのか・他と何が違うのか・なぜ良いのかを明確に説明します。抽象的な説明ではなく、具体的な数字・事実・プロセスで伝えます。" },
                { n: "04", t: "信頼要素の組み込み", b: "実績数・導入事例・お客様の声・メディア掲載・資格・会社情報など、信頼性を高める要素を戦略的に配置します。「大丈夫かな？」という不安を解消します。" },
                { n: "05", t: "FAQ（よくある質問）で不安を解消", b: "申し込み前に生じる典型的な疑問・不安を事前に解消するFAQを設置します。「これって〇〇は対象外？」「料金はいくら？」などの質問に答えることでCTAへの障壁を下げます。" },
                { n: "06", t: "入力最小化のフォーム設計", b: "問い合わせフォームの入力項目は最小限にします。名前・メール・内容の3項目から始め、必要に応じて追加する方針で設計します。フォームが長いほど離脱率が上がります。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", minWidth: "28px", fontWeight: 700 }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#f8f6f2" heading="ランディングページについてよくある質問" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="ランディングページ制作のご相談" body="問い合わせ・申し込み・予約に特化したLPの制作をご相談ください。ヒアリング・設計・コピー・デザイン・コーディング・A/Bテストまで一貫して対応します。" />
      </main>
      <Footer />
    </>
  );
}

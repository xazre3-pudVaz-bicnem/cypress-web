import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Google Search Console活用｜SEOデータ分析と改善",
  description: "Google Search Consoleを使ったSEOデータの見方・活用方法を解説。検索パフォーマンス・インデックス状況・Core Web Vitalsの確認から改善アクションまで。",
};

const faqItems = [
  { q: "Google Search Consoleは無料で使えますか？", a: "はい、Google Search Consoleは完全無料です。Googleアカウントがあれば誰でも利用でき、サイト所有者確認を行うことでデータを確認できます。" },
  { q: "Search Consoleのデータはどのくらいの期間遡れますか？", a: "検索パフォーマンスデータは過去16ヶ月分、インデックスカバレッジはほぼリアルタイム、Core Web Vitalsは過去28日間のデータが確認できます。" },
  { q: "CTR（クリック率）が低い場合はどうすればいいですか？", a: "タイトルとメタディスクリプションの見直しが最初のアクションです。検索意図に沿った魅力的なタイトル・説明文に書き直すことでCTRを改善できます。また、リッチリザルト（FAQや星評価）の表示も効果的です。" },
  { q: "検索順位とSearch Consoleの「掲載順位」は一致しますか？", a: "Search Consoleの掲載順位はユーザー・地域・デバイスによって異なる検索結果の平均値です。実際に自分で検索した結果と異なることがありますが、傾向を把握する指標として有効です。" },
  { q: "サイトマップはSearch Consoleで送信すべきですか？", a: "はい、サイトマップをSearch Consoleに送信することでGooglebotにページの存在を効率よく伝えられます。特に新規ページを追加した際や大規模サイトでは必須の作業です。" },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO対策の基礎" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "技術的SEO" },
  { href: "/seo/seo-audit", label: "SEO監査", desc: "現状診断" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "キーワード選定" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細" },
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
              <Link href="/seo">SEO対策</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              Google Search Console活用
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>SEO Tool</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              Google Search Console活用｜SEOデータ分析
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              Google Search Consoleは、Googleが無料で提供するSEO分析の必須ツールです。検索パフォーマンス・インデックス状況・Core Web Vitalsなど、SEO改善に不可欠なデータを確認できます。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_19_44.png" alt="Google Search Console活用" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Key Metrics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              Search Consoleで確認できる主要データ
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "検索パフォーマンス（表示回数・クリック数・CTR・掲載順位）", b: "どのキーワードで何回表示され、何回クリックされたかを確認できます。CTR（クリック率）が低いキーワードはタイトル・メタ説明文の改善が有効です。" },
                { n: "02", t: "インデックスカバレッジ（インデックス済み/エラー/除外）", b: "サイトのどのページがGoogleにインデックスされているか、エラーがあるかを確認します。インデックスされていないページは検索結果に表示されません。" },
                { n: "03", t: "Core Web Vitals（LCP・CLS・INP）", b: "ページの読み込み速度・視覚的安定性・操作応答性のスコアを確認できます。「不良」と表示されたページは優先的に改善します。" },
                { n: "04", t: "モバイルユーザビリティ", b: "スマートフォンでの表示に問題があるページを特定します。文字サイズが小さい・タップターゲットが近すぎるなどの問題が報告されます。" },
                { n: "05", t: "リッチリザルト（構造化データ）", b: "FAQやレシピ、星評価などのリッチリザルトの実装状況と問題点を確認できます。正しく実装されると検索結果での視認性が上がります。" },
                { n: "06", t: "リンク（外部・内部）", b: "どのサイトから、どのページにリンクされているかを確認できます。内部リンクの状況も把握でき、サイト構造の改善に役立ちます。" },
                { n: "07", t: "サイトマップ送信・確認", b: "XMLサイトマップを送信し、Googleがどれだけのページを認識・インデックスしているかを確認します。新規ページ公開後は必ず確認します。" },
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

        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>PDCA Cycle</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
                  Search ConsoleによるSEO改善サイクル
                </h2>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "16px" }}>
                  Search ConsoleはSEO改善のPDCAサイクルを回すための中心ツールです。月に1度はデータを確認し、順位が下がったページ・CTRが低いキーワード・インデックスエラーを特定してアクションを取ります。
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                  特に重要なのは「表示回数は多いがクリック率が低い」キーワードの発見です。これらはタイトル・メタ説明文の改善だけで流入を大きく増やせる可能性があります。
                </p>
              </div>
              <div style={{ background: "#ffffff", padding: "32px", border: "1px solid #ece8e0" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "20px" }}>月次チェック項目</p>
                {["検索パフォーマンスの前月比確認", "CTRが低いキーワードのタイトル改善", "インデックスエラーの解消", "Core Web Vitalsスコアの確認", "新規ページのインデックス確認", "被リンク状況の確認"].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", padding: "10px 0", borderTop: i > 0 ? "1px solid #f0ede8" : "none", alignItems: "center" }}>
                    <span style={{ color: "#9ca3af", fontSize: "12px", minWidth: "20px" }}>✓</span>
                    <p style={{ fontSize: "14px", color: "#374151" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="Search Console活用のサポート" body="Google Search Consoleの設定から定期的なデータ分析・改善提案まで対応します。データの読み方がわからない、改善アクションが取れていないといったお悩みをお気軽にご相談ください。" />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import { processPages } from "@/lib/data/processPages";

export const metadata: Metadata = {
  title: "ご利用の流れ｜相談から契約・施策開始まで｜株式会社サイプレス",
  description:
    "サイプレスのサービス利用フロー。無料相談→ご提案→ご契約→施策開始→月次レポートまで、各ステップの詳細をご説明します。初めての方も安心してご相談いただけます。",
  keywords: ["Web集客 依頼方法", "MEO対策 申し込み", "サイプレス 利用方法", "SEO依頼 流れ"],
  openGraph: {
    title: "ご利用の流れ｜相談から契約・施策開始まで｜株式会社サイプレス",
    description: "無料相談からサービス開始まで、各ステップをわかりやすくご説明します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/process" },
};

const faqItems = [
  {
    q: "無料相談だけして終わることはできますか？",
    a: "はい、もちろんです。無料相談はご契約の義務を伴いません。現状診断・課題の整理・改善方向性のご説明を無料で行います。その後ご提案の内容をご検討いただき、必要と感じたタイミングでご依頼ください。",
  },
  {
    q: "相談から施策開始まで、どのくらいかかりますか？",
    a: "通常、無料相談→ご提案→ご契約→施策開始まで1〜2週間が目安です。MEO対策の基本設定など初期施策は契約後1週間以内に開始できます。ホームページ制作は設計・デザインに時間を要するため、1〜2ヶ月程度かかります。",
  },
  {
    q: "最低契約期間はありますか？",
    a: "継続型の運用サービス（MEO・SEO月次管理）は3ヶ月以上の契約をお願いしています。集客施策は短期では効果が安定しないため、最低3〜6ヶ月の継続を推奨しています。初回のご相談時に詳細をご説明します。",
  },
  {
    q: "遠方でもサービスを利用できますか？",
    a: "はい、全国対応しています。相談・提案・進捗報告はオンライン（Zoom・Google Meet）で実施可能です。東京都内・近郊の場合は対面でのご相談も対応しています。",
  },
  {
    q: "月次レポートはどのような内容ですか？",
    a: "Googleビジネスプロフィールのインサイト（検索表示回数・クリック数・電話タップ数）、SEO順位の推移、実施施策のまとめ、次月の改善計画を含むレポートをご提供します。数値の解説も含め、わかりやすい形式でお届けします。",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", gap: "6px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>ご利用の流れ</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Process</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              ご利用の流れ
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "12px" }}>
              無料相談からサービス開始・運用まで、各ステップの詳細をわかりやすくご説明します。
              初めてWeb集客の支援を依頼する方も、安心してご相談ください。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              各ステップの詳細・よくある質問・期間の目安を以下でご確認いただけます。
              不明な点があれば、無料相談でお気軽にお聞きください。
            </p>
          </div>
        </section>

        {/* Image band */}
        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月14日 21_09_09 (4).jpg"
            alt="サービス利用の流れ・打ち合わせの様子"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.5)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(18px,2.5vw,30px)", lineHeight: 1.5 }}>
                相談から施策開始まで、<br />最短1週間。スムーズに動き出す。
              </p>
            </div>
          </div>
        </section>

        {/* 全体フロー */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Overview</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              サービス利用の全体フロー
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "STEP 01", t: "無料相談（オンライン・対面）", b: "現在の集客状況・お悩み・目標をお聞きします。Googleビジネスプロフィールの状況やウェブサイトの現状を一緒に確認し、どのような施策が有効かを大まかにご説明します。費用の目安もこの段階でお伝えします。" },
                { n: "STEP 02", t: "現状診断・ご提案", b: "相談内容を元に、競合分析・キーワード設計・優先施策の整理を行います。具体的な施策内容・期間・費用を含んだご提案書をご用意します。通常3〜5営業日でご提案します。" },
                { n: "STEP 03", t: "ご契約・初期設定", b: "ご提案内容にご同意いただいた上でご契約を締結します。サービス開始に必要な情報（Googleビジネスプロフィールのオーナー権限・ウェブサイトのGA4設定など）をご案内します。" },
                { n: "STEP 04", t: "施策開始・定期報告", b: "MEO基本最適化・SEO施策・コンテンツ作成などを計画に沿って実施します。月次レポートで進捗・成果・次月の施策をご報告し、継続的な改善を行います。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "24px", padding: "24px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", fontWeight: 700, minWidth: "60px", letterSpacing: "0.1em", paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process pages grid */}
        <section style={{ background: "#f9f8f5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>All Steps</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              各ステップの詳細
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "#ece8e0" }}>
              {processPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/process/${page.slug}`}
                  style={{ background: "#ffffff", padding: "28px", textDecoration: "none", display: "block" }}
                >
                  <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", fontSize: "10px", color: "#9ca3af", marginBottom: "8px" }}>
                    {page.titleEn}
                  </p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", color: "#0d1b2a", fontWeight: 700, marginBottom: "10px", lineHeight: 1.4 }}>
                    {page.title}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>
                    {page.intro.slice(0, 60)}...
                  </p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "12px", fontSize: "12px", color: "#9ca3af" }}>
                    詳しく見る
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="ご利用の流れについてよくある質問" bgColor="#FFFFFF" />

        <RelatedPages
          links={[
            { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ集客のサービス詳細" },
            { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示のサービス詳細" },
            { href: "/services/web-design", label: "ホームページ制作", desc: "サイト制作サービスの詳細" },
            { href: "/cost", label: "費用・料金ガイド", desc: "各サービスの費用相場" },
            { href: "/support", label: "サポート・運用支援", desc: "継続的なサポートの詳細" },
            { href: "/guide", label: "Web集客ガイド", desc: "実践ガイド集" },
            { href: "/contact", label: "無料相談", desc: "まずはご相談ください" },
          ]}
        />

        <PageContactCTA
          heading="まずは無料相談から"
          body="どのステップからでもご相談を受け付けています。お気軽にお問い合わせください。"
        />
      </main>
      <Footer />
    </>
  );
}

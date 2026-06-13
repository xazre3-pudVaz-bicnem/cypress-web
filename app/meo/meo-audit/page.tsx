import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "MEO監査｜Googleマップ対策の現状診断",
  description: "GBP全項目・競合状況・順位・口コミを体系的に診断するMEO監査。Googleマップ集客の課題を特定し、優先度の高い改善アクションをご提案します。",
};

const faqItems = [
  { q: "MEO監査はどのくらいの頻度で行うべきですか？", a: "初回は現状把握として必ず実施し、その後は半年に1回程度の定期監査が推奨されます。競合が強い業種・エリアや、順位が急落した場合は即時監査を行います。" },
  { q: "MEO監査で何がわかりますか？", a: "GBP情報の完全性・写真の充実度・投稿頻度・口コミ数と評価・競合との差分・キーワードごとの順位・NAP統一状況などが明らかになります。改善すべき項目を優先順位付きで特定できます。" },
  { q: "MEO監査は自分でできますか？", a: "Googleビジネスプロフィールの管理画面や地図検索での確認など、基本的な項目は自分で確認できます。競合分析・順位調査・NAP統一確認など詳細な診断は専門ツールと知識が必要です。" },
  { q: "MEO監査の後、どのくらいで改善効果が出ますか？", a: "GBP情報の充実・写真追加・投稿開始などの基本改善は1〜3ヶ月で効果が出ることが多いです。口コミ増加による順位向上は継続的な取り組みが必要で、3〜6ヶ月が目安です。" },
  { q: "GBPのオーナー確認ができていない場合も監査できますか？", a: "オーナー確認なしでも地図上での表示状況や口コミ状況は外部から確認できます。ただし投稿・情報更新・インサイトデータの確認にはオーナー確認が必要です。" },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策とは", desc: "MEO対策の基礎" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "GBP設定の最適化" },
  { href: "/meo/map-ranking", label: "マップ上位表示", desc: "ローカルパック対策" },
  { href: "/meo/nap", label: "NAP統一", desc: "情報の一貫性" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細" },
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
              <Link href="/meo">MEO対策</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              MEO監査
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>MEO Audit</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              MEO監査｜Googleマップ対策の現状診断
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              MEO対策を始める前に、現状のGoogleビジネスプロフィール・競合状況・検索順位を体系的に診断します。問題点を把握してから施策に着手することで、効果的な改善が可能になります。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_14_54.png" alt="MEO監査・現状診断" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Audit Items</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              MEO監査の対象項目
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "GBP基本情報の完全性", b: "店舗名・住所・電話番号・営業時間・カテゴリ・ウェブサイトURL・説明文がすべて正確に記載されているかを確認します。空欄があるほどGoogleの評価は下がります。" },
                { n: "02", t: "GBP写真の数・品質・更新状況", b: "外観・内装・商品・スタッフ・ロゴ・カバーの各カテゴリに高品質な写真が揃っているか、最近更新されているかを確認します。写真が少ないと競合に比べて不利になります。" },
                { n: "03", t: "投稿（最新情報）の更新頻度", b: "Google投稿の更新頻度を確認します。週1回以上の投稿があるかどうかは、Googleがそのビジネスをアクティブと判断する重要な指標です。" },
                { n: "04", t: "口コミ数・平均評価・返信状況", b: "口コミの総数・平均評価（星）・最新口コミの日付・オーナー返信率を確認します。返信していない口コミが多い場合は改善が必要です。" },
                { n: "05", t: "競合のMEO状況との差分", b: "同じエリア・業種の競合がGBPをどう設定しているか比較します。写真数・口コミ数・投稿頻度・カテゴリ設定で自社が劣っている項目を特定します。" },
                { n: "06", t: "キーワードごとの順位確認", b: "「[業種]」「[地域名]+[業種]」「[サービス名]+[地域名]」など主要キーワードでのローカルパック（地図3枠）表示順位を確認します。" },
                { n: "07", t: "NAP情報の統一状況", b: "GBP・自社サイト・各SNS・外部サービスで店舗名・住所・電話番号が一致しているかを確認します。不一致はGoogleの信頼性評価を下げます。" },
                { n: "08", t: "ウェブサイトとの連携状況", b: "GBPのウェブサイトURLが正しく設定されているか、ウェブサイト側にLocalBusinessスキーマが実装されているかを確認します。" },
                { n: "09", t: "Q&A・サービス・商品情報の充実度", b: "GBPのQ&A機能・サービス一覧・商品情報が設定されているかを確認します。これらを充実させることで検索結果でのリッチな表示が可能になります。" },
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
        <PageContactCTA heading="MEO監査のご依頼" body="現在のGoogleビジネスプロフィールと競合状況を診断し、改善すべき項目を優先順位付きでご報告します。Googleマップでの集客を改善したい方はお気軽にご相談ください。" />
      </main>
      <Footer />
    </>
  );
}

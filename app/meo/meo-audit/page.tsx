import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "MEO診断・監査サービス｜Googleマップ対策の現状診断",
  description: "GBP全項目・競合状況・順位・口コミを体系的に診断するMEO監査。Googleマップ集客の課題を特定し、優先度の高い改善アクションをご提案します。",
  keywords: ["MEO診断", "MEO監査", "GBP 診断", "Googleマップ 現状分析"],
  openGraph: {
    title: "MEO診断・監査サービス｜Googleマップ対策の現状診断",
    description: "GBP全項目・競合状況・順位・口コミを体系的に診断するMEO監査。Googleマップ集客の課題を特定し、優先度の高い改善アクションをご提案します。",
    images: [{ url: "/ChatGPT Image 2026年6月14日 21_08_58 (6).png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/meo-audit" },
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
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "GBP設定の最適化" },
  { href: "/meo/map-ranking", label: "マップ上位表示", desc: "ローカルパック対策" },
  { href: "/meo/review-management", label: "口コミ対策", desc: "口コミ獲得・返信" },
  { href: "/meo/photo-posting", label: "写真投稿対策", desc: "GBP写真の最適化" },
  { href: "/meo/local-keyword", label: "ローカルキーワード", desc: "地域キーワード対策" },
  { href: "/contact", label: "お問い合わせ", desc: "無料相談・診断依頼" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#9CA3AF" }}>ホーム</Link>
              <span style={{ margin: "0 8px", color: "#9CA3AF" }}>/</span>
              <Link href="/meo" style={{ color: "#9CA3AF" }}>MEO対策</Link>
              <span style={{ margin: "0 8px", color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#374151" }}>MEO診断・監査</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>MEO Audit</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              MEO診断・監査｜Googleマップ対策の現状診断
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              MEO対策を始める前に、現状のGoogleビジネスプロフィール・競合状況・検索順位を体系的に診断します。問題点を把握してから施策に着手することで、効果的な改善が可能になります。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              「なぜ順位が上がらないのかわからない」「競合と何が違うのか見えない」——そうした疑問に対し、GBP全項目・写真・口コミ・投稿・競合比較・NAP整合性を網羅した診断レポートで、優先度の高い改善アクションを明確にします。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_08_58 (6).png" alt="MEO診断・現状診断サービス" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.55)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(16px,2.5vw,24px)", letterSpacing: "0.05em", textAlign: "center" }}>
              課題を見える化し、最短で改善へ
            </p>
          </div>
        </section>

        {/* 診断なし施策のリスク */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Without Audit</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              MEO診断なしで施策を打つと起きる4つのムダ
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "効かない施策に時間と費用を使う", b: "現状把握なしに「口コミを増やせばいい」「写真を増やせばいい」という思い込みで動いても、根本原因が別の場所にある場合は効果がありません。診断で優先課題を特定することが最初のステップです。" },
                { t: "競合に勝てる領域が見えない", b: "自社GBPの弱点と競合の強みを比較しなければ、どこで勝負すべきかがわかりません。診断では競合と自社の比較を行い、差別化の余地がある施策を特定します。" },
                { t: "改善の優先順位がわからない", b: "MEO対策には多くの施策がありますが、すべてを同時に対応することはできません。インパクトが大きく取り組みやすい施策から優先して実施するための優先順位付けに診断が必要です。" },
                { t: "成果が測れず改善サイクルが回らない", b: "現状数値（インプレッション・クリック・経路案内リクエスト数）を把握していないと施策の効果も測れません。診断で現在値を計測することがPDCAの出発点です。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Audit Items</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              MEO診断の対象項目
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
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9CA3AF", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
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
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Why It Matters</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              診断から始めることが重要な理由
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "原因不明のまま施策を打っても効果が出ない", b: "口コミを増やしても順位が上がらない場合、NAP不統一・カテゴリ誤設定などの根本問題が残っている可能性があります。診断で根本原因を特定してから施策を実施することが効果的です。" },
                { n: "02", t: "競合が何をしているか把握できる", b: "自社だけを見ていても改善の方向性は見えません。競合の写真数・口コミ数・投稿頻度を把握することで、最短で追い越すための優先施策が明確になります。" },
                { n: "03", t: "限られたリソースを集中投下できる", b: "MEO対策は多岐にわたります。診断によって最も効果が出る項目に絞って対応することで、少ない工数で最大の改善効果が得られます。" },
                { n: "04", t: "改善前後の比較が明確になる", b: "診断時点のデータを記録することで、施策後の改善度を数値で確認できます。順位・口コミ数・インサイト数値の変化を追跡し、PDCAを回せます。" },
                { n: "05", t: "専門知識なしでは見落とすポイントがある", b: "GBPの属性設定ミス・カテゴリの過不足・NAP不一致・スパム口コミの未報告など、専門家でなければ気づきにくい問題が潜んでいるケースが多くあります。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9CA3AF", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="MEO診断のご依頼" body="現在のGoogleビジネスプロフィールと競合状況を診断し、改善すべき項目を優先順位付きでご報告します。Googleマップでの集客を改善したい方はお気軽にご相談ください。" />
      </main>
      <Footer />
    </>
  );
}

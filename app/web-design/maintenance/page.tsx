import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ホームページ保守・メンテナンス｜公開後の継続支援",
  description: "ホームページ公開後の保守・メンテナンスサービス。CMS更新・セキュリティ対策・バックアップ・コンテンツ更新・SEOモニタリングで継続的なサイト運用をサポート。",
};

const faqItems = [
  { q: "保守・メンテナンスの月額費用はどのくらいですか？", a: "内容によりますが、基本的なセキュリティ監視・バックアップ・CMS更新で月額1〜3万円程度が目安です。コンテンツ更新・SEOレポートを含む場合は3〜8万円程度になります。" },
  { q: "保守契約なしで放置するとどうなりますか？", a: "WordPressプラグインの脆弱性放置によるハッキングリスク、バックアップなしでのデータ消失リスク、古い情報が表示されることによるユーザー信頼低下などが発生する可能性があります。" },
  { q: "コンテンツの更新（ブログ・お知らせ）も依頼できますか？", a: "はい。月次のブログ記事作成・お知らせ更新・スタッフ紹介の追加などのコンテンツ更新も対応しています。AIを活用して効率的に制作します。" },
  { q: "サイトがハッキングされた場合も対応してもらえますか？", a: "保守契約の内容によります。マルウェア除去・脆弱性対応・バックアップからの復旧を含む緊急対応オプションも提供しています。" },
  { q: "Next.jsで作ったサイトの保守も対応できますか？", a: "はい。Next.js・Vercel構成のサイトの保守に対応しています。依存パッケージの更新・セキュリティ脆弱性の対応・コンテンツ更新をサポートします。" },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の概要" },
  { href: "/web-design/wordpress", label: "WordPress制作", desc: "WordPress制作" },
  { href: "/web-design/nextjs", label: "Next.js制作", desc: "Next.js制作" },
  { href: "/services/maintenance", label: "保守サービス詳細", desc: "保守プラン" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "制作サービス" },
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
              <Link href="/web-design">ホームページ制作</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              保守・メンテナンス
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Web Maintenance</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              ホームページ保守・メンテナンス
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              Webサイトは公開がゴールではありません。継続的なセキュリティ対策・コンテンツ更新・SEOモニタリングにより、サイトの価値を維持・向上させます。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_10_29.png" alt="ホームページ保守・メンテナンス" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.18)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Maintenance Items</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              保守・メンテナンスの内容
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "CMS・プラグインのアップデート", b: "WordPressコア・テーマ・プラグインを定期的に最新バージョンに更新します。古いバージョンはセキュリティ脆弱性の原因となります。更新前のテスト環境での確認も実施します。" },
                { n: "02", t: "セキュリティ監視・不正アクセス対策", b: "マルウェアスキャン・不正ログイン試行の監視・ファイアウォール設定を維持します。問題を早期発見して被害を最小化します。" },
                { n: "03", t: "定期バックアップの取得・保管", b: "サイトデータ・データベースの定期バックアップを取得し、クラウドストレージに保管します。不測の事態でもバックアップから迅速に復旧できます。" },
                { n: "04", t: "コンテンツ更新・ブログ投稿支援", b: "お知らせ更新・ブログ記事投稿・スタッフ情報の変更など、コンテンツの更新をサポートします。AIを活用した記事作成も対応しています。" },
                { n: "05", t: "アクセス解析・SEO状況のモニタリング", b: "Google AnalyticsとSearch Consoleのデータを月次でレポートします。アクセス数の変化・順位の変動・改善提案を定期的にご報告します。" },
                { n: "06", t: "表示崩れ・不具合対応", b: "ブラウザ更新・スマートフォンOSの更新による表示崩れ・リンク切れ・フォームエラーなどの不具合を発見・修正します。" },
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
        <PageContactCTA heading="保守・メンテナンスのご相談" body="現在のサイトの保守状況を確認し、最適な保守プランをご提案します。制作後の保守から既存サイトの引き継ぎ保守まで対応しています。" />
      </main>
      <Footer />
    </>
  );
}

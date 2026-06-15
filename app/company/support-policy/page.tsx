import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "サポート方針｜株式会社サイプレスの支援スタンス",
  description:
    "株式会社サイプレスのサポート方針。制作後の継続支援・月次レポート・改善提案・透明性のある進捗共有で、Web集客の成果を長期的に最大化する支援スタンスを詳しく解説。",
  openGraph: {
    title: "サポート方針｜株式会社サイプレスの支援スタンス",
    description: "「制作して終わり」ではない長期伴走型支援。月次レポート・継続改善提案・24時間以内レスポンス。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/company/support-policy" },
};

const faqItems = [
  {
    q: "サポートはどのくらいの頻度で連絡をもらえますか？",
    a: "月次レポートを毎月お送りします。緊急の相談はメール・LINEでいつでも受け付けており、原則24時間以内（土日は翌営業日）にご返信します。月1回の定例MTG（Zoom）も設定可能です。",
  },
  {
    q: "施策を変更したい・止めたい場合はどうなりますか？",
    a: "月次での契約更新を基本としており、サービス内容の変更・縮小・停止はご相談のうえ柔軟に対応します。長期縛りなしで、お客様のビジネス状況の変化に合わせて調整します。",
  },
  {
    q: "担当者が変わることはありますか？",
    a: "担当者が変更になる場合は事前にご連絡し、引き継ぎを徹底します。また、担当者変更後も対応品質が落ちないよう、施策の記録・レポート・会議メモをすべて文書化して管理しています。",
  },
  {
    q: "効果が出ない場合はどう対応してもらえますか？",
    a: "効果が出ていない場合は月次レポートの段階で現状を共有し、原因分析と改善施策をご提案します。「成果が出るまで諦めない」姿勢で取り組みますが、具体的な成果を保証するものではありません。長期的な視点での取り組みをご理解いただいています。",
  },
];

const relatedLinks = [
  { href: "/company", label: "会社概要", desc: "サイプレス会社情報" },
  { href: "/company/value", label: "企業理念・バリュー", desc: "大切にしていること" },
  { href: "/company/message", label: "代表メッセージ", desc: "代表・織田春樹より" },
  { href: "/process", label: "ご利用の流れ", desc: "相談から開始までのステップ" },
  { href: "/services", label: "サービス一覧", desc: "提供サービス" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談はこちら" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", gap: "6px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/company" style={{ color: "#6B7280" }}>会社情報</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>サポート方針</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Support Policy</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              サポート方針
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "12px" }}>
              株式会社サイプレスは「制作して終わり」「施策して終わり」ではなく、長期的な成果を生み出し続けるパートナーとしての関係を大切にしています。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              月次レポートによる進捗の透明な共有・継続的な改善提案・迅速なレスポンスを通じて、Web集客の成果を積み上げ続けます。
            </p>
          </div>
        </section>

        {/* サポートの考え方 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Our Policy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              サポートの考え方
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "成果が出るまで伴走する", b: "Web集客は短期間で劇的に変わるものではありません。SEO効果の発現には3〜6ヶ月、定着には1年以上かかることがあります。成果が出るまで戦略を調整しながら伴走します。施策の効果をデータで継続的に確認し、改善を繰り返すことで成果を積み上げます。" },
                { n: "02", t: "月次レポートで進捗を透明に共有", b: "Google Search Console・Google Analytics・GBPインサイトのデータを月次でレポートします。何が良くなっているか・何を改善すべきかを数字で明確に共有します。「何をやっているかわからない」状態は作りません。" },
                { n: "03", t: "わかりやすい説明で自立を支援", b: "専門用語を使わず、施策の目的・方法・期待効果をわかりやすく説明します。お客様が自分でも理解して判断できる状態を作ることで、長期的な自立を支援します。担当者が変わっても自社でWebマーケティングの判断ができる力をつける支援を目指します。" },
                { n: "04", t: "迅速なレスポンスと柔軟な対応", b: "ご連絡には原則24時間以内に返信します（土日は翌営業日）。急なご相談・突発的な変更にも柔軟に対応します。「気軽に相談できる」関係を大切にしています。LINEやメールでの気軽な相談も歓迎です。" },
                { n: "05", t: "継続的な改善提案", b: "毎月の報告に加え、Googleのアルゴリズム変更・新しい集客手法・競合動向など、お客様のビジネスに関連する最新情報をプロアクティブにお伝えします。「指示を待つ」だけでなく、先を見越した提案を行います。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "24px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "18px", fontWeight: 700, minWidth: "32px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 月次レポートの内容 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Monthly Report</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              月次レポートに含まれる内容
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "検索・流入データ", b: "Google Search ConsoleとAnalyticsから、対策キーワードの順位変動・セッション数・問い合わせ数・直帰率を確認します。" },
                { t: "MEOインサイトデータ", b: "Googleビジネスプロフィールの検索表示回数・電話クリック・経路クリック・写真閲覧数の推移を報告します。" },
                { t: "口コミ・評価状況", b: "口コミの件数・評価スコアの推移を報告。獲得した口コミへの返信内容と、次月の口コミ獲得施策もご提案します。" },
                { t: "翌月の施策計画", b: "当月の結果を踏まえた翌月の優先施策・改善ポイント・コンテンツ更新計画を整理してお伝えします。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サポートしないこと */}
        <section style={{ background: "#f9f8f5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>What We Don't Do</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "32px" }}>
              私たちがしないこと
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "28px" }}>
                誠実な支援のために、以下は行いません。
              </p>
              {[
                { x: "成果保証・誇大表現", desc: "「必ず上位表示」「○%増加保証」などの成果保証はしません。SEO・MEOは検索エンジンのアルゴリズムに依存するため、具体的な成果を保証することは誠実ではありません。" },
                { x: "不要なサービスの追加提案", desc: "お客様のビジネス目標に必要でないサービスを追加提案したり、施策を肥大化させることはしません。費用対効果の高い施策を優先します。" },
                { x: "施策内容の不透明化", desc: "「何をしているかわからない」状態でサービスを継続することは行いません。月次レポートで実施内容を明確に報告します。" },
                { x: "長期縛りによる解約阻止", desc: "長期契約による解約の制限はしません。お客様が「続けたい」と思えるサービスを提供することが私たちの責任です。" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", padding: "20px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ width: "24px", height: "24px", background: "#ef4444", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontSize: "13px", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>✕</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.x}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="サポート方針についてよくある質問" bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="サポートについてのご相談"
          body="Web集客のサポート内容・料金・対応範囲についてお気軽にご相談ください。まずはオンラインでの初回相談（無料）からお気軽にどうぞ。"
        />
      </main>
      <Footer />
    </>
  );
}

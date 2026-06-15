import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "募集要項｜株式会社サイプレス採用情報",
  description: "株式会社サイプレスの募集要項。Webマーケター・Web制作・コンテンツライター。リモートワーク・フルフレックス制度。未経験可・成長意欲重視の採用。",
};

const relatedLinks = [
  { href: "/recruit", label: "採用情報トップ", desc: "採用ページ" },
  { href: "/recruit/message", label: "代表メッセージ", desc: "代表からのメッセージ" },
  { href: "/recruit/remote-work", label: "リモートワーク制度", desc: "働き方の詳細" },
  { href: "/recruit/entry", label: "応募エントリー", desc: "エントリーはこちら" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/recruit">採用情報</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              募集要項
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Job Description</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              募集要項
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              株式会社サイプレスでは、Web集客・コンテンツ制作・Web開発に関わるメンバーを募集しています。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  role: "Webマーケター（SEO・MEO・AIO）",
                  items: [
                    { label: "仕事内容", val: "クライアントのSEO対策・MEO対策・AIO対策の実施。キーワード調査・コンテンツ企画・Googleビジネスプロフィール最適化・レポート作成" },
                    { label: "必須スキル", val: "基本的なPCスキル・コミュニケーション能力・継続的な学習意欲" },
                    { label: "歓迎スキル", val: "SEO・MEOの実務経験・Google Analytics / Search Console の使用経験・AIツール（ChatGPT等）の活用経験" },
                    { label: "雇用形態", val: "正社員 / 業務委託（相談可）" },
                    { label: "給与", val: "月給20万円〜（経験・スキルにより応相談）" },
                    { label: "勤務地", val: "リモートワーク（フルリモート可）/ 葛飾区オフィス" },
                  ]
                },
                {
                  role: "コンテンツライター（SEO記事・Web制作）",
                  items: [
                    { label: "仕事内容", val: "SEOを意識したブログ・コラム記事の執筆・編集。サービスページ・LP等のWebコピーライティング" },
                    { label: "必須スキル", val: "日本語の文章作成能力・リサーチ力・AIツールの基本操作" },
                    { label: "歓迎スキル", val: "ライティング実務経験・SEOの基礎知識・特定業界の専門知識" },
                    { label: "雇用形態", val: "業務委託（記事単価制）" },
                    { label: "報酬", val: "記事単価2,000〜10,000円（文字数・難易度により） " },
                    { label: "勤務地", val: "フルリモート（場所不問）" },
                  ]
                },
              ].map((job, ji) => (
                <div key={ji} style={{ marginBottom: "64px" }}>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "18px", color: "#0d1b2a", fontWeight: 700, marginBottom: "24px", paddingBottom: "12px", borderBottom: "2px solid #0d1b2a" }}>
                    {job.role}
                  </h2>
                  <table style={{ width: "100%", fontSize: "14px", borderCollapse: "collapse" }}>
                    <tbody>
                      {job.items.map((item, ii) => (
                        <tr key={ii} style={{ borderTop: "1px solid #ece8e0" }}>
                          <td style={{ color: "#9ca3af", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", whiteSpace: "nowrap", verticalAlign: "top", width: "120px" }}>{item.label}</td>
                          <td style={{ color: "#374151", paddingTop: "12px", paddingBottom: "12px", lineHeight: "1.8" }}>{item.val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}

              <div>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "18px", color: "#0d1b2a", fontWeight: 700, marginBottom: "24px", paddingBottom: "12px", borderBottom: "2px solid #0d1b2a" }}>
                  共通福利厚生・環境
                </h2>
                <table style={{ width: "100%", fontSize: "14px", borderCollapse: "collapse" }}>
                  <tbody>
                    {[
                      { label: "勤務時間", val: "フルフレックス制（コアタイムなし）" },
                      { label: "リモート", val: "フルリモート可（週1回オンライン朝礼のみ）" },
                      { label: "有給休暇", val: "法定通り（入社6か月後から10日〜）" },
                      { label: "書籍・学習費", val: "業務関連の書籍・オンライン講座費用を会社負担" },
                      { label: "AIツール費用", val: "ChatGPT Plus・Claude Pro等のAIツール利用費を支給" },
                    ].map((item, ii) => (
                      <tr key={ii} style={{ borderTop: "1px solid #ece8e0" }}>
                        <td style={{ color: "#9ca3af", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", whiteSpace: "nowrap", verticalAlign: "top", width: "120px" }}>{item.label}</td>
                        <td style={{ color: "#374151", paddingTop: "12px", paddingBottom: "12px", lineHeight: "1.8" }}>{item.val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="採用エントリーはこちら" body="ご質問・エントリーはお問い合わせフォームから「採用エントリー」としてお送りください。まずはカジュアルなオンライン面談から始めましょう。" />
      </main>
      <Footer />
    </>
  );
}

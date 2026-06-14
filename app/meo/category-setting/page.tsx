import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Googleビジネスプロフィール カテゴリ設定｜MEO対策｜株式会社サイプレス",
  description:
    "GBPカテゴリ設定はMEO順位を左右する最重要要素。プライマリカテゴリとセカンダリカテゴリの選定方法、競合分析を活用した最適化手順、業種別カテゴリ例を詳しく解説。正しいカテゴリ設定でGoogleマップ上位表示を実現。",
  keywords: ["GBPカテゴリ設定", "Googleビジネスプロフィールカテゴリ", "MEOカテゴリ", "プライマリカテゴリ", "セカンダリカテゴリ", "MEO対策カテゴリ"],
  openGraph: {
    title: "Googleビジネスプロフィール カテゴリ設定｜MEO対策｜株式会社サイプレス",
    description: "MEO順位を決定するカテゴリ設定の正しい選び方と競合分析手法を解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/category-setting" },
};

const categoryPoints = [
  {
    num: "01",
    title: "メインサービスを最も正確に表すプライマリカテゴリを選ぶ",
    body: "プライマリカテゴリはMEO順位に最も直接的に影響します。「なんとなく合いそう」ではなく、自社のメインサービスを最も的確に説明するカテゴリを選ぶことが原則です。例えば「食料品店」ではなく「和食レストラン」、「店舗」ではなく「歯科医院」のように具体的なカテゴリを選ぶことで、ターゲット検索クエリとのマッチング精度が上がります。",
  },
  {
    num: "02",
    title: "副カテゴリで対応範囲を補完する",
    body: "セカンダリカテゴリ（副カテゴリ）は最大9つまで設定でき、プライマリカテゴリでカバーできない関連サービスを補完します。美容室であれば「ヘアサロン」をプライマリとして、「ネイルサロン」「まつげエクステサロン」「リラクゼーションサロン」を副カテゴリに追加することで、複数の検索クエリへの対応が可能になります。ただし、実際に提供していないサービスのカテゴリを設定することはGoogleのポリシー違反です。",
  },
  {
    num: "03",
    title: "競合が設定しているカテゴリを参考にする",
    body: "ターゲットとする検索キーワードでGoogleマップを検索し、上位表示されている競合ビジネスのカテゴリ設定を確認します（GBPの詳細ページで「カテゴリ」として表示されます）。競合が使用しているカテゴリの組み合わせは、そのエリア・業種で効果的なカテゴリの参考になります。上位3社のカテゴリ設定を分析し、自社に不足しているカテゴリを特定することが実践的なアプローチです。",
  },
  {
    num: "04",
    title: "過剰なカテゴリ設定は避ける",
    body: "関係性の薄いカテゴリを多数設定することは、Googleがビジネスの専門性を判断しにくくなり、かえって順位に悪影響を与える可能性があります。実際に提供しているサービスに直結するカテゴリに絞り、ビジネスの専門性・一貫性を明確に示すことが重要です。カテゴリ設定は「多ければ良い」ではなく「正確で関連性が高い」ことを優先してください。",
  },
  {
    num: "05",
    title: "新しいカテゴリが追加されたら確認・更新する",
    body: "Googleは定期的に新しいカテゴリを追加・変更しています。例えば近年では「オンライン診療」「テイクアウト専門店」「デリバリー専門店」などの新カテゴリが追加されています。半年に1度はカテゴリリストを確認し、自社のサービスにより適切なカテゴリが追加されていないかチェックすることを推奨しています。業界動向に合わせたカテゴリ更新が競合優位につながります。",
  },
];

const faqItems = [
  {
    q: "カテゴリ設定を変更すると順位に影響しますか？",
    a: "はい、カテゴリ設定の変更はMEO順位に直接影響します。特にプライマリカテゴリの変更は、そのカテゴリに関連する検索クエリでの表示頻度に大きく影響します。変更後は通常1〜2週間以内に順位変動が現れます。変更前後の順位を記録し、効果を測定することを推奨しています。",
  },
  {
    q: "カテゴリ設定は何個が理想ですか？",
    a: "プライマリカテゴリ1つと、実際のサービスに対応する副カテゴリ3〜5個が多くの業種での目安です。カテゴリが多いほど良いわけではなく、実際に提供しているサービスに対応したカテゴリを正確に設定することが重要です。9個すべて埋める必要はありません。",
  },
  {
    q: "日本語と英語、どちらのカテゴリを選べばいいですか？",
    a: "Googleが提供するカテゴリは言語設定に依存しますが、日本語設定のGBPでは日本語のカテゴリ名が表示されます。カテゴリはGoogleが管理するリストから選ぶ形式で、自由入力はできません。日本語のカテゴリ検索で最も適切なものを選択してください。",
  },
  {
    q: "カテゴリが見つからない場合はどうすれば良いですか？",
    a: "完全に一致するカテゴリが存在しない場合は、最も近い上位概念のカテゴリを選択します。例えば「産業廃棄物処理業」という具体的なカテゴリがなければ「廃棄物管理サービス」を選択します。Googleは定期的にカテゴリを追加しているため、半年ごとに再確認することも重要です。",
  },
  {
    q: "競合がカテゴリを不正に設定しているようです。どうすればいいですか？",
    a: "実際に提供していないサービスのカテゴリを設定することはGoogleのポリシー違反です。Googleマップ上の「情報の修正を提案」から報告することが可能です。ただし、Googleによる対応には時間がかかることもあります。自社の正確なカテゴリ設定と口コミ獲得・情報充実を優先することが長期的な対策になります。",
  },
];

export default function CategorySettingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/meo" className="hover:underline" style={{ color: "#6B7280" }}>MEO対策</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>カテゴリ設定</span>
            </nav>
            <p
              className="text-[11px] font-semibold uppercase mb-5"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#6B7280" }}
            >
              MEO Knowledge
            </p>
            <h1
              className="text-[40px] md:text-[52px] font-black leading-tight tracking-tight mb-6"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              Googleビジネスプロフィール<br />カテゴリ設定
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              カテゴリ設定はGoogleが検索クエリとビジネスをマッチングさせる際の
              最重要要素のひとつです。プライマリカテゴリと副カテゴリを正確に選定することで、
              ターゲット検索での表示頻度が大幅に向上します。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_12_19.png"
            alt="ミーティングとタブレット・GBPカテゴリ設定MEO対策"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.18)" }} />
        </section>

        {/* カテゴリ設定がMEOに与える影響 */}
        <section className="py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p
              className="text-[11px] font-semibold uppercase mb-5"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#6B7280" }}
            >
              Impact on MEO
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              カテゴリ設定がMEOに与える影響
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                カテゴリはGoogleが「このビジネスは何をしている会社なのか」を理解するための
                最も直接的なシグナルです。検索クエリとカテゴリのマッチングは、ローカル検索順位の
                「関連性（Relevance）」評価の核心部分を占めています。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                例えば「渋谷 美容室」で検索したユーザーには、プライマリカテゴリに「美容室/ヘアサロン」
                が設定されたGBPが優先的に表示されます。カテゴリが曖昧・不正確な場合、
                ターゲット検索でのインプレッション自体が減少します。
                これはどれだけ口コミや写真を充実させても補えない根本的な問題です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                業種によっては、プライマリカテゴリの選択によって「予約ボタン」「メニュー表示」
                「商品表示」など特定のGBP機能が有効化・無効化されることもあります。
                適切なカテゴリ設定は機能の解放にも関わるため、初期設定段階で慎重に選定することが重要です。
              </p>
            </div>
          </div>
        </section>

        {/* プライマリカテゴリとセカンダリカテゴリ */}
        <section className="py-20" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p
              className="text-[11px] font-semibold uppercase mb-5"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#6B7280" }}
            >
              Primary &amp; Secondary
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              プライマリカテゴリとセカンダリカテゴリ
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                GBPではプライマリカテゴリ（主カテゴリ）を1つ、セカンダリカテゴリ（副カテゴリ）を
                最大9つ設定できます。プライマリカテゴリはメインのサービス・業種を表す最も重要な設定で、
                ここがMEO順位と表示機会に最も大きく影響します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                セカンダリカテゴリはビジネスが提供する関連サービスを補足するために使います。
                例えば「整骨院」をプライマリとして、「鍼灸院」「リハビリセンター」「マッサージ店」
                を副カテゴリに追加することで、複数の治療・整体関連の検索クエリに対応できます。
                ただし、すべての副カテゴリが実際のサービスと対応している必要があります。
              </p>
            </div>
          </div>
        </section>

        {/* カテゴリ選定のポイント */}
        <section className="py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p
              className="text-[11px] font-semibold uppercase mb-5"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#6B7280" }}
            >
              Selection Guide
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              カテゴリ選定のポイント
            </h2>
            <div className="max-w-3xl">
              {categoryPoints.map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>
                    {item.num}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #ece8e0" }} />
            </div>
          </div>
        </section>

        {/* 業種別カテゴリ例 */}
        <section className="py-20" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p
              className="text-[11px] font-semibold uppercase mb-5"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#6B7280" }}
            >
              Examples by Industry
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              業種別カテゴリ例
            </h2>
            <div className="max-w-3xl">
              {[
                { industry: "飲食店", primary: "日本料理店 / ラーメン店 / カフェ", secondary: "テイクアウト店・居酒屋・バーなど" },
                { industry: "美容", primary: "美容室/ヘアサロン", secondary: "ネイルサロン・エステサロン・まつげエクステサロンなど" },
                { industry: "医療", primary: "歯科医院 / 内科", secondary: "小児歯科・矯正歯科・訪問診療など" },
                { industry: "建設業", primary: "建設会社 / リフォーム会社", secondary: "外壁塗装業者・屋根工事店・水道工事業者など" },
              ].map((row, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>
                      {row.industry}
                    </h3>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>
                      <strong style={{ color: "#0d1b2a" }}>プライマリ：</strong>{row.primary}<br />
                      <strong style={{ color: "#0d1b2a" }}>セカンダリ例：</strong>{row.secondary}
                    </p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #ece8e0" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="カテゴリ設定に関するよくある質問" bgColor="#ffffff" />

        <RelatedPages
          links={[
            { href: "/meo", label: "MEO対策", desc: "MEO対策の全体戦略" },
            { href: "/meo/google-business-profile", label: "GBP最適化", desc: "MEO対策の根幹ツール" },
            { href: "/meo/ranking", label: "MEO順位改善", desc: "ローカルパック上位表示" },
            { href: "/meo/local-keyword", label: "地域キーワード設計", desc: "地域集客のキーワード戦略" },
            { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金" },
          ]}
        />

        <PageContactCTA
          heading="カテゴリ設定・GBP最適化のご相談はサイプレスへ"
          body="カテゴリ設定はMEO順位改善の最初の一手です。競合分析を踏まえた最適なカテゴリ選定と、GBP全体の最適化をサイプレスのMEO専門チームがサポートします。"
        />
      </main>
      <Footer />
    </>
  );
}

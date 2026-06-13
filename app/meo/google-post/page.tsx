import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Googleビジネスプロフィール投稿機能｜MEO対策｜株式会社サイプレス",
  description:
    "Google投稿（GBP投稿）の活用でMEO順位と集客を改善。最新情報・イベント・キャンペーン投稿の使い分けと、地域名・キーワードを活かした投稿文の書き方を解説。週1回以上の投稿でGoogleに評価されるアクティブなビジネスへ。",
  keywords: ["Google投稿", "GBP投稿", "Googleビジネスプロフィール投稿", "MEO投稿", "Googleマップ投稿", "最新情報投稿"],
  openGraph: {
    title: "Googleビジネスプロフィール投稿機能｜MEO対策｜株式会社サイプレス",
    description: "Google投稿の種類・使い方・MEOへの影響を徹底解説。週1回の投稿が上位表示の鍵。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-marketing.jp/meo/google-post" },
};

const postTypes = [
  {
    num: "01",
    title: "最新情報投稿（週1回以上推奨）",
    body: "最も汎用性が高い投稿タイプです。新商品のご案内・スタッフ紹介・季節のメッセージ・業務連絡など、あらゆる内容に対応できます。期限がなく常時表示されるため、最低週1回の更新が「アクティブなビジネス」としてのGoogleからの評価維持につながります。投稿には画像を必ず添付し、1500〜2000文字の範囲で地域名・サービスキーワードを自然に盛り込みます。",
  },
  {
    num: "02",
    title: "イベント投稿（期間・内容）",
    body: "開始日〜終了日を設定できる期間限定の投稿タイプです。地域イベントへの参加・展示会・セミナー開催・記念日イベントなどに最適です。イベント期間中は検索結果に目立つ形で表示されることがあり、クリック率を高める効果があります。タイトル・詳細・参加方法・日時を明確に記述し、来店・申し込みへの動線を整えます。",
  },
  {
    num: "03",
    title: "商品・サービス投稿",
    body: "特定の商品・サービスにフォーカスした投稿です。価格・説明・写真を設定でき、GBPの商品セクションと連動させることができます。主力商品・季節限定メニュー・新サービスのプロモーションに活用します。「今月のおすすめ」として定期的に更新することで、来店頻度の低い顧客への再接触にもなります。",
  },
  {
    num: "04",
    title: "キャンペーン・セール告知",
    body: "期間限定のキャンペーン・割引・特典情報をユーザーに告知できます。クーポンコードや特典の詳細を記載し、来店・問い合わせへの明確なCTAを設置します。「○○地域の方限定」「初回来店特典」など地域性や限定性を強調することで、ローカル検索ユーザーの反応率が高まります。終了日の設定を忘れずに行うことで、期限切れ情報の表示を防げます。",
  },
];

const faqItems = [
  {
    q: "Google投稿はどのくらいの頻度で更新すればいいですか？",
    a: "最低でも週1回の投稿を推奨しています。更新頻度はGoogleのアクティビティ評価に直結し、長期間投稿がないビジネスは「非アクティブ」と判断される可能性があります。内容に困る場合は「今週のお知らせ」「スタッフ紹介」「季節のご挨拶」などルーティン化しやすいテーマを設けると継続しやすくなります。",
  },
  {
    q: "投稿に画像は必須ですか？",
    a: "必須ではありませんが、画像付き投稿はクリック率が大幅に向上します。Googleのデータでは、画像付き投稿は画像なし投稿と比べてエンゲージメントが高いとされています。スマートフォンで撮影した写真でも、明るく鮮明であれば十分効果的です。投稿内容に関連した写真を1枚必ず添付することを習慣にしてください。",
  },
  {
    q: "投稿文にはどのようなキーワードを入れればいいですか？",
    a: "地域名（市区町村・駅名など）と業種・サービス名を自然な文脈で含めることが基本です。例：「渋谷の美容室○○では、今月からトリートメントメニューを追加しました」のように、不自然にキーワードを詰め込まず、読みやすい文章の中に組み込みます。ターゲットとする検索クエリを意識しながら書くことが重要です。",
  },
  {
    q: "AIを使って投稿文を作成することはできますか？",
    a: "ChatGPTやClaudeなどのAIツールを活用した投稿文作成は効率的です。「渋谷の美容室向けのGoogle投稿文を書いて。今月の新メニュー・季節感・来店促進のCTAを含めて」といったプロンプトで下書きを生成し、実際の店舗情報・固有名詞・価格などを追記・調整する使い方が実践的です。AIが生成した文章をそのまま使わず、必ず人の目でブランドトーンに合わせて修正してください。",
  },
  {
    q: "投稿の効果はどのように測定できますか？",
    a: "Googleビジネスプロフィールの「インサイト」からビュー数・クリック数・エンゲージメント数を確認できます。投稿種類別のパフォーマンスを比較し、反応が良い投稿の傾向（テーマ・曜日・時間帯・画像の種類）を把握することで、投稿戦略を継続的に改善できます。月次でデータを集計し、KPIとして管理することを推奨しています。",
  },
];

export default function GooglePostPage() {
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
              <span style={{ color: "#0d1b2a" }}>Google投稿</span>
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
              Googleビジネスプロフィール<br />投稿機能
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              Google投稿はGoogleビジネスプロフィール（GBP）から直接Googleマップ・検索結果に
              最新情報・イベント・キャンペーンを発信できる機能です。
              適切に活用することで、Googleからの評価向上と潜在顧客への直接的な訴求が両立できます。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_18_03.png"
            alt="スマートフォンとデジタルアイコン・Google投稿MEO対策"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.18)" }} />
        </section>

        {/* Google投稿とは */}
        <section className="py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p
              className="text-[11px] font-semibold uppercase mb-5"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#6B7280" }}
            >
              What is Google Post
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              Google投稿とは
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                Google投稿（Googleビジネスプロフィール投稿）は、ビジネスオーナーがGBP管理画面から
                最新情報・イベント・商品・キャンペーンなどを直接投稿できる機能です。
                投稿内容はGoogleマップのビジネス詳細ページや、ナレッジパネルに表示されます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                SNSの投稿と異なる点は、Googleの検索エコシステムの中に直接表示されることです。
                「渋谷 ランチ」のように地域検索を行ったユーザーが、検索結果やGoogleマップ上で
                ビジネスの最新情報をリアルタイムに確認できます。集客の最前線であるGoogle上での
                コミュニケーション手段として非常に重要です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                投稿の有効期間は原則として最新情報投稿が6ヶ月、イベント・キャンペーン投稿は
                設定した終了日まで表示されます。定期的に新鮮なコンテンツを追加することが、
                ユーザーへの訴求力維持とMEO評価向上の両方に不可欠です。
              </p>
            </div>
          </div>
        </section>

        {/* 投稿の種類と使い方 */}
        <section className="py-20" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p
              className="text-[11px] font-semibold uppercase mb-5"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#6B7280" }}
            >
              Post Types
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              投稿の種類と使い方
            </h2>
            <div className="max-w-3xl">
              {postTypes.map((item) => (
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

        {/* 投稿がMEO順位に影響する理由 */}
        <section className="py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p
              className="text-[11px] font-semibold uppercase mb-5"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#6B7280" }}
            >
              Why Posts Affect Ranking
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              投稿がMEO順位に影響する理由
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                Googleはアクティブに情報を更新しているビジネスをより信頼性が高いと評価します。
                投稿頻度はGBPのアクティビティスコアに影響し、これがローカル検索順位の「知名度（Prominence）」
                評価の一部となっています。長期間投稿がないビジネスは「休業中・非活動的」と判断されるリスクがあります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                また、投稿本文に含まれるテキストもGoogleの検索クエリとのマッチング判定に活用されます。
                「品川 歯科 インプラント」と検索したユーザーに対して、同じキーワードを含む投稿を
                持つGBPが関連性が高いと評価される仕組みです。
                投稿文にターゲットキーワードを自然に組み込むことで、関連性（Relevance）評価も向上します。
              </p>
            </div>
          </div>
        </section>

        {/* 投稿文の書き方 */}
        <section className="py-20" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p
              className="text-[11px] font-semibold uppercase mb-5"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#6B7280" }}
            >
              Writing Posts
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              投稿文の書き方と効率化
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                効果的な投稿文には3つの要素が必要です。①地域名・業種キーワードの自然な組み込み、
                ②ユーザーへの行動喚起（来店・予約・問い合わせ）、③タイムリーな情報（季節・イベント）です。
                冒頭の1〜2文でユーザーの興味を引き、3〜5文で内容を説明し、最後にCTAで締めくくる構成が基本です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                AIツール（ChatGPT・Claudeなど）を活用した投稿文の効率化も有効です。
                「業種・地域・投稿テーマ・ターゲット層」を指定したプロンプトで下書きを作成し、
                固有情報（価格・日時・スタッフ名）を追記する方法は、週1回の投稿継続を
                大幅に楽にします。ただし、AIが生成した文章は必ず実際のブランドトーンに合わせて
                加筆・修正してから投稿してください。
              </p>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="Google投稿に関するよくある質問" bgColor="#ffffff" />

        <RelatedPages
          links={[
            { href: "/meo", label: "MEO対策", desc: "MEO対策の全体戦略" },
            { href: "/meo/google-business-profile", label: "GBP最適化", desc: "MEO対策の根幹ツール" },
            { href: "/meo/photo-posting", label: "写真投稿", desc: "GBP写真の種類と更新戦略" },
            { href: "/meo/local-keyword", label: "地域キーワード設計", desc: "地域集客のキーワード戦略" },
            { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金" },
          ]}
        />

        <PageContactCTA
          heading="Google投稿の代行・運用管理はサイプレスへ"
          body="週1回以上の定期投稿を継続することがMEO評価維持の鍵です。投稿代行・運用管理から投稿戦略の設計まで、サイプレスのMEO専門チームが貴社のGBPを継続的にサポートします。"
        />
      </main>
      <Footer />
    </>
  );
}

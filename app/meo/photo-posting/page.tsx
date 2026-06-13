import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Googleビジネスプロフィール写真投稿｜MEO対策で集客｜株式会社サイプレス",
  description:
    "GoogleビジネスプロフィールへのMEO写真投稿戦略を解説。外観・内装・メニュー・スタッフ写真の使い分けと投稿頻度、スマートフォンでのプロ品質撮影テクニックまで。月2枚以上の定期投稿でGoogleマップ上位表示を実現。",
  keywords: ["GBP写真投稿", "Googleビジネスプロフィール写真", "MEO写真", "Googleマップ写真", "MEO対策写真投稿"],
  openGraph: {
    title: "Googleビジネスプロフィール写真投稿｜MEO対策で集客｜株式会社サイプレス",
    description: "MEO対策の要・写真投稿の戦略を解説。種類・品質・更新頻度のすべて。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-marketing.jp/meo/photo-posting" },
};

const photoTypes = [
  {
    num: "01",
    title: "外観写真（昼間・夜間・複数角度）",
    body: "店舗の外観写真は「この場所に行けば良い」という確信をユーザーに与えます。昼間の明るい時間帯だけでなく夜間の外観も追加することで、夜の来店を検討しているユーザーへの訴求ができます。正面・斜め・看板アップなど複数の角度で撮影することで、初めて来店するユーザーが迷わずたどり着けるようになります。",
  },
  {
    num: "02",
    title: "内装・店内の雰囲気写真",
    body: "内装写真は来店前の「この店の雰囲気を確かめたい」というニーズに応えます。清潔感・広さ・席数・インテリアのテイストが伝わる写真が理想的です。コロナ禍以降、換気対策・消毒設備が分かる写真も安心感につながります。自然光の入る時間帯に撮影すると明るく好印象な仕上がりになります。",
  },
  {
    num: "03",
    title: "商品・メニュー写真",
    body: "商品・メニュー写真は来店動機を最も高める写真です。「この料理を食べたい」「この商品を試したい」という欲求を喚起します。明るい場所で食品全体が映るよう撮影し、盛り付けの美しさが伝わるよう意識します。Googleのメニュー機能とも連携させることで、検索結果への表示機会が増えます。",
  },
  {
    num: "04",
    title: "スタッフ・作業風景写真",
    body: "スタッフや作業風景の写真はビジネスの「人間味」を伝えます。特に美容室・整骨院・工務店など担当者との関係性が重要な業種では、親しみやすいスタッフ写真が来店の背中を押します。ユニフォーム着用で統一感を出し、笑顔で自然に撮影することが好印象につながります。",
  },
  {
    num: "05",
    title: "実績・施工例写真（業種による）",
    body: "リフォーム・建設・美容・整体など、サービスの結果が分かる業種では「ビフォーアフター」や施工事例写真が強力な説得材料になります。Googleビジネスプロフィールに掲載された実績写真は、ユーザーの問い合わせ率を大幅に向上させます。許可を得た実際の案件写真を定期的に追加していくことで、実績の積み重ねが視覚化されます。",
  },
  {
    num: "06",
    title: "ロゴ・カバー写真",
    body: "ロゴ写真はGoogleが提案する画像としてブランド認知を高めます。カバー写真（プロフィールのメイン画像）は検索結果一覧で最初に目に入るため、最も印象的な1枚を選びます。推奨サイズはカバー写真が1080×608px以上で、ロゴは250×250px以上です。競合と差別化できる鮮やかで記憶に残るビジュアルを選定します。",
  },
];

const faqItems = [
  {
    q: "写真は何枚くらい掲載するのが理想ですか？",
    a: "開始時点では最低20枚、理想は50枚以上を目標としてください。Googleのデータでは、写真が100枚以上あるビジネスはユーザーのウェブサイトクリック率が2倍以上になるとされています。重要なのは数だけでなく定期的な追加で、月2〜4枚のペースで継続的に投稿することを推奨しています。",
  },
  {
    q: "スマートフォンで撮影した写真でも大丈夫ですか？",
    a: "現在のスマートフォンは高品質なカメラを搭載しているため、コツを押さえれば十分プロ品質の写真が撮影できます。重要なのは明るさ・水平・ピントの3点です。自然光の多い時間帯に撮影し、グリッド表示を活用して水平を保ち、タップしてピントを合わせることで品質が大幅に向上します。",
  },
  {
    q: "ユーザーが投稿した写真は管理できますか？",
    a: "ユーザー投稿の写真は原則として削除できませんが、Googleのコンテンツポリシーに違反するもの（不適切な内容・スパム等）は報告・削除申請が可能です。オーナーとして積極的に品質の高い写真を追加することで、ユーザー写真との比率を改善し、全体的な印象を高めることができます。",
  },
  {
    q: "写真の著作権は誰のものですか？",
    a: "オーナーがGBPに投稿した写真の著作権は投稿者にありますが、Googleの利用規約により、Googleサービス内での使用・表示をGoogleに許諾したことになります。他者の写真を無断で使用することはできません。スタッフ・顧客の写真を使用する際は事前に承諾を得ることが必要です。",
  },
  {
    q: "競合より写真が少ないと順位に影響しますか？",
    a: "写真の数・品質・更新頻度はGoogleのアクティビティ評価に影響し、MEO順位の要素となります。競合分析の際に上位表示されているビジネスの写真枚数を確認し、それを上回ることを目標に設定することを推奨しています。単純な枚数競争よりも、質の高い写真を継続的に追加することが重要です。",
  },
];

export default function PhotoPostingPage() {
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
              <span style={{ color: "#0d1b2a" }}>写真投稿</span>
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
              Googleビジネスプロフィール<br />写真投稿
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              Googleビジネスプロフィールに掲載する写真は、ユーザーの来店判断に直結するとともに、
              MEO順位にも重要な影響を与えます。写真の種類・品質・更新頻度を正しく管理することで、
              競合との差別化と検索上位表示を同時に実現できます。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_21_48.png"
            alt="スマートフォンで店舗写真を撮影する女性・MEO写真投稿"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.18)" }} />
        </section>

        {/* 写真投稿がMEO順位に与える影響 */}
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
              写真投稿がMEO順位に与える影響
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                Googleは写真が多く・定期的に更新されているビジネスを「アクティブで信頼性の高いビジネス」として評価します。
                写真枚数・投稿頻度・品質はいずれもGoogleのローカル検索アルゴリズムの「知名度（Prominence）」と
                「関連性（Relevance）」評価に影響します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                Googleの公式データによると、写真が掲載されているビジネスはそうでないビジネスと比べて
                ウェブサイトへのクリック数が35%多く、電話問い合わせが42%多いとされています。
                ユーザー行動の観点からも写真の充実は来店転換率に直結します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                さらに、Googleの画像認識AI（Vision API）は写真のコンテンツを解析しており、
                料理・内装・外観などのカテゴリ分類に活用されています。
                適切なカテゴリの写真を適切な枚数投稿することが、
                検索クエリとのマッチング精度向上にもつながります。
              </p>
            </div>
          </div>
        </section>

        {/* 投稿すべき写真の種類 */}
        <section className="py-20" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p
              className="text-[11px] font-semibold uppercase mb-5"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#6B7280" }}
            >
              Photo Types
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              投稿すべき写真の種類
            </h2>
            <div className="max-w-3xl">
              {photoTypes.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
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

        {/* 写真の品質と更新頻度 */}
        <section className="py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p
              className="text-[11px] font-semibold uppercase mb-5"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#6B7280" }}
            >
              Quality &amp; Frequency
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              写真の品質と更新頻度
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                月2枚以上の定期的な写真投稿を推奨しています。理想的には月4〜6枚のペースで継続することで、
                Googleのアクティビティ評価を常に高い状態に保てます。曜日・時間帯を決めてルーティン化することで
                継続しやすくなります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                写真の品質基準としては、解像度720px×720px以上・ファイルサイズ10KB〜5MBが推奨されています。
                ピンぼけ・暗すぎる写真・過度なフィルター加工はGoogleに低品質と判断されることがあります。
                自然光や適切な照明を活用し、清潔感のある環境で撮影することが基本です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                季節・イベントに合わせた写真更新も効果的です。クリスマスメニュー・夏の新商品・年末年始の
                装飾など、タイムリーな写真を追加することでユーザーの再訪問を促し、
                Googleにも継続的な活動を示すことができます。
              </p>
            </div>
          </div>
        </section>

        {/* スマートフォンで撮影するコツ */}
        <section className="py-20" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p
              className="text-[11px] font-semibold uppercase mb-5"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#6B7280" }}
            >
              Shooting Tips
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              スマートフォンで撮影するコツ
            </h2>
            <div className="max-w-3xl">
              {[
                { title: "明るい場所・時間帯を選ぶ", body: "自然光が最も美しく映ります。窓際や屋外での撮影が可能な場合は積極的に活用してください。室内では照明を増やすか、撮影用の簡易ライトを使用することで品質が上がります。フラッシュは影が強くなりすぎるため、できるだけ使用を避けましょう。" },
                { title: "グリッド線を表示して水平を保つ", body: "カメラ設定からグリッド線（3×3）を表示することで、水平・垂直の基準が分かりやすくなります。傾いた写真はプロフェッショナルな印象を損ないます。料理写真は真上から、外観写真は水平に近い角度が一般的に見栄えの良い構図です。" },
                { title: "ピントを被写体に合わせる", body: "撮影前に画面内の被写体部分をタップしてピントを合わせます。オートフォーカスに任せると意図しない場所にピントが合うことがあります。特に料理・商品の接写では、主役となる部分を明確にタップしてからシャッターを切ることが重要です。" },
                { title: "撮影後の簡単な調整", body: "スマートフォン標準の写真編集機能で明るさ・コントラスト・彩度を調整するだけで品質が大きく向上します。「明るさ+10〜20」「コントラスト+5〜10」「彩度+5〜10」が食品・内装写真の目安です。過度な加工は実際の店舗・商品との乖離を生むため控えめに。" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>
                    {String(i + 1).padStart(2, "0")}
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

        <FaqSection items={faqItems} heading="写真投稿に関するよくある質問" bgColor="#ffffff" />

        <RelatedPages
          links={[
            { href: "/meo", label: "MEO対策", desc: "MEO対策の全体戦略" },
            { href: "/meo/google-business-profile", label: "GBP最適化", desc: "MEO対策の根幹ツール" },
            { href: "/meo/google-post", label: "Google投稿", desc: "最新情報・イベント投稿" },
            { href: "/meo/ranking", label: "MEO順位改善", desc: "ローカルパック上位表示" },
            { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金" },
          ]}
        />

        <PageContactCTA
          heading="写真投稿・GBP管理のご相談はサイプレスへ"
          body="写真投稿の代行・定期管理から撮影ガイドラインの整備まで、サイプレスのMEO専門チームが貴社のGoogleビジネスプロフィールを最適化します。まずは現状診断からご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}

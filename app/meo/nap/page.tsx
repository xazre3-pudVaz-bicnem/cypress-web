import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "NAP情報の統一｜MEO対策の基本｜株式会社サイプレス",
  description:
    "NAP（店舗名・住所・電話番号）の統一はMEO・SEO対策の基本中の基本。GBP・自社サイト・SNS・外部サービスのNAP不一致がGoogleの信頼度を下げる理由と、統一の対象・手順を詳しく解説。",
  keywords: ["NAP統一", "NAP情報", "MEO NAP", "Name Address Phone", "店舗名住所電話番号統一", "サイテーション統一"],
  openGraph: {
    title: "NAP情報の統一｜MEO対策の基本｜株式会社サイプレス",
    description: "NAP統一がSEO・MEOに与える影響と、統一対象・よくある不一致パターンを解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-marketing.jp/meo/nap" },
};

const napTargets = [
  {
    num: "01",
    title: "Googleビジネスプロフィール",
    body: "MEO対策の起点となるGBPのNAP情報はすべての基準となります。ここに登録した店舗名・住所・電話番号を「マスターデータ」として他のすべてのプラットフォームと一致させる方針で管理します。GBPの情報を変更した際は、他の媒体への反映を忘れず確認してください。",
  },
  {
    num: "02",
    title: "自社Webサイト",
    body: "自社ウェブサイトに記載の店舗名・住所・電話番号は、GBPと完全に一致させることが必須です。特にフッター・お問い合わせページ・アクセスページに掲載されている情報を確認します。LocalBusiness構造化データ（JSON-LD）も実装し、同一のNAP情報をコード内にも記述することで、検索エンジンへの信頼性シグナルが強まります。",
  },
  {
    num: "03",
    title: "各SNS（Instagram・X・LINE等）",
    body: "InstagramビジネスアカウントのプロフィールやX（旧Twitter）の店舗情報、LINE公式アカウントのビジネス情報欄に記載の住所・電話番号もGBPと一致させます。SNSのプロフィール欄は更新が見落とされやすい場所です。店舗移転・電話番号変更の際は必ずSNSの情報も更新してください。",
  },
  {
    num: "04",
    title: "食べログ・ホットペッパーなどの外部サービス",
    body: "飲食店であれば食べログ・ホットペッパーグルメ・ぐるなび、美容室であればホットペッパービューティー、医療機関であれば病院なびなど、業種別の予約・口コミサービスへの掲載情報もNAP統一の対象です。これらは多くのユーザーが利用する信頼性の高いプラットフォームであり、ここでの不一致はGoogleの評価に直接影響します。",
  },
  {
    num: "05",
    title: "地図サービス（Apple Maps・Yahoo!カーナビ等）",
    body: "Apple MapsやYahoo!カーナビ、MapFanなどの地図サービスにも事業者情報が登録されている場合があります。Apple Maps ConnectやYahoo!プレイスでオーナー申請を行い、NAP情報を正確に管理します。これらのサービスはGoogleとは別のユーザー層に利用されており、集客の多様化と情報統一の両面から重要です。",
  },
  {
    num: "06",
    title: "業界ポータル・ディレクトリサイト",
    body: "地域のタウンページ・iタウンページ、業界団体のディレクトリ、地域の商工会・商店街のウェブサイトに掲載されている情報もNAP統一の対象です。これらのサイテーション（外部サイトでのNAP言及）はGoogleのビジネス知名度評価を高める効果があります。掲載媒体の数・品質・NAP統一状態をまとめて管理するリストを作成することを推奨しています。",
  },
];

const faqItems = [
  {
    q: "NAPの表記揺れとはどういうことですか？",
    a: "同一の情報を異なる表記で記載している状態を指します。例えば「東京都渋谷区渋谷1-2-3」と「渋谷区渋谷1丁目2番3号」、「03-1234-5678」と「0312345678」、「株式会社サイプレス」と「サイプレス」のように、情報は同じでも表記形式が異なる場合です。Googleは表記揺れを異なる情報と判断することがあり、信頼性の低下につながります。",
  },
  {
    q: "NAP統一はどのくらいSEO・MEOに影響しますか？",
    a: "NAP統一はMEOの「知名度（Prominence）」評価に影響します。複数のサイトで一貫したNAP情報が確認できるビジネスは、Googleから「確度の高い情報を持つ信頼できるビジネス」と評価されます。逆に不一致が多い場合、Googleがどの情報が正確かを判断できず、評価が下がります。即効性は低いですが、MEO対策の基盤として必ず整備すべき要素です。",
  },
  {
    q: "移転・電話番号変更後のNAP更新はどうすれば良いですか？",
    a: "変更が決まったら、できるだけ早くGBPを更新することが最優先です。その後、自社ウェブサイト→SNS→外部サービスの順で更新します。すべての媒体への反映をチェックリストで管理することを推奨しています。食べログ・ホットペッパーなど第三者プラットフォームは、オーナー申請をしていないと修正できない場合があるため、事前に申請状態を確認しておくことが重要です。",
  },
  {
    q: "どのプラットフォームのNAP統一を優先すべきですか？",
    a: "優先度は①Googleビジネスプロフィール→②自社ウェブサイト→③業界主要プラットフォーム（食べログ・ホットペッパーなど）→④SNS→⑤その他ディレクトリの順です。特にドメイン権威の高いプラットフォームほど影響が大きいため、まず主要媒体のNAP統一を完了させてから範囲を広げていきます。",
  },
  {
    q: "NAP統一の確認・監査はどのように行いますか？",
    a: "まず自社名・住所・電話番号でGoogle検索を行い、表示される外部サイトの情報を確認します。Moz Local・BrightLocal・Yextなどのツールを使うと複数プラットフォームの一括確認が効率的です。サイプレスではMEO監査サービスの中でNAP統一状況の調査・修正対応を提供しています。",
  },
];

export default function NapPage() {
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
              <span style={{ color: "#0d1b2a" }}>NAP統一</span>
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
              NAP情報の統一
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              NAP（Name・Address・Phone）とは店舗名・住所・電話番号の3情報を指します。
              GBP・自社サイト・SNS・外部サービスにわたってこの情報が一致していることが、
              GoogleによるMEO評価の信頼性向上に欠かせません。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_14_54.png"
            alt="ビジネス情報の確認・NAP統一MEO対策"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.18)" }} />
        </section>

        {/* NAPとは */}
        <section className="py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p
              className="text-[11px] font-semibold uppercase mb-5"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#6B7280" }}
            >
              What is NAP
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              NAPとは
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                NAPとはName（店舗名・会社名）、Address（住所）、Phone（電話番号）の略称です。
                ローカルSEO・MEO対策において、これら3つの情報がオンライン上の複数の場所で
                一致していることが、Googleの信頼性評価を高める基盤となります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                Googleはウェブ上に掲載されているビジネス情報をクロールして照合します。
                GBP・自社ウェブサイト・食べログ・ホットペッパー・SNSなど複数の場所で
                同一のNAP情報が確認できる場合、Googleは「このビジネスは確かに実在し、
                信頼できる情報を持っている」と判断します。
                この信頼度がMEO・ローカルSEO順位の「知名度（Prominence）」評価に直結します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                逆に、各サービスで表記が異なる・古い情報が放置されている・店舗名が媒体によって
                略称や表記違いで掲載されているといった「NAP不一致」の状態は、
                Googleがどの情報を正として扱うか判断できなくなり、評価の低下につながります。
                MEO対策の出発点として、NAP統一は最初に取り組むべき基本施策です。
              </p>
            </div>
          </div>
        </section>

        {/* NAP統一の対象 */}
        <section className="py-20" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p
              className="text-[11px] font-semibold uppercase mb-5"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#6B7280" }}
            >
              Unification Targets
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              NAP統一の対象
            </h2>
            <div className="max-w-3xl">
              {napTargets.map((item) => (
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

        {/* よくあるNAP不一致のパターン */}
        <section className="py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p
              className="text-[11px] font-semibold uppercase mb-5"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#6B7280" }}
            >
              Common Issues
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              よくあるNAP不一致のパターン
            </h2>
            <div className="max-w-3xl">
              {[
                { title: "住所の表記揺れ", body: "「1-2-3」と「1丁目2番3号」、「東京都渋谷区」と「渋谷区」、ビル名の有無・階数表記の有無など。Google MapsはGBPの住所を基準に地図上の位置を決定するため、表記揺れはピン落下位置のズレにも関わります。" },
                { title: "店舗名の略称・異表記", body: "「株式会社サイプレス マーケティング事業部」「サイプレス」「Cypress」など、登録媒体によって名称が異なるケース。GBPに登録した正式店舗名をマスターとして、他の媒体も統一することが原則です。" },
                { title: "移転・電話変更後の放置", body: "店舗移転や電話番号変更後、更新を忘れた媒体に古い情報が残り続けるケース。特に食べログ・ホットペッパーなど第三者が掲載したサービスは、オーナー申請をしていないと修正できないことがあります。" },
                { title: "フリーダイヤルと固定電話の混在", body: "GBPには固定電話を登録し、食べログにはフリーダイヤルを掲載するなど、電話番号が媒体によって異なるパターン。MEO観点では一つの番号に統一することが理想ですが、少なくともGBPと自社サイトを一致させることが最低限の対応です。" },
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

        <FaqSection items={faqItems} heading="NAP統一に関するよくある質問" bgColor="#f8f6f2" />

        <RelatedPages
          links={[
            { href: "/meo", label: "MEO対策", desc: "MEO対策の全体戦略" },
            { href: "/meo/google-business-profile", label: "GBP最適化", desc: "MEO対策の根幹ツール" },
            { href: "/meo/ranking", label: "MEO順位改善", desc: "ローカルパック上位表示" },
            { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域特化SEO対策" },
            { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金" },
          ]}
        />

        <PageContactCTA
          heading="NAP統一・MEO基盤整備のご相談はサイプレスへ"
          body="NAP統一状況の調査・修正から、GBP・自社サイト・外部媒体の情報管理まで、サイプレスのMEO専門チームがトータルで対応します。まずは現状のNAP監査からお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}

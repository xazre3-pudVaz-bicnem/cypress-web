import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "葛飾区で起業する前に確認したい開業準備チェックリスト｜株式会社サイプレス",
  description:
    "葛飾区で起業・開業を検討している方向けに、創業前に確認すべき事業設計・資金計画・集客・ホームページ・GBP・SNS・営業先・収益柱のチェックリストをまとめました。",
  keywords: [
    "葛飾区 起業 準備",
    "葛飾区 開業 準備",
    "葛飾区 創業 チェックリスト",
    "葛飾区 個人事業主 開業",
  ],
  openGraph: {
    title: "葛飾区で起業する前に確認したい開業準備チェックリスト",
    description: "葛飾区で起業・開業を検討している方向けに、創業前に確認すべき事業設計・資金計画・集客・ホームページ・GBP・SNS・営業先・収益柱のチェックリストをまとめました。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://www.cypress-all.co.jp/area/tokyo/katsushika/start-business-checklist",
  },
};

const faqItems = [
  {
    q: "葛飾区で起業する際にまず何から準備すれば良いですか？",
    a: "事業内容・ターゲット・料金設定・集客方法の整理から始めることをお勧めします。その後、ホームページ制作とGoogleビジネスプロフィール（GBP）の登録を早めに着手することで、開業後の集客立ち上がりがスムーズになります。",
  },
  {
    q: "法人と個人事業主どちらで開業すべきですか？",
    a: "事業規模・取引先・税負担・信用力などによって判断が異なります。初期は個人事業主として開業し、売上が拡大した段階で法人化するケースが多いですが、取引先が法人の場合は最初から法人設立を検討する場合もあります。税理士への相談をお勧めします。",
  },
  {
    q: "葛飾区の創業支援窓口に相談できますか？",
    a: "葛飾区の産業経済課や商工会議所などで創業相談を受け付けています。ただし、制度内容は年度によって変わる場合がありますので、必ず葛飾区公式サイトの最新情報をご確認ください。株式会社サイプレスは行政機関ではなく、申請代行は行っていません。",
  },
  {
    q: "開業前にホームページを作成すべきですか？",
    a: "可能な限り開業前・開業直後の制作をお勧めします。SEO効果が出るまでに3〜6ヶ月以上かかることが一般的なため、早く始めるほど集客の立ち上がりが早くなります。GBPも開業前から登録できます。",
  },
  {
    q: "創業資金はどこで調達できますか？",
    a: "日本政策金融公庫の創業融資、東京都の制度融資、葛飾区の補助金・助成金などが確認先として一般的です。ただし審査があり融資・採択を保証するものではありません。最新情報は各機関の公式サイトでご確認ください。",
  },
  {
    q: "葛飾区で開業届はどこに提出しますか？",
    a: "個人事業主の開業届は、事業所を管轄する税務署への提出が必要です。また、葛飾区役所への届け出が必要な業種もあります。提出方法・必要書類は税務署や区役所の公式サイトでご確認ください。",
  },
  {
    q: "ホームページ作成費の補助金を使えますか？",
    a: "葛飾区のホームページ作成費補助など、活用できる可能性がある制度があります。ただし制度内容は年度によって変わり、採択・支給を保証するものではありません。申請前に必ず葛飾区公式サイトで最新情報をご確認ください。",
  },
  {
    q: "Googleビジネスプロフィールの登録に費用はかかりますか？",
    a: "Googleビジネスプロフィール（GBP）の登録自体は無料です。住所確認手続きに数日〜数週間かかる場合があります。MEO対策として最優先で着手することをお勧めします。",
  },
  {
    q: "創業後すぐに集客できますか？",
    a: "GBPは数週間〜数ヶ月で表示され始める場合があります。SEOは一般的に3〜6ヶ月以上かかります。開業前から準備することで早期の集客立ち上がりが期待できますが、具体的な効果を保証するものではありません。",
  },
  {
    q: "販売パートナー制度を利用できるのはいつからですか？",
    a: "創業直後から活動を開始できます。地域の人脈・知人の事業者を対象に、Web集客サービスの紹介活動を行うことができます。専門知識は不要ですが、成果・収入を保証するものではありません。",
  },
];

const S = {
  label: { fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" as const },
  h2: { fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" },
  body: { fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "36px" },
  container: { maxWidth: "72rem", margin: "0 auto", padding: "0 24px" },
  checkItem: { display: "flex", gap: "16px", padding: "20px 0", borderTop: "1px solid #E8E4DC" } as React.CSSProperties,
  checkMark: { color: "#c4b89a", fontSize: "18px", minWidth: "24px", paddingTop: "1px" },
  itemTitle: { fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" },
  itemBody: { fontSize: "13px", color: "#374151", lineHeight: "1.85" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
        { "@type": "ListItem", position: 2, name: "エリア", item: "https://www.cypress-all.co.jp/area" },
        { "@type": "ListItem", position: 3, name: "東京都葛飾区", item: "https://www.cypress-all.co.jp/area/tokyo/katsushika" },
        { "@type": "ListItem", position: 4, name: "開業準備チェックリスト", item: "https://www.cypress-all.co.jp/area/tokyo/katsushika/start-business-checklist" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

const categories = [
  "事業設計",
  "資金計画",
  "集客導線",
  "ホームページ制作",
  "Googleビジネスプロフィール（GBP）",
  "SNS・口コミ導線",
  "営業先・販路",
  "収益柱",
];

const businessDesignItems = [
  { t: "事業の目的・コンセプトの明確化", b: "何を・誰に・どのような価値を提供するのかを一言で説明できる状態にします。" },
  { t: "ターゲット顧客・ペルソナの設定", b: "年齢・職業・悩み・行動パターンを具体化することで、集客施策の精度が上がります。" },
  { t: "競合・差別化ポイントの把握", b: "同業他社と比べたときに、なぜ自分を選ぶのかを説明できるようにします。" },
  { t: "提供するサービス・商品の詳細", b: "サービスの内容・提供方法・所要時間・成果物を明確にします。" },
  { t: "料金設定（高すぎず安すぎず）", b: "競合の価格帯・自分の提供価値・ターゲットの購買力を照らし合わせて設定します。" },
  { t: "事業運営に必要な資格・許可の確認", b: "業種によっては許認可・届出が必要です。事前に管轄機関で確認しておきます。" },
  { t: "事業計画書の作成", b: "融資・補助金申請時に必要なほか、経営の軸を整理するためにも有効です。" },
  { t: "開業時期の確定", b: "ホームページ制作・GBP登録・届出のスケジュールを逆算して決定します。" },
];

const fundingItems = [
  { t: "初期費用の試算（設備・在庫・制作費・広告費等）", b: "開業に必要な費用を項目ごとに試算し、優先順位をつけます。" },
  { t: "運転資金の確保（3〜6ヶ月分）", b: "売上が安定するまでの生活費・固定費をカバーできる資金を準備します。" },
  { t: "創業融資の確認（日本政策金融公庫等）", b: "創業期に活用できる融資制度があります。審査があり、融資実行を保証するものではありません。" },
  { t: "葛飾区・東京都の補助金・助成金の確認", b: "制度内容は年度によって変わります。申請前に必ず公式サイトで最新情報をご確認ください。" },
  { t: "ホームページ作成費補助の確認", b: "葛飾区のホームページ作成費補助を活用できる場合があります。採択・支給を保証するものではありません。" },
  { t: "個人・法人の選択（税負担比較）", b: "税理士への相談をお勧めします。売上規模・取引先・費用計上の方針によって最適解が変わります。" },
  { t: "事業用口座の開設", b: "個人口座と事業用口座を分けることで、経理が明確になります。" },
  { t: "会計・税務の準備（会計ソフト、税理士相談）", b: "確定申告・消費税・社会保険など、開業後の税務処理を事前に整理します。" },
];

const marketingItems = [
  { t: "主要集客チャネルの決定", b: "SEO・MEO・SNS・紹介・広告のどれを優先するか方針を決めます。" },
  { t: "地域名＋業種キーワードの確認", b: "「葛飾区＋業種」「亀有・金町・新小岩＋業種」の検索需要を把握します。" },
  { t: "SNSアカウントの開設・整備", b: "業種に合ったSNSを選び、プロフィール・ホームページURLを設定します。" },
  { t: "口コミ・紹介の設計", b: "既存客・知人からの紹介・Googleレビュー誘導の仕組みを事前に設計します。" },
  { t: "広告予算の確保有無", b: "開業初期に広告を使う場合は予算を事前に確保し、効果測定の方法も決めます。" },
  { t: "競合の集客方法の把握", b: "同業者がどこで集客しているかを確認し、自社の差別化ポイントを整理します。" },
  { t: "開業初日から集客できるか確認", b: "GBP登録・ホームページ公開・SNS投稿を開業前に完了させることが理想です。" },
];

const hpItems = [
  { t: "ドメイン取得・ホスティングの確認", b: "独自ドメインの取得とサーバー契約を開業前に済ませます。" },
  { t: "制作会社・制作方針の選定", b: "SEO設計込みかどうか、実績・費用の透明性を基準に選定します。" },
  { t: "SEO設計込みかどうか", b: "制作のみで終わるサイトと、SEO設計込みのサイトでは長期的な集客力に差が出ます。" },
  { t: "必要ページの確認（トップ・サービス・料金・会社概要・問い合わせ）", b: "最低限の5ページを揃えることで、問い合わせへの心理的ハードルが下がります。" },
  { t: "問い合わせフォームの設計", b: "入力項目を最小化し、スマートフォンで送信しやすいフォームを設置します。" },
  { t: "スマートフォン対応", b: "モバイルファーストインデックスの観点から、スマホでの表示最適化は必須です。" },
  { t: "表示速度の最適化", b: "Core Web VitalsのLCP・CLSを意識した高速表示設計が必要です。" },
  { t: "補助金活用の検討", b: "ホームページ作成費補助の活用を検討する場合は、申請タイミングと制作タイミングの整合を事前に確認します。" },
];

const gbpItems = [
  { t: "GBPの登録・開設（無料）", b: "住所確定後すぐに登録を開始します。確認コードの到着まで数日〜数週間かかります。" },
  { t: "正確な住所・電話番号・営業時間の設定", b: "NAP情報（名前・住所・電話番号）の正確性がMEO対策の基本です。" },
  { t: "適切なカテゴリ設定", b: "メインカテゴリを正確に設定することで、適切な検索クエリで表示されやすくなります。" },
  { t: "写真の追加（外観・内観・スタッフ）", b: "写真が多いほど検索ユーザーの信頼感が高まります。開業時に複数枚追加します。" },
  { t: "サービス内容の記載", b: "提供するサービス・商品・価格帯を正確に記載します。" },
  { t: "定期的な投稿計画", b: "週1回〜月2回程度の投稿を継続することで、アクティブな状態を維持できます。" },
  { t: "口コミへの返信体制", b: "ポジティブ・ネガティブ問わず口コミへの返信を継続することが信頼構築につながります。" },
];

const snsItems = [
  { t: "使用するSNSプラットフォームの選定", b: "業種・ターゲット・コンテンツの種類によって最適なSNSが異なります。飲食・美容はInstagram、B2B系はLinkedIn等が有効です。" },
  { t: "Instagramアカウント開設（飲食・美容・サービス業等）", b: "ビジュアル系の業種はInstagramの開設を早めに行います。ビジネスアカウント設定を忘れずに。" },
  { t: "投稿頻度・コンテンツ方針の決定", b: "継続できる頻度で設定します。週2〜3回を目安に、自分のリソースで続けられる計画を立てます。" },
  { t: "口コミ依頼の仕組み（GBPレビュー誘導）", b: "施術・購買後の顧客にGBPレビューをお願いするフローを仕組み化します。" },
  { t: "SNSとホームページの連動設計", b: "SNSのプロフィールにホームページURLを設置し、問い合わせはホームページ経由に誘導します。" },
  { t: "フォロワーへの依存からの脱却設計", b: "SNSのフォロワー数ではなく、SEO・MEOによる「検索からの流入」を長期資産として設計します。" },
];

const salesItems = [
  { t: "主要な営業先リストの作成", b: "最初の10〜20社の営業先候補を書き出します。知人・元同僚・地域の事業者を中心に。" },
  { t: "既存の人脈・知人への案内方法", b: "開業の連絡・サービス案内を既存の人脈へ届けるメッセージを事前に準備します。" },
  { t: "葛飾区内のビジネスコミュニティへの参加", b: "地域の商工会・業界団体・朝活コミュニティへの参加で新規接点が生まれます。" },
  { t: "法人・個人の割合", b: "ターゲットが法人か個人かによって、営業手法・単価・契約形態が変わります。" },
  { t: "単価設定と最小受注単位", b: "最小受注金額・最小受注件数を決めることで、採算の取れない案件を避けられます。" },
  { t: "紹介報酬・紹介制度の設計", b: "既存客からの紹介を促す仕組みを事前に設計しておきます。" },
  { t: "販路拡大のための外部パートナー検討", b: "Web集客サービスの販売パートナー制度など、収益柱の拡大手段を検討します。" },
];

const revenueItems = [
  { t: "自社サービスが安定するまでの期間の試算", b: "SEO・口コミ・リピーターが蓄積されるまでの期間を現実的に試算します。一般的に3〜6ヶ月以上かかることがあります。" },
  { t: "サブ収益（取次・紹介・副業）の検討", b: "自社サービス以外に、紹介報酬・取次報酬などのサブ収益を持つことで経営が安定します。" },
  { t: "販売パートナー制度の活用可能性の確認", b: "Web集客サービスの販売パートナー制度を創業初期の収益柱の一つとして検討できます。成果を保証するものではありません。" },
  { t: "収益が安定するまでの月次計画", b: "月次の収支シミュレーションを作成し、資金が底をつくリスクを事前に把握します。" },
  { t: "固定費と変動費のバランス", b: "固定費（家賃・ツール費・人件費）を最小化し、変動費体制で運営できる設計を目指します。" },
  { t: "最低ラインの売上目標の設定", b: "固定費＋生活費を賄える最低売上ラインを数字で把握しておきます。" },
];

const relatedLinks = [
  { href: "/area/tokyo/katsushika/start-business", label: "葛飾区で起業する方向けの創業者向けハブページを見る", desc: "9セクションの総合ガイド" },
  { href: "/area/tokyo/katsushika/startup-funding", label: "葛飾区で創業資金や補助金を確認する前に知っておきたいこと", desc: "融資・補助金の確認ポイント" },
  { href: "/area/tokyo/katsushika/startup-web-marketing", label: "葛飾区で創業する方向けのWeb集客ガイドを見る", desc: "GBP・SEO・MEOの優先順位" },
  { href: "/area/tokyo/katsushika/web-design-subsidy", label: "葛飾区でホームページ制作と補助金を確認する", desc: "制作と補助金活用の注意点" },
  { href: "/area/tokyo/katsushika/startup-revenue-streams", label: "創業初期の収益柱として販売パートナー制度を確認する", desc: "収益柱づくりのガイド" },
  { href: "/partner/katsushika-startup", label: "葛飾区で起業する方向け販売パートナー制度を見る", desc: "取次・紹介でできる制度" },
];

function CheckSection({ title: sTitle, items, bg }: { title: string; items: { t: string; b: string }[]; bg: string }) {
  return (
    <section style={{ background: bg, padding: "80px 0" }}>
      <div style={S.container}>
        <h2 style={S.h2}>{sTitle}</h2>
        <div style={{ maxWidth: "800px" }}>
          {items.map((item) => (
            <div key={item.t} style={S.checkItem}>
              <span style={S.checkMark}>✓</span>
              <div>
                <p style={S.itemTitle}>{item.t}</p>
                <p style={S.itemBody}>{item.b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>

        {/* HERO */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "72px" }}>
          <div style={S.container}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area" style={{ color: "#6B7280" }}>エリア</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area/tokyo/katsushika" style={{ color: "#6B7280" }}>東京都葛飾区</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>開業準備チェックリスト</span>
            </nav>
            <p style={S.label}>Katsushika — Startup Checklist</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "24px" }}>
              葛飾区で起業する前に確認したい開業準備チェックリスト
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "36px" }}>
              事業設計・資金計画・集客導線・ホームページ・GBP・SNS・営業先・収益柱の8カテゴリにわたる開業準備チェックリストです。葛飾区で起業する前に確認しておくことで、創業後のスタートがスムーズになります。
            </p>
            <Link href="/contact" style={{ display: "inline-block", background: "#0d1b2a", color: "#fff", padding: "14px 28px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px" }}>
              創業時のWeb集客準備を相談する
            </Link>
          </div>
        </section>

        {/* SECTION 2: 全体像 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Overview</p>
            <h2 style={S.h2}>創業前に確認することの全体像</h2>
            <p style={S.body}>以下の8カテゴリのチェックリストを順番に確認してください。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px", maxWidth: "800px" }}>
              {categories.map((cat, i) => (
                <div key={cat} style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "16px", display: "flex", gap: "12px", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "28px" }}>0{i + 1}</span>
                  <span style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "14px", color: "#0d1b2a" }}>{cat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CheckSection title="事業設計チェック" items={businessDesignItems} bg="#f8f6f2" />

        {/* SECTION 4: 資金計画 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={S.container}>
            <h2 style={S.h2}>資金計画チェック</h2>
            <div style={{ background: "#FEF9C3", border: "1px solid #FDE68A", borderRadius: "8px", padding: "16px 20px", maxWidth: "720px", marginBottom: "28px" }}>
              <p style={{ fontSize: "13px", color: "#78350F", lineHeight: "1.85" }}>
                制度内容は年度によって変わる場合があります。申請前に必ず葛飾区公式サイトをご確認ください。採択・支給を保証するものではありません。
              </p>
            </div>
            <div style={{ maxWidth: "800px" }}>
              {fundingItems.map((item) => (
                <div key={item.t} style={S.checkItem}>
                  <span style={S.checkMark}>✓</span>
                  <div>
                    <p style={S.itemTitle}>{item.t}</p>
                    <p style={S.itemBody}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CheckSection title="集客導線チェック" items={marketingItems} bg="#f8f6f2" />
        <CheckSection title="ホームページ制作チェック" items={hpItems} bg="#ffffff" />
        <CheckSection title="Googleビジネスプロフィール（GBP）チェック" items={gbpItems} bg="#f8f6f2" />
        <CheckSection title="SNS・口コミ導線チェック" items={snsItems} bg="#ffffff" />
        <CheckSection title="営業先・販路チェック" items={salesItems} bg="#f8f6f2" />
        <CheckSection title="収益柱チェック" items={revenueItems} bg="#ffffff" />

        {/* SECTION 11: 販売パートナー制度 */}
        <section style={{ background: "#0d1b2a", padding: "72px 0" }}>
          <div style={S.container}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Revenue Stream</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,30px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "20px" }}>
              販売パートナー制度を検討するタイミング
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#D1D5DB", maxWidth: "640px", marginBottom: "32px" }}>
              自社の商品やサービスが軌道に乗るまでの期間、収益柱の一つとして販売パートナー制度を検討できます。営業経験や地域事業者との接点がある方に向いています。成果を保証するものではありません。
            </p>
            <Link href="/partner/katsushika-startup" style={{ display: "inline-block", background: "transparent", color: "#fff", padding: "14px 28px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px", border: "1px solid #fff" }}>
              葛飾区で起業する方向け販売パートナー制度を見る
            </Link>
          </div>
        </section>

        {/* SECTION 12: 関連ページ */}
        <section style={{ background: "#f8f6f2", padding: "72px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Related Pages</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "28px" }}>関連ページ</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "14px" }}>
              {relatedLinks.map((item) => (
                <Link key={item.href} href={item.href} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "16px 14px", textDecoration: "none", display: "block" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "13px", color: "#0d1b2a", marginBottom: "4px", lineHeight: 1.5 }}>{item.label}</p>
                  <p style={{ fontSize: "11px", color: "#6B7280" }}>{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FaqSection
          items={faqItems}
          heading="葛飾区での開業準備についてよくある質問"
          bgColor="#F9F8F5"
        />

        <PageContactCTA
          heading="創業時のWeb集客準備をまとめて相談する"
          body="ホームページ制作・SEO・MEO・GBP・補助金確認に関するご相談はお気軽にどうぞ。"
        />

      </main>
      <Footer />
    </>
  );
}

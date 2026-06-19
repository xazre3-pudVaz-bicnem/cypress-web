import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "【飲食店のMEO・Web集客】Googleマップ上位表示で来店数を増やす｜株式会社サイプレス",
  description: "飲食店のGoogleマップ上位表示・Instagram運用・口コミ獲得・ランチ・ディナー別集客設計など、飲食業に特化したWebマーケティング。来店数増加の仕組みをトータルで構築します。",
  keywords: ["飲食店 MEO対策", "飲食店 集客", "飲食店 ホームページ", "飲食店 Instagram", "飲食店 口コミ", "飲食店 Googleマップ"],
  openGraph: {
    title: "【飲食店のMEO・Web集客】Googleマップ上位表示で来店数を増やす｜株式会社サイプレス",
    description: "飲食店専門のWebマーケティング。MEO・Instagram・口コミ対策で来店数を最大化します。",
    images: [{ url: "/ChatGPT Image 2026年6月14日 21_09_20 (1).png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/restaurant" },
};

const faqItems = [
  {
    q: "飲食店でMEO対策を始めるには何から着手すればいいですか？",
    a: "まずGoogleビジネスプロフィール（GBP）のオーナー確認と基本情報の整備から始めます。住所・電話番号・営業時間・定休日・メニュー・写真を完全に入力し、口コミ獲得の仕組みを設計することが最初のステップです。競合店舗の状況を分析した上で優先施策を決めると、投資対効果を最大化できます。",
  },
  {
    q: "InstagramとGoogleマップはどちらを優先すべきですか？",
    a: "「今すぐ食べたい」という即時来店にはGoogleマップ（MEO）が最も効果的です。Instagramはファン作り・リピーター育成・新メニューの告知に強みがあります。MEOで新規来客を獲得し、Instagramでリピーターを育てる組み合わせが理想的な戦略です。",
  },
  {
    q: "口コミが少ないのですが、どうやって増やせますか？",
    a: "会計時にGoogleの口コミ投稿ページに直接アクセスできるQRコードを作成し、卓上POP・レシート・名刺などに掲示する方法が最も効果的です。口コミ依頼はGoogleのガイドライン範囲内で有効です。全件返信することで新規ユーザーへの信頼度も向上します。",
  },
  {
    q: "食べログの評点が低いのですが改善できますか？",
    a: "食べログの評点は独自アルゴリズムで計算されており直接操作はできませんが、口コミの質と量を継続的に改善し、写真を更新することで評点の自然な改善を促せます。また、Google検索での自社サイト・Googleマップを強化し、食べログ以外からの集客を増やす戦略も有効です。",
  },
  {
    q: "MEO対策の効果はどのくらいで出ますか？",
    a: "GBPの基本最適化（情報整備・写真追加・初期口コミ獲得）は2〜4週間で効果が現れることがあります。安定した上位表示には3〜6ヶ月の継続的な取り組みが必要です。競合が少ないエリアや業態では早期に成果が出るケースもあります。",
  },
  {
    q: "ランチとディナーで集客の方法は変えるべきですか？",
    a: "はい。ランチは「近くのランチ」「○○駅 ランチ」という即時検索が多く、GBPのランチメニュー登録・写真充実が重要です。ディナーは「記念日 レストラン」「接待 個室」など目的・シーン検索が多く、メニューページや予約導線の設計が効果的です。ホームページでもランチとディナーを別ページに分けることを推奨します。",
  },
  {
    q: "飲食店のWebサイトはGoogleマップとどう連携させますか？",
    a: "GBPのウェブサイトリンクに自社ホームページを設定し、メニュー・予約ページへのリンクを整備することでGoogleマップからの直接予約・来店につながります。ホームページのNAP情報（店名・住所・電話）をGBPと一致させることがMEO評価向上にも重要です。",
  },
  {
    q: "テイクアウト・デリバリーの集客にもMEOは有効ですか？",
    a: "はい。GBPにテイクアウト・デリバリー対応を明記し、Uber Eats・出前館などの配達プラットフォームリンクを追加することで検索からデリバリー注文への導線を整備できます。「○○駅 テイクアウト」「○○区 弁当 配達」などの検索にも対応できます。",
  },
  {
    q: "チェーン店と個人経営で集客戦略は違いますか？",
    a: "個人経営・小規模飲食店はGoogleマップのMEO対策が特に有効です。大手チェーンに比べて地域競合が少ない場合が多く、口コミの一つひとつが「顔の見えるオーナーへの評価」として価値を持ちます。地元密着・手作り感・オーナーの個性を前面に出した集客が差別化ポイントになります。",
  },
  {
    q: "飲食店のInstagramを毎日更新するのは難しいのですが、代行してもらえますか？",
    a: "はい、サイプレスではInstagramの運用代行サービスを提供しています。料理写真の撮影ディレクション・キャプション作成・ハッシュタグ設計・投稿スケジュール管理まで一括してサポートします。まずは週3〜5投稿からスタートし、エンゲージメントを見ながら投稿頻度を調整します。",
  },
  {
    q: "食べログとGoogleマップ、どちらを優先して強化すべきですか？",
    a: "即時来店を狙うならGoogleマップを優先してください。「今日の夜ご飯」「今すぐ近くで食べたい」という検索はGoogleマップで完結するケースが増えています。食べログは「じっくり比較して予約する」層に強く、記念日・接待・特別な食事の検討段階で参照されます。まずGoogleマップのMEO対策で安定した流入を作り、その後食べログの写真・情報更新に取り組むという優先順位が効率的です。",
  },
  {
    q: "ぐるなび・ホットペッパーグルメなどの予約サイトとはどう共存すればいいですか？",
    a: "予約プラットフォームは集客の入り口として活用しつつ、自社サイトや自社LINE経由の予約比率を高める方向で戦略を設計します。プラットフォーム経由の予約には手数料が発生するため、リピーターには「次回は公式サイト・LINEからのご予約でXX円引き」といった特典を設け、自社チャネルへの誘導を促すことでコストを最適化できます。",
  },
  {
    q: "食べログ・ぐるなびへの依存から自社Web集客に移行するには？",
    a: "まず自社Googleマップ（GBP）の最適化と自社ホームページの開設を優先します。GBPに予約リンクと公式サイトリンクを設定し、Instagramのプロフィールにも公式サイトURLを掲載することで自社チャネルへの導線を整備します。比較サイト依存からの脱却は段階的に進め、自社からの予約比率が一定水準を超えたタイミングで掲載プランの見直しを検討するのが現実的です。",
  },
  {
    q: "飲食店のInstagramはどんな投稿が集客につながりますか？",
    a: "来店動機を生む投稿は「季節・限定メニューの告知」「料理のこだわり・食材のストーリー」「スタッフの日常」「お客様の笑顔・賑わいの雰囲気」の4種類です。リール動画（盛り付けの様子・厨房の風景）は拡散性が高く、フォロワー外への露出が増えます。ハッシュタグは地域タグ（#葛飾グルメ #亀有ランチ）と料理・シーンタグを組み合わせ、毎回5〜10個を設定します。",
  },
  {
    q: "「〇〇駅 イタリアン」などの地域×ジャンルSEOはどう攻略しますか？",
    a: "自社ホームページにランチページ・ディナーページ・コースページを独立させ、それぞれに「亀有 イタリアン ランチ」「葛飾区 パスタ ディナー」などの地域名と料理ジャンルを自然に組み込みます。GBPのカテゴリにも業態・ジャンルを正確に設定し、ホームページとGBPを連動させることで地域×ジャンルの検索に対応した集客体制が整います。",
  },
  {
    q: "Googleの飲食店プロフィール写真は何枚くらい登録すべきですか？",
    a: "最低30枚以上の登録を目標にし、料理・内観・外観・スタッフ・入口・メニューのカテゴリごとに5枚以上を用意することを推奨します。Googleは写真枚数が多く定期的に更新されているGBPを高く評価します。以降は週1〜2枚の継続追加で鮮度を保ちます。ユーザーが投稿した写真にも返信・いいねで反応することで、Googleからの信頼度が向上します。",
  },
  {
    q: "テイクアウト・デリバリー対応の飲食店のWeb集客の特性は？",
    a: "テイクアウト・デリバリーは「今すぐ注文したい」という即時ニーズが強いため、GBPへの対応明記・Uber Eats/出前館リンクの設定・自社サイトへのオンライン注文ページが重要です。「○○区 テイクアウト 弁当」「○○駅 近く デリバリー」などのキーワードでGBPと自社サイトの両方から検索流入を獲得する設計が効果的です。",
  },
  {
    q: "居酒屋・個室・記念日利用など宴会ニーズのSEO対策は？",
    a: "「葛飾区 居酒屋 個室」「東京 記念日 レストラン 個室」「会社の飲み会 ○○駅」などシーン特化キーワードでの検索は、予算規模が大きく成約率が高い層へのリーチになります。ホームページに宴会・個室・コース料理専用のランディングページを作成し、収容人数・最低料金・予約フォームをわかりやすく掲載することでビジネス宴会需要を取り込めます。",
  },
  {
    q: "飲食店の口コミ管理で否定的なコメントへの対応方法は？",
    a: "ネガティブな口コミへは感情的に反論せず「ご不便をおかけしました。○○の点について確認し、改善に努めます」という誠実な返信が基本です。具体的な改善内容を示すことで、第三者のユーザーに「きちんと対応する店舗」という印象を与えます。返信は24〜48時間以内を目標に行い、店舗名・担当者名を明記することで信頼性が高まります。サイプレスでは返信テンプレートの作成と代行対応も提供しています。",
  },
  {
    q: "ランチとディナーで集客施策を分けるべきですか？",
    a: "はい、ターゲット・キーワード・導線設計をランチとディナーで分けることを推奨します。ランチは「近くで手軽に食べたい」という即時ニーズが強く、GBPのランチメニュー登録と写真が重要です。ディナーは「特別な食事・記念日・接待」という目的主導の検索が多く、コース内容・雰囲気・予約導線の充実が来店決定につながります。GBP投稿も時間帯に合わせて配信します。",
  },
  {
    q: "飲食店がコンテンツSEO（レシピブログ・食材特集など）を行う意味はありますか？",
    a: "ブログ・コンテンツSEOは「今すぐ来店したい層」より「食に興味があるが店を知らない層」へのリーチに有効です。例えば「葛飾の地野菜を使った料理」「国産食材のこだわり」などの記事は、食への関心が高いユーザーを引きつけブランド認知を高めます。ただし継続的な執筆が必要なため、月1〜2本からスタートし、反応を見ながら方向性を決めることをお勧めします。",
  },
  {
    q: "口コミへの返信はどのように書けばいいですか？",
    a: "ポジティブな口コミへは「具体的な料理名や体験に触れた感謝の言葉＋次回来店への期待感」を込めた返信が効果的です。ネガティブな口コミには「事実確認・謝罰・改善への取り組み」の三点を誠実に記述し、感情的な反論は避けます。いずれも100〜150字程度で簡潔にまとめ、店名・担当者名を明記すると誠実さが伝わります。サイプレスでは口コミ返信テンプレートの作成と代行対応も行っています。",
  },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策とは", desc: "Googleマップ上位表示の基礎知識" },
  { href: "/sns/instagram", label: "Instagram運用代行", desc: "飲食店向けInstagram戦略" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金プラン" },
  { href: "/services/sns", label: "SNS運用代行サービス", desc: "Instagram・X運用の詳細" },
  { href: "/web-design/corporate-site", label: "企業サイト制作", desc: "飲食店向け企業サイトの制作" },
  { href: "/seo/local-seo", label: "ローカルSEO対策", desc: "地域検索での集客強化" },
  { href: "/cost/meo", label: "MEO対策の料金", desc: "MEO対策の費用相場" },
  { href: "/area/tokyo", label: "東京都の集客支援", desc: "東京エリア対応の集客施策" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区・亀有・金町エリア対応" },
  { href: "/area/adachi", label: "足立区の集客支援", desc: "北千住・綾瀬エリアの集客施策" },
  { href: "/area/edogawa", label: "江戸川区の集客支援", desc: "葛西・小岩エリアの集客施策" },
  { href: "/industries/local-store", label: "地域密着店舗の集客", desc: "個人店・小規模店舗向け戦略" },
  { href: "/knowledge/local-seo-guide", label: "ローカルSEO完全ガイド", desc: "地域密着SEOの進め方" },
  { href: "/knowledge/review-strategy", label: "口コミ獲得の戦略ガイド", desc: "Googleレビューを自然に集める方法" },
  { href: "/knowledge/instagram-tips", label: "Instagram集客のコツ", desc: "飲食店Instagramの投稿戦略" },
  { href: "/meo/restaurant-meo", label: "飲食店のMEO対策", desc: "飲食店特化のGoogleマップ戦略" },
  { href: "/meo/photo-posting", label: "GBP写真投稿の戦略", desc: "写真更新頻度と掲載効果の高め方" },
  { href: "/meo/google-post", label: "Googleビジネス投稿の活用法", desc: "GBP投稿で検索結果の存在感を高める" },
  { href: "/web-design", label: "ホームページ制作", desc: "飲食店向けサイト制作" },
  { href: "/web-design/contact-form", label: "予約・問い合わせフォーム設計", desc: "来店機会を逃さないフォーム最適化" },
  { href: "/area/sumida", label: "墨田区の集客支援", desc: "錦糸町・押上エリアの集客施策" },
  { href: "/industries/clinic", label: "クリニック・整骨院の集客", desc: "医療機関のWeb集客" },
  { href: "/industries/hair-salon", label: "美容室の集客", desc: "美容室・ヘアサロンの集客支援" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
];

export default function RestaurantIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://www.cypress-all.co.jp/" },
          { "@type": "ListItem", "position": 2, "name": "業種別Web集客", "item": "https://www.cypress-all.co.jp/industries" },
          { "@type": "ListItem", "position": 3, "name": "飲食店のWeb集客・MEO対策", "item": "https://www.cypress-all.co.jp/industries/restaurant" },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries" style={{ color: "#6B7280" }}>業種別Web集客</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>飲食店</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "16px" }}>
              Restaurant Marketing
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,5vw,56px)", color: "#0d1b2a", fontWeight: 900, lineHeight: 1.2, marginBottom: "24px" }}>
              飲食店のMEO対策・<br />Web集客戦略
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              飲食店の集客は「Googleマップ」「Instagram」「口コミ」の三位一体で成立します。スマートフォンで「近くのランチ」「今夜の居酒屋」と検索したユーザーが最初に目にするのはGoogleマップのローカルパック（上位3件）です。ここに表示されているかどうかが、来店数の差に直結しています。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              多くの飲食店がGoogleビジネスプロフィールを設定しただけで放置し、写真更新・口コミ返信・定期投稿・メニュー情報の整備が止まっています。これらを継続して積み重ねるだけで、競合に大きな差をつけることができます。サイプレスは飲食業の集客特性を熟知した上で、MEO・SNS・口コミ対策をトータルで支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              個人経営の小さなカフェから、複数店舗を持つ居酒屋まで、飲食店の規模・業態・立地に合わせた集客戦略を設計します。まずは現在のGoogleマップの状況と競合との比較を無料で分析します。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              食べログ・ぐるなびへの依存から自社集客への移行を目指す飲食店、開業したばかりで認知度をゼロから
              高めたい店舗など、あらゆるご状況に合わせてご提案します。
            </p>
            <div style={{ marginTop: "32px" }}>
              <Link href="/contact" style={{ display: "inline-block", background: "#0F172A", color: "#ffffff", padding: "12px 32px", fontSize: "13px", fontWeight: 600, textDecoration: "none", fontFamily: "var(--font-serif)" }}>
                無料診断を依頼する →
              </Link>
            </div>
          </div>
        </section>

        {/* Full-width image */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月14日 21_09_20 (1).png"
            alt="和食レストランのカウンター"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* 集客課題 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Challenges</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "40px" }}>
              飲食店が抱える集客課題
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "GoogleマップのGBPが未最適化のまま放置されている", b: "Googleビジネスプロフィールを登録しただけで、営業時間・定休日・メニュー・写真・属性情報が不完全なまま放置されているケースが多数あります。情報が不足しているGBPは検索順位が下がりやすく、来店判断を妨げます。競合が情報を整備するだけで順位を逆転させることができます。" },
                { n: "02", t: "口コミへの返信がなく、悪い印象を与えている", b: "口コミは返信しないことで「誠実でない店」という印象を与えてしまいます。特にネガティブな口コミに適切な返信がないと、見込み客が来店をためらいます。口コミ件数・平均評価・返信率はMEO順位にも影響するため、継続的な口コミ管理が不可欠です。" },
                { n: "03", t: "写真が少ない・古い・質が低く来店意欲を下げている", b: "GBPの写真は来店前の「下見」として機能します。写真が少ない・古い・スマートフォンで撮った暗い写真しかない状態では、ユーザーが他店を選んでしまいます。週次での写真更新と、プロクオリティの料理・内観・外観写真の充実が来店決定率を高めます。" },
                { n: "04", t: "予約システムが未整備でせっかくの来客を逃している", b: "GBPから予約できる仕組みがない・電話のみの予約対応では、特に若い世代が予約を諦めて競合店に流れます。GBPへの予約リンク設置・ぐるなびや食べログ予約との連動・LINE予約の整備が機会損失を防ぎます。" },
                { n: "05", t: "Instagramの更新が止まり、ブランドイメージが劣化している", b: "1〜2ヶ月更新が止まっているInstagramは「閉店したのでは」「やる気がない」という印象を与え、新規フォロワーを獲得できません。飲食店のInstagramは料理写真・季節メニュー・限定企画の告知として機能し、フォロワーの来店動機を継続的に高める役割があります。" },
                { n: "06", t: "ランチ・ディナーの使い分けができておらずキーワードを取りこぼしている", b: "「○○駅 ランチ」と「○○駅 居酒屋 ディナー」では検索する時間帯・目的・ユーザーがまったく異なります。GBPのランチ・ディナー別メニュー登録と、ホームページでのランチ・ディナー別ページ設計により、異なる時間帯の需要を両方取り込むことができます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", minWidth: "28px", flexShrink: 0 }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO・MEO戦略 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>SEO Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              飲食店のSEO・MEO戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                飲食店のSEO対策では、地域名×業態・シーン・特徴を組み合わせたキーワードを軸に設計します。「葛飾区 ランチ」「亀有 居酒屋 個室」「金町 カフェ テイクアウト」など購買直前のキーワードで上位を狙うことが最優先です。自社ホームページにランチメニューページ・ディナーメニューページ・コース料理ページを個別に作成し、それぞれのキーワードでインデックスされる設計が効果的です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                MEOでは口コミ評価4.0以上の維持が重要です。競合店舗が4.2の平均評価を持つ場合、3.8のままではGoogleマップのローカルパックに入ることが難しくなります。口コミ管理・定期的な写真投稿（週1〜2枚）・GBP投稿（週2回）の三本柱で継続的に評価を高めます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                具体的なキーワード例：「葛飾区 ランチ 個室」「亀有駅 和食 ディナー」「金町 居酒屋 飲み放題」「葛飾区 カフェ 勉強」「東京 飲食店 MEO」。これらのキーワードを自社サイトの各ページに自然に組み込み、GBPの説明文・投稿にも反映させることで、オーガニック検索とマップ検索の両方で集客できる体制を構築します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                株式会社サイプレスでは葛飾区・東京東部エリアを中心に飲食店の集客支援を行っています。現在のGoogleマップ・競合の状況を無料で分析し、費用対効果の高い施策からご提案します。
              </p>
            </div>
          </div>
        </section>

        {/* MEO・Googleマップ活用術 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>MEO Tips</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              飲食店のGoogleマップ活用術（MEO）
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                飲食店のMEO対策で最も重視すべきは「写真の質と更新頻度」「口コミ件数と平均評価」「GBP投稿の継続」の三点です。Googleはアクティブに更新されているGBPを高く評価します。週1〜2回の写真追加と週2回のGBP投稿（新メニュー・季節限定・イベント告知など）を継続することで、同じエリアの競合店に差をつけられます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                口コミ返信は全件行うことが鉄則です。ポジティブな口コミには感謝と次回来店を促すメッセージを、ネガティブな口コミには誠実な謝罰と改善への取り組みを返信します。適切な返信は新規ユーザーに対して「誠実な店舗」という印象を与え、来店決定率を高めます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                GBPのカテゴリ設定も重要です。メインカテゴリに「和食レストラン」「居酒屋」など最もメインとなる業態を設定し、サブカテゴリに「ランチレストラン」「テイクアウト」「個室あり」などを追加することで、複数のキーワードでの表示機会が増えます。予約リンク・電話番号・ウェブサイトリンクを必ず設定し、ユーザーが1タップで行動できる導線を整備します。
              </p>
            </div>
          </div>
        </section>

        {/* SNS・コンテンツ戦略 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>SNS Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              飲食店のSNS・コンテンツ戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                Instagramは飲食店にとって来店前の「デジタル下見」として機能します。料理写真のクオリティ・投稿頻度・ストーリーやリールの活用が来店動機の形成に直結します。特にリール動画（料理の盛り付け過程・厨房の様子・季節限定メニューの紹介）は拡散性が高く、フォロワー外への露出が増えます。毎日1投稿を目標に、ハッシュタグは地域タグ（#葛飾グルメ #亀有ランチ）と料理タグ（#和食 #ランチ定食）を組み合わせて設定します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                X（旧Twitter）は「今日のランチ」「本日の日替わり定食」など即時性の高い情報発信に向いています。食べログ・ホットペッパーグルメと連動したキャンペーン（フォロー＆リポスト企画など）はフォロワー増加と認知拡大に効果的です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                飲食店のSNS運用でもっとも重要なのは「継続性」です。2週間更新が止まっただけでフォロワーの関心が薄れ、来店動機が失われます。投稿カレンダーを作成し、月のテーマ（新メニュー月・地元食材特集月など）を決めておくと継続しやすくなります。サイプレスでは投稿計画の作成から代行運用まで一括してサポートします。
              </p>
            </div>
          </div>
        </section>

        {/* サイプレスができること */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>What We Do</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#FFFFFF", fontWeight: 800, marginBottom: "40px" }}>
              飲食店向けにサイプレスができること
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "900px" }}>
              {[
                { t: "GBP完全最適化・MEO運用", b: "Googleビジネスプロフィールの基本情報・写真・メニュー・カテゴリを整備し、週次更新・口コミ管理・投稿代行まで一括対応。ローカルパック（上位3件）への表示を目指して継続運用します。" },
                { t: "Instagram・SNS運用代行", b: "料理写真の撮影ディレクション・キャプション作成・ハッシュタグ設計・投稿スケジュール管理まで一括代行。毎日投稿のGBP投稿週2回も同時対応します。" },
                { t: "口コミ獲得フロー設計", b: "QRコードPOP・レシートへの印字・LINE送信テンプレートなど、自然に口コミを集める仕組みを設計。ネガティブ口コミへの返信テンプレートも提供します。" },
                { t: "飲食店向けホームページ制作", b: "ランチ・ディナー別ページ・予約システム連動・スマートフォン最適化・LocalBusiness Schema実装まで完備。検索とGBPの両方から来客を受け止めるサイトを構築します。" },
              ].map((item) => (
                <div key={item.t} style={{ padding: "28px", border: "1px solid rgba(196,184,154,0.3)", background: "rgba(255,255,255,0.04)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#FFFFFF", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "14px", color: "#c4b89a", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Webサイトの作り方 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Web Design</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              飲食店の選ばれるWebサイトの作り方
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                飲食店のWebサイトは「食べたい」という感情に訴えるデザインが最優先です。メインビジュアルには高品質な料理写真を使用し、ページを開いた瞬間に「ここで食べたい」と思わせるファーストインプレッションを設計します。色温度が高く（温かみのある）・明るく・料理の質感が伝わる写真選定が来店率を左右します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                情報設計は「場所・時間・価格・雰囲気・予約方法」を迷わず見つけられる構成にします。Googleマップへの埋め込み・駅からの道案内・駐車場情報をアクセスページに充実させ、「行き方がわからない」という来店障壁を取り除きます。また、スマートフォンでの操作性を最優先に、電話番号のタップ発信・予約ボタンの常時表示・メニューの見やすいレイアウトを実装します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                LocalBusiness Schema（構造化データ）の実装により、Googleの検索結果にも営業時間・評価・価格帯が表示されやすくなります。ランチページ・ディナーページ・コースページをそれぞれ独立させてSEO設計することで、複数のキーワードで検索上位を狙える構成にします。定期的なメニュー更新とブログ投稿（季節メニュー・イベント情報）を続けることで、Googleからの評価を長期的に高めていきます。
              </p>
            </div>
          </div>
        </section>

        {/* 集客フロー・実装ステップ */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Implementation</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "12px" }}>
              集客フロー・実装ステップ
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              GBP整備から安定した集客が続く状態まで、段階的に施策を積み上げていきます。各ステップを順序よく実施することで、無駄な投資を避けながら継続的な来店増加につながる仕組みを構築できます。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                {
                  n: "01",
                  t: "GBP設定・写真最適化",
                  b: "Googleビジネスプロフィールのオーナー確認を完了し、店名・住所・電話番号・営業時間・定休日・カテゴリ・属性情報をすべて正確に入力します。料理・内観・外観・入口の写真を30枚以上をまとめてアップロードし、NAP情報をホームページと完全一致させます。",
                },
                {
                  n: "02",
                  t: "食べログ・ぐるなびとの連携整理",
                  b: "食べログ・ぐるなび・ホットペッパーグルメなどのプラットフォームの掲載情報（営業時間・写真・メニュー）をGBPと一致させます。プラットフォームは集客入口として維持しつつ、手数料負担を減らすためにリピーターへの自社チャネル誘導フローを整備します。",
                },
                {
                  n: "03",
                  t: "ホームページ開設・ランチ・ディナー別ページ作成",
                  b: "ランチメニューページ・ディナーメニューページ・コース料理ページを独立させ、それぞれに地域名×業態のキーワードを自然に組み込みます。LocalBusiness Schemaの実装により、検索結果への構造化データ表示を促進し、クリック率向上につなげます。",
                },
                {
                  n: "04",
                  t: "SNS（Instagram・X）の運用開始",
                  b: "月のテーマ（新メニュー告知・地元食材特集・季節イベントなど）を決めた投稿カレンダーを作成し、週3〜5投稿を目標に運用を開始します。ハッシュタグは地域タグ・料理ジャンルタグ・シーンタグを組み合わせ、フォロワー外への露出を最大化します。",
                },
                {
                  n: "05",
                  t: "予約フォーム設置・LINE予約の整備",
                  b: "GBPからホームページへのリンク、ホームページから予約フォーム・電話・LINEへの導線を整備します。スマートフォンでの操作性を最優先に、電話タップ発信・予約ボタンの常時表示・入力項目を最小化したフォーム設計で、来店直前の機会損失をなくします。",
                },
                {
                  n: "06",
                  t: "口コミ獲得フローの整備",
                  b: "GoogleレビューページへのQRコードを作成し、卓上POP・お会計トレイ・レシートに設置します。スタッフが自然に口コミをお願いできるトークスクリプトも準備し、口コミ返信は全件24〜48時間以内を目標に行います。",
                },
                {
                  n: "07",
                  t: "コンテンツ制作（メニュー別ページ・旬の情報）",
                  b: "新メニュー・季節限定・イベント情報をGBP投稿とホームページブログの両方で配信します。「葛飾区 冬限定 鍋コース」「亀有 春の旬野菜ランチ」など旬・季節・地域を組み合わせたキーワードでの検索流入を継続的に獲得します。",
                },
                {
                  n: "08",
                  t: "定期改善・GBPインサイト月次レビュー",
                  b: "GBPインサイト（検索表示回数・ルート検索数・電話タップ数）とホームページのアクセス解析を月次でレポートします。数値を見ながら投稿内容・写真テーマ・キーワード戦略を見直し、PDCAを回すことで集客施策を継続的に改善します。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "24px", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "32px", flexShrink: 0, paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 成果を測るKPI */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>KPI</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "12px" }}>
              成果を測るKPI
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              飲食店のWebマーケティングでは、「感覚」ではなく数値で施策の効果を判断することが重要です。以下のKPIを定期的にモニタリングすることで、何が機能しているか・何を改善すべきかが明確になります。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                {
                  kpi: "GBP問い合わせ数（電話タップ・経路案内・ウェブサイトクリック）",
                  where: "Googleビジネスプロフィール インサイト",
                  desc: "「近くのランチ」「○○駅 居酒屋」などの検索でGBPが何回アクション（電話・ルート検索・サイト訪問）につながったかを示す基本KPIです。MEO施策の来客転換効果を直接測れます。",
                },
                {
                  kpi: "WEB予約数（予約フォーム・LINE・外部サイト）",
                  where: "自社予約システム / 電話記録 / Googleアナリティクス（CV計測）",
                  desc: "実際の来店予約件数はWebマーケティング全体の最終成果指標です。流入経路（GBP・Instagram・検索・食べログ等）ごとに計測することで、投資対効果の高い施策を特定できます。",
                },
                {
                  kpi: "Instagramフォロワー数・エンゲージメント率",
                  where: "Instagramインサイト",
                  desc: "フォロワーの増減はアカウントの成長性を示し、エンゲージメント率（いいね＋コメント÷リーチ数）は投稿コンテンツの共感度・来店動機の強さを評価する指標です。",
                },
                {
                  kpi: "口コミ件数・平均評価（星）",
                  where: "Googleビジネスプロフィール / 食べログ",
                  desc: "口コミの量と質はMEO順位に直接影響し、来店判断における信頼指標でもあります。月次での増加件数と評価の推移を継続的に追うことで口コミ施策の効果を把握できます。",
                },
                {
                  kpi: "ホームページへの自然検索流入数",
                  where: "Google Search Console / Googleアナリティクス",
                  desc: "「○○駅 ランチ」などの検索キーワードからどれだけホームページに訪問者が来ているかを計測し、SEO施策の効果とランディングページの改善点を把握します。",
                },
                {
                  kpi: "テーブル回転率への貢献（来客数の変化）",
                  where: "POS・予約管理システム",
                  desc: "Webマーケティング施策開始前後の来客数・売上の変化を追うことで、MEO・SNS・SEO施策が実際の営業成果にどう貢献しているかを評価できます。客単価の推移もあわせて確認します。",
                },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "24px", padding: "24px 0", borderTop: "1px solid #E8E4DC", alignItems: "flex-start" }}>
                  <div style={{ minWidth: "8px", paddingTop: "8px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#c4b89a" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "4px" }}>{item.kpi}</p>
                    <p style={{ fontSize: "12px", color: "#c4b89a", fontFamily: "var(--font-display)", letterSpacing: "0.05em", marginBottom: "8px" }}>{item.where}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスに依頼するメリット */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Why Choose Us</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#FFFFFF", fontWeight: 800, marginBottom: "48px" }}>
              サイプレスに依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "32px", maxWidth: "900px" }}>
              {[
                {
                  n: "01",
                  t: "飲食業の集客構造を理解した戦略設計",
                  b: "「即時来店×リピーター育成×口コミ拡散」という飲食店特有の集客サイクルを熟知したうえで、MEO・Instagram・ホームページを連携させた一貫した施策を設計します。食べログ・ぐるなび依存からの自社集客移行も段階的に支援します。",
                },
                {
                  n: "02",
                  t: "GBP運用・写真管理・口コミ対応を一括代行",
                  b: "週次の写真更新・GBP投稿・口コミ返信・競合分析まで、GBP運用に必要なすべての業務を代行します。飲食店オーナーが本業に集中できる環境を整えながら、Googleマップ上の評価を継続的に高めます。",
                },
                {
                  n: "03",
                  t: "Instagram運用代行で来店動機を継続的に生成",
                  b: "料理写真の撮影ディレクション・キャプション作成・ハッシュタグ設計・リール動画の企画まで一括サポートします。投稿カレンダーの設計で更新が途切れない仕組みを整備し、フォロワーの来店動機を継続的に醸成します。",
                },
                {
                  n: "04",
                  t: "MEO・SNS・ホームページをワンストップで管理",
                  b: "集客施策が複数の会社に分散すると戦略の一貫性が失われます。サイプレスではMEO対策・Instagram運用・ホームページ制作・口コミ管理をワンストップで担い、施策間の連携を最大化した効率的な来店増加体制を構築します。",
                },
              ].map((item) => (
                <div key={item.n} style={{ borderTop: "1px solid rgba(196,184,154,0.3)", paddingTop: "24px" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", display: "block", marginBottom: "12px" }}>{item.n}</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#FFFFFF", marginBottom: "10px", lineHeight: "1.5" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#9CA3AF", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "48px" }}>
              <Link href="/contact" style={{ display: "inline-block", background: "#0F172A", color: "#ffffff", padding: "14px 36px", fontSize: "14px", fontWeight: 600, textDecoration: "none", fontFamily: "var(--font-serif)" }}>
                無料相談はこちら →
              </Link>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="飲食店のWebマーケティングに関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="飲食店の集客改善をサポートします"
          body="Googleマップでの上位表示・Instagram運用・口コミ対策など、飲食店の集客に特化した施策をご提案します。現在の状況を無料で診断いたします。"
        />
      </main>
      <Footer />
    </>
  );
}

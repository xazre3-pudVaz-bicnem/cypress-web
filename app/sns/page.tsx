import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SNS集客・SNS運用代行｜Instagram・Googleビジネスプロフィールで集客を強化｜株式会社サイプレス",
  description:
    "中小企業・店舗向けのSNS集客・運用代行サービス。Instagram投稿企画・ハッシュタグ戦略・Googleビジネスプロフィール投稿・コンテンツカレンダー・写真ディレクション・SNS広告まで一貫支援。SEO・MEOと連動した集客戦略を設計します。",
  keywords: ["SNS集客", "SNS運用代行", "Instagram運用", "Googleビジネスプロフィール投稿", "SNSマーケティング", "Instagram集客"],
  openGraph: {
    title: "SNS集客・SNS運用代行｜株式会社サイプレス",
    description: "Instagram・Googleビジネスプロフィールを活用した中小企業・店舗のSNS集客を一貫支援。SEO・MEOとの統合戦略で最大の集客効果を実現。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/sns" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp" },
        { "@type": "ListItem", position: 2, name: "SNS集客・運用", item: "https://www.cypress-all.co.jp/sns" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "SNS運用代行の費用はどのくらいですか？", acceptedAnswer: { "@type": "Answer", text: "投稿頻度・プラットフォーム数・写真制作の有無によって異なります。月額費用のご案内は個別にご相談ください。まずは現状のSNS活用状況と目標をお聞かせいただき、最適なプランをご提案します。" } },
        { "@type": "Question", name: "Instagram以外のSNSにも対応していますか？", acceptedAnswer: { "@type": "Answer", text: "はい。Googleビジネスプロフィール投稿・LINE公式アカウント・X（旧Twitter）・TikTokにも対応しています。ビジネスの目標と顧客層に合わせて最適なプラットフォームを選定します。" } },
      ],
    },
  ],
};

const services = [
  { href: "/sns/instagram", label: "Instagram運用", desc: "投稿企画・ハッシュタグ選定・アナリティクス分析・フォロワー増加施策を一貫支援" },
  { href: "/sns/post-planning", label: "投稿企画・コンテンツ制作", desc: "ターゲットに刺さる投稿テーマ・文章・デザインを企画制作。継続的な発信を実現" },
  { href: "/sns/hashtag", label: "ハッシュタグ戦略", desc: "発見性を高めるハッシュタグ調査・選定・A/Bテストで露出を最大化" },
  { href: "/sns/local-sns", label: "地域SNS集客", desc: "地域ターゲットの投稿設計・位置情報タグ活用・地域ハッシュタグ戦略" },
  { href: "/sns/google-business-profile", label: "Googleビジネスプロフィール投稿", desc: "GBP投稿でMEO評価を高め、Googleマップからの来店を促進" },
  { href: "/sns/content-calendar", label: "コンテンツカレンダー", desc: "月次・週次の投稿スケジュール設計。季節・イベントを踏まえた計画的な発信" },
  { href: "/sns/photo-direction", label: "写真・動画ディレクション", desc: "SNS映えする写真撮影の指示・ライティング・アングル・加工まで一貫サポート" },
];

const industrySnsCases = [
  {
    industry: "飲食店・カフェ",
    icon: "🍽️",
    body: "料理・ドリンクの写真でフォロワーの食欲を刺激し、来店を促します。季節メニュー・限定メニューをストーリーズで告知し、予約・問い合わせにつなげます。Googleビジネスプロフィール投稿と連動させることでMEOと相乗効果を生み出します。",
  },
  {
    industry: "美容室・サロン",
    icon: "✂️",
    body: "施術ビフォーアフター・ヘアスタイル紹介でポートフォリオを蓄積。ハッシュタグ（#銀座美容室 #葛飾美容室 etc.）で地域ターゲットのリーチを拡大します。予約導線はリンク設定・コメント返信・ストーリーズのアクションリンクで最短距離で設計します。",
  },
  {
    industry: "整骨院・クリニック",
    icon: "🏥",
    body: "患者教育コンテンツ（姿勢改善・痛みのセルフケア・予防法）で専門性をアピール。医療機関のSNSは景表法・医療広告ガイドラインへの適合が必要なため、法令に沿ったコンテンツ設計を行います。予約促進よりも信頼構築を優先した運用設計をします。",
  },
  {
    industry: "学習塾・スクール",
    icon: "📚",
    body: "合格体験談・授業風景・講師紹介などで塾の雰囲気を伝え、問い合わせを促します。春・夏・冬の講習期間を中心にプロモーション強化。保護者向けのInstagram・LINE公式アカウントとの連携で情報発信の精度を高めます。",
  },
  {
    industry: "リフォーム・建設業",
    icon: "🔨",
    body: "施工事例（ビフォーアフター）でリアルな成果をビジュアルで訴求。「葛飾区 外壁塗装 事例」などのハッシュタグで地域需要にリーチします。動画コンテンツ（施工動画・職人紹介）でチームへの信頼感を高め、問い合わせ意欲を上げます。",
  },
  {
    industry: "不動産・賃貸",
    icon: "🏠",
    body: "物件写真・内見動画・おしゃれな住まい提案でフォロワーを増やします。「葛飾区 賃貸 おしゃれ」などの検索ニーズにマッチするコンテンツを継続投稿。ローカルSEOとSNSを連動させることで、地域での認知度向上と問い合わせ増加を両立します。",
  },
];

const instagramTactics = [
  { n: "01", t: "プロフィールの最適化", b: "アカウント名・プロフィール文・ハイライト・リンク設定を徹底最適化します。特にプロフィール文には「誰に・何を・どのような価値を」を明確に記載し、フォローの理由を明示します。" },
  { n: "02", t: "投稿頻度とベストタイミング", b: "フォロワーの活動時間帯に合わせた投稿スケジュールを設計します。一般的に平日12時・18〜21時が高エンゲージメントの傾向がありますが、業種・ターゲットにより最適な時間帯は異なります。アナリティクスデータで継続検証します。" },
  { n: "03", t: "ハッシュタグ戦略の設計", b: "超大手（1億件以上）・大手（100万件以上）・中規模（10万件前後）・ニッチ（1万件以下）・地域特化を組み合わせた30個のハッシュタグを設計します。毎月効果を分析して入れ替えを行います。" },
  { n: "04", t: "ストーリーズの積極活用", b: "通常投稿より閲覧率が高いストーリーズを活用し、日常・情報提供・限定情報・質問ボックスなど多様なコンテンツを配信します。ハイライトでストーリーズを常設化し、新規フォロワーへの情報提供にも活用します。" },
  { n: "05", t: "エンゲージメントの最大化", b: "コメントへの返信・いいね・フォロワーのコンテンツのシェアなど、双方向のコミュニケーションを積極的に行います。エンゲージメント率（いいね+コメント÷フィロワー数）が高いほどアルゴリズムに評価されます。" },
  { n: "06", t: "リール（Reels）動画の活用", b: "30〜90秒の縦型ショート動画は発見タブへの露出が高く、フォロワー外へのリーチ拡大に効果的です。料理・施術・Before/After・スタッフ紹介などをテンポよく見せる動画を制作します。" },
];

const gbpTactics = [
  { t: "新商品・メニューの投稿", b: "新メニュー・商品・サービスの追加を写真付きで投稿。Googleマップ上でもユーザーに最新情報が届き、来店動機を高めます。" },
  { t: "キャンペーン・特典の告知", b: "期間限定キャンペーン・セール情報をGBP投稿で告知。Googleマップ検索ユーザーに直接リーチできる低コストの集客手段です。" },
  { t: "営業時間変更・休日告知", b: "年末年始・GW・臨時休業のお知らせをGBP投稿で事前告知。ユーザーの来店空振りを防ぎ、信頼性を高めます。" },
  { t: "イベント情報の発信", b: "ワークショップ・勉強会・体験イベントをGBP投稿で告知。参加意欲のある潜在顧客へ届きやすいです。" },
];

const failurePatterns = [
  { t: "投稿が宣伝ばかりになっている", b: "「〇〇円OFF！今すぐ来店」ばかりの投稿はフォローを外される原因です。価値提供（情報・楽しさ・共感）7：宣伝3の比率を基本とし、フォロワーに役立つコンテンツを優先します。" },
  { t: "画質が低い・撮影品質が悪い", b: "スマートフォンでも設定と構図を工夫すれば高品質な写真が撮れます。ライティング・アングル・背景のノイズ除去を徹底するだけで投稿の見え方が大きく変わります。" },
  { t: "更新頻度が不安定", b: "2ヶ月投稿して1ヶ月止まる、というパターンはアルゴリズムの評価が下がります。週3〜5回の安定した投稿を最低限継続する体制を作ることが重要です。" },
  { t: "ハッシュタグを毎回同じにしている", b: "同じハッシュタグを使い続けるとスパム判定を受けるリスクがあります。投稿内容に合わせて組み合わせを変え、毎月データを分析して効果の高いものを増やします。" },
  { t: "コメント・DM対応が遅い", b: "コメントへの返信が遅いとエンゲージメント率が下がります。問い合わせDMへの24時間以内の返信体制を作り、SNSを集客・接客ツールとして機能させます。" },
  { t: "SEO・MEOとのの連携がない", b: "SNS単独で運用しているケースが多いですが、InstagramリールをYouTubeショートにも展開する、GBP投稿をWebページのSNSシェアと連動させるなどの横断活用で集客効果を最大化します。" },
];

const cypressStrengths = [
  { title: "SEO・MEOとの統合戦略", body: "SNS単体ではなく、SEO（Webサイト流入）・MEO（Googleマップ）・SNSを統合した集客設計を行います。各施策が相互に補完し合うことで、より少ないコストで大きな集客効果が得られます。" },
  { title: "業種別コンテンツ設計", body: "飲食・美容・医療・建設など業種ごとの発信ルール・ユーザー心理・効果的なコンテンツ形式を熟知しています。テンプレートではなく業種に特化した設計を行います。" },
  { title: "写真・ビジュアル品質の指導", body: "スマートフォンでも高品質に撮影できる構図・ライティング・加工方法を丁寧に指導します。「プロに撮ってもらわないとダメ」という状態から脱却し、日常的な発信を継続できる体制を構築します。" },
  { title: "データ分析と継続改善", body: "月次でアナリティクスを分析し、エンゲージメント率・リーチ数・保存数などのKPIを確認します。効果が高い投稿タイプ・ハッシュタグ・時間帯をデータで特定し、継続的に改善します。" },
];

const faqItems = [
  {
    q: "SNS運用代行をお願いした場合、どんなことをしてもらえますか？",
    a: "投稿企画（テーマ・内容の立案）・コピーライティング・ハッシュタグ選定・投稿スケジュール管理・アナリティクス分析・月次レポート提出が基本です。写真ディレクション・コメント対応・広告運用など、ご要件に応じて対応範囲を調整します。",
  },
  {
    q: "SNS運用にかかる費用の目安を教えてください。",
    a: "投稿頻度・プラットフォーム数・写真撮影の有無・広告運用の有無によって異なります。ご要件と目標をお聞かせいただき、最適なプランと費用をご提案しますので、まずは無料相談にお申し込みください。",
  },
  {
    q: "どのSNSプラットフォームに対応していますか？",
    a: "Instagram・Googleビジネスプロフィール・LINE公式アカウント・X（旧Twitter）・TikTok・FacebookPageに対応しています。お客様のターゲット層と目的に合わせて、注力すべきプラットフォームを選定します。全プラットフォームを一度に始める必要はなく、最初は1〜2媒体に絞ることをお勧めします。",
  },
  {
    q: "インスタグラムのフォロワーが増えないのはなぜですか？",
    a: "主な原因として、①投稿内容がターゲットの興味と合っていない、②投稿頻度が低い・不安定、③ハッシュタグが最適化されていない、④プロフィールがフォロー理由を伝えられていない、⑤エンゲージメント（コメント返信・他投稿へのいいね）が少ない、などが考えられます。アカウントを拝見した上で具体的な改善策をご提案します。",
  },
  {
    q: "Googleビジネスプロフィールの投稿はMEOに効果がありますか？",
    a: "はい、GBP（Googleビジネスプロフィール）への定期投稿はGoogleマップの評価に影響するとされています。週1〜2回の投稿を継続することで「アクティブなビジネス」と認識され、ローカルパック（地図上位3件）の表示向上につながる可能性があります。MEO対策の一環として投稿を継続することをお勧めします。",
  },
  {
    q: "自社でSNS担当者を置かずに運用代行だけに任せて大丈夫ですか？",
    a: "完全お任せでも運用は可能ですが、リアルな店舗・商品・スタッフの情報提供はお客様からいただく必要があります。写真素材の提供・新メニューや商品情報の連絡など、月に2〜3回の連携があれば、その他は代行側で対応します。定期的なコミュニケーションを設定してスムーズな運用体制を作ります。",
  },
  {
    q: "SNS集客はどのくらいで効果が出ますか？",
    a: "フォロワー数が増えてエンゲージメントが安定するまでに通常3〜6ヶ月かかります。ただし、Googleビジネスプロフィール投稿はより早く（1〜2ヶ月で）Googleマップ評価への影響が出ることがあります。SNSは中長期の継続投資として取り組むのが最も費用対効果の高い活用法です。",
  },
  {
    q: "SNSとSEO・MEOを一緒に依頼できますか？",
    a: "はい。サイプレスでは「SEO（検索）・MEO（地図）・SNS（ソーシャル）」の3チャネルを統合した集客設計を得意としています。それぞれを別々の会社に依頼するより、一貫した戦略で運用できるためコスト・品質・スピードすべてにメリットがあります。",
  },
  {
    q: "SNSの写真撮影も依頼できますか？",
    a: "写真ディレクション（撮影の指示・指導）には対応しています。プロフォトグラファーへの撮影手配が必要な場合は、別途パートナーカメラマンをご紹介することも可能です。スマートフォンで高品質に撮影するためのコツを指導するサービスもあります。",
  },
  {
    q: "法令に抵触しないSNS運用はできますか？",
    a: "はい。医療・美容・食品・金融などの業種では景品表示法・医療広告ガイドライン・薬機法などへの適合が必要です。業界別の法令を踏まえたコンテンツ設計を行い、リスクのある表現は事前に確認します。コンプライアンスを守った上で、最大限の効果が出る発信を設計します。",
  },
];

const relatedLinks = [
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタグラム集客の詳細" },
  { href: "/sns/post-planning", label: "投稿企画", desc: "SNSコンテンツ制作" },
  { href: "/sns/hashtag", label: "ハッシュタグ戦略", desc: "リーチ最大化のハッシュタグ" },
  { href: "/sns/google-business-profile", label: "GBP投稿", desc: "Googleマップ連動投稿" },
  { href: "/sns/local-sns", label: "地域SNS集客", desc: "地域密着型SNS戦略" },
  { href: "/meo", label: "MEO対策とは", desc: "Googleマップ上位表示" },
  { href: "/seo", label: "SEO対策とは", desc: "検索上位表示の基礎" },
  { href: "/services/sns", label: "SNS運用サービス詳細", desc: "サイプレスのSNS支援プラン" },
  { href: "/industries/restaurant", label: "飲食店のSNS集客", desc: "飲食店向けInstagram戦略" },
  { href: "/industries/hair-salon", label: "美容室のSNS集客", desc: "美容室向けInstagram戦略" },
  { href: "/industries/clinic", label: "クリニックのSNS活用", desc: "医療機関のSNS運用" },
  { href: "/area/katsushika", label: "葛飾区のSNS集客", desc: "葛飾区エリアの集客支援" },
  { href: "/area/tokyo", label: "東京のSNS集客", desc: "東京都内のSNS運用支援" },
  { href: "/knowledge/instagram-business", label: "Instagram活用ガイド", desc: "ビジネスInstagram基礎知識" },
  { href: "/cost/sns", label: "SNS運用の費用", desc: "SNS運用代行の料金目安" },
];

export default function SnsPage() {
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
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Link href="/" style={{ color: "#6b7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>SNS集客・運用</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px", textTransform: "uppercase" }}>SNS Marketing</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(30px,4.5vw,54px)", color: "#0d1b2a", fontWeight: 900, lineHeight: 1.2, marginBottom: "24px" }}>
              SNS集客・運用代行
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              Instagram・Googleビジネスプロフィールを活用した中小企業・店舗のSNS集客を一貫支援します。投稿企画・ハッシュタグ戦略・写真ディレクション・コンテンツカレンダー管理まで、SNS運用の全工程をサポートします。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              SEO（検索）・MEO（Googleマップ）・SNS（ソーシャル）の3チャネルを統合した集客設計を行います。それぞれを独立して運用するのではなく、連動させることで最大の集客効果を実現します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 20_01_28.png"
            alt="Instagram・SNS集客・SNS運用代行のイメージ"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        {/* SNSサービス一覧 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px", textTransform: "uppercase" }}>SNS Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 900, marginBottom: "12px" }}>
              SNS集客サービス一覧
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              Instagram・GBP投稿・ハッシュタグ戦略・写真ディレクションなど、SNS集客に必要なすべてのサービスを提供します。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
              {services.map((s) => (
                <Link key={s.href} href={s.href} style={{ display: "block", padding: "28px 32px", border: "1px solid #e8e4dc", background: "#fafaf8", textDecoration: "none", transition: "border-color 0.2s" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "10px" }}>{s.label}</p>
                  <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.8" }}>{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SNSが重要な理由 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px", textTransform: "uppercase" }}>Why SNS</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 900, marginBottom: "12px" }}>
              中小企業・店舗にSNS集客が重要な5つの理由
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              広告費をかけずに継続的な集客ができるSNSは、中小企業・地域店舗にとって最もコストパフォーマンスの高い集客手段の一つです。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "SEO・MEOを補完する多チャネル集客", b: "Google検索（SEO）・Googleマップ（MEO）だけでは届かない層に、SNSからアプローチできます。特にInstagramは「ビジュアルで見て行動する」若年層・女性層への集客に強く、SEO・MEOと組み合わせることで集客チャネルの多様化が実現します。" },
                { n: "02", t: "視覚コンテンツで購買決断を促す", b: "料理・施術・施工・商品の写真・動画はテキスト情報の65倍速く脳に届くとされています。Instagramなどのビジュアルプラットフォームは「見て欲しくなる」集客に最適で、来店・購買の意思決定を加速します。" },
                { n: "03", t: "ファン化・リピーター獲得につながる", b: "SNSの定期投稿によって「この店が好き・気になっている」層を長期的に育てます。フォロワーはすでに興味を持つ顕在顧客であり、リピート来店・口コミ紹介を促進する重要なコミュニティになります。" },
                { n: "04", t: "低コストで始められる継続的な集客資産", b: "リスティング広告は出稿を止めると集客が止まりますが、SNSのフォロワーは継続的に情報を受け取ってくれる資産です。投稿1回のコストは広告より大幅に低く、継続することでアカウントの価値が積み上がります。" },
                { n: "05", t: "Googleビジネスプロフィールとの連動効果", b: "GBP（Googleビジネスプロフィール）への投稿を継続することで、Googleマップ上での評価向上が期待できます。InstagramとGBPの両方を運用し、写真・イベント・最新情報を連動発信することでSNSとMEOの相乗効果が得られます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "24px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px", paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        {/* 業種別SNS活用 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px", textTransform: "uppercase" }}>By Industry</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 900, marginBottom: "12px" }}>
              業種別SNS活用事例
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              業種ごとにSNSの活用方法・効果的なコンテンツ・注意点が異なります。業種特性を踏まえた運用設計が重要です。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
              {industrySnsCases.map((c) => (
                <div key={c.industry} style={{ padding: "28px", border: "1px solid #e8e4dc", background: "#fafaf8" }}>
                  <p style={{ fontSize: "18px", marginBottom: "8px" }}>{c.icon}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "10px" }}>{c.industry}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagramで集客を強化する具体的施策 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "16px", textTransform: "uppercase" }}>Instagram Tactics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#ffffff", fontWeight: 900, marginBottom: "12px" }}>
              Instagramで集客を強化する6つの施策
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "rgba(255,255,255,0.7)", maxWidth: "640px", marginBottom: "48px" }}>
              フォロワーを増やすだけでなく、来店・問い合わせ・購買につなげるための具体的なアクション設計が重要です。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {instagramTactics.map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "24px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", minWidth: "28px", paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#ffffff", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />
            </div>
          </div>
        </section>

        {/* GBP投稿との連携 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px", textTransform: "uppercase" }}>GBP × SNS</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 900, marginBottom: "12px" }}>
              Googleビジネスプロフィール投稿との連携
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "40px" }}>
              GBP（Googleビジネスプロフィール）への投稿はMEO対策の一環として重要です。週1〜2回の投稿継続がGoogleマップ上の評価向上につながります。InstagramとGBPの両方を運用することで、SNSとMEOの相乗効果が生まれます。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px", maxWidth: "900px" }}>
              {gbpTactics.map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid #e8e4dc", background: "#ffffff" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 失敗パターン */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px", textTransform: "uppercase" }}>Common Mistakes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 900, marginBottom: "12px" }}>
              SNS運用でよくある失敗パターン
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              多くの中小企業がSNS運用で陥る失敗パターンを把握し、同じ轍を踏まないようにしましょう。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {failurePatterns.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "24px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px", paddingTop: "2px" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        {/* サイプレスの強み */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px", textTransform: "uppercase" }}>Our Strengths</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 900, marginBottom: "40px" }}>
              サイプレスのSNS支援の特徴
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
              {cypressStrengths.map((s, i) => (
                <div key={i} style={{ padding: "32px", border: "1px solid #e8e4dc", background: "#ffffff" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "12px" }}>{s.title}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 対応プラットフォーム */}
        <section style={{ background: "#ffffff", padding: "60px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px", textTransform: "uppercase" }}>Platforms</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "32px" }}>
              対応SNSプラットフォーム
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {["Instagram", "Googleビジネスプロフィール（GBP）", "LINE公式アカウント", "X（旧Twitter）", "Facebook Page", "TikTok", "YouTube Shorts"].map((platform) => (
                <span key={platform} style={{ padding: "8px 20px", border: "1px solid #e8e4dc", fontSize: "13px", color: "#374151", background: "#fafaf8" }}>
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="SNS集客・運用代行についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="SNS集客・運用代行のご相談"
          body="Instagram・Googleビジネスプロフィールを活用した集客戦略をご相談ください。SEO・MEOとの統合戦略でより大きな成果を実現します。"
        />
      </main>
      <Footer />
    </>
  );
}

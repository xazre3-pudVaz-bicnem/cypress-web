import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SNS運用・SNSマーケティングサービス｜Instagram・X・LINE活用で集客｜株式会社サイプレス",
  description:
    "株式会社サイプレスのSNS運用サービス。Instagram・X（Twitter）・LINE・TikTokの運用代行・コンテンツ制作・広告支援で集客とブランディングを強化。東京都葛飾区を拠点に全国対応。",
  keywords: ["SNS運用", "SNSマーケティング", "Instagram運用", "SNS代行", "LINE公式アカウント", "TikTok運用"],
  openGraph: {
    title: "SNS運用・SNSマーケティングサービス｜Instagram・X・LINE活用で集客｜株式会社サイプレス",
    description: "サイプレスのSNS運用サービス。Instagram・X・LINE・TikTokの運用代行と広告支援。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services/sns" },
};

const faqItems = [
  {
    q: "SNS運用代行ではどんなことをやってもらえますか？",
    a: "投稿テキスト・画像・リール（動画）の制作、ハッシュタグ設定、投稿スケジュール管理、コメント・DM返信の管理支援、インサイト分析・月次レポートなどを代行します。プラットフォーム（Instagram・X・LINE・TikTok）と運用範囲はご要件に応じてプランを設計します。",
  },
  {
    q: "どのSNSに注力すればいいですか？",
    a: "業種・ターゲット年齢層・目的によって異なります。飲食・美容・ライフスタイル系は写真・動画重視のInstagramやTikTok、BtoB・情報発信はX（Twitter）、既存顧客とのコミュニケーション・予約はLINE公式アカウントが向いています。まずはターゲット層が最も使っているプラットフォームに絞ることをお勧めします。",
  },
  {
    q: "投稿の写真・動画撮影は依頼できますか？",
    a: "基本的なコンテンツ（文字入り画像・簡易動画）はサイプレスで制作可能です。店内・商品・スタッフが登場する本格的な写真・動画撮影は外部カメラマン・映像制作者との連携になります。素材をご提供いただければ編集・加工から対応します。",
  },
  {
    q: "フォロワーはどのくらいで増えますか？",
    a: "フォロワー数は業種・コンテンツ品質・投稿頻度・ハッシュタグ戦略・広告活用の有無によって大きく異なります。フォロワー数より「来店・問い合わせ・売上」といった実際のビジネス効果を重視した運用をご提案します。フォロワー数の急増を約束するサービスは行っておりません。",
  },
  {
    q: "LINE公式アカウントの活用支援もできますか？",
    a: "はい。LINE公式アカウントの開設・初期設定・リッチメニュー設計・定期配信メッセージの作成・友だち追加促進の導線設計まで対応します。予約や問い合わせ窓口としてのLINE活用、既存顧客へのリテンション施策としての活用もご支援します。",
  },
  {
    q: "SNS広告（Meta広告・LINE広告）も依頼できますか？",
    a: "はい、Instagram・Facebookを対象とするMeta広告、LINE広告の設定・運用代行に対応しています。ターゲット設定・クリエイティブ制作・予算配分・効果計測まで一貫してご支援します。",
  },
  {
    q: "既にSNSを運用しているが伸び悩んでいる。改善してもらえますか？",
    a: "はい。現在の運用状況（インサイトデータ・投稿内容・ハッシュタグ・フォロワー属性）を診断し、改善ポイントをご提案します。競合アカウントの分析・バズったコンテンツの傾向分析もあわせて実施します。",
  },
  {
    q: "SEO対策やMEO対策と組み合わせてお願いできますか？",
    a: "はい、SNS運用をSEO・MEO・Web制作と組み合わせた統合的なWebマーケティング支援が可能です。Webサイトへの流入増加・MEO対策との連携・ブランド認知向上をトータルで設計します。",
  },
  {
    q: "SNS運用にかかる費用はどのくらいですか？",
    a: "プラットフォーム数・投稿頻度・広告有無・撮影の要否によって費用は変わります。月額費用・スポット対応・広告運用費込みのパッケージなどご要望に応じてプランを設計しますので、まずはお問い合わせください。",
  },
  {
    q: "コンテンツのトンマナはどう決めますか？",
    a: "ヒアリングでブランドカラー・ターゲット・世界観・競合との差別化軸を確認し、投稿デザインのガイドラインを作成します。既存のブランドガイドラインがある場合はそれに従い制作します。",
  },
  {
    q: "投稿頻度はどのくらいがいいですか？",
    a: "Instagramはフィード週3〜5投稿＋ストーリーズ毎日が目安です。TikTokは週5〜7本の縦型動画が推奨されます。X（Twitter）は毎日1〜3投稿が基本です。アルゴリズムは継続的な投稿を評価するため、無理なく続けられる頻度で設計することが重要です。",
  },
  {
    q: "リールやショート動画の制作は対応していますか？",
    a: "はい。素材（写真・動画クリップ）をご提供いただければ、テキスト・BGM・テロップ・エフェクトを組み合わせたリール・TikTok動画の編集・制作に対応しています。撮影ディレクションも合わせてご依頼いただけます。",
  },
  {
    q: "ハッシュタグはどのように選定しますか？",
    a: "業種・地域・コンテンツ内容・ターゲット年齢層に合わせて、大・中・小規模のハッシュタグを組み合わせた戦略を設計します。競合が使用しているハッシュタグの分析も行い、リーチ拡大に効果的なタグセットを月次で見直します。",
  },
  {
    q: "インサイトデータはどのように報告してもらえますか？",
    a: "毎月、フォロワー増減・リーチ数・エンゲージメント率・プロフィールアクセス数・ウェブサイトタップ数・SNS経由問い合わせ数を集計したレポートをご提供します。前月比・改善ポイント・翌月の施策方針をセットでお伝えします。",
  },
  {
    q: "TikTokの運用支援も対応していますか？",
    a: "はい、TikTokアカウントの開設・プロフィール設定・コンテンツ設計・動画制作・ハッシュタグ戦略・インサイト分析まで対応しています。若年層リーチや飲食・美容・エンタメ系ブランドの認知拡大に特に効果的です。",
  },
  {
    q: "コメントやDMの返信は代行してもらえますか？",
    a: "はい、対応方針をお客様と事前に決めた上で、コメントへの返信・DMの一次対応を代行します。クレームや個別問い合わせはお客様にエスカレーションするフローを設計しますので、ご安心ください。",
  },
  {
    q: "複数のSNSをまとめて依頼することはできますか？",
    a: "はい、Instagram・X・LINE・TikTokを組み合わせたマルチプラットフォーム運用代行に対応しています。各プラットフォームの特性に合わせてコンテンツを最適化しながら、ブランドの一貫性を保った運用設計を行います。",
  },
  {
    q: "SNS運用を途中から引き継いでもらうことはできますか？",
    a: "はい、既存アカウントからの引き継ぎに対応しています。現在のアカウント状況・過去の投稿・インサイトデータを診断し、改善すべき点を整理した上で運用を引き継ぎます。アカウントの権限移管手順もサポートします。",
  },
  {
    q: "地方の企業でも依頼できますか？",
    a: "はい、サイプレスは東京都葛飾区を拠点としていますが、全国のクライアントに対応しています。オンラインでのヒアリング・戦略設計・レポート報告が可能ですので、エリアを問わずご相談ください。",
  },
  {
    q: "SNS運用代行を始めるまでどのくらいかかりますか？",
    a: "お問い合わせから戦略設計・コンテンツ制作・投稿開始まで、一般的に2〜4週間が目安です。アカウント診断→競合調査→戦略策定→コンセプト確認→コンテンツカレンダー作成という手順で丁寧に準備を進めます。",
  },
];

const relatedLinks = [
  { href: "/sns", label: "SNSマーケティングとは", desc: "SNS活用の基礎知識" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索からの集客強化" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップからの集客" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索での引用獲得" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "SNSからの流入先ページ設計" },
  { href: "/services/content", label: "コンテンツ制作サービス", desc: "SNS投稿・記事制作" },
  { href: "/cost/sns", label: "SNS運用の費用", desc: "料金プランと相場" },
  { href: "/industries/restaurant", label: "飲食店のSNS活用", desc: "飲食店向けInstagram運用" },
  { href: "/industries/beauty", label: "美容室・サロンのSNS活用", desc: "サロン向けSNS集客" },
  { href: "/industries/dental", label: "歯科・クリニックのSNS活用", desc: "医療機関のSNS運用" },
  { href: "/industries/construction", label: "建設・リフォームのSNS活用", desc: "施工事例の発信" },
  { href: "/industries/ec", label: "EC・小売のSNS活用", desc: "商品紹介・購買誘導" },
  { href: "/industries/school", label: "学習塾のSNS活用", desc: "合格実績・授業の発信" },
  { href: "/industries/real-estate", label: "不動産のSNS活用", desc: "物件・街情報の発信" },
  { href: "/industries/fitness", label: "フィットネス・スポーツのSNS活用", desc: "トレーニング動画・会員の声" },
  { href: "/knowledge/instagram-strategy", label: "Instagram運用ガイド", desc: "フォロワー増加と集客の方法" },
  { href: "/knowledge/line-official", label: "LINE公式アカウント活用", desc: "既存顧客へのリテンション施策" },
  { href: "/knowledge/tiktok-business", label: "TikTokビジネス活用ガイド", desc: "短尺動画で認知拡大" },
  { href: "/knowledge/meta-ads", label: "Meta広告（Instagram・Facebook広告）", desc: "SNS広告の基礎と運用" },
  { href: "/checklist/sns", label: "SNS運用チェックリスト", desc: "運用改善の確認項目" },
  { href: "/column/sns", label: "SNSコラム", desc: "SNSマーケティングの最新情報" },
  { href: "/area/tokyo", label: "東京のSNS運用支援", desc: "東京エリアの対応" },
  { href: "/area/katsushika", label: "葛飾区のSNS支援", desc: "地元密着の対応" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
];

export default function ServicesSnsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/services" style={{ color: "#6B7280" }} className="hover:underline">サービス</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>SNS運用</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>SNS Marketing Service</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SNS運用サービス
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              株式会社サイプレスのSNS運用サービスは、Instagram・X（Twitter）・LINE・TikTokの運用代行・コンテンツ制作・広告支援を通じて、集客とブランディングを強化します。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-8" style={{ color: "#374151" }}>
              フォロワー数を増やすことよりも、実際の来店・問い合わせ・売上につながるSNS活用を重視した運用設計を行います。SEO・MEOと組み合わせた統合的なWebマーケティング支援も可能です。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ background: "#0F172A", color: "#FFFFFF" }}>
                無料相談・お問い合わせ
              </Link>
              <Link href="/cost/sns" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ border: "1.5px solid #D1D5DB", color: "#374151" }}>
                料金・プランを見る
              </Link>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section className="relative" style={{ height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 20_07_36.jpg" alt="SNS運用・Instagram・LINE公式アカウント・TikTok活用のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-4">
              {[
                "SNS運用代行で実際にどのような業務を代わりに行うかの全体像",
                "Instagram・X・LINE・TikTok各プラットフォームの特性と業種別の最適な選び方",
                "フォロワーが増えない・問い合わせに繋がらないよくある課題とその根本原因",
                "飲食・美容・建設など業種ごとのSNS活用で押さえるべき具体的なポイント",
                "初回相談から月次改善サイクルまでのサポートの流れとステップ",
                "SNS運用の成果を測るための7つの指標と確認方法",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 font-bold text-[15px]" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サービス内容 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Service Details</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SNS運用サービスの内容
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "SNS戦略設計", body: "ビジネス目標・ターゲット・競合アカウント分析を踏まえ、どのプラットフォームに何のコンテンツを投稿するかの運用戦略を設計します。" },
                { title: "コンテンツ制作・投稿代行", body: "投稿テキスト・画像・リール・ストーリーズの制作と、スケジュールに従った投稿を代行します。ブランドトーンを統一した品質のコンテンツを継続制作します。" },
                { title: "ハッシュタグ戦略", body: "業種・地域・コンテンツに合わせた効果的なハッシュタグを選定します。リーチ拡大に向けて定期的に見直しを行います。" },
                { title: "LINE公式アカウント支援", body: "LINE公式アカウントの初期設定・リッチメニュー設計・配信メッセージ作成・友だち追加促進の導線設計を行います。" },
                { title: "SNS広告（Meta広告・LINE広告）", body: "ターゲット設定・クリエイティブ制作・予算管理・効果計測・改善を行うSNS広告の運用代行です。" },
                { title: "インサイト分析・月次レポート", body: "フォロワー数・リーチ・インプレッション・エンゲージメント率・プロフィールアクセス数などのインサイトデータを毎月分析してレポートします。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* SNS集客が重要な理由 */}
        <section className="py-20" style={{ background: "#0d1b2a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Why SNS Matters</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>
              SNS集客が重要な理由｜今の検索行動の変化
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "ユーザーの情報収集がSNS中心に", body: "若い世代を中心に、GoogleよりInstagramやTikTokで情報を探す行動が広まっています。SNSは検索エンジンの代替として機能し始めており、SNS上での存在感が集客を左右します。" },
                { title: "飲食・美容・ファッション分野のSNS依存度", body: "「来店のきっかけ」としてInstagramを挙げる消費者が増えています。SEOよりも購買決定に近い位置にあり、SNSは今や集客の最前線です。" },
                { title: "UGC（ユーザー生成コンテンツ）の信頼性", body: "企業の広告より、実際のユーザー投稿・口コミが購買判断に影響しやすい傾向があります。UGCを生み出す仕組みをSNS運用の中に設計することで、自然な口コミ拡散を促せます。" },
                { title: "SNS×MEO×SEOの相乗効果", body: "SNSで認知→Googleマップで評価確認→予約・来店という導線が一般化しています。SNS単体ではなく、MEO・SEOと連動させることで集客効果が高まります。" },
              ].map((item, i) => (
                <div key={i} className="p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <p className="font-bold text-[15px] mb-3" style={{ color: "#FFFFFF" }}>{item.title}</p>
                  <p className="text-[13px] leading-[1.9]" style={{ color: "#9CA3AF" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Challenges</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "SNSを始めたが更新が止まっている", body: "担当者の業務負荷が高く、SNSに割ける時間が確保できないことが主因です。更新が止まるとアルゴリズムの評価が下がり、リーチが急激に低下します。運用代行で継続性を担保することが最初の一手です。" },
                { title: "フォロワーが増えない", body: "コンテンツの質・ハッシュタグ戦略・投稿頻度・アカウントの世界観の一貫性のいずれかが最適化されていないケースが多いです。競合アカウントの分析とコンテンツ設計の見直しが必要です。" },
                { title: "投稿しているが問い合わせに繋がらない", body: "フォロワーに「見てもらう」段階で止まっており、プロフィールへのアクセス→ウェブサイトタップ→問い合わせという導線が設計されていないことが原因です。プロフィール設計とリンク先の最適化が必要です。" },
                { title: "担当者が辞めてSNSが止まった", body: "SNS運用が属人化しており、引き継ぎドキュメントがない状態で運用が途絶するケースは多く見られます。外部代行に切り替えることで人材リスクを解消し、安定した運用体制を構築できます。" },
                { title: "何を投稿すればいいか分からない", body: "ターゲット・ブランドコンセプト・競合との差別化軸が定まっていないと、投稿アイデアが尽きてしまいます。コンテンツカレンダーの設計と投稿テーマの体系化で長期的に投稿し続けられる仕組みを作ります。" },
                { title: "写真の質が低い", body: "スマートフォンで撮影した品質の低い写真はブランドイメージを損なう場合があります。撮影ディレクションによるライティング・構図の改善、またはストック素材の活用で視覚的な訴求力を高めることが可能です。" },
                { title: "ハッシュタグの使い方が分からない", body: "闇雲に人気ハッシュタグを並べても、大量の投稿に埋もれてリーチが得られません。業種・地域・コンテンツに合わせた大・中・小規模タグの組み合わせ戦略で適切なターゲット層へのリーチを設計します。" },
                { title: "競合のSNSが活発で差をつけられている", body: "競合との差がつく前に対策を打つことが重要です。競合アカウントの投稿頻度・エンゲージメント率・使用ハッシュタグを分析し、追い上げるための差別化コンテンツ戦略を策定します。" },
                { title: "SNS運用の費用対効果が見えない", body: "フォロワー数や投稿数だけを追いかけていると、ビジネス貢献度が測りにくいです。SNS経由の問い合わせ数・ウェブサイトタップ数・エンゲージメント率など具体的なKPIを設定し、月次レポートで可視化します。" },
                { title: "複数SNSの管理が大変", body: "Instagram・X・LINE・TikTokをそれぞれ個別に運用すると工数が膨大になります。各プラットフォームの特性に合わせてコンテンツを最適化しながら効率よく管理するマルチプラットフォーム運用設計でリソースを最適化します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* プラットフォーム別活用ガイド */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Platform Guide</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              プラットフォーム別 活用ガイド
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { num: "01", platform: "Instagram", target: "飲食・美容・ライフスタイル", body: "写真・リール中心のビジュアルコンテンツが強み。来店前の情報収集として活用されやすく、飲食・美容・ファッション・インテリアなど「見た目」で価値が伝わる業種に最適。" },
                { num: "02", platform: "X（Twitter）", target: "情報発信・ニュース・BtoB", body: "テキスト・リンク中心のリアルタイム情報発信に強い。BtoB企業・専門家・メディアとの繋がりを作りやすく、業界知識の発信でブランディングを高める用途に向いている。" },
                { num: "03", platform: "LINE公式アカウント", target: "既存顧客へのリテンション", body: "クーポン・予約・お知らせ配信に強く、友だち登録した既存顧客への継続的なコミュニケーションに最適。開封率がメールより高く、来店・再購入促進の導線として機能する。" },
                { num: "04", platform: "TikTok", target: "若年層・エンタメ・飲食", body: "縦型短尺動画でバズりやすいアルゴリズム。フォロワーゼロでも良質なコンテンツで拡散される可能性があり、若年層へのリーチや飲食店・エンタメ系のブランド認知拡大に有効。" },
              ].map((item) => (
                <div key={item.num} className="flex gap-6 py-7" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <p className="font-bold text-[15px]" style={{ color: "#0d1b2a" }}>{item.platform}</p>
                      <span className="text-[11px] px-2 py-0.5" style={{ background: "#E8E4DC", color: "#374151" }}>{item.target}</span>
                    </div>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section C: 業種別の支援ポイント */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Industry Focus</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の支援ポイント
            </h2>
            <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
              {[
                { industry: "飲食店", body: "日替わりメニュー・料理写真・厨房の様子・スタッフの顔が見える投稿がエンゲージメントを高めます。Instagramリールで「仕込みの様子」や「盛り付け動画」を発信し、来店意欲を刺激するコンテンツ設計を行います。" },
                { industry: "美容室・サロン", body: "施術のビフォーアフター・スタイリスト紹介・ヘアカラー見本がInstagramで高いリーチを生みます。予約導線をプロフィールリンクに設置し、フォロワーを予約へ転換する仕組みを整えます。" },
                { industry: "歯科・クリニック", body: "予防歯科・審美歯科の情報投稿・院内の清潔感を伝える写真・スタッフの笑顔紹介が信頼構築に有効です。患者が不安を感じやすい処置についての解説コンテンツで受診ハードルを下げます。" },
                { industry: "建設・リフォーム", body: "施工事例のビフォーアフターはInstagram・TikTokで高い反応を得やすいコンテンツです。現場写真・職人の技術・素材選びのこだわりを発信することで信頼性と専門性を同時に訴求します。" },
                { industry: "小売・EC", body: "商品の使用シーン・着用写真・開封動画がSNSでの購買意欲を高めます。UGC（お客様の投稿）をリポストする仕組みを設計し、商品の信頼性と口コミ効果を増幅させます。" },
                { industry: "学習塾", body: "合格実績・授業の雰囲気・講師の人柄紹介が保護者と生徒の安心感に繋がります。季節の受験情報・学習のコツ投稿でフォロワーに役立つコンテンツを継続的に発信します。" },
                { industry: "不動産", body: "物件紹介動画・街歩き動画・引っ越し事例のインタビューがSNSで反応を得やすいコンテンツです。地域密着の情報発信でエリア専門家としてのブランドを構築し、問い合わせ前の信頼形成を図ります。" },
                { industry: "フィットネス・スポーツ", body: "トレーニング動画・食事アドバイス・会員の変化ビフォーアフターがInstagram・TikTokで高エンゲージメントを生みます。コーチの専門性を前面に出したコンテンツで入会検討層へのアプローチを強化します。" },
              ].map((item) => (
                <div key={item.industry} className="p-6" style={{ border: "1px solid #E8E4DC" }}>
                  <p className="font-bold text-[13px] mb-3" style={{ color: "#c4b89a" }}>{item.industry}</p>
                  <p className="text-[14px] leading-[1.8]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: ご支援の流れ */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Our Process</p>
            <h2 className="font-black text-[26px] mb-12" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ご支援の流れ
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "無料相談", body: "現在のSNS活用状況・課題・目標・ターゲット・ご予算をヒアリングします。初回相談は完全無料で、最適なプラットフォーム選択と運用方針の方向性をご提示します。" },
                { title: "SNSアカウント診断", body: "既存アカウントがある場合は、フォロワー属性・エンゲージメント率・投稿内容・ハッシュタグ・プロフィール設計を診断します。改善すべき優先項目を明確にした診断レポートを作成します。" },
                { title: "競合調査", body: "同業種・同エリアの競合アカウントのフォロワー数・投稿頻度・エンゲージメント・コンテンツ傾向を調査します。競合との差別化ポイントを特定し、追い上げる戦略の根拠とします。" },
                { title: "運用戦略策定", body: "ビジネス目標・ターゲット属性・競合調査の結果をもとに、プラットフォーム別の運用方針・コンテンツ方向性・KPI設計を含む戦略ドキュメントを作成します。" },
                { title: "コンセプト・ターゲット設定", body: "アカウントのブランドコンセプト・ビジュアルトンマナ・投稿テーマの軸を確定します。一貫性のある世界観がフォロワーの信頼感と記憶定着に直結するため、この工程を丁寧に設計します。" },
                { title: "コンテンツカレンダー作成", body: "1ヶ月分の投稿テーマ・投稿日時・担当プラットフォームをまとめたコンテンツカレンダーを作成します。季節・イベント・業種の繁忙期を考慮した計画でネタ切れを防ぎます。" },
                { title: "撮影ディレクション", body: "店内・商品・スタッフ・施工事例など、SNS投稿に必要な写真・動画の撮影をディレクションします。構図・ライティング・表情などの具体的な指示で素材の質を高めます。" },
                { title: "投稿・ハッシュタグ最適化", body: "作成したコンテンツカレンダーに従い、テキスト・画像・動画・ハッシュタグを設定して投稿を実施します。最適な投稿時間帯への配信スケジュール管理も行います。" },
                { title: "エンゲージメント管理", body: "コメントへの返信・フォロワーとの交流・DM一次対応を管理します。アルゴリズムはエンゲージメントの高いアカウントを優先的に表示するため、丁寧なコミュニティ管理が重要です。" },
                { title: "月次レポート・改善提案", body: "フォロワー増減・エンゲージメント率・リーチ・ウェブサイトタップ・問い合わせ数を集計した月次レポートを提供します。前月比と改善提案をセットでお伝えし、翌月の運用に反映します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* SNS運用で避けるべき失敗 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Mistakes</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SNS運用で避けるべき5つの失敗
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                "フォロワー数だけ追いかけてCV導線を作らない",
                "投稿頻度が不安定でアルゴリズムに評価されない",
                "「商品紹介だけ」の一方的な投稿でエンゲージメントが低い",
                "業種・ターゲットに合わないプラットフォームを選んでいる",
                "インサイトデータを見ずに改善できていない",
              ].map((text, i) => (
                <div key={i} className="flex gap-5 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold"
                    style={{ background: "#FEE2E2", color: "#DC2626", minWidth: "24px", minHeight: "24px" }}
                  >
                    ✕
                  </span>
                  <p className="text-[14px] leading-[1.8] pt-0.5" style={{ color: "#374151" }}>{text}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPI Metrics</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { kpi: "フォロワー数増加数", where: "Instagram・X・TikTokそれぞれのインサイトで月次の増減を確認します。絶対数より増加率と質（ターゲット属性との一致度）を重視して評価します。" },
                { kpi: "エンゲージメント率", where: "（いいね+コメント+保存+シェア）÷リーチ数で算出します。Instagramインサイトで投稿ごとに確認でき、コンテンツの質を評価する最重要指標です。" },
                { kpi: "リーチ数", where: "投稿が何人のユーザーに表示されたかを示します。ハッシュタグ戦略・投稿時間・リール活用の効果が直接反映される指標で、インサイトから週次・月次で確認します。" },
                { kpi: "プロフィールアクセス数", where: "投稿を見たユーザーがプロフィールを訪問した回数です。Instagramインサイトで確認でき、フォロワーへの転換意欲とウェブサイトタップの前段指標として追跡します。" },
                { kpi: "ウェブサイトタップ数", where: "プロフィールのリンクからウェブサイトへ遷移した回数です。InstagramインサイトおよびGoogle Analytics 4のSNS流入チャネルで確認し、SNSからの集客効果を直接測定します。" },
                { kpi: "SNS経由問い合わせ数", where: "Google Analytics 4でSNSチャネルからのコンバージョン数を計測します。問い合わせフォームのUTMパラメータ設定でSNS別の貢献度を可視化します。" },
                { kpi: "月次投稿数", where: "計画通りの投稿頻度が維持されているかを確認します。投稿数の安定はアルゴリズム評価と継続的なリーチ獲得の基盤であり、代行の運用品質指標として月次レポートに含めます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.kpi}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.where}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="SNS運用サービスについてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="SNS運用サービスの無料相談"
          body="現在のSNS活用状況をお聞きし、最適な運用戦略をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}

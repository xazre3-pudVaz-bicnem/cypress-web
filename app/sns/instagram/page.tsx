import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Instagram運用代行｜ビジュアル戦略・リール活用で集客するインスタ運用法｜株式会社サイプレス",
  description: "中小企業・店舗のInstagram運用代行。フィード設計・リール活用・ストーリーズ・ハッシュタグ戦略・インサイト分析でInstagramを集客エンジンに変えます。",
  keywords: ["Instagram運用代行", "インスタ集客", "SNS運用", "リール活用", "Instagram マーケティング", "フィード設計"],
  openGraph: {
    title: "Instagram運用代行｜ビジュアル戦略・リール活用で集客するインスタ運用法｜株式会社サイプレス",
    description: "中小企業・店舗のInstagram運用代行。フィード設計・リール活用・ストーリーズ・ハッシュタグ戦略・インサイト分析でInstagramを集客エンジンに変えます。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_21_48.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/sns/instagram" },
};

const faqItems = [
  { q: "Instagramはどんな業種に向いていますか？", a: "飲食店・美容室・ネイル・エステ・小売店・ファッション・インテリア・不動産など、視覚的に魅力を伝えやすい業種に特に向いています。before&after・商品写真・店内雰囲気が効果的なコンテンツです。" },
  { q: "Instagram運用でフォロワーはどのくらい増えますか？", a: "業種・エリア・投稿頻度・コンテンツ品質によって大きく異なります。月30〜100フォロワーが最初の目安ですが、集客の目標はフォロワー数よりもプロフィール訪問・DM・リンククリック数です。" },
  { q: "Instagramの投稿頻度はどのくらいがいいですか？", a: "週3〜5投稿が理想的です。無理なく継続できる頻度を優先し、品質を保つことが重要です。ストーリーズは毎日・フィードは週3〜5投稿の組み合わせが効果的です。" },
  { q: "Instagram運用の費用はどのくらいですか？", a: "月額3〜8万円程度が一般的な相場です。投稿数・写真撮影の有無・ライティング・分析レポートの内容によって変わります。コンテンツ企画のみ・運用代行すべて込みなど柔軟にご相談ください。" },
  { q: "Instagramから来店・問い合わせにつながりますか？", a: "はい。プロフィールのURL・DMへの誘導・電話番号の掲載・適切な導線設計で来店・問い合わせにつなげることができます。インサイトでウェブサイトタップ数を計測し改善します。" },
  { q: "リール動画を作っていないと損ですか？", a: "リールはInstagramが最も拡散させるフォーマットです。フォロワー外へのリーチが通常の静止画投稿の数倍になることがあり、リールを使わないと新規リーチの大部分を逃しています。月2〜4本から始めることをお勧めします。" },
  { q: "フィードの統一感はなぜ大切ですか？", a: "プロフィールページを見た時の第一印象がフォローするかどうかの判断に直結します。カラートーン・フォント・構図を統一することでブランドの世界観が伝わり、フォロー率が上がります。" },
  { q: "ストーリーズとフィード投稿はどう使い分けますか？", a: "フィード投稿はブランドイメージを積み重ねるアーカイブ的な役割、ストーリーズは日常の近況・限定情報・インタラクティブなコミュニケーションに向いています。両方を組み合わせることでエンゲージメントが高まります。" },
  { q: "プロフィールの最適化はどこから始めればいいですか？", a: "アイコン（ブランドロゴまたは顔写真）・ユーザーネーム（検索されやすいキーワードを含む）・プロフィール文（何をする誰か・特徴・CTA）・ハイライト（代表コンテンツを固定）の4点から着手します。" },
  { q: "写真の品質を上げるためのポイントは何ですか？", a: "明るさ・構図・色調の統一が基本です。自然光またはリングライトを活用し、背景をシンプルにするだけで大幅に品質が上がります。編集アプリで明度・コントラスト・彩度を統一するフィルターを作ることをお勧めします。" },
  { q: "キャプションはどのくらいの長さが適切ですか？", a: "「続きを読む」が表示される125文字以内に重要情報を盛り込み、詳細をその後に展開する構成が効果的です。共感・疑問・行動を促す言葉で始めることでエンゲージメント率が上がります。" },
  { q: "Instagramの集客効果をどう測りますか？", a: "プロフィールアクセス数・ウェブサイトタップ数・DM数・リンクのクリック数をKPIとして設定します。フォロワー数だけを見ていても集客への貢献は分かりません。インサイトの月次確認が必要です。" },
  { q: "Instagram広告と通常投稿はどう使い分けますか？", a: "通常投稿はブランド構築・エンゲージメント蓄積・オーガニックリーチが目的、広告は特定のキャンペーン・期間限定オファー・ターゲット拡大に適しています。まずオーガニックで世界観を作り、広告で増幅させる順序がお勧めです。" },
  { q: "競合のInstagramアカウントはどう分析すればいいですか？", a: "投稿頻度・フォロワー数推移・エンゲージメント率・使用タグ・コンテンツカテゴリを観察します。エンゲージメント率の高い投稿の共通点を分析し、自社で取り入れられる要素を特定することが重要です。" },
  { q: "リールの長さはどのくらいが適切ですか？", a: "15〜30秒が最も視聴完了率が高いとされています。冒頭3秒でスクロールを止めるフックが重要です。情報量が多い場合は60秒まで伸ばすことができますが、テンポを落とさないことが条件です。" },
  { q: "ハイライトにはどんな内容を入れればいいですか？", a: "「メニュー/サービス」「お客様の声・事例」「スタッフ紹介」「アクセス・営業時間」「よくある質問」の5カテゴリが基本です。プロフィールを訪問したユーザーの疑問を即座に解消できる構成にします。" },
  { q: "Instagramで口コミ・UGCを集める方法はありますか？", a: "ブランドタグを作成してプロフィールに明記し、来店客に使ってもらうよう促します。UGCをリポスト（許可の上）することで投稿者も喜びさらに拡散します。レビュー・感想を促すキャプション文章も有効です。" },
  { q: "Instagramを運用する時間がない場合はどうすればいいですか？", a: "投稿の事前作成・スケジュール予約・テンプレート化の3点で時間を大幅に削減できます。それでも難しい場合は弊社のSNS運用代行をご活用ください。月次プランから対応しています。" },
  { q: "インサイト分析はどのように活用しますか？", a: "月次でリーチ・エンゲージメント率・プロフィール訪問数・フォロワー増加数を確認します。反応が高かった投稿の共通点を分析し、コンテンツカレンダーの翌月計画に反映させてPDCAを回します。" },
  { q: "Instagramの運用を始めるのに最低限必要な準備は何ですか？", a: "プロフェッショナルアカウントへの切り替え・プロフィール最適化・9〜12枚の初期投稿（フィードを整える）・投稿テンプレート・ハッシュタグリストの5点が最低限の準備です。この土台があれば運用開始できます。" },
];

const relatedLinks = [
  { href: "/sns", label: "SNS集客とは", desc: "SNS集客の全体概要" },
  { href: "/sns/hashtag", label: "ハッシュタグ戦略", desc: "効果的なタグ設計" },
  { href: "/sns/photo-direction", label: "写真ディレクション", desc: "SNS写真の撮り方" },
  { href: "/sns/content-calendar", label: "コンテンツカレンダー", desc: "投稿スケジュール管理" },
  { href: "/sns/post-planning", label: "投稿企画・運用設計", desc: "コンテンツ制作" },
  { href: "/sns/local-sns", label: "地域SNS集客", desc: "地域向けSNS戦略" },
  { href: "/sns/reels", label: "リール動画制作", desc: "短尺動画で拡散" },
  { href: "/sns/stories", label: "ストーリーズ活用", desc: "日常的な接点作り" },
  { href: "/services/sns", label: "SNSサービス詳細", desc: "SNS運用サービス一覧" },
  { href: "/ai/sns-automation", label: "SNS自動化", desc: "AIによる効率化" },
  { href: "/seo", label: "SEO対策", desc: "検索上位表示の戦略" },
  { href: "/seo/local", label: "ローカルSEO", desc: "地域検索の最適化" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップ集客" },
  { href: "/meo/review", label: "口コミ管理", desc: "レビュー戦略" },
  { href: "/aio", label: "AIO対策", desc: "AI検索への最適化" },
  { href: "/services", label: "サービス一覧", desc: "全サービスを見る" },
  { href: "/industry/restaurant", label: "飲食業界向け", desc: "飲食店のInstagram活用" },
  { href: "/industry/beauty", label: "美容業界向け", desc: "美容室のSNS戦略" },
  { href: "/industry/dental", label: "歯科医院向け", desc: "歯科のSNS運用" },
  { href: "/industry/construction", label: "建設・リフォーム向け", desc: "施工事例の発信" },
  { href: "/industry/retail", label: "小売・EC向け", desc: "商品訴求の方法" },
  { href: "/area/tokyo", label: "東京エリア", desc: "東京の集客支援" },
  { href: "/area/osaka", label: "大阪エリア", desc: "大阪の集客支援" },
  { href: "/contact", label: "無料相談", desc: "Instagram運用の相談" },
];

const contentItems = [
  { title: "プロフィール最適化", body: "Instagramのプロフィールは「お店の看板」です。アイコン・ユーザーネーム・プロフィール文・ハイライトを整えることで、フォローに至る確率が大きく変わります。" },
  { title: "フィード投稿の企画・制作", body: "ターゲットの関心・季節・ブランドの世界観を踏まえた投稿を週3〜5回制作します。キャプション・ハッシュタグも含めて一貫したブランドトーンで表現します。" },
  { title: "ストーリーズの活用", body: "ストーリーズは毎日更新が理想です。「本日のおすすめ」「限定情報」「アンケート機能」を使ったフォロワーとのコミュニケーションがエンゲージメント向上に直結します。" },
  { title: "リール動画の制作・活用", body: "リールはInstagramが最も拡散させる動画フォーマットです。15〜30秒のショート動画を月2〜4本制作することで、フォロワー外へのリーチが飛躍的に増加します。" },
  { title: "ハッシュタグ・地域タグ設計", body: "業種・地域・ターゲットに応じた最適なハッシュタグセットを設計します。ビッグ・ミドル・ニッチの3層と地域タグを組み合わせて、新規ユーザーへのリーチを最大化します。" },
  { title: "インサイト分析と改善", body: "月次でリーチ・エンゲージメント・プロフィール訪問数・フォロワー変動を分析します。成果の高い投稿タイプを特定し、翌月のコンテンツ計画に反映してPDCAを回します。" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#F9F8F5" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", marginBottom: "24px", display: "flex", gap: "6px", alignItems: "center" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <Link href="/sns" style={{ color: "#6B7280" }}>SNS集客</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>Instagram運用</span>
            </nav>
            <p style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Instagram Marketing</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              Instagram運用｜ビジュアル戦略とリール活用で集客する
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              Instagramは視覚的なコンテンツで商品・サービス・店舗の魅力を伝えられる集客プラットフォームです。フィード設計・リール制作・ストーリーズ活用・ハッシュタグ戦略・インサイト分析を一貫して支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              プロフィール最適化からリール動画制作・月次インサイト分析まで、Instagramを「集客チャネル」として機能させるための施策を継続実施します。フォロワー数より「来店・問い合わせ」につながる運用を最優先します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_21_48.jpg" alt="Instagram運用" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.65)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(18px,3vw,28px)", fontWeight: 700, letterSpacing: "0.05em", textAlign: "center" }}>
              Instagramを、集客エンジンに変える。
            </p>
          </div>
        </div>

        {/* Section A: このページでわかること */}
        <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>WHAT YOU WILL LEARN</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              このページでわかること
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                "フィードのカラートーン・テイスト統一でブランド世界観を作る方法",
                "リール動画の制作ポイントとフォロワー外リーチを最大化する投稿設計",
                "プロフィール最適化（bio・ハイライト・アイコン）でフォロー率を上げる手順",
                "ストーリーズを活用してフォロワーとの接触頻度とエンゲージメントを高める方法",
                "業種別（飲食・美容・歯科・不動産など）のInstagramコンテンツ活用事例",
                "インサイト分析で集客効果を計測しPDCAを回すための指標と手順",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "16px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ color: "#c4b89a", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>→</span>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.75" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section style={{ background: "#F9F8F5", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>COMMON PROBLEMS</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              Instagram運用でよくある課題と原因
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                {
                  title: "フォロワーが伸び悩む｜株式会社サイプレス",
                  body: "フォロワーが増えない主な原因はプロフィールの弱さとコンテンツの発見経路不足です。プロフィールページを見た人がフォローする理由がなければ離脱します。リールとハッシュタグを強化して新規リーチを広げることが先決です。",
                },
                {
                  title: "エンゲージメント率が低い｜株式会社サイプレス",
                  body: "いいね・コメント・保存が少ない場合、投稿内容がフォロワーの関心と合っていない可能性があります。一方的な情報発信ではなく、質問・アンケート・ストーリーズのリアクション機能でインタラクティブな接点を増やすことが重要です。",
                },
                {
                  title: "リールを作っていない｜株式会社サイプレス",
                  body: "リールはInstagramが最も積極的に拡散させるフォーマットです。リールを投稿しないアカウントはフォロワー外へのリーチがほぼフィード投稿のみに限られます。月2〜4本の短尺動画を継続することで新規フォロワー獲得率が大きく向上します。",
                },
                {
                  title: "フィードに統一感がない｜株式会社サイプレス",
                  body: "プロフィールページを訪問した時に写真の色調・明るさ・スタイルがバラバラだと、ブランドの世界観が伝わらずフォローに至りません。カラートーンとフィルター設定を統一するだけで第一印象は大きく変わります。",
                },
                {
                  title: "プロフィールが弱い｜株式会社サイプレス",
                  body: "プロフィール文が「何者か・何が得られるか・どう行動すべきか」を伝えていないと、投稿を気に入ったユーザーがフォローせずに離脱します。bio最適化・ハイライト設置・URLの配置がフォロー率と問い合わせ率に直結します。",
                },
                {
                  title: "ストーリーズを活用していない｜株式会社サイプレス",
                  body: "ストーリーズは既存フォロワーとの接触頻度を高める最も手軽な機能です。毎日投稿が理想で、アンケート・質問箱・カウントダウンなどのインタラクティブ機能を使うとエンゲージメントが上がりアルゴリズム評価も向上します。",
                },
                {
                  title: "投稿の写真クオリティが低い｜株式会社サイプレス",
                  body: "暗い・ブレている・背景が散らかっている写真はスクロールで流されます。スマートフォンでも自然光を活用し・構図を整えるだけで品質は大幅に上がります。統一したフィルター編集と合わせることでブランド感が生まれます。",
                },
                {
                  title: "キャプションが短い・弱い｜株式会社サイプレス",
                  body: "キャプションは検索に影響し、エンゲージメントを促す役割も持ちます。共感・疑問・価値提供で始まるキャプションはコメントを生みやすく、アルゴリズム評価につながります。「続きを読む」が表示される前の冒頭125文字に最重要メッセージを置きます。",
                },
                {
                  title: "インスタからの集客効果が不明｜株式会社サイプレス",
                  body: "フォロワー数だけを見ていても集客への貢献はわかりません。ウェブサイトタップ数・DM数・プロフィールアクセス数・電話ボタンのクリック数を月次でインサイトから確認することで、実際の集客効果を把握できます。",
                },
                {
                  title: "広告との使い分けが分からない｜株式会社サイプレス",
                  body: "通常投稿はブランド構築・信頼蓄積・オーガニックリーチが目的です。広告は特定のキャンペーン・新規顧客獲得・商圏外へのリーチ拡大に適しています。まずオーガニック運用で世界観を作り、広告で増幅させる順序が効果的です。",
                },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.title}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.85" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section C: 業種別の活用ポイント */}
        <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>BY INDUSTRY</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              業種別Instagram活用ポイント
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {[
                {
                  industry: "飲食店",
                  content: "料理写真・内装・イベント",
                  note: "料理の盛り付け写真と店内雰囲気でブランドを伝えます。季節メニュー・限定フェアをストーリーズで告知し、来店前後の体験をリールで発信することで予約・来店意欲を高めます。地域タグと組み合わせたハッシュタグ設計が集客に直結します。",
                },
                {
                  industry: "美容室",
                  content: "施術写真・スタッフ・来店前後",
                  note: "before&after写真はInstagramで最もエンゲージメントが高いコンテンツ種別です。スタイリスト個人のキャラクターを出すことで「この人に切ってもらいたい」という指名来店につながります。カラーやパーマなど施術ごとにタグを変えたコンテンツ設計が有効です。",
                },
                {
                  industry: "歯科医院",
                  content: "院内写真・スタッフ・予防情報",
                  note: "清潔感のある院内写真とフレンドリーなスタッフ紹介で「通いやすい歯科」イメージを作ります。予防歯科・ホワイトニング・矯正など悩み別の情報投稿が新規患者への接点になります。ストーリーズでQ&Aを行うことで信頼関係を構築できます。",
                },
                {
                  industry: "建設・リフォーム",
                  content: "施工事例・工程・完成写真",
                  note: "施工前後の比較写真とプロセス動画がリール向きコンテンツです。「どんな変化が起きたか」を視覚的に見せることで問い合わせ意欲が高まります。完成写真はフィードで美しく見せ、施工プロセスはストーリーズやリールで発信する使い分けが有効です。",
                },
                {
                  industry: "小売・EC",
                  content: "商品・使用シーン・ライフスタイル",
                  note: "商品単体の写真だけでなく、使用シーン・ライフスタイル提案型の写真がエンゲージメントを高めます。「この商品を使うとこんな生活になる」という世界観を伝えることでフォロー・購入意欲につながります。Instagramショッピング設定で購入経路を短縮できます。",
                },
                {
                  industry: "学習塾",
                  content: "授業・先生・合格発表",
                  note: "「わかる瞬間」「集中している子どもたち」など教育現場のリアルな写真が保護者の信頼を生みます。合格実績・先生紹介・学習ヒント動画はエンゲージメントが高いコンテンツです。保護者向けストーリーズQ&Aで来校前の不安を解消します。",
                },
                {
                  industry: "不動産",
                  content: "物件・周辺環境・ライフスタイル提案",
                  note: "「部屋の写真だけ」から「このエリアでのライフスタイル」を見せる提案型コンテンツへの転換が有効です。内見動画・周辺グルメ・近くの公園紹介など生活イメージを伝えるリールが問い合わせ率向上につながります。",
                },
                {
                  industry: "フィットネス",
                  content: "トレーニング・ビフォーアフター・食事",
                  note: "会員のビフォーアフターは信頼構築に最も効果的なコンテンツです。トレーニング動画・食事アドバイス・モチベーション投稿でフォロワーとの継続的な接点を作ります。「無料体験へのDM誘導」をキャプションとストーリーズに組み込む導線設計が重要です。",
                },
              ].map((item, i) => (
                <div key={i} style={{ padding: "28px", border: "1px solid #E8E4DC" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "6px" }}>{item.industry}</p>
                  <p style={{ fontSize: "12px", color: "#c4b89a", marginBottom: "12px", fontFamily: "var(--font-serif)", letterSpacing: "0.03em" }}>{item.content}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: 実装・運用フロー */}
        <section style={{ background: "#F9F8F5", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>IMPLEMENTATION FLOW</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              Instagram運用の実装・運用フロー
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { title: "アカウント分析", body: "現在のフォロワー数・エンゲージメント率・投稿頻度・リーチ推移をインサイトで確認します。過去の投稿で反応が良かったものと悪かったものを分類し、コンテンツ改善の方向性を定めます。" },
                { title: "プロフィール最適化", body: "アイコン（ブランドロゴまたは顔写真）・ユーザーネーム（検索されやすいキーワードを含む）・プロフィール文（何をする誰か・特徴・CTA）・ハイライト（サービス・事例・Q&A）を整備します。" },
                { title: "フィードコンセプト設計", body: "カラートーン（明度・彩度・色温度の方向性）とテイスト（ナチュラル・ラグジュアリー・ポップなど）を決定します。参考アカウント3〜5件を選んでムードボードを作成し、統一した世界観の土台を作ります。" },
                { title: "投稿フォーマット決定", body: "フォト投稿・カルーセル投稿・リール動画の比率を決めます。一般的にはフォト30%・カルーセル40%・リール30%程度が効果的ですが、業種に応じて調整します。各フォーマットのテンプレートをあらかじめ作成しておくと制作効率が上がります。" },
                { title: "週次コンテンツカレンダー作成", body: "1か月分の投稿テーマ・フォーマット・ハッシュタグを事前に計画します。季節・イベント・キャンペーンと連動したコンテンツを組み込み、毎週同じ曜日・時間に投稿できるよう予約機能を活用します。" },
                { title: "撮影・編集ガイドライン策定", body: "撮影時の光源・構図・アングル・背景のルールを文書化します。編集は使用アプリ・フィルター・明度・コントラストの設定値を統一することで、担当者が変わっても一貫したクオリティを維持できます。" },
                { title: "ハッシュタグ戦略の実装", body: "業種・地域・ターゲットに応じたビッグ・ミドル・ニッチ3層のタグセットを投稿カテゴリ別に作成します。ブランドタグをプロフィールに記載し、タグ経由リーチを毎月インサイトで確認してPDCAを回します。" },
                { title: "ストーリーズ運用設計", body: "毎日のストーリーズ投稿テーマを設計します。「営業日告知」「本日のおすすめ」「スタッフ日常」「アンケート」「Q&A」の5カテゴリをローテーションすることで、フォロワーとの継続的な接点を作ります。" },
                { title: "インサイト分析", body: "月次でフォロワー数推移・リーチ数・エンゲージメント率・プロフィールアクセス数・ウェブサイトタップ数を確認します。高パフォーマンス投稿の共通点を分析し、翌月の投稿計画に反映します。" },
                { title: "月次改善", body: "分析結果をもとにコンテンツテーマ・投稿頻度・ハッシュタグ・フォーマット比率を調整します。四半期ごとにプロフィール・ハイライト・フィードコンセプトを見直し、アカウントの成長フェーズに合わせて戦略をアップデートします。" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.title}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.85" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPI METRICS</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              Instagram運用の成果を見るための指標
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { kpi: "フォロワー数推移", where: "Instagramインサイト > フォロワー", note: "月次の増減を確認します。急減している場合はコンテンツ品質または投稿頻度に問題がある可能性があります。絶対数より月次増加率のトレンドを重視します。" },
                { kpi: "エンゲージメント率", where: "（いいね＋コメント＋保存）÷ リーチ数", note: "投稿がどのくらい反応を生んでいるかを測ります。業種平均は1〜3%程度です。保存数はアルゴリズム評価に特に効くため、保存されるコンテンツを意識することが重要です。" },
                { kpi: "リーチ数", where: "Instagramインサイト > リーチ", note: "投稿が届いたユニークユーザー数です。フォロワー外リーチの割合が高いほどハッシュタグとリールが機能していることを示します。月次トレンドと前月比を確認します。" },
                { kpi: "リール再生数", where: "Instagramインサイト > リール詳細 > 再生回数", note: "リールの効果を測る最も基本的な指標です。再生数と視聴完了率を組み合わせて確認し、冒頭3秒で離脱されていないかを検証します。" },
                { kpi: "ストーリーズ閲覧数", where: "Instagramインサイト > ストーリーズ詳細", note: "フォロワーのうち何人がストーリーズを見ているかを測ります。閲覧率（閲覧数÷フォロワー数）が下がっている場合はコンテンツの鮮度や投稿タイミングを見直します。" },
                { kpi: "プロフィールアクセス数", where: "Instagramインサイト > プロフィールへのアクセス", note: "投稿またはリールを見た後にプロフィールページを訪問した数です。フォロー・問い合わせへの転換前段階の指標として月次で追跡します。" },
                { kpi: "ウェブサイトタップ数", where: "Instagramインサイト > ウェブサイトのタップ", note: "プロフィールのURLをタップしてサイトに移動した数です。Instagram経由の実際の集客効果に最も近い指標です。増減の要因をコンテンツと合わせて分析します。" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "4px" }}>{item.kpi}</p>
                    <p style={{ fontSize: "12px", color: "#c4b89a", marginBottom: "8px", fontFamily: "var(--font-serif)" }}>{item.where}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.85" }}>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 集客できないInstagramの共通点 */}
        <section style={{ background: "#0d1b2a", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Common Issues</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              Instagramで集客できないアカウントの4つの共通点
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px" }}>
              {[
                { t: "プロフィールが最適化されていない", b: "プロフィール文・アイコン・ハイライトが整っていないと、投稿を見てプロフィールページに来たユーザーがフォローせずに離脱します。第一印象が集客の入り口です。" },
                { t: "投稿頻度が不安定で継続できない", b: "週1回の投稿と週5回の投稿が繰り返されるムラがあるアカウントはアルゴリズムに評価されません。週3〜5回の安定した投稿が成長の基本条件です。" },
                { t: "写真の品質・統一感がない", b: "明るさ・色調・構図がバラバラのフィードはブランドイメージが伝わらず、フォローに至りません。カラートーンを統一するだけで印象が大きく変わります。" },
                { t: "分析なしで改善サイクルが回らない", b: "インサイトを確認せず感覚だけで投稿を続けても成長しません。何がリーチしたか・何がエンゲージメントを生んだかを毎月確認してPDCAを回すことが集客力向上の鍵です。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 施策 */}
        <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>OUR APPROACH</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, textAlign: "center", marginBottom: "48px" }}>
              Instagram運用の6つの施策
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
              {contentItems.map((item, i) => (
                <div key={i} style={{ padding: "32px", background: "#F9F8F5", borderRadius: "4px", borderTop: "3px solid #c4b89a" }}>
                  <p style={{ fontFamily: "var(--font-serif)", color: "#c4b89a", fontSize: "11px", letterSpacing: "0.2em", marginBottom: "10px" }}>{String(i + 1).padStart(2, "0")}</p>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "17px", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>{item.title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.85", color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Format Comparison */}
        <section style={{ background: "#F9F8F5", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>FORMAT GUIDE</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              Instagramフォーマット別の使い分けガイド
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.85", marginBottom: "40px", maxWidth: "640px" }}>
              フォト・カルーセル・リール・ストーリーズはそれぞれ異なる目的と特性を持ちます。投稿タイプを適切に使い分けることでアルゴリズム評価とユーザー体験の両方を向上させることができます。
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #E8E4DC" }}>
                    <th style={{ textAlign: "left", padding: "12px 16px", color: "#0d1b2a", fontFamily: "var(--font-serif)", fontWeight: 700 }}>フォーマット</th>
                    <th style={{ textAlign: "left", padding: "12px 16px", color: "#0d1b2a", fontFamily: "var(--font-serif)", fontWeight: 700 }}>主な目的</th>
                    <th style={{ textAlign: "left", padding: "12px 16px", color: "#0d1b2a", fontFamily: "var(--font-serif)", fontWeight: 700 }}>拡散力</th>
                    <th style={{ textAlign: "left", padding: "12px 16px", color: "#0d1b2a", fontFamily: "var(--font-serif)", fontWeight: 700 }}>推奨頻度</th>
                    <th style={{ textAlign: "left", padding: "12px 16px", color: "#0d1b2a", fontFamily: "var(--font-serif)", fontWeight: 700 }}>向いているコンテンツ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { format: "フォト投稿", purpose: "ブランド世界観の表現", spread: "中", freq: "週2〜3回", content: "商品・料理・外観・スタッフ" },
                    { format: "カルーセル", purpose: "情報量の多い訴求・保存促進", spread: "中〜高", freq: "週1〜2回", content: "ビフォーアフター・手順・比較" },
                    { format: "リール", purpose: "新規リーチの最大化", spread: "最高", freq: "月2〜4本", content: "施術動画・調理・ルームツアー" },
                    { format: "ストーリーズ", purpose: "日常接点・エンゲージメント", spread: "低（フォロワー向け）", freq: "毎日", content: "告知・アンケート・Q&A・日常" },
                    { format: "ライブ", purpose: "リアルタイム信頼構築", spread: "中", freq: "月1〜2回", content: "イベント・Q&Aセッション" },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #E8E4DC", background: i % 2 === 0 ? "#FFFFFF" : "#F9F8F5" }}>
                      <td style={{ padding: "14px 16px", color: "#0d1b2a", fontWeight: 600 }}>{row.format}</td>
                      <td style={{ padding: "14px 16px", color: "#374151" }}>{row.purpose}</td>
                      <td style={{ padding: "14px 16px", color: "#374151" }}>{row.spread}</td>
                      <td style={{ padding: "14px 16px", color: "#c4b89a", fontWeight: 600 }}>{row.freq}</td>
                      <td style={{ padding: "14px 16px", color: "#374151" }}>{row.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Profile Optimization Checklist */}
        <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>PROFILE CHECKLIST</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              Instagramプロフィール最適化チェックリスト
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.85", marginBottom: "40px", maxWidth: "640px" }}>
              プロフィールページはInstagramにおける「ランディングページ」です。訪問者がフォローするかどうかを数秒で判断するため、以下のポイントを一つひとつ確認して整備します。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {[
                {
                  category: "アイコン",
                  checks: [
                    "ブランドロゴまたは顔写真（人物が見えるもの）を使用している",
                    "小さいサイズでも視認できる明確な画像である",
                    "円形にトリミングされても主要部分が欠けない構図",
                  ],
                },
                {
                  category: "ユーザーネーム",
                  checks: [
                    "業種・エリアのキーワードを含んでいる",
                    "読みやすく・覚えやすい名前になっている",
                    "Instagram検索でヒットしやすい設定になっている",
                  ],
                },
                {
                  category: "プロフィール文",
                  checks: [
                    "何をする誰（業種・エリア）かが冒頭で分かる",
                    "来店・問い合わせへのCTAが含まれている",
                    "改行・絵文字を使って読みやすくなっている",
                  ],
                },
                {
                  category: "ハイライト",
                  checks: [
                    "「サービス内容」「お客様の声」「アクセス」のカテゴリがある",
                    "ハイライトカバーのデザインが統一されている",
                    "各ハイライトに10〜20枚以上のストーリーズが収録されている",
                  ],
                },
                {
                  category: "URL・連絡先",
                  checks: [
                    "ウェブサイトまたはLINE予約リンクが設定されている",
                    "電話番号またはメールアドレスが登録されている",
                    "プロフェッショナルアカウントに切り替えている",
                  ],
                },
                {
                  category: "フィード全体",
                  checks: [
                    "投稿のカラートーンが統一されている",
                    "初期9枚の投稿でブランドの世界観が伝わる",
                    "最後の投稿が2週間以上前になっていない",
                  ],
                },
              ].map((cat, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid #E8E4DC" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "16px" }}>{cat.category}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {cat.checks.map((check, j) => (
                      <div key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <span style={{ color: "#c4b89a", flexShrink: 0, marginTop: "2px", fontWeight: 700 }}>→</span>
                        <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.7" }}>{check}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{ background: "#0d1b2a", padding: "64px 24px" }}>
          <div style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>FREE CONSULTATION</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,30px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "16px" }}>
              Instagram運用の無料相談を受け付けています
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", lineHeight: "1.85", marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px" }}>
              現在のアカウントを拝見してプロフィール・投稿・ハッシュタグの改善ポイントをお伝えします。業種・エリアを問わず対応しています。
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: "#0F172A",
                border: "1px solid rgba(196,184,154,0.4)",
                color: "#FFFFFF",
                fontSize: "14px",
                fontWeight: 600,
                padding: "14px 36px",
                letterSpacing: "0.08em",
                textDecoration: "none",
              }}
            >
              無料相談する
            </Link>
          </div>
        </section>

        <FaqSection items={faqItems} />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SNS写真ディレクション｜クリックされる・保存される写真の撮り方設計｜株式会社サイプレス",
  description: "SNS集客に効果的な写真ディレクション。料理・商品・店内・施術のスマートフォン撮影のコツ・構図・ライティング・フィードのトンマナ統一で保存されるInstagramビジュアルを設計する方法。",
  keywords: ["SNS写真ディレクション", "Instagram写真", "フィード統一感", "スマートフォン撮影", "写真構図", "ビジュアルブランディング"],
  openGraph: {
    title: "SNS写真ディレクション｜クリックされる・保存される写真の撮り方設計｜株式会社サイプレス",
    description: "SNS集客に効果的な写真ディレクション。料理・商品・店内・施術のスマートフォン撮影のコツ・構図・ライティング・フィードのトンマナ統一で保存されるInstagramビジュアルを設計する方法。",
    images: [{ url: "/ChatGPT Image 2026年6月14日 21_08_58 (6).png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/sns/photo-direction" },
};

const faqItems = [
  { q: "スマートフォンでもSNS用の良い写真は撮れますか？", a: "はい。最新のスマートフォンは高品質な写真が撮れます。撮影のポイントは自然光の活用・水平を保つ・背景をシンプルにする・ポートレートモードの活用などです。機材よりも光の使い方と構図の知識が写真品質に大きく影響します。" },
  { q: "プロのカメラマンを使わないといけませんか？", a: "必須ではありません。ただし高品質なブランド写真（店頭・スタッフ・空間）は年1〜2回のプロ撮影が効果的です。日常の投稿写真はスマートフォンで対応する組み合わせが現実的でコスト効率も高いです。" },
  { q: "Instagramのフィードの統一感はなぜ重要ですか？", a: "プロフィールページを見たときに統一感があると「このアカウントはセンスがいい・信頼できる」という印象を与えます。フォローに至るかどうかはプロフィールページの第一印象に大きく左右されます。カラートーン・撮影スタイルの統一が最重要です。" },
  { q: "商品・料理の写真を魅力的に見せるコツは？", a: "自然光（窓際）での撮影・シンプルな背景・商品の最も魅力的な角度（斜め上・真俯瞰等）・食べ物はクローズアップで質感を出す・小物でスタイリングするなどが効果的です。撮影前に背景を整えることが最も重要です。" },
  { q: "写真の編集（加工）はどのアプリが使いやすいですか？", a: "Lightroom Mobile（無料機能で十分）・VSCO・Snapseedが定番です。フィルターを統一することで写真全体のトーンが揃い、フィードの統一感が生まれます。独自プリセットを作成して毎回適用するのが最も効率的です。" },
  { q: "照明器具は必要ですか？費用はどのくらいですか？", a: "スマートフォン撮影なら自然光が最適で照明なしでも十分です。夜間・曇天・室内で自然光が取れない場合は、LEDリングライト（3,000〜10,000円）が効果的です。大型のソフトボックスは本格的な料理撮影に有効です。" },
  { q: "写真と動画（リール）はどう使い分けますか？", a: "静止画は「保存したい情報・商品の詳細」に適しており、動画（リール）は「体験・プロセス・感情」を伝えるのが得意です。フィード投稿は写真・ストーリーズは日常動画・リールは発見タブ狙いの15〜30秒動画という使い分けが基本です。" },
  { q: "撮影の頻度はどのくらいが必要ですか？", a: "週3〜5回の投稿を維持するなら、週1回の撮影セッション（1〜2時間）で10〜15枚の素材をストックするのが効率的です。曜日・時間帯を決めた定期撮影の習慣化が長続きのコツです。" },
  { q: "ビフォーアフター写真を効果的に使うには？", a: "同じ角度・同じ照明条件で撮影することが大前提です。Before写真を意識的に撮る習慣が重要で、After時に「あの時のBeforeを撮っておけば」とならないよう施術前・工事前の撮影をルール化します。縦並び・横並びで比較しやすいレイアウトが効果的です。" },
  { q: "フィードのカラーテーマはどう決めますか？", a: "ブランドのイメージカラー・ターゲット顧客の好み・業種の印象を踏まえて決定します。暖色系（温かみ・ナチュラル）・寒色系（清潔感・プロフェッショナル）・モノクロ系（高級感・シック）など3〜4パターンを試してから統一するのがおすすめです。" },
  { q: "料理写真で食欲をそそる撮り方は？", a: "蒸気・とろみ・光沢など「おいしそうな質感」を捉えることが重要です。真上（真俯瞰）または斜め45度アングル・自然光か柔らかい照明・盛り付けた直後の新鮮な状態での撮影が基本です。背景色は白・木目・大理石が料理を引き立てます。" },
  { q: "施術写真（美容・医療）で注意すべき点は？", a: "お客様の顔・個人情報が映らないよう必ず事前に許可を取ります。施術後の仕上がりを最も魅力的に見せるアングルを決め、均一なライティングで肌の質感を自然に表現します。過度な加工・フィルターは逆効果で、実物に近いリアルな写真が信頼につながります。" },
  { q: "店内・空間写真を魅力的に撮るコツは？", a: "広角で撮影することで空間の広さと雰囲気が伝わります。窓からの自然光を活かした時間帯に撮影し、お客様のいない開店前が最適です。斜め構図で奥行きを出すと立体感が生まれます。植物・照明・小物などのスタイリングも重要です。" },
  { q: "縦型（リール用）と横型・正方形の使い分けは？", a: "リール・ストーリーズは縦型（9:16）、フィード投稿は正方形（1:1）または縦型（4:5）がInstagramでの表示に最適です。横型（16:9）はフィードでは上下が切れるため、基本的に使用を避けます。撮影時は縦型で撮ることを意識します。" },
  { q: "撮影のタイミング・ゴールデンタイムはいつですか？", a: "自然光を使う場合、午前10時〜午後2時頃が最も安定した光が得られます。飲食店の料理撮影は調理直後・ランチタイム前の早い時間帯が最適です。夕方は暖かみのある光になり、カフェ・インテリア撮影に向いています。" },
  { q: "スマートフォン撮影でブレを防ぐ方法は？", a: "両脇を体につけて固定する・壁や台に寄りかかる・スマートフォンスタンドやミニ三脚を使用する（500〜2,000円）ことでブレが防げます。連写モードを使い複数枚から選ぶ・タイマー撮影も有効です。" },
  { q: "Canvaなどのデザインツールは写真に使えますか？", a: "はい。Canvaはテキストオーバーレイ・ブランドカラーの枠・キャプション画像の作成に最適です。ただし過度なテキスト・スタンプの多用はプロフィールの統一感を損ないます。写真はできるだけシンプルに、テキストは最小限にとどめます。" },
  { q: "季節感を写真でどう表現しますか？", a: "季節の食材・花・色合いを小物として取り入れます。春：桜・新緑、夏：青・涼しさ、秋：紅葉・暖色、冬：白・温かみ。ブランドのカラートーンを維持しながら季節感を小物・背景色でさりげなく表現するのがポイントです。" },
  { q: "写真の著作権・お客様の肖像権はどう管理しますか？", a: "スタッフが撮影した写真はお店に著作権があります。お客様が写っている写真は必ず事前に書面または口頭で使用許可を取ります。お客様投稿（UGC）の転載は原投稿者へのDMで明示的な許可取得が必要です。Instagramのリポスト機能は元投稿へのリンクが自動付与されますが、事前確認が望ましいです。" },
  { q: "写真品質を上げるために最初にすべきことは何ですか？", a: "まず全投稿に統一のフィルター（Lightroomプリセット等）を適用することから始めます。次に撮影場所・背景を整える習慣をつけます。機材や技術より「背景をきれいにする」「同じフィルターをかける」の2点だけで見た目が劇的に変わります。" },
];

const relatedLinks = [
  { href: "/sns", label: "SNS集客とは", desc: "SNS集客の全体像" },
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタ集客の基本" },
  { href: "/sns/post-planning", label: "投稿企画・運用設計", desc: "コンテンツ企画" },
  { href: "/sns/content-calendar", label: "コンテンツカレンダー", desc: "投稿スケジュール" },
  { href: "/sns/hashtag", label: "ハッシュタグ戦略", desc: "タグ選定" },
  { href: "/sns/reels", label: "リール・ショート動画", desc: "動画コンテンツ戦略" },
  { href: "/sns/local-sns", label: "地域密着SNS運用", desc: "地元向けSNS戦略" },
  { href: "/sns/ugc", label: "UGC活用戦略", desc: "口コミ・投稿活用" },
  { href: "/sns/line", label: "LINE公式アカウント", desc: "LINE集客・リピート" },
  { href: "/sns/google-business-profile", label: "Googleビジネスプロフィール", desc: "GBP活用" },
  { href: "/services/sns", label: "SNSサービス詳細", desc: "SNS運用サービス" },
  { href: "/ai/sns-automation", label: "SNS自動化", desc: "AI活用コンテンツ制作" },
  { href: "/seo", label: "SEO対策とは", desc: "検索集客の基本" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO×SNS連携" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索への対応" },
  { href: "/industry/restaurant", label: "飲食店のSNS集客", desc: "料理写真・撮影術" },
  { href: "/industry/beauty", label: "美容室のSNS集客", desc: "施術写真・ビジュアル" },
  { href: "/industry/dental", label: "歯科のSNS集客", desc: "クリニック写真事例" },
  { href: "/industry/retail", label: "小売店のSNS集客", desc: "商品写真スタイリング" },
  { href: "/industry/construction", label: "建設・リフォームのSNS", desc: "施工写真・ドローン" },
  { href: "/industry/fitness", label: "フィットネスのSNS", desc: "トレーニング写真" },
  { href: "/services/branding", label: "ブランディングとは", desc: "ビジュアルブランド設計" },
  { href: "/area/tokyo", label: "東京のSNS集客", desc: "東京エリア対応" },
  { href: "/area/osaka", label: "大阪のSNS集客", desc: "大阪エリア対応" },
];

const contentItems = [
  { title: "自然光の活用", body: "窓際の柔らかい自然光が最も美しく料理・商品を映します。直射日光は避け、カーテン越しの拡散光が最適です。晴れた日の午前〜昼間の時間帯が撮影に適しています。" },
  { title: "構図と撮影アングル", body: "料理・商品は「斜め45度」「真俯瞰（真上）」が基本です。人物・空間は「目線の高さ」が自然です。三分割法で被写体を配置し、余白を活かした構図が洗練された印象を与えます。" },
  { title: "背景のシンプル化", body: "背景が散らかっていると商品の魅力が半減します。白い壁・木目のテーブル・大理石シートなどシンプルな背景を用意することで、被写体が際立ちます。100均でも撮影背景は揃えられます。" },
  { title: "フィードのカラートーン統一", body: "Instagramのプロフィールで「統一感」を出すには、すべての写真を同じフィルター・色温度・明るさで編集します。ブランドカラーを決め、それに合ったトーンで統一することが重要です。" },
  { title: "スタイリングと小物の活用", body: "商品や料理の周りに季節の花・食器・布を配置することで「世界観」が生まれます。ブランドイメージに合った小物を3〜5個常備しておくと、日々の撮影に活用できます。" },
  { title: "動画・リール用の撮影テクニック", body: "リール用は縦型（9:16）で撮影します。手ブレを防ぐためのスタビライザー（安価なもので可）・自然な動きを見せるスロー撮影・テキストオーバーレイで内容を伝えるのが基本パターンです。" },
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
              <span style={{ color: "#0d1b2a" }}>写真ディレクション</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Photo Direction</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              SNS写真ディレクション｜クリックされる・保存される写真の設計
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              SNSは視覚的なプラットフォームです。写真の質がエンゲージメントと集客力に直結します。スマートフォンでも実践できる写真の撮り方・構図・ライティング・フィードの統一感をご支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              プロカメラマンに頼らなくても、撮影の「型」を知れば写真品質は大きく向上します。フィードを見た瞬間に「このお店に行きたい」と思わせるビジュアル戦略を体系的に設計します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_08_58 (6).png" alt="SNS写真ディレクション" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.65)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(18px,3vw,28px)", fontWeight: 700, letterSpacing: "0.05em", textAlign: "center" }}>
              美しい写真が、フォローと来店を生む。
            </p>
          </div>
        </div>

        {/* Section A: このページでわかること */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "36px" }}>
              このページでわかること
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                "保存率・エンゲージメント率を高める写真の共通法則と、スクロールで止まる構図・色彩設計の基本",
                "スマートフォンだけで実践できる自然光活用・背景整備・アングル選定の具体的な手順",
                "フィード全体の統一感（カラートーン・フィルター・撮影スタイル）を作るビジュアルブランディング設計",
                "飲食・美容・歯科・建設・小売など業種別の撮影シーン・構図・ライティングの具体的ポイント",
                "写真品質改善後の効果測定に使うKPI（保存率・エンゲージメント率・フォロワー増加率等）の見方",
                "撮影スケジュールの組み方・素材ストック計画・定期ビジュアル見直しのPDCAサイクル設計",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "16px", flexShrink: 0, lineHeight: 1.6 }}>→</span>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dark section: 写真品質が集客に与える影響 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Visual Impact</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              SNS写真の品質が集客に与える4つの影響
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "第一印象でフォローされない", b: "Instagramではユーザーが投稿を見てプロフィールに飛び、0.3秒でフォローするかを判断します。写真の統一感・クオリティがないプロフィールはこの瞬間に離脱されます。" },
                { t: "エンゲージメント率が上がらない", b: "暗い・ピントが甘い・構図が悪い写真はスクロールで素通りされます。「保存したい」「コメントしたい」と思われる写真だけがアルゴリズムに評価されリーチが広がります。" },
                { t: "ブランドイメージが伝わらない", b: "写真のカラートーン・スタイリング・雰囲気がバラバラだと「どんなお店・サービスか」が伝わりません。一貫したビジュアルこそがブランドを作り指名検索につながります。" },
                { t: "プロフィールページで来店意欲が下がる", b: "予約・購入を検討しているユーザーが最終確認でプロフィールを見ます。この時点でビジュアルに魅力がないと来店・問い合わせに至りません。写真は最後のクロージングです。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Issues</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              よくある課題と原因
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "640px" }}>
              写真品質が上がらない・フィードが整わない場合、多くは以下の課題が原因です。技術よりも習慣と意識の問題が大半を占めます。
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                { title: "スマホで撮った写真がいまいち", body: "機材の問題より「光・背景・構図」の問題がほとんどです。窓際で撮る・背景を整える・水平を保つ、この3点だけで写真の印象は劇的に変わります。機材を買う前にまず環境を整えることが先決です。" },
                { title: "暗い・ぼやけた写真を投稿してしまっている", body: "暗い写真の原因は蛍光灯下での撮影・逆光・ISO感度の過度な上昇です。自然光のある場所に移動するか、LEDライトで均一な明るさを確保することで解決できます。ぼやけはピント合わせの不足・手ブレが原因です。" },
                { title: "料理の写真が食欲をそそらない", body: "食欲をそそる写真には「色・艶・湯気・盛り付け」の再現が必要です。調理直後の熱々の状態・窓際の自然光・シンプルな背景の3条件を揃えることが基本です。冷めてから撮る・蛍光灯下で撮るのが最も多い失敗パターンです。" },
                { title: "内装・外観写真が魅力的でない", body: "空間写真は「広さ・明るさ・雰囲気」を伝える構図が重要です。低い位置・斜め構図・自然光の入る時間帯に撮影することで奥行きと立体感が生まれます。テーブルの上の荷物・不要な看板などを事前に片付けることが必須です。" },
                { title: "施術写真の構図が素人感がある", body: "施術写真は「仕上がりが最も映えるアングル」を業種ごとに決め固定することが重要です。毎回バラバラな構図・背景では統一感が生まれません。Before/Afterは必ず同じ環境・アングルで撮影するルールを設けます。" },
                { title: "一貫したビジュアルテイストがない", body: "投稿ごとにフィルター・明るさ・構図スタイルが異なり、プロフィールページを見たときに「雑多な印象」を与えています。ブランドカラー・フィルタープリセット・撮影スタイルガイドラインを1度作成することで解決できます。" },
                { title: "撮影機材・照明がない", body: "スマートフォン+LEDリングライト（3,000〜8,000円）+撮影背景紙（500〜2,000円）があれば十分です。高額な機材は不要で、まず低コストで環境を整えることを優先します。機材より撮影技術と編集の統一化の方が費用対効果が高いです。" },
                { title: "編集加工の技術がない", body: "Lightroom Mobileのプリセット機能を使えば、初心者でも全写真を統一のトーンに仕上げられます。明るさ・コントラスト・色温度の3パラメータを固定したプリセットを作成し毎回適用するだけで写真品質が均一化されます。" },
                { title: "写真と動画の使い分けが分からない", body: "写真は「情報・商品・ビフォーアフター」など詳細を伝えるのに適し、動画（リール）は「体験・プロセス・感情・before→after動き」を見せるのに効果的です。フィードは写真中心・リールは動画専用と役割を分けることで使い分けが明確になります。" },
                { title: "撮影のタイミング・頻度が分からない", body: "週1回の「撮影デー」を設け、1〜2時間で10〜15枚の素材を一括撮影するストック方式が最も効率的です。毎日投稿前に撮影するやり方は継続性が低く品質も安定しません。撮影スケジュールを投稿カレンダーと連動させて計画的に管理します。" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", alignItems: "flex-start", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
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

        {/* Content Grid: SNS写真を美しくする6つのポイント */}
        <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", textAlign: "center" }}>Visual Direction</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, textAlign: "center", marginBottom: "48px" }}>
              SNS写真を美しくする6つのポイント
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
              {contentItems.map((item, i) => (
                <div key={i} style={{ padding: "32px", background: "#F9F8F5", borderRadius: "4px", borderLeft: "3px solid #c4b89a" }}>
                  <p style={{ color: "#c4b89a", fontSize: "11px", letterSpacing: "0.2em", marginBottom: "10px", fontFamily: "var(--font-serif)" }}>POINT {String(i + 1).padStart(2, "0")}</p>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "17px", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>{item.title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.85", color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section C: 業種別の活用ポイント */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              業種別の活用ポイント
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "640px" }}>
              業種によって「見せるべき写真」「演出すべき世界観」は大きく異なります。自業種の特性に合ったビジュアル設計が集客効果を最大化します。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {[
                { industry: "飲食店", point: "料理スタイリングは「色・艶・盛り付けの高さ」の3要素が重要です。窓際の自然光か柔らかいLEDライトを使い、真俯瞰か斜め45度のアングルで撮影します。食材の質感・蒸気・艶を捉えるタイミングが食欲をそそる写真の鍵です。" },
                { industry: "美容室", point: "施術写真はヘアの艶と仕上がりが伝わる明るいライティングが必須です。モデル（お客様）の許可を得た上で正面・横・後ろの3アングルを撮影。プロフィール写真は自然光の入るサロン内でスタッフの笑顔と作業風景を組み合わせて世界観を統一します。" },
                { industry: "歯科・クリニック", point: "清潔感・明るさ・信頼感を演出するため、白・グレー系の背景と均一な明るさが基本です。スタッフの笑顔・清潔な院内写真・患者との自然なシーンで「安心できる医院」を表現します。過度な演出は信頼感を損なうため、リアルで自然な写真が効果的です。" },
                { industry: "建設・リフォーム", point: "ビフォーアフターは同じアングル・同じ時間帯で撮影することが絶対条件です。施工前の状態を記録する習慣をつけることが重要で、工事中の過程も「ドキュメンタリー」として投稿する価値があります。完成写真はドローン撮影で全体感を見せると外観の魅力が最大化されます。" },
                { industry: "小売店", point: "商品スタイリングは「商品＋背景＋小物」の3要素を揃えます。背景はブランドのイメージカラーに統一し、季節感のある小物で「この商品を使ったライフスタイル」を表現します。真俯瞰（平置き）写真と使用シーン写真を交互に投稿するパターンが効果的です。" },
                { industry: "学習塾", point: "授業中の写真は子どもたちの自然な表情・集中している様子を捉えることが重要です。先生と生徒のリアルなコミュニケーションシーン・ホワイトボードの説明場面など「実際の授業」が伝わる写真が保護者の信頼を獲得します。プライバシーへの配慮（顔出しの許可確認）が必須です。" },
                { industry: "不動産", point: "物件写真は「採光・空間の広さ・使い勝手」を最大限に伝える構図が重要です。広角レンズ（スマートフォンの超広角モード）でリビングを撮影し、昼間の自然光が入る時間帯に撮影します。周辺環境（公園・駅・商業施設）の写真も物件の魅力として積極的に投稿します。" },
                { industry: "フィットネス", point: "トレーニングシーンは「動き・力強さ・楽しさ」を捉えることが重要です。連写モードで動きのある写真を選ぶか、短い動画（リール）で実際のトレーニング内容を見せます。ビフォーアフターは会員の許可を得た上で、同じ条件（照明・服装・アングル）で撮影することで説得力が生まれます。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "28px", background: "#FFFFFF", borderRadius: "4px", border: "1px solid #E8E4DC" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                    <span className="text-[12px] font-mono shrink-0" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a" }}>{item.industry}</p>
                  </div>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: 実装・運用フロー */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              実装・運用フロー
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "640px" }}>
              写真ディレクションは「センス」ではなく「型」です。以下の10ステップを順番に実施することで、再現性のある高品質なビジュアル運用が確立されます。
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                { step: "ブランドビジュアルコンセプト決定", detail: "「どんな世界観を伝えるか」を言語化します。ナチュラル・高級感・ポップ・プロフェッショナルなど、ターゲット顧客に響くイメージを3〜5つのキーワードで定義し、参考となるInstagramアカウント・写真を10〜20枚収集します。" },
                { step: "カラーパレット・フィルター選定", detail: "ブランドカラーに合ったLightroomプリセット（フィルター）を選定します。暖色系・寒色系・モノクロ系など方向性を決め、明るさ・コントラスト・色温度の基本パラメータを設定したプリセットを1〜2種類作成します。" },
                { step: "撮影場所・時間帯ガイドライン", detail: "店舗内・商品撮影の「定位置」を決めます。自然光が最も入る場所・時間帯を確認し、最適な撮影スポットを3〜5か所決定します。一度決めた場所で継続撮影することでフィードの統一感が生まれます。" },
                { step: "必要機材・照明ツール選定", detail: "スマートフォン・LEDリングライト・撮影背景紙・ミニ三脚の4点セット（合計1〜2万円）が基本です。業種に応じて料理撮影用の反射板・外観撮影用の広角レンズアタッチメントを追加します。高額機材は必要になってから検討で十分です。" },
                { step: "被写体別撮影アングル集", detail: "業種の主要被写体（料理・商品・スタッフ・空間等）ごとに「黄金アングル」を決定します。各被写体について真俯瞰・斜め45度・水平の3方向を試し、最も魅力的なアングルを「撮影マニュアル」として記録します。" },
                { step: "構図の基本（三分割・引き・寄り）", detail: "三分割法（被写体を画面の1/3の位置に配置）・引き写真（全体の雰囲気を見せる）・寄り写真（質感・細部を見せる）の3パターンを意識して撮影します。1つのテーマで3パターン撮影し、投稿に変化を出します。" },
                { step: "スマホでの撮影テクニック指導", detail: "グリッド線表示（水平確認）・タップピント合わせ・露出スライダー操作・ポートレートモード活用・連写モード使用の5つを基本スキルとしてスタッフに共有します。撮影前チェックリストを作成して毎回確認する習慣を作ります。" },
                { step: "編集アプリ・フィルターの統一化", detail: "Lightroom Mobileに作成したプリセットを全スタッフが使える状態にします。編集手順を動画マニュアルにまとめ、誰が編集しても同じ仕上がりになる「編集の型」を作ります。加工のしすぎ禁止ルールも明文化します。" },
                { step: "撮影スケジュール・素材ストック計画", detail: "月間投稿計画と連動した撮影スケジュールを作成します。週1回の撮影セッション（2時間）で月分の素材を一括撮影するストック方式を採用し、投稿直前に撮影するのをやめます。季節・イベントに合わせた先行撮影計画も合わせて作成します。" },
                { step: "定期的なビジュアル見直し", detail: "3か月ごとにフィード全体を見直し、カラートーン・撮影スタイル・エンゲージメントの高い写真パターンを分析します。保存率の高い写真タイプを増やし・低い写真タイプを改善するPDCAを回します。季節の変わり目はビジュアルテーマを微調整します。" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", alignItems: "flex-start", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.step}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.85" }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs & Metrics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              成果を見るための指標
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "640px" }}>
              写真品質の改善効果は「いいね数」より以下の指標で判断します。写真ディレクション改善前後を比較することで定量的な効果測定が可能になります。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              {[
                { kpi: "投稿の保存率", where: "Instagram インサイト → 保存数 ÷ リーチ数", note: "「後で見返したい」と思われる写真への評価指標。写真品質改善の最も直接的な指標でアルゴリズム評価にも影響する。" },
                { kpi: "エンゲージメント率", where: "Instagram インサイト → (いいね+保存+コメント) ÷ リーチ数", note: "写真の「止まる力」を測る指標。品質改善後に上昇する場合、ビジュアルが視覚的に引き付けている証拠。" },
                { kpi: "リーチ数推移", where: "Instagram インサイト → リーチ（月次比較）", note: "エンゲージメント率が上がるとアルゴリズムがリーチを拡大する。写真品質改善から2〜4週間後に変化が現れることが多い。" },
                { kpi: "フォロワー増加率（写真品質改善後）", where: "Instagram インサイト → フォロワー増加数（週次）", note: "プロフィールページを見て「フォローする」判断が増える。改善前後の月次フォロワー増加数を比較して効果を確認する。" },
                { kpi: "ストーリーズ閲覧完了率", where: "Instagram ストーリーズインサイト → 完了率", note: "写真・動画の品質と内容の面白さを測る指標。完了率が50%以上あれば高品質の目安。低い場合は冒頭の引きを改善する。" },
                { kpi: "フィード統一感スコア（主観評価）", where: "月1回、プロフィールを客観的に見て5段階評価", note: "外部の目（スタッフ・知人・支援会社）で統一感を評価する定性指標。カラートーン・構図スタイル・雰囲気のバラつきをチェックする。" },
                { kpi: "ウェブサイトタップ数", where: "Instagram インサイト → プロフィール → リンクタップ", note: "魅力的なプロフィール写真がウェブ流入・予約・問い合わせへの導線になっているかを確認する最終的な集客指標。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", background: "#FFFFFF", borderRadius: "4px", border: "1px solid #E8E4DC" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "10px" }}>
                    <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a" }}>{item.kpi}</p>
                  </div>
                  <p style={{ fontSize: "11px", color: "#c4b89a", marginBottom: "8px", paddingLeft: "28px" }}>{item.where}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8", paddingLeft: "28px" }}>{item.note}</p>
                </div>
              ))}
            </div>
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

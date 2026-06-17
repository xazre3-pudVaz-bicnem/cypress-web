import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SNS投稿AI自動化｜Instagram・X・TikTok投稿文を自動生成｜株式会社サイプレス",
  description: "AIを使ったSNS投稿の自動化・効率化。Instagram・X・TikTokの投稿文・キャプション・ハッシュタグをChatGPT/Claude APIで自動生成し、Buffer/Zapier/Makeと連携して継続的な情報発信体制を構築する方法を解説。",
  keywords: ["SNS投稿自動化", "AI SNS運用", "Instagram自動化", "TikTok投稿自動化", "X投稿自動化", "ハッシュタグ自動生成", "SNS効率化", "ChatGPT SNS"],
  openGraph: {
    title: "SNS投稿AI自動化｜Instagram・X・TikTok投稿文を自動生成",
    description: "AIを使ったSNS投稿の自動化・効率化。Instagram・X・TikTokの投稿文・キャプション・ハッシュタグをChatGPT/Claude APIで自動生成し、Buffer/Zapier/Makeと連携して継続的な情報発信体制を構築する方法を解説。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/ai/sns-automation" },
};

const faqItems = [
  {
    q: "SNS投稿を完全に自動化することはできますか？",
    a: "技術的には可能ですが、完全自動化はリスクが伴います。事実誤認・炎上リスク・ブランドトーンのずれなどが発生しやすいため、AIが下書きを生成→人間がチェック・投稿する「半自動化」が現実的かつ効果的です。",
  },
  {
    q: "SNS自動化に使えるツールは何がありますか？",
    a: "投稿スケジュール管理にはBuffer・Hootsuite・Later・Metricool、投稿文生成にはChatGPT・Claude、Instagram自動投稿にはMeta Business Suite（公式）が利用できます。ZapierやMakeでこれらを連携することで、より高度なワークフローを構築できます。",
  },
  {
    q: "GBP（Googleビジネスプロフィール）の投稿も自動化できますか？",
    a: "GBP投稿はGoogle公式APIを通じて自動投稿が可能です。ただし公式ツールでの直接自動投稿は制限があるため、APIを活用したカスタムシステムの構築が必要な場合があります。Makeなどのノーコードツールでの連携実績もあります。",
  },
  {
    q: "AIが生成したSNS投稿文はそのまま使えますか？",
    a: "下書きとして活用することを推奨します。ブランドのトーン・口調・絵文字の使い方・ハッシュタグの選定は人間がチェックします。繰り返し使うことでAIがブランドの書き方を学習し、精度が上がります。",
  },
  {
    q: "SNS投稿の頻度はどのくらいが理想ですか？",
    a: "Instagramは週3〜5回、X（旧Twitter）は毎日1〜3回、TikTokは週3〜7回、GBP投稿は週1〜2回が目安です。継続性が最重要のため、自動化でまず「途切れない体制」を作ることが先決です。",
  },
  {
    q: "SNS自動化は小規模なビジネスにも有効ですか？",
    a: "特に有効です。スタッフが少なく投稿に時間を割けない小規模ビジネスこそ、AIによる下書き生成とスケジュール管理が大きな効率化につながります。週1回の確認と承認作業だけで継続的な発信が可能になります。",
  },
  {
    q: "自動化した投稿のエンゲージメントは下がりませんか？",
    a: "コンテンツの質を維持すれば、エンゲージメントへの悪影響はほとんどありません。むしろ投稿頻度が上がることでリーチが増加するケースが多いです。コメント返信などの双方向コミュニケーションは人間が担当することが重要です。",
  },
  {
    q: "TikTok投稿のキャプションもAIで生成できますか？",
    a: "はい。TikTokのキャプションはInstagramより短く、トレンドのハッシュタグやサウンド連携が重要です。AIに動画の内容・ターゲット・ジャンルを伝えることで、TikTok向けの短文キャプションとハッシュタグセットを自動生成できます。",
  },
  {
    q: "ハッシュタグはAIで自動選定できますか？",
    a: "はい。業種・投稿内容・ターゲット地域・競合調査をもとにプロンプトを設計することで、AIが適切なハッシュタグセット（ビッグ・ミドル・スモールの組み合わせ）を提案します。週次で最新トレンドと照合する更新フローも設定できます。",
  },
  {
    q: "複数のSNSプラットフォームに同じ内容を投稿してもよいですか？",
    a: "同じ内容でもプラットフォームごとに文体・長さ・ハッシュタグ・絵文字の使い方を変えることが重要です。AIを活用すれば、1つのコア情報から各SNS向けに最適化されたバリエーションを一括生成できます。",
  },
  {
    q: "APIの利用料はどのくらいかかりますか？",
    a: "ChatGPT APIはgpt-4o-miniを使用した場合、月間500投稿の生成で数百円〜千円程度です。Claude APIも同様の価格帯です。月間のAPI費用はツール連携費用（Zapier・Buffer等）と合わせて月額数千円〜2万円程度に収まるケースが多いです。",
  },
  {
    q: "ブランドのトーンをAIに学習させることはできますか？",
    a: "はい。過去の優良投稿サンプル・NGワードリスト・ブランドガイドラインをシステムプロンプトに組み込むことで、AIがブランドトーンを維持した文章を生成するようになります。初期設定に2〜3時間程度かかりますが、一度設定すれば継続的に機能します。",
  },
  {
    q: "Instagramの画像生成もAIで自動化できますか？",
    a: "DALL-E 3・Midjourney・Stable Diffusionなどの画像生成AIとテキスト生成AIを組み合わせることで、投稿画像とキャプションをセットで自動生成できます。ただし、実際の商品・施術写真が重要な業種（美容室・飲食等）では、写真撮影→AIキャプション生成の組み合わせが現実的です。",
  },
  {
    q: "投稿の最適な時間帯はどう決めればよいですか？",
    a: "各SNSのインサイト機能でフォロワーのアクティブ時間帯を確認し、最もエンゲージメントが高い時間帯をBuffer等のスケジューリングツールに設定します。AIでの時間帯分析ツールも活用できますが、まず自社のインサイトデータを基準にすることが重要です。",
  },
  {
    q: "業種によって自動化の向き不向きはありますか？",
    a: "飲食・美容・小売など「お知らせ系の投稿が多い業種」は特に自動化効果が高いです。一方、クリエイター・アーティストなど「個人の声・体験」が価値の中心になる業種は、AI生成比率を低めにして人間らしさを残すバランス設計が重要です。",
  },
  {
    q: "AIが炎上につながるような投稿を生成することはありますか？",
    a: "適切なガードレールを設定せずに使用した場合、不適切な表現・事実誤認・差別的表現が生成されるリスクがあります。プロンプトに禁止事項・注意事項を明記し、必ず人間が最終確認を行う工程を設けることが重要です。",
  },
  {
    q: "X（旧Twitter）のスレッド投稿もAIで作れますか？",
    a: "はい。1つのテーマに対して、AIがスレッド形式（複数のツイートの流れ）で展開する構成を生成できます。まず結論→理由・根拠→具体例→まとめCTAという構成テンプレートをプロンプトに組み込むことで、再現性高くスレッドを生成できます。",
  },
  {
    q: "SNS自動化の導入にはどのくらいの期間がかかりますか？",
    a: "ブランドガイドライン作成・プロンプト設計・ツール連携設定・テスト運用を含めて、通常2〜4週間が目安です。既存のブランドガイドラインがある場合や、対象SNSが1〜2つに絞られる場合はより短期間での導入が可能です。",
  },
  {
    q: "サイプレスに依頼した場合、どこまで対応してもらえますか？",
    a: "現状分析・ブランドガイドライン文書化・プロンプト設計・API連携・ツール設定・テスト運用・品質確認まで一貫してご支援します。導入後の月次効果測定レポートや、プロンプトの継続的な改善サポートにも対応しています。",
  },
  {
    q: "自動化を始めるにあたって最低限必要なものは何ですか？",
    a: "①各SNSのビジネスアカウント、②ChatGPT/Claude等のAPIキー（有料プラン）、③Buffer等のスケジューリングツールのアカウント（無料プランから可）、④自社のブランドガイドライン（なければ作成から支援）が最低限必要です。",
  },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用支援とは", desc: "AI支援の概要" },
  { href: "/ai/blog-automation", label: "AIブログ自動化", desc: "ブログ記事の自動化" },
  { href: "/ai/automation", label: "AI業務自動化", desc: "Make/Zapierで業務効率化" },
  { href: "/ai/content", label: "AIコンテンツ制作", desc: "コンテンツ制作の効率化" },
  { href: "/ai/chatbot", label: "チャットボット構築", desc: "問い合わせ対応の自動化" },
  { href: "/ai/workflow", label: "AIワークフロー設計", desc: "n8n・Zapierとの連携設計" },
  { href: "/ai/seo-content", label: "AI SEOコンテンツ", desc: "検索に強いコンテンツ生成" },
  { href: "/ai/report", label: "AIレポート自動化", desc: "月次レポートの自動生成" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "SNS運用代行" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "サイプレスのAI支援" },
  { href: "/meo/google-post", label: "Google投稿", desc: "GBP投稿運用" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップ集客" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "コンテンツ戦略全般" },
  { href: "/seo", label: "SEO対策", desc: "検索エンジン最適化" },
  { href: "/aio", label: "AIO対策", desc: "AI検索最適化" },
  { href: "/industry/restaurant", label: "飲食業のAI活用", desc: "飲食店向けSNS自動化" },
  { href: "/industry/beauty", label: "美容室のAI活用", desc: "美容室向けSNS戦略" },
  { href: "/industry/clinic", label: "クリニックのAI活用", desc: "医療・歯科向けSNS" },
  { href: "/industry/retail", label: "小売・ECのAI活用", desc: "EC・小売のSNS戦略" },
  { href: "/industry/real-estate", label: "不動産のAI活用", desc: "不動産業のSNS活用" },
  { href: "/knowledge/chatgpt-business", label: "ChatGPTビジネス活用", desc: "具体的な活用事例" },
  { href: "/knowledge/ai-prompt", label: "プロンプト設計ガイド", desc: "効果的なプロンプトの書き方" },
  { href: "/column/seo", label: "SEOコラム", desc: "AI×マーケティングの最新情報" },
  { href: "/contact", label: "無料相談", desc: "SNS自動化のご相談" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#F9F8F5" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/ai" style={{ color: "#6B7280" }}>AI活用支援</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>SNS投稿自動化</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>AI — SNS Automation</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SNS投稿AI自動化<br />Instagram・X・TikTokの投稿文を自動生成
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              SNSは継続的な発信が最も重要ですが、毎回投稿文を考えるのは時間がかかります。AIを活用した投稿文・キャプション・ハッシュタグの自動生成と自動スケジューリングで、途切れない情報発信体制を構築します。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              Instagram・X（旧Twitter）・TikTok・Googleビジネスプロフィールの投稿をChatGPT/Claude APIで一括生成し、Buffer・Make・Zapierと連携して自動スケジューリングする「半自動化」フローで、品質を維持しながら発信頻度を高めます。
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_03.png" alt="SNS投稿AI自動化のイメージ" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.5)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.7, maxWidth: "640px" }}>
                SNS発信の最大の敵は「続かないこと」。AIが下書きを生成し、人間が確認する半自動化フローで途切れない運用を実現します。
              </p>
            </div>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black mb-10" style={{ fontSize: "clamp(20px,2.8vw,32px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                "InstagramのキャプションとハッシュタグをAIで自動生成する具体的な方法",
                "X・TikTokなど複数SNSへの文体変換を一括で行うプロンプト設計",
                "ChatGPT/Claude APIとBuffer・Zapier・Makeを連携させる自動化フロー",
                "ブランドトーンを維持しながらAI生成品質を高める学習・改善の手順",
                "業種別（飲食・美容・歯科・不動産など）の具体的な活用ポイントと事例",
                "SNS自動化の効果を測定するためのKPIと計測場所の一覧",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "16px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "15px", flexShrink: 0, marginTop: "1px" }}>→</span>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hidden Costs */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Hidden Costs</p>
            <h2 className="font-black mb-10" style={{ fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontFamily: "var(--font-serif)" }}>
              SNS自動化なしで起きる4つのコスト
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "毎回の投稿文考案に時間が奪われる", b: "1投稿あたり20〜40分かかる投稿文作成が、週複数回発生します。その時間を接客・施術・本業に使えていない機会損失です。" },
                { t: "継続できずフォロワーが離れる", b: "投稿が途切れるとアルゴリズムに不利になりフォロワーも離れます。「再開」するたびにゼロに近い状態から積み上げ直しになります。" },
                { t: "投稿内容がバラつきブランドが伝わらない", b: "疲れた日・忙しい日に「とりあえず」投稿した内容はブランドトーンがずれます。一貫性のない発信は信頼性を低下させます。" },
                { t: "GBP投稿が止まりMEO評価が下がる", b: "Googleビジネスプロフィールへの投稿停止は「活動していないビジネス」と評価され、Googleマップでの表示順位に影響します。" },
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
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Challenges</p>
            <h2 className="font-black mb-10" style={{ fontSize: "clamp(20px,2.8vw,32px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                {
                  t: "SNS更新に毎日1〜2時間かかっている",
                  b: "投稿文の考案・画像の選定・ハッシュタグ調査・スケジュール登録を毎回手作業で行っているため、時間がかかります。AIで下書き生成を自動化するだけで作業時間を8割以上削減できます。",
                },
                {
                  t: "投稿ネタが切れてしまう",
                  b: "「何を投稿すればいいかわからない」状態は多くの事業者が直面します。業種・季節・イベント・よくある質問などをもとにAIがネタ出しをする「コンテンツカレンダー自動生成」フローで解決できます。",
                },
                {
                  t: "文章力に自信がなく投稿をためらってしまう",
                  b: "情報を箇条書きで入力するだけでAIが自然な投稿文に変換するフローを設計すれば、文章力は不要です。キーワードと情報を渡すだけで完成品に近い下書きが生成されます。",
                },
                {
                  t: "複数SNSで異なる文体が必要で対応が大変",
                  b: "Instagramは絵文字・改行多め、Xは140字以内・簡潔、TikTokはトレンドワード入り短文など、プラットフォームごとに最適な文体が異なります。1つのコア情報を各SNS向けに変換するプロンプトを設計することで一括対応できます。",
                },
                {
                  t: "ハッシュタグ選定に毎回時間がかかる",
                  b: "ハッシュタグは「人気すぎるもの（埋もれる）」「ニッチすぎるもの（リーチしない）」のバランスが重要です。AIに業種・地域・投稿内容を渡すことで、ビッグ・ミドル・スモールの最適な組み合わせを瞬時に生成できます。",
                },
                {
                  t: "AIで作った文章が薄くてつまらない",
                  b: "汎用的なプロンプトでは当たり障りのない文章になります。ターゲット顧客の悩み・業種特有の専門用語・ブランドの口調・過去の優良投稿サンプルをシステムプロンプトに組み込むことで文章の質が大きく向上します。",
                },
                {
                  t: "ブランドトーンを維持したAI生成が難しい",
                  b: "AIへの指示にブランドガイドライン（トーン・禁止ワード・口調の例文・ターゲット像）を明記することが重要です。初期設定に時間はかかりますが、一度設定すれば安定したトーンの文章を量産できます。",
                },
                {
                  t: "画像生成AIとの組み合わせ方が分からない",
                  b: "テキスト生成AIと画像生成AI（DALL-E・Midjourney）を連携させるには、まずどの投稿で画像生成を使うかを明確にする必要があります。実際の商品・施術写真がある業種ではテキストのみをAI化し、告知系・インフォグラフィック系の投稿で画像生成AIを活用するのが現実的です。",
                },
                {
                  t: "自動投稿ツール（Buffer/Hootsuite等）とAIの連携方法が分からない",
                  b: "Buffer・HootsuiteはAPIを公開しており、ZapierやMakeを経由してChatGPT APIの出力を直接スケジュールに登録できます。技術的な設定は複雑に見えますが、ノーコードツールで視覚的に設計できるため、実装経験者のサポートがあれば比較的短期間で構築できます。",
                },
                {
                  t: "効果的な投稿時間の自動選定ができていない",
                  b: "各SNSのインサイトAPIからフォロワーのアクティブ時間帯データを取得し、エンゲージメントが高い時間帯を自動分析して投稿スケジュールに反映させることができます。これをMake/n8nで自動化すれば、人手なしで最適投稿時間を継続的に更新できます。",
                },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "22px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-bold mb-2" style={{ fontSize: "15px", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automatable Tasks */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Automatable Tasks</p>
            <h2 className="font-black mb-10" style={{ fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              自動化できるSNS業務
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "Instagram投稿文・ハッシュタグの生成", b: "商品写真や施術写真にAIが説明文・キャプション・ハッシュタグを生成します。業種・ターゲット・投稿頻度などの情報を学習させることで、ブランドに合った文章を量産できます。" },
                { n: "02", t: "X（旧Twitter）の定期投稿・スレッド生成", b: "業界情報・ブログ更新告知・お客様の声などを定期投稿するスケジュールをAIと連携して管理します。スレッド形式の教育コンテンツもAIが構成から文章まで生成できます。" },
                { n: "03", t: "TikTokキャプション・動画説明文の生成", b: "動画の内容・ターゲット・ジャンルを入力するだけで、TikTok向けの短文キャプションとトレンドハッシュタグセットを自動生成します。動画台本のドラフト生成にも対応できます。" },
                { n: "04", t: "GBP（Googleビジネスプロフィール）への投稿", b: "最新情報・イベント・商品情報の投稿文をAIが生成し、スケジュール管理します。Googleが評価する「アクティブなビジネス」としての状態を維持できます。" },
                { n: "05", t: "投稿スケジュールの管理（Buffer等連携）", b: "Buffer・Later・Hootsuite等のスケジューリングツールと連携し、最適な投稿時間に自動で発信します。曜日・時間帯別のエンゲージメントデータに基づいた最適投稿時間を設定できます。" },
                { n: "06", t: "投稿実績のレポート自動集計", b: "各SNSのインサイト（リーチ数・エンゲージメント率・フォロワー増減）を週次・月次で自動集計し、レポート化します。効果的な投稿パターンの分析と改善に活用できます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p className="font-semibold mb-2" style={{ fontSize: "15px", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section C: 業種別の活用ポイント */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black mb-10" style={{ fontSize: "clamp(20px,2.8vw,32px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の活用ポイント
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "0" }}>
              {[
                {
                  industry: "飲食",
                  point: "日替わりメニュー・イベント情報の自動生成",
                  detail: "本日のランチメニュー・週末イベント・季節限定メニューなど、毎日更新が必要な情報をAIが投稿文化します。料理名・特徴・価格を入力するだけで、食欲をそそるキャプションとハッシュタグセットが完成します。",
                },
                {
                  industry: "美容室",
                  point: "施術メニュー・お知らせの自動化",
                  detail: "Before/After写真に対するキャプション生成、季節のヘアケアアドバイス、スタイリスト紹介文など、定期コンテンツのテンプレート化が有効です。予約空き情報のリアルタイム告知もAI連携で自動化できます。",
                },
                {
                  industry: "歯科・クリニック",
                  point: "健康情報・お知らせのAI生成",
                  detail: "医療広告ガイドラインに準拠した健康情報・予防ケアアドバイス・診療時間変更のお知らせなどを自動生成します。薬機法・医療広告規制への対応をプロンプトに組み込むことで、安全な情報発信が可能です。",
                },
                {
                  industry: "建設・リフォーム",
                  point: "施工事例紹介文の自動化",
                  detail: "施工前後の写真と工事内容を入力するだけで、Before/After紹介文・お客様のメリット・工事のポイントを含む投稿文を自動生成します。実績の継続発信がInstagramでの集客力向上につながります。",
                },
                {
                  industry: "小売・EC",
                  point: "商品紹介・セール告知の自動化",
                  detail: "商品名・特徴・価格・ターゲット顧客を入力するだけで、購買意欲を高める商品紹介文を自動生成します。セール情報・期間限定情報の告知投稿もテンプレート化することで、スタッフ誰でも高品質な投稿が作れます。",
                },
                {
                  industry: "学習塾",
                  point: "合格速報・お知らせの自動化",
                  detail: "合格速報・体験授業の募集・学習のヒントコンテンツなどを定期的に発信するスケジュールを自動化します。保護者に安心感を与える教育コンテンツをAIが定期生成することで、塾の専門性を継続的に発信できます。",
                },
                {
                  industry: "不動産",
                  point: "物件紹介文の自動化",
                  detail: "物件情報（間取り・広さ・立地・価格）を入力するだけで、購買・賃貸検討者の心理に訴える物件紹介文を自動生成します。地域情報・周辺施設情報を組み合わせたローカルコンテンツの自動生成も有効です。",
                },
                {
                  industry: "BtoB",
                  point: "業界情報・コラムのAI補助",
                  detail: "LinkedIn・X向けに業界トレンド・専門知識・事例紹介などの教育系コンテンツをAIが補助生成します。専門家としての権威性を継続的に発信することで、問い合わせ獲得につながるSNS戦略を構築できます。",
                },
              ].map((item, i) => (
                <div key={i} style={{ padding: "28px 0 28px 0", borderTop: "1px solid #E8E4DC", paddingRight: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                    <span className="text-[12px] font-mono shrink-0" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-bold text-[12px] tracking-widest uppercase" style={{ color: "#c4b89a" }}>{item.industry}</span>
                  </div>
                  <p className="font-semibold mb-2" style={{ fontSize: "15px", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.point}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: 導入・実装フロー */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 className="font-black mb-10" style={{ fontSize: "clamp(20px,2.8vw,32px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              導入・実装フロー
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                {
                  step: "01",
                  t: "SNS投稿の現状分析（量・質・頻度）",
                  b: "現在の投稿頻度・1投稿にかかる時間・どのSNSに注力しているか・投稿内容の傾向を棚卸しします。どこに最も時間がかかっているかを数値で把握することが出発点です。",
                },
                {
                  step: "02",
                  t: "AI化対象の選定",
                  b: "全投稿をAI化するのではなく、パターン化しやすいコンテンツ（お知らせ・商品紹介・施工事例等）から優先してAI化します。個人の体験・リアルな声が価値の投稿は人間が担当する分担を明確にします。",
                },
                {
                  step: "03",
                  t: "ブランドトーン・ガイドライン文書化",
                  b: "投稿の口調・禁止ワード・絵文字の使い方・ターゲット顧客像・競合との差別化ポイントをドキュメント化します。このガイドラインがAIへの指示文（システムプロンプト）の基礎になります。",
                },
                {
                  step: "04",
                  t: "プロンプトテンプレート設計（業種別）",
                  b: "SNS種別・投稿カテゴリ・業種ごとのプロンプトテンプレートを設計します。「メニュー告知用」「施工事例紹介用」「季節イベント用」など目的別に複数テンプレートを作成し、再現性を高めます。",
                },
                {
                  step: "05",
                  t: "ChatGPT/Claude API連携",
                  b: "APIキーの取得・システムプロンプトの設定・レスポンス形式の調整を行います。SNS種別ごとに文字数制限・フォーマット指定を設定し、そのまま使えるアウトプットが返ってくるよう最適化します。",
                },
                {
                  step: "06",
                  t: "自動投稿ツール（Make/Zapier/Buffer）との連携",
                  b: "APIで生成された投稿文をBuffer等のスケジューリングツールに自動登録するワークフローをMakeまたはZapierで構築します。承認フロー（人間がレビュー後に投稿確定）も設定します。",
                },
                {
                  step: "07",
                  t: "テスト運用（1週間）",
                  b: "本番環境で1週間テスト運用を行い、生成された投稿文の品質・トーンのズレ・フォーマットの問題を確認します。実際に投稿される前に担当者がチェックできる体制を確保します。",
                },
                {
                  step: "08",
                  t: "品質確認・プロンプト調整",
                  b: "テスト運用で発見した問題点をプロンプトに反映させます。「このような表現はNG」「このパターンがよい」という具体的なフィードバックを蓄積し、精度を段階的に向上させます。",
                },
                {
                  step: "09",
                  t: "本番稼働",
                  b: "品質確認完了後、本番稼働を開始します。最初の1ヶ月は週次でレビューを行い、問題が発生した場合に即対応できる体制を維持します。担当者への運用マニュアルも整備します。",
                },
                {
                  step: "10",
                  t: "月次効果測定",
                  b: "投稿作成時間の削減率・投稿数の変化・エンゲージメント率・フォロワー推移を月次で計測・レポートします。データをもとにプロンプト改善・投稿戦略の見直しを継続的に行います。",
                },
              ].map((item) => (
                <div key={item.step} style={{ display: "flex", gap: "24px", padding: "22px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.step}</span>
                  <div>
                    <p className="font-semibold mb-2" style={{ fontSize: "15px", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
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
            <h2 className="font-black mb-10" style={{ fontSize: "clamp(20px,2.8vw,32px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                {
                  kpi: "投稿作成時間削減率",
                  how: "自動化前後の1投稿あたり所要時間を計測。タスク管理ツール（Notion・Toggl等）で計測。",
                },
                {
                  kpi: "月間投稿数増加率",
                  how: "各SNSの月間投稿数を比較。Buffer・Hootsuite等のダッシュボードまたは各SNSのインサイト機能で確認。",
                },
                {
                  kpi: "エンゲージメント率推移",
                  how: "（いいね+コメント+保存+シェア）÷リーチ数。各SNSのインサイト機能で週次・月次に計測し、自動化前後を比較。",
                },
                {
                  kpi: "AI生成投稿の品質スコア",
                  how: "レビュー担当者が1〜5点でAI生成投稿の品質評価を記録。スプレッドシートで管理し、プロンプト改善の参考にする。",
                },
                {
                  kpi: "フォロワー増加率",
                  how: "月次のフォロワー増減数と増加率。各SNSのインサイトまたはMetricool等の分析ツールで計測。",
                },
                {
                  kpi: "SNS経由問い合わせ数",
                  how: "問い合わせフォームの流入元・LINE追加数・電話でのSNS流入を月次で集計。UTMパラメータまたは問い合わせ時の流入確認で計測。",
                },
                {
                  kpi: "API月間コスト",
                  how: "ChatGPT/Claude APIの月間使用量と費用。OpenAI/AnthropicのUsageダッシュボードで確認。投稿数あたりのコスト効率を算出。",
                },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-semibold mb-1" style={{ fontSize: "15px", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.kpi}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.how}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="SNS自動化のご相談"
          body="AIを活用したSNS投稿文の生成・スケジュール管理・効果測定の仕組みを構築します。Instagram・X・TikTok・GBPの継続的な運用体制をお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}

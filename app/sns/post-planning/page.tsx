import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SNS投稿企画・運用設計｜集客につながるコンテンツ制作",
  description: "SNSの投稿企画・コンテンツ制作。ターゲットの関心・季節・イベントを踏まえた投稿ネタ出し・キャプション・ハッシュタグをAI活用で効率的に制作。",
  keywords: ["SNS投稿企画", "コンテンツ制作", "SNS運用設計", "投稿ネタ", "キャプション制作"],
  openGraph: {
    title: "SNS投稿企画・運用設計｜集客につながるコンテンツ制作",
    description: "SNSの投稿企画・コンテンツ制作。ターゲットの関心・季節・イベントを踏まえた投稿ネタ出し・キャプション・ハッシュタグをAI活用で効率的に制作。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_18_57.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/sns/post-planning" },
};

const faqItems = [
  { q: "SNSの投稿ネタが思いつかなくなったらどうすればいいですか？", a: "コンテンツカレンダーを事前に作成し、商品・サービス紹介・スタッフ紹介・お客様の声・季節イベント・業界知識・舞台裏など投稿カテゴリを決めておくことで、ネタ切れを防げます。" },
  { q: "投稿のキャプション（文章）は誰が書きますか？", a: "株式会社サイプレスが担当します。ヒアリングでブランドのトーン・マナーを把握した上で、AIを活用しながらブランドらしい文章を作成します。最終確認は必ずクライアント様に行います。" },
  { q: "投稿頻度はどのくらい必要ですか？", a: "フィード投稿は週3〜5回、ストーリーズは毎日が理想です。ただし継続が最も重要なため、無理のない頻度を設定します。" },
  { q: "投稿の効果はどうやって測定しますか？", a: "Instagramインサイト（リーチ・エンゲージメント・プロフィール訪問数・フォロワー増加数）を月次で分析します。成果の高い投稿タイプ・ハッシュタグ・投稿時間帯を特定して改善します。" },
  { q: "競合アカウントの分析もしてもらえますか？", a: "はい。同業他社の優良アカウントを調査し、エンゲージメントが高いコンテンツタイプ・投稿頻度・ハッシュタグ戦略を参考にした運用設計を行います。" },
  { q: "ストーリーズとフィード投稿の違いは何ですか？", a: "フィード投稿は永続的に残りプロフィールの印象を形成します。ストーリーズは24時間限定で、日常感・速報性・アンケート機能などエンゲージメントを高める用途に向いています。両方を計画的に組み合わせることが効果的です。" },
  { q: "写真や動画の撮影も依頼できますか？", a: "はい。フォトディレクション・撮影立ち会い・撮影指示書の作成が可能です。スマートフォンでの撮影品質を上げるためのアドバイスも行います。" },
  { q: "ハッシュタグはいくつ付ければいいですか？", a: "Instagramでは5〜15個が効果的とされています。大量タグより、投稿内容に合った関連性の高いタグを厳選する方が発見率が高まります。ビッグタグ・ミドルタグ・ニッチタグをバランスよく組み合わせます。" },
  { q: "Reels（リール）も企画してもらえますか？", a: "はい。Reelsは現在Instagramで最もリーチを拡大できるフォーマットです。フック・本編・CTAの構成でエンゲージメントを高める動画企画を行います。" },
  { q: "投稿内容の承認フローはどうなりますか？", a: "毎月月初に翌月分の投稿計画をまとめて提出し、クライアント様に確認いただきます。個別の投稿は72時間前を目安に共有し、修正があれば対応します。" },
  { q: "Instagramだけでなく他のSNSも対応していますか？", a: "Instagram・X（旧Twitter）・Facebook・TikTok・Googleビジネスプロフィールに対応しています。業種・ターゲット・目的に合わせて最適なプラットフォームを提案します。" },
  { q: "投稿のデザイン（画像加工）もお願いできますか？", a: "カルーセル投稿・フィード統一デザイン・インフォグラフィックなどの画像制作に対応しています。ブランドカラーとフォントを統一したデザインで視認性を高めます。" },
  { q: "月の途中でテーマや投稿内容を変更できますか？", a: "はい、柔軟に対応します。新商品のリリース・緊急情報・トレンドへの対応など、計画外の投稿が必要な場合も迅速にキャプション・素材の準備をサポートします。" },
  { q: "SNS運用を始めてから成果が出るまでどのくらいかかりますか？", a: "フォロワー増加・エンゲージメント改善は3〜6か月が目安です。ただし投稿品質・頻度・アカウントの現状によって異なります。まず3か月を目標に継続することが重要です。" },
  { q: "投稿企画だけでなく、SNS広告も相談できますか？", a: "はい。Meta広告（Instagram・Facebook）を活用したフォロワー獲得・集客広告にも対応しています。オーガニック運用と広告を組み合わせた総合的なSNS戦略を提案します。" },
  { q: "小さな店舗でもSNS投稿企画は意味がありますか？", a: "小規模店舗こそSNSは大きな差別化手段になります。チェーン店にはない個性・温かみ・地域密着感を発信することで、地元ユーザーのファン化と口コミ拡散につながります。" },
  { q: "SNS投稿と自社ウェブサイトはどう連携させますか？", a: "Instagramのビオリンク・リンクインバイオを活用して予約ページ・商品ページ・ブログへ誘導します。UTMパラメータでSNS経由のウェブサイト流入数を計測して改善を続けます。" },
  { q: "投稿のトンマナ（雰囲気）はどう統一しますか？", a: "ヒアリングシートとブランドガイドラインを作成し、色味・フィルター・文体・絵文字の使用ルールを明文化します。複数人で運用する場合もガイドラインに沿った統一感を保てます。" },
  { q: "ライバル店が多い業種でも差別化できますか？", a: "競合分析をもとに「同業他社がやっていないコンテンツ角度」を見つけます。スタッフの個性・製造工程・こだわりの素材など、他店が発信していない独自価値を軸にした投稿戦略を設計します。" },
  { q: "SNS投稿企画の費用はどのくらいですか？", a: "月額の運用プランによって異なります。投稿本数・写真制作・動画制作の有無によって変わりますので、まずは無料相談にてご要望をお聞きした上でお見積りします。" },
];

const relatedLinks = [
  { href: "/sns", label: "SNS集客とは", desc: "SNS集客の概要と効果" },
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタ集客の実践" },
  { href: "/sns/content-calendar", label: "コンテンツカレンダー", desc: "投稿スケジュール管理" },
  { href: "/sns/hashtag", label: "ハッシュタグ戦略", desc: "ハッシュタグ選定法" },
  { href: "/sns/photo-direction", label: "写真ディレクション", desc: "SNS写真の品質向上" },
  { href: "/sns/local-sns", label: "地域SNS集客", desc: "地元向けSNS戦略" },
  { href: "/ai/blog-automation", label: "AIブログ自動化", desc: "AI活用コンテンツ制作" },
  { href: "/ai/sns-automation", label: "SNS自動化", desc: "AIによる投稿自動化" },
  { href: "/services/sns", label: "SNSサービス詳細", desc: "SNS運用サービス一覧" },
  { href: "/seo", label: "SEO対策", desc: "検索上位表示の戦略" },
  { href: "/seo/local", label: "ローカルSEO", desc: "地域検索への対応" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップ集客" },
  { href: "/meo/google-business", label: "Googleビジネス最適化", desc: "GBP運用のポイント" },
  { href: "/aio", label: "AIO対策", desc: "AI検索への最適化" },
  { href: "/services/web-design", label: "Webデザイン", desc: "集客サイト制作" },
  { href: "/services/lp", label: "LP制作", desc: "コンバージョン特化LP" },
  { href: "/industry/restaurant", label: "飲食店向け集客", desc: "飲食業のSNS活用" },
  { href: "/industry/beauty", label: "美容室向け集客", desc: "サロンのSNS戦略" },
  { href: "/industry/clinic", label: "クリニック向け集客", desc: "医療機関のWeb戦略" },
  { href: "/industry/realestate", label: "不動産向け集客", desc: "不動産業のSNS活用" },
  { href: "/industry/construction", label: "建設・リフォーム集客", desc: "施工事例の活用法" },
  { href: "/area/tokyo", label: "東京のSNS運用", desc: "東京エリアの実績" },
  { href: "/area/osaka", label: "大阪のSNS運用", desc: "大阪エリアの実績" },
  { href: "/area/nagoya", label: "名古屋のSNS運用", desc: "名古屋エリアの実績" },
];

const contentItems = [
  { title: "ターゲット分析と投稿設計", body: "「誰に届けるか」を明確にすることが投稿企画の出発点です。年齢・性別・興味・行動パターンを分析し、ターゲットが「見たい・保存したい・シェアしたい」と思うコンテンツを設計します。" },
  { title: "投稿カテゴリの設定", body: "商品・サービス紹介・スタッフ紹介・お客様の声・舞台裏・業界知識・季節情報など5〜7のカテゴリを設定します。カテゴリのローテーションで投稿の多様性を保ちながら継続できます。" },
  { title: "キャプションライティング", body: "SNSのキャプションは「最初の1〜2行」が最重要です。「続きを読む」を押してもらうための冒頭フック・本文・CTA（行動喚起）の3部構成でブランドらしい文章を制作します。" },
  { title: "AIを活用した効率化", body: "ChatGPT・Claude等のAIツールを使って投稿アイデアのリストアップ・キャプションの下書き・ハッシュタグ候補生成を効率化します。AIの出力をブランドらしく磨く編集力が最終的な品質を決めます。" },
  { title: "最適な投稿タイミングの設計", body: "インサイトデータから「フォロワーが最もアクティブな曜日・時間帯」を分析します。一般的には平日19〜21時・土日は12時前後が反応が高い傾向です。予約投稿ツールで最適タイミングに自動公開します。" },
  { title: "月次PDCAと改善", body: "毎月インサイトデータをまとめ「エンゲージメント率が高かった投稿」「リーチが多かった投稿」を分析します。好調パターンを翌月の投稿計画に増やし、継続的にアカウントを成長させます。" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#F9F8F5" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px", display: "flex", gap: "6px", alignItems: "center" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/sns" style={{ color: "#6B7280" }}>SNS集客</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>投稿企画・運用設計</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Post Planning</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              SNS投稿企画・運用設計｜集客につながるコンテンツ制作
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              SNSで集客するためには「何を・誰に・どう伝えるか」を戦略的に企画することが重要です。ターゲットの関心・季節・ブランドの世界観を踏まえたSNS投稿コンテンツをAI活用で効率的に制作します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              投稿ネタ出し・キャプションライティング・ハッシュタグ設計・最適タイミングの設定まで一貫して担当します。毎月のインサイト分析をもとにPDCAを回し、アカウントを着実に成長させます。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_57.png" alt="SNS投稿企画" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.65)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(18px,3vw,28px)", fontWeight: 700, letterSpacing: "0.05em", textAlign: "center" }}>
              戦略のある投稿が、集客に変わる。
            </p>
          </div>
        </div>

        {/* Section A: このページでわかること */}
        <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>WHAT YOU WILL LEARN</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              このページでわかること
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                "SNS投稿企画の基本的な考え方とターゲット設定の方法",
                "エンゲージメントを高める投稿タイプ（告知・教育・共感・エンタメ）の使い分け",
                "業種別に効果的なコンテンツアイデアと投稿アプローチ",
                "キャプション・ハッシュタグ・投稿タイミングを設計するための手順",
                "AI（ChatGPT・Claude）を使った投稿制作の効率化フロー",
                "成果を数値で把握するためのKPIと計測ポイント",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "18px 0", borderTop: i === 0 ? "1px solid #E8E4DC" : undefined, borderBottom: "1px solid #E8E4DC" }}>
                  <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "15px", flexShrink: 0, marginTop: "1px" }}>→</span>
                  <span style={{ fontSize: "15px", color: "#374151", lineHeight: "1.75" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SNS運用失敗パターン */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Common Mistakes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              SNS運用で成果が出ない4つのパターン
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "投稿目的が不明確", b: "「とりあえず投稿する」運用では何を達成したいのか曖昧なまま時間だけが過ぎます。来店促進・認知拡大・指名検索増加など明確な目的を設定することが集客の出発点です。" },
                { t: "ターゲットを意識していない投稿", b: "全員に向けた投稿は誰にも刺さりません。30代女性・地域在住・美容に関心ありなど具体的なターゲット像を持つことで共感を得られるコンテンツが生まれます。" },
                { t: "単発投稿で継続できない", b: "SNSは長期戦です。月に数回しか投稿しないアカウントはアルゴリズムに評価されず、フォロワーの記憶にも残りません。継続できる仕組みとスケジュール設計が必要です。" },
                { t: "データを見ずに改善できない", b: "インサイトデータを確認せずに「感覚で投稿」を続けても成長しません。どの投稿がリーチ・エンゲージメントを獲得したかを月次で分析し、勝ちパターンを増やす運用が重要です。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textAlign: "center" }}>CONTENT STRATEGY</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, textAlign: "center", marginBottom: "48px" }}>
              投稿企画・運用設計の6ステップ
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
              {contentItems.map((item, i) => (
                <div key={i} style={{ padding: "32px", background: "#F9F8F5", borderRadius: "4px", borderTop: "3px solid #c4b89a" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", letterSpacing: "0.2em", marginBottom: "10px" }}>STEP {String(i + 1).padStart(2, "0")}</p>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "17px", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>{item.title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.85", color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section style={{ background: "#F9F8F5", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>COMMON CHALLENGES</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px" }}>
              よくある課題と原因
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "600px" }}>
              SNS投稿企画でつまずく場面には共通したパターンがあります。課題の本質を理解することが改善の第一歩です。
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { title: "何を投稿すればいいか分からない", body: "投稿テーマの軸が決まっていないことが原因です。ブランドの「伝えたいこと」とフォロワーの「知りたいこと」の交差点を見つけることが、ネタ切れしない投稿計画の基本です。" },
                { title: "売込み投稿ばかりで反応が薄い", body: "告知・セール・PR投稿が多すぎるとフォロワーは離れます。教育・共感・エンタメを7〜8割にして価値提供を先行させることで、告知投稿にも自然な反応が生まれます。" },
                { title: "投稿のバリエーションがない", body: "同じ形式の投稿が続くとタイムラインでスクロールされます。写真・カルーセル・動画・Reels・ストーリーズをローテーションして、見ている側に新鮮さを提供することが重要です。" },
                { title: "季節・イベントに合わせた投稿ができていない", body: "繁忙期の直前に気づいて素材が間に合わない、というパターンが多いです。コンテンツカレンダーに季節イベントを2〜3か月前から書き込み、余裕を持った素材準備が解決策になります。" },
                { title: "ターゲットに刺さる内容が分からない", body: "ターゲットペルソナが曖昧なことが根本原因です。年齢・職業・生活スタイル・悩み・SNS利用時間帯を具体化すると「この人が見て共感する投稿」が自然と設計できるようになります。" },
                { title: "競合の投稿分析をしていない", body: "ライバルアカウントのエンゲージメントが高い投稿を分析することで「何が刺さるか」のヒントが得られます。模倣ではなく「自社らしい視点で同じテーマを扱う」競合学習が効果的です。" },
                { title: "写真・動画の質が低い", body: "明るさ・構図・清潔感がSNS集客の印象を決定します。スマートフォンでも自然光・整理された背景・縦動画フォーマットを意識するだけで大幅にクオリティが向上します。" },
                { title: "キャプションが単調", body: "「新商品です。ご来店ください。」だけのキャプションでは行動を促せません。読者が「次のアクション」を取りたくなる冒頭フック・ストーリー・CTAの3段構成が基本パターンです。" },
                { title: "ハッシュタグを使っていない・使い方が間違っている", body: "ハッシュタグなしでは発見率がほぼゼロです。一方でスパム的な大量タグは評価を下げます。投稿内容に関連する5〜15個を、規模の異なるタグで組み合わせて選定するのが効果的です。" },
                { title: "投稿頻度が不安定", body: "週1投稿の週もあれば3週間空く週もある不規則な運用は、アルゴリズムに評価されずフォロワーの記憶にも残りません。少なくとも週3回を目標に、予約投稿ツールで安定した頻度を維持します。" },
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "20px", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "6px" }}>{item.title}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.85" }}>{item.body}</p>
                  </div>
                </li>
              ))}
              <li style={{ borderTop: "1px solid #E8E4DC" }} />
            </ul>
          </div>
        </section>

        {/* Section C: 業種別の活用ポイント */}
        <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>INDUSTRY INSIGHTS</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px" }}>
              業種別の活用ポイント
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "600px" }}>
              SNS投稿企画は業種によって有効なアプローチが異なります。それぞれの業種特性に合わせた設計が必要です。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "0" }}>
              {[
                { industry: "飲食店", point: "料理・雰囲気・シーン別投稿", body: "ランチ・ディナー・季節メニューの料理写真を起点に、来店シーン・席の雰囲気・スタッフの人柄を発信します。「今日のおすすめ」「仕込みの裏側」などリアルタイム投稿が予約につながります。" },
                { industry: "美容室・サロン", point: "Before-After・スタッフ・キャンペーン", body: "施術のBefore-After写真は保存率が高くフォロワー獲得に直結します。スタイリストの個性・こだわり技術・来店しやすいクーポン情報を組み合わせて指名予約を促進します。" },
                { industry: "歯科・クリニック", point: "予防情報・院内紹介・スタッフ", body: "「虫歯の予防法」「ホワイトニングQ&A」など患者が検索しそうな教育コンテンツが有効です。院内の清潔感・スタッフの笑顔・通いやすさのアピールが初診のハードルを下げます。" },
                { industry: "建設・リフォーム", point: "施工事例・工程・素材紹介", body: "完成写真だけでなく工事中の工程写真・素材の違い・職人のこだわりを見せることが信頼構築につながります。「ビフォーアフター」形式は保存数が高く拡散されやすいです。" },
                { industry: "小売・EC", point: "商品・使用シーン・口コミ投稿", body: "商品写真は「使っているところ」のシーン写真が購買意欲を高めます。お客様の口コミ投稿のリポストやUGC活用、季節・ライフスタイルに合わせたコーディネート提案が効果的です。" },
                { industry: "学習塾・スクール", point: "合格実績・授業・講師紹介", body: "合格速報・塾生の声・授業の様子（許可取り済み）は保護者からの信頼を高めます。講師の人柄・指導方針・「うちの子でも大丈夫」という安心感の発信が問い合わせを増やします。" },
                { industry: "不動産", point: "物件・地域情報・市場動向", body: "物件紹介だけでなく「エリアの住みやすさ」「近隣のおすすめスポット」など地域情報を発信することでフォロワーの関心を集めます。市場動向の解説は専門性アピールになります。" },
                { industry: "フィットネス・ジム", point: "トレーニング・ビフォーアフター・会員", body: "トレーニング動画・食事管理アドバイス・会員さんの変化ストーリーが高いエンゲージメントを生みます。「一緒に頑張れるコミュニティ感」の発信が入会動機になります。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "28px 0", borderTop: "1px solid #E8E4DC", display: "flex", gap: "20px" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "6px" }}>
                      <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a" }}>{item.industry}</p>
                      <p style={{ fontSize: "12px", color: "#c4b89a", fontWeight: 600 }}>{item.point}</p>
                    </div>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.85" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section D: 実装・運用フロー */}
        <section style={{ background: "#F9F8F5", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>IMPLEMENTATION FLOW</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px" }}>
              実装・運用フロー
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "600px" }}>
              SNS投稿企画を実際に運用に落とし込む10ステップです。月初に計画し、週次で実行・確認するサイクルを構築します。
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { title: "アカウントコンセプト設定", body: "「何のためのアカウントか」「どんな世界観を発信するか」をブランドガイドラインとして定義します。コンセプトがブレないことがフォロワーの信頼につながります。" },
                { title: "ターゲットペルソナ確認", body: "年齢・性別・居住地・職業・悩み・SNS利用時間帯を具体化したペルソナシートを作成します。投稿を作る際に「この人は喜んでくれるか」を常に確認する基準になります。" },
                { title: "投稿タイプ分類（告知/教育/共感/エンタメ）", body: "全投稿を4タイプに分類し、月間の比率（例：告知20%・教育40%・共感20%・エンタメ20%）を設定します。タイプのバランスが反応率を安定させます。" },
                { title: "月間テーマ設定", body: "その月に強調したいキーワード・季節イベント・キャンペーン情報をまとめて「月間テーマ」を決定します。テーマがあると統一感のあるフィードが完成します。" },
                { title: "週次投稿トピック決定", body: "月間テーマをもとに各週のトピックを具体化します。週初めに「今週の投稿ネタリスト」を作ることで、毎回ゼロから考える手間がなくなります。" },
                { title: "写真・動画素材準備", body: "投稿日の1週間前を目標に撮影・素材確認を完了させます。撮影チェックリスト（明るさ・構図・画角・パターン数）を活用して撮り直しを防ぎます。" },
                { title: "キャプション作成", body: "冒頭フック（最初の1〜2行）→本文→CTA（来店・予約・フォロー）の3部構成で作成します。AIを活用して下書きを作り、ブランドのトーンに合わせて編集します。" },
                { title: "ハッシュタグ設定", body: "投稿内容に合わせたビッグタグ（100万件以上）・ミドルタグ（1〜10万件）・ニッチタグ（1万件以下）を5〜15個組み合わせます。毎回同じタグセットは使い回さず定期的に見直します。" },
                { title: "投稿・エンゲージメント確認", body: "投稿後の30分〜1時間はコメントへの返信・いいねを積極的に行います。投稿直後のエンゲージメントがアルゴリズムの評価を高め、より多くの人にリーチされます。" },
                { title: "効果分析・次月改善", body: "月末にインサイトデータを集計し「エンゲージメント率上位5投稿」のパターンを分析します。好調パターンを翌月の投稿計画に増やし、低調パターンは改善またはカット判断をします。" },
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "20px", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "6px" }}>{item.title}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.85" }}>{item.body}</p>
                  </div>
                </li>
              ))}
              <li style={{ borderTop: "1px solid #E8E4DC" }} />
            </ul>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPI & METRICS</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px" }}>
              成果を見るための指標
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "600px" }}>
              SNS投稿企画の成否を判断するためのKPIです。各指標の計測場所と目安を把握して、月次の分析サイクルを回します。
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { kpi: "エンゲージメント率", desc: "（いいね+コメント+保存+シェア）÷リーチ数で計算します。Instagramインサイトの各投稿詳細で確認できます。3〜5%以上が良好な目安です。" },
                { kpi: "リーチ数", desc: "投稿がユニークユーザーに届いた数です。Instagramインサイトの「リーチしたアカウント」で確認します。フォロワー外リーチが増えるほど発見性が高い投稿と判断できます。" },
                { kpi: "フォロワー増加数", desc: "月次でのフォロワー純増数（増加−減少）を記録します。Instagramインサイトの「フォロワー」タブで日別・週別に確認できます。急増・急減の原因を分析します。" },
                { kpi: "保存数", desc: "「後で見返したい」という意思の表れで、アルゴリズム評価に強く影響します。Instagramインサイトの各投稿の「保存」で確認します。保存率が高い投稿タイプを増やします。" },
                { kpi: "共有数（シェア数）", desc: "ストーリーズ・DMでのシェア数はリーチ拡大の主要因です。Instagramインサイトの「シェア」で確認できます。「誰かに見せたくなる」投稿設計がシェアを生みます。" },
                { kpi: "プロフィールアクセス数", desc: "投稿を見てプロフィールに飛んだユーザー数です。フォローや外部リンクへの橋渡し指標です。Instagramインサイトの「プロフィールへのアクセス」で確認します。" },
                { kpi: "ウェブサイトタップ数", desc: "プロフィールのリンクからウェブサイト・予約ページへ遷移した数です。Instagramインサイトの「ウェブサイトタップ」で確認します。SNSから実際の集客・予約への最終成果を測る指標です。" },
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "20px", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "6px" }}>{item.kpi}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                  </div>
                </li>
              ))}
              <li style={{ borderTop: "1px solid #E8E4DC" }} />
            </ul>
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

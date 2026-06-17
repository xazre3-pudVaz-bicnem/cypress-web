import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ハッシュタグ戦略｜InstagramとXで新規リーチを拡大するタグ設計｜株式会社サイプレス",
  description: "InstagramとXのハッシュタグ戦略。ビッグ・ミドル・ニッチの3層設計・地域タグ・業種タグ・ブランドタグを組み合わせて新規フォロワーを効率的に獲得する方法を解説します。",
  keywords: ["ハッシュタグ戦略", "Instagram ハッシュタグ", "SNS集客", "タグ選定", "地域ハッシュタグ", "ニッチタグ", "ブランドタグ"],
  openGraph: {
    title: "ハッシュタグ戦略｜InstagramとXで新規リーチを拡大するタグ設計｜株式会社サイプレス",
    description: "InstagramとXのハッシュタグ戦略。ビッグ・ミドル・ニッチの3層設計・地域タグ・業種タグ・ブランドタグを組み合わせて新規フォロワーを効率的に獲得する方法を解説します。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_20_52.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/sns/hashtag" },
};

const faqItems = [
  { q: "ハッシュタグは何個つけるのがいいですか？", a: "Instagramは最大30個まで設定できますが、現在は3〜10個の関連性の高いタグを厳選する方が効果的とされています。Xは1〜2個が自然な使い方で、多すぎるとスパム印象を与えます。" },
  { q: "人気のハッシュタグ（投稿数が多いもの）を使うべきですか？", a: "人気タグ（ビッグワード）だけでは投稿はすぐに埋もれます。ビッグワード（拡散）・ミドルワード（発見）・ニッチワード（刺さる）の3層を組み合わせることが効果的です。" },
  { q: "地域タグはどのように使えばいいですか？", a: "「#○○カフェ」「#○○グルメ」「#○○美容室」など地域名＋業種を組み合わせたタグで地元ユーザーへのリーチを高めます。来店が前提の店舗ビジネスに特に有効です。" },
  { q: "ハッシュタグを固定して毎回同じものを使っていいですか？", a: "完全に同じタグセットを毎回コピー貼り付けするとスパムとみなされリーチが下がる可能性があります。基本タグ10個＋投稿ごとの変動タグ5〜10個の組み合わせをお勧めします。" },
  { q: "ハッシュタグの効果はどう計測しますか？", a: "Instagramインサイトの「発見タブからのリーチ数」を確認します。投稿ごとにタグを変えながらリーチが上がるタグセットを見つけるPDCAが効果的です。" },
  { q: "ブランドタグとは何ですか？どう作ればいいですか？", a: "自社独自の「#ブランド名」「#屋号」タグです。プロフィール欄に記載し、お客様にも使ってもらうことでUGC（ユーザー生成コンテンツ）を収集できます。短く覚えやすい名前が理想です。" },
  { q: "InstagramとXではハッシュタグの使い方が違いますか？", a: "はい。Instagramは発見タブ経由のリーチに有効で複数タグを推奨、Xは会話の流れに乗るトレンドタグや1〜2個の関連タグが自然です。プラットフォームごとに戦略を分けることが重要です。" },
  { q: "ハッシュタグのバンとは何ですか？", a: "特定のタグがInstagramにより検索不可・表示制限される状態です。不適切コンテンツと関連が深いタグや過去にスパム利用されたタグが対象になります。使う前にタグ検索画面で確認することを推奨します。" },
  { q: "シーズナルタグはいつから使えばいいですか？", a: "イベント・季節の1〜2週間前から使い始めると検索需要が高まるタイミングと重なります。「#クリスマスギフト」なら12月1日頃、「#ゴールデンウィーク」なら4月中旬頃が目安です。" },
  { q: "ニッチタグを使うメリットは何ですか？", a: "競合投稿が少ないため自社の投稿が長時間上位に表示されます。ターゲットが具体的に絞られるため、投稿を見たユーザーの興味関心との一致度も高く、フォロー・来店につながりやすいです。" },
  { q: "競合のハッシュタグを分析する方法はありますか？", a: "競合アカウントの投稿を直接確認するほか、業界の有力アカウントを複数フォローして使用タグを観察します。Instagramの検索タブでタグを入力すると関連タグの投稿数も確認できます。" },
  { q: "タグのバリエーションはどのくらい用意すればいいですか？", a: "投稿カテゴリ（料理写真・イベント・スタッフ紹介など）ごとに5〜7個の異なるタグセットを用意するのが理想です。毎月1回見直してパフォーマンスの低いタグを入れ替えます。" },
  { q: "Instagramのハッシュタグはキャプション・コメントどちらに入れるべきですか？", a: "どちらでも効果は変わりませんが、キャプションに含めると視覚的に整理しやすいです。一方、コメント欄に入れるとキャプションをすっきり見せられます。運用スタイルに合わせて統一することを推奨します。" },
  { q: "投稿数が少ないニッチタグを使うのは逆効果ですか？", a: "投稿数が100件未満の極端にニッチなタグは、検索されない可能性が高く効果が薄いです。1,000〜1万件程度の「ちょうどニッチ」なタグが最も費用対効果が高い帯域です。" },
  { q: "複数拠点のビジネスでは地域タグはどう使い分けますか？", a: "各拠点の投稿に対して、その地域名を含むタグを個別に設定します。本部アカウントで複数エリアを運用する場合は、投稿ごとに対象エリアのタグを切り替えて地域最適化を図ります。" },
  { q: "ハッシュタグだけでフォロワーを増やせますか？", a: "ハッシュタグはあくまで「発見入口」です。プロフィールの訴求力・投稿コンテンツの質・ストーリーズやリールとの組み合わせが揃って初めて継続的なフォロワー増加につながります。" },
  { q: "英語タグと日本語タグはどちらがいいですか？", a: "ターゲットが日本語圏のユーザーなら日本語タグが優先です。ただし「#interior」「#cafe」などグローバルな検索もあるジャンルでは英語タグも数個混ぜることでリーチの幅が広がります。" },
  { q: "ハッシュタグ戦略を外注することはできますか？", a: "はい。弊社ではタグ現状分析・競合タグ調査・業種別タグリスト設計・月次タグ見直しまで対応します。SNS運用と組み合わせたパッケージも用意しています。お気軽にご相談ください。" },
  { q: "Xでのハッシュタグ活用でおすすめの方法は？", a: "Xではトレンドタグに乗ることと、自社のコアメッセージに関連した1〜2個のタグを継続使用することが効果的です。投稿内容にシームレスに組み込む文体が好まれます。" },
  { q: "タグ設計はどのくらいの頻度で見直しが必要ですか？", a: "月1回の定期見直しを推奨します。インサイトでタグ経由リーチを確認し、パフォーマンスの低いタグを入れ替えます。季節・イベントに合わせた臨時見直しも有効です。" },
];

const relatedLinks = [
  { href: "/sns", label: "SNS集客とは", desc: "SNS集客の全体概要" },
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタ集客の基本" },
  { href: "/sns/post-planning", label: "投稿企画", desc: "コンテンツ制作戦略" },
  { href: "/sns/local-sns", label: "地域SNS集客", desc: "地域向けSNS戦略" },
  { href: "/sns/content-calendar", label: "コンテンツカレンダー", desc: "投稿スケジュール管理" },
  { href: "/sns/photo-direction", label: "写真ディレクション", desc: "SNS写真の品質向上" },
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
  { href: "/industry/restaurant", label: "飲食業界向け", desc: "飲食店のSNS活用" },
  { href: "/industry/beauty", label: "美容業界向け", desc: "美容室のSNS戦略" },
  { href: "/industry/dental", label: "歯科医院向け", desc: "歯科のSNS運用" },
  { href: "/industry/construction", label: "建設・リフォーム向け", desc: "施工事例の発信" },
  { href: "/industry/retail", label: "小売・EC向け", desc: "商品訴求の方法" },
  { href: "/area/tokyo", label: "東京エリア", desc: "東京の集客支援" },
  { href: "/area/osaka", label: "大阪エリア", desc: "大阪の集客支援" },
  { href: "/contact", label: "無料相談", desc: "タグ戦略の相談" },
];

const contentItems = [
  { label: "ビッグワード（拡散タグ）", body: "投稿数が100万件以上の大きなタグ。発見タブに一瞬表示されますが埋もれやすいです。1〜2個を上限として使用し、認知拡大の補助として活用します。" },
  { label: "ミドルワード（発見タグ）", body: "投稿数が1万〜100万件のタグ。競争が適度で、自社の投稿が一定時間表示されやすいです。ハッシュタグ戦略の中核として5〜7個設定します。" },
  { label: "ニッチワード（刺さるタグ）", body: "投稿数が1万件未満の具体的なタグ。競合が少なく、ターゲットにピンポイントで届きます。「#○○市美容室おすすめ」など地域＋業種の組み合わせが典型例です。" },
  { label: "地域タグ", body: "「#渋谷カフェ」「#名古屋グルメ」など地域名を含むタグ。来店型ビジネスにとって最重要タグです。市区町村単位まで細かく設定することで地元ユーザーへのリーチを高めます。" },
  { label: "ブランドタグ", body: "自社独自の「#ブランド名」タグ。ファンが投稿を通じて使いやすい環境を作り、UGC（ユーザー生成コンテンツ）の収集にも使えます。プロフィールに記載して認知を広げます。" },
  { label: "シーズナルタグ", body: "「#クリスマスギフト」「#夏の美容」など季節・イベントに連動したタグ。検索需要が一時的に高まるタイミングに合わせて活用することでリーチが跳ね上がります。" },
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
              <span style={{ color: "#0d1b2a" }}>ハッシュタグ戦略</span>
            </nav>
            <p style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Hashtag Strategy</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              ハッシュタグ戦略｜InstagramとXで新規リーチを拡大する
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              ハッシュタグはInstagramとXで新規ユーザーに投稿を発見してもらうための重要な仕組みです。業種・地域・ターゲット層に応じて最適なハッシュタグを選定・設計することで、フォロワー外へのリーチを大きく広げることができます。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              ビッグワード・ミドルワード・ニッチワードの3層構造で設計し、地域タグ・ブランドタグを組み合わせることで集客効率を最大化します。毎投稿ごとにタグセットを検証し、データに基づいて継続改善します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="ハッシュタグ戦略" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.65)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(18px,3vw,28px)", fontWeight: 700, letterSpacing: "0.05em", textAlign: "center" }}>
              正しいハッシュタグが、あなたの投稿を届ける。
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
                "ハッシュタグの3層構造（ビッグ・ミドル・ニッチ）の設計方法と使い分け",
                "地域タグ・業種タグ・ブランドタグの組み合わせで来店につなげる方法",
                "InstagramとXでのハッシュタグ使い方の違いと最適な個数",
                "タグのバン（表示制限）を避けるための注意点と事前確認の手順",
                "業種別（飲食・美容室・歯科・不動産など）の具体的なタグ活用事例",
                "タグ効果をインサイトで計測・改善するPDCAサイクルの回し方",
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
              ハッシュタグ運用でよくある課題と原因
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                {
                  title: "ハッシュタグをほとんど使っていない｜株式会社サイプレス",
                  body: "タグなしの投稿はフォロワー以外に届く経路がほぼありません。Instagramでは発見タブ経由の新規リーチの大部分がハッシュタグ検索から生まれており、使わないことは集客機会の大きな損失です。",
                },
                {
                  title: "とりあえず有名タグをつけているだけ｜株式会社サイプレス",
                  body: "「#カフェ」「#グルメ」など数百万件の投稿があるビッグタグだけを使うと、投稿は数分以内に埋もれます。戦略なきタグ付けは表示機会を生まないため、目的に応じた選定が必要です。",
                },
                {
                  title: "競合性の高すぎるタグだけを使っている｜株式会社サイプレス",
                  body: "競合が多いタグは検索上位に表示されるのが難しく、効果を実感しにくいです。自社の投稿力・アカウント規模に合ったミドル〜ニッチワードを中心に構成することで継続的なリーチが可能になります。",
                },
                {
                  title: "ニッチタグの存在を知らない・使っていない｜株式会社サイプレス",
                  body: "「#○○市ランチ」「#○○駅周辺カフェ」など極めて具体的なタグは競合が少なく、検索した人の購買意欲が高いです。ニッチタグを活用しないことで、最も成約率の高いユーザー層を取りこぼしています。",
                },
                {
                  title: "タグ数が多すぎる・少なすぎる｜株式会社サイプレス",
                  body: "30個すべて埋めることがかつての正解でしたが、現在は3〜10個の精選タグが推奨されています。逆に1〜2個では発見経路が少なすぎます。最適な数は業種・投稿タイプによって異なります。",
                },
                {
                  title: "地域タグ・業種タグを使っていない｜株式会社サイプレス",
                  body: "来店型ビジネスにとって地域タグは最も費用対効果が高いタグ種別です。「#○○市美容室」「#○○カフェ」など地域＋業種の組み合わせタグを使わないことで、地元の見込み客へのリーチを完全に失っています。",
                },
                {
                  title: "タグの効果測定をしていない｜株式会社サイプレス",
                  body: "どのタグが効いているかを測定しないまま運用を続けても改善はできません。Instagramインサイトでタグ経由リーチを確認し、効果の低いタグを入れ替えるPDCAが集客力向上に不可欠です。",
                },
                {
                  title: "タグのバン（表示制限）を知らない｜株式会社サイプレス",
                  body: "一部のハッシュタグはInstagramにより検索不可・表示制限（バン）されています。バン中のタグを使い続けると投稿全体のリーチが下がるリスクがあります。使用前にタグ検索で確認することが重要です。",
                },
                {
                  title: "InstagramとXでのタグ使い方の違いを理解していない｜株式会社サイプレス",
                  body: "InstagramはタグがSEO的に機能し複数個の使用が基本ですが、Xは会話の流れに自然に混ぜる1〜2個が最適です。同じタグ戦略を両プラットフォームに適用すると片方の効果が大きく落ちます。",
                },
                {
                  title: "季節・イベントタグの活用不足｜株式会社サイプレス",
                  body: "「#バレンタイン」「#ゴールデンウィーク」「#クリスマスギフト」など時期限定で検索が急増するタグを使わないことで、最大の露出機会を逃しています。イベントカレンダーと連動したタグ計画が必要です。",
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
              業種別ハッシュタグ活用ポイント
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {[
                {
                  industry: "飲食店",
                  tags: "#○○グルメ #○○ランチ #料理好きな人と繋がりたい",
                  note: "地域名＋グルメ・ランチタグで地元客を呼び込みます。「#料理好きな人と繋がりたい」など交流系タグでリーチを広げ、季節メニューや限定フェアにはシーズナルタグを組み合わせることで拡散効果が高まります。",
                },
                {
                  industry: "美容室",
                  tags: "#ヘアスタイル #カラー #○○美容室",
                  note: "施術写真には「#ヘアスタイル」「#カラーレシピ」などのスタイルタグが効果的です。地域＋美容室タグで来店ターゲットを絞り、「#髪質改善」「#縮毛矯正」など悩み系タグで潜在客にリーチします。",
                },
                {
                  industry: "歯科医院",
                  tags: "#歯科 #予防歯科 #美しい歯",
                  note: "「#予防歯科」「#ホワイトニング」など関心・悩み系タグが有効です。地域名＋歯科タグで検索意図の強いユーザーを獲得し、「#歯並び」「#マウスピース矯正」など具体的なニッチタグを組み合わせます。",
                },
                {
                  industry: "建設・リフォーム",
                  tags: "#リフォーム #施工事例 #interior",
                  note: "施工写真には「#施工事例」「#注文住宅」、インテリア寄りの投稿には「#interior」「#インテリアデザイン」が効果的です。地域名＋リフォームタグで地元の検討客にリーチします。",
                },
                {
                  industry: "小売・EC",
                  tags: "#プレゼント #○○好き #購入品",
                  note: "「#プレゼント」「#ギフト」はギフト需要の高い時期に検索が急増します。商品ジャンルに応じた「#○○好き」コミュニティタグと「#購入品」「#お気に入りアイテム」でUGC的な露出を増やします。",
                },
                {
                  industry: "学習塾",
                  tags: "#受験 #高校受験 #個別指導",
                  note: "受験シーズンに合わせた「#受験」「#受験勉強」タグは検索需要が大きく跳ね上がります。「#個別指導」「#塾選び」など保護者の検索意図に沿ったタグと地域タグを組み合わせることが重要です。",
                },
                {
                  industry: "不動産",
                  tags: "#賃貸 #一人暮らし #○○エリア",
                  note: "「#賃貸」「#物件探し」は年度末の引越しシーズンに検索が集中します。エリア名＋不動産タグで地域特化し、「#一人暮らし」「#ルームツアー」などライフスタイル系タグで間口を広げます。",
                },
                {
                  industry: "フィットネス",
                  tags: "#筋トレ #ダイエット #トレーニング",
                  note: "「#筋トレ」「#ダイエット」は競合が多いため地域タグとの組み合わせが必須です。「#トレーニング記録」「#フィットネスライフ」など継続・記録系のコミュニティタグで熱量の高いユーザーに届きます。",
                },
              ].map((item, i) => (
                <div key={i} style={{ padding: "28px", border: "1px solid #E8E4DC" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.industry}</p>
                  <p style={{ fontSize: "12px", color: "#c4b89a", marginBottom: "12px", fontFamily: "var(--font-serif)", letterSpacing: "0.03em" }}>{item.tags}</p>
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
              ハッシュタグ戦略の実装・運用フロー
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { title: "現在のタグ使用状況確認", body: "既存投稿で使用しているタグ一覧を書き出し、使用頻度・カテゴリ・パフォーマンスを整理します。インサイトでタグ経由リーチを確認し、効果が出ているタグと出ていないタグを分類します。" },
                { title: "競合のタグ分析", body: "同業・同エリアの競合アカウント上位5〜10件を調査し、使用タグを記録します。エンゲージメントの高い投稿で使われているタグを重点的に分析し、自社で活用できるタグをリストアップします。" },
                { title: "タグを3層に分類する", body: "ビッグタグ（100万件以上）・ミドルタグ（1〜100万件）・スモールタグ（1万件以下）の3層に整理します。ミドルとスモールを中心に据えた構成が最もリーチ効率が高いです。" },
                { title: "業種別・地域別タグリスト作成", body: "業種タグ・地域タグ・悩み系タグ・コミュニティタグをカテゴリ別に50〜100個リスト化します。使用頻度と投稿件数も記録し、定期的に更新できる形式で管理します。" },
                { title: "オリジナルブランドタグ設定", body: "自社専用の「#ブランド名」「#屋号」タグを決定し、プロフィール欄に明記します。スタッフの投稿・顧客の投稿にも使ってもらうことを促し、UGCの起点として育てます。" },
                { title: "投稿タイプ別タグセット作成", body: "料理写真・スタッフ紹介・イベント告知・施術before/afterなど投稿カテゴリごとに7〜10個のタグセットを作成します。毎回コピーせず、2〜3個を入れ替えることでスパム判定を回避します。" },
                { title: "Instagramインサイトでタグ効果測定", body: "投稿ごとにインサイトの「発見タブからのリーチ」を確認します。タグセットを変えた前後でリーチ数を比較し、効果の高いタグの組み合わせを特定します。" },
                { title: "効果の低いタグの入れ替え", body: "2〜4週間測定してリーチへの貢献が低いタグは新候補と交換します。入れ替え後も同じ期間測定して改善を確認するA/Bテスト的な運用が効果的です。" },
                { title: "季節タグのカレンダー作成", body: "年間の主要イベント・季節イベントに合わせたタグカレンダーを作成します。「#クリスマスギフト」「#ゴールデンウィーク」「#夏の美容」など需要増加タイミングの2週間前から使い始めます。" },
                { title: "月次タグ見直し", body: "月に1回、全タグセットのパフォーマンスを振り返ります。新たに注目度が上がっているタグや競合が活用しているタグを取り込み、常に最新状態を維持することで継続的な効果を保ちます。" },
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
              ハッシュタグ施策の成果を見るための指標
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { kpi: "タグ経由リーチ数", where: "Instagramインサイト > 投稿詳細 > 発見タブ", note: "ハッシュタグ経由で新規ユーザーに届いた回数。施策前後で比較することで改善効果を把握できます。" },
                { kpi: "タグ別インプレッション数", where: "Instagramインサイト > 投稿詳細 > インプレッション元内訳", note: "どのタグ種別からリーチが生まれているかを確認します。ミドル・ニッチタグの貢献度を検証するための基本指標です。" },
                { kpi: "フォロワー外リーチ率", where: "Instagramインサイト > リーチ > フォロワー外の割合", note: "全リーチのうちフォロワー以外が占める割合。ハッシュタグ戦略の効果が出ているほどこの数値が上昇します。" },
                { kpi: "タグ検索からのプロフィールアクセス数", where: "Instagramインサイト > プロフィールへのアクセス元", note: "タグ経由で投稿を見た後にプロフィールを訪問した数。リーチからフォロー・問い合わせへの転換率を測るための前段指標です。" },
                { kpi: "利用タグ数（セット多様性）", where: "運用管理シート", note: "毎投稿で実際に使っているタグの重複率を測定します。完全に同一タグを繰り返しているとスパム判定のリスクがあるため、30〜40%以上の入れ替えを目標にします。" },
                { kpi: "ブランドタグ使用投稿数", where: "ハッシュタグ検索ページ > 投稿数", note: "自社ブランドタグを使った投稿の総数（スタッフ＋UGC）。月次で増加しているかどうかを確認し、ファンコミュニティの形成を測ります。" },
                { kpi: "タグ最適化後のエンゲージメント率変化", where: "Instagramインサイト > エンゲージメント / リーチ", note: "タグ変更前後でエンゲージメント率（いいね＋コメント＋保存 ÷ リーチ）を比較します。精度の高いタグはターゲット適合度が高まりエンゲージメント率も上昇します。" },
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

        {/* ハッシュタグ選定ミスの問題 */}
        <section style={{ background: "#0d1b2a", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Hashtag Mistakes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              ハッシュタグ選定を間違えると起きる4つの問題
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px" }}>
              {[
                { t: "ビッグワードだけで投稿が埋もれる", b: "投稿数が数百万件のビッグタグだけを使うと投稿は数分で埋もれます。どれだけ良い写真でも発見されないまま終わります。ミドル・ニッチタグとの組み合わせが必須です。" },
                { t: "ターゲット外ユーザーにしか届かない", b: "業種・ターゲット・地域と関係のないタグを大量に使っても、実際に来店・購入に至るターゲット層に届きません。精度の高いタグ選定が集客効率を左右します。" },
                { t: "地域ユーザーにリーチできない", b: "来店型ビジネスで地域ハッシュタグを使わないことは、最大の集客機会を捨てることと同じです。「#○○市カフェ」など地域名入りタグは最も費用対効果が高い手法のひとつです。" },
                { t: "スパム判定でリーチが下がる", b: "まったく同じタグセットを毎回コピー貼り付けするとアルゴリズムにスパムと判定され、リーチが意図的に下げられます。投稿ごとに一部変えることが重要です。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tag Structure */}
        <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>TAG STRUCTURE</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, textAlign: "center", marginBottom: "48px" }}>
              効果的なハッシュタグの6つのカテゴリ
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
              {contentItems.map((item, i) => (
                <div key={i} style={{ padding: "32px", background: "#F9F8F5", borderRadius: "4px", borderLeft: "3px solid #c4b89a" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "17px", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>{item.label}</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.85", color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hashtag Tier Comparison */}
        <section style={{ background: "#F9F8F5", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>TAG TIERS</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              ハッシュタグ3層の特性比較
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.85", marginBottom: "40px", maxWidth: "640px" }}>
              投稿数・競合性・滞在時間・ターゲット精度はタグの規模によって大きく異なります。3層を組み合わせることで「広く届ける」と「深く届ける」を同時に実現できます。
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #E8E4DC" }}>
                    <th style={{ textAlign: "left", padding: "12px 16px", color: "#0d1b2a", fontFamily: "var(--font-serif)", fontWeight: 700 }}>タグ種別</th>
                    <th style={{ textAlign: "left", padding: "12px 16px", color: "#0d1b2a", fontFamily: "var(--font-serif)", fontWeight: 700 }}>投稿件数の目安</th>
                    <th style={{ textAlign: "left", padding: "12px 16px", color: "#0d1b2a", fontFamily: "var(--font-serif)", fontWeight: 700 }}>表示滞在時間</th>
                    <th style={{ textAlign: "left", padding: "12px 16px", color: "#0d1b2a", fontFamily: "var(--font-serif)", fontWeight: 700 }}>ターゲット精度</th>
                    <th style={{ textAlign: "left", padding: "12px 16px", color: "#0d1b2a", fontFamily: "var(--font-serif)", fontWeight: 700 }}>推奨使用数</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tier: "ビッグタグ", count: "100万件以上", duration: "数分〜十数分", precision: "低", recommended: "1〜2個" },
                    { tier: "ミドルタグ", count: "1万〜100万件", duration: "数時間〜1日", precision: "中", recommended: "4〜6個" },
                    { tier: "ニッチタグ", count: "1,000〜1万件", duration: "数日〜1週間", precision: "高", recommended: "3〜5個" },
                    { tier: "地域タグ", count: "数百〜数万件", duration: "長期間", precision: "最高（来店意欲あり）", recommended: "2〜3個" },
                    { tier: "ブランドタグ", count: "自社管理", duration: "永続", precision: "最高（既存ファン）", recommended: "1個（固定）" },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #E8E4DC", background: i % 2 === 0 ? "#FFFFFF" : "#F9F8F5" }}>
                      <td style={{ padding: "14px 16px", color: "#0d1b2a", fontWeight: 600 }}>{row.tier}</td>
                      <td style={{ padding: "14px 16px", color: "#374151" }}>{row.count}</td>
                      <td style={{ padding: "14px 16px", color: "#374151" }}>{row.duration}</td>
                      <td style={{ padding: "14px 16px", color: "#374151" }}>{row.precision}</td>
                      <td style={{ padding: "14px 16px", color: "#c4b89a", fontWeight: 600 }}>{row.recommended}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* X vs Instagram Comparison */}
        <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>PLATFORM DIFFERENCES</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              InstagramとXのハッシュタグ活用の違い
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.85", marginBottom: "40px", maxWidth: "640px" }}>
              プラットフォームによってハッシュタグの機能・使い方・最適な個数は大きく異なります。同じタグ戦略を両方に適用するのではなく、各プラットフォームの特性に合わせて設計することが集客効率を高めます。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
              <div style={{ padding: "32px", border: "1px solid #E8E4DC" }}>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>INSTAGRAM</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {[
                    { label: "主な機能", value: "発見タブ・タグ検索からの新規リーチ" },
                    { label: "推奨個数", value: "3〜10個（関連性の高いもの）" },
                    { label: "配置場所", value: "キャプションまたはコメント欄" },
                    { label: "タグ戦略", value: "3層構造（ビッグ・ミドル・ニッチ）＋地域タグ" },
                    { label: "効果測定", value: "インサイトのタグ経由リーチで確認" },
                    { label: "注意点", value: "同じタグセットの毎回コピーはスパム判定リスク" },
                  ].map((row, j) => (
                    <div key={j} style={{ display: "flex", gap: "12px", padding: "10px 0", borderTop: "1px solid #E8E4DC" }}>
                      <span style={{ fontSize: "12px", color: "#9CA3AF", flexShrink: 0, width: "80px" }}>{row.label}</span>
                      <span style={{ fontSize: "13px", color: "#374151", lineHeight: "1.7" }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ padding: "32px", border: "1px solid #E8E4DC" }}>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>X (旧Twitter)</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {[
                    { label: "主な機能", value: "トレンドに乗る・会話の流れへの参加" },
                    { label: "推奨個数", value: "1〜2個（自然に文中に組み込む）" },
                    { label: "配置場所", value: "投稿文中（末尾ではなく文の流れで）" },
                    { label: "タグ戦略", value: "トレンドタグ＋自社コアキーワードタグ" },
                    { label: "効果測定", value: "インプレッション・エンゲージメント数" },
                    { label: "注意点", value: "タグが多いと読みにくくスパム印象を与える" },
                  ].map((row, j) => (
                    <div key={j} style={{ display: "flex", gap: "12px", padding: "10px 0", borderTop: "1px solid #E8E4DC" }}>
                      <span style={{ fontSize: "12px", color: "#9CA3AF", flexShrink: 0, width: "80px" }}>{row.label}</span>
                      <span style={{ fontSize: "13px", color: "#374151", lineHeight: "1.7" }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{ background: "#0d1b2a", padding: "64px 24px" }}>
          <div style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>FREE CONSULTATION</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,30px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "16px" }}>
              ハッシュタグ戦略の無料相談を受け付けています
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", lineHeight: "1.85", marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px" }}>
              現在の投稿タグを見せていただければ、業種・エリアに合った改善ポイントをお伝えします。まずはお気軽にご連絡ください。
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "モバイルSEO・スマートフォン対応｜Core Web Vitals・モバイルファーストインデックス｜株式会社サイプレス",
  description:
    "Googleのモバイルファーストインデックスに対応したスマートフォンSEOの実践ガイド。LCP・CLS・INPの意味と改善方法、レスポンシブデザイン対応、スマホUX設計、業種別モバイル最適化のポイントを体系的に解説。",
  keywords: [
    "モバイルSEO",
    "スマートフォン対応",
    "モバイルファーストインデックス",
    "Core Web Vitals",
    "LCP",
    "CLS",
    "INP",
    "レスポンシブSEO",
    "モバイルUX",
    "スマホ表示速度",
  ],
  openGraph: {
    title: "モバイルSEO・スマートフォン対応｜Core Web Vitals・モバイルファーストインデックス｜株式会社サイプレス",
    description: "モバイルファーストインデックス対応のSEO実践ガイド。LCP・CLS・INP改善、スマホUX設計、業種別対応ポイントまで解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/mobile-seo" },
};

const faqItems = [
  {
    q: "モバイルファーストインデックスとは何ですか？",
    a: "Googleがウェブページの評価をモバイル版を基準に行う仕組みです。2023年以降、全サイトがモバイルファーストインデックスに移行しており、スマートフォンでの表示・速度・使いやすさがSEO評価の基準となっています。PC版がどれほど優れていても、モバイル版の品質が低ければ順位に影響します。",
  },
  {
    q: "PC向けサイトとモバイル向けサイトで別々に作る必要がありますか？",
    a: "現在はレスポンシブデザインが推奨されており、1つのURLで全デバイスに対応するのが最もSEO的に有利です。別ドメインや別URLでの運用はcanonical設定が必要で管理が複雑になります。Googleも単一URLのレスポンシブ設計を推奨しています。",
  },
  {
    q: "スマートフォンでの表示速度はどの程度が目安ですか？",
    a: "GoogleはLCP（最大コンテンツの表示速度）2.5秒以内を「良好」とみなしています。4G回線でのモバイル表示を想定し、画像圧縮・コード最適化・CDN活用で速度を改善します。PageSpeed Insightsでモバイルスコアを定期的に確認することを推奨します。",
  },
  {
    q: "モバイルSEOの改善にどのくらいの期間がかかりますか？",
    a: "技術的な改善（レスポンシブ対応・速度改善）は実装後1〜2ヶ月でGoogleが再評価します。コンテンツの充実やリンク獲得を含む総合的な改善は3〜6ヶ月が目安です。Core Web Vitalsの改善は比較的早期に順位への好影響が現れることがあります。",
  },
  {
    q: "Googleのモバイルフレンドリーテストはどこで確認できますか？",
    a: "Google Search ConsoleまたはGoogle公式のモバイルフレンドリーテストツールで確認できます。URLを入力するだけで判定結果と改善点が表示されます。また、Chrome DevToolsのモバイルエミュレーションモードで実際の表示を確認することも有効です。",
  },
  {
    q: "LCP・CLS・INPとは何ですか？",
    a: "Core Web Vitalsを構成する3つの指標です。LCP（Largest Contentful Paint）は最大コンテンツが表示されるまでの時間（2.5秒以内が良好）、CLS（Cumulative Layout Shift）はページ読み込み中のレイアウトのずれ量（0.1以下が良好）、INP（Interaction to Next Paint）はユーザー操作への応答速度（200ms以下が良好）です。",
  },
  {
    q: "Core Web VitalsはSEOランキングに直接影響しますか？",
    a: "Googleは2021年からCore Web VitalsをPage Experience Signalとしてランキング要因に組み込んでいます。同等のコンテンツ品質・リンク評価の競合と比べたとき、Core Web Vitalsのスコアが良好なサイトが優遇されます。直接的な影響は大きくないとも言われますが、ユーザー体験の改善に伴う離脱率低下・滞在時間増加が間接的な順位向上につながります。",
  },
  {
    q: "CLSが高くなる原因は何ですか？",
    a: "主な原因は、画像・動画要素にサイズ指定がない場合、Webフォントの読み込みによるテキストのずれ、広告・埋め込みコンテンツが後から挿入される場合、JavaScriptが後から要素を追加する場合などです。img・video要素に width/height 属性を指定するだけで多くのCLS問題が解消されます。",
  },
  {
    q: "モバイルでポップアップを表示するとペナルティになりますか？",
    a: "ページを覆うような大型インタースティシャル（ポップアップ）はモバイルユーザーの邪魔になるとしてGoogleはペナルティ対象としています。クッキー同意・年齢確認など法的に必要なもの、閉じやすいバナー型のもの、ログインユーザー限定のものは対象外です。",
  },
  {
    q: "モバイルとPCでコンテンツが異なる場合、SEOに問題がありますか？",
    a: "モバイルファーストインデックスではモバイル版のコンテンツが評価されます。PCにしか掲載されていない情報（テキスト・画像・構造化データ等）はインデックスされない可能性があります。重要なコンテンツはモバイル版でも必ず表示されるよう設計してください。",
  },
  {
    q: "タップターゲットのサイズはどのくらいが適切ですか？",
    a: "Googleは最小44×44pxを推奨しています。指でタップする際の誤作動を防ぐため、ボタン・リンク同士の間隔も8px以上確保することが望ましいです。Google Search Consoleのモバイルユーザビリティレポートでタップターゲットが狭い箇所を確認できます。",
  },
  {
    q: "フォントサイズはモバイルでどのくらいが適切ですか？",
    a: "本文テキストは最低16px（1rem）以上が推奨です。12px以下のテキストが多いとGoogleはモバイルフレンドリーではないと判断する場合があります。行間（line-height）は1.7〜1.9に設定すると日本語テキストが読みやすくなります。",
  },
  {
    q: "LCPを改善するために最も効果的な方法は何ですか？",
    a: "LCPの原因の多くはファーストビューに表示される大きな画像の読み込み遅延です。対策として、ヒーロー画像の圧縮（WebP形式への変換）、rel=\"preload\"でのヒーロー画像の優先読み込み、サーバーレスポンス速度の改善（TTFB短縮）、CDNによるキャッシュ配信が有効です。",
  },
  {
    q: "Next.jsを使えばモバイルSEOは自動的に最適化されますか？",
    a: "Next.jsはモバイルSEOに有利な機能（Imageコンポーネントによる自動最適化・フォント最適化・Code Splitting等）を内包しています。ただし設定なしでは効果は限定的です。next/imageのsizes属性の適切な設定、フォントのnext/fontによる最適化、不要なJavaScriptの削減など、実装側での工夫が必要です。",
  },
  {
    q: "モバイルSEOの改善でAMPは今でも必要ですか？",
    a: "GoogleはAMP（Accelerated Mobile Pages）をランキング要因から外しており、現在はCore Web VitalsによるPage Experienceシグナルが代替しています。新規サイトでAMPを採用する必要はなく、通常のレスポンシブデザイン＋パフォーマンス最適化で同等の効果が得られます。",
  },
  {
    q: "スマートフォンでの検索結果に表示されるタイトルの長さは？",
    a: "モバイルの検索結果画面はPCより表示幅が狭く、タイトルは25〜30文字程度で切れることがあります。重要なキーワードはタイトルの前半に配置し、ユーザーが一目でページ内容を判断できる文言を選ぶことが重要です。",
  },
  {
    q: "スマートフォン対応のフォームはどう設計するとCVが上がりますか？",
    a: "入力項目の最小化（必須項目のみ）、適切なinputtype（email・tel・numberなど）の指定による入力補助、フィールドサイズの拡大（最小44px）、エラーメッセージのリアルタイム表示、送信ボタンの目立つ配置と大きなサイズが効果的です。フォームの使いやすさが直接CVRに影響します。",
  },
  {
    q: "モバイルSEO対策に使うツールを教えてください。",
    a: "Google PageSpeed Insights（Core Web Vitals確認）、Google Search Console（モバイルユーザビリティレポート・クロールエラー）、Chrome DevToolsのLighthouseタブ（モバイル監査）、WebPageTest（実デバイスでの計測）、GTmetrix（詳細パフォーマンス分析）が主要なツールです。",
  },
  {
    q: "モバイルユーザーの離脱率が高い場合の対処法は？",
    a: "離脱率が高い原因として、表示速度の遅さ・ファーストビューのコンテンツが期待と違う・スクロール操作のしにくさ・タップ領域の問題・フォントが小さくて読みにくいなどが考えられます。Google Analyticsのエンゲージメント率・スクロール深度レポートと組み合わせて原因を特定し、優先度の高い箇所から改善します。",
  },
  {
    q: "INP（Interaction to Next Paint）とFIDの違いは？",
    a: "FID（First Input Delay）は廃止され、2024年3月からINP（Interaction to Next Paint）に置き換えられました。FIDは最初の操作への応答のみを測定しましたが、INPはページ上のすべてのインタラクション（クリック・タップ・キー入力）への応答速度を総合的に評価します。200ms以下が「良好」の基準です。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO全体の概要" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "技術的SEO全般" },
  { href: "/seo/page-speed", label: "ページ速度改善", desc: "Core Web Vitals対策" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域名キーワードとエリアページ" },
  { href: "/seo/on-page-seo", label: "オンページSEO", desc: "ページ内最適化の方法" },
  { href: "/seo/structured-data", label: "構造化データ実装", desc: "Schema.org の実装" },
  { href: "/seo/internal-link", label: "内部リンク設計", desc: "リンク構造とSEO評価の流通" },
  { href: "/seo/seo-audit", label: "SEO監査・診断", desc: "現状の課題発見と改善計画" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "検索意図に合ったコンテンツ設計" },
  { href: "/web-design/mobile-friendly", label: "スマートフォン対応制作", desc: "レスポンシブデザイン" },
  { href: "/industries/clinic", label: "クリニックのSEO対策", desc: "医療機関のモバイルUX最適化" },
  { href: "/industries/restaurant", label: "飲食店のSEO対策", desc: "飲食業界のスマホ集客" },
  { href: "/industries/beauty", label: "美容室・サロンのSEO", desc: "サロン系スマホユーザー向け設計" },
  { href: "/industries/construction", label: "建設・リフォームのSEO", desc: "施工事例のモバイル表示最適化" },
  { href: "/area/tokyo", label: "東京のSEO対策", desc: "東京エリア特化のSEO支援" },
  { href: "/area/katsushika", label: "葛飾区のSEO対策", desc: "葛飾区エリアのSEO支援" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "モバイルSEO改善の料金目安" },
  { href: "/web-design", label: "Webデザイン制作", desc: "モバイルファースト設計の制作" },
  { href: "/knowledge/core-web-vitals", label: "Core Web Vitals入門", desc: "LCP・CLS・INPの基礎知識" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "モバイル検索キーワードの選定" },
  { href: "/seo/mobile-seo", label: "モバイルSEO", desc: "（このページ）" },
  { href: "/meo", label: "MEO対策とは", desc: "Googleマップと地域モバイル集客" },
  { href: "/knowledge/google-search-console", label: "サーチコンソール活用", desc: "モバイル問題の発見と修正" },
];

export default function MobileSeoPage() {
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
              <Link href="/seo" style={{ color: "#6B7280" }} className="hover:underline">SEO対策</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>モバイルSEO</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Mobile SEO</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              モバイルSEO・スマートフォン対応
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              Googleの検索トラフィックの大半がスマートフォンから発生しています。モバイルファーストインデックス時代において、スマートフォンでの表示品質・速度・操作性はSEO評価の根幹となります。LCP・CLS・INPの3指標（Core Web Vitals）はGoogleの公式ランキング要因です。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              2023年以降、全サイトがモバイルファーストインデックス対象となっています。スマートフォン対応はもはやオプションではなく、SEOの前提条件です。本ページではモバイルSEOの各施策を実装レベルで解説します。
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section style={{ position: "relative", height: "320px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_18_03.png"
            alt="スマートフォンSEO対策・モバイルファーストインデックス"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.50)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6, fontFamily: "var(--font-serif)" }}>
                スマートフォンで見づらいサイトは、<br />Googleからも、ユーザーからも選ばれない。
              </p>
            </div>
          </div>
        </section>

        {/* このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { n: "01", t: "モバイルファーストインデックスの仕組みと影響範囲", b: "Googleがモバイル版ページを評価の基準とする理由、PC版との評価差が生まれる仕組み、モバイル対応が不十分な場合に受ける具体的なSEOへの影響を解説します。" },
                { n: "02", t: "Core Web Vitals（LCP・CLS・INP）の意味と改善方法", b: "Googleの公式ランキング要因であるCore Web Vitalsの3指標を、意味・良好な数値基準・具体的な改善方法の三点セットで解説します。" },
                { n: "03", t: "スマートフォン特有の導線・UX設計の考え方", b: "タップ操作・スクロール行動・画面サイズ制約などスマートフォン固有の使われ方を踏まえた、直帰率を下げる情報設計とナビゲーション設計を紹介します。" },
                { n: "04", t: "業種別モバイルUX最適化のポイント", b: "クリニックの予約フロー・飲食店のメニュー閲覧・建設業の施工事例・サロンの料金表など、業種ごとに異なるモバイルユーザーの行動に合わせた設計を解説します。" },
                { n: "05", t: "モバイルSEO監査の手順と使用ツール", b: "PageSpeed Insights・Google Search Console・Lighthouseなどのツールを使ったモバイルSEO現状診断の手順と、発見した問題を優先度順に修正する流れを説明します。" },
                { n: "06", t: "成果を測るKPIとモニタリング方法", b: "モバイルSEOの効果を定量的に評価するための指標と、定期的なモニタリング方法をまとめます。" },
              ].map((item) => (
                <div key={item.n} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.t}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* モバイル未対応のSEOリスク */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>SEO Risks</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              スマートフォン未最適化がSEOに与える4つのダメージ
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "Googleの評価低下", b: "モバイルファーストインデックスではスマートフォン版のコンテンツがSEO評価の基準です。PCで完璧でもスマートフォン版が劣ると検索順位が下がります。PCにしかないコンテンツはインデックスされない恐れがあります。" },
                { t: "直帰率の急上昇", b: "スマートフォンで見づらいサイトはユーザーが数秒で離脱します。高い直帰率はGoogleに「品質が低いページ」と評価され、さらに順位低下につながります。" },
                { t: "Core Web Vitals不良", b: "LCP・CLS・INPのスコアがモバイルで「不良」になると、同等コンテンツの競合に検索順位で負けます。Core Web VitalsはGoogleの公式ランキング要因です。" },
                { t: "機会損失の拡大", b: "検索流入のうちスマートフォンからの割合が高く、対応していないサイトはこの大半のトラフィックを競合に奪われ続けます。毎日の積み重ねで差は広がるばかりです。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* よくある課題と原因 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Problems</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <p className="text-[15px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              モバイルSEOが機能していないサイトに共通する問題パターンを整理しました。自社サイトを確認するチェックリストとしてもご活用ください。
            </p>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  title: "スマホで表示が崩れる・横スクロールが発生する",
                  body: "viewportメタタグが設定されていない、または固定幅（width: 1000px 等）でレイアウトが組まれているケースが多いです。CSSのオーバーフロー制御が不十分で一部の要素が画面幅をはみ出し、横スクロールが発生します。Googleのモバイルユーザビリティレポートにも「コンテンツの幅がビューポートより広い」と検出されます。",
                },
                {
                  title: "タップ領域が小さく操作しにくい",
                  body: "ボタンやリンクテキストが小さすぎて指でタップしにくい状態です。Googleは44×44px未満のタップターゲットをユーザビリティ問題として検出します。特にナビゲーションメニュー・問い合わせボタン・フォームの送信ボタンが小さいと直接的なCV低下につながります。",
                },
                {
                  title: "モバイルページの表示が遅い（LCPが不良）",
                  body: "ファーストビューに配置された非圧縮の大型画像や、レンダリングブロッキングなJavaScript・CSSが主な原因です。モバイル回線では帯域幅が制限されるため、PCでは気にならない速度がモバイルでは深刻な遅延になります。PageSpeed Insightsでモバイルスコアを確認すると問題箇所が可視化されます。",
                },
                {
                  title: "モバイルとPCで表示・内容が異なる",
                  body: "JavaScriptで条件分岐してモバイルにのみコンテンツを非表示にしている場合、モバイルファーストインデックスではそのコンテンツがインデックスされません。重要なテキスト・画像・構造化データはモバイル版にも必ず含める必要があります。",
                },
                {
                  title: "スマホでフォームが使いにくい",
                  body: "入力フィールドが小さくてタップしにくい、input要素のtypeが適切に設定されていないため数字を入力するのにキーボードが切り替わらない、フォームのエラーメッセージがわかりにくいなど、モバイル特有の問題がCVを下げています。",
                },
                {
                  title: "CLSが高くレイアウトがずれる",
                  body: "画像・動画・広告・フォントがロードされるたびにページの見た目がずれ、ユーザーが読もうとしたテキストが突然移動する状態です。img要素にサイズ指定がない、Webフォントの読み込みによるFOUT（Font Swap時のシフト）、動的に挿入されるバナーが主な原因です。",
                },
                {
                  title: "モバイルナビゲーションが使いにくい",
                  body: "ハンバーガーメニューを開いた後のリンクが見にくい、メニューを閉じる手段がわかりにくい、スクロールを妨げるメニューなど、スマートフォン向けの操作性を考慮していない設計です。モバイルユーザーはパソコンと違い、指のみでナビゲーションするため設計上の工夫が必要です。",
                },
                {
                  title: "電話番号がタップしてもかけられない",
                  body: "電話番号がテキストとして表示されているだけで、tel:リンクになっていないケースです。スマートフォンユーザーにとって、電話番号のタップで即発信できるかどうかは問い合わせへの大きな障壁です。特にクリニック・飲食店・リフォーム業のような電話問い合わせが多い業種では機会損失に直結します。",
                },
                {
                  title: "INP（操作への応答速度）が遅い",
                  body: "JavaScriptの実行量が多く、ユーザーがボタンをタップしてから画面が反応するまでに200msを超える遅延が発生している状態です。メインスレッドをブロックする重い処理、不要なサードパーティスクリプト（チャット・分析ツール等）の過多が原因になります。",
                },
                {
                  title: "フォントサイズが小さくて読みにくい",
                  body: "本文テキストが12px以下など、ズームしなければ読めない状態です。Googleのモバイルフレンドリーチェックでも「テキストが小さすぎて読めない」として検出されます。モバイルでの読みやすさはSEO評価だけでなく滞在時間・直帰率にも直接影響します。",
                },
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

        {/* Core Web Vitals詳細 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Mobile First</p>
                <h2 className="font-black text-[24px] mb-6" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
                  モバイルファーストインデックスとは
                </h2>
                <p className="text-[15px] leading-[1.9] mb-4" style={{ color: "#374151" }}>
                  2019年以降、Googleはモバイル版のウェブページを優先的にクロール・インデックスする「モバイルファーストインデックス」を採用しています。PC版のコンテンツがどれほど優れていても、モバイル版の品質が低ければSEO評価は下がります。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  スマートフォンでの検索行動が主流となった現在、モバイル対応はSEOの前提条件です。レスポンシブデザインの採用、表示速度の最適化、タップ操作への対応が基本となります。PC版にのみ存在するコンテンツ・構造化データはモバイルファーストインデックスでは評価されない点に注意が必要です。
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Core Web Vitals</p>
                <h2 className="font-black text-[24px] mb-6" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
                  3つの指標と目標値
                </h2>
                <div className="space-y-4">
                  {[
                    { abbr: "LCP", full: "Largest Contentful Paint", threshold: "2.5秒以内", desc: "ページ読み込み開始から最大コンテンツ（主にヒーロー画像・見出し）が表示されるまでの時間。画像圧縮・preloadによる優先読み込みが有効。" },
                    { abbr: "CLS", full: "Cumulative Layout Shift", threshold: "0.1以下", desc: "ページ表示中に要素が予期せずずれる量の累計。img要素にwidth/height指定・Webフォントのfont-display設定で改善できる。" },
                    { abbr: "INP", full: "Interaction to Next Paint", threshold: "200ms以下", desc: "ユーザーのクリック・タップ・キー入力への応答速度。JavaScriptの最適化・不要なサードパーティスクリプト削減が効果的。" },
                  ].map((kpi) => (
                    <div key={kpi.abbr} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", padding: "20px" }}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-black text-[18px]" style={{ color: "#0d1b2a", fontFamily: "var(--font-mono)" }}>{kpi.abbr}</span>
                        <span className="text-[12px]" style={{ color: "#9CA3AF" }}>{kpi.full}</span>
                        <span className="ml-auto text-[12px] font-semibold" style={{ color: "#374151" }}>{kpi.threshold}</span>
                      </div>
                      <p className="text-[13px] leading-[1.8]" style={{ color: "#374151" }}>{kpi.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 業種別の活用ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の活用ポイント
            </h2>
            <p className="text-[15px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              スマートフォンユーザーの行動パターンは業種によって大きく異なります。「どのような操作を求めているか」を軸に最適化の方向性を整理しました。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
              {[
                {
                  industry: "クリニック・歯科・整骨院",
                  points: [
                    "電話番号をtel:リンクにして、タップ1回で発信できる設計を最優先",
                    "WEB予約フォームは入力3ステップ以内・必須項目のみに絞り込む",
                    "診療時間・アクセス情報をファーストビューで確認できる構成にする",
                    "スマホからでも見やすい診療科・料金のタブ切り替えUIを実装",
                  ],
                },
                {
                  industry: "飲食店・カフェ・居酒屋",
                  points: [
                    "メニュー画像は最初から表示できる軽量な形式（WebP）で提供し、スクロールで快適に閲覧できるよう設計",
                    "「本日の営業時間」「ラストオーダー」をファーストビューに表示し即決を促す",
                    "Google Mapsへの導線（現在地からのルート）をワンタップで呼び出せる設計",
                    "予約・問い合わせは電話・LINE・ウェブ予約の三択をボタンで並列表示",
                  ],
                },
                {
                  industry: "美容室・ネイル・エステ",
                  points: [
                    "施術のビフォーアフター写真はギャラリー形式でスワイプ閲覧できるよう実装",
                    "メニュー料金表はスマホでも縦スクロールで確認できる縦型テーブルを採用",
                    "ホットペッパービューティーへの誘導かWeb予約かを明確に分け、離脱を防ぐ",
                    "スタッフ紹介を顔写真付きで掲載し、モバイルユーザーの信頼形成と滞在時間向上を図る",
                  ],
                },
                {
                  industry: "建設・リフォーム・外壁塗装",
                  points: [
                    "施工事例をビフォーアフター形式の横スワイプギャラリーで表示し、視覚的に成果を伝える",
                    "「無料見積もり依頼」ボタンをスクロール位置に関わらず固定表示（スティッキーCTA）",
                    "工事工程の写真・動画はLazyLoadを徹底して初期読み込みを軽量化",
                    "チェックリスト形式の「診断コンテンツ」でスマホユーザーの興味を引きページ滞在時間を延ばす",
                  ],
                },
                {
                  industry: "士業（税理士・弁護士・行政書士）",
                  points: [
                    "初回相談の申し込みフォームはスマホで入力しやすい縦並び1カラム設計",
                    "サービス内容・費用・実績をアコーディオン形式でまとめてスクロール量を減らす",
                    "電話・メール・LINE相談の三択をファーストビューに固定表示",
                    "Q&AコンテンツはFAQSchema実装でGoogleに構造化データとして認識させ、モバイル検索でのリッチスニペット表示を狙う",
                  ],
                },
                {
                  industry: "学習塾・スクール・習い事",
                  points: [
                    "「体験授業申し込み」ボタンをヒーロー直下とフッター上に二箇所設置",
                    "コース・料金表はスマホで見やすいカード型レイアウトで比較しやすくする",
                    "保護者向けコンテンツはスマホから夜間に検索・閲覧されることが多いため、テキストを大きくし照明が暗い環境でも読みやすい高コントラスト設計を採用",
                    "講師・合格実績情報は縦スクロール型でシンプルに閲覧できる構成にする",
                  ],
                },
                {
                  industry: "不動産・賃貸仲介",
                  points: [
                    "物件検索・絞り込みUIはタッチ操作に最適化し、指で快適に操作できるスライダーやチェックボックスを採用",
                    "物件詳細ページは地図・間取り・写真・アクセスを縦スクロール1ページで完結させる",
                    "「内見予約」ボタンは物件詳細ページ内の複数箇所に設置しCVへの摩擦を最小化",
                    "物件一覧のカード型レイアウトは画像の遅延読み込み（Lazy Load）で初期表示速度を確保",
                  ],
                },
                {
                  industry: "EC・通販・小売",
                  points: [
                    "商品一覧の読み込み速度を優先し、無限スクロールよりページネーションを採用してCLSを防ぐ",
                    "カートへの追加・決済ボタンは親指で届きやすい画面下部に固定表示",
                    "決済フォームはAutofill対応のinput typeを指定し入力ステップを最小化",
                    "LCP対象となる商品ヒーロー画像はpreloadタグで優先読み込みし、2.5秒以内の表示を確保",
                  ],
                },
              ].map((item, i) => (
                <div key={i} style={{ background: "#F9F8F5", border: "1px solid #E8E4DC", padding: "28px" }}>
                  <p className="font-bold text-[15px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.industry}</p>
                  <ul className="space-y-2">
                    {item.points.map((pt, j) => (
                      <li key={j} className="flex gap-3 text-[13px] leading-[1.8]" style={{ color: "#374151" }}>
                        <span className="shrink-0 mt-1" style={{ color: "#9CA3AF" }}>—</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* モバイルSEO対応の実装項目 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Checklist</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              モバイルSEO対応の実装項目
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { n: "01", t: "レスポンシブデザインの採用", b: "CSSメディアクエリを使い、画面幅に応じてレイアウトが自動調整される設計。現在の標準実装方法であり、1つのURLで全デバイスに対応できます。Googleが最も推奨する実装方法です。" },
                { n: "02", t: "viewportメタタグの正確な設定", b: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> を必ず設定します。これがないとモバイルブラウザがPC向けに表示してしまい、縮小表示になります。" },
                { n: "03", t: "文字サイズ・行間のモバイル最適化", b: "本文は16px以上、行間は1.7〜1.9を確保します。ズームしなくても読める文字サイズが基本です。見出しはclamp()関数でビューポートに応じた可変サイズを設定するとスマホでも美しく表示されます。" },
                { n: "04", t: "タップターゲットのサイズ確保", b: "ボタンやリンクの最小サイズは44×44px。指で正確にタップできる大きさにすることで操作性と評価が向上します。Search Consoleの「モバイルユーザビリティ」レポートで問題箇所を特定できます。" },
                { n: "05", t: "横スクロールの排除", b: "画面幅を超えるコンテンツは横スクロールが発生し、ユーザー体験を著しく損ないます。CSSでオーバーフローを制御します。overflow-x: hidden をbodyに設定するとともに、固定幅要素がないか確認します。" },
                { n: "06", t: "LCP（最大コンテンツ描画）の最適化", b: "ファーストビュー内の最大コンテンツ（主に画像や見出し）が2.5秒以内に表示されるよう最適化します。ヒーロー画像のWebP変換・圧縮、rel=\"preload\"による優先読み込み、サーバーレスポンス短縮（TTFB改善）が有効です。" },
                { n: "07", t: "CLS（レイアウトシフト）の解消", b: "画像や広告が後から読み込まれてレイアウトがずれる問題を解消します。img要素にwidth/height属性を指定、Webフォントにfont-display: swapを設定、動的コンテンツの挿入位置を事前に確保します。" },
                { n: "08", t: "INP（操作応答速度）の改善", b: "JavaScriptの実行量を減らし、ユーザー操作への応答を200ms以下に保ちます。不要なサードパーティスクリプトの削減、長いタスクの分割（web workersの活用）、イベントリスナーの最適化が主な手法です。" },
                { n: "09", t: "ポップアップ・インタースティシャルの制限", b: "ページを覆うポップアップはモバイルでペナルティ対象になります。クッキー同意など必要最小限のもの以外は避け、表示する場合は簡単に閉じられる設計にします。" },
              ].map((item) => (
                <div key={item.n} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.t}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 実装フロー */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              実装フロー
            </h2>
            <p className="text-[15px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              モバイルSEO改善は「現状把握→問題特定→優先度付け→修正→検証」のサイクルで進めます。いきなり全施策に着手せず、影響の大きい項目から対処します。
            </p>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  n: "01",
                  t: "Google Search Consoleでモバイルの問題を確認する",
                  b: "「モバイルユーザビリティ」レポートでエラーページ数・問題の種類（テキスト小さすぎ・タップ領域・横スクロール等）を把握します。「Core Web Vitals」レポートでLCP・CLS・INPの不良・要改善ページを一覧化します。",
                },
                {
                  n: "02",
                  t: "PageSpeed Insightsでページ別スコアを計測する",
                  b: "主要ページ（トップ・サービス・お問い合わせ）のURLをPageSpeed Insightsに入力し、モバイルスコアと改善提案を確認します。「Opportunities（機会）」セクションに表示される改善項目を優先度の高い順に記録します。",
                },
                {
                  n: "03",
                  t: "Chrome LighthouseでSEO・アクセシビリティも診断する",
                  b: "Chrome DevToolsのLighthouseタブでモバイルモードの完全監査を実行します。Performance・SEO・Accessibility・Best Practicesの4スコアを確認し、SEOタブのモバイル関連チェック項目（viewportの設定・フォントサイズ・クロール可能かどうか）を修正リストに加えます。",
                },
                {
                  n: "04",
                  t: "LCP改善：ヒーロー画像を最適化する",
                  b: "ファーストビューの主要画像をWebP形式に変換し、srcset属性でデバイスに応じた解像度の画像を提供します。Next.jsを使用している場合はnext/imageコンポーネントが自動最適化します。priority属性を付けてヒーロー画像を優先読み込みします。",
                },
                {
                  n: "05",
                  t: "CLS改善：画像・動的コンテンツにサイズを指定する",
                  b: "全img要素にwidth/height属性を明記します。Webフォントはfont-display: swapを設定してFOUTによるシフトを防ぎます。広告・バナーなど後からロードされる要素は、事前にスペースを確保するプレースホルダーを設置します。",
                },
                {
                  n: "06",
                  t: "INP改善：JavaScriptを最適化する",
                  b: "使用していないサードパーティスクリプト（チャット・ポップアップ・分析ツール）を削除または遅延読み込みに変更します。重いJavaScriptタスクをWeb Workersに移行し、メインスレッドの応答性を確保します。",
                },
                {
                  n: "07",
                  t: "モバイルUXを実機・エミュレーターで確認する",
                  b: "Chrome DevToolsのモバイルエミュレーターで主要デバイス（iPhone SE・iPhone 15・Android標準機）の表示を確認します。可能であれば実機でも確認し、タップしにくい箇所・読みにくいテキスト・横スクロールが発生する箇所を記録します。",
                },
                {
                  n: "08",
                  t: "フォーム・CTAのモバイル最適化",
                  b: "問い合わせフォームのinput typeを適切に設定（email・tel・number等）します。ボタンサイズを44px以上に拡大します。電話番号にtel:リンクを設定します。フォームのCTAボタンを縦1カラムで画面いっぱいの幅に設定し、タップしやすくします。",
                },
                {
                  n: "09",
                  t: "改善後にPageSpeed Insightsで再計測する",
                  b: "各修正を実装した後、PageSpeed InsightsとSearch ConsoleのCore Web Vitalsレポートで変化を確認します。スコアが改善されていない場合は、残っている問題項目を深掘りします。",
                },
                {
                  n: "10",
                  t: "モバイル流入・CVの変化をGA4でモニタリングする",
                  b: "Google Analytics 4のデバイスカテゴリ別レポートでモバイルセッション・エンゲージメント率・コンバージョン数の推移を月次で追います。Core Web Vitals改善後1〜2ヶ月で変化が現れることが多いです。",
                },
              ].map((item) => (
                <div key={item.n} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.t}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <p className="text-[15px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              モバイルSEOの効果は技術指標とビジネス指標の両方で評価します。Core Web Vitalsスコアが改善しても、ユーザー行動・コンバージョンへの影響を確認するまで施策の成果は判断できません。
            </p>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  n: "01",
                  t: "Core Web Vitalsスコア（LCP・CLS・INP）",
                  b: "Google Search ConsoleのCore Web Vitalsレポート、またはPageSpeed Insightsでモバイルの各指標値を月次で追跡します。LCP 2.5秒以内・CLS 0.1以下・INP 200ms以下の「良好」ゾーンに入っているページ数を増やすことが目標です。",
                },
                {
                  n: "02",
                  t: "モバイルオーガニックセッション数",
                  b: "GA4のデバイスカテゴリ「mobile」のオーガニック検索セッション数を月次で確認します。モバイルSEO施策の成果として、モバイルからの自然検索流入が増加傾向にあるかどうかを判断します。",
                },
                {
                  n: "03",
                  t: "モバイルのエンゲージメント率（旧：直帰率）",
                  b: "GA4の「エンゲージメント率」（10秒以上の滞在またはCV・2ページ以上閲覧）をデバイス別で比較します。モバイルのエンゲージメント率がPCに近づいているほど、モバイルUX改善の効果が出ています。",
                },
                {
                  n: "04",
                  t: "モバイルからのコンバージョン数・CVR",
                  b: "GA4でデバイス別のコンバージョン数とCVR（コンバージョン率）を追跡します。モバイルUX・フォーム改善・CTA最適化の効果が直接反映される指標です。モバイルCVRがPC比で大きく低い場合、モバイル固有のフリクション（障壁）が残っています。",
                },
                {
                  n: "05",
                  t: "Search Consoleのモバイルユーザビリティエラー数",
                  b: "Google Search Consoleの「モバイルユーザビリティ」レポートでエラーがあるページ数を追跡します。ゼロを目指し、新規エラーが発生した際は速やかに対処します。",
                },
                {
                  n: "06",
                  t: "モバイル検索順位（主要キーワード）",
                  b: "Google Search Consoleのクエリレポートで、主要キーワードのモバイル検索順位を月次で確認します。デバイス別に絞り込んで表示することで、PC順位とモバイル順位の乖離を把握できます。",
                },
                {
                  n: "07",
                  t: "平均ページ読み込み時間（モバイル）",
                  b: "GA4の「テクノロジー」→「ページ」レポートで、モバイルデバイスからのページ読み込み時間を確認します。WebPageTestやSpeedCurveなどのツールで定期的な実測値を記録し、改善の推移を可視化します。",
                },
              ].map((item) => (
                <div key={item.n} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.t}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="モバイルSEOについてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="モバイルSEOのご相談"
          body="スマートフォン対応・Core Web Vitals改善・表示速度最適化など、モバイルSEOに関するご相談をお気軽にどうぞ。PageSpeed Insightsの結果をお送りいただくと、現状の課題を確認したうえで具体的なご提案が可能です。"
        />
      </main>
      <Footer />
    </>
  );
}

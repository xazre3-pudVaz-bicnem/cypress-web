import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ページ速度最適化とは｜Core Web Vitals改善・LCP・CLS・INP対策｜株式会社サイプレス",
  description:
    "ページ速度最適化（Core Web Vitals・Lighthouse）の基礎から実践まで解説。LCP・CLS・INPの改善方法、画像最適化・JavaScript最適化・CDN活用・Next.js最適化・フォント最適化まで体系的に網羅。PageSpeed Insightsで90点以上を目指す具体的な手順。",
  keywords: [
    "ページ速度最適化",
    "Core Web Vitals",
    "LCP改善",
    "CLS改善",
    "INP改善",
    "Lighthouse",
    "ページパフォーマンス",
    "PageSpeed Insights",
    "画像最適化",
    "Next.js最適化",
    "CDN",
    "WebP",
  ],
  openGraph: {
    title: "ページ速度最適化とは｜Core Web Vitals改善・LCP・CLS・INP対策｜株式会社サイプレス",
    description:
      "ページ速度最適化の実践ガイド。Core Web Vitals（LCP・CLS・INP）の改善からLighthouse 90点達成まで解説。画像・JS・CSS・フォント・CDN最適化の具体的な手順。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/page-speed" },
};

const faqItems = [
  {
    q: "LCP（Largest Contentful Paint）を改善するには？",
    a: "LCP（ページの最大コンテンツの描画時間）を2.5秒以内にするには、①ファーストビューの画像をWebP/AVIFに変換してサイズを最適化、②LCP要素へのpreload設定（`<link rel=\"preload\">`）、③サーバー応答時間の短縮（TTFB改善・CDN活用）、④フォントの最適化（font-display: swap）、⑤fetchpriorityを「high」に設定することが主な施策です。Next.jsでは`<Image priority>`を付けるだけでpreloadが自動適用されます。",
  },
  {
    q: "CLS（Cumulative Layout Shift）を改善するには？",
    a: "CLS（レイアウトシフト）を0.1以下にするには、①画像・動画・iframeに必ずwidth/heightを指定（アスペクト比を保持）、②フォントの読み込み時のスペース確保（font-display: optional）、③広告・Webフォントの読み込みによるシフトを防ぐ事前スペース確保、④ダイナミックコンテンツの上部への突然の挿入を避けること、⑤アニメーションにはtransform/opacityを使いlayout変化を発生させないことが重要です。",
  },
  {
    q: "INP（Interaction to Next Paint）を改善するには？",
    a: "INP（ユーザー操作への応答性）を200ms以下にするには、①重いJavaScript処理をWeb WorkerやrequestIdleCallbackに移す、②長いタスク（50ms以上）を分割する（scheduler.yield APIの活用）、③不要なJavaScriptの除去・コード分割（Dynamic Import）、④サードパーティスクリプト（タグマネージャー・チャット等）の読み込み遅延化が主な施策です。Chrome DevToolsのPerformanceタブで長いタスクを特定することが第一歩です。",
  },
  {
    q: "画像最適化で最も効果的な方法は？",
    a: "①WebP/AVIF形式への変換（JPEG比で30〜50%軽量化）、②適切なサイズへのリサイズ（表示サイズより大きい画像を使わない）、③遅延読み込み（loading=\"lazy\"）の設定、④ファーストビュー画像のpreload・priority設定（Next.jsでは`priority`prop）の4つが主な施策です。Next.jsの`next/image`コンポーネントを使うと自動でWebP変換・遅延読み込み・srcset生成が適用されます。",
  },
  {
    q: "Lighthouseのスコアが上がらない原因は何ですか？",
    a: "よくある原因として、①サードパーティスクリプト（Google Analytics・タグマネージャー・チャットウィジェット）の読み込みコスト、②最適化されていない大きな画像、③レンダーブロッキングリソース（CSSとJavaScript）、④適切に最適化されていないフォント、⑤過度なDOM要素数（1,500超）が挙げられます。Chrome DevToolsのPerformanceタブとLighthouseレポートの「Opportunities」セクションで具体的なボトルネックを特定することが先決です。",
  },
  {
    q: "PageSpeed InsightsとLighthouseの違いは何ですか？",
    a: "Lighthouseはブラウザ（Chrome DevTools）やCLIで実行する計測ツールで、主にシミュレーション環境（ラボデータ）でのスコアを測定します。PageSpeed Insightsはそのスコアに加えて、実際のChromeユーザーのデータ（フィールドデータ・Core Web Vitalsの実績値）も表示します。Googleのランキング評価にはフィールドデータ（実際のユーザー体験）の方が直接的に影響します。",
  },
  {
    q: "CDN（コンテンツデリバリネットワーク）はページ速度にどう効きますか？",
    a: "CDNは世界中のエッジサーバーにコンテンツをキャッシュし、ユーザーに最も近いサーバーから配信することでTTFB（Time to First Byte）を大幅に短縮します。日本国内向けサイトではVercel・Cloudflare・Amazon CloudFrontなどが一般的です。Next.jsのVercelデプロイはCDNが標準で組み込まれており、追加設定なしでエッジ配信が有効になります。",
  },
  {
    q: "Next.jsを使うとページ速度は改善しますか？",
    a: "Next.jsはSSG/SSR・画像最適化（next/image）・フォント最適化（next/font）・コード分割・App RouterによるReact Server Componentsなど、パフォーマンスのベストプラクティスが組み込まれています。適切に実装すれば、WordPressなど従来のCMSより高いパフォーマンスを得やすい構成です。ただし不適切な実装（クライアントコンポーネントの多用・重いアニメーション・大きなサードパーティ）は逆効果になります。",
  },
  {
    q: "TTFB（Time to First Byte）とは何ですか？",
    a: "TTFBはブラウザがHTTPリクエストを送信してから最初の1バイトを受け取るまでの時間です。800ms以下が目標値とされています。TTFBを改善するには、①CDNの活用、②サーバーサイドの処理時間短縮（クエリ最適化・キャッシュ活用）、③Next.jsのStatic GenerationやEdge Runtimeの活用、④ホスティング環境のグレードアップが有効です。",
  },
  {
    q: "フォント最適化でできることは何ですか？",
    a: "①next/fontを使ってフォントをセルフホスティング化する（Google Fontsへのリクエスト削減）、②font-display: swapでFOUT（テキスト非表示の期間）を防ぐ、③必要なサブセット（日本語なら「latin」のみなど）だけ読み込む、④preconnectでGoogleFontsへの接続を事前確立する、⑤可能であればシステムフォントを使うことで読み込みコストをゼロにする、といった施策があります。",
  },
  {
    q: "レンダーブロッキングリソースとは何ですか？",
    a: "レンダーブロッキングリソースとは、ブラウザがページの表示を開始する前に読み込みを完了しなければならないCSSやJavaScriptファイルのことです。解決策として、①CSSはクリティカルCSSのみをインライン化し残りを遅延読み込み、②JavaScriptには`defer`や`async`属性を追加、③不要なJSは除去するかDynamic Importで遅延読み込みに変換します。",
  },
  {
    q: "WordPressサイトのページ速度を改善するには？",
    a: "WordPressでの速度改善は、①キャッシュプラグイン（WP Rocket・W3 Total Cache）の導入、②画像圧縮プラグイン（Imagify・ShortPixel）の使用、③CDNの設定（Cloudflare等）、④重いテーマ・プラグインの見直し、⑤データベース最適化が主な施策です。ただしWordPressの構造的な限界から、根本的な速度改善にはNext.js等への移行が有効な場合もあります。",
  },
  {
    q: "モバイルのスコアだけが低い場合はどうすればいいですか？",
    a: "Lighthouseはモバイルテストで遅いCPUと低速回線をシミュレートするため、PCより厳しいスコアになります。モバイル改善の優先施策は、①画像のさらなる最適化（モバイル向けの小さいsrcsetを設定）、②JavaScript量の削減（モバイルはCPU処理が遅い）、③タッチターゲットの適切なサイズ確保（44px以上）、④ビューポートの正しい設定、⑤モバイルでのフォントサイズ最適化です。",
  },
  {
    q: "Core Web VitalsはSEOランキングにどの程度影響しますか？",
    a: "GoogleはCore Web Vitalsを「Page Experience」シグナルの一部として公式にランキング要因に採用しています。ただしコンテンツの品質・関連性が最優先であり、Core Web Vitalsは同等コンテンツ間の比較で差別化要因になります。「不良」から「良好」に改善することは順位改善の一因になり得ますが、単独で大幅な順位変動を起こすわけではありません。コンテンツ品質と速度の両方を高めることが重要です。",
  },
  {
    q: "Dynamic Import（動的インポート）とは何ですか？",
    a: "Dynamic Importとは、JavaScriptモジュールをページ読み込み時ではなく必要なタイミングで読み込む技術です。Next.jsでは`next/dynamic`を使って実装します。例えばモーダルやタブ内のコンテンツ、スクロールで表示されるセクションのJSは初期読み込みに含める必要がないためDynamic Importが有効です。バンドルサイズを削減し、初期表示速度を改善できます。",
  },
  {
    q: "Google Analyticsはページ速度に影響しますか？",
    a: "Google Analytics（GA4）のスクリプトはサードパーティリクエストとして読み込みコストが発生します。軽減策として、①`async`属性での非同期読み込み（デフォルト）、②Google Tag Managerを通じた管理（タグを1スクリプトに集約）、③`partytown`ライブラリでWeb Workerに移す方法があります。AnalyticsそのものはINPにも影響する可能性があるため、不要なカスタムイベントは削除することを推奨します。",
  },
  {
    q: "ページ速度改善の効果を測定するにはどうすればいいですか？",
    a: "①PageSpeed InsightsでBefore/Afterのスコアを記録する（URLを変えずに計測）、②Google Search ConsoleのCore Web Vitalsレポートで実ユーザーの「良好」割合の変化を確認する、③Google AnalyticsのPage Speed（ページ速度）レポートで直帰率・エンゲージメント時間の変化を追う、④Chrome UX Report（CrUX）のフィールドデータで改善を月次確認する、という方法が一般的です。",
  },
  {
    q: "preload・preconnect・prefetchの違いを教えてください",
    a: "・preload: 現在のページで確実に必要なリソース（LCP画像・クリティカルフォント）を高優先度で事前取得します。・preconnect: サードパーティサーバー（Google Fonts・Analytics等）への接続を事前確立し、DNSルックアップ・TLSハンドシェイクの時間を短縮します。・prefetch: 次のページで必要になりそうなリソースをアイドル時間に先読みします。Next.jsの`<Link>`コンポーネントはビューポート内リンクを自動的にprefetchします。",
  },
  {
    q: "Critical CSS（クリティカルCSS）とは何ですか？",
    a: "クリティカルCSSとは、ファーストビュー（スクロールなしで見える領域）の表示に必要な最小限のCSSのことです。このCSSをHTMLの`<head>`内にインラインで記述することで、外部CSSファイルの読み込みを待たずに初期表示が始まります。Lighthouseの「Eliminate render-blocking resources」の警告が出る場合は、クリティカルCSSの分離が有効です。Next.jsではApp RouterのServer Componentsが自動的にCSS読み込みを最適化します。",
  },
  {
    q: "ページ速度改善の費用はどのくらいかかりますか？",
    a: "改善範囲・サイトの現状・技術スタックによって大きく異なります。部分的な最適化（画像・フォント中心）であれば数万〜10万円台から対応できる場合があります。JavaScriptアーキテクチャの見直しやCDN設定・サーバー改善を含む総合的な改善では30〜100万円程度になる場合もあります。まず無料の診断からはじめ、優先度の高い改善項目を特定することをおすすめします。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO全体の概要" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "Core Web VitalsとSEOの関係" },
  { href: "/seo/search-console", label: "Google Search Console活用", desc: "速度スコアのモニタリング" },
  { href: "/seo/seo-audit", label: "SEO診断", desc: "ページ速度の現状評価" },
  { href: "/seo/mobile-seo", label: "モバイルSEO", desc: "モバイルでの速度最適化" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "速度改善とコンテンツ戦略" },
  { href: "/seo/internal-linking", label: "内部リンク最適化", desc: "クロール効率との関係" },
  { href: "/seo/structured-data", label: "構造化データ", desc: "リッチリザルトとページ品質" },
  { href: "/web-design", label: "Webサイト制作", desc: "高速サイト設計と制作" },
  { href: "/web-design/nextjs", label: "Next.jsでのサイト制作", desc: "パフォーマンスに優れたサイト" },
  { href: "/web-design/wordpress", label: "WordPress制作", desc: "WordPress高速化の方法" },
  { href: "/knowledge/core-web-vitals", label: "Core Web Vitals解説", desc: "LCP・CLS・INP改善入門" },
  { href: "/glossary/core-web-vitals", label: "Core Web Vitals用語集", desc: "LCP・CLS・INP・TTFBの定義" },
  { href: "/glossary/lcp", label: "LCPとは", desc: "Largest Contentful Paintの解説" },
  { href: "/glossary/cls", label: "CLSとは", desc: "Cumulative Layout Shiftの解説" },
  { href: "/glossary/inp", label: "INPとは", desc: "Interaction to Next Paintの解説" },
  { href: "/guide/google-analytics-basics", label: "Google Analytics基礎ガイド", desc: "速度データの確認方法" },
  { href: "/guide/lighthouse", label: "Lighthouse完全ガイド", desc: "スコアの読み方と改善手順" },
  { href: "/checklist/technical-seo", label: "テクニカルSEOチェックリスト", desc: "ページ速度の確認項目" },
  { href: "/column/seo", label: "SEOコラム", desc: "ページ速度・Core Web Vitals最新情報" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "ページ速度改善込みのSEO支援" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "テクニカルSEO改善の料金" },
];

const optimizations = [
  {
    category: "画像最適化",
    items: [
      "WebP/AVIF形式への変換",
      "適切なサイズへのリサイズ",
      "遅延読み込み（loading=lazy）",
      "LCP画像へのpreload設定",
      "next/imageコンポーネントの活用",
      "srcsetで複数解像度を提供",
    ],
  },
  {
    category: "JavaScript最適化",
    items: [
      "コード分割（Code Splitting）",
      "Dynamic Import（遅延読み込み）",
      "不要なJSの除去・Tree Shaking",
      "サードパーティスクリプトの遅延化",
      "長いタスクの分割（Long Tasks）",
      "Web Workerへの重処理の移管",
    ],
  },
  {
    category: "CSS最適化",
    items: [
      "クリティカルCSSのインライン化",
      "未使用CSSの除去（PurgeCSS等）",
      "レンダーブロッキングCSSの遅延",
      "CSS Containmentの活用",
      "Tailwind CSSのPurge設定",
      "CSS-in-JSからCSS Modulesへの移行",
    ],
  },
  {
    category: "フォント最適化",
    items: [
      "font-display: swapの設定",
      "next/fontでセルフホスティング化",
      "必要なサブセットのみ読み込み",
      "preconnectでGoogleFonts接続",
      "システムフォントへのフォールバック",
      "フォントのpreloadで早期取得",
    ],
  },
  {
    category: "インフラ・配信最適化",
    items: [
      "CDN（エッジ配信）の活用",
      "HTTPキャッシュヘッダーの設定",
      "Brotli/gzip圧縮の有効化",
      "HTTP/2・HTTP/3の利用",
      "サーバー応答時間（TTFB）の改善",
      "Edge Runtimeの活用",
    ],
  },
  {
    category: "レイアウト安定性（CLS）",
    items: [
      "画像・動画にwidth/height指定",
      "aspect-ratioでサイズを予約",
      "Webフォントのレイアウトシフト防止",
      "広告スロットの事前サイズ確保",
      "動的コンテンツの安定化",
      "transform/opacityでのアニメーション",
    ],
  },
];

const commonIssues = [
  {
    n: "01",
    t: "画像が最適化されていない",
    b: "JPEGやPNGをそのままアップロードしているケースが最も多い問題です。WebP変換・サイズリサイズ・遅延読み込みの3点セットが未実装だと、LCPが3〜5秒以上になることは珍しくありません。",
  },
  {
    n: "02",
    t: "JavaScriptバンドルが大きすぎる",
    b: "未使用のライブラリを含んだまま全ページで読み込んでいると、JavaScriptのパースと実行でメインスレッドが長時間ブロックされます。バンドルサイズが1MB超の場合はコード分割が急務です。",
  },
  {
    n: "03",
    t: "サーバーレスポンス（TTFB）が遅い",
    b: "動的ページでデータベースクエリやAPI呼び出しに時間がかかっているケースです。CDNキャッシュが効いていない・サーバーが遠い・クエリが最適化されていないことが主な原因です。",
  },
  {
    n: "04",
    t: "レンダリングブロックリソースがある",
    b: "headタグ内にasync/deferなしのscriptタグや大きなCSSファイルがあると、ブラウザがページ描画を開始できません。Lighthouseの「Eliminate render-blocking resources」警告が出ている場合は優先的に対応します。",
  },
  {
    n: "05",
    t: "CDNを使っていない",
    b: "単一のオリジンサーバーから全ユーザーにコンテンツを配信していると、地理的な距離によるレイテンシーが発生します。国内ユーザー向けでも日本国内のエッジノードからの配信でTTFBを200ms以下に短縮できます。",
  },
  {
    n: "06",
    t: "フォントの読み込みが遅い",
    b: "Google Fontsから複数のフォントファイルを読み込んでいる場合、外部DNSルックアップとファイル取得の待機時間が発生します。next/fontへの移行やpreconnect設定で大幅に改善できます。",
  },
  {
    n: "07",
    t: "画像・iframeにwidth/heightがない",
    b: "画像やiframeのサイズが未指定だとブラウザはスペースを確保できず、読み込み完了後にレイアウトが動きます（CLS）。全ての画像にwidth・heightを必ず指定するか、aspect-ratioを使います。",
  },
  {
    n: "08",
    t: "サードパーティスクリプトが多すぎる",
    b: "タグマネージャー・チャットウィジェット・ABテストツール・ヒートマップなどが重複・累積することで、初期読み込みが大幅に遅くなります。各スクリプトの遅延読み込み化と不要なタグの削除が必要です。",
  },
  {
    n: "09",
    t: "Webフォントが多すぎる・バリアントが多い",
    b: "デザインのために複数のウェイト（100・300・400・700・900）や複数の書体を読み込んでいると、合計ファイルサイズが数百KBになります。使用するウェイトを2〜3種類に絞ることが重要です。",
  },
  {
    n: "10",
    t: "ファーストビュー画像にlazyが設定されている",
    b: "LCP要素（ファーストビューのメイン画像）にloading=\"lazy\"を設定すると、ブラウザが表示領域に入るまで読み込みを遅らせるため、LCPが悪化します。ファーストビュー画像にはpriorityを設定し、スクロール後の画像にのみlazyを使います。",
  },
];

const industryPoints = [
  {
    industry: "飲食店・カフェ",
    icon: "01",
    points: [
      "料理写真が多いため画像最適化が最重要課題",
      "WebP変換とsrcsetで写真ギャラリーを軽量化",
      "メニューページのCLSをAspect Ratioで防止",
      "Instagramウィジェットの遅延読み込み化",
      "Google Mapsの遅延iframeで初期速度を確保",
    ],
  },
  {
    industry: "クリニック・医療機関",
    icon: "02",
    points: [
      "予約システムの外部スクリプトを遅延化",
      "医療スタッフ写真のnext/image最適化",
      "チャットボットの遅延読み込み設定",
      "診療内容ページのCritical CSS分離",
      "モバイルでの入力フォーム軽量化",
    ],
  },
  {
    industry: "EC・オンラインショップ",
    icon: "03",
    points: [
      "商品画像の大量最適化（AVIF優先）",
      "カテゴリページの無限スクロールとINP対策",
      "決済スクリプト（Stripe等）の遅延読み込み",
      "商品フィルタのJavaScript最適化",
      "カートアイコンのレイアウトシフト防止",
    ],
  },
  {
    industry: "建設・リフォーム業",
    icon: "04",
    points: [
      "施工事例の写真ギャラリー最適化が最優先",
      "施工前後の比較スライダーのJS軽量化",
      "問い合わせフォームの遅延読み込み",
      "Google Maps埋め込みの非同期化",
      "PDFカタログをIntersection Observer経由で読み込み",
    ],
  },
  {
    industry: "美容サロン・エステ",
    icon: "05",
    points: [
      "施術写真のAVIF変換と遅延読み込み",
      "Instagramフィード埋め込みの非同期化",
      "予約ウィジェット（HOT PEPPER等）の遅延化",
      "動画背景のパフォーマンス最適化",
      "Webフォントを2ウェイトに絞る",
    ],
  },
  {
    industry: "士業・コンサルティング",
    icon: "06",
    points: [
      "テキスト中心のためJS・CSSの最適化が主眼",
      "ブログ記事ページのCritical CSS分離",
      "資料ダウンロードPDFの非同期読み込み",
      "問い合わせフォームのcode splitting",
      "Zoomウィジェット等のサードパーティ管理",
    ],
  },
  {
    industry: "不動産",
    icon: "07",
    points: [
      "物件写真の大量lazy load最適化",
      "地図・周辺情報の非同期読み込み",
      "物件検索フィルタのINP最適化",
      "360度ビューアの遅延読み込み",
      "問い合わせフォームの分割読み込み",
    ],
  },
  {
    industry: "教育・スクール",
    icon: "08",
    points: [
      "オンライン授業動画のLazy Load化",
      "LMS（学習管理システム）埋め込みの最適化",
      "生徒・講師写真のWebP変換",
      "お問い合わせ・無料体験申込フォームの軽量化",
      "SNS埋め込みコンテンツの遅延読み込み",
    ],
  },
];

const improvementSteps = [
  {
    step: "01",
    title: "PageSpeed Insightsで現状スコアを計測する",
    detail:
      "pagespeed.web.dev にURLを入力し、モバイル・PCそれぞれのスコアを記録します。「Opportunities」（改善機会）と「Diagnostics」（診断）のセクションを確認し、スクリーンショットを保存して改善前後の比較に使います。フィールドデータ（実ユーザーのデータ）がある場合は、ラボデータと合わせて確認します。",
  },
  {
    step: "02",
    title: "Chrome DevToolsのNetworkタブで大きなリソースを特定する",
    detail:
      "Chrome DevTools（F12）→ Networkタブを開き、ページを読み込みます。「Size」列でソートし、大きなファイル（画像・JS・CSS・フォント）を特定します。1MB超の画像ファイルや数百KBのJSバンドルがあれば、それが最初の改善対象です。",
  },
  {
    step: "03",
    title: "LCP要素を特定しfetchpriorityとpreloadを設定する",
    detail:
      "Chrome DevToolsのPerformanceタブでLCP要素を特定します（Timingsセクションに表示されます）。LCP要素が画像の場合、Next.jsでは`<Image priority>`を追加するだけでpreloadが自動適用されます。LCP要素がテキストの場合はWebフォントのpreloadを検討します。",
  },
  {
    step: "04",
    title: "全画像をWebP/AVIFに変換し適切なサイズにリサイズする",
    detail:
      "Next.jsではnext/imageコンポーネントを使うと自動でWebP変換が行われます。静的な画像はSquoosh（squoosh.app）でWebP変換し、表示サイズの1.5〜2倍の解像度でリサイズします。Retina対応は2xを上限にし、それ以上は過剰です。ファーストビュー以外の画像には必ずloading=\"lazy\"を設定します。",
  },
  {
    step: "05",
    title: "JavaScriptのバンドルサイズを分析し不要なコードを削除する",
    detail:
      "Next.jsでは`next build`後に`.next/stats.html`（Bundle Analyzerを有効にした場合）でバンドルを可視化できます。`@next/bundle-analyzer`を導入し、大きなライブラリを特定します。momentjsをday.jsに置き換える・lodashを個別インポートにするなど、軽量な代替ライブラリへの移行が効果的です。",
  },
  {
    step: "06",
    title: "サードパーティスクリプトを遅延読み込みに変換する",
    detail:
      "Google Tag Manager・チャットウィジェット・ヒートマップツールなどを`afterInteractive`または`lazyOnload`のStrategyでNext.jsのScriptコンポーネントを使って読み込みます。絶対に必要なスクリプト以外は`lazyOnload`にし、ページのインタラクティブ性を確保してから読み込みます。",
  },
  {
    step: "07",
    title: "フォントをnext/fontでセルフホスティング化する",
    detail:
      "Next.jsのnext/fontを使うと、Google Fontsのフォントファイルがビルドジョブでローカルにダウンロードされ、外部リクエストなしでフォントが配信されます。`font-display: swap`が自動設定され、CLSも最小化されます。使用するウェイトは2〜3種類に絞ります。",
  },
  {
    step: "08",
    title: "CDNを設定しHTTPキャッシュヘッダーを最適化する",
    detail:
      "静的アセット（画像・フォント・CSS・JS）のCache-Controlヘッダーに`max-age=31536000, immutable`を設定します。Next.jsのVercelデプロイでは自動でCDNキャッシュが機能します。オリジンサーバーにはCloudflareを前置することで、追加コストなしでCDNを導入できます。",
  },
  {
    step: "09",
    title: "Google Search ConsoleのCore Web Vitalsで実ユーザーの数値を確認する",
    detail:
      "改善後は2〜4週間待ちます。Search ConsoleのCore Web Vitalsレポートに実ユーザーのデータが反映されるのに時間がかかるためです。「良好」URLの割合が増加していれば改善が実データに表れています。改善前後の数値を記録しレポートに残します。",
  },
  {
    step: "10",
    title: "継続的なモニタリングとアラートの設定",
    detail:
      "PageSpeed InsightsのAPIを定期的に叩くか、SpeedCurveやCalibreなどのパフォーマンス監視ツールを導入します。デプロイのたびにLighthouse CIを実行し、スコアが一定以下に落ちたらアラートを出す仕組みを構築することで、パフォーマンスリグレッションを防ぎます。",
  },
];

const kpiItems = [
  {
    n: "01",
    label: "Core Web Vitals「良好」の割合",
    desc: "Google Search ConsoleのCore Web Vitalsレポートで確認。LCP・CLS・INP全てが「良好」のURLが全体の何割かを追います。改善施策後、4週間以上で変化が現れます。",
  },
  {
    n: "02",
    label: "PageSpeed Insightsのスコア（モバイル・PC）",
    desc: "施策前後のスコアを記録し比較します。モバイルスコアが50未満の場合は70以上を目標に設定し、70以上の場合は90+を目指します。",
  },
  {
    n: "03",
    label: "直帰率（Bounce Rate）の変化",
    desc: "Google Analyticsで速度改善対象ページの直帰率を計測します。LCPが1秒改善されると直帰率が5〜15%程度低下するケースが多く見られます。",
  },
  {
    n: "04",
    label: "TTFBの数値",
    desc: "PageSpeed InsightsのDiagnosticsセクションまたはChrome DevToolsのNetworkタブでServer Response Timeを確認します。800ms以下を目標値とします。",
  },
  {
    n: "05",
    label: "JS・CSS・画像のTransfer Size合計",
    desc: "Chrome DevToolsのNetworkタブでページ合計のTransfer Sizeを確認します。モバイルでは1MB以下、PCでは2MB以下を目標とします（画像が多いページは除く）。",
  },
  {
    n: "06",
    label: "検索順位（Speed改善後4〜8週間後）",
    desc: "Google Search Consoleの検索パフォーマンスレポートで対象ページの平均掲載順位を追います。Core Web Vitals改善が順位に反映されるまで数週間かかるため、継続的な確認が必要です。",
  },
  {
    n: "07",
    label: "コンバージョン率（CVR）の変化",
    desc: "Google Analyticsの目標設定またはGA4のコンバージョンイベントで、改善前後の問い合わせ・購入・申し込み率を比較します。表示速度の改善はCVRに直接影響します。",
  },
];

export default function PageSpeedPage() {
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
              <span style={{ color: "#0F172A" }}>ページ速度最適化</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Page Speed Optimization</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ページ速度最適化
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              ページ速度最適化とは、Webページの表示速度を改善することでユーザー体験を向上させ、Core Web VitalsのスコアとLighthouseパフォーマンス評価を高める施策です。2021年以降、Core Web VitalsはGoogleのランキング要因として正式に採用されています。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              表示速度の改善はSEOだけでなく、直帰率の低下・コンバージョン率の向上・ユーザー満足度の向上にも直結します。特にモバイルユーザーが多数を占める現在、モバイルでの速度改善は集客に直結する重要な投資です。
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="relative" style={{ height: "320px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_18_03.png"
            alt="ページ速度最適化・Core Web Vitals・Lighthouse改善のイメージ"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.50)" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6">
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,22px)", lineHeight: 1.6 }}>
                表示速度はSEOではなく、ユーザー体験への投資。<br />
                速いサイトは信頼され、遅いサイトは離脱される。
              </p>
            </div>
          </div>
        </section>

        {/* SEO Impact — dark section */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>SEO Impact</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              ページ速度が遅いとSEOに起きる4つの問題
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                {
                  t: "Core Web Vitals不良でランキング低下",
                  b: "LCP・CLS・INPがGoogleの「不良」基準を超えると、同等コンテンツでも速いページが優先されます。Core Web VitalsはGoogleの公式ランキングシグナルとして採用されています。",
                },
                {
                  t: "直帰率上昇でGoogleの評価が下がる",
                  b: "ページが3秒以内に表示されないと直帰率が大幅に上昇します。高い直帰率は「このページはユーザーの期待に応えなかった」とGoogleに伝わり、さらなる順位低下を招きます。",
                },
                {
                  t: "モバイルユーザーが離脱しCV機会を失う",
                  b: "スマートフォンユーザーはPCより速度に敏感です。LTEや3G環境での表示が遅いページはほぼすぐに離脱されます。モバイルの速度改善がSEOとCVの両方で最優先課題です。",
                },
                {
                  t: "クロール効率の低下でインデックスが遅れる",
                  b: "GoogleのクロールバジェットはURLごとに制限があります。ページの表示が遅いとクローラーの効率が下がり、重要なページのインデックスが遅れる原因になります。",
                },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Web Vitals */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Core Web Vitals</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              Core Web Vitalsの3指標と目標値
            </h2>
            <p className="text-[14px] leading-[1.8] max-w-2xl mb-10" style={{ color: "#374151" }}>
              GoogleはCore Web Vitalsを2021年よりPageExperienceシグナルとしてランキングに組み込んでいます。LCP・CLS・INPの3指標すべてで「良好」を達成することが速度最適化のゴールです。
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
              {[
                {
                  metric: "LCP",
                  name: "Largest Contentful Paint",
                  good: "2.5秒以内",
                  needs: "2.5〜4.0秒",
                  poor: "4.0秒以上",
                  desc: "ページの最大コンテンツ（ファーストビューの主な画像やテキスト）が描画されるまでの時間。ユーザーが「ページが読み込まれた」と感じるタイミングを表します。画像の最適化とpreloadが主要な改善手段です。",
                },
                {
                  metric: "CLS",
                  name: "Cumulative Layout Shift",
                  good: "0.1以下",
                  needs: "0.1〜0.25",
                  poor: "0.25以上",
                  desc: "ページ読み込み中に発生するレイアウトのずれ（シフト）の累積スコア。ユーザーが誤ってボタンをクリックしてしまうなどの体験不良の指標。画像やiframeへのサイズ指定が最優先の対策です。",
                },
                {
                  metric: "INP",
                  name: "Interaction to Next Paint",
                  good: "200ms以下",
                  needs: "200〜500ms",
                  poor: "500ms以上",
                  desc: "ユーザーの操作（クリック・タップ・キー入力）に対するページの視覚的な応答速度。2024年3月にFIDから置き換わった指標。重いJavaScriptの長いタスクが主な原因です。",
                },
              ].map((item) => (
                <div key={item.metric} className="p-6 rounded" style={{ background: "#FFFFFF", border: "1px solid #E8E4DC" }}>
                  <p className="font-black text-[28px] mb-1 font-mono" style={{ color: "#0d1b2a" }}>{item.metric}</p>
                  <p className="text-[11px] mb-4" style={{ color: "#9CA3AF" }}>{item.name}</p>
                  <div className="space-y-1 text-[12px] mb-4">
                    <div className="flex justify-between"><span style={{ color: "#4ade80" }}>Good</span><span style={{ color: "#374151" }}>{item.good}</span></div>
                    <div className="flex justify-between"><span style={{ color: "#facc15" }}>Needs Improvement</span><span style={{ color: "#374151" }}>{item.needs}</span></div>
                    <div className="flex justify-between"><span style={{ color: "#f87171" }}>Poor</span><span style={{ color: "#374151" }}>{item.poor}</span></div>
                  </div>
                  <p className="text-[12px] leading-[1.8]" style={{ color: "#374151" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* A: このページでわかること */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You&apos;ll Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl">
              {[
                "LCP・CLS・INPの意味と具体的な数値目標（Googleの公式基準値）",
                "PageSpeed InsightsとChrome DevToolsを使った現状診断の手順",
                "画像・JavaScript・CSS・フォント・CDNそれぞれの最適化施策",
                "Next.jsを使った実装レベルのパフォーマンス最適化テクニック",
                "業種別（飲食・医療・EC・建設など）の速度問題と優先対策",
                "改善施策の効果を測定するためのKPIと確認ツール",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-4" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>0{i + 1}</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* B: よくある課題と原因 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Issues</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ページ速度が遅い：よくある課題と原因
            </h2>
            <p className="text-[14px] leading-[1.8] max-w-2xl mb-10" style={{ color: "#374151" }}>
              速度改善の第一歩は原因の特定です。サイトに応じて複数の問題が重なっているケースがほとんどです。以下の項目で当てはまるものがあれば優先的に対処します。
            </p>
            <div className="max-w-3xl">
              {commonIssues.map((item) => (
                <div key={item.n} className="flex items-start gap-5 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.t}</p>
                    <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 最適化カテゴリ */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Optimization Checklist</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ページ速度最適化の主要施策
            </h2>
            <p className="text-[14px] leading-[1.8] max-w-2xl mb-10" style={{ color: "#374151" }}>
              速度最適化は「画像だけ直せばいい」という単純なものではありません。カテゴリごとに体系的に実施し、PageSpeed Insightsのスコアを段階的に引き上げます。
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
              {optimizations.map((cat) => (
                <div key={cat.category}>
                  <p className="font-bold text-[14px] mb-3 pb-2" style={{ color: "#0d1b2a", borderBottom: "1px solid #E8E4DC" }}>{cat.category}</p>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[13px]" style={{ color: "#374151" }}>
                        <span className="shrink-0 mt-1" style={{ color: "#9CA3AF" }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* C: 業種別の活用ポイント */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別のページ速度最適化ポイント
            </h2>
            <p className="text-[14px] leading-[1.8] max-w-2xl mb-10" style={{ color: "#374151" }}>
              速度問題の原因と優先すべき施策は業種によって異なります。自社のカテゴリに合った優先順位で改善を進めることが効率的です。
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
              {industryPoints.map((ind) => (
                <div key={ind.industry} className="p-6" style={{ background: "#FFFFFF", border: "1px solid #E8E4DC" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[11px] font-mono" style={{ color: "#9CA3AF" }}>{ind.icon}</span>
                    <p className="font-bold text-[15px]" style={{ color: "#0d1b2a" }}>{ind.industry}</p>
                  </div>
                  <ul className="space-y-2">
                    {ind.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px]" style={{ color: "#374151" }}>
                        <span className="shrink-0 mt-1" style={{ color: "#9CA3AF" }}>—</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* D: 具体的な改善手順 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Step-by-Step</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ページ速度改善の具体的な手順
            </h2>
            <p className="text-[14px] leading-[1.8] max-w-2xl mb-10" style={{ color: "#374151" }}>
              PageSpeed InsightsとChrome DevToolsを使って診断し、優先度の高い施策から順に実施します。計測→改善→再計測のサイクルを繰り返すことが重要です。
            </p>
            <div className="max-w-3xl">
              {improvementSteps.map((s) => (
                <div key={s.step} className="flex items-start gap-5 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{s.step}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{s.title}</p>
                    <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* E: 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs to Track</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標（KPI）
            </h2>
            <p className="text-[14px] leading-[1.8] max-w-2xl mb-10" style={{ color: "#374151" }}>
              速度改善の成果は複数の指標で確認します。Lighthouseスコアは目安ですが、実ユーザーのデータ（フィールドデータ）と事業指標（直帰率・CVR）も必ず追います。
            </p>
            <div className="max-w-3xl">
              {kpiItems.map((kpi) => (
                <div key={kpi.n} className="flex items-start gap-5 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{kpi.n}</span>
                  <div>
                    <p className="font-bold text-[14px] mb-1" style={{ color: "#0d1b2a" }}>{kpi.label}</p>
                    <p className="text-[13px] leading-[1.8]" style={{ color: "#374151" }}>{kpi.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Second image break */}
        <section className="relative" style={{ height: "260px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_10_29.png"
            alt="PageSpeed InsightsとLighthouseによるページ速度計測"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.55)" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6">
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(14px,1.8vw,20px)", lineHeight: 1.7 }}>
                計測なき改善はない。PageSpeed Insights・Chrome DevTools・<br />
                Search Consoleを組み合わせてデータドリブンで最適化する。
              </p>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="ページ速度最適化についてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="ページ速度改善・Core Web Vitalsのご相談"
          body="現在のスコアを診断し、効果的な改善施策をご提案します。画像・JS・CDN・Next.js最適化など、優先度の高い施策から取り組みます。"
        />
      </main>
      <Footer />
    </>
  );
}

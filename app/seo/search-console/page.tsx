import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Google Search Console活用｜SEOデータ分析・順位改善・インデックス管理｜株式会社サイプレス",
  description:
    "Google Search Consoleを使ったSEOデータの見方・活用方法を徹底解説。検索パフォーマンス・インデックスカバレッジ・Core Web Vitals・サイトマップ管理・クエリ分析・CTR改善まで、具体的なメニュー操作と改善アクションを網羅。",
  keywords: [
    "Google Search Console",
    "Search Console活用",
    "SEOデータ分析",
    "検索パフォーマンス",
    "インデックス確認",
    "クエリ分析",
    "CTR改善",
    "サイトマップ送信",
    "カバレッジエラー",
    "順位改善",
  ],
  openGraph: {
    title: "Google Search Console活用｜SEOデータ分析・順位改善・インデックス管理｜株式会社サイプレス",
    description:
      "Search Consoleで検索パフォーマンス・インデックス・Core Web Vitalsを確認しSEO改善サイクルを回す実践ガイド。具体的なメニュー操作と改善アクションを解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/search-console" },
};

const faqItems = [
  {
    q: "Google Search Consoleは無料で使えますか？",
    a: "はい、Google Search Consoleは完全無料です。Googleアカウントがあれば誰でも利用でき、サイトの所有者確認（HTMLファイル設置・DNSレコード追加・Google Analytics連携など複数の方法から選択可）を行うことでデータを確認できます。",
  },
  {
    q: "Search Consoleのデータはどのくらいの期間遡れますか？",
    a: "検索パフォーマンスデータは過去16ヶ月分まで遡れます。インデックスカバレッジはほぼリアルタイムで更新されます。Core Web Vitalsは過去28日間のデータが確認できます。URLインスペクションツールは最新のクロール情報を表示します。",
  },
  {
    q: "CTR（クリック率）が低い場合はどうすればいいですか？",
    a: "まず「検索パフォーマンス」レポートで表示回数が多いのにCTRが低いキーワードを特定します。次にそのページのtitleタグとmeta descriptionを検索意図に沿った魅力的な内容に書き直します。また、FAQやパンくずなどの構造化データを実装してリッチリザルトを獲得することもCTR向上に有効です。",
  },
  {
    q: "検索順位とSearch Consoleの「掲載順位」は一致しますか？",
    a: "Search Consoleの掲載順位はユーザー・地域・デバイス・検索履歴によって異なる検索結果の平均値です。実際に自分で検索した結果と異なることがありますが、トレンドや傾向を把握する指標として有効です。特定のキーワードでのページランキングを正確に把握するには、Google Search ConsoleとGoogle Analytics・Rank Trackerを組み合わせます。",
  },
  {
    q: "サイトマップはSearch Consoleで送信すべきですか？",
    a: "はい、XMLサイトマップをSearch Consoleに送信することでGooglebotにページの存在を効率よく伝えられます。特に新規ページ追加後・大規模サイト・クロールが届きにくいページがある場合は必須の作業です。Next.jsではapp/sitemap.tsでサイトマップを自動生成できます。Search Console左メニュー「サイトマップ」から送信します。",
  },
  {
    q: "インデックスカバレッジの「除外」は問題ですか？",
    a: "「除外」は必ずしも問題ではありません。noindexタグで意図的に除外したページ・重複コンテンツとして除外されたページ・クロールはされたがインデックスされなかったページなどが含まれます。問題なのは「エラー」と、意図せず除外されているページです。各URLの詳細を確認し、重要なページが意図せず除外されていないかを確認します。",
  },
  {
    q: "「検索パフォーマンス」レポートのどの数値を最優先で見ればいいですか？",
    a: "まず「表示回数が多くCTRが低いキーワード」を特定します（フィルタ：表示回数降順→CTR%で確認）。次に「掲載順位が11〜20位のキーワード」を探します（2ページ目）。これらは少しの改善で大きなクリック増につながる最も効率的な改善ポイントです。",
  },
  {
    q: "サイト全体の順位が突然下がった場合はどう確認しますか？",
    a: "Search Consoleの「検索パフォーマンス」で日付範囲を広げ、クリック数・表示回数の急落タイミングを特定します。次にGoogleアルゴリズム更新のリリース日と照合します（Google Search Central公式アナウンス確認）。「カバレッジ」レポートでインデックスエラーが急増していないかも確認します。特定のページの問題であれば「URLインスペクション」で詳細を確認します。",
  },
  {
    q: "モバイルユーザビリティのエラーとは何ですか？",
    a: "Search ConsoleのモバイルユーザビリティレポートではGooglebotがスマートフォンでクロールした際に検出した問題が報告されます。よくある問題として、①テキストが小さすぎる（16px未満を推奨）、②タップターゲットが小さすぎる（44×44px未満）、③コンテンツがビューポートより広い（横スクロールが発生）などがあります。これらを修正するとモバイルSEOが改善されます。",
  },
  {
    q: "構造化データ（リッチリザルト）のエラーはどこで確認しますか？",
    a: "Search Console左メニューの「拡張機能」セクションに、実装されている構造化データタイプ（FAQ・パンくず・商品・レシピ等）のレポートが表示されます。エラーがある場合は「無効なアイテム」として詳細が表示されます。Googleの「リッチリザルトテスト」（search.google.com/test/rich-results）でURLを入力してテストもできます。",
  },
  {
    q: "被リンク（外部リンク）情報はSearch Consoleで確認できますか？",
    a: "はい、Search Console左メニュー「リンク」からサイトへの外部リンク情報を確認できます。上位リンク元サイト・最もリンクされているページ・アンカーテキストを確認できます。ただし全てのリンクが表示されるわけではなく、Googleが把握しているリンクの一部です。詳細な被リンク分析にはAhrefs・SEMrushなどの専門ツールとの併用を推奨します。",
  },
  {
    q: "URLインスペクションツールの使い方を教えてください",
    a: "Search Console上部の検索バーにURLを入力すると「URLインスペクション」が実行されます。表示される情報は、①Googleへのインデックス登録状況、②最後のクロール日時、③クロール可能かどうか、④ページのモバイル対応状況、⑤構造化データの検出状況です。「インデックス登録をリクエスト」ボタンで新規・更新ページのインデックスを促すこともできます（即時ではなく優先度が上がる程度）。",
  },
  {
    q: "Search Consoleのデータ確認は月に何回すべきですか？",
    a: "最低月1回は確認することを推奨します。重要なキャンペーン実施中・新規ページ公開後・アルゴリズム更新後などは週1回の確認が有効です。特にインデックスカバレッジのエラーは放置期間が長いほど機会損失が拡大するため、定期的なモニタリングが重要です。Search ConsoleのメールアラートをONにしておくことで、問題発生時に自動通知を受け取ることができます。",
  },
  {
    q: "Google Search ConsoleとGoogle Analyticsの違いは何ですか？",
    a: "Search Consoleは「Googleがあなたのサイトをどう見ているか」を表すツールです（インデックス状況・検索クエリ・クロールエラー等）。Google Analyticsは「ユーザーがサイト内でどう行動したか」を計測するツールです（ページビュー・滞在時間・コンバージョン等）。両者を連携すると、Search ConsoleのキーワードデータとAnalyticsの行動データを合わせてより深い分析が可能になります。",
  },
  {
    q: "新しく作ったページがインデックスされないのはなぜですか？",
    a: "主な原因として、①robots.txtでクロールがブロックされている、②noindexメタタグが設定されている、③内部リンクが少なくGooglebotが辿り着けない、④コンテンツが薄く評価されていない（Thin Content）、⑤重複コンテンツとして判定されている、があります。URLインスペクションで状況を確認し、サイトマップに追加してインデックス登録をリクエストします。",
  },
  {
    q: "Search ConsoleのCore Web Vitalsレポートはどう見ればいいですか？",
    a: "左メニュー「Core Web Vitals」からモバイルとPCそれぞれのレポートを確認します。「不良」「改善が必要」「良好」に分類されたURLの数と割合を確認し、「不良」URLを優先して改善します。グラフで時系列変化も確認でき、改善施策の効果検証にも使えます。実ユーザーのデータ（フィールドデータ）に基づくため、PageSpeed Insightsのラボデータと異なる場合があります。",
  },
  {
    q: "Search Consoleの所有権確認方法にはどんな種類がありますか？",
    a: "①HTMLファイルをサイトにアップロードする方法、②HTMLのmetaタグをheadセクションに追加する方法（Google Tag Manager経由でも可）、③Google Analyticsのコードが設置済みであれば連携確認できる方法、④Google Tag Managerコンテナでの確認、⑤DNSレコード（TXTレコード）の追加（ドメインプロバイダー側での作業が必要）の5種類があります。Vercel + Next.jsの場合はmetaタグ方式が最もシンプルです。",
  },
  {
    q: "「ディスカバー」レポートとは何ですか？",
    a: "Google Discoverは、Googleアプリのホームフィードにユーザーの興味関心に基づいてコンテンツを自動推薦する機能です。Search ConsoleのDiscoverレポートでは、Discoverに表示された際のクリック数・表示回数を確認できます。Discoverに表示されやすくなるには、高品質なビジュアル（1,200px以上の画像）・E-E-A-Tの高いコンテンツ・スマートニュース対応が有効とされています。",
  },
  {
    q: "手動による対策（Manual Action）とは何ですか？",
    a: "Googleのスパムチームがサイトを手動でレビューした結果、Googleウェブマスター品質ガイドラインに違反していると判断した場合に課される対策です。Search Consoleの「セキュリティと手動による対策」→「手動による対策」で確認できます。手動対策が適用されるとランキングが大幅に低下します。問題を修正後、再審査請求を送ることで解除を求めることができます。",
  },
  {
    q: "Search Consoleのデータ活用が難しくて何から始めればいいかわかりません",
    a: "まず月1回、「検索パフォーマンス」で①クリック数の前月比、②表示回数が多くCTRが5%未満のキーワード、③順位11〜20位のキーワードの3点を確認するところから始めてください。次に「カバレッジ」でエラーがないかを確認します。この2つを毎月確認してアクションを取るだけで、データを活用しているサイトの大多数より優れたSEO管理ができます。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO対策の基礎と全体像" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "技術的SEOの全体対策" },
  { href: "/seo/seo-audit", label: "SEO監査・診断", desc: "現状の問題点を洗い出す" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "検索クエリ分析との連携" },
  { href: "/seo/page-speed", label: "ページ速度最適化", desc: "Core Web Vitalsの改善" },
  { href: "/seo/mobile-seo", label: "モバイルSEO", desc: "モバイルユーザビリティ対策" },
  { href: "/seo/internal-linking", label: "内部リンク最適化", desc: "クロール効率の改善" },
  { href: "/seo/structured-data", label: "構造化データ", desc: "リッチリザルトの実装" },
  { href: "/seo/local-seo", label: "ローカルSEO・MEO", desc: "地域ビジネスのSEO対策" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "上位表示コンテンツの作り方" },
  { href: "/knowledge/core-web-vitals", label: "Core Web Vitals解説", desc: "LCP・CLS・INPの詳細" },
  { href: "/glossary/core-web-vitals", label: "Core Web Vitals用語集", desc: "指標の定義を確認する" },
  { href: "/glossary/impressions-ctr", label: "表示回数・CTRとは", desc: "Search Consoleの基本指標" },
  { href: "/glossary/index-coverage", label: "インデックスカバレッジとは", desc: "インデックス管理の基礎" },
  { href: "/glossary/sitemap", label: "サイトマップとは", desc: "XMLサイトマップの作成方法" },
  { href: "/guide/google-analytics-basics", label: "Google Analytics基礎ガイド", desc: "Analyticsとの連携活用" },
  { href: "/guide/search-console-setup", label: "Search Console設定ガイド", desc: "初期設定の手順" },
  { href: "/guide/seo-pdca", label: "SEO改善PDCAガイド", desc: "データドリブンなSEO運用" },
  { href: "/checklist/technical-seo", label: "テクニカルSEOチェックリスト", desc: "Search Console確認項目" },
  { href: "/column/seo", label: "SEOコラム", desc: "Search Console活用の最新情報" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "データ分析込みのSEO支援" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "Search Console運用の料金" },
  { href: "/web-design/nextjs", label: "Next.jsでのサイト制作", desc: "Search Console対応のサイト構築" },
];

const keyMetrics = [
  {
    n: "01",
    t: "検索パフォーマンス（表示回数・クリック数・CTR・掲載順位）",
    b: "どのキーワードで何回表示され、何回クリックされたかを確認できます。「表示回数が多いがCTRが低い」キーワードを見つけ、タイトル・メタ説明文を改善することが最初のアクションです。日付範囲・デバイス・検索タイプ（Web/画像/動画）でフィルタリングできます。",
  },
  {
    n: "02",
    t: "インデックスカバレッジ（インデックス済み/エラー/除外）",
    b: "サイトのどのページがGoogleにインデックスされているか、エラーがあるかを確認します。「エラー」タブでは404・Server Error・リダイレクトエラーが表示され、優先的に修正が必要です。「除外」には意図的なnoindexページと、意図せず除外されたページが混在するため内容の確認が重要です。",
  },
  {
    n: "03",
    t: "Core Web Vitals（LCP・CLS・INP）",
    b: "ページの読み込み速度・視覚的安定性・操作応答性のスコアを実ユーザーのデータで確認できます。「不良」と表示されたページURLを確認し、PageSpeed Insightsで詳細を診断して改善します。モバイルとPCのレポートは別々に表示されます。",
  },
  {
    n: "04",
    t: "モバイルユーザビリティ",
    b: "スマートフォンでの表示に問題があるページを特定します。テキストサイズが小さい・タップターゲットが近すぎる・コンテンツがビューポートより広いなどの問題が報告されます。モバイルファーストインデックスでは特に重要なレポートです。",
  },
  {
    n: "05",
    t: "拡張機能（構造化データ）レポート",
    b: "FAQやパンくず・商品・レシピなど実装した構造化データのステータスを確認できます。「有効なアイテム」と「無効なアイテム（エラー）」に分類され、エラーがあるとリッチリザルトが表示されなくなります。Googleのリッチリザルトテストと合わせて活用します。",
  },
  {
    n: "06",
    t: "リンク（外部・内部リンク）",
    b: "どのサイトから、どのページにリンクされているかを確認できます。内部リンクの状況も把握でき、孤立したページ（内部リンクが少ないページ）の発見に役立ちます。被リンクの多いページは重要なページとしてGoogleに認識されています。",
  },
  {
    n: "07",
    t: "サイトマップ送信・確認",
    b: "XMLサイトマップを送信し、Googleが認識・インデックスしているページ数を確認します。送信したURL数とインデックス済みURL数の差を確認し、インデックスされていないページの原因を調査します。新規ページ公開後は必ずサイトマップを更新して再送信します。",
  },
  {
    n: "08",
    t: "URLインスペクション",
    b: "特定のURLのインデックス状況・クロール日時・モバイル対応・構造化データを詳細確認できます。新規公開ページや重要な更新ページに「インデックス登録をリクエスト」ボタンでGooglebotに通知することができます。",
  },
];

const commonIssues = [
  {
    n: "01",
    t: "検索クエリ（キーワード）を確認していない",
    b: "自社サイトがどんなキーワードで検索表示されているかを把握していないケースが多くあります。想定外のキーワードで上位表示されていたり、狙ったキーワードで全く表示されていないことが「検索パフォーマンス」を見るまでわかりません。",
  },
  {
    n: "02",
    t: "インデックスされていないページがある",
    b: "公開したページがGoogleに認識されていないケースです。robots.txtの設定ミス・noindexタグの誤設定・内部リンクの不足・コンテンツが薄いなど複数の原因が考えられます。Search Consoleのカバレッジレポートで「エラー」と「除外」のURLを定期的に確認します。",
  },
  {
    n: "03",
    t: "クロールエラーを長期間放置している",
    b: "404エラーやサーバーエラーが大量に発生しているのに放置しているケースです。重要なページが消えている・URLが変わっている可能性があります。特に被リンクを受けているページが404になるとリンクジュースが失われます。",
  },
  {
    n: "04",
    t: "CTRが低いページをそのままにしている",
    b: "表示回数が多いのにクリックされていないページはタイトルとmeta descriptionの改善で流入を大幅に増やせます。このデータはSearch Consoleでしか確認できません。CTR3%未満のページは改善の余地が大きいです。",
  },
  {
    n: "05",
    t: "サイトマップを登録していない",
    b: "XMLサイトマップを送信していないとGooglebotがページを発見するまでに時間がかかります。特に新規ページ・小規模サイト・内部リンクが少ないページはサイトマップ登録が重要です。Next.jsでは自動生成できます。",
  },
  {
    n: "06",
    t: "順位が11〜20位のキーワードを放置している",
    b: "2ページ目（11〜20位）のキーワードは少しの改善でクリック数が数倍になる可能性があります。これらのキーワードのページを改善することは、新規ページを作るよりも短期間で成果が出やすい施策です。",
  },
  {
    n: "07",
    t: "Core Web Vitalsの「不良」ページを放置している",
    b: "Search ConsoleのCore Web Vitalsレポートで「不良」に分類されたページが多い場合、モバイルでの速度問題が検索順位に影響している可能性があります。具体的なURLを確認してPageSpeed Insightsで詳細診断します。",
  },
  {
    n: "08",
    t: "構造化データのエラーを修正していない",
    b: "FAQやパンくずなどの構造化データにエラーがあるとリッチリザルトが表示されなくなります。リッチリザルトはCTRを大幅に向上させる可能性があるため、拡張機能レポートのエラーは優先的に修正します。",
  },
  {
    n: "09",
    t: "モバイルユーザビリティのエラーを無視している",
    b: "Googleのモバイルファーストインデックスでは、モバイルでの表示品質がランキングに反映されます。タップターゲットが小さい・テキストが読めないなどのエラーはユーザー体験だけでなくSEOにも影響します。",
  },
  {
    n: "10",
    t: "データを見るだけでアクションを取っていない",
    b: "最も多いパターンは「Search Consoleにログインしてデータは見るが、具体的な改善アクションにつながっていない」ケースです。データ確認時に必ず「改善候補の洗い出し→優先度付け→実施」というフローを設けることが重要です。",
  },
];

const industryPoints = [
  {
    industry: "飲食店・カフェ",
    icon: "01",
    points: [
      "「〇〇駅 ランチ」などの地域名＋業態クエリの表示回数を確認",
      "「予約」「テイクアウト」など行動意図のあるクエリのCTRを改善",
      "Googleビジネスプロフィールとの統合でローカル検索を強化",
      "メニューページのインデックス状況と食べ物写真のモバイル表示を確認",
      "口コミ誘導ページがインデックスされているかチェック",
    ],
  },
  {
    industry: "クリニック・医療機関",
    icon: "02",
    points: [
      "「〇〇科 〇〇市」など地域＋診療科クエリの掲載順位を追跡",
      "診療内容・疾患名クエリでのCTRを確認しタイトルを改善",
      "予約ページがインデックスされているか・モバイル対応しているか確認",
      "FAQの構造化データが正しく機能しているか拡張機能レポートで確認",
      "コアアルゴリズム更新後の順位変化を素早く検知",
    ],
  },
  {
    industry: "EC・オンラインショップ",
    icon: "03",
    points: [
      "商品名クエリのCTRと掲載順位を商品ページ別に確認",
      "「商品名 価格」「商品名 口コミ」などのロングテールクエリを発見",
      "大量のページがインデックスされているかカバレッジで定期確認",
      "商品の構造化データ（価格・在庫・レビュー）のエラーを素早く修正",
      "セール期間中のクリック数増減をリアルタイムで把握",
    ],
  },
  {
    industry: "建設・リフォーム業",
    icon: "04",
    points: [
      "「〇〇リフォーム 費用」「〇〇 工務店 〇〇市」などのクエリを確認",
      "施工事例ページが上位表示されているクエリを特定して強化",
      "問い合わせページへの内部リンクとインデックス状況を確認",
      "口コミ・評判クエリでの表示状況を確認",
      "対応エリアページが地域クエリで表示されているかをチェック",
    ],
  },
  {
    industry: "美容サロン・エステ",
    icon: "05",
    points: [
      "「〇〇駅 美容院」「〇〇市 ネイルサロン」クエリの表示位置を確認",
      "メニュー・価格ページがインデックスされているか確認",
      "予約導線ページのモバイルユーザビリティを確認",
      "Instagramリンクなど外部被リンクの状況を把握",
      "スタッフ紹介ページのインデックス状況と活用度を確認",
    ],
  },
  {
    industry: "士業・コンサルティング",
    icon: "06",
    points: [
      "「〇〇 弁護士 相談」「〇〇問題 解決 〇〇市」クエリを確認",
      "ブログ・コラムページが有効なクエリで表示されているか把握",
      "専門用語クエリへの表示回数とCTRを確認",
      "事務所情報ページの構造化データ（LocalBusiness）のエラー確認",
      "資料ダウンロードページがインデックスされているかチェック",
    ],
  },
  {
    industry: "不動産",
    icon: "07",
    points: [
      "「〇〇市 マンション 賃貸」などのエリア×条件クエリを網羅確認",
      "大量の物件ページのインデックス状況をカバレッジで定期確認",
      "物件詳細ページのモバイルユーザビリティとCore Web Vitalsを確認",
      "「〇〇駅 徒歩〇分」などのロングテールクエリを発見して活用",
      "問い合わせページのCTRを改善しコンバージョン率向上を目指す",
    ],
  },
  {
    industry: "教育・スクール",
    icon: "08",
    points: [
      "「〇〇スクール 〇〇市」「〇〇 習い事 子供」クエリの掲載順位を確認",
      "無料体験申込ページがインデックスされているか・モバイル対応を確認",
      "コース・カリキュラムページのクエリとCTRを把握",
      "イベント・発表会ページの構造化データ（EventSchema）を確認",
      "競合スクールとのキーワード重複状況を把握して差別化",
    ],
  },
];

const setupSteps = [
  {
    step: "01",
    title: "Search Consoleのアカウントを設定する",
    detail:
      "search.google.com/search-consoleにアクセスし「今すぐ開始」をクリックします。サイトのURLを「ドメイン」または「URLプレフィックス」で登録します。Next.jsサイトの場合はHTMLメタタグ方式（Vercelのmetadataにgoogle-site-verificationを追加）が最もシンプルです。所有権確認が完了すると1〜3日でデータの収集が始まります。",
  },
  {
    step: "02",
    title: "XMLサイトマップを送信する",
    detail:
      "左メニュー「サイトマップ」→サイトマップのURLを入力して「送信」します。Next.jsではapp/sitemap.tsを作成するとビルド時に自動生成されます（/sitemap.xmlでアクセス可能）。送信後「ステータス: 成功」になるか確認します。定期的に「検出されたURL数」と「インデックス済みURL数」を比較します。",
  },
  {
    step: "03",
    title: "「検索パフォーマンス」で重要クエリを確認する",
    detail:
      "左メニュー「検索パフォーマンス」→「検索結果」をクリックします。「クリック数・表示回数・CTR・掲載順位」の4つをすべてONにします。最初の確認ポイントは、①表示回数が多いキーワード（上から順に確認）、②CTRが低い（5%未満）のに表示回数が多いキーワード、③掲載順位が11〜20位のキーワードです。",
  },
  {
    step: "04",
    title: "インデックスカバレッジでエラーを確認する",
    detail:
      "左メニュー「インデックス作成」→「ページ」をクリックします。「エラー」タブでインデックスできなかったURLを確認します。クリックすると詳細が表示されます。「404（見つかりません）」のURLが重要なページであれば301リダイレクトを設定します。「除外」タブで意図せず除外されているページがないかも確認します。",
  },
  {
    step: "05",
    title: "CTRが低いページのタイトル・説明文を改善する",
    detail:
      "検索パフォーマンスレポートで表示回数順に並べ、CTRが5%未満のURLを特定します。そのURLのページに移動し、titleタグとmeta descriptionを検索意図に沿った内容に書き直します。具体的には、①数字・期間・価格などの具体性を入れる、②検索ユーザーの疑問に直接答える文言にする、③重複したタイトルをページごとに固有化する、の3点を意識します。",
  },
  {
    step: "06",
    title: "順位11〜20位のキーワードに絞って施策を打つ",
    detail:
      "検索パフォーマンスで「平均掲載順位」でフィルタし、11〜20位のキーワードを確認します。そのキーワードが紐付いているページを特定し、①タイトルにキーワードをより自然に含める、②コンテンツを充実させ関連情報を追加する、③内部リンクを増やしページの評価を高める、といった施策を実施します。10位以内に入ると急激にクリック数が増加します。",
  },
  {
    step: "07",
    title: "Core Web Vitalsレポートで「不良」ページを特定する",
    detail:
      "左メニュー「Core Web Vitals」→「モバイル」→「不良のURL」をクリックします。問題のあるページURLを確認し、PageSpeed InsightsにそのURLを入力して詳細な改善ポイントを確認します。「不良」から「良好」に改善されると、数週間後にSearch Consoleのレポートが更新されます。",
  },
  {
    step: "08",
    title: "構造化データ（拡張機能）のエラーを修正する",
    detail:
      "左メニュー「拡張機能」に実装した構造化データタイプが表示されます。「無効なアイテム」がある場合は詳細を確認します。よくあるエラーは必須プロパティの欠如（FAQPageのanswerText未設定等）です。「リッチリザルトテスト」（search.google.com/test/rich-results）でURLをテストし、修正後に「修正を確認」ボタンで再チェックします。",
  },
  {
    step: "09",
    title: "月次PDCAサイクルを確立する",
    detail:
      "毎月第一営業日にSearch Consoleを確認するルーティンを作ります。確認項目：①クリック数の前月比、②新規インデックスエラー、③CTRが悪化したキーワード、④Core Web Vitalsの変化。確認結果を簡単なシートに記録し、アクションと担当者を決めます。このサイクルが継続的なSEO改善の基盤になります。",
  },
  {
    step: "10",
    title: "Google Analyticsと連携して深い分析をする",
    detail:
      "Search Consoleの「Search Console Insights」またはGoogle Analytics 4の「Search Console連携」を設定すると、どのキーワードから来たユーザーがどのページに長く滞在しているか・どのキーワードがコンバージョンにつながっているかを分析できます。連携設定はGA4の「管理」→「プロパティ」→「Search Console リンク」から行います。",
  },
];

const kpiItems = [
  {
    n: "01",
    label: "オーガニッククリック数（月次）",
    desc: "「検索パフォーマンス」で前月・前年同月比のクリック数を比較します。SEO施策の成果を最も直接的に示す指標です。クリック数が増えていなければ施策の見直しが必要です。",
  },
  {
    n: "02",
    label: "平均CTR（クリック率）",
    desc: "サイト全体の平均CTRを月次で確認します。業種によりますが平均3〜5%を下回るページが多い場合はタイトル・説明文の見直しが必要です。改善後2〜4週間でCTRへの反映が確認できます。",
  },
  {
    n: "03",
    label: "インデックス済みURL数",
    desc: "「インデックス作成」→「ページ」でインデックス済みURL数の推移を確認します。コンテンツを追加しているのにインデックス数が増えない場合はクロール設定・コンテンツ品質の見直しが必要です。",
  },
  {
    n: "04",
    label: "カバレッジエラー数",
    desc: "インデックスエラーが0件を目標とします。特に「サーバーエラー（5xx）」「リダイレクトエラー」「noindexで除外」が意図しないものでないか定期確認が重要です。",
  },
  {
    n: "05",
    label: "Core Web Vitals「良好」URLの割合",
    desc: "「Core Web Vitals」レポートでモバイルの「良好」URL比率を確認します。サイト全体の70%以上を良好にすることを目標とします。改善施策後4週間以上で変化が現れます。",
  },
  {
    n: "06",
    label: "上位10位以内のキーワード数",
    desc: "検索パフォーマンスで「掲載順位10以下でフィルタ」→除外すると10位以内のキーワード数が把握できます。この数が増加することがSEO成果の積み上がりを示します。",
  },
  {
    n: "07",
    label: "構造化データの有効アイテム数",
    desc: "「拡張機能」の各タイプで有効アイテム数とエラー数を確認します。有効アイテムが増えるとリッチリザルト表示が増え、CTR向上につながります。エラーが0件を維持することも重要です。",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", gap: "6px", alignItems: "center" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/seo" style={{ color: "#6B7280" }} className="hover:underline">SEO対策</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>Google Search Console活用</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>SEO Tool</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "24px" }}>
              Google Search Console活用
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", marginBottom: "16px", maxWidth: "640px" }}>
              Google Search Consoleは、Googleが無料で提供するSEO分析の必須ツールです。「検索パフォーマンス」「インデックスカバレッジ」「Core Web Vitals」「拡張機能」など、SEO改善に不可欠なデータを網羅的に確認できます。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              月に一度Search Consoleのデータを確認し、PDCAを回すことが継続的なSEO改善の基本です。データを見ない・アクションを取らないことが最大のSEO機会損失です。
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section style={{ position: "relative", height: "320px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_19_44.jpg"
            alt="Google Search Console活用・SEOデータ分析"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.50)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,22px)", lineHeight: 1.6 }}>
                データを見ないSEOは、目をつぶって走るのと同じ。<br />
                Search ConsoleでPDCAを回し続けることが成果につながる。
              </p>
            </div>
          </div>
        </section>

        {/* Search Consoleなしのリスク — dark section */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Risks Without Data</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              Search Consoleを活用しないと気づけない4つのSEO盲点
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                {
                  t: "インデックスされていないページ",
                  b: "一生懸命作ったページがGoogleにインデックスされていないと、検索結果に一切表示されません。カバレッジレポートを見るまでこの事実はわかりません。新規ページ公開後は必ず確認が必要です。",
                },
                {
                  t: "CTRが低いキーワード",
                  b: "表示回数は多いのにクリックされていないキーワードはタイトル・説明文の改善だけで流入を大幅に増やせます。このデータはSearch Consoleでのみ確認できます。",
                },
                {
                  t: "Core Web Vitalsの問題",
                  b: "LCP・CLS・INPのスコアがモバイルで「不良」でも、Search Consoleを見ないと気づかないまま機会損失が続きます。実ユーザーのデータで問題ページを特定して改善することが重要です。",
                },
                {
                  t: "順位低下の早期発見不能",
                  b: "Googleのアルゴリズム更新後に特定ページの順位が下がっても、Search Consoleなしでは気づくのが遅くなります。週次・月次でのモニタリングが順位低下を最小化します。",
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

        {/* 主要データ */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Key Metrics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              Search Consoleで確認できる主要データ
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#374151", marginBottom: "40px", maxWidth: "640px" }}>
              各機能はSearch Consoleの左サイドメニューからアクセスします。それぞれのレポートが示すデータの意味と、確認後に取るべきアクションを理解することが重要です。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {keyMetrics.map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* A: このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You&apos;ll Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl">
              {[
                "Google Search Consoleの具体的なメニュー（検索パフォーマンス・カバレッジ・拡張機能）とデータの読み方",
                "CTRが低いキーワード・2ページ目のキーワードを見つけて改善する具体的な手順",
                "インデックスカバレッジエラーの種類と修正方法",
                "サイトマップの送信方法とインデックス状況の確認方法",
                "業種別（飲食・医療・EC・不動産など）に注目すべきSearch Consoleのデータ",
                "Search Consoleを使った月次SEO改善PDCAサイクルの回し方",
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
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Issues</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因：データを活かせないパターン
            </h2>
            <p className="text-[14px] leading-[1.8] max-w-2xl mb-10" style={{ color: "#374151" }}>
              Search Consoleを導入していても、データを正しく活用できていないサイトは多くあります。以下の課題に心当たりがある場合は優先的に対処します。
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

        {/* PDCA & 月次チェック */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>PDCA Cycle</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
                  Search ConsoleによるSEO改善サイクル
                </h2>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "16px" }}>
                  Search ConsoleはSEO改善のPDCAサイクルを回すための中心ツールです。月に1度はデータを確認し、順位が下がったページ・CTRが低いキーワード・インデックスエラーを特定してアクションを取ります。
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                  特に重要なのは「表示回数は多いがクリック率が低い」キーワードの発見です。これらはタイトル・メタ説明文の改善だけで流入を大きく増やせる可能性があります。
                </p>
              </div>
              <div style={{ background: "#FFFFFF", padding: "32px", border: "1px solid #E8E4DC" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "20px" }}>月次チェック項目</p>
                {[
                  "検索パフォーマンスの前月比・前年比確認",
                  "CTRが低い（5%未満）キーワードのタイトル改善",
                  "順位11〜20位のキーワードを洗い出して強化",
                  "インデックスカバレッジのエラー確認と修正",
                  "Core Web Vitalsスコアの変化を確認",
                  "新規ページのインデックス確認と登録リクエスト",
                  "構造化データ（拡張機能）のエラー確認",
                  "被リンク・内部リンク状況の確認",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", padding: "10px 0", borderTop: i > 0 ? "1px solid #E8E4DC" : "none", alignItems: "flex-start" }}>
                    <span style={{ color: "#9ca3af", fontSize: "12px", minWidth: "20px", marginTop: "2px" }}>✓</span>
                    <p style={{ fontSize: "14px", color: "#374151" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* C: 業種別の活用ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別のSearch Console活用ポイント
            </h2>
            <p className="text-[14px] leading-[1.8] max-w-2xl mb-10" style={{ color: "#374151" }}>
              注目すべきデータと優先すべきアクションは業種によって異なります。自社の業種に合わせたSearch Console活用で、より素早く成果につなげることができます。
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
              {industryPoints.map((ind) => (
                <div key={ind.industry} className="p-6" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}>
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

        {/* Second image break */}
        <section style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_20_52.jpg"
            alt="Search Consoleデータ分析によるSEO改善プロセス"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.55)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(14px,1.8vw,20px)", lineHeight: 1.7 }}>
                Search Consoleを開くたびに「何を改善するか」が明確になる。<br />
                データは見るためではなく、アクションを起こすためにある。
              </p>
            </div>
          </div>
        </section>

        {/* D: 具体的な改善手順 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Step-by-Step</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              Search Console活用の具体的な手順
            </h2>
            <p className="text-[14px] leading-[1.8] max-w-2xl mb-10" style={{ color: "#374151" }}>
              設定から月次運用まで、Search Consoleを使ったSEO改善の具体的なステップを解説します。初めて使う方も、すでに使っているが成果が出ていない方も参考にしてください。
            </p>
            <div className="max-w-3xl">
              {setupSteps.map((s) => (
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
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs to Track</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標（KPI）
            </h2>
            <p className="text-[14px] leading-[1.8] max-w-2xl mb-10" style={{ color: "#374151" }}>
              Search Consoleで追うべきKPIを定義することで、SEO施策が成果につながっているかを客観的に判断できます。施策前後の数値を記録して比較することが重要です。
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

        <FaqSection items={faqItems} heading="Google Search Console活用についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="Search Console活用のサポート"
          body="Google Search Consoleの設定から定期的なデータ分析・改善提案まで対応します。データの読み方がわからない・改善アクションが取れていないといったお悩みをお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}

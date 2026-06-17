import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "構造化データ実装（AIO向け）｜Schema.org完全ガイド｜株式会社サイプレス",
  description:
    "AI検索・リッチリザルト対応のSchema.org完全実装ガイド。Organization・FAQPage・LocalBusiness・Article・BreadcrumbListのJSON-LD実装でAIO引用率とSEO効果を同時に高める方法を解説。",
  keywords: [
    "構造化データ",
    "Schema.org",
    "JSON-LD",
    "AIO対策",
    "リッチリザルト",
    "FAQPage",
    "AI検索",
    "Next.js 構造化データ",
  ],
  openGraph: {
    title: "構造化データ実装（AIO向け）｜Schema.org完全ガイド｜株式会社サイプレス",
    description:
      "AI検索・Google検索で引用されやすくなる構造化データの実装。Schema.org対応でリッチリザルトとAIO引用率を同時に改善。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/aio/structured-data" },
};

const SCHEMAS = [
  {
    name: "Organization",
    use: "会社情報の構造化",
    body: "会社名・住所・電話番号・URLなどの基本情報をGoogleとAIに正確に伝えます。ナレッジパネルの表示やAIによる企業情報の認識精度向上に直結します。",
  },
  {
    name: "LocalBusiness",
    use: "店舗・拠点情報",
    body: "地域ビジネス向けの構造化データ。営業時間・対応エリア・サービス内容をGoogleマップ・ローカル検索・AI検索に正確に伝えます。MEO対策との相乗効果があります。",
  },
  {
    name: "FAQPage",
    use: "よくある質問",
    body: "FAQ形式のコンテンツを構造化することで、Google検索でのFAQリッチリザルト表示とAIへの引用率が同時に高まります。AIO対策で最も効果が出やすいSchemaの一つです。",
  },
  {
    name: "Article",
    use: "ブログ・コラム記事",
    body: "記事の著者・公開日・更新日・画像などを構造化します。著者E-E-A-Tの強化に寄与し、AIが記事を信頼できる情報源として認識しやすくなります。",
  },
  {
    name: "BreadcrumbList",
    use: "パンくずリスト",
    body: "サイト構造をGoogleとAIに伝えるための基本Schema。検索結果に階層構造が表示されることでCTRが向上します。全ページへの実装を推奨します。",
  },
  {
    name: "WebSite",
    use: "サイト情報・サイト内検索",
    body: "サイト全体のURLとサイト内検索機能を構造化します。Googleのサイトリンク検索ボックス表示に必要で、ブランド検索時のリッチ表示を改善します。",
  },
  {
    name: "Service",
    use: "提供サービス情報",
    body: "提供するサービスの内容・対象・提供地域を構造化します。AIが「○○ならどの会社がおすすめ？」という質問に答える際に参照しやすくなります。",
  },
];

const ISSUES = [
  {
    num: "01",
    title: "構造化データが未実装",
    body: "サイト全体にJSON-LDが一切ない状態です。GoogleとAIはテキスト解析のみで情報を解釈するため、認識精度が低く、リッチリザルトも表示されません。Organization・BreadcrumbList・WebSiteの3種類を優先実装することを推奨します。",
  },
  {
    num: "02",
    title: "FAQPageスキーマのみで他のスキーマを知らない",
    body: "FAQPageだけを実装している場合、Organization・BreadcrumbList・Article・LocalBusinessなど多数の有効なスキーマが未実装です。ページタイプ別に適切なスキーマを組み合わせることで引用率が飛躍的に高まります。",
  },
  {
    num: "03",
    title: "JSON-LDとMicrodataの使い分けが分からない",
    body: "GoogleはJSON-LDを推奨しています。MicrodataはHTMLと構造化データが混在するため保守性が低く、特にNext.jsなどのモダンフレームワークではJSON-LDが圧倒的に管理しやすい実装方式です。",
  },
  {
    num: "04",
    title: "バリデーションエラーを放置している",
    body: "必須プロパティの欠落・URLの形式ミス・型の誤りなどがあるとGoogleはスキーマを無視します。Rich Results Testでエラーが発生しているにも関わらず放置しているケースが多く、定期的なバリデーションが不可欠です。",
  },
  {
    num: "05",
    title: "ページタイプ別の適切なスキーマ選定ができていない",
    body: "トップページ・サービスページ・ブログ記事・FAQページでそれぞれ使うべきスキーマは異なります。一律にFAQPageのみを実装するなど、ページの性質に合っていない選定は効果を大きく損ないます。",
  },
  {
    num: "06",
    title: "動的コンテンツへの対応が難しい",
    body: "商品ページや記事ページのように数が多く内容が変わるページへの構造化データ自動生成に悩むケースがあります。Next.jsではgenerateSitemapと同様の発想でスキーマをページ単位でサーバーサイド生成できます。",
  },
  {
    num: "07",
    title: "Next.jsでの実装方法が分からない",
    body: "Next.jsのApp RouterではScriptコンポーネントのstrategy='beforeInteractive'またはlayout.tsxのheadセクションに直接JSON-LDを埋め込む方法が主流です。ページ固有のスキーマはpage.tsx内でScriptタグを使って実装します。",
  },
  {
    num: "08",
    title: "スキーマ間の関連付け（sameAs/isPartOf等）がない",
    body: "個々のスキーマは実装しているが、OrganizationとWebSiteのpublisherを紐付ける・ArticleにauthorのPerson Schemaをネストするなど、スキーマ間の関連が欠落しているケースが多く見られます。",
  },
  {
    num: "09",
    title: "定期的なスキーマ更新ができていない",
    body: "サービス内容の変更・FAQの追加・著者の変更などがあってもスキーマが更新されていないと、Googleに古い情報を伝え続けることになります。コンテンツ更新のワークフローにスキーマレビューを組み込む必要があります。",
  },
  {
    num: "10",
    title: "AI検索での引用とSEOリッチリザルトの両方を考慮していない",
    body: "リッチリザルト対応（FAQPage・BreadcrumbList等）とAI引用対策（Organization・Article・Service等）は目的が異なります。両方の目標を整理したうえでスキーマ実装の優先順位を決定することが重要です。",
  },
];

const INDUSTRIES = [
  {
    num: "01",
    industry: "飲食店",
    schemas: "Restaurant + Menu + LocalBusiness",
    note: "FoodEstablishment（Restaurantサブタイプ）にservesCuisine・hasMenu・priceRange・reservationsを追加します。Menuスキーマでメニューアイテムを構造化すると、AIが「このお店の料理・価格帯」を正確に案内できるようになります。",
  },
  {
    num: "02",
    industry: "医療機関・クリニック",
    schemas: "MedicalOrganization + Physician + FAQPage",
    note: "MedicalOrganizationにmedicalSpecialty・availableServiceを記述し、Physicianスキーマで医師の専門性を構造化します。FAQPageで症状・治療・料金に関する質問を構造化することで、患者のAI検索クエリへの引用率が高まります。",
  },
  {
    num: "03",
    industry: "法律事務所",
    schemas: "LegalService + FAQPage + BreadcrumbList",
    note: "LegalServiceにareaServed・serviceType・legalStatusを記述し、担当弁護士のPerson Schemaを追加します。FAQPageで法的手続きに関するQ&Aを構造化することで、AI検索での法律相談クエリへの引用確率が向上します。",
  },
  {
    num: "04",
    industry: "EC・オンラインショップ",
    schemas: "Product + Offer + Review + BreadcrumbList",
    note: "Product Schemaにname・description・image・skuを記述し、Offerで価格・在庫・配送情報を構造化します。AggregateReviewで評価をまとめることでリッチリザルトのレビュースター表示が可能になります。",
  },
  {
    num: "05",
    industry: "不動産",
    schemas: "RealEstateListing + LocalBusiness",
    note: "RealEstateListingにfloorSize・numberOfRooms・price・addressを記述します。LocalBusinessでエリア対応範囲を明確にすることで、「○○エリアの不動産」クエリへのAI引用精度が向上します。",
  },
  {
    num: "06",
    industry: "教育・スクール",
    schemas: "Course + EducationalOrganization + FAQPage",
    note: "CourseにcourseName・description・provider（EducationalOrganization）・startDate・priceを記述します。FAQPageで入学要件・カリキュラム・費用に関するQ&Aを構造化すると、進学検討者のAIクエリへの対応が強化されます。",
  },
  {
    num: "07",
    industry: "IT・SaaS",
    schemas: "SoftwareApplication + FAQPage + Organization",
    note: "SoftwareApplicationにname・applicationCategory・operatingSystem・offersを記述します。FAQPageで機能・料金・セキュリティに関するQ&Aを構造化することで、ツール比較系のAI検索クエリへの引用率が高まります。",
  },
  {
    num: "08",
    industry: "イベント・セミナー",
    schemas: "Event + Location + Performer",
    note: "EventにstartDate・endDate・location（Place Schema）・organizer・isAccessibleForFreeを記述します。PerformerでスピーカーのPerson Schemaを追加することで、AIがイベント概要を正確に案内できるようになります。",
  },
];

const FLOW_STEPS = [
  {
    num: "01",
    title: "サイト全体のページタイプ棚卸し",
    body: "トップページ・サービスページ・会社概要・ブログ記事・FAQページ・採用ページなど、サイト内のすべてのページタイプを一覧化します。ページタイプ別に実装すべきスキーマが変わるため、この棚卸しが出発点です。",
  },
  {
    num: "02",
    title: "スキーマタイプ選定（Schema.org参照）",
    body: "schema.orgで各ページタイプに対応するスキーマタイプを確認します。ページの主コンテンツが「会社情報」ならOrganization、「記事」ならArticle、「FAQ」ならFAQPageを選択します。",
  },
  {
    num: "03",
    title: "優先実装スキーマ決定",
    body: "全ページ共通のOrganization・BreadcrumbList・WebSiteを最優先とし、次にFAQPage・Article・LocalBusinessの優先度を決定します。リソースが限られている場合は効果の高いスキーマから順に実装します。",
  },
  {
    num: "04",
    title: "JSON-LDテンプレート作成",
    body: "各スキーマタイプのJSON-LDテンプレートをページタイプ別に作成します。必須プロパティ・推奨プロパティを網羅し、実際のコンテンツを差し込める変数設計にすることでページ数が多くても管理しやすくなります。",
  },
  {
    num: "05",
    title: "Next.jsでの実装（ScriptタグまたはGenerateMetadata）",
    body: "Next.jsではlayout.tsx内にScriptタグ（type='application/ld+json'）でOrganization・WebSiteを実装し、ページ固有のスキーマはpage.tsx内で記述します。動的ページはgenerateMetadata内でスキーマを動的生成します。",
  },
  {
    num: "06",
    title: "Rich Results Testでページ別バリデーション",
    body: "search.google.com/test/rich-resultsで主要ページのURLを入力し、スキーマが正常に認識されているか確認します。エラー・警告がある場合は内容を確認してJSON-LDを修正してください。",
  },
  {
    num: "07",
    title: "Search ConsoleでリッチリザルトER確認",
    body: "Google Search ConsoleのEnhancementsタブで「FAQリッチリザルト」「パンくずリスト」などのレポートを確認します。有効ページ数の増加とエラー件数ゼロを維持することが目標です。",
  },
  {
    num: "08",
    title: "エラー修正",
    body: "バリデーションで検出されたエラーを優先度順に修正します。必須プロパティの欠落・URL形式の誤り・型ミスが主なエラー要因です。修正後は再度バリデーションを実施して確認します。",
  },
  {
    num: "09",
    title: "AI引用状況確認",
    body: "ChatGPT・Gemini・Perplexityで自社サービスや事業領域に関するクエリを検索し、自社情報が正確に引用されているか確認します。スキーマ実装から2〜3ヶ月後を目安に初回確認を行います。",
  },
  {
    num: "10",
    title: "月次バリデーションチェック",
    body: "コンテンツの更新・ページの追加・サービス情報の変更があった際は必ずスキーマも更新します。月次でSearch ConsoleのEnhancementsレポートを確認し、新たなエラーを早期に検知する体制を維持します。",
  },
];

const KPIS = [
  {
    num: "01",
    title: "構造化データエラー数（Search Console）",
    body: "Google Search ConsoleのEnhancementsタブで確認します。目標はエラー件数ゼロ。エラーがある状態ではGoogleがスキーマを無視するため、最優先で解消します。",
  },
  {
    num: "02",
    title: "リッチリザルト表示回数",
    body: "Search ConsoleのリッチリザルトレポートでFAQ・パンくず・その他のリッチリザルト表示回数を計測します。表示回数の増加がスキーマ実装効果の直接的な指標になります。",
  },
  {
    num: "03",
    title: "リッチリザルト経由CTR",
    body: "リッチリザルトが表示されるクエリのCTR（クリック率）をSearch Consoleで確認します。FAQリッチリザルト表示によりCTRが向上しているかをスキーマ実装前後で比較します。",
  },
  {
    num: "04",
    title: "FAQリッチリザルト表示ページ数",
    body: "FAQPageスキーマを実装したページのうち、実際にFAQリッチリザルトとして表示されているページ数を把握します。Search ConsoleのFAQリッチリザルトレポートで確認できます。",
  },
  {
    num: "05",
    title: "スキーマ実装ページカバー率",
    body: "全ページ数に対して何らかの構造化データを実装しているページの割合です。カバー率が高いほどサイト全体でのAI引用チャンスが広がります。目標は主要ページ100%。",
  },
  {
    num: "06",
    title: "AI検索での構造化情報引用精度",
    body: "ChatGPT・Gemini・Perplexityで自社関連クエリを検索したとき、事業内容・サービス・所在地などが正確に引用されているかを月次で確認します。スキーマ実装前後の精度変化を記録します。",
  },
  {
    num: "07",
    title: "オーガニック流入数推移",
    body: "Google Analytics 4でオーガニック検索流入数の月次推移を確認します。構造化データ実装によるリッチリザルト表示増加がCTR改善→流入増加に繋がっているか確認します。",
  },
  {
    num: "08",
    title: "スキーマバリデーションカバー率",
    body: "実装済みスキーマのうち、直近30日以内にRich Results TestまたはSearch Consoleでバリデーションが完了しているページの割合です。古いバリデーション結果のままになっているページを定期的にチェックします。",
  },
];

const FAQ_ITEMS = [
  {
    q: "構造化データとは何ですか？",
    a: "Webページ上の情報（会社名・サービス・FAQなど）をGoogleやAIが機械的に理解しやすい形式（JSON-LD）で記述するコードです。見た目には影響せず、検索エンジンとAIへの情報伝達精度を高めます。",
  },
  {
    q: "構造化データを入れるとどんな効果がありますか？",
    a: "Googleでのリッチリザルト（FAQ・パンくず・レビュースター）表示、AI検索での引用率向上、ナレッジパネルの表示改善などが期待できます。SEOとAIOの両方に効果があります。",
  },
  {
    q: "どのSchemaから実装するべきですか？",
    a: "全業種共通で優先度が高いのはOrganization・BreadcrumbList・WebSiteです。地域ビジネスはLocalBusiness、FAQ掲載ページはFAQPage、ブログはArticleを追加します。",
  },
  {
    q: "構造化データはWordPressでも実装できますか？",
    a: "はい、Yoast SEOなどのプラグインで基本的なSchemaは自動実装されますが、精度が低いことが多いです。カスタムJSON-LDを追加することでより精度の高い実装が可能です。",
  },
  {
    q: "実装後の効果はいつ頃現れますか？",
    a: "Googleがクロール・インデックスするタイミングに依存します。一般的に1〜4週間でリッチリザルトが表示され始め、AIO引用への影響は2〜3ヶ月単位で確認できます。",
  },
  {
    q: "AIO向けとSEO向けの構造化データは違いますか？",
    a: "基盤となるSchema.orgの仕様は同じですが、目的が異なります。SEO向けはFAQPage・BreadcrumbList・Articleによるリッチリザルト表示が主目的です。AIO向けはOrganization・Service・Articleによってエンティティ情報をAIに正確に伝えることが主目的です。両方の目標を並行して実装することを推奨します。",
  },
  {
    q: "Next.jsではどこにJSON-LDを実装しますか？",
    a: "サイト全体に共通するOrganization・WebSiteはapp/layout.tsxのheadセクション内にScriptタグで実装します。ページ固有のBreadcrumbList・FAQPageはpage.tsx内でScriptタグを使って実装します。動的ページはgenerateMetadata関数内でスキーマを動的生成する方法も有効です。",
  },
  {
    q: "JSON-LDとMicrodataどちらを使うべきですか？",
    a: "Googleが推奨するJSON-LDを使用してください。JSON-LDはHTMLと独立したスクリプトブロックとして記述するため、コンテンツの変更に影響されにくく、Next.jsなどのモダンフレームワークでも管理しやすい形式です。",
  },
  {
    q: "FAQPageスキーマのQ&A数に上限はありますか？",
    a: "Schema.orgの仕様上はQ&Aの数に明示的な上限はありませんが、Googleがリッチリザルトとして表示するのは通常3〜4件です。最も重要なQ&Aを先頭に配置し、ページあたり5〜10件を目安にすることを推奨します。",
  },
  {
    q: "BreadcrumbListはすべてのページに必要ですか？",
    a: "トップページを除くすべてのページへの実装を推奨します。BreadcrumbListはサイト構造をGoogleとAIに伝える基本的なスキーマで、実装コストが低い割に効果が高いため、優先実装スキーマのひとつです。",
  },
  {
    q: "Articleスキーマの著者情報はどこまで書くべきですか？",
    a: "author フィールドにPerson Schemaをネストし、name・url（著者プロフィールページURL）・sameAs（LinkedInなど）を記述することを推奨します。E-E-A-T観点では著者の専門性や実績を示すページへのリンクが重要です。",
  },
  {
    q: "Product SchemaでレビューのリッチリザルトはAIOにも効果がありますか？",
    a: "はい。Product SchemaのreviewとaggregateRatingは、AIが商品情報を案内する際に「評判の良い商品」として引用する根拠になります。特にECサイトでは商品ページへのレビュー構造化がAI引用精度に直結します。",
  },
  {
    q: "スキーマの複数タイプを同一ページに実装する方法は？",
    a: "JSON-LDの@graphプロパティを使って複数のスキーマオブジェクトを配列で記述する方法、またはScriptタグを複数配置する方法があります。@graphを使う場合は@id参照でスキーマ間の関連を明示できるためより効果的です。",
  },
  {
    q: "構造化データの実装に費用はどのくらいかかりますか？",
    a: "実装規模によって異なります。新規サイト制作時に組み込む場合は追加コストがほぼかからないケースが多いです。既存サイトへの後付け実装は診断・設計・実装・検証を含めて数万円〜十数万円が一般的な相場です。サイプレスでは現状診断を無料で実施しています。",
  },
  {
    q: "sameAsとisPartOfの違いは何ですか？",
    a: "sameAsは「このエンティティと同一のもの」を指すプロパティで、SNSアカウントや外部データベースのプロフィールURLを登録します。isPartOfは「このコンテンツが属する親コンテンツ・組織」を示すプロパティで、ArticleがWebSiteに属することを示す際などに使います。",
  },
  {
    q: "構造化データエラーはどこで確認できますか？",
    a: "Google Search ConsoleのEnhancementsタブ（Googleが確認したエラー）と、search.google.com/test/rich-resultsのリッチリザルトテスト（ページ単位の即時確認）、およびvalidator.schema.org（Schema.org仕様準拠チェック）の3つを組み合わせて確認することを推奨します。",
  },
  {
    q: "HowToスキーマはAIOに効果がありますか？",
    a: "はい。HowToスキーマは手順が明確なコンテンツをステップ形式で構造化します。「○○の方法」「○○のやり方」のようなクエリに対してAIが自社コンテンツを引用する際の根拠になります。SEO面ではHowToリッチリザルトの表示にも繋がります。",
  },
  {
    q: "VideoObjectスキーマはYouTube埋め込みでも使えますか？",
    a: "はい。ページにYouTube動画を埋め込んでいる場合でもVideoObjectスキーマを実装できます。name・description・uploadDate・thumbnailUrl・contentUrl（またはembedUrl）を記述することで、Googleが動画コンテンツを認識しやすくなります。",
  },
  {
    q: "EventスキーマはオンラインセミナーやWebinarにも使えますか？",
    a: "はい。EventSchemaのeventAttendanceModeプロパティに「OnlineEventAttendanceMode」を指定することでオンラインイベントとして構造化できます。locationにVirtualLocationのURLを記述し、startDate・endDateを正確に記述してください。",
  },
  {
    q: "構造化データを実装しても検索順位は上がりますか？",
    a: "構造化データは直接的なランキングシグナルではないと Googleは説明しています。ただし、リッチリザルト表示によるCTR向上・AIO引用増加→ブランド認知度向上→間接的なトラフィック増加という経路で、オーガニック集客への好影響が期待できます。",
  },
];

const RELATED_LINKS = [
  { href: "/aio", label: "AIO対策とは", desc: "AI検索最適化の全体像" },
  { href: "/aio/organization-data", label: "Organization構造化データ", desc: "Organization/LocalBusiness Schemaの実装" },
  { href: "/aio/entity-optimization", label: "エンティティ最適化", desc: "Googleへのエンティティ認識強化" },
  { href: "/aio/eeat", label: "E-E-A-T対策", desc: "経験・専門性・権威性・信頼性の構築" },
  { href: "/aio/faq-content", label: "FAQ構造化コンテンツ", desc: "FAQPageスキーマと引用率向上" },
  { href: "/aio/chatgpt", label: "ChatGPT引用対策", desc: "ChatGPTに引用されるサイト設計" },
  { href: "/aio/gemini", label: "Gemini対策", desc: "Google Geminiへの最適化" },
  { href: "/aio/perplexity", label: "Perplexity対策", desc: "Perplexity AIでの引用戦略" },
  { href: "/seo/structured-data", label: "SEO構造化データ", desc: "SEO観点のSchema活用" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "技術面からの検索最適化" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域ビジネスの検索対策" },
  { href: "/seo/schema-faq", label: "FAQPage Schema", desc: "FAQリッチリザルトの実装方法" },
  { href: "/meo", label: "MEO対策", desc: "Googleビジネスプロフィール最適化" },
  { href: "/meo/google-business", label: "Googleビジネスプロフィール", desc: "GBP登録・運用ガイド" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "サービス内容と料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "SEOと構造化データの連動" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "構造化データ対応のサイト制作" },
  { href: "/industry/medical", label: "医療機関向けAIO", desc: "MedicalOrganization Schema対応" },
  { href: "/industry/restaurant", label: "飲食店向けAIO", desc: "FoodEstablishment Schema対応" },
  { href: "/industry/ec", label: "ECサイト向けAIO", desc: "Product/Offer Schema対応" },
  { href: "/industry/education", label: "教育機関向けAIO", desc: "Course/EducationalOrganization Schema" },
  { href: "/area/tokyo", label: "東京のAIO対策", desc: "東京エリアの対応実績" },
  { href: "/area/osaka", label: "大阪のAIO対策", desc: "大阪エリアの対応実績" },
  { href: "/blog/schema-guide", label: "Schema実装ブログ", desc: "JSON-LD実装の実践ガイド" },
];

export default function StructuredDataPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/aio" className="hover:underline" style={{ color: "#6B7280" }}>AIO対策</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>構造化データ</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              AIO Knowledge
            </p>
            <h1
              className="font-black leading-tight mb-6"
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 4vw, 52px)", color: "#0d1b2a" }}
            >
              構造化データ（Schema.org）実装<br />AI検索・リッチリザルト対応ガイド
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              構造化データはGoogleとAI検索が情報を正確に理解するための言語です。
              JSON-LDで実装することで、リッチリザルトの表示とAIO引用率の改善を同時に実現します。
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-[14px] font-semibold tracking-wide"
              style={{ background: "#0F172A", color: "#FFFFFF" }}
            >
              無料診断を依頼する →
            </Link>
          </div>
        </section>

        {/* Full-width image after hero */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="構造化データ実装・AI検索最適化" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.3)" }} />
        </section>

        {/* What is structured data */}
        <section className="py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                Overview
              </p>
              <h2 className="font-black text-[28px] mb-8" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
                構造化データとは何か
              </h2>
              <p className="text-[15px] leading-[1.9] mb-4" style={{ color: "#374151" }}>
                Webページには文章・画像・リンクなど多くの情報が含まれますが、人間が読みやすい形式のままではGoogleやAIが内容を正確に理解しにくい場合があります。構造化データ（Schema.org / JSON-LD）は、ページに含まれる情報を機械可読な形式で記述することで、検索エンジンとAIへの情報伝達精度を高める技術です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                実装するとページの見た目には何も変わりませんが、Googleの検索結果にFAQやパンくずなどのリッチリザルトが表示されたり、ChatGPT・GeminiなどのAIが企業情報・サービス内容を正確に認識しやすくなります。AIO対策の技術基盤として、すべての企業サイトに実装を推奨します。
              </p>
            </div>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                What You Will Learn
              </p>
              <h2 className="font-black text-[28px] mb-10" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
                このページでわかること
              </h2>
              <ul className="space-y-5">
                {[
                  "AIO対策における構造化データの役割とSEOリッチリザルトとの違い",
                  "Organization・FAQPage・Article・BreadcrumbListなど主要スキーマの使い分け方",
                  "JSON-LDとMicrodataの違いとNext.jsでの実装パターン",
                  "業種別（飲食・医療・法律・EC・不動産など）のスキーマ選定ポイント",
                  "スキーマのバリデーション方法と定期メンテナンスの進め方",
                  "AI引用状況の確認方法と改善サイクルの回し方",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px]" style={{ color: "#374151" }}>
                    <span className="shrink-0 font-bold" style={{ color: "#c4b89a" }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Why it matters for AIO */}
        <section className="py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                AIO Relevance
              </p>
              <h2 className="font-black text-[28px] mb-8" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
                AIOと構造化データの関係
              </h2>
              <p className="text-[15px] leading-[1.9] mb-4" style={{ color: "#374151" }}>
                AI検索（Google AI Overview・ChatGPT Search・Perplexityなど）はWebページのコンテンツを解析して回答を生成します。このとき、構造化データが実装されているページは「何の会社か」「どんなサービスを提供しているか」「どのエリアに対応しているか」がAIに明確に伝わるため、関連するクエリへの引用確率が高まります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                特にFAQPageスキーマは、Q&A形式の検索クエリへの引用に直結します。「○○とは？」「○○の方法は？」のような質問に対し、AIが自社FAQを参照・引用するケースが増加しています。
              </p>
            </div>
          </div>
        </section>

        {/* Schema types */}
        <section className="py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Schema Types
            </p>
            <h2 className="font-black text-[28px] mb-4" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              主要な構造化データの種類
            </h2>
            <p className="text-[14px] mb-12" style={{ color: "#6B7280" }}>
              サイトの性質に応じて必要なSchemaを組み合わせて実装します
            </p>
            <div className="max-w-4xl">
              {SCHEMAS.map((s, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1 w-6" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                      <h3 className="font-bold text-[16px]" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>{s.name}</h3>
                      <span className="text-[11px] px-2 py-0.5" style={{ background: "#FFFFFF", color: "#6B7280", border: "1px solid #E8E4DC" }}>
                        {s.use}
                      </span>
                    </div>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{s.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section className="py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Common Issues
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              よくある課題と原因
            </h2>
            <div className="max-w-3xl">
              {ISSUES.map((issue) => (
                <div key={issue.num} className="flex gap-6 py-7" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{issue.num}</span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>{issue.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{issue.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section C: 業種別の活用ポイント */}
        <section className="py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Industry Guide
            </p>
            <h2 className="font-black text-[28px] mb-4" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              業種別の活用ポイント
            </h2>
            <p className="text-[14px] mb-12" style={{ color: "#6B7280" }}>
              業種によって実装すべきスキーマの組み合わせが異なります
            </p>
            <div className="max-w-4xl">
              {INDUSTRIES.map((ind) => (
                <div key={ind.num} className="flex gap-6 py-7" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{ind.num}</span>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                      <h3 className="font-bold text-[16px]" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>{ind.industry}</h3>
                      <span className="text-[11px] px-2 py-0.5" style={{ background: "#FFFFFF", color: "#6B7280", border: "1px solid #E8E4DC" }}>
                        {ind.schemas}
                      </span>
                    </div>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{ind.note}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section D: 実装・改善フロー */}
        <section className="py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Implementation Flow
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              実装・改善フロー
            </h2>
            <div className="max-w-3xl">
              {FLOW_STEPS.map((step) => (
                <div key={step.num} className="flex gap-6 py-7" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{step.num}</span>
                  <div>
                    <h3 className="font-bold text-[15px] mb-2" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>{step.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{step.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 2-col: 構造化データの実装手順 */}
        <section className="py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden" style={{ height: "360px" }}>
                <Image src="/ChatGPT Image 2026年6月13日 19_19_44.png" alt="構造化データの実装手順・ラップトップアナリティクス" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  Cypress Support
                </p>
                <h2 className="font-black text-[26px] mb-6" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
                  サイプレスの構造化データ支援
                </h2>
                <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                  サイプレスでは、Webサイト全体のSchema設計から実装・検証まで一貫して対応します。Google Search Consoleのリッチリザルトテストで正常に認識されることを確認したうえで完了とし、実装後の効果計測も継続して行います。
                </p>
                <ul className="space-y-3">
                  {[
                    "現状のSchema実装状況の診断（無料）",
                    "サイト構造に合わせたSchema設計",
                    "JSON-LDの実装（Next.js / WordPress 両対応）",
                    "Google Search Consoleでの検証・確認",
                    "FAQコンテンツの構造化提案",
                    "実装後の効果測定・月次レポート",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: "#374151" }}>
                      <span className="mt-1 shrink-0 font-bold" style={{ color: "#c4b89a" }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section className="py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              KPIs
            </p>
            <h2 className="font-black text-[28px] mb-4" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              成果を見るための指標
            </h2>
            <p className="text-[14px] mb-12" style={{ color: "#6B7280" }}>
              構造化データ実装の効果は以下の指標で確認します
            </p>
            <div className="max-w-3xl">
              {KPIS.map((kpi) => (
                <div key={kpi.num} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{kpi.num}</span>
                  <div>
                    <h3 className="font-bold text-[15px] mb-2" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>{kpi.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{kpi.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* SEO effect */}
        <section className="py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                SEO Effect
              </p>
              <h2 className="font-black text-[28px] mb-8" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
                SEOへの効果
              </h2>
              <p className="text-[15px] leading-[1.9] mb-4" style={{ color: "#374151" }}>
                構造化データの実装はAIOだけでなく、従来のSEOにも明確な効果をもたらします。FAQPageスキーマを実装したページではGoogleの検索結果にFAQが展開表示され、CTR（クリック率）の向上が期待できます。BreadcrumbListはURLの代わりに階層構造が検索結果に表示され、ユーザーへの信頼感が高まります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                また、Googleはリッチリザルトを表示できるページを「ユーザーにとって有益な情報を持つページ」と評価する傾向があり、間接的に検索順位にも好影響を与えます。構造化データはSEOとAIOを同時に強化できる、コストパフォーマンスの高い施策です。
              </p>
            </div>
          </div>
        </section>

        <FaqSection items={FAQ_ITEMS} heading="構造化データ実装に関するよくある質問" bgColor="#FFFFFF" />

        <RelatedPages links={RELATED_LINKS} />

        <PageContactCTA
          heading="構造化データの実装をご検討の方へ"
          body="現在の実装状況の診断から設計・実装・効果測定まで、一貫して対応します。まずはお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}

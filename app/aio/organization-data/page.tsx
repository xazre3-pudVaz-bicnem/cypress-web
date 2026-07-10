import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Organization構造化データ｜AIO・SEO対策｜株式会社サイプレス",
  description:
    "Organization SchemaのJSON-LD実装でGoogleとAIに企業情報を正確に伝える。会社名・住所・代表者・SNSリンクの構造化からナレッジグラフ登録まで徹底解説。",
  keywords: ["Organization Schema", "構造化データ", "AIO対策", "SEO", "JSON-LD", "ナレッジグラフ", "LocalBusiness", "sameAs"],
  openGraph: {
    title: "Organization構造化データ｜AIO・SEO対策｜株式会社サイプレス",
    description: "Organization Schemaの実装でGoogleとAIへの企業認識を最大化する方法を解説。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/aio/organization-data" },
};

const ITEMS = [
  {
    num: "01",
    title: "会社名（name）",
    body: "正式な法人名を記述します。「株式会社」の位置を統一し、略称や通称と使い分けを明確にします。name フィールドはナレッジグラフのエンティティ識別に最も重要な情報です。",
  },
  {
    num: "02",
    title: "URL・ロゴ・説明文",
    body: "公式Webサイトのurl・高解像度のロゴ画像（logo）・企業概要の説明文（description）を記述します。ロゴはGoogleのナレッジパネルに表示されるため、正方形または横長の鮮明な画像を用意します。",
  },
  {
    num: "03",
    title: "住所（PostalAddress）",
    body: "PostalAddress SchemaでstreetAddress・addressLocality・addressRegion・postalCode・addressCountryを記述します。Google マップ・ナレッジグラフ・Googleビジネスプロフィールとの整合性を確保することが重要です。",
  },
  {
    num: "04",
    title: "電話番号・メールアドレス",
    body: "telephone・emailフィールドに代表連絡先を記述します。NAPサイテーション（Name, Address, Phone）の一貫性はローカルSEOにも直結するため、すべてのオンライン媒体で統一した表記にします。",
  },
  {
    num: "05",
    title: "事業内容・専門分野（knowsAbout）",
    body: "knowsAboutフィールドで企業の専門分野・事業内容を記述します。これによりGoogleとAIが「この会社が何の専門家か」を理解し、業界関連クエリでの言及頻度が高まります。",
  },
  {
    num: "06",
    title: "代表者情報（founder/employee）",
    body: "founderまたはemployeeフィールドにPerson Schemaを入れ子にして代表者名・役職・プロフィールURLを記述します。著者情報の構造化はE-E-A-Tシグナルの強化に最も効果的な施策のひとつです。",
  },
  {
    num: "07",
    title: "SNSリンク（sameAs）",
    body: "sameAsフィールドにX（旧Twitter）・Instagram・LinkedIn・Facebookなどの公式SNSアカウントURLを配列で記述します。sameAsリンクはエンティティの同一性を確認するシグナルとしてナレッジグラフ登録に貢献します。",
  },
  {
    num: "08",
    title: "設立年・従業員数",
    body: "foundingDateとnumberOfEmployeesフィールドで企業規模・歴史を伝えます。設立年の記述は信頼性・権威性シグナルとなり、AI検索での引用判断に影響します。",
  },
];

const ISSUES = [
  {
    num: "01",
    title: "Organization/LocalBusinessスキーマが未実装",
    body: "Webサイトに構造化データが一切ない状態です。GoogleとAIは会社情報をテキスト解析のみで判断するため、認識精度が低くなります。JSON-LDによる基本実装がAIO対策の出発点です。",
  },
  {
    num: "02",
    title: "必須プロパティ（name/url/logo）のみで詳細が不足",
    body: "最低限のプロパティだけでは、AIがエンティティを詳細に把握できません。description・foundingDate・areaServed など補足情報を追加することで引用精度が大きく向上します。",
  },
  {
    num: "03",
    title: "sameAsが未設定または不完全",
    body: "sameAsはGoogleが「同一エンティティ」を確認するための重要なシグナルです。公式SNS・Wikipedia・Wikidata・LinkedIn・Crunchbaseなどを網羅的に登録することでナレッジグラフ登録確率が上がります。",
  },
  {
    num: "04",
    title: "代表者（founder/CEO）の情報がない",
    body: "代表者のPerson Schemaがないと、E-E-A-T（経験・専門性・権威性・信頼性）の評価が低くなります。founderまたはemployeeフィールドに代表者のnameとsameAs（LinkedInなど）を記述してください。",
  },
  {
    num: "05",
    title: "設立年・従業員数・業種コードが未記載",
    body: "foundingDate・numberOfEmployees・naics（業種コード）は企業の規模・歴史・業界を伝えるフィールドです。これらはAIが「信頼できる情報源かどうか」を判断する際に参照される情報です。",
  },
  {
    num: "06",
    title: "連絡先（contactPoint）の構造化がない",
    body: "contactPointフィールドでお問い合わせ電話番号・メール・対応時間を記述します。未実装の場合、AIが企業への連絡方法を正確に案内できず、顧客接点機会の損失につながります。",
  },
  {
    num: "07",
    title: "複数拠点の整理ができていない",
    body: "本社と支店・複数の店舗がある場合、location または subOrganization フィールドで拠点ごとのLocalBusinessスキーマを構造化する必要があります。未整理のままだと地域検索での認識精度が下がります。",
  },
  {
    num: "08",
    title: "JSON-LDではなくMicrodataで実装している",
    body: "MicrodataはHTML内に属性を直接埋め込む旧来の実装方法です。Googleが推奨するJSON-LDはHTMLと分離して管理でき、メンテナンスコストが低く、Next.jsなどのモダンフレームワークにも適合します。",
  },
  {
    num: "09",
    title: "スキーマのバリデーションエラーがある",
    body: "必須フィールドの欠落・型の誤り・URLの形式ミスなどがあるとGoogleにスキーマを無視されます。Rich Results TestやSchema.org Validatorで定期的にバリデーションを行い、エラーゼロを維持することが重要です。",
  },
  {
    num: "10",
    title: "定期的な情報更新がない",
    body: "住所変更・代表者交代・新規SNSアカウント追加などがあってもスキーマを更新していないケースが多く見られます。実際の情報とスキーマのズレはGoogleの信頼性評価を下げるため、年次レビューが不可欠です。",
  },
];

const INDUSTRIES = [
  {
    num: "01",
    industry: "一般企業",
    schema: "Organization基本実装",
    note: "Organization Schemaにname・url・logo・description・sameAs・contactPointを実装します。knowsAboutで事業領域を宣言することで、AIが「この会社の得意分野」を正確に認識できるようになります。",
  },
  {
    num: "02",
    industry: "地域店舗・地域ビジネス",
    schema: "LocalBusiness + 地図情報",
    note: "LocalBusiness SchemaにhasMap（Googleマップ URL）・openingHoursSpecification・geo（緯度経度）を追加します。ローカルパックでの表示確率向上とAI検索での「近くの○○」クエリへの対応力が高まります。",
  },
  {
    num: "03",
    industry: "医療機関・クリニック",
    schema: "MedicalOrganization + 医師情報",
    note: "MedicalOrganizationサブタイプを使用し、medicalSpecialty（専門科目）・availableService（診療内容）・physician（医師のPerson Schema）を記述します。医療の信頼性が問われる分野ではE-E-A-T構造化が特に重要です。",
  },
  {
    num: "04",
    industry: "法律事務所",
    schema: "LegalService + 弁護士情報",
    note: "LegalService SchemaにareaServed（対応地域）・serviceType（取扱い案件）・employee（弁護士のPerson Schema）を追加します。弁護士名の構造化と資格情報の記述がAIへの専門性訴求に直結します。",
  },
  {
    num: "05",
    industry: "飲食店",
    schema: "FoodEstablishment + メニュー",
    note: "FoodEstablishment SchemaにservesCuisine（料理ジャンル）・hasMenu（メニューページURL）・priceRange・reservations（予約対応）を記述します。AI検索での「○○料理のお店」クエリへの引用率が高まります。",
  },
  {
    num: "06",
    industry: "学校・教育機関",
    schema: "EducationalOrganization",
    note: "EducationalOrganization SchemaにeducationalCredentialAwarded（取得可能資格）・alumni（卒業生情報）・hasOfferCatalog（講座一覧）を実装します。入学検討者のAI検索クエリへの対応が強化されます。",
  },
  {
    num: "07",
    industry: "EC・小売",
    schema: "Store + 商品情報",
    note: "Store SchemaにcurrenciesAccepted（対応通貨）・paymentAccepted（支払い方法）を設定し、Product Schemaと連携させます。OnlineStore Schemaも組み合わせることでAIへのEC事業者としての認識が明確になります。",
  },
  {
    num: "08",
    industry: "非営利団体（NPO/NGO）",
    schema: "NGO/NPO スキーマ",
    note: "Schema.orgのNGOまたはNonprofitOrganizationサブタイプを使用します。areaServed・knowsAbout・founder・memberOfを記述することで、AI検索での社会的活動に関するクエリへの引用確率が向上します。",
  },
];

const FLOW_STEPS = [
  {
    num: "01",
    title: "Schema.org/Organization仕様確認",
    body: "schema.org/Organizationにアクセスし、必須プロパティ（name/url/logo）と推奨プロパティの全リストを確認します。LocalBusinessを使う場合はそのサブタイプ一覧も確認してください。",
  },
  {
    num: "02",
    title: "自社情報の棚卸し",
    body: "正式会社名・登記住所・代表電話番号・公式URL・ロゴ画像URL・代表者名・設立年・従業員数・業種コード（NAICS）を一覧化します。全媒体で統一された表記を確定させることが重要です。",
  },
  {
    num: "03",
    title: "JSON-LD形式でOrganizationスキーマ作成",
    body: "確認した情報をもとにJSON-LDオブジェクトを作成します。@context・@typeから始め、基本情報・住所（PostalAddress）・contactPoint・代表者（Person）の順に記述します。",
  },
  {
    num: "04",
    title: "sameAsリスト整備",
    body: "公式X・Instagram・Facebook・LinkedIn・YouTube・Wikidata・Crunchbase・業界ポータルなど、自社が掲載されているURLをsameAs配列に追加します。登録媒体が多いほどエンティティ認識が強化されます。",
  },
  {
    num: "05",
    title: "contactPoint追加",
    body: "contactType（customer service / technical support等）・telephone・contactOption・availableLanguageを記述します。複数の問い合わせ窓口がある場合は配列で記述してください。",
  },
  {
    num: "06",
    title: "logo・image URLの確認",
    body: "logoに指定する画像はSchema.orgの推奨サイズ（最小112×112px、推奨600×60px以上）を満たしていることを確認します。imageURLは絶対URLで記述し、htttps経由でアクセス可能なことを確認します。",
  },
  {
    num: "07",
    title: "ページhead内への実装",
    body: "Next.jsではlayout.tsx内にScriptタグ（type='application/ld+json'）として実装します。WordPressはfunctions.phpへのwp_head()フックまたはYoast SEOのカスタムJSON-LD機能を使用します。",
  },
  {
    num: "08",
    title: "Rich Results Testでバリデーション",
    body: "search.google.com/test/rich-resultsにURLを入力し、エラーと警告がないことを確認します。エラーがある場合はSchema.org Validatorでも検証し、原因を特定して修正してください。",
  },
  {
    num: "09",
    title: "Search Console構造化データレポート確認",
    body: "Google Search ConsoleのEnhancementsタブで「組織情報」の項目を確認します。エラー件数・警告件数・有効件数のトレンドを記録し、エラーが発生した場合は速やかに対応します。",
  },
  {
    num: "10",
    title: "年次情報更新",
    body: "住所・電話番号・代表者・SNSアカウントなどに変更がないか年に一度確認し、スキーマを最新情報に更新します。変更後は再度バリデーションを実施してエラーゼロを維持してください。",
  },
];

const KPIS = [
  {
    num: "01",
    title: "スキーマバリデーションエラー数",
    body: "目標は0件。Rich Results TestおよびSearch Consoleで定期確認します。エラーがあるとGoogleにスキーマが無視されるため、ゼロ維持が前提条件です。",
  },
  {
    num: "02",
    title: "sameAs登録URL数",
    body: "SNS・業界ポータル・公式データベースなど、sameAsに登録されている外部URLの件数です。登録件数が多いほどエンティティの信頼性シグナルが強くなります。目安は5件以上。",
  },
  {
    num: "03",
    title: "ナレッジパネル表示状況",
    body: "ブランド名検索時にGoogleナレッジパネルが表示されているか確認します。Search Consoleのクエリレポートでブランド名検索のインプレッションを追跡します。",
  },
  {
    num: "04",
    title: "ブランド名検索のCTR",
    body: "Search Consoleでブランド名クエリのCTR（クリック率）を計測します。ナレッジパネルの表示改善により、ブランド名検索でのCTRが上昇する傾向があります。",
  },
  {
    num: "05",
    title: "構造化データ実装ページ数",
    body: "Organization/LocalBusiness以外にも、BreadcrumbList・FAQPage・Articleなど各スキーマを実装しているページ数を把握します。カバー率を計算し、未実装ページを可視化します。",
  },
  {
    num: "06",
    title: "AIでの自社情報引用精度",
    body: "ChatGPT・Gemini・Perplexityなどのai検索で自社名を検索し、会社情報（住所・事業内容・代表者名等）が正確に引用されているかを月次で確認します。",
  },
  {
    num: "07",
    title: "問い合わせフォーム経由数",
    body: "Google Analytics 4でフォーム送信のコンバージョンを計測します。スキーマ実装によりオーガニック流入が増加すると問い合わせ数にも好影響が出る傾向があります。",
  },
];

const FAQ_ITEMS = [
  {
    q: "Organization SchemaはどこにJSON-LDで実装しますか？",
    a: "通常はサイト全ページに共通で読み込まれるlayoutファイルのheadセクション、またはトップページのheadに実装します。Next.jsではScriptコンポーネントにtype='application/ld+json'を指定して実装するのが一般的です。",
  },
  {
    q: "Organization SchemaとLocalBusiness Schemaの違いは何ですか？",
    a: "LocalBusiness Schemaは地域ビジネス（店舗・事務所を持つ企業）向けで、Organization Schemaのサブタイプです。地域ビジネスの場合はLocalBusinessを使い、openingHours（営業時間）・hasMap（地図）なども記述することでローカルSEOに効果的です。",
  },
  {
    q: "実装後すぐに効果が出ますか？",
    a: "Googleのクロール・インデックスにより、実装後数週間〜数ヶ月でナレッジパネルの表示や検索結果の改善が見られることが多いです。Google Search ConsoleのリッチリザルトテストでSchemaが正しく認識されているか確認できます。",
  },
  {
    q: "WordPress・Next.js以外のCMSでも実装できますか？",
    a: "はい。JSON-LDはHTMLのheadタグ内に記述するだけのため、どのCMSやフレームワークでも実装可能です。WordPressならプラグイン（Yoast SEO・Schema & Structured Data for WP）を使う方法もあります。",
  },
  {
    q: "Schemaの記述内容を変更した場合はどうなりますか？",
    a: "変更後Googleがクロールした段階で更新されます。情報変更（住所移転・代表者交代等）の際は速やかにSchemaも更新し、全媒体の情報と整合させることが重要です。",
  },
  {
    q: "sameAsには何を入れれば良いですか？",
    a: "公式SNSアカウント（X・Instagram・Facebook・LinkedIn・YouTube）のURL、Wikidata・WikipediaのURL、Crunchbase・業界ポータルのプロフィールページURLを入れます。いずれも自社が管理する公式URLである必要があります。",
  },
  {
    q: "代表者情報はどのように記述しますか？",
    a: "founderまたはemployeeフィールドにPerson Schemaをネストします。@type: 'Person'・name（氏名）・jobTitle（役職）・sameAs（LinkedInやWikipediaのURL）を記述するのが基本セットです。",
  },
  {
    q: "複数の拠点がある場合はどう実装しますか？",
    a: "本社のOrganizationスキーマにlocationプロパティを追加し、各拠点のLocalBusiness Schemaを配列または別スキーマとして記述します。拠点ごとに住所・電話番号・営業時間を個別に記述することが重要です。",
  },
  {
    q: "ナレッジグラフへの登録は保証されますか？",
    a: "Googleのナレッジグラフへの登録はGoogleが独自の基準で判断するため、特定の施策で登録を確約することはできません。ただし、Organization Schemaの実装・sameAsの充実・Wikidataへの登録・外部からの言及増加がナレッジグラフ登録確率を高める施策として知られています。",
  },
  {
    q: "LocalBusinessスキーマの営業時間はどう記述しますか？",
    a: "openingHoursSpecification プロパティを使い、dayOfWeek（曜日）・opens（開店時刻）・closes（閉店時刻）を記述します。曜日ごとに異なる時間がある場合は配列で複数指定できます。祝日対応もspecialOpeningHoursSpecificationで記述可能です。",
  },
  {
    q: "JSON-LDのバリデーションツールはどれを使えばいいですか？",
    a: "Googleの「リッチリザルトテスト（search.google.com/test/rich-results）」とSchema.orgの「Schema Markup Validator（validator.schema.org）」の両方を使うことを推奨します。前者はGoogle固有のエラーを、後者はSchema.org仕様に基づくエラーを確認できます。",
  },
  {
    q: "contactPointはどのように記述しますか？",
    a: "@type: 'ContactPoint'を指定し、contactType（'customer service'等）・telephone・contactOption（TollFree等）・availableLanguage（日本語等）を記述します。チャット・メールなど複数の問い合わせ方法がある場合は配列で記述します。",
  },
  {
    q: "knowsAboutには何を書けばいいですか？",
    a: "自社の専門領域・事業内容・取り扱いサービスをテキストまたはThing Schemaで記述します。例えばWebデザイン会社であれば「ウェブデザイン」「SEO対策」「AIO対策」などを列挙します。AIが「この会社の専門分野」を正確に把握するために使われます。",
  },
  {
    q: "OrganizationとWebSiteスキーマは同じページに共存できますか？",
    a: "はい。1つのHTMLページに複数のJSON-LDブロックを配置するか、@graphプロパティを使って複数のスキーマをひとつのJSON-LDにまとめることができます。OrganizationとWebSiteは別の@typeなので共存に問題はありません。",
  },
  {
    q: "Schemaを実装するとリッチリザルトは必ず表示されますか？",
    a: "Organization Schemaはリッチリザルトの直接的なトリガーではありません。リッチリザルト表示はFAQPage・BreadcrumbList・HowToなど特定のスキーマタイプが対象です。Organization SchemaはナレッジグラフとAI引用精度の改善を主な目的とします。",
  },
  {
    q: "areaServedはどのように設定しますか？",
    a: "areaServedにはサービス提供エリアを文字列（「東京都」「全国」等）またはPlace Schemaで記述します。LocalBusinessの場合は具体的な都道府県・市区町村名を記述することでローカル検索への対応が強化されます。",
  },
  {
    q: "非営利団体はOrganizationスキーマで対応できますか？",
    a: "はい。Schema.orgにはNGO・NonprofitOrganization・GovernmentOrganizationなどOrganizationのサブタイプが多数あります。自社の組織形態に最も近いサブタイプを選択して実装することを推奨します。",
  },
  {
    q: "設立年（foundingDate）の記述形式はどうすればいいですか？",
    a: "ISO 8601形式の文字列で記述します。例：\"foundingDate\": \"2015\" または \"foundingDate\": \"2015-04-01\" のように年のみ、または年月日の形式が使用できます。正式な創業年月日を設立登記書類で確認して記述してください。",
  },
  {
    q: "Googleビジネスプロフィールとの整合性はどう保ちますか？",
    a: "Organization/LocalBusiness Schemaの会社名・住所・電話番号をGoogleビジネスプロフィールの登録情報と完全に一致させます。NAPの不一致はGoogleの評価を下げる要因になるため、変更時はすべての媒体を同時に更新してください。",
  },
  {
    q: "実装後のモニタリングはどうすれば良いですか？",
    a: "月次でGoogle Search ConsoleのEnhancementsレポートを確認し、エラー・警告の発生を検知します。またChatGPT・GeminiなどのAIで自社名や事業領域のクエリを定期検索し、引用内容の精度を確認することを推奨します。",
  },
];

const RELATED_LINKS = [
  { href: "/aio", label: "AIO対策とは", desc: "AI検索最適化の全体戦略" },
  { href: "/aio/structured-data", label: "構造化データ（AIO向け）", desc: "AI検索対応のSchema.org完全ガイド" },
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
  { href: "/services/seo", label: "SEO対策サービス", desc: "SEO施策の全体支援" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "構造化データ対応のサイト制作" },
  { href: "/industry/medical", label: "医療機関向けAIO", desc: "MedicalOrganization Schema対応" },
  { href: "/industry/legal", label: "法律事務所向けAIO", desc: "LegalService Schema対応" },
  { href: "/industry/restaurant", label: "飲食店向けAIO", desc: "FoodEstablishment Schema対応" },
  { href: "/industry/education", label: "教育機関向けAIO", desc: "EducationalOrganization Schema" },
  { href: "/area/tokyo", label: "東京のAIO対策", desc: "東京エリアの対応実績" },
  { href: "/area/osaka", label: "大阪のAIO対策", desc: "大阪エリアの対応実績" },
  { href: "/blog/schema-guide", label: "Schema実装ブログ", desc: "JSON-LD実装の実践ガイド" },
];

export default function OrganizationDataPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/aio" className="hover:underline" style={{ color: "#6B7280" }}>AIO対策</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>Organization構造化データ</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Organization Schema
            </p>
            <h1 className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              Organization構造化データ<br />AIO・SEO対策の基盤
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              Organization Schemaは会社情報をGoogleとAIが機械的に理解できるJSON-LD形式で記述する構造化データです。
              ナレッジグラフ登録・ナレッジパネル表示・AI引用率向上のすべてに関わる、AIO対策の基礎的な実装です。
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

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_19_44.jpg"
            alt="Organization構造化データ・JSON-LD実装のデジタルイメージ"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.18)" }} />
        </section>

        {/* Organizationスキーマとは */}
        <section className="py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                Overview
              </p>
              <h2 className="font-black text-[28px] leading-tight mb-8" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
                Organizationスキーマとは
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                Organization SchemaはSchema.orgで定義された構造化データの一種で、企業・団体に関する情報を
                機械可読な形式で記述します。JSON-LDとしてHTMLのheadタグ内に実装することで、
                GoogleのクローラーとAIが会社情報を正確に解析・記録できるようになります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                これはGoogleのナレッジグラフへの情報浸透に直接貢献し、ブランド名検索時のナレッジパネル表示、
                AI検索での企業引用精度の向上、そしてLocalBusiness Schemaとの組み合わせによる
                ローカルSEO強化にも繋がります。AIO対策の最初の一歩として最優先で実装すべき施策です。
              </p>
            </div>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-24" style={{ background: "#FFFFFF" }}>
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
                  "Organization / LocalBusiness スキーマの違いと使い分け方",
                  "JSON-LD形式で実装すべき必須・推奨プロパティの全リスト",
                  "sameAsリストの整備方法とナレッジグラフ登録への影響",
                  "代表者（Person Schema）の構造化によるE-E-A-T強化のポイント",
                  "業種別（医療・法律・飲食・教育など）のスキーマ活用パターン",
                  "実装後のバリデーション方法と継続的な効果測定の指標",
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

        {/* 主要情報 */}
        <section className="py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Required Fields
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              Organizationスキーマに含める主要情報
            </h2>
            <div className="max-w-3xl">
              {ITEMS.map((item) => (
                <div key={item.num} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
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
              業種によって使用すべきスキーマタイプと記述すべきプロパティが異なります
            </p>
            <div className="max-w-4xl">
              {INDUSTRIES.map((ind) => (
                <div key={ind.num} className="flex gap-6 py-7" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{ind.num}</span>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                      <h3 className="font-bold text-[16px]" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>{ind.industry}</h3>
                      <span className="text-[11px] px-2 py-0.5" style={{ background: "#FFFFFF", color: "#6B7280", border: "1px solid #E8E4DC" }}>
                        {ind.schema}
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

        {/* 実装方法 */}
        <section className="py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                Implementation
              </p>
              <h2 className="font-black text-[28px] mb-8" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
                実装方法
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                Organization SchemaはJSON-LDとして実装するのが推奨形式です。HTMLのheadタグ内に
                {"<script type=\"application/ld+json\">"}タグで囲み、スキーマオブジェクトを記述します。
                Next.jsではlayout.tsxのheadセクション、WordPressではfunctions.phpへの追記か専用プラグインで実装します。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                実装後はGoogleの「リッチリザルトテスト」または「スキーママークアップバリデーター」で
                エラーなく認識されているか確認します。Google Search ConsoleのEnhancementsタブでも
                構造化データの状態を確認できます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                サイプレスではOrganization Schema・LocalBusiness Schema・Person Schemaの
                実装から検証・継続的な情報更新まで、構造化データ対応をワンストップで支援します。
              </p>
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
              Organization Schema実装の効果は以下の指標で確認します
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

        <FaqSection items={FAQ_ITEMS} heading="Organization構造化データに関するよくある質問" bgColor="#F9F8F5" />

        <RelatedPages links={RELATED_LINKS} />

        <PageContactCTA
          heading="Organization構造化データの実装はサイプレスへ"
          body="JSON-LDによるOrganization Schema実装・ナレッジグラフ登録支援・構造化データの継続管理をご提案します。現状のSchema実装状況を無料で診断します。"
        />
      </main>
      <Footer />
    </>
  );
}

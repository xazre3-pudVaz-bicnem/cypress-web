import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "エンティティ最適化｜Googleナレッジグラフ対策｜株式会社サイプレス",
  description:
    "エンティティ最適化でGoogleナレッジグラフに登録され、AI検索に引用される企業へ。会社・サービス・人物情報の一貫性整備からOrganizationスキーマ実装まで解説。",
  keywords: ["エンティティ最適化", "ナレッジグラフ", "AIO対策", "Organizationスキーマ", "AI検索", "エンティティSEO"],
  openGraph: {
    title: "エンティティ最適化｜Googleナレッジグラフ対策｜株式会社サイプレス",
    description: "エンティティ最適化によるナレッジグラフ登録とAI引用率向上の戦略を解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/aio/entity-optimization" },
};

const MEASURES = [
  {
    num: "01",
    title: "会社名・代表者名・サービス名の統一・一貫性",
    body: "Webサイト・SNS・プレスリリース・業界メディアなど、すべてのオンライン上の情報で会社名・代表者名・サービス名・住所・電話番号を完全に統一します。表記ゆれ（株式会社とKK、略称と正式名称の混在）はエンティティの認識精度を低下させます。",
  },
  {
    num: "02",
    title: "Organizationスキーマでの正確な情報記述",
    body: "JSON-LDでOrganization Schemaを実装し、会社名・URL・ロゴ・住所・電話番号・事業内容・代表者情報・SNSリンクをGoogleとAIが機械的に読み取れる形式で提供します。構造化データはナレッジグラフへの情報浸透を大幅に加速させます。",
  },
  {
    num: "03",
    title: "Googleナレッジグラフへの登録",
    body: "Googleナレッジグラフは、Googleが認識する「実体」のデータベースです。ナレッジグラフに登録されることで、ブランド名検索時にサイドパネル（ナレッジパネル）が表示されます。登録には構造化データの実装・権威サイトへの掲載・情報の一貫性確保が重要です。",
  },
  {
    num: "04",
    title: "ウィキペディア・権威サイトへの掲載",
    body: "ウィキペディアへの掲載はナレッジグラフへの登録に最も効果的なシグナルです。また業界団体・地域商工会・公的機関・権威あるニュースサイトへの掲載も、エンティティとしての認識精度向上に貢献します。",
  },
  {
    num: "05",
    title: "複数メディアへの一貫した情報発信",
    body: "プレスリリース・SNS公式アカウント・業界メディアへの寄稿・ポッドキャスト出演など、複数のメディア・チャネルで同一の情報を継続的に発信することで、Googleのエンティティ認識精度が高まります。",
  },
  {
    num: "06",
    title: "関連エンティティとの接続（地域・業界・人物）",
    body: "自社エンティティを地域（所在地市区町村）・業界（業種・サービスカテゴリ）・関連人物（代表者・スタッフ）などの関連エンティティとリンクさせることで、ナレッジグラフ内での位置付けが明確になります。内部リンク設計・sameAsリンク・Person Schemaの実装が有効です。",
  },
];

const CHALLENGES = [
  {
    num: "01",
    title: "エンティティとは何かを理解していない",
    body: "エンティティ最適化を始めようとしても「エンティティ」の概念自体が抽象的で、何から手をつければよいかわからないケースが多くあります。まずGoogleが「実体」として認識する企業・人物・場所・製品の概念を理解し、自社がどのエンティティタイプに該当するかを明確にすることが出発点です。",
  },
  {
    num: "02",
    title: "Organization/LocalBusinessスキーマが未実装",
    body: "サイトに会社概要ページがあっても、JSON-LDによる構造化データが実装されていないため、GoogleとAIが機械的に会社情報を読み取れない状態になっています。OrganizationまたはLocalBusinessスキーマを実装するだけで、エンティティ認識が大幅に改善します。",
  },
  {
    num: "03",
    title: "Googleナレッジパネルがない",
    body: "ブランド名で検索しても右側にナレッジパネルが表示されない場合、Googleがまだエンティティとして認識していないサインです。権威性の高い情報源への掲載・構造化データの実装・情報の一貫性を組み合わせることでナレッジパネルの表示を目指せます。",
  },
  {
    num: "04",
    title: "Wikidata/Wikipediaに掲載されていない",
    body: "Wikidataへの登録はナレッジグラフへの直接的なシグナルとして機能します。Wikipediaへの掲載と合わせて検討すべきですが、特定の基準（特筆性）を満たす必要があります。まずWikidataへの登録から着手し、公式サイトのsameAsにWikidata URLを設定することが有効です。",
  },
  {
    num: "05",
    title: "SNS公式アカウントのsameAsが未設定",
    body: "X（Twitter）・Facebook・Instagram・LinkedInなどの公式アカウントURLをOrganizationスキーマのsameAsプロパティに列挙することで、Googleが「これらはすべて同一の企業」と正確に認識できます。sameAsが未設定だとSNSとWebサイトの企業情報が分断されてしまいます。",
  },
  {
    num: "06",
    title: "代表者・所在地・設立年などの構造化情報がない",
    body: "代表者名（Person Schema）・所在地（PostalAddress）・設立年（foundingDate）・従業員数（numberOfEmployees）などの詳細情報が構造化されていないと、Googleが会社の全体像を把握できません。これらの情報は会社概要ページとJSON-LDの両方で明示的に提供することが重要です。",
  },
  {
    num: "07",
    title: "一貫したブランド名・ロゴの使用ができていない",
    body: "ドメイン名・SNSアカウント名・プレスリリース・業界メディア記事でブランド名の表記が統一されていないと、Googleがエンティティとして同一視できません。「株式会社サイプレス」「サイプレス」「Cypress」が混在している場合、正式名称への統一と表記ルールの策定が先決です。",
  },
  {
    num: "08",
    title: "サイテーションが少ない",
    body: "サイテーション（他サイトでの自社名・住所・電話番号の言及）の量と質がエンティティ認識の強度に影響します。業界団体・商工会議所・地域メディアなど信頼性の高いサイトでの言及を増やすことで、エンティティとしての権威性が向上します。",
  },
  {
    num: "09",
    title: "関連エンティティとの関連付けがない",
    body: "自社エンティティが地域・業界・関連人物などの他エンティティと接続されていないと、ナレッジグラフ内での文脈が乏しくなります。代表者のPerson Schema実装・所在地域のLocalBusinessリンク・業界カテゴリとの接続を通じて、エンティティのネットワークを構築します。",
  },
  {
    num: "10",
    title: "多言語対応なし",
    body: "海外展開を検討している企業や外国人顧客が多い業種では、英語や他言語でのエンティティ情報が不足しているためグローバルなエンティティ認識が弱くなります。hreflangタグの実装・英語版会社情報ページの作成・英語でのWikidata記述が対策として有効です。",
  },
];

const INDUSTRIES = [
  {
    num: "01",
    industry: "士業 / 法律事務所",
    point: "法人エンティティの確立",
    detail: "事務所名・代表弁護士・取扱分野をOrganizationスキーマとPerson Schemaで構造化します。弁護士会への登録情報との一貫性確保と、法律専門メディアへの掲載がエンティティ認識を高めます。",
  },
  {
    num: "02",
    industry: "医療機関",
    point: "医師・病院エンティティの構造化",
    detail: "病院名・診療科目・院長情報をMedicalOrganizationスキーマで実装します。厚生労働省や都道府県の医療機関情報との整合性が権威性シグナルとして機能します。",
  },
  {
    num: "03",
    industry: "飲食店",
    point: "地域ビジネスエンティティ",
    detail: "店名・住所・営業時間・ジャンルをLocalBusinessおよびFoodEstablishmentスキーマで実装します。Googleビジネスプロフィールとの完全な一貫性維持が、地域エンティティ認識の核心です。",
  },
  {
    num: "04",
    industry: "著名人 / インフルエンサー",
    point: "人物エンティティの確立",
    detail: "Person Schemaで氏名・職業・活動実績・公式SNSリンクをsameAsで接続します。メディア掲載・インタビュー記事・公式プロフィールページの充実が人物エンティティの権威性を高めます。",
  },
  {
    num: "05",
    industry: "教育機関",
    point: "学校法人エンティティ",
    detail: "EducationalOrganizationスキーマで学校名・所在地・教育プログラム・資格情報を構造化します。文部科学省や学校法人情報との整合性が信頼性シグナルとして機能します。",
  },
  {
    num: "06",
    industry: "IT企業 / SaaS",
    point: "製品・サービスエンティティ",
    detail: "SoftwareApplicationスキーマで製品名・機能・価格・対応プラットフォームを構造化します。TechCrunchや業界レビューサイト（G2・Capterra等）への掲載がエンティティ権威性を強化します。",
  },
  {
    num: "07",
    industry: "地域ビジネス",
    point: "LocalBusinessエンティティ",
    detail: "NAP（Name・Address・Phone）情報を全チャネルで統一し、LocalBusinessスキーマで詳細情報を提供します。地域メディア・商工会議所・地域ポータルサイトへの掲載がエンティティ強化の要です。",
  },
  {
    num: "08",
    industry: "EC / ブランド",
    point: "商品・ブランドエンティティ",
    detail: "BrandスキーマおよびProductスキーマで商品名・ブランド情報・GTIN・価格帯を構造化します。Amazon・楽天などECプラットフォームとの情報一貫性と、ブランドメディア掲載が重要です。",
  },
];

const FLOW = [
  { num: "01", step: "自社エンティティ現状確認（ナレッジパネル有無）", detail: "会社名でGoogle検索し、ナレッジパネルの表示有無・内容を確認します。表示されていない場合は未登録または情報不足の状態です。" },
  { num: "02", step: "エンティティタイプ選定（Organization/LocalBusiness等）", detail: "自社の業態に最適なスキーマタイプ（Organization・LocalBusiness・MedicalOrganization等）を決定します。複合的な業態の場合は継承関係を確認します。" },
  { num: "03", step: "Organizationスキーマ実装（name/url/logo/sameAs等）", detail: "JSON-LDでOrganizationスキーマを実装し、正式社名・URL・ロゴURL・住所・電話番号・事業内容・代表者情報を記述します。全ページのheadに配置します。" },
  { num: "04", step: "sameAsに公式SNS・Wikidata URL追加", detail: "X・Facebook・Instagram・LinkedIn・YouTubeなどの公式アカウントURLをsameAs配列に追加します。Wikidataエントリが存在する場合はそのURLも含めます。" },
  { num: "05", step: "Wikidata登録検討", detail: "自社がWikidataの特筆性基準を満たす場合、Wikidataエントリを作成し、公式サイトのsameAsと相互リンクします。Googleのナレッジグラフへの直接シグナルとして機能します。" },
  { num: "06", step: "メディア掲載・被リンク獲得", detail: "業界メディア・地域新聞・商工会議所・業界団体への掲載を増やし、権威性の高いサイトからの言及を確保します。プレスリリース配信も効果的です。" },
  { num: "07", step: "Google Search Consoleで確認", detail: "リッチリザルトテストツールでOrganizationスキーマのエラーがないことを確認します。Search Consoleの「拡張」レポートで構造化データの状態を定期的に監視します。" },
  { num: "08", step: "ナレッジグラフ反映確認", detail: "対策開始から数週間〜数ヶ月後にナレッジパネルの表示・内容変化を確認します。ナレッジパネルに誤情報がある場合は「フィードバックを送信」から修正を申請します。" },
  { num: "09", step: "エンティティ情報の継続更新", detail: "役員交代・住所変更・新サービス追加などの際は、すべてのチャネル（サイト・SNS・スキーマ）を同時に更新し、情報の一貫性を維持します。" },
  { num: "10", step: "関連エンティティとの連携", detail: "代表者のPerson Schema・所在地域のLocalBusinessリンク・取引先や業界団体との接続を通じて、ナレッジグラフ内のエンティティネットワークを段階的に構築します。" },
];

const KPIS = [
  { num: "01", kpi: "ナレッジパネル表示有無", where: "Google検索（ブランド名）", detail: "自社名を直接検索したときに右側（PCの場合）にナレッジパネルが表示されるかを定期確認します。" },
  { num: "02", kpi: "sameAs登録サイト数", where: "OrganizationスキーマのsameAs配列", detail: "sameAsに登録されているURL数を追跡し、SNS・Wikidata・業界プロフィールページの追加状況を管理します。" },
  { num: "03", kpi: "Organizationスキーマエラー数", where: "Google Search Console（拡張レポート）", detail: "構造化データのエラー・警告数をゼロに保つことを目標とします。エラーがあるとエンティティ認識の精度が下がります。" },
  { num: "04", kpi: "ブランド名検索のCTR", where: "Google Search Console（検索パフォーマンス）", detail: "ブランドキーワードのCTRは自社エンティティの信頼性と表示品質を反映します。ナレッジパネル表示後はCTRが向上する傾向があります。" },
  { num: "05", kpi: "AI検索での言及回数", where: "ChatGPT・Gemini・Perplexityへの手動クエリ", detail: "業界関連の質問を生成AIに投げ、自社が言及されるかを定期的に確認します。言及頻度の変化をトラッキングします。" },
  { num: "06", kpi: "権威性サイトからの被リンク数", where: "Google Search Console / Ahrefs / SEMrush", detail: "新聞社・業界団体・官公庁など権威性の高いドメインからの被リンク数を追跡します。エンティティの権威性評価に直結します。" },
  { num: "07", kpi: "エンティティ関連キーワードの表示回数", where: "Google Search Console（検索パフォーマンス）", detail: "社名・代表者名・主要サービス名での検索表示回数を月次で追跡し、エンティティ認識の広がりを把握します。" },
];

const FAQ_ITEMS = [
  {
    q: "エンティティ最適化はSEOとどう違いますか？",
    a: "従来のSEOがキーワードを中心に最適化するのに対し、エンティティ最適化は「実体（企業・人・場所・サービス）」をGoogleとAIが正確に認識・理解するよう最適化します。AI検索時代では、エンティティとしての認識が引用・推薦に直結するため、AIO対策の中核的な施策です。",
  },
  {
    q: "ナレッジグラフへの登録に審査はありますか？",
    a: "Googleに直接申請する仕組みはなく、権威性の高い情報源への掲載・構造化データの実装・情報の一貫性がGoogleのアルゴリズムによって評価され、自動的に登録されます。通常、対策開始から数ヶ月〜半年程度で変化が確認できる場合が多いです。",
  },
  {
    q: "中小企業でもエンティティ最適化は意味がありますか？",
    a: "はい。大企業でなくても地域・業界内でのエンティティ認識を高めることは可能です。特に地域ビジネスでは、LocalBusiness Schemaの実装・Googleビジネスプロフィールとの整合・地域メディアへの掲載でエンティティ登録を実現しているケースが多くあります。",
  },
  {
    q: "エンティティ最適化の効果はどうやって測定しますか？",
    a: "ナレッジパネルの表示確認・AI検索での自社言及頻度・ブランドキーワードの検索結果品質・被リンクの質的向上などを測定指標として使用します。当社では月次レポートでエンティティ関連指標を継続的に追跡します。",
  },
  {
    q: "既存のウェブサイトに後からエンティティ最適化を追加できますか？",
    a: "はい。既存サイトへのOrganization Schemaの追加・会社情報ページの充実・NAP情報の統一・SNSアカウントのsameAsリンク追加は、既存サイトでも即座に実施できます。構造化データは技術的な実装変更のみで対応可能です。",
  },
  {
    q: "Wikidataへの登録は自分でできますか？",
    a: "Wikidataはオープンな知識ベースで、誰でも編集・登録できます。ただし特筆性のない企業を登録しても削除される場合があります。公式Webサイトや会社情報ページのURLをsameAsとして正確に記述し、参照元となる信頼性の高い情報源を揃えてから登録するのが確実です。",
  },
  {
    q: "sameAsにはどのURLを設定すればよいですか？",
    a: "X（Twitter）・Facebook・LinkedIn・Instagram・YouTubeなどの公式SNSアカウントURL、Wikidataエントリ、業界団体プロフィールページ、Googleビジネスプロフィールのプレイスページなどが代表的です。公式ドメインで管理されているアカウントのみを設定します。",
  },
  {
    q: "OrganizationスキーマとLocalBusinessスキーマはどちらを使えばよいですか？",
    a: "物理的な店舗や事務所を持ち、地域の顧客を対象とするビジネスはLocalBusinessを使用します。LocalBusinessはOrganizationを継承しているため、より詳細な地域情報（営業時間・地図座標等）を付加できます。全国・グローバル展開の企業はOrganizationが適しています。",
  },
  {
    q: "ナレッジパネルに誤った情報が表示されています。修正できますか？",
    a: "ナレッジパネルの「フィードバックを送信」ボタンから修正を申請できます。ただし、Googleが情報源とみなしているサイト（Wikipedia・公式サイト等）の情報を正確に更新することが根本的な解決策です。申請だけでは反映されない場合も多くあります。",
  },
  {
    q: "Person Schemaも実装した方がよいですか？",
    a: "代表者・専門家・著名な社員が在籍する場合は、Person Schemaの実装を強く推奨します。代表者の名前・肩書・所属・SNSリンクを構造化することで、企業エンティティと人物エンティティが連携し、権威性シグナルが強化されます。",
  },
  {
    q: "エンティティ最適化はAIチャットボット（ChatGPT等）にも効果がありますか？",
    a: "はい。ChatGPT・Geminiのような生成AIは学習データとしてWebコンテンツを使用しており、エンティティとして明確に認識されている企業の情報が学習・引用される確率が高まります。特にリアルタイム検索を行うPerplexity・Gemini検索ではエンティティ最適化の効果が直接的に現れます。",
  },
  {
    q: "競合他社もエンティティ最適化を行っている場合、差別化はできますか？",
    a: "エンティティの深さと関連情報の豊富さで差別化できます。代表者のPerson Schema・受賞歴・メディア掲載・業界団体所属・専門性の証明（資格・認定等）など、競合が設定していない詳細情報を充実させることで、ナレッジグラフ内での優位性を確立できます。",
  },
  {
    q: "エンティティ最適化に費用はどのくらいかかりますか？",
    a: "Organizationスキーマの実装・会社情報の整備・sameAs設定などは、既存サイトへの追加実装として比較的低コストで対応可能です。一方、メディア掲載獲得・Wikidata登録・継続的なサイテーション構築には時間と専門知識が必要です。当社では調査から実装まで一貫してご支援します。",
  },
  {
    q: "エンティティ最適化の効果が出るまでどのくらいかかりますか？",
    a: "構造化データの実装はSearch Consoleで数週間以内に認識されます。ナレッジパネルの出現には通常3〜6ヶ月かかる場合が多く、権威サイトへの掲載・サイテーション構築などの施策は継続的に行うことで徐々に効果が積み上がります。",
  },
  {
    q: "GoogleビジネスプロフィールとOrganizationスキーマは両方必要ですか？",
    a: "はい、両方必要です。Googleビジネスプロフィールはローカル検索（マップ・地図検索）でのエンティティ認識を担い、OrganizationスキーマはWebサイト全体を通じた構造化情報の提供を担います。両者の情報（社名・住所・電話番号）を完全に一致させることが重要です。",
  },
  {
    q: "SNSのフォロワー数はエンティティ認識に影響しますか？",
    a: "フォロワー数そのものよりも、公式アカウントが存在し、アクティブに運用され、sameAsで自社サイトと接続されていることが重要です。アカウントの認証バッジ取得も信頼性シグナルとして機能します。",
  },
  {
    q: "エンティティ最適化はECサイトにも有効ですか？",
    a: "有効です。BrandスキーマやOrganizationスキーマで企業・ブランド情報を構造化し、ProductスキーマでGTIN・価格・レビューを実装することで、GoogleショッピングとAI検索の両方でエンティティ認識が向上します。特に自社ブランド商品はブランドエンティティの確立が差別化につながります。",
  },
  {
    q: "多拠点・フランチャイズの場合はどうすればよいですか？",
    a: "本部のOrganizationスキーマを親エンティティとして設置し、各拠点にLocalBusinessスキーマを実装してpartOfOrganizationで親子関係を表現します。各拠点のGoogleビジネスプロフィールも独立して管理し、情報の一貫性を維持します。",
  },
  {
    q: "エンティティ最適化はローカルSEO（MEO）と連動しますか？",
    a: "強く連動します。LocalBusinessスキーマとGoogleビジネスプロフィールの情報一致はMEO対策の基本であり、同時にエンティティ最適化でもあります。地域名・業種・NAP情報の完全一致が、ローカル検索とAI検索の両方でエンティティ認識を強化します。",
  },
  {
    q: "エンティティ最適化で自社のAI回答内での順位は変わりますか？",
    a: "AI検索には従来の検索順位とは異なる「引用される・されない」という概念があります。エンティティとして明確に認識されている企業は、関連する質問への回答で言及される確率が高まります。AI回答での出現頻度を高めるためにも、エンティティ最適化は重要な基盤となります。",
  },
];

const RELATED_LINKS = [
  { href: "/aio", label: "AIO対策", desc: "AI検索最適化の全体戦略" },
  { href: "/aio/structured-data", label: "構造化データ", desc: "Schema.org実装ガイド" },
  { href: "/aio/organization-data", label: "Organization構造化データ", desc: "企業情報の構造化" },
  { href: "/aio/knowledge-graph", label: "ナレッジグラフ対策", desc: "Googleへの認識登録" },
  { href: "/aio/faq-optimization", label: "FAQ最適化", desc: "AI引用されるFAQ設計" },
  { href: "/aio/chatgpt", label: "ChatGPT対策", desc: "ChatGPTに引用される情報設計" },
  { href: "/aio/gemini", label: "Gemini対策", desc: "Google AI検索への最適化" },
  { href: "/aio/perplexity", label: "Perplexity対策", desc: "Perplexity AI引用対策" },
  { href: "/aio/eeat", label: "E-E-A-T対策", desc: "経験・専門性・権威性・信頼性" },
  { href: "/aio/topical-authority", label: "トピカルオーソリティ", desc: "専門性の確立と維持" },
  { href: "/aio/local-seo", label: "ローカルSEO連携", desc: "地域エンティティの構築" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "サービス内容と料金" },
  { href: "/seo", label: "SEO対策", desc: "検索エンジン最適化の全体戦略" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "サイト構造・速度の最適化" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "検索流入を増やすコンテンツ戦略" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップ・地図検索対策" },
  { href: "/services/web-design", label: "Webデザイン", desc: "高品質サイト制作" },
  { href: "/services/lp", label: "LP制作", desc: "CV最大化のランディングページ" },
  { href: "/industry/medical", label: "医療機関向け", desc: "医師・病院エンティティ設計" },
  { href: "/industry/legal", label: "士業向け", desc: "法律事務所のエンティティ対策" },
  { href: "/industry/restaurant", label: "飲食店向け", desc: "地域ビジネスエンティティ" },
  { href: "/industry/education", label: "教育機関向け", desc: "学校法人エンティティ構造化" },
  { href: "/area/tokyo", label: "東京のAIO対策", desc: "東京エリアの施策事例" },
  { href: "/area/osaka", label: "大阪のAIO対策", desc: "大阪エリアの施策事例" },
];

export default function EntityOptimizationPage() {
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
              <span style={{ color: "#0F172A" }}>エンティティ最適化</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Entity Optimization
            </p>
            <h1 className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              エンティティ最適化<br />Googleナレッジグラフ対策
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              Googleやすべての生成AIが認識する「実体（エンティティ）」として自社を確立することが、
              AIO対策の根幹です。曖昧な情報より明確なエンティティが引用される時代に向けて、
              最適化を進めましょう。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_20_52.jpg"
            alt="エンティティ最適化・ナレッジグラフ対策のデジタルイメージ"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.18)" }} />
        </section>

        {/* このページでわかること */}
        <section className="py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                On This Page
              </p>
              <h2 className="font-black text-[28px] leading-tight mb-10" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
                このページでわかること
              </h2>
              <ul className="space-y-4">
                {[
                  "エンティティとは何か、なぜAIO対策の根幹となるのかの基礎知識",
                  "Googleナレッジグラフへ登録されるための具体的な手順と要件",
                  "OrganizationスキーマおよびLocalBusinessスキーマの実装方法",
                  "sameAsプロパティによるSNS・Wikidata接続の設定方法",
                  "業種別（士業・医療・飲食・IT等）のエンティティ最適化ポイント",
                  "エンティティ最適化の効果を測定するための7つのKPI",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] leading-[1.8]" style={{ color: "#374151" }}>
                    <span className="shrink-0 font-bold" style={{ color: "#c4b89a" }}>→</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* エンティティとは */}
        <section className="py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                What is Entity
              </p>
              <h2 className="font-black text-[28px] leading-tight mb-8" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
                エンティティとは
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                エンティティとは、GoogleやAIが認識する「実体」のことです。会社・人物・場所・サービス・製品など、
                現実世界に存在する「もの」や「概念」がエンティティとして扱われます。
                Googleはキーワードの羅列ではなく、エンティティとエンティティの関係性を理解することで
                検索結果の精度を高めています。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                AI検索では、このエンティティ認識がさらに重要になります。「○○業界でおすすめの会社は？」という
                質問に対してAIが回答する際、明確なエンティティとして認識されている企業が優先的に言及されます。
                エンティティとして認識されることは、AI引用の前提条件です。
              </p>
            </div>
          </div>
        </section>

        {/* エンティティ最適化の重要性 */}
        <section className="py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                Why It Matters
              </p>
              <h2 className="font-black text-[28px] mb-8" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
                エンティティ最適化の重要性
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                AI検索は「キーワードに最も近いページ」ではなく「質問に最も正確に回答できる情報源」を選びます。
                そのため、明確なエンティティとして確立されていない企業・サービスは、
                AI検索結果での言及頻度が低くなります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                Googleナレッジグラフへの登録・Organizationスキーマの実装・情報の一貫性確保によって、
                GoogleとAIの両方が「この会社はこういう企業で、こういうサービスを提供している」と
                正確に理解できる状態を作ることがエンティティ最適化の目標です。
              </p>
            </div>
          </div>
        </section>

        {/* よくある課題と原因 */}
        <section className="py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Common Challenges
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              よくある課題と原因
            </h2>
            <div className="max-w-3xl">
              {CHALLENGES.map((item) => (
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

        {/* エンティティ最適化の施策 */}
        <section className="py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Key Measures
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              エンティティ最適化の施策
            </h2>
            <div className="max-w-3xl">
              {MEASURES.map((item) => (
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

        {/* 業種別の活用ポイント */}
        <section className="py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              By Industry
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              業種別の活用ポイント
            </h2>
            <div className="max-w-3xl">
              {INDUSTRIES.map((item) => (
                <div key={item.num} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-bold text-[16px]" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>{item.industry}</h3>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded" style={{ background: "#F9F8F5", color: "#c4b89a", border: "1px solid #E8E4DC" }}>{item.point}</span>
                    </div>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 実装・改善フロー */}
        <section className="py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Implementation Flow
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              実装・改善フロー
            </h2>
            <div className="max-w-3xl">
              {FLOW.map((item) => (
                <div key={item.num} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <h3 className="font-bold text-[15px] mb-2" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>{item.step}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 成果を見るための指標 */}
        <section className="py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              KPIs to Track
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              成果を見るための指標
            </h2>
            <div className="max-w-3xl">
              {KPIS.map((item) => (
                <div key={item.num} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <div className="flex items-start gap-3 mb-2 flex-wrap">
                      <h3 className="font-bold text-[15px]" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>{item.kpi}</h3>
                      <span className="text-[11px] shrink-0" style={{ color: "#c4b89a" }}>確認場所：{item.where}</span>
                    </div>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={FAQ_ITEMS} heading="エンティティ最適化に関するよくある質問" bgColor="#F9F8F5" />

        <RelatedPages links={RELATED_LINKS} />

        <PageContactCTA
          heading="エンティティ最適化のご相談はサイプレスへ"
          body="Googleナレッジグラフ登録・Organizationスキーマ実装・情報一貫性の整備まで、エンティティ最適化を一貫して支援します。まずは現状診断からご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "NAP情報の統一｜MEO対策の基本｜株式会社サイプレス",
  description:
    "NAP（店舗名・住所・電話番号）の統一はMEO・SEO対策の基本中の基本。GBP・自社サイト・SNS・外部サービスのNAP不一致がGoogleの信頼度を下げる理由と、統一の対象・手順を詳しく解説。",
  keywords: ["NAP統一", "NAP情報", "MEO NAP", "Name Address Phone", "店舗名住所電話番号統一", "サイテーション統一"],
  openGraph: {
    title: "NAP情報の統一｜MEO対策の基本｜株式会社サイプレス",
    description: "NAP統一がSEO・MEOに与える影響と、統一対象・よくある不一致パターンを解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/nap" },
};

const napTargets = [
  {
    num: "01",
    title: "Googleビジネスプロフィール",
    body: "MEO対策の起点となるGBPのNAP情報はすべての基準となります。ここに登録した店舗名・住所・電話番号を「マスターデータ」として他のすべてのプラットフォームと一致させる方針で管理します。GBPの情報を変更した際は、他の媒体への反映を忘れず確認してください。",
  },
  {
    num: "02",
    title: "自社Webサイト",
    body: "自社ウェブサイトに記載の店舗名・住所・電話番号は、GBPと完全に一致させることが必須です。特にフッター・お問い合わせページ・アクセスページに掲載されている情報を確認します。LocalBusiness構造化データ（JSON-LD）も実装し、同一のNAP情報をコード内にも記述することで、検索エンジンへの信頼性シグナルが強まります。",
  },
  {
    num: "03",
    title: "各SNS（Instagram・X・LINE等）",
    body: "InstagramビジネスアカウントのプロフィールやX（旧Twitter）の店舗情報、LINE公式アカウントのビジネス情報欄に記載の住所・電話番号もGBPと一致させます。SNSのプロフィール欄は更新が見落とされやすい場所です。店舗移転・電話番号変更の際は必ずSNSの情報も更新してください。",
  },
  {
    num: "04",
    title: "食べログ・ホットペッパーなどの外部サービス",
    body: "飲食店であれば食べログ・ホットペッパーグルメ・ぐるなび、美容室であればホットペッパービューティー、医療機関であれば病院なびなど、業種別の予約・口コミサービスへの掲載情報もNAP統一の対象です。これらは多くのユーザーが利用する信頼性の高いプラットフォームであり、ここでの不一致はGoogleの評価に直接影響します。",
  },
  {
    num: "05",
    title: "地図サービス（Apple Maps・Yahoo!カーナビ等）",
    body: "Apple MapsやYahoo!カーナビ、MapFanなどの地図サービスにも事業者情報が登録されている場合があります。Apple Maps ConnectやYahoo!プレイスでオーナー申請を行い、NAP情報を正確に管理します。これらのサービスはGoogleとは別のユーザー層に利用されており、集客の多様化と情報統一の両面から重要です。",
  },
  {
    num: "06",
    title: "業界ポータル・ディレクトリサイト",
    body: "地域のタウンページ・iタウンページ、業界団体のディレクトリ、地域の商工会・商店街のウェブサイトに掲載されている情報もNAP統一の対象です。これらのサイテーション（外部サイトでのNAP言及）はGoogleのビジネス知名度評価を高める効果があります。掲載媒体の数・品質・NAP統一状態をまとめて管理するリストを作成することを推奨しています。",
  },
];

const commonIssues = [
  {
    num: "01",
    title: "ウェブサイトとGBPの住所表記が違う",
    body: "「1-2-3」と「1丁目2番3号」、「東京都渋谷区」と「渋谷区」など表記形式の違いはGoogleが同一住所と認識できない原因になります。GBPを正として、全サイトの住所表記を完全に統一することが基本対応です。",
  },
  {
    num: "02",
    title: "旧店名・旧住所が残っている",
    body: "リブランドや移転後に旧情報が一部のページに残り続けているケースは非常に多く見られます。特に内部リンクが少ないアクセスページや、過去に作成したランディングページに旧情報が埋もれていることがあります。全ページのテキスト検索で一括確認することが効率的です。",
  },
  {
    num: "03",
    title: "SNSプロフィールのNAPが古い",
    body: "店舗移転や電話番号変更のタイミングでGBPと自社サイトを更新したにもかかわらず、SNSのプロフィール欄の更新を忘れているケースが頻繁に発生します。Instagram・X・LINE・Facebookすべてのアカウントを対象に定期的に確認する手順を設けることが重要です。",
  },
  {
    num: "04",
    title: "ポータルサイトの情報を放置している",
    body: "食べログ・ホットペッパーなど第三者プラットフォームは、オーナー申請をしていないと自分では修正できません。古い電話番号や移転前の住所が長期間放置されているケースがあり、Googleのクロールによって誤情報が信頼性評価に影響します。オーナー申請の有無と情報の正確性を確認することが先決です。",
  },
  {
    num: "05",
    title: "電話番号の市外局番有無の揺れ",
    body: "「03-1234-5678」と「0312345678」、あるいは「+81-3-1234-5678」のように、同一番号でもフォーマットが媒体によって異なるケースがあります。ハイフンの有無・市外局番の有無・国際番号形式の違いをすべての媒体で統一することが必要です。",
  },
  {
    num: "06",
    title: "番地の漢数字・アラビア数字の混在",
    body: "「一丁目二番三号」と「1丁目2番3号」のように漢数字とアラビア数字が混在している場合、Googleが同一住所として照合できないことがあります。GBPに登録した表記形式に統一し、すべての媒体で同じフォーマットを使用することが原則です。",
  },
  {
    num: "07",
    title: "ビルの階数・部屋番号の記載漏れ",
    body: "オフィスビルや商業施設内の事業者が階数や部屋番号をGBPに記載しているのに、自社サイトの住所欄では省略しているケースがあります。Googleはビル名・階数・部屋番号の有無も住所の一部として照合するため、すべての媒体で同一の詳細度で記載することが重要です。",
  },
  {
    num: "08",
    title: "フランチャイズで本部情報と混在",
    body: "フランチャイズ加盟店が本部のNAP情報（本部住所・本部電話番号）を自店舗のGBPに記載してしまうケースがあります。各店舗のGBPには必ずその店舗の実際の住所と電話番号を登録し、本部情報との混在を排除することが必要です。",
  },
  {
    num: "09",
    title: "引越し後の更新漏れ",
    body: "店舗移転の直後はGBPを更新するものの、移転から時間が経過するにつれて旧住所が掲載されたページや媒体が見つかることがあります。移転時にはNAP更新チェックリストを作成し、確認完了した媒体を記録する管理体制が重要です。",
  },
  {
    num: "10",
    title: "英語表記と日本語表記の混在",
    body: "多言語対応サイトや訪日外国人向けのページで英語の店舗名や住所を使用する場合、GBPの日本語NAP情報と表記が乖離することがあります。多言語ページにもLocalBusiness構造化データを実装し、言語ごとに適切なNAP情報を記述することで、Googleへの信頼性シグナルを担保できます。",
  },
];

const industryPoints = [
  {
    num: "01",
    industry: "飲食店（チェーン・フランチャイズ）",
    notes: "チェーン店・フランチャイズは本部と各店舗のNAP情報を明確に分離して管理する必要があります。各店舗のGBPには店舗固有の住所・電話番号を登録し、本部情報との混在を防ぐためのガイドラインを本部側で整備することが重要です。",
  },
  {
    num: "02",
    industry: "美容室（複数店舗展開）",
    notes: "複数店舗を展開する場合、店舗ごとのGBP・SNSアカウント・ホットペッパービューティー掲載ページのNAP情報をそれぞれ一致させる必要があります。店舗統廃合・移転のタイミングで旧情報が混在するリスクが高いため、変更時の更新手順を標準化しておくことが有効です。",
  },
  {
    num: "03",
    industry: "歯科・クリニック",
    notes: "法人名（医療法人○○会）と診療所名（○○クリニック）が異なる場合、GBPには患者が認識している診療所名を登録し、法人名は別途「組織名」欄で管理するのが適切です。病院なびや医療ポータルサイトへの掲載情報も定期確認の対象に含めることが必要です。",
  },
  {
    num: "04",
    industry: "建設・リフォーム（出張型）",
    notes: "現場に出張するビジネスは事務所住所と施工エリアが異なります。GBPには登記上または実際の事務所住所を正確に登録し、サービス提供エリアはGBPの「サービス提供地域」機能で別途設定することで、住所情報とエリア情報の混乱を防げます。",
  },
  {
    num: "05",
    industry: "士業（事務所名と個人名）",
    notes: "個人の士業は「○○法律事務所」という事務所名と「弁護士 ○○○○」という個人名の両方が各媒体に混在しがちです。GBPに登録する名称を統一の基準として定め、他のすべての媒体もその表記に揃えることが必要です。",
  },
  {
    num: "06",
    industry: "不動産（複数拠点）",
    notes: "本店・支店・営業所など複数拠点を持つ不動産会社は、各拠点のNAP情報が独立して管理される必要があります。共通の会社電話番号ではなく各拠点固有の電話番号を登録し、拠点ごとのGBPが正確に管理されていることを定期確認することが重要です。",
  },
  {
    num: "07",
    industry: "小売店（EC・実店舗統合）",
    notes: "実店舗とECサイトを運営する小売店は、ECサイトの会社情報ページに記載の住所・電話番号と実店舗のGBP情報を一致させることが必要です。ECサイトのフッターや特定商取引法表記ページも定期的なNAP確認の対象に含めることを推奨しています。",
  },
  {
    num: "08",
    industry: "学習塾（本部・各教室）",
    notes: "本部と各教室でそれぞれGBPを管理する場合、本部住所と各教室住所を明確に分離することが必要です。各教室のGBPには教室固有の住所・電話番号を登録し、塾のポータルサイト掲載情報も教室ごとに正確であることを確認することが重要です。",
  },
];

const implementationFlow = [
  { num: "01", step: "現在のNAP情報の棚卸し", detail: "GBP・自社サイト・SNS・主要ポータルサイトに掲載されているNAP情報を一覧化します。店舗名・住所・電話番号の3項目を媒体ごとに記録し、比較できる状態にします。" },
  { num: "02", step: "GBP情報の確認", detail: "GBP管理画面でビジネス名・住所・電話番号を正確に確認します。これをマスターデータとして設定し、他のすべての媒体の基準とします。" },
  { num: "03", step: "ウェブサイト全ページの確認", detail: "フッター・お問い合わせページ・アクセスページ・各サービスページ・LP など、NAP情報が記載されている可能性のある全ページを確認します。サイト内検索や全文テキスト抽出ツールを活用して漏れなく確認します。" },
  { num: "04", step: "SNS各社の確認", detail: "Instagram・X・Facebook・LINE公式アカウント・YouTube チャンネルなど、運営中のすべてのSNSアカウントのプロフィール欄を確認します。NAP情報の記載場所・表記をGBPと照合します。" },
  { num: "05", step: "ポータルサイトの確認", detail: "業種に対応する主要ポータルサイト（食べログ・ホットペッパー・病院なびなど）への掲載情報を確認します。オーナー申請の有無も確認し、未申請のサービスは申請を進めます。" },
  { num: "06", step: "不一致箇所のリスト化", detail: "GBPのマスターデータと各媒体の情報を比較し、不一致・表記揺れがある箇所をリスト化します。媒体名・不一致項目・現在の表記・修正後の表記を記録します。" },
  { num: "07", step: "GBPを正として情報を統一", detail: "リスト化した不一致箇所をGBPの表記に合わせて修正します。自社管理のサイト・SNSから優先的に修正し、第三者プラットフォームはオーナー申請経由で修正申請を行います。" },
  { num: "08", step: "各サイトの修正を順次実施", detail: "自社サイト → SNS → 主要ポータルサイト → その他ディレクトリの順で修正を進めます。修正完了した媒体と修正日をリストに記録します。" },
  { num: "09", step: "修正完了の確認", detail: "修正後、各媒体の反映状況を再確認します。第三者プラットフォームへの修正申請は反映まで数日〜数週間かかる場合があるため、定期的にフォローアップします。" },
  { num: "10", step: "定期監視の設定", detail: "月次でNAP情報の確認を行うスケジュールを設定します。移転・電話番号変更・リブランドが発生した際の更新手順をチェックリスト化し、担当者が変わっても対応できる体制を整えます。" },
];

const kpis = [
  { num: "01", kpi: "NAP一致率（確認済みサイト数）", where: "棚卸しリストに基づき、確認済み媒体数のうちGBPと一致している媒体数の割合を手動集計します。目標は確認済み媒体の100%一致です。" },
  { num: "02", kpi: "GBPオーナー確認ステータス", where: "GBP管理画面で「確認済み」バッジが表示されていることを確認します。未確認の場合は電話・ハガキ・ビデオ確認のいずれかで確認を完了させます。" },
  { num: "03", kpi: "ポータルサイト登録数", where: "業種に対応する主要ポータルサイトへの掲載媒体数をリストで管理します。NAP統一が完了している媒体のみをカウントします。" },
  { num: "04", kpi: "NAP不一致検出数", where: "月次確認で発見されたNAP不一致の件数を記録します。この数値が継続的に減少していることが改善の指標になります。" },
  { num: "05", kpi: "ローカル引用スコア", where: "BrightLocal・Moz Localなどのツールで計測できるサイテーション強度スコアを参照します。NAP統一の精度が高いほどスコアが向上します。" },
  { num: "06", kpi: "月次NAP確認頻度", where: "月次でNAP確認を実施できているかを運用記録で管理します。確認サイクルを守ることが情報の鮮度維持につながります。" },
  { num: "07", kpi: "サイテーション獲得数", where: "信頼性の高い外部サイトにNAP情報が掲載されている件数を管理します。新規ポータルサイトへの掲載申請・ディレクトリ登録を通じて継続的に増やすことがMEO知名度評価の向上につながります。" },
];

const faqItems = [
  {
    q: "NAPの表記揺れとはどういうことですか？",
    a: "同一の情報を異なる表記で記載している状態を指します。例えば「東京都渋谷区渋谷1-2-3」と「渋谷区渋谷1丁目2番3号」、「03-1234-5678」と「0312345678」、「株式会社サイプレス」と「サイプレス」のように、情報は同じでも表記形式が異なる場合です。Googleは表記揺れを異なる情報と判断することがあり、信頼性の低下につながります。",
  },
  {
    q: "NAP統一はどのくらいSEO・MEOに影響しますか？",
    a: "NAP統一はMEOの「知名度（Prominence）」評価に影響します。複数のサイトで一貫したNAP情報が確認できるビジネスは、Googleから「確度の高い情報を持つ信頼できるビジネス」と評価されます。逆に不一致が多い場合、Googleがどの情報が正確かを判断できず、評価が下がります。即効性は低いですが、MEO対策の基盤として必ず整備すべき要素です。",
  },
  {
    q: "移転・電話番号変更後のNAP更新はどうすれば良いですか？",
    a: "変更が決まったら、できるだけ早くGBPを更新することが最優先です。その後、自社ウェブサイト→SNS→外部サービスの順で更新します。すべての媒体への反映をチェックリストで管理することを推奨しています。食べログ・ホットペッパーなど第三者プラットフォームは、オーナー申請をしていないと修正できない場合があるため、事前に申請状態を確認しておくことが重要です。",
  },
  {
    q: "どのプラットフォームのNAP統一を優先すべきですか？",
    a: "優先度は①Googleビジネスプロフィール→②自社ウェブサイト→③業界主要プラットフォーム（食べログ・ホットペッパーなど）→④SNS→⑤その他ディレクトリの順です。特にドメイン権威の高いプラットフォームほど影響が大きいため、まず主要媒体のNAP統一を完了させてから範囲を広げていきます。",
  },
  {
    q: "NAP統一の確認・監査はどのように行いますか？",
    a: "まず自社名・住所・電話番号でGoogle検索を行い、表示される外部サイトの情報を確認します。Moz Local・BrightLocal・Yextなどのツールを使うと複数プラットフォームの一括確認が効率的です。サイプレスではMEO監査サービスの中でNAP統一状況の調査・修正対応を提供しています。",
  },
  {
    q: "NAPはName・Address・Phoneの何文字目の略ですか？",
    a: "NAPはName（名前）・Address（住所）・Phone（電話番号）の頭文字を取った略称です。ローカルSEO・MEO分野で国際的に使われている用語で、日本では「店舗名・住所・電話番号」と訳されることが一般的です。ビジネスのオンライン上の「基本情報」として、これら3つの統一管理が重視されています。",
  },
  {
    q: "NAPが統一されていないとGoogleマップに悪影響がありますか？",
    a: "あります。Googleはウェブ上の複数ソースからビジネス情報を収集し、信頼性を評価します。NAP情報が媒体ごとに異なっていると、Googleがどの情報を正として採用すべきか判断できなくなり、GBPの信頼性評価（Prominence）が下がります。これはローカルパックでの表示順位にも直接影響します。",
  },
  {
    q: "食べログのオーナー申請はどうすれば良いですか？",
    a: "食べログのオーナー申請は「食べログ店舗会員」として申請ページから行います。電話確認または書類確認でオーナーであることを証明する手順が必要です。申請完了後は店舗名・住所・電話番号・営業時間などを正確に更新し、GBPの情報と一致させることが重要です。",
  },
  {
    q: "構造化データ（JSON-LD）にもNAP情報を入れる必要がありますか？",
    a: "推奨しています。自社ウェブサイトにLocalBusiness構造化データを実装し、GBPと同一のNAP情報をJSON-LD形式で記述することで、検索エンジンへの明示的な信頼性シグナルになります。特にGBPのNAP情報とウェブサイトの構造化データが一致していると、Googleが情報を正しく認識しやすくなります。",
  },
  {
    q: "フリーダイヤルと固定電話はどちらをGBPに登録すべきですか？",
    a: "GBPのプライマリ電話番号には固定電話番号を登録することを推奨しています。フリーダイヤルはGoogleがGBPに紐づけにくい場合があり、また通話トラッキングの目的でフリーダイヤルを使用する場合はGBPではなく自社サイト側で管理する方が適切です。GBPには実際の店舗に直接かかる番号を登録することが基本です。",
  },
  {
    q: "複数店舗をまとめて管理するツールはありますか？",
    a: "GoogleではGBPのビジネスグループ（旧「ビジネスアカウント」）機能を使うことで複数店舗のGBPを一元管理できます。外部ツールとしてはBrightLocal・Yext・Moz Localなどがあり、複数プラットフォームへのNAP一括登録・管理が可能です。サイプレスでも複数拠点のNAP管理支援を提供しています。",
  },
  {
    q: "NAP統一の効果が出るまでどのくらい時間がかかりますか？",
    a: "NAP統一はMEO順位に即効性があるものではなく、数週間〜数ヶ月単位で徐々に評価が改善します。GBPの信頼性が高まることでローカルパック表示の安定性が向上し、長期的な順位改善につながります。まずGBPと自社サイトの統一から着手し、外部媒体へと段階的に範囲を広げることで確実に効果を積み上げていきます。",
  },
  {
    q: "引越し前後のNAP管理で気をつけることはありますか？",
    a: "移転前に更新予定のNAP情報と更新対象媒体リストを準備しておくことが重要です。移転日の前後でGBP・自社サイトを優先的に更新し、外部媒体は移転後順次対応します。古い住所がGoogleマップに残ることで既存顧客が迷子になるリスクがあるため、特にGBP更新は移転と同日に完了させることが理想です。",
  },
  {
    q: "ビル名・階数はNAPに含めるべきですか？",
    a: "GBPに登録した住所とウェブサイトの住所は同一の詳細度で記載することが原則です。GBPにビル名・階数を記載している場合は、自社サイトや他の媒体でも同様に記載します。省略の有無が媒体によって異なると、Googleが同一住所として認識しにくくなる可能性があります。",
  },
  {
    q: "Apple MapsにもNAP情報を登録すべきですか？",
    a: "iPhoneユーザーが利用するApple MapsはGoogleとは独立したユーザー層を持ちます。Apple Maps ConnectでオーナーとしてNAP情報を登録・管理することで、iOSユーザーからの集客経路を確保できます。登録情報がGBPと一致していることで、オンライン上のNAP情報の一貫性も高まります。",
  },
  {
    q: "SNSは頻繁に変わりますが、NAP更新の手間をどう減らせますか？",
    a: "SNSのNAP情報は定期点検のチェックリストに含め、四半期に一度まとめて確認する運用が現実的です。移転・番号変更などの変更イベントが発生した際には、対応媒体リストを参照して漏れなく更新する手順を担当者間で共有しておくことが重要です。Notionやスプレッドシートで媒体別NAP管理表を作成し、変更履歴を記録することを推奨しています。",
  },
  {
    q: "NAP統一は自分でできますか？プロに頼む必要がありますか？",
    a: "自社サイト・GBP・主要SNSの統一であれば自社で対応可能です。一方で、掲載媒体が多い・複数店舗を運営している・過去の移転や旧情報が多数残っているケースでは、調査から修正申請まで工数がかかるため専門家への依頼が効率的です。サイプレスではNAP監査から修正対応、定期監視まで一括して対応しています。",
  },
  {
    q: "サイテーションとNAP統一はどのような関係がありますか？",
    a: "サイテーションとは外部サイトに自社のNAP情報が言及（掲載）されることです。サイテーション数が多いほどGoogleの知名度評価が高まりますが、その情報がGBPと一致していることが前提条件です。不一致のサイテーションはプラスではなくマイナスに作用することもあるため、NAP統一はサイテーション戦略の基盤として必ず先に整備する必要があります。",
  },
  {
    q: "NAP情報を変更した後にGoogleから確認リクエストが来ることがありますか？",
    a: "あります。特に住所変更など重要な情報を変更した場合、Googleからオーナー確認の再実施を求められることがあります。確認リクエストが来た場合は速やかに対応することで、GBPの一時的な表示制限（審査中ステータス）の期間を短縮できます。",
  },
  {
    q: "NAP統一が完了したら次に取り組むべきMEO施策は何ですか？",
    a: "NAP統一が完了したら、GBPの情報充実（カテゴリ設定・写真追加・営業時間設定）→口コミ獲得・返信→GBP投稿の運用→ウェブサイトのローカルSEO強化という順序で施策を展開することを推奨しています。NAP統一はMEO対策の基盤であり、その上に積み上げる施策の効果を最大化する役割を果たします。",
  },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策", desc: "MEO対策の全体戦略" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "MEO対策の根幹ツール" },
  { href: "/meo/ranking", label: "MEO順位改善", desc: "ローカルパック上位表示" },
  { href: "/meo/category-setting", label: "カテゴリ設定", desc: "GBPカテゴリの最適化" },
  { href: "/meo/review", label: "口コミ獲得・管理", desc: "GBP口コミ対策の全体像" },
  { href: "/meo/photo", label: "写真・画像最適化", desc: "GBP写真のMEO効果" },
  { href: "/meo/post", label: "GBP投稿活用", desc: "最新情報投稿でエンゲージメント向上" },
  { href: "/meo/q-and-a", label: "Q&A活用", desc: "よくある質問でCV改善" },
  { href: "/meo/attribute", label: "属性設定", desc: "GBP属性の最適化" },
  { href: "/meo/service-area", label: "サービス提供エリア", desc: "出張・訪問型ビジネスのエリア設定" },
  { href: "/meo/insight", label: "GBPインサイト分析", desc: "データで改善を進める方法" },
  { href: "/meo/local-keyword", label: "地域キーワード設計", desc: "地域集客のキーワード戦略" },
  { href: "/seo", label: "SEO対策", desc: "検索エンジン最適化の全体戦略" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域特化SEO対策" },
  { href: "/seo/schema", label: "構造化データ", desc: "Schema.orgによるSEO強化" },
  { href: "/aio", label: "AIO対策", desc: "AI検索エンジンへの最適化" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "SEOサービス内容と料金" },
  { href: "/services/gbp-audit", label: "GBP監査サービス", desc: "GBP現状診断と改善提案" },
  { href: "/industry/restaurant", label: "飲食店MEO対策", desc: "飲食店向けMEO施策" },
  { href: "/industry/beauty", label: "美容室MEO対策", desc: "美容室向けMEO施策" },
  { href: "/industry/clinic", label: "クリニックMEO対策", desc: "医療機関向けMEO施策" },
  { href: "/area/tokyo", label: "東京MEO対策", desc: "東京エリアのMEO支援" },
  { href: "/area/osaka", label: "大阪MEO対策", desc: "大阪エリアのMEO支援" },
];

export default function NapPage() {
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
              <Link href="/meo" className="hover:underline" style={{ color: "#6B7280" }}>MEO対策</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>NAP統一</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              MEO Knowledge
            </p>
            <h1
              className="text-[40px] md:text-[52px] font-black leading-tight tracking-tight mb-6"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              NAP情報の統一
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              NAP（Name・Address・Phone）とは店舗名・住所・電話番号の3情報を指します。
              GBP・自社サイト・SNS・外部サービスにわたってこの情報が一致していることが、
              GoogleによるMEO評価の信頼性向上に欠かせません。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_14_54.jpg"
            alt="ビジネス情報の確認・NAP統一MEO対策"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.18)" }} />
        </section>

        {/* このページでわかること */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What You Will Learn
            </p>
            <h2
              className="font-black text-[28px] mb-10"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-4">
              {[
                "NAPとは何か、なぜGBP・自社サイト・外部媒体での統一がMEO評価に直結するのか",
                "NAP不一致が発生しやすい場所と、発見のための効率的な確認方法",
                "業種・ビジネス形態ごとのNAP管理の注意点と統一方針の立て方",
                "NAP統一の実施フローと、優先的に対応すべき媒体の判断基準",
                "NAP統一の効果を定量的に測定するための指標とデータの見方",
                "移転・電話番号変更・リブランド時に漏れなく更新するための管理体制の作り方",
              ].map((point, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span
                    className="shrink-0 font-bold text-[15px]"
                    style={{ color: "#c4b89a", marginTop: "2px" }}
                  >
                    →
                  </span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NAPとは */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What is NAP
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              NAPとは
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                NAPとはName（店舗名・会社名）、Address（住所）、Phone（電話番号）の略称です。
                ローカルSEO・MEO対策において、これら3つの情報がオンライン上の複数の場所で
                一致していることが、Googleの信頼性評価を高める基盤となります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                Googleはウェブ上に掲載されているビジネス情報をクロールして照合します。
                GBP・自社ウェブサイト・食べログ・ホットペッパー・SNSなど複数の場所で
                同一のNAP情報が確認できる場合、Googleは「このビジネスは確かに実在し、
                信頼できる情報を持っている」と判断します。
                この信頼度がMEO・ローカルSEO順位の「知名度（Prominence）」評価に直結します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                逆に、各サービスで表記が異なる・古い情報が放置されている・店舗名が媒体によって
                略称や表記違いで掲載されているといった「NAP不一致」の状態は、
                Googleがどの情報を正として扱うか判断できなくなり、評価の低下につながります。
                MEO対策の出発点として、NAP統一は最初に取り組むべき基本施策です。
              </p>
            </div>
          </div>
        </section>

        {/* NAP統一の対象 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Unification Targets
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              NAP統一の対象
            </h2>
            <div className="max-w-3xl">
              {napTargets.map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.num}
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-[15px] mb-1.5"
                      style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* よくある課題と原因 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Common Problems
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              よくある課題と原因
            </h2>
            <div className="max-w-3xl">
              {commonIssues.map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.num}
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-[15px] mb-1.5"
                      style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 業種別の活用ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              By Industry
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              業種別の活用ポイント
            </h2>
            <div className="max-w-3xl">
              {industryPoints.map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.num}
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-[15px] mb-1.5"
                      style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
                    >
                      {item.industry}
                    </h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.notes}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 実装・改善フロー */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Implementation Flow
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              実装・改善フロー
            </h2>
            <div className="max-w-3xl">
              {implementationFlow.map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.num}
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-[15px] mb-1.5"
                      style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
                    >
                      {item.step}
                    </h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              KPIs to Track
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              成果を見るための指標
            </h2>
            <div className="max-w-3xl">
              {kpis.map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.num}
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-[15px] mb-1.5"
                      style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
                    >
                      {item.kpi}
                    </h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.where}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="NAP統一に関するよくある質問" bgColor="#F9F8F5" />

        <RelatedPages links={relatedLinks} />

        <PageContactCTA
          heading="NAP統一・MEO基盤整備のご相談はサイプレスへ"
          body="NAP統一状況の調査・修正から、GBP・自社サイト・外部媒体の情報管理まで、サイプレスのMEO専門チームがトータルで対応します。まずは現状のNAP監査からお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}

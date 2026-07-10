import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Googleナレッジグラフ対策｜ナレッジパネル獲得と構造化情報の最適化｜株式会社サイプレス",
  description:
    "GoogleナレッジグラフへのエンティティとしてのGoogle認識を高めるAIO対策。Organization構造化データ・sameAs整備・Wikidata登録・GBP連携でナレッジパネルを獲得する完全ガイド。",
  keywords: ["ナレッジグラフ対策", "Googleナレッジグラフ", "エンティティSEO", "ナレッジパネル", "Organization構造化データ", "AIO対策", "sameAs"],
  openGraph: {
    title: "Googleナレッジグラフ対策｜ナレッジパネル獲得と構造化情報の最適化｜株式会社サイプレス",
    description: "GoogleナレッジグラフへのエンティティとしてのGoogle認識を高めるAIO対策。Organization構造化データ・GBP連携・権威サイト掲載で企業の知名度を向上。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/aio/knowledge-graph" },
};

const requirementItems = [
  {
    title: "Organizationスキーマの正確な実装",
    body: "会社名・URL・ロゴ・住所・SNSリンク（sameAs）を含むJSON-LDを実装。Googleが企業エンティティを認識する最重要シグナルです。",
  },
  {
    title: "GBPとWebサイトの情報整合",
    body: "GBPの会社名・住所・電話・URLをWebサイトと完全一致させます。情報の一貫性がGoogleの信頼性評価を高めます。",
  },
  {
    title: "権威あるサイトへの掲載",
    body: "業界メディア・ニュースサイト・専門家ディレクトリへの掲載でGoogleの権威性評価が高まります。プレスリリース配信が有効です。",
  },
  {
    title: "SNS公式アカウントの整備",
    body: "X・Instagram・LinkedIn等の公式アカウントURLをsameAsに追加。複数プラットフォームでの一貫した企業情報がエンティティ認識を強化します。",
  },
];

const problemItems = [
  {
    title: "ナレッジグラフとナレッジパネルの違いを知らない",
    body: "ナレッジグラフはGoogleが管理する実体（エンティティ）と関係性のデータベースそのものであり、ナレッジパネルはそこから引き出した情報を検索結果の右側に表示するUIコンポーネントです。対策の方向性が異なるため、まずこの違いを正確に理解することが出発点になります。",
  },
  {
    title: "自社のナレッジパネルが表示されない",
    body: "ナレッジパネルが表示されていない主な原因は、Googleが自社をエンティティとして認識できていないことです。Organizationスキーマの未実装・sameAsの未設定・GBPと公式サイトの情報不一致・外部サイトへの掲載不足などが複合的に影響しているケースが多くあります。",
  },
  {
    title: "ナレッジパネルの情報が古い・間違っている",
    body: "Googleはナレッジグラフの情報を複数の外部ソース（Wikipedia・Wikidata・GBP・公式サイト等）から収集するため、どこかのソースが古いままだと誤情報が表示されることがあります。公式サイト・GBP・sameAsリンク先すべての情報を最新の状態に保つことが修正への近道です。",
  },
  {
    title: "競合他社にはナレッジパネルがある",
    body: "競合がナレッジパネルを持っている一方で自社にはない場合、AIが回答を生成する際に競合が「知られた企業」として優先されるリスクがあります。競合のOrganizationスキーマ・sameAs・メディア掲載状況を分析し、同等以上の権威性シグナルを整備することが急務です。",
  },
  {
    title: "ナレッジグラフへの情報提供方法が分からない",
    body: "Googleナレッジグラフへ直接情報を「登録する」APIは一般公開されていません。Organizationスキーマ・GBP・Wikidata・Wikipedia・信頼性の高い外部サイトへの掲載を通じてGoogleが自動収集する仕組みを理解し、各シグナルを整備することが正しいアプローチです。",
  },
  {
    title: "Wikipedia・Wikidataへの未登録",
    body: "WikipediaとWikidataはGoogleナレッジグラフの最も強力な情報源のひとつです。Wikipedia掲載基準（特筆性要件）を満たすためにはメディア掲載・受賞・社会的貢献実績が必要ですが、Wikidataは比較的容易に登録でき、OrganizationスキーマのsameAsに追加することでエンティティ認識を強化できます。",
  },
  {
    title: "sameAsの設定が不十分",
    body: "OrganizationスキーマのsameAsプロパティに設定すべきURLが一部しか登録されていないサイトが多くあります。X・Facebook・Instagram・LinkedIn・YouTube・GBP・PR TIMES・Wikidata・業界団体プロフィールページなど、企業に関連するすべての外部URLを網羅することが重要です。",
  },
  {
    title: "ソーシャルメディアのsameAs漏れ",
    body: "特に見落とされやすいのがYouTubeチャンネルURL・Pinterest・TikTok・note・Qiitaなどのプラットフォームです。公式アカウントとして運用しているすべてのソーシャルメディアURLをsameAsに追加することで、Googleが「この企業はこれらのプラットフォームでも同一の企業」と認識できるようになります。",
  },
  {
    title: "ナレッジパネルのクレーム申請方法が分からない",
    body: "ナレッジパネルが表示されていれば、そのパネル上の「このナレッジパネルを管理しますか？」リンクから所有権を申請できます。申請にはGoogleサーチコンソールでの公式サイト認証が必要です。クレームを取得することで情報修正・画像の設定・SNSリンクの追加が可能になります。",
  },
  {
    title: "ナレッジパネルの情報修正の申請方法が分からない",
    body: "クレーム申請後はナレッジパネル上の「修正を提案」からGoogleへ直接修正リクエストを送ることができます。ただし採用されるかはGoogleの判断次第です。並行して公式サイト・GBP・Wikidata・sameAsリンク先の情報を正確に更新しておくことが、Googleによる自動修正を促す最も確実な方法です。",
  },
];

const industryItems = [
  {
    industry: "企業・法人",
    note: "OrganizationタイプのナレッジパネルはCorporation・LocalBusiness・NGO等の企業に表示されます。正確な会社名・ロゴ・本社所在地・事業内容・設立年・代表者名のOrganizationスキーマ実装と、GBP・プレスリリース・業界団体への掲載を組み合わせることでエンティティ認識を高めます。",
  },
  {
    industry: "医師・専門家",
    note: "医師・弁護士・会計士などの専門家はPersonタイプのナレッジパネル獲得が目標です。専門家プロフィールページを公式サイトに作成し、PersonスキーマでsameAs・資格・所属機関を明示します。医師情報サイト（ドクターズプライム等）や専門家ディレクトリへの登録も有効なシグナルとなります。",
  },
  {
    industry: "地域ビジネス",
    note: "LocalBusinessタイプのナレッジパネルはGoogleビジネスプロフィール（GBP）と密接に連携しています。GBPの完全整備（営業時間・サービス・写真・口コミ対応）・LocalBusinessスキーマのNAP完全一致・Googleマップでの正確な位置情報が基本セットです。地域名を含むWebページの整備も重要です。",
  },
  {
    industry: "飲食店",
    note: "飲食店はRestaurant（LocalBusinessのサブタイプ）のナレッジパネルを通じてGBPのメニュー情報・営業時間・写真・口コミが検索結果に表示されます。MenuItemスキーマでメニュー情報を構造化し、食べログ・ぐるなび・Rettyへの掲載URLをsameAsに追加することでデータの充実が図れます。",
  },
  {
    industry: "音楽・芸能",
    note: "アーティスト・タレントはMusicGroup・Personタイプのエンティティとして認識されます。Spotify・Apple Music・MusicBrainzなどの音楽データベースへの登録と、Wikidataへのエントリー作成が有効です。公式YouTubeチャンネル・Instagram・X等のsameAs整備も必須です。",
  },
  {
    industry: "書籍・出版",
    note: "著者はPersonエンティティとして、書籍はBookエンティティとして認識されます。BookスキーマとPersonスキーマを公式サイトに実装し、Google ブックス・Amazonの著者ページ・図書館データベースへの掲載をsameAsに追加します。Wikidataに著者エントリーを作成することでナレッジパネル獲得が早まります。",
  },
  {
    industry: "映画・エンタメ",
    note: "映画・TVシリーズはMovie・TVSeriesタイプとして認識されます。IMDb・Filmarksなど映画データベースへの登録と、MovieスキーマによるJSON-LD実装が基本です。Wikidataへの作品エントリーは特に強力なシグナルです。配給会社・制作会社のOrganizationスキーマとの紐付けも重要です。",
  },
  {
    industry: "製品・ブランド",
    note: "製品はProductエンティティ、ブランドはBrandエンティティとして認識されます。ProductスキーマでJAN・GTIN・manufacturer・brandを明示し、Amazon・楽天市場等の製品ページURLをsameAsに追加します。ブランドの公式サイトOrganizationスキーマでFounder・foundingDate・productsを記述することで認識が強化されます。",
  },
];

const flowSteps = [
  {
    step: "01",
    title: "現状ナレッジパネル確認（自社名Google検索）",
    body: "自社名・代表者名・主要商品名でGoogle検索を行い、ナレッジパネルの有無・表示内容・誤情報の有無を確認します。パネルが表示されている場合はその内容をスクリーンショットで記録し、修正が必要な箇所をリストアップします。表示されていない場合は現状のエンティティ認識ゼロと判断して施策を開始します。",
  },
  {
    step: "02",
    title: "エンティティタイプ決定（Org / Person / Place）",
    body: "自社・担当者の目的に合わせて獲得すべきエンティティタイプを決定します。企業：Organization（Corporation/LocalBusiness）、個人専門家：Person、店舗：LocalBusiness、製品：Product。エンティティタイプによって実装すべきスキーマと整備すべき外部情報源が異なります。",
  },
  {
    step: "03",
    title: "Organizationスキーマ詳細実装",
    body: "公式サイトのhead内またはlayout.tsxにJSON-LD形式でOrganizationスキーマを実装します。必須プロパティ：name・url・logo・address・telephone・email・foundingDate・description。推奨：numberOfEmployees・areaServed・serviceType・sameAs（後述）。Google Search ConsoleのURL検査でエラーがないことを確認します。",
  },
  {
    step: "04",
    title: "Wikidataエントリー作成・確認",
    body: "Wikidataは企業・人物・場所のエンティティデータベースであり、Googleナレッジグラフと直接連携しています。既存エントリーがある場合は情報を最新化し、ない場合は新規作成します。公式サイトURL・SNSアカウント・公式ロゴ・業種コードなどを追加し、OrganizationスキーマのsameAsにWikidata URLを追加します。",
  },
  {
    step: "05",
    title: "sameAs一覧整備（Twitter/Facebook/YouTube/LinkedIn等）",
    body: "企業・個人に関連するすべての外部プロフィールURLをOrganizationスキーマのsameAsプロパティに追加します。対象：X（旧Twitter）・Facebook・Instagram・LinkedIn・YouTube・Pinterest・note・PR TIMES・Wikidata・業界団体プロフィール・Googleビジネスプロフィール。漏れなく網羅することがエンティティ認識強化の鍵です。",
  },
  {
    step: "06",
    title: "公式サイトへのGoogleサーチコンソール認証",
    body: "Google Search Consoleで公式サイトのオーナーシップを認証します。これはナレッジパネルのクレーム申請の前提条件であり、Googleが「このサイトは本人が管理している」と認識するための重要なシグナルです。認証後、サイトマップを送信しクロール状況を確認します。",
  },
  {
    step: "07",
    title: "ナレッジパネルクレーム申請",
    body: "ナレッジパネルが表示されている場合、パネル下部の「このナレッジパネルを管理しますか？」からクレーム申請を行います。Googleアカウントと公式サイトのSearch Console認証が必要です。クレームを取得することで情報修正・アイキャッチ画像の設定・Featured Linkの追加が可能になります。",
  },
  {
    step: "08",
    title: "メディア掲載・権威性向上",
    body: "業界メディア・経済誌・地域ニュースサイト・専門家ディレクトリへの掲載を増やします。プレスリリース配信（PR TIMES・@Press）の継続、業界受賞への応募、商工会議所・業界団体への加入と掲載、社外講演・メディア出演などがGoogleの権威性評価を高めるシグナルになります。",
  },
  {
    step: "09",
    title: "情報の定期更新",
    body: "Organizationスキーマ・GBP・公式サイトの会社概要・sameAsリンク先を定期的（最低半年に1回）に確認・更新します。代表者変更・所在地移転・新サービス追加などの企業情報変更は速やかに全媒体に反映させます。情報の一貫性と鮮度がGoogleの信頼性評価に直結します。",
  },
  {
    step: "10",
    title: "Googleへのフィードバックと継続改善",
    body: "ナレッジパネルに誤情報がある場合、クレーム申請後に「修正を提案」から修正リクエストを送ります。また公式サイト・GBP・Wikidataで正確な情報を維持し、Googleによる自動更新を促します。月次でナレッジパネル表示内容を確認し、変化を記録する改善サイクルを維持します。",
  },
];

const kpiItems = [
  {
    label: "ナレッジパネル表示の有無",
    where: "自社名・代表者名でのGoogle検索（手動確認・月次スクリーンショット記録）",
  },
  {
    label: "sameAs登録サービス数",
    where: "Organizationスキーマ内sameAsプロパティのURL数をカウント（コードレビュー）",
  },
  {
    label: "ナレッジグラフ掲載情報数",
    where: "ナレッジパネルに表示されている情報項目数（住所・電話・SNS等）の手動カウント",
  },
  {
    label: "ブランド名検索のCTR向上",
    where: "Google Search Console > 検索パフォーマンス（自社名クエリフィルタ）のCTR推移",
  },
  {
    label: "ブランド認知関連キーワードの表示回数",
    where: "Google Search Console > 検索パフォーマンス（ブランド名・サービス名クエリのImpressions）",
  },
  {
    label: "権威性サイトの被リンク数",
    where: "Google Search Console > リンク / Ahrefs・Semrushの被リンクレポート",
  },
  {
    label: "Google認識エンティティ数",
    where: "Wikidata・Wikipedia・GBP等の主要データソースへの掲載状況（手動確認）",
  },
];

const faqItems = [
  {
    q: "Googleナレッジグラフに登録されるとどう変わりますか？",
    a: "ブランド名で検索した際に右側に「ナレッジパネル」が表示されるようになります。会社情報・ロゴ・SNSリンク・関連情報が一覧で表示され、信頼性と認知度が大きく向上します。また、AI検索でも企業情報が引用されやすくなるため、AIO対策としても重要な施策です。",
  },
  {
    q: "中小企業もナレッジグラフに登録されますか？",
    a: "はい。ウィキペディアへの掲載は難しくても、GBP・公式サイト・SNSアカウント・プレスリリースなどを整備することで、Googleがエンティティとして認識する可能性があります。特にローカルビジネスはGBPを充実させることで比較的早くナレッジパネルが表示されるケースがあります。",
  },
  {
    q: "ナレッジグラフに間違った情報が表示されています。修正できますか？",
    a: "ナレッジパネルが表示されている場合、「ナレッジパネルをフィードバック」から修正要請を出せます。GBP・公式サイト・構造化データの情報を正確にすることで修正されやすくなります。クレーム申請（所有権確認）を完了することで、より直接的な修正申請が可能になります。",
  },
  {
    q: "AI検索とナレッジグラフはどう関係していますか？",
    a: "GoogleのAI（Gemini等）はナレッジグラフのデータを学習・参照しています。ナレッジグラフに登録されることで、AI検索での回答にも企業情報が引用される可能性が高まります。ChatGPT等の外部AI検索も権威性サイト（Wikipedia・Wikidata等）を参照するため、幅広いAI検索でのプレゼンス向上に貢献します。",
  },
  {
    q: "構造化データを実装すればナレッジグラフに登録されますか？",
    a: "構造化データの実装はGoogleがエンティティを認識するための重要なシグナルですが、それだけでは不十分です。GBP・SNS・被リンク・プレスリリースなど複数のシグナルを組み合わせることが重要です。特に外部の信頼性の高いサイトからの言及・掲載が強いシグナルとして機能します。",
  },
  {
    q: "ナレッジグラフ対策にはどのくらいの期間が必要ですか？",
    a: "Googleのエンティティ認識には時間がかかります。Organization構造化データの実装・GBP整備・SNS公式アカウントのsameAs登録を行ったあと、認識されるまで数ヶ月かかるケースが一般的です。Wikidata登録・プレスリリース配信・メディア掲載を組み合わせることで認識が加速します。",
  },
  {
    q: "sameAsプロパティとは何ですか？",
    a: "Organization構造化データのsameAsプロパティは、自社の公式SNSアカウントや外部プロフィールページのURLを列挙するフィールドです。X・Instagram・LinkedIn・FacebookなどのURLを追加することでGoogleの企業認識が強化されます。Wikidataや業界団体プロフィールページも追加することを推奨します。",
  },
  {
    q: "ナレッジパネルのクレーム申請とは何ですか？",
    a: "ナレッジパネルの所有権を申請し、情報管理権限を取得するプロセスです。ナレッジパネル下部の「このナレッジパネルを管理しますか？」から申請でき、Google Search Consoleでの公式サイト認証が必要です。クレーム取得後は情報修正・画像設定・Featured Linkの追加が可能になります。",
  },
  {
    q: "Wikidataへの登録は自分でできますか？",
    a: "Wikidataはオープンデータベースで誰でも編集・登録できます。Wikidataアカウントを作成し、企業エントリーを作成または編集します。公式サイトURL・SNSアカウント・ロゴ・業種・所在地などの基本情報を追加します。ただし根拠のない情報の追加は削除される場合があるため、公式サイト・登記情報などを出典として記載することが重要です。",
  },
  {
    q: "Googleビジネスプロフィール（GBP）とナレッジグラフはどう関係していますか？",
    a: "GBPはLocalBusinessタイプのエンティティ認識において最も強力な情報源のひとつです。GBPに登録された企業情報（名称・住所・電話・カテゴリ・写真・口コミ）はGoogleナレッジグラフに直接反映されます。GBPの情報と公式サイト・Organizationスキーマの情報を完全一致させることが重要です。",
  },
  {
    q: "プレスリリースはナレッジグラフ対策に有効ですか？",
    a: "有効です。PR TIMES・@Press等のプレスリリース配信サービスはGoogleが信頼する高権威サイトへの掲載を生みます。定期的なプレスリリース配信で企業名・URL・事業内容が複数の信頼性の高いサイトに掲載されることで、Googleのエンティティ認識が強化されます。掲載先メディアにOrganization情報を正確に記載することが重要です。",
  },
  {
    q: "Wikipediaへの掲載は必須ですか？",
    a: "Wikipediaへの掲載はナレッジグラフ登録の最も強力なシグナルですが、必須ではありません。Wikipediaには「特筆性要件」があり、複数の独立したメディアで取り上げられた実績が必要です。まずWikidata登録・GBP整備・Organizationスキーマ実装・プレスリリース配信などを優先し、Wikipediaは長期目標として位置付けることを推奨します。",
  },
  {
    q: "ナレッジパネルに表示させたい画像を指定できますか？",
    a: "クレーム申請後に画像の変更申請ができます。推奨する画像として、公式ロゴ・代表者写真・商品画像を提出します。ただし採用はGoogleの判断次第です。公式サイトにOrganizationスキーマでlogoプロパティを実装し、GBPに高品質なロゴ・写真を登録することで、Googleが適切な画像を取得しやすくなります。",
  },
  {
    q: "個人（専門家・経営者）もナレッジパネルを取得できますか？",
    a: "はい。著名な専門家・研究者・経営者・アーティストなどはPersonタイプのナレッジパネルを取得できます。公式サイトにPersonスキーマを実装し、著書・論文・メディア出演・所属機関などの情報を整備します。Wikidataへの個人エントリー作成と、Google Scholar・ResearchGate等の専門家データベースへの掲載も有効です。",
  },
  {
    q: "ナレッジグラフ対策とSEOは関係がありますか？",
    a: "密接に関係しています。ナレッジグラフに登録された企業は「Googleが知っているエンティティ」として信頼性が高まり、関連キーワードでの検索順位向上に寄与します。またE-E-A-Tの強化・権威性サイトへの掲載・sameAsの整備はSEOの被リンク・ブランド認知向上にも同時に貢献します。",
  },
  {
    q: "ナレッジグラフの情報はどのくらいの頻度で更新されますか？",
    a: "Googleはナレッジグラフを継続的に更新しています。GBP・公式サイト・Wikidata等のソースが更新されると、通常数日〜数週間でナレッジグラフに反映されます。ただし重要な変更（社名変更・代表者変更等）は反映に数ヶ月かかる場合もあります。変更が生じたら速やかに全情報源を更新することが重要です。",
  },
  {
    q: "海外展開している企業はどう対策すればいいですか？",
    a: "多言語でのOrganizationスキーマ実装（inLanguageプロパティ）・各国GBP整備・多言語版WikipediaおよびWikidataへの掲載が基本セットです。国ごとに異なる会社名・住所・電話番号をsameAsおよびGBPで管理し、各国の業界団体・メディアへの掲載を進めることで各地域でのエンティティ認識が強化されます。",
  },
  {
    q: "ナレッジグラフ対策の費用はどのくらいかかりますか？",
    a: "施策の範囲によって異なります。Organizationスキーマ実装・GBP整備・sameAs追加は比較的低コストで実施可能です。Wikidata登録・プレスリリース配信・メディア掲載施策を加えると費用が増加します。まず現状診断を行い、優先施策を絞ってコストパフォーマンス高く進めることを推奨します。お気軽にご相談ください。",
  },
  {
    q: "競合他社のナレッジパネルにある情報を参考にできますか？",
    a: "競合のナレッジパネルを分析することで、Googleが認識しているエンティティの要素（sameAs先・情報項目・関連エンティティ）を把握できます。競合が掲載されている業界メディア・ディレクトリを特定して同様の掲載を目指すことと、競合にはない独自の情報・実績を追加することが差別化のポイントです。",
  },
  {
    q: "ナレッジグラフ対策の効果を確認するにはどうしますか？",
    a: "主要な確認方法として、自社名のGoogle検索でのナレッジパネル表示確認・Google Search Consoleでのブランドクエリ表示回数・CTRの変化・被リンク数の推移があります。Wikidata掲載状況・GBPのインサイト・sameAs登録数の変化も定期的にモニタリングします。月次での確認スケジュールを設定することを推奨します。",
  },
];

const relatedLinks = [
  { href: "/aio", label: "AIO対策とは", desc: "AIO対策の基礎・全体戦略" },
  { href: "/aio/entity-optimization", label: "エンティティ最適化", desc: "エンティティの認識向上" },
  { href: "/aio/organization-data", label: "Organization構造化データ", desc: "Schema実装の完全ガイド" },
  { href: "/aio/llm-optimization", label: "LLM最適化", desc: "AI言語モデル対策" },
  { href: "/aio/ai-overview", label: "AI Overview対策", desc: "生成AI検索への引用対策" },
  { href: "/aio/structured-data", label: "構造化データ実装", desc: "Schema.org全般" },
  { href: "/aio/generative-search", label: "生成AI検索対策", desc: "SGE・AI Overviewへの引用獲得" },
  { href: "/aio/e-e-a-t", label: "E-E-A-T強化", desc: "専門性・権威性・信頼性向上" },
  { href: "/aio/chatgpt", label: "ChatGPT対策", desc: "ChatGPTへの引用戦略" },
  { href: "/aio/perplexity", label: "Perplexity対策", desc: "Perplexity引用最適化" },
  { href: "/seo", label: "SEO対策", desc: "検索エンジン最適化の全体戦略" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "技術的SEO対策" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域検索への最適化" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "コンテンツによる集客強化" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップ・地域集客対策" },
  { href: "/meo/gbp-optimization", label: "GBP最適化", desc: "Googleビジネスプロフィール管理" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "サービス内容と料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "SEO支援サービス詳細" },
  { href: "/services/web-design", label: "Webデザイン制作", desc: "高品質サイト制作" },
  { href: "/industry/medical", label: "医療・クリニック向け", desc: "医療業界のAIO・SEO対策" },
  { href: "/industry/legal", label: "法律・士業向け", desc: "士業のPersonエンティティ対策" },
  { href: "/industry/restaurant", label: "飲食店向け", desc: "飲食店のナレッジパネル獲得" },
  { href: "/area/tokyo", label: "東京のAIO対策", desc: "東京エリアの実績・対応" },
  { href: "/area/osaka", label: "大阪のAIO対策", desc: "大阪エリアの実績・対応" },
];

export default function KnowledgeGraphPage() {
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
              <span style={{ color: "#0F172A" }}>ナレッジグラフ対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Knowledge Graph
            </p>
            <h1
              className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              Googleナレッジグラフ対策<br />ナレッジパネル獲得
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              Googleナレッジグラフは、Googleが管理する実体（企業・人物・場所・概念）の
              知識データベースです。ここに登録されることで、AI検索での引用率が上がり、
              ブランドとしての権威性が高まります。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl mt-4" style={{ color: "#374151" }}>
              Organization構造化データの正確な実装・GBPとの情報整合・SNSアカウントのsameAs登録・
              プレスリリースの継続発信を組み合わせることで、Googleに「信頼できる企業エンティティ」
              として認識されやすくなります。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_20_52.jpg"
            alt="Googleナレッジグラフ対策"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6">
              <p className="font-bold" style={{ color: "#FFFFFF", fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6, maxWidth: "640px" }}>
                ナレッジグラフへの登録は、AIが「この企業を知っている」と認識するための基盤。
                構造化データとGBPの整合が第一歩です。
              </p>
            </div>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              On This Page
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-4">
              {[
                "ナレッジグラフとナレッジパネルの違い・仕組みの基礎知識",
                "ナレッジパネル獲得に必要な4つの要件と優先施策",
                "よくある課題10項目とその根本原因・対処法",
                "企業・医師・飲食店・書籍など8エンティティタイプ別の活用ポイント",
                "現状確認からフィードバックまで10ステップの実装フロー",
                "ナレッジグラフ対策の効果を測定するための7つのKPIと確認方法",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-bold shrink-0 mt-0.5" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 登録要件 (dark section) */}
        <section className="py-20" style={{ background: "#0d1b2a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>
              Requirements
            </p>
            <h2
              className="font-black mb-12"
              style={{ color: "#FFFFFF", fontSize: "clamp(20px,2.8vw,30px)", fontFamily: "var(--font-serif)" }}
            >
              ナレッジグラフに登録されるための4つの要件
            </h2>
            <div className="grid md:grid-cols-2 gap-6" style={{ maxWidth: "900px" }}>
              {requirementItems.map((item, i) => (
                <div key={i} className="p-6" style={{ border: "1px solid rgba(196,184,154,0.2)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[12px] font-mono" style={{ color: "#c4b89a" }}>{String(i + 1).padStart(2, "0")}</span>
                    <p className="font-bold text-[14px]" style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  </div>
                  <p className="text-[13px] leading-[1.9]" style={{ color: "rgba(255,255,255,0.75)" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Common Problems
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <div className="max-w-3xl">
              {problemItems.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0F172A" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section C: 業種別の活用ポイント */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Industry Applications
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}>
              業種別・エンティティタイプ別の活用ポイント
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
              {industryItems.map((item, i) => (
                <div key={i} className="p-6" style={{ background: "#FFFFFF", border: "1px solid #E8E4DC" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[12px] font-mono" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-bold text-[15px]" style={{ color: "#0F172A" }}>{item.industry}</h3>
                  </div>
                  <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: 実装・改善フロー */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Implementation Flow
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}>
              実装・改善フロー
            </h2>
            <div className="max-w-3xl">
              {flowSteps.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.step}</span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0F172A" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              KPI &amp; Metrics
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <div className="max-w-3xl">
              {kpiItems.map((item, i) => (
                <div key={i} className="flex gap-6 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-bold text-[15px] mb-1" style={{ color: "#0F172A" }}>{item.label}</p>
                    <p className="text-[13px] leading-[1.7]" style={{ color: "#6B7280" }}>確認場所：{item.where}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="ナレッジグラフ対策のご相談はサイプレスへ"
          body="Organizationスキーマの実装・GBPとの整合・SNS整備・プレスリリース戦略など、Googleナレッジグラフへの登録を支援します。AI検索時代のブランド戦略をご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}

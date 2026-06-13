export interface GlossaryPage {
  slug: string;
  term: string;
  termEn: string;
  category: string;
  metaDescription: string;
  definition: string;
  detail: string;
  points: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string; desc: string }[];
}

export const glossaryPages: GlossaryPage[] = [
  {
    slug: "meo",
    term: "MEO（マップエンジン最適化）",
    termEn: "MEO: Map Engine Optimization",
    category: "MEO",
    metaDescription: "MEO（Map Engine Optimization）とは何か、意味・定義・SEOとの違い・活用方法をわかりやすく解説します。Googleマップ対策を始める前に知っておきたい基礎用語。",
    definition: "MEO（Map Engine Optimization）とは、Googleマップ上での自店舗・自社の検索表示順位を上位に引き上げるための最適化施策のことです。「地域名＋業種」などで検索したときに、検索結果上部のGoogleマップ（ローカルパック）に自社が上位表示されることを目指します。",
    detail: "MEOはSEOの派生概念で、特に実店舗を持つ地域ビジネスにとって重要なマーケティング手法です。Googleビジネスプロフィール（GBP）の最適化・口コミ管理・ローカルSEO施策が主な対策内容です。スマートフォンの普及により「近くの〇〇」「今すぐ行けるお店」という検索行動が増加し、MEOの重要性はますます高まっています。",
    points: [
      { title: "MEOとSEOの違い", body: "SEOはGoogleの通常検索（オーガニック検索）でのサイト順位を上げる施策。MEOはGoogleマップでの表示順位を上げる施策です。地域名＋業種の検索ではマップパック（MEO）が通常の検索結果より先に表示されることが多く、地域ビジネスではMEOを優先すべきケースが多いです。" },
      { title: "MEO対策の主な施策", body: "①Googleビジネスプロフィール（GBP）の基本情報を正確・詳細に入力、②高品質な写真・動画を定期的に追加、③Google口コミの獲得と迅速な返信、④GBPへの定期的な投稿（最新情報・イベント等）、⑤ローカルキーワードの最適化が主な施策です。" },
      { title: "MEOの効果が出るまでの期間", body: "適切な施策を実施すれば、1〜2ヶ月で順位変動が見られ始め、3〜6ヶ月で安定した上位表示が期待できます。競合の少ない地域・業種では1ヶ月以内に効果が出る場合もあります。" },
    ],
    faqs: [
      { q: "MEO対策は自分でできますか？", a: "GBPの基本設定・写真追加・口コミ返信は自社でも実施可能です。ただし、競合に勝つための継続的な改善・分析・戦略的な施策は専門知識が必要です。" },
      { q: "MEO対策の費用はどのくらいですか？", a: "月額2〜5万円が相場です。対象キーワード数・競合の強さ・サポート範囲によって異なります。" },
    ],
    related: [
      { href: "/services/meo", label: "MEO対策サービス", desc: "プロによる対策" },
      { href: "/glossary/gbp", label: "GBP（Googleビジネスプロフィール）", desc: "MEOの核となるツール" },
      { href: "/glossary/local-pack", label: "ローカルパック", desc: "MEOの表示枠" },
      { href: "/guide/meo-basics", label: "MEO基礎ガイド", desc: "始め方を学ぶ" },
    ],
  },
  {
    slug: "gbp",
    term: "GBP（Googleビジネスプロフィール）",
    termEn: "GBP: Google Business Profile",
    category: "MEO",
    metaDescription: "GBP（Googleビジネスプロフィール）とは何か、設定方法・最適化のポイント・MEOへの効果をわかりやすく解説します。",
    definition: "GBP（Google Business Profile）とは、Googleが提供する無料のビジネス情報管理ツールです。旧称「Googleマイビジネス」。店舗名・住所・電話番号・営業時間・写真・口コミなどのビジネス情報を管理でき、Googleマップや検索結果に情報を表示させることができます。",
    detail: "GBPはMEO対策の中核となるツールです。正確で詳細な情報を入力し、写真を充実させ、口コミへ適切に返信し、投稿を定期的に行うことがGoogleマップでの上位表示に直結します。GBPの管理は無料で行えますが、適切な最適化には専門知識が必要です。",
    points: [
      { title: "GBPの基本設定で重要な項目", body: "①正確なビジネス名（通称・キャッチコピー禁止）、②業種カテゴリ（メインカテゴリの選択が最重要）、③正確な住所・電話番号・営業時間、④高品質な写真（店内・外観・商品・スタッフ）、⑤ウェブサイトURL・予約リンクの設定が基本項目です。" },
      { title: "GBPの投稿機能の活用", body: "GBPの「最新情報」「イベント」「特典」「商品」投稿を定期的に行うことで、Googleからの評価向上と顧客へのリーチ拡大が期待できます。週1〜2回の投稿が推奨されます。" },
      { title: "GBPのパフォーマンスデータの確認", body: "GBPのインサイト（電話タップ数・ルート案内数・ウェブサイトクリック数・写真閲覧数）を定期的に確認し、改善施策の効果測定に活用します。" },
    ],
    faqs: [
      { q: "GBPの登録は無料ですか？", a: "はい、Googleビジネスプロフィールの登録・管理は完全無料です。ただし、専門業者にMEO対策を依頼する場合は費用が発生します。" },
      { q: "GBPの審査（オーナー確認）はどうやりますか？", a: "登録後、Googleがビジネスのオーナーであることを確認する審査（電話・SMS・郵便・ビデオ）が必要です。最も一般的なのは郵便ハガキ（14日程度かかる）またはビデオ確認です。" },
    ],
    related: [
      { href: "/glossary/meo", label: "MEO", desc: "Googleマップ最適化" },
      { href: "/meo/google-business-profile", label: "GBP最適化", desc: "詳細な設定ガイド" },
      { href: "/meo/review-management", label: "口コミ管理", desc: "GBPの口コミ対策" },
    ],
  },
  {
    slug: "local-pack",
    term: "ローカルパック",
    termEn: "Local Pack (Map Pack)",
    category: "MEO",
    metaDescription: "ローカルパック（マップパック）とは何か、表示条件・上位表示のための対策をわかりやすく解説します。地域ビジネスにとって最重要の検索枠です。",
    definition: "ローカルパック（マップパック）とは、Googleの検索結果ページに表示されるGoogleマップと上位3件のビジネス情報の一覧です。「地域名＋業種」「近くの〇〇」などの地域性を持つ検索クエリに対して、通常の検索結果より上位に表示されます。",
    detail: "ローカルパックはGoogleマップの上位3件が表示されるため、ここに入ることでクリック率・電話問い合わせ・来店数が大幅に増加します。ローカルパックへの表示と上位表示を実現するMEO対策が地域ビジネスの集客において最重要施策とされる理由です。",
    points: [
      { title: "ローカルパックに表示される条件", body: "検索クエリに地域性がある場合（地域名を含む検索、または「near me」「近く」など位置情報を使った検索）にローカルパックが表示されます。GBPの情報充実度・口コミ数・距離・関連性がランキングを左右します。" },
      { title: "ローカルパックの3枠を決めるGoogleの評価基準", body: "Googleはローカル検索ランキングを「関連性（Relevance）」「距離（Distance）」「知名度（Prominence）」の3要素で評価します。GBPの充実度と口コミ数・評価が最も影響する要素です。" },
    ],
    faqs: [
      { q: "ローカルパックとオーガニック検索（自然検索）はどう違いますか？", a: "ローカルパックはGoogleマップの情報が表示される枠（MEOの成果）で、オーガニック検索はWebサイトが表示される通常の検索結果（SEOの成果）です。地域名＋業種の検索では両方への対策が有効です。" },
    ],
    related: [
      { href: "/glossary/meo", label: "MEO", desc: "マップ最適化" },
      { href: "/glossary/gbp", label: "GBP", desc: "ビジネスプロフィール" },
      { href: "/services/meo", label: "MEO対策サービス", desc: "ローカルパック上位を目指す" },
    ],
  },
  {
    slug: "seo",
    term: "SEO（検索エンジン最適化）",
    termEn: "SEO: Search Engine Optimization",
    category: "SEO",
    metaDescription: "SEO（Search Engine Optimization）とは何か、意味・仕組み・施策の種類・効果が出るまでの期間をわかりやすく解説します。",
    definition: "SEO（Search Engine Optimization：検索エンジン最適化）とは、GoogleやBing等の検索エンジンの検索結果で自社ウェブサイトをより上位に表示させるための施策の総称です。適切なSEO対策により、広告費をかけずにターゲットユーザーを継続的に集客できます。",
    detail: "SEOは「内部対策（技術的SEO）」「コンテンツSEO」「外部対策（被リンク）」の三つに分類されます。Googleの検索アルゴリズムは常に更新されるため、最新のガイドラインに従った継続的な取り組みが重要です。",
    points: [
      { title: "SEO内部対策（技術的SEO）", body: "サイトの構造・URL設計・表示速度・Core Web Vitals・モバイル対応・メタデータ・構造化データ・XMLサイトマップ等の技術的な最適化です。Googleのクローラーがサイトを正確に認識・評価できる基盤を整えます。" },
      { title: "コンテンツSEO", body: "ターゲットキーワードに対応した高品質なコンテンツを作成・公開する施策です。E-E-A-T（経験・専門性・権威性・信頼性）が評価されるコンテンツが上位表示されやすくなります。" },
      { title: "外部対策（被リンク）", body: "他のウェブサイトから自社サイトへのリンク（被リンク）を獲得する施策です。信頼性の高いサイトからの被リンクはSEO評価を高めますが、低品質なリンクの購入はペナルティ対象になります。" },
    ],
    faqs: [
      { q: "SEOの効果が出るまでどのくらいかかりますか？", a: "技術的SEOの改善は2〜3ヶ月、コンテンツSEOは3〜6ヶ月で成果が見え始めることが多いです。競合の強いキーワードは1年以上かかる場合もあります。" },
      { q: "SEO対策を自社でやるのと外注するのではどちらが良いですか？", a: "基本的なGBP管理・ブログ更新は自社でも実施可能です。戦略立案・技術的SEO・被リンク獲得は専門知識が必要なため、専門会社に依頼した方が効率的です。" },
    ],
    related: [
      { href: "/services/seo", label: "SEO対策サービス", desc: "プロによるSEO対策" },
      { href: "/glossary/e-e-a-t", label: "E-E-A-T", desc: "コンテンツ品質の評価基準" },
      { href: "/glossary/core-web-vitals", label: "Core Web Vitals", desc: "表示速度の指標" },
      { href: "/guide/seo-strategy", label: "SEO戦略ガイド", desc: "SEOを詳しく学ぶ" },
    ],
  },
  {
    slug: "e-e-a-t",
    term: "E-E-A-T（経験・専門性・権威性・信頼性）",
    termEn: "E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness",
    category: "SEO",
    metaDescription: "E-E-A-T（経験・専門性・権威性・信頼性）とは何か、SEOへの影響・高める方法をわかりやすく解説します。Googleがコンテンツ品質を評価する重要基準です。",
    definition: "E-E-A-T（イー・イー・エー・ティー）とは、Googleがウェブサイトのコンテンツ品質を評価する4つの指標です。Experience（経験）・Expertise（専門性）・Authoritativeness（権威性）・Trustworthiness（信頼性）の頭文字を取っています。2022年にE-A-TにExperience（経験）が追加されました。",
    detail: "特に医療・法律・金融・健康など「人の生活に大きな影響を与えるトピック（YMYL：Your Money or Your Life）」では、E-E-A-Tの評価がSEO順位に大きく影響します。著者情報・会社情報・実績・一次情報の充実がE-E-A-T向上の鍵です。",
    points: [
      { title: "Experienceを高める方法", body: "実際の経験・体験に基づいた一次情報（写真・動画・具体的な事例）をコンテンツに含めることで、「実際に経験した人が書いた」という評価を得られます。" },
      { title: "Expertiseを高める方法", body: "著者プロフィール（資格・経歴・専門分野）の明示、専門的な情報の正確な記述、業界専門家の監修がExpertise評価を高めます。" },
      { title: "AuthoritativenessとTrustworthinessを高める方法", body: "信頼性の高い外部サイトからの被リンク・メディア掲載・プレスリリース・会社情報の充実・お客様の声・プライバシーポリシーの整備がAuthoritativeness・Trust向上に効果的です。" },
    ],
    faqs: [
      { q: "AIで書いた記事はE-E-A-T評価が低くなりますか？", a: "AI生成コンテンツ自体はGoogleのガイドライン上問題ありません。ただし、実際の経験・専門知識・一次情報がないコンテンツはE-E-A-Tが低くなります。AI生成後に専門家の監修・体験談の追加が必要です。" },
    ],
    related: [
      { href: "/glossary/seo", label: "SEO", desc: "検索エンジン最適化" },
      { href: "/solutions/seo-content", label: "SEO×コンテンツ", desc: "E-E-A-Tを高める戦略" },
      { href: "/aio/chatgpt", label: "ChatGPT対策", desc: "AI検索での信頼性" },
    ],
  },
  {
    slug: "core-web-vitals",
    term: "Core Web Vitals（コアウェブバイタル）",
    termEn: "Core Web Vitals",
    category: "SEO",
    metaDescription: "Core Web Vitals（コアウェブバイタル）とは何か、LCP・CLS・FIDの意味と改善方法をわかりやすく解説します。SEO・ユーザー体験に影響する重要指標です。",
    definition: "Core Web Vitalsとは、Googleが定義するウェブサイトのユーザー体験（UX）を測定する指標群です。LCP（最大コンテンツの描画）・CLS（累積レイアウトシフト）・FID（最初の入力までの遅延、現在はINPに移行）の3つの指標があり、SEOランキングにも影響します。",
    detail: "2021年にGoogleのページエクスペリエンスシグナルの一部としてランキング要素に組み込まれました。特に競合が僅差の場合にCore Web Vitalsが優劣を分ける要因になります。",
    points: [
      { title: "LCP（Largest Contentful Paint）", body: "ページの主要コンテンツ（最大の画像やテキストブロック）が表示されるまでの時間。目標値は2.5秒以内。画像の最適化・遅延読み込み・サーバー応答速度の改善で改善できます。" },
      { title: "CLS（Cumulative Layout Shift）", body: "ページロード中のレイアウトのずれ（画像が突然表示されてコンテンツが動く等）の累積スコア。目標値は0.1以下。画像に固定サイズを指定し、動的コンテンツの予約スペースを設けることで改善できます。" },
      { title: "INP（Interaction to Next Paint）", body: "2024年3月にFIDに替わって導入されたユーザーのインタラクション応答性を測る指標。クリック・タップ・キーボード入力に対するページの反応速度を評価します。目標値は200ms以内。" },
    ],
    faqs: [
      { q: "Core Web VitalsはSEOにどのくらい影響しますか？", a: "Core Web Vitalsは200以上あるGoogleのランキング要因のひとつです。コンテンツの質・被リンク等のより影響力の大きい要因ほどではありませんが、技術的SEOの基盤として必ず最適化すべき指標です。" },
    ],
    related: [
      { href: "/glossary/seo", label: "SEO", desc: "検索エンジン最適化" },
      { href: "/web-design/page-speed", label: "表示速度改善", desc: "技術的な改善方法" },
      { href: "/guide/technical-seo", label: "技術的SEOガイド", desc: "詳しく学ぶ" },
    ],
  },
  {
    slug: "aio",
    term: "AIO（AI検索最適化）",
    termEn: "AIO: AI Optimization",
    category: "AIO",
    metaDescription: "AIO（AI Optimization：AI検索最適化）とは何か、ChatGPT・Perplexity・AI Overviewへの対策方法をわかりやすく解説します。",
    definition: "AIO（AI Optimization）とは、ChatGPT・Perplexity・Gemini・AI Overview等のAI検索エンジンに自社情報が引用・掲載されるよう最適化する施策の総称です。SEOがGoogle検索ランキングを対象とするのに対し、AIOはAIによる情報生成・引用を対象としています。",
    detail: "AI検索の普及により、ユーザーが従来の検索結果ではなくAIの回答から情報を得るケースが増えています。AIOに対応することで、AI検索からの認知・流入・問い合わせを獲得できます。",
    points: [
      { title: "AIOの主な施策", body: "①構造化データ（Schema.org）の実装、②llms.txtの設置、③E-E-A-T強化、④FAQ最適化、⑤見出し構造の整備、⑥著者情報・会社情報の充実が主なAIO施策です。" },
      { title: "AI Overviewとは", body: "Googleの検索結果上部に表示されるAIによる要約回答です。信頼性の高いサイトのコンテンツが引用・要約されて表示されます。SEOとAIOの両方の対策がAI Overview掲載に有効です。" },
    ],
    faqs: [
      { q: "AIO対策はSEOと何が違いますか？", a: "SEOはGoogleの通常検索結果（10件のリンク一覧）での上位表示、AIOはChatGPT・Perplexity等のAI回答での引用・掲載を目的とします。どちらも「信頼性・専門性の高いコンテンツ」が評価される点は共通です。" },
    ],
    related: [
      { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索最適化の実施" },
      { href: "/glossary/llms-txt", label: "llms.txt", desc: "AIクローラー用ファイル" },
      { href: "/solutions/aio-seo", label: "AIO×SEO統合", desc: "AIと検索を同時攻略" },
    ],
  },
  {
    slug: "llms-txt",
    term: "llms.txt",
    termEn: "llms.txt",
    category: "AIO",
    metaDescription: "llms.txtとは何か、設置方法・効果・AIクローラーへの影響をわかりやすく解説します。ChatGPT・Claude等のAIに正確に情報を伝えるファイルです。",
    definition: "llms.txt（エルエルエムエス・テキスト）とは、ウェブサイトのルートディレクトリに設置するテキストファイルで、ChatGPT・Claude・Gemini等のAI（LLM：大規模言語モデル）クローラーに対して、サイトのどの情報を参照・引用してほしいかを指示するファイルです。",
    detail: "robots.txtがGoogleの通常クローラーへの指示ファイルであるのに対し、llms.txtはAIクローラー向けの指示ファイルです。2024年頃から業界での認知が広がり、AIO対策の一環として実装されるケースが増えています。",
    points: [
      { title: "llms.txtの基本構造", body: "# {サイト名} の情報\n\n## 会社情報\n- {会社の説明}\n\n## 主要サービス\n- {サービス一覧}\n\n## 参照推奨ページ\n- [{ページ名}]({URL}):{説明} のような形式で記述します。" },
      { title: "llms.txtの効果", body: "AIクローラーがサイトを適切に理解しやすくなり、ChatGPT・Claude等のAIが自社情報を正確に参照・引用できる可能性が高まります。まだ標準化されていない分野ですが、先行して実装することで競合優位になります。" },
    ],
    faqs: [
      { q: "llms.txtを設置するとChatGPTで名前が出るようになりますか？", a: "llms.txtはAIクローラーへのヒントを提供するものですが、ChatGPTでの引用を直接保証するものではありません。E-E-A-T強化・構造化データ・高品質コンテンツとの組み合わせが重要です。" },
    ],
    related: [
      { href: "/glossary/aio", label: "AIO", desc: "AI検索最適化" },
      { href: "/aio/llms-txt", label: "llms.txt実装ガイド", desc: "設置方法の詳細" },
      { href: "/solutions/aio-seo", label: "AIO×SEO統合", desc: "統合対策" },
    ],
  },
  {
    slug: "schema-org",
    term: "Schema.org（構造化データ）",
    termEn: "Schema.org / Structured Data",
    category: "SEO・AIO",
    metaDescription: "Schema.org（構造化データ）とは何か、実装方法・SEO・AI検索への効果をわかりやすく解説します。リッチリザルト表示や AI引用に影響する重要な技術です。",
    definition: "Schema.orgとは、Googleが推奨する構造化データの標準規格です。ウェブページの内容（ビジネス情報・FAQ・記事・レビュー等）を機械が読み取りやすい形式（JSON-LD）でHTMLに記述することで、Googleの検索結果でのリッチリザルト表示やAI引用の精度向上に貢献します。",
    detail: "構造化データを実装することで、検索結果で評価・レビューのスター表示・FAQの直接表示・パンくずリスト等のリッチリザルトが表示されるようになり、CTR（クリック率）の向上が期待できます。AIO対策としても、AIがサイトの情報を正確に理解・引用するための重要な実装です。",
    points: [
      { title: "主要なSchema.orgタイプ", body: "LocalBusiness（店舗・地域ビジネス）・FAQPage・Article（記事）・BreadcrumbList（パンくず）・Organization（会社）・Product（商品）・Review（口コミ）が最もよく使われるSchema.orgタイプです。" },
      { title: "JSON-LD形式での実装", body: "GoogleはJSON-LD形式（<script type=\"application/ld+json\">でHTMLに埋め込む）での構造化データ実装を推奨しています。Next.jsやWordPressで実装するための専門知識が必要です。" },
    ],
    faqs: [
      { q: "構造化データを実装すると検索結果が変わりますか？", a: "FAQPageスキーマを実装すると検索結果に質問と回答が直接表示されたり、LocalBusinessで星評価が表示されたりするリッチリザルトが期待できます。ただし、必ずしも即時に表示されるとは限りません。" },
    ],
    related: [
      { href: "/glossary/aio", label: "AIO", desc: "AI検索最適化" },
      { href: "/glossary/seo", label: "SEO", desc: "検索エンジン最適化" },
      { href: "/guide/schema-markup", label: "構造化データ実装ガイド", desc: "実装の詳細" },
    ],
  },
  {
    slug: "cv-rate",
    term: "CV率（コンバージョン率）",
    termEn: "Conversion Rate (CVR)",
    category: "マーケティング",
    metaDescription: "CV率（コンバージョン率）とは何か、計算方法・業界平均・改善方法をわかりやすく解説します。Webマーケティングの成果を測る最重要指標です。",
    definition: "CV率（コンバージョン率：CVR）とは、ウェブサイトへの訪問者のうち、目標とする行動（問い合わせ・購入・予約・資料請求等）を完了したユーザーの割合です。CV率（%）= コンバージョン数 ÷ セッション数 × 100 で計算します。",
    detail: "集客数が同じでもCV率が高ければ売上・問い合わせ数が増えます。CV率の改善（CRO：Conversion Rate Optimization）はSEO・広告と並んでWebマーケティングの重要な取り組みです。",
    points: [
      { title: "業界別CV率の目安", body: "EC（購入）：0.5〜3%、B2Bサービス（問い合わせ）：1〜5%、飲食・美容（予約）：2〜8%、不動産（問い合わせ）：0.5〜2%が一般的な目安です。ただし業種・集客元・ページの目的によって大きく異なります。" },
      { title: "CV率を高める主な施策", body: "①ファーストビューでの価値訴求の明確化、②信頼要素（実績・口コミ・資格）の掲載、③CTAボタンの最適化（色・文言・配置）、④フォームの入力項目最小化、⑤スマホ対応の改善がCV率向上の主要施策です。" },
    ],
    faqs: [
      { q: "自社のCV率が良いか悪いかはどうやって判断しますか？", a: "Google Analytics 4のCV率と業界平均を比較してください。CV率が業界平均より低い場合はLP・フォーム・CTA等の改善余地があります。まずは現状のCV率を正確に計測することが第一歩です。" },
    ],
    related: [
      { href: "/glossary/cta", label: "CTA", desc: "コンバージョン促進の行動喚起" },
      { href: "/support/analytics-setup", label: "アナリティクス設定", desc: "CV率計測の環境構築" },
      { href: "/solutions/web-design-seo", label: "Web制作×SEO", desc: "CV設計を組み込んだサイト" },
    ],
  },
  {
    slug: "cta",
    term: "CTA（コール・トゥ・アクション）",
    termEn: "CTA: Call to Action",
    category: "マーケティング",
    metaDescription: "CTA（Call to Action：行動喚起）とは何か、効果的なCTAの設計・文言・配置方法をわかりやすく解説します。CV率向上に直結するWebマーケティングの要素です。",
    definition: "CTA（Call to Action：コール・トゥ・アクション）とは、ウェブサイトの訪問者に特定の行動（問い合わせ・購入・予約・資料請求等）を促すボタン・テキスト・リンクのことです。「今すぐ無料相談する」「資料をダウンロード」等のボタンがCTAの代表例です。",
    detail: "CTAの文言・色・サイズ・配置がCV率に大きく影響します。訪問者がページを読んだ後に自然に「行動したい」と思える導線設計とCTAの最適化がコンバージョン改善の核心です。",
    points: [
      { title: "効果的なCTAの文言", body: "「お問い合わせはこちら」より「今すぐ無料相談する」「3分で診断する」のように、ユーザーのメリット・行動のしやすさを具体的に伝える文言が効果的です。" },
      { title: "CTAのデザインと配置", body: "目立つ色（ページの他の要素と対比する色）のボタンを、ファーストビューと記事末尾の両方に配置することが基本です。スマホではタップしやすいサイズ（最低44×44px）が必要です。" },
    ],
    faqs: [
      { q: "CTAボタンの色は何色が効果的ですか？", a: "「この色が必ず効く」というものはなく、ページの背景・デザインとの対比で目立つ色が最も重要です。オレンジ・赤・緑が一般的に目立ちやすいですが、A/Bテストで確認することが最善策です。" },
    ],
    related: [
      { href: "/glossary/cv-rate", label: "CV率", desc: "コンバージョン率" },
      { href: "/solutions/web-design-seo", label: "Web制作×SEO", desc: "CV設計の実践" },
    ],
  },
  {
    slug: "og-image",
    term: "OGP（Open Graph Protocol）",
    termEn: "OGP: Open Graph Protocol",
    category: "SEO・SNS",
    metaDescription: "OGP（Open Graph Protocol）とは何か、og:imageの設定方法・SNS拡散への影響をわかりやすく解説します。",
    definition: "OGP（Open Graph Protocol）とは、FacebookやTwitterなどのSNSでウェブページがシェアされたときに、タイトル・説明・サムネイル画像を正しく表示させるためのメタタグの規格です。",
    detail: "OGPを正しく設定することで、SNSシェア時に美しいカード形式で表示され、クリック率・拡散率が向上します。また、og:imageで設定した画像（1200×630px推奨）がSNSのサムネイルとして表示されます。",
    points: [
      { title: "必須OGPタグ", body: "og:title（タイトル）・og:description（説明）・og:image（画像URL）・og:url（ページURL）・og:type（websiteまたはarticle）が基本的なOGPタグです。" },
      { title: "Twitter/X用メタタグ", body: "TwitterはOGPとは別に、twitter:card・twitter:titleなどの専用メタタグが必要です。twitter:cardは「summary_large_image」が大きなサムネイルを表示させる設定です。" },
    ],
    faqs: [
      { q: "OGPが設定されていないとどうなりますか？", a: "SNSでシェアされたとき、タイトル・画像が正しく表示されず地味なリンクになります。OGP未設定はクリック率を大幅に下げる要因になります。" },
    ],
    related: [
      { href: "/glossary/seo", label: "SEO", desc: "検索最適化" },
      { href: "/guide/ogp-setup", label: "OGP設定ガイド", desc: "設定の詳細" },
    ],
  },
  {
    slug: "kpi",
    term: "KPI（重要業績評価指標）",
    termEn: "KPI: Key Performance Indicator",
    category: "マーケティング",
    metaDescription: "KPI（Key Performance Indicator）とは何か、Web集客でのKPIの設定方法・重要な指標をわかりやすく解説します。",
    definition: "KPI（Key Performance Indicator：重要業績評価指標）とは、目標達成に向けた進捗を測定するための定量的な指標です。Web集客では「月間問い合わせ数」「検索順位」「流入数」「CV率」などがKPIとして設定されます。",
    detail: "適切なKPIを設定・計測することで、どの施策が効果を出しているかを客観的に評価できます。KPIはビジネス目標（KGI：Key Goal Indicator）から逆算して設定することが重要です。",
    points: [
      { title: "Web集客における主要なKPI", body: "・MEO：検索順位・GBPクリック数・電話タップ数 ・SEO：オーガニック流入数・キーワード順位 ・SNS：フォロワー数・エンゲージメント率 ・サイト全体：セッション数・CV数・CV率 が代表的なKPIです。" },
      { title: "KPIを定期的に見直す重要性", body: "KPIは固定せず、事業フェーズや施策の変化に応じて見直します。達成した指標は次のレベルに引き上げ、機能しない指標は変更する柔軟性が必要です。" },
    ],
    faqs: [
      { q: "KPIとKGIの違いは何ですか？", a: "KGI（Key Goal Indicator）は最終的な経営目標（売上・利益・顧客数など）、KPIはKGI達成のための中間指標です。例えばKGI「月間売上100万円増」に対してKPI「月間問い合わせ数50件」を設定します。" },
    ],
    related: [
      { href: "/support/reporting", label: "月次レポーティング", desc: "KPI計測の実践" },
      { href: "/support/analytics-setup", label: "アナリティクス設定", desc: "KPI計測環境の構築" },
    ],
  },
  {
    slug: "pdca",
    term: "PDCA（計画・実行・確認・改善）",
    termEn: "PDCA: Plan, Do, Check, Act",
    category: "マーケティング",
    metaDescription: "PDCAサイクルとはWebマーケティングへの活用方法・高速PDCAの回し方をわかりやすく解説します。",
    definition: "PDCA（Plan-Do-Check-Act）サイクルとは、品質改善・業務改善のための継続的な管理サイクルです。Plan（計画）→Do（実施）→Check（確認・評価）→Act（改善・次の計画）を繰り返すことで、施策の精度を継続的に高めます。",
    detail: "Web集客においては月次のPDCAサイクルが一般的です。毎月の施策実施→データ確認→原因分析→翌月の改善策を繰り返すことで、集客効果を積み上げていきます。",
    points: [
      { title: "Web集客のPDCAサイクル例", body: "Plan：翌月のGBP投稿・記事テーマ・SNS施策の計画 → Do：計画通りの施策実施 → Check：順位・流入数・CV数の変化を確認 → Act：効果の高かった施策を強化、効果のなかった施策を見直す" },
    ],
    faqs: [
      { q: "PDCAをうまく回すためのポイントは何ですか？", a: "①Checkでは数値を正確に計測する計測環境の整備、②ActionではCheckで見つけた課題に具体的な施策を対応させる、③サイクルをできるだけ短くして高速PDCAを意識することが重要です。" },
    ],
    related: [
      { href: "/support/operation", label: "継続運用サポート", desc: "月次PDCAの実施" },
      { href: "/support/reporting", label: "月次レポーティング", desc: "Checkのデータ提供" },
    ],
  },
  {
    slug: "content-marketing",
    term: "コンテンツマーケティング",
    termEn: "Content Marketing",
    category: "SEO・マーケティング",
    metaDescription: "コンテンツマーケティングとは何か、SEOとの連携・効果・具体的な施策をわかりやすく解説します。",
    definition: "コンテンツマーケティングとは、ターゲットユーザーにとって価値のある情報（ブログ記事・動画・SNS投稿・ホワイトペーパー等）を継続的に発信することで、信頼を構築しながら潜在顧客を引き寄せるマーケティング手法です。",
    detail: "コンテンツマーケティングとSEOは密接に連携しています。SEOを意識したコンテンツを継続発信することで、広告費なしに検索エンジンから安定した流入を獲得できます。一度作成したコンテンツは継続的に集客し続ける「資産」になります。",
    points: [
      { title: "コンテンツマーケティングのフロー", body: "①ターゲットペルソナの設定 → ②キーワードリサーチ → ③コンテンツカレンダー策定 → ④コンテンツ制作・公開 → ⑤効果計測・リライト → ⑥繰り返し" },
    ],
    faqs: [
      { q: "コンテンツマーケティングはどのくらいの期間で効果が出ますか？", a: "一般的に3〜6ヶ月で成果が見え始め、1〜2年で安定した流入基盤が確立します。広告と異なり即効性は低いですが、長期的な費用対効果は非常に高くなります。" },
    ],
    related: [
      { href: "/solutions/seo-content", label: "SEO×コンテンツ", desc: "統合戦略" },
      { href: "/support/content-creation", label: "コンテンツ制作代行", desc: "制作の外注" },
      { href: "/services/seo", label: "SEO対策サービス", desc: "検索最適化" },
    ],
  },
  {
    slug: "sns-marketing",
    term: "SNSマーケティング",
    termEn: "SNS Marketing",
    category: "SNS",
    metaDescription: "SNSマーケティングとは何か、各SNSプラットフォームの特徴・活用方法・効果をわかりやすく解説します。",
    definition: "SNSマーケティングとは、Instagram・X（旧Twitter）・Facebook・LINE・TikTok等のソーシャルメディアを活用して、ブランド認知・顧客との関係構築・集客を行うマーケティング手法です。",
    detail: "SNSは広告費なしに情報を発信できるオウンドメディアとして機能し、フォロワーとの継続的なコミュニケーションでブランドロイヤルティを高めます。MEO・SEOと組み合わせることで相乗効果が生まれます。",
    points: [
      { title: "主要SNSの特徴と向いている業種", body: "Instagram：ビジュアル系（飲食・美容・ファッション・インテリア）/ X（Twitter）：情報拡散・リアルタイム / Facebook：地域ビジネス・中高年層 / LINE公式：リピーター定着・予約促進 / TikTok：若年層向け・動画コンテンツ" },
    ],
    faqs: [
      { q: "どのSNSから始めるべきですか？", a: "自社のターゲット顧客が最も利用しているSNSを選ぶことが重要です。来店型ビジネスはInstagram・LINE公式から始めるのが効果的なケースが多いです。" },
    ],
    related: [
      { href: "/services/sns", label: "SNS運用代行", desc: "プロによるSNS運用" },
      { href: "/sns/instagram", label: "Instagram運用", desc: "ビジュアル系SNS" },
      { href: "/solutions/meo-sns", label: "MEO×SNS", desc: "マップとSNSの連携" },
    ],
  },
  {
    slug: "google-ads",
    term: "Google広告（リスティング広告）",
    termEn: "Google Ads / Listing Ads",
    category: "広告",
    metaDescription: "Google広告（リスティング広告）とは何か、SEOとの違い・費用・活用方法をわかりやすく解説します。",
    definition: "Google広告（旧Google AdWords）とは、Googleの検索結果ページや関連ウェブサイトに広告を表示するサービスです。リスティング広告はキーワード検索に連動して表示される広告で、クリックされた時にのみ費用が発生するPPC（Pay Per Click）型の課金システムを採用しています。",
    detail: "SEOと異なり、広告費を支払う限り即座に検索結果上位に表示できます。ただし、広告を止めると即座に表示がなくなります。短期的な集客や新商品・キャンペーンの告知に有効です。",
    points: [
      { title: "SEOとGoogle広告の使い分け", body: "即効性が必要な場面・新サービスの立ち上げ・季節キャンペーン：広告 / 長期的で安定した集客・コスト削減：SEO。多くの場合、両方を並行して実施することが最も効果的です。" },
    ],
    faqs: [
      { q: "Google広告の予算はいくらから始められますか？", a: "1日500〜1,000円から開始可能ですが、データ収集と最適化のために最低1日3,000〜5,000円程度の予算を確保することを推奨します。クリック単価は業種・競合によって大きく異なります。" },
    ],
    related: [
      { href: "/glossary/seo", label: "SEO", desc: "自然検索対策" },
      { href: "/glossary/cv-rate", label: "CV率", desc: "広告効果の指標" },
    ],
  },
  {
    slug: "responsive-design",
    term: "レスポンシブデザイン",
    termEn: "Responsive Design",
    category: "Web制作",
    metaDescription: "レスポンシブデザインとは何か、モバイルファーストの重要性・SEOへの影響をわかりやすく解説します。",
    definition: "レスポンシブデザインとは、スマートフォン・タブレット・PC等の様々な画面サイズに自動的に対応するウェブサイトのデザイン手法です。一つのHTMLで全デバイスに対応するため、スマホ専用サイトと通常サイトを別々に管理する必要がありません。",
    detail: "Googleはモバイルファーストインデックス（スマホ版サイトを評価の基準にする）を採用しており、レスポンシブデザインはSEOの観点からも必須です。スマートフォンからの検索比率が全体の60〜70%を超える現在、レスポンシブ対応は絶対的な要件です。",
    points: [
      { title: "モバイルファーストの重要性", body: "現在の検索トラフィックの約60〜70%がスマートフォンからです。Googleはモバイル版サイトを評価の基準とするため、スマホで快適に使えるサイト設計がSEO・UX両方の観点で最優先事項です。" },
    ],
    faqs: [
      { q: "既存サイトをレスポンシブ対応にするにはどうすればいいですか？", a: "既存サイトの構造によりますが、CSSの修正で対応できる場合と、サイト全体のリニューアルが必要な場合があります。まずは現状のモバイル対応度をGoogle PageSpeed Insightsで確認しましょう。" },
    ],
    related: [
      { href: "/services/web-design", label: "ホームページ制作", desc: "レスポンシブ対応サイト" },
      { href: "/glossary/core-web-vitals", label: "Core Web Vitals", desc: "表示速度・UX指標" },
    ],
  },
  {
    slug: "cms",
    term: "CMS（コンテンツ管理システム）",
    termEn: "CMS: Content Management System",
    category: "Web制作",
    metaDescription: "CMS（Content Management System）とは何か、WordPress・Next.js・ヘッドレスCMSの違いと選び方をわかりやすく解説します。",
    definition: "CMS（Content Management System：コンテンツ管理システム）とは、プログラミング知識なしにウェブサイトのコンテンツを管理・更新できるシステムです。WordPressが世界シェア約40%を占める最も普及したCMSです。",
    detail: "CMSを使うことで、ブログ記事の投稿・画像の変更・メニューの更新などを管理画面から簡単に行えます。Next.js等のフレームワークとWordPress等のCMSを組み合わせた「ヘッドレスCMS構成」も近年普及しています。",
    points: [
      { title: "主要CMSの比較", body: "WordPress：世界シェア1位・プラグインが豊富・SEOに対応 / Next.js（Jamstack）：表示速度・セキュリティ優秀・開発コスト高め / Shopify：EC特化・使いやすい管理画面 / Notion等ヘッドレスCMS：柔軟性高い" },
    ],
    faqs: [
      { q: "WordPressとNext.jsはどちらが良いですか？", a: "更新を自社でやりたい・SEOブログを運用したい：WordPress / 表示速度・セキュリティ・スケーラビリティを重視：Next.js / 両方のメリットが欲しい：ヘッドレスWordPress（WP+Next.js）という選択肢もあります。" },
    ],
    related: [
      { href: "/services/web-design", label: "ホームページ制作", desc: "CMS選定含む制作" },
      { href: "/web-design/nextjs", label: "Next.js制作", desc: "Next.jsサイト制作" },
      { href: "/web-design/wordpress", label: "WordPress制作", desc: "WordPress制作" },
    ],
  },
  {
    slug: "lp",
    term: "LP（ランディングページ）",
    termEn: "LP: Landing Page",
    category: "Web制作・マーケティング",
    metaDescription: "LP（ランディングページ）とは何か、コーポレートサイトとの違い・CV率を高めるLPの設計方法をわかりやすく解説します。",
    definition: "LP（Landing Page：ランディングページ）とは、広告・検索・SNS等から流入したユーザーが最初にアクセスするページで、特定の目標（購入・問い合わせ・資料請求）へのコンバージョンに特化して設計されたページです。通常、他のページへのナビゲーションを排除し、CVへの導線のみを配置します。",
    detail: "LPはCVに特化した縦長の1ページ構成が一般的です。コーポレートサイトが企業・サービス全体を紹介するのに対し、LPは特定のサービス・商品の購入・申し込みを促すための設計です。",
    points: [
      { title: "CV率の高いLPの構成要素", body: "①強力なキャッチコピー（ファーストビュー）、②悩み・課題への共感、③解決策（サービス紹介）、④信頼要素（実績・口コミ・受賞）、⑤FAQ（不安解消）、⑥CTA（行動喚起）を順に配置する構成が基本です。" },
    ],
    faqs: [
      { q: "LPとホームページの違いは何ですか？", a: "ホームページ（コーポレートサイト）は会社全体の情報を提供する複数ページのサイト、LPは特定の目的（購入・申込）に特化した1ページのサイトです。広告のリンク先にLPを使い、企業情報はホームページに置く使い分けが一般的です。" },
    ],
    related: [
      { href: "/services/web-design", label: "ホームページ制作", desc: "LP制作も対応" },
      { href: "/glossary/cv-rate", label: "CV率", desc: "LPの効果指標" },
      { href: "/glossary/cta", label: "CTA", desc: "行動喚起の設計" },
    ],
  },
  {
    slug: "domain-authority",
    term: "ドメインオーソリティ（DA）",
    termEn: "Domain Authority (DA)",
    category: "SEO",
    metaDescription: "ドメインオーソリティ（Domain Authority）とは何か、SEOへの影響・向上方法をわかりやすく解説します。",
    definition: "ドメインオーソリティ（DA：Domain Authority）とは、Mozが開発したウェブサイトの検索エンジンでのランキング力を予測するスコアです（1〜100）。被リンクの量と質・ドメイン年齢・サイト規模等を基に算出されます。Googleの公式指標ではありませんが、SEO業界でサイトの信頼性評価に広く使用されています。",
    detail: "DAが高いサイト（大手ニュースサイト・有名企業・政府機関等）からの被リンクはSEO評価への影響が大きく、DAが低いサイトからの多量リンクはスパムとみなされるリスクがあります。",
    points: [
      { title: "ドメインオーソリティを高める方法", body: "①高品質なコンテンツの継続作成で自然な被リンクを獲得、②業界メディア・ブログへの寄稿・PR、③信頼性の高いサイトへの掲載（業界団体・メディア等）がDAを高める主要な方法です。" },
    ],
    faqs: [
      { q: "新しいサイトのDAはなぜ低いのですか？", a: "新規サイトは被リンクがなく・サイト年齢も短いため、DAは1に近い低い値から始まります。高品質なコンテンツの継続発信と被リンク獲得活動を続けることでDAは徐々に向上します。" },
    ],
    related: [
      { href: "/glossary/seo", label: "SEO", desc: "検索エンジン最適化" },
      { href: "/glossary/e-e-a-t", label: "E-E-A-T", desc: "信頼性の評価基準" },
    ],
  },
  {
    slug: "isr",
    term: "ISR（インクリメンタル静的再生成）",
    termEn: "ISR: Incremental Static Regeneration",
    category: "技術",
    metaDescription: "ISR（Incremental Static Regeneration）とは何か、Next.jsでの活用方法・静的生成・SSRとの違いをわかりやすく解説します。",
    definition: "ISR（Incremental Static Regeneration：インクリメンタル静的再生成）とは、Next.jsが提供する機能で、静的生成（SSG）の高速性とサーバーサイドレンダリング（SSR）の動的な更新を組み合わせた方式です。一定時間（revalidate）ごとにページを再生成してキャッシュを更新します。",
    detail: "ISRを使うことで、ブログ記事やECの商品ページを静的ファイルとして配信しながら、定期的に最新データに更新できます。完全静的生成より柔軟で、完全SSRよりも高速です。",
    points: [
      { title: "ISRの設定方法（Next.js App Router）", body: "ページファイルに export const revalidate = 3600 を追加するだけで、1時間（3600秒）ごとにページを再生成するISRが有効になります。0を設定すると動的レンダリング（毎回サーバーで生成）になります。" },
    ],
    faqs: [
      { q: "ISRを使うとSEOに影響しますか？", a: "ISRは静的ファイルを配信するため表示速度が速く、SEOに好影響があります。revalidateの間隔は更新頻度に応じて設定してください（ブログ記事なら3600秒〜86400秒が一般的）。" },
    ],
    related: [
      { href: "/glossary/core-web-vitals", label: "Core Web Vitals", desc: "表示速度指標" },
      { href: "/web-design/nextjs", label: "Next.js制作", desc: "ISR対応サイト制作" },
    ],
  },
  {
    slug: "meta-description",
    term: "メタディスクリプション",
    termEn: "Meta Description",
    category: "SEO",
    metaDescription: "メタディスクリプション（meta description）とは何か、最適な文字数・書き方・SEOへの影響をわかりやすく解説します。",
    definition: "メタディスクリプション（meta description）とは、HTMLのheadタグ内に記述するページの説明文で、Google検索結果のタイトル下に表示されるテキストです（スニペット）。SEOの直接的なランキング要因ではありませんが、クリック率（CTR）に大きく影響します。",
    detail: "Googleが自動的に生成するスニペットとは異なり、メタディスクリプションを適切に設定することで検索ユーザーへの訴求力を高められます。ただし、Googleが設定値を採用しない場合もあります。",
    points: [
      { title: "効果的なメタディスクリプションの書き方", body: "①120文字以内（スマホで表示される文字数）、②ターゲットキーワードを自然に含める、③ページの内容を正確に要約する、④「無料」「〇〇日以内」等の具体的な価値をアピールする、⑤行動を促すフレーズで締めくくる、が基本です。" },
    ],
    faqs: [
      { q: "メタディスクリプションを設定しないとどうなりますか？", a: "Googleがページの本文から自動的にスニペットを生成します。意図しない文章が表示されることが多く、クリック率が下がる可能性があるため、全ページに適切に設定することを推奨します。" },
    ],
    related: [
      { href: "/glossary/seo", label: "SEO", desc: "検索エンジン最適化" },
      { href: "/guide/seo-basics", label: "SEO基礎ガイド", desc: "SEOを始める" },
    ],
  },
  {
    slug: "sitemap-xml",
    term: "サイトマップ（sitemap.xml）",
    termEn: "Sitemap (sitemap.xml)",
    category: "SEO・技術",
    metaDescription: "sitemap.xml（XMLサイトマップ）とは何か、SEOへの効果・作成・送信方法をわかりやすく解説します。",
    definition: "sitemap.xml（XMLサイトマップ）とは、ウェブサイト内の全URLを記載したXML形式のファイルです。GoogleのクローラーにサイトのURLを効率的に伝え、インデックス（検索データベースへの登録）を促進します。Search Consoleからサイトマップを送信することで、Googleがサイトを迅速にクロールできます。",
    detail: "特に新規サイト・ページ数の多いサイト・動的に生成されるページが多いサイトでは、サイトマップの設置・送信がインデックスを速めるために重要です。Next.jsではapp/sitemap.tsを作成することで自動的にsitemap.xmlが生成されます。",
    points: [
      { title: "サイトマップとHTMLサイトマップの違い", body: "sitemap.xmlはGoogleなどの検索エンジンのクローラー向けの機械読み取り用ファイル。HTMLサイトマップ（/sitemap のURL）はユーザー向けのナビゲーションページで、人間が読みやすい形式でサイトの全ページ一覧を提供します。" },
    ],
    faqs: [
      { q: "サイトマップを送信するとすぐにインデックスされますか？", a: "サイトマップ送信はGoogleへのクロール要求ですが、実際のインデックスはGoogleの判断次第です。サイトマップ送信後、通常数日〜数週間でインデックスされます。" },
    ],
    related: [
      { href: "/glossary/seo", label: "SEO", desc: "検索最適化" },
      { href: "/sitemap", label: "HTMLサイトマップ", desc: "サイト全体の一覧" },
    ],
  },
  {
    slug: "bounce-rate",
    term: "直帰率（バウンスレート）",
    termEn: "Bounce Rate",
    category: "アナリティクス",
    metaDescription: "直帰率（バウンスレート）とは何か、高い場合の原因・改善方法をわかりやすく解説します。",
    definition: "直帰率（バウンスレート）とは、ウェブサイトに訪問したユーザーが最初のページだけを見てサイトを離脱した割合です。UA（旧Google Analytics）では1ページ閲覧のみでの離脱率として計算されていました。GA4では「エンゲージメント率」（10秒以上の滞在・2ページ以上閲覧・CV等を含む計算）に替わっています。",
    detail: "直帰率が高い場合、「ページの内容がユーザーの期待と合っていない」「ページが重くて離脱された」「そのページで目的を達成した」等の可能性があります。業種・ページ目的によって適切な直帰率の範囲が異なります。",
    points: [
      { title: "直帰率が高い場合の原因と改善", body: "ページの内容がキーワードの意図と合っていない（コンテンツを改善）/ 表示速度が遅い（Core Web Vitals対応）/ スマホ表示が崩れている（レスポンシブ対応）/ ファーストビューの訴求が弱い（CTA・キャッチコピーの改善）" },
    ],
    faqs: [
      { q: "直帰率はどのくらいであれば良いですか？", a: "業種・ページ種類によって異なります。ブログ記事は70〜90%、ECサイトは40〜60%、LP（ランディングページ）は50〜70%が一般的な目安です。自社の業界平均と比較して判断してください。" },
    ],
    related: [
      { href: "/support/analytics-setup", label: "アナリティクス設定", desc: "GA4での計測" },
      { href: "/glossary/cv-rate", label: "CV率", desc: "コンバージョン率" },
    ],
  },
];

export interface CaseStudy {
  slug: string;
  industry: string;
  industrySlug: string;
  region: string;
  areaSlug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  challenge: string;
  services: string[];
  serviceLinks: { label: string; href: string }[];
  overview: string;
  implementation: {
    heading: string;
    items: string[];
  }[];
  results: string[];
  hasWordPress: boolean;
  hasGBP: boolean;
  hasSNS: boolean;
  faq: { q: string; a: string }[];
  relatedIndustry: string;
  relatedArea: string;
  publishedAt: string;
}

export const CASES: CaseStudy[] = [
  {
    slug: "water-heater-seo",
    industry: "給湯器・設備工事",
    industrySlug: "plumbing",
    region: "千葉県",
    areaSlug: "chiba",
    title: "給湯器専門サービスサイトのSEO・MEO設計",
    metaTitle: "給湯器専門サイトのSEO・MEO設計事例｜千葉県の設備業者｜株式会社サイプレス",
    metaDescription: "千葉県の給湯器関連事業者のホームページ制作・SEO/MEO設計事例。地域検索×専門性で問い合わせ獲得を実現した施策内容を公開。",
    challenge: "既存サイトが古く、Googleマップにも登録されていなかった。「給湯器 交換 千葉」などの検索で競合他社に完全に負けており、問い合わせの大半がチラシ経由に依存していた。",
    services: ["ホームページ制作", "SEO対策", "MEO対策"],
    serviceLinks: [
      { label: "ホームページ制作", href: "/web-design" },
      { label: "SEO対策", href: "/seo" },
      { label: "MEO対策", href: "/meo" },
    ],
    overview: "千葉県の給湯器交換・修理専門事業者。既存の名刺代わりサイトをSEO・CV設計を組み込んだ専門サイトへ全面刷新。同時にGoogleビジネスプロフィールの新規登録・最適化と地域キーワードの内部SEO実装を行った。",
    implementation: [
      {
        heading: "サイト設計・制作",
        items: [
          "メインサービス（給湯器交換・修理・設置）ごとに専用ページを設計",
          "地域名×サービス名のキーワードを軸とした内部リンク設計",
          "施工事例ページをWordPressで更新できる構造に設計",
          "CTA（電話・メール）を全ページに統一配置",
          "Core Web Vitals対応・Lighthouse 90+達成",
        ],
      },
      {
        heading: "SEO対策",
        items: [
          "「給湯器 交換 千葉」「給湯器 修理 即日」等のキーワードマッピング",
          "FAQPage・LocalBusiness・Service構造化データ実装",
          "Googleサーチコンソール初期設定・インデックス促進",
          "内部リンク設計：施工事例→サービスページ→問い合わせの導線",
        ],
      },
      {
        heading: "MEO対策",
        items: [
          "Googleビジネスプロフィール新規作成・各種情報整備",
          "カテゴリ・営業時間・サービスエリアの正確な設定",
          "写真の初期登録（作業現場・スタッフ・施工後）",
          "口コミ獲得の自然な導線をサイト内に設計",
        ],
      },
    ],
    results: [
      "サイトリニューアル後、地域名+給湯器キーワードで検索結果に表示されるようになった",
      "Googleビジネスプロフィール経由の電話問い合わせが開始した",
      "施工事例をWordPressで自社更新できる体制が整備された",
      "Search Consoleでの表示回数が大幅に増加した",
    ],
    hasWordPress: true,
    hasGBP: true,
    hasSNS: false,
    faq: [
      {
        q: "地域名を含む検索でのSEO対策はどのくらい効果がありますか？",
        a: "「地域名＋業種キーワード」は検索ボリュームは大きくありませんが、購買意欲の高いユーザーからの検索です。競合が整備されていない地域では、適切なページ設計とMEO対策の組み合わせで問い合わせ獲得につながりやすいです。",
      },
      {
        q: "WordPressで施工事例を自社更新できますか？",
        a: "はい。施工事例のみWordPressで管理し、フロントエンドはNext.jsで高速表示する構成を採用できます。スタッフの方がブロックエディタで更新可能な設計にすることが多いです。",
      },
    ],
    relatedIndustry: "/industries/plumbing",
    relatedArea: "/area/chiba",
    publishedAt: "2026-05-01",
  },
  {
    slug: "tatami-store-renewal",
    industry: "畳・インテリア",
    industrySlug: "local-store",
    region: "鹿児島県",
    areaSlug: "nationwide",
    title: "老舗畳店のサイトリニューアルとWordPress施工事例連携",
    metaTitle: "老舗畳店のサイトリニューアル事例｜WordPress施工事例連携｜株式会社サイプレス",
    metaDescription: "鹿児島県の老舗畳店のサイトリニューアル事例。WordPress施工事例連携・MEO設計・地域SEO強化で、老舗の信頼性を検索集客に活かした施策内容。",
    challenge: "開業から数十年の実績がありながら、サイトが15年以上更新されておらず、スマートフォンにも対応していなかった。Googleマップへの登録もなく、地元以外からの新規顧客獲得に課題があった。",
    services: ["ホームページ制作", "SEO対策", "MEO対策"],
    serviceLinks: [
      { label: "ホームページ制作", href: "/web-design" },
      { label: "SEO対策", href: "/seo" },
      { label: "MEO対策", href: "/meo" },
    ],
    overview: "鹿児島県の老舗畳店。創業からの実績・職人技・施工写真という貴重な資産を活かし、E-E-A-T強化型のサイトリニューアルを実施。施工事例はWordPressで継続更新できる構造とした。",
    implementation: [
      {
        heading: "サイト設計・制作",
        items: [
          "職人プロフィール・施工実績・素材説明を充実させたE-E-A-T設計",
          "施工事例ページをWordPressブログ構造で継続更新可能に",
          "モバイルファースト・レスポンシブデザイン対応",
          "Before/After施工写真の最適化（next/image・webp変換）",
        ],
      },
      {
        heading: "SEO・MEO対策",
        items: [
          "「畳 張替え ○○市」等の地域キーワードを軸とした内部設計",
          "職人プロフィールページでPerson構造化データ実装",
          "施工事例にArticle Schema・BreadcrumbList実装",
          "Googleビジネスプロフィール新規登録・初期最適化",
          "施工写真をGBPに定期投稿できる運用ガイド作成",
        ],
      },
    ],
    results: [
      "スマートフォン対応により直帰率が大幅に改善",
      "施工事例ページの充実でE-E-A-T評価が向上",
      "Googleビジネスプロフィール経由の問い合わせが新たに開始",
      "職人プロフィールと実績の充実で信頼性の訴求が強化された",
    ],
    hasWordPress: true,
    hasGBP: true,
    hasSNS: false,
    faq: [
      {
        q: "老舗の実績や職人情報はSEOに有利ですか？",
        a: "はい、Googleが重視するE-E-A-T（経験・専門性・権威性・信頼性）において、長年の実績・職人の専門性・具体的な施工事例は非常に有利に働きます。これらを構造化データとともにページに掲載することで評価されやすくなります。",
      },
      {
        q: "WordPressとNext.jsを組み合わせる構成はどのように機能しますか？",
        a: "ブログ・施工事例部分はWordPressで管理し、フロントエンド（表示部分）はNext.jsでヘッドレス構成にすることが多いです。管理はWordPressの使い慣れたエディタのまま、表示は高速かつSEOに強い状態を維持できます。",
      },
    ],
    relatedIndustry: "/industries/local-store",
    relatedArea: "/area/nationwide",
    publishedAt: "2026-05-10",
  },
  {
    slug: "relaxation-salon-meo",
    industry: "リラクゼーション・整体",
    industrySlug: "osteopathic",
    region: "千葉県君津市",
    areaSlug: "chiba",
    title: "リラクゼーションサロンの地域SEO・MEO導線設計",
    metaTitle: "リラクゼーションサロンのMEO・地域SEO事例｜千葉県君津市｜株式会社サイプレス",
    metaDescription: "千葉県君津市のリラクゼーションサロンのMEO対策・地域SEO設計事例。Googleマップ集客の導線と地域キーワードSEOを組み合わせた施策内容。",
    challenge: "開業1年以内のサロンで、Googleマップでの順位が低く新規来店が伸び悩んでいた。口コミも少なく、検索での認知がほぼゼロの状態だった。",
    services: ["MEO対策", "SEO対策", "SNS運用"],
    serviceLinks: [
      { label: "MEO対策", href: "/meo" },
      { label: "SEO対策", href: "/seo" },
      { label: "SNS運用", href: "/sns" },
    ],
    overview: "千葉県君津市のリラクゼーションサロン。開業期の集客基盤構築として、MEO対策・地域SEO・Instagram運用の3施策を同時にスタート。Googleビジネスプロフィールの最適化を中心に据え、口コミ獲得の導線をサービス提供フローに組み込んだ。",
    implementation: [
      {
        heading: "MEO対策",
        items: [
          "Googleビジネスプロフィールのカテゴリ・説明文・属性を最適化",
          "メニュー・料金・予約リンクの整備",
          "写真（外観・院内・施術ルーム）の初期登録と週次更新",
          "口コミ依頼の自然な流れをサービス提供後のトーク・LINEに組み込み",
          "Google投稿：週1回のキャンペーン・お知らせ投稿",
        ],
      },
      {
        heading: "地域SEO",
        items: [
          "「君津 マッサージ」「君津市 リラクゼーション」等のキーワード設計",
          "LocalBusiness構造化データ・FAQPage実装",
          "サービス別ページとエリアページを内部リンクで接続",
        ],
      },
      {
        heading: "Instagram運用",
        items: [
          "月8〜12投稿の運用代行（施術紹介・スタッフ紹介・季節メニュー）",
          "ハッシュタグ設計（地域×施術種別）",
          "MEOとの連携：GBP投稿にInstagram連動",
        ],
      },
    ],
    results: [
      "Googleマップの表示圏内に入り、地域名＋業種キーワードで安定表示されるようになった",
      "開業3ヶ月で口コミ件数が増加し、評価の可視化が進んだ",
      "Instagramのフォロワーが増加し、既存客のリピート率が向上した",
      "MEO・SNS・SEOの3施策連動で複数の集客経路が形成された",
    ],
    hasWordPress: false,
    hasGBP: true,
    hasSNS: true,
    faq: [
      {
        q: "開業直後からMEO対策を始めるメリットはありますか？",
        a: "はい、非常に大きいです。開業直後にGoogleビジネスプロフィールを最適化しておくと、口コミが蓄積される前から検索に表示されやすくなります。早期に口コミ獲得の仕組みを整えることで、開業後の集客スピードが変わります。",
      },
      {
        q: "SNS運用とMEO対策はどう連携しますか？",
        a: "Instagramの投稿コンテンツをGoogleビジネスプロフィールの投稿にも転用することで、両方の更新頻度を維持できます。また、SNSでのエンゲージメントが間接的にブランド認知を高め、MEOの評価要因の一つである「知名度シグナル」向上につながります。",
      },
    ],
    relatedIndustry: "/industries/osteopathic",
    relatedArea: "/area/chiba",
    publishedAt: "2026-05-15",
  },
  {
    slug: "freight-jobs-seo",
    industry: "軽貨物・運送",
    industrySlug: "local-store",
    region: "関東エリア",
    areaSlug: "tokyo",
    title: "軽貨物求人サイトのGoogle for Jobs対応SEO設計",
    metaTitle: "軽貨物求人サイトのGoogle for Jobs対応SEO事例｜関東エリア｜株式会社サイプレス",
    metaDescription: "関東エリアの軽貨物事業者の求人サイトでGoogle for Jobs対応のSEO設計事例。構造化データ実装と求人特化SEOで検索からの求人応募を増加させた施策内容。",
    challenge: "ドライバー不足が深刻な中、求人媒体への依存度が高く掲載費用が増加していた。自社サイトからの直接応募が少なく、Google検索から求人情報が見つかりにくい状態だった。",
    services: ["ホームページ制作", "SEO対策"],
    serviceLinks: [
      { label: "ホームページ制作", href: "/web-design" },
      { label: "SEO対策", href: "/seo" },
    ],
    overview: "関東エリアの軽貨物・宅配代行事業者。求人媒体依存から脱却し、自社サイトからの直接応募獲得を目的としてサイトリニューアルとGoogle for Jobs対応のSEO設計を実施。",
    implementation: [
      {
        heading: "求人SEO・構造化データ実装",
        items: [
          "JobPosting構造化データ（Google for Jobs対応）を全求人ページに実装",
          "求人ページを職種・エリア別に分割し、キーワードの明確化",
          "応募フォームの導線最適化（スマートフォン操作性重視）",
          "「軽貨物 ドライバー 求人 ○○市」等の地域×職種キーワード対応",
        ],
      },
      {
        heading: "サイト設計",
        items: [
          "求人情報・会社の雰囲気・先輩ドライバーの声ページを設計",
          "給与・勤務条件を明確に記載したページ構成",
          "応募後のフロー（面接・研修・初日の流れ）を明示",
        ],
      },
    ],
    results: [
      "Google検索の求人特集枠（Google for Jobs）に表示されるようになった",
      "自社サイト経由の求人問い合わせが発生するようになった",
      "求人媒体への依存度を段階的に下げる基盤が整った",
    ],
    hasWordPress: false,
    hasGBP: false,
    hasSNS: false,
    faq: [
      {
        q: "Google for Jobsに対応するために何が必要ですか？",
        a: "Schema.orgのJobPosting構造化データを求人ページのHTMLに実装することが必要です。求人タイトル・勤務地・給与・雇用形態・掲載期間などの項目を正確に記述することで、Google検索の求人特集に表示される可能性が高まります。",
      },
      {
        q: "求人サイトのSEO対策で効果的なキーワードは何ですか？",
        a: "「職種名 + 地域名 + 求人」「職種名 + 雇用形態（正社員・アルバイト等）」の組み合わせが基本です。地域を細分化した長尾キーワードは競合が少なく上位表示しやすいため、事業エリアに合わせた細かいキーワード設計が有効です。",
      },
    ],
    relatedIndustry: "/industries/local-store",
    relatedArea: "/area/tokyo",
    publishedAt: "2026-05-20",
  },
  {
    slug: "interior-corporate-site",
    industry: "内装・施工",
    industrySlug: "construction",
    region: "東京都",
    areaSlug: "tokyo",
    title: "フランチャイズ内装会社のコーポレートサイト刷新",
    metaTitle: "内装・施工会社のコーポレートサイト刷新事例｜東京都｜株式会社サイプレス",
    metaDescription: "東京都の内装・施工関連企業のコーポレートサイト刷新事例。SEO設計・施工事例ページ・採用導線を組み込んだサイト構成と実施内容を公開。",
    challenge: "フランチャイズ加盟後、個別の認知度向上と自社ブランディングに課題があった。コーポレートサイトが存在せず、施工実績をWebで見せる手段がなかった。採用強化も急務だった。",
    services: ["ホームページ制作", "SEO対策"],
    serviceLinks: [
      { label: "ホームページ制作", href: "/web-design" },
      { label: "SEO対策", href: "/seo" },
    ],
    overview: "東京都の内装・施工関連企業。フランチャイズのコーポレートサイトを新規制作し、施工実績・サービス内容・採用情報を一体化。SEO設計と採用強化を同時に盛り込んだ構成で制作した。",
    implementation: [
      {
        heading: "コーポレートサイト制作",
        items: [
          "トップページ・会社概要・サービス・施工事例・採用・お問い合わせの標準構成",
          "施工事例ページをWordPressで自社更新できる構成",
          "採用ページにJobPosting構造化データ実装",
          "スマートフォン対応・Core Web Vitals最適化",
        ],
      },
      {
        heading: "SEO設計",
        items: [
          "「内装工事 東京」「店舗改装 ○○区」等の地域×サービスキーワード設計",
          "施工事例ページにArticle・BreadcrumbList Schema実装",
          "LocalBusiness・Organization構造化データ実装",
          "Google Search Console初期設定・インデックス申請",
        ],
      },
    ],
    results: [
      "施工実績を継続的にWebで公開できる体制が整備された",
      "採用ページの整備で問い合わせ経路が確保された",
      "Google検索での会社名検索時に正確な情報が表示されるようになった",
      "Googleビジネスプロフィールとサイト情報が統一された",
    ],
    hasWordPress: true,
    hasGBP: true,
    hasSNS: false,
    faq: [
      {
        q: "フランチャイズ加盟店でも独自サイトを持つメリットはありますか？",
        a: "はい。フランチャイズ本部サイトとは別に独自のコーポレートサイトを持つことで、地域名+サービスキーワードでの検索集客・採用強化・ブランディングが可能になります。施工事例や地域情報を独自に発信できるため、地元での認知度向上に効果的です。",
      },
      {
        q: "施工事例ページはSEOに効果がありますか？",
        a: "施工事例は「地域名×工事種別×材料名」など具体的なキーワードを自然に含められるため、ロングテールSEOに非常に効果的です。施工前後の写真・施工内容の詳細記述・対応地域の明記を組み合わせることで、見込み顧客の検索にヒットしやすくなります。",
      },
    ],
    relatedIndustry: "/industries/construction",
    relatedArea: "/area/tokyo",
    publishedAt: "2026-05-25",
  },
  {
    slug: "restaurant-gbp",
    industry: "飲食",
    industrySlug: "restaurant",
    region: "東京都",
    areaSlug: "tokyo",
    title: "飲食店のGoogleビジネスプロフィール運用支援",
    metaTitle: "飲食店のGoogleビジネスプロフィール運用事例｜東京都｜株式会社サイプレス",
    metaDescription: "東京都の飲食店のGoogleビジネスプロフィール最適化・運用支援事例。口コミ獲得導線・写真投稿・Google投稿の継続運用による地域集客強化の施策内容。",
    challenge: "Googleマップに登録はあったが、情報が不完全で写真が少なく口コミも数件しかなかった。同エリアの競合店と比較してマップでの視認性が低く、来店数が伸び悩んでいた。",
    services: ["MEO対策", "SNS運用"],
    serviceLinks: [
      { label: "MEO対策", href: "/meo" },
      { label: "SNS運用", href: "/sns" },
    ],
    overview: "東京都の飲食店。既存のGoogleビジネスプロフィールを全面見直し、写真・メニュー情報・属性・営業時間の整備から口コミ獲得の仕組み作り、Google投稿の定期運用まで一括支援。",
    implementation: [
      {
        heading: "GBP最適化",
        items: [
          "カテゴリ・属性（バリアフリー・駐車場・予約可否等）の正確な設定",
          "説明文をキーワードを意識しながら自然な文章で刷新",
          "外観・内観・料理・スタッフ等の写真を30枚以上登録",
          "メニュー情報・価格帯をGBP内に整備",
          "予約リンク（ホットペッパー/自社予約フォーム）を設置",
        ],
      },
      {
        heading: "口コミ獲得・投稿運用",
        items: [
          "会計時に自然にGoogleマップのURLを案内するフローを設計",
          "QRコードカードを作成し卓上・レシートに設置",
          "Google投稿：週2回（ランチメニュー・イベント・季節メニュー）",
          "口コミへの返信テンプレート作成・返信サポート",
        ],
      },
    ],
    results: [
      "GBPの写真数増加後、検索表示回数が増加した",
      "口コミ件数が増加し、評価の信頼性が向上した",
      "Google投稿の定期更新でプロフィールのアクティブ度が改善した",
      "競合店比較でのマップ上の視認性が向上した",
    ],
    hasWordPress: false,
    hasGBP: true,
    hasSNS: true,
    faq: [
      {
        q: "Googleビジネスプロフィールの写真数は集客に影響しますか？",
        a: "はい、影響します。Googleの公式データでは、写真が多いプロフィールはそうでないプロフィールより問い合わせ数が多い傾向があります。特に飲食店は料理・店内・外観の充実した写真が顧客の来店意欲に直接影響します。",
      },
      {
        q: "口コミへの返信はMEOに効果がありますか？",
        a: "はい。口コミへのオーナー返信はGoogleビジネスプロフィールの運用アクティブ度を示すシグナルの一つです。また、返信内容にサービスや地域名を自然に含めることで、テキストコンテンツとしてのSEO効果も得られます。",
      },
    ],
    relatedIndustry: "/industries/restaurant",
    relatedArea: "/area/tokyo",
    publishedAt: "2026-06-01",
  },
  {
    slug: "cleaning-meo-sns",
    industry: "ハウスクリーニング",
    industrySlug: "cleaning",
    region: "東京都・千葉県",
    areaSlug: "tokyo",
    title: "ハウスクリーニング業者のMEO・SNS連動支援",
    metaTitle: "ハウスクリーニングのMEO・SNS連動支援事例｜東京都・千葉県｜株式会社サイプレス",
    metaDescription: "東京都・千葉県のハウスクリーニング事業者のMEO対策とSNS運用の連動支援事例。Googleマップ集客とInstagramの相乗効果を狙った施策内容を公開。",
    challenge: "個人経営のハウスクリーニング業者で、大手チェーンとGoogleマップで競合していた。認知度が低く、SNSも開設したものの投稿が続かず、どちらも中途半端な状態だった。",
    services: ["MEO対策", "SNS運用"],
    serviceLinks: [
      { label: "MEO対策", href: "/meo" },
      { label: "SNS運用", href: "/sns" },
    ],
    overview: "東京都・千葉県で活動するハウスクリーニング業者。MEO対策とInstagram運用を連動させ、清潔感・信頼性のビジュアル統一と地域検索への露出強化を同時に行った。",
    implementation: [
      {
        heading: "MEO対策",
        items: [
          "Googleビジネスプロフィールのサービスエリア・作業メニューを整備",
          "クリーニング作業のビフォーアフター写真を定期投稿",
          "口コミ導線：作業完了後にLINEでURL案内するフローを設計",
          "競合分析：上位表示店との差分をチェックし改善項目を特定",
        ],
      },
      {
        heading: "SNS運用",
        items: [
          "Instagram：月10投稿（作業前後・洗剤紹介・スタッフ紹介）の運用代行",
          "ビフォーアフター投稿の定型フォーマット作成",
          "ハッシュタグ設計（地域名×清掃種別×業界用語）",
          "MEO投稿とInstagramのコンテンツカレンダー一元管理",
        ],
      },
    ],
    results: [
      "Googleビジネスプロフィールの写真・投稿更新後、表示回数が増加した",
      "Instagramのフォロワーが増加し、DM経由の問い合わせが発生した",
      "MEOとSNSのビジュアル統一により「清潔・信頼性」の印象が強化された",
      "口コミ件数が継続的に増加する仕組みが確立した",
    ],
    hasWordPress: false,
    hasGBP: true,
    hasSNS: true,
    faq: [
      {
        q: "ハウスクリーニングのMEO対策で特に効果的な施策は何ですか？",
        a: "ビフォーアフター写真の継続投稿と口コミ獲得の組み合わせが最も効果的です。清掃業は視覚的な変化を見せやすいため、作業結果の写真が顧客の信頼感と来店動機を同時に高めます。また、サービスエリアを市区町村単位で正確に設定することで、地域名検索での表示確率が上がります。",
      },
      {
        q: "個人経営でも大手チェーンとGoogleマップで競合できますか？",
        a: "はい。Googleマップのローカル検索では、近接性・関連性・知名度の3要素が評価されます。近接性と関連性（情報の充実度）は個人でも最適化できる要素です。プロフィールの完成度・写真数・口コミ数を充実させることで、大手と競合する場面も多くあります。",
      },
    ],
    relatedIndustry: "/industries/cleaning",
    relatedArea: "/area/tokyo",
    publishedAt: "2026-06-10",
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}

export function getAllCaseSlugs(): string[] {
  return CASES.map((c) => c.slug);
}

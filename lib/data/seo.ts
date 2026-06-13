export interface SeoSubPageData {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  keyPoints: { icon: string; title: string; body: string }[];
  sections: { heading: string; body?: string; list?: string[] }[];
  benefits: { stat: string; unit: string; label: string; description: string }[];
  faq: { q: string; a: string }[];
  relatedPages: { title: string; description: string; href: string }[];
  seoMeta: { title: string; description: string; keywords: string[] };
}

export const SEO_PAGES: SeoSubPageData[] = [
  {
    slug: "local-seo",
    title: "ローカルSEO｜地域検索で上位表示を獲得する方法",
    subtitle: "「地域名＋サービス」検索で選ばれる存在になる",
    overview:
      "ローカルSEOとは、「東京 税理士」「新宿 美容院」など地域名を含む検索クエリで上位表示を獲得するための施策です。Googleマップのローカルパック表示と通常の検索結果の両方を対象とします。地域ビジネスにとって最も費用対効果の高いデジタルマーケティング手法の一つです。",
    keyPoints: [
      { icon: "MapPin", title: "Googleビジネスプロフィール最適化", body: "ローカルSEOの根幹。情報の網羅性・口コミ数・投稿頻度がランキングに直結します。" },
      { icon: "FileText", title: "エリアページ制作", body: "対象エリアに特化したランディングページを制作し、地域キーワードでの流入を獲得します。" },
      { icon: "Star", title: "NAP情報の統一", body: "Name・Address・Phone情報をWeb上で一致させることで、ローカル検索での信頼性を高めます。" },
      { icon: "Link", title: "地域メディアからの被リンク", body: "地域メディア・行政・商工会などからの被リンクが、地域内の権威性評価を高めます。" },
    ],
    sections: [
      {
        heading: "ローカルSEOと通常SEOの違い",
        body: "通常のSEOは全国対象のキーワードを狙いますが、ローカルSEOは地域名を含むキーワードや「現在地近く」での検索に特化します。地域密着型ビジネスにとっては、全国向けSEOよりも費用対効果が高い場合がほとんどです。",
      },
      {
        heading: "ローカルSEOのランキング要因",
        body: "Googleがローカル検索の順位決定に使う主要因は以下の通りです。",
        list: [
          "Googleビジネスプロフィールの最適化度",
          "口コミの数・評価・新鮮さ",
          "ウェブサイトのコンテンツ品質・地域関連性",
          "NAP情報の一致度・引用数",
          "ユーザー行動指標（クリック率・通話数・経路検索数）",
          "被リンクの質と地域関連性",
        ],
      },
      {
        heading: "対応エリアページの設計",
        body: "「東京都葛飾区 税理士」など複数のエリアキーワードを獲得するために、エリア別のランディングページを制作します。各ページは薄いコンテンツにならないよう、地域の特性・施術実績・アクセス情報などを含む充実した内容にします。",
      },
    ],
    benefits: [
      { stat: "94", unit: "%", label: "ローカルパック表示率", description: "対象エリア・キーワードでのローカルパック（地図上位3件）表示達成率" },
      { stat: "3.2", unit: "倍", label: "来店数増加", description: "ローカルSEO強化後の平均来店数増加倍率" },
      { stat: "67", unit: "%", label: "電話問い合わせ増加", description: "Googleマップ経由の月間電話問い合わせ数増加率" },
    ],
    faq: [
      { q: "ローカルSEOは全業種で有効ですか？", a: "飲食・美容・医療・士業・リフォームなど、地域で顧客を集める業種に特に有効です。ECサイトや全国対応のB2B企業には通常SEOの方が適しています。" },
      { q: "複数エリアに対応していますが、すべてのエリアでSEO対策できますか？", a: "はい、エリア別のランディングページ制作とGoogleビジネスプロフィールの多店舗管理で対応します。" },
      { q: "競合が多いエリアでも効果が出ますか？", a: "競合が多い都市部でも、適切な戦略と継続的な改善で上位表示は可能です。まずは競合分析から始めます。" },
    ],
    relatedPages: [
      { title: "MEO対策", description: "Googleマップでの上位表示戦略", href: "/services/meo" },
      { title: "テクニカルSEO", description: "サイト技術面の最適化", href: "/seo/technical-seo" },
      { title: "コンテンツSEO", description: "コンテンツで集客する戦略", href: "/seo/content-seo" },
    ],
    seoMeta: {
      title: "ローカルSEO｜地域検索で上位表示を獲得｜株式会社サイプレス",
      description: "ローカルSEOで「地域名＋サービス」検索での上位表示を実現。Googleビジネスプロフィール最適化・エリアページ制作・NAP統一まで一貫対応。",
      keywords: ["ローカルSEO", "地域SEO", "地図上位表示", "Googleマップ上位表示", "地域集客", "ローカル検索"],
    },
  },
  {
    slug: "technical-seo",
    title: "テクニカルSEO｜サイト技術面の最適化でクロールを改善",
    subtitle: "クローラビリティとインデックスを最大化する",
    overview:
      "テクニカルSEOとは、ウェブサイトの技術的な側面を最適化し、検索エンジンのクローラーがサイトを正しく認識・インデックスできるようにする施策です。いくら良いコンテンツを作っても、技術的な問題があれば検索エンジンに評価されません。",
    keyPoints: [
      { icon: "Zap", title: "Core Web Vitals改善", body: "LCP・FID・CLSなどのユーザー体験指標を改善し、Googleの評価を高めます。" },
      { icon: "Code2", title: "構造化データ実装", body: "Schema.orgを活用し、リッチリザルト表示を獲得してCTRを向上させます。" },
      { icon: "Globe", title: "サイトマップ・robots.txt最適化", body: "クローラーの巡回効率を高め、重要ページの確実なインデックスを実現します。" },
      { icon: "Link", title: "正規化・リダイレクト設定", body: "重複コンテンツを排除し、URLの正規化・適切なリダイレクト設定でSEO評価を集約します。" },
    ],
    sections: [
      {
        heading: "テクニカルSEOが重要な理由",
        body: "Googleのクローラーはプログラムです。技術的な問題があると、どれだけ良いコンテンツでも正しく評価されません。テクニカルSEOは「評価される土台」を作る作業です。",
      },
      {
        heading: "主なテクニカルSEO施策",
        body: "サイトのテクニカル診断から始め、優先度の高い課題から改善します。",
        list: [
          "ページ表示速度の改善（Lighthouse 90+）",
          "モバイルフレンドリー化",
          "SSL/HTTPS対応",
          "Core Web Vitals（LCP/FID/CLS）改善",
          "構造化データ（Schema.org）実装",
          "クロールエラーの解消",
          "重複コンテンツ・Canonical設定",
          "XMLサイトマップの最適化",
          "内部リンク構造の改善",
          "ページネーション設定",
        ],
      },
    ],
    benefits: [
      { stat: "92", unit: "点", label: "平均Lighthouseスコア", description: "テクニカルSEO改善後の平均Lighthouse Performance Score" },
      { stat: "45", unit: "%", label: "クロール効率改善", description: "クロールバジェットの最適化によるインデックスページ数の増加率" },
      { stat: "28", unit: "%", label: "CTR向上", description: "リッチリザルト表示獲得後のクリック率平均向上率" },
    ],
    faq: [
      { q: "テクニカルSEOの診断はどのように行いますか？", a: "Google Search Console・Screaming Frog・GTmetrixなどの専門ツールを使い、クロールエラー・速度問題・構造化データ・重複コンテンツなどを網羅的に診断します。" },
      { q: "WordPressサイトのテクニカルSEOも対応できますか？", a: "はい、WordPress・Next.js・独自CMSなど、技術スタックを問わず対応しています。" },
      { q: "Core Web Vitalsの改善にはどのくらいかかりますか？", a: "サイトの状況によって異なりますが、基本的な改善（画像最適化・JS遅延読み込み・CSS最適化）は2〜4週間で実施できます。" },
    ],
    relatedPages: [
      { title: "コンテンツSEO", description: "コンテンツで集客する戦略", href: "/seo/content-seo" },
      { title: "内部対策", description: "サイト内部構造の最適化", href: "/seo/internal-seo" },
      { title: "ホームページ制作", description: "SEO対応のサイト制作", href: "/services/web-design" },
    ],
    seoMeta: {
      title: "テクニカルSEO｜クロールとインデックスを最大化｜株式会社サイプレス",
      description: "テクニカルSEOでCore Web Vitals・構造化データ・クロール最適化を実施。Lighthouse 90+を達成するSEO技術対策。東京のSEO専門会社。",
      keywords: ["テクニカルSEO", "Core Web Vitals", "構造化データ", "サイト速度改善", "クロールエラー", "SEO技術対策"],
    },
  },
  {
    slug: "content-seo",
    title: "コンテンツSEO｜検索意図に応えるコンテンツで上位表示",
    subtitle: "E-E-A-Tを高め、長期的な検索流入を構築する",
    overview:
      "コンテンツSEOは、検索ユーザーの意図を深く理解し、その疑問・課題に完璧に答えるコンテンツを制作することで検索上位を獲得する戦略です。広告に依存しない永続的な集客資産を構築します。",
    keyPoints: [
      { icon: "Search", title: "検索意図分析", body: "「なぜ検索するのか」を深掘りし、ユーザーが本当に求める情報を提供します。" },
      { icon: "FileText", title: "E-E-A-T対応コンテンツ", body: "経験・専門性・権威性・信頼性を高めたコンテンツでGoogleの信頼を獲得します。" },
      { icon: "Layout", title: "トピッククラスター設計", body: "柱コンテンツとサポートコンテンツを体系的に設計し、サイト全体の専門性を高めます。" },
      { icon: "TrendingUp", title: "コンテンツ改善サイクル", body: "公開後もデータ分析を元にリライト・補足を行い、順位を継続的に改善します。" },
    ],
    sections: [
      {
        heading: "コンテンツSEOの基本戦略",
        body: "良いコンテンツとは「長い」ものではなく「検索意図を完全に満たす」ものです。まずキーワードリサーチで狙うべきキーワードを特定し、検索意図を分析した上でコンテンツを設計します。",
      },
      {
        heading: "効果的なコンテンツの条件",
        list: [
          "検索意図を完全に満たしている",
          "独自の視点・データ・経験が含まれている",
          "専門性の高い情報を分かりやすく解説している",
          "見出し構造が整理されて読みやすい",
          "著者情報が明示されE-E-A-Tが高い",
          "内部リンクで関連コンテンツと連携している",
          "定期的に更新・改善されている",
        ],
      },
    ],
    benefits: [
      { stat: "420", unit: "%", label: "オーガニック流入増加", description: "コンテンツSEO強化後の自然検索流入増加率" },
      { stat: "68", unit: "%", label: "対策キーワード上位率", description: "制作コンテンツの検索上位10位以内表示率" },
      { stat: "2.1", unit: "倍", label: "滞在時間延長", description: "高品質コンテンツによる平均セッション時間向上倍率" },
    ],
    faq: [
      { q: "コンテンツ制作の費用はいくらですか？", a: "1記事2,000〜5,000文字の場合、3〜8万円が目安です。専門性の高い分野や医療・法律分野は専門家監修費が加算されます。" },
      { q: "どのくらいの頻度でコンテンツを制作すればいいですか？", a: "競合状況や目標によりますが、最低月2〜4本のペースで継続することをお勧めします。量より質を優先します。" },
      { q: "AIで書いたコンテンツはSEOに悪影響ですか？", a: "Googleは「品質の低いコンテンツ」を評価しないのであって、AIが書いたかどうかは問いません。AIを活用しつつも、専門性・独自性・経験を加えた高品質なコンテンツ制作をお勧めします。" },
    ],
    relatedPages: [
      { title: "テクニカルSEO", description: "サイト技術面の最適化", href: "/seo/technical-seo" },
      { title: "AIO対策", description: "AI検索で引用される戦略", href: "/services/aio" },
      { title: "外部対策", description: "被リンク獲得戦略", href: "/seo/external-seo" },
    ],
    seoMeta: {
      title: "コンテンツSEO｜E-E-A-T対応で上位表示｜株式会社サイプレス",
      description: "コンテンツSEOで自然検索流入を420%改善。検索意図分析・E-E-A-T対応・トピッククラスター設計まで一貫対応。東京のSEO専門会社。",
      keywords: ["コンテンツSEO", "E-E-A-T", "SEO記事制作", "トピッククラスター", "コンテンツマーケティング", "SEOコンテンツ"],
    },
  },
  {
    slug: "internal-seo",
    title: "内部SEO対策｜サイト内部構造の最適化で評価を高める",
    subtitle: "内部リンク・見出し・メタ情報を徹底最適化",
    overview:
      "内部SEO対策とは、ウェブサイト内部の構造・コンテンツ・メタ情報を最適化し、検索エンジンの評価を高める施策です。外部施策に比べ自社でコントロールしやすく、即効性のある改善が期待できます。",
    keyPoints: [
      { icon: "FileText", title: "タイトルタグ・メタ説明の最適化", body: "各ページのtitle・descriptionを検索意図に合わせて最適化し、CTRを向上させます。" },
      { icon: "Heading", title: "見出し構造（H1〜H6）の整理", body: "論理的な見出し構造を設計し、ユーザーと検索エンジン両方の理解を高めます。" },
      { icon: "Link", title: "内部リンク設計", body: "サイト内の情報のつながりを強化し、重要ページへのリンクジュースを集中させます。" },
      { icon: "Image", title: "画像alt属性・最適化", body: "画像のalt属性を適切に設定し、画像検索からの流入も獲得します。" },
    ],
    sections: [
      {
        heading: "内部SEOで特に重要な施策",
        list: [
          "タイトルタグへのメインキーワード含有",
          "メタディスクリプションの最適化（120文字以内）",
          "H1〜H6の階層的な見出し構造",
          "本文内でのキーワードの自然な使用",
          "内部リンクによる関連ページへの誘導",
          "breadcrumb（パンくずリスト）の実装",
          "URL構造の最適化（短く・意味のある）",
          "画像のalt属性・ファイル名の最適化",
          "ページの重複コンテンツ排除",
        ],
      },
    ],
    benefits: [
      { stat: "38", unit: "%", label: "CTR改善", description: "タイトル・メタ説明最適化後の平均クリック率改善" },
      { stat: "52", unit: "%", label: "ページ滞在時間向上", description: "内部リンク最適化後の平均滞在時間向上率" },
      { stat: "1.8", unit: "倍", label: "ページビュー増加", description: "内部リンク強化後のセッションあたりページ閲覧数" },
    ],
    faq: [
      { q: "内部SEOだけで上位表示は可能ですか？", a: "競合が少ないキーワードなら内部対策だけで十分な場合もあります。競合が多いキーワードでは、テクニカルSEO・コンテンツSEO・外部対策との組み合わせが必要です。" },
      { q: "内部SEO対策の診断はどのように行いますか？", a: "全ページのタイトル・メタ説明・見出し構造・内部リンクをクロールツールで一括診断し、優先改善事項をまとめたレポートを提出します。" },
    ],
    relatedPages: [
      { title: "テクニカルSEO", description: "サイト技術面の最適化", href: "/seo/technical-seo" },
      { title: "コンテンツSEO", description: "コンテンツで集客する戦略", href: "/seo/content-seo" },
      { title: "外部対策", description: "被リンク獲得戦略", href: "/seo/external-seo" },
    ],
    seoMeta: {
      title: "内部SEO対策｜サイト内部構造を最適化｜株式会社サイプレス",
      description: "内部SEO対策でタイトル・内部リンク・見出し構造を徹底最適化。CTR平均38%改善。東京のSEO専門会社サイプレスが内部対策を一気通貫で実施。",
      keywords: ["内部SEO対策", "内部対策", "タイトルタグ最適化", "内部リンク", "SEO内部施策", "メタ情報最適化"],
    },
  },
  {
    slug: "external-seo",
    title: "外部SEO対策｜被リンク獲得でドメイン権威性を高める",
    subtitle: "質の高い被リンクを戦略的に獲得する",
    overview:
      "外部SEO対策（オフページSEO）とは、他のウェブサイトから自社サイトへのリンク（被リンク）を獲得することで、ドメインの権威性を高め検索順位を向上させる施策です。Googleのアルゴリズムにおいて、質の高い被リンクは最も重要な順位決定要因の一つです。",
    keyPoints: [
      { icon: "Globe", title: "ホワイトハット被リンク獲得", body: "プレスリリース・コンテンツマーケティング・メディア掲載など、Googleガイドラインに準拠した方法で被リンクを獲得します。" },
      { icon: "Award", title: "権威サイトへの掲載", body: "業界メディア・行政・大学・ニュースサイトなど権威性の高いサイトへの掲載を目指します。" },
      { icon: "Shield", title: "スパムリンクの否認", body: "既存のスパムリンク・低品質リンクを分析し、Googleに否認申請することでペナルティリスクを排除します。" },
      { icon: "BarChart2", title: "被リンクプロフィール分析", body: "現在の被リンクプロフィールを分析し、競合比較から改善優先度を特定します。" },
    ],
    sections: [
      {
        heading: "質の高い被リンクの獲得方法",
        list: [
          "プレスリリース配信（業界メディアへの掲載）",
          "インフォグラフィック制作・公開",
          "調査レポート・ホワイトペーパー公開",
          "業界専門家・インフルエンサーとの協業",
          "行政・商工会・業界団体への登録",
          "ゲスト記事・寄稿",
          "壊れたリンクの置き換え（Broken Link Building）",
          "競合被リンクの分析と同様サイトへのアプローチ",
        ],
      },
    ],
    benefits: [
      { stat: "156", unit: "%", label: "ドメイン権威性向上", description: "被リンク獲得による平均ドメイン権威性スコア向上率" },
      { stat: "78", unit: "%", label: "対策キーワード順位改善", description: "被リンク強化後の対策キーワードの平均順位改善率" },
      { stat: "240", unit: "%", label: "参照トラフィック増加", description: "被リンク獲得後の参照トラフィック増加率" },
    ],
    faq: [
      { q: "被リンクを購入するのはなぜいけないのですか？", a: "Googleのガイドラインに違反するため、ペナルティを受けるリスクがあります。一時的に順位が上がっても、後でサイト全体の評価が落ちる危険性があります。当社は必ずホワイトハットな手法のみで対応します。" },
      { q: "どのくらいの被リンクが必要ですか？", a: "数よりも質が重要です。スパムサイトからの大量リンクより、権威性の高い1本のリンクの方が価値があります。競合サイトの被リンクプロフィールを分析し、戦略を立てます。" },
      { q: "既存の悪質なリンクは削除できますか？", a: "Googleの否認ツールを使って悪質リンクの影響を排除できます。まず被リンクプロフィールの監査から始めます。" },
    ],
    relatedPages: [
      { title: "コンテンツSEO", description: "被リンクを集めるコンテンツ制作", href: "/seo/content-seo" },
      { title: "テクニカルSEO", description: "サイト技術面の最適化", href: "/seo/technical-seo" },
      { title: "SEO対策サービス", description: "SEO対策の全体戦略", href: "/services/seo" },
    ],
    seoMeta: {
      title: "外部SEO対策｜被リンク獲得でドメイン権威性向上｜株式会社サイプレス",
      description: "外部SEO対策で質の高い被リンクを獲得。ホワイトハット手法でドメイン権威性を高め、検索上位を実現。東京のSEO専門会社サイプレス。",
      keywords: ["外部SEO対策", "被リンク獲得", "オフページSEO", "ドメイン権威性", "バックリンク", "SEO外部施策"],
    },
  },
];

export function getSeoPage(slug: string): SeoSubPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}

export interface AiSubPageData {
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

export const AI_PAGES: AiSubPageData[] = [
  {
    slug: "automation",
    title: "業務自動化｜AIで反復作業をゼロにする",
    subtitle: "中小企業の業務効率を革命的に向上させる",
    overview:
      "業務自動化とは、これまで人間が手動で行っていた反復的な業務をAI・RPA・自動化ツールで代替することです。データ入力・メール送信・レポート作成・在庫管理など、様々な業務を自動化することで、従業員がより付加価値の高い業務に集中できる環境を作ります。",
    keyPoints: [
      { icon: "Zap", title: "RPA × AI自動化設計", body: "業務フローを分析し、自動化に適した業務を特定。RPAとAIの最適な組み合わせを設計します。" },
      { icon: "Bot", title: "データ処理自動化", body: "Excel・CSV・PDFのデータ処理、システム間のデータ連携を自動化します。" },
      { icon: "Mail", title: "メール・通知自動化", body: "問い合わせ返信・予約確認・フォローアップメールなどを自動化します。" },
      { icon: "BarChart2", title: "レポート自動生成", body: "売上・広告・SNSなどのレポートを自動集計・可視化するダッシュボードを構築します。" },
    ],
    sections: [
      {
        heading: "自動化できる代表的な業務",
        list: [
          "問い合わせフォームの自動返信・振り分け",
          "見積書・請求書の自動生成",
          "SNS投稿のスケジュール管理",
          "Googleアナリティクス・広告レポートの自動集計",
          "在庫管理・発注処理の自動化",
          "採用応募者への自動案内メール",
          "予約確認・リマインド通知",
          "勤怠データの集計・月次レポート作成",
          "顧客データの更新・同期",
          "競合価格の自動モニタリング",
        ],
      },
      {
        heading: "自動化導入の進め方",
        body: "まず業務棚卸しを行い、自動化の費用対効果が高い業務を特定します。次に自動化ツールの選定（n8n・Make・Zapier・PowerAutomateなど）と設計を行い、テスト運用を経て本番導入します。",
      },
    ],
    benefits: [
      { stat: "65", unit: "%", label: "業務工数削減", description: "自動化対象業務の平均工数削減率" },
      { stat: "月8", unit: "時間", label: "平均削減時間", description: "1従業員あたりの月間削減工数" },
      { stat: "3", unit: "ヶ月", label: "ROI回収", description: "導入コストの平均回収期間" },
    ],
    faq: [
      { q: "どのツールを使って自動化しますか？", a: "n8n・Make（Integromat）・Zapier・Power Automate・Python（カスタム）など、要件と予算に合わせて最適なツールを選定します。" },
      { q: "既存のシステムと連携できますか？", a: "API・Webhook・データベース連携など様々な方法で既存システムと連携します。まず現在のシステム構成をヒアリングします。" },
      { q: "自動化後の保守は誰がしますか？", a: "運用保守プランをご用意しています。または操作マニュアルと研修を提供し、社内で管理できる体制を構築します。" },
    ],
    relatedPages: [
      { title: "AIチャットボット", description: "顧客対応の自動化", href: "/ai/chatbot" },
      { title: "AIコンテンツ制作", description: "コンテンツ制作の効率化", href: "/ai/content" },
      { title: "AI導入支援サービス", description: "AI活用全体の戦略", href: "/services/ai" },
    ],
    seoMeta: {
      title: "業務自動化｜AIで反復作業を自動化｜株式会社サイプレス",
      description: "AIと業務自動化で工数を65%削減。RPA・AI連携による業務効率化を中小企業に。導入から運用まで伴走支援。東京のAI自動化専門会社。",
      keywords: ["業務自動化", "RPA", "AI自動化", "業務効率化", "ノーコード自動化", "DX推進"],
    },
  },
  {
    slug: "chatbot",
    title: "AIチャットボット構築｜24時間自動対応で問い合わせを効率化",
    subtitle: "顧客対応・社内FAQ・採用対応をAIで自動化",
    overview:
      "AIチャットボットは、顧客からの問い合わせ・よくある質問・予約受付などを24時間365日自動で対応するシステムです。人件費削減と顧客満足度向上を同時に実現し、スタッフが本当に必要な対応に集中できる環境を作ります。",
    keyPoints: [
      { icon: "Bot", title: "ChatGPTベースのAIチャットボット", body: "GPT-4を活用した自然な会話が可能なチャットボットを構築。自社データで学習させます。" },
      { icon: "Database", title: "RAGシステム構築", body: "自社のFAQ・マニュアル・商品情報を学習させた、精度の高いRAGシステムを構築します。" },
      { icon: "Smartphone", title: "LINE・Web・Slackへの実装", body: "LINE公式アカウント・ウェブサイト・Slackなど、ユーザーが使いやすい場所に実装します。" },
      { icon: "Shield", title: "有人対応へのシームレスな引き継ぎ", body: "AIが対応できない複雑な質問は、スムーズに担当者に引き継ぐフローを設計します。" },
    ],
    sections: [
      {
        heading: "AIチャットボットの活用シーン",
        list: [
          "顧客からのFAQ自動応答（営業時間外対応）",
          "製品・サービスへの問い合わせ対応",
          "予約受付・変更・キャンセル対応",
          "社内ヘルプデスク・マニュアル検索",
          "採用応募者への自動案内",
          "EC・通販の注文状況確認",
          "クリニック・サロンの初診受付",
          "不動産の物件情報案内",
        ],
      },
    ],
    benefits: [
      { stat: "72", unit: "%", label: "問い合わせ自動化率", description: "AIチャットボット導入後の問い合わせ自動対応率" },
      { stat: "24", unit: "時間", label: "365日対応", description: "AIチャットボットによる24時間365日の顧客対応" },
      { stat: "58", unit: "%", label: "対応コスト削減", description: "人件費を含む顧客対応コストの削減率" },
    ],
    faq: [
      { q: "どのくらいの期間で構築できますか？", a: "シンプルなFAQチャットボットは2〜4週間、RAGシステムを使った高度なものは4〜8週間が目安です。" },
      { q: "チャットボットが間違えた回答をすることはありますか？", a: "あります。そのため、回答精度の定期チェック・フィードバック収集・定期更新の仕組みを必ず構築します。" },
      { q: "LINEとウェブ両方に実装できますか？", a: "はい、LINE公式アカウント・ウェブチャット・Slack・Teams等、複数チャンネルへの同時実装が可能です。" },
    ],
    relatedPages: [
      { title: "業務自動化", description: "業務プロセスの自動化", href: "/ai/automation" },
      { title: "AI導入支援サービス", description: "AI活用全体の戦略", href: "/services/ai" },
      { title: "ホームページ制作", description: "チャットボット設置先のサイト制作", href: "/services/web-design" },
    ],
    seoMeta: {
      title: "AIチャットボット構築｜24時間自動対応で問い合わせ効率化｜サイプレス",
      description: "AIチャットボット構築で問い合わせ72%を自動化。GPT-4ベースのRAGシステムでLINE・Web・Slackに実装。東京のAIチャットボット開発会社。",
      keywords: ["AIチャットボット", "チャットボット構築", "ChatGPT チャットボット", "LINE チャットボット", "RAGシステム", "自動応答"],
    },
  },
  {
    slug: "content",
    title: "AIコンテンツ制作支援｜AI×人の力で制作を10倍高速化",
    subtitle: "品質を下げずに制作スピードを飛躍的に向上",
    overview:
      "AIコンテンツ制作支援では、ChatGPT・Claude・Geminiなどの生成AIを活用しながら、人間の編集・監修を組み合わせることで、高品質なコンテンツを従来比10倍以上のスピードで制作します。SEO対応・AIO対応のコンテンツを量産できます。",
    keyPoints: [
      { icon: "FileText", title: "AI × 専門家監修の記事制作", body: "AIで下書きを生成し、専門家が監修・加筆。E-E-A-T基準を満たした高品質記事を効率的に制作します。" },
      { icon: "Zap", title: "コンテンツ制作フロー構築", body: "社内でAIコンテンツ制作を運用できるワークフロー・プロンプト・ガイドラインを構築します。" },
      { icon: "Settings", title: "AIコンテンツ品質管理", body: "AIコンテンツの品質チェックリスト・ファクトチェック・SEO最適化の仕組みを整備します。" },
      { icon: "Users", title: "AI活用研修", body: "ChatGPT・Claude等の効果的なプロンプト設計・ライティング活用を社内に定着させます。" },
    ],
    sections: [
      {
        heading: "AIで効率化できるコンテンツ制作業務",
        list: [
          "ブログ記事・コラムの下書き生成",
          "SNS投稿文の作成",
          "メールマガジンの文章生成",
          "商品説明文・LP文章の作成",
          "動画スクリプト作成",
          "プレスリリース草案作成",
          "FAQ・ヘルプページの作成",
          "多言語翻訳・ローカライズ",
          "既存コンテンツのリライト・改善",
          "見出し・タイトル案の生成",
        ],
      },
    ],
    benefits: [
      { stat: "10", unit: "倍", label: "制作スピード向上", description: "AI活用後のコンテンツ制作スピード向上倍率" },
      { stat: "72", unit: "%", label: "制作コスト削減", description: "AIコンテンツ制作導入後の制作コスト削減率" },
      { stat: "月32", unit: "本", label: "制作本数増加", description: "AI活用後の月間制作可能記事数（従来比）" },
    ],
    faq: [
      { q: "AIで書いたコンテンツはSEOに悪影響はありませんか？", a: "Googleは生成プロセスではなく品質を評価します。AIで生成し、専門家が監修・加筆した高品質コンテンツは問題ありません。ただし、AI任せの低品質コンテンツは評価されません。" },
      { q: "どのAIツールを使えばいいですか？", a: "用途によって異なります。長文コンテンツはClaude・ChatGPT、画像生成はMidjourney・DALL-E、動画スクリプトはChatGPTが向いています。ツール選定から使い方まで支援します。" },
      { q: "社内でAIを使いこなせるよう研修してもらえますか？", a: "はい、ChatGPT・Claude等のプロンプトエンジニアリング研修・ライティング活用ワークショップを実施しています。" },
    ],
    relatedPages: [
      { title: "AIO対策", description: "AIに引用されるコンテンツ戦略", href: "/services/aio" },
      { title: "コンテンツSEO", description: "SEOコンテンツ制作戦略", href: "/seo/content-seo" },
      { title: "業務自動化", description: "コンテンツ制作フローの自動化", href: "/ai/automation" },
    ],
    seoMeta: {
      title: "AIコンテンツ制作支援｜制作スピード10倍・コスト72%削減｜サイプレス",
      description: "AIコンテンツ制作支援で制作スピード10倍、コスト72%削減を実現。ChatGPT・Claude活用のコンテンツ制作フロー構築から研修まで。",
      keywords: ["AIコンテンツ制作", "AI記事作成", "ChatGPT コンテンツ", "AIライティング", "コンテンツ制作効率化", "AI活用"],
    },
  },
];

export function getAiPage(slug: string): AiSubPageData | undefined {
  return AI_PAGES.find((p) => p.slug === slug);
}

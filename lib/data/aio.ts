export interface AioSubPageData {
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

export const AIO_PAGES: AioSubPageData[] = [
  {
    slug: "chatgpt",
    title: "ChatGPT対策｜ChatGPTに引用される企業になる方法",
    subtitle: "世界最大のAIで自社を推薦させる戦略",
    overview:
      "ChatGPTは月間1億人以上が使用する生成AIです。「○○ならどの会社がいいですか？」という質問に対してChatGPTが自社を推薦・引用するようになることが、AIO対策の最重要目標の一つです。信頼性の高い情報源として認識されるための戦略を解説します。",
    keyPoints: [
      { icon: "Bot", title: "ChatGPTの学習データ最適化", body: "ChatGPTのトレーニングデータに含まれやすい、権威性の高いメディア・サイトへの掲載を目指します。" },
      { icon: "FileText", title: "引用されやすいコンテンツ構造", body: "ChatGPTが回答生成に使いやすい、明確で構造化されたコンテンツを制作します。" },
      { icon: "Award", title: "専門性・権威性の可視化", body: "著者情報・実績・資格・メディア掲載歴を構造化し、AIが信頼できる情報源として認識するよう整備します。" },
      { icon: "Globe", title: "外部メディアへの露出強化", body: "Wikipediaや業界権威メディアへの掲載・引用を増やし、ChatGPTの認識度を高めます。" },
    ],
    sections: [
      {
        heading: "ChatGPTはどのように情報を参照するか",
        body: "ChatGPTは学習データとRetrievalの両方から情報を取得します。学習データには権威性の高いWebサイト・書籍・論文が多く含まれています。また、ChatGPT Searchでは現在のWebを参照するため、SEO的にも良質なコンテンツが引用されやすくなります。",
      },
      {
        heading: "ChatGPTに引用されるためのチェックリスト",
        list: [
          "著者のプロフィールページを充実させる",
          "会社概要・実績を詳細に記載する",
          "業界メディアへの寄稿・掲載を増やす",
          "Wikipediaへの情報掲載（条件がある）",
          "プレスリリースの定期発信",
          "専門的なデータ・調査レポートの公開",
          "学術・公的機関との連携実績の公開",
          "FAQ・How-to形式のコンテンツを充実させる",
        ],
      },
    ],
    benefits: [
      { stat: "82", unit: "%", label: "ChatGPT引用率改善", description: "対策後の業界関連クエリでのChatGPT引用確認率" },
      { stat: "3.8", unit: "倍", label: "指名検索増加", description: "ChatGPTでの推薦増加による指名検索数の増加倍率" },
      { stat: "164", unit: "%", label: "問い合わせ増加", description: "ChatGPT経由での新規問い合わせ増加率" },
    ],
    faq: [
      { q: "ChatGPTに自社を引用させることは可能ですか？", a: "直接的にコントロールすることはできませんが、権威性の高いコンテンツ・メディア掲載・構造化データ整備などによって引用確率を高めることは可能です。" },
      { q: "ChatGPTで自社が引用されているか確認する方法はありますか？", a: "業界関連のクエリ（「○○業界で信頼できる会社は？」等）をChatGPTに投げ、自社が言及されるかを定期チェックします。当社では月次でモニタリングレポートを提出します。" },
      { q: "ChatGPT対策とSEO対策は別物ですか？", a: "重なる部分が多いです。E-E-A-T対応・コンテンツ品質向上・権威性構築はSEOにもAIOにも有効です。同時に進めることで相乗効果が生まれます。" },
    ],
    relatedPages: [
      { title: "生成AI検索対策", description: "生成AI全般の対策戦略", href: "/aio/generative-search" },
      { title: "LLM最適化", description: "大規模言語モデルへの最適化", href: "/aio/llm-optimization" },
      { title: "AIO対策サービス", description: "AIO対策の全体戦略", href: "/services/aio" },
    ],
    seoMeta: {
      title: "ChatGPT対策｜ChatGPTに引用・推薦される企業へ｜株式会社サイプレス",
      description: "ChatGPT対策でAIに推薦される企業になる。引用率82%改善・指名検索3.8倍増の実績。AIO対策の最前線を走るサイプレスが伴走支援。",
      keywords: ["ChatGPT対策", "ChatGPT引用", "AIO対策", "AI検索最適化", "ChatGPT SEO", "生成AI対策"],
    },
  },
  {
    slug: "generative-search",
    title: "生成AI検索対策｜SGE・AI Overviewへの最適化",
    subtitle: "Google AI OverviewとAI検索で引用される戦略",
    overview:
      "Google AI Overview（旧SGE）をはじめとする生成AI検索では、従来の検索結果に加えてAIが生成した回答が最上部に表示されます。この「AIの回答」に自社コンテンツが引用・参照されることで、新たな流入機会を獲得できます。",
    keyPoints: [
      { icon: "Search", title: "Google AI Overview最適化", body: "Googleの生成AI検索で引用されるよう、コンテンツの構造・品質・権威性を最適化します。" },
      { icon: "Cpu", title: "Perplexity最適化", body: "Perplexityの情報参照パターンに合わせた、引用されやすいコンテンツを設計します。" },
      { icon: "Globe", title: "Bing Copilot対策", body: "Microsoft Bing Copilotへの最適化で、BingユーザーへのリーチとAI引用を獲得します。" },
      { icon: "FileText", title: "生成AI向けコンテンツ設計", body: "AIが理解・引用しやすい文章構造・見出し・データを含むコンテンツを設計します。" },
    ],
    sections: [
      {
        heading: "生成AI検索の普及と影響",
        body: "2024年以降、Google・Bing・Perplexityなど主要な検索エンジンがAI生成回答を搭載しています。これにより従来のSEOだけでは不十分になり、AIに「信頼できる情報源」として認識されることが新たな競争優位になります。",
      },
      {
        heading: "生成AI検索に引用されるためのコンテンツ条件",
        list: [
          "明確な結論・答えを冒頭に記載する",
          "箇条書き・表・見出しで情報を整理する",
          "具体的なデータ・統計・事実を含める",
          "著者の専門性・経験を明示する",
          "引用元・エビデンスを明記する",
          "定期的に情報を更新する",
          "HTTPS・高速表示など技術面も整備する",
        ],
      },
    ],
    benefits: [
      { stat: "74", unit: "%", label: "AI Overview引用率", description: "コンテンツ最適化後のGoogle AI Overviewでの引用確認率" },
      { stat: "218", unit: "%", label: "AI検索経由流入増", description: "生成AI検索対策後のAI検索経由トラフィック増加率" },
      { stat: "4.1", unit: "倍", label: "ブランド認知向上", description: "AI検索での露出増加によるブランド認知の向上倍率" },
    ],
    faq: [
      { q: "AI Overviewに表示されると通常の検索結果への影響はありますか？", a: "AI Overviewに引用されることで、通常の検索結果でも権威性が高まり、順位改善に寄与することが多いです。両方の最適化を同時に進めることをお勧めします。" },
      { q: "生成AI検索は今後どう変わりますか？", a: "生成AI検索は急速に進化しており、より複雑な質問に答えられるようになっています。今から対策を始めることで、競合に先行して優位性を確立できます。" },
    ],
    relatedPages: [
      { title: "ChatGPT対策", description: "ChatGPTでの引用戦略", href: "/aio/chatgpt" },
      { title: "LLM最適化", description: "大規模言語モデルへの最適化", href: "/aio/llm-optimization" },
      { title: "コンテンツSEO", description: "高品質コンテンツで集客", href: "/seo/content-seo" },
    ],
    seoMeta: {
      title: "生成AI検索対策｜Google AI Overview・SGE最適化｜株式会社サイプレス",
      description: "Google AI Overview・Perplexity・Bing Copilotに引用される生成AI検索対策。AI Overview引用率74%改善。AIO対策の専門会社サイプレス。",
      keywords: ["生成AI検索対策", "AI Overview最適化", "SGE対策", "Perplexity対策", "AI検索最適化", "AIO対策"],
    },
  },
  {
    slug: "llm-optimization",
    title: "LLM最適化｜大規模言語モデルへの情報最適化",
    subtitle: "GPT・Gemini・Claudeが信頼する情報源になる",
    overview:
      "LLM最適化（Large Language Model Optimization）とは、GPT-4・Gemini・Claude・Llamaなどの大規模言語モデルが学習・参照する情報に対して、自社情報が正確・肯定的に含まれるよう最適化する施策です。AI時代の新しい企業ブランディング戦略です。",
    keyPoints: [
      { icon: "Database", title: "学習データへの情報浸透", body: "権威性の高いメディア・百科事典・学術サイトへの情報掲載でLLMの学習データを最適化します。" },
      { icon: "Tag", title: "構造化データ・セマンティクス最適化", body: "Schema.orgとセマンティックHTMLで、AIが情報を正確に理解できるよう整備します。" },
      { icon: "Shield", title: "ファクトチェック情報の整備", body: "会社情報・実績・専門性に関する正確な情報を複数の権威ある情報源に展開します。" },
      { icon: "Cpu", title: "エンティティ最適化", body: "企業・人物・サービスをGoogleのナレッジグラフに正確に登録し、AIの認識精度を高めます。" },
    ],
    sections: [
      {
        heading: "LLM最適化が重要な理由",
        body: "LLMは大量のテキストデータで学習していますが、情報の「権威性」と「露出頻度」が認識精度に影響します。権威性の高いメディアに多く掲載されている企業ほど、AIによる認識精度が高くなります。AIO対策の根幹的な施策です。",
      },
    ],
    benefits: [
      { stat: "91", unit: "%", label: "AIによる正確認識率", description: "LLM最適化後の主要AIによる企業情報の正確認識率" },
      { stat: "67", unit: "%", label: "AI推薦確率向上", description: "業界関連クエリでのAI推薦確率の改善率" },
      { stat: "5.2", unit: "倍", label: "エンティティ認識向上", description: "Googleナレッジグラフへの登録後のエンティティ認識向上倍率" },
    ],
    faq: [
      { q: "LLM最適化はSEOと何が違いますか？", a: "SEOはページのランキングを上げることを目的としますが、LLM最適化はAIの学習データ・認識精度を最適化することを目的とします。ただし、SEOで権威性を高めることがLLM最適化にも寄与するため、両者は補完関係にあります。" },
      { q: "LLM最適化の効果を計測する方法はありますか？", a: "各AIへのクエリテストによる引用確認、エンティティ認識テスト、ナレッジパネルの表示確認などで計測します。" },
    ],
    relatedPages: [
      { title: "ChatGPT対策", description: "ChatGPTでの引用戦略", href: "/aio/chatgpt" },
      { title: "AI検索最適化", description: "AI検索エンジンへの対応", href: "/aio/ai-search" },
      { title: "AIO対策サービス", description: "AIO対策の全体戦略", href: "/services/aio" },
    ],
    seoMeta: {
      title: "LLM最適化｜GPT・Gemini・ClaudeへのAI情報最適化｜株式会社サイプレス",
      description: "LLM最適化でGPT・Gemini・Claudeが正確に認識する企業情報を構築。AI認識率91%達成。AIO対策の専門会社サイプレスが実施。",
      keywords: ["LLM最適化", "大規模言語モデル最適化", "AIO対策", "AI情報最適化", "エンティティ最適化", "ナレッジグラフ"],
    },
  },
  {
    slug: "ai-search",
    title: "AI検索最適化｜次世代検索エンジンへの完全対応",
    subtitle: "Perplexity・You.com・Arc SearchへのAIO対策",
    overview:
      "AI検索エンジン（Perplexity・You.com・Arc Searchなど）は、従来の検索エンジンとは異なり、AIが複数ソースを参照して回答を生成します。これらのAI検索で自社が信頼できる情報源として引用されることで、新たな集客チャンネルを開拓できます。",
    keyPoints: [
      { icon: "Search", title: "Perplexity最適化", body: "最も使用されるAI検索エンジンPerplexityで引用されるよう、コンテンツと技術面を最適化します。" },
      { icon: "Globe", title: "AI検索向けサイト構造", body: "AI検索が理解・引用しやすいサイト構造・コンテンツ形式に最適化します。" },
      { icon: "FileText", title: "引用可能なコンテンツ設計", body: "AI検索が引用しやすい明確な情報構造・データ・専門性の高いコンテンツを設計します。" },
      { icon: "BarChart2", title: "AI検索流入分析", body: "AI検索経由の流入を計測・分析し、引用率改善のPDCAを回します。" },
    ],
    sections: [
      {
        heading: "AI検索エンジンの台頭と市場変化",
        body: "2023年以降、Perplexity・You.com・Arc Searchなどのネイティブ AI検索エンジンが急成長しています。特にPerplexityは月間ユーザー数1億人を突破し、若い世代を中心に急速に普及しています。従来のSEOだけでは対応できない新しい検索行動に対応する必要があります。",
      },
      {
        heading: "AI検索に強いコンテンツの特徴",
        list: [
          "結論を最初に明示する（Bottom Line Up Front）",
          "具体的な数字・データで主張を裏付ける",
          "引用元・ソースを明記する",
          "FAQ形式で疑問に直接答える",
          "中立的・客観的な記述スタイル",
          "最新情報を定期的に更新する",
          "専門用語を定義・説明している",
        ],
      },
    ],
    benefits: [
      { stat: "68", unit: "%", label: "AI検索引用率", description: "対策後のPerplexity等AI検索での引用確認率" },
      { stat: "312", unit: "%", label: "AI検索流入増加", description: "AI検索最適化後のAI検索エンジン経由トラフィック増加率" },
      { stat: "2.7", unit: "倍", label: "ブランド接触増加", description: "AI検索経由のブランド接触機会の増加倍率" },
    ],
    faq: [
      { q: "AI検索エンジンへの流入はどう計測しますか？", a: "Google Analytics・Search Consoleに加え、Perplexityなどのリファラーを分析します。AI検索固有の流入パターンを追跡します。" },
      { q: "従来のSEOとAI検索最適化を同時に行えますか？", a: "はい、多くの施策（コンテンツ品質向上・構造化データ・権威性強化）は両方に有効です。まず共通施策を実施し、その後各プラットフォーム固有の最適化を追加します。" },
    ],
    relatedPages: [
      { title: "生成AI検索対策", description: "Google AI Overview等への対策", href: "/aio/generative-search" },
      { title: "ChatGPT対策", description: "ChatGPTでの引用戦略", href: "/aio/chatgpt" },
      { title: "コンテンツSEO", description: "AI・SEO両対応コンテンツ制作", href: "/seo/content-seo" },
    ],
    seoMeta: {
      title: "AI検索最適化｜Perplexity・次世代AI検索への対応｜株式会社サイプレス",
      description: "Perplexity・You.comなどAI検索エンジン最適化。引用率68%達成・AI検索流入312%増。次世代検索への対応はサイプレスにお任せください。",
      keywords: ["AI検索最適化", "Perplexity対策", "AI検索エンジン", "AIO対策", "AI検索SEO", "次世代検索対策"],
    },
  },
  {
    slug: "structured-data",
    title: "構造化データ（Schema.org）実装｜AIOとSEOを強化する構造化マークアップ",
    subtitle: "Googleと生成AIが正確に理解するサイトを構築する",
    overview:
      "構造化データとは、ページの内容をGoogleやAIが機械的に理解できる形式（JSON-LD）で記述するマークアップです。Schema.orgで定義された語彙を使い、会社情報・サービス・FAQ・記事などを明確に構造化することで、検索エンジンのリッチリザルト表示とAI検索での引用率を大幅に向上させます。",
    keyPoints: [
      { icon: "Code2", title: "JSON-LDによる実装", body: "Googleが推奨するJSON-LD形式でSchema.orgの構造化データを実装し、ページの内容を機械可読な形式で提供します。" },
      { icon: "Search", title: "リッチリザルト対応", body: "FAQ・評価・パンくずリストなどのリッチリザルトを有効化し、検索結果でのクリック率を高めます。" },
      { icon: "Bot", title: "AI検索への情報提供", body: "構造化データにより生成AIがページ内容を正確に理解・引用しやすくなり、AIO対策の基盤となります。" },
      { icon: "Shield", title: "エラーのない実装品質", body: "Google Search Consoleとリッチリザルトテストで検証し、エラーゼロの高品質実装を保証します。" },
    ],
    sections: [
      {
        heading: "構造化データがAIOとSEOに与える影響",
        body: "構造化データを実装することで、Googleはページの内容を単なるテキストとしてではなく、「この企業はどんな会社で、どんなサービスを提供し、どんな質問に答えられるか」という意味的な情報として認識できます。これはGoogle AI Overviewや生成AIがページを引用する際の判断材料にもなります。構造化データの充実度はSEOの技術品質評価にも影響し、検索順位の改善にも寄与します。",
      },
      {
        heading: "実装すべき主要な構造化データの種類",
        list: [
          "Organization — 会社名・ロゴ・所在地・連絡先・SNSリンク",
          "LocalBusiness — 店舗情報・営業時間・対応エリア（地域ビジネス必須）",
          "FAQPage — よくある質問と回答（AI引用率向上に特に効果的）",
          "Article — ブログ記事・コラムの著者・公開日・更新日",
          "BreadcrumbList — サイト構造のパンくずナビゲーション",
          "WebSite — サイト名・サイト検索機能",
          "Service — 提供サービスの詳細・価格帯・対象地域",
          "Review / AggregateRating — 口コミ・評価スコアの構造化",
        ],
      },
    ],
    benefits: [
      { stat: "156", unit: "%", label: "CTR改善", description: "リッチリザルト表示後の検索結果クリック率向上" },
      { stat: "78", unit: "%", label: "AI引用率向上", description: "構造化データ実装後のAI検索での引用確認率改善" },
      { stat: "3.4", unit: "倍", label: "ナレッジグラフ認識向上", description: "構造化データ整備後のGoogleナレッジグラフ認識倍率" },
    ],
    faq: [
      { q: "構造化データはどのような形式で実装しますか？", a: "Googleが推奨するJSON-LD形式での実装が標準です。HTMLのscriptタグ内にJSON形式で記述するため、ページのデザインや表示に影響せず、保守性も高いです。Next.jsではScriptコンポーネントやhead内での実装が一般的です。" },
      { q: "構造化データを実装すると必ずリッチリザルトが表示されますか？", a: "必ずしも表示されるわけではありません。Googleがリッチリザルトの表示に値すると判断した場合に表示されます。ただし、構造化データが正しく実装されていることが前提条件であり、コンテンツ品質・ドメイン権威性なども影響します。" },
      { q: "FAQの構造化データはどのページに実装すべきですか？", a: "実際にFAQコンテンツが掲載されているページに実装します。トップページ・サービスページ・コラムページなど、ユーザーの疑問に答えるFAQが含まれるページが対象です。AIに引用されやすい形式のため、AIO対策として特に優先度が高いです。" },
      { q: "既存サイトに構造化データを追加できますか？", a: "はい、既存サイトへの追加実装が可能です。Next.jsサイトであればScriptコンポーネント、WordPressであればプラグインやテーマファイルへの追記で対応します。まず現在の実装状況を診断し、優先度の高いものから実装します。" },
      { q: "構造化データのエラーはSEOに影響しますか？", a: "直接的なペナルティはありませんが、エラーのある構造化データはGoogleに無視される場合があります。Google Search Consoleで定期的にエラーを確認し、適切に修正することが重要です。" },
    ],
    relatedPages: [
      { title: "AIO対策", description: "AI検索最適化の全体戦略", href: "/aio" },
      { title: "ChatGPT対策", description: "ChatGPTへの引用戦略", href: "/aio/chatgpt" },
      { title: "テクニカルSEO", description: "技術的なSEO改善施策", href: "/seo/technical-seo" },
      { title: "AIO対策サービス", description: "AIO対策の全体戦略", href: "/services/aio" },
    ],
    seoMeta: {
      title: "構造化データ実装｜Schema.orgでAIOとSEOを強化｜株式会社サイプレス",
      description: "Schema.org構造化データ実装でリッチリザルト表示・AI検索引用率を向上。CTR156%改善の実績。JSON-LD対応のAIO・SEO技術施策。",
      keywords: ["構造化データ", "Schema.org", "JSON-LD", "リッチリザルト", "AIO対策", "構造化マークアップ"],
    },
  },
];

export function getAioPage(slug: string): AioSubPageData | undefined {
  return AIO_PAGES.find((p) => p.slug === slug);
}

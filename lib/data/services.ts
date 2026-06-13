export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceBenefit {
  stat: string;
  unit: string;
  label: string;
  description: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  industries: string[];
  faq: ServiceFAQ[];
  seoMeta: { title: string; description: string; keywords: string[] };
}

export const SERVICES: ServiceData[] = [
  {
    slug: "meo",
    name: "MEO対策",
    tagline: "Googleマップで上位表示",
    title: "MEO対策｜Googleマップ集客を最大化する",
    subtitle: "地域ビジネスの集客をGoogleマップで劇的に改善",
    description:
      "MEO（マップエンジン最適化）は、Googleマップ上での表示順位を改善し、地域顧客からの来店・問い合わせを増やす施策です。店舗ビジネスにとって最も費用対効果の高いデジタルマーケティング手法の一つです。",
    accentColor: "#10B981",
    features: [
      { icon: "MapPin", title: "Googleビジネスプロフィール最適化", description: "店舗情報・写真・カテゴリ設定を徹底最適化し、検索露出を最大化します。" },
      { icon: "Star", title: "口コミ獲得・管理戦略", description: "高評価口コミを自然に増やす仕組みを構築。ネガティブ口コミへの対応も支援します。" },
      { icon: "BarChart2", title: "順位モニタリング・改善", description: "週次で順位変動を計測し、競合分析に基づくPDCAサイクルで継続改善します。" },
      { icon: "Camera", title: "店舗写真・動画プロデュース", description: "プロ品質のビジュアルコンテンツで来店意欲を高め、CTRを向上させます。" },
      { icon: "MessageSquare", title: "投稿コンテンツ運用", description: "定期的な投稿でアルゴリズム評価を高め、最新情報を顧客に届けます。" },
      { icon: "Search", title: "キーワード戦略立案", description: "地域×業種の検索需要を分析し、獲得すべきキーワードを特定します。" },
    ],
    benefits: [
      { stat: "94", unit: "%", label: "上位3位達成率", description: "対応エリアでの上位3位（ローカルパック）表示達成率" },
      { stat: "3.2", unit: "倍", label: "来店数増加", description: "MEO対策実施後の平均来店数増加倍率" },
      { stat: "68", unit: "%", label: "問い合わせ増加", description: "Googleマップ経由の月間問い合わせ数増加率" },
      { stat: "6", unit: "ヶ月", label: "平均成果期間", description: "上位表示が安定するまでの平均期間" },
    ],
    industries: ["飲食店", "美容室・サロン", "整骨院・整体院", "歯科医院", "クリニック", "リフォーム・建設", "不動産", "小売店", "ホテル・宿泊施設", "学習塾・教室"],
    faq: [
      { q: "MEO対策の効果はいつごろ出始めますか？", a: "一般的に着手から2〜3ヶ月で変化が見え始め、6ヶ月で安定した成果が出るケースが多いです。競合状況や対象エリアによって異なります。" },
      { q: "Googleビジネスプロフィールの登録は済んでいますが、MEO対策は必要ですか？", a: "登録だけでは不十分です。情報の網羅性・写真の質・口コミ数・投稿頻度など、多くの要素が順位に影響します。最適化することで大きく改善できるケースがほとんどです。" },
      { q: "口コミの数を増やす方法を教えてください。", a: "来店後のフォローアップ施策（LINE・メール）や店内POPの設置、スタッフからの声かけなど、自然に口コミを促す仕組みを設計します。不正な口コミ獲得は行いません。" },
      { q: "複数店舗を展開していますが、まとめて対応できますか？", a: "はい、多店舗展開も対応しています。店舗数に応じた最適なプランをご提案します。" },
      { q: "料金はどのくらいかかりますか？", a: "店舗数・エリア・競合状況によって異なります。まずは無料相談にてお見積りをご提示します。" },
    ],
    seoMeta: {
      title: "MEO対策｜Googleマップ集客を最大化｜株式会社サイプレス",
      description: "MEO対策で地域ビジネスの集客を劇的に改善。Googleマップ上位表示達成率94%。飲食・美容・医療など業種問わず対応。東京のMEO専門会社。",
      keywords: ["MEO対策", "Googleマップ上位表示", "ローカルSEO", "店舗集客", "Googleビジネスプロフィール最適化", "地域ビジネス集客"],
    },
  },
  {
    slug: "seo",
    name: "SEO対策",
    tagline: "検索上位で継続集客",
    title: "SEO対策｜検索流入を増やし続けるSEO戦略",
    subtitle: "技術・コンテンツ・外部対策を一気通貫で実施",
    description:
      "SEO（検索エンジン最適化）は、Googleなどの検索エンジンで上位表示されることで、継続的な自然検索流入を獲得する施策です。広告費不要の恒久的な集客資産を構築します。",
    accentColor: "#3B82F6",
    features: [
      { icon: "Code2", title: "テクニカルSEO", description: "サイト構造・表示速度・Core Web Vitalsを最適化し、クローラビリティを向上させます。" },
      { icon: "FileText", title: "コンテンツSEO", description: "検索意図を分析した高品質コンテンツを制作。専門性・権威性・信頼性を高めます。" },
      { icon: "Link", title: "内部リンク最適化", description: "サイト内の情報構造を整理し、SEO評価とユーザー体験を同時に向上させます。" },
      { icon: "Globe", title: "外部リンク構築", description: "権威性の高い外部サイトからの自然なリンクを獲得する戦略を立案・実行します。" },
      { icon: "TrendingUp", title: "競合分析・キーワード戦略", description: "競合サイトを徹底分析し、勝てるキーワード戦略を策定します。" },
      { icon: "Activity", title: "月次レポーティング", description: "順位変動・流入数・CV数を可視化し、改善施策をPDCAで回します。" },
    ],
    benefits: [
      { stat: "340", unit: "%", label: "自然検索流入増加", description: "SEO対策実施後の平均自然検索流入増加率" },
      { stat: "2.5", unit: "倍", label: "CV数増加", description: "問い合わせ・資料請求などコンバージョン数の増加倍率" },
      { stat: "89", unit: "%", label: "キーワード上位率", description: "対策キーワードの検索上位10位以内表示率" },
      { stat: "12", unit: "ヶ月", label: "成果継続期間", description: "継続的に成果を維持できる平均期間" },
    ],
    industries: ["EC・通販", "BtoB企業", "医療・クリニック", "士業・専門家", "教育・スクール", "不動産", "IT・SaaS", "製造業", "飲食チェーン", "メディア・コンテンツ"],
    faq: [
      { q: "SEO対策の成果はどのくらいで出ますか？", a: "競合状況や対象キーワードによりますが、一般的に3〜6ヶ月で変化が見え始め、12ヶ月以上で安定した成果が出るケースが多いです。" },
      { q: "コンテンツ制作も依頼できますか？", a: "はい、SEO記事の企画・執筆・公開まで一貫して対応しています。医療・法律など専門分野も、専門家監修のもとで制作します。" },
      { q: "現在運用中のサイトでも対応できますか？", a: "はい、既存サイトへの改善施策も多数実績があります。まずはサイト診断から始めます。" },
      { q: "リスティング広告との違いは何ですか？", a: "広告は即効性がありますが費用が継続的にかかります。SEOは成果が出るまで時間がかかりますが、上位表示されれば費用がかからない永続的な資産になります。" },
      { q: "ペナルティを受けたサイトでも対応できますか？", a: "はい、Googleペナルティの回復支援も対応しています。まずは原因特定の診断を行います。" },
    ],
    seoMeta: {
      title: "SEO対策｜検索上位表示で継続集客｜株式会社サイプレス",
      description: "テクニカル・コンテンツ・外部対策を一気通貫で実施するSEO対策。自然検索流入平均340%増。中小企業のSEO専門会社サイプレス。",
      keywords: ["SEO対策", "検索上位表示", "自然検索流入", "テクニカルSEO", "コンテンツSEO", "SEO会社"],
    },
  },
  {
    slug: "aio",
    name: "AIO対策",
    tagline: "AI検索で引用される存在に",
    title: "AIO対策｜ChatGPT・AI検索で引用される企業へ",
    subtitle: "生成AI時代の新しい検索流入戦略",
    description:
      "AIO（AI最適化）は、ChatGPT・Gemini・Perplexityなどの生成AI検索で自社が引用・推薦されるよう最適化する新しい施策です。AI検索が普及する今、先行して対策することが重要です。",
    accentColor: "#8B5CF6",
    features: [
      { icon: "Cpu", title: "E-E-A-T対策", description: "経験・専門性・権威性・信頼性を構造化し、AIに信頼される情報源を構築します。" },
      { icon: "BookOpen", title: "AI引用コンテンツ制作", description: "AIが引用しやすい構造的・網羅的なコンテンツを制作します。" },
      { icon: "Tag", title: "構造化データ実装", description: "Schema.orgを活用し、AIが情報を正確に理解・引用できるよう構造化します。" },
      { icon: "Users", title: "著者・企業情報最適化", description: "著者プロフィール・会社情報を充実させ、AIの評価基準に対応します。" },
      { icon: "MessageCircle", title: "FAQ・専門コンテンツ強化", description: "AIが回答に使いやすいQ&A形式のコンテンツを戦略的に配置します。" },
      { icon: "Zap", title: "AI検索モニタリング", description: "各AI検索での自社引用率を計測し、継続改善します。" },
    ],
    benefits: [
      { stat: "78", unit: "%", label: "AI引用率向上", description: "AIO対策後のChatGPT等での引用率改善" },
      { stat: "4.2", unit: "倍", label: "指名検索増加", description: "ブランド認知向上による指名検索数の増加倍率" },
      { stat: "156", unit: "%", label: "問い合わせ増加", description: "AI検索経由の新規問い合わせ増加率" },
      { stat: "3", unit: "ヶ月", label: "成果確認期間", description: "AI引用改善が確認できるまでの平均期間" },
    ],
    industries: ["IT・SaaS", "コンサルティング", "士業・専門家", "教育・研修", "医療・健康", "金融・保険", "EC・通販", "BtoB企業", "製造業", "人材・採用"],
    faq: [
      { q: "AIO対策はSEO対策と何が違うのですか？", a: "SEOは検索エンジンのランキングアルゴリズムへの最適化ですが、AIOはChatGPTなどの生成AIが回答生成に使う情報源として選ばれることを目的とします。今後はAIO対策がSEO同様に重要になると予測されています。" },
      { q: "ChatGPTで自社が引用されているか確認できますか？", a: "はい、モニタリングツールと手動チェックを組み合わせて定期計測します。業界・サービス関連のプロンプトで自社が回答に含まれているかを追跡します。" },
      { q: "既存コンテンツのAIO改善も可能ですか？", a: "はい、既存サイトのコンテンツをAIO観点で診断し、改善提案・実施まで対応します。" },
      { q: "どのAIツールへの最適化を行いますか？", a: "ChatGPT、Gemini、Perplexity、Claudeを主要ターゲットとして対策します。日本語AIサービスにも対応します。" },
      { q: "AIO対策の費用はどのくらいですか？", a: "現在のサイト状況と目標によって異なります。まずは無料診断でご要件をお聞きします。" },
    ],
    seoMeta: {
      title: "AIO対策｜ChatGPT・AI検索で引用される企業へ｜株式会社サイプレス",
      description: "AIO対策でChatGPT・Gemini・Perplexityに引用される企業へ。生成AI検索対策の最前線。AI引用率78%向上実績。株式会社サイプレス。",
      keywords: ["AIO対策", "AI検索最適化", "ChatGPT対策", "生成AI対策", "AI検索", "E-E-A-T"],
    },
  },
  {
    slug: "web-design",
    name: "ホームページ制作",
    tagline: "売れるWebサイトを設計する",
    title: "ホームページ制作｜集客・CV改善まで設計するサイト制作",
    subtitle: "デザインだけでなく、成果まで責任を持つWeb制作",
    description:
      "単に「綺麗なサイト」を作るのではなく、SEO・AIO・CV改善・ブランド構築まで一体設計したWebサイトを制作します。制作後も継続的な改善で成果を最大化します。",
    accentColor: "#F59E0B",
    features: [
      { icon: "Palette", title: "ブランドファースト設計", description: "ブランドコンセプト・カラー・トーンから設計し、世界観を徹底して構築します。" },
      { icon: "Smartphone", title: "モバイルファースト", description: "スマートフォンでの体験を最優先に設計。全デバイスで最高のUXを実現します。" },
      { icon: "Zap", title: "高速表示最適化", description: "Lighthouse 90+を目標に、Core Web Vitals・画像最適化・コード最適化を実施します。" },
      { icon: "Search", title: "SEO構造設計", description: "制作時からSEOを考慮した情報設計・メタデータ・構造化データを実装します。" },
      { icon: "TrendingUp", title: "CVR改善設計", description: "ユーザー行動を分析し、問い合わせ・購買につながる導線を科学的に設計します。" },
      { icon: "Settings", title: "CMS・更新体制構築", description: "制作後も自社で更新できるCMS環境を構築。長期運用を見据えた設計をします。" },
    ],
    benefits: [
      { stat: "2.8", unit: "倍", label: "問い合わせ増加", description: "制作・リニューアル後の平均問い合わせ増加倍率" },
      { stat: "94", unit: "点", label: "平均Lighthouseスコア", description: "全プロジェクトの平均Lighthouse Performance Score" },
      { stat: "45", unit: "%", label: "直帰率改善", description: "リニューアル後の直帰率平均改善率" },
      { stat: "30", unit: "日", label: "平均制作期間", description: "要件定義から公開までの平均日数（標準的な規模）" },
    ],
    industries: ["中小企業・スタートアップ", "飲食・サービス業", "医療・クリニック", "士業・コンサル", "EC・通販", "不動産", "製造業", "教育・スクール", "美容・健康", "建設・リフォーム"],
    faq: [
      { q: "制作費用の目安を教えてください。", a: "ランディングページで30〜50万円、コーポレートサイトで50〜150万円、ECサイトで100〜300万円が目安です。要件により変動しますので、まずはご相談ください。" },
      { q: "制作後のサポートはありますか？", a: "はい、公開後の保守・更新・SEO改善・アクセス解析まで継続的にサポートします。月額保守プランもご用意しています。" },
      { q: "WordPressでの制作は可能ですか？", a: "はい、WordPress・Next.js・その他CMSに対応しています。要件に応じて最適な技術を選定します。" },
      { q: "デザインのイメージがない場合でも依頼できますか？", a: "はい、ブランドコンセプトのヒアリングから入り、デザイン提案まで行います。参考サイトがあればお持ちください。" },
      { q: "既存サイトのリニューアルも対応していますか？", a: "はい、リニューアル案件も多数実績があります。既存サイトの課題分析から始め、改善効果を最大化する設計を行います。" },
    ],
    seoMeta: {
      title: "ホームページ制作｜集客・CV改善まで設計｜株式会社サイプレス",
      description: "SEO・AIO・CVR改善まで設計するホームページ制作。問い合わせ平均2.8倍増。東京のWeb制作会社サイプレスが成果にこだわったサイトを制作します。",
      keywords: ["ホームページ制作", "Web制作", "コーポレートサイト制作", "LP制作", "SEO対応サイト", "東京 Web制作"],
    },
  },
  {
    slug: "sns",
    name: "SNS運用",
    tagline: "SNSをビジネスの武器に",
    title: "SNS運用｜Instagram・X・TikTokで集客を加速",
    subtitle: "戦略的SNS運用でブランド認知・集客・採用を強化",
    description:
      "SNS運用は単なる情報発信ではありません。ターゲット分析・コンテンツ戦略・エンゲージメント設計を通じて、ビジネス目標につながるSNS活用を実現します。",
    accentColor: "#EC4899",
    features: [
      { icon: "Camera", title: "コンテンツ制作・投稿", description: "写真・動画・コピーライティングまで一貫して制作。統一された世界観を構築します。" },
      { icon: "Target", title: "ターゲット分析・戦略立案", description: "ペルソナ設計に基づいたコンテンツ戦略とハッシュタグ戦略を策定します。" },
      { icon: "TrendingUp", title: "アカウント成長支援", description: "フォロワー獲得・エンゲージメント向上のための施策を継続実施します。" },
      { icon: "BarChart2", title: "データ分析・レポート", description: "インサイトデータを分析し、効果的な投稿タイミング・形式を継続最適化します。" },
      { icon: "MessageSquare", title: "コメント・DM対応", description: "顧客コミュニケーションを代行し、信頼関係構築を支援します。" },
      { icon: "Megaphone", title: "SNS広告運用", description: "ターゲティング精度の高いSNS広告で、効率的な新規獲得を実現します。" },
    ],
    benefits: [
      { stat: "5.8", unit: "倍", label: "フォロワー増加", description: "運用開始6ヶ月後の平均フォロワー増加倍率" },
      { stat: "12", unit: "%", label: "エンゲージメント率", description: "平均エンゲージメント率（業界平均3%比較）" },
      { stat: "230", unit: "%", label: "プロフィールアクセス増加", description: "最適化後のプロフィールアクセス数増加率" },
      { stat: "3", unit: "ヶ月", label: "成果確認期間", description: "フォロワー増加・エンゲージメント改善を確認できる期間" },
    ],
    industries: ["飲食・カフェ", "美容・サロン", "アパレル・雑貨", "フィットネス・ヨガ", "教育・スクール", "観光・宿泊", "コスメ・健康食品", "インテリア・住宅", "EC・D2C", "スタートアップ"],
    faq: [
      { q: "どのSNSに対応していますか？", a: "Instagram・X（旧Twitter）・TikTok・Facebook・YouTube・LinkedInに対応しています。目標と対象ユーザーに合わせて最適なプラットフォームを選定します。" },
      { q: "投稿頻度はどのくらいですか？", a: "プランによって異なりますが、Instagramなら週3〜5投稿、X/TikTokは毎日投稿など、プラットフォームの特性に合わせた頻度を設定します。" },
      { q: "コンテンツの方向性は任せられますか？", a: "はい、初回のブランドヒアリングをもとに方向性を策定し、月次承認フローで進めます。細かい修正にも対応します。" },
      { q: "効果の測定方法を教えてください。", a: "フォロワー数・インプレッション・エンゲージメント率・プロフィールアクセス・サイトへの誘導数などをKPIとして設定し、月次レポートでご報告します。" },
    ],
    seoMeta: {
      title: "SNS運用｜Instagram・X・TikTok集客｜株式会社サイプレス",
      description: "SNS運用代行でフォロワー平均5.8倍増。Instagram・X・TikTokの戦略立案からコンテンツ制作・投稿まで一貫対応。東京のSNS運用会社。",
      keywords: ["SNS運用代行", "Instagram運用", "TikTok運用", "SNSマーケティング", "SNS集客", "Instagram集客"],
    },
  },
  {
    slug: "ai",
    name: "AI導入支援",
    tagline: "AIで業務を変革する",
    title: "AI導入支援｜中小企業のAI活用を伴走支援",
    subtitle: "業務自動化・チャットボット・AI活用で競争力を高める",
    description:
      "AI技術を活用した業務効率化・自動化・顧客対応改善を支援します。「AIを使いたいが何から始めればいいかわからない」企業に、戦略立案から導入・運用まで伴走します。",
    accentColor: "#06B6D4",
    features: [
      { icon: "Cpu", title: "AI活用戦略立案", description: "業務課題を分析し、ROIを最大化するAI導入ロードマップを策定します。" },
      { icon: "Bot", title: "AIチャットボット構築", description: "顧客対応・社内FAQ・採用対応など用途に合わせたチャットボットを構築します。" },
      { icon: "Zap", title: "業務自動化（RPA×AI）", description: "反復業務をAIで自動化。月数百時間の工数削減を実現します。" },
      { icon: "FileText", title: "AIコンテンツ制作支援", description: "AI活用による記事・メール・提案書制作の効率化と品質向上を支援します。" },
      { icon: "BarChart2", title: "データ分析・予測", description: "売上予測・顧客行動分析・在庫最適化などAIによるデータ活用を実現します。" },
      { icon: "Shield", title: "AI活用ガイドライン策定", description: "安全で効果的なAI活用のためのルール・ガイドラインを整備します。" },
    ],
    benefits: [
      { stat: "65", unit: "%", label: "業務工数削減", description: "AI導入後の対象業務の平均工数削減率" },
      { stat: "24", unit: "時間", label: "顧客対応自動化", description: "AIチャットボットによる24時間対応の実現" },
      { stat: "4.5", unit: "倍", label: "コンテンツ制作速度", description: "AI活用後のコンテンツ制作スピード向上倍率" },
      { stat: "3", unit: "ヶ月", label: "ROI回収期間", description: "AI導入コストを回収できる平均期間" },
    ],
    industries: ["中小企業全般", "製造業", "士業・コンサル", "不動産", "医療・介護", "小売・EC", "飲食チェーン", "教育・研修", "人材・HR", "金融・保険"],
    faq: [
      { q: "AIの知識がなくても依頼できますか？", a: "はい、AI未経験の企業様からのご依頼が多いです。現状の業務課題からヒアリングし、どのAIを使えば解決できるかをご提案します。" },
      { q: "ChatGPTなどを使いこなすための研修もありますか？", a: "はい、ChatGPT・Copilot・Geminiなどのツール活用研修も対応しています。経営者向け・現場スタッフ向けなど対象に合わせてカスタマイズします。" },
      { q: "自社データを使ったAI構築も可能ですか？", a: "はい、社内ドキュメント・過去データを活用したRAGシステムや、Fine-tuningによるカスタムAIの構築も対応しています。" },
      { q: "費用対効果はどのくらいですか？", a: "業種・課題によって大きく異なりますが、月30〜100万円の工数削減効果が出るケースが多いです。まずは無料相談で試算します。" },
    ],
    seoMeta: {
      title: "AI導入支援｜業務自動化・AIチャットボット構築｜株式会社サイプレス",
      description: "中小企業のAI導入を伴走支援。業務工数平均65%削減。AIチャットボット・業務自動化・AIコンテンツ制作。東京のAI活用支援会社サイプレス。",
      keywords: ["AI導入支援", "業務自動化", "AIチャットボット", "AI活用", "DX推進", "ChatGPT活用"],
    },
  },
];

export function getService(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

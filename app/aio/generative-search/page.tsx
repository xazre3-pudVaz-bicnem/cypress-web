import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "生成AI検索・SGE対策｜AI Overviewに引用されるページ設計｜株式会社サイプレス",
  description:
    "Google AI Overview・Perplexity・Bing Copilotに引用される生成AI検索対策。SGEとは何か・E-E-A-T強化・構造化データ実装・一次情報コンテンツ設計まで完全解説。",
  keywords: ["生成AI検索対策", "AI Overview最適化", "SGE対策", "Perplexity対策", "AI検索最適化", "AIO対策", "SGEとは"],
  openGraph: {
    title: "生成AI検索・SGE対策｜AI Overviewに引用されるページ設計｜株式会社サイプレス",
    description: "Google AI Overview等の生成AI検索に引用されやすいコンテンツ設計の完全ガイド。SGE・E-E-A-T・構造化データから運用フローまで解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/aio/generative-search" },
};

const contentFeatures = [
  {
    title: "明確な見出し構造",
    body: "生成AI検索は多数のページをスキャンして回答を生成するため、情報が明確に整理されているページを優先して引用します。H1・H2・H3の適切な階層構造、論理的な情報の流れ、セクションごとの明確な見出しがAIの理解を助けます。見出しには検索キーワードを含めつつ、ユーザーが知りたいことを直接的に表現することで、AIが「この見出しの下に○○についての情報がある」と判断しやすくなります。パンくずリスト・目次も有効です。",
  },
  {
    title: "具体的な数字・事例",
    body: "「効果がある」「多くのユーザーが」という曖昧な表現より、「成約率42%向上」「300社以上の支援実績」のような具体的な数字・データがAI検索に引用されやすいです。AIは情報の信頼性を数字・事例・実績で判断します。自社の実績データ・顧客事例・第三者調査の引用などを積極的に活用し、コンテンツに具体性を持たせることが重要です。独自調査のデータは特に引用価値が高く、他のメディアからの被リンク・引用にもつながります。",
  },
  {
    title: "FAQ形式のコンテンツ",
    body: "生成AI検索は質問に答えるツールであるため、FAQ形式のコンテンツは特に引用されやすい構造です。「○○とは？」「○○の方法は？」「○○の費用は？」など、ユーザーが実際に検索・質問する形式で情報を整理することで、AIが直接回答として引用しやすくなります。FAQPage Schemaを実装することでGoogleのリッチリザルト表示にもつながり、クリック率も向上します。業界でよく質問される疑問を網羅したFAQページは、AIO対策の最も効果的な施策のひとつです。",
  },
  {
    title: "信頼できる情報源としての実績",
    body: "生成AI検索は権威性の高い情報源を優先して引用します。業界メディア・専門誌への掲載・受賞歴・公的機関との連携・著者の資格・実績などが権威性シグナルです。自社ウェブサイトに「メディア掲載実績」「受賞・認定」「会社概要・沿革」を充実させ、外部からのリンク・言及を増やすことで、AIに「信頼できる情報源」として認識されます。Googleのナレッジパネル表示（ナレッジグラフへの登録）も権威性の重要なシグナルです。",
  },
  {
    title: "構造化データの実装",
    body: "構造化データ（Schema.org・JSON-LD）は、Googleと生成AIがページの内容を機械的に理解するための重要な要素です。Article・FAQPage・Organization・Service・BreadcrumbListなどの適切な構造化データを実装することで、AIがページの目的・内容・著者・企業情報を正確に理解できます。Google AI Overviewはインデックス時の構造化データを参照するため、特に重要です。構造化データが充実しているページはAI引用率が高い傾向があります。",
  },
];

const problemItems = [
  {
    title: "SGEとは何かを理解していない",
    body: "SGE（Search Generative Experience）はGoogleが2023年に開始した生成AI検索の実験的機能であり、現在は「AI Overview」として実装されています。従来の検索結果一覧とは根本的に異なるUI・ロジックを持つため、まず仕組みを正確に把握することが対策の第一歩となります。",
  },
  {
    title: "従来のSEOと生成AI検索の違いを認識していない",
    body: "従来のSEOはキーワードランキングを上げるための施策でしたが、生成AI検索では「AIが回答を生成する際に参照するソース」に選ばれることが目標です。順位を上げるだけでなく、AI引用に適したコンテンツ構造・権威性・具体性が求められます。",
  },
  {
    title: "コンテンツが生成AI向けでなく従来検索向けのまま",
    body: "多くのサイトはキーワード最適化・被リンク獲得を中心とした従来SEO向けのコンテンツ設計になっています。生成AI検索に引用されるためには、直接的な回答文・構造化された情報・専門的見解を含む「会話型クエリに答えられるコンテンツ」へのリライトが必要です。",
  },
  {
    title: "E-E-A-Tが弱い",
    body: "GoogleはE-E-A-T（経験・専門性・権威性・信頼性）を評価指標として重視しており、生成AI検索でも同様にE-E-A-Tの高いページを優先して引用します。著者プロフィール・資格・実績・会社概要の充実・外部メディア掲載などを通じてE-E-A-Tを明示的に示すことが重要です。",
  },
  {
    title: "構造化データが未実装",
    body: "FAQPage・Article・Organization・BreadcrumbListなどの構造化データ（JSON-LD）が実装されていないと、AIがページ内容を機械的に解釈しにくくなります。特にFAQPageスキーマは生成AI検索での引用率向上に直結する施策として優先度が高く、既存ページへの後付け実装も可能です。",
  },
  {
    title: "一次情報・独自データがない",
    body: "他のサイトと同じ情報をまとめただけのコンテンツは生成AI検索に引用されにくい傾向があります。自社調査データ・ユーザーアンケート結果・業界独自の知見・実際の支援事例など、他では入手できない一次情報を含むコンテンツは引用価値が高く、被リンク獲得にも有利です。",
  },
  {
    title: "コンテンツの網羅性が低い",
    body: "生成AI検索はユーザーの質問に包括的に回答できるページを好みます。特定キーワードへの最適化だけでなく、関連する疑問・周辺情報・比較検討に必要な情報を一つのページ内に網羅することで、AIが参照するトピッククラスターの中心ページになりやすくなります。",
  },
  {
    title: "会話型クエリへの対応不足",
    body: "「○○するにはどうすれば？」「○○と○○はどちらが良い？」のような会話型の長文クエリへの対応が不足しているサイトが多いです。ChatGPTやGeminiに入力されるような自然文に近いクエリを想定し、直接的かつ丁寧に回答するコンテンツを設計することが今後さらに重要になります。",
  },
  {
    title: "検索意図の多様化に対応していない",
    body: "同一キーワードでも「情報収集目的」「比較検討目的」「購買目的」「手順確認目的」など多様な検索意図が存在します。生成AI検索はそれぞれの意図に合わせた回答を生成するため、コンテンツ内に複数の意図に対応するセクションを含めることで、より多くのクエリでの引用機会が生まれます。",
  },
  {
    title: "AIが参照しにくいJavaScript多用サイト",
    body: "SPA（シングルページアプリケーション）やJavaScriptで動的に生成されるコンテンツは、クローラーが内容を取得しにくい場合があります。生成AI検索に引用されるためにはサーバーサイドレンダリング（SSR）またはスタティック生成（SSG）でHTMLとしてコンテンツを提供することが基本です。",
  },
];

const industryItems = [
  {
    industry: "医療",
    note: "症状・治療法・薬剤情報について「信頼性の高い正確な情報源」として引用されるために、著者の医師資格・診療科・所属機関を明示します。「○○の症状は？」「○○の治療法は？」という質問形式のFAQと、医学的根拠（ガイドライン・論文引用）を組み合わせたコンテンツ設計が効果的です。",
  },
  {
    industry: "金融・保険",
    note: "複雑な金融商品・保険の仕組みを分かりやすく解説するコンテンツは生成AI検索に引用されやすいです。「○○とは？」「○○の違いは？」など比較解説コンテンツを充実させ、FP・保険士などの資格保有者による執筆であることを明示することでE-E-A-Tを高めます。",
  },
  {
    industry: "法律",
    body: "判例・法的手続き・権利義務関係の構造化された解説は、ユーザーが「法的な質問に分かりやすく答えてくれる情報源」を求める際に引用されます。弁護士・司法書士など有資格者の監修を明示し、「○○の手続きの流れ」「○○の場合はどうなる？」という形式のQ&Aを充実させることが重要です。",
  },
  {
    industry: "旅行",
    note: "旅行計画を助ける網羅的な情報（観光地・交通・宿泊・費用・シーズン・持ち物・現地情報）を一つのページにまとめたガイドコンテンツは、「○○旅行の計画を立てたい」という会話型クエリへの回答として引用されやすいです。実際の旅行体験に基づく一次情報を含めることで独自性が生まれます。",
  },
  {
    industry: "教育",
    note: "学習ロードマップ・資格取得の手順・スクール比較情報などは教育分野での生成AI検索引用率が高いカテゴリです。「○○を学ぶには？」「○○資格の取り方は？」という質問に対して段階的・具体的に答えるコンテンツ設計が有効で、学習時間の目安・費用感・難易度を数値で示すことが特に重視されます。",
  },
  {
    industry: "IT・テクノロジー",
    note: "ツール比較・技術解説・導入手順などのコンテンツはIT領域での生成AI検索引用の中心です。「○○と○○の違い」「○○の設定方法」「○○のエラー対処法」といった具体的なクエリに直接答えるページを設計します。コードサンプル・スクリーンショット・実際の設定値を含めることで引用価値が高まります。",
  },
  {
    industry: "不動産",
    note: "購入・売却・賃貸プロセスの詳細ガイドは、「初めての不動産購入の流れ」「住宅ローンの仕組み」など複雑なプロセスについて質問するユーザーへの回答として引用されやすいです。地域別の相場情報・チェックリスト・Q&Aを組み合わせ、購入検討者の不安を解消する包括的なコンテンツが有効です。",
  },
  {
    industry: "飲食",
    note: "地域グルメ情報・食材の栄養・レシピ・食文化の解説は飲食分野での生成AI検索引用が多いカテゴリです。「○○の産地・旬・選び方・調理法」を網羅したコンテンツや、地域名と組み合わせたグルメガイドは会話型クエリへの回答として適しており、LocalBusiness構造化データとの組み合わせが効果的です。",
  },
];

const flowSteps = [
  {
    step: "01",
    title: "現在のSGE・AI Overview表示状況確認",
    body: "主要なターゲットキーワードについてGoogle検索を実際に行い、AI Overviewが表示されるかどうか、自社コンテンツが引用されているかを確認します。AI Overviewの有無・引用されているドメイン・回答のパターンを記録し、現状把握のベースラインを作ります。",
  },
  {
    step: "02",
    title: "生成AI検索での自社言及状況調査",
    body: "ChatGPT・Perplexity・Gemini等の主要AI検索ツールに自社関連クエリを投げ、回答内で自社が言及されているかを調査します。引用されているコンテンツのパターン・共通点を分析し、強化すべきコンテンツ領域を特定します。",
  },
  {
    step: "03",
    title: "対応優先キーワード選定",
    body: "AI Overviewが表示されやすいキーワード（情報収集系・比較系・方法系のクエリ）を優先してリストアップします。現在自社が検索上位にあるが引用されていないページ、競合が引用されているキーワードを優先対応リストとして整理します。",
  },
  {
    step: "04",
    title: "コンテンツの回答型リライト",
    body: "選定したページのコンテンツを、AIが直接引用しやすい「回答型」にリライトします。見出し構造の整理・質問形式の見出し追加・直接的な回答文の配置・具体的数字・事例の追加を行います。1,500文字以上の十分な情報量を確保します。",
  },
  {
    step: "05",
    title: "E-E-A-T強化（著者情報・会社情報）",
    body: "コンテンツの著者情報（氏名・資格・実績・プロフィール画像）・会社概要（設立年・実績・受賞歴・メディア掲載）をページ内に明示します。著者ページを作成し、ArticleスキーマのauthorプロパティでURLを紐付けることでGoogleの認識を強化します。",
  },
  {
    step: "06",
    title: "構造化データ実装",
    body: "FAQPage・Article・Organization・BreadcrumbList・HowToなど、各ページに適した構造化データをJSON-LD形式で実装します。Google Search Consoleのリッチリザルトテストで検証し、エラーゼロの状態を確認します。定期的にエラーの有無をモニタリングします。",
  },
  {
    step: "07",
    title: "一次情報コンテンツ追加",
    body: "自社調査データ・支援実績の具体的数字・顧客インタビュー・業界独自の知見など、他のサイトにはない一次情報を含むコンテンツを追加します。独自データは引用価値が高く、他メディアからの被リンク・引用増加にも寄与します。",
  },
  {
    step: "08",
    title: "内部リンク最適化",
    body: "AI引用を狙うページを中心とした内部リンク設計（トピッククラスター構造）を整備します。関連する詳細ページ・補完情報ページからのリンクをピラーページ（中核ページ）に集め、Googleが「このサイトはこのトピックに詳しい」と認識できる構造を作ります。",
  },
  {
    step: "09",
    title: "モニタリング設定",
    body: "Google Search ConsoleでAI Overview引用状況（Impressions・CTRの変化）を継続監視します。対象キーワードの手動確認スケジュールを月2回設定し、ChatGPT・Perplexity等でも定期チェックを実施します。引用状況の変化を記録するトラッキングシートを整備します。",
  },
  {
    step: "10",
    title: "月次改善サイクル",
    body: "モニタリングデータをもとに毎月改善を繰り返します。引用されていないが上位表示されているページの再診断・引用されたページの成功パターン分析・新規コンテンツへの展開を月次PDCAサイクルとして回します。競合の引用状況変化も定期確認します。",
  },
];

const kpiItems = [
  {
    label: "AI生成検索での自社言及回数",
    where: "ChatGPT・Perplexity・Geminiへの手動クエリ確認 / AIモニタリングツール",
  },
  {
    label: "SGE・AI Overview表示対象キーワード数",
    where: "Google Search（手動確認）/ キーワード管理シート",
  },
  {
    label: "AI引用コンテンツ数",
    where: "AI検索モニタリングツール / 月次手動確認レポート",
  },
  {
    label: "オーガニックCTR推移",
    where: "Google Search Console > 検索パフォーマンス > CTR列",
  },
  {
    label: "コンテンツ網羅性スコア",
    where: "Surfer SEO / Clearscope / 内製コンテンツ監査シート",
  },
  {
    label: "構造化データエラー数",
    where: "Google Search Console > エクスペリエンス > 検索の見え方 > リッチリザルト",
  },
  {
    label: "月間オーガニック流入数",
    where: "Google Analytics 4 > 集客 > オーガニック検索チャネル",
  },
  {
    label: "ブランドクエリのインプレッション数",
    where: "Google Search Console > 検索パフォーマンス（ブランド名フィルタ）",
  },
];

const faqItems = [
  {
    q: "AI Overviewに表示されると通常の検索結果への影響はありますか？",
    a: "AI Overviewに引用されることで、通常の検索結果でも権威性が高まり、順位改善に寄与することが多いです。また、AI Overviewには掲載ページへのリンクが表示されるため、クリックによる直接流入も獲得できます。両方の最適化を同時に進めることをお勧めします。",
  },
  {
    q: "生成AI検索は今後どう変わりますか？",
    a: "生成AI検索は急速に進化しており、より複雑な質問への回答・マルチモーダル（画像・動画対応）・パーソナライズが進んでいます。基本的な施策（コンテンツ品質・権威性・構造化データ）は今後も有効ですが、各AI特有の最適化は継続的なアップデートが必要です。今から対策を始めることで、競合に先行して優位性を確立できます。",
  },
  {
    q: "どのAI検索に対策を優先すべきですか？",
    a: "現時点ではGoogle AI OverviewとChatGPT Searchへの対策が優先度が高いです。Google AI Overviewは最も多くのユーザーに見られ、ChatGPTは購買意欲の高いユーザーの利用が多いからです。Perplexity・Gemini・Bing Copilotは次の優先順位です。ただし、基本的な施策は複数のAIに同時に有効なため、まず共通施策を実施することが効率的です。",
  },
  {
    q: "AI検索で自社コンテンツが引用されたかを確認できますか？",
    a: "Google AI Overviewはサーチコンソールで引用されたページのデータが確認できます（搭載後）。ChatGPT・Perplexityは直接のデータ提供がないため、定期的にターゲットクエリを投げて引用状況を手動で確認するか、専用のモニタリングツールを活用します。当社では月次でのAI引用モニタリングレポートを提供しています。",
  },
  {
    q: "既存のSEOコンテンツをAIO向けに改善するには何から始めればいいですか？",
    a: "まず既存コンテンツのAIへの引用しやすさを評価します。見出し構造の整理・FAQ追加・数字・事例の補強・構造化データの実装が優先施策です。特にSEOで既に上位表示されているページは、最も効果的にAIO対策できます。アクセス数が多いページから改善することで、効率的に成果を上げられます。",
  },
  {
    q: "SGEとAI Overviewは同じものですか？",
    a: "SGE（Search Generative Experience）はGoogleが2023年に開始した実験的機能の名称で、2024年以降に「AI Overview」として正式展開された機能の前身です。現在はAI Overviewという名称が一般的ですが、業界では慣習的にSGEという呼称も使われています。機能の本質は同じ「AI生成回答＋参照元リンク」の検索体験です。",
  },
  {
    q: "ゼロクリック問題にはどう対処すればいいですか？",
    a: "ゼロクリック問題（AIが回答を生成することでクリックされない現象）への対処として、AI引用を活用してブランド認知を高めつつ、引用コンテンツの末尾にCTA（より詳しい情報・相談・資料請求）を設置することが有効です。AIが引用しやすい要約情報を前半に置き、より深い情報・独自価値を後半に配置する設計が効果的です。",
  },
  {
    q: "E-E-A-Tを高めるための具体的な施策を教えてください。",
    a: "E-E-A-T強化の具体的施策として、著者ページの作成（資格・実績・写真付き）・会社概要ページの充実・メディア掲載実績の掲載・受賞・認定の明示・顧客の声・実績数値の公開・外部専門家によるレビュー・Googleナレッジパネルの獲得などがあります。Articleスキーマのauthor・publisherプロパティでの明示も重要です。",
  },
  {
    q: "小規模サイトでもAI Overviewに引用されますか？",
    a: "サイト規模より情報の質・専門性・E-E-A-Tが重要です。大手サイトでも質の低いコンテンツは引用されず、小規模サイトでも高品質・専門的・一次情報を持つページは引用されています。特定の専門分野に特化した深い情報を持つ小規模サイトは、その分野の権威として引用される可能性が十分あります。",
  },
  {
    q: "生成AI検索対策にかかる期間と費用の目安は？",
    a: "コンテンツリライト・構造化データ実装・E-E-A-T強化などの施策を実施後、AI検索での引用が増加し始めるまで通常2〜4ヶ月程度かかります。既存コンテンツの改善は比較的早く結果が出やすく、新規コンテンツ制作は6ヶ月以上を見込むことが多いです。費用は施策範囲によって異なりますので、まず現状診断からご相談ください。",
  },
  {
    q: "JavaScriptを多用したサイトでもAI検索対策できますか？",
    a: "Next.js・Nuxt.jsなどSSR/SSG対応フレームワークに移行することで対応可能です。また、既存のSPAサイトでも、コンテンツをサーバーサイドでレンダリングするようにprerendering設定を追加することで改善できます。まず現在のサイトのクロール状況をGoogle Search ConsoleのURL検査で確認することをお勧めします。",
  },
  {
    q: "会話型クエリとはどういうものですか？",
    a: "「東京でおすすめのイタリアンレストランは？」「新卒で転職するのはいつがいいですか？」のような自然な文章形式の質問クエリです。従来の「東京 イタリアン おすすめ」のような短いキーワード検索と異なり、ChatGPT等のAIチャットに入力するような長文・自然文のクエリがAI検索では一般的です。これらのクエリに直接回答するコンテンツ設計が重要です。",
  },
  {
    q: "FAQ形式以外で引用されやすいコンテンツ形式はありますか？",
    a: "HowTo形式（手順解説）・比較表・リスト記事（「○○選」）・用語解説・統計データまとめなどが引用されやすい形式です。特に「○○の選び方」「○○の種類一覧」「○○手順の解説」など、ユーザーの意思決定や理解を助けるコンテンツはAI引用率が高い傾向があります。HowToスキーマの実装も併用することで引用される確率が高まります。",
  },
  {
    q: "Perplexityに引用されるための施策はGoogle AI Overviewと違いますか？",
    a: "基本的な方向性（高品質なコンテンツ・E-E-A-T・構造化データ）は共通ですが、Perplexityは特にリアルタイム性の高い情報・専門性の高い解説・数値データを重視する傾向があります。またPerplexityはBingインデックスも参照するため、Bing Webmaster Toolsへの登録・サイトマップ送信も有効です。",
  },
  {
    q: "BingのCopilotへの対策は必要ですか？",
    a: "Microsoftの生成AI検索（Copilot）はBing検索インデックスを基盤としています。Bing Webmaster Toolsへの登録・サイトマップ提出を行い、BingのインデックスにしっかりクロールされるようにすることがCopilot引用の前提条件です。Google AI Overviewと基本施策は重複するため、追加コストは比較的小さいです。",
  },
  {
    q: "生成AI検索対策と通常のSEOは両立しますか？",
    a: "両立するだけでなく、相互に強化し合います。E-E-A-T強化・高品質なコンテンツ・構造化データ・サイト表示速度の改善はいずれもSEOにもAIO対策にも有効な施策です。AI検索に引用されることで外部からの言及が増え、それがSEOの被リンク・権威性評価にも貢献します。一本化した戦略で取り組むことが効率的です。",
  },
  {
    q: "動画コンテンツは生成AI検索での引用対象になりますか？",
    a: "現在のGoogle AI Overviewはテキストコンテンツを中心に引用していますが、YouTubeの動画字幕・概要欄の情報が参照されるケースも報告されています。動画を制作する場合は、対応するテキスト解説記事（動画の内容を文章で補完するもの）を併設することで、AI引用を狙いやすくなります。VideoObjectスキーマの実装も有効です。",
  },
  {
    q: "コンテンツの更新頻度は生成AI検索引用に影響しますか？",
    a: "定期的に更新されている鮮度の高いコンテンツは、AI検索でも信頼性が高いと評価されやすいです。特に「最新情報」「○○年版」など時事性のあるトピックでは更新頻度が重要です。一方、evergreen content（時間が経っても有効な内容）は高品質であれば更新頻度が低くても引用されます。コンテンツの種類に応じた更新戦略が重要です。",
  },
  {
    q: "著者情報はどの程度詳しく書けばいいですか？",
    a: "最低限：氏名・役職・専門分野。推奨：氏名・役職・資格・経歴・実績数値・顔写真・プロフィールページへのリンク。さらに強化：メディア掲載実績・執筆書籍・外部講演・SNSプロフィールリンク。Personスキーマで構造化データを実装し、Articleスキーマのauthorプロパティと紐付けることでGoogleの認識が高まります。",
  },
  {
    q: "競合他社が先にAI引用を獲得している場合、後発で追いつけますか？",
    a: "追いつくだけでなく逆転することも可能です。AI検索の引用対象は固定ではなく、より質の高いコンテンツが公開されるたびに更新されます。競合分析で引用されているコンテンツのパターンを把握し、より詳細・より信頼性の高い・より網羅的なコンテンツを作成することで引用を獲得できます。E-E-A-Tで差別化することが特に有効です。",
  },
  {
    q: "生成AI検索対策の効果はどう測定しますか？",
    a: "主要指標は：Google Search ConsoleでのImpressions・CTR変化、AI検索ツールへの手動クエリによる引用確認、ブランド名検索でのインプレッション増加、オーガニック流入数の変化です。専用のAIモニタリングツール（Brandwatch・Mention等）も活用できます。当社ではこれらを組み合わせた月次レポートを提供しています。",
  },
];

const relatedLinks = [
  { href: "/aio", label: "AIO対策とは", desc: "AI検索最適化の全体戦略" },
  { href: "/aio/chatgpt", label: "ChatGPT対策", desc: "ChatGPTへの引用戦略" },
  { href: "/aio/llm-optimization", label: "LLM最適化", desc: "大規模言語モデルへの最適化" },
  { href: "/aio/knowledge-graph", label: "ナレッジグラフ対策", desc: "エンティティとしての認識向上" },
  { href: "/aio/entity-optimization", label: "エンティティ最適化", desc: "Googleのエンティティ認識強化" },
  { href: "/aio/structured-data", label: "構造化データ実装", desc: "Schema.org・JSON-LD" },
  { href: "/aio/ai-overview", label: "AI Overview対策", desc: "Google AI Overview引用獲得" },
  { href: "/aio/e-e-a-t", label: "E-E-A-T強化", desc: "専門性・権威性・信頼性の向上" },
  { href: "/aio/faq-optimization", label: "FAQ最適化", desc: "FAQPageスキーマ実装" },
  { href: "/aio/perplexity", label: "Perplexity対策", desc: "Perplexity引用戦略" },
  { href: "/seo", label: "SEO対策", desc: "検索エンジン最適化の全体戦略" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "コンテンツによる集客強化" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "技術的SEO対策" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域検索への最適化" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップ・地域集客対策" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "サービス内容と料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "SEO支援サービス詳細" },
  { href: "/services/content-marketing", label: "コンテンツマーケティング", desc: "コンテンツ制作・運用支援" },
  { href: "/services/web-design", label: "Webデザイン制作", desc: "高品質サイト制作" },
  { href: "/industry/medical", label: "医療・クリニック向け", desc: "医療業界のAIO・SEO対策" },
  { href: "/industry/finance", label: "金融・保険向け", desc: "金融業界のAIO・SEO対策" },
  { href: "/industry/real-estate", label: "不動産向け", desc: "不動産業界のAIO・SEO対策" },
  { href: "/area/tokyo", label: "東京のAIO対策", desc: "東京エリアの実績・対応" },
  { href: "/area/osaka", label: "大阪のAIO対策", desc: "大阪エリアの実績・対応" },
];

export default function GenerativeSearchPage() {
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
              <span style={{ color: "#0F172A" }}>生成AI検索対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Generative AI Search / SGE
            </p>
            <h1
              className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              生成AI検索・<br />SGE対策
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              Google AI Overview・Perplexity・Bing Copilotなどの生成AI検索では、
              AIが複数ソースを参照して回答を生成し、その際に参照したページが表示されます。
              この「AI生成回答での引用」を獲得することで、新たな集客経路を確立します。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_22_31.png"
            alt="生成AI検索・AI Overview対策"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.4)" }} />
        </section>

        {/* 生成AI検索とは */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What is Generative Search
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}>
              生成AI検索とは
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                生成AI検索とは、AIが複数のウェブページを参照して回答を生成し、検索クエリに対する
                まとめ回答を提供する検索体験です。GoogleではSGE（Search Generative Experience）として
                2023年に実験を開始し、2024年以降「AI Overview」として広く展開しています。
                従来の「リンクのリスト」から「AIが生成した回答＋参照元リンク」へと検索体験が変化しています。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                生成AI検索でページが引用されることには大きな価値があります。
                AI Overviewに引用されたページへのクリック率はオーガニック検索の通常の位置より高いという
                データもあります。また、「AIが参照している情報源」という認知は、
                ブランドの権威性・信頼性の向上にも寄与します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                一方で、「ゼロクリック問題」にも対応が必要です。AIが回答を生成することで
                ユーザーが検索結果をクリックせずに情報を得てしまうケースが増えています。
                この変化への適応として、AI引用を獲得しつつ、引用されることでブランド認知を高め、
                より深い情報・サービスへの誘導を設計することが重要です。
              </p>
            </div>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              On This Page
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-4">
              {[
                "SGE・AI Overviewとは何か、従来の検索と何が違うのかの基礎知識",
                "生成AI検索に引用されやすいページの5つの共通特徴",
                "よくある課題10項目とその根本原因・対処法",
                "医療・金融・法律・旅行など8業種の業種別活用ポイント",
                "現状確認から月次改善サイクルまでの10ステップ実装フロー",
                "AI引用効果を測定するための7つのKPIと確認場所",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-bold shrink-0 mt-0.5" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 引用されやすいページの特徴 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Content Features
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}>
              引用されやすいページの特徴
            </h2>
            <div className="max-w-3xl">
              {contentFeatures.map((item, i) => (
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
              業種別の活用ポイント
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

        {/* 2-col: 生成AI検索で引用されるために */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  Generative Search
                </p>
                <h2 className="font-black text-[26px] mb-6" style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}>
                  生成AI検索で引用されるために
                </h2>
                <div className="space-y-4">
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    Google AI OverviewやPerplexityは複数のソースをスキャンして回答を生成します。引用されるためには、明確な見出し構造・具体的な数字・FAQ形式のコンテンツが不可欠です。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    「ゼロクリック問題」にも対応が必要です。AIが回答を生成することでクリックなしに情報提供される一方、引用されることでブランド認知が高まるため、より深いサービスへの誘導設計が重要です。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    構造化データの実装・業界メディア掲載・Googleナレッジパネルへの登録が、生成AI検索での引用確率を高める主要な施策です。
                  </p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden" style={{ height: "360px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_18_57.png"
                  alt="生成AI検索・デジタルオーバーレイのカンファレンス"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="生成AI検索対策に関するよくある質問" bgColor="#F9F8F5" />

        <RelatedPages links={relatedLinks} />

        <PageContactCTA
          heading="生成AI検索対策のご相談はサイプレスへ"
          body="Google AI Overview・ChatGPT・Perplexityに引用されやすいコンテンツ設計と構造化データ実装をサポートします。現状のAI引用状況を診断し、優先施策をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}

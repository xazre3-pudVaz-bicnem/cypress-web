import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "FAQ最適化｜AIO対策でAI検索に引用される｜株式会社サイプレス",
  description:
    "FAQコンテンツをAIO対策として活用し、ChatGPT・Gemini・Perplexityに引用されやすいサイトを構築。FAQPageスキーマ実装・疑問形フレーズ設計・内部リンク戦略まで解説。",
  keywords: ["FAQ最適化", "AIO対策", "FAQPageスキーマ", "AI検索引用", "FAQ設計", "AIO"],
  openGraph: {
    title: "FAQ最適化｜AIO対策でAI検索に引用される｜株式会社サイプレス",
    description: "FAQコンテンツのAIO対策活用。AI検索に引用されやすいFAQ設計の全手法を解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/aio/faq-optimization" },
};

const POINTS = [
  {
    num: "01",
    title: "ユーザーが実際に検索する「疑問形フレーズ」を見出しにする",
    body: "「○○とは何ですか？」「○○はどうすれば解決できますか？」といった疑問文を見出し（H3・H2）として使うことで、AIが質問と回答を紐付けやすくなります。検索ボリュームツールやサジェスト機能でリアルな疑問形フレーズを収集してから設計しましょう。",
  },
  {
    num: "02",
    title: "答えを最初の1〜2文で完結させる",
    body: "AIは回答の冒頭部分を優先的に引用します。「結論→理由→詳細」の順序で記述し、最初の1〜2文だけで質問に完全に答えられる構造にすることが重要です。前置きの長い文章は引用されにくく、離脱率も上がります。",
  },
  {
    num: "03",
    title: "専門用語は補足説明を加える",
    body: "業界特有の用語や略語が出てきた場合、括弧内に簡潔な説明を加えることでAIの理解精度が向上します。「AIO（AI検索最適化）」のような記述はGoogleの構造理解にも貢献し、ナレッジグラフへの情報浸透を助けます。",
  },
  {
    num: "04",
    title: "FAQPageスキーマで構造化データを実装する",
    body: "JSON-LDでFAQPage Schemaを実装することで、GoogleとAIの両方に質問と回答のペアを明示的に伝えられます。Googleのリッチリザルト（FAQ表示）にも対応し、CTR向上にも直結します。サイト全体のFAQを一括管理できる実装が理想的です。",
  },
  {
    num: "05",
    title: "FAQ同士に内部リンクを設置する",
    body: "関連するFAQ同士をリンクで繋ぐことで、AIがトピッククラスターとしてサイトの専門性を評価しやすくなります。「詳しくは○○のFAQをご覧ください」という文脈内リンクが、ユーザー滞在時間の延長にも貢献します。",
  },
  {
    num: "06",
    title: "定期的にFAQを追加・更新する",
    body: "新サービスの追加・季節的な疑問・顧客からの実際の問い合わせをFAQとして転換し、継続的に更新することが重要です。更新頻度の高いサイトはGoogleのクロール頻度が上がり、AI学習データへの露出機会も増加します。",
  },
];

const CHALLENGES = [
  {
    num: "01",
    title: "FAQセクションはあるが内容が薄い",
    body: "形式的に3〜5問だけFAQを設置しているサイトが多くありますが、内容が表面的すぎると検索にもAIにも評価されません。顧客が本当に悩んでいる具体的な質問と、実際の答えになる詳細な回答を揃えることが出発点です。",
  },
  {
    num: "02",
    title: "FAQPageスキーマが未実装",
    body: "HTMLでFAQを記述していても、JSON-LDによるFAQPageスキーマが実装されていないためGoogleとAIが質問と回答のペアを機械的に認識できません。スキーマ実装はリッチリザルト表示とAI引用率の両方を直接改善します。",
  },
  {
    num: "03",
    title: "質問が顧客目線でない",
    body: "「○○とはどういうサービスですか」のような企業目線の質問ではなく、「費用はいくらかかりますか」「どれくらいで効果が出ますか」という顧客が実際に知りたい質問を設計する必要があります。問い合わせ履歴・口コミ・SNSコメントから収集するのが確実です。",
  },
  {
    num: "04",
    title: "回答が長すぎる・冗長",
    body: "1回答あたりの目安は100〜200文字です。それを超えると結論が埋もれてAIが引用すべき箇所を特定しにくくなります。長い説明が必要な場合は「詳しくはこちら」と別ページへの内部リンクを設置し、FAQは簡潔に保つ設計が有効です。",
  },
  {
    num: "05",
    title: "1ページに1つのFAQしかない",
    body: "サービスページごとにFAQを設置せず、サイト内に1つのFAQページしかない構成では、各ページの専門性がAIに伝わりません。すべてのサービスページ・料金ページ・会社概要ページにそれぞれ専用のFAQを配置する必要があります。",
  },
  {
    num: "06",
    title: "カテゴリ別・ページ別のFAQ設計がない",
    body: "FAQを一箇所に集約するだけでなく、テーマ別・カテゴリ別に整理してページ構造を設計することで、特定トピックへの専門性がAIに認識されやすくなります。「費用FAQ」「手続きFAQ」「アフターケアFAQ」のように分類することが有効です。",
  },
  {
    num: "07",
    title: "検索意図と合っていない質問",
    body: "Googleサジェスト・PAA（他の人はこちらも検索）・AnswerThePublicなどで実際の検索意図を把握せずにFAQを作成すると、誰も検索しない質問を量産してしまいます。データに基づいたキーワード調査からFAQ設計を始めることが重要です。",
  },
  {
    num: "08",
    title: "AIが引用しやすい形式でない",
    body: "箇条書きや表形式のみのFAQはAIが回答として引用しにくい構造です。「質問：〜〜ですか？　回答：〜〜です。」という明確なQ&A形式で、かつ回答の冒頭に結論が来る構成にすることで引用率が向上します。",
  },
  {
    num: "09",
    title: "FAQのキーワード最適化ができていない",
    body: "FAQの質問文と回答文に関連キーワードを自然に含めることで、ロングテールキーワードでの検索流入も獲得できます。「○○ 費用 相場」「○○ 期間 目安」など具体的なフレーズを含む疑問文の設計がSEO・AIO両面で効果的です。",
  },
  {
    num: "10",
    title: "定期的な更新・追加がない",
    body: "一度FAQを作成してそのままにしているサイトが多くあります。市場環境の変化・新サービスの追加・季節的な疑問など、FAQは生きたコンテンツとして継続的に更新・追加していくことがGoogleのクロール頻度向上とAI引用率維持の鍵です。",
  },
];

const INDUSTRIES = [
  {
    num: "01",
    industry: "医療",
    point: "症状・診療・保険のFAQ",
    detail: "「この症状は何科を受診すればよいですか」「保険は適用されますか」など患者が来院前に抱く疑問を中心に設計します。医師監修の明示とMedicalOrganizationスキーマとの連携が信頼性を高めます。",
  },
  {
    num: "02",
    industry: "法律 / 士業",
    point: "手続き・費用・期間のFAQ",
    detail: "「相談料は無料ですか」「解決まで何ヶ月かかりますか」など費用と期間に関する質問が検索意図の中核です。弁護士・税理士などの専門家資格をPerson Schemaで紐付け、権威性を高めます。",
  },
  {
    num: "03",
    industry: "不動産",
    point: "購入・賃貸・管理のFAQ",
    detail: "「初期費用の内訳を教えてください」「管理費はどのように決まりますか」といった費用・契約・手続きに関するFAQが特に有効です。地域別FAQページとの連携でローカルSEOとAIO対策を同時に強化します。",
  },
  {
    num: "04",
    industry: "EC",
    point: "送料・返品・保証のFAQ",
    detail: "「送料無料になる条件は何ですか」「返品・交換はできますか」など購買前の不安を解消するFAQが離脱防止とCVRに直結します。商品詳細ページにも個別FAQを設置しProductスキーマと連携します。",
  },
  {
    num: "05",
    industry: "SaaS",
    point: "機能・価格・移行のFAQ",
    detail: "「無料プランと有料プランの違いは何ですか」「既存ツールからの移行は可能ですか」など導入検討時の疑問を徹底的に網羅します。SoftwareApplicationスキーマと組み合わせ、AI検索での製品言及を促進します。",
  },
  {
    num: "06",
    industry: "教育",
    point: "入学・費用・コースのFAQ",
    detail: "「入学に必要な条件はありますか」「学費の支払い方法を教えてください」など入学前の不安解消FAQが問い合わせ削減と入学率向上に貢献します。EducationalOrganizationスキーマとの連携が信頼性を強化します。",
  },
  {
    num: "07",
    industry: "飲食",
    point: "メニュー・アレルギー・予約のFAQ",
    detail: "「アレルギー対応のメニューはありますか」「予約なしで入れますか」など来店前の疑問を解消するFAQが予約率向上に直結します。FoodEstablishmentスキーマのmenuUrl・hasMenuとFAQを連携します。",
  },
  {
    num: "08",
    industry: "建設 / リフォーム",
    point: "工期・費用・保証のFAQ",
    detail: "「工事期間中は生活できますか」「アフターフォローはどうなりますか」など費用と安心に関するFAQが受注率に大きく影響します。施工事例ページと内部リンクで専門性とトラストを同時に強化します。",
  },
];

const FLOW = [
  { num: "01", step: "顧客からの実際の質問収集（問い合わせ・口コミ・SNS）", detail: "過去の問い合わせメール・チャット履歴・Googleレビュー・SNSコメントを精査し、顧客が本当に知りたい疑問を一覧化します。企業側の「伝えたいこと」ではなく顧客の「知りたいこと」を優先します。" },
  { num: "02", step: "Googleサジェスト・「他の人はこちらも検索」確認", detail: "Googleサジェスト・PAA（People Also Ask）・AnswerThePublic・関連キーワードツールを使い、実際に検索されている疑問形フレーズを収集します。検索意図に沿った質問設計の根拠データとなります。" },
  { num: "03", step: "質問のグループ化・優先度設定", detail: "収集した質問を「費用・期間・手続き・品質・アフターケア」などのカテゴリに分類し、検索ボリュームと顧客の疑問頻度を基に優先度を設定します。高優先度の質問から順に設計・実装します。" },
  { num: "04", step: "各ページ15-25問のFAQ設計", detail: "サービスページ・料金ページ・会社概要ページなど各重要ページに15〜25問のFAQを設計します。ページのテーマと一致した質問に絞り、関連性の高いキーワードを自然に含めます。" },
  { num: "05", step: "簡潔な回答文作成（各回答100-200文字目安）", detail: "各回答は100〜200文字を目安に、結論を最初の1文で述べてから理由・詳細を補足する「結論ファースト」構造で記述します。詳細説明が必要な場合は専用ページへの内部リンクを設置します。" },
  { num: "06", step: "FAQPageスキーマのJSON-LD実装", detail: "Next.jsのpage.tsxにFAQPageスキーマのJSON-LDをscriptタグで実装します。questionとacceptedAnswerのtext内容をHTML上のFAQと完全に一致させ、Search ConsoleのリッチリザルトテストでエラーがないことをCに確認します。" },
  { num: "07", step: "全ページへのFAQ追加", detail: "優先度に従って、サービスページ→料金ページ→会社概要→ブログ記事の順にFAQを追加・実装していきます。各ページに個別のFAQPageスキーマを実装し、ページ固有の質問と回答を配置します。" },
  { num: "08", step: "Search Consoleでリッチリザルト確認", detail: "実装後、Google Search Consoleの「拡張」タブで「よくある質問（FAQ）」のリッチリザルト状況を確認します。エラーが検出された場合はスキーマのJSON-LDを修正し再インデックスをリクエストします。" },
  { num: "09", step: "AI引用状況モニタリング", detail: "ChatGPT・Gemini・Perplexityに業界関連の質問を定期的に投げ、自社FAQが引用・参照されているかを確認します。引用されている場合はURL・文言を記録し、引用されていない場合は回答構造を改善します。" },
  { num: "10", step: "3ヶ月ごとの更新・追加", detail: "3ヶ月ごとに新しい問い合わせ内容・市場変化・新サービスを反映したFAQを追加します。古くなった情報は更新し、回答文を最新の状態に保つことでGoogleのクロール頻度とAI引用率を維持します。" },
];

const KPIS = [
  { num: "01", kpi: "FAQリッチリザルト表示回数", where: "Google Search Console（拡張レポート）", detail: "FAQPageスキーマが正しく実装されていれば、Search Consoleの「よくある質問」セクションでリッチリザルトの表示回数が確認できます。表示回数の増加がFAQ設計改善の指標となります。" },
  { num: "02", kpi: "FAQページのCTR", where: "Google Search Console（検索パフォーマンス）", detail: "FAQリッチリザルト表示に伴うCTRの変化を測定します。FAQ展開表示でユーザーが回答を見つけてしまうと直接クリックが減る場合もありますが、ブランド認知には貢献します。" },
  { num: "03", kpi: "AI Overview/AI検索での引用率", where: "ChatGPT・Gemini・Perplexityへの手動クエリ", detail: "業界関連の疑問を生成AIに定期的に投げ、自社FAQが言及・引用されているかを確認します。月次でスコアリングし、引用率の推移を追跡します。" },
  { num: "04", kpi: "FAQスキーマエラー数", where: "Google Search Console（拡張レポート）", detail: "FAQPageスキーマのエラー・警告数をゼロに保つことを目標とします。エラーがあるとリッチリザルトが表示されず、AI引用にも悪影響を及ぼします。" },
  { num: "05", kpi: "1ページあたりFAQ数平均", where: "サイト内FAQ棚卸し管理シート", detail: "サービスページ・料金ページなどの重要ページにおける平均FAQ数を追跡します。目標は各ページ15〜25問とし、不足しているページの優先改善に活用します。" },
  { num: "06", kpi: "オーガニック流入数（FAQ経由）", where: "Google Analytics 4（ランディングページ別）", detail: "FAQページ・FAQセクションが設置されているページへの検索流入数を測定します。疑問形ロングテールキーワードからの流入増加がFAQ最適化の直接的な成果です。" },
  { num: "07", kpi: "問い合わせ削減率（FAQで解決）", where: "問い合わせフォーム数 / CRMデータ", detail: "FAQの充実によって問い合わせ件数が削減されることがあります。同一期間の問い合わせ件数変化を追跡し、FAQが顧客セルフサービスに貢献しているかを評価します。" },
  { num: "08", kpi: "FAQ関連キーワードの検索順位", where: "Google Search Console / Rank Tracker", detail: "FAQで使用した疑問形フレーズが検索結果何位に表示されているかを追跡します。FAQページが上位表示されるほど、AI検索でも引用される確率が高まります。" },
];

const FAQ_ITEMS = [
  {
    q: "FAQ最適化はSEOにも効果がありますか？",
    a: "はい。FAQPageスキーマを実装することでGoogleのリッチリザルト（FAQ表示）に対応し、CTRが向上します。また疑問形フレーズはロングテールキーワードとして検索流入にも貢献するため、SEOとAIOの両方に有効な施策です。",
  },
  {
    q: "FAQはどのページに設置するのが効果的ですか？",
    a: "サービスページ・料金ページ・会社概要ページなど、顧客の疑問が多いページに設置するのが最も効果的です。トップページにも概要的なFAQを配置し、詳細FAQページへの内部リンクを設置する構成が推奨されます。",
  },
  {
    q: "FAQ項目はどのくらい用意すれば良いですか？",
    a: "最低でも各サービスページに15〜25問、サイト全体では50問以上が目安です。競合分析とサジェスト・PAA（People Also Ask）調査でリアルな疑問を洗い出し、段階的に拡充していきます。",
  },
  {
    q: "FAQPageスキーマの実装は難しいですか？",
    a: "Next.jsであれば、JSON-LDをscriptタグとしてページのheadに挿入するだけで実装できます。当社では実装支援も含めてFAQ最適化をワンストップで対応します。Google Search ConsoleのリッチリザルトテストですぐCに確認できます。",
  },
  {
    q: "AI検索に引用されたかどうかはどうやって確認しますか？",
    a: "業界関連の疑問をChatGPT・Gemini・Perplexityに投げ、自社のFAQが引用・参照されるかを定期的に確認します。当社では月次AIモニタリングレポートで引用状況を追跡し、FAQ改善に活用します。",
  },
  {
    q: "1つの回答はどのくらいの長さが最適ですか？",
    a: "100〜200文字を目安とします。最初の1〜2文で結論を述べ、残りで補足説明をする「結論ファースト」の構造が理想的です。長い説明が必要な場合は「詳しくはこちら」という内部リンクを設置し、FAQは簡潔に保ちます。",
  },
  {
    q: "複数のFAQPageスキーマを1つのページに実装できますか？",
    a: "1つのページには1つのFAQPageスキーマが原則ですが、カテゴリ別にFAQをまとめた複数のAcceptedAnswerを持つFAQPageとして実装することが推奨されます。複数のJSON-LDブロックを設置する場合はGoogle Search Consoleで検証を行ってください。",
  },
  {
    q: "FAQの質問文にキーワードを含めるべきですか？",
    a: "はい。質問文に関連キーワードを自然に含めることで、ロングテールキーワードの検索流入を獲得できます。「○○ 費用 相場」「○○ 期間 目安」などの検索フレーズを質問文として自然に表現することで、SEOとAIOの両方に効果的です。",
  },
  {
    q: "競合他社のFAQと被っても問題ありませんか？",
    a: "同じ質問を扱っても、回答の独自性・具体性・自社の経験に基づいた情報があれば問題ありません。むしろ業界全体で重複している質問は「ユーザーが本当に知りたいこと」の証明でもあります。自社固有の情報・事例・数値を加えて差別化することが重要です。",
  },
  {
    q: "FAQとブログ記事はどう使い分ければよいですか？",
    a: "FAQは簡潔な質問と100〜200文字の回答で、構造化データと一緒に実装するものです。詳細な解説・事例紹介・比較情報など長文コンテンツはブログ記事として展開し、FAQから内部リンクで誘導する構成が効果的です。",
  },
  {
    q: "Google AI Overviewに掲載されるためにFAQは有効ですか？",
    a: "有効です。Google AI Overview（旧SGE）はFAQPageスキーマを持つコンテンツを認識しやすく、質問と回答のペアが明確なページを引用する傾向があります。構造化データの実装と結論ファーストの回答設計がAI Overview掲載への近道です。",
  },
  {
    q: "スマートフォンでのFAQ表示はどのように設計すべきですか？",
    a: "アコーディオン（折りたたみ）形式が推奨されます。モバイルでは画面スクロール量を減らせる点と、開いたときに回答がすぐ目に入る点でUXが向上します。FAQPageスキーマはアコーディオン実装でも問題なく機能します。",
  },
  {
    q: "FAQの更新頻度はどのくらいがよいですか？",
    a: "最低でも3ヶ月ごとの見直しを推奨します。新サービス追加・価格変更・市場環境の変化・新たな問い合わせ内容を反映してFAQを更新することで、Googleのクロール頻度が上がり、常に最新情報がAIに学習される状態を維持できます。",
  },
  {
    q: "FAQPageスキーマとHowToスキーマはどう使い分けますか？",
    a: "FAQPageスキーマは「質問と回答のペア」に使用し、HowToスキーマは「手順・ステップを持つ方法・やり方」の説明に使用します。「○○するにはどうすればよいですか」という質問に対して手順付きで回答する場合はHowToスキーマが適切で、併用も可能です。",
  },
  {
    q: "FAQを量産するとペナルティを受けますか？",
    a: "品質の低い・同一内容を繰り返すだけのFAQを大量に作成するとGoogleの低品質コンテンツ評価を受けるリスクがあります。各FAQは顧客の実際の疑問に基づき、独自かつ具体的な回答を持つものに限定し、数より質を重視してください。",
  },
  {
    q: "FAQページを独立させる場合のURLはどうすればよいですか？",
    a: "/faq・/faq/service・/faq/priceのようにカテゴリ別のURL構造が推奨されます。サービスページ内FAQとは別に独立したFAQページを設置する場合は、サービスページとのcanonical・内部リンクの整理が必要です。",
  },
  {
    q: "FAQのコンテンツはAI（ChatGPT等）で生成してもよいですか？",
    a: "AIツールでの下書き生成は効率的ですが、そのまま使用することは推奨しません。自社固有の情報・実際の業務知識・顧客対応経験を加えた「オリジナルの回答」に編集することで、競合との差別化とE-E-A-T（経験・専門性・権威性・信頼性）の評価向上につながります。",
  },
  {
    q: "FAQのリッチリザルトがGoogleで表示されなくなりました。原因は何ですか？",
    a: "主な原因は、FAQPageスキーマのJSON-LDエラー、HTML上の質問と回答とスキーマ内テキストの不一致、またはGoogleがFAQリッチリザルト表示の要件を変更したことです。Search ConsoleのリッチリザルトテストとEnhanced Resultsレポートでエラーを確認し、修正してください。",
  },
  {
    q: "FAQに画像や動画を含めることはできますか？",
    a: "HTML上のFAQに画像・動画を含めることは可能ですが、FAQPageスキーマのacceptedAnswerのtextにはテキストのみを含めます。視覚的な補足コンテンツとして動画FAQを設置する場合は、VideoObjectスキーマと組み合わせることで検索エンジンへの情報量が増加します。",
  },
  {
    q: "FAQ最適化の費用対効果をどのように評価すればよいですか？",
    a: "Search ConsoleでのCTR向上・AI検索での引用頻度・問い合わせ削減数・オーガニック流入増加を複合的に評価します。特にFAQで解決できた問い合わせ件数の削減は人件費削減効果として試算でき、FAQ最適化のROI算出に活用できます。",
  },
];

const RELATED_LINKS = [
  { href: "/aio", label: "AIO対策", desc: "AI検索最適化の全体戦略" },
  { href: "/aio/structured-data", label: "構造化データ", desc: "Schema.org実装ガイド" },
  { href: "/aio/entity-optimization", label: "エンティティ最適化", desc: "ナレッジグラフへの登録対策" },
  { href: "/aio/chatgpt", label: "ChatGPT対策", desc: "ChatGPTに引用される情報設計" },
  { href: "/aio/gemini", label: "Gemini対策", desc: "Google AI検索への最適化" },
  { href: "/aio/perplexity", label: "Perplexity対策", desc: "Perplexity AI引用対策" },
  { href: "/aio/eeat", label: "E-E-A-T対策", desc: "経験・専門性・権威性・信頼性" },
  { href: "/aio/topical-authority", label: "トピカルオーソリティ", desc: "専門性の確立と維持" },
  { href: "/aio/knowledge-graph", label: "ナレッジグラフ対策", desc: "Googleへの認識登録" },
  { href: "/aio/organization-data", label: "Organization構造化データ", desc: "企業情報の構造化" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "サービス内容と料金" },
  { href: "/seo", label: "SEO対策", desc: "検索エンジン最適化の全体戦略" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "検索流入を増やすコンテンツ戦略" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "サイト構造・速度の最適化" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップ・地図検索対策" },
  { href: "/services/web-design", label: "Webデザイン", desc: "高品質サイト制作" },
  { href: "/services/lp", label: "LP制作", desc: "CV最大化のランディングページ" },
  { href: "/industry/medical", label: "医療機関向け", desc: "症状・診療FAQの設計" },
  { href: "/industry/legal", label: "士業向け", desc: "法律・手続きFAQの最適化" },
  { href: "/industry/restaurant", label: "飲食店向け", desc: "メニュー・予約FAQの設計" },
  { href: "/industry/education", label: "教育機関向け", desc: "入学・費用FAQの構造化" },
  { href: "/area/tokyo", label: "東京のAIO対策", desc: "東京エリアの施策事例" },
  { href: "/area/osaka", label: "大阪のAIO対策", desc: "大阪エリアの施策事例" },
  { href: "/area/nagoya", label: "名古屋のAIO対策", desc: "名古屋エリアの施策事例" },
];

export default function FaqOptimizationPage() {
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
              <span style={{ color: "#0F172A" }}>FAQ最適化</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              FAQ Optimization
            </p>
            <h1 className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              FAQ最適化｜AI検索に<br />引用されるコンテンツへ
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              AI検索（ChatGPT・Gemini・Perplexity）はQ&A形式の情報を引用しやすい特性があります。
              FAQコンテンツを戦略的に設計することで、AI回答に自社情報が掲載される確率を高められます。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_22_31.png"
            alt="FAQ最適化・AI検索対策のデジタルイメージ"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
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
                  "FAQコンテンツがAI検索に引用されやすい理由と仕組み",
                  "AIに引用されるFAQ設計の6つの原則（結論ファースト・疑問形フレーズ等）",
                  "FAQPageスキーマ（JSON-LD）の正しい実装方法と確認手順",
                  "よくある10のFAQ設計ミスとその改善方法",
                  "医療・法律・不動産・ECなど業種別のFAQ設計ポイント",
                  "FAQ最適化の効果を測定するための8つのKPIと確認場所",
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

        {/* FAQコンテンツとAIO対策の関係 */}
        <section className="py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                FAQ × AIO
              </p>
              <h2 className="font-black text-[28px] leading-tight mb-8" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
                FAQコンテンツとAIO対策の関係
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                ChatGPT・Gemini・PerplexityなどのAI検索エンジンは、ユーザーの質問に対して最適な回答を生成するため、
                Web上のコンテンツを参照します。このとき特に引用されやすいのが、質問と回答が明確にセットになった
                「Q&A形式のコンテンツ」です。AIは疑問文と回答のペアを認識しやすく、そのまま引用しやすいためです。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                FAQPageスキーマ（構造化データ）を実装することで、GoogleとAIの両方に質問と回答の紐付けを
                機械的に伝えることができます。これにより、Googleのリッチリザルト表示とAI引用の両方に
                対応できる、一石二鳥のコンテンツ設計が実現します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                重要なのは「AIが引用したくなる構造」を意識して設計することです。前置きの長い文章より、
                結論を先に提示する「結論ファースト」の回答構造が、AI引用率の向上に直結します。
              </p>
            </div>
          </div>
        </section>

        {/* よくある課題と原因 */}
        <section className="py-24" style={{ background: "#F9F8F5" }}>
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

        {/* AIO対策で効果的なFAQ設計のポイント */}
        <section className="py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Key Points
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              AIO対策で効果的なFAQ設計のポイント
            </h2>
            <div className="max-w-3xl">
              {POINTS.map((item) => (
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
        <section className="py-24" style={{ background: "#F9F8F5" }}>
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
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded" style={{ background: "#FFFFFF", color: "#c4b89a", border: "1px solid #E8E4DC" }}>{item.point}</span>
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
        <section className="py-24" style={{ background: "#FFFFFF" }}>
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
        <section className="py-24" style={{ background: "#F9F8F5" }}>
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

        {/* どのページにFAQを設置すべきか */}
        <section className="py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                Placement Strategy
              </p>
              <h2 className="font-black text-[28px] mb-8" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
                どのページにFAQを設置すべきか
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                FAQは「顧客が疑問を持つ可能性が高いページ」に集中的に設置するのが効果的です。
                サービスページ・料金ページ・会社概要ページはFAQ設置の優先度が高く、
                購買決定前の不安解消とAI引用の両方に貢献します。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                また、業界全体に関する教育的FAQをブログ・コラム形式で独立ページとして作成することも有効です。
                「○○業界でよくある疑問10選」のようなFAQ集約ページは、AI検索で業界関連の質問が来た際に
                引用される可能性が高まります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                トップページには概要的なFAQ（5問程度）を設置し、より詳細なFAQページへの内部リンクを
                設置する階層構造が、クロール効率とユーザー利便性の両方を高めます。
                サイプレスではFAQ設置計画の立案から実装・スキーマ設定まで一貫して支援します。
              </p>
            </div>
          </div>
        </section>

        <FaqSection items={FAQ_ITEMS} heading="FAQ最適化に関するよくある質問" bgColor="#F9F8F5" />

        <RelatedPages links={RELATED_LINKS} />

        <PageContactCTA
          heading="FAQ最適化のご相談はサイプレスへ"
          body="AI検索に引用されるFAQコンテンツの設計・FAQPageスキーマ実装・継続的なFAQ拡充支援をご提案します。まずは現状のFAQ設計を診断いたします。"
        />
      </main>
      <Footer />
    </>
  );
}

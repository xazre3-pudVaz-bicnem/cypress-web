import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "地域キーワード調査・設計｜MEO・ローカルSEOのキーワード戦略｜株式会社サイプレス",
  description:
    "ローカルキーワード調査でMEO・ローカルSEOの集客力を最大化。市区町村名・駅名×業種のキーワード戦略から近接キーワード・複数エリア対応・競合分析まで詳しく解説します。",
  keywords: ["地域キーワード", "ローカルキーワード", "MEO キーワード", "地域SEO", "ローカル検索対策", "地域名 業種", "キーワード調査"],
  openGraph: {
    title: "地域キーワード調査・設計｜MEO・ローカルSEOのキーワード戦略｜株式会社サイプレス",
    description: "ローカルキーワード調査でMEOとローカルSEOの集客力を最大化する実践ガイド。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/local-keyword" },
};

const keywordMethods = [
  {
    title: "市区町村名 + 業種のキーワード設計",
    body: "地域キーワードの基本は「市区町村名 + 業種」の組み合わせです。例えば「渋谷区 美容室」「品川区 歯科」のように、ビジネスが所在する地域と業種を組み合わせます。まず自社の所在地とビジネスが提供するサービスをリストアップし、すべての組み合わせを洗い出します。Googleキーワードプランナーやサーチコンソールで各キーワードの検索ボリュームを確認し、集客効果が期待できるキーワードを優先的に狙います。競合の少ないロングテールキーワード（例：「渋谷区 カット 安い」）も有効です。",
  },
  {
    title: "駅名・エリア名の活用",
    body: "市区町村名だけでなく、最寄り駅名・エリア名（青山・銀座・恵比寿など）でも検索されます。特に都市部では市区町村より駅名やエリア名での検索が多い場合があります。「恵比寿駅 カフェ」「青山 皮膚科」のように、ユーザーが実際にどの地名で検索するかを分析することが重要です。GBPの説明文・投稿・ウェブサイトのコンテンツに、ターゲットとする駅名・エリア名を自然な形で組み込みます。複数の駅名・エリア名に対応することで、より広い範囲のユーザーにリーチできます。",
  },
  {
    title: "複数エリア対応のページ設計",
    body: "商圏が複数のエリアにまたがる場合、エリアごとに専用のランディングページを制作することで、より多くの地域キーワードからの流入を獲得できます。例えば「渋谷エリアのページ」「新宿エリアのページ」をそれぞれ制作し、各エリアの特性・アクセス情報・地域に関連した情報を含めることで、Googleが各エリアとの関連性を評価します。ただし、各ページのコンテンツが実質的に重複しないよう、エリアごとの独自情報を盛り込むことが重要です。コンテンツが薄い場合は逆効果になることがあります。",
  },
  {
    title: "「近く」「近隣」などの近接キーワード",
    body: "スマートフォンでのGoogleマップ検索では「○○ 近く」「○○ 近隣」「○○ 付近」などの近接を表すキーワードが多く使われます。また、「現在地から近い○○」のような検索も増えています。これらのキーワードはGoogleの位置情報と連動するため、GBPの位置情報が正確に設定されていることが前提です。ウェブサイトのコンテンツにも「○○エリア近く」「○○駅徒歩5分」のような近接情報を含めることで、近接検索での関連性評価が高まります。",
  },
  {
    title: "地域特化コンテンツとの連動",
    body: "地域キーワードの効果を最大化するためには、単にキーワードを埋め込むだけでなく、その地域に関連した価値あるコンテンツを作成することが重要です。例えば「渋谷の美容室が選ばれる理由」「渋谷エリアでのヘアカラーの最新トレンド」のような地域に特化したコラム・ブログ記事を制作することで、地域との関連性が深まります。地域のイベント情報・観光スポット・他の地域ビジネスとの連携情報なども、地域との結びつきを強める有効なコンテンツです。",
  },
];

const commonIssues = [
  {
    title: "地域名＋業種のキーワードしか考えていない",
    body: "「渋谷 美容室」のような基本形だけを狙い、その先のキーワード展開ができていないケースです。ユーザーの検索行動はより具体的で、「渋谷 美容室 カラー 安い」「渋谷 美容室 当日予約」のようなロングテールに集客機会が多く潜んでいます。基本形から派生する検索クエリを体系的に掘り起こすことが必要です。",
  },
  {
    title: "検索ボリューム調査を実施していない",
    body: "感覚でキーワードを選んでいる事業者は多く、実際には誰も検索しないワードに注力しているケースが散見されます。Googleキーワードプランナーやサーチコンソールを活用し、月間検索数・競合強度を数値で把握したうえで優先度を決める必要があります。データに基づかないキーワード選定は時間とコストの無駄です。",
  },
  {
    title: "競合のキーワード分析を行っていない",
    body: "上位表示されている競合のGBPカテゴリ・説明文・口コミを読み込むと、自社が見落としていたキーワードが多数発見できます。競合が選んでいるサービスカテゴリや、口コミに頻出する表現はGoogleが評価しているシグナルであり、自社の戦略に取り込む価値があります。",
  },
  {
    title: "エリアの細分化ができていない（区→丁目レベル）",
    body: "「渋谷区」という括りでしかキーワードを設計していない事業者は多いですが、実際のユーザーは「代官山」「鶯谷」「広尾」のように丁目・町名・通称エリア名で検索することがあります。特に競争が激しい業種では、細粒度のエリアキーワードで差別化できる余地が大きいです。",
  },
  {
    title: "「近くの○○」クエリへの最適化ができていない",
    body: "スマートフォン利用者の多い現代では、位置情報と連動した「近くの歯科」「現在地から近いカフェ」のような検索が急増しています。このクエリはGBPの位置情報精度・カテゴリ設定・関連性スコアが直接影響するため、GBPの基本情報を正確に整備することが前提条件です。",
  },
  {
    title: "駅名・地名の組み合わせパターンが不足している",
    body: "最寄り駅が複数ある店舗や、複数駅の商圏をカバーしているビジネスでも、主要1駅のみを対象にしているケースがあります。「○○駅 北口」「△△駅 徒歩5分圏内」などの表現バリエーション、隣接駅名の組み合わせも網羅することで流入機会が広がります。",
  },
  {
    title: "季節性キーワードを見落としている",
    body: "「恵比寿 クリスマスディナー」「渋谷 花見 ランチ」「○○区 お盆 営業中」など、季節・イベントに紐づくキーワードは検索ピーク時の集客に大きく貢献します。年間の季節イベントをカレンダー化し、1〜2ヶ月前からGBP投稿・ウェブコンテンツに取り込む計画が必要です。",
  },
  {
    title: "口コミに含まれるキーワードを活用していない",
    body: "顧客の口コミには実際のユーザーが使う言葉が凝縮されています。「子供連れでも入りやすい」「個室がある」「駐車場あり」など、自社が意識していなかった検索ニーズが発見できます。口コミ頻出ワードをGBP説明文・ウェブコンテンツに反映することで、リアルな検索行動に対応できます。",
  },
  {
    title: "サービス系キーワードとの組み合わせが不足している",
    body: "地域名だけでなく「地域名＋サービス名」の組み合わせは購買意欲が高いキーワードです。「渋谷 白髪染め」「品川 インプラント 専門」のように、より具体的なサービスとの組み合わせはコンバージョン率が高く、競合も少ない場合があります。",
  },
  {
    title: "用途別・悩み別キーワードの発掘が不足している",
    body: "「腰痛 整骨院 渋谷」「育毛 クリニック 渋谷」のように、悩みや用途を起点にした検索は潜在層から顕在層への橋渡しになります。業種ではなく「ユーザーの悩み」から逆算したキーワードを発掘することで、競合が見落としている集客ルートを開拓できます。",
  },
];

const industryPoints = [
  {
    industry: "飲食店",
    detail: "「渋谷 ランチ」「新宿 居酒屋 個室」など、シーン・用途の組み合わせが重要です。「○○駅 ランチ 1000円以内」「○○ 記念日 個室」のような具体的ニーズキーワードへの対応が来店直結に効きます。曜日・時間帯（「日曜 ランチ 渋谷」）も見落とせません。",
  },
  {
    industry: "美容室",
    detail: "「駅近 美容院」「○○区 カラー専門店」など近接性と専門性の掛け合わせが有効です。「○○駅 縮毛矯正 安い」「渋谷 ヘアセット 当日」のようなサービス名×エリアのロングテールに集中することで、競合の多い基本キーワードを迂回できます。",
  },
  {
    industry: "歯科",
    detail: "「○○駅 歯科 土曜日」「○○区 小児歯科」のように診療日・診療科目との組み合わせが集客に直結します。「インプラント 渋谷 相談」「ホワイトニング ○○市」などの処置名×地域も高転換率キーワードです。緊急性の高い「歯が痛い ○○市」も対応価値があります。",
  },
  {
    industry: "整骨院",
    detail: "「○○市 腰痛 整骨院」「○○駅 交通事故 整骨院」のような症状×地域の組み合わせが最も集客効率が高いです。「保険 整骨院 ○○区」「産後 骨盤矯正 ○○駅」など、治療の種類・保険適用有無を組み合わせると差別化できます。",
  },
  {
    industry: "リフォーム",
    detail: "「○○区 外壁塗装」「○○市 水回り リフォーム」など施工箇所×地域が基本です。商圏が広いため「○○市 ○○区 リフォーム」のように複数自治体をカバーするエリアページが有効です。「補助金 リフォーム ○○市」も行政施策連動で集客が見込めます。",
  },
  {
    industry: "クリニック",
    detail: "「○○市 内科 夜間」「○○駅 皮膚科 予約可」など診療時間・予約可否との組み合わせが重要です。患者は緊急度が高い場合もあるため、「今日 受診 ○○市」「土日 診察 ○○区」への対応が新患獲得に直結します。",
  },
  {
    industry: "不動産",
    detail: "「○○エリア 賃貸」「○○駅 一人暮らし 物件」など物件種別×エリアが基本です。エリアページを細粒度で制作し「○○区 ペット可 マンション」「○○市 新築 戸建て」のような属性×地域の組み合わせで差別化します。学区名キーワードも子育て世代に有効です。",
  },
  {
    industry: "学習塾",
    detail: "「○○駅 個別指導」「○○市 中学受験 塾」など駅名×指導形態・目的の組み合わせが集客の核です。「○○小学校 近く 塾」「○○中学 受験 ○○市」のような通学校名との組み合わせは高い意図をもった検索であり、転換率が高いです。",
  },
];

const implementationFlow = [
  {
    step: "ベースキーワード設定",
    desc: "自社の業種・提供サービス・所在地（市区町村・駅名・エリア名）を整理し、「地域名＋業種」「地域名＋サービス名」の基本形を網羅的にリストアップします。まずは20〜30ワードを書き出すことを目標にします。",
  },
  {
    step: "Googleサジェスト収集",
    desc: "Googleの検索ボックスにベースキーワードを入力し、サジェストで表示される関連ワードをすべて収集します。スマートフォンからの検索と、シークレットモードでの確認も行い、実際のユーザーの検索パターンを把握します。",
  },
  {
    step: "「関連する検索キーワード」確認",
    desc: "検索結果ページ下部に表示される「関連する検索キーワード」もリストに追加します。Googleが関連性を認識しているキーワードグループを把握でき、カバーできていなかった検索意図を発見する機会になります。",
  },
  {
    step: "競合GBPのカテゴリ・口コミからキーワード抽出",
    desc: "上位表示されている競合のGBPを確認し、設定カテゴリ・説明文・サービス欄・口コミに含まれるキーワードを抽出します。競合が評価されている言葉はGoogleのアルゴリズムが重視しているシグナルです。",
  },
  {
    step: "Googleキーワードプランナーで検索量確認",
    desc: "収集したキーワードをGoogleキーワードプランナーに入力し、月間検索ボリュームと競合性を確認します。ボリュームが高すぎる競争激化ワードより、適度なボリュームで競合が少ないキーワードを優先します。",
  },
  {
    step: "優先キーワードリスト作成",
    desc: "「検索ボリューム×競合強度×自社との関連性」の3軸で各キーワードをスコアリングし、優先度A・B・Cに分類します。最初に対策するA群を20ワード以内に絞り込み、集中的に取り組む戦略を立てます。",
  },
  {
    step: "GBPへの反映（カテゴリ・サービス・投稿）",
    desc: "優先キーワードをGBPの説明文・サービス欄・投稿に自然な文章で組み込みます。ビジネス名へのキーワード追加はポリシー違反のため行いません。投稿は週1回以上を目安に、キーワードを含む内容で継続します。",
  },
  {
    step: "ウェブサイトへの反映",
    desc: "優先キーワードをウェブサイトのタイトルタグ・metadescription・見出し・本文に組み込みます。エリアページが必要な場合は、各エリアの独自情報を含む充実したページを制作します。LocalBusinessスキーマも実装します。",
  },
  {
    step: "順位モニタリング",
    desc: "Googleサーチコンソール・GBPインサイト・順位チェックツールを使い、週次でキーワード別の順位・表示回数・クリック数を記録します。変動の原因分析と改善仮説の立案をセットで行います。",
  },
  {
    step: "3ヶ月後見直し",
    desc: "3ヶ月のデータをもとに、効果が出ているキーワード・出ていないキーワードを分類します。成果が出たキーワードは展開・深堀りし、効果が薄いものは原因分析のうえで戦略を修正します。新規キーワードの発掘も定期的に実施します。",
  },
];

const kpis = [
  {
    name: "ターゲットキーワード別GBP表示回数",
    where: "GBPインサイト「検索でビジネスを見つけた方法」→「検索クエリ」",
    desc: "優先キーワードごとの表示回数推移を月次で確認します。施策の効果が最初に現れる指標です。",
  },
  {
    name: "ローカルパック順位（上位3位内%）",
    where: "順位チェックツール（Local Falcon、Mapstalker等）",
    desc: "主要キーワードでのローカルパック掲載率と順位変動を週次でトラッキングします。",
  },
  {
    name: "検索クエリ数（GBPインサイト）",
    where: "GBPインサイト「検索クエリ」タブ",
    desc: "GBP経由でビジネスが発見されたクエリ総数の推移を確認します。月次比較が基本です。",
  },
  {
    name: "新規キーワード発掘数/月",
    where: "Googleサーチコンソール「検索パフォーマンス」→クエリ",
    desc: "前月になかった新規キーワードからの表示・クリックを確認し、コンテンツ展開の方向性を決めます。",
  },
  {
    name: "ウェブサイト流入数（地域キーワード）",
    where: "Googleサーチコンソール「検索パフォーマンス」→クエリフィルタ",
    desc: "地域名を含むキーワードからのオーガニック流入数を抽出し、ローカルSEOの成果を測ります。",
  },
  {
    name: "電話タップ数（検索経由）",
    where: "GBPインサイト「ビジネスとのやり取り」→「電話」",
    desc: "GBP経由の電話タップ数は、キーワード戦略が実際の問い合わせ増加に寄与しているかを測る指標です。",
  },
  {
    name: "口コミに含まれるキーワード数",
    where: "GBP口コミ一覧を手動集計またはツールで抽出",
    desc: "顧客の口コミにターゲットキーワードが自然に含まれているかを確認します。多いほどGoogleの関連性評価に好影響を与えます。",
  },
];

const faqItems = [
  {
    q: "地域キーワードはどのくらいの種類を設計すべきですか？",
    a: "業種・商圏の広さによって異なりますが、まず主要な市区町村名・駅名と業種の組み合わせを10〜20ワード設計することをお勧めします。その後、検索ボリューム・競合状況を分析して拡張していきます。多すぎるキーワードを一度に狙うよりも、優先度の高いキーワードで着実に上位表示を目指してから拡張する方が効率的です。",
  },
  {
    q: "複数エリアに対応したい場合はどうすればいいですか？",
    a: "エリアごとに専用のランディングページを制作するのが有効です。ただしコンテンツが重複しないよう、各エリアの特性を活かした内容にすることが重要です。また、GBPのサービスエリア設定で対応エリアを明示することも効果的です。コンテンツが薄い量産ページは逆効果になることがあるため、品質を重視した制作が必要です。",
  },
  {
    q: "地域キーワードはGoogleビジネスプロフィールのどこに入れるべきですか？",
    a: "説明文・投稿・サービス欄・Q&A欄に自然な形で組み込みます。ビジネス名への意図的なキーワード追加はGoogleのポリシー違反になる可能性があるため注意が必要です。説明文では750文字を活かして、サービス内容と地域情報を自然な文章で記述することが重要です。",
  },
  {
    q: "「○○市 近く」のような近接キーワードは重要ですか？",
    a: "はい、スマートフォンでの検索が主流の現在、「近く」「近隣」などの近接キーワードでの検索は増加しています。特にGoogleマップとの連動でこれらのキーワードへの対応が集客に直結します。GBPの位置情報が正確に設定されていることと、ウェブサイトに近接情報（徒歩〇分・最寄り駅からの行き方など）を明記することが重要です。",
  },
  {
    q: "地域キーワードの効果はどのくらいで出ますか？",
    a: "GBPへの反映は数週間以内に効果が見られることがあります。ウェブサイトのローカルSEOは3〜6ヶ月が目安です。競合状況・現在のドメイン評価・コンテンツの質によって異なります。継続的な運用と改善が重要です。特に新しいページは認識されるまで時間がかかるため、長期的な視点で取り組むことが大切です。",
  },
  {
    q: "Googleサジェストのキーワードはどう活用しますか？",
    a: "Googleの検索ボックスにベースキーワードを入力した際に表示されるサジェストは、実際にユーザーが検索しているワードの反映です。スマートフォンからシークレットモードで確認することで、よりリアルなサジェストを取得できます。収集したサジェストをリスト化し、検索ボリュームを確認のうえ優先度を設定します。",
  },
  {
    q: "競合の地域キーワード戦略はどうやって調べますか？",
    a: "競合のGBPに設定されているカテゴリ・サービス名・説明文を確認します。また、競合への口コミに含まれる表現からもユーザーが使うキーワードを抽出できます。競合のウェブサイトのタイトルタグ・見出し・コンテンツを確認することで、どのキーワードを狙っているかを把握できます。",
  },
  {
    q: "ローカルSEOとMEOのキーワード戦略は同じですか？",
    a: "基本的なキーワードは共通ですが、適用先が異なります。MEOではGBPの説明文・サービス・投稿・Q&Aにキーワードを反映します。ローカルSEOではウェブサイトのタイトル・メタ情報・コンテンツ・構造化データに反映します。両方を連動させることで、Googleマップとオーガニック検索の両方での露出を最大化できます。",
  },
  {
    q: "検索ボリュームが少ないキーワードは狙う価値がありますか？",
    a: "月間検索数が少なくても、購買意欲が高い（顕在層の）キーワードであれば十分価値があります。「○○区 ○○ 予約」「○○駅 ○○ 当日対応」のような具体的なキーワードは、競合も少なく転換率が高い傾向にあります。ロングテールキーワードを積み上げることで全体の流入数を増やす戦略も有効です。",
  },
  {
    q: "季節性キーワードはいつから対策すべきですか？",
    a: "Googleのインデックス・評価には時間がかかるため、季節イベントの1〜2ヶ月前からコンテンツを公開・投稿することをお勧めします。例えばクリスマスシーズンなら10月下旬から、花見シーズンなら2月から対策を始めます。GBP投稿は即時反映に近いため、イベント2〜3週間前からの投稿でも効果が見込めます。",
  },
  {
    q: "口コミのキーワードをどう活用すればよいですか？",
    a: "自社への口コミを定期的に読み込み、顧客が実際に使っている表現・評価ポイントを抽出します。「子供連れでも安心」「個室でゆっくりできた」のような表現は、同じニーズを持つユーザーが検索するキーワードのヒントです。これらをGBP説明文・ウェブコンテンツ・FAQに自然に盛り込むことで関連性が高まります。",
  },
  {
    q: "エリアページを量産すると逆効果になりますか？",
    a: "内容が薄い・重複したエリアページはGoogleに低品質コンテンツと判断され、逆効果になる可能性があります。各エリアページには、そのエリア特有の情報（アクセス方法・地域特性・地域のお客様へのメッセージ）を盛り込み、独自性を担保することが重要です。ページ数より品質を優先してください。",
  },
  {
    q: "キーワードはGBP名称に入れてもいいですか？",
    a: "Googleのポリシーでは、実際のビジネス名以外のキーワードをGBP名称に追加することは禁止されています。ポリシー違反が発覚するとGBPが停止・削除されるリスクがあります。キーワードは説明文・サービス欄・投稿・Q&Aに自然な形で組み込むのが正しいアプローチです。",
  },
  {
    q: "スマートフォンとPCで狙うキーワードは変えるべきですか？",
    a: "基本的なキーワードは共通ですが、スマートフォンでは「近く」「今すぐ」「今日」などの近接性・即時性キーワードの比率が高くなります。GBPの最適化はスマートフォンユーザーへの影響が特に大きいため、モバイル検索でよく使われるキーワードパターンを意識した説明文・投稿が効果的です。",
  },
  {
    q: "地域キーワードとサービスキーワードはどちらを優先すべきですか？",
    a: "「地域名＋サービス名」の組み合わせが最も集客効率が高いキーワードです。両方の要素を含む複合キーワードを優先し、地域名のみ・サービス名のみの単体キーワードはサブとして位置づけます。例えば「渋谷 白髪染め 美容室」は「渋谷 美容室」より競合が少なく転換率が高い傾向にあります。",
  },
  {
    q: "Googleキーワードプランナーの使い方を教えてください。",
    a: "Google広告のアカウントからアクセスします。「新しいキーワードを見つける」でベースキーワードを入力し、関連キーワード・月間検索ボリューム・競合性を確認します。地域を絞り込んで検索できるため、特定の都市・地域での検索ボリュームを把握するのに役立ちます。広告未出稿の場合は検索ボリュームが範囲表示になることがあります。",
  },
  {
    q: "Googleサーチコンソールで地域キーワードを確認するには？",
    a: "サーチコンソールの「検索パフォーマンス」→「クエリ」タブで、実際にウェブサイトが表示・クリックされたキーワードを確認できます。地域名を含むクエリをフィルタリングすることで、ローカルSEOの効果測定ができます。表示回数が多くクリック率が低いキーワードはタイトル・メタ説明の改善機会です。",
  },
  {
    q: "キーワード調査にかかる時間はどのくらいですか？",
    a: "基本的な調査であれば、ベースキーワードの抽出・サジェスト収集・検索ボリューム確認で半日〜1日程度です。競合分析・口コミ分析・優先度設定まで含めると2〜3日が目安です。業種・商圏の広さによって異なりますが、初回は徹底的に行い、以降は四半期ごとの見直しが推奨されます。",
  },
  {
    q: "地域キーワードの見直しはどのくらいの頻度で行うべきですか？",
    a: "基本的には3ヶ月ごとの定期見直しを推奨します。ただし、Googleアルゴリズムの大きな変動・競合の参入・季節イベントに合わせた臨時対応も必要です。GBPインサイトとサーチコンソールのデータを月次で確認し、大きな変化があった場合は即時対応します。",
  },
  {
    q: "MEO対策と地域キーワード調査を同時に依頼できますか？",
    a: "はい、サイプレスではMEO対策とローカルキーワード調査をセットでご提供しています。キーワード調査の結果をGBP最適化・ウェブサイト改善・コンテンツ制作に一貫して反映することで、最大の集客効果を実現します。まずは現状の診断から始めることをお勧めします。",
  },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策とは", desc: "MEO対策の全体戦略" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "MEO対策の根幹ツール" },
  { href: "/meo/map-ranking", label: "Googleマップ上位表示", desc: "ローカルパック対策" },
  { href: "/meo/review-management", label: "口コミ対策", desc: "口コミ獲得・返信管理" },
  { href: "/meo/photo-posting", label: "写真投稿対策", desc: "GBP写真の最適化" },
  { href: "/meo/meo-audit", label: "MEO診断", desc: "現状診断サービス" },
  { href: "/meo/ranking", label: "MEO順位管理", desc: "順位トラッキング" },
  { href: "/meo/post-strategy", label: "投稿戦略", desc: "GBP投稿の最適化" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域検索での上位表示" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "SEOキーワード戦略" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "コンテンツ制作と最適化" },
  { href: "/seo/on-page-seo", label: "ページ内SEO", desc: "オンページ最適化" },
  { href: "/aio", label: "AIO対策", desc: "AI検索最適化" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "SEOコンサルティング" },
  { href: "/services/web-design", label: "Webサイト制作", desc: "地域ビジネス向けサイト" },
  { href: "/industry/restaurant", label: "飲食店MEO", desc: "飲食業界向け対策" },
  { href: "/industry/beauty", label: "美容室MEO", desc: "美容業界向け対策" },
  { href: "/industry/dental", label: "歯科MEO", desc: "歯科クリニック向け対策" },
  { href: "/industry/clinic", label: "クリニックMEO", desc: "医療機関向け対策" },
  { href: "/industry/real-estate", label: "不動産MEO", desc: "不動産業界向け対策" },
  { href: "/area/tokyo", label: "東京都MEO", desc: "東京都の地域集客" },
  { href: "/area/osaka", label: "大阪府MEO", desc: "大阪府の地域集客" },
  { href: "/area/nagoya", label: "名古屋市MEO", desc: "名古屋市の地域集客" },
];

export default function LocalKeywordPage() {
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
              <Link href="/meo" className="hover:underline" style={{ color: "#6B7280" }}>MEO対策</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>地域キーワード設計</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Local Keyword Strategy
            </p>
            <h1
              className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              地域キーワード調査・設計
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              地域キーワードとは「渋谷 美容室」「新宿 歯科」のように地域名と業種・サービスを
              組み合わせた検索ワードです。地域ビジネスにとって最も集客効率が高いキーワード群であり、
              MEOとローカルSEOを連動させた戦略的な設計が地域集客の核となります。
            </p>
          </div>
        </section>

        {/* Full-width image after hero */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image src="/1.jpg" alt="地域キーワード設計・チャートを確認するグループ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.15)" }} />
        </section>

        {/* このページでわかること — Section A */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What You Will Learn
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <ul className="max-w-3xl space-y-4">
              {[
                "地域キーワードの基本構造と、業種ごとの効果的な組み合わせパターン",
                "Googleサジェスト・キーワードプランナーを使った調査の具体的な手順",
                "競合のGBP・口コミからキーワードを抽出する実践的な方法",
                "エリアの細分化（区→丁目・駅名レベル）でロングテールを開拓するアプローチ",
                "GBPへのキーワード反映とウェブサイトへのローカルSEO実装の両面戦略",
                "キーワード戦略の効果を測るKPIと、3ヶ月ごとの見直しサイクルの作り方",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-bold shrink-0 mt-0.5" style={{ color: "#c4b89a" }}>→</span>
                  <span className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 地域キーワードとは */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              About Local Keywords
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              地域キーワードとは
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                地域キーワードとは、地名（都市名・区名・駅名・エリア名）と業種・サービス・ニーズを
                組み合わせた検索ワードです。「渋谷区 美容室」「恵比寿駅 カフェ」「品川 歯科 土曜日」
                などがその代表例です。これらのキーワードで検索するユーザーは「今まさに地域のお店を
                探している」高い購買意欲を持つ見込み客であり、来店転換率が他のキーワードと比べて
                非常に高いことが特徴です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                地域キーワードはMEO対策とローカルSEOの両方に影響します。MEOでは
                Googleビジネスプロフィールの関連性評価を高めるために地域キーワードを
                適切に組み込みます。ローカルSEOではウェブサイトのコンテンツ・メタ情報・
                構造化データに地域キーワードを組み込み、オーガニック検索での上位表示を目指します。
                両方を連動させることで、Googleマップと通常検索の両方での露出を最大化できます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                地域キーワード設計で重要なのは「どの地名でユーザーが検索するか」を正確に把握することです。
                行政区の名前（「渋谷区」）より駅名（「渋谷」「代官山」「恵比寿」）のほうが
                検索ボリュームが高いケースもあります。実際の検索データを分析したうえで、
                集客効果が最大になるキーワードを優先的に狙うことが重要です。
              </p>
            </div>
          </div>
        </section>

        {/* よくある課題と原因 — Section B */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Common Issues
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <div className="max-w-3xl">
              {commonIssues.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 地域キーワードの設計方法 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Design Method
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              地域キーワードの設計方法
            </h2>
            <div className="max-w-3xl">
              {keywordMethods.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 業種別の活用ポイント — Section C */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              By Industry
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の活用ポイント
            </h2>
            <div className="grid md:grid-cols-2 gap-0 max-w-4xl">
              {industryPoints.map((item, i) => (
                <div key={i} className="py-6 px-4" style={{ borderTop: "1px solid #E8E4DC", borderLeft: i % 2 !== 0 ? "1px solid #E8E4DC" : "none" }}>
                  <div className="flex items-start gap-4">
                    <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.industry}</h3>
                      <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MEOでの地域キーワード最適化 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              MEO Optimization
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              MEOでの地域キーワード最適化
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                GoogleビジネスプロフィールへのキーワードはGoogleのポリシーに従って慎重に行う必要があります。
                ビジネス名にキーワードを意図的に追加することはポリシー違反ですが、
                説明文・サービス欄・投稿・Q&Aには適切なキーワードを自然に組み込むことができます。
              </p>
              <div className="max-w-3xl">
                {[
                  { label: "説明文（750文字）", content: "提供サービス・特徴・対象顧客に加え、所在地域・最寄り駅・対応エリアを自然な文章で記述します。750文字の制限を活かし、主要な地域キーワードをカバーする内容にします。" },
                  { label: "サービス・商品欄", content: "各サービスの説明にサービス内容と地域特性を組み込みます。「渋谷エリアでの出張対応」「品川区内の店舗へのお迎えサービス」のような地域に特化した説明が有効です。" },
                  { label: "投稿コンテンツ", content: "週1回以上の投稿に地域情報を組み込みます。「新宿エリアのお客様へのお知らせ」「渋谷・代官山近くにお住まいの方へ」などの地域を明示したタイトル・内容が効果的です。" },
                  { label: "Q&A欄", content: "「渋谷区内での出張対応は可能ですか？」「新宿駅から徒歩何分ですか？」などの地域に関連した質問と回答を設定することで、地域キーワードとの関連性を高めます。" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                    <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-bold text-[14px] mb-1.5" style={{ color: "#0d1b2a" }}>{item.label}</h3>
                      <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.content}</p>
                    </div>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #E8E4DC" }} />
              </div>
            </div>
          </div>
        </section>

        {/* 実装・改善フロー — Section D */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Implementation Flow
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              実装・改善フロー
            </h2>
            <div className="max-w-3xl">
              {implementationFlow.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.step}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 2-col: キーワード設計手順 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  Keyword Design Process
                </p>
                <h2 className="font-black text-[26px] mb-6" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
                  キーワード設計手順
                </h2>
                <div className="space-y-4">
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    地域キーワード設計は①対象エリアのリストアップ→②業種・サービスとの組み合わせ生成→③検索ボリューム分析→④優先度設定の4ステップで進めます。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    市区町村名だけでなく、駅名・エリア名（青山・銀座・恵比寿など）での検索ボリュームを必ず確認します。都市部では行政区よりエリア名のほうが検索数が多い場合があります。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    設計したキーワードはGBPの説明文・投稿・Q&A欄、ウェブサイトのコンテンツ・メタ情報の両方に自然な形で組み込み、MEOとローカルSEOを連動させます。
                  </p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden" style={{ height: "360px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_12_19.jpg"
                  alt="キーワード設計・タブレットを使ったミーティング"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 成果を見るための指標 — Section E */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              KPIs &amp; Metrics
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <div className="max-w-3xl">
              {kpis.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[15px] mb-1" style={{ color: "#0d1b2a" }}>{item.name}</h3>
                    <p className="text-[12px] mb-2 font-medium" style={{ color: "#c4b89a" }}>確認場所: {item.where}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="地域キーワードに関するよくある質問" bgColor="#FFFFFF" />

        <RelatedPages links={relatedLinks} />

        <PageContactCTA
          heading="地域キーワード設計のご相談はサイプレスへ"
          body="貴社のビジネスに最適な地域キーワードを分析・設計し、MEOとローカルSEOを連動させた集客戦略をご提案します。まずは現状の検索データ分析から始めます。"
        />
      </main>
      <Footer />
    </>
  );
}

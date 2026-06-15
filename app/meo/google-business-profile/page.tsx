import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Googleビジネスプロフィール最適化｜MEO対策の基本｜株式会社サイプレス",
  description:
    "Googleビジネスプロフィール（GBP）最適化でMEO対策の効果を最大化。カテゴリ設定・NAP情報・写真・投稿・口コミ返信まで主要ポイントを詳しく解説します。",
  keywords: ["Googleビジネスプロフィール", "Googleマイビジネス最適化", "GBP最適化", "MEO対策", "Googleマップ最適化"],
  openGraph: {
    title: "Googleビジネスプロフィール最適化｜MEO対策の基本｜株式会社サイプレス",
    description: "GBP最適化でMEO対策の効果を最大化。主要最適化ポイントを解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/google-business-profile" },
};

const optimizationPoints = [
  {
    title: "カテゴリ設定（主カテゴリ・副カテゴリの選定）",
    body: "ビジネスカテゴリはMEO順位に直接影響する最重要項目のひとつです。主カテゴリはビジネスの核心を正確に表すものを選択し、副カテゴリには関連するサービス・業種を追加します。例えば「美容室」を主カテゴリとし、「ヘアサロン」「ヘアカラー専門店」を副カテゴリに加えることで、より多くの検索クエリとの関連性が高まります。競合のカテゴリ設定を分析したうえで最適な組み合わせを選定します。",
  },
  {
    title: "事業名・住所・電話番号（NAP）の正確な記載",
    body: "NAP情報（Name・Address・Phone）の正確性と一貫性はMEO対策の基本中の基本です。Googleビジネスプロフィールに登録する情報は、自社ウェブサイト・その他のビジネスディレクトリ・SNSプロフィールと完全に一致させる必要があります。表記の揺れ（「株式会社」と「(株)」の混在など）も検索エンジンに混乱を与えます。NAP情報の統一を怠ると、Googleがビジネス情報の信頼性を低く評価し、順位に悪影響が出ます。",
  },
  {
    title: "営業時間・特別営業時間の更新",
    body: "営業時間の正確な設定と定期的な更新は、ユーザー体験とMEO評価の両方に影響します。Googleは「現在営業中」かどうかをリアルタイムで表示するため、営業時間が不正確だと来店機会を逃します。また、祝日・連休・臨時休業などの特別営業時間を事前に登録することで、ユーザーの信頼性向上とGoogleのアクティブビジネス評価向上につながります。シーズンごとの定期更新を習慣化することが重要です。",
  },
  {
    title: "サービス・メニュー情報の充実",
    body: "GBPのサービス欄・メニュー欄に提供サービスの詳細を入力することで、検索クエリとの関連性が大幅に向上します。単にサービス名を並べるだけでなく、価格帯・所要時間・特徴なども記載することで、ユーザーの問い合わせ前の不安を解消し、来店確率が高まります。地域キーワードをサービス説明に自然な形で組み込むことも重要です。定期的にメニュー・料金の更新を行うことで、最新情報を提供し続けます。",
  },
  {
    title: "写真の定期的な追加と品質管理",
    body: "写真はユーザーの来店意欲に直結する最も重要なコンテンツのひとつです。外観・内装・スタッフ・商品・サービス提供の様子など多様なカテゴリの写真を定期的に追加します。スマートフォンで撮影した自然な写真も効果的で、月2〜4枚の定期追加を推奨しています。写真の多いプロフィールはウェブサイトへのクリック数・電話問い合わせ数のいずれも増加する傾向があります。",
  },
  {
    title: "最新情報投稿（週1回以上推奨）",
    body: "GBPの「最新情報投稿」機能は、ブログのようにお知らせ・キャンペーン・イベント・新メニューなどを発信できる機能です。定期的に投稿を行うことで、Googleに「アクティブなビジネス」として評価され、MEO順位の改善に寄与します。また、投稿内容にターゲットキーワードを自然に含めることで、検索との関連性も高まります。週1回以上の投稿を目標に、季節イベント・限定情報など来店意欲を高めるコンテンツを継続的に発信します。",
  },
  {
    title: "口コミへの返信",
    body: "すべての口コミに返信することは、MEO評価とユーザーへの信頼構築の両方で重要です。Googleは口コミへの返信率・返信速度をアクティブビジネスの評価基準のひとつとして考慮しています。高評価口コミへの返信は感謝を伝えリピート来店を促します。低評価口コミへの誠実な返信は、閲覧する第三者に「顧客対応が丁寧な企業」という印象を与え、来店転換率の向上につながります。24〜48時間以内の返信を目標とします。",
  },
  {
    title: "Webサイトとの連携",
    body: "GoogleビジネスプロフィールとWebサイトの相互連携はMEO対策とローカルSEOの両方を強化します。GBPに正確なウェブサイトURLを設定し、WebサイトにはGoogleマップの埋め込み・構造化データ（LocalBusiness Schema）・NAP情報の明記を行います。GBPの投稿内容とWebサイトのコンテンツを連動させることで、Googleがビジネス情報の一貫性を評価し、総合的な検索評価が向上します。",
  },
  {
    title: "Q&A欄の活用",
    body: "GBPのQ&A欄は、ユーザーからの質問に事前に回答できる機能です。よくある質問（駐車場の有無・予約の要否・支払方法・アクセス方法など）を自社でQ&Aとして投稿・回答することで、来店前の不安を解消し来店率が向上します。また、Q&A欄の内容にターゲットキーワードを含めることで、検索との関連性も高まります。定期的にQ&Aを確認・更新し、実際に多く寄せられる疑問を積極的に追加します。",
  },
];

const issueItems = [
  {
    title: "カテゴリ設定ミス",
    body: "主カテゴリに業種と合わないものを選択していると、関係のない検索クエリで表示される一方、本来狙うべきキーワードで上位に出られません。副カテゴリも未設定のままにしているケースが多く、カバーできる検索範囲が大幅に狭まります。",
  },
  {
    title: "NAP情報の不一致",
    body: "Googleビジネスプロフィール・公式サイト・各種ポータルサイトで住所や電話番号の表記が異なると、Googleはどの情報が正確かを判断できず信頼性スコアが下がります。「丁目」と「-」の混在、電話番号の市外局番有無の不統一なども同様のリスクを招きます。",
  },
  {
    title: "写真枚数の不足",
    body: "登録写真が外観1枚のみ、あるいは数年前に撮影した古い写真だけのプロフィールは、ユーザーに「運営されているのか不安」という印象を与えます。写真が少ないプロフィールはGoogleからもアクティブでないと評価されやすく、順位に影響します。",
  },
  {
    title: "営業時間の未更新",
    body: "年末年始・お盆・祝日などの特別営業時間を登録していないと、訪問したユーザーが「臨時休業」と表示されたGoogleマップを見て来店を諦めるケースが発生します。通常の営業時間が変更になった場合も即座に反映しないと機会損失が続きます。",
  },
  {
    title: "サービス情報の空欄",
    body: "GBPのサービス欄・メニュー欄を何も入力していない状態では、提供サービスに関連する検索クエリとの関連性が低く評価されます。価格・所要時間・特徴を丁寧に記載するだけで、競合との差別化と検索ヒット率の向上が同時に実現できます。",
  },
  {
    title: "オーナー確認の未完了",
    body: "GBPのオーナー確認（ハガキ・電話・動画など）を完了していないプロフィールは、情報編集権限が限定され最適化できる項目が大幅に制限されます。確認未完了のまま放置すると第三者によるオーナー申請リスクもあります。",
  },
  {
    title: "スパム報告リスクへの無対策",
    body: "競合や悪意ある第三者から不当なスパム報告を受けてプロフィールが停止・削除されるケースがあります。定期的にGBPのステータスを確認し、不審な変更提案や報告がないかモニタリングする仕組みがないと、停止後に気づくのが遅れます。",
  },
  {
    title: "投稿の停止・放棄",
    body: "最初は意欲的に投稿を続けていたものの、3〜4ヶ月で更新が止まるケースが非常に多く見られます。投稿が途絶えるとGoogleからのアクティビティ評価が下がり、一時的に上昇していた順位が元に戻ることがあります。更新頻度の低下は競合に追い越される直接的な原因になります。",
  },
  {
    title: "口コミの放置",
    body: "高評価・低評価に関わらず口コミへの返信を行っていないプロフィールは、Googleのエンゲージメント評価が低くなります。特に低評価口コミを無返答のまま放置すると、閲覧した潜在顧客に「顧客対応が雑な企業」という印象を与え、来店率が低下します。",
  },
  {
    title: "属性設定の漏れ",
    body: "GBPには「バリアフリー対応」「駐車場あり」「Wi-Fi利用可」「予約可能」など多数の属性項目があります。これらを設定していない場合、関連する絞り込み検索や属性フィルターからの流入を逃します。業種ごとに関係する属性を漏れなく設定することが重要です。",
  },
];

const industryItems = [
  {
    industry: "飲食店",
    note: "ランチ・ディナーなど時間帯別の写真を揃え、メニュー欄に価格を明記することで来店前の不安を解消します。「○○駅近くのランチ」など地域＋シチュエーションキーワードを投稿に盛り込み、食事シーンの写真を週1枚以上追加し続けることが集客の鍵です。",
  },
  {
    industry: "美容室・ネイルサロン",
    note: "施術前後のビフォーアフター写真がコンバージョンに直結します。スタイリスト別のサービス紹介をGBPメニュー欄に登録し、「○○市 縮毛矯正」「○○駅 ネイルサロン」など複合キーワードを投稿・サービス説明に織り交ぜます。予約リンクの設定も必須です。",
  },
  {
    industry: "歯科・クリニック",
    note: "医療機関は特にNAP情報の正確性と医師・院長プロフィールの充実が信頼性に直結します。「○○市 小児歯科」「インプラント 無料相談」など診療科目別のサービス登録を行い、院内の清潔感が伝わる写真を定期更新します。予約フォームへの誘導リンクも設定します。",
  },
  {
    industry: "建設・リフォーム",
    note: "施工事例写真（before/after）がGBPで最も効果的なコンテンツです。「○○市 外壁塗装」「浴室リフォーム 見積もり」など工事種別×地域のキーワードを意識した投稿を月2回以上行います。資格・許可証番号も必ずプロフィールに記載し信頼性を担保します。",
  },
  {
    industry: "整骨院・接骨院",
    note: "「保険適用」「交通事故対応」「肩こり 腰痛」など治療内容と症状キーワードを属性・サービス欄に設定します。院内の雰囲気写真と施術者の顔写真を掲載することで初来院のハードルを下げます。口コミには症状改善のエピソードが含まれやすく、返信でサービス名を自然に含めることでSEO効果も高まります。",
  },
  {
    industry: "不動産",
    note: "「○○市 賃貸」「△△駅 マンション購入」など地域×物件種別のキーワードをサービス欄と投稿に織り込みます。物件写真のほかスタッフの顔写真・オフィス内観を掲載することで親近感と信頼感を高めます。「LINEで相談可」などの属性設定も問い合わせ増加に効果的です。",
  },
  {
    industry: "士業（税理士・行政書士など）",
    body: "専門分野をサービス欄に細かく登録し（「相続税申告」「会社設立」など）、対応地域を明示します。代表者写真と略歴をGBP説明文に入れることでE-E-A-Tを高められます。投稿では節税ポイントや手続きの注意点など専門性が伝わる内容を発信し、信頼性を積み上げます。",
  },
  {
    industry: "学習塾・習い事",
    note: "「○○市 中学受験塾」「小学生 英会話 △△駅」など学年・科目・地域の組み合わせキーワードをサービス登録に使います。合格実績や体験授業の案内を投稿で発信し、教室の雰囲気写真と講師顔写真で保護者の不安を払拭します。無料体験への誘導CTAを投稿ボタンに設定します。",
  },
];

const flowItems = [
  {
    title: "オーナー確認の完了",
    body: "GBP最適化の出発点はオーナー確認です。ハガキ・電話・メール・動画確認など選択肢から最速の方法を選び、確認コードを取得して所有権を確定させます。",
  },
  {
    title: "NAP情報の統一",
    body: "事業名・住所・電話番号をGBP・公式サイト・ポータルサイト間で完全に統一します。表記揺れを洗い出し、すべてのタッチポイントで一致させます。",
  },
  {
    title: "カテゴリの最適化",
    body: "主カテゴリを業種の核心に設定し、副カテゴリには関連サービスを5〜7件追加します。競合上位のカテゴリ設定を事前に調査して参考にします。",
  },
  {
    title: "属性の設定",
    body: "「駐車場あり」「バリアフリー」「Wi-Fi」「予約可能」など業種に関連するすべての属性を設定します。属性は検索絞り込みフィルターにも影響します。",
  },
  {
    title: "サービス・メニューの登録",
    body: "提供サービスをカテゴリ別に整理し、価格・所要時間・特徴を記載した詳細ページを作成します。地域キーワードを自然に含めることを意識します。",
  },
  {
    title: "写真の一括追加",
    body: "外観・内装・商品・スタッフ・サービス提供シーンを最低30枚以上追加します。写真ごとにカテゴリ（外観・内装・チームなど）を正しく設定します。",
  },
  {
    title: "投稿の開始と定期化",
    body: "週1回以上の投稿スケジュールを設定し、季節イベント・キャンペーン・新メニュー情報などを計画的に発信します。投稿にはCTAボタンも設定します。",
  },
  {
    title: "既存口コミへの返信",
    body: "未返信の過去口コミにすべて返信します。高評価には感謝と個別コメント、低評価には誠実な対応姿勢を示す返信文を作成します。",
  },
  {
    title: "定期的な情報更新",
    body: "月1回以上プロフィール全体を見直し、営業時間・特別営業時間・写真・サービス情報を最新状態に保ちます。競合の動向も月次でチェックします。",
  },
  {
    title: "競合分析と改善の継続",
    body: "ローカルパック上位3社のGBPを定期的に分析し、写真枚数・投稿頻度・口コミ件数・カテゴリ設定の差分を把握して自社の改善サイクルに反映します。",
  },
];

const kpiItems = [
  {
    label: "検索表示回数",
    desc: "GBPインサイトの「ビジネスの検索方法」で確認。直接検索（名称検索）と間接検索（キーワード検索）の比率を把握します。",
  },
  {
    label: "ウェブサイトクリック数",
    desc: "GBPからウェブサイトに遷移したユーザー数をインサイトで計測。月次推移で施策の効果を確認します。",
  },
  {
    label: "電話タップ数",
    desc: "GBPの電話番号をタップして電話したユーザー数。来店意欲の高いアクションであり、問い合わせ転換の直接指標です。",
  },
  {
    label: "ルート案内リクエスト数",
    desc: "Googleマップから店舗へのルート案内を要求した件数。来店直前の行動指標として最も重要なKPIのひとつです。",
  },
  {
    label: "写真閲覧数",
    desc: "GBPの写真が閲覧された総回数。写真の追加後に閲覧数が増加しているかを確認し、投稿効果を測定します。",
  },
  {
    label: "口コミ評価平均",
    desc: "現在の総合評価スコア（★1〜5）。月次で平均スコアの推移を記録し、サービス品質との相関を分析します。",
  },
  {
    label: "口コミ返信率",
    desc: "直近3ヶ月の口コミに対するオーナー返信の割合。返信率が高いほどGoogleのエンゲージメント評価が高まります。",
  },
];

const faqItems = [
  {
    q: "Googleビジネスプロフィールの設定は無料ですか？",
    a: "はい、Googleビジネスプロフィールの作成・基本設定・各種機能の利用はすべて無料です。ただし、適切に最適化するためには専門知識と継続的な作業が必要です。当社のGBP最適化サービスは有料となりますが、投資対効果の面では高いリターンが期待できます。",
  },
  {
    q: "Googleビジネスプロフィールの最適化にはどのくらい時間がかかりますか？",
    a: "初期設定・最適化は1〜2週間で完了します。ただし、最適化の効果がGoogleに評価されて順位に反映されるまでには2〜6週間かかることが一般的です。口コミ獲得・投稿継続などの運用面は継続的に取り組む必要があります。",
  },
  {
    q: "競合他社が偽レビューを書いているようです。対処法はありますか？",
    a: "Googleに不適切なコンテンツとして報告することができます。スパムの疑いがある口コミを特定し、エビデンスをまとめてGoogleに報告します。当社では報告手続きのサポートと、本物の口コミを継続的に増やすことで長期的に対抗する戦略を提案します。",
  },
  {
    q: "複数店舗がある場合、それぞれ個別に最適化が必要ですか？",
    a: "基本方針は共通化できますが、各店舗の地域特性・競合状況・強みに合わせた個別の最適化が必要です。当社では多店舗対応プランを用意しており、統一した管理体制と店舗別の細かな対応を両立させます。",
  },
  {
    q: "Googleビジネスプロフィールの情報を勝手に変更されることはありますか？",
    a: "はい、Googleや第三者がビジネス情報を変更・提案することがあります。「情報の変更提案」機能があり、承認なく反映されるケースもあります。定期的にプロフィールを確認し、不正な変更が行われていないかをチェックすることが重要です。当社の運用プランではこのモニタリングも含まれます。",
  },
  {
    q: "GBPのカテゴリは何個まで設定できますか？",
    a: "主カテゴリ1件と副カテゴリ最大9件、合計10件まで設定できます。ただし、関係のないカテゴリを無理に増やすと評価に悪影響が出る可能性があります。ビジネスに関連性の高いカテゴリを5〜7件程度選ぶことを推奨しています。",
  },
  {
    q: "GBPの写真は何枚くらい必要ですか？",
    a: "最低でも30枚以上、理想は100枚以上を目指してください。外観・内装・商品・スタッフ・サービス提供シーンなど多様なカテゴリの写真を揃え、月2〜4枚のペースで継続的に追加することが重要です。写真の多さよりも定期的な更新が評価される傾向があります。",
  },
  {
    q: "GBPのQ&A欄はどのように活用すればいいですか？",
    a: "オーナー自身でよくある質問を投稿し、自ら回答することができます。「駐車場はありますか」「予約は必要ですか」「クレジットカードは使えますか」など、来店前に気になる疑問を先回りして解消することで来店率が向上します。第三者が投稿した質問には必ず回答し、放置しないことが重要です。",
  },
  {
    q: "GBP投稿はどのくらいの頻度で行えばいいですか？",
    a: "週1回以上が推奨です。投稿は7日間表示された後にアーカイブされるため、継続的な投稿が「最近の投稿」として表示され続けることにつながります。キャンペーン告知・季節メニュー・スタッフ紹介など、バリエーションをつけることで飽きられずに続けられます。",
  },
  {
    q: "GBPのオーナー確認ができない場合はどうすればいいですか？",
    a: "ハガキ・電話・メール・動画など複数の確認方法があります。事業所に届くハガキが最も一般的ですが、新規開業直後など住所が確定していない場合は他の方法を選択できます。確認に問題が生じた場合はGoogleサポートへの問い合わせが必要です。当社でサポートいたします。",
  },
  {
    q: "GBPの説明文にSEOキーワードを入れても大丈夫ですか？",
    a: "説明文はGoogleの検索順位に直接影響しませんが、ユーザーが読む文章として自然な形でキーワードを含めることは問題ありません。ただし、キーワードを過剰に詰め込んだスパム的な文章はGoogleのポリシー違反となる可能性があります。読みやすさを優先しながら、ビジネスの特徴を正確に伝える文章を作成してください。",
  },
  {
    q: "GBP最適化の効果はいつ頃から現れますか？",
    a: "基本的な最適化完了後2〜4週間で表示回数の変化が現れ始め、1〜3ヶ月で順位の改善が見られることが多いです。口コミ件数の増加・定期的な投稿・写真の継続追加を組み合わせることで効果が加速します。競合が強い地域では6ヶ月以上のスパンで評価することを推奨します。",
  },
  {
    q: "GBPのプロフィールが停止・削除された場合はどうすればいいですか？",
    a: "まずGBPのダッシュボードで停止理由を確認し、Googleのポリシーに違反している部分を修正します。異議申し立てフォームからの申請も可能です。停止理由が不明な場合はGoogleサポートへ連絡します。定期的なモニタリングで早期発見することが被害を最小化するポイントです。",
  },
  {
    q: "競合のGBPはどのように分析すればいいですか？",
    a: "ターゲットキーワードでGoogleマップを検索し、上位表示されている競合のGBPを確認します。カテゴリ設定・写真枚数・投稿頻度・口コミ件数・評価スコア・サービス登録内容を比較します。競合が行っていない施策を自社で先行実施することが差別化の基本戦略です。",
  },
  {
    q: "GBPの住所を変更した場合、再確認が必要ですか？",
    a: "住所を変更した場合は再度オーナー確認が必要になる場合があります。住所変更は検索順位にも影響するため、引越し前に十分な準備期間を設けることが重要です。新住所でのGBP最適化を再度実施し、ウェブサイトや各種ポータルのNAP情報も同時に更新します。",
  },
  {
    q: "Googleビジネスプロフィールの投稿にリンクを入れることはできますか？",
    a: "投稿にURLリンクを含めることが可能で、ウェブサイトの特定ページ・予約フォーム・キャンペーンページへ誘導できます。投稿タイプによって「今すぐ注文」「詳細を見る」「予約する」などのCTAボタンを設定できます。リンク先との内容の一貫性を保つことが重要です。",
  },
  {
    q: "GBPのインサイト（アクセス解析）はどこで確認できますか？",
    a: "GBPのダッシュボードにある「インサイト」タブで確認できます。検索表示回数・ウェブサイトクリック数・電話タップ数・ルート案内リクエスト数・写真閲覧数などを確認できます。Googleアナリティクスと連携することでより詳細なユーザー行動を把握できます。",
  },
  {
    q: "Googleビジネスプロフィールとローカルサービス広告の違いは何ですか？",
    a: "Googleビジネスプロフィールは無料の有機的な表示（オーガニック）であるのに対し、ローカルサービス広告は有料の広告です。GBPの最適化は無料で継続的な効果を得られるため費用対効果が高く、広告との組み合わせで短期・長期の両面で集客を強化できます。",
  },
  {
    q: "GBP最適化はSEO対策とどう違いますか？",
    a: "SEO対策はGoogleの通常の検索結果でウェブサイトを上位表示させる施策で、GBP最適化（MEO対策）はGoogleマップやローカルパック（地図表示）での上位表示を目的とします。地域ビジネスにとっては両方を並行して行うことで、オーガニック検索からの集客を最大化できます。",
  },
  {
    q: "GBP最適化の費用はどのくらいですか？",
    a: "当社のGBP最適化サービスは初期設定プランと月次運用プランをご用意しています。初期設定（カテゴリ・NAP・写真・サービス登録など一式）と、継続的な投稿・口コミ返信・モニタリングを含む月次運用プランを組み合わせることを推奨しています。詳細はお問い合わせください。",
  },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策", desc: "MEO対策の全体戦略" },
  { href: "/meo/review-management", label: "口コミ対策", desc: "高評価口コミを増やす" },
  { href: "/meo/ranking", label: "MEO順位改善", desc: "ローカルパック上位表示" },
  { href: "/meo/local-seo", label: "ローカルSEO", desc: "地域検索での集客強化" },
  { href: "/meo/store-marketing", label: "店舗集客", desc: "MEOで来店数を増やす" },
  { href: "/meo/map-search", label: "Googleマップ検索対策", desc: "マップ表示の最適化" },
  { href: "/meo/citation", label: "サイテーション対策", desc: "NAP情報の統一と拡散" },
  { href: "/meo/photo-strategy", label: "写真投稿戦略", desc: "GBP写真で集客を高める" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示の専門支援" },
  { href: "/services/sns", label: "SNS運用", desc: "MEOと連動したSNS集客" },
  { href: "/services/website", label: "ウェブサイト制作", desc: "GBPと連動するサイト構築" },
  { href: "/seo", label: "SEO対策", desc: "オーガニック検索からの集客" },
  { href: "/seo/local", label: "ローカルSEO", desc: "地域キーワードでの上位表示" },
  { href: "/aio", label: "AIO対策", desc: "AI検索への最適化" },
  { href: "/industry/restaurant", label: "飲食店のMEO対策", desc: "飲食業種特化の戦略" },
  { href: "/industry/beauty", label: "美容室のMEO対策", desc: "美容業種特化の戦略" },
  { href: "/industry/clinic", label: "クリニックのMEO対策", desc: "医療機関のGBP最適化" },
  { href: "/industry/construction", label: "建設・リフォームのMEO", desc: "施工業種の集客戦略" },
  { href: "/industry/judo", label: "整骨院のMEO対策", desc: "整骨院・接骨院の集客" },
  { href: "/area/tokyo", label: "東京のMEO対策", desc: "東京都内の地域別対策" },
  { href: "/area/osaka", label: "大阪のMEO対策", desc: "大阪府内の地域別対策" },
  { href: "/area/nagoya", label: "名古屋のMEO対策", desc: "名古屋市周辺の対策" },
  { href: "/blog/gbp-optimization", label: "GBP最適化ガイド", desc: "詳細な解説記事" },
];

export default function GoogleBusinessProfilePage() {
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
              <span style={{ color: "#0F172A" }}>Googleビジネスプロフィール</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Google Business Profile
            </p>
            <h1
              className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              Googleビジネスプロフィール<br />（GBP）最適化
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              Googleビジネスプロフィール（GBP）はMEO対策の根幹をなす無料ツールです。
              適切に最適化することでGoogleマップと検索結果での露出が大幅に向上し、
              地域の見込み客からの来店・問い合わせを継続的に増やすことができます。
            </p>
          </div>
        </section>

        {/* Full-width image after hero */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_18_03.png"
            alt="Googleビジネスプロフィール最適化・デジタルマーケティング"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.1)" }} />
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What You Will Learn
            </p>
            <h2
              className="font-black text-[28px] mb-10"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-4">
              {[
                "Googleビジネスプロフィール（GBP）がMEO対策においてなぜ最重要ツールなのか",
                "カテゴリ設定・NAP統一・写真・投稿・口コミ返信など主要最適化ポイントの具体的な実施方法",
                "中小企業がよく陥るGBP設定ミス10項目とその原因・改善アクション",
                "飲食店・美容室・歯科・建設など8業種ごとのGBP活用ポイントと差別化戦略",
                "オーナー確認から競合分析まで10ステップの実装・改善フロー",
                "GBP最適化の効果を測定するための7つのKPIと確認場所",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 mt-[2px] font-bold text-[14px]" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GBPとは */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What is GBP
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              GBPとは — MEO対策の最重要ツール
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                Googleビジネスプロフィール（旧Googleマイビジネス）は、Googleが無料で提供する
                ビジネス情報管理ツールです。ここに登録した情報はGoogleマップと検索結果に表示され、
                ユーザーがビジネスを検索した際の第一接点となります。店舗名・住所・電話番号・
                営業時間・写真・口コミ・サービス内容など、来店判断に必要なすべての情報を一元管理できます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                GBPはMEO対策においてSEOにおけるウェブサイト本体に相当する存在です。
                どれだけ他の施策を行っても、GBPが最適化されていなければMEOの効果は大幅に制限されます。
                逆に言えば、GBPを徹底的に最適化するだけで、競合の多くを追い抜くことが可能です。
                多くの中小企業がGBPを最低限しか設定していないため、適切な最適化に大きな機会があります。
              </p>
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Common Issues
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              よくある課題と原因
            </h2>
            <div className="max-w-3xl">
              {issueItems.map((item, i) => (
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

        {/* GBP最適化の主要ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Optimization Points
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              GBP最適化の主要ポイント
            </h2>
            <div className="max-w-3xl">
              {optimizationPoints.map((item, i) => (
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
              Industry Insights
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              業種別の活用ポイント
            </h2>
            <div className="max-w-3xl">
              {industryItems.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0F172A" }}>{item.industry}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>
                      {item.note ?? (item as { industry: string; body?: string; note?: string }).body}
                    </p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section D: 実装・改善フロー */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Implementation Flow
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              実装・改善フロー
            </h2>
            <div className="max-w-3xl">
              {flowItems.map((item, i) => (
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

        {/* Section E: 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              KPIs
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              成果を見るための指標
            </h2>
            <div className="max-w-3xl">
              {kpiItems.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0F172A" }}>{item.label}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 写真戦略 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  Photo Strategy
                </p>
                <h2
                  className="font-black text-[26px] mb-6"
                  style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
                >
                  写真投稿の重要性と戦略
                </h2>
                <div className="space-y-4">
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    GBPにおける写真は、ユーザーの来店意思決定において最も強力なコンテンツです。
                    写真を多数掲載しているプロフィールは、掲載が少ないプロフィールと比べて
                    ウェブサイトへのクリックも電話問い合わせも多い傾向があります。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    効果的な写真戦略の基本は「多様性」と「定期更新」です。外観・内装・商品・スタッフ・
                    季節限定メニューなど、ビジネスの多面的な魅力を伝える写真を継続的に追加します。
                    月2〜4枚のペースで新しい写真を追加し続けることが、アルゴリズム評価の維持につながります。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    解像度720px以上・適切な明るさ・ピントが合っていることが最低条件です。
                    スマートフォンの最新カメラでも十分な品質が得られます。
                    オーナーが高品質な写真を定期的に追加することで、全体の印象を管理できます。
                  </p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden" style={{ height: "360px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_14_54.png"
                  alt="GBP最適化の分析・戦略会議"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="GBP最適化に関するよくある質問" bgColor="#F9F8F5" />

        <RelatedPages links={relatedLinks} />

        <PageContactCTA
          heading="Googleビジネスプロフィールの最適化をお任せください"
          body="現在のGBPの設定状況を無料で診断し、改善ポイントをご提案します。カテゴリ設定から写真・口コミ管理まで、MEO対策のプロが徹底サポートします。"
        />
      </main>
      <Footer />
    </>
  );
}

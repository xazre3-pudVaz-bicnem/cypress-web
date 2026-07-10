import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Googleビジネスプロフィール写真投稿・管理戦略｜MEO対策で集客｜株式会社サイプレス",
  description:
    "GoogleビジネスプロフィールへのMEO写真投稿戦略を解説。外観・内装・メニュー・スタッフ写真の使い分けと投稿頻度、スマートフォンでのプロ品質撮影テクニックまで。月2枚以上の定期投稿でGoogleマップ上位表示を実現。",
  keywords: ["GBP写真投稿", "Googleビジネスプロフィール写真", "MEO写真", "Googleマップ写真", "MEO対策写真投稿"],
  openGraph: {
    title: "Googleビジネスプロフィール写真投稿・管理戦略｜MEO対策で集客｜株式会社サイプレス",
    description: "MEO対策の要・写真投稿の戦略を解説。種類・品質・更新頻度のすべて。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/photo-posting" },
};

const photoTypes = [
  {
    num: "01",
    title: "外観写真（昼間・夜間・複数角度）",
    body: "店舗の外観写真は「この場所に行けば良い」という確信をユーザーに与えます。昼間の明るい時間帯だけでなく夜間の外観も追加することで、夜の来店を検討しているユーザーへの訴求ができます。正面・斜め・看板アップなど複数の角度で撮影することで、初めて来店するユーザーが迷わずたどり着けるようになります。",
  },
  {
    num: "02",
    title: "内装・店内の雰囲気写真",
    body: "内装写真は来店前の「この店の雰囲気を確かめたい」というニーズに応えます。清潔感・広さ・席数・インテリアのテイストが伝わる写真が理想的です。コロナ禍以降、換気対策・消毒設備が分かる写真も安心感につながります。自然光の入る時間帯に撮影すると明るく好印象な仕上がりになります。",
  },
  {
    num: "03",
    title: "商品・メニュー写真",
    body: "商品・メニュー写真は来店動機を最も高める写真です。「この料理を食べたい」「この商品を試したい」という欲求を喚起します。明るい場所で食品全体が映るよう撮影し、盛り付けの美しさが伝わるよう意識します。Googleのメニュー機能とも連携させることで、検索結果への表示機会が増えます。",
  },
  {
    num: "04",
    title: "スタッフ・作業風景写真",
    body: "スタッフや作業風景の写真はビジネスの「人間味」を伝えます。特に美容室・整骨院・工務店など担当者との関係性が重要な業種では、親しみやすいスタッフ写真が来店の背中を押します。ユニフォーム着用で統一感を出し、笑顔で自然に撮影することが好印象につながります。",
  },
  {
    num: "05",
    title: "実績・施工例写真（業種による）",
    body: "リフォーム・建設・美容・整体など、サービスの結果が分かる業種では「ビフォーアフター」や施工事例写真が強力な説得材料になります。Googleビジネスプロフィールに掲載された実績写真は、ユーザーの問い合わせ率を大幅に向上させます。許可を得た実際の案件写真を定期的に追加していくことで、実績の積み重ねが視覚化されます。",
  },
  {
    num: "06",
    title: "ロゴ・カバー写真",
    body: "ロゴ写真はGoogleが提案する画像としてブランド認知を高めます。カバー写真（プロフィールのメイン画像）は検索結果一覧で最初に目に入るため、最も印象的な1枚を選びます。推奨サイズはカバー写真が1080×608px以上で、ロゴは250×250px以上です。競合と差別化できる鮮やかで記憶に残るビジュアルを選定します。",
  },
];

const issueItems = [
  {
    num: "01",
    title: "写真が少ない（10枚未満）",
    body: "写真枚数が10枚未満のGBPはユーザーへの情報提供が不十分で、来店判断に迷わせてしまいます。Googleのアルゴリズムもコンテンツの充実度を評価するため、写真不足はMEO順位の低下につながります。最低でも20枚、理想は50枚以上を目標に撮影計画を立てることが先決です。",
  },
  {
    num: "02",
    title: "開業時から写真を更新していない",
    body: "開業時に数枚だけ投稿してそれ以降更新していないケースは非常に多くあります。古い写真はリフォーム前の内装や過去のメニューを映していることがあり、現在の状態と乖離していると信頼性を損ないます。Googleは定期的な更新を評価するため、月に最低2枚の追加を習慣化することが重要です。",
  },
  {
    num: "03",
    title: "内装・外観しか撮影していない",
    body: "外観と内装しか写真がない場合、ユーザーは「何を提供してくれるか」が分かりません。業種に応じた商品・サービス・スタッフ・実績写真が不足していると、競合に比べて魅力の伝達力が落ちます。カテゴリを網羅した撮影計画を立て、各カテゴリに最低3枚以上の写真を揃えることを目指しましょう。",
  },
  {
    num: "04",
    title: "スタッフ写真や商品写真がない",
    body: "来店前のユーザーは「誰がサービスを提供してくれるか」「どんな商品があるか」を強く知りたがっています。特に美容室・整骨院・歯科などの施術系業種ではスタッフ写真の有無が予約決定に直結します。商品・スタッフ写真の追加は費用をかけずに来店転換率を高められる最も効果的な施策の一つです。",
  },
  {
    num: "05",
    title: "画質が低い・暗い写真が混在している",
    body: "ピンぼけ・暗すぎる・傾いた写真は、せっかく投稿しても逆効果になります。Googleの画像認識AIも低品質な写真を適切に分類できないことがあります。古いスマートフォンで撮影した低解像度の写真は削除し、現在のスマートフォンで明るく水平に撮影し直すだけで印象が大幅に向上します。",
  },
  {
    num: "06",
    title: "オーナー写真とユーザー投稿写真のバランス管理なし",
    body: "ユーザーが投稿した写真が実態と異なる印象を与えている場合、来店動機を下げている可能性があります。オーナー投稿写真を充実させることで全体の印象をコントロールできます。ユーザー投稿写真の閲覧数とオーナー写真の閲覧数の比率をインサイトで定期的に確認し、オーナー写真の割合を高める戦略が必要です。",
  },
  {
    num: "07",
    title: "写真カテゴリ設定を活用していない",
    body: "GBPでは「外観」「内観」「食事」「チーム」など写真にカテゴリを設定できます。カテゴリが未設定だとGoogleの自動分類に委ねられ、意図しないカテゴリに分類されることがあります。投稿時に適切なカテゴリを手動で設定することで、ユーザーが探している写真にたどり着きやすくなります。",
  },
  {
    num: "08",
    title: "動画投稿を知らない・活用していない",
    body: "GBPには写真だけでなく動画（30秒以内・100MB以下）も投稿できます。店内の雰囲気・施術の様子・商品の使い方を動画で伝えることで、静止画では伝えにくい「空気感」を表現できます。動画を投稿しているビジネスはまだ少ないため、競合との差別化要素として今すぐ取り組める施策です。",
  },
  {
    num: "09",
    title: "写真の閲覧数を把握していない",
    body: "GBPのインサイトでは写真の閲覧数（ビュー数）が確認できます。どのカテゴリの写真がよく見られているかを把握することで、注力すべき撮影テーマが明確になります。閲覧数の少ない写真カテゴリに追加投稿することで、ユーザーが求める情報を補完し、来店転換率の向上につなげられます。",
  },
  {
    num: "10",
    title: "Googleが自動削除するケースへの対応",
    body: "Googleはコンテンツポリシーに違反する写真（無関係な画像・テキストが大量に含まれる写真など）を自動削除することがあります。削除通知に気づかずに写真枚数が減少しているケースもあります。定期的にGBPの写真タブを確認し、意図せず写真が減っていないかをチェックする習慣が必要です。",
  },
];

const industryItems = [
  {
    industry: "飲食店",
    note: "料理写真・内装・スタッフ・厨房の4カテゴリが必須。料理は自然光または撮影用ライトで盛り付けの美しさが伝わる構図で撮影。季節メニューの更新に合わせて月2〜4枚の追加を継続する。",
  },
  {
    industry: "美容室・ネイルサロン",
    note: "施術前後の比較写真が来店動機を最も高める。施術写真には本人の許諾を得た上でスタッフ別に投稿すると個人指名の促進につながる。カット・カラー・パーマなどメニュー別にカテゴリ管理する。",
  },
  {
    industry: "歯科・クリニック",
    note: "受付・待合室・診察室・外観の4カテゴリを最低限揃える。清潔感と設備の充実を伝えることが初診患者の不安解消に直結する。スタッフ集合写真も「安心して任せられる」という印象を高める。",
  },
  {
    industry: "整骨院・整体院",
    note: "施術風景・設備・外観・スタッフの写真が重要。施術中の写真は患者の許諾を得て、安心感と専門性が伝わる構図で撮影する。ベッド数・個室の有無が分かる内装写真もプライバシー重視のユーザーに効果的。",
  },
  {
    industry: "リフォーム・工務店",
    note: "施工前後の比較写真が最も強力な訴求材料。物件ごとに外観・内装・水回りなどカテゴリ別に整理して投稿する。施工数が増えるほど写真枚数が積み上がり、実績の多さが視覚的に伝わる好循環が生まれる。",
  },
  {
    industry: "不動産",
    note: "物件写真・オフィス内装・スタッフ写真が中心。オフィスの清潔感とスタッフの笑顔が「相談しやすい雰囲気」を演出する。地域の街並みや周辺環境の写真を追加することで地域密着感も伝えられる。",
  },
  {
    industry: "小売店",
    note: "商品写真・店内陳列・季節のディスプレイを定期的に更新する。新商品入荷のタイミングで写真を投稿することがリピーター来店の動機になる。商品のディテール・素材感が伝わるアップ写真も購買意欲を高める。",
  },
  {
    industry: "学習塾",
    note: "教室の広さ・清潔感・採光を伝える内装写真と授業風景が重要。個別指導か集団授業かが分かる構図で撮影する。合格実績を掲示した黒板や表彰状の写真は信頼性の視覚化として効果的。",
  },
];

const flowItems = [
  { num: "01", title: "現在の写真枚数・カテゴリ確認", body: "GBP管理画面の写真タブで現在の枚数とカテゴリ別の充実度を確認する。競合上位3店舗の写真枚数・カテゴリも確認して差分を把握する。" },
  { num: "02", title: "カテゴリ別撮影計画の策定", body: "外観・内装・商品・スタッフ・実績など各カテゴリの目標枚数を設定する。1回の撮影セッションで複数カテゴリをまとめて撮影できるよう日程とテーマを計画する。" },
  { num: "03", title: "外観写真の撮影（昼・夜・複数角度）", body: "昼間と夜間それぞれ2〜3枚ずつ撮影する。正面・斜め45度・看板アップの3アングルを基本セットとして押さえる。" },
  { num: "04", title: "内装写真の撮影", body: "全体の広さ・席・カウンター・特徴的なインテリアをそれぞれ撮影する。自然光が入る時間帯を狙い、整理整頓された状態で撮影することが前提。" },
  { num: "05", title: "商品・サービス写真の撮影", body: "主要商品・メニューを個別に撮影する。飲食店ならシーズンメニュー・人気メニューから優先する。業種に応じてビフォーアフターや施術中の写真も撮影する。" },
  { num: "06", title: "スタッフ写真の撮影", body: "全スタッフの個別写真と集合写真を撮影する。ユニフォーム着用・笑顔・明るい背景が基本。施術中・作業中などシーン写真も合わせて撮影しておく。" },
  { num: "07", title: "撮影の実施", body: "計画に基づき1〜2時間の撮影セッションを行う。1回の撮影で20〜30枚を目標に、各カテゴリ3〜5枚ずつ確保する。動画（30秒以内）も1〜2本撮影しておく。" },
  { num: "08", title: "品質チェックと補正", body: "撮影した写真を明るさ・ピント・水平の観点でチェックし、合格基準を下回るものは削除する。スマートフォンの標準編集機能で明るさ・コントラストを微調整する。" },
  { num: "09", title: "カテゴリ設定をして投稿", body: "GBP管理画面から各写真に適切なカテゴリを設定して投稿する。一度に多数投稿するよりも数日に分けて投稿する方がアクティビティ評価が継続しやすい。" },
  { num: "10", title: "月次追加計画の実行", body: "初回の大量投稿後は月2〜4枚のペースで新しい写真を継続追加する。季節・新メニュー・イベントのタイミングに合わせて撮影と投稿をルーティン化する。" },
];

const kpiItems = [
  { num: "01", title: "総写真枚数", body: "GBPの写真タブで確認。競合上位と比較して差がある場合は追加投稿で埋める。目標は50枚以上。" },
  { num: "02", title: "オーナー投稿写真の閲覧数", body: "GBPインサイトの「写真」セクションで確認。増加傾向にあるか月次で追跡する。" },
  { num: "03", title: "ユーザー投稿写真の閲覧数", body: "同じくインサイトで確認。オーナー写真と比較して印象をコントロールできているか判断する材料となる。" },
  { num: "04", title: "月間写真追加数", body: "スプレッドシートや管理表で記録する。月2枚以上を最低ラインとして継続できているかを管理する。" },
  { num: "05", title: "写真カテゴリ網羅率", body: "外観・内装・商品・スタッフ・実績の各カテゴリに写真が存在するかをチェックリストで月次確認する。" },
  { num: "06", title: "写真閲覧からのウェブサイトクリック率", body: "GBPインサイトのウェブサイトクリック数と写真閲覧数の比率を算出。写真の質と内容が集客につながっているかを評価する。" },
  { num: "07", title: "競合比較写真スコア", body: "競合上位3店舗との写真枚数・カテゴリ充実度・更新頻度を月次比較する。差分が縮まっているか確認し、次月の撮影計画に反映する。" },
];

const faqItems = [
  {
    q: "写真は何枚くらい掲載するのが理想ですか？",
    a: "開始時点では最低20枚、理想は50枚以上を目標としてください。写真が100枚以上あるビジネスはユーザーのウェブサイトクリック率が高い傾向があります。重要なのは数だけでなく定期的な追加で、月2〜4枚のペースで継続的に投稿することを推奨しています。",
  },
  {
    q: "スマートフォンで撮影した写真でも大丈夫ですか？",
    a: "現在のスマートフォンは高品質なカメラを搭載しているため、コツを押さえれば十分プロ品質の写真が撮影できます。重要なのは明るさ・水平・ピントの3点です。自然光の多い時間帯に撮影し、グリッド表示を活用して水平を保ち、タップしてピントを合わせることで品質が大幅に向上します。",
  },
  {
    q: "ユーザーが投稿した写真は管理できますか？",
    a: "ユーザー投稿の写真は原則として削除できませんが、Googleのコンテンツポリシーに違反するもの（不適切な内容・スパム等）は報告・削除申請が可能です。オーナーとして積極的に品質の高い写真を追加することで、ユーザー写真との比率を改善し、全体的な印象を高めることができます。",
  },
  {
    q: "写真の著作権は誰のものですか？",
    a: "オーナーがGBPに投稿した写真の著作権は投稿者にありますが、Googleの利用規約により、Googleサービス内での使用・表示をGoogleに許諾したことになります。他者の写真を無断で使用することはできません。スタッフ・顧客の写真を使用する際は事前に承諾を得ることが必要です。",
  },
  {
    q: "競合より写真が少ないと順位に影響しますか？",
    a: "写真の数・品質・更新頻度はGoogleのアクティビティ評価に影響し、MEO順位の要素となります。競合分析の際に上位表示されているビジネスの写真枚数を確認し、それを上回ることを目標に設定することを推奨しています。単純な枚数競争よりも、質の高い写真を継続的に追加することが重要です。",
  },
  {
    q: "写真を投稿するタイミングはいつが良いですか？",
    a: "曜日・時間帯の制限はありませんが、季節メニューの切り替え・新スタッフの入社・リニューアルオープンなどのタイミングに合わせて投稿することで、タイムリーな情報をユーザーに届けられます。また、週1〜2回のルーティン投稿日を設定することで継続しやすくなります。",
  },
  {
    q: "カバー写真はどのように選べばいいですか？",
    a: "カバー写真は検索結果一覧でサムネイルとして表示される最も目立つ写真です。店舗の特徴・雰囲気・強みが一目で伝わる写真を選んでください。推奨サイズは1080×608px以上です。季節や新サービスに合わせて定期的に更新することも効果的です。",
  },
  {
    q: "写真にテキスト（文字）を入れてもいいですか？",
    a: "少量のテキスト（店名・ロゴ程度）は問題ありませんが、写真全体をポスターのように使ったり大量のテキストを入れた画像はGoogleのポリシー違反となり削除される場合があります。写真はあくまで実際の店舗・商品・サービスを視覚的に伝えるものとして使用してください。",
  },
  {
    q: "動画も投稿できますか？どんな内容が効果的ですか？",
    a: "GBPに動画（30秒以内・解像度720p以上・100MB以下）を投稿できます。店内ツアー・施術の様子・料理の仕上げシーン・スタッフ紹介など、静止画では伝えにくい「動き」と「雰囲気」を伝えるコンテンツが効果的です。動画投稿を行っているビジネスはまだ少ないため差別化要素になります。",
  },
  {
    q: "写真投稿はMEO順位に直接影響しますか？",
    a: "写真の充実度・更新頻度はGoogleのアクティビティ評価に影響し、MEO順位の「知名度（Prominence）」要素の一部として機能します。また写真が充実することでユーザーのプロフィール滞在時間が伸び、エンゲージメント率の向上がMEO評価を間接的に高める効果もあります。",
  },
  {
    q: "写真のファイル形式や推奨サイズを教えてください。",
    a: "推奨フォーマットはJPGまたはPNGで、ファイルサイズは10KB〜5MB、解像度は720px×720px以上です。カバー写真は1080×608px以上が推奨されます。あまり大きすぎるファイルは表示が遅くなるため、1〜3MB程度に最適化してから投稿することを推奨します。",
  },
  {
    q: "写真が削除されてしまいました。なぜですか？",
    a: "Googleのコンテンツポリシー（不適切・関係のない内容・スパム的画像）に違反する写真は自動または手動で削除されます。また著作権侵害が疑われる画像も削除対象です。削除された場合は内容を確認し、ポリシーに準拠した写真を再投稿してください。根拠なく削除された場合はGoogleへの報告も可能です。",
  },
  {
    q: "競合他社の写真をGBPに投稿することはできますか？",
    a: "他社の写真を無断でGBPに投稿することは著作権侵害にあたります。また、自社と関係のない場所・商品の写真を投稿することはGoogleのポリシー違反です。必ず自社の店舗・商品・スタッフを撮影したオリジナル写真を使用してください。",
  },
  {
    q: "写真投稿を外部に委託することはできますか？",
    a: "はい。MEO管理の代行業者や撮影専門のカメラマンに委託することができます。定期的な写真撮影と投稿を外部委託することで、社内の負担を減らしながら継続的な更新を維持できます。サイプレスでは写真投稿の代行管理サービスも提供しています。",
  },
  {
    q: "Googleストリートビューとの関係はありますか？",
    a: "Googleストリートビューは別のGoogleサービスですが、360度写真や店内ストリートビューをGBPに追加することができます。Googleが認定したフォトグラファーに依頼することで、店内の360度ビューを追加でき、ユーザーが来店前に店内を確認できる体験を提供できます。",
  },
  {
    q: "スタッフ写真を投稿する際の注意点は？",
    a: "スタッフの写真を投稿する際は、本人から書面または口頭で同意を得ることが必要です。退職したスタッフの写真は不要なトラブルを避けるため速やかに削除を検討してください。顔が明確に写っている場合は特に慎重に対応することを推奨します。",
  },
  {
    q: "写真の閲覧数はどこで確認できますか？",
    a: "GBP管理画面の「インサイト」または「パフォーマンス」セクションで確認できます。オーナー投稿写真とユーザー投稿写真それぞれの閲覧数が表示されます。競合平均との比較も表示されるため、相対的な強みと弱みを把握するのに役立ちます。",
  },
  {
    q: "写真投稿代行をお願いする場合の費用感を教えてください。",
    a: "月次の写真投稿代行の相場は月額5,000〜30,000円程度です。撮影も含む場合は別途撮影費用（出張撮影で20,000〜50,000円程度）がかかります。サイプレスのMEO管理プランには写真投稿管理が含まれています。詳しくはお問い合わせください。",
  },
  {
    q: "Instagramなど他のSNSに投稿した写真をGBPにも使えますか？",
    a: "著作権上自社で撮影したオリジナル写真であれば、他のSNSと同じ写真をGBPに流用することは問題ありません。ただし、GBPの推奨サイズ・品質基準を満たしているか確認してから投稿してください。SNSの正方形クロップ写真はGBPのカバー写真としては不向きな場合があります。",
  },
  {
    q: "写真管理において最も重要なことを一つ挙げるとしたら？",
    a: "継続的な更新頻度です。一度大量に投稿してもその後何ヶ月も更新しなければGoogleはアクティブでないと判断します。月2枚以上という小さな目標を設定し、撮影と投稿をルーティン業務として組み込むことが長期的なMEO評価維持に最も効果的です。",
  },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策", desc: "MEO対策の全体戦略" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "MEO対策の根幹ツール" },
  { href: "/meo/google-post", label: "Googleポスト投稿", desc: "最新情報・イベント投稿戦略" },
  { href: "/meo/ranking", label: "MEO順位改善", desc: "ローカルパック上位表示" },
  { href: "/meo/review", label: "口コミ管理", desc: "レビュー獲得・返信戦略" },
  { href: "/meo/local-keyword", label: "地域キーワード設計", desc: "地域集客のキーワード戦略" },
  { href: "/meo/google-maps", label: "Googleマップ集客", desc: "マップからの集客最大化" },
  { href: "/meo/business-profile-optimization", label: "プロフィール最適化", desc: "GBP基本情報の最適化" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索エンジン最適化" },
  { href: "/seo", label: "SEO対策", desc: "SEO全体の戦略解説" },
  { href: "/seo/content-marketing", label: "コンテンツマーケティング", desc: "集客コンテンツの作り方" },
  { href: "/aio", label: "AIO対策", desc: "AI検索最適化戦略" },
  { href: "/aio/google-ai-overview", label: "AI Overviews対策", desc: "Googleの生成AI検索対策" },
  { href: "/industry/restaurant", label: "飲食店向けMEO", desc: "飲食店の集客戦略" },
  { href: "/industry/beauty", label: "美容室向けMEO", desc: "美容室・サロンの集客戦略" },
  { href: "/industry/dental", label: "歯科向けMEO", desc: "歯科医院の集客戦略" },
  { href: "/industry/judo-orthopedics", label: "整骨院向けMEO", desc: "整骨院・整体院の集客" },
  { href: "/area/tokyo", label: "東京のMEO対策", desc: "東京都内の地域集客" },
  { href: "/area/osaka", label: "大阪のMEO対策", desc: "大阪府内の地域集客" },
  { href: "/area/nagoya", label: "名古屋のMEO対策", desc: "名古屋エリアの地域集客" },
  { href: "/about", label: "サイプレスについて", desc: "会社概要・実績" },
  { href: "/case-studies", label: "導入事例", desc: "MEO対策の成功事例" },
  { href: "/contact", label: "無料相談・お問い合わせ", desc: "まずはご相談から" },
];

export default function PhotoPostingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/meo" className="hover:underline" style={{ color: "#6B7280" }}>MEO対策</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>写真投稿</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              MEO Knowledge
            </p>
            <h1
              className="text-[40px] md:text-[52px] font-black leading-tight tracking-tight mb-6"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              Googleビジネスプロフィール<br />写真投稿・管理戦略
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              Googleビジネスプロフィールに掲載する写真は、ユーザーの来店判断に直結するとともに、
              MEO順位にも重要な影響を与えます。写真の種類・品質・更新頻度を正しく管理することで、
              競合との差別化と検索上位表示を同時に実現できます。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_21_48.jpg"
            alt="スマートフォンで店舗写真を撮影する女性・MEO写真投稿"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.18)" }} />
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What You Will Learn
            </p>
            <h2
              className="font-black text-[28px] mb-10"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-4">
              {[
                "写真投稿がGoogleマップの順位（MEO）に与える具体的な影響メカニズム",
                "外観・内装・商品・スタッフなど投稿すべき写真カテゴリの全体像",
                "業種別に異なる写真戦略と優先すべき撮影テーマの選び方",
                "よくある写真管理の失敗パターンと原因・改善アクションの一覧",
                "初回大量投稿から月次継続管理まで実践的な10ステップフロー",
                "インサイトで追うべきKPIと競合比較を活用した改善サイクルの回し方",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 font-bold" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 写真投稿がMEO順位に与える影響 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Impact on MEO
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              写真投稿がMEO順位に与える影響
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                Googleは写真が多く・定期的に更新されているビジネスを「アクティブで信頼性の高いビジネス」として評価します。
                写真枚数・投稿頻度・品質はいずれもGoogleのローカル検索アルゴリズムの「知名度（Prominence）」と
                「関連性（Relevance）」評価に影響します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                Googleの公式情報によると、写真が掲載されているビジネスはそうでないビジネスと比べて
                ウェブサイトへのクリック数や電話問い合わせが多い傾向にあるとされています。
                ユーザー行動の観点からも写真の充実は来店転換率に直結します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                さらに、Googleの画像認識AI（Vision API）は写真のコンテンツを解析しており、
                料理・内装・外観などのカテゴリ分類に活用されています。
                適切なカテゴリの写真を適切な枚数投稿することが、
                検索クエリとのマッチング精度向上にもつながります。
              </p>
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Common Issues
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              よくある課題と原因
            </h2>
            <div className="max-w-3xl">
              {issueItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <h3
                      className="font-semibold text-[15px] mb-2"
                      style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 投稿すべき写真の種類 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Photo Types
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              投稿すべき写真の種類
            </h2>
            <div className="max-w-3xl">
              {photoTypes.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.num}
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-[15px] mb-2"
                      style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section C: 業種別の活用ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              By Industry
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              業種別の活用ポイント
            </h2>
            <div className="max-w-3xl">
              {industryItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-[15px] mb-2"
                      style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
                    >
                      {item.industry}
                    </h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.note}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 写真の品質と更新頻度 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Quality &amp; Frequency
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              写真の品質と更新頻度
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                月2枚以上の定期的な写真投稿を推奨しています。理想的には月4〜6枚のペースで継続することで、
                Googleのアクティビティ評価を常に高い状態に保てます。曜日・時間帯を決めてルーティン化することで
                継続しやすくなります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                写真の品質基準としては、解像度720px×720px以上・ファイルサイズ10KB〜5MBが推奨されています。
                ピンぼけ・暗すぎる写真・過度なフィルター加工はGoogleに低品質と判断されることがあります。
                自然光や適切な照明を活用し、清潔感のある環境で撮影することが基本です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                季節・イベントに合わせた写真更新も効果的です。クリスマスメニュー・夏の新商品・年末年始の
                装飾など、タイムリーな写真を追加することでユーザーの再訪問を促し、
                Googleにも継続的な活動を示すことができます。
              </p>
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
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              実装・改善フロー
            </h2>
            <div className="max-w-3xl">
              {flowItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <h3
                      className="font-semibold text-[15px] mb-2"
                      style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
                    >
                      {item.title}
                    </h3>
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
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              成果を見るための指標
            </h2>
            <div className="max-w-3xl">
              {kpiItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <h3
                      className="font-semibold text-[15px] mb-2"
                      style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* スマートフォンで撮影するコツ */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Shooting Tips
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              スマートフォンで撮影するコツ
            </h2>
            <div className="max-w-3xl">
              {[
                { title: "明るい場所・時間帯を選ぶ", body: "自然光が最も美しく映ります。窓際や屋外での撮影が可能な場合は積極的に活用してください。室内では照明を増やすか、撮影用の簡易ライトを使用することで品質が上がります。フラッシュは影が強くなりすぎるため、できるだけ使用を避けましょう。" },
                { title: "グリッド線を表示して水平を保つ", body: "カメラ設定からグリッド線（3×3）を表示することで、水平・垂直の基準が分かりやすくなります。傾いた写真はプロフェッショナルな印象を損ないます。料理写真は真上から、外観写真は水平に近い角度が一般的に見栄えの良い構図です。" },
                { title: "ピントを被写体に合わせる", body: "撮影前に画面内の被写体部分をタップしてピントを合わせます。オートフォーカスに任せると意図しない場所にピントが合うことがあります。特に料理・商品の接写では、主役となる部分を明確にタップしてからシャッターを切ることが重要です。" },
                { title: "撮影後の簡単な調整", body: "スマートフォン標準の写真編集機能で明るさ・コントラスト・彩度を調整するだけで品質が大きく向上します。「明るさ+10〜20」「コントラスト+5〜10」「彩度+5〜10」が食品・内装写真の目安です。過度な加工は実際の店舗・商品との乖離を生むため控えめに。" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-[15px] mb-2"
                      style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="写真投稿・管理に関するよくある質問" bgColor="#F9F8F5" />

        <RelatedPages links={relatedLinks} />

        <PageContactCTA
          heading="写真投稿・GBP管理のご相談はサイプレスへ"
          body="写真投稿の代行・定期管理から撮影ガイドラインの整備まで、サイプレスのMEO専門チームが貴社のGoogleビジネスプロフィールを最適化します。まずは現状診断からご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}

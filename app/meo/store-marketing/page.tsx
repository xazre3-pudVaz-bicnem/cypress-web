import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "店舗集客マーケティング｜MEO×SNS×Web連携で来店数を増やす｜株式会社サイプレス",
  description:
    "店舗集客マーケティングの全体戦略を解説。MEO・SNS・ウェブサイトを組み合わせた実店舗集客設計、業種別の活用ポイント、効果測定KPIまで詳しく紹介。",
  keywords: [
    "店舗集客マーケティング",
    "MEO集客",
    "SNS集客",
    "実店舗マーケティング",
    "来店促進",
    "口コミ集客",
    "リピーター施策",
    "LINE公式アカウント集客",
  ],
  openGraph: {
    title: "店舗集客マーケティング｜MEO×SNS×Web連携で来店数を増やす｜株式会社サイプレス",
    description:
      "MEO・SNS・ウェブサイトを組み合わせた実店舗集客マーケティングの全体設計をわかりやすく解説します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/store-marketing" },
};

const visitMeasures = [
  {
    title: "電話発信ボタンの活用",
    body: "GoogleビジネスプロフィールとGoogleマップには電話番号が表示され、スマートフォンからワンタップで電話をかけられます。この「電話発信ボタン」のクリック数はGBPインサイトで計測でき、MEO対策の重要なKPIのひとつです。電話番号が正確に設定されているかを確認し、営業時間内は迅速に対応できる体制を整えることが来店転換率の向上に直結します。",
  },
  {
    title: "経路案内の最適化",
    body: "Googleマップの「経路案内」ボタンは、初めて来店する顧客にとって最も重要な機能のひとつです。GBPに正確な住所・ピン位置を設定するとともに、ウェブサイトにもGoogleマップを埋め込み、電車でのアクセス・駐車場情報・周辺の目印を明記することで初回来店のハードルを大幅に下げられます。",
  },
  {
    title: "予約システムとの連携",
    body: "GoogleビジネスプロフィールにはHotpepperBeautyやTablelogなど業種別予約システムとの連携ボタンを設置できます。「今すぐ予約」ボタンをプロフィールに追加することで、Googleマップ上から直接予約できる導線を作れます。予約ページへのリンクをGBPの投稿やQ&A欄にも掲載し、複数の経路から予約しやすい環境を整えます。",
  },
  {
    title: "写真で来店意欲を高める",
    body: "外観写真（昼・夜・季節ごと）・内装・商品・サービス提供の様子・スタッフなど、来店後のイメージが湧く写真を戦略的に掲載します。「個室がある」「駐車場が広い」「子連れOK」といった強みを写真で伝えることで、ターゲット顧客の来店意欲を高められます。競合との差別化ポイントを写真で明示することが重要です。",
  },
  {
    title: "最新情報投稿でリピーターを増やす",
    body: "季節限定メニューの案内・お得なキャンペーン情報・新サービスの紹介・イベント告知などを定期投稿することで、一度来店した顧客が再度プロフィールを見たときに「また行きたい」と感じる情報を提供します。週1〜2回の継続的な投稿が、アルゴリズム評価とリピート来店の両方を改善します。",
  },
];

const challenges = [
  {
    title: "MEOだけに頼りすぎている（SNS・Webとの連携なし）",
    body: "Googleマップからの流入だけを集客の柱にしている店舗は多いですが、SNSやウェブサイトとの連携がなければ見込み顧客の育成機会を大量に失っています。MEOで発見された顧客がSNSやサイトで信頼性を確認するという行動は一般的であり、各チャネルが相互補完できていない場合、転換率が著しく下がります。",
  },
  {
    title: "来店動機の把握ができていない",
    body: "「なぜ来店したのか」を把握しない限り、効果的な施策を継続する根拠が持てません。口頭で来店経路を尋ねる・予約フォームに流入元を追加する・GBPインサイトと実来店数を照合するなど、定性・定量の両面で来店動機を継続的に収集することが改善の起点になります。",
  },
  {
    title: "リピーター向け施策がない",
    body: "新規顧客獲得コストはリピーター維持コストの5〜7倍とも言われます。初回来店で満足した顧客を再来店につなげる仕組み（スタンプカード・フォローメール・SNSフォロー誘導・誕生日クーポンなど）がなければ、集客投資の回収効率が大幅に低下します。",
  },
  {
    title: "LINEやメルマガなどのリテンション施策なし",
    body: "来店客の連絡先を取得して定期的にコミュニケーションを取る仕組みは、リピート率向上の最重要施策のひとつです。LINE公式アカウントへの誘導・メールマガジンの配信・DM通知の活用など、関係性を維持するチャネルを持たない店舗は、競合に顧客を奪われやすい構造を持っています。",
  },
  {
    title: "競合の集客方法を研究していない",
    body: "同じ地域で成功している競合店がどのようなSNS発信・口コミ管理・キャンペーン施策を行っているかを定期的に調査することは、自店の戦略改善に直結します。競合分析を行わないまま施策を継続しても、差別化ポイントが薄れ相対的な集客力が低下し続けます。",
  },
  {
    title: "地域イベントへの出展・連携なし",
    body: "地域の祭り・マルシェ・商店街イベント・異業種交流会などへの参加は、オフラインでの認知拡大と口コミ生成につながります。デジタル施策だけに特化するとリーチできない層も存在しており、オンラインとオフラインを組み合わせた地域密着の集客設計が長期的な顧客基盤の拡大に有効です。",
  },
  {
    title: "季節・時間帯別の集客が考えられていない",
    body: "飲食店のランチ需要・美容室の週末集中・整骨院の夜間需要など、業種ごとに繁閑の波があります。閑散期に向けた先手施策（早割クーポン・オフシーズン限定メニュー・朝活イベントなど）を設計していない店舗は、売上の平準化ができずキャッシュフローが不安定になりがちです。",
  },
  {
    title: "SNSフォロワーが実際の来店につながっていない",
    body: "フォロワー数が増えても来店に結びつかない場合、発信内容と来店動機のギャップが原因であることがほとんどです。「映える投稿」だけでは来店行動を促せません。場所・営業時間・予約リンク・来店特典など来店行動を後押しする情報を投稿に組み込む設計が必要です。",
  },
  {
    title: "予約・注文システムとマーケティングが分断されている",
    body: "予約システムで顧客データを取得しているにもかかわらず、マーケティング施策（リマインドDM・リピート促進クーポン・誕生日案内など）に活用できていない店舗は多いです。システム間の連携により顧客行動データを集客施策に活かすことで、費用対効果を大幅に改善できます。",
  },
  {
    title: "効果測定ができていない",
    body: "「なんとなく来店が増えた気がする」という感覚的な評価では、施策の改善も継続判断もできません。GBPインサイト・GA4・予約システムのデータを組み合わせて、施策ごとの貢献度を可視化する仕組みを整えることが、持続的な集客改善の土台になります。",
  },
];

const industries = [
  {
    name: "飲食店",
    point:
      "ランチとディナーでターゲット顧客と集客チャネルが異なります。ランチはGoogleマップ「近くの飲食店」検索・クーポン配布・会社員向けSNS投稿が効果的です。ディナーは記念日・デート・宴会需要に特化した写真投稿・口コミ管理・予約促進が重要になります。時間帯別の投稿スケジューリングで来店数の平準化を図ります。",
  },
  {
    name: "美容室",
    point:
      "新規顧客・リピーター・紹介の3軸で施策を分けることが重要です。新規にはビフォーアフター投稿・GBP写真充実・口コミ返信対応が効果的です。リピーターにはLINE公式アカウントによるキャンペーン案内・誕生日クーポンが有効です。紹介施策として「友人紹介で500円OFF」などの仕組みをSNSで告知することで口コミ連鎖を生み出せます。",
  },
  {
    name: "歯科",
    point:
      "予防歯科と定期検診の促進がリピート率向上の核心です。「半年ぶりの検診を」というLINEリマインダーや、子ども向け定期検診の案内投稿など、再診を自然に促す仕組みが重要です。また、虫歯・歯周病・ホワイトニングなど症状・ニーズ別のコンテンツを充実させ、検索流入を増やすことで新規患者の獲得にもつながります。",
  },
  {
    name: "整骨院",
    point:
      "慢性疾患（肩こり・腰痛・膝痛など）の患者はリテンション設計が売上の根幹です。初回来院後のフォローアップLINEメッセージ・施術間隔の目安案内・症状改善の投稿コンテンツで「また来院しなければ」という意識を継続的に醸成します。季節の変わり目に合わせた「肩こり悪化しやすい時期」などのタイムリー発信も効果的です。",
  },
  {
    name: "リフォーム会社",
    point:
      "紹介割引と口コミ連動の施策が特に効果的です。施工事例をビフォーアフターで詳しく掲載し、「ご紹介で5万円分の追加工事無料」などの具体的な紹介インセンティブをウェブサイト・SNSで告知します。地域ごとの施工実績をGBP投稿や地域ページで発信することで、「地域での実績がある」という信頼性も同時に向上します。",
  },
  {
    name: "小売店",
    point:
      "季節イベントとポイントカードの連動が来店頻度向上に直結します。春夏秋冬それぞれのイベント（バレンタイン・ゴールデンウィーク・ハロウィン・クリスマスなど）に合わせた限定商品発信・ポイント2倍デーの告知をSNSとGBP投稿で行います。ポイントカードの電子化（アプリやLINEスタンプカード）により、顧客データの取得とリテンション施策の自動化も可能になります。",
  },
  {
    name: "学習塾",
    point:
      "体験授業の申込率と入塾率の改善が収益直結の指標です。体験授業をLPで詳しく説明し、GBP・SNS・Googleサーチから流入させるルートを整えます。「体験授業→無料面談→入塾」の導線上にある不安要素（料金・カリキュラム・先生の雰囲気など）を口コミや事例コンテンツで先回りして解消することで、体験申込から入塾までの転換率を高められます。",
  },
  {
    name: "クリニック",
    point:
      "再診率向上と健診案内の自動化が安定経営の鍵です。診察後のLINEによる次回予約リマインド・インフルエンザ予防接種シーズン前の案内・健康診断受診を促す投稿など、定期的な接点設計が重要です。患者の利便性向上（オンライン予約・スマホ問診）と情報発信（薬の飲み合わせQ&A・症状別コンテンツ）の両輪で信頼性と再来院率を高めます。",
  },
];

const flowSteps = [
  {
    title: "現状の集客経路分析",
    body: "GBPインサイト・GA4・予約システム・スタッフヒアリングを用いて、現在どのチャネルから何割の顧客が来店しているかを可視化します。数値で把握することで、強化すべき施策と改善すべき弱点が明確になります。",
  },
  {
    title: "ターゲット顧客ペルソナ設定",
    body: "年齢・居住エリア・来店目的・利用シーン・情報収集行動などを具体化したペルソナを作成します。「誰のために集客するか」を定義することで、SNS・コンテンツ・キャンペーンの方向性が統一されます。",
  },
  {
    title: "MEO基盤整備（GBP完全最適化）",
    body: "ビジネス情報の正確性確認・カテゴリ設定・写真充実・Q&A設置・口コミ返信体制の構築を行います。GBPはすべてのデジタル集客の起点となるため、最初に盤石な基盤を整えることが重要です。",
  },
  {
    title: "ウェブサイトとの連携",
    body: "GBPのURLとして設定するランディングページにGoogleマップ埋め込み・アクセス情報・予約ボタン・口コミ誘導を設置します。サイト内でもローカルSEOキーワードを意識したコンテンツを配置し、GBPとウェブサイトの相乗効果を最大化します。",
  },
  {
    title: "SNS選定と運用開始",
    body: "ターゲット顧客が最も使用するSNS（Instagram・X・TikTok・YouTube等）を選定し、週次投稿スケジュールを策定します。投稿内容は「来店動機になる情報（場所・メニュー・雰囲気・特典）」を軸に設計します。",
  },
  {
    title: "口コミ・紹介施策設計",
    body: "来店後の口コミ投稿依頼フロー・紹介割引・友人紹介キャンペーンの設計を行います。口コミは新規顧客の意思決定に最も大きく影響するため、自然に口コミが集まる仕組みを構造化することが重要です。",
  },
  {
    title: "LINE公式アカウント設定",
    body: "来店顧客にLINE友だち追加を促す導線（テーブルQRコード・レシート掲載・スタッフ案内）を設置します。初回登録特典・定期配信・セグメント別メッセージ設計により、リピート来店率の向上を図ります。",
  },
  {
    title: "季節キャンペーン計画",
    body: "年間カレンダーに沿って、繁忙期・閑散期それぞれのキャンペーンを事前に設計します。閑散期の来店促進クーポン・繁忙期の予約枠管理・イベント連動の限定商品など、季節ごとに来店動機を継続的に提供します。",
  },
  {
    title: "効果測定KPI設定",
    body: "施策ごとに「何を・どこで・どの頻度で測るか」を定義します。GBPインサイトの経路案内クリック数・SNSのプロフィールアクセス・LINE友だち追加数・予約数・来店者数などをダッシュボードで一元管理できる環境を整えます。",
  },
  {
    title: "月次改善サイクル確立",
    body: "毎月KPIを確認し、施策ごとの効果を評価してPDCAサイクルを回します。うまくいった施策の横展開・効果の薄い施策の見直し・新たなテスト施策の組み込みを継続することで、集客力が複利的に成長していきます。",
  },
];

const kpis = [
  {
    label: "来店者数（月間）",
    where: "POS・予約システム・スタッフ計測",
    desc: "全施策の最終成果指標。月次で前年同月比と前月比を必ず比較します。",
  },
  {
    label: "新規 vs. リピーター比率",
    where: "予約システム・POSデータ・スタッフヒアリング",
    desc: "新規が多ければ集客施策の効果、リピーターが多ければリテンション施策の評価ができます。",
  },
  {
    label: "GBP経由来店数",
    where: "GBPインサイト（経路案内・電話・ウェブサイトクリック数）",
    desc: "MEO施策の直接効果を測る指標。電話・経路案内・ウェブクリックの合計で評価します。",
  },
  {
    label: "SNS経由問い合わせ数",
    where: "Instagram/LINE DM・SNSのリンクからの問い合わせフォーム送信数",
    desc: "SNS運用の集客貢献度を定量化します。UTMパラメータを活用することで計測精度が上がります。",
  },
  {
    label: "口コミ・紹介経由来店数",
    where: "来店アンケート・スタッフへのヒアリング・予約フォームの流入元項目",
    desc: "口コミ施策や紹介キャンペーンの効果測定に使います。全体の来店数に占める割合の変化を追います。",
  },
  {
    label: "客単価",
    where: "POSシステム・会計データ",
    desc: "集客数を増やすだけでなく、アップセル・クロスセル施策の効果も合わせて評価できます。",
  },
  {
    label: "月次来店頻度（リピート率）",
    where: "予約システム・POSの顧客IDデータ",
    desc: "LINEやメルマガなどのリテンション施策の効果を測る最も直接的な指標です。",
  },
];

const faqItems = [
  {
    q: "飲食店以外の業種でも店舗集客マーケティングの効果はありますか？",
    a: "はい、Googleマップで検索されるすべての地域ビジネスに有効です。美容室・整骨院・歯科・クリニック・リフォーム会社・小売店・学習塾など、地域に根差したビジネスであれば業種を問わず高い集客効果が期待できます。業種によって口コミ件数や来店頻度の特性が異なりますので、業種に合わせた戦略を立てることが重要です。",
  },
  {
    q: "MEO単独と、MEO＋SNS＋Webの組み合わせでは成果に差がありますか？",
    a: "大きな差があります。MEOだけでは「発見」の機会を作れますが、信頼性の構築や来店動機の醸成はSNSやウェブサイトで担います。特に初めての顧客は「Googleマップで見つけ→SNSやサイトで詳細確認→来店」という行動パターンをとるため、各チャネルが連携していることで転換率が向上します。",
  },
  {
    q: "LINE公式アカウントはどのくらいの規模の店舗から導入すべきですか？",
    a: "月間来店者が50人以上いれば導入を検討する価値があります。無料プランでも月1,000通まで配信できるため、初期費用をかけずにリテンション施策を始められます。友だち追加の導線設計と配信コンテンツの質がリピート率向上の鍵です。",
  },
  {
    q: "開店したばかりですが、どの施策から始めるべきですか？",
    a: "まずGBP（Googleビジネスプロフィール）の完全最適化から始めることをお勧めします。情報を蓄積するほど評価が上がるため、開店前に作成・最適化し、開店と同時に口コミ獲得の仕組みを整えることで開店初月から集客効果を得られます。その後、Instagram等のSNS運用とLINE公式アカウントを並行して立ち上げます。",
  },
  {
    q: "来店数の増加はどのように計測できますか？",
    a: "GBPインサイトで「電話発信クリック数」「ウェブサイトクリック数」「経路案内クリック数」を計測できます。これらをPOS情報や予約システムのデータと組み合わせて分析することで、オンラインの行動と実際の来店数の相関を把握できます。来店アンケートで「どこで知りましたか？」を収集することも有効です。",
  },
  {
    q: "SNSのフォロワーが増えても来店につながりません。原因は何ですか？",
    a: "発信内容と来店動機のギャップが主な原因です。「映える写真」だけでは来店行動を促せません。場所・営業時間・予約リンク・来店特典など来店行動を後押しする情報を投稿に組み込む設計が必要です。ストーリーズでの定期的な場所案内・ハイライトへの基本情報追加も効果的です。",
  },
  {
    q: "口コミを自然に増やすにはどうすればいいですか？",
    a: "最も効果的なのは、来店後の満足した瞬間に口コミ投稿を依頼することです。「よかったら口コミをいただけますか？」とスタッフが直接お願いするか、領収書・テーブルポップ・LINEメッセージにQRコードを掲載する方法があります。投稿してもらいやすい環境（QRコードでGBPの口コミページへ直接誘導）を整えることが重要です。",
  },
  {
    q: "Googleの広告（ローカルキャンペーン）はMEOと何が違いますか？",
    a: "MEOはオーガニック検索での順位改善であり、広告費は発生しません。Googleローカルキャンペーンは有料広告で、地図上・検索結果上に「広告」として表示されます。両者は相互補完的で、MEOで自然検索の上位表示を確保しつつ、広告で即時リーチを拡大する組み合わせが効果的です。",
  },
  {
    q: "複数の店舗があります。どの店舗のMEO対策を優先すべきですか？",
    a: "まず各店舗の現状（順位・口コミ・インサイト指標）と競合状況を分析し、投資対効果が高い店舗から優先的に対応することをお勧めします。一般的に、現在5〜10位圏内の店舗は比較的少ない施策で上位3位に入れる可能性があります。当社では多店舗対応プランで効率的に複数店舗を改善します。",
  },
  {
    q: "リピーターを増やすために最も効果的な施策は何ですか？",
    a: "業種によって異なりますが、LINE公式アカウントを通じた定期的なコミュニケーションが最も汎用性が高いです。来店翌日のサンクスメッセージ・次回来店を促すクーポン・誕生日特典など、顧客一人ひとりに合わせた接点設計がリピート率向上につながります。",
  },
  {
    q: "季節・時間帯別の集客戦略はどのように立てればよいですか？",
    a: "まず過去1〜2年の来店データを月別・曜日別・時間帯別に分析し、繁閑のパターンを把握します。閑散期に向けた早割キャンペーン・オフシーズン限定メニュー・朝活イベントなどを事前に設計します。GBP投稿とSNSで告知することで、閑散期の来店数の底上げが可能です。",
  },
  {
    q: "地域イベントへの参加は集客に効果がありますか？",
    a: "地域の商圏内での認知拡大と口コミ生成に有効です。特に飲食・小売業では、地域マルシェや商店街イベントへの出展が新規顧客との接点を大量に生み出します。イベント参加の様子をSNSで発信することで、オフラインとオンラインの相乗効果も期待できます。",
  },
  {
    q: "予約システムとマーケティングを連携させるにはどうすればよいですか？",
    a: "予約システムが持つ顧客データ（来店日・頻度・メニュー履歴）をマーケティング施策に活用することで、セグメント別の案内が可能になります。「3ヶ月以上未来店の顧客に復帰クーポン」「特定メニュー利用者に関連提案」など、パーソナライズされた接触がリピート率向上につながります。",
  },
  {
    q: "競合の集客方法を調べるにはどうすればよいですか？",
    a: "Googleマップで競合店のGBPを確認し、投稿頻度・写真数・口コミ件数・評価点数を比較します。競合のSNSアカウントをフォローして発信内容・頻度・エンゲージメントを観察します。口コミの内容から競合の強み・弱みを分析し、自店の差別化戦略に活かすことが重要です。",
  },
  {
    q: "集客施策の効果はどのくらいの期間で出始めますか？",
    a: "MEOのGBP最適化は1〜2ヶ月で順位変動が現れ始めることが多いです。SNS運用は3〜6ヶ月で安定的な認知拡大につながります。LINE公式アカウントは友だち追加者が増えるにつれてリピート効果が積み上がっていきます。複数施策を組み合わせることで、短期・中期・長期の効果を並行して得られます。",
  },
  {
    q: "自分でMEO・SNS・LINE対策を行うことはできますか？",
    a: "GBPの基本設定やSNS投稿は自社でも実施可能です。しかし、効果的なキーワード選定・競合分析・データに基づくPDCAサイクル・各施策の連携設計は専門的な知識が必要です。初期設計だけでもプロに依頼し、運用は内製化するハイブリッド型が費用対効果を最大化しやすいです。",
  },
  {
    q: "美容室での紹介施策はどのように設計すればよいですか？",
    a: "「友人紹介で紹介者・被紹介者それぞれに500円OFF」など双方にメリットのある設計が基本です。紹介特典をLINEやSNSで発信し、来店時にスタッフが案内するオペレーションを定着させます。紹介件数を月次でトラッキングし、紹介率の高いスタイリストの接客をナレッジ化することも有効です。",
  },
  {
    q: "整骨院でリピート来院率を高めるにはどうすればよいですか？",
    a: "初回来院後の施術計画の丁寧な説明と、次回予約の促進が最も基本的な施策です。LINEによる施術間隔リマインド・症状改善の進捗確認メッセージ・自宅でできるストレッチ動画の提供など、来院外の接点設計がリテンションを高めます。季節の変わり目に合わせた健康情報の発信も有効です。",
  },
  {
    q: "歯科医院でMEO対策と集客を連動させるにはどうすればよいですか？",
    a: "「地域名＋歯科」「子ども 歯医者 地域名」など検索意図別のキーワードでGBPを最適化します。予防歯科・定期検診・ホワイトニングなど需要別のコンテンツをウェブサイトに整備し、GBPからサイトへの流入と予約完了までの導線を最適化します。患者向けのLINEリマインダーで定期検診の来院率を高めます。",
  },
  {
    q: "効果測定のダッシュボードはどのように作ればよいですか？",
    a: "Googleスプレッドシートにて、GBPインサイトのクリック数・GA4のオーガニック流入数・予約数・来店者数・SNSフォロワー数・LINE友だち数を月次でまとめるシートを作成するのが最もシンプルです。各KPIを前月・前年同月と比較できる形にすることで、施策ごとの効果検証と改善判断がしやすくなります。",
  },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策とは", desc: "MEO対策の基礎と全体戦略" },
  { href: "/meo/review-management", label: "口コミ管理・返信", desc: "高評価口コミを増やす仕組み" },
  { href: "/meo/google-business-profile", label: "Googleビジネスプロフィール", desc: "GBP最適化の完全ガイド" },
  { href: "/meo/local-seo", label: "ローカルSEO対策", desc: "地域検索での上位表示戦略" },
  { href: "/meo/map-ranking", label: "Googleマップ順位改善", desc: "マップパックの上位表示施策" },
  { href: "/meo/competitor-analysis", label: "競合分析", desc: "競合店のGBP・口コミを分析する" },
  { href: "/meo/photo-strategy", label: "写真戦略", desc: "来店意欲を高める写真掲載" },
  { href: "/meo/post-management", label: "投稿管理", desc: "GBP最新情報投稿の運用術" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金プラン" },
  { href: "/services/sns", label: "SNS運用代行", desc: "MEOと連動したSNS集客" },
  { href: "/services/line", label: "LINE公式アカウント運用", desc: "リピーター獲得の仕組み化" },
  { href: "/services/web-design", label: "ウェブサイト制作", desc: "集客につながるサイト設計" },
  { href: "/seo", label: "SEO対策", desc: "検索エンジン最適化の全体戦略" },
  { href: "/seo/local-content", label: "地域コンテンツSEO", desc: "地域特化コンテンツで上位表示" },
  { href: "/aio", label: "AIO対策", desc: "AI検索への最適化戦略" },
  { href: "/aio/eeat", label: "E-E-A-T強化", desc: "専門性・権威性・信頼性の構築" },
  { href: "/industry/restaurant", label: "飲食店のMEO対策", desc: "飲食店特化の集客施策" },
  { href: "/industry/beauty", label: "美容室のMEO対策", desc: "美容室の新規・リピート施策" },
  { href: "/industry/dental", label: "歯科のMEO対策", desc: "歯科医院の患者獲得戦略" },
  { href: "/industry/clinic", label: "クリニックのMEO対策", desc: "医療機関の集患マーケティング" },
  { href: "/area/tokyo", label: "東京のMEO対策", desc: "東京都内の店舗集客支援" },
  { href: "/area/osaka", label: "大阪のMEO対策", desc: "大阪府内の店舗集客支援" },
  { href: "/area/nagoya", label: "名古屋のMEO対策", desc: "名古屋市内の店舗集客支援" },
  { href: "/contact", label: "無料相談・お問い合わせ", desc: "店舗集客のご相談はこちら" },
];

export default function StoreMarketingPage() {
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
              <span style={{ color: "#0F172A" }}>店舗集客マーケティング</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Store Marketing
            </p>
            <h1
              className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              店舗集客マーケティング
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              MEO・SNS・ウェブサイトを組み合わせた実店舗集客マーケティングの全体戦略を解説します。
              「発見される」だけでなく「来店したくなる」「また来たくなる」仕組みを設計し、
              来店数・リピート率・客単価を継続的に改善します。
            </p>
          </div>
        </section>

        {/* Full-width image after hero */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_21_48.jpg"
            alt="店舗集客マーケティング MEO×SNS×Web"
            fill
            className="object-cover"
            sizes="100vw"
          />
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
                "MEO・SNS・Webを組み合わせた店舗集客マーケティングの全体像と設計思想",
                "実店舗が抱える集客の課題とその根本原因の特定方法",
                "飲食店・美容室・歯科・整骨院など業種別の具体的な活用ポイント",
                "現状分析からLINE公式アカウント設定・季節施策まで10ステップの実装フロー",
                "来店者数・リピート率・SNS経由問い合わせ数など成果を測る7つのKPI",
                "よくある失敗パターンと、各施策が成果につながるための設計の考え方",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 font-bold text-[16px]" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 来店につながるMEO設計 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              MEO to Visit
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              来店につながるMEO設計
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                地域名＋業種で検索したユーザーの多くは、高い購買意欲を持ってその場で行動を起こします。
                このような意欲の高いユーザーに対して、Googleマップでの上位表示は最も直接的な集客アプローチです。
                MEOは「知ってもらう」だけでなく「来店してもらう」ところまでの設計が必要です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                来店転換率を高めるために重要なのは「ユーザーの不安を取り除く」ことです。
                初めて訪れる店舗に対して、ユーザーは「どんな雰囲気か」「本当に自分に合うか」
                「アクセスは便利か」「予約は必要か」など多くの疑問を持ちます。
                写真・口コミ・営業時間・アクセス情報・Q&Aを充実させることで、
                これらの不安を事前に解消し、来店ハードルを大幅に下げることができます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                地域検索の大半はスマートフォンから行われており、
                電話ボタン・経路案内ボタン・予約ボタンがワンタップで使えることが
                来店転換率に直結します。モバイルファーストの視点での導線設計が不可欠です。
              </p>
            </div>
          </div>
        </section>

        {/* 来店導線の最適化 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Visit Optimization
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              来店導線の最適化
            </h2>
            <div className="max-w-3xl">
              {visitMeasures.map((item, i) => (
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
              Common Challenges
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              よくある課題と原因
            </h2>
            <div className="max-w-3xl">
              {challenges.map((item, i) => (
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
              {industries.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0F172A" }}>{item.name}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.point}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 2-col: 来店導線設計 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden" style={{ height: "360px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_18_03.jpg"
                  alt="来店導線設計・デジタルマーケティング"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  Integrated Strategy
                </p>
                <h2
                  className="font-black text-[26px] mb-6"
                  style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
                >
                  チャネルを統合した集客設計
                </h2>
                <div className="space-y-4">
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    MEO・SNS・ウェブサイト・LINE公式アカウントはそれぞれ独立した施策ではなく、顧客の購買プロセスに沿って役割が異なります。「発見（MEO）→信頼形成（SNS・サイト）→来店行動→リテンション（LINE）」という流れを設計することで、集客効果が相乗的に高まります。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    地域検索の大半がスマートフォンから行われるため、モバイルファーストの視点で「ワンタップで来店行動できる」設計が不可欠です。予約・電話・経路案内のすべての導線をモバイルで最適化します。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    写真・口コミ・Q&Aを充実させて来店前の不安を解消することと、リテンション施策でリピート率を高めることを同時に設計することで、新規獲得とリピート拡大の両輪が回り始めます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section D: 実装・改善フロー */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
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
              {flowSteps.map((item, i) => (
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
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              KPI & Measurement
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              成果を見るための指標
            </h2>
            <div className="max-w-3xl">
              {kpis.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-1" style={{ color: "#0F172A" }}>{item.label}</h3>
                    <p className="text-[12px] font-semibold mb-2" style={{ color: "#c4b89a" }}>
                      計測場所：{item.where}
                    </p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="店舗集客マーケティングに関するよくある質問" bgColor="#F9F8F5" />

        <RelatedPages links={relatedLinks} />

        <PageContactCTA
          heading="店舗集客マーケティングのご相談はサイプレスへ"
          body="MEO・SNS・LINE公式アカウントを組み合わせた実店舗集客戦略を専門チームがトータルサポートします。現状の集客経路分析から施策設計・実装・効果測定まで一貫して対応します。"
        />
      </main>
      <Footer />
    </>
  );
}

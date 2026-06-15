import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Googleビジネスプロフィール最新情報投稿（Googleポスト）戦略｜MEO対策｜株式会社サイプレス",
  description:
    "Google投稿（GBP投稿）の活用でMEO順位と集客を改善。最新情報・イベント・キャンペーン投稿の使い分けと、地域名・キーワードを活かした投稿文の書き方を解説。週1回以上の投稿でGoogleに評価されるアクティブなビジネスへ。",
  keywords: ["Google投稿", "GBP投稿", "Googleビジネスプロフィール投稿", "MEO投稿", "Googleマップ投稿", "最新情報投稿"],
  openGraph: {
    title: "Googleビジネスプロフィール最新情報投稿（Googleポスト）戦略｜MEO対策｜株式会社サイプレス",
    description: "Google投稿の種類・使い方・MEOへの影響を徹底解説。週1回の投稿が上位表示の鍵。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/google-post" },
};

const postTypes = [
  {
    num: "01",
    title: "最新情報投稿（週1回以上推奨）",
    body: "最も汎用性が高い投稿タイプです。新商品のご案内・スタッフ紹介・季節のメッセージ・業務連絡など、あらゆる内容に対応できます。期限がなく常時表示されるため、最低週1回の更新が「アクティブなビジネス」としてのGoogleからの評価維持につながります。投稿には画像を必ず添付し、地域名・サービスキーワードを自然に盛り込みます。",
  },
  {
    num: "02",
    title: "イベント投稿（期間・内容）",
    body: "開始日〜終了日を設定できる期間限定の投稿タイプです。地域イベントへの参加・展示会・セミナー開催・記念日イベントなどに最適です。イベント期間中は検索結果に目立つ形で表示されることがあり、クリック率を高める効果があります。タイトル・詳細・参加方法・日時を明確に記述し、来店・申し込みへの動線を整えます。",
  },
  {
    num: "03",
    title: "商品・サービス投稿",
    body: "特定の商品・サービスにフォーカスした投稿です。価格・説明・写真を設定でき、GBPの商品セクションと連動させることができます。主力商品・季節限定メニュー・新サービスのプロモーションに活用します。「今月のおすすめ」として定期的に更新することで、来店頻度の低い顧客への再接触にもなります。",
  },
  {
    num: "04",
    title: "キャンペーン・セール告知",
    body: "期間限定のキャンペーン・割引・特典情報をユーザーに告知できます。クーポンコードや特典の詳細を記載し、来店・問い合わせへの明確なCTAを設置します。「地域の方限定」「初回来店特典」など地域性や限定性を強調することで、ローカル検索ユーザーの反応率が高まります。終了日の設定を忘れずに行うことで、期限切れ情報の表示を防げます。",
  },
];

const issueItems = [
  {
    num: "01",
    title: "投稿を一度もしたことがない",
    body: "GBPの投稿機能をまったく使っていないビジネスはアクティビティ評価が低くなります。Googleは定期的に情報発信するビジネスをより信頼性が高いと評価するため、投稿ゼロの状態はMEO順位において大きなハンデとなります。まず1本投稿することからはじめ、週1回のルーティンを確立することが先決です。",
  },
  {
    num: "02",
    title: "投稿が不定期・更新が止まっている",
    body: "かつては投稿していたが数ヶ月止まっているケースも問題です。Googleは継続的なアクティビティを重視するため、更新が長期間止まると評価が下がるリスクがあります。月間の投稿計画をあらかじめ作成しておき、ネタ切れになりにくい投稿テーマのストックを常に用意しておくことが継続の鍵です。",
  },
  {
    num: "03",
    title: "テキストのみで写真がない",
    body: "写真なしのテキストだけの投稿はユーザーの目を引きにくく、クリック率が低下します。Googleも画像付き投稿を優遇する傾向があります。投稿の際は必ず関連する写真を1枚以上添付することを鉄則とし、撮影済み写真のストックを日頃から確保しておくことで投稿のたびに撮影する手間を省けます。",
  },
  {
    num: "04",
    title: "キーワードを意識していない投稿",
    body: "投稿内容がユーザーに向けた情報発信になっているが、検索エンジンへの最適化が意識されていないケースがあります。投稿本文に地域名・業種キーワード・サービス名を自然な形で含めることで、関連検索クエリへのマッチング率が向上します。キーワードの詰め込みは避け、読みやすさを保ちながらキーワードを組み込む技術が求められます。",
  },
  {
    num: "05",
    title: "CTA（行動喚起）ボタンを設定していない",
    body: "投稿にCTAボタン（予約・電話・ウェブサイト・詳細など）を設定していないと、興味を持ったユーザーが次のアクションに迷います。CTAボタンはユーザーの来店・問い合わせへの橋渡し役です。投稿ごとに目的に合ったCTAを設定することで、投稿からの実際のコンバージョンが改善されます。",
  },
  {
    num: "06",
    title: "キャンペーン投稿の期間設定ミス",
    body: "終了日を設定し忘れたり誤った日付を設定してしまうと、キャンペーン終了後も古い情報が表示され続けてユーザーに混乱を与えます。逆に開始日前に投稿が非表示になるケースも起こります。投稿時のプレビュー確認を習慣化し、特にキャンペーン・イベント投稿は期間設定を二重確認してください。",
  },
  {
    num: "07",
    title: "投稿内容が会社目線のみ",
    body: "「新商品を発売しました」「スタッフを採用しました」など会社の都合を発信するだけでは、ユーザーにとっての価値が伝わりません。「なぜあなたに役立つか」「どんな問題を解決するか」というユーザー目線の視点を加えることで、投稿の反応率が向上します。ユーザーが検索している課題・欲求に寄り添った文章を意識してください。",
  },
  {
    num: "08",
    title: "投稿フォーマットの使い分けが不明",
    body: "最新情報・イベント・特典・商品の4タイプを状況に応じて使い分けることが重要ですが、常に「最新情報」だけで投稿している事業者も多くいます。期間のあるものはイベント・キャンペーン投稿を使うことで、Googleマップ上での表示形式が変わり目立ちやすくなります。各フォーマットの特性を理解して使い分けることで露出が増します。",
  },
  {
    num: "09",
    title: "投稿の効果測定をしていない",
    body: "投稿してもインサイトで閲覧数やクリック数を確認していないため、何が効果的かが分からず改善できないサイクルに陥っています。月次でデータを集計し、閲覧数の多い投稿のテーマ・フォーマット・曜日・画像の特徴を分析することで、次の投稿戦略に反映できる学びが蓄積されます。",
  },
  {
    num: "10",
    title: "季節・地域イベントへの対応なし",
    body: "年末年始・バレンタイン・お盆・地域の祭りや行事など、ユーザーが検索する機会が増えるタイミングに合わせた投稿を行っていないビジネスは機会損失しています。年間の投稿カレンダーをあらかじめ作成し、季節・イベントに合わせたコンテンツを計画的に準備することで、タイムリーな情報発信が実現します。",
  },
];

const industryItems = [
  {
    industry: "飲食店",
    note: "日替わりランチメニュー・週替わりディナーコース・季節メニューの告知を週次で投稿する。地域の祭りや連休に合わせたキャンペーン投稿も効果的。写真は料理のアップとテーブルセッティングの両方を用意しておく。",
  },
  {
    industry: "美容室・ネイルサロン",
    note: "季節限定カラー・新メニュー・スタッフの施術実績を定期投稿する。「春のイメチェンキャンペーン」などシーズナルな特典投稿でビフォーアフター写真を掲載すると来店動機が生まれる。スタッフ紹介投稿は個人指名の促進にも役立つ。",
  },
  {
    industry: "歯科・クリニック",
    note: "予防歯科の豆知識・新しい診療メニューの案内・休診のお知らせを定期投稿する。患者の不安を解消するコラム形式の投稿はエンゲージメントが高い。季節性の多い花粉症・インフルエンザ予防など健康情報も来院動機に直結する。",
  },
  {
    industry: "整骨院・整体院",
    note: "肩こり・腰痛・スポーツ障害など季節別の健康コラムを週次投稿する。「初回体験割引」などのキャンペーン投稿に予約CTAを設定することで直接予約につなげられる。施術メニューの詳細解説投稿も検索クエリとのマッチングに寄与する。",
  },
  {
    industry: "リフォーム・工務店",
    note: "施工事例を写真付きで定期投稿する。春・秋の外壁塗装シーズンや年末の大掃除前にリフォーム提案投稿を行うことでシーズン需要を取り込める。「無料見積もり実施中」などのキャンペーン投稿にCTAを設定して問い合わせへつなぐ。",
  },
  {
    industry: "不動産",
    note: "新着物件情報・地域の市場動向・購入・賃貸に関する豆知識を週次投稿する。「〇〇駅徒歩5分の新着物件」のように地域名・駅名を含めた投稿はローカル検索との相性が良い。来店予約CTAを設定して相談来店につなぐ導線を作る。",
  },
  {
    industry: "小売店",
    note: "セール情報・新商品入荷・季節のおすすめ商品を週次で投稿する。「数量限定」「今週のみ」など限定性のある表現が来店を促しやすい。商品の使い方・コーディネート提案などコンテンツ型の投稿はエンゲージメントが高まる。",
  },
  {
    industry: "学習塾",
    note: "合格実績・体験授業の案内・入試情報・勉強法コラムを月次計画で投稿する。「春期講習受付開始」「夏期講習早割」などシーズナルなキャンペーン投稿は問い合わせ増に直結する。保護者向けと生徒向けで投稿のトーンを使い分けることも有効。",
  },
];

const flowItems = [
  { num: "01", title: "投稿タイプの理解", body: "最新情報・特典（キャンペーン）・イベント・商品の4タイプそれぞれの表示方法と有効期間を把握する。目的に応じた正しいタイプを選ぶことが露出の最大化につながる。" },
  { num: "02", title: "年間投稿カレンダーの作成", body: "1〜12月の季節行事・地域イベント・業界イベントを洗い出し、投稿テーマをカレンダーに落とし込む。4週間先までの投稿テーマを常に確定しておくことで準備が計画的に進む。" },
  { num: "03", title: "週次投稿テーマの決定", body: "カレンダーに基づき当週の投稿テーマを1〜2件確定する。「業種・地域・ユーザーの悩み・季節感」を組み合わせたテーマ設定が検索クエリとのマッチングを高める。" },
  { num: "04", title: "写真の選定・撮影", body: "投稿テーマに合った写真を既存ストックから選定するか新規撮影する。GBPの推奨サイズ（1200×900px以上）に合わせてクロップしておく。複数枚候補を用意しておくとA/Bテストに活用できる。" },
  { num: "05", title: "本文の作成（キーワード含む）", body: "地域名・業種・サービスキーワードを冒頭に自然な形で盛り込む。ユーザーへの行動喚起（来店・予約・問い合わせ）を最後の一文で明確に示す。AIツールで下書きを生成し、ブランドトーンに合わせて手直しする方法が効率的。" },
  { num: "06", title: "CTAボタンの設定", body: "投稿の目的に合ったCTAボタン（予約する・詳細はこちら・電話する・購入する）を設定する。CTAの設定忘れは機会損失の原因になるため、投稿前チェックリストに必ず含める。" },
  { num: "07", title: "投稿の実行", body: "GBP管理画面またはスマートフォンアプリから投稿する。イベント・キャンペーン投稿は開始日・終了日を必ず確認してから公開する。投稿後はGoogleマップで実際の表示を確認する。" },
  { num: "08", title: "インサイトの確認", body: "投稿から7〜14日後にGBPインサイトで閲覧数・クリック数・CTAタップ数を確認する。データは月次でスプレッドシートに記録して時系列比較できるようにしておく。" },
  { num: "09", title: "反応の良い投稿パターンの分析", body: "閲覧数・CTAタップ数が高かった投稿のテーマ・曜日・時間帯・写真の種類・文字数を記録し傾向を把握する。「勝ちパターン」を特定して次月の投稿計画に反映させる。" },
  { num: "10", title: "次月計画への反映", body: "分析結果をもとに翌月の投稿カレンダーを更新する。効果の低かったテーマ・フォーマットは見直し、反応の良いパターンを増やすように調整することでPDCAを回す。" },
];

const kpiItems = [
  { num: "01", title: "月間投稿数", body: "GBP管理画面の投稿タブで確認。週1回を最低ラインとして月4〜8件を目標に管理する。" },
  { num: "02", title: "投稿閲覧数（ビュー数）", body: "GBPインサイトの投稿セクションで各投稿の閲覧数を確認。月次平均を算出して推移を追跡する。" },
  { num: "03", title: "投稿からのウェブサイトクリック数", body: "インサイトのウェブサイトクリック数を確認。投稿経由でどれだけサイトへの流入があるかを把握する。" },
  { num: "04", title: "投稿CTAタップ数", body: "各投稿のCTAボタン（予約・電話・詳細）タップ数をインサイトで確認。CTAの種類別に効果を比較して最適なCTA設定を見つける。" },
  { num: "05", title: "投稿頻度の継続率", body: "計画した週次投稿が実際に実行できているか達成率を管理する。継続率が下がっている場合は投稿プロセスを見直す。" },
  { num: "06", title: "キャンペーン投稿の問い合わせ数", body: "キャンペーン投稿の公開期間中と終了後の問い合わせ数を比較して効果を測定する。投稿との相関が高い場合はキャンペーン投稿の頻度を高める判断材料となる。" },
  { num: "07", title: "競合比較投稿頻度", body: "競合上位3社の投稿頻度・フォーマット・テーマを月次でモニタリングする。自社の投稿頻度が競合を下回っている場合は増加させる優先度が高い。" },
];

const faqItems = [
  {
    q: "Google投稿はどのくらいの頻度で更新すればいいですか？",
    a: "最低でも週1回の投稿を推奨しています。更新頻度はGoogleのアクティビティ評価に直結し、長期間投稿がないビジネスは「非アクティブ」と判断される可能性があります。内容に困る場合は「今週のお知らせ」「スタッフ紹介」「季節のご挨拶」などルーティン化しやすいテーマを設けると継続しやすくなります。",
  },
  {
    q: "投稿に画像は必須ですか？",
    a: "必須ではありませんが、画像付き投稿はクリック率が大幅に向上します。画像付き投稿は画像なし投稿と比べてエンゲージメントが高い傾向があります。スマートフォンで撮影した写真でも、明るく鮮明であれば十分効果的です。投稿内容に関連した写真を1枚必ず添付することを習慣にしてください。",
  },
  {
    q: "投稿文にはどのようなキーワードを入れればいいですか？",
    a: "地域名（市区町村・駅名など）と業種・サービス名を自然な文脈で含めることが基本です。例：「渋谷の美容室○○では、今月からトリートメントメニューを追加しました」のように、不自然にキーワードを詰め込まず、読みやすい文章の中に組み込みます。ターゲットとする検索クエリを意識しながら書くことが重要です。",
  },
  {
    q: "AIを使って投稿文を作成することはできますか？",
    a: "ChatGPTやClaudeなどのAIツールを活用した投稿文作成は効率的です。「渋谷の美容室向けのGoogle投稿文を書いて。今月の新メニュー・季節感・来店促進のCTAを含めて」といったプロンプトで下書きを生成し、実際の店舗情報・固有名詞・価格などを追記・調整する使い方が実践的です。AIが生成した文章は必ず人の目でブランドトーンに合わせて修正してください。",
  },
  {
    q: "投稿の効果はどのように測定できますか？",
    a: "Googleビジネスプロフィールの「インサイト」からビュー数・クリック数・エンゲージメント数を確認できます。投稿種類別のパフォーマンスを比較し、反応が良い投稿の傾向（テーマ・曜日・時間帯・画像の種類）を把握することで、投稿戦略を継続的に改善できます。月次でデータを集計し、KPIとして管理することを推奨しています。",
  },
  {
    q: "最新情報投稿とイベント投稿はどう使い分けますか？",
    a: "最新情報投稿は期限のない汎用コンテンツに使います。イベント投稿は明確な開始日と終了日がある告知（キャンペーン・セール・開催イベント）に使います。イベント投稿は期間中に検索結果での表示が目立ちやすくなる場合があります。日時が明確なものはイベント投稿、継続的な情報は最新情報投稿と覚えておくと使い分けがしやすいです。",
  },
  {
    q: "Google投稿の有効期限はどのくらいですか？",
    a: "最新情報投稿は投稿から6ヶ月後に自動的に期限切れとなり、表示されなくなります。イベント・キャンペーン投稿は設定した終了日が来ると非表示になります。商品投稿は削除するまで表示が続きます。最新情報投稿は6ヶ月以内に再投稿または更新することで表示を維持できます。",
  },
  {
    q: "Google投稿はSEO（ウェブ検索）にも影響しますか？",
    a: "投稿本文に含まれるテキストはGoogleの検索クエリとのマッチング評価に活用されます。地域名・業種・サービスキーワードを含む投稿は、関連検索クエリへの関連性（Relevance）評価向上に間接的に貢献します。ただし投稿はGBPのアクティビティ評価への影響が主で、通常のウェブSEOとは別の仕組みとして理解してください。",
  },
  {
    q: "投稿の文字数はどのくらいが適切ですか？",
    a: "GBPの投稿文字数上限は1500文字です。推奨は300〜600文字程度で、ユーザーが読み切れる適切な情報量を心がけてください。長すぎる投稿は読まれない可能性があり、短すぎるとキーワードが入れにくくなります。冒頭の2〜3文でユーザーの興味を引き、その後に詳細を展開する構成が効果的です。",
  },
  {
    q: "スマートフォンアプリからも投稿できますか？",
    a: "はい、Googleマップのビジネスオーナー向けアプリまたはGoogleビジネスプロフィールのアプリから投稿できます。スマートフォンのカメラで撮影した写真をその場で添付して投稿できるため、外出先でのリアルタイム更新が容易です。ただしパソコンのブラウザからの方が細かい設定（CTA・期間設定）がしやすい場合があります。",
  },
  {
    q: "投稿内容に競合を意識した比較表現を使っても良いですか？",
    a: "他社を名指しした比較表現や根拠のない優位性の主張はGoogleのコンテンツポリシー違反や法律（景品表示法）に抵触するリスクがあります。「地域密着20年」「認定資格保有スタッフが対応」など自社の事実に基づいた強みの訴求にとどめることが適切です。誇大表現や保証表現も使用しないよう注意してください。",
  },
  {
    q: "投稿を予約・スケジュール設定できますか？",
    a: "GBPの標準機能には投稿スケジュール予約機能がありません。Googleが提供する一部の管理ツールや、承認されたサードパーティのMEO管理ツールを使うと、投稿の事前作成・スケジュール配信が可能になります。週次の投稿を効率化したい場合はこれらのツールの活用を検討してください。",
  },
  {
    q: "過去の投稿を編集・削除することはできますか？",
    a: "はい、GBP管理画面の投稿タブから過去の投稿を編集・削除することができます。情報が古くなった投稿・キャンペーン期限切れの投稿は削除または更新することを推奨します。古い情報が残り続けると、来店したユーザーに誤情報を与えてしまうリスクがあります。定期的な投稿棚卸しを習慣化してください。",
  },
  {
    q: "投稿代行を依頼する場合の注意点は？",
    a: "投稿代行を外部委託する場合は、自社のブランドトーン・禁止ワード・表現ガイドラインを文書化して共有することが重要です。投稿前に確認・承認フローを設けることで、意図しない投稿が公開されるリスクを避けられます。サイプレスではブランドガイドラインの策定から定期投稿の代行まで一括サポートしています。",
  },
  {
    q: "Google投稿とSNS（Instagram・X）の使い分けはどう考えますか？",
    a: "Google投稿はGoogleマップ・検索結果上での露出が目的で、地域検索ユーザーへの即時訴求に強みがあります。InstagramなどのSNSはフォロワーへのリーチとブランドイメージ構築が主な目的です。同じコンテンツをGoogle投稿とSNSに横展開することで作業効率を上げつつ、各プラットフォームに最適化した加工を加えることを推奨します。",
  },
  {
    q: "Google投稿を開始してからどのくらいで効果が出ますか？",
    a: "効果が出るまでの期間は業種・競合状況・投稿品質によって異なります。週1回の投稿を継続した場合、一般的に1〜3ヶ月程度でGBPのアクティビティ評価向上による影響が現れてくることが多いです。投稿単体の効果よりも、写真・口コミ・基本情報の整備と組み合わせることでMEO全体の改善速度が高まります。",
  },
  {
    q: "Google投稿のCTAボタンはどんな種類がありますか？",
    a: "現在選択できるCTAボタンの主な種類は「今すぐ予約」「オンラインで注文」「購入」「詳細はこちら」「登録」「電話する」などです。投稿の目的（来店予約・商品購入・問い合わせ・資料請求）に合わせて適切なCTAを選ぶことで、ユーザーの次のアクションへの移行率が高まります。",
  },
  {
    q: "複数店舗がある場合、投稿はどのように管理しますか？",
    a: "複数拠点のGBPを管理する場合は、Googleビジネスプロフィールのビジネスグループ機能または承認された一括管理ツールを活用することを推奨します。各店舗の投稿を個別に最適化することが理想ですが、本部作成のテンプレートをベースに店舗固有情報を加える方式が効率的です。サイプレスでは多店舗MEO管理のサポートも行っています。",
  },
  {
    q: "投稿にハッシュタグを使っても効果がありますか？",
    a: "GBPの投稿にハッシュタグを使用してもInstagramのような検索連動効果は現時点では確認されていません。むしろ不要なハッシュタグが本文の読みやすさを損なう可能性があります。投稿文内にキーワードを自然な形で組み込むことに集中し、ハッシュタグよりも地域名・サービス名の自然な言及を優先してください。",
  },
  {
    q: "Google投稿の管理に関してサイプレスに相談できますか？",
    a: "はい、サイプレスでは投稿戦略の設計から週次定期投稿の代行まで、Google投稿に関するMEO管理を一括してサポートしています。現在の投稿状況の診断・競合比較・年間カレンダー作成を含む初期コンサルティングも承っています。まずはお問い合わせフォームからご相談ください。",
  },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策", desc: "MEO対策の全体戦略" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "MEO対策の根幹ツール" },
  { href: "/meo/photo-posting", label: "写真投稿", desc: "GBP写真の種類と更新戦略" },
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

export default function GooglePostPage() {
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
              <span style={{ color: "#0d1b2a" }}>Google投稿</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              MEO Knowledge
            </p>
            <h1
              className="text-[40px] md:text-[52px] font-black leading-tight tracking-tight mb-6"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              Googleビジネスプロフィール<br />最新情報投稿（Googleポスト）戦略
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              Google投稿はGoogleビジネスプロフィール（GBP）から直接Googleマップ・検索結果に
              最新情報・イベント・キャンペーンを発信できる機能です。
              適切に活用することで、Googleからの評価向上と潜在顧客への直接的な訴求が両立できます。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_18_03.png"
            alt="スマートフォンとデジタルアイコン・Google投稿MEO対策"
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
                "Googleポスト（最新情報投稿）がMEO順位とユーザー行動に与える具体的な影響",
                "最新情報・イベント・キャンペーン・商品の4投稿タイプの違いと使い分け方",
                "投稿頻度・写真・キーワード・CTAの設定で失敗しないための実践ポイント",
                "業種別の投稿テーマ選定と年間カレンダー作成の考え方",
                "投稿を週次で継続するための10ステップの実装・改善フロー",
                "GBPインサイトで追うべきKPIと投稿効果の測定・改善サイクルの回し方",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 font-bold" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google投稿とは */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What is Google Post
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              Google投稿とは
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                Google投稿（Googleビジネスプロフィール投稿）は、ビジネスオーナーがGBP管理画面から
                最新情報・イベント・商品・キャンペーンなどを直接投稿できる機能です。
                投稿内容はGoogleマップのビジネス詳細ページや、ナレッジパネルに表示されます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                SNSの投稿と異なる点は、Googleの検索エコシステムの中に直接表示されることです。
                地域名を含む検索を行ったユーザーが、検索結果やGoogleマップ上で
                ビジネスの最新情報をリアルタイムに確認できます。集客の最前線であるGoogle上での
                コミュニケーション手段として非常に重要です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                投稿の有効期間は原則として最新情報投稿が6ヶ月、イベント・キャンペーン投稿は
                設定した終了日まで表示されます。定期的に新鮮なコンテンツを追加することが、
                ユーザーへの訴求力維持とMEO評価向上の両方に不可欠です。
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

        {/* 投稿の種類と使い方 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Post Types
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              投稿の種類と使い方
            </h2>
            <div className="max-w-3xl">
              {postTypes.map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
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

        {/* 投稿がMEO順位に影響する理由 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Why Posts Affect Ranking
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              投稿がMEO順位に影響する理由
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                Googleはアクティブに情報を更新しているビジネスをより信頼性が高いと評価します。
                投稿頻度はGBPのアクティビティスコアに影響し、これがローカル検索順位の「知名度（Prominence）」
                評価の一部となっています。長期間投稿がないビジネスは「休業中・非活動的」と判断されるリスクがあります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                また、投稿本文に含まれるテキストもGoogleの検索クエリとのマッチング判定に活用されます。
                地域名や業種キーワードを含む投稿を持つGBPは関連性が高いと評価される仕組みです。
                投稿文にターゲットキーワードを自然に組み込むことで、関連性（Relevance）評価も向上します。
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

        {/* 投稿文の書き方 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Writing Posts
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              投稿文の書き方と効率化
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                効果的な投稿文には3つの要素が必要です。①地域名・業種キーワードの自然な組み込み、
                ②ユーザーへの行動喚起（来店・予約・問い合わせ）、③タイムリーな情報（季節・イベント）です。
                冒頭の1〜2文でユーザーの興味を引き、3〜5文で内容を説明し、最後にCTAで締めくくる構成が基本です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                AIツール（ChatGPT・Claudeなど）を活用した投稿文の効率化も有効です。
                「業種・地域・投稿テーマ・ターゲット層」を指定したプロンプトで下書きを作成し、
                固有情報（価格・日時・スタッフ名）を追記する方法は、週1回の投稿継続を
                大幅に楽にします。ただし、AIが生成した文章は必ず実際のブランドトーンに合わせて
                加筆・修正してから投稿してください。
              </p>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="Google投稿（Googleポスト）に関するよくある質問" bgColor="#F9F8F5" />

        <RelatedPages links={relatedLinks} />

        <PageContactCTA
          heading="Google投稿の代行・運用管理はサイプレスへ"
          body="週1回以上の定期投稿を継続することがMEO評価維持の鍵です。投稿代行・運用管理から投稿戦略の設計まで、サイプレスのMEO専門チームが貴社のGBPを継続的にサポートします。"
        />
      </main>
      <Footer />
    </>
  );
}

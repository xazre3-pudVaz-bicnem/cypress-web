import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "口コミ管理・返信戦略｜Googleマップ評価向上｜株式会社サイプレス",
  description:
    "Google口コミ管理で平均評価を向上させる戦略を解説。口コミ獲得の仕組み構築・ネガティブ口コミへの返信・削除申請・月次管理フローまでMEO専門チームが徹底解説。",
  keywords: ["口コミ管理", "口コミ返信", "Googleマップ口コミ", "口コミ対策", "Google評価向上", "Googleレビュー対策", "MEO口コミ"],
  openGraph: {
    title: "口コミ管理・返信戦略｜Googleマップ評価向上｜株式会社サイプレス",
    description: "Google口コミ管理で評価を向上。口コミ獲得の仕組み化からネガティブ対応まで。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/review-management" },
};

const reviewMeasures = [
  {
    title: "口コミ獲得導線の設計（QRコード・URLの案内）",
    body: "口コミを自然に増やすためには、顧客が簡単に口コミを投稿できる導線を設計することが最初のステップです。Googleビジネスプロフィールの口コミ投稿URLを短縮し、会計時のレシート・卓上POP・名刺・サンクスカードにQRコードを掲載します。LINE公式アカウントでの来店後フォローアップメッセージも効果的で、タイミングよく口コミ投稿を依頼できます。「感想を聞かせてください」というアプローチが自然で高い反応率を得られます。",
  },
  {
    title: "返信の重要性と返信文の考え方",
    body: "すべての口コミに返信することは、MEOアルゴリズム評価とユーザーへの信頼構築の両方で不可欠です。Googleは口コミへのオーナー返信率をビジネスのアクティビティ評価に組み込んでいます。高評価口コミへの返信では感謝を伝えつつ、具体的なコメントに触れることでパーソナルな印象を与えます。低評価口コミへの返信は特に重要で、誠実な対応姿勢が第三者閲覧者に好印象を与え、来店転換率の維持につながります。",
  },
  {
    title: "低評価・ネガティブ口コミへの対応",
    body: "低評価口コミへの対応は、問題解決の姿勢を公に示す機会と捉えることが重要です。感情的な反論・言い訳は絶対に避け、まず事実確認と謝罪（必要な場合）を行います。可能であれば直接連絡を促し、オフラインでの問題解決を図ります。第三者が読んだ際に「この会社は顧客対応が誠実だ」と感じる内容にすることが、むしろ他の潜在顧客の来店率を高めます。",
  },
  {
    title: "不正レビューへの対処方法",
    body: "競合による組織的な低評価投稿・根拠のない誹謗中傷・スパム口コミなど、Googleのポリシーに違反する口コミはGoogleへの報告・削除申請が可能です。報告の際はポリシー違反の根拠を明確にすることが重要です。削除には時間がかかることも多いため、並行して本物の高評価口コミを増やす施策を進めることが最も効果的な対抗策です。",
  },
  {
    title: "口コミ件数と評価スコアの管理",
    body: "Googleマップの口コミは「件数」「平均スコア」「最新性」の3要素がMEO順位とユーザーの来店判断の両方に影響します。競合上位3社の口コミ件数を把握し、それに見合う目標を設定します。評価スコアは4.0以上が一般的な信頼ラインで、4.5以上を目指すことを推奨しています。月ごとの獲得口コミ数・平均スコアの推移をモニタリングし、施策の効果を定量的に把握します。",
  },
];

const issueItems = [
  {
    title: "口コミ依頼をしていない",
    body: "サービス品質が高くても、口コミを依頼しないかぎり多くの顧客は自発的に投稿しません。満足した顧客の大半は、依頼があれば投稿するという調査結果があります。QRコードやLINEを活用した依頼の仕組みを整えていないことが、口コミ件数が伸びない最大の原因です。",
  },
  {
    title: "悪口コミへの無返答",
    body: "低評価口コミを放置すると、閲覧した潜在顧客は「この企業は顧客対応をしていない」と判断し来店をためらいます。返答しないことはMEOアルゴリズム上も「非アクティブ」と評価され、口コミの影響力を悪化させる一因になります。",
  },
  {
    title: "感情的な返信",
    body: "低評価口コミへの言い訳・反論・感情的な返信は、閲覧者に非常に悪い印象を与えます。たとえ事実と異なる口コミであっても、公開の場での争いは企業イメージを著しく損ないます。冷静で建設的な返信こそが、第三者への信頼構築に直結します。",
  },
  {
    title: "低評価への差し引き対策がない",
    body: "低評価口コミが入っても新規の高評価口コミで平均スコアを回復させる仕組みがなければ、評価は下がり続けます。口コミの「件数」と「最新性」を継続的に高めることが、長期的なスコア維持の唯一の方法です。",
  },
  {
    title: "低評価が積み重なる",
    body: "サービスの品質問題を放置したまま口コミ管理だけを行っても根本的な解決にはなりません。口コミに記載された顧客の不満を改善アクションに反映させるプロセスがない場合、同様の低評価が繰り返され評価スコアが回復しません。",
  },
  {
    title: "業者によるサクラ口コミのリスク",
    body: "金銭や特典と引き換えに口コミを依頼したり、口コミ代行業者を利用することはGoogleのポリシー違反です。発覚した場合はプロフィールの停止・口コミの一括削除のリスクがあります。自然な依頼導線の整備こそが唯一の正攻法であることを理解する必要があります。",
  },
  {
    title: "返信のテンプレート化",
    body: "すべての口コミに同じ文面で返信していると、顧客は「コピペ対応だ」と感じ再来店意欲が下がります。GoogleのAIも返信の個別性・多様性を評価する傾向があるため、口コミの内容に触れた個別の返信が重要です。",
  },
  {
    title: "星1への対応方法がわからない",
    body: "星1の口コミにどう返信すべきか判断できず、長期間放置してしまうケースが多く見られます。明確な対応ガイドライン（誰がいつどう返信するか）を事前に策定しておかないと、対応が遅れて事態が悪化します。",
  },
  {
    title: "口コミ通知の未設定",
    body: "Googleビジネスプロフィールの通知設定をオフにしていると、新着口コミを見逃し返信が遅延します。24〜48時間以内の返信を目標とするためには、メールまたはスマートフォンアプリへの通知設定が必須です。",
  },
  {
    title: "削除申請の判断基準が不明",
    body: "どの口コミが削除申請可能なGoogleポリシー違反に該当するかを把握していないため、申請できる口コミも見過ごしています。「スパム・虚偽」「ハラスメント・誹謗」「利益相反」などのカテゴリを理解し、適切に申請できる体制が必要です。",
  },
];

const industryItems = [
  {
    industry: "飲食店",
    note: "食事直後の満足感が高いタイミングでQRコード掲載レシートを渡し、口コミ投稿を促します。返信では料理名・スタッフ名・店名を自然に盛り込むことでSEO効果を高めます。食中毒・異物混入などの深刻な低評価は事実確認後に誠実な返信と対応策の明示が必須です。",
  },
  {
    industry: "美容室・サロン",
    note: "施術後の仕上がりに満足しているタイミングがベストな依頼機会です。担当スタイリスト個人への感謝コメントが多いため、返信時はスタイリスト名・施術メニューを含めパーソナルな返信を心がけます。指名客のリピート促進に口コミ返信を有効活用できます。",
  },
  {
    industry: "歯科医院",
    note: "医療機関は口コミ獲得に際してインセンティブ提供が特に厳しく禁止されています。治療完了後の問診票にQRコードを掲載し、任意の投稿として案内します。痛みや不安への対応を評価するコメントへの丁寧な返信が新患獲得につながります。",
  },
  {
    industry: "整骨院・接骨院",
    note: "症状の改善を実感したタイミングが口コミ依頼の好機です。「腰痛が改善した」「肩こりが楽になった」など症状名を含む口コミはMEOの関連性評価にも貢献します。返信で治療内容・施術名を自然に含めることで検索との関連性が高まります。",
  },
  {
    industry: "リフォーム・建設",
    note: "施工完了・引き渡し後のアフターフォロー訪問時が口コミ依頼の最適タイミングです。工事種別・施工エリアを含む口コミは地域×工事キーワードでのMEO評価に直結します。施工不良への低評価には迅速な対応とオフライン解決の姿勢を示すことが重要です。",
  },
  {
    industry: "不動産",
    note: "契約・引き渡し完了後にお礼と口コミ案内を送ります。「担当者が親切」「希望通りの物件が見つかった」など担当者への評価コメントは信頼性の向上に有効です。返信では物件種別・エリア名を含めることでローカル検索との関連性を高めます。",
  },
  {
    industry: "美容外科・クリニック",
    note: "自由診療クリニックは口コミが来院決定に大きく影響します。施術の安心感・カウンセリングの丁寧さへのコメントが多いため、返信でその具体的なこだわりを伝えます。ネガティブな口コミへは個人情報に配慮しながら誠実な返信を行い、直接連絡を促します。",
  },
  {
    industry: "小売店",
    note: "レジ周辺のQRコード掲示やレシートへの印字で口コミ導線を設置します。商品の品揃え・スタッフの接客・店内の雰囲気に関するコメントに返信する際は、新商品情報やおすすめ品を自然に盛り込み再来店を促進します。",
  },
];

const flowItems = [
  {
    title: "口コミ通知の設定",
    body: "GBPアプリおよびメール通知を有効化し、新着口コミをリアルタイムで把握できる体制を整えます。担当者を明確にしてレスポンスの抜け漏れをなくします。",
  },
  {
    title: "口コミ依頼タイミングの設計",
    body: "業種ごとに顧客満足度が最も高いタイミング（会計後・施術完了直後・工事引き渡し後など）を特定し、QRコード・LINE・メールで依頼する導線を設計します。",
  },
  {
    title: "返信ガイドラインの策定",
    body: "高評価・低評価・質問形式それぞれの返信パターンを事前に策定します。ブランドのトーン＆マナーを反映した返信文フレームワークを作成し、担当者が迷わず対応できる体制を整えます。",
  },
  {
    title: "ポジティブ口コミへの返信",
    body: "感謝・個別コメントへの言及・再来店の促しを盛り込んだ返信を24時間以内に行います。ビジネス名・サービス名を自然に含めSEO効果を得ます。",
  },
  {
    title: "ネガティブ口コミへの返信",
    body: "事実確認後、謝罪または誤解の丁寧な解消を行い、オフラインでの解決を促す連絡先を提示します。感情的な表現を一切排し、第三者閲覧者への印象管理を優先します。",
  },
  {
    title: "削除申請の実施",
    body: "Googleのポリシー（スパム・虚偽・誹謗・利益相反など）に違反する口コミを特定し、根拠を明記した削除申請を行います。却下された場合は再申請またはGoogleサポートへのエスカレーションを行います。",
  },
  {
    title: "月次集計の実施",
    body: "月末に新規口コミ数・平均スコア・返信率・低評価比率を集計します。スプレッドシートまたはMEO管理ツールで推移を可視化し、翌月の目標設定に活用します。",
  },
  {
    title: "口コミ内容の分析",
    body: "口コミで繰り返し言及されるポジティブ・ネガティブなキーワードを抽出します。ネガティブなコメントはサービス改善のインプットとして社内に共有します。",
  },
  {
    title: "改善アクションの実施",
    body: "口コミ分析から得た課題を優先度順に整理し、店舗オペレーション・接客・商品・設備などの具体的な改善アクションに落とし込みます。改善後に口コミへの反映を確認します。",
  },
  {
    title: "次月計画の策定",
    body: "前月の口コミ件数・スコア推移・競合状況を踏まえて翌月の目標件数・返信目標・依頼施策の改善点を設定します。PDCAサイクルを毎月継続します。",
  },
];

const kpiItems = [
  {
    label: "月間新規口コミ数",
    desc: "当月に投稿された新規口コミの件数。GBPダッシュボードまたは口コミ管理ツールで確認します。月5件以上を最低ラインとして設定します。",
  },
  {
    label: "平均評価スコア",
    desc: "現在の総合評価（★1〜5の平均）。月次で推移を記録し、目標スコアへの到達状況を確認します。4.0以上を維持、4.5以上を目指します。",
  },
  {
    label: "口コミ返信率",
    desc: "直近3ヶ月に投稿された口コミへのオーナー返信率。GBPダッシュボードで確認できます。目標は返信率100%です。",
  },
  {
    label: "返信平均時間",
    desc: "口コミ投稿から返信完了までの平均時間。48時間以内を目標とし、24時間以内を理想とします。通知設定と担当者指定で管理します。",
  },
  {
    label: "低評価比率",
    desc: "全口コミに占める星1〜2の割合。月次で推移を確認し、低評価比率が上昇している場合はサービス品質の課題として優先的に対処します。",
  },
  {
    label: "口コミ起因問い合わせ数",
    desc: "「口コミを見て来た」「評判を聞いて連絡した」など口コミが来店・問い合わせのきっかけになった件数。スタッフへの来店理由ヒアリングや問い合わせフォームで把握します。",
  },
  {
    label: "評価スコア推移",
    desc: "過去6〜12ヶ月の月次平均スコアの変化。スコアが下降傾向にある場合は口コミ獲得施策の強化とサービス品質の見直しを行います。",
  },
];

const faqItems = [
  {
    q: "低評価の口コミを削除することはできますか？",
    a: "Googleのガイドライン違反（スパム・虚偽の事実・誹謗中傷・利益相反など）に該当する口コミはGoogleへの報告・削除申請が可能です。ただし、単に否定的な意見や低評価であるだけでは削除できません。削除できない口コミに対しては、誠実な返信で第三者への印象を管理することが最善策です。",
  },
  {
    q: "口コミを増やすための具体的な方法を教えてください",
    a: "最も効果的な方法はQRコードによる口コミ投稿導線の設計です。会計時のレシート・POP・LINE公式アカウントのメッセージに口コミ投稿URLのQRコードを掲載し、来店直後の満足度が高いタイミングで依頼します。金銭・割引と引き換えの口コミ依頼はGoogleのポリシー違反です。自然な形での依頼と、サービス品質の向上による好循環が長期的に最も有効です。",
  },
  {
    q: "口コミへの返信は代行してもらえますか？",
    a: "はい、口コミ返信の代行プランをご用意しています。貴社のブランドトーン・マナーに合わせた返信文を作成し、迅速に対応します。高評価・低評価・質問形式など、それぞれに適した返信スタイルで対応します。",
  },
  {
    q: "競合が大量の偽レビューを持っています。どうすればいいですか？",
    a: "Googleへの報告と並行して、自社の本物の口コミを継続的に増やすことが最善策です。偽レビューは時間をかけて削除されることもありますが、保証はありません。本物の口コミが蓄積されることで長期的に高い評価を維持でき、ユーザーも真贋を判断できるようになります。",
  },
  {
    q: "口コミの評価スコアを改善するにはどれくらいかかりますか？",
    a: "口コミ獲得の仕組みを整え、月10件以上の口コミを継続的に獲得できる体制を作ることで、3〜6ヶ月で目に見える改善が期待できます。現在のスコアが低い場合は、まず新規口コミの獲得強化とサービス品質の改善を並行して進めることが最優先です。",
  },
  {
    q: "星1の口コミへの返信はどう書けばいいですか？",
    a: "まず事実を確認し、誠実な姿勢でお詫びまたは状況説明を行います。「詳しくお話をお聞きしたい」として電話番号やメールアドレスに誘導し、オフラインでの問題解決を図ります。感情的な反論・言い訳・過剰な謝罪はすべて避け、第三者が読んで「誠実な企業だ」と感じる内容にすることが最重要です。",
  },
  {
    q: "口コミ返信にビジネス名を含める理由は何ですか？",
    a: "口コミ返信の文中にビジネス名・サービス名・地域名を自然に含めることで、Googleの検索アルゴリズムがそのGBPと関連キーワードの関連性を評価します。過剰なキーワード詰め込みは逆効果ですが、自然な形で含めることでSEO・MEO両方に効果があります。",
  },
  {
    q: "口コミ通知はどこで設定できますか？",
    a: "Googleビジネスプロフィールのアプリ（iOS・Android）の通知設定、またはGBPのウェブ管理画面のメール通知設定で有効化できます。担当者のスマートフォンにGBPアプリをインストールし、新着口コミの通知をオンにすることで迅速な返信が可能になります。",
  },
  {
    q: "Googleのポリシー違反でない口コミに返信すべきですか？",
    a: "はい、Googleのポリシーに違反していない口コミは削除できませんが、必ず返信すべきです。誠実な返信は閲覧する潜在顧客へのアピールになり、来店転換率の維持に貢献します。無返答は「顧客対応しない企業」という印象を与えます。",
  },
  {
    q: "口コミ削除申請が却下された場合はどうすればいいですか？",
    a: "Googleの削除申請が却下された場合は、追加の証拠を揃えて再申請するか、Googleのビジネスサポートに直接連絡して異議申し立てを行います。それでも解決しない場合は、誠実な返信でその口コミのネガティブな影響を最小化しながら、新規の高評価口コミを増やすことで平均スコアを回復させます。",
  },
  {
    q: "LINE公式アカウントで口コミを依頼してもいいですか？",
    a: "LINE公式アカウントからのメッセージで口コミ投稿URLを案内することは問題ありません。ただし、口コミの内容を誘導したり（「5つ星で書いてください」など）、特典・割引と引き換えに依頼することはGoogleのポリシー違反です。「よろしければご感想をお聞かせください」という自然な依頼文を使用してください。",
  },
  {
    q: "競合の口コミ状況はどこで確認できますか？",
    a: "GoogleマップまたはGoogle検索で競合のGBPを直接確認できます。口コミ件数・平均スコア・最新の口コミ日付・オーナー返信率などをチェックし、自社との差分を把握します。MEO管理ツールを使用すると複数競合を定期的にモニタリングできます。",
  },
  {
    q: "口コミ管理に役立つツールはありますか？",
    a: "GBPの無料インサイト機能に加え、Moz Local・BrightLocal・Yext・LocalfalconなどのMEO管理ツールが口コミモニタリングに有効です。国内ではMEO Hackなどのツールもあります。多店舗経営の場合は一元管理できるツールの導入を強く推奨します。",
  },
  {
    q: "口コミ管理はどのくらいの頻度で行えばいいですか？",
    a: "通知設定で新着口コミをリアルタイムで把握し、毎日確認する習慣をつけることが理想です。月次で口コミ件数・平均スコア・返信率などをまとめて分析するサイクルを設けることで、改善の方向性が明確になります。",
  },
  {
    q: "口コミに個人名や個人情報が含まれていた場合はどうすればいいですか？",
    a: "返信で個人情報（スタッフの本名など）を公開することは避けてください。口コミ本文に顧客自身の個人情報が含まれている場合で、その削除を希望する場合は、Googleの「法的な問題の報告」から申請できます。返信ではプライバシーに配慮した表現を徹底します。",
  },
  {
    q: "全員が低評価を付ける「炎上」状態になった場合の対処法は？",
    a: "まず事実確認と原因特定を最優先で行います。各口コミに個別の誠実な返信を行い、問題への対処・改善策を公に示します。状況によってはプレスリリースや自社SNSでの説明も有効です。弁護士への相談や法的措置が必要なケースもあるため、当社でサポートします。",
  },
  {
    q: "口コミの返信にかける時間を短縮する方法はありますか？",
    a: "返信フレームワーク（雛形）を事前に複数用意しておくことで、個別内容を追記するだけで返信できます。ただし、完全なテンプレートコピペは避けてください。AI文章ツールを活用して個別化した返信を短時間で作成する方法も効果的です。当社の代行プランも検討ください。",
  },
  {
    q: "口コミが1件もない状態から始める場合、何から取り組むべきですか？",
    a: "まずQRコードを使った口コミ依頼の導線を整備し、既存の顧客・常連客に案内することから始めます。最初の10件を獲得するまでが最難関で、スタッフが直接丁寧にお願いすることが最も効果的です。GBPを最適化してから依頼を始めると、プロフィールへの信頼感が高まり投稿率が上がります。",
  },
  {
    q: "口コミの数と評価スコア、どちらを優先すべきですか？",
    a: "まずは件数の確保を優先し、スコアは自然についてくる形が理想です。件数が少ない状態では1件の低評価でスコアが大きく下がるため、早期に30件以上を目指します。ある程度の件数が確まったら、スコア4.0以上を維持しながら件数を積み上げるフェーズに移行します。",
  },
  {
    q: "口コミ対策はどのMEO施策と組み合わせるのが効果的ですか？",
    a: "GBPの基本最適化（カテゴリ・NAP・写真・サービス登録）を整えた後に口コミ獲得施策を強化することが最も効果的です。投稿の定期更新・写真追加と並行して口コミを増やすことで、GBP全体のアクティビティスコアが高まりローカルパック上位表示につながります。",
  },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策", desc: "MEO対策の全体戦略" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "MEO対策の根幹ツール" },
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
  { href: "/industry/restaurant", label: "飲食店の口コミ対策", desc: "飲食業種特化の返信戦略" },
  { href: "/industry/beauty", label: "美容室の口コミ対策", desc: "美容業種の口コミ管理" },
  { href: "/industry/clinic", label: "クリニックの口コミ対策", desc: "医療機関の口コミ管理" },
  { href: "/industry/construction", label: "建設・リフォームの口コミ", desc: "施工業種の口コミ戦略" },
  { href: "/industry/judo", label: "整骨院の口コミ対策", desc: "整骨院の集客と口コミ" },
  { href: "/area/tokyo", label: "東京のMEO対策", desc: "東京都内の地域別対策" },
  { href: "/area/osaka", label: "大阪のMEO対策", desc: "大阪府内の地域別対策" },
  { href: "/area/nagoya", label: "名古屋のMEO対策", desc: "名古屋市周辺の対策" },
  { href: "/blog/review-management", label: "口コミ管理ガイド", desc: "詳細な解説記事" },
];

export default function ReviewManagementPage() {
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
              <span style={{ color: "#0F172A" }}>口コミ対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Review Management
            </p>
            <h1
              className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              口コミ管理・返信戦略
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              Googleマップの口コミはMEO順位と集客の両方に直接影響します。
              口コミの件数・評価スコア・最新性がローカル検索アルゴリズムの重要要素であり、
              同時に潜在顧客の来店判断に大きく影響します。
              戦略的な口コミ管理で競合に差をつける方法を解説します。
            </p>
          </div>
        </section>

        {/* Full-width image after hero */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_21_48.png"
            alt="口コミ対策・スマートフォンを活用する女性たち"
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
                "Googleマップの口コミがMEO順位と集客に与える具体的な影響と3つの評価軸",
                "口コミ件数をゼロから増やすための自然な依頼導線の設計方法",
                "口コミ管理でよく陥る10の失敗パターンとその改善策",
                "飲食店・美容室・歯科・整骨院など8業種ごとの口コミ活用ポイント",
                "通知設定から月次計画まで10ステップの口コミ管理フロー",
                "口コミ施策の成果を測る7つのKPIと測定方法・目標設定の考え方",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 mt-[2px] font-bold text-[14px]" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 口コミがMEOに与える影響 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Impact on MEO
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              口コミがMEOに与える影響
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                Googleのローカル検索アルゴリズムにおいて、口コミは「知名度（Prominence）」と「関連性（Relevance）」
                の両方に影響する重要な要素です。口コミの総数が多いほど、そのビジネスの認知度・信頼性が高いと
                Googleに評価されます。また、口コミ文中に含まれるキーワード（業種名・地域名・サービス名など）が
                検索クエリとの関連性評価にも影響します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                平均評価スコアも重要です。4.0未満のビジネスはユーザーのクリック率が大幅に低下します。
                オンライン口コミを読んでから地域ビジネスを利用するかどうかを決定するユーザーは
                多数に上るというデータが複数存在します。
                4.5以上の評価を持つビジネスは、4.0未満と比べて来店転換率が高い傾向があります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                口コミの「最新性」も重要な要素です。定期的に新しい口コミが投稿されているビジネスは、
                Googleに「アクティブで信頼できるビジネス」として評価されます。1年以上前の口コミしかない場合、
                顧客もGoogleも現在のビジネス状況を判断できず、信頼性が下がります。
                月5件以上の新規口コミ獲得を目標に継続的な施策が必要です。
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

        {/* 口コミ対策の施策 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Measures
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              口コミ対策の施策
            </h2>
            <div className="max-w-3xl">
              {reviewMeasures.map((item, i) => (
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
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.note}</p>
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

        {/* 返信文の書き方 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden" style={{ height: "360px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_13_37.png"
                  alt="口コミ返信の重要性・ドキュメントを確認するビジネスパーソン"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  Response Writing
                </p>
                <h2
                  className="font-black text-[26px] mb-6"
                  style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
                >
                  口コミ返信文の書き方
                </h2>
                <div className="space-y-4">
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    口コミ返信文は①個別性（テンプレートでなく、その口コミ内容に触れた返信）、
                    ②ブランドトーン（会社の雰囲気・人格を反映した文体）、
                    ③SEO効果（ビジネス名やサービス名を自然に含める）の3軸で構成します。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    高評価への返信の基本は「感謝→具体的なコメントへの言及→再来店の促し」です。
                    「○○様、カラーリングをお気に召していただけて光栄です。またのご来店をお待ちしております。（美容室○○）」
                    のように具体性を持たせることでパーソナルな印象を与えます。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    低評価への返信は「謝罪または状況説明→改善策の提示→連絡先へ誘導」の構成が基本です。
                    感情的な反論や言い訳は避け、誠実で建設的な返信を心がけることで
                    第三者への信頼構築につながります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="口コミ管理・返信戦略に関するよくある質問" bgColor="#F9F8F5" />

        <RelatedPages links={relatedLinks} />

        <PageContactCTA
          heading="口コミ管理・返信戦略のご相談はサイプレスへ"
          body="口コミ獲得の仕組み化からネガティブ口コミへの対応まで、Googleマップの口コミ管理を専門チームがサポートします。現状の口コミ状況を無料で診断します。"
        />
      </main>
      <Footer />
    </>
  );
}

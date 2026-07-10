import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Googleビジネスプロフィール カテゴリ設定｜MEO対策｜株式会社サイプレス",
  description:
    "GBPカテゴリ設定はMEO順位を左右する最重要要素。プライマリカテゴリとセカンダリカテゴリの選定方法、競合分析を活用した最適化手順、業種別カテゴリ例を詳しく解説。正しいカテゴリ設定でGoogleマップ上位表示を実現。",
  keywords: ["GBPカテゴリ設定", "Googleビジネスプロフィールカテゴリ", "MEOカテゴリ", "プライマリカテゴリ", "セカンダリカテゴリ", "MEO対策カテゴリ"],
  openGraph: {
    title: "Googleビジネスプロフィール カテゴリ設定｜MEO対策｜株式会社サイプレス",
    description: "MEO順位を決定するカテゴリ設定の正しい選び方と競合分析手法を解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/category-setting" },
};

const categoryPoints = [
  {
    num: "01",
    title: "メインサービスを最も正確に表すプライマリカテゴリを選ぶ",
    body: "プライマリカテゴリはMEO順位に最も直接的に影響します。「なんとなく合いそう」ではなく、自社のメインサービスを最も的確に説明するカテゴリを選ぶことが原則です。例えば「食料品店」ではなく「和食レストラン」、「店舗」ではなく「歯科医院」のように具体的なカテゴリを選ぶことで、ターゲット検索クエリとのマッチング精度が上がります。",
  },
  {
    num: "02",
    title: "副カテゴリで対応範囲を補完する",
    body: "セカンダリカテゴリ（副カテゴリ）は最大9つまで設定でき、プライマリカテゴリでカバーできない関連サービスを補完します。美容室であれば「ヘアサロン」をプライマリとして、「ネイルサロン」「まつげエクステサロン」「リラクゼーションサロン」を副カテゴリに追加することで、複数の検索クエリへの対応が可能になります。ただし、実際に提供していないサービスのカテゴリを設定することはGoogleのポリシー違反です。",
  },
  {
    num: "03",
    title: "競合が設定しているカテゴリを参考にする",
    body: "ターゲットとする検索キーワードでGoogleマップを検索し、上位表示されている競合ビジネスのカテゴリ設定を確認します（GBPの詳細ページで「カテゴリ」として表示されます）。競合が使用しているカテゴリの組み合わせは、そのエリア・業種で効果的なカテゴリの参考になります。上位3社のカテゴリ設定を分析し、自社に不足しているカテゴリを特定することが実践的なアプローチです。",
  },
  {
    num: "04",
    title: "過剰なカテゴリ設定は避ける",
    body: "関係性の薄いカテゴリを多数設定することは、Googleがビジネスの専門性を判断しにくくなり、かえって順位に悪影響を与える可能性があります。実際に提供しているサービスに直結するカテゴリに絞り、ビジネスの専門性・一貫性を明確に示すことが重要です。カテゴリ設定は「多ければ良い」ではなく「正確で関連性が高い」ことを優先してください。",
  },
  {
    num: "05",
    title: "新しいカテゴリが追加されたら確認・更新する",
    body: "Googleは定期的に新しいカテゴリを追加・変更しています。例えば近年では「オンライン診療」「テイクアウト専門店」「デリバリー専門店」などの新カテゴリが追加されています。半年に1度はカテゴリリストを確認し、自社のサービスにより適切なカテゴリが追加されていないかチェックすることを推奨しています。業界動向に合わせたカテゴリ更新が競合優位につながります。",
  },
];

const commonIssues = [
  {
    num: "01",
    title: "主カテゴリが業態と合っていない",
    body: "「飲食店」や「ショップ」など汎用的なカテゴリを設定しているケースは非常に多く見られます。Googleは主カテゴリを最重視するため、業態を最も具体的に表すカテゴリを選択することが順位改善の第一歩になります。",
  },
  {
    num: "02",
    title: "副カテゴリが未設定のまま放置されている",
    body: "主カテゴリのみ設定して副カテゴリを一切追加していない事業者は少なくありません。副カテゴリを正確に追加するだけで関連検索クエリへの表示頻度が上がるため、設定漏れは機会損失に直結します。",
  },
  {
    num: "03",
    title: "競合より副カテゴリ数が少ない",
    body: "同じ業種の競合が7〜9個の副カテゴリを設定しているのに対し、自社は2〜3個しか設定していない状態は不利です。競合カテゴリ調査を通じて、自社が提供しているにもかかわらず未登録のカテゴリを特定し追加する必要があります。",
  },
  {
    num: "04",
    title: "古いカテゴリ名をそのまま使用している",
    body: "Googleはカテゴリ名を定期的に更新・廃止します。過去に選んだカテゴリが現在は廃止または名称変更されている場合があり、古いカテゴリは検索マッチングで不利になることがあります。定期的にカテゴリ一覧と照合することが必要です。",
  },
  {
    num: "05",
    title: "サービス提供エリアとカテゴリの不一致",
    body: "出張型・訪問型ビジネスにもかかわらず、エリア設定を行わずカテゴリのみ設定しているケースがあります。カテゴリとサービスエリアの両方を正確に設定することで、対応エリアの検索クエリに適切に表示されます。",
  },
  {
    num: "06",
    title: "日本語カテゴリと英語カテゴリの混在リスク",
    body: "GBPのカテゴリはGoogleが管理するリストから選択する形式ですが、言語設定の切り替えや過去の変更により、日本語と英語が混在したような不整合が生じることがあります。カテゴリが正しく日本語で表示されているか定期確認が必要です。",
  },
  {
    num: "07",
    title: "カテゴリ変更後の影響を未確認",
    body: "カテゴリを変更した後に順位変動を測定していないケースが多く見られます。変更前後の検索表示回数・クリック数・ローカルパック表示頻度を記録しないと、変更が効果的だったかどうか判断できません。",
  },
  {
    num: "08",
    title: "季節性カテゴリの未活用",
    body: "業種によっては「クリスマスケーキ店」「花火大会会場」など季節限定の関連カテゴリが存在します。繁忙期に合わせてカテゴリを一時的に追加・変更することで、季節需要を取り込める場合があります。",
  },
  {
    num: "09",
    title: "カテゴリ変更申請が通らない",
    body: "Googleが自動的にカテゴリを上書きするケースや、変更申請が反映されないケースがあります。これはGBPの自動修正機能が競合の提案や第三者データを優先した結果であることが多く、定期的にカテゴリが意図通りか確認する必要があります。",
  },
  {
    num: "10",
    title: "業種特有カテゴリの見落とし",
    body: "Googleのカテゴリリストには一般的な名称だけでなく、非常に細分化された業種特有カテゴリが存在します。例えば「矯正歯科医」「小児歯科医」「口腔外科医」など、それぞれ独立したカテゴリがあります。見落としによる機会損失を防ぐため、業種に関連するすべてのカテゴリを網羅的に確認することが重要です。",
  },
];

const industryPoints = [
  {
    num: "01",
    industry: "飲食店",
    notes: "居酒屋・ラーメン・カフェは異なるカテゴリとして独立しています。「飲食店」などの汎用カテゴリではなく業態名を正確に選択することが重要です。複数業態を展開している場合は、売上比率の高いメイン業態をプライマリカテゴリとし、他業態を副カテゴリとして追加します。",
  },
  {
    num: "02",
    industry: "美容室",
    notes: "「美容室/ヘアサロン」「美容院」はほぼ同義のカテゴリが複数存在します。ネイル・まつ毛・エステを併設している場合はそれぞれ副カテゴリとして追加することで、単一サロンで複数サービスの検索クエリに対応できます。",
  },
  {
    num: "03",
    industry: "歯科",
    notes: "「歯科医院」「一般歯科」「矯正歯科医」「小児歯科医」「口腔外科医」はGoogleカテゴリ上では別々に存在します。提供している診療科目ごとにカテゴリを追加することで、矯正や小児歯科などの専門検索でも表示されるようになります。",
  },
  {
    num: "04",
    industry: "整骨院・接骨院",
    notes: "「整骨院」「接骨院」「カイロプラクター」はそれぞれ独立したカテゴリです。法的に認められた施術内容に対応するカテゴリを選ぶことがポリシー遵守の観点から重要です。マッサージ・鍼灸を提供する場合は対応するカテゴリを副カテゴリに追加できます。",
  },
  {
    num: "05",
    industry: "リフォーム・建設",
    notes: "「建設会社」「リフォーム会社」「工務店」「外壁塗装業者」「屋根工事店」はそれぞれ異なるカテゴリです。主力事業をプライマリとして、施工対応している工事種別ごとに副カテゴリを追加することで、工事種別での検索にも対応できます。",
  },
  {
    num: "06",
    industry: "クリニック・医院",
    notes: "「内科医」「皮膚科医」「美容外科」「美容皮膚科」はカテゴリが細分化されています。診療科目ごとにカテゴリが存在するため、標榜科目をすべて確認し対応するカテゴリを設定することで、各診療科目での検索に露出できます。",
  },
  {
    num: "07",
    industry: "不動産",
    notes: "「不動産業者」「不動産コンサルタント」「マンション管理会社」「土地家屋調査士」など業務内容によってカテゴリが異なります。売買・賃貸・管理など取り扱い業務の種別に応じてカテゴリを使い分けることで、検索意図に合致した露出が可能になります。",
  },
  {
    num: "08",
    industry: "学習塾",
    notes: "「学習塾」「塾」「家庭教師センター」「英会話教室」「音楽教室」などは独立したカテゴリとして存在します。提供しているコース・科目に対応するカテゴリを副カテゴリに追加することで、科目特化の検索クエリにも対応できます。",
  },
];

const implementationFlow = [
  { num: "01", step: "現在のカテゴリ確認", detail: "GBP管理画面で現在設定中のプライマリ・副カテゴリをリストアップし、設定数・カテゴリ名・設定日を記録します。" },
  { num: "02", step: "競合上位のカテゴリ調査", detail: "ターゲットキーワードでGoogleマップ検索し、上位3〜5社のカテゴリ設定を記録・比較します。自社との差分を特定します。" },
  { num: "03", step: "Google公式カテゴリ一覧確認", detail: "Googleが公開しているカテゴリリスト（英語版）または日本語GBP上の検索補完機能で業種に関連するすべてのカテゴリを網羅的に確認します。" },
  { num: "04", step: "主カテゴリの決定", detail: "メインサービスを最も正確に表すカテゴリをプライマリとして選定します。既存のカテゴリを変更する場合は、変更前の順位を記録しておきます。" },
  { num: "05", step: "副カテゴリ5〜9個の追加", detail: "実際に提供しているサービスと一致する副カテゴリを5〜9個追加します。提供していないサービスのカテゴリは絶対に設定しません。" },
  { num: "06", step: "変更後の順位確認", detail: "カテゴリ変更後48〜72時間以内に検索クエリごとの表示順位を確認します。Googleサーチコンソール・GBPインサイトで変動を記録します。" },
  { num: "07", step: "2週間後の影響測定", detail: "変更後2週間時点でインプレッション・クリック数・ローカルパック表示頻度を変更前と比較し、カテゴリ変更の効果を定量評価します。" },
  { num: "08", step: "カテゴリ説明文との最適化", detail: "GBPのビジネス説明文にカテゴリに関連するキーワードを自然な文脈で盛り込み、カテゴリ設定と説明文の一貫性を高めます。" },
  { num: "09", step: "属性設定との連携", detail: "カテゴリによって有効になる属性（駐車場・Wi-Fi・テイクアウト可など）を確認し、正確な属性設定を行います。カテゴリと属性の整合性がGBP評価を高めます。" },
  { num: "10", step: "定期見直し", detail: "半年に1度、Googleの新カテゴリ追加や競合のカテゴリ変更に対応するため、カテゴリ設定全体を再評価します。業界動向の変化に応じた更新が継続的な優位性につながります。" },
];

const kpis = [
  { num: "01", kpi: "カテゴリ関連キーワードの検索表示回数", where: "GBPインサイト → 検索キーワード一覧。主カテゴリに関連するキーワードでのインプレッション数を確認します。" },
  { num: "02", kpi: "ローカルパック表示頻度", where: "GBPインサイト → 地図での検索表示数。カテゴリ変更前後でマップビューの数値を比較します。" },
  { num: "03", kpi: "競合比較カテゴリスコア", where: "競合上位3社のカテゴリ数と自社のカテゴリ数を手動比較し、差分数をスコアとして管理します。" },
  { num: "04", kpi: "副カテゴリ数", where: "GBP管理画面のカテゴリ設定欄で確認。目標は実際のサービス数に応じた5〜9個の設定です。" },
  { num: "05", kpi: "検索クリック率（CTR）", where: "GBPインサイト → ウェブサイトクリック数 ÷ 検索表示回数。カテゴリと表示情報の関連性が高いほど改善します。" },
  { num: "06", kpi: "カテゴリ変更後の順位変動", where: "Googleマップでターゲットキーワードを検索し、変更前後の表示順位を手動記録または順位追跡ツールで比較します。" },
  { num: "07", kpi: "ビジネス情報完全性スコア", where: "GBP管理画面のプロフィール完成度インジケーター。カテゴリ設定はスコアに直接影響する項目のひとつです。" },
];

const faqItems = [
  {
    q: "カテゴリ設定を変更すると順位に影響しますか？",
    a: "はい、カテゴリ設定の変更はMEO順位に直接影響します。特にプライマリカテゴリの変更は、そのカテゴリに関連する検索クエリでの表示頻度に大きく影響します。変更後は通常1〜2週間以内に順位変動が現れます。変更前後の順位を記録し、効果を測定することを推奨しています。",
  },
  {
    q: "カテゴリ設定は何個が理想ですか？",
    a: "プライマリカテゴリ1つと、実際のサービスに対応する副カテゴリ3〜5個が多くの業種での目安です。カテゴリが多いほど良いわけではなく、実際に提供しているサービスに対応したカテゴリを正確に設定することが重要です。9個すべて埋める必要はありません。",
  },
  {
    q: "日本語と英語、どちらのカテゴリを選べばいいですか？",
    a: "Googleが提供するカテゴリは言語設定に依存しますが、日本語設定のGBPでは日本語のカテゴリ名が表示されます。カテゴリはGoogleが管理するリストから選ぶ形式で、自由入力はできません。日本語のカテゴリ検索で最も適切なものを選択してください。",
  },
  {
    q: "カテゴリが見つからない場合はどうすれば良いですか？",
    a: "完全に一致するカテゴリが存在しない場合は、最も近い上位概念のカテゴリを選択します。例えば「産業廃棄物処理業」という具体的なカテゴリがなければ「廃棄物管理サービス」を選択します。Googleは定期的にカテゴリを追加しているため、半年ごとに再確認することも重要です。",
  },
  {
    q: "競合がカテゴリを不正に設定しているようです。どうすればいいですか？",
    a: "実際に提供していないサービスのカテゴリを設定することはGoogleのポリシー違反です。Googleマップ上の「情報の修正を提案」から報告することが可能です。ただし、Googleによる対応には時間がかかることもあります。自社の正確なカテゴリ設定と口コミ獲得・情報充実を優先することが長期的な対策になります。",
  },
  {
    q: "プライマリカテゴリを変更したら順位が下がりました。元に戻すべきですか？",
    a: "変更後2週間以内に順位が下がった場合、まず変更前後のカテゴリと検索クエリの組み合わせを再確認します。変更したカテゴリが検索クエリと乖離していた可能性があります。改善が見られない場合は元のカテゴリに戻し、副カテゴリの追加・修正から再アプローチすることを推奨しています。",
  },
  {
    q: "副カテゴリに設定したカテゴリはGBPに表示されますか？",
    a: "副カテゴリはGBPの詳細ページに「カテゴリ」として一覧表示されます。ただし、Googleマップ上の一覧表示ではプライマリカテゴリのみが表示されます。副カテゴリは表示よりも検索マッチングの幅を広げる目的で機能するため、ユーザーへの見せ方よりも正確性を優先して設定してください。",
  },
  {
    q: "新規開業時のカテゴリ設定で特に気をつけることはありますか？",
    a: "新規開業時はビジネスの認知が低い段階であるため、最も検索需要が高い具体的なカテゴリをプライマリに設定することが特に重要です。また、GBPの審査・掲載が完了した直後にカテゴリを一括設定するのではなく、主カテゴリを先に設定して反映を確認してから副カテゴリを追加する手順を推奨しています。",
  },
  {
    q: "カテゴリがGoogleによって勝手に変更されることはありますか？",
    a: "あります。GBPにはユーザーや第三者データが提案した情報をGoogleが自動的に反映する仕組みが存在します。特にカテゴリは競合や第三者の提案によって変更されることがあるため、定期的にGBP管理画面でカテゴリが意図通り設定されているか確認することが重要です。",
  },
  {
    q: "カテゴリ設定と属性設定はどう連携させればいいですか？",
    a: "カテゴリを設定すると、そのカテゴリに対応した属性項目（駐車場・Wi-Fi・テイクアウト対応など）がGBPに表示されます。正確なカテゴリを設定した上で、有効な属性をすべて設定することが重要です。属性は検索フィルタリングにも影響するため、カテゴリと属性は一体的に管理することを推奨しています。",
  },
  {
    q: "複数のビジネスを同一住所で運営しています。カテゴリはどう設定しますか？",
    a: "同一住所に複数のビジネスを別々のGBPとして登録することは、それぞれが独立したビジネスであれば可能です。ただし、同一事業体の異なるサービスを複数GBPで管理することはGoogleのポリシーに抵触する可能性があります。複数サービスを提供する単一ビジネスであれば、1つのGBPにカテゴリを適切に設定する方が適切です。",
  },
  {
    q: "カテゴリ変更の効果が出るまでどのくらいかかりますか？",
    a: "プライマリカテゴリの変更効果は通常1〜2週間以内に検索表示数に反映されます。副カテゴリ追加の効果も同様のタイムラインですが、既存の口コミ数・GBP情報の充実度・競合状況によって変動します。2週間経過後に数値変化が見られない場合は、カテゴリ以外の要因（口コミ・投稿・情報充実度）も見直すことを推奨しています。",
  },
  {
    q: "飲食店ですが「居酒屋」と「ダイニングバー」どちらのカテゴリが適切ですか？",
    a: "業態や提供サービスのメインを反映するカテゴリを選んでください。フードメインであれば「居酒屋」、ドリンク・雰囲気重視であれば「バー」または「ダイニングバー」が適切です。検索需要の高いキーワードに対応するカテゴリを優先しつつ、両方のニーズに対応する場合は一方をプライマリ、もう一方を副カテゴリとして設定する方法が有効です。",
  },
  {
    q: "美容室ですが「ヘアサロン」と「美容室/ヘアサロン」はどちらを選ぶべきですか？",
    a: "「美容室/ヘアサロン」はGoogleが複数の呼称をまとめた統合カテゴリで、検索マッチングの幅が広い傾向があります。エリアと業態の検索需要を踏まえた上で設定しますが、GBPのカテゴリ検索補完で表示される最も具体的なカテゴリを選ぶことが基本です。競合上位店のカテゴリ設定も参考にしてください。",
  },
  {
    q: "整骨院・接骨院のカテゴリ設定で注意することはありますか？",
    a: "「整骨院」「接骨院」「カイロプラクター」「鍼灸院」はGoogleカテゴリ上で異なる定義を持ちます。柔道整復師の施術を行う整骨院であれば「整骨院」または「接骨院」が適切です。提供していない施術に対応するカテゴリの設定は、Googleポリシー違反になるため注意が必要です。",
  },
  {
    q: "カテゴリ設定だけでMEO順位は上がりますか？",
    a: "カテゴリ設定はMEO順位の「関連性（Relevance）」評価に大きく影響しますが、Googleはカテゴリ以外にも口コミ数・GBP情報の充実度・ウェブサイトのSEO評価・掲載場所からの距離など複数の要素を総合的に評価します。カテゴリ設定は順位改善の重要な一要素ですが、他の施策と組み合わせて取り組むことで効果が最大化されます。",
  },
  {
    q: "カテゴリ変更申請が何度やっても反映されません。原因は何ですか？",
    a: "Googleの自動システムが第三者データや競合の提案を優先している可能性があります。また、Googleがビジネスの実態として認識しているカテゴリと申請カテゴリが乖離している場合も反映されにくくなります。GBPサポートに問い合わせる、または自社ウェブサイトのビジネス説明とGBP説明文をカテゴリに沿った内容に統一することで改善されるケースがあります。",
  },
  {
    q: "サービス業（士業・コンサルタント等）のカテゴリ設定はどうすれば良いですか？",
    a: "士業・コンサルタント系はGoogleカテゴリが細分化されています。「社会保険労務士事務所」「税理士事務所」「行政書士事務所」などそれぞれ独立したカテゴリが存在します。提供しているサービスの種別ごとにカテゴリを確認し、最も具体的かつ正確なカテゴリをプライマリとして設定することが重要です。",
  },
  {
    q: "クリニックで美容系と保険診療の両方を行っています。カテゴリはどうしますか？",
    a: "「内科医」「皮膚科医」などの保険診療カテゴリと「美容外科」「美容皮膚科」などの自由診療カテゴリは独立して存在します。メインの収益・患者数に基づく診療科目をプライマリとして設定し、サブの診療科目を副カテゴリに追加する方法が適切です。提供していない診療科目のカテゴリは設定しないことが原則です。",
  },
  {
    q: "カテゴリ設定の最新情報はどこで確認できますか？",
    a: "Googleが公式に提供するカテゴリ一覧は、GBP管理画面のカテゴリ入力補完機能でリアルタイムに確認できます。また、Google公式ヘルプセンターやPleper.comなどのGBPカテゴリ検索ツールを活用することで、業種に関連する全カテゴリを網羅的に調査できます。サイプレスでは最新カテゴリ情報に基づいた設定支援も提供しています。",
  },
  {
    q: "カテゴリ設定をプロに依頼するメリットは何ですか？",
    a: "MEOのプロは競合分析・カテゴリ調査・変更後の効果測定を体系的に実施します。自社での調査では見落としがちな業種特有カテゴリの発見や、カテゴリ変更後のGBP全体への影響把握など、専門知識を活かした最適化が可能です。サイプレスではカテゴリ設定を含むGBP全体の最適化を一括して対応しています。",
  },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策", desc: "MEO対策の全体戦略" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "MEO対策の根幹ツール" },
  { href: "/meo/ranking", label: "MEO順位改善", desc: "ローカルパック上位表示" },
  { href: "/meo/local-keyword", label: "地域キーワード設計", desc: "地域集客のキーワード戦略" },
  { href: "/meo/review", label: "口コミ獲得・管理", desc: "GBP口コミ対策の全体像" },
  { href: "/meo/nap", label: "NAP情報統一", desc: "名称・住所・電話番号の統一" },
  { href: "/meo/photo", label: "写真・画像最適化", desc: "GBP写真のMEO効果" },
  { href: "/meo/post", label: "GBP投稿活用", desc: "最新情報投稿でエンゲージメント向上" },
  { href: "/meo/q-and-a", label: "Q&A活用", desc: "よくある質問でCV改善" },
  { href: "/meo/attribute", label: "属性設定", desc: "GBP属性の最適化" },
  { href: "/meo/service-area", label: "サービス提供エリア", desc: "出張・訪問型ビジネスのエリア設定" },
  { href: "/meo/insight", label: "GBPインサイト分析", desc: "データで改善を進める方法" },
  { href: "/seo", label: "SEO対策", desc: "検索エンジン最適化の全体戦略" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域特化SEO対策" },
  { href: "/seo/schema", label: "構造化データ", desc: "Schema.orgによるSEO強化" },
  { href: "/aio", label: "AIO対策", desc: "AI検索エンジンへの最適化" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "SEOサービス内容と料金" },
  { href: "/services/gbp-audit", label: "GBP監査サービス", desc: "GBP現状診断と改善提案" },
  { href: "/industry/restaurant", label: "飲食店MEO対策", desc: "飲食店向けMEO施策" },
  { href: "/industry/beauty", label: "美容室MEO対策", desc: "美容室向けMEO施策" },
  { href: "/industry/clinic", label: "クリニックMEO対策", desc: "医療機関向けMEO施策" },
  { href: "/area/tokyo", label: "東京MEO対策", desc: "東京エリアのMEO支援" },
  { href: "/area/osaka", label: "大阪MEO対策", desc: "大阪エリアのMEO支援" },
];

export default function CategorySettingPage() {
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
              <span style={{ color: "#0d1b2a" }}>カテゴリ設定</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              MEO Knowledge
            </p>
            <h1
              className="text-[40px] md:text-[52px] font-black leading-tight tracking-tight mb-6"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              Googleビジネスプロフィール<br />カテゴリ設定
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              カテゴリ設定はGoogleが検索クエリとビジネスをマッチングさせる際の
              最重要要素のひとつです。プライマリカテゴリと副カテゴリを正確に選定することで、
              ターゲット検索での表示頻度が大幅に向上します。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_12_19.jpg"
            alt="ミーティングとタブレット・GBPカテゴリ設定MEO対策"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.18)" }} />
        </section>

        {/* このページでわかること */}
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
                "プライマリカテゴリとセカンダリカテゴリの違いと、それぞれがMEO順位に与える影響",
                "競合上位が設定しているカテゴリを調査し、自社のカテゴリ設定に活かす方法",
                "業種別に最適なカテゴリ組み合わせと、見落としやすい業種特有カテゴリの見つけ方",
                "カテゴリ変更後に測定すべき指標と、効果測定の具体的な手順",
                "よくあるカテゴリ設定の失敗パターンと、その原因・解決策",
                "Googleのカテゴリ追加・変更に対応するための定期見直しフローの組み方",
              ].map((point, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span
                    className="shrink-0 font-bold text-[15px]"
                    style={{ color: "#c4b89a", marginTop: "2px" }}
                  >
                    →
                  </span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* カテゴリ設定がMEOに与える影響 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Impact on MEO
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              カテゴリ設定がMEOに与える影響
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                カテゴリはGoogleが「このビジネスは何をしている会社なのか」を理解するための
                最も直接的なシグナルです。検索クエリとカテゴリのマッチングは、ローカル検索順位の
                「関連性（Relevance）」評価の核心部分を占めています。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                例えば「渋谷 美容室」で検索したユーザーには、プライマリカテゴリに「美容室/ヘアサロン」
                が設定されたGBPが優先的に表示されます。カテゴリが曖昧・不正確な場合、
                ターゲット検索でのインプレッション自体が減少します。
                これはどれだけ口コミや写真を充実させても補えない根本的な問題です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                業種によっては、プライマリカテゴリの選択によって「予約ボタン」「メニュー表示」
                「商品表示」など特定のGBP機能が有効化・無効化されることもあります。
                適切なカテゴリ設定は機能の解放にも関わるため、初期設定段階で慎重に選定することが重要です。
              </p>
            </div>
          </div>
        </section>

        {/* プライマリカテゴリとセカンダリカテゴリ */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Primary &amp; Secondary
            </p>
            <h2
              className="font-black text-[28px] mb-8"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              プライマリカテゴリとセカンダリカテゴリ
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                GBPではプライマリカテゴリ（主カテゴリ）を1つ、セカンダリカテゴリ（副カテゴリ）を
                最大9つ設定できます。プライマリカテゴリはメインのサービス・業種を表す最も重要な設定で、
                ここがMEO順位と表示機会に最も大きく影響します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                セカンダリカテゴリはビジネスが提供する関連サービスを補足するために使います。
                例えば「整骨院」をプライマリとして、「鍼灸院」「リハビリセンター」「マッサージ店」
                を副カテゴリに追加することで、複数の治療・整体関連の検索クエリに対応できます。
                ただし、すべての副カテゴリが実際のサービスと対応している必要があります。
              </p>
            </div>
          </div>
        </section>

        {/* カテゴリ選定のポイント */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Selection Guide
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              カテゴリ選定のポイント
            </h2>
            <div className="max-w-3xl">
              {categoryPoints.map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.num}
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-[15px] mb-1.5"
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

        {/* よくある課題と原因 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Common Problems
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              よくある課題と原因
            </h2>
            <div className="max-w-3xl">
              {commonIssues.map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.num}
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-[15px] mb-1.5"
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

        {/* 業種別の活用ポイント */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
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
              {industryPoints.map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.num}
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-[15px] mb-1.5"
                      style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
                    >
                      {item.industry}
                    </h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.notes}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 実装・改善フロー */}
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
              {implementationFlow.map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.num}
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-[15px] mb-1.5"
                      style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
                    >
                      {item.step}
                    </h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              KPIs to Track
            </p>
            <h2
              className="font-black text-[28px] mb-12"
              style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
            >
              成果を見るための指標
            </h2>
            <div className="max-w-3xl">
              {kpis.map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.num}
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-[15px] mb-1.5"
                      style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}
                    >
                      {item.kpi}
                    </h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.where}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="カテゴリ設定に関するよくある質問" bgColor="#FFFFFF" />

        <RelatedPages links={relatedLinks} />

        <PageContactCTA
          heading="カテゴリ設定・GBP最適化のご相談はサイプレスへ"
          body="カテゴリ設定はMEO順位改善の最初の一手です。競合分析を踏まえた最適なカテゴリ選定と、GBP全体の最適化をサイプレスのMEO専門チームがサポートします。"
        />
      </main>
      <Footer />
    </>
  );
}

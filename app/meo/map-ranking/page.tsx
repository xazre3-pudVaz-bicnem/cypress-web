import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Googleマップ上位表示｜ローカルパック3位以内の戦略と実装｜株式会社サイプレス",
  description:
    "Googleマップのローカルパック（上位3枠）に表示されるためのMEO対策。関連性・距離・知名度の3要素を最適化し、競合分析から実装フローまで地域検索での上位表示を実現します。",
  keywords: ["Googleマップ 上位表示", "ローカルパック 対策", "MEO 順位向上", "マップ 3パック", "ローカルパック 3位以内"],
  openGraph: {
    title: "Googleマップ上位表示｜ローカルパック3位以内の戦略と実装｜株式会社サイプレス",
    description: "Googleマップのローカルパック（上位3枠）に表示されるためのMEO対策。関連性・距離・知名度の3要素を最適化し、地域検索での上位表示を実現します。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_18_57.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/map-ranking" },
};

const commonIssues = [
  {
    title: "3位以内に入れない",
    body: "GBPの情報が不完全・競合より口コミ数が少ない・投稿頻度が低いなど、複数の要因が重なって順位が伸びないケースです。GBPスコアの全項目を競合と比較し、差があるポイントから優先的に改善することが基本戦略です。",
  },
  {
    title: "圏外から表示されるようになったが上がらない",
    body: "基本的なGBP整備（情報入力・写真追加・カテゴリ設定）で圏外は脱したが、そこから先が伸びないフェーズです。この段階では口コミ数・評価・投稿頻度・ウェブサイトSEOとの連携強化が突破口になります。継続的な改善行動の積み上げが必要です。",
  },
  {
    title: "競合の対策が分からない",
    body: "上位表示されている競合のGBPを分析すると、口コミ数・写真枚数・投稿頻度・カテゴリ設定・ウェブサイトの充実度など、差をつけられている要素が明確になります。競合分析なしに対策を進めると的外れな施策に終わります。",
  },
  {
    title: "地域によって順位が違う",
    body: "Googleのローカルランキングは検索者の位置情報と店舗の位置を考慮するため、同じキーワードでも検索地点によって順位が変わります。複数地点での順位を計測するツール（Local Falcon等）を使い、エリアごとの強弱を把握することが重要です。",
  },
  {
    title: "スマートフォンとPCで順位が違う",
    body: "スマートフォンでは位置情報の精度が高く、ユーザーの現在地により近い店舗が優遇される傾向があります。PCは検索クエリに含まれる地域名が優先されるため、結果が異なります。モバイルでの順位計測を主軸に置くことをお勧めします。",
  },
  {
    title: "夜間と昼間で順位が違う",
    body: "営業時間・現在地付近の競合ビジネスの営業状況によってローカルランキングが変動することがあります。「今営業中」フィルタが機能する場合もあるため、営業時間の正確な設定と、時間帯別の表示傾向の把握が対策の糸口になります。",
  },
  {
    title: "検索者の位置情報と自店の位置が関係することを知らない",
    body: "Googleは「距離（Distance）」を評価軸の一つとして使うため、検索者から遠い店舗は距離のハンデを背負います。このハンデを克服するには「関連性」と「知名度」を競合より高める必要があり、GBP情報の充実・口コミ蓄積・ウェブSEO連携が鍵です。",
  },
  {
    title: "アルゴリズムの3要素を理解していない",
    body: "Googleのローカルランキングは「関連性（Relevance）」「距離（Distance）」「知名度（Prominence）」の3つで決まります。自社が弱い要素を特定し、そこに集中投資することが効率的な改善の前提です。3要素を意識せずに対策を行うと施策がバラバラになります。",
  },
  {
    title: "短期で改善を求めすぎる",
    body: "Googleマップの順位変動には時間がかかります。基本的なGBP整備で1〜3ヶ月、口コミ蓄積・競合を越えるには3〜6ヶ月が一般的な目安です。短期成果を求めてスパムスタッフィングなどに手を出すと、長期的なペナルティリスクが生じます。",
  },
  {
    title: "Googleのスパムポリシー違反リスク",
    body: "ビジネス名へのキーワードスタッフィング・虚偽の住所登録・口コミの自作自演はGoogleのポリシー違反です。発覚するとGBPの停止・削除という致命的なペナルティを受けます。合法的な手段だけで継続的に改善することが長期的に安全かつ有効な戦略です。",
  },
];

const industryPoints = [
  {
    industry: "飲食店",
    detail: "回転率の高さを示す口コミ数・評価がローカルパック維持の核です。メニュー・写真の充実と「ランチ」「ディナー」「個室」などシーン別カテゴリ設定で関連性を高めます。週複数回の投稿でアクティビティを維持することが有効です。",
  },
  {
    industry: "美容室",
    detail: "口コミ数と評価がローカルパック順位の重要指標です。施術後にQRコードカードで口コミ誘導するなど、獲得フローを仕組み化することが順位向上に直結します。写真はスタイル別・スタッフ別に充実させ、月10枚以上を目標にします。",
  },
  {
    industry: "歯科",
    detail: "「○○駅 歯科」での基本対策に加え、診療科目（矯正・インプラント・小児等）ごとのGBPサービス設定でエリア拡大型と駅近特化型を使い分ける戦略が有効です。診療科目別のローカルSEOページとGBPを連携させることで複数キーワードをカバーできます。",
  },
  {
    industry: "整骨院",
    detail: "「近くの整骨院」クエリへの最適化が来院増加の核心です。GBPの位置情報精度・カテゴリ設定（整骨院・接骨院）の正確化が前提です。症状別（腰痛・肩こり・交通事故）のサービス設定と、それに対応した口コミの蓄積が効果的です。",
  },
  {
    industry: "リフォーム",
    detail: "施工エリアページとGBPの連携が順位向上のポイントです。対応自治体ごとにウェブページを制作し、GBPのサービス提供エリアと一致させることでエリア外への露出を広げられます。施工事例の写真投稿は信頼性・関連性の両方を高めます。",
  },
  {
    industry: "クリニック",
    detail: "診療科目ごとにGBPカテゴリ・サービスを設定し、ローカルSEOと連携したローカル最適化が有効です。「夜間」「土日」「当日受診」などの訴求ポイントをGBP説明文・投稿に明記することで緊急性の高い検索クエリへの対応力が上がります。",
  },
  {
    industry: "不動産",
    detail: "エリアページ×GBP連携が順位向上の鍵です。各対象エリアの専用ページをウェブサイトに制作し、GBPのサービス提供エリアと連動させます。「賃貸」「売買」「管理」などサービス種別ごとのキーワード設計で幅広い検索クエリをカバーします。",
  },
  {
    industry: "学習塾",
    detail: "学校名・駅名の組み合わせキーワードへの対応が差別化ポイントです。「○○中学 近く 塾」「○○駅 個別指導」のように具体性の高いキーワードでGBP・ウェブを最適化します。合格実績・指導実績を写真・投稿で発信することで知名度スコアが向上します。",
  },
];

const implementationFlow = [
  {
    step: "現在のローカルパック表示状況確認",
    desc: "主要キーワード（業種×エリア）でローカルパックに表示されているか、表示されている場合は何位かを確認します。Local FalconなどのMEO順位計測ツールを使い、複数地点での表示状況を把握します。圏外なのか・掲載中なのか・何位なのかを明確にすることが出発点です。",
  },
  {
    step: "競合上位3社の分析",
    desc: "ローカルパック上位3社それぞれの口コミ数・評価・投稿頻度・写真枚数・GBPカテゴリ・ウェブサイトの充実度を調査します。自社との差分を数値で把握することで、どの施策を優先すべきかが明確になります。",
  },
  {
    step: "自社GBPスコアリング",
    desc: "GBPの情報完全性（空欄項目の有無）・写真数・口コミ数と評価・投稿頻度・カテゴリ設定の適切さ・ウェブサイトURL・説明文の充実度を項目ごとにスコアリングします。全項目100点を目指す改善リストを作成します。",
  },
  {
    step: "GAP分析",
    desc: "競合スコアと自社スコアを比較し、差が大きい項目を優先改善リストとして整理します。口コミ数が競合の半分以下・写真が圏外競合と比べて少ないなど、具体的な数値差を把握することで施策の優先度が決まります。",
  },
  {
    step: "NAP統一",
    desc: "ビジネス名（Name）・住所（Address）・電話番号（Phone）をGBP・ウェブサイト・各種ポータルサイト（食べログ・ホットペッパー等）で完全に統一します。NAP不一致はGoogleの信頼性評価を下げる原因になります。",
  },
  {
    step: "カテゴリ最適化",
    desc: "GBPのメインカテゴリに最も集客効果の高い業種カテゴリを設定し、追加カテゴリで関連サービスをカバーします。Googleが認識するカテゴリ名と一致させることが重要で、不正確なカテゴリ設定は関連性スコアを下げます。",
  },
  {
    step: "コンテンツ充実（投稿・写真）",
    desc: "週1回以上の投稿を継続し、月2枚以上の写真を各カテゴリ（外観・内装・スタッフ・商品・サービス）に追加します。360度写真・動画コンテンツも活用し、アクティブなビジネスであることをGoogleに示します。",
  },
  {
    step: "口コミ獲得強化",
    desc: "来店・利用後にQRコードカード・SMS・メールなどで口コミを依頼するフローを仕組み化します。口コミ依頼時にGoogleポリシーに反するインセンティブを与えないよう注意します。全口コミに48時間以内に返信することもスコアに影響します。",
  },
  {
    step: "ウェブサイトSEO連携",
    desc: "GBPのURLに設定するウェブサイトのトップページ・または専用ランディングページにLocalBusinessスキーマを実装します。NAP情報・Googleマップ埋め込み・地域キーワードを含むコンテンツを充実させ、ウェブサイトのドメイン評価がGBPの知名度スコアに好影響を与えます。",
  },
  {
    step: "4週間後の再評価",
    desc: "施策開始から4週間後に順位・表示回数・クリック数・電話タップ数を計測し、改善幅を確認します。大きな変動がない場合は施策の追加・変更を検討します。ローカルパック順位は短期では変動しにくいため、月次サイクルで継続的に評価します。",
  },
];

const kpis = [
  {
    name: "ローカルパック表示順位（主要キーワード）",
    where: "Local Falcon・Mapstalker等のMEO順位計測ツール",
    desc: "主要キーワードでのローカルパック順位を週次でトラッキングします。複数地点での計測で順位のエリア分布を把握します。",
  },
  {
    name: "表示圏外キーワード数→圏内率",
    where: "MEO順位計測ツール＋GBPインサイト「検索クエリ」",
    desc: "計測キーワードのうちローカルパックに表示されている割合を追跡します。施策の効果が表れる先行指標です。",
  },
  {
    name: "GBP検索表示回数推移",
    where: "GBPインサイト「ビジネスを見つける方法」",
    desc: "「Googleマップ」「Google検索」それぞれの表示回数を月次で比較します。表示回数が増えているかが順位改善の確認になります。",
  },
  {
    name: "クリック率（表示回数÷クリック数）",
    where: "GBPインサイト「ビジネスとのやり取り」÷表示回数",
    desc: "表示されていてもクリックされない場合、写真・口コミ数・評価の改善でクリック率向上を図ります。",
  },
  {
    name: "競合比較スコア（口コミ数・評価・写真・投稿）",
    where: "競合GBPの手動確認または競合分析ツール",
    desc: "主要競合との口コミ数差・評価差・写真枚数差を月次で把握し、GAP縮小の進捗を測ります。",
  },
  {
    name: "月間問い合わせ数（GBP経由）",
    where: "GBPインサイト「ビジネスとのやり取り」→電話・ウェブサイトクリック",
    desc: "電話タップ・ウェブサイトクリックの月次推移を追跡します。集客への実業績貢献を示す指標です。",
  },
  {
    name: "ウェブサイト流入数（Googleマップ経由）",
    where: "Google Analytics「参照元/メディア」→google / maps",
    desc: "Googleマップからウェブサイトへの流入数を月次で確認します。GBPからウェブへの誘導効果を測る指標です。",
  },
];

const faqItems = [
  {
    q: "ローカルパックとは何ですか？",
    a: "「渋谷 ランチ」「近く 歯科」などの地域検索で、検索結果上部に表示される地図と3件のビジネス一覧のことです。この上位3枠に入ることがMEO対策の主な目標です。通常のWebサイト検索結果より上に表示されるため、クリック率・来店率への影響が非常に大きいです。",
  },
  {
    q: "Googleマップで上位表示されるまでどのくらいかかりますか？",
    a: "基本的なGBP最適化（情報充実・写真追加・投稿開始）で1〜3ヶ月、口コミ増加や競合との差をつけるには3〜6ヶ月が目安です。競合の強い業種・エリアではさらに時間がかかる場合があります。継続的な運用が前提です。",
  },
  {
    q: "ローカルパックの表示順位は何で決まりますか？",
    a: "Googleは「関連性（Relevance）」「距離（Distance）」「知名度（Prominence）」の3つで決定します。検索クエリとGBPの情報の一致度、検索者からの距離、口コミ・ウェブ上の言及数が主な要因です。3要素を総合的に改善することが重要です。",
  },
  {
    q: "競合が多いエリアでも上位表示できますか？",
    a: "可能です。競合との差をつけるには、GBP情報の完全性・高品質な写真・継続的な口コミ獲得・週1回以上の投稿・ウェブサイトとの連携が重要です。競合分析をもとに弱点を見つけて改善します。長期的な取り組みが差別化につながります。",
  },
  {
    q: "自店舗の周辺エリアでも上位表示できますか？",
    a: "店舗の物理的な住所から離れるほど表示されにくくなります。Googleビジネスプロフィールのサービス提供エリアの設定や、対応エリアのコンテンツをウェブサイトに充実させることで改善できる場合があります。関連性・知名度スコアを高めることで距離のハンデを補える場合があります。",
  },
  {
    q: "口コミ数は何件くらいあればよいですか？",
    a: "業種・エリアの競合状況によって異なります。まず上位3社の口コミ数を確認し、同水準を目標に設定します。口コミ数と同時に評価（星の数）と返信率も重要です。口コミ数が多くても低評価が多い場合は逆効果になることがあります。質と量のバランスが必要です。",
  },
  {
    q: "口コミの返信はすべきですか？",
    a: "全口コミへの返信を強く推奨します。良い口コミには感謝を、悪い口コミには誠実な対応を示すことで、潜在顧客への信頼性が高まります。Googleもオーナーの関与度を評価するため、48時間以内の返信が理想です。返信率が高いビジネスは知名度スコアへの好影響が期待できます。",
  },
  {
    q: "GBP投稿の頻度はどのくらいがよいですか？",
    a: "週1回以上の投稿が推奨されます。お知らせ・キャンペーン・新商品・スタッフ紹介など多様なコンテンツで継続投稿します。Googleはアクティブなビジネスを評価するため、投稿頻度が上がると表示されやすくなります。質より継続性を優先し、まず週1回のルーティンを確立することが重要です。",
  },
  {
    q: "写真はどのくらいの枚数が必要ですか？",
    a: "外観・内装・商品・スタッフ・サービス風景など各カテゴリで3〜5枚以上、合計20枚以上を目安にします。月2枚以上の継続的な追加が重要で、更新が止まっていると評価が下がる可能性があります。高解像度・明るい自然光の写真が推奨されます。",
  },
  {
    q: "NAPとは何ですか？なぜ重要ですか？",
    a: "NAP（Name・Address・Phone）はビジネス名・住所・電話番号の略称です。GBP・ウェブサイト・食べログ・ホットペッパーなど各プラットフォームでNAP情報が一致していることがGoogleの信頼性評価に影響します。不一致があるとGoogleが正しいビジネス情報を特定できず、順位が下がる原因になります。",
  },
  {
    q: "LocalBusinessスキーマとは何ですか？",
    a: "ウェブサイトのHTMLに埋め込む構造化データで、ビジネス名・住所・電話番号・営業時間・サービスエリアなどをGoogleが理解しやすい形式で記述します。LocalBusinessスキーマを実装することで、GBPとウェブサイトの情報整合性が高まり、ローカル検索での評価向上につながります。",
  },
  {
    q: "GBPのカテゴリはどう選べばよいですか？",
    a: "メインカテゴリには最も集客したいサービスに対応するGoogleカテゴリを選択します。Googleが提供するカテゴリリストから選ぶもので、自由入力ではありません。追加カテゴリで関連サービスをカバーします。不適切なカテゴリ設定は関連性スコアを下げるため、競合のカテゴリ設定も参考に正確に設定します。",
  },
  {
    q: "スパムとみなされる行為にはどんなものがありますか？",
    a: "ビジネス名へのキーワード追加・虚偽住所の登録・口コミの自作自演・インセンティブ付き口コミ依頼・競合への嫌がらせ口コミなどはGoogleのポリシー違反です。発覚するとGBPの停止・削除というペナルティを受けます。正規の方法だけで継続的に改善することが長期的に正しい戦略です。",
  },
  {
    q: "MEO対策とSEO対策はどう違いますか？",
    a: "MEO対策はGoogleマップ・ローカルパックへの表示最適化で、GBPが主な対象です。SEO対策はGoogle検索のオーガニック結果への上位表示最適化で、ウェブサイトが主な対象です。両者は連携しており、GBPのウェブサイトURLのドメイン評価がMEOにも影響します。両方を並行して取り組むことで相乗効果が生まれます。",
  },
  {
    q: "MEO対策の効果はどうやって測りますか？",
    a: "GBPインサイトで表示回数・検索クエリ・電話タップ・ウェブサイトクリックを確認します。Local Falconなどのツールでローカルパック順位を計測します。Google Analyticsでマップ経由のウェブ流入を確認します。これらを月次で記録し、施策開始前後の変化を比較することで効果を測ります。",
  },
  {
    q: "業種によってMEO対策の難易度は変わりますか？",
    a: "飲食店・美容室など店舗数が多い業種は競合が多く難易度が高い傾向です。歯科・整骨院・クリニックなどは口コミ数の影響が大きく、早期に蓄積を始めた事業者が有利です。競合の少ない業種・エリアでは基本的なGBP整備だけでも一定の効果が出やすいです。",
  },
  {
    q: "Googleマップと通常検索の両方で上位表示できますか？",
    a: "はい、MEO対策（GBP最適化）とローカルSEO（ウェブサイト最適化）を並行して実施することで、Googleマップのローカルパックと通常検索のオーガニック結果の両方での上位表示を目指すことができます。両方を連動させることで露出が最大化されます。",
  },
  {
    q: "GBPのサービス提供エリアとは何ですか？",
    a: "訪問・出張サービスを提供するビジネスが、対応エリアをGBPに設定できる機能です。設定した対応エリアでの検索に表示されやすくなります。店舗来店型のビジネスはサービス提供エリアを設定しないことをGoogleは推奨していますが、カバーエリアを示す目的で設定することも可能です。",
  },
  {
    q: "複数店舗がある場合はどうすればよいですか？",
    a: "店舗ごとに個別のGBPを作成し、それぞれ最適化します。本部・フランチャイズの場合はGoogleビジネスグループを活用して一元管理できます。店舗間でNAP情報が正確に分かれていること、各店舗のウェブページが個別に存在することが重要です。",
  },
  {
    q: "MEO対策を自社で行うのと代理店に依頼するのはどちらがよいですか？",
    a: "基本的なGBP整備・口コミ返信・投稿は自社運用も可能です。ただし、競合分析・キーワード戦略・ウェブサイトSEO連携・定期的な効果測定・改善策立案は専門知識が必要です。自社リソースが限られる場合は専門の代理店に依頼することで、確実かつ効率的な成果を期待できます。",
  },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策とは", desc: "MEO対策の全体戦略" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "MEO対策の根幹ツール" },
  { href: "/meo/local-keyword", label: "ローカルキーワード", desc: "地域キーワード戦略" },
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

export default function MapRankingPage() {
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
              <span style={{ color: "#0F172A" }}>Googleマップ上位表示</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Map Ranking
            </p>
            <h1
              className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6"
              style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              Googleマップ上位表示<br />ローカルパック対策
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              地域検索で表示される「ローカルパック（上位3枠）」への掲載はMEO対策の核心です。
              Googleが評価する3要素を最適化し、競合に差をつけて上位表示を実現します。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl mt-4" style={{ color: "#374151" }}>
              ローカルパックは通常のWebサイトよりも上部に表示されるため、クリック率・来店率への
              影響が大きく、地域ビジネスにとって最も重要な集客チャネルの一つです。GBP情報の充実・
              写真管理・口コミ対応・投稿頻度を体系的に改善することで、競合を超える表示順位を目指します。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_18_57.png"
            alt="Googleマップ上位表示対策"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "rgba(13,27,42,0.55)" }}
          >
            <p
              className="text-center"
              style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(16px,2.5vw,24px)", letterSpacing: "0.05em" }}
            >
              ローカルパック3枠に入るために
            </p>
          </div>
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
                "Googleのローカルランキングを決める3要素（関連性・距離・知名度）の仕組みと対策",
                "ローカルパック3位以内を逃すとビジネスが失う具体的な機会コスト",
                "競合上位3社の分析方法とGAP分析を使った優先改善リストの作り方",
                "GBP情報完全性・写真・投稿・口コミの全方位改善フロー（10ステップ）",
                "業種別・エリア別のローカルパック対策の具体的なアプローチとポイント",
                "MEO成果を測るKPIと月次モニタリングのサイクル設計",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-bold shrink-0 mt-0.5" style={{ color: "#c4b89a" }}>→</span>
                  <span className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ローカルパック上位を逃すと失う機会 */}
        <section className="py-20" style={{ background: "#0d1b2a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>
              Map Ranking Risks
            </p>
            <h2
              className="font-black text-[28px] mb-10"
              style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}
            >
              ローカルパック上位を逃すと失う4つのビジネス機会
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {[
                { t: "地域検索の大半を競合に奪われる", b: "ローカルパック3枠に入れないと、その地域キーワードへの検索ニーズはほぼすべて競合が獲得します。4位以下はクリック率が激減し、実質的な機会損失が続きます。" },
                { t: "来店意欲が最も高いユーザーを取り逃す", b: "「近く・今日・○○市」で検索するユーザーはすでに来店意思がある顕在層です。広告費をかけて獲得するよりも遙かに価値が高いこの顧客層をMEO未対応で見逃しています。" },
                { t: "広告費に頼りすぎる集客体質になる", b: "Googleマップからの無料集客が機能していないと、リスティング広告費が毎月発生し続けます。MEO対策で無料の集客チャンネルを確立することが長期的なコスト削減につながります。" },
                { t: "口コミ・評価の蓄積が遅れ続ける", b: "露出が少ない店舗は新規来店者が増えず口コミも増えません。口コミが少ないと順位が上がらない悪循環に陥ります。早期に対策を開始するほど競合との差が縮まります。" },
              ].map((item, i) => (
                <div key={i} className="p-6" style={{ border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p className="font-bold text-[14px] mb-2" style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>{item.t}</p>
                  <p className="text-[13px] leading-[1.9]" style={{ color: "rgba(255,255,255,0.75)" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ローカルパック表示を決める3要素 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              3 Key Factors
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ローカルパック表示を決める3要素
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { label: "Relevance", title: "関連性", body: "検索クエリとGBPの情報がどれだけ一致しているか。カテゴリ・説明文・サービス・投稿内容がキーワードと一致するほど表示されやすくなります。" },
                { label: "Distance", title: "距離", body: "検索者の現在地または検索地域からビジネスまでの距離。物理的に近い店舗が優遇されますが、関連性と知名度で補える場合もあります。" },
                { label: "Prominence", title: "知名度", body: "口コミ数・評価・ウェブ上の言及数・GBPの情報充実度などから判断される知名度。高品質な口コミが多いビジネスは距離のハンデを越えることもあります。" },
              ].map((item) => (
                <div key={item.label} className="p-7" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}>
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: "#9CA3AF" }}>{item.label}</p>
                  <h3 className="font-bold text-[18px] mb-3" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.title}</h3>
                  <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>

            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Actions
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              上位表示のための具体的施策
            </h2>
            <div className="max-w-3xl">
              {[
                { n: "01", t: "GBP情報の完全性を高める", b: "店舗名・住所・電話・営業時間・カテゴリ・ウェブサイト・説明文・サービス・商品・属性すべてを正確に入力します。空欄を作らないことが基本です。" },
                { n: "02", t: "高品質な写真を定期的に追加する", b: "外観・内装・商品・スタッフなど各カテゴリに写真を用意し、月2枚以上の定期投稿を継続します。Googleはアクティブなビジネスを評価します。" },
                { n: "03", t: "週1回以上の投稿を継続する", b: "Google投稿機能を使ってお知らせ・キャンペーン・新商品情報を定期発信します。Googleはアクティブなビジネスを高く評価します。" },
                { n: "04", t: "口コミを継続的に獲得し全件返信する", b: "来店・利用後に口コミを依頼するフローを作ります。良い口コミも悪い口コミも必ず返信することでオーナーの信頼性が上がります。" },
                { n: "05", t: "ウェブサイトとの連携を強化する", b: "GBPのURLを正しく設定し、ウェブサイト側にLocalBusinessスキーマ・GoogleマップのURL・NAP情報を実装します。" },
                { n: "06", t: "競合分析に基づいて差別化ポイントを強化する", b: "同業種・同エリアの上位表示ビジネスのGBPを分析し、自社が劣っている項目（写真数・口コミ数・カテゴリ設定等）を重点改善します。" },
              ].map((item) => (
                <div key={item.n} className="flex gap-5 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-1.5" style={{ color: "#0d1b2a" }}>{item.t}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
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

        {/* 業種別の活用ポイント — Section C */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              By Industry
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の活用ポイント
            </h2>
            <div className="grid md:grid-cols-2 gap-0 max-w-4xl">
              {industryPoints.map((item, i) => (
                <div
                  key={i}
                  className="py-6 px-4"
                  style={{
                    borderTop: "1px solid #E8E4DC",
                    borderLeft: i % 2 !== 0 ? "1px solid #E8E4DC" : "none",
                  }}
                >
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

        {/* ローカルパック掲載がビジネスに与える影響 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Why It Matters
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ローカルパック掲載がビジネスに与える影響
            </h2>
            <div className="max-w-3xl">
              {[
                { n: "01", t: "オーガニック検索より上位に表示される", b: "ローカルパックはWebサイトの検索結果より上に表示されます。SEOで上位表示を獲得するより早期に集客効果が出ることが多く、コストパフォーマンスも高いです。" },
                { n: "02", t: "地図・ルート・電話ボタンが直接表示される", b: "ローカルパックには「経路案内」「電話」「ウェブサイト」ボタンが表示されます。ワンタップで来店・電話につながる導線が生まれ、コンバージョン率が上がります。" },
                { n: "03", t: "スマートフォン検索での影響が特に大きい", b: "スマートフォンでは画面の大半をローカルパックが占めます。外出中に「今すぐ」探しているユーザーへの訴求力が高く、即来店につながりやすいです。" },
                { n: "04", t: "長期的な集客基盤を構築できる", b: "GBP最適化・口コミ蓄積・定期投稿を続けることで、広告に依存しない安定した集客基盤を築けます。競合が対策を怠る中、継続することで差は広がります。" },
                { n: "05", t: "業種問わず地域ビジネス全般に有効", b: "飲食店・美容院・医療機関・リフォーム業・士業など、地域に顧客を持つあらゆるビジネスでローカルパック掲載が集客に貢献します。" },
              ].map((item) => (
                <div key={item.n} className="flex gap-5 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-1.5" style={{ color: "#0d1b2a" }}>{item.t}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 実装・改善フロー — Section D */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
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

        <FaqSection items={faqItems} bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="Googleマップ上位表示のご相談"
          body="ローカルパック（上位3枠）への掲載・順位改善のご相談を承っています。現在の状況と競合状況を確認したうえで、具体的な改善プランをご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}

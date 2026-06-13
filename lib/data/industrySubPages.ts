export interface IndustrySubPage {
  industry: string;
  slug: string;
  title: string;
  titleEn: string;
  metaDescription: string;
  intro: string;
  points: { num: string; title: string; body: string }[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string; desc: string }[];
}

export const industrySubPages: IndustrySubPage[] = [
  // Restaurant
  {
    industry: "restaurant",
    slug: "meo",
    title: "飲食店のMEO対策",
    titleEn: "Restaurant MEO",
    metaDescription: "飲食店向けMEO対策の専門ページ。「近くのランチ」「〇〇 カフェ」でGoogleマップ上位表示を実現し、来店客を増やす方法を解説します。",
    intro: "飲食店はGoogleマップ検索（MEO）が最も重要な集客チャネルのひとつです。「近くのランチ」「渋谷 居酒屋」など食事の場所を探す検索でマップ上位に表示されることで、予約・来店につながります。",
    points: [
      { num: "01", title: "「地域名＋料理ジャンル」での上位表示", body: "「〇〇区 ランチ」「〇〇駅 居酒屋」など、ターゲット顧客が検索するキーワードでGoogleマップ上位表示を狙います。" },
      { num: "02", title: "料理・店内写真の充実でクリック率を高める", body: "GBPに高品質な料理写真・店内写真・外観写真を豊富に掲載することで、検索結果でのクリック率と来店意欲を高めます。" },
      { num: "03", title: "口コミ数・平均評価を競合より高める", body: "来店後の口コミ誘導フロー（QRコード・LINEリマインド）を整備し、継続的に口コミを獲得してMEO順位を向上させます。" },
      { num: "04", title: "メニュー・営業時間の常時最新化", body: "GBPのメニュー情報・特別営業日・臨時休業をリアルタイムに更新し、顧客の信頼を守ります。" },
    ],
    faqs: [
      { q: "飲食店のGoogleマップはどのくらいの費用で上位表示できますか？", a: "MEO対策は月額2〜4万円が相場です。競合の少ない地域では1〜2ヶ月で効果が出始めます。" },
      { q: "食べログやホットペッパーとGoogleマップの違いは？", a: "Googleマップは無料で利用でき、アクティブユーザーが最も多いため集客効果が高いです。プラットフォームへの依存リスクを下げるためにもGoogleマップを強化することを推奨します。" },
    ],
    related: [
      { href: "/industries/restaurant", label: "飲食店向けサービス", desc: "総合的な支援内容" },
      { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化" },
      { href: "/solutions/restaurant-marketing", label: "飲食店マーケティング", desc: "統合集客戦略" },
    ],
  },
  {
    industry: "restaurant",
    slug: "sns",
    title: "飲食店のSNS運用",
    titleEn: "Restaurant SNS Marketing",
    metaDescription: "飲食店向けSNS運用（Instagram・LINE公式）の専門ページ。料理写真・来店促進投稿でフォロワーを集め、リピーターを増やす方法を解説します。",
    intro: "飲食店のSNS集客はInstagramとLINE公式の組み合わせが最も効果的です。Instagramで認知を広げ、LINE公式でリピーター定着させる二段階の戦略を構築します。",
    points: [
      { num: "01", title: "料理写真・ビフォーアフターでInstagram集客", body: "プロ品質の料理写真・季節メニュー・調理シーンをInstagramに定期投稿し、食欲をそそるビジュアルで来店意欲を高めます。" },
      { num: "02", title: "LINE公式でリピーター定着", body: "来店客にLINE公式を登録してもらい、クーポン・新メニュー情報を配信してリピート来店を促します。" },
      { num: "03", title: "ストーリーズ・リールで最大露出", body: "日々の仕込み・スタッフの様子・限定メニューをストーリーズ・リールで発信し、フォロワーとの親密感を高めます。" },
      { num: "04", title: "ハッシュタグ戦略で新規フォロワー獲得", body: "地域名・料理ジャンル・シーン別のハッシュタグを組み合わせることで、潜在顧客へのリーチを最大化します。" },
    ],
    faqs: [
      { q: "飲食店のInstagramは何を投稿すれば伸びますか？", a: "料理写真（ビジュアル重視）とリールが最も効果的です。週3〜5投稿を継続することでアルゴリズムに評価されます。" },
    ],
    related: [
      { href: "/industries/restaurant", label: "飲食店向けサービス", desc: "総合支援" },
      { href: "/services/sns", label: "SNS運用代行", desc: "SNS運用の詳細" },
      { href: "/sns/instagram", label: "Instagram運用", desc: "ビジュアルSNS戦略" },
    ],
  },
  {
    industry: "restaurant",
    slug: "web-design",
    title: "飲食店の公式サイト制作",
    titleEn: "Restaurant Website Production",
    metaDescription: "飲食店向け公式ホームページ制作。メニュー掲載・予約機能・アクセス情報・SEO対策を備えた来店促進に特化したサイトを制作します。",
    intro: "飲食店の公式サイトは「メニュー・価格・予約・アクセス」の4要素を最優先に設計します。Googleマップから飛んできたユーザーが迷わず来店・予約できる導線を実現します。",
    points: [
      { num: "01", title: "メニュー・価格を見やすく掲載", body: "訪問者が最初に知りたいメニューと価格をファーストビューからアクセスしやすい構成で掲載します。" },
      { num: "02", title: "予約システムとの連携", body: "TableCheck・Googleで予約・自社予約フォームなどと連携し、サイトから直接予約できる導線を整備します。" },
      { num: "03", title: "SEO対策・LocalBusinessスキーマ実装", body: "「地域名＋料理ジャンル」での検索でも上位表示されるSEO設計と、Googleが店舗情報を正確に認識するための構造化データを実装します。" },
      { num: "04", title: "スマホ最適化・表示速度", body: "スマートフォンから閲覧するユーザーが大半のため、モバイルファーストで設計・開発します。" },
    ],
    faqs: [
      { q: "飲食店の公式サイトはいくらで作れますか？", a: "シンプルな5〜8ページ構成で15〜30万円、予約システム連携・多言語対応を含む場合は30〜80万円が目安です。" },
    ],
    related: [
      { href: "/industries/restaurant", label: "飲食店向けサービス", desc: "総合支援" },
      { href: "/services/web-design", label: "ホームページ制作", desc: "制作の詳細" },
    ],
  },
  // Beauty
  {
    industry: "beauty",
    slug: "meo",
    title: "美容室・サロンのMEO対策",
    titleEn: "Beauty Salon MEO",
    metaDescription: "美容室・サロン向けMEO対策の専門ページ。「地域名＋美容室」でGoogleマップ上位表示を実現し、新規顧客来店を増やす方法を解説します。",
    intro: "美容室・サロンはGoogleマップ検索で「近くの美容室」「〇〇駅 美容院 安い」などのキーワードから新規客が来店する比率が非常に高いです。MEO対策でGoogleマップ上位に表示されることで、広告費なしに新規顧客を獲得できます。",
    points: [
      { num: "01", title: "「地域名＋美容室」でGoogleマップ1位を狙う", body: "対象エリア×「美容室」「ヘアサロン」「カット 安い」等のキーワードでGoogleマップ上位表示を実現します。" },
      { num: "02", title: "スタイル写真・サロン内観でクリック率UP", body: "ビフォーアフター写真・サロン内観・スタッフ写真をGBPに充実させ、検索者の来店意欲を高めます。" },
      { num: "03", title: "口コミ数・4.0以上の平均評価を維持", body: "施術後のLINE・メールでの口コミ依頼フローを整備し、競合より多い口コミ数・高い評価を維持します。" },
      { num: "04", title: "季節・トレンドに合わせたGBP投稿", body: "春の就活ヘア・秋のカラートレンド等の季節投稿でGBPのアクティビティを高め、MEO評価を維持します。" },
    ],
    faqs: [
      { q: "美容室のMEO対策はいつから始めれば良いですか？", a: "開業前（1〜2ヶ月前）からGBP登録を始めることで、オープン日から順位が付き始めます。早めの開始が有利です。" },
    ],
    related: [
      { href: "/industries/beauty", label: "美容室向けサービス", desc: "総合支援" },
      { href: "/solutions/beauty-marketing", label: "美容室マーケティング", desc: "統合集客戦略" },
      { href: "/services/meo", label: "MEO対策", desc: "Googleマップ最適化" },
    ],
  },
  {
    industry: "beauty",
    slug: "sns",
    title: "美容室・サロンのSNS運用",
    titleEn: "Beauty Salon SNS Marketing",
    metaDescription: "美容室・サロン向けInstagram・LINE公式運用。スタイル写真・ビフォーアフターでフォロワーを増やし、来店・リピートにつなげる方法を解説します。",
    intro: "美容室のSNSはInstagramが最強の集客ツールです。スタイル写真・ビフォーアフターを定期投稿し、フォロワーが予約する自然な流れを作ります。LINE公式でリピーター定着を図ります。",
    points: [
      { num: "01", title: "ビフォーアフター投稿で新規顧客にアピール", body: "施術前後の変化を見せるビフォーアフター投稿は最もエンゲージメントが高く、「私もやってみたい」という来店動機を生みます。" },
      { num: "02", title: "スタイリスト別アカウントでファン化", body: "店舗アカウントに加え、スタイリストが個人Instagram運営することで指名客を増やします。" },
      { num: "03", title: "Instagramから予約への自然な動線設計", body: "プロフィールの予約リンク・投稿でのCTA・ストーリーズでの空き状況シェアで予約への障壁を下げます。" },
    ],
    faqs: [
      { q: "スタイリスト個人のInstagramと店舗アカウントはどちらが重要ですか？", a: "両方重要です。指名客はスタイリストをフォロー、新規開拓は店舗アカウントという使い分けが一般的です。" },
    ],
    related: [
      { href: "/industries/beauty", label: "美容室向けサービス", desc: "総合支援" },
      { href: "/services/sns", label: "SNS運用代行", desc: "運用代行の詳細" },
    ],
  },
  // Clinic
  {
    industry: "clinic",
    slug: "meo",
    title: "クリニック・歯科医院のMEO対策",
    titleEn: "Clinic MEO",
    metaDescription: "クリニック・歯科医院向けMEO対策。「地域名＋内科」「地域名＋歯科」でGoogleマップ上位表示を実現し、初診患者の来院を増やす方法を解説します。",
    intro: "クリニック・歯科医院を探す患者の多くがGoogleマップで「近くの病院」「〇〇区 歯科」を検索します。MEO対策でGoogleマップ上位に表示されることで、初診患者の来院が増加します。",
    points: [
      { num: "01", title: "「地域名＋診療科目」でGoogleマップ上位表示", body: "「葛飾区 内科」「亀有 歯科」等のキーワードでGoogleマップ上位に表示されることで、地域の新患獲得が増加します。" },
      { num: "02", title: "医療広告ガイドラインに準拠したGBP設定", body: "厚生労働省の医療広告ガイドラインを遵守した上で、GBPの情報を最大限活用して患者の安心感と来院意欲を高めます。" },
      { num: "03", title: "口コミへの丁寧な返信で信頼性向上", body: "患者の口コミには個人情報を含まない範囲で誠実に返信し、第三者への信頼性と医療機関としての誠実さを示します。" },
      { num: "04", title: "診療メニュー・設備の充実した情報掲載", body: "対応できる症状・医療設備・先生のプロフィールをGBPに掲載し、初診前の不安解消につなげます。" },
    ],
    faqs: [
      { q: "医療機関でもMEO対策は有効ですか？", a: "非常に有効です。特に「地域名＋診療科目」での検索では、Googleマップが先に表示されるケースが多く、初診患者のほとんどがスマートフォンでGoogleマップを確認して来院を判断します。" },
    ],
    related: [
      { href: "/industries/clinic", label: "医療機関向けサービス", desc: "総合支援" },
      { href: "/solutions/clinic-marketing", label: "クリニックマーケティング", desc: "集客戦略" },
      { href: "/services/meo", label: "MEO対策", desc: "Googleマップ最適化" },
    ],
  },
  {
    industry: "clinic",
    slug: "web-design",
    title: "クリニック・歯科医院のホームページ制作",
    titleEn: "Clinic Website Production",
    metaDescription: "クリニック・歯科医院向けホームページ制作。医療広告ガイドライン準拠・LocalBusinessスキーマ・スマホ対応・予約フォームを備えたサイトを制作します。",
    intro: "クリニック・歯科医院のホームページは「患者の不安を解消する情報設計」が最重要です。症状・診療内容・先生紹介・アクセス・予約フォームを最適に配置し、初診患者の予約を増やします。",
    points: [
      { num: "01", title: "医療広告ガイドラインに準拠した情報設計", body: "治療効果の誇張・体験談の無制限掲載等の禁止事項を守りながら、最大限の患者訴求力を持つサイトを設計します。" },
      { num: "02", title: "症状・診療内容のわかりやすい説明", body: "患者が「自分の症状に対応してもらえるか」をすぐに確認できる情報設計で、来院前の不安を解消します。" },
      { num: "03", title: "LocalBusinessスキーマ・SEOで検索上位へ", body: "MedicalOrganizationスキーマと地域SEO施策で、Googleの通常検索でも上位表示を狙います。" },
      { num: "04", title: "オンライン予約・問い合わせフォームの設置", body: "24時間予約可能なオンライン予約システムとの連携で、診療時間外でも予約を受け付けます。" },
    ],
    faqs: [
      { q: "クリニックのホームページ制作費用はいくらですか？", a: "5〜10ページのシンプルな構成で20〜50万円、オンライン予約・多言語対応を含む場合は50〜150万円が目安です。" },
    ],
    related: [
      { href: "/industries/clinic", label: "医療機関向けサービス", desc: "総合支援" },
      { href: "/services/web-design", label: "ホームページ制作", desc: "制作の詳細" },
    ],
  },
  // Construction
  {
    industry: "construction",
    slug: "seo",
    title: "建設業・工務店のSEO対策",
    titleEn: "Construction SEO",
    metaDescription: "建設業・工務店・リフォーム会社向けSEO対策。「地域名＋工事種別」での検索上位表示で、問い合わせ・工事案件を継続的に獲得します。",
    intro: "建設業・工務店・リフォーム会社のSEO対策は「地域名＋工事種別」キーワードが最も効果的です。施工事例・地域実績コンテンツを充実させることで、高意欲の見込み客からの問い合わせを安定的に獲得します。",
    points: [
      { num: "01", title: "「地域名＋工事種別」で検索上位へ", body: "「葛飾区 外壁塗装」「東京 屋根修理」等の地域×工事種別のキーワードで上位表示し、工事依頼を積極検討中のユーザーを獲得します。" },
      { num: "02", title: "施工事例で信頼性と専門性をアピール", body: "実際の施工写真・ビフォーアフター・工事内容・費用感を掲載した施工事例ページはSEOと信頼構築の両方に効果的です。" },
      { num: "03", title: "工事種別ごとのサービスページSEO", body: "外壁塗装・屋根工事・リフォーム・新築等の工事種別ごとに最適化されたサービスページを作成します。" },
      { num: "04", title: "地域・エリア対応ページの設計", body: "対応エリア（市区町村）ごとのローカルSEOページを作成し、地域からの問い合わせを増やします。" },
    ],
    faqs: [
      { q: "建設業でSEO対策はどのくらいの期間で効果が出ますか？", a: "競合の少ない地域キーワードは3ヶ月、競合の強い「東京 外壁塗装」等のキーワードは6〜12ヶ月が目安です。" },
    ],
    related: [
      { href: "/industries/construction", label: "建設業向けサービス", desc: "総合支援" },
      { href: "/solutions/construction-web", label: "建設業Web集客", desc: "統合集客戦略" },
      { href: "/services/seo", label: "SEO対策", desc: "検索上位表示" },
    ],
  },
  {
    industry: "construction",
    slug: "meo",
    title: "建設業・工務店のMEO対策",
    titleEn: "Construction MEO",
    metaDescription: "建設業・工務店向けMEO対策。Googleマップで「地域名＋業者」上位表示を実現し、緊急の工事依頼・問い合わせを増やします。",
    intro: "緊急の修理依頼・リフォームの見積もり依頼はGoogleマップで「近くの工務店」「〇〇区 外壁塗装 業者」を検索するユーザーが増加しています。MEO対策でGoogleマップ上位表示を実現します。",
    points: [
      { num: "01", title: "「地域名＋業者・会社」でマップ上位表示", body: "「葛飾区 工務店」「足立区 外壁塗装 会社」などのキーワードでGoogleマップ上位に表示されるよう最適化します。" },
      { num: "02", title: "施工写真でGBPの信頼性を高める", body: "完成写真・作業風景・施工前後をGBPに掲載することで、施工品質と実績を視覚的に示します。" },
      { num: "03", title: "「すぐに電話できる」導線でCV率UP", body: "GBPに電話番号・問い合わせ可能時間を明記し、緊急依頼のユーザーがすぐに連絡できる状態を作ります。" },
    ],
    faqs: [
      { q: "建設業のGoogleマップ対策は有効ですか？", a: "はい。緊急修理・見積もり依頼の検索はGoogleマップを最初に見る傾向があります。地域に根付いた工務店ほどMEO対策の費用対効果が高い業種です。" },
    ],
    related: [
      { href: "/industries/construction", label: "建設業向けサービス", desc: "総合支援" },
      { href: "/services/meo", label: "MEO対策", desc: "Googleマップ最適化" },
    ],
  },
  // Real Estate
  {
    industry: "real-estate",
    slug: "meo",
    title: "不動産会社のMEO対策",
    titleEn: "Real Estate MEO",
    metaDescription: "不動産会社・管理会社向けMEO対策。「地域名＋不動産」でGoogleマップ上位表示を実現し、物件問い合わせ・来店を増やします。",
    intro: "不動産会社を探すユーザーは「〇〇区 不動産」「〇〇駅 賃貸」でGoogleマップ検索することが多くなっています。MEO対策でGoogleマップ上位に表示されることで、物件問い合わせと来店が増加します。",
    points: [
      { num: "01", title: "「地域名＋不動産・賃貸」でマップ上位", body: "「葛飾区 不動産」「亀有 賃貸」等のキーワードでGoogleマップ3件枠に入り、問い合わせを獲得します。" },
      { num: "02", title: "物件情報・対応エリアをGBPに明記", body: "GBPのサービスセクションに取り扱い物件種別・対応エリアを記載し、検索者との適合度を高めます。" },
      { num: "03", title: "担当者紹介で地元の信頼感を高める", body: "スタッフ写真・地域密着のコメントをGBPに掲載し、「顔の見える地元の不動産会社」として選ばれやすくします。" },
    ],
    faqs: [
      { q: "SUUMOやHOME'SへのMEOとGoogleマップはどちらが重要ですか？", a: "Googleマップは無料で集客できるため、費用対効果の観点では優先度が高いです。ポータルサイトも依然有効なため、並行して活用することを推奨します。" },
    ],
    related: [
      { href: "/industries/real-estate", label: "不動産向けサービス", desc: "総合支援" },
      { href: "/solutions/real-estate-meo", label: "不動産MEO×SEO", desc: "統合集客戦略" },
    ],
  },
  {
    industry: "real-estate",
    slug: "seo",
    title: "不動産会社のSEO対策",
    titleEn: "Real Estate SEO",
    metaDescription: "不動産会社向けSEO対策。「地域名＋賃貸・売買・不動産」での検索上位表示で、ポータルサイト依存から脱却した自社集客を実現します。",
    intro: "不動産会社のSEOは地域名×物件種別の組み合わせキーワードと、地域情報コンテンツが効果的です。SUUMOやHOME'Sに依存せず、Googleから直接問い合わせを得る自社集客チャネルを構築します。",
    points: [
      { num: "01", title: "地域情報コンテンツで検索流入を獲得", body: "「〇〇区の住みやすさ」「〇〇駅の賃貸相場」など、物件検討者が検索するコンテンツを作成してオーガニック流入を増やします。" },
      { num: "02", title: "物件カテゴリページのSEO最適化", body: "「葛飾区 一人暮らし 賃貸」等のページタイトル・メタデータ・内部リンクを最適化し、検索上位を目指します。" },
      { num: "03", title: "地域密着型の実績コンテンツ", body: "地元での取引実績・地域のリアルな情報を発信することで、Googleが評価するE-E-A-T（地域専門性・経験）を高めます。" },
    ],
    faqs: [
      { q: "不動産会社でコンテンツSEOは有効ですか？", a: "はい。物件探しの初期段階でGoogleを使うユーザーは多く、地域情報・物件選びガイドなどのコンテンツで自社サイトへの流入を獲得できます。" },
    ],
    related: [
      { href: "/industries/real-estate", label: "不動産向けサービス", desc: "総合支援" },
      { href: "/services/seo", label: "SEO対策", desc: "検索上位表示" },
    ],
  },
  // Local Store
  {
    industry: "local-store",
    slug: "meo",
    title: "地域店舗のMEO対策",
    titleEn: "Local Store MEO",
    metaDescription: "地域密着型小売店・専門店向けMEO対策。「近くの〇〇」「地域名＋店舗ジャンル」でGoogleマップ上位表示を実現します。",
    intro: "地域の小売店・専門店はGoogleマップが最も重要な集客チャネルです。「近くの〇〇」「〇〇区 ○○店」での検索でマップ上位に表示されることで、来店客を安定して獲得できます。",
    points: [
      { num: "01", title: "「近くの〇〇」でGoogleマップ最上位へ", body: "位置情報連動の検索でGoogleマップに最初に表示されることで、外出中・近くにいるユーザーの来店を獲得します。" },
      { num: "02", title: "在庫・商品情報のGBP掲載", body: "取り扱い商品・サービスをGBPの「商品」セクションに登録し、来店前から興味を持ってもらう情報を提供します。" },
      { num: "03", title: "定休日・特別営業時間の常時更新", body: "祝日・年末年始・臨時休業の情報をGBPにリアルタイム更新し、空振り来店でのクレームを防ぎます。" },
    ],
    faqs: [
      { q: "小さな個人店でもMEO対策は必要ですか？", a: "はい。個人店ほどGoogleマップから来店するユーザーへの依存度が高いです。GBPの基本設定と写真掲載だけでも大きな効果があります。" },
    ],
    related: [
      { href: "/industries/local-store", label: "地域店舗向けサービス", desc: "総合支援" },
      { href: "/services/meo", label: "MEO対策", desc: "Googleマップ最適化" },
    ],
  },
  // Professional Service
  {
    industry: "professional-service",
    slug: "seo",
    title: "士業・専門家のSEO対策",
    titleEn: "Professional Service SEO",
    metaDescription: "弁護士・税理士・司法書士等の士業・専門家向けSEO対策。「地域名＋業種」での検索上位表示でYMYL分野の集客を実現します。",
    intro: "士業・専門家のSEOはYMYL（人の生活・財産に影響する分野）に該当し、E-E-A-Tが特に重視されます。専門性・権威性の高いコンテンツと実績の明示で信頼される上位表示を実現します。",
    points: [
      { num: "01", title: "YMYL対応の専門性コンテンツ作成", body: "資格・経歴・専門領域・解決事例を詳しく記載したコンテンツで、Googleが信頼する専門家サイトとしての評価を確立します。" },
      { num: "02", title: "地域×専門分野のキーワードSEO", body: "「葛飾区 税理士」「亀有 弁護士 相談」等のローカル×専門領域キーワードで上位表示を狙います。" },
      { num: "03", title: "FAQ・相談事例コンテンツで見込み客を集客", body: "顧客がよく調べる「〇〇の費用は？」「〇〇と〇〇の違いは？」等のFAQコンテンツで自社サイトへの流入を増やします。" },
    ],
    faqs: [
      { q: "士業はAIOへの対応も必要ですか？", a: "はい。ChatGPT等のAIに専門家として引用されるためのAIO対策は、士業の新規顧客獲得に特に有効です。構造化データ・著者情報・FAQ最適化を実施することを推奨します。" },
    ],
    related: [
      { href: "/industries/professional-service", label: "士業・専門家向けサービス", desc: "総合支援" },
      { href: "/services/seo", label: "SEO対策", desc: "検索上位表示" },
      { href: "/services/aio", label: "AIO対策", desc: "AI検索への対応" },
    ],
  },
  {
    industry: "professional-service",
    slug: "meo",
    title: "士業・専門家事務所のMEO対策",
    titleEn: "Professional Service MEO",
    metaDescription: "弁護士・税理士・司法書士等の士業事務所向けMEO対策。「地域名＋業種」でGoogleマップ上位表示を実現し、相談予約を増やします。",
    intro: "士業・専門家事務所はGoogleマップで「近くの税理士」「〇〇区 弁護士」を検索するユーザーから相談予約・来所に繋げられます。MEO対策で地域の専門家として選ばれる環境を整えます。",
    points: [
      { num: "01", title: "「地域名＋士業種別」でマップ上位表示", body: "「葛飾区 税理士」「亀有 弁護士」等のキーワードでGoogleマップ上位に表示され、電話相談・予約を獲得します。" },
      { num: "02", title: "専門分野・対応案件のGBP明記", body: "相続・離婚・企業法務・税務申告等の専門領域をGBPに明記し、検索者との適合度を高めます。" },
      { num: "03", title: "無料相談実施をGBPで積極的に告知", body: "「初回相談無料」「電話相談OK」の情報をGBPの投稿・説明文に記載し、来所前のハードルを下げます。" },
    ],
    faqs: [
      { q: "士業事務所でGoogleマップの口コミは増やせますか？", a: "相談者にGoogleマップの口コミを依頼することはできますが、守秘義務の観点から方法を工夫する必要があります。満足した顧客に任意で投稿いただく形が一般的です。" },
    ],
    related: [
      { href: "/industries/professional-service", label: "士業向けサービス", desc: "総合支援" },
      { href: "/services/meo", label: "MEO対策", desc: "Googleマップ最適化" },
    ],
  },
  // Cleaning
  {
    industry: "cleaning",
    slug: "meo",
    title: "清掃・ハウスクリーニングのMEO対策",
    titleEn: "Cleaning Service MEO",
    metaDescription: "清掃業・ハウスクリーニング向けMEO対策。「地域名＋ハウスクリーニング」でGoogleマップ上位表示を実現し、清掃依頼を増やします。",
    intro: "「引越し前にハウスクリーニングを頼みたい」「エアコン清掃業者を探している」—このような即ニーズ検索でGoogleマップ上位に表示されることで、清掃依頼が安定的に入ります。",
    points: [
      { num: "01", title: "「地域名＋清掃種別」でマップ最上位へ", body: "「葛飾区 ハウスクリーニング」「東京 エアコン洗浄」等の依頼直前の検索でGoogleマップ上位表示を実現します。" },
      { num: "02", title: "施工前後写真で品質をアピール", body: "清掃前後のビフォーアフター写真をGBPに豊富に掲載し、「本当にきれいになるのか」という不安を解消します。" },
      { num: "03", title: "対応エリア・即日対応可否を明記", body: "対応可能エリアと即日対応の可否をGBPに明記し、急ぎの依頼ユーザーが迷わず連絡できる状態を作ります。" },
    ],
    faqs: [
      { q: "清掃業はMEO対策で仕事が取れますか？", a: "はい。清掃依頼は「今すぐ頼みたい」という即ニーズが多く、Googleマップから直接電話される率が高い業種です。MEO対策の費用対効果が高い業種のひとつです。" },
    ],
    related: [
      { href: "/industries/cleaning", label: "清掃業向けサービス", desc: "総合支援" },
      { href: "/services/meo", label: "MEO対策", desc: "Googleマップ最適化" },
    ],
  },
];

export function getIndustrySubPage(industry: string, slug: string): IndustrySubPage | undefined {
  return industrySubPages.find((p) => p.industry === industry && p.slug === slug);
}

export function getIndustrySubPagesByIndustry(industry: string): IndustrySubPage[] {
  return industrySubPages.filter((p) => p.industry === industry);
}

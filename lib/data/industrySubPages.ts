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
  // Hair Salon (専業)
  {
    industry: "hair-salon",
    slug: "meo",
    title: "ヘアサロン・美容院のMEO対策",
    titleEn: "Hair Salon MEO",
    metaDescription: "ヘアサロン・美容院向けMEO対策。「地域名＋美容院」でGoogleマップ上位表示を実現し、新規顧客来店と指名予約を増やす方法を解説します。",
    intro: "ヘアサロンはGoogleマップが最も重要な新規集客チャネルです。「駅名＋美容院」「近くの美容室」などの検索でGoogleマップ3件枠に入ることで、月間数十件〜数百件の問い合わせ・予約につながります。",
    points: [
      { num: "01", title: "「駅名＋美容院」でGoogleマップ上位へ", body: "ターゲットエリアの駅名・地域名と「美容院・美容室・ヘアサロン・カット」の組み合わせキーワードで上位表示を狙います。競合分析で上位表示可能な隙間を特定します。" },
      { num: "02", title: "スタイル写真・サロン内観の充実", body: "GBPにビフォーアフター・最新スタイル・サロン内観・スタッフ写真を豊富に登録します。写真の充実度がクリック率と来店率に直結します。" },
      { num: "03", title: "口コミ獲得フローの整備", body: "施術完了時のLINE・QRコードによる口コミ依頼フローを整備します。口コミ数と平均評価が高いほどGoogleマップ順位が向上します。" },
      { num: "04", title: "メニュー・料金をGBPに明記", body: "カット・カラー・パーマ・トリートメントなどのメニューと料金をGBPに登録することで、来店前の不安を解消し予約率を高めます。" },
    ],
    faqs: [
      { q: "ヘアサロンのMEO対策はいくらかかりますか？", a: "月額2〜4万円が相場です。競合状況と目標順位によって最適なプランをご提案します。" },
      { q: "Hotpepperに掲載しているのにGoogleマップも必要ですか？", a: "必要です。ホットペッパーはポータルサイト内での集客ですが、Googleマップはポータル外の自然検索から顧客を獲得できます。掲載費の節約にもつながります。" },
    ],
    related: [
      { href: "/industries/beauty", label: "美容室向けサービス", desc: "総合支援" },
      { href: "/services/meo", label: "MEO対策", desc: "Googleマップ最適化" },
    ],
  },
  {
    industry: "hair-salon",
    slug: "sns",
    title: "ヘアサロンのInstagram・SNS運用",
    titleEn: "Hair Salon SNS Marketing",
    metaDescription: "ヘアサロン・美容院向けInstagram・LINE公式運用。スタイル写真・リールでフォロワーを獲得し、予約・指名客を増やす方法を解説します。",
    intro: "ヘアサロンのInstagramはスタイル写真でフォロワーを獲得し、来店・指名予約につなげる最強の集客ツールです。ビフォーアフター・リール動画・ハッシュタグ戦略を組み合わせた運用方法を解説します。",
    points: [
      { num: "01", title: "ビフォーアフター投稿で来店意欲を高める", body: "施術前後の変化を示すビフォーアフター写真は最もエンゲージメントが高いコンテンツです。「私もこうなりたい」という来店動機を作ります。" },
      { num: "02", title: "スタイリスト個人アカウントで指名客を育てる", body: "スタイリストが個人アカウントを運用することで、顧客との直接的な関係が生まれ指名予約が増加します。" },
      { num: "03", title: "リールで新規フォロワーを獲得", body: "スタイリングプロセス・ビフォーアフターのリール動画は拡散力が高くフォロワー以外に届くため、新規顧客獲得に効果的です。" },
    ],
    faqs: [
      { q: "Instagramを始めたばかりのヘアサロンがフォロワーを増やすには？", a: "①ビフォーアフターリールを週2〜3本投稿する ②地域タグ（#葛飾区美容室）を活用する ③来店客にフォローをお願いする ④Instagram情報をGBPに掲載する の4つから始めましょう。" },
    ],
    related: [
      { href: "/industries/hair-salon", label: "ヘアサロン向けサービス", desc: "総合支援" },
      { href: "/services/sns", label: "SNS運用代行", desc: "SNS運用サービス" },
    ],
  },
  // Nail Salon
  {
    industry: "nail-salon",
    slug: "meo",
    title: "ネイルサロンのMEO対策",
    titleEn: "Nail Salon MEO",
    metaDescription: "ネイルサロン向けMEO対策。「地域名＋ネイルサロン」でGoogleマップ上位表示を実現し、新規顧客・定期来店を増やす方法を解説します。",
    intro: "ネイルサロンを探すユーザーの多くはGoogleマップで「近くのネイルサロン」「〇〇区 ネイル 安い」などを検索します。MEO対策でGoogleマップ上位に表示されることで、新規顧客の安定獲得と予約増加が実現します。",
    points: [
      { num: "01", title: "「地域名＋ネイルサロン・ジェルネイル」で上位表示", body: "「〇〇駅 ネイルサロン」「〇〇区 ジェルネイル 安い」などのキーワードでGoogleマップ上位を狙います。施術メニューもGBPに詳細に登録します。" },
      { num: "02", title: "デザイン写真の充実でクリック率UP", body: "季節・トレンドのネイルデザイン写真をGBPに定期追加します。デザインの多様性を示すことで「このサロンなら理想のネイルができる」という来店動機になります。" },
      { num: "03", title: "ネイリスト紹介で信頼感を高める", body: "GBPのスタッフ写真・説明にネイリストの技術・経歴・得意なデザインを掲載し、初めての顧客の不安を解消します。" },
    ],
    faqs: [
      { q: "ネイルサロンは個人事業主でもMEO対策できますか？", a: "はい、個人サロンほどGoogleマップからの集客効果が高いです。GBPの設定・口コミ獲得・写真充実から始めましょう。費用は月額2〜3万円から対応しています。" },
    ],
    related: [
      { href: "/services/meo", label: "MEO対策", desc: "Googleマップ最適化" },
      { href: "/industries/beauty", label: "美容サロン向けサービス", desc: "総合支援" },
    ],
  },
  {
    industry: "nail-salon",
    slug: "sns",
    title: "ネイルサロンのInstagram・SNS運用",
    titleEn: "Nail Salon SNS Marketing",
    metaDescription: "ネイルサロン向けInstagram・LINE公式運用。ネイルデザイン写真・リールでフォロワーを獲得し予約につなげる方法を解説します。",
    intro: "ネイルサロンのInstagramはデザイン写真が最強のコンテンツです。季節・トレンドのデザインを定期投稿し、「このネイルにしたい！」という予約動機を作ります。",
    points: [
      { num: "01", title: "トレンドデザイン投稿でフォロワー獲得", body: "季節・トレンドを先取りしたネイルデザインを投稿することで、デザインを探しているユーザーに発見されます。" },
      { num: "02", title: "ハッシュタグ×地域タグで地元客を集める", body: "#ジェルネイル #ネイルデザイン等のメジャータグに加え、#葛飾ネイル #北千住ネイル等の地域タグを活用し地域ユーザーにリーチします。" },
      { num: "03", title: "LINE公式でリピーター定着", body: "LINE公式アカウントで来店後のフォロー・次回予約リマインド・季節限定デザインの先行案内を配信しリピート率を高めます。" },
    ],
    faqs: [
      { q: "ネイルサロンはどのSNSが最も集客に効果的ですか？", a: "Instagramがダントツで効果的です。ビジュアル商材のため、デザイン写真の質がフォロワー数と予約数に直結します。Instagram＋LINE公式の組み合わせが最も成果が出やすいです。" },
    ],
    related: [
      { href: "/industries/nail-salon", label: "ネイルサロン向けサービス", desc: "総合支援" },
      { href: "/services/sns", label: "SNS運用代行", desc: "SNS運用サービス" },
    ],
  },
  // Pet Shop
  {
    industry: "pet-shop",
    slug: "meo",
    title: "ペットショップ・トリミングサロンのMEO対策",
    titleEn: "Pet Shop MEO",
    metaDescription: "ペットショップ・トリミングサロン向けMEO対策。「地域名＋ペットショップ・トリミング」でGoogleマップ上位表示を実現し、来店・予約を増やします。",
    intro: "ペットショップ・トリミングサロンを探すペットオーナーの多くが「近くのトリミングサロン」「〇〇区 ペットショップ」でGoogleマップ検索します。MEO対策でGoogleマップ上位に表示されることで、地域の新規顧客を獲得できます。",
    points: [
      { num: "01", title: "「地域名＋トリミング・ペットショップ」で上位表示", body: "「〇〇区 トリミングサロン」「〇〇駅 ペットショップ おすすめ」等のキーワードでGoogleマップ上位を目指します。" },
      { num: "02", title: "ペットの施術写真・店舗写真の充実", body: "トリミング後のワンちゃん・ネコちゃんの写真・店舗の清潔感を示す写真をGBPに充実させます。ペットオーナーは視覚的な安心感を重視します。" },
      { num: "03", title: "対応犬種・サービス内容の詳細掲載", body: "対応できる犬種・体重・サービスメニュー（カット・シャンプー・爪切り等）と料金をGBPに明記し、予約前の確認を容易にします。" },
    ],
    faqs: [
      { q: "ペットショップのGoogleマップ対策は動物販売にも有効ですか？", a: "はい。「〇〇区 ペットショップ」での検索でGBPが上位表示されることで、トリミング・ペット用品・ペット販売への問い合わせが増加します。" },
    ],
    related: [
      { href: "/services/meo", label: "MEO対策", desc: "Googleマップ最適化" },
      { href: "/industries/local-store", label: "地域店舗向けサービス", desc: "総合支援" },
    ],
  },
  // Renovation
  {
    industry: "renovation",
    slug: "meo",
    title: "リフォーム会社・工務店のMEO対策",
    titleEn: "Renovation MEO",
    metaDescription: "リフォーム会社・工務店向けMEO対策。「地域名＋リフォーム」でGoogleマップ上位表示を実現し、無料見積もり依頼を増やします。",
    intro: "リフォームを検討する消費者の多くがGoogleマップで「〇〇区 リフォーム」「近くのリフォーム会社」を検索します。MEO対策でGoogleマップ上位に表示されることで、無料見積もり依頼が増加します。",
    points: [
      { num: "01", title: "「地域名＋リフォーム・内装・外装」で上位表示", body: "「葛飾区 リフォーム」「〇〇区 水回り リフォーム」等のキーワードでGoogleマップ上位表示を実現します。" },
      { num: "02", title: "施工前後の写真で品質を証明", body: "キッチン・浴室・外壁などリフォーム事例の施工前後写真をGBPに掲載します。写真の質と量が信頼性と受注率に直結します。" },
      { num: "03", title: "「無料見積もり受付中」を明示してCV率UP", body: "GBPの説明文・投稿に「無料見積もり受付中」「工事保証あり」などを明示し、問い合わせへの障壁を下げます。" },
    ],
    faqs: [
      { q: "リフォーム会社のMEO対策で何ヶ月で効果が出ますか？", a: "競合が少ない地域では3〜6ヶ月で効果が出始めます。施工写真の充実と口コミ獲得を並行して進めることで改善を早めることができます。" },
    ],
    related: [
      { href: "/industries/construction", label: "建設業向けサービス", desc: "総合支援" },
      { href: "/services/meo", label: "MEO対策", desc: "Googleマップ最適化" },
    ],
  },
  {
    industry: "renovation",
    slug: "seo",
    title: "リフォーム会社のSEO対策",
    titleEn: "Renovation SEO",
    metaDescription: "リフォーム会社・工務店向けSEO対策。「地域名＋リフォーム費用・種類」での検索上位表示でリフォーム見込み客を自社サイトへ集客します。",
    intro: "リフォームはGoogleで情報収集してから問い合わせる比率が高い業種です。「キッチンリフォーム 費用」「外壁塗装 〇〇区」等のキーワードで上位表示し、見込み客を獲得します。",
    points: [
      { num: "01", title: "リフォーム種別×地域のコンテンツを作る", body: "「葛飾区 キッチンリフォーム」「〇〇区 浴室リノベーション 費用」など、地域×リフォーム種別の組み合わせページを作成します。" },
      { num: "02", title: "施工事例ページでE-E-A-Tを証明", body: "施工事例（写真・コメント・費用・期間）を詳細に掲載したページがSEOでもCV率でも高い効果を発揮します。" },
      { num: "03", title: "FAQ・費用ガイドで検索流入を獲得", body: "「リフォームの費用相場は？」「どの業者を選べば良い？」などのFAQコンテンツが情報収集段階のユーザーを集客します。" },
    ],
    faqs: [
      { q: "リフォーム会社のブログは何を書けばSEO効果がありますか？", a: "①施工事例（詳細写真付き）②リフォーム種別の費用相場 ③地域別のリフォーム事情 ④よくある質問・注意点 が特に有効です。" },
    ],
    related: [
      { href: "/industries/renovation", label: "リフォーム向けサービス", desc: "総合支援" },
      { href: "/services/seo", label: "SEO対策", desc: "検索上位表示" },
    ],
  },
  // Plumbing / 水道・電気・設備工事
  {
    industry: "plumbing",
    slug: "meo",
    title: "水道・設備工事業のMEO対策",
    titleEn: "Plumbing MEO",
    metaDescription: "水道工事・排水管・電気工事・設備業向けMEO対策。「地域名＋水道修理・電気工事」でGoogleマップ上位表示を実現し、緊急依頼の問い合わせを増やします。",
    intro: "水道漏れ・排水詰まり・電気トラブルは緊急性が高いため、ユーザーはGoogleマップで「近くの水道修理」「〇〇区 水漏れ 緊急」と即座に検索します。MEO対策でGoogleマップ上位に表示されることで、緊急対応の問い合わせを獲得できます。",
    points: [
      { num: "01", title: "「地域名＋水道修理・設備工事」で緊急依頼を獲得", body: "「葛飾区 水道修理」「〇〇区 排水詰まり 緊急」等のキーワードでGoogleマップ上位を目指します。" },
      { num: "02", title: "24時間・365日対応をGBPに明示", body: "緊急対応可能な業者を探すユーザーが多いため、24時間対応・最短30分駆けつけ等の強みをGBPに明記します。" },
      { num: "03", title: "施工写真・スタッフ写真で信頼感UP", body: "修理・施工の写真・スタッフのプロフィール写真をGBPに掲載し、初めての方でも安心して依頼できる雰囲気を作ります。" },
    ],
    faqs: [
      { q: "設備工事会社のGoogleマップ対策は即効性がありますか？", a: "はい。緊急性の高い検索（水漏れ・詰まりの緊急対応）は購買意図が最も高く、Googleマップ上位表示されれば翌日から問い合わせが増えるケースも多いです。" },
    ],
    related: [
      { href: "/industries/construction", label: "建設業向けサービス", desc: "総合支援" },
      { href: "/services/meo", label: "MEO対策", desc: "Googleマップ最適化" },
    ],
  },
  // School / 学習塾・スクール
  {
    industry: "school",
    slug: "meo",
    title: "学習塾・スクールのMEO対策",
    titleEn: "School MEO",
    metaDescription: "学習塾・スクール・習い事向けMEO対策。「地域名＋塾・スクール・教室」でGoogleマップ上位表示を実現し、体験授業申込みを増やします。",
    intro: "学習塾・スクールを探す保護者や生徒の多くがGoogleマップで「〇〇区 学習塾」「近くの英会話教室」を検索します。MEO対策でGoogleマップ上位に表示されることで、体験授業申込みや入塾相談が増加します。",
    points: [
      { num: "01", title: "「地域名＋塾・スクール・教室」で上位表示", body: "「葛飾区 学習塾」「〇〇駅 英会話教室 子供」等のキーワードでGoogleマップ上位表示を実現します。" },
      { num: "02", title: "授業内容・講師情報をGBPに詳しく掲載", body: "対象学年・科目・講師の資格・授業形式・料金をGBPに明記します。塾・スクール選びは情報量が多いほど安心感が高まります。" },
      { num: "03", title: "口コミで在校生・卒業生の声を集める", body: "保護者・生徒の口コミは他の業種以上に信頼性向上に効果的です。体験授業後・合格報告後のタイミングで口コミ依頼を行います。" },
    ],
    faqs: [
      { q: "学習塾のMEO対策は入塾時期（春・秋）前に強化すべきですか？", a: "はい。3月（新学年前）・9月（夏期講習後）は問い合わせが集中します。この2〜3ヶ月前からMEO強化を始めることを推奨します。" },
    ],
    related: [
      { href: "/services/meo", label: "MEO対策", desc: "Googleマップ最適化" },
      { href: "/industries/local-store", label: "地域ビジネス向けサービス", desc: "総合支援" },
    ],
  },
  {
    industry: "school",
    slug: "web-design",
    title: "学習塾・スクールのホームページ制作",
    titleEn: "School Website Production",
    metaDescription: "学習塾・スクール向けホームページ制作。体験授業申込み・入塾相談の問い合わせを最大化するCVR重視のサイト設計と制作を行います。",
    intro: "学習塾・スクールのホームページは「保護者の不安を解消し、体験授業申込みにつなげる」設計が最重要です。実績・料金・講師紹介・よくある質問を充実させ、入塾を後押しするサイトを制作します。",
    points: [
      { num: "01", title: "体験授業申込みフォームを目立たせる", body: "無料体験授業・入塾説明会への申込みフォームをスマートフォンでも使いやすい位置に配置し、問い合わせへの障壁を下げます。" },
      { num: "02", title: "合格実績・在塾生の声を掲載", body: "合格実績・成績向上事例・保護者の声を掲載することで、「本当に効果があるのか」という最大の不安を解消します。" },
      { num: "03", title: "SEO・ローカルSEO対応サイト設計", body: "「〇〇区 学習塾」「〇〇駅 英語教室 小学生」等のキーワードで検索上位表示されるSEO設計を実装します。" },
    ],
    faqs: [
      { q: "学習塾のサイトにブログは必要ですか？", a: "はい、「中学受験 勉強法」「英語が苦手 克服」などの情報収集キーワードでコンテンツSEOを行うことで、見込み客の流入が増加します。" },
    ],
    related: [
      { href: "/industries/school", label: "スクール向けサービス", desc: "総合支援" },
      { href: "/services/web-design", label: "ホームページ制作", desc: "制作の詳細" },
    ],
  },
  // Osteopathic Clinic / 整体・接骨院
  {
    industry: "osteopathic",
    slug: "meo",
    title: "整体院・接骨院・整骨院のMEO対策",
    titleEn: "Osteopathic Clinic MEO",
    metaDescription: "整体院・接骨院・整骨院向けMEO対策。「地域名＋整体・接骨院・整骨院」でGoogleマップ上位表示を実現し、新規患者来院を増やす方法を解説します。",
    intro: "整体院・接骨院・整骨院を探す患者の多くがGoogleマップで「近くの整体院」「〇〇区 腰痛 整体」を検索します。MEO対策でGoogleマップ上位に表示されることで、新規患者の来院が増加します。",
    points: [
      { num: "01", title: "「地域名＋整体・接骨院・症状」で上位表示", body: "「葛飾区 整体」「〇〇駅 腰痛 整骨院」「近くの肩こり 整体院」等のキーワードでGoogleマップ上位を目指します。" },
      { num: "02", title: "施術内容・資格をGBPに詳しく記載", body: "柔道整復師・鍼灸師等の資格・得意な症状・施術内容・院内写真をGBPに充実させ、初診前の不安を解消します。" },
      { num: "03", title: "ビフォーアフター・患者の声で口コミを増やす", body: "施術後に改善した症状・患者の感想をGBP口コミで収集します。「腰痛が改善した」などの具体的な口コミが新規患者獲得に効果的です。" },
    ],
    faqs: [
      { q: "整体院と整骨院・接骨院ではMEO対策のアプローチは違いますか？", a: "基本のMEO施策は同じですが、整骨院・接骨院は保険適用の表記に注意が必要です。医療広告ガイドラインを遵守しながらGBPを最適化します。" },
    ],
    related: [
      { href: "/services/meo", label: "MEO対策", desc: "Googleマップ最適化" },
      { href: "/industries/clinic", label: "医療・クリニック向けサービス", desc: "総合支援" },
    ],
  },
  {
    industry: "osteopathic",
    slug: "sns",
    title: "整体院・接骨院のSNS運用",
    titleEn: "Osteopathic Clinic SNS",
    metaDescription: "整体院・接骨院・整骨院向けSNS運用。腰痛・肩こり対策の豆知識投稿で新規患者を獲得し、LINE公式でリピーターを定着させる方法を解説します。",
    intro: "整体院・接骨院のSNSは「症状改善の豆知識・ストレッチ解説」がフォロワー増加に最も効果的です。有益な情報提供で院の専門性を示しながら、新規患者獲得につなげます。",
    points: [
      { num: "01", title: "腰痛・肩こり対策の豆知識でフォロワー獲得", body: "「デスクワーカーの腰痛を防ぐ3つのストレッチ」等の有益な情報をInstagramやXで発信し、症状に悩む潜在患者にリーチします。" },
      { num: "02", title: "LINE公式でリピーター来院を促進", body: "施術後の患者にLINE公式登録を促し、次回予約リマインド・季節の症状ケア情報を配信してリピート来院を増やします。" },
    ],
    faqs: [
      { q: "整体院のSNSは何を投稿すれば集客になりますか？", a: "①症状別セルフケア豆知識（腰痛・肩こり・頭痛） ②施術の流れ ③患者の声（本人の了承を得た上で） ④院内紹介・スタッフ紹介 が特に効果的です。" },
    ],
    related: [
      { href: "/industries/osteopathic", label: "整体院向けサービス", desc: "総合支援" },
      { href: "/services/sns", label: "SNS運用代行", desc: "SNS運用サービス" },
    ],
  },
  // Cleaning (add more slugs for existing)
  {
    industry: "cleaning",
    slug: "meo",
    title: "ハウスクリーニング・清掃業のMEO対策",
    titleEn: "Cleaning MEO",
    metaDescription: "ハウスクリーニング・エアコンクリーニング・清掃業向けMEO対策。「地域名＋ハウスクリーニング」でGoogleマップ上位表示を実現し、問い合わせを増やします。",
    intro: "ハウスクリーニングを探す消費者の多くがGoogleマップで「〇〇区 ハウスクリーニング」「近くのエアコンクリーニング」を検索します。MEO対策でGoogleマップ上位に表示されることで定期契約・単発依頼が増加します。",
    points: [
      { num: "01", title: "「地域名＋クリーニング種別」で上位表示", body: "「葛飾区 ハウスクリーニング」「〇〇区 エアコンクリーニング」等のキーワードでGoogleマップ上位を目指します。" },
      { num: "02", title: "清掃前後の写真で品質を証明", body: "清掃前後のビフォーアフター写真をGBPに掲載します。清潔感の視覚的証明が「ここに頼みたい」という来店動機を作ります。" },
      { num: "03", title: "対応エリア・メニューをGBPに詳しく掲載", body: "対応できるサービス（エアコン・浴室・キッチン・引越し等）と対応エリアをGBPのサービスセクションに詳しく登録します。" },
    ],
    faqs: [
      { q: "清掃業のGoogleマップ対策は季節によって効果が変わりますか？", a: "エアコンクリーニングは5〜7月・大掃除は11〜12月が繁忙期です。需要期の2〜3ヶ月前からGBPの投稿を増やし、口コミ獲得を強化することを推奨します。" },
    ],
    related: [
      { href: "/industries/cleaning", label: "清掃業向けサービス", desc: "総合支援" },
      { href: "/services/meo", label: "MEO対策", desc: "Googleマップ最適化" },
    ],
  },
  {
    industry: "cleaning",
    slug: "seo",
    title: "ハウスクリーニング業のSEO対策",
    titleEn: "Cleaning SEO",
    metaDescription: "ハウスクリーニング・清掃業向けSEO対策。「地域名＋クリーニング費用・比較」での上位表示で見込み客を自社サイトへ集客します。",
    intro: "ハウスクリーニングはSEOとMEOの両方から集客する二重戦略が効果的です。「費用相場」「比較」「おすすめ」等の情報収集キーワードでSEO集客し、問い合わせにつなげます。",
    points: [
      { num: "01", title: "「費用・料金」ページのSEO最適化", body: "「ハウスクリーニング 1LDK 費用」「エアコンクリーニング 相場」等の費用系キーワードで上位表示されるコンテンツページを作成します。" },
      { num: "02", title: "地域別の対応エリアページ", body: "「葛飾区 ハウスクリーニング」「〇〇市 清掃業者」等のエリア別ページを作成し、ローカルSEOを強化します。" },
    ],
    faqs: [
      { q: "清掃業でブログを書くメリットはありますか？", a: "はい。「エアコンのカビを自分で除去する方法」「引越し前のハウスクリーニング費用の目安」などの情報記事が検索流入を獲得し、見込み客獲得につながります。" },
    ],
    related: [
      { href: "/industries/cleaning", label: "清掃業向けサービス", desc: "総合支援" },
      { href: "/services/seo", label: "SEO対策", desc: "検索上位表示" },
    ],
  },
  // Restaurant additional slugs
  {
    industry: "restaurant",
    slug: "aio",
    title: "飲食店のAIO対策（AI検索最適化）",
    titleEn: "Restaurant AIO",
    metaDescription: "飲食店向けAIO対策。ChatGPT・GeminiなどのAI検索で「〇〇エリアのおすすめレストラン」として引用されるための施策を解説します。",
    intro: "「ChatGPTに渋谷でおすすめのイタリアンを聞いた」「Geminiで近くのランチを調べた」というユーザー行動が増加しています。AI検索で自店舗が引用されるためのAIO対策を解説します。",
    points: [
      { num: "01", title: "FAQ形式でよくある質問に答える", body: "「予約は必要ですか？」「駐車場はありますか？」「コースの値段は？」等のFAQをサイトとGBPに整備します。AIはFAQ形式の情報を引用しやすいです。" },
      { num: "02", title: "メニュー・価格を構造化して発信", body: "自社サイトのメニューページにMenuスキーマを実装し、AI検索がメニュー情報を正確に認識できるようにします。" },
      { num: "03", title: "E-E-A-T強化のためのシェフ・スタッフ情報", body: "シェフのプロフィール・料理へのこだわり・食材の産地など、一次情報・専門性の高いコンテンツを公式サイトに充実させます。" },
    ],
    faqs: [
      { q: "飲食店はAIO対策を今すぐ始めた方がいいですか？", a: "早めの対応を推奨します。AIへの引用は先行者優位が発生しやすく、今から情報を整備しておくことで将来の検索チャネルを確保できます。" },
    ],
    related: [
      { href: "/industries/restaurant", label: "飲食店向けサービス", desc: "総合支援" },
      { href: "/services/aio", label: "AIO対策", desc: "AI検索最適化" },
    ],
  },
  // Beauty additional slug
  {
    industry: "beauty",
    slug: "web-design",
    title: "美容室・サロンのホームページ制作",
    titleEn: "Beauty Salon Website",
    metaDescription: "美容室・サロン向けホームページ制作。予約機能・スタイリスト紹介・SEO対策を備えた集客に特化したサイトを制作します。",
    intro: "美容室・サロンの公式サイトは「ブランドイメージの確立」と「予約促進」の2軸で設計します。スタイリストの個性・サロンの世界観を伝えながら、来店予約につながる導線を作ります。",
    points: [
      { num: "01", title: "ブランドイメージを体現するデザイン", body: "写真・フォント・カラーでサロンの世界観を表現します。安さを売りにするサロンと高級感を売りにするサロンでは設計が異なります。" },
      { num: "02", title: "スタイリスト紹介で指名予約を促進", body: "スタイリストごとの得意技術・こだわり・ポートフォリオを掲載することで、サロン来訪前から信頼関係を築きます。" },
      { num: "03", title: "ネット予約システムとの連携", body: "HOT PEPPER・Airリザーブ・自社フォームからのネット予約導線を整備し、24時間予約受付を実現します。" },
    ],
    faqs: [
      { q: "美容室のホームページはWordPressとNext.jsどちらが良いですか？", a: "更新頻度が高い場合はWordPress、高速表示・デザイン性を重視する場合はNext.jsが有利です。担当者のスキルと更新ニーズに合わせて選定します。" },
    ],
    related: [
      { href: "/industries/beauty", label: "美容室向けサービス", desc: "総合支援" },
      { href: "/services/web-design", label: "ホームページ制作", desc: "制作の詳細" },
    ],
  },
  // Clinic additional slug
  {
    industry: "clinic",
    slug: "seo",
    title: "クリニック・歯科医院のSEO対策",
    titleEn: "Clinic SEO",
    metaDescription: "クリニック・歯科医院向けSEO対策。「地域名＋診療科目・症状」での検索上位表示で新患獲得を強化します。医療広告ガイドラインに準拠した施策を解説します。",
    intro: "クリニック・歯科医院のSEOは「地域名＋診療科目・症状」での上位表示と医療広告ガイドラインへの準拠が重要です。患者の信頼を獲得しながら検索流入を増やす方法を解説します。",
    points: [
      { num: "01", title: "「地域名＋症状・診療科目」で検索上位表示", body: "「葛飾区 内科」「〇〇駅 歯科 インプラント」等のキーワードで上位表示されるコンテンツページを作成します。" },
      { num: "02", title: "医療広告ガイドライン準拠のコンテンツ", body: "保証表現・比較優良表現を避けながら、専門性・実績を伝えるコンテンツを作成します。" },
      { num: "03", title: "症状別・診療内容別のランディングページ", body: "「腰痛治療の流れ」「歯周病の症状と治療」等の症状別ページを作成し、悩みを持つ患者が自然に来院相談に至る導線を設計します。" },
    ],
    faqs: [
      { q: "医療機関のSEOは一般のビジネスと何が違いますか？", a: "YMYLカテゴリに分類されるため、E-E-A-T（専門性・権威性・信頼性）が特に重視されます。医師の資格・専門領域・学会所属などを明示することが重要です。" },
    ],
    related: [
      { href: "/industries/clinic", label: "医療機関向けサービス", desc: "総合支援" },
      { href: "/services/seo", label: "SEO対策", desc: "検索上位表示" },
    ],
  },
];

export function getIndustrySubPage(industry: string, slug: string): IndustrySubPage | undefined {
  return industrySubPages.find((p) => p.industry === industry && p.slug === slug);
}

export function getIndustrySubPagesByIndustry(industry: string): IndustrySubPage[] {
  return industrySubPages.filter((p) => p.industry === industry);
}

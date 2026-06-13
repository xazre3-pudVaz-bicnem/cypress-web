export interface ChecklistPage {
  slug: string;
  title: string;
  titleEn: string;
  metaDescription: string;
  intro: string;
  sections: {
    heading: string;
    items: { text: string; note?: string }[];
  }[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string; desc: string }[];
}

export const checklistPages: ChecklistPage[] = [
  {
    slug: "meo-setup",
    title: "MEO対策の初期設定チェックリスト",
    titleEn: "MEO Setup Checklist",
    metaDescription: "Googleビジネスプロフィール（GBP）のMEO初期設定チェックリスト。MEO対策を始める前に確認すべき必須項目をすべて網羅しています。",
    intro: "MEO対策を効果的に始めるために確認すべきGoogleビジネスプロフィール（GBP）の初期設定項目を一覧にしました。すべての項目をクリアすることで、Googleマップでの上位表示を狙える基盤が整います。",
    sections: [
      {
        heading: "GBP基本情報の設定",
        items: [
          { text: "ビジネス名を正式名称で登録している（キャッチコピー・キーワードの付加は禁止）" },
          { text: "メインカテゴリを最も適切な業種で設定している", note: "サブカテゴリも複数設定することを推奨" },
          { text: "住所を正確に入力している（番地・ビル名まで正確に）" },
          { text: "電話番号を正確に入力している（03-XXXX-XXXX 形式）" },
          { text: "営業時間を正確に設定している（定休日・特別営業日も含む）" },
          { text: "公式ウェブサイトのURLを設定している" },
          { text: "ビジネスの説明文を750文字以内で入力している（キーワードを自然に含める）" },
        ],
      },
      {
        heading: "写真・動画の整備",
        items: [
          { text: "プロフィール写真（ロゴ）を設定している" },
          { text: "カバー写真（外観・店内の雰囲気が伝わる写真）を設定している" },
          { text: "外観写真（昼・夜・入口）を複数枚アップロードしている" },
          { text: "店内写真（雰囲気・席・内装）を複数枚アップロードしている" },
          { text: "商品・サービスの写真をアップロードしている" },
          { text: "スタッフ・チームの写真をアップロードしている", note: "信頼性向上に効果的" },
          { text: "全写真が高解像度・明るい・正向きで整っている" },
        ],
      },
      {
        heading: "サービス・メニューの設定",
        items: [
          { text: "提供しているサービス・商品を「商品」または「サービス」セクションに登録している" },
          { text: "サービスごとに価格・説明を入力している" },
          { text: "飲食店の場合はメニューリンクまたはメニュー情報を設定している" },
          { text: "予約リンク（Googleで予約、または自社予約ページ）を設定している" },
        ],
      },
      {
        heading: "口コミの準備",
        items: [
          { text: "口コミ獲得用の短縮URLを発行している（GBP管理画面からコピー）" },
          { text: "口コミ依頼のQRコードを店内に設置する準備をしている" },
          { text: "口コミへの返信ポリシーを決めている（24時間以内返信を推奨）" },
        ],
      },
      {
        heading: "計測・確認",
        items: [
          { text: "GBPのオーナー確認（本人確認）が完了している" },
          { text: "Google Analyticsとの連携が完了している（可能な場合）" },
          { text: "Googleアカウントの2段階認証を設定してセキュリティを強化している" },
        ],
      },
    ],
    faqs: [
      { q: "GBPの初期設定に時間はどのくらいかかりますか？", a: "基本情報の入力は1〜2時間、写真の準備・撮影を含めると半日〜1日程度かかります。オーナー確認（本人確認）の審査期間は方法によって数分〜2週間かかります。" },
      { q: "チェックリストをすべてクリアするとどうなりますか？", a: "GBPが充実した状態になり、Googleマップでの上位表示の基盤が整います。次のステップは定期的な投稿・口コミ獲得・情報更新の継続です。" },
    ],
    related: [
      { href: "/services/meo", label: "MEO対策サービス", desc: "プロによるMEO設定" },
      { href: "/glossary/gbp", label: "GBPとは", desc: "Googleビジネスプロフィール解説" },
      { href: "/checklist/meo-monthly", label: "MEO月次チェックリスト", desc: "毎月の確認項目" },
    ],
  },
  {
    slug: "meo-monthly",
    title: "MEO運用の月次チェックリスト",
    titleEn: "MEO Monthly Maintenance Checklist",
    metaDescription: "MEO対策の月次チェックリスト。毎月確認・実施すべきGBP更新・口コミ対応・競合確認の項目を一覧化しています。",
    intro: "MEO対策は初期設定だけでなく、毎月の継続的な更新・確認が順位維持・向上に欠かせません。このチェックリストを使って月次タスクを漏れなく実施してください。",
    sections: [
      {
        heading: "GBP投稿・更新（週次）",
        items: [
          { text: "最新情報投稿（イベント・お知らせ・新メニュー等）を週1〜2回行っている" },
          { text: "季節・イベントに合わせた写真を追加している" },
          { text: "営業時間・定休日の変更がある場合は即時更新している" },
          { text: "特別営業日（年末年始・お盆等）の事前登録をしている" },
        ],
      },
      {
        heading: "口コミ管理（週次）",
        items: [
          { text: "新しい口コミに24時間以内に返信している" },
          { text: "ネガティブな口コミに誠実に対応している" },
          { text: "Googleガイドライン違反の口コミへの申告をしている" },
          { text: "口コミ獲得施策（QRコード・メール・LINE）を継続している" },
        ],
      },
      {
        heading: "月次確認・計測",
        items: [
          { text: "GBPインサイト（電話タップ数・ルート案内数）を確認している" },
          { text: "主要キーワードのGoogleマップ順位を計測している" },
          { text: "競合の順位・口コミ数・写真を確認して差を把握している" },
          { text: "写真の閲覧数が増えているか確認している" },
        ],
      },
      {
        heading: "改善アクション（月次）",
        items: [
          { text: "前月比で改善した点・悪化した点を分析している" },
          { text: "競合が実施している施策で自社が遅れている点を特定している" },
          { text: "翌月の投稿・写真・改善施策の計画を立てている" },
        ],
      },
    ],
    faqs: [
      { q: "MEOの月次作業にどのくらいの時間がかかりますか？", a: "GBP投稿（週1〜2回）・口コミ返信・月次確認で月4〜8時間が目安です。専任担当者がいない場合は、サイプレスのGBP管理代行サービスをご検討ください。" },
    ],
    related: [
      { href: "/checklist/meo-setup", label: "MEO初期設定チェック", desc: "設定の確認" },
      { href: "/support/account-management", label: "GBP管理代行", desc: "月次作業の代行" },
      { href: "/services/meo", label: "MEO対策サービス", desc: "総合MEO支援" },
    ],
  },
  {
    slug: "seo-basics",
    title: "SEO対策 基本チェックリスト",
    titleEn: "SEO Basics Checklist",
    metaDescription: "SEO対策の基本チェックリスト。全ページに必要な内部SEO最適化の必須項目を一覧化しています。サイト立ち上げ・リニューアル時の確認に最適です。",
    intro: "サイト公開前・リニューアル後に確認すべきSEO対策の基本項目です。内部SEO・コンテンツ・技術的SEOの必須項目を網羅しています。",
    sections: [
      {
        heading: "ページ単位のSEO設定",
        items: [
          { text: "各ページにターゲットキーワードを含むユニークなtitleタグを設定している", note: "30〜60文字が目安" },
          { text: "各ページにユニークなmeta descriptionを120文字以内で設定している" },
          { text: "h1タグが各ページに1つだけあり、ターゲットキーワードを含んでいる" },
          { text: "h2・h3タグを論理的な構造で使用している" },
          { text: "画像にalt属性を設定している（内容を説明するテキスト）" },
          { text: "canonicalタグを設定して重複コンテンツを回避している" },
        ],
      },
      {
        heading: "サイト全体のSEO設定",
        items: [
          { text: "XMLサイトマップを作成してSearch Consoleに送信している" },
          { text: "robots.txtを適切に設定している（クロールされたくないページを除外）" },
          { text: "SSLが正常に設定されており、httpsでアクセスできる" },
          { text: "wwwあり/なしのリダイレクトが正しく設定されている" },
          { text: "Google Search ConsoleとGoogle Analyticsを設定している" },
          { text: "構造化データ（Schema.org）を必要なページに実装している" },
        ],
      },
      {
        heading: "表示速度・モバイル対応",
        items: [
          { text: "PageSpeed Insightsでモバイルスコア60以上を達成している" },
          { text: "LCP（最大コンテンツ描画）が2.5秒以内になっている" },
          { text: "CLS（累積レイアウトシフト）が0.1以下になっている" },
          { text: "全ページがスマートフォンで正常に表示されている" },
          { text: "画像をWebP形式またはnext/imageで最適化している" },
        ],
      },
      {
        heading: "コンテンツ品質",
        items: [
          { text: "全ページに300文字以上の本文コンテンツがある" },
          { text: "重複コンテンツが存在しないことを確認している" },
          { text: "著者情報・会社情報がサイトに明記されている（E-E-A-T対策）" },
          { text: "外部リンクは信頼性の高いサイトへのリンクのみである" },
        ],
      },
    ],
    faqs: [
      { q: "SEOチェックリストのすべてをクリアするとどのくらい効果がありますか？", a: "基本的なSEO設定が整うことで、検索エンジンのクロール・インデックスが改善されます。ただし、SEO順位はコンテンツ品質・被リンク等の要因も重要で、基本設定だけで上位表示が保証されるわけではありません。" },
    ],
    related: [
      { href: "/services/seo", label: "SEO対策サービス", desc: "プロによるSEO対策" },
      { href: "/checklist/content-seo", label: "コンテンツSEOチェックリスト", desc: "記事の品質確認" },
      { href: "/support/audit", label: "サイト診断", desc: "専門家による診断" },
    ],
  },
  {
    slug: "content-seo",
    title: "コンテンツSEO チェックリスト",
    titleEn: "Content SEO Checklist",
    metaDescription: "SEOに強いブログ記事・コンテンツを書くためのチェックリスト。公開前に確認すべきキーワード・構成・品質の項目を一覧化しています。",
    intro: "SEO記事を公開する前に確認すべき品質チェックリストです。キーワード配置・見出し構造・E-E-A-T・AIO対策まで網羅しています。",
    sections: [
      {
        heading: "キーワード・構成の確認",
        items: [
          { text: "タイトルにターゲットキーワードを含んでいる" },
          { text: "メタディスクリプション（120文字以内）にキーワードを含んでいる" },
          { text: "h1（記事タイトル）はユーザーの検索意図に答えている" },
          { text: "h2・h3見出しに関連キーワードを自然に含んでいる" },
          { text: "本文の冒頭200文字以内にターゲットキーワードが含まれている" },
          { text: "キーワードが不自然に繰り返されていない（キーワードスタッフィング禁止）" },
        ],
      },
      {
        heading: "E-E-A-T・コンテンツ品質",
        items: [
          { text: "著者名と専門性（資格・経歴・役職）が明記されている" },
          { text: "実際の経験・体験に基づく一次情報が含まれている" },
          { text: "数値・統計データは信頼性の高い出典を明記している" },
          { text: "公開日・更新日が明記されている" },
          { text: "読者の疑問に答えるFAQセクションを設けている" },
          { text: "記事の内容が競合の上位記事より詳しく・役立つものになっている" },
        ],
      },
      {
        heading: "AIO（AI検索）対策",
        items: [
          { text: "見出し（h2・h3）が質問形式または明確なトピックになっている" },
          { text: "FAQはQ&A形式で簡潔な回答が1〜3文で書かれている" },
          { text: "記事にFAQPageスキーマ（構造化データ）が実装されている" },
          { text: "AIが引用しやすい簡潔な定義・説明を含んでいる" },
        ],
      },
      {
        heading: "ユーザー体験・内部リンク",
        items: [
          { text: "関連する自社の記事・サービスページへの内部リンクを設置している" },
          { text: "画像・図表でコンテンツの視認性を高めている" },
          { text: "スマホで読みやすい段落の長さになっている（3〜5行を目安）" },
          { text: "記事末尾に関連記事・次のアクション（CTA）を設置している" },
        ],
      },
    ],
    faqs: [
      { q: "コンテンツSEOチェックリストはAIで書いた記事にも使えますか？", a: "はい。AIで生成した初稿をこのチェックリストで確認・修正することで、品質を高めることができます。特に「一次情報・著者情報・出典明記」はAI生成だけでは補えないため、必ず人間が確認・追記してください。" },
    ],
    related: [
      { href: "/solutions/seo-content", label: "SEO×コンテンツ", desc: "コンテンツ戦略" },
      { href: "/support/content-creation", label: "コンテンツ制作代行", desc: "専門家に依頼" },
      { href: "/checklist/seo-basics", label: "SEO基本チェック", desc: "技術的SEO確認" },
    ],
  },
  {
    slug: "website-launch",
    title: "ホームページ公開前チェックリスト",
    titleEn: "Website Launch Checklist",
    metaDescription: "ホームページ公開前に確認すべきチェックリスト。SEO・セキュリティ・表示確認・フォーム動作・アナリティクス設定まで網羅しています。",
    intro: "新規ホームページを公開する前に確認すべき項目の完全リストです。公開後のトラブルを防ぎ、SEO・セキュリティ・ユーザー体験を最初から最適化するために必ずチェックしてください。",
    sections: [
      {
        heading: "コンテンツ・情報の確認",
        items: [
          { text: "全ページの文章を誤字脱字チェックしている" },
          { text: "電話番号・住所・メールアドレスが正確に表記されている" },
          { text: "価格・料金が最新情報で正確に掲載されている" },
          { text: "リンクがすべて正しいURLに向いている（リンク切れなし）" },
          { text: "画像が正しく表示されており、alt属性が設定されている" },
          { text: "著作権を持たない画像を使用していないことを確認している" },
        ],
      },
      {
        heading: "SEO設定",
        items: [
          { text: "全ページにユニークなtitleとmeta descriptionを設定している" },
          { text: "XMLサイトマップを作成・設置している" },
          { text: "robots.txtを適切に設定している" },
          { text: "canonicalタグを設定している" },
          { text: "OGPメタタグ（og:title・og:description・og:image）を設定している" },
          { text: "LocalBusiness等の構造化データを実装している" },
        ],
      },
      {
        heading: "技術・セキュリティ",
        items: [
          { text: "SSL証明書（https）が正常に機能している" },
          { text: "全ページがhttpsにリダイレクトされている" },
          { text: "404エラーページが適切に表示されている" },
          { text: "問い合わせフォームが正常に送信できることを確認している" },
          { text: "フォームにスパム防止（reCAPTCHA等）が実装されている" },
        ],
      },
      {
        heading: "表示・動作確認",
        items: [
          { text: "iPhone・Androidのスマートフォンで正常に表示されている" },
          { text: "Chrome・Safari・Firefox等の主要ブラウザで表示確認している" },
          { text: "タブレット（iPad等）での表示を確認している" },
          { text: "PageSpeed InsightsでモバイルLCP2.5秒以内を確認している" },
        ],
      },
      {
        heading: "計測・分析設定",
        items: [
          { text: "Google Analyticsを設定してデータが収集されている" },
          { text: "Google Search ConsoleにサイトのURLを設定している" },
          { text: "問い合わせ完了・購入完了等のCV計測を設定している" },
          { text: "Search ConsoleにXMLサイトマップを送信している" },
        ],
      },
    ],
    faqs: [
      { q: "公開前チェックリストはどのタイミングで確認すべきですか？", a: "本番公開の1〜3日前にすべての項目を確認することを推奨します。修正が発生した場合の対処時間を確保するためです。公開直前の最終確認として、フォーム動作・計測設定を再確認します。" },
    ],
    related: [
      { href: "/services/web-design", label: "ホームページ制作", desc: "公開までサポート" },
      { href: "/support/audit", label: "サイト診断", desc: "専門家による確認" },
      { href: "/support/analytics-setup", label: "アナリティクス設定", desc: "計測環境の構築" },
    ],
  },
  {
    slug: "sns-account-setup",
    title: "SNSアカウント開設チェックリスト",
    titleEn: "SNS Account Setup Checklist",
    metaDescription: "Instagram・LINE公式・Facebook等のSNSアカウント開設チェックリスト。ビジネスアカウントの設定・プロフィール最適化の必須項目を確認します。",
    intro: "SNSビジネスアカウントを正しく設定するためのチェックリストです。Instagram・LINE公式・Facebookの開設時に確認すべき項目を網羅しています。",
    sections: [
      {
        heading: "Instagram ビジネスアカウント設定",
        items: [
          { text: "個人アカウントからプロアカウント（ビジネス）に切り替えている" },
          { text: "プロフィール写真にロゴまたはブランドイメージを設定している" },
          { text: "ユーザーネーム（@ID）がわかりやすく検索されやすい名前になっている" },
          { text: "ビオ（プロフィール文）に業種・所在地・特徴・CTA（リンクへの誘導）を含めている" },
          { text: "ウェブサイトリンクを設定している（または Linktreeを活用）" },
          { text: "Facebookページとの連携を設定している" },
          { text: "インサイト（分析ツール）にアクセスできることを確認している" },
        ],
      },
      {
        heading: "LINE公式アカウント設定",
        items: [
          { text: "アイコン画像・カバー画像を設定している" },
          { text: "あいさつメッセージ（友だち追加時の自動メッセージ）を設定している" },
          { text: "リッチメニュー（下部の固定メニュー）を設定している" },
          { text: "友達追加QRコードを発行してオフライン店舗に設置している" },
          { text: "ウェブサイト・GBPにLINE追加ボタンを設置している" },
        ],
      },
      {
        heading: "共通設定",
        items: [
          { text: "すべてのSNSで統一したブランド名・ビジュアルを使用している" },
          { text: "投稿テンプレート・カラーパレットを決定している" },
          { text: "投稿カレンダー（最低1ヶ月分）を作成している" },
          { text: "通知設定をしてコメント・DM・メンションに気づける状態にしている" },
          { text: "管理者アカウントの2段階認証を設定している" },
        ],
      },
    ],
    faqs: [
      { q: "Instagramのプロフィール文（ビオ）は何文字以内ですか？", a: "Instagramのビオは150文字以内です。業種・所在地・特徴・フォローのメリット・ウェブサイトへの誘導を簡潔に含めることが重要です。" },
    ],
    related: [
      { href: "/services/sns", label: "SNS運用代行", desc: "開設後の運用支援" },
      { href: "/sns/instagram", label: "Instagram運用", desc: "Instagram活用ガイド" },
      { href: "/sns/line", label: "LINE公式アカウント", desc: "LINE活用ガイド" },
    ],
  },
  {
    slug: "review-management",
    title: "Googleマップ 口コミ管理チェックリスト",
    titleEn: "Google Review Management Checklist",
    metaDescription: "Googleマップの口コミ管理チェックリスト。口コミ獲得・返信・ネガティブ口コミへの対処の月次確認項目を一覧化しています。",
    intro: "Googleマップの口コミはMEO対策において最も重要な要素のひとつです。口コミを増やし・適切に返信し・ネガティブ口コミに誠実に対応するための月次チェックリストです。",
    sections: [
      {
        heading: "口コミ獲得施策の確認",
        items: [
          { text: "レジ近くやテーブルにGoogle口コミ用QRコードを設置している" },
          { text: "来店後のメールやLINEで口コミ依頼を行っている" },
          { text: "スタッフが口頭でGoogleマップへの口コミを依頼している" },
          { text: "ウェブサイトにGoogleマップへの口コミ誘導リンクを設置している" },
          { text: "新規口コミが月X件以上獲得できているか確認している" },
        ],
      },
      {
        heading: "口コミへの返信",
        items: [
          { text: "すべての新着口コミに24時間以内に返信している" },
          { text: "ポジティブな口コミには感謝と具体的な言及を含んだ返信をしている" },
          { text: "ネガティブな口コミには冷静・誠実な返信をしている（感情的な返信は禁止）" },
          { text: "返信でプライバシー情報（顧客の個人情報）を公開していない" },
          { text: "返信テンプレートを用意してすべての口コミに対応できている" },
        ],
      },
      {
        heading: "口コミの分析・改善",
        items: [
          { text: "月次で口コミ数・平均評価の変化を確認している" },
          { text: "ネガティブな口コミに共通する改善点を洗い出している" },
          { text: "競合店の口コミ数・平均評価を比較している" },
          { text: "Googleガイドライン違反の口コミ（虚偽・スパム等）を申告している" },
        ],
      },
    ],
    faqs: [
      { q: "口コミへの返信は必ずしないといけませんか？", a: "義務ではありませんが、返信することで潜在顧客への信頼性向上に大きく貢献します。特にネガティブな口コミへの誠実な返信は、第三者から見て「真摯なお店・会社」という印象を与え、MEO評価にも間接的に好影響があります。" },
    ],
    related: [
      { href: "/meo/review-management", label: "口コミ管理サービス", desc: "口コミ獲得・返信の代行" },
      { href: "/checklist/meo-monthly", label: "MEO月次チェック", desc: "MEO全体の確認" },
      { href: "/solutions/reputation-management", label: "評判管理", desc: "ネット評判の総合対策" },
    ],
  },
  {
    slug: "gbp-photo",
    title: "GBP写真最適化チェックリスト",
    titleEn: "GBP Photo Optimization Checklist",
    metaDescription: "Googleビジネスプロフィールの写真最適化チェックリスト。GBPに掲載する写真の種類・品質・数の確認項目を一覧化しています。",
    intro: "GBPに掲載する写真はMEO対策において重要な要素です。写真が多く・高品質な店舗ほどGoogleの評価が高まります。このチェックリストで写真の充実度を確認してください。",
    sections: [
      {
        heading: "必須写真の確認",
        items: [
          { text: "プロフィール写真（ロゴ・顔写真）を設定している" },
          { text: "カバー写真（お店の雰囲気が最も伝わる写真）を設定している" },
          { text: "外観写真（昼）を設定している" },
          { text: "外観写真（夜）を設定している", note: "夜間営業がある場合" },
          { text: "入口・看板の写真を設定している" },
          { text: "店内全体の雰囲気写真を設定している" },
        ],
      },
      {
        heading: "追加写真の充実",
        items: [
          { text: "商品・サービスの写真を10枚以上掲載している" },
          { text: "スタッフ・チームの写真を掲載している" },
          { text: "提供シーン・使用シーンの写真を掲載している" },
          { text: "最近のイベント・キャンペーンの写真を追加している" },
          { text: "季節ごとの写真を定期的に更新している" },
        ],
      },
      {
        heading: "写真品質の確認",
        items: [
          { text: "全写真が最低720×720px以上の解像度になっている" },
          { text: "暗すぎる・ぼやけている写真がない" },
          { text: "著作権を侵害する写真がない" },
          { text: "Googleのコンテンツポリシーに違反する写真がない" },
          { text: "横向きの写真が縦向きより多くなっている" },
        ],
      },
    ],
    faqs: [
      { q: "GBPに最低何枚の写真が必要ですか？", a: "最低10枚、理想は20〜30枚以上です。写真数が多いGBPは閲覧数・クリック率が高まり、MEO順位にも好影響があります。定期的な写真追加（月2〜5枚）が継続的な効果に繋がります。" },
    ],
    related: [
      { href: "/checklist/meo-setup", label: "MEO初期設定チェック", desc: "GBP全体の設定確認" },
      { href: "/meo/google-business-profile", label: "GBP最適化", desc: "GBP改善の詳細" },
    ],
  },
  {
    slug: "website-speed",
    title: "ホームページ表示速度 改善チェックリスト",
    titleEn: "Website Speed Improvement Checklist",
    metaDescription: "ホームページの表示速度・Core Web Vitals改善チェックリスト。PageSpeed Insightsスコア向上のための確認項目を一覧化しています。",
    intro: "表示速度の遅いサイトはSEO評価・ユーザー体験・CV率のすべてに悪影響を与えます。このチェックリストでCore Web Vitalsを改善し、Lighthouseスコア90+を目指してください。",
    sections: [
      {
        heading: "画像の最適化",
        items: [
          { text: "画像をWebP形式に変換・圧縮している" },
          { text: "next/imageまたはlazysizesで遅延読み込みを実装している" },
          { text: "表示サイズに合った解像度の画像を使用している（大きすぎる画像を縮小）" },
          { text: "アイコン・ロゴはSVG形式を使用している" },
          { text: "各画像にwidth・heightを指定してCLSを防いでいる" },
        ],
      },
      {
        heading: "CSS・JavaScript最適化",
        items: [
          { text: "使用していないCSSを削除またはコード分割している" },
          { text: "JavaScriptの遅延読み込み（async・defer）を実装している" },
          { text: "レンダリングブロッキングリソースを排除している" },
          { text: "Third-party scriptの読み込みを遅延または制限している" },
        ],
      },
      {
        heading: "サーバー・インフラ",
        items: [
          { text: "CDN（Content Delivery Network）を使用している" },
          { text: "ブラウザキャッシュを適切に設定している" },
          { text: "サーバー応答時間（TTFB）が200ms以内になっている" },
          { text: "HTTPSのHSTS設定をしている" },
        ],
      },
      {
        heading: "計測・確認",
        items: [
          { text: "PageSpeed Insightsでモバイルスコア60+・PCスコア80+を達成している" },
          { text: "LCP 2.5秒以内・CLS 0.1以下・INP 200ms以下を確認している" },
          { text: "Google Search Consoleのコアウェブバイタルレポートを確認している" },
        ],
      },
    ],
    faqs: [
      { q: "PageSpeed Insightsのスコアは何点を目指せばいいですか？", a: "モバイルで60以上（Lighthouseの「Good」）、PCで80以上を最低ラインとしてください。理想はモバイル・PC両方で90以上（「Excellent」）です。スコアが低い場合、「改善の機会」セクションの指摘事項を上から順に対応してください。" },
    ],
    related: [
      { href: "/glossary/core-web-vitals", label: "Core Web Vitals", desc: "表示速度指標の解説" },
      { href: "/web-design/page-speed", label: "表示速度改善サービス", desc: "プロによる改善" },
      { href: "/checklist/seo-basics", label: "SEO基本チェック", desc: "SEO全体の確認" },
    ],
  },
  {
    slug: "new-store",
    title: "新規開業 Webマーケティング準備チェックリスト",
    titleEn: "New Business Web Marketing Checklist",
    metaDescription: "新規開業・開店前のWebマーケティング準備チェックリスト。GBP登録・公式サイト・SNS立ち上げの開業前に確認すべき必須項目を一覧化しています。",
    intro: "新規開業時のWebマーケティング準備を漏れなく行うためのチェックリストです。開業1〜2ヶ月前から準備を始めることで、開業日から最大の集客効果を発揮できます。",
    sections: [
      {
        heading: "開業2ヶ月前〜1ヶ月前",
        items: [
          { text: "Googleビジネスプロフィール（GBP）を登録し、オーナー確認を完了している" },
          { text: "公式ウェブサイトのドメインを取得している" },
          { text: "公式ウェブサイトの制作を発注・開始している" },
          { text: "Instagram・Facebook等のSNSアカウントを開設している" },
          { text: "LINE公式アカウントを開設している（来店型ビジネスの場合）" },
          { text: "ブランドカラー・ロゴ・トーン＆マナーを決定している" },
        ],
      },
      {
        heading: "開業1ヶ月前〜2週間前",
        items: [
          { text: "公式サイトを開業前に「準備中」ページまたは本番サイトとして公開している" },
          { text: "GBPに営業時間・サービス・写真を入力完了している" },
          { text: "SNSでカウントダウン投稿・準備状況の発信を始めている" },
          { text: "Google Search Console・Analyticsの設定が完了している" },
          { text: "予約システム・問い合わせフォームが正常に機能することを確認している" },
          { text: "Googleマップに正確な位置情報が表示されていることを確認している" },
        ],
      },
      {
        heading: "開業1週間前〜当日",
        items: [
          { text: "GBPに「グランドオープン」投稿を予定している" },
          { text: "SNSでオープン告知の投稿を準備している" },
          { text: "店内のGoogleマップQRコードや口コミ誘導ポップを設置している" },
          { text: "スタッフに口コミ依頼の方法を共有している" },
          { text: "開業後1ヶ月のSNS投稿カレンダーを作成している" },
        ],
      },
      {
        heading: "開業後1ヶ月以内",
        items: [
          { text: "最初の口コミを5件以上獲得している" },
          { text: "Googleマップ順位を計測して現状を把握している" },
          { text: "GA4でのアクセス状況・流入経路を確認している" },
          { text: "最初の月次PDCAレポートを作成している" },
        ],
      },
    ],
    faqs: [
      { q: "開業前にGBPを登録してもいいですか？", a: "はい。開業予定のビジネスはGBPに「まもなくオープン」として事前登録可能です。ただし、電話番号・住所等の実際の情報が確定している必要があります。オーナー確認に2週間かかるケースもあるため、早めの登録を推奨します。" },
    ],
    related: [
      { href: "/solutions/new-store-opening", label: "開業集客パッケージ", desc: "開業支援の詳細" },
      { href: "/checklist/meo-setup", label: "MEO初期設定チェック", desc: "GBP設定の詳細" },
      { href: "/contact", label: "無料相談", desc: "開業前からご相談ください" },
    ],
  },
  {
    slug: "annual-seo",
    title: "SEO年次見直しチェックリスト",
    titleEn: "Annual SEO Review Checklist",
    metaDescription: "SEO対策の年次見直しチェックリスト。サイト全体のSEO状況・競合変化・コンテンツ品質を年に一度総点検するための確認項目です。",
    intro: "年に一度、SEO全体を総点検するためのチェックリストです。Googleのアルゴリズム変更・競合の動向・コンテンツの品質を確認し、翌年の戦略を立てましょう。",
    sections: [
      {
        heading: "サイト全体のパフォーマンス確認",
        items: [
          { text: "前年比のオーガニック流入数の変化を確認している" },
          { text: "主要キーワードの年間順位推移を確認している" },
          { text: "CV数・CV率の前年比変化を確認している" },
          { text: "PageSpeed InsightsとCore Web Vitalsのスコアを再計測している" },
          { text: "Google Search Consoleでクロールエラーやペナルティがないことを確認している" },
        ],
      },
      {
        heading: "コンテンツの棚卸し",
        items: [
          { text: "過去2年以上更新していない記事・ページを特定している" },
          { text: "検索順位が低下しているページを特定してリライト候補にしている" },
          { text: "重複・類似コンテンツを統合または削除している" },
          { text: "実績数値・会社情報・料金を最新情報に更新している" },
          { text: "外部リンクの切れているものを修正している" },
        ],
      },
      {
        heading: "競合・市場環境の確認",
        items: [
          { text: "主要競合サイトの新規コンテンツ・施策を調査している" },
          { text: "自社がカバーできていない競合のキーワードを特定している" },
          { text: "AIへの対応（AIO対策）の状況を競合と比較している" },
          { text: "業界でのトレンドキーワード・新しい検索意図を調査している" },
        ],
      },
      {
        heading: "翌年の計画策定",
        items: [
          { text: "翌年の注力キーワード・ページを特定している" },
          { text: "コンテンツカレンダー（翌年1年分）を作成している" },
          { text: "SEOの月次・四半期KPIを設定している" },
          { text: "新しいSEO施策（構造化データ・llms.txt等）の導入計画を立てている" },
        ],
      },
    ],
    faqs: [
      { q: "SEO年次見直しをすることで何が変わりますか？", a: "古いコンテンツのリライト・不要ページの整理・競合ギャップの特定によって、サイト全体のSEO評価を高め直すことができます。年次見直しを実施したサイトは中長期的にオーガニック流入が安定しやすくなります。" },
    ],
    related: [
      { href: "/support/consulting", label: "Webコンサルティング", desc: "年次戦略の立案支援" },
      { href: "/support/audit", label: "サイト診断", desc: "専門家による総点検" },
      { href: "/checklist/content-seo", label: "コンテンツSEOチェック", desc: "記事品質の確認" },
    ],
  },
  {
    slug: "aio-readiness",
    title: "AIO（AI検索）対応チェックリスト",
    titleEn: "AIO Readiness Checklist",
    metaDescription: "AI検索対策（AIO）の準備チェックリスト。ChatGPT・Perplexity・AI Overviewに引用・掲載されるための必須対応項目を一覧化しています。",
    intro: "ChatGPT・Perplexity・AI Overviewへの対応状況をチェックするためのリストです。構造化データ・llms.txt・E-E-A-T・FAQの実装状況を確認し、AI検索時代に備えましょう。",
    sections: [
      {
        heading: "構造化データ（Schema.org）",
        items: [
          { text: "Organizationスキーマが実装されている（会社情報・連絡先）" },
          { text: "LocalBusinessスキーマが実装されている（店舗・地域ビジネスの場合）" },
          { text: "FAQPageスキーマが実装されている（FAQ・Q&Aページ）" },
          { text: "Articleスキーマが実装されている（ブログ・コラム記事）" },
          { text: "BreadcrumbListスキーマが実装されている" },
          { text: "構造化データが正しく実装されていることをGoogleのリッチリザルトテストで確認している" },
        ],
      },
      {
        heading: "llms.txt・AIクローラー対策",
        items: [
          { text: "llms.txtをサイトルートに設置している" },
          { text: "llms.txtに会社概要・主要サービス・参照推奨ページを記述している" },
          { text: "robots.txtでAIクローラーへの適切な許可・制限を設定している" },
        ],
      },
      {
        heading: "E-E-A-T・信頼性強化",
        items: [
          { text: "著者情報（名前・資格・経歴・顔写真）を全記事に明記している" },
          { text: "会社概要ページに代表者・創業年・事業内容を詳しく記載している" },
          { text: "実績数値・お客様の声・受賞歴を掲載している" },
          { text: "プライバシーポリシー・特定商取引法表記が整備されている" },
        ],
      },
      {
        heading: "コンテンツ構造・FAQ最適化",
        items: [
          { text: "主要ページに見出し（h2・h3）が明確な構造で設定されている" },
          { text: "FAQセクションがQ&A形式で簡潔に書かれている" },
          { text: "定義・説明文がAIに引用されやすい簡潔な文章になっている" },
          { text: "AIが引用しやすい形（箇条書き・ナンバーリスト）を活用している" },
        ],
      },
    ],
    faqs: [
      { q: "AIO対策はSEO対策と並行して実施すべきですか？", a: "はい。E-E-A-T強化・FAQ最適化・構造化データはSEOとAIOの両方に効果的です。AIO固有の施策（llms.txt・AI引用を意識した文章構造）を追加することで、AI検索・通常検索の両方をカバーできます。" },
    ],
    related: [
      { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索最適化" },
      { href: "/glossary/aio", label: "AIOとは", desc: "AI検索最適化の解説" },
      { href: "/solutions/aio-seo", label: "AIO×SEO統合", desc: "AI+検索の統合対策" },
    ],
  },
  {
    slug: "sns-monthly",
    title: "SNS運用 月次チェックリスト",
    titleEn: "SNS Monthly Operations Checklist",
    metaDescription: "SNS運用の月次チェックリスト。Instagram・LINE公式の投稿・分析・改善の確認項目を月次でまとめています。",
    intro: "SNS運用を効果的に継続するための月次チェックリストです。投稿実績の確認・データ分析・改善計画を定期的に行うことでSNSの成果を積み上げます。",
    sections: [
      {
        heading: "投稿の実施確認",
        items: [
          { text: "月の投稿計画（カレンダー）通りに投稿が実施できている" },
          { text: "ハッシュタグは毎回適切に設定している" },
          { text: "画像・動画の品質が一定水準を保っている" },
          { text: "コメント・DMに適切な返信をしている" },
          { text: "ストーリーズを週3回以上投稿している（Instagramの場合）" },
        ],
      },
      {
        heading: "データ分析",
        items: [
          { text: "フォロワー数の前月比変化を確認している" },
          { text: "インプレッション数・リーチ数を確認している" },
          { text: "エンゲージメント率（いいね・コメント・シェア）を確認している" },
          { text: "最もエンゲージメントの高かった投稿コンテンツを特定している" },
          { text: "プロフィールへのクリック数・ウェブサイトリンクのクリック数を確認している" },
        ],
      },
      {
        heading: "翌月の改善計画",
        items: [
          { text: "今月のパフォーマンスを分析して翌月の改善ポイントを特定している" },
          { text: "翌月の投稿カレンダーを作成している" },
          { text: "季節・イベント・キャンペーンに合わせた特別投稿を計画している" },
          { text: "フォロワーが最もアクティブな時間帯に合わせた投稿スケジュールを設定している" },
        ],
      },
    ],
    faqs: [
      { q: "SNSの月次確認はどのくらいの時間で完了できますか？", a: "月次チェックと翌月計画策定で2〜3時間が目安です。分析ツール（Instagramインサイト・LINE公式の統計）を使えば効率的にデータを確認できます。" },
    ],
    related: [
      { href: "/services/sns", label: "SNS運用代行", desc: "月次運用の代行" },
      { href: "/checklist/sns-account-setup", label: "SNS開設チェック", desc: "アカウント設定の確認" },
      { href: "/solutions/meo-sns", label: "MEO×SNS", desc: "MEOとの連携" },
    ],
  },
  {
    slug: "contact-form",
    title: "問い合わせフォーム最適化チェックリスト",
    titleEn: "Contact Form Optimization Checklist",
    metaDescription: "問い合わせフォームの最適化チェックリスト。CV率を高めるフォーム設計・UX・セキュリティの確認項目を一覧化しています。",
    intro: "問い合わせフォームはWebサイトのCV（コンバージョン）において最も重要な要素のひとつです。フォームの使いやすさ・入力項目の最適化・セキュリティを確認しましょう。",
    sections: [
      {
        heading: "入力項目の最適化",
        items: [
          { text: "必須項目を最小限に絞っている（名前・連絡先・内容の3〜5項目が目安）" },
          { text: "任意項目と必須項目が明確に区別されている" },
          { text: "電話番号を必須項目にしていない（メールのみでも対応可能にする）" },
          { text: "各項目にプレースホルダーテキストを設定している" },
          { text: "入力例（例：山田 太郎）を提示している" },
        ],
      },
      {
        heading: "UX・使いやすさ",
        items: [
          { text: "スマートフォンでフォームが正常に使えることを確認している" },
          { text: "入力エラー時のメッセージが具体的でわかりやすい" },
          { text: "送信ボタンが目立つデザインになっている" },
          { text: "送信後の確認・完了画面が設定されている" },
          { text: "自動返信メールが送信されている（送信者の安心感）" },
        ],
      },
      {
        heading: "セキュリティ・スパム対策",
        items: [
          { text: "reCAPTCHA（GoogleのBOT対策）を実装している" },
          { text: "フォームデータがSSL（https）で暗号化されている" },
          { text: "個人情報の取り扱いについてプライバシーポリシーへのリンクがある" },
        ],
      },
      {
        heading: "計測・分析",
        items: [
          { text: "フォーム送信完了をGoogle Analyticsのコンバージョンとして計測している" },
          { text: "フォーム入力の離脱率を計測できている（GA4のイベント）" },
          { text: "定期的に問い合わせフォームに自分でテスト送信して確認している" },
        ],
      },
    ],
    faqs: [
      { q: "問い合わせフォームの入力項目を増やすとCV率は下がりますか？", a: "一般的に、入力項目が1つ増えるごとにCV率が3〜10%低下するというデータがあります。問い合わせの最初のステップは入力項目を最小限に絞り、詳細は返信時またはヒアリングで確認することを推奨します。" },
    ],
    related: [
      { href: "/glossary/cv-rate", label: "CV率", desc: "コンバージョン率の改善" },
      { href: "/services/web-design", label: "ホームページ制作", desc: "CV最適化サイト制作" },
      { href: "/support/analytics-setup", label: "アナリティクス設定", desc: "CV計測の設定" },
    ],
  },
  {
    slug: "local-seo",
    title: "ローカルSEO チェックリスト",
    titleEn: "Local SEO Checklist",
    metaDescription: "地域ビジネスのローカルSEOチェックリスト。地域名キーワード対策・LocalBusinessスキーマ・ローカルコンテンツの確認項目を一覧化しています。",
    intro: "地域ビジネスのウェブサイトがローカル検索で上位表示されるために確認すべきチェックリストです。MEO（Googleマップ）と組み合わせることで地域集客の最大化が期待できます。",
    sections: [
      {
        heading: "LocalBusiness スキーマ",
        items: [
          { text: "LocalBusinessまたはMedicalOrganization等の適切な構造化データを実装している" },
          { text: "名前・住所・電話番号・営業時間・URLをSchema.orgに正確に記述している" },
          { text: "Googleの構造化データテストで正常に認識されることを確認している" },
        ],
      },
      {
        heading: "NAP（名前・住所・電話番号）の一致",
        items: [
          { text: "ウェブサイトとGBPの名前・住所・電話番号が完全に一致している" },
          { text: "ポータルサイト・業界ディレクトリにも同じNAP情報を掲載している" },
          { text: "サイト内の複数ページで表記が統一されている" },
        ],
      },
      {
        heading: "地域コンテンツ",
        items: [
          { text: "サービスページに対応エリア・地域名を明記している" },
          { text: "地域名×サービス名のキーワードがページタイトルに含まれている" },
          { text: "地域に特化したFAQ（例：「葛飾区でのMEO相談」）を掲載している" },
          { text: "地域情報・アクセス方法・地図を掲載している" },
        ],
      },
      {
        heading: "内部リンク・サイト構造",
        items: [
          { text: "地域ページ（/area/[地域名]）を作成し内部リンクで繋げている" },
          { text: "サービスページと地域ページが相互リンクされている" },
          { text: "サイトマップに地域ページが含まれている" },
        ],
      },
    ],
    faqs: [
      { q: "ローカルSEOとMEOを同時に対策するメリットは何ですか？", a: "「地域名×サービス名」の検索では、Googleマップ（MEO）と通常検索（ローカルSEO）の両方に表示されることで、検索結果でより多くのスペースを占有できます。両施策の相乗効果で地域での認知と来店・問い合わせが増加します。" },
    ],
    related: [
      { href: "/solutions/meo-seo", label: "MEO×SEO統合", desc: "地域集客の統合対策" },
      { href: "/glossary/local-pack", label: "ローカルパック", desc: "MEOの表示枠解説" },
      { href: "/solutions/local-complete", label: "地域集客パッケージ", desc: "総合的な地域集客" },
    ],
  },
  {
    slug: "reputation",
    title: "ネット評判管理 チェックリスト",
    titleEn: "Online Reputation Management Checklist",
    metaDescription: "ネット上の評判管理チェックリスト。Googleマップ・SNS・口コミサイトでのブランドモニタリングと評判改善の確認項目を一覧化しています。",
    intro: "ネット上の評判を適切に管理するための月次・四半期チェックリストです。口コミ・SNS言及・検索結果での自社情報の状態を定期確認し、ブランドを守りましょう。",
    sections: [
      {
        heading: "モニタリング（月次）",
        items: [
          { text: "自社名・サービス名・代表者名でGoogle検索を行っている" },
          { text: "Googleマップの口コミを全件確認している" },
          { text: "SNS（Instagram・X・Facebook）でのメンション・ハッシュタグを確認している" },
          { text: "業界口コミサイト（食べログ・ホットペッパー等）のレビューを確認している" },
        ],
      },
      {
        heading: "口コミ・評判への対応",
        items: [
          { text: "新着口コミに24時間以内に返信している" },
          { text: "ネガティブな口コミに感情的にならず誠実に返信している" },
          { text: "ガイドライン違反の口コミはGoogleに申告している" },
          { text: "SNSでのネガティブメンションに適切なタイミングで対応している" },
        ],
      },
      {
        heading: "ポジティブ評判の構築（四半期）",
        items: [
          { text: "Googleマップの口コミ数が前四半期比で増加している" },
          { text: "自社のプレスリリース・実績をGoogleのオーガニック検索上位で確認できる" },
          { text: "SNSフォロワーが増加している" },
          { text: "自社名の検索結果1ページ目がポジティブな情報で占められている" },
        ],
      },
    ],
    faqs: [
      { q: "ネット評判管理を怠るとどのようなリスクがありますか？", a: "ネガティブな情報が検索結果に残り続けると、潜在顧客が競合に流れる・採用での候補者辞退・取引先からの信頼低下などのビジネスリスクが生じます。定期的なモニタリングと早期対応が重要です。" },
    ],
    related: [
      { href: "/solutions/reputation-management", label: "評判管理サービス", desc: "プロによる評判管理" },
      { href: "/checklist/review-management", label: "口コミ管理チェック", desc: "Googleマップ口コミの詳細" },
      { href: "/meo/review-management", label: "口コミ対策", desc: "口コミ獲得・返信" },
    ],
  },
  {
    slug: "website-redesign",
    title: "サイトリニューアル時のチェックリスト",
    titleEn: "Website Redesign Checklist",
    metaDescription: "ホームページリニューアル時に確認すべきSEO・リダイレクト・コンテンツ移行のチェックリスト。リニューアル後のSEO評価低下を防ぐための必須項目。",
    intro: "サイトリニューアルは適切に対処しないとSEO順位の急落・流入数の激減を招くリスクがあります。リニューアル前後に確認すべき必須項目をまとめました。",
    sections: [
      {
        heading: "リニューアル前の準備",
        items: [
          { text: "現在のサイトの全URLリストを取得している（Screaming Frog等のツールで）" },
          { text: "現在のオーガニック流入数・上位表示キーワードを記録している" },
          { text: "重要ページのSearch Console・GA4データをバックアップしている" },
          { text: "旧URLと新URLの対応表（リダイレクトマップ）を作成している" },
        ],
      },
      {
        heading: "リニューアル時の実施",
        items: [
          { text: "全ての旧URLから新URLへの301リダイレクトを設定している" },
          { text: "新サイトのtitle・meta description・h1が旧サイトから引き継がれている（または改善されている）" },
          { text: "構造化データを新サイトにも実装している" },
          { text: "内部リンクが新URLに更新されている（リンク切れなし）" },
        ],
      },
      {
        heading: "リニューアル後の確認",
        items: [
          { text: "新サイトをSearch ConsoleにXMLサイトマップを送信している" },
          { text: "旧URLにアクセスして正しく新URLにリダイレクトされることを確認している" },
          { text: "GA4・Search Consoleで流入数・インデックス数の急落がないことを確認している" },
          { text: "リニューアル後1〜4週間、順位変動を継続的に監視している" },
        ],
      },
    ],
    faqs: [
      { q: "リニューアルでURL構造を変えるとSEOに影響しますか？", a: "URL構造を変更する場合、301リダイレクトを正しく設定することで元のSEO評価の大部分を引き継げます。リダイレクト設定を怠ると、上位表示されていたページの評価がゼロになるため、必ず対処してください。" },
    ],
    related: [
      { href: "/services/web-design", label: "ホームページ制作", desc: "リニューアルのプロ対応" },
      { href: "/support/audit", label: "サイト診断", desc: "リニューアル前後の診断" },
      { href: "/checklist/seo-basics", label: "SEO基本チェック", desc: "技術的SEOの確認" },
    ],
  },
  {
    slug: "analytics-confirmation",
    title: "Googleアナリティクス・計測確認チェックリスト",
    titleEn: "Analytics Confirmation Checklist",
    metaDescription: "Google Analytics 4とSearch Consoleの設定確認チェックリスト。正確なデータ収集・CV計測・レポートの確認項目を一覧化しています。",
    intro: "正確な計測環境がなければWebマーケティングの改善はできません。このチェックリストでGA4・Search Console・CV計測の設定を確認し、データに基づいた意思決定の基盤を整えてください。",
    sections: [
      {
        heading: "Google Analytics 4（GA4）",
        items: [
          { text: "GA4のプロパティがウェブサイトに正しく設置されている" },
          { text: "リアルタイムレポートでデータが収集されていることを確認している" },
          { text: "内部トラフィック（自社からのアクセス）を除外するフィルターを設定している" },
          { text: "カスタムイベント（フォーム送信・電話タップ等）を設定している" },
          { text: "コンバージョンイベントが正しく計測されている" },
          { text: "チャネルグループ設定が正しく（SEO・直接・SNS・広告が正しく分類されている）" },
        ],
      },
      {
        heading: "Google Search Console",
        items: [
          { text: "所有権の確認が完了している" },
          { text: "XMLサイトマップを送信済みで、インデックス状況を確認できている" },
          { text: "クロールエラー・セキュリティの問題がないことを確認している" },
          { text: "検索パフォーマンスレポートで主要キーワードの表示回数・順位を確認できている" },
        ],
      },
      {
        heading: "CV計測の確認",
        items: [
          { text: "問い合わせフォームの送信完了ページがGA4のコンバージョンとして計測されている" },
          { text: "電話番号タップをGA4のイベントとして計測している" },
          { text: "LINE追加ボタンのクリックを計測している" },
          { text: "購入完了・予約完了がコンバージョンとして計測されている（EC・予約サイトの場合）" },
        ],
      },
    ],
    faqs: [
      { q: "GA4の設定が正しいかどうかはどうやって確認できますか？", a: "GA4のリアルタイムレポートで自分がサイトを訪問したときにデータが収集されているか確認できます。また、GA4のデバッグビュー機能でイベントが正しく計測されているか詳細に確認できます。" },
    ],
    related: [
      { href: "/support/analytics-setup", label: "アナリティクス設定代行", desc: "GA4・CV計測の設定" },
      { href: "/support/reporting", label: "月次レポーティング", desc: "データを活用した報告" },
    ],
  },
];

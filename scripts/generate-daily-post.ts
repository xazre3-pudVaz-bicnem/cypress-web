/**
 * 毎日1記事を自動生成して content/blog/ に保存するスクリプト。
 * GitHub Actions から呼び出される。
 *
 * 実行方法:
 *   ANTHROPIC_API_KEY=xxx npx tsx scripts/generate-daily-post.ts
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ─── 設定 ────────────────────────────────────────────────────────────────────

const POSTS_DIR = path.join(process.cwd(), "content/blog");
// 同じテーマの重複としてまとめた記事の退避先（next.config.ts が元の記事へ転送する）。新しい記事の重複チェックにも使う
const ARCHIVE_DIR = path.join(process.cwd(), "content/blog-archive");

// 記事本文・新しいテーマ・説明文の生成に使うモデル
const MODEL = "claude-sonnet-4-6";
const CATEGORIES = ["seo", "meo", "aio", "web-design", "sns", "ai"];

const SITE = {
  name: "株式会社サイプレス",
  url: "https://www.cypress-all.co.jp",
  keywords: "ホームページ制作 SEO MEO AIO",
  area: "全国",
  business: "ホームページ制作・SEO対策・MEO対策・AIO対策",
};

// ─── トピックプール ────────────────────────────────────────────────────────────

interface Topic {
  title: string;
  slug: string;
  category: string;
  tags: string[];
}

const TOPICS: Topic[] = [
  // SEO
  { title: "コンテンツSEOとは何か：検索上位を取るための記事設計の基本", slug: "content-seo-basics", category: "seo", tags: ["SEO対策", "コンテンツSEO", "キーワード", "ライティング"] },
  { title: "テクニカルSEOの基礎：Core Web Vitalsとサイト構造の最適化", slug: "technical-seo-intro", category: "seo", tags: ["テクニカルSEO", "Core Web Vitals", "サイト速度", "構造化データ"] },
  { title: "内部リンク戦略：SEO効果を最大化するリンク設計の考え方", slug: "internal-link-strategy", category: "seo", tags: ["内部リンク", "SEO対策", "サイト設計"] },
  { title: "構造化データ（Schema.org）の実装でSEOと検索表示を強化する方法", slug: "schema-org-implementation", category: "seo", tags: ["構造化データ", "Schema.org", "JSON-LD", "SEO対策"] },
  { title: "タイトルタグとmeta descriptionの最適化：クリック率を上げる書き方", slug: "title-meta-optimization", category: "seo", tags: ["titleタグ", "meta description", "SEO対策", "CTR向上"] },
  { title: "E-E-A-T強化ガイド：Googleに評価される専門性・信頼性の示し方", slug: "eeat-guide", category: "seo", tags: ["E-E-A-T", "専門性", "信頼性", "SEO対策"] },
  { title: "ロングテールキーワードの見つけ方と活用法：SEO初心者が上位表示を狙う方法", slug: "long-tail-keyword-strategy", category: "seo", tags: ["キーワード戦略", "ロングテール", "SEO対策", "中小企業"] },
  { title: "被リンク（外部リンク）の増やし方：中小企業でも実践できるリンク獲得の方法", slug: "backlink-acquisition", category: "seo", tags: ["被リンク", "外部リンク", "ドメイン評価", "SEO対策"] },
  { title: "Googleサーチコンソールの使い方：SEO改善に役立てるデータの読み方", slug: "search-console-guide", category: "seo", tags: ["サーチコンソール", "SEO分析", "改善施策", "キーワード調査"] },
  { title: "ページ速度がSEOに与える影響：Lighthouseスコアを90点以上に改善する方法", slug: "page-speed-seo", category: "seo", tags: ["ページ速度", "Lighthouse", "Core Web Vitals", "SEO対策"] },
  { title: "ローカルSEOとMEOの違い：地域ビジネスが取り組むべき施策の整理", slug: "local-seo-vs-meo", category: "seo", tags: ["ローカルSEO", "MEO対策", "地域集客", "中小企業"] },
  { title: "SEOで問い合わせを増やすために：CV率と検索流入を両立するサイト設計", slug: "seo-conversion-design", category: "seo", tags: ["SEO対策", "CV率", "問い合わせ増加", "Webデザイン"] },
  // MEO
  { title: "Googleビジネスプロフィールの完全最適化ガイド：順位を上げるための全手順", slug: "gbp-optimization-complete", category: "meo", tags: ["GBP", "Googleビジネスプロフィール", "MEO対策", "マップ集客"] },
  { title: "口コミを増やす正しい方法：Googleマップ評価を高めるための施策", slug: "google-review-strategy", category: "meo", tags: ["口コミ対策", "Googleレビュー", "MEO対策", "集客"] },
  { title: "MEO対策の効果が出るまでの期間と改善サイクルの作り方", slug: "meo-timeline-pdca", category: "meo", tags: ["MEO対策", "順位改善", "PDCA", "期間"] },
  { title: "飲食店がGoogleマップで集客を増やすためのMEO施策まとめ", slug: "restaurant-meo-tactics", category: "meo", tags: ["飲食店", "MEO対策", "マップ集客", "飲食マーケティング"] },
  { title: "美容室・サロンのMEO対策：Googleマップからの予約を増やす方法", slug: "beauty-salon-meo", category: "meo", tags: ["美容室", "サロン", "MEO対策", "予約獲得"] },
  { title: "整骨院・整体院がMEOで新規患者を獲得する方法", slug: "osteopathic-meo", category: "meo", tags: ["整骨院", "整体院", "MEO対策", "患者獲得"] },
  { title: "Googleビジネスプロフィールの写真投稿がMEO順位に与える影響", slug: "gbp-photo-strategy", category: "meo", tags: ["GBP写真", "MEO対策", "写真投稿", "Googleマップ"] },
  { title: "NAP統一とは何か：MEO対策で住所・電話番号の一致が重要な理由", slug: "nap-consistency-meo", category: "meo", tags: ["NAP統一", "MEO対策", "サイテーション", "ローカルSEO"] },
  { title: "競合分析でMEO対策を強化する：上位表示店舗から学ぶ施策の見つけ方", slug: "meo-competitor-analysis", category: "meo", tags: ["競合分析", "MEO対策", "マップ順位", "改善施策"] },
  // AIO
  { title: "AIO対策（AI検索最適化）とは：ChatGPTやGeminiに引用されるためのWeb戦略", slug: "aio-overview", category: "aio", tags: ["AIO対策", "AI検索", "ChatGPT対策", "Gemini"] },
  { title: "llms.txtとは何か：AIに正確に情報を伝えるためのファイル設置方法", slug: "llms-txt-guide", category: "aio", tags: ["llms.txt", "AIO対策", "AI検索", "構造化データ"] },
  { title: "FAQコンテンツがAI検索に引用されやすい理由と最適なFAQ設計方法", slug: "faq-for-ai-search", category: "aio", tags: ["FAQ最適化", "AIO対策", "AI引用", "構造化データ"] },
  { title: "Perplexity・Claude・ChatGPTから引用されるサイトの共通点", slug: "ai-citation-factors", category: "aio", tags: ["AIO対策", "AI引用", "Perplexity", "ChatGPT"] },
  { title: "エンティティ最適化とは：Googleナレッジグラフに登録されるための方法", slug: "entity-optimization", category: "aio", tags: ["エンティティ最適化", "ナレッジグラフ", "AIO対策", "SEO対策"] },
  // Web制作
  { title: "中小企業のホームページ制作で失敗しないための5つのポイント", slug: "sme-website-tips", category: "web-design", tags: ["ホームページ制作", "中小企業", "Webデザイン", "注意点"] },
  { title: "LP（ランディングページ）制作で問い合わせを増やす設計の基本", slug: "landing-page-design", category: "web-design", tags: ["LP制作", "ランディングページ", "CV率向上", "Webデザイン"] },
  { title: "モバイルファーストとは：スマホ対応がSEOと集客に与える影響", slug: "mobile-first-web", category: "web-design", tags: ["モバイルファースト", "スマホ対応", "SEO対策", "ホームページ制作"] },
  { title: "コーポレートサイト制作のチェックリスト：公開前に確認すべき20項目", slug: "corporate-site-checklist", category: "web-design", tags: ["コーポレートサイト", "ホームページ制作", "チェックリスト", "Web制作"] },
  { title: "Next.jsでホームページを制作するメリットとWordPressとの比較", slug: "nextjs-vs-wordpress", category: "web-design", tags: ["Next.js", "WordPress", "ホームページ制作", "パフォーマンス"] },
  { title: "問い合わせフォームの最適化：入力のハードルを下げてCV率を上げる方法", slug: "contact-form-optimization", category: "web-design", tags: ["問い合わせフォーム", "CV率", "UX改善", "ホームページ制作"] },
  { title: "採用サイト制作で応募者を増やすための構成と設計のポイント", slug: "recruit-site-design", category: "web-design", tags: ["採用サイト", "採用マーケティング", "ホームページ制作", "人材採用"] },
  // SNS
  { title: "Instagram運用で集客につなげる方法：地域ビジネス向けの投稿戦略", slug: "instagram-local-business", category: "sns", tags: ["Instagram", "SNS運用", "地域集客", "コンテンツ戦略"] },
  { title: "LINE公式アカウントの活用法：顧客との関係づくりと来店促進", slug: "line-official-guide", category: "sns", tags: ["LINE公式", "SNS運用", "顧客管理", "リピーター"] },
  { title: "MEO対策とSNSを連動させる集客戦略：GBPとInstagramの相乗効果", slug: "meo-sns-synergy", category: "sns", tags: ["MEO対策", "Instagram", "SNS連動", "集客"] },
  // AI活用
  { title: "中小企業でもできるAI活用：業務効率化の具体的な始め方", slug: "ai-for-sme", category: "ai", tags: ["AI活用", "業務効率化", "中小企業", "DX"] },
  { title: "n8nとMakeを使ったマーケティング業務の自動化：具体的なワークフロー事例", slug: "n8n-make-automation", category: "ai", tags: ["n8n", "Make", "業務自動化", "マーケティング自動化"] },
  { title: "AIブログ自動生成の仕組みと注意点：品質を保ちながらコンテンツを増やす方法", slug: "ai-blog-automation", category: "ai", tags: ["AIブログ", "コンテンツ自動生成", "AI活用", "SEO対策"] },
  // 2026-10-26 追加（既存のブログ・コラムと検索意図が重ならないことを確認済み）
  { title: "検索結果のサイト名が違う｜店舗サイトの表示を確認する手順と修正依頼", slug: "search-site-name-correction", category: "seo", tags: ["サイト名","検索結果","店舗サイト"] },
  { title: "ファビコンが検索結果に出ない｜店舗サイトで確認したい設定と画像条件", slug: "search-favicon-display-check", category: "seo", tags: ["ファビコン","検索結果","画像設定"] },
  { title: "検索結果の古い情報を消したい｜削除依頼とページ更新の使い分け方", slug: "outdated-search-content-removal", category: "seo", tags: ["検索結果","情報削除","ページ更新"] },
  { title: "サイト内検索の活用法｜店舗サイトで顧客が探している情報を調べる手順", slug: "internal-search-demand-analysis", category: "seo", tags: ["サイト内検索","検索需要","顧客理解"] },
  { title: "画像検索の効果測定｜商品写真から店舗サイトへの流入を確認する手順", slug: "image-search-traffic-measurement", category: "seo", tags: ["画像検索","商品写真","流入分析"] },
  { title: "指名検索数の調べ方｜店名の検索需要とサイト訪問数を分けて確認する", slug: "brand-search-demand-tracking", category: "seo", tags: ["指名検索","店名検索","検索需要"] },
  { title: "被リンク営業メールの見分け方｜店舗が掲載依頼を受けた際の確認項目", slug: "backlink-outreach-email-review", category: "seo", tags: ["被リンク","営業メール","掲載依頼"] },
  { title: "検索順位の測り方｜店主のスマホ検索と順位計測で結果が違う理由", slug: "search-ranking-measurement-differences", category: "seo", tags: ["検索順位","順位計測","検索環境"] },
  { title: "無断転載された記事への対応｜自社ブログを守る証拠保存と削除依頼", slug: "copied-blog-content-response", category: "seo", tags: ["無断転載","ブログ運営","削除依頼"] },
  { title: "検索流入の季節変動の調べ方｜店舗の閑散期と順位下落を見分ける手順", slug: "seasonal-search-traffic-diagnosis", category: "seo", tags: ["検索流入","季節変動","順位下落"] },
  { title: "GBPオーナー権限の引き継ぎ｜退職者が管理している店舗情報の移管手順", slug: "gbp-ownership-staff-handover", category: "meo", tags: ["オーナー権限","担当者退職","店舗情報"] },
  { title: "GBPの動画確認で準備するもの｜店舗の所在地と管理権限を示す撮影手順", slug: "gbp-video-verification-preparation", category: "meo", tags: ["動画確認","オーナー確認","店舗撮影"] },
  { title: "GBPの停止に対応するには｜再審査を依頼する前の情報整理と証拠準備", slug: "gbp-suspension-appeal-preparation", category: "meo", tags: ["プロフィール停止","再審査","証拠資料"] },
  { title: "Googleマップのピン位置修正｜裏口に案内される店舗の確認と対応手順", slug: "maps-entrance-pin-correction", category: "meo", tags: ["ピン位置","店舗入口","経路案内"] },
  { title: "GBPの特別営業時間の設定｜祝日や臨時休業の来店間違いを防ぐ管理方法", slug: "gbp-special-hours-management", category: "meo", tags: ["特別営業時間","臨時休業","祝日営業"] },
  { title: "GBPの重複登録を見つけたら｜同じ店舗が二つ表示される場合の対応手順", slug: "gbp-duplicate-listing-resolution", category: "meo", tags: ["重複登録","店舗情報","地図表示"] },
  { title: "Googleマップの閉業表示が誤り｜営業中の店舗が確認すべき修正手順", slug: "maps-incorrect-closure-correction", category: "meo", tags: ["閉業表示","営業再開","情報修正"] },
  { title: "GBPの予約リンクが間違っている｜外部予約先の確認と修正の進め方", slug: "gbp-booking-link-correction", category: "meo", tags: ["予約リンク","外部予約","情報修正"] },
  { title: "GBPの情報が勝手に変わる｜営業時間や電話番号の変更を確認する運用", slug: "gbp-unexpected-information-changes", category: "meo", tags: ["情報変更","営業時間","電話番号"] },
  { title: "GBPのメニュー更新方法｜飲食店の価格改定と売り切れ商品の管理手順", slug: "gbp-restaurant-menu-updates", category: "meo", tags: ["メニュー管理","価格改定","飲食店"] },
  { title: "AI検索の引用元を調べる方法｜自社サイトへのリンクを記録する手順", slug: "ai-search-citation-tracking", category: "aio", tags: ["生成検索","引用元","引用記録"] },
  { title: "AI検索の回答が毎回違う｜店舗の掲載状況を比較するための調査条件", slug: "ai-search-answer-variability", category: "aio", tags: ["生成検索","回答比較","掲載調査"] },
  { title: "AI検索の流入を測るには｜参照元別の訪問と問い合わせを確認する方法", slug: "ai-referral-traffic-measurement", category: "aio", tags: ["生成検索","参照元","流入計測"] },
  { title: "AI検索の引用内容が古い｜価格改定後に確認したい情報源と更新手順", slug: "ai-search-outdated-price-audit", category: "aio", tags: ["生成検索","古い情報","価格改定"] },
  { title: "AI検索の引用と社名言及の違い｜店舗の掲載実績を集計する際の基準", slug: "ai-citations-versus-brand-mentions", category: "aio", tags: ["引用評価","社名言及","効果測定"] },
  { title: "AI検索の競合引用調査｜他店を紹介する回答の出典を整理する手順", slug: "ai-competitor-citation-research", category: "aio", tags: ["競合調査","引用元","店舗比較"] },
  { title: "AI検索の質問リストの作り方｜来店前の相談を使った掲載確認の準備", slug: "ai-search-test-question-design", category: "aio", tags: ["調査設計","来店相談","掲載確認"] },
  { title: "AI検索の誤回答を報告するには｜店舗情報の間違いを記録する手順", slug: "ai-search-error-reporting", category: "aio", tags: ["誤回答","店舗情報","問題報告"] },
  { title: "AI検索対策の提案書の見方｜引用保証や独自スコアを判断する確認項目", slug: "ai-search-proposal-review", category: "aio", tags: ["提案書","引用保証","業者選定"] },
  { title: "AI検索のアクセスログ調査｜自社サイトへの巡回状況を確認する方法", slug: "ai-crawler-access-log-audit", category: "aio", tags: ["巡回調査","アクセスログ","サイト管理"] },
  { title: "ホームページの保守契約で確認すること｜更新作業と障害対応の範囲", slug: "website-maintenance-contract-scope", category: "web-design", tags: ["保守契約","更新作業","障害対応"] },
  { title: "ホームページのバックアップ｜店舗担当者が復元に備えて残すデータ", slug: "website-backup-recovery-preparation", category: "web-design", tags: ["バックアップ","復元","サイト保守"] },
  { title: "ドメインの名義確認と移管準備｜制作会社を変更する際の引き継ぎ手順", slug: "domain-ownership-transfer-preparation", category: "web-design", tags: ["ドメイン移管","名義確認","制作会社変更"] },
  { title: "問い合わせメールが届かない｜店舗サイトの送信テストと原因の切り分け", slug: "contact-email-delivery-troubleshooting", category: "web-design", tags: ["メール不達","送信テスト","問い合わせ対応"] },
  { title: "ホームページの文字を読みやすくする｜高齢のお客様に配慮した配色設計", slug: "website-readable-text-colors", category: "web-design", tags: ["文字の読みやすさ","配色","高齢者対応"] },
  { title: "キーボードで操作できるサイトへ｜店舗ページの公開前に確認する手順", slug: "website-keyboard-navigation-check", category: "web-design", tags: ["キーボード操作","アクセシビリティ","公開前確認"] },
  { title: "ホームページの更新権限の分け方｜スタッフの誤操作を防ぐ管理設計", slug: "website-editor-permission-design", category: "web-design", tags: ["更新権限","誤操作防止","サイト管理"] },
  { title: "教室の振替案内ページの作り方｜欠席連絡から受講までを伝える構成", slug: "school-makeup-lesson-page", category: "web-design", tags: ["教室サイト","振替案内","欠席連絡"] },
  { title: "修理店の持ち込み案内ページ｜受付前に必要な準備と預かり条件の伝え方", slug: "repair-shop-dropoff-page", category: "web-design", tags: ["修理店","持ち込み案内","受付条件"] },
  { title: "ホームページの修正依頼の書き方｜制作会社に伝わる指示と確認手順", slug: "website-revision-request-guide", category: "web-design", tags: ["修正依頼","制作会社","確認手順"] },
  { title: "LINE公式のリッチメニュー設計｜予約と営業案内を迷わず選べる配置", slug: "line-rich-menu-layout", category: "sns", tags: ["公式ライン","リッチメニュー","営業案内"] },
  { title: "LINE公式のショップカード設計｜来店特典と利用条件の決め方を解説", slug: "line-shop-card-design", category: "sns", tags: ["公式ライン","ショップカード","来店特典"] },
  { title: "LINE公式のあいさつメッセージ｜友だち追加直後に伝える店舗案内の型", slug: "line-welcome-message-design", category: "sns", tags: ["公式ライン","あいさつメッセージ","友だち追加"] },
  { title: "LINE公式のクーポン運用｜店頭での使用確認とスタッフ共有の進め方", slug: "line-coupon-redemption-workflow", category: "sns", tags: ["公式ライン","クーポン","店頭運用"] },
  { title: "Instagramの乗っ取り対策｜店舗アカウントの復旧に備える管理手順", slug: "instagram-account-security-preparation", category: "sns", tags: ["インスタグラム","乗っ取り対策","アカウント管理"] },
  { title: "Instagram共同投稿の進め方｜商店街の隣店と企画する際の役割分担", slug: "instagram-local-collaboration-posts", category: "sns", tags: ["インスタグラム","共同投稿","商店街"] },
  { title: "Instagramの写真掲載許可｜お客様の施術写真を投稿する前の確認事項", slug: "instagram-customer-photo-consent", category: "sns", tags: ["インスタグラム","写真掲載","施術写真"] },
  { title: "Instagramの字幕の付け方｜音声なしでも伝わる店舗動画の編集手順", slug: "instagram-video-caption-workflow", category: "sns", tags: ["インスタグラム","動画字幕","店舗動画"] },
  { title: "SNS担当者の引き継ぎ方法｜退職前に整理する権限と投稿素材の管理", slug: "social-media-staff-handover", category: "sns", tags: ["担当者交代","権限管理","投稿素材"] },
  { title: "SNS投稿の承認フローの作り方｜店長不在でも確認できる運用手順", slug: "social-post-approval-workflow", category: "sns", tags: ["投稿承認","店舗運営","確認手順"] },
  { title: "AI議事録の導入手順｜店舗ミーティングの決定事項と担当者を整理する", slug: "ai-meeting-minutes-workflow", category: "ai", tags: ["議事録作成","店舗会議","担当者管理"] },
  { title: "AIへの個人情報入力を防ぐ方法｜店舗スタッフ向け匿名化の作業手順", slug: "ai-input-data-anonymization", category: "ai", tags: ["個人情報","匿名化","入力ルール"] },
  { title: "AIで接客ロールプレイを作る｜新人スタッフの練習と振り返りの進め方", slug: "ai-customer-service-roleplay", category: "ai", tags: ["接客練習","新人教育","振り返り"] },
  { title: "AIで作業マニュアルを作る｜店舗の引き継ぎメモを手順書に整える方法", slug: "ai-store-procedure-manuals", category: "ai", tags: ["作業手順書","引き継ぎ","店舗運営"] },
  { title: "AI翻訳で接客案内を作る｜料金と利用条件の誤訳を減らす確認手順", slug: "ai-service-translation-review", category: "ai", tags: ["自動翻訳","接客案内","誤訳確認"] },
  { title: "AIでアンケートを分類する｜店舗の自由記述から改善要望を整理する手順", slug: "ai-survey-comment-classification", category: "ai", tags: ["アンケート分析","自由記述","改善要望"] },
  { title: "AIで表計算の数式を作る｜店舗の売上集計で計算ミスを見つける確認方法", slug: "ai-spreadsheet-formula-validation", category: "ai", tags: ["表計算","売上集計","数式確認"] },
  { title: "AIの回答に根拠がないとき｜業務利用前に出典と原文を照合する手順", slug: "ai-answer-source-verification", category: "ai", tags: ["回答検証","出典確認","業務利用"] },
  { title: "AI活用の時間削減を測る方法｜店舗業務で修正時間も含めて比較する", slug: "ai-work-time-savings-measurement", category: "ai", tags: ["時間削減","効果測定","修正作業"] },
  { title: "AIプロンプトの社内共有方法｜店舗ごとの指示文を整理して更新する運用", slug: "ai-prompt-library-management", category: "ai", tags: ["指示文","社内共有","更新管理"] },
];

// ─── ヘルパー ──────────────────────────────────────────────────────────────────

interface ExistingPost {
  slug: string;
  title: string;
  category: string;
}

/** 公開中の記事と、重複としてまとめた記事（退避先）の slug・タイトル・カテゴリ */
function getExistingPosts(): ExistingPost[] {
  const posts: ExistingPost[] = [];
  for (const dir of [POSTS_DIR, ARCHIVE_DIR]) {
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".md"))) {
      const fallbackSlug = f.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
      try {
        const { data } = matter(fs.readFileSync(path.join(dir, f), "utf-8"));
        posts.push({
          slug: (data.slug as string) || fallbackSlug,
          title: (data.title as string) || "",
          category: (data.category as string) || "",
        });
      } catch {
        posts.push({ slug: fallbackSlug, title: "", category: "" });
      }
    }
  }
  return posts;
}

/** タイトルの近さ（文字の 2-gram の Jaccard 係数、0〜1）。言い回しだけ違う同じテーマを見分けるのに使う */
function titleSimilarity(a: string, b: string): number {
  const grams = (s: string) => {
    const t = s.replace(/[\s「」『』（）()【】：:・、。！？!?]/g, "").toLowerCase();
    const set = new Set<string>();
    for (let i = 0; i < t.length - 1; i++) set.add(t.slice(i, i + 2));
    return set;
  };
  const ga = grams(a);
  const gb = grams(b);
  if (ga.size === 0 || gb.size === 0) return 0;
  let common = 0;
  for (const g of ga) if (gb.has(g)) common++;
  return common / (ga.size + gb.size - common);
}

async function pickTopic(client: Anthropic, existing: ExistingPost[]): Promise<Topic> {
  const usedSlugs = new Set(existing.map((p) => p.slug));
  const available = TOPICS.filter((t) => !usedSlugs.has(t.slug));

  if (available.length > 0) {
    // カテゴリをバランス良く選ぶ（記事数が少ないカテゴリを優先）
    const categoryCount: Record<string, number> = {};
    for (const p of existing) categoryCount[p.category] = (categoryCount[p.category] || 0) + 1;
    available.sort((a, b) => (categoryCount[a.category] || 0) - (categoryCount[b.category] || 0));
    return available[0];
  }

  // 用意したテーマを使い切ったら、既存記事と重ならない新しいテーマを考えてもらう。
  // （以前は同じテーマを日付付きの slug で繰り返していたが、同じタイトルの記事が並ぶと
  //   重複コンテンツとして評価を下げるため廃止した）
  return proposeNewTopic(client, existing);
}

const TOPIC_SCHEMA = {
  type: "object",
  properties: {
    title: { type: "string", description: "記事タイトル（日本語・28〜40文字。検索されやすい具体的なキーワードを前半に置く）" },
    slug: { type: "string", description: "URL 用の slug（英小文字・数字・ハイフンのみ、2〜6語）" },
    category: { type: "string", enum: CATEGORIES },
    tags: { type: "array", items: { type: "string" }, description: "関連キーワードを3〜5個" },
  },
  required: ["title", "slug", "category", "tags"],
  additionalProperties: false,
};

/** 既存記事のどれとも重ならない新しいテーマを提案させる。重なる案は理由を伝えて出し直させる */
async function proposeNewTopic(client: Anthropic, existing: ExistingPost[]): Promise<Topic> {
  const titles = [...new Set(existing.map((p) => p.title).filter(Boolean))];
  const usedSlugs = new Set(existing.map((p) => p.slug));
  const rejected: string[] = [];

  for (let attempt = 1; attempt <= 3; attempt++) {
    const message = await client.messages.create({
      model: MODEL,
      max_tokens: 1024,
      system: `あなたは${SITE.name}（${SITE.business}を提供する会社）のWebマーケティング専門ブログの編集者です。読者は地域の中小企業の経営者・担当者です。`,
      messages: [
        {
          role: "user",
          content: `次の既存記事のどれとも検索意図が重ならない、新しい記事テーマを1つ提案してください。
- 既存記事の言い換えや、同じテーマの別の切り口は不可
- 中小企業が実際に検索しそうな、具体的で絞り込まれたテーマにする（業種・地域・具体的な作業や悩みなど）
- カテゴリは seo / meo / aio / web-design / sns / ai のいずれか

既存記事のタイトル:
${titles.map((t) => `- ${t}`).join("\n")}${
            rejected.length > 0 ? `\n\n次の案は既存記事と重なるため使えません:\n${rejected.map((r) => `- ${r}`).join("\n")}` : ""
          }`,
        },
      ],
      output_config: { format: { type: "json_schema", schema: TOPIC_SCHEMA } },
    });

    const block = message.content.find((b) => b.type === "text");
    if (message.stop_reason !== "end_turn" || !block || block.type !== "text") {
      throw new Error(`テーマの提案を受け取れませんでした（stop_reason: ${message.stop_reason}）`);
    }
    const topic = JSON.parse(block.text) as Topic;
    const slug = topic.slug.trim().toLowerCase();

    const problems: string[] = [];
    if (!/^[a-z0-9]+(?:-[a-z0-9]+){1,7}$/.test(slug)) problems.push("slug の形式が不正");
    if (usedSlugs.has(slug)) problems.push("slug が既存記事と同じ");
    for (const t of titles) {
      // 既存記事どうしの近さは最大でも 0.33。それを超えるほど近い案は、言い換えた同じテーマとして見送る
      if (titleSimilarity(topic.title, t) >= 0.35) {
        problems.push(`既存記事「${t}」と重なる`);
        break;
      }
    }
    if (problems.length === 0) return { ...topic, slug };

    rejected.push(`${topic.title}（${problems.join("・")}）`);
    console.log(`テーマ案を見送り (${attempt}/3): ${topic.title} — ${problems.join("、")}`);
  }

  throw new Error("既存記事と重ならない新しいテーマを決められませんでした（重複記事を作らないよう、今日は投稿しません）");
}

const DESCRIPTION_SCHEMA = {
  type: "object",
  properties: { description: { type: "string" } },
  required: ["description"],
  additionalProperties: false,
};

/** 検索結果に出る説明文（meta description）。本文の要点を 80〜120 文字で書かせる */
async function generateDescription(client: Anthropic, topic: Topic, body: string): Promise<string> {
  const message = await client.messages.create({
    model: MODEL,
    max_tokens: 512,
    messages: [
      {
        role: "user",
        content: `次のブログ記事の、検索結果に表示する説明文（meta description）を書いてください。
- 日本語で80〜120文字、1〜2文
- 記事を読むと分かることを具体的に書く（「この記事では」で始めない）
- キーワード「${topic.tags.slice(0, 2).join("」「")}」を自然に含める
- 「必ず」「絶対」「No.1」など誇張した表現は使わない

タイトル: ${topic.title}

本文:
${body}`,
      },
    ],
    output_config: { format: { type: "json_schema", schema: DESCRIPTION_SCHEMA } },
  });

  const block = message.content.find((b) => b.type === "text");
  if (message.stop_reason === "end_turn" && block && block.type === "text") {
    const description = (JSON.parse(block.text) as { description: string }).description.trim();
    if (description.length >= 50 && description.length <= 140) return description;
  }
  return fallbackDescription(body);
}

/** 説明文を生成できなかったときの代わり: 最初の段落を文の区切りで切る（途中で切れた文を残さない） */
function fallbackDescription(body: string): string {
  const paragraph = body.split("\n").find((line) => line.trim() && !line.startsWith("#"))?.trim() ?? "";
  if (paragraph.length <= 120) return paragraph;
  const cut = paragraph.slice(0, 120);
  const end = Math.max(cut.lastIndexOf("。"), cut.lastIndexOf("！"), cut.lastIndexOf("？"));
  return end >= 40 ? cut.slice(0, end + 1) : `${cut}…`;
}

function todayStr(): string {
  const now = new Date();
  // JST (UTC+9)
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 10);
}

// ─── 記事生成 ─────────────────────────────────────────────────────────────────

async function generatePost(client: Anthropic, topic: Topic): Promise<string> {
  const systemPrompt = `あなたは${SITE.name}のWebマーケティング専門ブログの執筆者です。
${SITE.name}は${SITE.business}を提供する会社です。

記事執筆のルール:
- 日本語で書く
- 2,000〜3,500文字の専門記事にする
- SEO的に有益で具体的な内容にする
- 読者は中小企業の経営者・担当者
- 見出し（## ）を使って読みやすく構成する
- 具体的な施策・手順・チェックポイントを含める
- 「〜することで○倍になります」「必ず」「絶対」「No.1」「保証」など根拠のない表現は使わない
- AIが書いた感の強いテンプレート的な文章は避ける
- 締めには${SITE.name}への誘導を自然に入れる（押し売り感なく）
- Markdownの本文のみを出力し、frontmatterは出力しない
- 出力全体をコードブロックで囲まない（Markdownをそのまま出力）。ただし本文中でファイルの記述例やコード例を示すときは、その部分だけコードブロック（\`\`\`）で囲む（例の中の「#」の行が記事の見出しとして表示されないように）`;

  const userPrompt = `以下のテーマで専門記事を書いてください。

テーマ: ${topic.title}
カテゴリ: ${topic.category}
対象キーワード: ${topic.tags.join("・")}

記事の構成例:
1. 導入（テーマの重要性・読者のメリット）
2. 本論（3〜5つの章で具体的な内容）
3. まとめ・次のステップ

本文のみ出力してください（frontmatterは不要）。`;

  const message = await client.messages.create({
    model: MODEL,
    max_tokens: 4096,
    messages: [{ role: "user", content: userPrompt }],
    system: systemPrompt,
  });

  const content = message.content[0];
  if (content.type !== "text") throw new Error("Unexpected response type");

  return content.text.trim();
}

// ─── メイン ───────────────────────────────────────────────────────────────────

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error("ANTHROPIC_API_KEY が設定されていません");
  }

  const client = new Anthropic();
  const existing = getExistingPosts();
  console.log(`既存記事: ${existing.length}件（重複としてまとめた記事を含む）`);

  const topic = await pickTopic(client, existing);
  console.log(`生成トピック: ${topic.title} (${topic.slug})`);

  console.log("Claude API で記事を生成中...");
  const body = await generatePost(client, topic);
  console.log(`生成完了: ${body.length}文字`);

  const description = await generateDescription(client, topic, body);
  console.log(`説明文: ${description}`);

  const today = todayStr();
  const filename = `${today}-${topic.slug}.md`;
  const filepath = path.join(POSTS_DIR, filename);

  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }

  const frontmatter = matter.stringify(body, {
    title: topic.title,
    slug: topic.slug,
    description,
    date: today,
    category: topic.category,
    tags: topic.tags,
  });

  fs.writeFileSync(filepath, frontmatter, "utf-8");
  console.log(`✓ 記事を保存しました: ${filepath}`);
}

main().catch((err) => {
  console.error("エラー:", err);
  process.exit(1);
});

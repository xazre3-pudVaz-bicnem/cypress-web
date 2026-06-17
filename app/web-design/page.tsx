import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Webサイト制作とは｜SEO・CV・パフォーマンスを兼ね備えたサイト設計｜株式会社サイプレス",
  description:
    "Webサイト制作の基礎から実践まで解説。コーポレートサイト・採用サイト・SEO特化サイト・サービスサイト・WordPressの種類と選び方、制作費用の目安、制作会社の選び方、よくある失敗パターンまで網羅。東京葛飾区のWeb制作会社。",
  keywords: ["Webサイト制作", "ホームページ制作", "Web制作会社", "サイト制作費用", "Next.js制作", "WordPress制作", "SEO対応サイト制作"],
  openGraph: {
    title: "Webサイト制作とは｜SEO・CV・パフォーマンスを兼ね備えたサイト設計｜株式会社サイプレス",
    description: "Webサイト制作の総合ガイド。種類・費用・選び方・SEO・CV改善まで解説。東京葛飾区のWeb制作会社。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp" },
        { "@type": "ListItem", position: 2, name: "Web制作", item: "https://www.cypress-all.co.jp/web-design" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Webサイト制作の費用相場はどのくらいですか？", acceptedAnswer: { "@type": "Answer", text: "シンプルなコーポレートサイト（5〜10ページ）で50〜150万円、SEO特化サイト・採用サイトで100〜300万円、EC機能付きサイトで200万円〜が一般的な相場です。フリーランスへの依頼は30〜80万円と安価ですが、品質・保守体制に差があります。まずは要件を整理した上でお見積もりを取ることをお勧めします。" } },
        { "@type": "Question", name: "Next.jsとWordPressのどちらがいいですか？", acceptedAnswer: { "@type": "Answer", text: "Next.jsは表示速度・セキュリティ・SEOパフォーマンスに優れますが、更新にエンジニアが必要です。WordPressは管理画面から誰でも更新できますが、プラグインの脆弱性リスクがあります。更新頻度・社内体制・予算によって最適な選択が異なります。ご要件をお聞かせいただければ最適な技術をご提案します。" } },
        { "@type": "Question", name: "Webサイト制作でよくある失敗は？", acceptedAnswer: { "@type": "Answer", text: "①デザインにこだわりすぎてSEO・CV設計が抜け落ちる、②制作後に更新・保守体制を考えていない、③モバイルでの表示速度が遅い、④問い合わせ導線（CTA・フォーム）が不明確、⑤SEOを後付けで考える（URL・コンテンツ設計は最初から重要）、などが多いです。" } },
        { "@type": "Question", name: "SEOを意識したサイト制作はどこに依頼すればいいですか？", acceptedAnswer: { "@type": "Answer", text: "SEOとWeb制作を一体で対応できる会社への依頼が最も効果的です。デザインのみ得意な会社にSEOを後から依頼すると、URL設計・コンテンツ構造・技術設計が最初からSEOを考慮していないため効果が出にくいことがあります。制作前の提案段階でSEO設計が含まれているかを確認することが重要です。" } },
        { "@type": "Question", name: "制作会社に依頼するかフリーランスに依頼するか迷っています。", acceptedAnswer: { "@type": "Answer", text: "フリーランスはコストが安く対応が柔軟な反面、保守・長期サポート・複数専門領域（デザイン・開発・SEO）の対応力に限界があることがあります。制作会社は費用が高めですが、複数の専門家が関わり長期的なサポートが期待できます。規模・予算・継続的なサポートの必要性で判断してください。" } },
        { "@type": "Question", name: "制作後の集客はどうすればいいですか？", acceptedAnswer: { "@type": "Answer", text: "主な集客方法は、①SEO対策（コンテンツ追加・内部SEO・被リンク獲得）、②MEO対策（地域ビジネスの場合）、③SNS運用（Instagram・X・LINE）、④リスティング広告・Meta広告、⑤メルマガ・LINEマーケティングです。制作後すぐに集客するには広告が有効で、中長期的にはSEOが最もROIが高い傾向があります。" } },
        { "@type": "Question", name: "スマートフォン対応は必須ですか？", acceptedAnswer: { "@type": "Answer", text: "はい、必須です。現在のWebサイトへのアクセスは60〜70%以上がスマートフォンからです。また、GoogleのモバイルファーストインデックスによりモバイルでのSEO評価がPCより重視されます。モバイルファーストのレスポンシブデザインは現代のWeb制作の大前提です。" } },
        { "@type": "Question", name: "Webサイト制作にどのくらいの時間がかかりますか？", acceptedAnswer: { "@type": "Answer", text: "シンプルなコーポレートサイト（5〜10ページ）で2〜3ヶ月、SEO特化サイトや採用サイトで3〜4ヶ月、EC・会員サイトなど機能が多いものは4〜6ヶ月以上かかることもあります。制作期間はヒアリング・設計・デザイン・コーディング・テスト・公開という工程によって構成されます。" } },
        { "@type": "Question", name: "既存サイトのリニューアルと新規制作はどちらがいいですか？", acceptedAnswer: { "@type": "Answer", text: "既存サイトに一定のSEO評価（ドメインパワー・被リンク）がある場合は、URLを変更せずリニューアルする方法が安全です。既存サイトが古すぎる・URLを整理したい・CMSを変えたい場合は新規制作を選ぶケースもあります。いずれの場合もSEOを考慮したURLの引き継ぎ（301リダイレクト）が重要です。" } },
        { "@type": "Question", name: "保守管理・サポートは制作後も続けてもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい。サイプレスでは制作後の保守・サポート・SEO対策・コンテンツ追加・リライト・CV改善まで継続的にサポートしています。制作して終わりではなく、長期的なWebマーケティングパートナーとして伴走します。保守プランの詳細はお問い合わせください。" } },
        { "@type": "Question", name: "Webサイトの表示速度はSEOに影響しますか？", acceptedAnswer: { "@type": "Answer", text: "はい、表示速度（Core Web Vitals）はGoogleのSEO評価要素の一つです。LCP（最大コンテンツの描画時間）2.5秒以内、CLS（レイアウトのずれ）0.1以下、FID（最初の入力遅延）100ms以下がGoogleの推奨基準です。Next.jsによる制作・画像最適化・フォントの最適化・不要なJavaScriptの削減などで改善できます。" } },
        { "@type": "Question", name: "Webサイトのセキュリティ対策はどうすればいいですか？", acceptedAnswer: { "@type": "Answer", text: "基本的なセキュリティ対策として、①SSL証明書の設置（HTTPS化）、②WordPressの場合はプラグイン・テーマの定期更新、③強力なパスワード管理、④定期バックアップ、⑤WAF（Webアプリケーションファイアウォール）の設置が重要です。Next.jsはサーバーサイドのリスクが低く、セキュリティ面で優れています。" } },
        { "@type": "Question", name: "コーポレートサイトとランディングページの違いは何ですか？", acceptedAnswer: { "@type": "Answer", text: "コーポレートサイトは会社情報・サービス・採用など複数の目的を持つ多ページサイトです。ランディングページ（LP）は特定の1つの目的（問い合わせ・購入・資料請求など）に特化した1ページのサイトです。広告からの流入をCVに転換するにはLPが有効で、SEOで継続集客するにはコーポレートサイトが適しています。" } },
        { "@type": "Question", name: "Webサイト制作後にSEO効果が出るまでどのくらいかかりますか？", acceptedAnswer: { "@type": "Answer", text: "新規サイトの場合、Googleのクロール・インデックスに数週間〜1ヶ月かかります。SEO効果（検索順位の上昇）は3〜6ヶ月で初期成果が出始め、安定した上位表示には12ヶ月以上が目安です。制作段階から適切なSEO設計を行うことで、インデックスとランキングの立ち上がりが早くなります。" } },
        { "@type": "Question", name: "葛飾区・東京でWebサイト制作を依頼できる会社はありますか？", acceptedAnswer: { "@type": "Answer", text: "株式会社サイプレスは東京都葛飾区を拠点とし、葛飾区・東京都内・全国のお客様にWebサイト制作を提供しています。対面でのヒアリング・打ち合わせを希望される葛飾区・東京都内のお客様は訪問対応いたします。SEO・MEO・AIOを組み込んだ集客特化型Webサイト制作が得意です。" } },
      ],
    },
  ],
};

const subPages = [
  { href: "/web-design/corporate-site", title: "コーポレートサイト制作", desc: "企業の信頼とブランドを伝えるWebサイト" },
  { href: "/web-design/recruit-site", title: "採用サイト制作", desc: "求職者の応募意欲を高める採用特化サイト" },
  { href: "/web-design/seo-site", title: "SEO特化サイト制作", desc: "検索流入を最大化するコンテンツ設計" },
  { href: "/web-design/service-site", title: "サービスサイト・LP制作", desc: "問い合わせ・申し込みを増やすCV設計" },
  { href: "/web-design/wordpress", title: "WordPress制作", desc: "CMS対応・担当者が更新できるサイト" },
];

const processSteps = [
  { step: "01", title: "ヒアリング・要件定義", period: "1〜2週間", body: "ビジネス目標・ターゲット・競合分析・現状課題・予算・スケジュールを詳細にヒアリングします。サイトの目的（集客・採用・信頼構築）を明確にし、達成すべきKPIを設定します。この段階でSEO戦略の方向性も決定します。" },
  { step: "02", title: "情報設計・サイト構成", period: "1〜2週間", body: "サイトマップ・URL設計・ページ構成を決定します。SEO観点からのキーワード設計・内部リンク設計・コンテンツ計画を並行して策定します。情報設計の段階でSEOとCV（コンバージョン）の両方を考慮することが重要です。" },
  { step: "03", title: "デザイン制作", period: "2〜4週間", body: "ブランドイメージ・ターゲット層・競合との差別化を考慮したビジュアルデザインを制作します。PCとスマートフォンの両方のモックアップを作成し、フィードバックを経て確定します。Figmaを使ったデザインシステムの構築により、一貫性のあるUIを実現します。" },
  { step: "04", title: "コーディング・開発", period: "3〜6週間", body: "確定したデザインをNext.js（または WordPress）でコーディングします。Core Web Vitals最適化・SEO設定（メタタグ・構造化データ・サイトマップ・robots.txt）・フォーム機能・CMS実装を行います。レスポンシブデザインとスマートフォン最適化は標準実施です。" },
  { step: "05", title: "テスト・品質確認", period: "1〜2週間", body: "各ブラウザ・デバイスでの表示確認・リンクチェック・フォーム動作確認・表示速度測定（Lighthouse）・SEO設定確認を徹底します。Google Search Console・Analytics設定も本番公開前に完了させます。" },
  { step: "06", title: "公開・引き継ぎ", period: "1週間", body: "ドメイン設定・SSL証明書設置・本番サーバーへのデプロイを行います。更新・保守の操作マニュアルを提供し、担当者への引き継ぎを実施します。公開後のSEO効果の計測開始と初月のパフォーマンスレポートを提供します。" },
];

const costGuide = [
  { type: "シンプルなコーポレートサイト", pages: "5〜10ページ", cost: "50〜150万円", features: "デザイン・コーディング・レスポンシブ・お問い合わせフォーム・基本SEO設定" },
  { type: "SEO特化サイト・コンテンツサイト", pages: "20〜50ページ+", cost: "100〜300万円", features: "キーワード設計・サイト設計・コンテンツ制作・構造化データ・内部リンク設計" },
  { type: "採用サイト", pages: "10〜20ページ", cost: "100〜250万円", features: "採用ブランディング・EFOフォーム・求職者体験設計・応募データ管理" },
  { type: "サービスサイト・LP", pages: "1〜5ページ", cost: "30〜100万円", features: "コンバージョン最適化・A/Bテスト設計・広告ランディングページ最適化" },
  { type: "EC・機能要件あり", pages: "30〜100ページ+", cost: "200万円〜", features: "カート・決済・会員機能・在庫管理・受注管理システム" },
];

const industryPoints = [
  { industry: "飲食店・カフェ", points: "Instagramとの連携・メニューページのSEO・予約システム導入・GBPとの情報統一・料理写真の高品質化が重要。モバイルでの操作性を最優先に設計。" },
  { industry: "美容室・サロン", points: "施術写真（ビフォーアフター）ギャラリー・スタイリスト紹介・Web予約システム・Instagram連携が基本。地域名+業種でのローカルSEO設計も必須。" },
  { industry: "クリニック・整骨院", points: "医療広告ガイドライン準拠・診療科目ページのSEO・患者教育コンテンツ・Web予約導線・LocalBusiness構造化データが重要。信頼性を高める院長紹介・施設写真も必須。" },
  { industry: "リフォーム・建設業", points: "施工事例ページのSEO特化・エリア別着地ページ・問い合わせフォームの簡素化・職人紹介でのブランド構築が効果的。動画コンテンツとの組み合わせが差別化ポイント。" },
  { industry: "士業・コンサル", points: "E-E-A-T（専門性・権威性・信頼性）の明示が最重要。著者情報・資格・実績・コラムページが検索評価を高める。AIO対策としてFAQ充実と構造化データ実装も必須。" },
  { industry: "採用・HR", points: "社員インタビュー・職場環境の動画・求人票のSEO最適化・エントリーフォームの最適化（EFO）が鍵。採用ブランドと企業ブランドの一貫性を設計。" },
];

const failurePatterns = [
  { t: "デザイン優先でSEO・CV設計を後回しにする", b: "「まず見た目をかっこよくしたい」という要望から始まり、公開後に「なぜ集客できないのか」という状況に陥るケースは非常に多いです。SEO戦略（キーワード・URL設計・コンテンツ設計）とCVR設計（問い合わせ導線・CTAの配置・フォーム最適化）は制作前の段階から組み込む必要があります。" },
  { t: "公開後の更新・保守体制を考えていない", b: "「とりあえず公開した」後、誰も更新できない・セキュリティアップデートができない・CMS操作がわからないという状況が多く見られます。制作前に「誰が何を更新するか」「保守をどこに依頼するか」を明確にしておくことが重要です。" },
  { t: "モバイルでの表示速度を無視したデザイン", b: "デスクトップPCで美しく見えるデザインがスマートフォンで重くて使いにくい——これはビジネス損失に直結します。現在のWebアクセスの60〜70%はスマートフォンからです。Core Web Vitalsを指標として、モバイルファーストで設計・測定することが不可欠です。" },
  { t: "安さだけでフリーランスに依頼する", b: "低コストで依頼したフリーランスが途中で連絡が取れなくなる・SEOや保守を考慮しない設計になっている・長期的なサポートが受けられないというリスクがあります。制作実績・保守体制・SEO知識・コミュニケーション能力を事前に確認することが重要です。" },
  { t: "問い合わせ導線（CTA）が不明確", b: "「何ができるか」は伝わるのに、「次にどうすればいいか」が伝わらないWebサイトはコンバージョン率が著しく下がります。電話番号・問い合わせフォーム・LINEへの導線をページの適切な場所（ファーストビュー・スクロール途中・最下部）に配置することがCVR改善の基本です。" },
];

const faqItems = [
  {
    q: "Webサイト制作の費用相場はどのくらいですか？",
    a: "シンプルなコーポレートサイト（5〜10ページ）で50〜150万円、SEO特化サイト・採用サイトで100〜300万円、EC機能付きサイトで200万円〜が一般的な相場です。フリーランスへの依頼は30〜80万円と安価ですが、品質・保守体制に差があります。まずは要件を整理した上でお見積もりを取ることをお勧めします。",
  },
  {
    q: "Next.jsとWordPressのどちらがいいですか？",
    a: "Next.jsは表示速度・セキュリティ・SEOパフォーマンスに優れますが、更新にエンジニアが必要です。WordPressは管理画面から誰でも更新できますが、プラグインの脆弱性リスクがあります。更新頻度・社内体制・予算によって最適な選択が異なります。ご要件をお聞かせいただければ最適な技術をご提案します。",
  },
  {
    q: "Webサイト制作でよくある失敗は？",
    a: "①デザインにこだわりすぎてSEO・CV設計が抜け落ちる、②制作後に更新・保守体制を考えていない、③モバイルでの表示速度が遅い、④問い合わせ導線（CTA・フォーム）が不明確、⑤SEOを後付けで考える（URL・コンテンツ設計は最初から重要）、などが多いです。",
  },
  {
    q: "SEOを意識したサイト制作はどこに依頼すればいいですか？",
    a: "SEOとWeb制作を一体で対応できる会社・フリーランスへの依頼が最も効果的です。デザインのみ得意な会社にSEOを後から依頼すると、URL設計・コンテンツ構造・技術設計が最初からSEOを考慮していないため効果が出にくいことがあります。制作前の提案段階でSEO設計が含まれているかを確認することが重要です。",
  },
  {
    q: "制作会社に依頼するかフリーランスに依頼するか迷っています。",
    a: "フリーランスはコストが安く対応が柔軟な反面、保守・長期サポート・複数専門領域（デザイン・開発・SEO）の対応力に限界があることがあります。制作会社は費用が高めですが、複数の専門家が関わり長期的なサポートが期待できます。規模・予算・継続的なサポートの必要性で判断してください。",
  },
  {
    q: "制作後の集客はどうすればいいですか？",
    a: "主な集客方法は、①SEO対策（コンテンツ追加・内部SEO・被リンク獲得）、②MEO対策（地域ビジネスの場合）、③SNS運用（Instagram・X・LINE）、④リスティング広告・Meta広告、⑤メルマガ・LINEマーケティングです。制作後すぐに集客するには広告が有効で、中長期的にはSEOが最もROIが高い傾向があります。",
  },
  {
    q: "スマートフォン対応は必須ですか？",
    a: "はい、必須です。現在のWebサイトへのアクセスは60〜70%以上がスマートフォンからです。また、GoogleのモバイルファーストインデックスによりモバイルでのSEO評価がPCより重視されます。モバイルファーストのレスポンシブデザインは現代のWeb制作の大前提です。",
  },
  {
    q: "Webサイト制作にどのくらいの時間がかかりますか？",
    a: "シンプルなコーポレートサイト（5〜10ページ）で2〜3ヶ月、SEO特化サイトや採用サイトで3〜4ヶ月、EC・会員サイトなど機能が多いものは4〜6ヶ月以上かかることもあります。制作期間はヒアリング・設計・デザイン・コーディング・テスト・公開という工程によって構成されます。",
  },
  {
    q: "既存サイトのリニューアルと新規制作はどちらがいいですか？",
    a: "既存サイトに一定のSEO評価（ドメインパワー・被リンク）がある場合は、URLを変更せずリニューアルする方法が安全です。既存サイトが古すぎる・URLを整理したい・CMSを変えたい場合は新規制作を選ぶケースもあります。いずれの場合もSEOを考慮したURLの引き継ぎ（301リダイレクト）が重要です。",
  },
  {
    q: "保守管理・サポートは制作後も続けてもらえますか？",
    a: "はい。サイプレスでは制作後の保守・サポート・SEO対策・コンテンツ追加・リライト・CV改善まで継続的にサポートしています。制作して終わりではなく、長期的なWebマーケティングパートナーとして伴走します。保守プランの詳細はお問い合わせください。",
  },
  {
    q: "Webサイトの表示速度はSEOに影響しますか？",
    a: "はい、表示速度（Core Web Vitals）はGoogleのSEO評価要素の一つです。LCP（最大コンテンツの描画時間）2.5秒以内、CLS（レイアウトのずれ）0.1以下、FID（最初の入力遅延）100ms以下がGoogleの推奨基準です。Next.jsによる制作・画像最適化・フォントの最適化・不要なJavaScriptの削減などで改善できます。",
  },
  {
    q: "コーポレートサイトとランディングページの違いは何ですか？",
    a: "コーポレートサイトは会社情報・サービス・採用など複数の目的を持つ多ページサイトです。ランディングページ（LP）は特定の1つの目的（問い合わせ・購入・資料請求など）に特化した1ページのサイトです。広告からの流入をCVに転換するにはLPが有効で、SEOで継続集客するにはコーポレートサイトが適しています。",
  },
  {
    q: "Webサイト制作後にSEO効果が出るまでどのくらいかかりますか？",
    a: "新規サイトの場合、Googleのクロール・インデックスに数週間〜1ヶ月かかります。SEO効果（検索順位の上昇）は3〜6ヶ月で初期成果が出始め、安定した上位表示には12ヶ月以上が目安です。制作段階から適切なSEO設計を行うことで、インデックスとランキングの立ち上がりが早くなります。",
  },
  {
    q: "葛飾区・東京でWebサイト制作を依頼できる会社はありますか？",
    a: "株式会社サイプレスは東京都葛飾区を拠点とし、葛飾区・東京都内・全国のお客様にWebサイト制作を提供しています。対面でのヒアリング・打ち合わせを希望される葛飾区・東京都内のお客様は訪問対応いたします。SEO・MEO・AIOを組み込んだ集客特化型Webサイト制作が得意です。",
  },
];

const relatedLinks = [
  { href: "/services/web-design", label: "Web制作サービス詳細", desc: "サービス内容と料金プラン" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "制作後の検索集客強化" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ集客" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "企業の信頼を伝えるサイト" },
  { href: "/web-design/recruit-site", label: "採用サイト制作", desc: "求職者の応募を増やすサイト" },
  { href: "/web-design/seo-site", label: "SEO特化サイト制作", desc: "検索流入最大化の設計" },
  { href: "/web-design/wordpress", label: "WordPress制作", desc: "担当者が更新できるCMS" },
  { href: "/cost/web-design", label: "Web制作の費用", desc: "料金プランと相場" },
  { href: "/guide/how-to-choose-web-design-company", label: "Web制作会社の選び方", desc: "失敗しない選定ガイド" },
  { href: "/checklist/web-design", label: "Web制作チェックリスト", desc: "制作前の確認項目一覧" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "制作段階のSEO設計" },
  { href: "/seo/structured-data", label: "構造化データ実装", desc: "JSON-LD・Schema.org設定" },
  { href: "/area/tokyo", label: "東京のWeb制作", desc: "東京エリアの制作対応" },
  { href: "/area/katsushika", label: "葛飾区のWeb制作", desc: "葛飾区エリアの制作対応" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
];

export default function WebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>Web制作</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Web Design</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              Webサイト制作
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              Webサイト制作は「デザインを作ること」ではなく「ビジネス目標を達成するための手段を設計すること」です。美しいデザイン・検索でのトップ表示・問い合わせへのコンバージョン・保守のしやすさ・高速表示を同時に満たすサイト制作を行います。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              コーポレートサイト・採用サイト・SEO特化サイト・サービスサイト・WordPressまで、目的に合ったサイト設計と制作をご提供します。SEO・MEO・SNSとの統合を前提に制作することで、公開後の集客・CV改善までをトータルで設計します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 20_02_56.png"
            alt="Webサイト制作・コーポレートサイト・SEOサイト設計のイメージ"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* サイト種類 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Site Types</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              目的に合わせたWebサイト制作
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-12" style={{ color: "#374151" }}>
              「何のためのサイトか」を明確にすることが、効果的なWebサイト制作の出発点です。
            </p>
            <div className="max-w-4xl space-y-0">
              {subPages.map((page, i) => (
                <Link key={i} href={page.href} className="block group py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-[15px] mb-2 group-hover:underline" style={{ color: "#0d1b2a" }}>{page.title}</p>
                      <p className="text-[14px] leading-[1.8]" style={{ color: "#374151" }}>{page.desc}</p>
                    </div>
                    <span className="shrink-0 ml-6 text-[13px] mt-1" style={{ color: "#9CA3AF" }}>→</span>
                  </div>
                </Link>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 制作プロセス */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Process</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              Webサイト制作の全プロセス
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-12" style={{ color: "#374151" }}>
              ヒアリングから公開まで、SEO設計・CV設計を含む一貫した制作プロセスで進行します。
            </p>
            <div className="max-w-4xl">
              {processSteps.map((step) => (
                <div key={step.step} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <div className="shrink-0">
                    <span className="text-[12px] font-mono block" style={{ color: "#9CA3AF" }}>{step.step}</span>
                    <span className="text-[11px] mt-1 block" style={{ color: "#c4b89a" }}>{step.period}</span>
                  </div>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{step.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{step.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 費用目安 */}
        <section className="py-20" style={{ background: "#0d1b2a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a", fontFamily: "var(--font-display)" }}>Cost Guide</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#ffffff", fontFamily: "var(--font-serif)" }}>
              種類別 制作費用の目安
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-12" style={{ color: "rgba(255,255,255,0.7)" }}>
              制作費用はサイト規模・機能・コンテンツ量・デザインの複雑さによって異なります。詳細はお見積もりにてご案内します。
            </p>
            <div className="space-y-4 max-w-4xl">
              {costGuide.map((c, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" }}>
                  <div className="flex flex-wrap gap-4 mb-3 items-baseline">
                    <span className="font-bold text-[15px]" style={{ color: "#ffffff", fontFamily: "var(--font-serif)" }}>{c.type}</span>
                    <span className="text-[13px]" style={{ color: "#c4b89a" }}>{c.pages}</span>
                    <span className="text-[15px] font-bold ml-auto" style={{ color: "#c4b89a" }}>{c.cost}</span>
                  </div>
                  <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>{c.features}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 制作のこだわり */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Our Approach</p>
            <h2 className="font-black text-[26px] mb-12" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのWeb制作の5つのこだわり
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "美しいデザイン × 成果の両立", body: "デザインの洗練さと、SEO・CV・パフォーマンスを同時に実現します。単なる美しいデザインでは集客・問い合わせにつながりません。ビジネス目標を中心に設計します。" },
                { title: "SEO設計を制作段階から組み込む", body: "キーワード設計・URL設計・内部リンク設計・コンテンツ構造を最初から考慮します。後からSEOを追加する場合よりはるかに高い費用対効果を実現できます。" },
                { title: "Core Web Vitals・表示速度の最優先", body: "Lighthouse 90点以上・LCP 2.5秒以内を標準目標とします。next/imageやnext/fontを活用し、ユーザー体験とSEO評価を同時に高めます。" },
                { title: "構造化データ・AIO対策の標準実装", body: "BreadcrumbList・FAQPage・Organizationなどの構造化データを全案件で実装。リッチリザルトとAI検索（AIO）からの認知・引用に同時対応します。" },
                { title: "公開後の集客・改善まで一貫サポート", body: "制作で終わりではなく、公開後のSEO対策・MEO対策・コンテンツ追加・リライト・CV改善まで継続的にサポートします。長期的なWebマーケティングのパートナーとして伴走します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 業種別ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別Web制作のポイント
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-12" style={{ color: "#374151" }}>
              業種によってWebサイトに求められる機能・コンテンツ・SEO設計が異なります。業種特性を踏まえた設計が成果を左右します。
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {industryPoints.map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid #E8E4DC", background: "#F9F8F5" }}>
                  <p className="font-bold text-[14px] mb-3" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.industry}</p>
                  <p className="text-[13px] leading-[1.8]" style={{ color: "#374151" }}>{item.points}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* よくある失敗パターン */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Mistakes</p>
            <h2 className="font-black text-[26px] mb-12" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              Web制作でよくある失敗パターン
            </h2>
            <div className="max-w-4xl">
              {failurePatterns.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.t}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="Webサイト制作についてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="Webサイト制作のご相談・無料見積もり"
          body="ご要件・目的をお聞かせいただき、最適なサイト設計と費用のご提案をします。SEO・MEOとの統合を前提とした制作をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SEO対策とは｜検索上位表示の基礎から実践まで｜株式会社サイプレス",
  description:
    "SEO対策の基礎から最新トレンドまで徹底解説。内部SEO・コンテンツSEO・テクニカルSEO・ローカルSEO・外部SEOの5つの柱で体系的に対策できます。東京葛飾区のSEO専門会社。",
  keywords: ["SEO対策", "SEOとは", "検索上位表示", "SEO基礎", "SEO種類", "SEO方法"],
  openGraph: {
    title: "SEO対策とは｜検索上位表示の基礎から実践まで｜株式会社サイプレス",
    description:
      "SEO対策の基礎から最新トレンドまで徹底解説。内部SEO・コンテンツSEO・テクニカルSEO・ローカルSEO・外部SEOの5つの柱で体系的に対策できます。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp" },
        { "@type": "ListItem", position: 2, name: "SEO対策", item: "https://www.cypress-all.co.jp/seo" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "SEO対策の効果が出るまでどれくらいかかりますか？", acceptedAnswer: { "@type": "Answer", text: "競合状況や対象キーワードによりますが、一般的に着手から3〜6ヶ月で検索順位の変動が始まります。安定して上位表示されるまでには12ヶ月以上かかるケースが多いです。ただし、テクニカルSEOの修正（表示速度・クロールエラー修正など）は比較的早く反映されることがあります。継続的な取り組みが重要です。" } },
        { "@type": "Question", name: "SEO対策とリスティング広告はどちらが優先ですか？", acceptedAnswer: { "@type": "Answer", text: "短期的な集客が必要であればリスティング広告、中長期での安定した集客基盤が目標であればSEOが適しています。広告は即効性がある一方、出稿を止めると流入も止まります。SEOは時間がかかりますが、一度上位表示されれば継続的に流入を獲得できる「資産」になります。両方を並行する企業も多いです。" } },
        { "@type": "Question", name: "コンテンツを書くだけでSEOの効果は出ますか？", acceptedAnswer: { "@type": "Answer", text: "コンテンツだけでは不十分です。テクニカルSEO（表示速度・クロール最適化）や内部SEO（タイトル・見出し設計）が整っていないと評価されにくい状態になります。また、検索意図に合っていないコンテンツは上位表示されません。コンテンツ・技術・内部設計の三つを同時に整えることが重要です。" } },
        { "@type": "Question", name: "AIでコンテンツを大量生成してもSEO効果はありますか？", acceptedAnswer: { "@type": "Answer", text: "AI生成コンテンツをそのまま大量公開するだけでは、Googleのスパムポリシーに抵触するリスクがあります。AIを活用するにしても、一次情報・専門的見解・実体験を加えた人間による編集が不可欠です。質の低いコンテンツを量産するより、一つひとつの記事の質を高める方が長期的なSEO効果は高いです。" } },
        { "@type": "Question", name: "Googleのアルゴリズム変更が怖いです。安全な対策方法はありますか？", acceptedAnswer: { "@type": "Answer", text: "Googleが一貫して重視しているのは「ユーザーにとって価値あるコンテンツと体験」です。小手先のテクニックより、検索意図に合った質の高いコンテンツ制作・E-E-A-Tの構築・技術的な最適化を地道に積み重ねることが、アルゴリズム変更に強いサイト作りにつながります。" } },
        { "@type": "Question", name: "現在のサイトでSEO対策を始められますか？", acceptedAnswer: { "@type": "Answer", text: "はい、既存サイトへのSEO施策が最初のステップになります。まず現状診断を行い、改善優先度の高い施策（タイトルタグ修正・ページ速度改善・コンテンツ拡充など）から着手します。WordPress・Next.jsサイト・その他CMSに対応しています。" } },
        { "@type": "Question", name: "内部SEOと外部SEOはどちらを先にやるべきですか？", acceptedAnswer: { "@type": "Answer", text: "内部SEO（タイトル・構造・速度・コンテンツ）を先に整えることを推奨します。内部が最適化されていない状態で被リンクを集めても、評価が散漫になります。サイトの土台を固めてから、外部被リンク獲得に移行するのが効率的です。" } },
        { "@type": "Question", name: "SEO対策の費用はどのくらいかかりますか？", acceptedAnswer: { "@type": "Answer", text: "施策内容・対象キーワード数・競合状況によって大きく異なります。コンサルティング型では月5〜15万円程度、コンテンツ制作込みの包括支援では月10〜30万円程度が目安です。まずは現状診断・目標ヒアリングのうえで、費用対効果を踏まえたご提案をいたします。" } },
        { "@type": "Question", name: "SEO対策でサイトがペナルティを受けることはありますか？", acceptedAnswer: { "@type": "Answer", text: "ホワイトハットSEO（Googleのガイドラインに沿った対策）を実施する限りペナルティリスクはほぼありません。大量スパムリンク・隠しテキスト・コンテンツのコピー・誘導ページの作成などのブラックハット施策は重大なペナルティにつながります。当社はガイドラインを遵守した施策のみ実施します。" } },
        { "@type": "Question", name: "SEO対策の成果はどのように計測しますか？", acceptedAnswer: { "@type": "Answer", text: "Google Search Console・Google Analytics・順位計測ツールを使い、毎月の自然検索流入数・対策キーワード順位・セッション数・CV数・直帰率を計測します。月次レポートでデータを共有し、改善施策に反映させます。" } },
        { "@type": "Question", name: "中小企業でもSEO対策の効果はありますか？", acceptedAnswer: { "@type": "Answer", text: "はい、むしろ中小企業こそSEOの恩恵を大きく受けられます。大企業が狙わないロングテールキーワードや地域特化キーワードで上位表示を狙うことで、少ない予算でも効果的な集客が可能です。地域ビジネスであればMEO対策と組み合わせることでさらに高い効果が期待できます。" } },
        { "@type": "Question", name: "新しいウェブサイトを作った場合、SEO効果が出るまでどれくらいかかりますか？", acceptedAnswer: { "@type": "Answer", text: "新規ドメインの場合、Googleからの信頼評価（ドメインオーソリティ）が蓄積されるまで6〜12ヶ月かかることが多いです。ただし、適切なテクニカルSEO・コンテンツ戦略・内部リンク設計を最初から行うことで、立ち上がり期間を短縮できます。既存ドメインを引き継ぐ場合は早めに成果が出ます。" } },
        { "@type": "Question", name: "SEOで狙うべきキーワードはどうやって選べばいいですか？", acceptedAnswer: { "@type": "Answer", text: "月間検索ボリューム・競合難易度・転換率の3軸で評価します。まず自社ビジネスに関連するキーワードをリストアップし、Googleキーワードプランナーや検索候補（サジェスト）で検索ボリュームを確認します。競合が少なく検索意図がCV（問い合わせ・購入）に近いロングテールキーワードから優先的に対策するのが効率的です。" } },
        { "@type": "Question", name: "E-E-A-Tとは何ですか？なぜSEOに重要なのですか？", acceptedAnswer: { "@type": "Answer", text: "E-E-A-T（経験・専門性・権威性・信頼性）はGoogleが品質評価ガイドラインで重視する4つの要素です。特にYMYL（健康・金融・法律など）分野では評価への影響が大きいです。著者情報の明示・会社情報の整備・実績の掲載・専門コンテンツの充実などが有効です。" } },
        { "@type": "Question", name: "モバイル対応はSEOに影響しますか？", acceptedAnswer: { "@type": "Answer", text: "はい、Googleはモバイルファーストインデックスを採用しており、スマートフォンでの表示・速度・使いやすさがSEO評価の基本になっています。Core Web Vitals（LCP・INP・CLS）の改善もモバイル環境が評価の中心です。スマホ対応が不十分なサイトはPC表示が良くても評価が下がるリスクがあります。" } },
        { "@type": "Question", name: "被リンクはまだSEOに効果的ですか？", acceptedAnswer: { "@type": "Answer", text: "はい、信頼性の高いサイトからの被リンクは依然としてGoogleの重要な評価シグナルです。ただし、低品質サイトからの大量リンクはむしろマイナスになります。プレスリリース・業界メディアへの掲載・専門コンテンツのSNS拡散など、自然な被リンク獲得が有効です。購入リンクはガイドライン違反です。" } },
        { "@type": "Question", name: "サイトリニューアル後にSEOが下がった場合はどうすればいいですか？", acceptedAnswer: { "@type": "Answer", text: "リニューアル後のSEO低下の主な原因は、URLの変更（301リダイレクト漏れ）・構造化データの削除・ページタイトル・見出しの変更・内部リンクの整理などです。まずGoogle Search Consoleでクロールエラー・順位変動を確認し、旧URLから新URLへの適切なリダイレクト設定と内部SEOの再整備を行います。" } },
        { "@type": "Question", name: "ブログ記事はどのくらいの頻度で更新するのがいいですか？", acceptedAnswer: { "@type": "Answer", text: "頻度より質が重要です。週1本の薄い記事より、月2〜4本の検索意図に合った高品質な記事のほうが効果的です。既存記事のリライト（情報更新・情報拡充）も新規記事制作と同等以上の効果があります。まずキーワードリサーチに基づいた計画を作り、継続できるペースで実施することが長期的な成果につながります。" } },
        { "@type": "Question", name: "SEO対策とMEO・AIOを同時に進めるべきですか？", acceptedAnswer: { "@type": "Answer", text: "地域ビジネスであればSEOとMEOの同時対策が最も効果的です。SEOで指名検索・情報検索をカバーし、MEOで「地域名+業種」の来店前検索をカバーすることで、集客の幅が大幅に広がります。さらにAIO対策（AI検索対策）を加えることで、ChatGPT・Gemini経由の新たな流入も獲得できます。" } },
        { "@type": "Question", name: "Googleサーチコンソールはどのように活用すればいいですか？", acceptedAnswer: { "@type": "Answer", text: "サーチコンソールでは、表示回数・クリック数・平均掲載順位・CTR（クリック率）をキーワード・ページ別に確認できます。特に「表示回数は多いがCTRが低いページ」はタイトル・ディスクリプションの改善余地があります。「クロールエラー」「インデックス数の変動」「コアウェブバイタル」も定期的にチェックすることで、問題の早期発見につながります。" } },
        { "@type": "Question", name: "競合が多いキーワードでも上位表示できますか？", acceptedAnswer: { "@type": "Answer", text: "競合が強いキーワードでの上位表示には時間と質の高いコンテンツ・被リンク・E-E-A-Tの積み上げが必要です。まずは競合の少ないロングテールキーワード（例：「葛飾区 SEO対策 中小企業」）から着手し、ドメイン評価を高めてからメインキーワードを狙う段階的な戦略が現実的です。" } },
      ],
    },
  ],
};

const pillars = [
  {
    num: "01",
    title: "内部SEO",
    body: "タイトルタグ・メタディスクリプション・見出し構造・URL設計・内部リンクなど、サイト内部の要素を最適化する施策です。検索エンジンがページの内容を正確に理解できるよう整備し、クロール効率を高めます。すべてのSEOの土台となる領域です。",
    href: "/seo/internal-seo",
  },
  {
    num: "02",
    title: "コンテンツSEO",
    body: "ユーザーの検索意図に合ったページを継続的に制作・拡充していく施策です。キーワード調査・競合記事の研究・構成案の設計・ライティング・E-E-A-Tの強化を通じて、検索エンジンとユーザー双方に評価されるコンテンツを積み上げます。",
    href: "/seo/content-seo",
  },
  {
    num: "03",
    title: "テクニカルSEO",
    body: "ページ表示速度・クロール最適化・インデックス管理・構造化データの実装・Core Web Vitalsへの対応など、技術的な側面からサイトのSEO基盤を整える施策です。サイトのパフォーマンスと検索エンジンの評価を根本から底上げします。",
    href: "/seo/technical-seo",
  },
  {
    num: "04",
    title: "ローカルSEO",
    body: "地域名キーワードへの最適化、対応エリアページの設置、Googleビジネスプロフィールとの連携など、地域ビジネスの検索集客を強化する施策です。MEOと組み合わせることで、地域での認知と来店・問い合わせを大幅に増やせます。",
    href: "/seo/local-seo",
  },
  {
    num: "05",
    title: "外部SEO",
    body: "信頼性の高い外部サイトからの被リンク（バックリンク）獲得を目的とした施策です。専門性の高いコンテンツ制作・プレスリリース・業界メディアへの寄稿などを通じて、サイト全体の権威性を高めます。",
    href: "/seo/external-seo",
  },
];

const subPages = [
  { href: "/seo/internal-seo", label: "内部SEO", desc: "タイトル・見出し・URLを最適化する内部施策" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "検索意図に合ったコンテンツを継続的に制作" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "表示速度・クロール・Core Web Vitalsの改善" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域名検索への最適化と地域集客強化" },
  { href: "/seo/external-seo", label: "外部SEO・被リンク", desc: "権威性の高い被リンク獲得戦略" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "狙うべきキーワードの特定と優先順位設計" },
  { href: "/seo/site-structure", label: "サイト構造設計", desc: "情報設計とURL設計でSEO評価を最大化" },
  { href: "/seo/blog-strategy", label: "ブログ・コンテンツ戦略", desc: "長期的な流入増加につながる記事設計" },
  { href: "/seo/structured-data", label: "構造化データ実装", desc: "Schema.orgでAIOにも対応した情報設計" },
  { href: "/seo/page-speed", label: "ページ速度最適化", desc: "Core Web VitalsとLighthouseスコア改善" },
  { href: "/seo/mobile-seo", label: "モバイルSEO", desc: "モバイルファーストインデックスへの対応" },
  { href: "/seo/seo-audit", label: "SEO診断・監査", desc: "現状分析と改善優先度の特定" },
  { href: "/seo/search-console", label: "サーチコンソール活用", desc: "データを使った継続改善の仕組み" },
  { href: "/seo/seo-writing", label: "SEOライティング", desc: "検索意図に沿った文章の書き方" },
];

const challenges = [
  {
    num: "01",
    title: "Googleで自社サイトが見つからない",
    body: "「社名 + サービス名」で検索しても自社が出てこない、競合他社が上位を占めている——こうした状況では、潜在顧客が検索しても到達できません。内部SEOとコンテンツSEOの基盤整備が必要です。",
  },
  {
    num: "02",
    title: "SEO対策をしているが成果が出ない",
    body: "ブログ記事を書いているのに順位が上がらない、被リンクを増やしたのに効果がない——これは検索意図の分析不足やテクニカル面の課題が原因であることが多いです。施策の方向性を見直す診断が必要です。",
  },
  {
    num: "03",
    title: "広告に頼り切りで集客コストが高い",
    body: "リスティング広告やSNS広告による流入を止めると顧客が来なくなる状態は、長期的には経営リスクです。SEOで自然検索からの恒久的な集客資産を構築することで、広告依存を減らせます。",
  },
  {
    num: "04",
    title: "サイトはあるが問い合わせが来ない",
    body: "サイトを持っているがアクセスが少ない、来ても問い合わせに至らない——この場合、SEO対策とCV改善を同時に行う必要があります。集客とコンバージョンの両面から課題を整理します。",
  },
  {
    num: "05",
    title: "競合他社がSEOを強化して差をつけられている",
    body: "以前は上位にいたキーワードで競合に抜かれた、新しい競合が次々と上位に入ってくる——競合分析をもとに、コンテンツと技術面での追い上げ戦略が必要です。",
  },
  {
    num: "06",
    title: "業種・地域の検索で上位に出てきたい",
    body: "「葛飾区 税理士」「東京 美容室」のような地域名+業種の検索で上位に出ることで、来店・問い合わせを増やしたい——ローカルSEOとMEOを組み合わせた地域特化施策が効果的です。",
  },
];

const supportItems = [
  {
    title: "SEO現状診断・競合分析",
    body: "まず現在のサイトのSEO評価・クロール状況・インデックス率・キーワードランキングを調査します。同時に競合上位サイトの構成・コンテンツ量・被リンクプロファイルを分析し、差を埋めるための優先施策を特定します。",
  },
  {
    title: "キーワード戦略立案",
    body: "ビジネス目標に合ったメインキーワード・ロングテールキーワードを選定し、月間検索ボリューム・競合難易度・転換率見込みを評価した上で優先順位を決定します。狙うべきキーワードとページ構成のロードマップを作成します。",
  },
  {
    title: "内部SEO実施",
    body: "タイトルタグ・メタディスクリプション・見出しタグ（H1〜H3）・画像のalt属性・URL構造・canonical設定・構造化データ（JSON-LD）・サイトマップの整備まで、内部最適化を一括で実施します。",
  },
  {
    title: "テクニカルSEO改善",
    body: "PageSpeed Insightsで低スコアのページを特定し、画像最適化・JavaScript遅延読み込み・CSSの圧縮などを実施します。Core Web Vitals（LCP・INP・CLS）を改善し、Lighthouseスコア90点以上を目指します。",
  },
  {
    title: "コンテンツSEO制作・拡充",
    body: "検索意図を分析した上で、月次で対策キーワードに合ったコンテンツを制作・公開します。既存ページのリライト・情報量の増強・内部リンクの充実なども並行して実施し、サイト全体の評価を底上げします。",
  },
  {
    title: "AIO（AI検索）対応",
    body: "ChatGPT・Gemini・Perplexityなど生成AI検索での引用確率を高めるため、FAQ設計・構造化データ・E-E-A-T強化・著者情報の明示などを実施します。SEOとAIOを両立した情報設計が競合との差別化になります。",
  },
  {
    title: "順位計測・月次レポート",
    body: "対策キーワードの順位変動をGoogle Search Console・順位計測ツールで毎週追跡します。月次レポートで自然検索流入数・CV数・コンテンツ別パフォーマンスを共有し、次月の施策優先度を決定します。",
  },
  {
    title: "継続改善・PDCAサイクル",
    body: "SEOは一度やって終わりではなく、Googleのアルゴリズム更新・競合の変化・ユーザーニーズの変化に合わせて継続的に改善が必要です。月次でPDCAを回し、長期的な検索流入の増加を実現します。",
  },
];

const industries = [
  { name: "EC・通販", point: "商品カテゴリSEO・ロングテールキーワード戦略" },
  { name: "BtoB企業", point: "業界専門キーワード・コラムマーケティング強化" },
  { name: "医療・クリニック", point: "症状名+地域名SEO・E-E-A-T強化・医療広告遵守" },
  { name: "士業・専門家", point: "専門性コンテンツ・地域名+業種SEO" },
  { name: "飲食チェーン", point: "メニュー・地域・シーンキーワード設計" },
  { name: "不動産", point: "エリア×用途別物件ページSEO・ローカルSEO" },
  { name: "建設・リフォーム", point: "施工事例コンテンツ・地域SEO" },
  { name: "教育・スクール", point: "コース名・資格名・地域SEO" },
  { name: "IT・SaaS", point: "機能別コンテンツ・比較記事・導入事例SEO" },
  { name: "美容・サロン", point: "施術名+地域SEO・MEOとの連携" },
];

const faqItems = [
  {
    q: "SEO対策の効果が出るまでどれくらいかかりますか？",
    a: "競合状況や対象キーワードによりますが、一般的に着手から3〜6ヶ月で検索順位の変動が始まります。安定して上位表示されるまでには12ヶ月以上かかるケースが多いです。ただし、テクニカルSEOの修正（表示速度・クロールエラー修正など）は比較的早く反映されることがあります。継続的な取り組みが重要です。",
  },
  {
    q: "SEO対策とリスティング広告はどちらが優先ですか？",
    a: "短期的な集客が必要であればリスティング広告、中長期での安定した集客基盤が目標であればSEOが適しています。広告は即効性がある一方、出稿を止めると流入も止まります。SEOは時間がかかりますが、一度上位表示されれば継続的に流入を獲得できる「資産」になります。両方を並行する企業も多いです。",
  },
  {
    q: "コンテンツを書くだけでSEOの効果は出ますか？",
    a: "コンテンツだけでは不十分です。記事を書いても、テクニカルSEO（表示速度・クロール最適化）や内部SEO（タイトル・見出し設計）が整っていないと評価されにくい状態になります。また、検索意図に合っていないコンテンツは上位表示されません。コンテンツ・技術・内部設計の三つを同時に整えることが重要です。",
  },
  {
    q: "AIでコンテンツを大量生成してもSEO効果はありますか？",
    a: "AI生成コンテンツをそのまま大量公開するだけでは、Googleのスパムポリシーに抵触するリスクがあります。AIを活用するにしても、一次情報・専門的見解・実体験を加えた人間による編集が不可欠です。質の低いコンテンツを量産するより、一つひとつの記事の質を高める方が長期的なSEO効果は高いです。",
  },
  {
    q: "Googleのアルゴリズム変更が怖いです。安全な対策方法はありますか？",
    a: "Googleが一貫して重視しているのは「ユーザーにとって価値あるコンテンツと体験」です。小手先のテクニックより、検索意図に合った質の高いコンテンツ制作・E-E-A-Tの構築・技術的な最適化を地道に積み重ねることが、アルゴリズム変更に強いサイト作りにつながります。",
  },
  {
    q: "現在のサイトでSEO対策を始められますか？",
    a: "はい、既存サイトへのSEO施策が最初のステップになります。まず現状診断を行い、改善優先度の高い施策（タイトルタグ修正・ページ速度改善・コンテンツ拡充など）から着手します。WordPressサイト・Next.jsサイト・その他CMSに対応しています。",
  },
  {
    q: "内部SEOと外部SEOはどちらを先にやるべきですか？",
    a: "内部SEO（タイトル・構造・速度・コンテンツ）を先に整えることを推奨します。内部が最適化されていない状態で被リンクを集めても、評価が散漫になります。サイトの土台を固めてから、外部被リンク獲得に移行するのが効率的です。",
  },
  {
    q: "SEO対策の費用はどのくらいかかりますか？",
    a: "施策内容・対象キーワード数・競合状況によって大きく異なります。コンサルティング型では月5〜15万円程度、コンテンツ制作込みの包括支援では月10〜30万円程度が目安です。まずは現状診断・目標ヒアリングのうえで、費用対効果を踏まえたご提案をいたします。",
  },
  {
    q: "SEO対策でサイトがペナルティを受けることはありますか？",
    a: "ホワイトハットSEO（Googleのガイドラインに沿った対策）を実施する限りペナルティリスクはほぼありません。ただし、大量スパムリンク・隠しテキスト・コンテンツのコピー・誘導ページの作成などのブラックハット施策は重大なペナルティにつながります。当社はガイドラインを遵守した施策のみ実施します。",
  },
  {
    q: "SEO対策の成果はどのように計測しますか？",
    a: "Google Search Console・Google Analytics・順位計測ツールを使い、毎月の自然検索流入数・対策キーワード順位・セッション数・CV数・直帰率を計測します。月次レポートでデータを共有し、改善施策に反映させます。",
  },
  {
    q: "中小企業でもSEO対策の効果はありますか？",
    a: "はい、むしろ中小企業こそSEOの恩恵を大きく受けられます。大企業が狙わないロングテールキーワードや地域特化キーワードで上位表示を狙うことで、少ない予算でも効果的な集客が可能です。地域ビジネスであればMEO対策と組み合わせることでさらに高い効果が期待できます。",
  },
  {
    q: "新しいウェブサイトを作った場合、SEO効果が出るまでどれくらいかかりますか？",
    a: "新規ドメインの場合、Googleからの信頼評価（ドメインオーソリティ）が蓄積されるまで6〜12ヶ月かかることが多いです。ただし、適切なテクニカルSEO・コンテンツ戦略・内部リンク設計を最初から行うことで、立ち上がり期間を短縮できます。既存ドメインを引き継ぐ場合は早めに成果が出ます。",
  },
  {
    q: "SEOで狙うべきキーワードはどうやって選べばいいですか？",
    a: "月間検索ボリューム・競合難易度・転換率の3軸で評価します。まず自社ビジネスに関連するキーワードをリストアップし、Googleキーワードプランナーや検索候補（サジェスト）で検索ボリュームを確認します。競合が少なく検索意図がCV（問い合わせ・購入）に近いロングテールキーワードから優先的に対策するのが効率的です。",
  },
  {
    q: "E-E-A-Tとは何ですか？なぜSEOに重要なのですか？",
    a: "E-E-A-T（経験・専門性・権威性・信頼性）はGoogleが品質評価ガイドラインで重視する4つの要素です。特にYMYL（健康・金融・法律など）分野では評価への影響が大きいです。著者情報の明示・会社情報の整備・実績の掲載・専門コンテンツの充実などが有効です。",
  },
  {
    q: "モバイル対応はSEOに影響しますか？",
    a: "はい、Googleはモバイルファーストインデックスを採用しており、スマートフォンでの表示・速度・使いやすさがSEO評価の基本になっています。Core Web Vitals（LCP・INP・CLS）の改善もモバイル環境が評価の中心です。スマホ対応が不十分なサイトはPC表示が良くても評価が下がるリスクがあります。",
  },
  {
    q: "被リンクはまだSEOに効果的ですか？",
    a: "はい、信頼性の高いサイトからの被リンクは依然としてGoogleの重要な評価シグナルです。ただし、低品質サイトからの大量リンクはむしろマイナスになります。プレスリリース・業界メディアへの掲載・専門コンテンツのSNS拡散など、自然な被リンク獲得が有効です。購入リンクはガイドライン違反です。",
  },
  {
    q: "サイトリニューアル後にSEOが下がった場合はどうすればいいですか？",
    a: "リニューアル後のSEO低下の主な原因は、URLの変更（301リダイレクト漏れ）・構造化データの削除・ページタイトル・見出しの変更・内部リンクの整理などです。まずGoogle Search Consoleでクロールエラー・順位変動を確認し、旧URLから新URLへの適切なリダイレクト設定と内部SEOの再整備を行います。",
  },
  {
    q: "ブログ記事はどのくらいの頻度で更新するのがいいですか？",
    a: "頻度より質が重要です。週1本の薄い記事より、月2〜4本の検索意図に合った高品質な記事のほうが効果的です。既存記事のリライト（情報更新・情報拡充）も新規記事制作と同等以上の効果があります。まずキーワードリサーチに基づいた計画を作り、継続できるペースで実施することが長期的な成果につながります。",
  },
  {
    q: "SEO対策とMEO・AIOを同時に進めるべきですか？",
    a: "地域ビジネスであればSEOとMEOの同時対策が最も効果的です。SEOで指名検索・情報検索をカバーし、MEOで「地域名+業種」の来店前検索をカバーすることで、集客の幅が大幅に広がります。さらにAIO対策（AI検索対策）を加えることで、ChatGPT・Gemini経由の新たな流入も獲得できます。",
  },
  {
    q: "Googleサーチコンソールはどのように活用すればいいですか？",
    a: "サーチコンソールでは、表示回数・クリック数・平均掲載順位・CTR（クリック率）をキーワード・ページ別に確認できます。特に「表示回数は多いがCTRが低いページ」はタイトル・ディスクリプションの改善余地があります。「クロールエラー」「インデックス数の変動」「コアウェブバイタル」も定期的にチェックすることで、問題の早期発見につながります。",
  },
  {
    q: "競合が多いキーワードでも上位表示できますか？",
    a: "競合が強いキーワードでの上位表示には時間と質の高いコンテンツ・被リンク・E-E-A-Tの積み上げが必要です。まずは競合の少ないロングテールキーワード（例：「葛飾区 SEO対策 中小企業」）から着手し、ドメイン評価を高めてからメインキーワードを狙う段階的な戦略が現実的です。",
  },
];

const relatedLinks = [
  { href: "/seo/internal-seo", label: "内部SEO", desc: "タイトル・見出し・URL最適化" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "検索意図に合ったコンテンツ制作" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "表示速度・Core Web Vitals改善" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域名検索での集客強化" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "狙うべきキーワードの設計" },
  { href: "/seo/seo-audit", label: "SEO診断", desc: "現状分析と改善優先度の特定" },
  { href: "/seo/page-speed", label: "ページ速度最適化", desc: "Lighthouse 90+への改善" },
  { href: "/seo/structured-data", label: "構造化データ", desc: "Schema.org・JSON-LD実装" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップでの地域集客" },
  { href: "/aio", label: "AIO対策", desc: "ChatGPT・AI検索での引用" },
  { href: "/column/seo", label: "SEOコラム", desc: "SEOの基礎知識・最新情報" },
  { href: "/knowledge/seo-basics", label: "SEO基礎知識", desc: "初めてのSEO完全ガイド" },
  { href: "/knowledge/keyword-research", label: "キーワード調査の方法", desc: "実践的なキーワード選定法" },
  { href: "/guide/how-to-choose-seo-company", label: "SEO会社の選び方", desc: "外注先を選ぶポイント" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "料金相場と費用対効果" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援内容" },
];

export default function SeoPage() {
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
              <Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>SEO対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>
              Search Engine Optimization
            </p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SEO対策とは
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-8" style={{ color: "#374151" }}>
              SEO対策（検索エンジン最適化）とは、GoogleやYahoo!などの検索エンジンで自社サイトを上位表示させ、継続的な自然検索流入を獲得するための施策です。広告費用なしに見込み顧客へリーチできる、最も費用対効果の高いWebマーケティング手法の一つです。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              SEO対策は内部SEO・コンテンツSEO・テクニカルSEO・ローカルSEO・外部SEOの5つの領域に分かれます。これらを体系的に実施することで、検索エンジンとユーザー双方に評価されるWebサイトを構築できます。
            </p>
          </div>
        </section>

        {/* Visual */}
        <section className="relative overflow-hidden" style={{ height: "380px" }}>
          <Image src="/1.png" alt="SEO対策・検索上位表示の戦略設計" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* このページでわかること */}
        <section className="py-16" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Contents</p>
            <h2 className="font-black text-[24px] mb-8" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl">
              {[
                "SEO対策の基礎と5つの施策領域",
                "よくある課題とその原因・解決策",
                "サイプレスのSEO支援内容と進め方",
                "業種別のSEO活用ポイント",
                "SEO対策に関するよくある質問（FAQ）",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4" style={{ background: "#FFFFFF", border: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 pt-0.5" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[14px]" style={{ color: "#374151" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO対策の5つの柱 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>The 5 Pillars</p>
            <h2 className="font-black text-[28px] md:text-[34px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SEO対策の5つの領域
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-12" style={{ color: "#374151" }}>
              SEO対策は単一の施策ではなく、複数の領域を体系的に整備することで効果を発揮します。各領域が相互に作用し、サイト全体の検索評価を高めます。
            </p>
            <div className="max-w-4xl">
              {pillars.map((p, i) => (
                <Link key={p.num} href={p.href}>
                  <div
                    className="flex gap-6 py-7 hover:opacity-80 transition-opacity"
                    style={{ borderTop: "1px solid #E8E4DC", borderBottom: i === pillars.length - 1 ? "1px solid #E8E4DC" : undefined }}
                  >
                    <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{p.num}</span>
                    <div>
                      <h3 className="font-bold text-[17px] mb-2 hover:underline" style={{ color: "#0d1b2a" }}>{p.title}</h3>
                      <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{p.body}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SEO専門ページ一覧 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Sub Pages</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SEO専門ページ一覧
            </h2>
            <div className="grid md:grid-cols-2 gap-0 max-w-4xl">
              {subPages.map((p, i) => (
                <Link key={p.href} href={p.href}>
                  <div
                    className="py-5 pr-4 hover:opacity-80 transition-opacity flex items-start justify-between gap-4"
                    style={{ borderTop: "1px solid #E8E4DC" }}
                  >
                    <div>
                      <p className="font-semibold text-[15px] mb-1" style={{ color: "#0d1b2a" }}>{p.label}</p>
                      <p className="text-[13px]" style={{ color: "#6B7280" }}>{p.desc}</p>
                    </div>
                    <svg className="w-4 h-4 shrink-0 mt-1" style={{ color: "#9CA3AF" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* よくある課題 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Challenges</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              こんな課題を抱えていませんか？
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              SEO対策に取り組みたいと思いつつ、どこから手をつければいいかわからない方が多いです。以下のような課題に一つでも当てはまる場合は、SEO対策が集客改善の鍵になります。
            </p>
            <div className="max-w-4xl">
              {challenges.map((c) => (
                <div key={c.num} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{c.num}</span>
                  <div>
                    <p className="font-semibold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{c.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{c.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* SEO対策の重要性 */}
        <section className="py-20" style={{ background: "#0d1b2a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#475569" }}>Why SEO Matters</p>
            <h2 className="font-black text-white text-[26px] md:text-[32px] mb-8" style={{ fontFamily: "var(--font-serif)" }}>
              なぜSEO対策が重要なのか
            </h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
              <div>
                <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#94A3B8" }}>
                  Googleの検索結果で1位を獲得したページのクリック率は約28〜30%といわれています。一方、2ページ目以降はほとんどクリックされません。つまり、検索上位に表示されるかどうかが、Webからの集客量を決定づけます。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#94A3B8" }}>
                  SEO対策は成果が出るまで時間がかかるため敬遠されがちですが、一度構築した検索流入は継続的に機能します。広告を出し続けるより長期的なコストが低く、ブランドの信頼性にもつながります。
                </p>
              </div>
              <div>
                <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#94A3B8" }}>
                  2024年以降、GoogleがAI Overview（AI生成の回答）を検索結果に表示するようになり、SEOとAIOの境界が曖昧になっています。従来のSEO施策に加え、AI検索で引用される情報設計（AIO対策）も必要になっています。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#94A3B8" }}>
                  サイプレスでは、SEO・AIO・MEOを連動させた統合的なWeb集客戦略を設計します。単なる順位改善ではなく、ビジネス目標につながる集客の仕組みを構築します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* サイプレスのSEO支援内容 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Our Services</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのSEO支援内容
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-12" style={{ color: "#374151" }}>
              SEO対策は施策が多岐にわたるため、どこから手をつけるかが重要です。サイプレスでは現状診断から施策実施・月次改善まで一気通貫で対応し、ビジネス成果につながる施策を優先して実施します。
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {supportItems.map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 対応業種 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Industries</p>
            <h2 className="font-black text-[26px] mb-8" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別SEO対策のポイント
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              業種によってターゲットキーワードの特徴・競合状況・コンテンツの設計方針が異なります。業種特有の検索行動を理解した上で施策を設計することで、集客の精度が大幅に向上します。
            </p>
            <div className="grid md:grid-cols-2 gap-0 max-w-4xl">
              {industries.map((ind, i) => (
                <div
                  key={ind.name}
                  className="flex gap-4 py-4"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-0.5" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-semibold text-[14px] mb-0.5" style={{ color: "#0d1b2a" }}>{ind.name}</p>
                    <p className="text-[13px]" style={{ color: "#6B7280" }}>{ind.point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO対策の実施フロー */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Flow</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SEO対策の進め方（サイプレスの実施フロー）
            </h2>
            <div className="max-w-3xl">
              {[
                { step: "STEP 01", title: "現状診断・競合分析", body: "現在のサイトのSEO状況・キーワード順位・テクニカル課題・競合サイトの分析を実施。改善優先度の高い施策を特定します。" },
                { step: "STEP 02", title: "キーワード戦略立案", body: "ビジネス目標に基づいてメインキーワード・ロングテールキーワードを選定。月間検索ボリューム・競合難易度・転換率を加味した優先度マップを作成します。" },
                { step: "STEP 03", title: "内部SEO・テクニカルSEO実施", body: "タイトルタグ・メタ・見出し・構造化データを最適化。表示速度・Core Web Vitalsを改善し、SEO評価の基盤を整えます。" },
                { step: "STEP 04", title: "コンテンツ制作・拡充", body: "検索意図に合ったコンテンツを月次で制作・公開。既存ページのリライト・情報拡充も並行して実施します。" },
                { step: "STEP 05", title: "計測・月次改善", body: "Google Search Console・順位計測ツールでKPIを追跡。毎月の成果レポートをもとにPDCAを回し、継続的に成果を改善します。" },
              ].map((s, i) => (
                <div key={i} className="flex gap-8 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <div className="shrink-0">
                    <p className="text-[11px] font-semibold" style={{ color: "#9CA3AF" }}>{s.step}</p>
                  </div>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{s.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{s.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="SEO対策についてよくある質問" bgColor="#F9F8F5" />

        <RelatedPages links={relatedLinks} />

        <PageContactCTA
          heading="SEO対策のご相談・無料診断"
          body="現在のサイトのSEO状況を診断し、改善ポイントとご提案をお伝えします。まずは現状のお悩みをお聞かせください。"
        />
      </main>
      <Footer />
    </>
  );
}

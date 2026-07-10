import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "キーワード調査とは｜SEO対策の基礎・対策キーワードの選び方｜株式会社サイプレス",
  description:
    "SEOキーワード調査の基礎から実践まで解説。検索ボリューム・競合難易度・検索意図の分析方法、ロングテールキーワード戦略、ツールの使い方まで体系的に網羅。",
  keywords: ["キーワード調査", "SEOキーワード", "検索ボリューム", "ロングテールキーワード", "キーワード選定", "SEO対策"],
  openGraph: {
    title: "キーワード調査とは｜SEO対策の基礎・対策キーワードの選び方｜株式会社サイプレス",
    description: "SEOキーワード調査の実践ガイド。検索意図の分析から対策キーワードの選定まで解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/keyword-research" },
};

const faqItems = [
  {
    q: "キーワード調査はどのツールを使えばいいですか？",
    a: "無料ツールとしてはGoogleキーワードプランナー・Googleサジェスト・Google Search Console・ラッコキーワードが基本です。有料ツールではAhrefs・SEMrush・Ubersuggestが機能豊富です。まずはSearch Consoleとラッコキーワードで始め、競合分析が必要になった段階でAhrefsを活用する流れが現実的です。",
  },
  {
    q: "検索ボリュームが大きいキーワードを選べばいいですか？",
    a: "必ずしもそうではありません。検索ボリュームが大きいキーワードほど競合が多く、新しいサイトや中小規模サイトが上位表示を狙うのは難しいです。まずはロングテールキーワードから始め、徐々にドメイン評価を高めてからメインキーワードに挑戦する戦略が現実的です。競合難易度（KD）と検索ボリュームをセットで評価することが重要です。",
  },
  {
    q: "ロングテールキーワードとは何ですか？",
    a: "3語以上の複合キーワードで検索ボリュームは比較的小さいものの、ユーザーの検索意図が明確でコンバージョン率が高い傾向にあるキーワードです。例えば「SEO」よりも「葛飾区 飲食店 SEO対策 費用」の方がロングテールです。競合が少なく上位表示しやすいため、積み上げることで大きな検索流入になります。",
  },
  {
    q: "一つのページで対策するキーワードはいくつにすればいいですか？",
    a: "1ページにつきメインキーワード1〜2個、関連キーワード3〜5個程度が目安です。現在のGoogleはページのトピックと文脈を理解して評価するため、検索意図に合ったコンテンツを自然に書くことが最重要です。無理に複数キーワードを詰め込むとコンテンツの一貫性が失われ逆効果になります。",
  },
  {
    q: "競合サイトのキーワードを調べる方法はありますか？",
    a: "Ahrefs・SEMrushなどの有料ツールを使うと、競合サイトが流入を得ているキーワード一覧を確認できます。無料でも、競合サイトのページタイトル・見出し・メタディスクリプションを確認することで、どのキーワードを狙っているかの概要がつかめます。ラッコキーワードで競合URLを入力して関連キーワードを抽出する方法も有効です。",
  },
  {
    q: "地域ビジネスのキーワード選定はどうすればいいですか？",
    a: "地域ビジネスでは「地域名 + 業種/サービス」の組み合わせが基本です（例：「葛飾区 整体」「東京 Web制作」）。さらに「〜の口コミ」「〜のおすすめ」「〜の費用」などの修飾語をつけたロングテールも有効です。地域をさらに細かく（区・市・駅名）に絞ることで競合が減り上位表示しやすくなります。",
  },
  {
    q: "季節性のあるキーワードはどう扱えばいいですか？",
    a: "Googleトレンドを使って、対象キーワードの季節変動を確認します。シーズン前2〜3ヶ月からコンテンツを公開することで、ピーク時に上位表示を狙えます。例えば「エアコン 掃除」なら4〜5月に公開し、6〜7月のピークに備えるイメージです。",
  },
  {
    q: "キーワード調査の結果をどうコンテンツ制作に活かしますか？",
    a: "調査したキーワードをグループ分けして「クラスター（テーマ群）」を作り、それぞれのクラスターに対応するページを設計するトピッククラスター戦略がSEOの現代的なアプローチです。ピラーページと関連ページを内部リンクで結ぶサイロ構造を作ることで、テーマ全体の専門性をGoogleに示せます。",
  },
  {
    q: "ラッコキーワードとは何ですか？どう使いますか？",
    a: "ラッコキーワードは日本語対応の無料キーワード調査ツールです。入力したキーワードのGoogleサジェスト・Yahoo!サジェスト・関連キーワード・共起語を一括取得できます。使い方は、メインキーワードを入力してサジェスト・関連キーワードを全件取得し、CSVでエクスポートしてExcelで整理・分類するのが基本的なフローです。",
  },
  {
    q: "Google Search Consoleをキーワード調査にどう活用しますか？",
    a: "Search Consoleの「検索パフォーマンス」レポートでは、現在流入しているキーワード・表示回数・クリック数・掲載順位を確認できます。掲載順位が11〜20位（2ページ目相当）のキーワードは「少し改善すれば1ページ目に上がれる」候補です。これらのキーワードでコンテンツを強化することが効率的な施策になります。",
  },
  {
    q: "競合難易度（KD）はどう評価すればいいですか？",
    a: "Ahrefsの競合難易度（KD：Keyword Difficulty）は0〜100で表されます。一般的にKD30以下はロングテール・競合が少ないキーワード、KD50以上は中〜大手サイトが上位を占めている競合の強いキーワードです。自サイトのDR値と比較して、挑戦可能な難易度帯のキーワードを優先的に選定します。",
  },
  {
    q: "検索意図の種類にはどんなものがありますか？",
    a: "検索意図は大きく4種類に分類されます。①Know（情報収集）：「〜とは」「〜の方法」②Do（行動・作業）：「〜やり方」「〜ダウンロード」③Go（特定サイトへの移動）：ブランド名・サイト名の直接検索④Buy（購買・問い合わせ）：「〜価格」「〜見積もり」「〜依頼」。各ページが狙う検索意図と合致したコンテンツ設計が不可欠です。",
  },
  {
    q: "キーワードマップとは何ですか？どう作ればいいですか？",
    a: "キーワードマップとは、サイトの各ページとターゲットキーワードの対応関係を整理した表です。ページURL・メインキーワード・検索ボリューム・競合難易度・検索意図・現在の掲載順位を列として持つスプレッドシートで管理します。全ページのキーワード競合状況を俯瞰できるため、コンテンツ計画と優先順位づけに欠かせないドキュメントです。",
  },
  {
    q: "キーワードカニバリゼーションとは何ですか？",
    a: "キーワードカニバリゼーション（共食い）とは、同サイト内の複数ページが同じキーワードで競合してしまう状態です。Googleがどのページをランクさせるか判断できず、両方のページの評価が下がります。Search Consoleで同一キーワードに複数URLが表示されていたら要注意。ページを統合するか、内部リンクで代表ページを明示化して対処します。",
  },
  {
    q: "Googleキーワードプランナーの検索ボリュームは正確ですか？",
    a: "Googleキーワードプランナーは広告運用向けのツールで、表示される検索ボリュームは幅のある範囲（例：1,000〜10,000）で表示されます。SEO目的での精度はAhrefsやSEMrushの方が高いですが、完全に無料で使える点では有用です。複数ツールの数値を参考に相対的な需要規模を判断することをお勧めします。",
  },
  {
    q: "Eコマースのキーワード調査で注意すべき点はありますか？",
    a: "ECでは商品名・ブランド名・型番（指名検索）と、「〜おすすめ」「〜比較」「〜レビュー」（情報収集型）の両方を対策する必要があります。カテゴリーページには上位概念のキーワード、個別商品ページには商品名・型番を割り当てることが基本です。また「〜価格」「〜最安値」などの購買意図キーワードへの対応も重要です。",
  },
  {
    q: "ニュースサイト・メディアのキーワード戦略はどうすべきですか？",
    a: "ニュース・メディアサイトは速報性のある時事キーワードと、常緑コンテンツ（エバーグリーンコンテンツ）のキーワードを組み合わせた戦略が有効です。常緑コンテンツ（「〜とは」「〜の方法」系）は長期的に流入を獲得し続けるため、リソースを集中させる価値があります。Googleトレンドを活用してトレンドキーワードを早期に検知することも重要です。",
  },
  {
    q: "共起語とは何ですか？SEOにどう関係しますか？",
    a: "共起語とは、特定のキーワードと一緒に使われることが多い関連語句です。Googleはページのコンテンツを評価する際に、対策キーワードだけでなく共起語・関連語がどれだけ含まれているかも評価します。ラッコキーワードの「共起語」機能で対象キーワードの共起語を取得し、コンテンツ内に自然に組み込むことで評価が高まります。",
  },
  {
    q: "サービスページとブログ記事でキーワード選定の違いはありますか？",
    a: "サービスページ（LPや料金ページ）には「〜費用」「〜見積もり」「〜依頼」など購買・問い合わせ型（Buy/Do）の高CVキーワードを割り当てます。ブログ記事には「〜とは」「〜の方法」などの情報収集型（Know）キーワードを割り当てます。サービスページを直接上位表示させることが難しい競合キーワードでは、先にブログ記事で権威性を積み上げてからサービスページを強化する戦略が有効です。",
  },
  {
    q: "キーワード調査は一度やれば終わりですか？",
    a: "いいえ、定期的な見直しが必要です。ユーザーの検索行動は変化し、新しいトレンドキーワードも生まれます。Google Search Consoleで月次の流入キーワードを確認し、想定外のキーワードで流入している場合はそのページを強化します。また競合が新しいコンテンツを公開した際は競合分析を再実施することをお勧めします。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO全体の概要" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "検索意図に合ったコンテンツ制作" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域名キーワードでの上位表示" },
  { href: "/seo/blog-strategy", label: "ブログ戦略", desc: "キーワードを活かした記事設計" },
  { href: "/seo/internal-seo", label: "内部SEO", desc: "キーワードの適切な配置" },
  { href: "/seo/external-seo", label: "外部SEO", desc: "被リンク獲得との連携戦略" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "インデックス最適化の基礎" },
  { href: "/seo/seo-audit", label: "SEO診断", desc: "キーワード設計の現状確認" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップでのキーワード最適化" },
  { href: "/aio", label: "AIO対策", desc: "AI検索でのキーワード対策" },
  { href: "/knowledge/keyword-research", label: "キーワード調査入門", desc: "初心者向けキーワード選定ガイド" },
  { href: "/knowledge/long-tail-keyword", label: "ロングテール戦略", desc: "競合の少ないキーワードを狙う" },
  { href: "/knowledge/search-intent", label: "検索意図の分類と分析", desc: "Know・Do・Go・Buyの理解" },
  { href: "/knowledge/topic-cluster", label: "トピッククラスター戦略", desc: "テーマ別サイロ構造の作り方" },
  { href: "/guide/keyword-map", label: "キーワードマップの作り方", desc: "ページとキーワードの対応表設計" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "キーワード調査込みの料金" },
  { href: "/checklist/seo", label: "SEOチェックリスト", desc: "キーワード設計の確認項目" },
  { href: "/faq/seo", label: "SEO FAQ", desc: "キーワード調査のよくある質問集" },
  { href: "/glossary/keyword", label: "キーワード用語集", desc: "KD・サジェスト・共起語などを解説" },
  { href: "/column/seo", label: "SEOコラム", desc: "キーワード調査の最新情報" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援" },
  { href: "/case/seo", label: "SEO支援事例", desc: "キーワード戦略の成功事例" },
  { href: "/services/content-marketing", label: "コンテンツマーケティング", desc: "キーワード設計から制作まで" },
  { href: "/seo/content-seo", label: "コンテンツSEO詳細", desc: "キーワードを活かした記事設計" },
];

export default function KeywordResearchPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/seo" style={{ color: "#6B7280" }} className="hover:underline">SEO対策</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>キーワード調査</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Keyword Research</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              キーワード調査
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              キーワード調査とは、ターゲットユーザーがどのような言葉で検索しているかを調べ、SEO対策・コンテンツ制作の方針を決める作業です。どのキーワードを狙うかで、コンテンツSEOの成果は大きく変わります。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              適切なキーワード調査なしにコンテンツを作っても、誰にも届かないページが増えるだけです。ビジネス目標から逆算してキーワードを選定し、戦略的なコンテンツ投資を行うことが重要です。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              キーワード調査は「一度やって終わり」ではなく、Search Consoleのデータを定期的に確認しながら継続的に見直す作業です。ビジネスの変化・競合の動向・ユーザーの検索行動の変化に合わせて、常にキーワード戦略を更新し続けることが長期的なSEO成果を生みます。
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative" style={{ height: "320px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.jpg" alt="SEOキーワード調査・検索ボリューム分析のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "キーワード調査の全体像と必要なツール", body: "ラッコキーワード・Googleサジェスト・Google Search Console・Ahrefs・Googleキーワードプランナーなど、用途別のツール選択と組み合わせ方を理解できます。" },
                { title: "検索ボリューム・競合難易度・検索意図の読み方", body: "単純な検索ボリュームだけでなく、競合難易度（KD）・検索意図（Know/Do/Buy）・季節変動を組み合わせたキーワード評価の方法を習得できます。" },
                { title: "ロングテールキーワードの特定と活用戦略", body: "検索ボリュームは少ないが転換率が高いロングテールキーワードの発見方法と、積み上げ戦略によって大きな流入を得るアプローチを理解できます。" },
                { title: "キーワードマップの作成とページ設計への落とし込み方", body: "調査したキーワードを整理し、各ページにキーワードを割り当てるキーワードマップの作り方と、コンテンツ計画への反映方法を学べます。" },
                { title: "トピッククラスター戦略によるサイト設計", body: "ピラーページとクラスターページを内部リンクで結ぶサイロ構造の作り方と、テーマ全体の専門性をGoogleに示す戦略的なサイト設計を理解できます。" },
                { title: "Search Consoleを使った継続的なキーワード改善", body: "Google Search Consoleの「検索パフォーマンス」レポートを活用した、既存コンテンツの改善・機会キーワードの発見・カニバリゼーションの検出方法を習得できます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* キーワード調査なしのリスク */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Keyword Risks</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              キーワード調査なしのSEO施策が抱える4つのリスク
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "誰も検索しないキーワードで記事を書く", b: "月間検索ボリュームが数件しかないキーワードに対して記事を書いても、そもそもユーザーが検索しないため流入はゼロです。Googleキーワードプランナーやラッコキーワードで需要を確認してから着手することが基本です。" },
                { t: "購買意図のないユーザーしか来ない", b: "「比較したい」「今すぐ買いたい」という購買意欲の高いキーワードを狙わず、情報収集段階のキーワードばかりに注力すると、アクセスはあっても問い合わせゼロが続きます。Know型とBuy型をバランスよく設計することが重要です。" },
                { t: "競合に勝てないキーワードを狙い続ける", b: "大企業が上位を独占しているキーワードで戦っても成果は出ません。競合難易度（KD）を確認し、競合の弱いニッチキーワードや地域+業種の組み合わせから攻めることが中小企業のSEO戦略の基本です。" },
                { t: "コンテンツを量産しても成果がゼロ", b: "方向性が間違ったまま記事を増やし続けても、キーワードが分散し評価が積み上がりません。調査に基づいたキーワード設計なしの量産は、リソースのムダになるだけでなく、サイトの評価を下げる可能性もあります。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* キーワードの種類 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Keyword Types</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              キーワードの種類と選定基準
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { type: "ビッグキーワード（単語1語）", volume: "月間数万〜数百万", desc: "「SEO」「Web制作」などの単語。競合が非常に強く、新規・中小サイトが上位表示するのは難しい。ドメイン評価が高まった段階で挑戦する。Ahrefsでのキーワード難易度（KD）は通常60以上になることが多い。" },
                { type: "ミドルキーワード（2語）", volume: "月間数百〜数万", desc: "「SEO対策 費用」「Web制作 東京」など。競合は強いが挑戦可能。ビジネスの核となるサービスページに対応させる。KD30〜60程度のものが中心で、一定の被リンク数があるサイトが上位に入りやすい帯域。" },
                { type: "ロングテールキーワード（3語以上）", volume: "月間数十〜数百", desc: "「葛飾区 整体 腰痛 おすすめ」など。競合が少なく上位表示しやすい。検索意図が明確でコンバージョン率が高い傾向。初期は積極的に狙う。KD30以下のものが多く、良質なコンテンツがあれば被リンクが少なくても上位表示できる。" },
                { type: "情報収集型（Know）", volume: "「〜とは」「〜の方法」", desc: "知識・情報を求めているキーワード。直接的なCVは少ないが、認知向上と信頼構築に貢献。コンテンツSEOの中心となる。ブログ記事・解説ページを対応させる。内部リンクでサービスページへ誘導することで間接的なCV獲得も可能。" },
                { type: "比較・検討型（Compare）", volume: "「〜おすすめ」「〜比較」", desc: "購入・契約前の比較検討段階のキーワード。CV率が高く重要。自社の強みと比較ポイントを明確にしたコンテンツが効果的。「〇〇 vs 〇〇」「〇〇の選び方」形式のページが検索意図に合致しやすい。" },
                { type: "購買・問い合わせ型（Buy/Go）", volume: "「〜依頼」「〜料金」「〜見積もり」", desc: "購入・問い合わせに直結するキーワード。検索ボリュームは小さいが最もCV率が高い。サービスページ・料金ページに対応させる。このキーワードを持つページのCTAとフォームを最適化することがCV改善の最短経路。" },
              ].map((item, i) => (
                <div key={i} className="py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <div className="flex items-start gap-4 mb-2">
                    <p className="font-bold text-[15px]" style={{ color: "#0d1b2a" }}>{item.type}</p>
                    <span className="text-[11px] shrink-0 mt-0.5 px-2 py-0.5 rounded" style={{ background: "#F0EDE7", color: "#6B7280" }}>{item.volume}</span>
                  </div>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.desc}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* よくある課題と原因 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Problems</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              キーワード調査でよくある課題と原因
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "キーワードが広すぎて競合に勝てない", body: "「SEO」「マーケティング」など単語1〜2語の広いキーワードだけを狙っていると、被リンクが豊富な大手サイトに太刀打ちできません。まず「地域名＋サービス＋修飾語」などのロングテールに絞り、勝てるキーワードから実績を積み上げることが出発点です。" },
                { title: "競合難易度を無視してキーワードを選定している", body: "検索ボリュームだけを見てキーワードを選定し、競合難易度（KD）を確認しないまま記事を書くケースが多いです。Ahrefsで競合サイトのDRと自サイトのDRを比較し、自サイトが実際に上位に入れる可能性があるかを事前に確認することが必須です。" },
                { title: "ロングテールキーワードが抜けている", body: "メインキーワードだけを対策してロングテールを放置しているパターンです。ロングテールは個々の検索ボリュームは少ないですが、合計すると大きな流入源になります。ラッコキーワードのサジェスト一括取得を使ってロングテール候補を漏れなく収集することが重要です。" },
                { title: "同じキーワードを複数ページで狙っている（カニバリゼーション）", body: "複数の記事が同じキーワードで競合してしまうキーワードカニバリゼーション。Google Search Consoleで同一キーワードに複数URLが表示されている場合は要注意です。ページを統合するか、内部リンクで代表ページを明示することで解消します。" },
                { title: "検索意図とコンテンツ形式がズレている", body: "「〜の方法」という情報収集型キーワードに対してサービスのLPを当てているなど、検索意図とコンテンツ形式が一致していないケースです。Googleの上位結果を確認して、そのキーワードに対してどのような種類のコンテンツが上位表示されているかを調べてから設計することが重要です。" },
                { title: "季節性キーワードを見逃している", body: "季節によって検索ボリュームが大きく変動するキーワードを見逃して、ピーク期に準備ができていないケースです。Googleトレンドで主要キーワードの季節変動を確認し、ピークの2〜3ヶ月前からコンテンツを公開・強化する計画を立てることが重要です。" },
                { title: "キーワードマップがなくページとの対応が不明確", body: "担当者が変わったりコンテンツが増えたりするにつれて、どのページがどのキーワードを狙っているかわからなくなるケースです。ページURL・メインキーワード・検索ボリューム・現在の掲載順位を一覧管理するキーワードマップの作成が必須です。" },
                { title: "Search Consoleのデータを活用できていない", body: "Search ConsoleにはサイトへのリアルなGoogleからの流入データが蓄積されています。掲載順位が11〜20位のキーワード（2ページ目相当）は少し改善するだけで1ページ目に上がれる「ネクストキーワード」であり、優先的に強化すべき対象です。このデータを見ていない会社が多いです。" },
                { title: "ユーザー目線でなく自社目線でキーワードを選んでいる", body: "「我々の強みはXXです」という自社目線のキーワードではなく、「ユーザーが何を検索しているか」の視点でキーワードを選ぶことが重要です。ターゲット顧客が普段使う言葉・悩みの表現を実際のインタビューやSearch Consoleデータから収集することが正確なキーワード調査の基礎です。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
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
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別のキーワード調査活用ポイント
            </h2>
            <p className="text-[14px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              業種によってユーザーの検索パターンとキーワード構造は大きく異なります。自社業種の特性に合ったキーワード戦略を理解することが効率的なSEO対策の近道です。
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
              {[
                {
                  industry: "飲食店・カフェ",
                  points: "「地域名＋料理ジャンル」「地域名＋カフェ＋特徴（テラス席・ペット可・子連れ）」などの複合ロングテールが主要な流入源。「〜ランチ」「〜ディナー」「〜個室」などの修飾語をGoogleサジェストで網羅することが重要。季節メニューに合わせたキーワード（「〜の桜スポット×ランチ」など）も有効。"
                },
                {
                  industry: "士業（弁護士・税理士・司法書士）",
                  points: "「〜相談 無料」「〜費用 相場」「〜の手続き やり方」などの情報収集型と「〜依頼 〇〇市」「〜事務所 近く」などの問い合わせ型を組み合わせる。専門的な解説コンテンツ（「〇〇問題の解決方法」）は指名検索に至る認知段階のユーザーを獲得し、長期的な問い合わせ増につながる。"
                },
                {
                  industry: "医療・クリニック",
                  points: "「症状＋病名＋地域名」「病名＋治療法＋地域名」の組み合わせが主要キーワード。「〜夜間診療」「〜土曜診療」「〜保険診療」などの絞り込み条件をロングテールとして網羅する。Google Search Consoleで実際にどの症状キーワードから来院予約に至っているかを確認し、コンテンツ強化に反映することが効果的。"
                },
                {
                  industry: "建設・リフォーム・工務店",
                  points: "「地域名＋リフォーム＋箇所（外壁・屋根・キッチン）」「地域名＋新築＋工法（平屋・注文住宅）」の組み合わせが中心。「〜費用 相場」「〜工期 期間」など費用・プロセス系のキーワードが問い合わせにつながりやすい。施工事例ページにキーワードを組み込み（例：「葛飾区 外壁塗装 施工事例」）、地域事例として検索されるよう設計する。"
                },
                {
                  industry: "Web制作・デザイン会社",
                  points: "「地域名＋Web制作＋業種（飲食店・クリニック・美容室）」のセグメント別キーワードが高CVになる傾向。「Web制作 費用 相場」「ホームページ リニューアル 費用」など費用系ページへの流入が問い合わせにつながりやすい。技術系ブログ（Next.js・Tailwind CSS）は専門家からの被リンク獲得にも効果的。"
                },
                {
                  industry: "EC・小売",
                  points: "「商品名＋型番」「ブランド名＋商品カテゴリ」「〜おすすめ 〇〇人向け」など購買直前キーワードを商品ページ・カテゴリページに割り当てる。「〜比較」「〜ランキング」はコンテンツページで対応。Googleキーワードプランナーで季節キャンペーンに合わせたキーワード需要の変化を把握して在庫・広告計画に連動させる。"
                },
                {
                  industry: "美容・エステ・サロン",
                  points: "「地域名＋施術名（フェイシャル・脱毛・まつげエクステ）」が基本。「〜初回限定」「〜体験」「〜口コミ」などの修飾語がCVにつながりやすい。競合が多い都市部では「駅名＋徒歩〇分」「〜隠れ家サロン」などの差別化キーワードを意識的に設計する。季節イベント（ブライダル・成人式）に合わせたキーワード強化も重要。"
                },
                {
                  industry: "教育・スクール・資格",
                  points: "「資格名＋取り方」「〜通信講座 おすすめ」「地域名＋〜スクール 社会人」などの情報収集型から問い合わせ型まで段階的に設計する。「〜合格率 比較」「〜費用 比較」などの比較キーワードが検討段階のユーザーを獲得するのに有効。無料体験・説明会関連キーワードは問い合わせ直結のため優先度を高く設定する。"
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded" style={{ background: "#FFFFFF", border: "1px solid #E8E4DC" }}>
                  <p className="font-bold text-[15px] mb-3" style={{ color: "#0d1b2a" }}>{item.industry}</p>
                  <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.points}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 具体的な作業手順 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Step by Step</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              キーワード調査の具体的な作業手順
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "Step 1：ビジネス目標とターゲットを整理する", body: "「誰に」「何を」「どのような状態で」届けたいかを言語化します。問い合わせを増やしたいのか、認知を広げたいのか、特定の商品を売りたいのかによって狙うべきキーワードのタイプ（Know型/Buy型）と優先順位が変わります。この整理なしにツールを開いても方向性が定まりません。" },
                { title: "Step 2：シードキーワードをリストアップする", body: "自社のサービス・商品に関連する「軸となるキーワード」を5〜20個書き出します。これが「シードキーワード」です。ラッコキーワードにこれらを入力し、Googleサジェスト・Yahoo!サジェスト・関連キーワードを一括取得します。取得結果をCSVでダウンロードしてスプレッドシートに貼り付けます。" },
                { title: "Step 3：検索ボリュームと競合難易度を付与する", body: "Googleキーワードプランナー（または Ahrefs）で各キーワードの月間検索ボリュームと競合難易度を確認します。Ahrefsを使う場合は「Keywords Explorer」でキーワードを一括入力し、KD・Volume・クリック数をエクスポートします。無料の場合はキーワードプランナーで大まかなボリューム帯を確認します。" },
                { title: "Step 4：検索意図を分類する", body: "各キーワードを「Know（情報収集）」「Compare（比較検討）」「Buy（購買・問い合わせ）」「Go（指名検索）」に分類します。最も信頼できる方法は、そのキーワードをGoogleで実際に検索し、上位10件の結果がどのような形式（ブログ記事・サービスページ・動画・ECページ）かを確認することです。" },
                { title: "Step 5：競合サイトのキーワードを分析する", body: "Ahrefsの「サイトエクスプローラー」で競合サイトのURLを入力し、「オーガニックキーワード」レポートを確認します。競合が流入を得ているキーワードのうち、自サイトがまだ対策していないものをリスト化します。これが「キーワードギャップ」であり、優先的に取り組む候補になります。" },
                { title: "Step 6：キーワードをグルーピングする", body: "集めたキーワードをテーマ別にグループ分けします。例えば「費用・料金系」「地域名＋サービス系」「悩み・症状系」「ハウツー系」などのカテゴリーに振り分けます。同じグループ内のキーワードは一つのページでまとめて対策します。これがトピッククラスターの土台になります。" },
                { title: "Step 7：既存ページとキーワードを紐づける（キーワードマップ作成）", body: "既存のサイトページURL一覧を作り、各ページのメインキーワードと現在の掲載順位を記入します。Google Search Consoleの「検索パフォーマンス」レポートをエクスポートし、ページごとに流入しているキーワードと掲載順位を確認・記入します。「まだどのページにも割り当てられていないキーワード」が新規コンテンツの候補です。" },
                { title: "Step 8：優先度スコアを付けてコンテンツ計画に落とし込む", body: "各キーワードに「ビジネス価値×勝てる可能性」でスコアを付けます。検索ボリュームが適切で、競合難易度が自サイトDRに見合っており、CV意図が高いキーワードを上位に設定します。このスコア順に3ヶ月・6ヶ月のコンテンツ制作計画を立て、チームで共有します。" },
                { title: "Step 9：Search Consoleで「ネクストキーワード」を発見する", body: "Search Consoleで掲載順位が11〜20位のキーワード（2ページ目相当）を抽出します。これらは「もう少し改善すれば1ページ目に入れる」キーワードです。該当ページのコンテンツを拡充・改善することが、最短でオーガニック流入を増やせる施策です。月次でこのリストを確認します。" },
                { title: "Step 10：3ヶ月ごとにキーワードマップを更新する", body: "キーワードの検索ボリューム・競合状況・自サイトの掲載順位は常に変化します。3ヶ月ごとにAhrefsとSearch Consoleのデータを更新し、キーワードマップを見直します。新しく台頭している競合・新しいトレンドキーワードの発見・成果が出たキーワードの深掘りを継続的に行うことがSEOの複利効果を生みます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* トピッククラスター戦略 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Strategy</p>
            <h2 className="font-black text-[26px] mb-6" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              トピッククラスター戦略
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-8" style={{ color: "#374151" }}>
              キーワードを孤立させずに「テーマ群（クラスター）」として設計することで、サイト全体としての専門性をGoogleに示すことができます。ピラーページ（主要テーマ）とクラスターページ（関連テーマ）を内部リンクで結ぶサイロ構造がSEOの基本です。単独ページでの上位表示が難しいビッグキーワードも、クラスター全体の権威性が高まることで上位表示しやすくなります。
            </p>
            <div className="max-w-3xl p-6 rounded" style={{ background: "#FFFFFF", border: "1px solid #E8E4DC" }}>
              <p className="font-bold text-[14px] mb-4" style={{ color: "#0d1b2a" }}>例：MEO対策のトピッククラスター</p>
              <div className="space-y-2 text-[13px]" style={{ color: "#374151" }}>
                <p className="font-bold" style={{ color: "#0d1b2a" }}>ピラーページ：/meo（MEO対策とは）</p>
                <div className="pl-4 space-y-1" style={{ borderLeft: "2px solid #E8E4DC" }}>
                  <p>→ /meo/google-business-profile（Googleビジネスプロフィールの最適化）</p>
                  <p>→ /meo/ranking（MEO上位表示の方法）</p>
                  <p>→ /meo/review-strategy（口コミ獲得戦略）</p>
                  <p>→ /meo/photo-strategy（MEOに効く写真設定）</p>
                  <p>→ /meo/post-strategy（投稿機能の活用）</p>
                </div>
              </div>
              <p className="text-[13px] mt-4 leading-[1.9]" style={{ color: "#6B7280" }}>
                各クラスターページはピラーページに内部リンクを張り返し、ピラーページから全クラスターページへのリンクも設置します。この双方向の内部リンク設計がトピッククラスターのポイントです。
              </p>
            </div>
          </div>
        </section>

        {/* 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs & Metrics</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標（KPI）
            </h2>
            <p className="text-[14px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              キーワード調査と対策の成果は複数の指標を組み合わせて評価します。単一の指標だけで判断せず、流入・順位・CVの変化を総合的に見ることが重要です。
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
              {[
                {
                  kpi: "対策キーワードの掲載順位",
                  where: "確認場所：Google Search Console / Ahrefs Rank Tracker",
                  detail: "最重要指標。設定したメインキーワードが1〜10位（1ページ目）に入っているかを毎週確認します。順位改善のトレンドが続いているかを月次で評価します。"
                },
                {
                  kpi: "オーガニック流入数",
                  where: "確認場所：Google Analytics / Search Console",
                  detail: "検索経由で実際にサイトへ来訪したセッション数。月次で前月・前年同月と比較します。特定のページへの流入増加と対策キーワードの順位改善の相関を確認します。"
                },
                {
                  kpi: "2ページ目キーワード数（11〜20位）",
                  where: "確認場所：Google Search Console（掲載順位でフィルター）",
                  detail: "最も改善効果が出やすいキーワード群。11〜20位のキーワード数が多いほど、コンテンツ改善によって1ページ目に引き上げられる機会が豊富です。月次でこの数を追います。"
                },
                {
                  kpi: "対策ページのクリック率（CTR）",
                  where: "確認場所：Google Search Console",
                  detail: "順位が上がっても検索結果でのクリック率が低い場合は、タイトルタグ・メタディスクリプションの改善が必要です。CTRの改善は実質的な流入増加に直結します。業種・ページタイプの平均CTRと比較して評価します。"
                },
                {
                  kpi: "インデックス済みページ数とカバレッジエラー",
                  where: "確認場所：Google Search Console（カバレッジレポート）",
                  detail: "作成したページが正常にGoogleにインデックスされているかを確認します。カバレッジエラーが増加している場合は、新しく作成したコンテンツが正常に評価されていない可能性があります。"
                },
                {
                  kpi: "キーワード流入からのコンバージョン数",
                  where: "確認場所：Google Analytics（チャネル×CV目標）",
                  detail: "最終的なKPI。オーガニック検索経由の問い合わせ・購入・資料請求数を計測します。どのランディングページ・どのキーワードからCVが発生しているかを特定し、成功パターンを他ページに横展開します。"
                },
                {
                  kpi: "対策中のキーワード数とカバレッジ",
                  where: "確認場所：キーワードマップ（独自管理）",
                  detail: "キーワードマップ上で実際にコンテンツが対応しているキーワード数と、まだカバーできていないキーワード数を管理します。未カバーのキーワード数が次の制作計画の根拠になります。"
                },
                {
                  kpi: "新規流入キーワード数",
                  where: "確認場所：Google Search Console（期間比較）",
                  detail: "前月と比較して新たに流入を獲得したキーワード数を確認します。これが増加し続けていればコンテンツが正常に評価・展開されていることの証です。期間比較レポートで簡単に確認できます。"
                },
              ].map((item, i) => (
                <div key={i} className="p-6" style={{ border: "1px solid #E8E4DC", borderRadius: "6px" }}>
                  <p className="font-bold text-[15px] mb-1" style={{ color: "#0d1b2a" }}>{item.kpi}</p>
                  <p className="text-[11px] font-semibold mb-3" style={{ color: "#c4b89a" }}>{item.where}</p>
                  <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="キーワード調査についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="キーワード調査・SEO戦略のご相談"
          body="ビジネスに合ったキーワード選定と、コンテンツ戦略のご提案を行います。"
        />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AIO対策サービス｜AI検索（ChatGPT・Gemini・Perplexity）からの引用獲得｜株式会社サイプレス",
  description:
    "株式会社サイプレスのAIO対策サービス。ChatGPT・Gemini・Perplexityなどのレビューに引用されるE-E-A-T強化・構造化データ実装・コンテンツ最適化を一貫してご支援。",
  keywords: ["AIO対策", "AI検索最適化", "ChatGPT SEO", "Gemini対策", "Perplexity対策", "E-E-A-T強化"],
  openGraph: {
    title: "AIO対策サービス｜AI検索（ChatGPT・Gemini・Perplexity）からの引用獲得｜株式会社サイプレス",
    description: "サイプレスのAIO対策サービス。AI検索に引用されるコンテンツ最適化・構造化データ実装まで一貫支援。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services/aio" },
};

const faqItems = [
  {
    q: "AIO対策とは何ですか？",
    a: "AIO（AI Optimization）とは、ChatGPT・Gemini・Perplexity・ClaudeなどのAI検索エンジンの回答に、自社の情報・コンテンツが引用・言及されやすくする施策です。AI検索の普及により、従来のGoogle SEOに加えてAIOへの対応が重要になっています。",
  },
  {
    q: "AI検索での自社情報の引用を増やすにはどうすればいいですか？",
    a: "E-E-A-T（経験・専門性・権威性・信頼性）が明確なコンテンツ、FAQページの整備、著者情報・会社情報の構造化、一次情報・専門的知見の掲載、引用しやすいFAQ・リスト形式のコンテンツが有効です。AIはこれらの「信頼できる情報源」から優先的に引用する傾向があります。",
  },
  {
    q: "SEO対策とAIO対策は別物ですか？",
    a: "重複する部分が多いですが、完全に同じではありません。SEOはGoogle検索の順位向上が目標で、AIOはAI検索での引用獲得が目標です。良質なE-E-A-Tコンテンツ・構造化データ・専門性の明示はどちらにも有効です。サイプレスではSEO・AIO・MEOを統合した戦略をご提案します。",
  },
  {
    q: "AIO対策の効果をどう計測しますか？",
    a: "ChatGPT・Gemini等で業界関連のクエリを定期的に検索し、自社情報が引用されているか確認する方法が主流です。一部のSEOツールではAI Overviewの監視機能が提供されています。GoogleのAI Overview引用はGoogle Search Consoleで一定の確認が可能です。",
  },
  {
    q: "どのようなコンテンツがAI検索で引用されやすいですか？",
    a: "FAQページ（Q&A形式のコンテンツ）、数字・データを含む具体的な情報、専門家の見解・一次情報、明確な見出し構造（H2・H3）で整理されたコンテンツ、要点が箇条書きでまとめられたコンテンツが引用されやすい傾向があります。",
  },
  {
    q: "構造化データはAIO対策に効果がありますか？",
    a: "はい。FAQPage・Article・Organization・LocalBusinessなどの構造化データは、AIがコンテンツの意味を正確に理解するのを助けます。特にFAQPage構造化データはAI検索での引用可能性を高めるため、サイプレスではすべてのページに実装を推奨しています。",
  },
  {
    q: "llms.txtとは何ですか？AIO対策に必要ですか？",
    a: "llms.txtは大規模言語モデル（LLM）向けに、サイトの概要・主要ページ・重要情報を記述するテキストファイルです（robots.txtのAI版）。一部のAIクローラーが参照するとされており、AIO対策の一環としてサイプレスでは実装を推奨しています。",
  },
  {
    q: "AIO対策サービスの費用はどのくらいですか？",
    a: "AIO対策はSEO対策との組み合わせが多く、SEO・AIO・MEOの統合プランとしてご提供しています。コンテンツ改善・構造化データ実装・llms.txt設置のみの初回対応から、継続的な最適化サポートまでご要望に合わせてプランをご提案します。詳細はお問い合わせください。",
  },
  {
    q: "E-E-A-Tとはどういう意味ですか？",
    a: "E-E-A-Tとは、Experience（経験）・Expertise（専門性）・Authoritativeness（権威性）・Trustworthiness（信頼性）の頭文字です。Googleが品質評価に用いる概念で、AI検索エンジンも同様の観点で「信頼できる情報源」かどうかを判断しているとされています。",
  },
  {
    q: "AIO対策に取り組むべきタイミングはいつですか？",
    a: "AI検索の利用者は急速に増加しており、競合が対策を始める前に着手することが重要です。特に士業・医療・コンサルなど専門性が問われる業種は、AIが専門情報を引用する頻度が高いため、早期の対応が差別化につながります。",
  },
  {
    q: "既存のウェブサイトでAIO対策を始めることはできますか？",
    a: "はい、既存サイトからでもAIO対策は始められます。現状のE-E-A-T水準の診断・構造化データの有無の確認・FAQコンテンツの充実度確認から着手し、優先順位の高い施策から順に実施します。サイプレスでは新規サイト制作を伴わない改善支援も承っています。",
  },
  {
    q: "AI OverviewとAIO対策はどう関係していますか？",
    a: "AI Overview（旧SGE）はGoogleの検索結果上部に表示されるAI生成の回答欄です。ここに自社情報が引用されることでオーガニック流入と認知の両方が高まります。AIO対策はAI Overviewへの引用獲得にも有効であり、サイプレスでは専用の施策メニューを用意しています。",
  },
  {
    q: "著者情報はどのように整備すればいいですか？",
    a: "著者名・肩書き・専門分野・略歴をページに掲載し、Person構造化データで記述します。可能であれば顔写真・SNSリンク・外部メディアへの掲載実績も付記すると信頼性が高まります。サイプレスでは著者情報の設計・実装も支援しています。",
  },
  {
    q: "AIに引用されるFAQはどのように作ればいいですか？",
    a: "ユーザーが実際に検索しそうな質問をリサーチし、簡潔かつ具体的に回答するFAQを作成します。1問1答の形式で書かれ、回答が150〜300文字程度にまとまっているコンテンツが引用されやすい傾向があります。FAQPage構造化データとの組み合わせが必須です。",
  },
  {
    q: "競合がAI検索で引用されているか調べられますか？",
    a: "はい。ChatGPT・Gemini・Perplexityで競合名・業界キーワードを検索し、どのサイトの情報が引用されているかを手動で確認できます。サイプレスではAIO対策の初回診断として競合の引用状況を調査し、自社との差を明示したレポートを提供しています。",
  },
  {
    q: "ローカルビジネスでもAIO対策は効果がありますか？",
    a: "はい。「〇〇区のおすすめ歯科」「〇〇市のリフォーム会社」といった地域名を含む質問でAIが地域ビジネスを引用するケースがあります。LocalBusiness構造化データ・地域特化FAQの整備・Googleビジネスプロフィールとの連携が効果的です。",
  },
  {
    q: "AIO対策の成果はどのくらいの期間で出ますか？",
    a: "構造化データの実装やllms.txtの設置はAIクローラーが再訪問次第効果が現れますが、コンテンツの評価が積み上がるまで一定の時間がかかります。目安として着手から3〜6ヶ月で変化が現れ始めることが多く、継続的な改善が重要です。",
  },
  {
    q: "YMYL分野（医療・法律・金融）でのAIO対策は難しいですか？",
    a: "YMYL（Your Money or Your Life）分野はAIがとりわけ厳格に情報の信頼性を評価します。医師・弁護士・ファイナンシャルプランナーなど有資格者の著者情報の明示、参考文献の記載、監修者の設置が特に重要です。サイプレスではYMYL分野向けの強化プランをご用意しています。",
  },
  {
    q: "SEO・MEO・AIOをまとめて依頼することはできますか？",
    a: "はい。サイプレスではSEO・MEO・AIOを統合したWebマーケティング支援パッケージをご提供しています。各施策が相互に補完し合うため、個別対応より効率よく集客効果を高められます。ご予算に応じたプランニングも可能ですので、まずはお気軽にご相談ください。",
  },
  {
    q: "サイプレスに依頼するメリットは何ですか？",
    a: "サイプレスはSEO・MEO・AIO・SNS・Web制作を一括で手がけており、各施策が連動した戦略を提案できる点が強みです。設立2026年5月13日、代表・織田春樹が一貫して施策を管理し、東京都葛飾区を拠点に全国のクライアントを支援しています。",
  },
];

const relatedLinks = [
  { href: "/aio", label: "AIO対策とは", desc: "AI検索最適化の基礎知識" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "Google検索上位表示" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ上位表示" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "Instagram・X・TikTok運用代行" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "AIO対応サイトの制作" },
  { href: "/services/content", label: "コンテンツ制作サービス", desc: "AI引用に強いコンテンツ" },
  { href: "/seo/structured-data", label: "構造化データ実装", desc: "JSON-LD・Schema.org設定" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "AI引用に強いコンテンツ制作" },
  { href: "/cost/aio", label: "AIO対策の費用", desc: "料金プランと相場" },
  { href: "/checklist/aio", label: "AIOチェックリスト", desc: "AI検索対策の確認項目" },
  { href: "/knowledge/eeat", label: "E-E-A-T強化ガイド", desc: "専門性・権威性の高め方" },
  { href: "/guide/seo-vs-aio", label: "SEOとAIOの違い", desc: "両対策の関係と戦略" },
  { href: "/faq/aio-chatgpt", label: "AIO対策FAQ", desc: "よくある質問まとめ" },
  { href: "/column/seo", label: "SEOコラム", desc: "AI検索・AIOの最新情報" },
  { href: "/industries/medical", label: "医療機関のAIO対策", desc: "YMYL領域のE-E-A-T強化" },
  { href: "/industries/law", label: "士業のAIO対策", desc: "法律・税務専門知識の引用獲得" },
  { href: "/industries/it-saas", label: "IT・SaaSのAIO対策", desc: "技術情報のAI参照強化" },
  { href: "/industries/education", label: "教育機関のAIO対策", desc: "学習情報のAI引用獲得" },
  { href: "/industries/real-estate", label: "不動産のAIO対策", desc: "地域情報のAI参照強化" },
  { href: "/industries/ec", label: "ECサイトのAIO対策", desc: "商品情報のAI引用獲得" },
  { href: "/area/tokyo", label: "東京のAIO対策支援", desc: "東京エリアの対応実績" },
  { href: "/area/katsushika", label: "葛飾区のAIO支援", desc: "地元密着の対応" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
  { href: "/contact", label: "無料相談・お問い合わせ", desc: "AIO対策の相談窓口" },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AIO対策サービス（AI検索最適化）",
  description: "ChatGPT・Gemini・Perplexity・Claude等のAI検索エンジンからの引用・推薦を増やすためのコンテンツ設計・構造化データ実装・E-E-A-T強化支援。",
  provider: {
    "@type": "Organization",
    name: "株式会社サイプレス",
    url: "https://www.cypress-all.co.jp",
  },
  areaServed: { "@type": "Country", name: "Japan" },
  url: "https://www.cypress-all.co.jp/services/aio",
  serviceType: "AIO対策・AI検索エンジン最適化",
};

export default function ServicesAioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/services" style={{ color: "#6B7280" }} className="hover:underline">サービス</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>AIO対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>AIO Service</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIO対策サービス
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              AIO（AI Optimization）対策とは、ChatGPT・Gemini・Perplexity・ClaudeなどのAI検索エンジンの回答に、自社の情報が引用・言及されやすくする施策です。AI検索が普及する現代において、SEOと並ぶ重要な集客戦略となっています。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-8" style={{ color: "#374151" }}>
              サイプレスでは、E-E-A-T強化・構造化データ実装・AIO向けコンテンツ最適化・llms.txt設置を通じて、AI検索からの認知と誘導を高める施策をご支援します。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ background: "#0F172A", color: "#FFFFFF" }}>
                無料相談・お問い合わせ
              </Link>
              <Link href="/cost/aio" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ border: "1.5px solid #D1D5DB", color: "#374151" }}>
                料金・プランを見る
              </Link>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section className="relative" style={{ height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_08_58 (6).jpg" alt="AIO対策・AI検索最適化・ChatGPT引用獲得のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-4">
              {[
                "AIO対策（AI検索最適化）がなぜ今必要なのかの背景と仕組み",
                "ChatGPT・Gemini・PerplexityなどのAI検索で自社が引用されていない根本原因",
                "E-E-A-T・構造化データ・llms.txtの具体的な実装方法と優先順位",
                "業種ごとにAIO対策で押さえるべきポイントと差別化戦略",
                "サイプレスのAIO支援がどのような流れで進むかのステップ全体像",
                "AI検索での引用状況を計測・改善するための指標と確認方法",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 font-bold text-[15px]" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AIO対策の施策内容 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Service Details</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIO対策サービスの施策内容
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "E-E-A-Tコンテンツの最適化", body: "著者情報・専門性の明示、一次情報・体験談の付与、専門的知見の追加によってE-E-A-Tを強化します。AIが信頼できる情報源として認識するコンテンツの土台を作ります。" },
                { title: "構造化データ（JSON-LD）の実装", body: "FAQPage・Article・Organization・LocalBusiness・WebSiteなどの構造化データをJSON-LD形式で実装します。AIがコンテンツの意味を正確に理解するための機械可読な情報提供を行います。" },
                { title: "FAQ・リスト形式コンテンツの充実", body: "AI検索で引用されやすいFAQ形式・箇条書き・数字入りのコンテンツを拡充します。ユーザーが検索しそうな質問とその明確な回答を体系的に整備します。" },
                { title: "会社情報・著者情報の構造化", body: "会社概要ページの充実、代表者プロフィールの整備、連絡先・所在地の明示を行います。AIは運営者情報が明確なサイトの情報をより信頼しやすい傾向があります。" },
                { title: "llms.txtの設置", body: "大規模言語モデル向けのサイト情報ファイル（llms.txt）を設置します。サイトの概要・主要ページ・コンテンツカテゴリをAIクローラーに伝えることで、サイト全体の情報をAIが把握しやすくなります。" },
                { title: "AIO効果の継続的な確認・改善", body: "対象クエリでAI検索に自社情報が引用されているか定期的に確認し、引用されていない場合はコンテンツの改善・FAQ追加・構造化データの修正を実施します。" },
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

        {/* AI検索が従来SEOと異なる5つのポイント */}
        <section className="py-20" style={{ background: "#0d1b2a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Key Differences</p>
            <h2 className="font-black text-[26px] mb-12" style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>
              AI検索が従来SEOと異なる5つのポイント
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { num: "01", title: "AIは単一の答えを提示する", body: "Google検索は複数のリンクを並べるが、ChatGPT等は1つの回答を提示。上位に引用されないと存在しないも同然。" },
                { num: "02", title: "クリック率より引用率が重要", body: "AIに回答の中で自社サービスが言及・引用されることが重要。クリックされる前段階で選別が完了している。" },
                { num: "03", title: "E-E-A-Tと専門性の明示が評価の核心", body: "著者情報・会社情報・根拠の明示がAIに信頼できる情報源と判断させる。運営者が曖昧なサイトは引用されにくい。" },
                { num: "04", title: "構造化されたコンテンツが引用されやすい", body: "見出し・箇条書き・FAQなど、AIが参照しやすい形式で書かれたコンテンツが選ばれる。長文の流し読みより要点の整理が効く。" },
                { num: "05", title: "llms.txtによるクローラー制御が有効", body: "AI検索エンジン向けのllms.txtを設置することで、どのページを参照させるかを制御できる。重要ページを明示的にAIへ伝える手段として注目されている。" },
              ].map((item) => (
                <div key={item.num} className="flex gap-6 py-7" style={{ borderTop: "1px solid rgba(196,184,154,0.2)" }}>
                  <span className="text-[28px] font-black shrink-0 leading-none" style={{ color: "#c4b89a", fontFamily: "var(--font-serif)" }}>{item.num}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#FFFFFF" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#9CA3AF" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(196,184,154,0.2)" }} />
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Challenges</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "AI検索に自社が出てこない", body: "E-E-A-Tの確立が不十分で、AIに「信頼できる情報源」と認識されていない状態です。著者情報・組織情報の整備から着手することで改善の土台を作れます。" },
                { title: "ChatGPTに聞いても競合が紹介される", body: "競合がAIO対策を先行して実施している可能性があります。競合の引用状況を調査し、差別化ポイントを明確にしたコンテンツを整備することが有効です。" },
                { title: "AI検索の対策方法が分からない", body: "AIOはSEOとは異なる評価軸を持つため、従来の知識だけでは対策が難しい領域です。E-E-A-T・構造化データ・llms.txtという3つの柱を軸に体系的に取り組む必要があります。" },
                { title: "従来SEOだけでは不十分になってきた", body: "AI Overviewの登場によりオーガニック流入の一部がAI回答に吸収されるケースが出てきています。SEOとAIOを並行して対策することで、変化する検索行動に対応できます。" },
                { title: "E-E-A-Tの具体的な実装方法が分からない", body: "E-E-A-Tは抽象的な概念に見えますが、著者ページの設置・資格・経歴の記載・監修者の明示・外部リンクの獲得など具体的な施策に落とし込めます。優先度を設計した上で実装を進めることが重要です。" },
                { title: "構造化データを自分で実装できない", body: "JSON-LDは技術的な知識が必要で、誤った実装は効果がないどころかエラーになる場合があります。サイプレスでは構造化データの設計から実装・テストまで一貫して対応しています。" },
                { title: "llms.txtの設置方法が分からない", body: "llms.txtはまだ新しい仕様で、正しい記述方法や設置場所についての情報が少ない状況です。サイプレスでは業種別のllms.txtテンプレートを活用して適切に設置します。" },
                { title: "AI検索対策に専門家が必要か分からない", body: "基本的なFAQ整備や著者情報追加は自社でも可能ですが、構造化データ実装・llms.txt設置・競合調査・継続モニタリングは専門知識を要します。スポット支援から始めることも可能です。" },
                { title: "費用対効果が不明", body: "AIO対策の効果はAI検索での引用回数やオーガニック流入で計測できます。初回の現状調査で改善余地を数値化し、投資対効果のイメージを共有した上で支援を開始します。" },
                { title: "どのAI検索エンジンを優先すべきか分からない", body: "利用者数はChatGPT・Gemini・Perplexityの順に多い傾向がありますが、業種や用途によって使われ方が異なります。まずGoogleのAI Overview対策を軸に据え、その後ChatGPT・Geminiへの引用拡大を図るアプローチが効率的です。" },
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

        {/* Section C: 業種別の支援ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Industry Focus</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の支援ポイント
            </h2>
            <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
              {[
                { industry: "士業・コンサル", body: "法律・税務・経営の専門知識がAI検索で直接引用されるチャンスが多い業種です。弁護士・税理士・中小企業診断士などの資格情報と実績を構造化し、FAQを充実させることで引用獲得を狙います。" },
                { industry: "医療機関", body: "YMYL領域として最も高い信頼性基準が求められます。医師監修の明示・診療科ごとのFAQ整備・診療実績の掲載がAI引用への近道です。患者が検索する症状・治療法クエリへの対応を優先します。" },
                { industry: "IT・SaaS", body: "技術用語の解説・比較記事・ユースケース紹介がAI検索でリファレンスとして引用されやすい業種です。エンジニア著者の明示と技術ブログの構造化でE-E-A-Tを強化します。" },
                { industry: "教育・スクール", body: "学習方法・スクール選び・資格取得ガイドがAI検索で提示される機会が多い分野です。卒業生の声・合格実績・カリキュラムの詳細を構造化し、問い合わせ前の段階でAIに紹介してもらえる状態を目指します。" },
                { industry: "不動産", body: "「〇〇エリアの家賃相場」「マンション購入の注意点」などの地域・物件情報がAIに引用されやすい領域です。エリア別FAQと地域密着コンテンツの充実で地域特化のAI引用を獲得します。" },
                { industry: "EC・小売", body: "商品比較・選び方・使い方のQ&AがAI検索で引用されるケースが増えています。商品構造化データ（Product Schema）とFAQの組み合わせが購買直前のAI引用獲得に効果的です。" },
                { industry: "メディア・ブログ", body: "専門性の高いオリジナルコンテンツが最もAI引用されやすい媒体です。著者の専門性・更新頻度・被リンク数を高め、AIが一次情報源として認識するサイト格を築くことが目標です。" },
                { industry: "地域ビジネス", body: "「〇〇市でおすすめの〇〇」という地域名+業種クエリでのAI引用を狙います。LocalBusiness構造化データ・地域特化FAQ・Googleビジネスプロフィールとの連携が三位一体で機能します。" },
              ].map((item) => (
                <div key={item.industry} className="p-6" style={{ border: "1px solid #E8E4DC" }}>
                  <p className="font-bold text-[13px] mb-3" style={{ color: "#c4b89a" }}>{item.industry}</p>
                  <p className="text-[14px] leading-[1.8]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: ご支援の流れ */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Our Process</p>
            <h2 className="font-black text-[26px] mb-12" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ご支援の流れ
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "無料相談", body: "現在のウェブサイト状況・AI検索での課題・ご予算・ゴールをヒアリングします。初回相談は完全無料で、具体的な改善の方向性をご提示します。" },
                { title: "現状AI引用状況調査", body: "ChatGPT・Gemini・Perplexityで主要キーワードを検索し、自社が引用されているかどうかを確認します。競合の引用状況と比較した現状レポートを作成します。" },
                { title: "E-E-A-T診断", body: "著者情報・会社情報・専門性の明示・コンテンツの信頼性・外部リンク状況をスコアリングし、改善すべき優先項目を明確にします。" },
                { title: "AIO改善計画立案", body: "診断結果をもとに、構造化データ実装・コンテンツ改善・llms.txt設置・著者情報整備のロードマップを作成します。短期・中期・長期に分けて優先順位を設計します。" },
                { title: "構造化データ実装", body: "FAQPage・Article・Organization・LocalBusinessなどのJSON-LDをページごとに実装し、Googleリッチリザルトテストで動作確認します。既存CMSやNext.jsサイトへの組み込みも対応します。" },
                { title: "llms.txt設置", body: "サイトのドメイン直下にllms.txtを設置し、AIクローラーに向けてサイトの概要・主要ページ・重要コンテンツの情報を記述します。業種に合わせた内容で設計します。" },
                { title: "コンテンツAIO最適化", body: "既存ページの見出し構造・FAQ・箇条書きを改善し、AIが引用しやすい形式に整えます。不足しているFAQページや専門解説コンテンツの新規制作も並行して実施します。" },
                { title: "著者情報・組織データ整備", body: "著者ページの設置・Person構造化データの実装・代表者プロフィールの強化・組織情報のOrganization構造化データ化を行います。" },
                { title: "AI引用モニタリング設定", body: "対象クエリのAI検索引用状況を定期確認するモニタリング体制を整えます。Google Search ConsoleのAI Overview引用確認と合わせて効果を継続追跡します。" },
                { title: "月次改善サイクル", body: "月次レポートで引用状況・オーガニック流入・リッチリザルト表示数を報告します。数値の変化に応じてコンテンツ追加・構造化データ修正・FAQ拡充を繰り返し改善します。" },
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

        {/* Section E: 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPI Metrics</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { kpi: "AI検索での自社言及回数", where: "ChatGPT・Gemini・Perplexityで主要クエリを手動検索し確認。月次でスプレッドシートに記録します。" },
                { kpi: "E-E-A-Tスコア", where: "サードパーティのSEOツール（Semrush・Ahrefsなど）の信頼性・権威性スコアで確認。著者情報・被リンク数の改善と連動して変化します。" },
                { kpi: "構造化データエラー数", where: "Google Search ConsoleのリッチリザルトレポートとGoogleのリッチリザルトテストツールで確認します。エラーゼロを目標に管理します。" },
                { kpi: "リッチリザルト表示回数", where: "Google Search Console「検索での見え方」→FAQリッチリザルトの表示回数・クリック数で確認。構造化データ実装の直接効果です。" },
                { kpi: "オーガニック流入数", where: "Google Analytics 4のオーガニック検索チャネルで確認。AIO対策による信頼性向上がSEO評価にも好影響を与えるため、流入数の変化を追います。" },
                { kpi: "AI Overview引用率", where: "Google検索の対象クエリでAI Overviewが表示され自社が引用されているかを確認。Google Search Consoleで一定のデータが取得可能です。" },
                { kpi: "問い合わせ数", where: "Google Analytics 4のコンバージョン設定、またはフォームツールの送信数で計測。AIO対策→認知向上→問い合わせ増加の最終成果として追跡します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.kpi}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.where}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AIO対策サービスについてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AIO対策サービスの無料相談"
          body="AI検索での引用・認知獲得に向けた施策をご提案します。SEO・MEOとの統合戦略もご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}

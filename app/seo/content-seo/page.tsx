import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "コンテンツSEOとは｜検索意図に合ったページ設計で継続集客｜株式会社サイプレス",
  description:
    "コンテンツSEOの本質と実践方法を解説。キーワード調査・検索意図の分類・記事構成・E-E-A-T強化・AIO対応まで、コンテンツを資産として積み上げるための施策を体系的に説明します。",
  keywords: ["コンテンツSEO", "検索意図", "SEO記事", "キーワード調査", "E-E-A-T", "コンテンツマーケティング"],
  openGraph: {
    title: "コンテンツSEOとは｜検索意図に合ったページ設計で継続集客｜株式会社サイプレス",
    description:
      "コンテンツSEOの本質と実践方法を解説。キーワード調査・検索意図の分類・記事構成・E-E-A-T強化・AIO対応まで、コンテンツを資産として積み上げるための施策を体系的に説明します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/seo/content-seo" },
};

const measures = [
  {
    title: "キーワード調査・競合コンテンツ分析",
    body: "ユーザーが実際に検索するキーワードを調査し、検索ボリューム・競合難易度・商業的価値を評価します。自社サイトが狙うべきキーワードを選定したうえで、上位表示されている競合ページのコンテンツ構成・文字数・内部リンク構造を分析し、超えるべき基準を把握します。",
  },
  {
    title: "検索意図の分類（情報収集/商業/購買）",
    body: "同じキーワードでも「知りたい」「比較したい」「購入したい」など検索意図は異なります。情報収集型・商業調査型・購買型・ナビゲーション型に分類し、意図に合ったページフォーマット・コンテンツ構成・CTAを設計します。意図と合わないページは上位表示が困難です。",
  },
  {
    title: "記事構成設計・見出し設計",
    body: "キーワードと検索意図を踏まえた記事の骨子（アウトライン）を作成します。H2・H3の見出し設計は読者の理解を助けると同時に、Googleの強調スニペット獲得にも影響します。競合上位ページでカバーされているトピックを網羅しつつ、独自の視点や一次情報を加えることで差別化を図ります。",
  },
  {
    title: "本文ライティング（一次情報・専門性）",
    body: "検索意図を深く満たす本文を執筆します。ウェブ上で読める内容の焼き直しではなく、自社の経験・実績・データに基づく一次情報を含めることが評価のポイントです。専門家の見解・具体的な事例・数値を含め、ユーザーが「このサイトで調べてよかった」と感じるレベルの詳細さを目指します。",
  },
  {
    title: "内部リンクによる関連記事誘導",
    body: "記事内から関連するページへ内部リンクを設置し、ユーザーのサイト回遊を促します。類似テーマの記事群をトピッククラスターとして設計し、ピラーページから関連記事へ・関連記事からピラーページへと双方向にリンクを張ることで、テーマの権威性をGoogleに示します。",
  },
  {
    title: "継続更新・リライト",
    body: "一度公開した記事は終わりではありません。検索順位・クリック率・滞在時間などのデータを定期的に確認し、情報の鮮度が落ちた箇所の更新・構成の見直し・タイトルの改善を行います。特に「圏外から2ページ目」「2ページ目から1ページ目上部」へ引き上げるリライト施策は費用対効果が高いです。",
  },
  {
    title: "E-E-A-T強化",
    body: "GoogleはE-E-A-T（経験・専門性・権威性・信頼性）をコンテンツ評価の重要指標としています。著者プロフィール・監修者情報・会社情報・取得資格・メディア掲載実績などを明示することで信頼性を高めます。YMYLジャンル（医療・金融・法律など）では特に厳格に評価されるため、専門家の監修が欠かせません。",
  },
];

const faqItems = [
  {
    q: "コンテンツSEOはどのくらいの記事数が必要ですか？",
    a: "記事数に絶対的な基準はありませんが、狙うテーマに関連するキーワードを網羅的にカバーすることが重要です。まず10〜20本の主要コンテンツを整備し、関連するロングテールキーワードで記事を増やしていくことが効果的です。量より質が優先であり、薄いコンテンツを大量に作るよりも、1本ずつ検索意図を満たす質の高い記事を積み上げることをお勧めします。",
  },
  {
    q: "SEO記事は何文字以上書くべきですか？",
    a: "文字数はランキング要因ではなく、検索意図を満たすために必要な内容を書いた結果として文字数が決まります。競合上位記事の平均文字数を参考にしつつ、それを上回る深さ・網羅性を意識することが重要です。情報収集型の記事は3000〜5000字程度になるケースが多いですが、意図によっては500字の簡潔なページが適切な場合もあります。",
  },
  {
    q: "AIで生成したコンテンツはSEOに悪影響がありますか？",
    a: "Googleは「AIが生成したか人間が書いたか」ではなく、「ユーザーにとって有用なコンテンツか」を評価基準としています。AI生成コンテンツでも、一次情報・専門的見解・独自データを加えて高品質に仕上げれば評価されます。逆に、薄い内容をそのまま大量公開すると低品質コンテンツとして評価が下がるリスクがあります。",
  },
  {
    q: "コンテンツSEOとブログ運営は同じですか？",
    a: "ブログ運営はコンテンツSEOの代表的な手法の一つですが同義ではありません。コンテンツSEOにはサービスページ・FAQページ・比較ページなど多様なコンテンツが含まれます。重要なのは「どのキーワードで・どの検索意図に応えるページを作るか」という戦略設計であり、それに最適な形式を選ぶ考え方です。",
  },
  {
    q: "コンテンツSEOとAIOはどう関係していますか？",
    a: "AIO（AI検索最適化）は、ChatGPTやGeminiなどのチャット型AI検索エンジンから引用・紹介されることを目指す施策ですが、その評価基準はE-E-A-TベースのSEOコンテンツと大きく重なります。専門性が高く・構造が明確で・信頼できる情報源として認識されるコンテンツは、AI検索にも引用されやすい傾向があります。コンテンツSEOへの投資はAIO対応にも直結します。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEOの基礎・全体像" },
  { href: "/seo/internal-seo", label: "内部SEO対策", desc: "タグ・構造最適化" },
  { href: "/aio", label: "AIO対策", desc: "AI検索エンジン最適化" },
  { href: "/aio/chatgpt", label: "ChatGPT SEO", desc: "ChatGPTからの引用獲得" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
];

export default function ContentSeoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-16 pb-14" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 mb-6">
              <Link href="/" className="text-[12px] hover:text-[#0F172A] transition-colors" style={{ color: "#9CA3AF" }}>ホーム</Link>
              <span className="text-[12px]" style={{ color: "#9CA3AF" }}>/</span>
              <Link href="/seo" className="text-[12px] hover:text-[#0F172A] transition-colors" style={{ color: "#9CA3AF" }}>SEO対策</Link>
              <span className="text-[12px]" style={{ color: "#9CA3AF" }}>/</span>
              <span className="text-[12px]" style={{ color: "#374151" }}>コンテンツSEO</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Content SEO</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "#0F172A" }}>
              コンテンツSEO
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              コンテンツSEOとは、ユーザーの検索意図に応えるページを継続的に制作・改善することで、自然検索からの流入を積み上げていく施策です。広告に頼らずコンテンツという資産を蓄積することで、中長期的な集客基盤を構築します。
            </p>
          </div>
        </section>

        {/* コンテンツSEOとは */}
        <section className="py-16" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-black text-[22px] md:text-[26px] mb-6" style={{ color: "#0F172A" }}>コンテンツSEOとは</h2>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                コンテンツSEOとは、ユーザーが検索するキーワードと検索意図を深く理解し、それに応えるWebページを計画的に制作・公開・改善し続けることで、自然検索からの継続的な流入を獲得する手法です。ブログ記事・サービスページ・FAQ・ガイド記事など、あらゆる形式のコンテンツが対象となります。
              </p>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                コンテンツSEOの本質は「ユーザーの問いに答えること」です。Googleはユーザーが最も求めている情報を上位に表示しようとしているため、検索意図を正確に把握し、それを深く満たすコンテンツを作成することがそのまま上位表示につながります。テクニックではなく、本質的なユーザー価値の提供が求められます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                継続することで「コンテンツの資産」が積み上がり、多数のキーワードから継続的に流入が得られる状態になります。一度作ったコンテンツは広告費をかけなくても流入し続けるため、長期的な費用対効果は非常に高い施策です。
              </p>
            </div>
          </div>
        </section>

        {/* 検索意図に合わせたページ設計 */}
        <section className="py-16" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-black text-[22px] md:text-[26px] mb-6" style={{ color: "#0F172A" }}>検索意図に合わせたページ設計</h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                コンテンツSEOで最も重要な概念が「検索意図（Search Intent）」です。同じキーワードでも、ユーザーが求めているものは異なります。例えば「SEO対策」と検索するユーザーには「SEOとは何かを知りたい人」「具体的な方法を調べたい人」「業者に依頼したい人」が混在しています。上位表示を狙うには、その検索キーワードで最も多くのユーザーが求めているコンテンツ形式・内容・深さを正確に把握することが出発点です。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "#E8E4DC" }}>
                {[
                  { label: "情報収集型", desc: "知識・方法を調べたい。ハウツー記事・解説記事・ガイドが適切。" },
                  { label: "商業調査型", desc: "購入・依頼前に比較・検討したい。比較記事・事例・料金目安が有効。" },
                  { label: "購買型", desc: "今すぐ購入・申込みたい。LPやサービスページが直接対応。" },
                  { label: "ナビゲーション型", desc: "特定のサイト・ブランドに直接行きたい。公式ページが上位表示されるべき。" },
                ].map((item) => (
                  <div key={item.label} className="p-5" style={{ background: "#FFFFFF" }}>
                    <p className="font-bold text-[14px] mb-1.5" style={{ color: "#0F172A" }}>{item.label}</p>
                    <p className="text-[13px] leading-[1.8]" style={{ color: "#374151" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* コンテンツSEOの施策一覧 */}
        <section className="py-16" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#9CA3AF" }}>Measures</p>
              <h2 className="font-black text-[22px] md:text-[26px]" style={{ color: "#0F172A" }}>コンテンツSEOの施策一覧</h2>
            </div>
            <div className="max-w-3xl">
              {measures.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0F172A" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* AIOへの対応 */}
        <section className="py-16" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-black text-[22px] md:text-[26px] mb-6" style={{ color: "#0F172A" }}>AIOへの対応 — コンテンツSEOはAI検索にも効く</h2>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                ChatGPT・Gemini・Perplexityなどのチャット型AI検索エンジンの台頭により、「AIO（AI検索最適化）」が新たな集客チャネルとして重要性を増しています。AIOで引用されるサイトの特徴を分析すると、E-E-A-Tが高く・構造が明確で・専門的な一次情報を持つコンテンツが選ばれやすいことがわかっています。
              </p>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                これは良質なコンテンツSEOと完全に一致します。見出し構造を整えた読みやすいページ・専門家が執筆した記事・明確な根拠と出典を持つ情報・FAQやQ&A形式で整理されたコンテンツが、AI検索からの引用を得やすい傾向があります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                従来の検索（SEO）とAI検索（AIO）の両方で評価されるコンテンツを制作することが、今後のWeb集客における最重要戦略です。コンテンツSEOへの投資は、将来のAIO対応にもそのまま活用できる資産となります。
              </p>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="コンテンツSEOについてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="コンテンツSEOのご相談"
          body="キーワード戦略の設計から記事制作・リライト改善まで、サイプレスがコンテンツSEOを一貫してサポートします。まずは現状の課題をお聞かせください。"
        />
      </main>
      <Footer />
    </>
  );
}

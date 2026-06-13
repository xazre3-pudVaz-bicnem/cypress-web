import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "地域キーワード設計｜MEO・ローカルSEOで地域集客を最大化｜株式会社サイプレス",
  description:
    "地域キーワード設計でMEO・ローカルSEOの集客力を最大化。市区町村名・駅名×業種のキーワード戦略から近接キーワード・複数エリア対応まで詳しく解説。地域検索流入3.6倍増の実績。",
  keywords: ["地域キーワード", "ローカルキーワード", "MEO キーワード", "地域SEO", "ローカル検索対策", "地域名 業種"],
  openGraph: {
    title: "地域キーワード設計｜MEO・ローカルSEOで地域集客を最大化｜株式会社サイプレス",
    description: "地域キーワード設計でMEOとローカルSEOの集客力を最大化する実践ガイド。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-marketing.jp/meo/local-keyword" },
};

const keywordMethods = [
  {
    title: "市区町村名 + 業種のキーワード設計",
    body: "地域キーワードの基本は「市区町村名 + 業種」の組み合わせです。例えば「渋谷区 美容室」「品川区 歯科」のように、ビジネスが所在する地域と業種を組み合わせます。まず自社の所在地とビジネスが提供するサービスをリストアップし、すべての組み合わせを洗い出します。Googleキーワードプランナーやサーチコンソールで各キーワードの検索ボリュームを確認し、集客効果が期待できるキーワードを優先的に狙います。競合の少ないロングテールキーワード（例：「渋谷区 カット 安い」）も有効です。",
  },
  {
    title: "駅名・エリア名の活用",
    body: "市区町村名だけでなく、最寄り駅名・エリア名（青山・銀座・恵比寿など）でも検索されます。特に都市部では市区町村より駅名やエリア名での検索が多い場合があります。「恵比寿駅 カフェ」「青山 皮膚科」のように、ユーザーが実際にどの地名で検索するかを分析することが重要です。GBPの説明文・投稿・ウェブサイトのコンテンツに、ターゲットとする駅名・エリア名を自然な形で組み込みます。複数の駅名・エリア名に対応することで、より広い範囲のユーザーにリーチできます。",
  },
  {
    title: "複数エリア対応のページ設計",
    body: "商圏が複数のエリアにまたがる場合、エリアごとに専用のランディングページを制作することで、より多くの地域キーワードからの流入を獲得できます。例えば「渋谷エリアのページ」「新宿エリアのページ」をそれぞれ制作し、各エリアの特性・アクセス情報・地域に関連した情報を含めることで、Googleが各エリアとの関連性を評価します。ただし、各ページのコンテンツが実質的に重複しないよう、エリアごとの独自情報を盛り込むことが重要です。コンテンツが薄い場合は逆効果になることがあります。",
  },
  {
    title: "「近く」「近隣」などの近接キーワード",
    body: "スマートフォンでのGoogleマップ検索では「○○ 近く」「○○ 近隣」「○○ 付近」などの近接を表すキーワードが多く使われます。また、「現在地から近い○○」のような検索も増えています。これらのキーワードはGoogleの位置情報と連動するため、GBPの位置情報が正確に設定されていることが前提です。ウェブサイトのコンテンツにも「○○エリア近く」「○○駅徒歩5分」のような近接情報を含めることで、近接検索での関連性評価が高まります。",
  },
  {
    title: "地域特化コンテンツとの連動",
    body: "地域キーワードの効果を最大化するためには、単にキーワードを埋め込むだけでなく、その地域に関連した価値あるコンテンツを作成することが重要です。例えば「渋谷の美容室が選ばれる理由」「渋谷エリアでのヘアカラーの最新トレンド」のような地域に特化したコラム・ブログ記事を制作することで、地域との関連性が深まります。地域のイベント情報・観光スポット・他の地域ビジネスとの連携情報なども、地域との結びつきを強める有効なコンテンツです。",
  },
];

const faqItems = [
  {
    q: "地域キーワードはどのくらいの種類を設計すべきですか？",
    a: "業種・商圏の広さによって異なりますが、まず主要な市区町村名・駅名と業種の組み合わせを10〜20ワード設計することをお勧めします。その後、検索ボリューム・競合状況を分析して拡張していきます。多すぎるキーワードを一度に狙うよりも、優先度の高いキーワードで確実に上位表示を達成してから拡張する方が効率的です。",
  },
  {
    q: "複数エリアに対応したい場合はどうすればいいですか？",
    a: "エリアごとに専用のランディングページを制作するのが有効です。ただしコンテンツが重複しないよう、各エリアの特性を活かした内容にすることが重要です。また、GBPのサービスエリア設定で対応エリアを明示することも効果的です。コンテンツが薄い量産ページは逆効果になることがあるため、品質を重視した制作が必要です。",
  },
  {
    q: "地域キーワードはGoogleビジネスプロフィールのどこに入れるべきですか？",
    a: "説明文・投稿・サービス欄・Q&A欄に自然な形で組み込みます。ビジネス名への意図的なキーワード追加はGoogleのポリシー違反になる可能性があるため注意が必要です。説明文では750文字を活かして、サービス内容と地域情報を自然な文章で記述することが重要です。",
  },
  {
    q: "「○○市 近く」のような近接キーワードは重要ですか？",
    a: "はい、スマートフォンでの検索が主流の現在、「近く」「近隣」などの近接キーワードでの検索は増加しています。特にGoogleマップとの連動でこれらのキーワードへの対応が集客に直結します。GBPの位置情報が正確に設定されていることと、ウェブサイトに近接情報（徒歩〇分・最寄り駅からの行き方など）を明記することが重要です。",
  },
  {
    q: "地域キーワードの効果はどのくらいで出ますか？",
    a: "GBPへの反映は数週間以内に効果が見られることがあります。ウェブサイトのローカルSEOは3〜6ヶ月が目安です。競合状況・現在のドメイン評価・コンテンツの質によって異なります。継続的な運用と改善が重要です。特に新しいページは認識されるまで時間がかかるため、長期的な視点で取り組むことが大切です。",
  },
];

export default function LocalKeywordPage() {
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
              <span style={{ color: "#0F172A" }}>地域キーワード設計</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Local Keyword Strategy
            </p>
            <h1 className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6" style={{ color: "#0F172A" }}>
              地域キーワード設計
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              地域キーワードとは「渋谷 美容室」「新宿 歯科」のように地域名と業種・サービスを
              組み合わせた検索ワードです。地域ビジネスにとって最も集客効率が高いキーワード群であり、
              MEOとローカルSEOを連動させた戦略的な設計が地域集客の核となります。
            </p>
          </div>
        </section>

        {/* 地域キーワードとは */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              About Local Keywords
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0F172A" }}>
              地域キーワードとは
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                地域キーワードとは、地名（都市名・区名・駅名・エリア名）と業種・サービス・ニーズを
                組み合わせた検索ワードです。「渋谷区 美容室」「恵比寿駅 カフェ」「品川 歯科 土曜日」
                などがその代表例です。これらのキーワードで検索するユーザーは「今まさに地域のお店を
                探している」高い購買意欲を持つ見込み客であり、来店転換率が他のキーワードと比べて
                非常に高いことが特徴です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                地域キーワードはMEO対策とローカルSEOの両方に影響します。MEOでは
                Googleビジネスプロフィールの関連性評価を高めるために地域キーワードを
                適切に組み込みます。ローカルSEOではウェブサイトのコンテンツ・メタ情報・
                構造化データに地域キーワードを組み込み、オーガニック検索での上位表示を目指します。
                両方を連動させることで、Googleマップと通常検索の両方での露出を最大化できます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                地域キーワード設計で重要なのは「どの地名でユーザーが検索するか」を正確に把握することです。
                行政区の名前（「渋谷区」）より駅名（「渋谷」「代官山」「恵比寿」）のほうが
                検索ボリュームが高いケースもあります。実際の検索データを分析したうえで、
                集客効果が最大になるキーワードを優先的に狙うことが重要です。
              </p>
            </div>
          </div>
        </section>

        {/* 地域キーワードの設計方法 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Design Method
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0F172A" }}>
              地域キーワードの設計方法
            </h2>
            <div className="max-w-3xl">
              {keywordMethods.map((item, i) => (
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

        {/* MEOでの地域キーワード最適化 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              MEO Optimization
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0F172A" }}>
              MEOでの地域キーワード最適化
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                GoogleビジネスプロフィールへのキーワードはGoogleのポリシーに従って慎重に行う必要があります。
                ビジネス名にキーワードを意図的に追加することはポリシー違反ですが、
                説明文・サービス欄・投稿・Q&Aには適切なキーワードを自然に組み込むことができます。
              </p>
              <div className="max-w-3xl">
                {[
                  { label: "説明文（750文字）", content: "提供サービス・特徴・対象顧客に加え、所在地域・最寄り駅・対応エリアを自然な文章で記述します。750文字の制限を活かし、主要な地域キーワードをカバーする内容にします。" },
                  { label: "サービス・商品欄", content: "各サービスの説明にサービス内容と地域特性を組み込みます。「渋谷エリアでの出張対応」「品川区内の店舗へのお迎えサービス」のような地域に特化した説明が有効です。" },
                  { label: "投稿コンテンツ", content: "週1回以上の投稿に地域情報を組み込みます。「新宿エリアのお客様へのお知らせ」「渋谷・代官山近くにお住まいの方へ」などの地域を明示したタイトル・内容が効果的です。" },
                  { label: "Q&A欄", content: "「渋谷区内での出張対応は可能ですか？」「新宿駅から徒歩何分ですか？」などの地域に関連した質問と回答を設定することで、地域キーワードとの関連性を高めます。" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                    <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-bold text-[14px] mb-1.5" style={{ color: "#0F172A" }}>{item.label}</h3>
                      <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.content}</p>
                    </div>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #E8E4DC" }} />
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="地域キーワードに関するよくある質問" bgColor="#FFFFFF" />

        <RelatedPages
          links={[
            { href: "/meo", label: "MEO対策", desc: "MEO対策の全体戦略" },
            { href: "/meo/google-business-profile", label: "GBP最適化", desc: "MEO対策の根幹ツール" },
            { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域検索での上位表示" },
            { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金" },
          ]}
        />

        <PageContactCTA
          heading="地域キーワード設計のご相談はサイプレスへ"
          body="貴社のビジネスに最適な地域キーワードを分析・設計し、MEOとローカルSEOを連動させた集客戦略をご提案します。まずは現状の検索データ分析から始めます。"
        />
      </main>
      <Footer />
    </>
  );
}

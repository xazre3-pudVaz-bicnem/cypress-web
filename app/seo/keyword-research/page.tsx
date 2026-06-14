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
    a: "無料ツールとしてはGoogleキーワードプランナー・Googleサジェスト・Google Search Consoleが基本です。有料ツールではAhrefs・SEMrush・Ubersuggestが機能が豊富です。まずは無料ツールで始めることをお勧めします。",
  },
  {
    q: "検索ボリュームが大きいキーワードを選べばいいですか？",
    a: "必ずしもそうではありません。検索ボリュームが大きいキーワードほど競合が多く、新しいサイトや中小規模サイトが上位表示を狙うのは難しいです。まずはロングテールキーワードから始め、徐々にドメイン評価を高めてからメインキーワードに挑戦する戦略が現実的です。",
  },
  {
    q: "ロングテールキーワードとは何ですか？",
    a: "3語以上の複合キーワードで検索ボリュームは比較的小さいものの、ユーザーの検索意図が明確でコンバージョン率が高い傾向にあるキーワードです。例えば「SEO」よりも「葛飾区 飲食店 SEO対策 費用」の方がロングテールです。競合が少なく上位表示しやすいため、積み上げることで大きな検索流入になります。",
  },
  {
    q: "一つのページで対策するキーワードはいくつにすればいいですか？",
    a: "1ページにつきメインキーワード1〜2個、関連キーワード3〜5個程度が目安です。現在のGoogleはページのトピックと文脈を理解して評価するため、検索意図に合ったコンテンツを自然に書くことが最重要です。",
  },
  {
    q: "競合サイトのキーワードを調べる方法はありますか？",
    a: "Ahrefs・SEMrushなどの有料ツールを使うと、競合サイトが流入を得ているキーワード一覧を確認できます。無料でも、競合サイトのページタイトル・見出し・メタディスクリプションを確認することで、どのキーワードを狙っているかの概要がつかめます。",
  },
  {
    q: "地域ビジネスのキーワード選定はどうすればいいですか？",
    a: "地域ビジネスでは「地域名 + 業種/サービス」の組み合わせが基本です（例：「葛飾区 整体」「東京 Web制作」）。さらに「〜の口コミ」「〜のおすすめ」「〜の費用」などの修飾語をつけたロングテールも有効です。",
  },
  {
    q: "季節性のあるキーワードはどう扱えばいいですか？",
    a: "Googleトレンドを使って、対象キーワードの季節変動を確認します。シーズン前2〜3ヶ月からコンテンツを公開することで、ピーク時に上位表示を狙えます。",
  },
  {
    q: "キーワード調査の結果をどうコンテンツ制作に活かしますか？",
    a: "調査したキーワードをグループ分けして「クラスター（テーマ群）」を作り、それぞれのクラスターに対応するページを設計するトピッククラスター戦略がSEOの現代的なアプローチです。ピラーページと関連ページを内部リンクで結ぶサイロ構造を作ります。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO全体の概要" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "検索意図に合ったコンテンツ制作" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域名キーワードでの上位表示" },
  { href: "/seo/blog-strategy", label: "ブログ戦略", desc: "キーワードを活かした記事設計" },
  { href: "/seo/internal-seo", label: "内部SEO", desc: "キーワードの適切な配置" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップでのキーワード最適化" },
  { href: "/knowledge/keyword-research", label: "キーワード調査入門", desc: "初心者向けキーワード選定ガイド" },
  { href: "/knowledge/long-tail-keyword", label: "ロングテール戦略", desc: "競合の少ないキーワードを狙う" },
  { href: "/column/seo", label: "SEOコラム", desc: "キーワード調査の最新情報" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "キーワード調査込みの料金" },
  { href: "/checklist/seo", label: "SEOチェックリスト", desc: "キーワード設計の確認項目" },
];

export default function KeywordResearchPage() {
  return (
    <>
      <Header />
      <main>
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
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              適切なキーワード調査なしにコンテンツを作っても、誰にも届かないページが増えるだけです。ビジネス目標から逆算してキーワードを選定し、戦略的なコンテンツ投資を行うことが重要です。
            </p>
          </div>
        </section>

        <section className="relative" style={{ height: "320px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="SEOキーワード調査・検索ボリューム分析のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.25)" }} />
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
                { type: "ビッグキーワード（単語1語）", volume: "月間数万〜数百万", desc: "「SEO」「Web制作」などの単語。競合が非常に強く、新規・中小サイトが上位表示するのは難しい。ドメイン評価が高まった段階で挑戦する。" },
                { type: "ミドルキーワード（2語）", volume: "月間数百〜数万", desc: "「SEO対策 費用」「Web制作 東京」など。競合は強いが挑戦可能。ビジネスの核となるサービスページに対応させる。" },
                { type: "ロングテールキーワード（3語以上）", volume: "月間数十〜数百", desc: "「葛飾区 整体 腰痛 おすすめ」など。競合が少なく上位表示しやすい。検索意図が明確でコンバージョン率が高い傾向。初期は積極的に狙う。" },
                { type: "情報収集型（Know）", volume: "「〜とは」「〜の方法」", desc: "知識・情報を求めているキーワード。直接的なCVは少ないが、認知向上と信頼構築に貢献。コンテンツSEOの中心となる。" },
                { type: "比較・検討型（Compare）", volume: "「〜おすすめ」「〜比較」", desc: "購入・契約前の比較検討段階のキーワード。CV率が高く重要。自社の強みと比較ポイントを明確にしたコンテンツが効果的。" },
                { type: "購買・問い合わせ型（Buy/Go）", volume: "「〜依頼」「〜料金」「〜見積もり」", desc: "購入・問い合わせに直結するキーワード。検索ボリュームは小さいが最もCV率が高い。サービスページ・料金ページに対応させる。" },
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

        {/* トピッククラスター戦略 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Strategy</p>
            <h2 className="font-black text-[26px] mb-6" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              トピッククラスター戦略
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-8" style={{ color: "#374151" }}>
              キーワードを孤立させずに「テーマ群（クラスター）」として設計することで、サイト全体としての専門性をGoogleに示すことができます。ピラーページ（主要テーマ）とクラスターページ（関連テーマ）を内部リンクで結ぶサイロ構造がSEOの基本です。
            </p>
            <div className="max-w-3xl p-6 rounded" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}>
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

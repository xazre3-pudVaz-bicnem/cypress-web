import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Instagram運用代行｜中小企業・店舗向けインスタ集客支援",
  description: "中小企業・店舗のInstagram運用代行。投稿企画・写真ディレクション・ハッシュタグ設定・フォロワー増加・インサイト分析でInstagramからの集客を強化。",
};

const faqItems = [
  { q: "Instagramはどんな業種に向いていますか？", a: "飲食店・美容室・ネイル・エステ・小売店・ファッション・インテリア・不動産など、視覚的に魅力を伝えやすい業種に特に向いています。before&after・商品写真・店内雰囲気が効果的なコンテンツです。" },
  { q: "Instagram運用でフォロワーはどのくらい増えますか？", a: "業種・エリア・投稿頻度・コンテンツ品質によって大きく異なります。月30〜100フォロワーが最初の目安ですが、集客の目標はフォロワー数よりもプロフィール訪問・DM・リンククリック数です。" },
  { q: "Instagramの投稿頻度はどのくらいがいいですか？", a: "週3〜5投稿が理想的です。無理なく継続できる頻度を優先し、品質を保つことが重要です。ストーリーズは毎日・フィードは週3〜5投稿の組み合わせが効果的です。" },
  { q: "Instagram運用の費用はどのくらいですか？", a: "月額3〜8万円程度が一般的な相場です。投稿数・写真撮影の有無・ライティング・分析レポートの内容によって変わります。コンテンツ企画のみ・運用代行すべて込みなど柔軟にご相談ください。" },
  { q: "Instagramから来店・問い合わせにつながりますか？", a: "はい。プロフィールのURL・DMへの誘導・電話番号の掲載・Instagramショッピング（物販）など、適切な導線設計で来店・問い合わせにつなげることができます。" },
];

const relatedLinks = [
  { href: "/sns", label: "SNS集客とは", desc: "SNS集客の概要" },
  { href: "/sns/hashtag", label: "ハッシュタグ戦略", desc: "効果的なハッシュタグ" },
  { href: "/sns/photo-direction", label: "写真ディレクション", desc: "SNS写真の撮り方" },
  { href: "/sns/content-calendar", label: "コンテンツカレンダー", desc: "投稿スケジュール" },
  { href: "/services/sns", label: "SNSサービス詳細", desc: "SNS運用サービス" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/sns">SNS集客</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              Instagram運用
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Instagram Marketing</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              Instagram運用代行｜中小企業・店舗の集客強化
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              Instagramは視覚的なコンテンツで商品・サービス・店舗の魅力を伝えられる集客プラットフォームです。投稿企画・写真ディレクション・ハッシュタグ戦略・分析改善を一貫して支援します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_22_31.png" alt="Instagram運用代行" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Our Approach</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              Instagram運用のアプローチ
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "ターゲット・世界観の定義", b: "誰に・何を・どんなトーンで伝えるかを定義します。ターゲットペルソナ・競合分析・ブランドカラー・フィードの統一感など、アカウントの方向性を最初に固めます。" },
                { n: "02", t: "投稿企画・コンテンツ制作", b: "月間投稿スケジュール（コンテンツカレンダー）を作成し、ターゲットの関心・検索傾向・季節イベントを踏まえた投稿コンテンツを企画します。撮影指示・キャプション作成も対応します。" },
                { n: "03", t: "ハッシュタグ選定と最適化", b: "ビッグワード（拡散用）・ミドルワード（発見用）・ニッチワード（ターゲット刺さりやすい）の3層でハッシュタグを設計します。地域名ハッシュタグは地域集客に特に有効です。" },
                { n: "04", t: "インサイト分析・改善", b: "月次でInstagramインサイトを分析し、リーチ数・エンゲージメント率・プロフィール訪問数・フォロワー増加数を確認します。効果の高い投稿の傾向を特定して改善します。" },
                { n: "05", t: "集客導線の設計（プロフィール・ハイライト）", b: "プロフィール文・ハイライト（サービス紹介・口コミ・メニュー）・リンクの設計で、フォロワーを来店・問い合わせ・購買に誘導する導線を整備します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#f8f6f2" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="Instagram運用のご相談" body="Instagram運用代行・コンテンツ企画・ハッシュタグ戦略・写真ディレクションをご相談ください。フォロワー増加より「来店・問い合わせ増加」を最優先に設計します。" />
      </main>
      <Footer />
    </>
  );
}

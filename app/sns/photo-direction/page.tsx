import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SNS写真ディレクション｜集客につながる写真の撮り方・構成",
  description: "SNS集客に効果的な写真ディレクション。料理・商品・店内・施術のスマートフォン撮影のコツ・構図・ライティング・フィードのトンマナ統一で魅力的なInstagramを作る方法。",
};

const faqItems = [
  { q: "スマートフォンでもSNS用の良い写真は撮れますか？", a: "はい。最新のスマートフォンは高品質な写真が撮れます。撮影のポイントは自然光の活用・水平を保つ・背景をシンプルにする・ポートレートモードの活用などです。" },
  { q: "プロのカメラマンを使わないといけませんか？", a: "必須ではありません。ただし高品質なブランド写真（店頭・スタッフ・空間）は年1〜2回のプロ撮影が効果的です。日常の投稿写真はスマートフォンで対応する組み合わせが現実的です。" },
  { q: "Instagramのフィードのトンマナ（雰囲気の統一感）はなぜ重要ですか？", a: "プロフィールページを見たときに統一感があると「このアカウントはセンスがいい・信頼できる」という印象を与えます。フォローに至るかどうかはプロフィールページの第一印象に大きく左右されます。" },
  { q: "商品・料理の写真を魅力的に見せるコツは？", a: "自然光（窓際）での撮影・シンプルな背景・商品の最も魅力的な角度（斜め上・真俯瞰等）・食べ物はクローズアップで質感を出す・小物でスタイリングするなどが効果的です。" },
];

const relatedLinks = [
  { href: "/sns", label: "SNS集客とは", desc: "SNS集客の概要" },
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタ集客" },
  { href: "/sns/post-planning", label: "投稿企画", desc: "コンテンツ企画" },
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
              写真ディレクション
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Photo Direction</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              SNS写真ディレクション｜集客写真の撮り方設計
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              SNSは視覚的なプラットフォームです。写真の質がエンゲージメントと集客力に直結します。スマートフォンでも実践できる写真の撮り方・構図・ライティング・フィードの統一感をご支援します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_21_48.png" alt="SNS写真ディレクション" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Photo Tips</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              SNS集客写真のポイント
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "自然光の活用（窓際・屋外撮影）", b: "人工照明より自然光の方が料理・商品・人物写真を自然でリアルに見せます。窓際での撮影・晴天の屋外撮影・レフ板（白い板でも可）を活用した明るい写真を目指します。" },
                { n: "02", t: "構図の基本（三分割・真俯瞰・クローズアップ）", b: "画面を縦横3分割した交点に被写体を置く「三分割法」・料理や商品の「真俯瞰撮影」・質感を伝える「クローズアップ」など基本構図を覚えるだけで写真の質が大幅に向上します。" },
                { n: "03", t: "背景のシンプル化", b: "不要なものを排除してシンプルな背景にすることで商品・サービスが際立ちます。ホワイト・ウッド・大理石などのシンプルな背景素材を1〜2種類用意するとロケを選ばず活用できます。" },
                { n: "04", t: "フィードのトンマナ（色調・世界観）の統一", b: "Instagramのプロフィールページで統一感のあるフィードを作るため、使用フィルター・色調（明るい系・ダーク系・ナチュラル系等）を統一します。Lightroomのプリセットを1〜2種類使い回す方法が効率的です。" },
                { n: "05", t: "スマートフォンの撮影設定最適化", b: "グリッド表示オン・HDR有効・ポートレートモード活用・4Kビデオ設定など、スマートフォンの撮影設定を最適化するだけで写真・動画の品質が向上します。" },
                { n: "06", t: "定期プロ撮影との組み合わせ", b: "ブランド写真（店頭外観・スタッフ集合・空間雰囲気）は年1〜2回のプロカメラマン撮影で高品質な素材をストック。日常の投稿はスマートフォン撮影で対応する2段階の素材調達が効率的です。" },
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
        <PageContactCTA heading="SNS写真ディレクションのご相談" body="Instagram・SNS用の写真撮影指示書作成・フィードのトンマナ設計・撮影ワークショップをご相談ください。スタッフが自分で撮れる写真の仕組みを作ります。" />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "代表挨拶 | 株式会社サイプレス",
  description: "株式会社サイプレス代表取締役・織田春樹からのご挨拶。創業の背景、MEO・SEO・AIO対策への想い、AI時代のWebマーケティング、中小企業支援へのコミットメントについて。",
  keywords: ["代表挨拶", "織田春樹", "株式会社サイプレス", "代表取締役", "Webマーケティング"],
  openGraph: {
    title: "代表挨拶 | 株式会社サイプレス",
    description: "株式会社サイプレス代表取締役・織田春樹からのご挨拶。創業の背景とWebマーケティングへの想い。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-marketing.jp/company/message" },
};

export default function MessagePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 md:py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-10" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:text-[#0F172A] transition-colors">ホーム</Link>
              <span>/</span>
              <Link href="/company" className="hover:text-[#0F172A] transition-colors">会社情報</Link>
              <span>/</span>
              <span style={{ color: "#374151" }}>代表挨拶</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Message
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "#0F172A" }}
            >
              代表挨拶
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              株式会社サイプレス代表取締役・織田春樹より、創業の背景と、私たちが目指す世界についてお伝えします。
            </p>
          </div>
        </section>

        {/* Main message */}
        <section className="py-20 md:py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-[1fr_300px] gap-16 items-start">
              {/* Message text */}
              <div>
                <h2
                  className="font-black leading-tight tracking-tight mb-10"
                  style={{ fontSize: "clamp(22px, 2.8vw, 34px)", color: "#0F172A" }}
                >
                  正しい会社が、<br />正しく選ばれる世界をつくりたい。
                </h2>

                <div className="space-y-0 text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  <div style={{ borderTop: "1px solid #E8E4DC", paddingTop: "28px", paddingBottom: "28px" }}>
                    <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                      なぜ、この事業を始めたのか
                    </p>
                    <p className="mb-4">
                      サイプレスを立ち上げた直接のきっかけは、地域の中小企業・店舗オーナーと話すなかで感じた強い違和感でした。技術がある、接客が丁寧、地域からの信頼もある。それでも、Webで検索しても出てこない。Googleマップに表示されない。問い合わせはゼロに近い。
                    </p>
                    <p className="mb-4">
                      一方でWeb対策が不十分なまま上位表示されているビジネスも存在し、実力ではなく「デジタルでの見え方」によって選ばれる・選ばれないが決まっている現実がありました。
                    </p>
                    <p>
                      これは不公平だと思いました。良い仕事をしている企業が、正しく評価されるべきです。その橋渡しをする会社を作りたい。それが、株式会社サイプレスの出発点です。
                    </p>
                  </div>

                  <div style={{ borderTop: "1px solid #E8E4DC", paddingTop: "28px", paddingBottom: "28px" }}>
                    <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                      MEO・SEO・AIOを組み合わせた支援の考え方
                    </p>
                    <p className="mb-4">
                      集客の入り口は一つではありません。「〇〇市 歯医者」とGoogleマップで検索する人、「歯科矯正 費用」とWeb検索する人、「近くのおすすめ歯医者は？」とAIに質問する人。それぞれ異なる経路でビジネスを探しています。
                    </p>
                    <p className="mb-4">
                      MEO対策はGoogleマップ上の露出を高め、SEO対策はWebサイトへの自然流入を増やし、AIO対策はChatGPTやGeminiなどのAI検索エンジンからの引用を狙う。この3つは分断せず、一体として設計することで、どの入り口からも見つけてもらえる状態を作ります。
                    </p>
                    <p>
                      さらに、SEOに強いホームページを制作し、SNSで継続的に情報を発信することで、集客の土台を複層的に積み上げていく。どれか一つの施策に依存せず、複数の経路を同時に強化していくことが、持続可能な集客の在り方だと考えています。
                    </p>
                  </div>

                  <div style={{ borderTop: "1px solid #E8E4DC", paddingTop: "28px", paddingBottom: "28px" }}>
                    <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                      AI時代において、Webマーケティングが変わること
                    </p>
                    <p className="mb-4">
                      2022年の創業以来、最も大きな変化として経験してきたのがAI検索の台頭です。ChatGPTのリリース、GoogleのAI Overview、Perplexityの普及により、情報を検索する手段は根本的に変わりつつあります。
                    </p>
                    <p className="mb-4">
                      従来のSEO対策では、検索エンジンのクローラーに評価される技術的な最適化が中心でした。しかしAI検索の時代には、AIが信頼できる情報源として引用するに足る、一次情報・専門性・権威性のあるコンテンツが求められます。E-E-A-T（経験・専門性・権威性・信頼性）を明示した構造化データ、FAQ設計、明確な文章構造が、AI引用の鍵を握っています。
                    </p>
                    <p>
                      私たちはこうした変化をいち早く捉え、クライアントのWebサイトをAI検索時代に対応した設計へと進化させることを、最重要課題の一つと位置づけています。新しい技術と市場の変化に対して、常に先行して学び、実践し、クライアントに届けることが私たちの責任だと考えています。
                    </p>
                  </div>

                  <div style={{ borderTop: "1px solid #E8E4DC", paddingTop: "28px", paddingBottom: "28px" }}>
                    <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                      中小企業へのコミットメント
                    </p>
                    <p className="mb-4">
                      私たちは大手広告代理店のように、多数のクライアントを並行管理して薄い関わりを続けることを是としていません。それよりも、少数のクライアントと深く関わり、事業の現状を理解したうえで必要な施策を提案し、成果が出るまで伴走することを大切にしています。
                    </p>
                    <p className="mb-4">
                      問い合わせ件数の増加、Googleマップのアクセス数向上、検索順位の改善。これらをデータで確認しながら、施策を継続的に改善していく。「やりっぱなし」にならない支援が、中小企業にとって本当に必要なものだと考えています。
                    </p>
                    <p>
                      コスト面においても現実的な提案を心がけています。大企業と同じ規模の投資は不要です。限られた予算のなかで、最も効果の高い施策を選んで実行する。そのための知識と経験を積み上げることが、私たちの継続的な使命です。
                    </p>
                  </div>

                  <div style={{ borderTop: "1px solid #E8E4DC", paddingTop: "28px", paddingBottom: "28px" }}>
                    <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                      今後の展望
                    </p>
                    <p className="mb-4">
                      AI活用支援は、これからサイプレスが力を入れていく領域の一つです。チャットボットの構築、業務フローの自動化、コンテンツ制作の効率化など、AIを使った業務改善を通じて、中小企業の生産性を根本から変える支援を拡充していきます。
                    </p>
                    <p className="mb-4">
                      Webマーケティングとのシナジーを考えると、AIで業務効率を上げながら、空いたリソースをWebへの情報発信に充てる。情報発信が増えることでSEO・MEO・AIOの評価が高まる。この好循環を中小企業のなかに根付かせることが、私たちの描く理想の姿です。
                    </p>
                    <p>
                      地域のあらゆる業種・あらゆる規模の企業が、Webで正しく評価される世界。その実現に向けて、一社一社と誠実に向き合いながら、着実に前に進んでいきます。どうぞよろしくお願いいたします。
                    </p>
                  </div>

                  <div style={{ borderTop: "1px solid #E8E4DC", paddingTop: "28px" }}>
                    <p className="font-black text-[16px] mb-1" style={{ color: "#0F172A" }}>織田 春樹</p>
                    <p className="text-[13px]" style={{ color: "#6B7280" }}>代表取締役　株式会社サイプレス</p>
                  </div>
                </div>
              </div>

              {/* Profile sidebar */}
              <div className="md:sticky md:top-24">
                {/* Handshake image */}
                <div className="relative overflow-hidden mb-6" style={{ height: "260px" }}>
                  <Image
                    src="/ChatGPT Image 2026年6月13日 19_11_20.png"
                    alt="ビジネスパートナーとの握手・信頼関係"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="p-8" style={{ background: "#FFFFFF", border: "1px solid #E8E4DC" }}>
                  <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-6" style={{ color: "#9CA3AF" }}>
                    Profile
                  </p>
                  <div style={{ borderTop: "1px solid #E8E4DC", paddingTop: "20px" }}>
                    <p className="font-black text-[20px] mb-1" style={{ color: "#0F172A" }}>織田 春樹</p>
                    <p className="text-[13px] mb-6" style={{ color: "#6B7280" }}>代表取締役</p>
                    <div className="space-y-4">
                      {[
                        { label: "会社名", value: "株式会社サイプレス" },
                        { label: "設立", value: "2022年4月" },
                        { label: "所在地", value: "東京都葛飾区" },
                      ].map((row) => (
                        <div key={row.label}>
                          <span
                            className="block text-[11px] font-medium mb-0.5"
                            style={{ color: "#9CA3AF" }}
                          >
                            {row.label}
                          </span>
                          <span className="text-[13px]" style={{ color: "#374151" }}>{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8" style={{ borderTop: "1px solid #E8E4DC", paddingTop: "20px" }}>
                    <p
                      className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4"
                      style={{ color: "#9CA3AF" }}
                    >
                      Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["MEO対策", "SEO対策", "AIO対策", "ホームページ制作", "AI活用支援"].map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-1"
                          style={{ background: "#F9F8F5", color: "#6B7280", border: "1px solid #E8E4DC" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/company"
                      className="text-[12px] transition-colors hover:text-[#0F172A]"
                      style={{ color: "#6B7280" }}
                    >
                      ← 会社情報へ戻る
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cinematic break */}
        <section className="relative overflow-hidden" style={{ height: "280px" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_13_37.png"
            alt="ミーティングでドキュメントを確認するビジネスパーソン"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.2)" }} />
        </section>

        <PageContactCTA />
      </main>
      <Footer />
    </>
  );
}

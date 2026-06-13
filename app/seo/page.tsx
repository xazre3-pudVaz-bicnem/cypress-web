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
    "SEO対策の基礎知識から最新トレンドまで徹底解説。内部SEO・コンテンツSEO・テクニカルSEO・ローカルSEO・外部SEOの5つの柱で体系的に理解できます。",
  keywords: ["SEO対策", "SEOとは", "検索上位表示", "SEO基礎", "SEO種類", "SEO施策"],
  openGraph: {
    title: "SEO対策とは｜検索上位表示の基礎から実践まで｜株式会社サイプレス",
    description:
      "SEO対策の基礎知識から最新トレンドまで徹底解説。内部SEO・コンテンツSEO・テクニカルSEO・ローカルSEO・外部SEOの5つの柱で体系的に理解できます。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/seo" },
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
    body: "ユーザーの検索意図に合ったページを継続的に制作・改善していく施策です。キーワード調査・競合分析・記事構成設計・ライティングを通じて、検索エンジンとユーザー双方に評価されるコンテンツを積み上げます。E-E-A-Tの強化にも直結します。",
    href: "/seo/content-seo",
  },
  {
    num: "03",
    title: "テクニカルSEO",
    body: "ページ表示速度・クロール最適化・インデックス管理・構造化データ実装など、技術的な側面からサイトのSEO基盤を整える施策です。Core Web Vitalsへの対応やモバイルファースト設計も含まれ、サイト全体のパフォーマンスを底上げします。",
    href: "/seo/technical-seo",
  },
  {
    num: "04",
    title: "ローカルSEO",
    body: "地域名キーワードへの最適化・対応エリアページの設置・Googleビジネスプロフィールとの連携など、地域ビジネスの検索流入を強化する施策です。MEOと組み合わせることで、地域での認知度と集客力を大幅に高められます。",
    href: "/seo/local-seo",
  },
  {
    num: "05",
    title: "外部SEO",
    body: "被リンク獲得・サイテーション整合・ブランドメンション増加など、外部からの評価シグナルを高める施策です。良質なコンテンツを起点とした自然なリンク構築が基本であり、不正なリンク操作はGoogleペナルティのリスクがあるため注意が必要です。",
    href: "/seo/external-seo",
  },
];

const subPages = [
  { href: "/seo/internal-seo", label: "内部SEO対策", desc: "タグ・構造・内部リンク最適化" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "検索意図に合ったページ制作" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "速度・クロール・構造化データ" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域検索・エリア対策" },
  { href: "/seo/external-seo", label: "外部SEO・被リンク", desc: "被リンク獲得・サイテーション" },
];

const faqItems = [
  {
    q: "SEO対策はいつ効果が出始めますか？",
    a: "一般的には施策開始から3〜6ヶ月で変化が現れ始め、本格的な成果が出るまでに6〜12ヶ月を要するケースが多いです。ただし、競合状況・サイトの既存評価・施策の質によって大きく異なります。内部SEOやテクニカル改善は比較的早く反映される場合があります。",
  },
  {
    q: "SEO対策と広告（リスティング広告）の違いは何ですか？",
    a: "リスティング広告は即効性がある一方、費用をかけ続けなければ流入がゼロになります。SEOは成果が出るまでに時間がかかりますが、一度検索上位を獲得すれば広告費をかけずに継続的な集客が可能になります。中長期での費用対効果はSEOが優れており、両者を組み合わせるのが理想です。",
  },
  {
    q: "自社でSEO対策をやることはできますか？",
    a: "コンテンツ制作や内部SEOの一部は自社でも実施できます。ただしテクニカルSEO・キーワード戦略・競合分析などは専門知識が必要なため、誤った施策を続けると逆効果になるリスクもあります。初期の設計・方針策定をプロに依頼し、運用を内製化するハイブリッドモデルが効率的です。",
  },
  {
    q: "MEOやAIOとSEOはどう違いますか？",
    a: "SEOはGoogleの通常検索結果（オーガニック）での上位表示を目的とします。MEOはGoogleマップ・ローカルパックへの表示最適化です。AIOはChatGPTやGeminiなどのAI検索エンジンから引用・紹介されることを目的とした最新の施策です。それぞれ異なるチャネルを強化するため、三つを組み合わせることで集客力が最大化されます。",
  },
  {
    q: "ページ数が少ないサイトでもSEO効果はありますか？",
    a: "ページ数が少なくても、1ページあたりの品質・構造・テーマの一貫性が高ければSEO効果は出ます。ただし検索流入の量を増やすためには、ターゲットキーワードに対応したページを継続的に増やすコンテンツSEOが有効です。まずは既存ページの内部SEO最適化から着手することをお勧めします。",
  },
  {
    q: "SEO対策で避けるべき「ブラックハット」とは何ですか？",
    a: "Googleのガイドラインに違反する手法の総称です。具体的には、人工的な被リンク購入・キーワードの過剰詰め込み（キーワードスタッフィング）・クローキング・コンテンツの無断複製などが該当します。短期的に効果が出ることもありますが、Googleペナルティを受けると検索順位が大幅に下落し、回復に長期間を要します。",
  },
];

const relatedLinks = [
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップ上位表示" },
  { href: "/aio", label: "AIO対策", desc: "AI検索エンジン最適化" },
  { href: "/seo/internal-seo", label: "内部SEO対策", desc: "タグ・構造最適化" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "検索意図に合ったページ制作" },
];

export default function SeoIndexPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-16 pb-14" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 mb-6" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="text-[12px] hover:text-[#0F172A] transition-colors" style={{ color: "#9CA3AF" }}>ホーム</Link>
              <span className="text-[12px]">/</span>
              <span className="text-[12px]" style={{ color: "#374151" }}>SEO対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>SEO Knowledge</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "#0F172A" }}>
              SEO対策
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              SEO（Search Engine Optimization）とは、GoogleやYahoo!などの検索エンジンで上位表示されるためのすべての施策を指します。適切なSEO対策を継続することで、広告費に頼らず自然検索から継続的な集客を実現し、ビジネスの成長を支える強固な集客基盤を構築できます。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "380px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_19_44.png"
            alt="SEO対策・アクセス解析の実施"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.2)" }} />
        </section>

        {/* SEO対策とは */}
        <section className="py-16" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-black text-[22px] md:text-[26px] mb-6" style={{ color: "#0F172A" }}>SEO対策とは</h2>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                SEO対策とは、検索エンジンのアルゴリズムを理解し、ユーザーの検索意図に応えるサイトを構築することで、検索結果の上位に表示されるよう継続的に改善していく取り組みです。Googleは200以上の評価指標をもとにページをランキングしており、技術的な基盤・コンテンツの質・外部からの評価など、多角的な施策が求められます。
              </p>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                かつてのSEOはキーワードの詰め込みや被リンクの量に依存していましたが、現在のGoogleはE-E-A-T（経験・専門性・権威性・信頼性）を重視し、ユーザーにとって本当に役立つコンテンツを評価します。そのため現代のSEOは「いかに検索エンジンをだますか」ではなく、「いかにユーザーに価値を提供できるか」という本質的なマーケティング活動そのものです。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                SEOの最大のメリットは、一度順位を獲得すれば広告費をかけずに継続的な流入が得られる点です。リスティング広告と異なり、停止しても流入が即ゼロになることはなく、積み上げた資産として長期間機能します。中長期的な事業成長を考えるうえで、SEOへの投資は欠かせない経営判断と言えます。
              </p>
            </div>
          </div>
        </section>

        {/* SEOの5つの柱 */}
        <section className="py-16" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#9CA3AF" }}>Structure</p>
              <h2 className="font-black text-[22px] md:text-[26px]" style={{ color: "#0F172A" }}>SEOの5つの柱</h2>
            </div>
            <div className="max-w-3xl">
              {pillars.map((item) => (
                <div key={item.num} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <Link href={item.href}>
                      <h3 className="font-bold text-[16px] mb-2 hover:underline" style={{ color: "#0F172A" }}>{item.title}</h3>
                    </Link>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* SEOと他の集客手法との違い */}
        <section className="py-16" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-black text-[22px] md:text-[26px] mb-6" style={{ color: "#0F172A" }}>SEOと他の集客手法との違い</h2>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                SEOは自然検索（オーガニック検索）からの流入を増やすことを目的としますが、Web集客にはMEO・AIO・リスティング広告・SNSなど多様な手法があります。それぞれの特性を理解し、自社の状況に合わせて組み合わせることが重要です。
              </p>
              <div className="mb-5" style={{ borderLeft: "2px solid #E8E4DC", paddingLeft: "1.25rem" }}>
                <p className="font-bold text-[15px] mb-1" style={{ color: "#0F172A" }}>SEO vs MEO</p>
                <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>SEOはGoogleの通常検索結果での上位表示を目指します。MEOはGoogleマップやローカルパック（地図検索）への表示最適化です。地域ビジネスはSEOとMEOの両方を強化することで、検索結果の露出面積を最大化できます。</p>
              </div>
              <div style={{ borderLeft: "2px solid #E8E4DC", paddingLeft: "1.25rem" }}>
                <p className="font-bold text-[15px] mb-1" style={{ color: "#0F172A" }}>SEO vs AIO</p>
                <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>AIO（AI検索最適化）はChatGPT・Gemini・Perplexityなどのチャット型AI検索エンジンから引用・紹介されることを目的とした新しい施策です。E-E-A-Tを重視したSEOコンテンツはAIOにも有効であり、SEOとAIOは対立するものではなく相互補完的な関係にあります。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sub-pages list */}
        <section className="py-16" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-8" style={{ color: "#9CA3AF" }}>SEO Knowledge</p>
            <h2 className="font-black text-[22px] md:text-[26px] mb-10" style={{ color: "#0F172A" }}>SEO対策の各カテゴリ</h2>
            <div className="max-w-3xl">
              {subPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="flex items-center justify-between py-5 group"
                  style={{ borderBottom: "1px solid #E8E4DC" }}
                >
                  <div>
                    <p className="font-bold text-[15px] mb-0.5 group-hover:underline" style={{ color: "#0F172A" }}>{page.label}</p>
                    <p className="text-[13px]" style={{ color: "#9CA3AF" }}>{page.desc}</p>
                  </div>
                  <svg className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "#9CA3AF" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 2-col: image + text — SEOの3つの柱 */}
        <section className="py-16" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative" style={{ height: "320px" }}>
                <Image
                  src="/1.png"
                  alt="複数人でグラフ・資料を確認しているミーティングの様子"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="font-black text-[22px] mb-5" style={{ color: "#0F172A" }}>SEOの3つの柱：技術・コンテンツ・信頼</h2>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  現代のSEOは「テクニカル基盤」「コンテンツ品質」「外部評価」という3つの軸で評価されます。技術的に正しく整備されたサイトに、ユーザーの検索意図を満たす高品質なコンテンツを積み上げ、外部からの信頼シグナルを獲得することで、中長期的に安定した検索順位を実現できます。どれか一つが欠けても最大の効果は得られません。
                </p>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="SEO対策についてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="SEO対策のご相談"
          body="SEO対策の現状分析から施策設計・実行支援まで、株式会社サイプレスが一貫してサポートします。まずは現状のサイト状況をお聞かせください。"
        />
      </main>
      <Footer />
    </>
  );
}

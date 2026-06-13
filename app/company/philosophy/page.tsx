import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "企業理念 | 株式会社サイプレス",
  description: "株式会社サイプレスの企業理念。Mission「地域企業が、正しく選ばれる仕組みをつくる」、Vision、Value、行動指針をご紹介します。",
  keywords: ["企業理念", "ミッション", "ビジョン", "バリュー", "株式会社サイプレス", "行動指針"],
  openGraph: {
    title: "企業理念 | 株式会社サイプレス",
    description: "株式会社サイプレスの企業理念。Mission・Vision・Value・行動指針。地域企業が正しく選ばれる仕組みをつくる。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-marketing.jp/company/philosophy" },
};

const PRINCIPLES = [
  {
    num: "01",
    title: "成果にこだわる",
    body: "提案・実装・測定・改善のサイクルを高速に回し、常に数値で成果を証明します。「やってみます」ではなく「こうすれば成果が出ます」と言える専門家集団であること。美しい提案より、検証された戦略を選びます。",
  },
  {
    num: "02",
    title: "誠実に伴走する",
    body: "短期的な受注より、長期的な信頼を大切にします。できないことはできないと伝え、クライアントの成功だけを考えた戦略を提案します。一度関わったクライアントとは、成果が出るまで向き合い続けます。",
  },
  {
    num: "03",
    title: "テクノロジーで革新する",
    body: "AIや最新のWebマーケティング技術を常にキャッチアップし、クライアントに5年先の競合優位性を提供します。現状維持は後退であると考え、業界の変化に先行して対応します。",
  },
  {
    num: "04",
    title: "透明性を持って動く",
    body: "施策の根拠・進捗・成果を常にオープンにし、クライアントが自ら判断できる情報を提供し続けます。ブラックボックスをなくし、信頼を積み重ねることが、長期的な関係の基盤です。",
  },
  {
    num: "05",
    title: "社会に価値を還元する",
    body: "クライアントの成功が地域経済の活性化につながるという信念のもと、私たちの仕事が社会全体に価値を生むことを常に意識します。良い企業が正しく選ばれることは、消費者にとっても社会にとっても良いことです。",
  },
];

export default function PhilosophyPage() {
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
              <span style={{ color: "#374151" }}>企業理念</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Philosophy
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "#0F172A" }}
            >
              企業理念
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              私たちが何のために存在し、どこを目指し、どのように行動するか。サイプレスの根幹となる考え方をお伝えします。
            </p>
          </div>
        </section>

        {/* Main philosophy — dark section */}
        <section className="py-28 md:py-40 relative overflow-hidden" style={{ background: "#0F172A" }}>
          <div className="absolute inset-0">
            <Image
              src="/ChatGPT Image 2026年6月13日 19_18_57.png"
              alt="サイプレスの理念"
              fill
              className="object-cover opacity-30"
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-8" style={{ color: "#475569" }}>
                Mission
              </p>
              <h2
                className="font-black text-white leading-[1.15] tracking-tight mb-10"
                style={{ fontSize: "clamp(30px, 4.5vw, 58px)" }}
              >
                地域企業が、<br />正しく選ばれる<br />仕組みをつくる。
              </h2>
              <p className="text-[16px] leading-[1.9]" style={{ color: "#94A3B8" }}>
                素晴らしいサービス・技術・想いを持ちながら、Webやデジタルマーケティングの壁に阻まれ、本来届くべき顧客に届いていない中小企業・地域ビジネスのために、集客の仕組みを根本から変えます。
              </p>
            </div>
          </div>
        </section>

        {/* Mission section */}
        <section className="py-20 md:py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Mission — 使命
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0F172A" }}
              >
                地域企業が、正しく選ばれる仕組みをつくる。
              </h2>
              <div className="space-y-4 text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                <p>
                  日本の中小企業・地域ビジネスには、長年培ってきた技術や、地域に根ざした丁寧なサービス、顧客への深い思いやりがあります。その価値は、多くの大企業には真似できないものです。しかし、デジタルの世界では、その価値がほとんど可視化されていない現実があります。
                </p>
                <p>
                  Webで検索しても出てこない。Googleマップに表示されない。情報発信が止まっていて、最新情報がわからない。こういった状況が積み重なることで、消費者は実力のある企業より、Webに力を入れている企業を選んでしまいます。
                </p>
                <p>
                  私たちの使命は、その構造を変えることです。MEO・SEO・AIO・ホームページ制作・SNS・AI活用という6つの手段を組み合わせ、中小企業が持つ本来の価値を、デジタルの世界でも正しく届ける仕組みを設計します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision section */}
        <section className="py-20 md:py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Vision — ビジョン
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0F172A" }}
              >
                AIとWebの力で、地域経済を再生する。
              </h2>
              <div className="space-y-4 text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                <p>
                  私たちが目指す世界は、地域のあらゆる中小企業・店舗・施設・士業・医療機関が、大企業と対等なデジタル競争力を持てる社会です。予算の多寡ではなく、知識と仕組みの差を埋めることで、あらゆる企業が正しく評価される環境を作り出します。
                </p>
                <p>
                  AIの登場は、その実現を一気に加速させました。コンテンツ制作・分析・投稿・改善のサイクルをAIで効率化することで、これまで大企業だけが実現できた継続的な情報発信が、中小企業にも可能になりました。私たちはその橋渡しをする会社でありたいと考えています。
                </p>
                <p>
                  地域の優れた企業が正しく選ばれることは、消費者にとっても、地域経済にとっても良いことです。良い企業が存続し、成長することで、地域に雇用が生まれ、サービスの質が上がり、コミュニティが豊かになる。そのサイクルを支えることが、サイプレスの長期的な貢献です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value section */}
        <section className="py-20 md:py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Value — 大切にすること
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0F172A" }}
              >
                成果・誠実・革新の三位一体。
              </h2>
              <div className="space-y-4 text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                <p>
                  私たちが日常の仕事において大切にしている価値観は、「成果にこだわること」「誠実に向き合うこと」「テクノロジーで革新すること」の三つです。この三つは、それぞれ独立した美徳ではなく、一体として機能します。
                </p>
                <p>
                  成果へのこだわりは、誠実さがあってこそ本物になります。顧客に誤った期待を持たせ、短期的に数字を作ることは成果とは呼べません。正直なコミュニケーションのうえで、時間をかけて積み上げた集客の仕組みが、本当の意味での成果です。また、テクノロジーの革新は、成果をより速く、より確実に届けるための手段です。AIを活用することで、これまで手が届かなかった改善の速度と精度を実現できます。
                </p>
                <p>
                  この三つの価値観を、すべての意思決定と行動の基軸に置くことで、クライアント・チーム・社会の全員にとって良い結果を生み出すことができると信じています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-20 md:py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Principles
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-12"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0F172A" }}
            >
              行動指針
            </h2>
            <div className="max-w-3xl space-y-0">
              {PRINCIPLES.map((p) => (
                <div
                  key={p.num}
                  className="grid grid-cols-[48px_1fr] gap-6 py-8"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[13px] font-mono pt-0.5" style={{ color: "#9CA3AF" }}>{p.num}</span>
                  <div>
                    <h3 className="font-black text-[17px] mb-3" style={{ color: "#0F172A" }}>{p.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{p.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <PageContactCTA />
      </main>
      <Footer />
    </>
  );
}

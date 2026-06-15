import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "対応エリア｜東京・葛飾・千葉・埼玉・神奈川・全国のMEO・SEO対策｜株式会社サイプレス",
  description:
    "株式会社サイプレスの対応エリア一覧。東京都（葛飾区・足立区・江戸川区・墨田区等）・千葉・埼玉・神奈川・全国のSEO対策・MEO対策・Web制作に対応。オンライン完結で全国どこからでもご相談可能。",
  keywords: ["MEO対策 東京", "SEO対策 葛飾区", "MEO 千葉", "SEO 埼玉", "Web集客 神奈川", "全国対応 MEO"],
  openGraph: {
    title: "対応エリア｜東京・葛飾・千葉・埼玉・神奈川・全国のMEO・SEO対策｜株式会社サイプレス",
    description: "東京都葛飾区拠点。首都圏のMEO・SEO対策はもちろん、Web制作・AIO対策は全国対応。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/area" },
};

const areas = [
  { href: "/area/tokyo", label: "東京都", desc: "東京都全域のSEO・MEO・Web制作" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区のMEO・SEO対策（拠点エリア）" },
  { href: "/area/adachi", label: "足立区", desc: "足立区のMEO・SEO対策" },
  { href: "/area/edogawa", label: "江戸川区", desc: "江戸川区のMEO・SEO対策" },
  { href: "/area/sumida", label: "墨田区", desc: "墨田区のMEO・SEO対策" },
  { href: "/area/chiba", label: "千葉県", desc: "千葉県全域のSEO・MEO対策" },
  { href: "/area/saitama", label: "埼玉県", desc: "埼玉県全域のSEO・MEO対策" },
  { href: "/area/kanagawa", label: "神奈川県", desc: "神奈川県全域のSEO・MEO対策" },
  { href: "/area/nationwide", label: "全国対応", desc: "SEO・AIO・Web制作は全国対応" },
];

const faqItems = [
  {
    q: "東京都外でも対応できますか？",
    a: "はい、MEO対策・SEO対策・Web制作・AIO対策はオンライン（Zoom・Google Meet）でのご相談・ご提案・納品が可能なため、全国どこからでもご依頼いただけます。MEO対策でGoogleビジネスプロフィールの管理・口コミ対応もリモートで対応しています。",
  },
  {
    q: "対面での相談は可能ですか？",
    a: "東京都・千葉県・埼玉県・神奈川県は対面での訪問相談も承っています。葛飾区を拠点としているため、同エリア内での訪問は特に歓迎しています。まずはお問い合わせフォームでお知らせください。",
  },
  {
    q: "地方の小さな店舗でもMEO対策の効果はありますか？",
    a: "はい、地方であっても「近くの〇〇」という検索はGoogleマップで行われます。むしろ都市部より競合が少ない地方では、適切なMEO対策でGoogleマップ上位を確保しやすいケースが多くあります。お気軽にご相談ください。",
  },
  {
    q: "対応エリアにない地域でも費用は同じですか？",
    a: "はい、基本的に対応エリア内外で費用に差はありません。オンライン対応でサービス品質は変わりませんので、全国均一の料金体系でご提供しています。",
  },
  {
    q: "複数の拠点・エリアがある場合も対応できますか？",
    a: "はい、複数店舗・複数エリアを持つ事業者様にも対応しています。Googleビジネスプロフィールの複数拠点管理・エリア別キーワード戦略など、多店舗展開に特化した施策をご提案できます。",
  },
];

export default function AreaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", gap: "6px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>対応エリア</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Service Area</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              対応エリア｜東京・千葉・埼玉・神奈川・全国
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "12px" }}>
              株式会社サイプレスは東京都葛飾区を拠点に、首都圏のMEO対策・SEO対策・Web制作に対応しています。
              SEO・AIO・Web制作はオンライン完結で全国どこからでもご依頼いただけます。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              MEO対策はGoogleビジネスプロフィールをリモートで管理するため、物理的な距離に関わらず対応可能です。
              首都圏以外のお客様もお気軽にご相談ください。
            </p>
          </div>
        </section>

        {/* Image band */}
        <section style={{ position: "relative", height: "280px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_18_57.png"
            alt="対応エリア・全国Web集客支援"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.5)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(18px,2.5vw,28px)", lineHeight: 1.5 }}>
                東京・首都圏から全国まで。<br />場所を選ばないデジタル集客支援。
              </p>
            </div>
          </div>
        </section>

        {/* Area list */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Area List</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              エリア別サービス
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "#ece8e0" }}>
              {areas.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  style={{ display: "block", padding: "28px", background: "#ffffff", textDecoration: "none" }}
                >
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "18px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>
                    {area.label}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.7" }}>{area.desc}</p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "12px", fontSize: "12px", color: "#9ca3af" }}>
                    詳しく見る
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Base info */}
        <section style={{ background: "#f9f8f5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Our Base</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "32px" }}>
              拠点と対応範囲
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "20px" }}>
                株式会社サイプレスは<strong>東京都葛飾区白鳥4-6-1-623</strong>に拠点を置き、
                首都圏（東京・千葉・埼玉・神奈川）を中心に対面でのコンサルティングに対応しています。
                葛飾区・足立区・江戸川区・墨田区などの東東京エリアへのアクセスが特にスムーズです。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "20px" }}>
                SEO対策・AIO対策・Web制作・AI活用支援はオンライン（Zoom・Google Meet）での
                ご相談・ご提案・納品が可能なため、<strong>全国どこからでもご依頼いただけます</strong>。
                北海道・九州・沖縄のお客様にも対応しています。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                MEO対策においても、Googleビジネスプロフィールの管理・口コミへの返信対応・
                写真投稿などはすべてリモートで実施します。
                現地訪問がなくても品質の高いMEO対策を提供できます。
              </p>
            </div>
          </div>
        </section>

        {/* Online support highlight */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Remote Support</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              オンライン対応だからこそできること
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px" }}>
              {[
                { t: "初回相談から無料", b: "Zoom・Google Meetでの初回相談は完全無料。資料を画面共有しながら現状と課題を丁寧にヒアリングします。" },
                { t: "月次レポートをオンラインで共有", b: "Googleドキュメント・スプレッドシートを活用した月次レポートをリアルタイムで共有。進捗が常に見える状態を維持します。" },
                { t: "Googleビジネスプロフィールをリモート管理", b: "MEO対策に必要なGBPの情報更新・口コミ返信・写真投稿はすべてリモートで対応します。" },
                { t: "全国一律の料金体系", b: "対応エリアに関わらず、サービス品質・料金は同一です。都市部・地方を問わず公平な料金設定です。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "28px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#ffffff", marginBottom: "12px" }}>{item.t}</p>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="対応エリアについてよくある質問" bgColor="#FFFFFF" />

        <RelatedPages
          links={[
            { href: "/area/tokyo", label: "東京都", desc: "東京都全域のWeb集客支援" },
            { href: "/area/katsushika", label: "葛飾区", desc: "拠点エリアのMEO・SEO対策" },
            { href: "/area/chiba", label: "千葉県", desc: "千葉県のWeb集客支援" },
            { href: "/area/saitama", label: "埼玉県", desc: "埼玉県のWeb集客支援" },
            { href: "/area/kanagawa", label: "神奈川県", desc: "神奈川県のWeb集客支援" },
            { href: "/area/nationwide", label: "全国対応", desc: "SEO・AIO・Web制作は全国対応" },
            { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ集客の詳細" },
            { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示の詳細" },
            { href: "/contact", label: "無料相談", desc: "お気軽にご相談ください" },
          ]}
        />

        <PageContactCTA
          heading="対応エリアへのご相談"
          body="東京・千葉・埼玉・神奈川のMEO・SEO対策はもちろん、全国どこからでもオンラインでご相談いただけます。まずはお気軽にお問い合わせください。"
        />
      </main>
      <Footer />
    </>
  );
}

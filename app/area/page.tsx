import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "対応エリア｜東京・葛飾・足立・千葉・埼玉・神奈川のSEO・MEO対策",
  description: "株式会社サイプレスの対応エリア一覧。東京都（葛飾区・足立区・江戸川区・墨田区等）・千葉・埼玉・神奈川・全国のSEO対策・MEO対策・Web制作に対応。",
};

const areas = [
  { href: "/area/tokyo", label: "東京都", desc: "東京都全域のSEO・MEO・Web制作" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区のMEO・SEO対策" },
  { href: "/area/adachi", label: "足立区", desc: "足立区のMEO・SEO対策" },
  { href: "/area/edogawa", label: "江戸川区", desc: "江戸川区のMEO・SEO対策" },
  { href: "/area/sumida", label: "墨田区", desc: "墨田区のMEO・SEO対策" },
  { href: "/area/chiba", label: "千葉県", desc: "千葉県全域のSEO・MEO対策" },
  { href: "/area/saitama", label: "埼玉県", desc: "埼玉県全域のSEO・MEO対策" },
  { href: "/area/kanagawa", label: "神奈川県", desc: "神奈川県全域のSEO・MEO対策" },
  { href: "/area/nationwide", label: "全国対応", desc: "SEO・AIO・Web制作は全国対応" },
];

const relatedLinks = [
  { href: "/area/tokyo", label: "東京都", desc: "東京都の集客支援" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区の集客支援" },
  { href: "/area/chiba", label: "千葉県", desc: "千葉県の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
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
              対応エリア
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Service Area</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              対応エリア｜東京・千葉・埼玉・神奈川・全国
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              株式会社サイプレスは東京都葛飾区を拠点に、東京都全域・千葉・埼玉・神奈川のSEO対策・MEO対策・Web制作に対応しています。SEO・AIO・Web制作は全国リモート対応です。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Area List</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              エリア別サービス
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
              {areas.map((area) => (
                <Link key={area.href} href={area.href} style={{ display: "block", padding: "28px", border: "1px solid #ece8e0", background: "#fafaf8", textDecoration: "none" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "18px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>{area.label}</p>
                  <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.7" }}>{area.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Our Base</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "24px" }}>
              拠点と対応範囲
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "16px" }}>
                株式会社サイプレスは<strong>東京都葛飾区白鳥4-6-1-623</strong>に拠点を置き、首都圏（東京・千葉・埼玉・神奈川）を中心に対面でのコンサルティングに対応しています。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                SEO対策・AIO対策・Web制作・AI活用支援はオンライン（Zoom・Google Meet）でのご相談・納品が可能なため、<strong>全国どこからでもご依頼いただけます</strong>。
              </p>
            </div>
          </div>
        </section>

        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="対応エリアへのご相談" body="東京・千葉・埼玉・神奈川のSEO対策・MEO対策・Web制作をご相談ください。全国リモート対応も行っています。まずはお気軽にお問い合わせください。" />
      </main>
      <Footer />
    </>
  );
}

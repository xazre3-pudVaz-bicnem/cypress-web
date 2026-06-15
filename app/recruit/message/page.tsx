import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "代表メッセージ｜株式会社サイプレス 代表 織田 春樹",
  description: "株式会社サイプレス代表 織田 春樹から採用応募者へのメッセージ。Web集客支援への想い・チームの文化・求める人物像・一緒に働くことで実現したいこと。",
};

const relatedLinks = [
  { href: "/recruit", label: "採用情報トップ", desc: "採用ページ" },
  { href: "/recruit/job-description", label: "募集要項", desc: "応募条件・詳細" },
  { href: "/recruit/remote-work", label: "リモートワーク制度", desc: "働き方の詳細" },
  { href: "/recruit/entry", label: "応募エントリー", desc: "エントリーはこちら" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/recruit">採用情報</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              代表メッセージ
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Message from CEO</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              代表メッセージ
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              株式会社サイプレス代表 織田 春樹より、採用をご検討の方へのメッセージです。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "64px", alignItems: "start", maxWidth: "900px" }}>
              <div>
                <div style={{ position: "relative", width: "200px", height: "200px", overflow: "hidden", borderRadius: "50%" }}>
                  <Image src="/logo.jpg" alt="代表 織田 春樹" fill className="object-cover" sizes="200px" />
                </div>
                <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, color: "#0d1b2a", marginTop: "16px", fontSize: "16px" }}>織田 春樹</p>
                <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "4px" }}>代表取締役</p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px" }}>Dear Candidates</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px,2.5vw,26px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.4, marginBottom: "28px" }}>
                  良い仕事をしている人が、正当に選ばれる社会を作りたい
                </h2>
                <div style={{ fontSize: "15px", lineHeight: "2", color: "#374151" }}>
                  <p style={{ marginBottom: "20px" }}>
                    優れた技術・本当に良いサービスを持っていても、Web上での発信が弱いために顧客に届かない——そんな場面を見るたびに、もったいないと感じてきました。
                  </p>
                  <p style={{ marginBottom: "20px" }}>
                    SEO・MEO・AIO・Web制作・AI活用を組み合わせることで、中小企業や個人事業主が大企業と対等に情報発信できる時代が来ています。その力を正しく使えれば、本当に良い仕事をしている人が正当に評価される社会に近づけると信じています。
                  </p>
                  <p style={{ marginBottom: "20px" }}>
                    私たちは小さなチームですが、全員が顧客の成果にコミットしています。「Web集客で誰かの役に立ちたい」という気持ちを持った方と、一緒に仕事がしたいと思っています。
                  </p>
                  <p>
                    経験の有無より、誠実さと成長意欲を大切にしています。まずは気軽に話しましょう。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="一緒に働きませんか" body="Web集客・SEO・MEO・AI活用に興味のある方、ぜひお話しましょう。採用エントリーはお問い合わせフォームからお気軽にどうぞ。" />
      </main>
      <Footer />
    </>
  );
}

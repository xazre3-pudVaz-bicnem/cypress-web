import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  const links = [
    { href: "/", label: "ホーム" },
    { href: "/services/meo", label: "MEO対策" },
    { href: "/services/seo", label: "SEO対策" },
    { href: "/services/aio", label: "AIO対策" },
    { href: "/services/web-design", label: "ホームページ制作" },
    { href: "/column", label: "専門コラム" },
    { href: "/contact", label: "お問い合わせ" },
  ];

  return (
    <>
      <Header />
      <main style={{ background: "#FFFFFF", minHeight: "80vh" }}>
        <section className="pt-40 pb-32">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p
              className="font-mono font-black mb-6"
              style={{ fontSize: "clamp(72px, 12vw, 140px)", color: "#E8E4DC", lineHeight: 1 }}
            >
              404
            </p>
            <h1
              className="font-black tracking-tight mb-6"
              style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "#0F172A" }}
            >
              ページが見つかりませんでした
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-md mx-auto mb-12" style={{ color: "#374151" }}>
              お探しのページは移動・削除されたか、URLが間違っている可能性があります。
              下記のリンクからページをお探しください。
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2.5 text-[13px] font-medium transition-all hover:bg-[#0F172A] hover:text-white"
                  style={{ border: "1px solid #0F172A", color: "#0F172A" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[#0F172A]"
              style={{ color: "#6B7280" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              トップページへ戻る
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/** 404（参考サイトと同じく、青い全面に大きな数字。中央にはサイプレスの立体マーク） */
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
      <main className="v2">
        <section
          className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-[var(--v2-gutter)] pb-20 pt-32 text-center text-white"
          style={{ background: "var(--v2-blue)" }}
          data-tone="dark"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[url('/images/v2/contour.svg')] bg-cover bg-center" />
          <p className="v2-display relative flex items-center text-[clamp(120px,22vw,300px)] leading-none" aria-hidden>
            <span>4</span>
            <span className="relative mx-[0.04em] inline-block h-[0.78em] w-[0.78em]">
              <Image src="/images/v2/mark-3d.png" alt="" fill sizes="240px" className="object-contain drop-shadow-[0_18px_30px_rgba(3,40,92,0.35)]" />
            </span>
            <span>4</span>
          </p>
          <h1 className="v2-display relative mt-2 text-[clamp(28px,3.4vw,48px)] text-white">
            Page not found
            <span className="mt-3 block font-[family-name:var(--font-sans)] text-[16px] font-bold tracking-[0.04em]">ページが見つかりませんでした</span>
          </h1>
          <p className="relative mx-auto mt-6 max-w-md text-[14px] font-semibold leading-[2]">
            お探しのページは移動・削除されたか、URLが間違っている可能性があります。下記のリンクからページをお探しください。
          </p>
          <ul className="relative mt-10 flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-full border border-white/50 px-5 py-2.5 text-[13px] font-bold transition-colors duration-300 hover:bg-white hover:text-[var(--v2-blue)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

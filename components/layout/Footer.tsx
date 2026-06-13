import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0F172A", color: "#94A3B8" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-black text-white text-[15px] mb-3">株式会社サイプレス</p>
            <p className="text-[12px] leading-relaxed" style={{ color: "#64748B" }}>
              MEO・SEO・AIO・ホームページ制作を通じて、中小企業のWeb集客を支援するマーケティングカンパニー。
            </p>
            <p className="text-[11px] mt-4" style={{ color: "#475569" }}>
              東京都葛飾区白鳥4-6-1-623
            </p>
          </div>

          {/* 会社情報 */}
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-white mb-4">会社情報</p>
            <ul className="space-y-2.5">
              {[
                { href: "/company", label: "会社情報" },
                { href: "/company/message", label: "代表挨拶" },
                { href: "/company/philosophy", label: "企業理念" },
                { href: "/company/profile", label: "会社概要" },
                { href: "/company/history", label: "沿革" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] hover:text-white transition-colors" style={{ color: "#64748B" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 事業内容 */}
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-white mb-4">事業内容</p>
            <ul className="space-y-2.5">
              {[
                { href: "/services/meo", label: "MEO対策" },
                { href: "/services/seo", label: "SEO対策" },
                { href: "/services/aio", label: "AIO対策" },
                { href: "/services/web-design", label: "ホームページ制作" },
                { href: "/services/sns", label: "SNS運用" },
                { href: "/services/ai", label: "AI活用支援" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] hover:text-white transition-colors" style={{ color: "#64748B" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 専門知識 */}
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-white mb-4">専門知識</p>
            <ul className="space-y-2.5">
              {[
                { href: "/seo", label: "SEO対策とは" },
                { href: "/meo", label: "MEO対策とは" },
                { href: "/aio", label: "AIO対策とは" },
                { href: "/seo/internal-seo", label: "内部SEO" },
                { href: "/meo/google-business-profile", label: "Googleビジネス" },
                { href: "/aio/structured-data", label: "構造化データ" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] hover:text-white transition-colors" style={{ color: "#64748B" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* その他 */}
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-white mb-4">その他</p>
            <ul className="space-y-2.5">
              {[
                { href: "/recruit", label: "採用情報" },
                { href: "/column", label: "コラム" },
                { href: "/news", label: "お知らせ" },
                { href: "/contact", label: "お問い合わせ" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] hover:text-white transition-colors" style={{ color: "#64748B" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-8"
          style={{ borderTop: "1px solid #1E293B" }}
        >
          <p className="text-[12px]" style={{ color: "#334155" }}>
            © 2024 株式会社サイプレス All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-[12px] hover:text-white transition-colors" style={{ color: "#334155" }}>
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

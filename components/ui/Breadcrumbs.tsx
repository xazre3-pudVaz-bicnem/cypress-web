import Link from "next/link";

export type Crumb = { name: string; href?: string };

/** 画面上のパンくず。構造化データ（BreadcrumbList）は各ページ・テンプレート側で出力する。 */
export default function Breadcrumbs({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  return (
    <nav aria-label="パンくずリスト" className="mb-8">
      <ol className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] ${dark ? "text-white/55" : "text-muted"}`}>
        {items.map((c, i) => (
          <li key={c.name} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden="true" className={dark ? "text-white/30" : "text-line-strong"}>
                /
              </span>
            )}
            {c.href ? (
              <Link href={c.href} className={`transition-colors ${dark ? "hover:text-white" : "hover:text-ink"}`}>
                {c.name}
              </Link>
            ) : (
              <span aria-current="page" className={dark ? "text-white" : "text-ink"}>
                {c.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

const SITE_URL = "https://www.cypress-all.co.jp";

/** 最後の要素（現在のページ）はリンクを持たないため、currentPath でURLを補う。 */
export function breadcrumbJsonLd(items: Crumb[], currentPath: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => {
      const path = c.href ?? currentPath;
      return {
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: `${SITE_URL}${path === "/" ? "" : path}`,
      };
    }),
  };
}

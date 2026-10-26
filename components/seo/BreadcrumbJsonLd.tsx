const SITE_URL = "https://www.cypress-all.co.jp";

interface Crumb {
  name: string;
  /** 最後（現在のページ）は省略できる。省略すると Google はそのページ自身の URL とみなす */
  href?: string;
}

/**
 * パンくずリストの構造化データ（BreadcrumbList）。画面のパンくずと同じ並びを渡す。
 * 検索結果に階層が表示され、Google・AI がサイトの構造を理解しやすくなる。
 */
export default function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: `${SITE_URL}${c.href === "/" ? "" : c.href}` } : {}),
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

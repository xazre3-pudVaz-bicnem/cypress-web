export const WP_API = "https://wp.cypress-web.com/wp-json/wp/v2";

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  categories: number[];
  tags: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: { width: number; height: number };
    }>;
    "wp:term"?: Array<Array<{ id: number; name: string; slug: string }>>;
    author?: Array<{ name: string; avatar_urls?: Record<string, string> }>;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
  description: string;
}

export async function getPosts(params: {
  perPage?: number;
  page?: number;
  categoryId?: number;
} = {}): Promise<WPPost[]> {
  const { perPage = 12, page = 1, categoryId } = params;
  const url = new URL(`${WP_API}/posts`);
  url.searchParams.set("per_page", String(perPage));
  url.searchParams.set("page", String(page));
  url.searchParams.set("_embed", "true");
  if (categoryId) url.searchParams.set("categories", String(categoryId));

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(
      `${WP_API}/posts?slug=${encodeURIComponent(slug)}&_embed=true`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const posts: WPPost[] = await res.json();
    return posts[0] ?? null;
  } catch {
    return null;
  }
}

export async function getCategories(): Promise<WPCategory[]> {
  try {
    const res = await fetch(`${WP_API}/categories?per_page=100`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function getCategoryBySlug(slug: string): Promise<WPCategory | null> {
  const categories = await getCategories();
  return categories.find((c) => c.slug === slug) ?? null;
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'").trim();
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export function getFeaturedImage(post: WPPost): string | null {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
}

export function getPostCategories(post: WPPost): Array<{ id: number; name: string; slug: string }> {
  return post._embedded?.["wp:term"]?.[0] ?? [];
}

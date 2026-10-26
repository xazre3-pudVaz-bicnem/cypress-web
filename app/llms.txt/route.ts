import fs from "fs";
import path from "path";
import { getAllPosts, lastUpdated } from "@/lib/blog";

const SITE_URL = "https://www.cypress-all.co.jp";

// ビルドのたびに作り直す。手書きの本文（content/llms.md）の後ろに最新のブログ記事を足すので、
// 日次で記事が増えても AI 向けの案内が古くならない。
export const dynamic = "force-static";

export function GET() {
  const base = fs.readFileSync(path.join(process.cwd(), "content/llms.md"), "utf8").trimEnd();
  const posts = getAllPosts().slice(0, 30);
  const blog = [
    "",
    "### ブログ（最新30件・記事の追加に合わせて自動で更新）",
    ...posts.map((p) => `- ${SITE_URL}/blog/${p.slug} — ${p.title}（${lastUpdated(p)}）`),
  ].join("\n");
  return new Response(`${base}\n${blog}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

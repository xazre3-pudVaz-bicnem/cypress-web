import type { ServiceSummary } from "@/lib/navigation";

/**
 * サービス詳細ページ（/services/*）の内容。表示は components/templates/ServiceDetail.tsx が担う。
 *
 * 文章量の目安（読ませるより「見て分かる」を優先する）:
 * - catch: 1行（25字前後） / lead: 2文以内（80字前後）
 * - problems: 6件、各20字以内の言い切り
 * - offerings / concept / process / kpis の body: 1文（45字前後）
 * - industries の body: 2文以内。折りたたんで表示する
 * - faq と related は検索流入の資産なので、元のページから省略せずに引き継ぐ
 */
export type ServicePageContent = {
  slug: ServiceSummary["slug"];
  /** パンくず・見出しに使う短い名前（例: MEO対策） */
  name: string;
  /** ページのh1（検索キーワードを含める。例: MEO対策サービス） */
  h1: string;
  catch: string;
  lead: string;
  /** ヒーローに並べる3つの要点 */
  points: [string, string, string];
  /** 料金の目安ページ */
  costHref: string;
  problems: string[];
  offerings: { title: string; body: string }[];
  /** サービス固有の考え方（濃紺の区画）。専門性を短く示す */
  concept: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; body: string }[];
  };
  /** 対応業種の例（チップ表示） */
  targets: string[];
  industries: { name: string; body: string }[];
  process: { title: string; body: string }[];
  kpiLead: string;
  kpis: { name: string; body: string }[];
  faqHeading: string;
  faq: { q: string; a: string }[];
  related: { href: string; label: string; desc?: string }[];
  cta: { heading: string; body: string };
  schema: { name: string; description: string; serviceType: string };
};

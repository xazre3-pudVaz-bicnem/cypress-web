import type { ColumnTopicPage } from "../columnTopicPages";
import { COLUMN_TOPICS } from "../columnTopicPages";
import { SEO_COLUMNS } from "./seoColumns";
import { MEO_COLUMNS } from "./meoColumns";
import { AIO_COLUMNS } from "./aioColumns";
import { WEB_COLUMNS } from "./webColumns";
import { SNS_COLUMNS } from "./snsColumns";
import { AI_COLUMNS } from "./aiColumns";
import { INDUSTRY_COLUMNS } from "./industryColumns";
import { AREA_COLUMNS } from "./areaColumns";
import { PROBLEM_COLUMNS } from "./problemColumns";
import { COMPARISON_COLUMNS } from "./comparisonColumns";

export type { ColumnTopicPage };

export const ALL_COLUMN_TOPICS: ColumnTopicPage[] = [
  ...COLUMN_TOPICS,
  ...SEO_COLUMNS,
  ...MEO_COLUMNS,
  ...AIO_COLUMNS,
  ...WEB_COLUMNS,
  ...SNS_COLUMNS,
  ...AI_COLUMNS,
  ...INDUSTRY_COLUMNS,
  ...AREA_COLUMNS,
  ...PROBLEM_COLUMNS,
  ...COMPARISON_COLUMNS,
];

export function getColumnTopicBySlugAll(slug: string): ColumnTopicPage | undefined {
  return ALL_COLUMN_TOPICS.find((t) => t.slug === slug);
}

export function getAllColumnTopicSlugsAll(): { slug: string }[] {
  return ALL_COLUMN_TOPICS.map((t) => ({ slug: t.slug }));
}

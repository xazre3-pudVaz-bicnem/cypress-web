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
import { NEW_SEO_COLUMNS } from "./newSeoColumns";
import { NEW_MEO_COLUMNS } from "./newMeoColumns";
import { NEW_AIO_COLUMNS } from "./newAioColumns";
import { NEW_WEB_DESIGN_COLUMNS } from "./newWebDesignColumns";
import { NEW_LOCAL_SEO_COLUMNS } from "./newLocalSeoColumns";
import { NEW_CASE_STUDY_COLUMNS } from "./newCaseStudyColumns";
import { NEW_SNS_COLUMNS } from "./newSnsColumns";
import { NEW_SEARCH_CONSOLE_COLUMNS } from "./newSearchConsoleColumns";
import { NEW_WEB_MARKETING_COLUMNS } from "./newWebMarketingColumns";
import { NEW_INDUSTRIES_COLUMNS } from "./newIndustriesColumns";
import { NEW_TOKYO_COLUMNS } from "./newTokyoColumns";
import { NEW_RECRUIT_AGENT_COLUMNS } from "./newRecruitAgentColumns";
import { NEW_COST_LOCAL_COLUMNS } from "./newCostLocalColumns";
import { NEW_HIGH_VALUE_COLUMNS } from "./newHighValueColumns";

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
  ...NEW_SEO_COLUMNS,
  ...NEW_MEO_COLUMNS,
  ...NEW_AIO_COLUMNS,
  ...NEW_WEB_DESIGN_COLUMNS,
  ...NEW_LOCAL_SEO_COLUMNS,
  ...NEW_CASE_STUDY_COLUMNS,
  ...NEW_SNS_COLUMNS,
  ...NEW_SEARCH_CONSOLE_COLUMNS,
  ...NEW_WEB_MARKETING_COLUMNS,
  ...NEW_INDUSTRIES_COLUMNS,
  ...NEW_TOKYO_COLUMNS,
  ...NEW_RECRUIT_AGENT_COLUMNS,
  ...NEW_COST_LOCAL_COLUMNS,
  ...NEW_HIGH_VALUE_COLUMNS,
];

export function getColumnTopicBySlugAll(slug: string): ColumnTopicPage | undefined {
  return ALL_COLUMN_TOPICS.find((t) => t.slug === slug);
}

export function getAllColumnTopicSlugsAll(): { slug: string }[] {
  return ALL_COLUMN_TOPICS.map((t) => ({ slug: t.slug }));
}

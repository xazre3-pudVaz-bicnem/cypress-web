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
import { NEW_HOWTO_COLUMNS } from "./newHowToColumns";
import { NEW_AIO_ADVANCED_COLUMNS } from "./newAioAdvancedColumns";
import { NEW_COMPARISON_COLUMNS } from "./newComparisonColumns";
import { NEW_COST2_COLUMNS } from "./newCost2Columns";
import { NEW_WARD_COLUMNS } from "./newWardColumns";
import { NEW_INDUSTRY2_COLUMNS } from "./newIndustry2Columns";
import { NEW_STARTUP_COLUMNS } from "./newStartupColumns";
import { NEW_STARTUP2_COLUMNS } from "./newStartup2Columns";
import { NEW_STARTUP3_COLUMNS } from "./newStartup3Columns";
import { NEW_KATSUSHIKA_WEB_DESIGN_COLUMNS } from "./newKatsushikaWebDesignColumns";
import { KATSUSHIKA_INDUSTRY_COLUMNS } from "./katsushikaIndustryColumns";
import { KATSUSHIKA_STATION_COLUMNS } from "./katsushikaStationColumns";
import { KATSUSHIKA_TACTICS_COLUMNS } from "./katsushikaTacticsColumns";
import { KATSUSHIKA_INDUSTRY3_COLUMNS } from "./katsushikaIndustry3Columns";
import { KATSUSHIKA_INDUSTRY4_COLUMNS } from "./katsushikaIndustry4Columns";
import { KATSUSHIKA_INDUSTRY5_COLUMNS } from "./katsushikaIndustry5Columns";
import { KATSUSHIKA_TACTICS3_COLUMNS } from "./katsushikaTactics3Columns";
import { KATSUSHIKA_COMPARE_PROBLEM_COLUMNS } from "./katsushikaCompareProblemColumns";
import { KATSUSHIKA_MEDICAL_SPECIAL_COLUMNS } from "./katsushikaMedicalSpecialColumns";
import { KATSUSHIKA_FOOD_RETAIL2_COLUMNS } from "./katsushikaFoodRetail2Columns";
import { KATSUSHIKA_HOUSING_B2B_COLUMNS } from "./katsushikaHousingB2BColumns";
import { KATSUSHIKA_LEISURE_EDU_COLUMNS } from "./katsushikaLeisureEduColumns";
import { KATSUSHIKA_AREA_DEEPDIVE_COLUMNS } from "./katsushikaAreaDeepDiveColumns";
import { TRAINING_SUBSIDY_COLUMNS } from "./trainingSubsidyColumns";
import { TRAINING_AI_COLUMNS } from "./trainingAiColumns";
import { TRAINING_WEB_COLUMNS } from "./trainingWebColumns";
import { TRAINING_COMPARE_COLUMNS } from "./trainingCompareColumns";
import { TRAINING_INDUSTRY_COLUMNS } from "./trainingIndustryColumns";
import { TRAINING_INDUSTRY2_COLUMNS } from "./trainingIndustry2Columns";
import { TRAINING_ROLE_TOOL_COLUMNS } from "./trainingRoleToolColumns";
import { TRAINING_COST_PLAN_COLUMNS } from "./trainingCostPlanColumns";
import { TRAINING_COURSE_AREA_COLUMNS } from "./trainingCourseAreaColumns";

export type { ColumnTopicPage };

const ALL_COLUMN_TOPICS_RAW: ColumnTopicPage[] = [
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
  ...NEW_HOWTO_COLUMNS,
  ...NEW_AIO_ADVANCED_COLUMNS,
  ...NEW_COMPARISON_COLUMNS,
  ...NEW_COST2_COLUMNS,
  ...NEW_WARD_COLUMNS,
  ...NEW_INDUSTRY2_COLUMNS,
  ...NEW_STARTUP_COLUMNS,
  ...NEW_STARTUP2_COLUMNS,
  ...NEW_STARTUP3_COLUMNS,
  ...NEW_KATSUSHIKA_WEB_DESIGN_COLUMNS,
  ...KATSUSHIKA_INDUSTRY_COLUMNS,
  ...KATSUSHIKA_STATION_COLUMNS,
  ...KATSUSHIKA_TACTICS_COLUMNS,
  ...KATSUSHIKA_INDUSTRY3_COLUMNS,
  ...KATSUSHIKA_INDUSTRY4_COLUMNS,
  ...KATSUSHIKA_INDUSTRY5_COLUMNS,
  ...KATSUSHIKA_TACTICS3_COLUMNS,
  ...KATSUSHIKA_COMPARE_PROBLEM_COLUMNS,
  ...KATSUSHIKA_MEDICAL_SPECIAL_COLUMNS,
  ...KATSUSHIKA_FOOD_RETAIL2_COLUMNS,
  ...KATSUSHIKA_HOUSING_B2B_COLUMNS,
  ...KATSUSHIKA_LEISURE_EDU_COLUMNS,
  ...KATSUSHIKA_AREA_DEEPDIVE_COLUMNS,
  ...TRAINING_SUBSIDY_COLUMNS,
  ...TRAINING_AI_COLUMNS,
  ...TRAINING_WEB_COLUMNS,
  ...TRAINING_COMPARE_COLUMNS,
  ...TRAINING_INDUSTRY_COLUMNS,
  ...TRAINING_INDUSTRY2_COLUMNS,
  ...TRAINING_ROLE_TOOL_COLUMNS,
  ...TRAINING_COST_PLAN_COLUMNS,
  ...TRAINING_COURSE_AREA_COLUMNS,
];

/**
 * slugの重複を排除する（先に定義されたものを採用）。
 * 重複したslugをそのまま残すと、generateStaticParams と sitemap.xml に
 * 同一URLが二重に出力され、SEO上の重複URL問題を招く。
 */
export const ALL_COLUMN_TOPICS: ColumnTopicPage[] = ALL_COLUMN_TOPICS_RAW.filter(
  (topic, index, all) => all.findIndex((t) => t.slug === topic.slug) === index
);

export function getColumnTopicBySlugAll(slug: string): ColumnTopicPage | undefined {
  return ALL_COLUMN_TOPICS.find((t) => t.slug === slug);
}

export function getAllColumnTopicSlugsAll(): { slug: string }[] {
  return ALL_COLUMN_TOPICS.map((t) => ({ slug: t.slug }));
}

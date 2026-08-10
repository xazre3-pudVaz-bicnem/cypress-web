/**
 * 問い合わせ窓口の連絡先。ヘッダー・フッター・会社概要・CTA・APIルートで共有する。
 * 表示箇所が増えても値が散らばらないよう、ここだけを正とする。
 */
export const CONTACT_EMAIL = "info@cypress-all.co.jp";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
export const CONTACT_HOURS = "平日 10:00 – 18:00";
export const CONTACT_REPLY_TIME = "2営業日以内";

/** お問い合わせ種別。フォームの選択肢とAPI側の検証・件名生成で共有する。 */
export const INQUIRY_TYPES = [
  { value: "general", label: "サービスに関するご相談" },
  { value: "homepage", label: "ホームページ制作について" },
  { value: "seo", label: "SEO対策について" },
  { value: "meo", label: "MEO対策について" },
  { value: "aio", label: "AIO対策（AI検索対策）について" },
  { value: "package", label: "Web集客パッケージについて" },
  { value: "reskilling", label: "リスキリング研修について" },
  { value: "ai-dx-training", label: "AI・DX研修について" },
  { value: "chatgpt-training", label: "ChatGPT・生成AI研修について" },
  { value: "web-marketing-training", label: "Webマーケティング研修について" },
  { value: "subsidy-training", label: "人材開発支援助成金を活用した研修について" },
  { value: "training-referral", label: "研修会社の紹介について" },
  { value: "partner-training", label: "提携研修会社への相談について" },
  { value: "partner", label: "販売パートナー制度について" },
  { value: "agent", label: "取次店制度について" },
  { value: "startup", label: "葛飾区での創業・Web集客について" },
  { value: "recruit", label: "採用に関するお問い合わせ" },
  { value: "other", label: "その他" },
] as const;

export type InquiryTypeValue = (typeof INQUIRY_TYPES)[number]["value"];

export const INQUIRY_TYPE_LABELS: Record<string, string> = Object.fromEntries(
  INQUIRY_TYPES.map((t) => [t.value, t.label])
);

export function isInquiryType(value: string): value is InquiryTypeValue {
  return value in INQUIRY_TYPE_LABELS;
}

/**
 * 研修関連の種別。選択時のみ提携研修会社への情報共有の同意欄を表示し、
 * 同意がない場合は共有しない運用とする（個人情報保護法上の第三者提供）。
 */
export const TRAINING_TYPES: ReadonlySet<string> = new Set([
  "reskilling",
  "ai-dx-training",
  "chatgpt-training",
  "web-marketing-training",
  "subsidy-training",
  "training-referral",
  "partner-training",
]);

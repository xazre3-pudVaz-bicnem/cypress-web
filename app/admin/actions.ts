"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { checkPassword, createSession, destroySession, isAdminConfigured, requireAdmin } from "@/lib/admin-auth";
import {
  getNextPendingId,
  isUuid,
  listAiUnchecked,
  REVIEW_VERDICT_LABELS,
  saveAiCheck,
  saveReview,
  type ReviewVerdict,
} from "@/lib/chat-db";
import { reviewConversation } from "@/lib/chat-review";

// ─── Login ───────────────────────────────────────────────────────────────────

/** パスワード総当たりを抑える簡易制限。インスタンスごとのメモリ上の制限。 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 8;
const attempts = new Map<string, number[]>();

function tooManyAttempts(ip: string): boolean {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  attempts.set(ip, recent);
  return recent.length > MAX_ATTEMPTS;
}

export type LoginState = { error: string | null };

export async function loginAction(_prev: LoginState, formData: FormData): Promise<LoginState> {
  if (!isAdminConfigured()) {
    return { error: "ADMIN_PASSWORD が未設定のため、管理画面を利用できません。" };
  }
  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (tooManyAttempts(ip)) {
    return { error: "試行回数が多すぎます。10分ほど時間をおいてお試しください。" };
  }
  const password = formData.get("password");
  if (typeof password !== "string" || !checkPassword(password)) {
    return { error: "パスワードが違います。" };
  }
  await createSession();
  redirect("/admin");
}

export async function logoutAction(): Promise<void> {
  await destroySession();
  redirect("/admin/login");
}

// ─── Human review ────────────────────────────────────────────────────────────

export async function saveReviewAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = formData.get("id");
  const verdict = formData.get("verdict");
  const note = formData.get("note");
  if (!isUuid(id) || typeof verdict !== "string" || !(verdict in REVIEW_VERDICT_LABELS)) {
    redirect("/admin/conversations");
  }
  await saveReview(id, verdict as ReviewVerdict, typeof note === "string" ? note.trim().slice(0, 2000) : "");
  revalidatePath("/admin", "layout");

  const next = await getNextPendingId(id);
  redirect(next ? `/admin/conversations/${next}` : "/admin/conversations?filter=reviewed");
}

// ─── AI pre-check ────────────────────────────────────────────────────────────

/** 1回の実行でチェックする件数。関数の実行時間とAPI費用を抑えるために区切る。 */
const AI_CHECK_BATCH = 10;

export type AiCheckState = { message: string | null };

export async function runAiCheckAction(): Promise<AiCheckState> {
  await requireAdmin();
  if (!process.env.ANTHROPIC_API_KEY) {
    return { message: "ANTHROPIC_API_KEY が未設定のため実行できません。" };
  }
  const targets = await listAiUnchecked(AI_CHECK_BATCH);
  if (targets.length === 0) return { message: "未チェックの会話はありません。" };

  const results = await Promise.allSettled(
    targets.map(async (t) => {
      const { verdict, reason } = await reviewConversation(t.messages);
      await saveAiCheck(t.id, verdict, reason);
      return verdict;
    })
  );
  const done = results.filter((r) => r.status === "fulfilled");
  const flagged = done.filter((r) => r.status === "fulfilled" && r.value === "needs_review").length;
  const failed = results.length - done.length;
  for (const r of results) {
    if (r.status === "rejected") console.error("[admin] AIチェックに失敗しました:", r.reason);
  }

  revalidatePath("/admin", "layout");
  return {
    message:
      `${done.length}件をチェックし、${flagged}件を「人の確認を推奨」としました。` +
      (failed > 0 ? `${failed}件は失敗しました（もう一度実行してください）。` : "") +
      (targets.length === AI_CHECK_BATCH ? "まだ残っている場合は、もう一度実行してください。" : ""),
  };
}

import { neon } from "@neondatabase/serverless";
import type { ChatMessage } from "@/lib/chatbot";

/**
 * AI相談チャットの会話ログ（Neon Postgres）。
 * DATABASE_URL が無い環境ではすべての書き込みを黙って省略し、チャット自体は動かし続ける。
 */

export type ReviewVerdict = "good" | "needs_improvement" | "out_of_scope";
export type AiVerdict = "ok" | "needs_review" | "out_of_scope";
export type ChatEventType = "open" | "link_click" | "contact_click" | "tel_click";

export const REVIEW_VERDICT_LABELS: Record<ReviewVerdict, string> = {
  good: "良い会話",
  needs_improvement: "改善が必要",
  out_of_scope: "対象外",
};

export const AI_VERDICT_LABELS: Record<AiVerdict, string> = {
  ok: "問題なし",
  needs_review: "人の確認を推奨",
  out_of_scope: "対象外",
};

export type ConversationRow = {
  id: string;
  created_at: string | Date;
  updated_at: string | Date;
  page_path: string;
  user_messages: number;
  link_shown: boolean;
  tel_shown: boolean;
  link_clicked: boolean;
  contact_clicked: boolean;
  tel_clicked: boolean;
  ai_verdict: AiVerdict | null;
  ai_reason: string | null;
  review_verdict: ReviewVerdict | null;
  review_note: string;
  first_message: string | null;
};

export type MessageRow = { id: number; role: "user" | "assistant"; content: string; created_at: string | Date };

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isUuid(value: unknown): value is string {
  return typeof value === "string" && UUID_PATTERN.test(value);
}

export function isChatDbConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

function db() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL が設定されていません");
  return neon(url);
}

// マイグレーションツールを入れるほどの規模ではないため、インスタンスごとに一度だけ冪等なDDLを流す。
let schemaReady: Promise<void> | null = null;

function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    const sql = db();
    schemaReady = sql
      .transaction([
        sql`CREATE TABLE IF NOT EXISTS chat_conversations (
          id uuid PRIMARY KEY,
          created_at timestamptz NOT NULL DEFAULT now(),
          updated_at timestamptz NOT NULL DEFAULT now(),
          page_path text NOT NULL DEFAULT '',
          user_messages integer NOT NULL DEFAULT 0,
          link_shown boolean NOT NULL DEFAULT false,
          tel_shown boolean NOT NULL DEFAULT false,
          link_clicked boolean NOT NULL DEFAULT false,
          contact_clicked boolean NOT NULL DEFAULT false,
          tel_clicked boolean NOT NULL DEFAULT false,
          ai_verdict text,
          ai_reason text,
          ai_checked_at timestamptz,
          review_verdict text,
          review_note text NOT NULL DEFAULT '',
          reviewed_at timestamptz
        )`,
        sql`CREATE TABLE IF NOT EXISTS chat_messages (
          id bigserial PRIMARY KEY,
          conversation_id uuid NOT NULL REFERENCES chat_conversations(id) ON DELETE CASCADE,
          role text NOT NULL,
          content text NOT NULL,
          created_at timestamptz NOT NULL DEFAULT now()
        )`,
        sql`CREATE INDEX IF NOT EXISTS chat_messages_conversation_idx ON chat_messages (conversation_id, id)`,
        sql`CREATE INDEX IF NOT EXISTS chat_conversations_created_idx ON chat_conversations (created_at DESC)`,
        sql`CREATE TABLE IF NOT EXISTS chat_opens (
          id bigserial PRIMARY KEY,
          created_at timestamptz NOT NULL DEFAULT now(),
          page_path text NOT NULL DEFAULT ''
        )`,
        sql`CREATE INDEX IF NOT EXISTS chat_opens_created_idx ON chat_opens (created_at DESC)`,
      ])
      .then(() => undefined)
      .catch((error) => {
        schemaReady = null;
        throw error;
      });
  }
  return schemaReady;
}

const SITE_LINK = /\]\(\/[^)\s]*\)/;
const TEL_LINK = /\]\(tel:/;

// ─── Writes（チャット側から呼ぶ。失敗してもチャットを止めない） ──────────────────

/** 1往復（訪問者の発言とAIの回答）を保存する。 */
export async function logExchange(args: {
  conversationId: string;
  pagePath: string;
  user: string;
  assistant: string;
}): Promise<void> {
  if (!isChatDbConfigured()) return;
  try {
    await ensureSchema();
    const sql = db();
    const linkShown = SITE_LINK.test(args.assistant);
    const telShown = TEL_LINK.test(args.assistant);
    await sql.transaction([
      // 会話が続いたら、古い内容に対するAIチェック結果は無効にして再チェック対象へ戻す。
      sql`INSERT INTO chat_conversations (id, page_path, user_messages, link_shown, tel_shown)
          VALUES (${args.conversationId}, ${args.pagePath}, 1, ${linkShown}, ${telShown})
          ON CONFLICT (id) DO UPDATE SET
            updated_at = now(),
            user_messages = chat_conversations.user_messages + 1,
            link_shown = chat_conversations.link_shown OR EXCLUDED.link_shown,
            tel_shown = chat_conversations.tel_shown OR EXCLUDED.tel_shown,
            ai_verdict = NULL, ai_reason = NULL, ai_checked_at = NULL`,
      sql`INSERT INTO chat_messages (conversation_id, role, content)
          VALUES (${args.conversationId}, 'user', ${args.user})`,
      sql`INSERT INTO chat_messages (conversation_id, role, content)
          VALUES (${args.conversationId}, 'assistant', ${args.assistant})`,
    ]);
  } catch (error) {
    console.error("[chat-db] 会話ログの保存に失敗しました:", error);
  }
}

export async function logEvent(args: {
  type: ChatEventType;
  conversationId: string | null;
  pagePath: string;
}): Promise<void> {
  if (!isChatDbConfigured()) return;
  try {
    await ensureSchema();
    const sql = db();
    if (args.type === "open") {
      await sql`INSERT INTO chat_opens (page_path) VALUES (${args.pagePath})`;
    } else if (args.conversationId) {
      const id = args.conversationId;
      if (args.type === "tel_click") {
        await sql`UPDATE chat_conversations SET tel_clicked = true WHERE id = ${id}`;
      } else if (args.type === "contact_click") {
        await sql`UPDATE chat_conversations SET link_clicked = true, contact_clicked = true WHERE id = ${id}`;
      } else {
        await sql`UPDATE chat_conversations SET link_clicked = true WHERE id = ${id}`;
      }
    }
  } catch (error) {
    console.error("[chat-db] イベントの保存に失敗しました:", error);
  }
}

// ─── Reads（管理画面） ───────────────────────────────────────────────────────

export type Summary = {
  opens: number;
  conversations: number;
  userMessages: number;
  linkShown: number;
  linkClicked: number;
  contactClicked: number;
  telShown: number;
  telClicked: number;
  aiUnchecked: number;
  aiNeedsReview: number;
  reviewPending: number;
  reviewed: number;
};

export async function getSummary(days: number): Promise<Summary> {
  await ensureSchema();
  const sql = db();
  const [c] = await sql`
    SELECT
      count(*)::int AS conversations,
      coalesce(sum(user_messages), 0)::int AS user_messages,
      count(*) FILTER (WHERE link_shown)::int AS link_shown,
      -- 入力欄下の常設リンクからのクリックも link_clicked に入るため、率の分子は「表示した会話」に限る。
      count(*) FILTER (WHERE link_clicked AND link_shown)::int AS link_clicked,
      count(*) FILTER (WHERE contact_clicked)::int AS contact_clicked,
      count(*) FILTER (WHERE tel_shown)::int AS tel_shown,
      count(*) FILTER (WHERE tel_clicked AND tel_shown)::int AS tel_clicked,
      count(*) FILTER (WHERE ai_verdict IS NULL)::int AS ai_unchecked,
      count(*) FILTER (WHERE ai_verdict = 'needs_review')::int AS ai_needs_review,
      count(*) FILTER (WHERE ai_verdict = 'needs_review' AND review_verdict IS NULL)::int AS review_pending,
      count(*) FILTER (WHERE review_verdict IS NOT NULL)::int AS reviewed
    FROM chat_conversations
    WHERE created_at >= now() - make_interval(days => ${days})`;
  const [o] = await sql`
    SELECT count(*)::int AS opens FROM chat_opens
    WHERE created_at >= now() - make_interval(days => ${days})`;
  return {
    opens: o.opens,
    conversations: c.conversations,
    userMessages: c.user_messages,
    linkShown: c.link_shown,
    linkClicked: c.link_clicked,
    contactClicked: c.contact_clicked,
    telShown: c.tel_shown,
    telClicked: c.tel_clicked,
    aiUnchecked: c.ai_unchecked,
    aiNeedsReview: c.ai_needs_review,
    reviewPending: c.review_pending,
    reviewed: c.reviewed,
  };
}

export type DailyPoint = { day: string; conversations: number };

/** 日本時間の日付ごとの会話数。会話が無い日も0で埋める。 */
export async function getDaily(days: number): Promise<DailyPoint[]> {
  await ensureSchema();
  const sql = db();
  const rows = await sql`
    SELECT to_char(d.day, 'YYYY-MM-DD') AS day, count(c.id)::int AS conversations
    FROM generate_series(
      (now() AT TIME ZONE 'Asia/Tokyo')::date - (${days}::int - 1),
      (now() AT TIME ZONE 'Asia/Tokyo')::date,
      interval '1 day'
    ) AS d(day)
    LEFT JOIN chat_conversations c
      ON (c.created_at AT TIME ZONE 'Asia/Tokyo')::date = d.day::date
    GROUP BY d.day ORDER BY d.day`;
  return rows as DailyPoint[];
}

export type ConversationFilter = "all" | "needs_review" | "unreviewed" | "reviewed" | "contact";

export async function listConversations(filter: ConversationFilter, limit = 100): Promise<ConversationRow[]> {
  await ensureSchema();
  const sql = db();
  const rows = await sql`
    SELECT c.*,
      (SELECT content FROM chat_messages m
        WHERE m.conversation_id = c.id AND m.role = 'user' ORDER BY m.id LIMIT 1) AS first_message
    FROM chat_conversations c
    WHERE ${filter} = 'all'
      OR (${filter} = 'needs_review' AND c.ai_verdict = 'needs_review' AND c.review_verdict IS NULL)
      OR (${filter} = 'unreviewed' AND c.review_verdict IS NULL)
      OR (${filter} = 'reviewed' AND c.review_verdict IS NOT NULL)
      OR (${filter} = 'contact' AND (c.contact_clicked OR c.tel_clicked))
    ORDER BY c.updated_at DESC
    LIMIT ${limit}`;
  return rows as ConversationRow[];
}

export async function getConversation(
  id: string
): Promise<{ conversation: ConversationRow; messages: MessageRow[] } | null> {
  await ensureSchema();
  const sql = db();
  const [conversation] = await sql`
    SELECT c.*, NULL::text AS first_message FROM chat_conversations c WHERE c.id = ${id}`;
  if (!conversation) return null;
  const messages = await sql`
    SELECT id, role, content, created_at FROM chat_messages
    WHERE conversation_id = ${id} ORDER BY id`;
  return { conversation: conversation as ConversationRow, messages: messages as MessageRow[] };
}

/** レビュー待ちの次の会話。保存後にそのまま次へ進めるために使う。 */
export async function getNextPendingId(excludeId: string): Promise<string | null> {
  const sql = db();
  const [row] = await sql`
    SELECT id FROM chat_conversations
    WHERE review_verdict IS NULL AND id <> ${excludeId}
    ORDER BY (ai_verdict = 'needs_review') DESC NULLS LAST, updated_at DESC
    LIMIT 1`;
  return row ? (row.id as string) : null;
}

// ─── Review writes（管理画面） ───────────────────────────────────────────────

export async function saveReview(id: string, verdict: ReviewVerdict, note: string): Promise<void> {
  const sql = db();
  await sql`UPDATE chat_conversations
    SET review_verdict = ${verdict}, review_note = ${note}, reviewed_at = now()
    WHERE id = ${id}`;
}

export async function listAiUnchecked(limit: number): Promise<{ id: string; messages: ChatMessage[] }[]> {
  await ensureSchema();
  const sql = db();
  const rows = await sql`
    SELECT c.id,
      (SELECT json_agg(json_build_object('role', m.role, 'content', m.content) ORDER BY m.id)
        FROM chat_messages m WHERE m.conversation_id = c.id) AS messages
    FROM chat_conversations c
    WHERE c.ai_verdict IS NULL
    ORDER BY c.updated_at DESC
    LIMIT ${limit}`;
  return rows.map((r) => ({ id: r.id as string, messages: (r.messages ?? []) as ChatMessage[] }));
}

export async function saveAiCheck(id: string, verdict: AiVerdict, reason: string): Promise<void> {
  const sql = db();
  await sql`UPDATE chat_conversations
    SET ai_verdict = ${verdict}, ai_reason = ${reason}, ai_checked_at = now()
    WHERE id = ${id}`;
}

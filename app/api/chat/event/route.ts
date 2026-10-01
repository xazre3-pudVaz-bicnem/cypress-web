import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isUuid, logEvent, type ChatEventType } from "@/lib/chat-db";

// 管理画面のKPI（やりとり発生率・リンククリック率など）を出すための計測用エンドポイント。
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TYPES: ReadonlySet<string> = new Set(["open", "link_click", "contact_click", "tel_click"]);

export async function POST(request: NextRequest) {
  if (process.env.CHATBOT_ENABLED !== "true") {
    return new NextResponse(null, { status: 204 });
  }

  let body: Record<string, unknown>;
  try {
    // sendBeacon は text/plain で届くため、Content-Typeに頼らず本文をJSONとして読む。
    body = JSON.parse(await request.text());
  } catch {
    return new NextResponse(null, { status: 400 });
  }
  if (typeof body !== "object" || body === null || typeof body.type !== "string" || !TYPES.has(body.type)) {
    return new NextResponse(null, { status: 400 });
  }

  await logEvent({
    type: body.type as ChatEventType,
    conversationId: isUuid(body.conversationId) ? body.conversationId : null,
    pagePath: typeof body.pagePath === "string" ? body.pagePath.slice(0, 300) : "",
  });
  return new NextResponse(null, { status: 204 });
}

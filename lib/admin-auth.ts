import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * 管理画面のログイン。利用者は社内の数名なので、共有パスワード（ADMIN_PASSWORD）と
 * 署名付きCookieだけの最小構成にしている。パスワードを変えると既存のセッションはすべて無効になる。
 */

const COOKIE_NAME = "cypress_admin";
const SESSION_DAYS = 7;

function sign(expires: number, password: string): string {
  return createHmac("sha256", password).update(`admin:${expires}`).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

export function isAdminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

export function checkPassword(input: string): boolean {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;
  // 長さの違いで比較時間が変わらないよう、ハッシュ同士で比べる。
  const hash = (v: string) => createHmac("sha256", "cypress-admin-login").update(v).digest("hex");
  return safeEqual(hash(input), hash(password));
}

export async function createSession(): Promise<void> {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return;
  const expires = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  (await cookies()).set(COOKIE_NAME, `${expires}.${sign(expires, password)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    expires: new Date(expires),
  });
}

export async function destroySession(): Promise<void> {
  (await cookies()).delete({ name: COOKIE_NAME, path: "/admin" });
}

export async function isAdmin(): Promise<boolean> {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;
  const value = (await cookies()).get(COOKIE_NAME)?.value;
  if (!value) return false;
  const [rawExpires, signature] = value.split(".");
  const expires = Number(rawExpires);
  if (!signature || !Number.isFinite(expires) || expires < Date.now()) return false;
  return safeEqual(signature, sign(expires, password));
}

/** 管理画面のすべてのページとServer Actionの先頭で呼ぶ。レイアウトだけに任せない。 */
export async function requireAdmin(): Promise<void> {
  if (!(await isAdmin())) redirect("/admin/login");
}

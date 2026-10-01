"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "@/app/admin/actions";

const initialState: LoginState = { error: null };

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="mt-6 space-y-4">
      <div>
        <label htmlFor="password" className="block text-[13px] font-medium text-[#1a2332]">
          パスワード
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          autoComplete="current-password"
          className="mt-1.5 h-11 w-full rounded-lg border border-[#E8E4DC] px-3 text-[16px] focus:border-[#0d1b2a] focus:outline-none"
        />
      </div>
      {state.error && (
        <p role="alert" className="text-[13px] leading-relaxed text-[#B91C1C]">
          {state.error}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="h-11 w-full rounded-lg bg-[#0d1b2a] text-[14px] font-medium text-white transition-opacity disabled:opacity-50"
      >
        {pending ? "確認中…" : "ログイン"}
      </button>
    </form>
  );
}

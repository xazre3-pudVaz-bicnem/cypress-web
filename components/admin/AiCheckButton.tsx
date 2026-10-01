"use client";

import { useActionState } from "react";
import { runAiCheckAction, type AiCheckState } from "@/app/admin/actions";

const initialState: AiCheckState = { message: null };

export default function AiCheckButton({ disabled }: { disabled: boolean }) {
  const [state, formAction, pending] = useActionState(runAiCheckAction, initialState);

  return (
    <form action={formAction}>
      <button
        type="submit"
        disabled={disabled || pending}
        className="h-10 rounded-lg bg-[#0d1b2a] px-4 text-[13px] font-medium text-white transition-opacity disabled:opacity-40"
      >
        {pending ? "チェック中…" : "AIチェックを実行"}
      </button>
      {state.message && (
        <p role="status" className="mt-3 text-[13px] leading-relaxed text-[#1a2332]">
          {state.message}
        </p>
      )}
    </form>
  );
}

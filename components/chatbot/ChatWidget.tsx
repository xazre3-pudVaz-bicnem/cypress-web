"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CHAT_GREETING,
  CHAT_MAX_USER_CHARS,
  CHAT_QUICK_CHOICES,
  type ChatMessage,
} from "@/lib/chatbot";
import { CONTACT_EMAIL } from "@/lib/contact";

const STORAGE_KEY = "cypress-chat-v1";
const BUBBLE_DISMISSED_KEY = "cypress-chat-bubble-dismissed";
/** 吹き出しを出すまでの待ち時間。ファーストビューを読む時間を確保する。 */
const BUBBLE_DELAY_MS = 8000;
const GENERIC_ERROR = `うまく接続できませんでした。少し時間をおいてお試しいただくか、${CONTACT_EMAIL} までご連絡ください。`;

// sessionStorageはプライベートブラウズ等で例外を投げるため、失敗しても動作を続ける。
function readSession<T>(key: string): T | null {
  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function writeSession(key: string, value: unknown) {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    // 保存できなくても会話は続けられる
  }
}

const LINK_PATTERN = /\[([^\]\n]+)\]\((\/[^)\s]*)\)/g;

/** 回答中の [表示名](/path) だけをサイト内リンクにする。外部URLはリンク化しない。 */
function MessageText({ text, onNavigate }: { text: string; onNavigate: () => void }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK_PATTERN)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    parts.push(
      <Link
        key={index}
        href={match[2]}
        onClick={onNavigate}
        className="font-medium text-[#0d1b2a] underline decoration-[#D1C9BE] decoration-2 underline-offset-4 hover:text-[#6B7280]"
      >
        {match[1]}
      </Link>
    );
    last = index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

export default function ChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const restoredRef = useRef(false);

  // 復元（初回に開いたとき）より前に空の履歴で上書きしないよう、復元後だけ保存する。
  useEffect(() => {
    if (restoredRef.current && !pending) writeSession(STORAGE_KEY, messages);
  }, [messages, pending]);

  // フォーム入力の邪魔をしないよう、お問い合わせページでは吹き出しを出さない。
  useEffect(() => {
    if (open || pathname.startsWith("/contact")) return;
    if (readSession<boolean>(BUBBLE_DISMISSED_KEY)) return;
    const timer = window.setTimeout(() => setShowBubble(true), BUBBLE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [open, pathname]);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, open, error]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const dismissBubble = useCallback(() => {
    setShowBubble(false);
    writeSession(BUBBLE_DISMISSED_KEY, true);
  }, []);

  const openChat = useCallback(() => {
    dismissBubble();
    // リロードをまたいで会話を引き継ぐ。
    if (!restoredRef.current) {
      restoredRef.current = true;
      const saved = readSession<ChatMessage[]>(STORAGE_KEY);
      if (Array.isArray(saved)) setMessages(saved);
    }
    setOpen(true);
  }, [dismissBubble]);

  const send = useCallback(
    async (text: string) => {
      const content = text.trim();
      if (!content || pending) return;

      const history: ChatMessage[] = [...messages, { role: "user", content }];
      setMessages([...history, { role: "assistant", content: "" }]);
      setInput("");
      setError(null);
      setPending(true);

      const controller = new AbortController();
      abortRef.current = controller;
      let reply = "";
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history }),
          signal: controller.signal,
        });
        if (!res.ok || !res.body) {
          const data = (await res.json().catch(() => null)) as { error?: string } | null;
          throw new Error(data?.error || GENERIC_ERROR);
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          reply += decoder.decode(value, { stream: true });
          setMessages([...history, { role: "assistant", content: reply }]);
        }
        if (!reply.trim()) throw new Error(GENERIC_ERROR);
      } catch (e) {
        if (controller.signal.aborted) return;
        // 途中まで届いた回答は残し、空のままなら吹き出しごと取り除く。
        setMessages(reply.trim() ? [...history, { role: "assistant", content: reply }] : history);
        setError(e instanceof Error && e.message !== "Failed to fetch" ? e.message : GENERIC_ERROR);
      } finally {
        setPending(false);
      }
    },
    [messages, pending]
  );

  const reset = useCallback(() => {
    abortRef.current?.abort();
    setMessages([]);
    setError(null);
    setPending(false);
    inputRef.current?.focus();
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void send(input);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // 日本語変換の確定Enterでは送信しない。
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      void send(input);
    }
  };

  const hasConversation = messages.length > 0;
  const lastMessage = messages[messages.length - 1];
  const waitingFirstToken = pending && lastMessage?.role === "assistant" && !lastMessage.content;

  return (
    <div className="print:hidden">
      {/* ── Chat window ── */}
      <div
        role="dialog"
        aria-label="AIアシスタントに相談"
        aria-hidden={!open}
        inert={!open}
        className={`fixed z-[60] flex flex-col overflow-hidden bg-white shadow-[0_24px_64px_rgba(13,27,42,0.22)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] inset-x-0 bottom-0 h-[85dvh] rounded-t-2xl sm:inset-x-auto sm:right-6 sm:bottom-24 sm:h-[min(600px,calc(100dvh-8rem))] sm:w-[380px] sm:rounded-2xl ${
          open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
        }`}
      >
        <div className="flex items-center justify-between bg-[#0d1b2a] px-5 py-4 text-white">
          <div>
            <p className="label-en text-[10px] text-[#D1C9BE]">AI Assistant</p>
            <p className="text-[15px] font-medium leading-tight text-white">サイプレスに相談する</p>
          </div>
          <div className="flex items-center gap-1">
            {hasConversation && (
              <button
                type="button"
                onClick={reset}
                className="rounded px-2 py-1 text-xs text-white/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                最初から
              </button>
            )}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="チャットを閉じる"
              className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* data-lenis-prevent: Lenisのスムーススクロールにホイール操作を奪われないようにする */}
        <div
          ref={bodyRef}
          data-lenis-prevent
          aria-live="polite"
          className="flex-1 space-y-3 overflow-y-auto overscroll-contain bg-[#F9F8F5] px-4 py-5"
        >
          <p className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-[14px] leading-[1.8] text-[#1a2332] shadow-sm">
            {CHAT_GREETING}
          </p>

          {!hasConversation && (
            <div className="flex flex-col items-start gap-2 pt-1">
              {CHAT_QUICK_CHOICES.map((choice) => (
                <button
                  key={choice}
                  type="button"
                  onClick={() => void send(choice)}
                  className="rounded-full border border-[#E8E4DC] bg-white px-4 py-2 text-left text-[13px] leading-snug text-[#0d1b2a] transition-colors hover:border-[#0d1b2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0d1b2a]"
                >
                  {choice}
                </button>
              ))}
            </div>
          )}

          {messages.map((message, i) =>
            message.role === "user" ? (
              <p
                key={i}
                className="ml-auto max-w-[88%] whitespace-pre-wrap break-words rounded-2xl rounded-tr-sm bg-[#0d1b2a] px-4 py-3 text-[14px] leading-[1.8] text-white"
              >
                {message.content}
              </p>
            ) : message.content ? (
              <p
                key={i}
                className="max-w-[88%] whitespace-pre-wrap break-words rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-[14px] leading-[1.8] text-[#1a2332] shadow-sm"
              >
                <MessageText text={message.content} onNavigate={() => setOpen(false)} />
              </p>
            ) : null
          )}

          {waitingFirstToken && (
            <p
              aria-label="回答を作成しています"
              className="flex w-fit items-center gap-1.5 rounded-2xl rounded-tl-sm bg-white px-4 py-4 shadow-sm"
            >
              {[0, 150, 300].map((delay) => (
                <span
                  key={delay}
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#9CA3AF] motion-reduce:animate-none"
                  style={{ animationDelay: `${delay}ms` }}
                />
              ))}
            </p>
          )}

          {error && (
            <p role="alert" className="rounded-lg border border-[#E8E4DC] bg-white px-4 py-3 text-[13px] leading-relaxed text-[#B91C1C]">
              {error}
            </p>
          )}
        </div>

        <div className="border-t border-[#E8E4DC] bg-white px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
          <form onSubmit={onSubmit} className="flex items-end gap-2">
            <label htmlFor="chat-input" className="sr-only">
              メッセージ
            </label>
            <textarea
              id="chat-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              rows={1}
              maxLength={CHAT_MAX_USER_CHARS}
              placeholder="ご相談内容を入力"
              className="max-h-28 min-h-[44px] flex-1 resize-none rounded-xl border border-[#E8E4DC] px-3 py-2.5 text-[16px] leading-snug text-[#1a2332] placeholder:text-[#9CA3AF] focus:border-[#0d1b2a] focus:outline-none sm:text-[14px]"
            />
            <button
              type="submit"
              disabled={pending || !input.trim()}
              aria-label="送信"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0d1b2a] text-white transition-opacity disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d1b2a]"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 9h11M10 4.5L14.5 9 10 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
          <div className="mt-2 flex items-center justify-between gap-3">
            <p className="text-[10px] leading-snug text-[#9CA3AF]">
              AIによる自動応答です。個人情報は入力しないでください。
            </p>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="shrink-0 text-[12px] font-medium text-[#0d1b2a] underline decoration-[#D1C9BE] decoration-2 underline-offset-4"
            >
              無料相談フォーム
            </Link>
          </div>
        </div>
      </div>

      {/* ── Proactive bubble ── */}
      {showBubble && !open && (
        <div className="fixed bottom-24 right-4 z-[60] flex max-w-[260px] items-start gap-1 rounded-2xl rounded-br-sm bg-white py-3 pl-4 pr-2 shadow-[0_12px_32px_rgba(13,27,42,0.18)] sm:right-6">
          <button type="button" onClick={openChat} className="text-left text-[13px] leading-relaxed text-[#0d1b2a]">
            Web集客のお悩み、AIがその場でお答えします。
          </button>
          <button
            type="button"
            onClick={dismissBubble}
            aria-label="案内を閉じる"
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#9CA3AF] hover:text-[#0d1b2a]"
          >
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}

      {/* ── Launcher ── */}
      <button
        type="button"
        onClick={() => (open ? setOpen(false) : openChat())}
        aria-expanded={open}
        aria-label={open ? "チャットを閉じる" : "AIアシスタントに相談する"}
        className={`fixed bottom-5 right-4 z-[60] h-14 w-14 items-center justify-center rounded-full bg-[#0d1b2a] text-white shadow-[0_12px_32px_rgba(13,27,42,0.35)] transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d1b2a] sm:right-6 ${
          open ? "hidden sm:flex" : "flex"
        }`}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 5.5A1.5 1.5 0 015.5 4h13A1.5 1.5 0 0120 5.5v9a1.5 1.5 0 01-1.5 1.5H10l-4.5 4v-4h0A1.5 1.5 0 014 14.5v-9z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path d="M8 9h8M8 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  );
}

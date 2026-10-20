"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  INQUIRY_TYPES,
  TRAINING_TYPES,
  isInquiryType,
} from "@/lib/contact";

type FormState = "idle" | "sending" | "success" | "error";

/**
 * initialType は Server Component 側で ?type= を読み取って渡す。
 * useSearchParams を使うとフォーム全体がクライアント描画になり、
 * 初回表示でローディングが挟まるため、サーバーで解決する。
 */
export default function ContactForm({ initialType }: { initialType?: string }) {
  const defaultType = initialType && isInquiryType(initialType) ? initialType : "general";

  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    type: defaultType as string,
    message: "",
  });
  const [shareConsent, setShareConsent] = useState(false);
  // ハニーポット。CSSで隠し、人間は入力しない前提のbot判定用フィールド。
  const [website, setWebsite] = useState("");

  const isTrainingInquiry = TRAINING_TYPES.has(form.type);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          // 研修関連の種別を選んだ場合のみ、提携研修会社への情報共有の同意を送る。
          shareConsent: isTrainingInquiry && shareConsent,
          website,
        }),
      });

      const result = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !result.ok) {
        setErrorMessage(
          result.error ??
            `送信に失敗しました。お手数ですが ${CONTACT_EMAIL} まで直接ご連絡ください。`
        );
        setState("error");
        return;
      }

      setState("success");
    } catch {
      setErrorMessage(
        `通信エラーが発生しました。電波状況をご確認のうえ再度お試しいただくか、${CONTACT_EMAIL} まで直接ご連絡ください。`
      );
      setState("error");
    }
  };

  const inputClass =
    "block w-full rounded-xl border border-line-strong bg-white px-4 py-3.5 text-[16px] text-ink placeholder:text-subtle transition-[border-color,box-shadow] focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15";

  if (state === "success") {
    return (
      <div className="py-14 text-center" role="status">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M4 11l5 5L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-[22px] font-bold">送信が完了しました</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          お問い合わせいただきありがとうございます。
          <br />
          担当者より2営業日以内にご連絡いたします。
        </p>
        <p className="mt-5 text-[13px] leading-relaxed text-subtle">
          ご入力のメールアドレス宛に自動返信メールをお送りしました。
          <br />
          届かない場合は迷惑メールフォルダをご確認いただくか、
          <a href={CONTACT_MAILTO} className="text-ink underline underline-offset-4">
            {CONTACT_EMAIL}
          </a>
          までご連絡ください。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* ハニーポット。スクリーンリーダーからも外し、botのみが埋める想定。 */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0 }}>
        <label htmlFor="website">ウェブサイト（入力しないでください）</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field id="contact-name" label="お名前" required>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="山田 太郎"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </Field>
        <Field id="contact-company" label="会社名">
          <input
            id="contact-company"
            type="text"
            name="company"
            autoComplete="organization"
            placeholder="株式会社サンプル"
            value={form.company}
            onChange={handleChange}
            className={inputClass}
          />
        </Field>
      </div>

      <Field id="contact-email" label="メールアドレス" required>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="info@example.com"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </Field>

      <Field id="contact-type" label="お問い合わせ種別" required>
        <div className="relative">
          <select
            id="contact-type"
            name="type"
            value={form.type}
            onChange={handleChange}
            className={`${inputClass} appearance-none pr-10`}
          >
            {INQUIRY_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 12 12"
            className="pointer-events-none absolute right-4 top-1/2 h-3 w-3 -translate-y-1/2 text-muted"
            aria-hidden="true"
          >
            <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </Field>

      <Field id="contact-message" label="お問い合わせ内容" required>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          placeholder="ご相談内容をご入力ください（例：Googleマップで上位に出したい、ホームページを作り直したい など）"
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-y`}
        />
      </Field>

      {isTrainingInquiry && (
        <div className="rounded-2xl border border-line bg-surface p-5">
          <p className="mb-3 text-[14px] font-bold text-ink">提携研修会社への情報共有について</p>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={shareConsent}
              onChange={(e) => setShareConsent(e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 accent-[#0b78c2]"
            />
            <span className="text-[13.5px] leading-[1.9] text-ink-2">
              お問い合わせ内容に応じて、提携する研修会社へ会社名、ご担当者名、連絡先、お問い合わせ内容を共有する場合があります。内容を確認し、同意します。
            </span>
          </label>
          <p className="mt-3 border-t border-line pt-3 text-[12.5px] leading-[1.85] text-muted">
            同意いただかない場合、提携研修会社へ情報を共有することはありません。その場合も、株式会社サイプレスからのご返信は行います。詳細は
            <Link href="/privacy-policy" className="text-ink underline underline-offset-4">
              プライバシーポリシー
            </Link>
            をご確認ください。
          </p>
        </div>
      )}

      <p className="text-[12.5px] leading-relaxed text-muted">
        送信いただいた個人情報は、お問い合わせへの対応のみに使用します。ご本人の同意なく第三者へ提供することはありません。フォームがうまく動作しない場合は
        <a href={CONTACT_MAILTO} className="text-ink underline underline-offset-4">
          {CONTACT_EMAIL}
        </a>
        まで直接ご連絡ください。
      </p>

      {state === "error" && errorMessage && (
        <div role="alert" className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] p-4 text-[13.5px] leading-[1.9] text-[#B91C1C]">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-accent text-[15px] font-semibold tracking-[0.04em] text-white shadow-[0_10px_30px_-12px_rgba(11,120,194,0.7)] transition-colors hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "sending" ? (
          <>
            <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="28" strokeDashoffset="10" />
            </svg>
            送信中...
          </>
        ) : state === "error" ? (
          "再送信する"
        ) : (
          "この内容で送信する"
        )}
      </button>
    </form>
  );
}

function Field({ id, label, required = false, children }: { id: string; label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-center gap-2 text-[14px] font-bold text-ink">
        {label}
        {required ? (
          <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent">必須</span>
        ) : (
          <span className="rounded-full bg-surface px-2 py-0.5 text-[11px] font-semibold text-muted">任意</span>
        )}
      </label>
      {children}
    </div>
  );
}

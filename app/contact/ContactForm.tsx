"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

const INQUIRY_TYPES = [
  { value: "general", label: "サービスに関するご相談" },
  { value: "recruit", label: "採用に関するお問い合わせ" },
  { value: "other", label: "その他" },
];

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    type: "general",
    message: "",
  });

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
    /*
      TODO: Integrate email service (e.g. Resend, SendGrid, Formspree).
      Example with fetch:
      const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) });
    */
    await new Promise((r) => setTimeout(r, 900));
    setState("success");
  };

  const inputClass =
    "w-full px-4 py-3 text-[#0F172A] text-sm placeholder-[#9CA3AF] focus:outline-none transition-all bg-white";
  const inputStyle = {
    border: "1px solid #D1C9BE",
  };
  const inputFocusStyle = {
    border: "1px solid #0F172A",
  };

  if (state === "success") {
    return (
      <div className="py-16 text-center">
        <div
          className="w-12 h-12 flex items-center justify-center mx-auto mb-6"
          style={{ border: "1px solid #0F172A" }}
        >
          <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
            <path
              d="M4 11l5 5L18 6"
              stroke="#0F172A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-bold text-[#0F172A] text-xl mb-3">
          送信が完了しました
        </h3>
        <p className="text-[#6B7280] text-sm leading-relaxed">
          お問い合わせいただきありがとうございます。
          <br />
          担当者より2営業日以内にご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[#0F172A] text-sm font-medium mb-2">
            お名前
            <span className="text-[#EF4444] ml-1">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="山田 太郎"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            style={inputStyle}
            onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
          />
        </div>
        <div>
          <label className="block text-[#0F172A] text-sm font-medium mb-2">
            会社名
          </label>
          <input
            type="text"
            name="company"
            placeholder="株式会社サンプル"
            value={form.company}
            onChange={handleChange}
            className={inputClass}
            style={inputStyle}
            onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
          />
        </div>
      </div>

      <div>
        <label className="block text-[#0F172A] text-sm font-medium mb-2">
          メールアドレス
          <span className="text-[#EF4444] ml-1">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="info@example.com"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          style={inputStyle}
          onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
          onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
        />
      </div>

      <div>
        <label className="block text-[#0F172A] text-sm font-medium mb-2">
          お問い合わせ種別
          <span className="text-[#EF4444] ml-1">*</span>
        </label>
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className={inputClass}
          style={inputStyle}
          onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
          onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
        >
          {INQUIRY_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-[#0F172A] text-sm font-medium mb-2">
          お問い合わせ内容
          <span className="text-[#EF4444] ml-1">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="ご相談内容をご入力ください"
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          style={inputStyle}
          onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
          onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
        />
      </div>

      <p className="text-[#9CA3AF] text-xs leading-relaxed">
        送信いただいた個人情報は、お問い合わせへの対応のみに使用し、
        第三者への提供は行いません。
      </p>

      <button
        type="submit"
        disabled={state === "sending"}
        className="w-full flex items-center justify-center gap-2 py-4 font-medium text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
        style={{
          border: "1px solid #0F172A",
          color: "#0F172A",
          background: "transparent",
        }}
        onMouseEnter={(e) => {
          if (state !== "sending") {
            e.currentTarget.style.background = "#0F172A";
            e.currentTarget.style.color = "#FFFFFF";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "#0F172A";
        }}
      >
        {state === "sending" ? (
          <>
            <svg
              className="animate-spin"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle
                cx="8"
                cy="8"
                r="6"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="28"
                strokeDashoffset="10"
              />
            </svg>
            送信中...
          </>
        ) : (
          "送信する"
        )}
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

type FormState = "idle" | "sending" | "success" | "error";

const INQUIRY_TYPES = [
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
];

const VALID_TYPES = new Set(INQUIRY_TYPES.map((t) => t.value));

/**
 * 研修関連の種別を選んだ場合のみ、提携研修会社への情報共有の同意欄を表示する。
 * 同意がない場合、提携研修会社へ情報を共有しない運用とする（個人情報保護法上の第三者提供）。
 */
const TRAINING_TYPES = new Set([
  "reskilling",
  "ai-dx-training",
  "chatgpt-training",
  "web-marketing-training",
  "subsidy-training",
  "training-referral",
  "partner-training",
]);

/**
 * initialType は Server Component 側で ?type= を読み取って渡す。
 * useSearchParams を使うとフォーム全体がクライアント描画になり、
 * 初回表示でローディングが挟まるため、サーバーで解決する。
 */
export default function ContactForm({ initialType }: { initialType?: string }) {
  const defaultType = initialType && VALID_TYPES.has(initialType) ? initialType : "general";

  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    type: defaultType,
    message: "",
  });
  const [shareConsent, setShareConsent] = useState(false);

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
    /*
      TODO: Integrate email service (e.g. Resend, SendGrid, Formspree).
      送信時は shareConsent が false の場合、提携研修会社へ情報を共有しないこと。
      const payload = { ...form, shareConsent: isTrainingInquiry && shareConsent };
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

      {isTrainingInquiry && (
        <div className="p-5" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}>
          <p className="text-[#0F172A] text-sm font-medium mb-3">
            提携研修会社への情報共有について
          </p>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={shareConsent}
              onChange={(e) => setShareConsent(e.target.checked)}
              className="mt-1 shrink-0"
              style={{ width: "16px", height: "16px", accentColor: "#0F172A" }}
            />
            <span className="text-[#374151] text-[13px] leading-[1.9]">
              お問い合わせ内容に応じて、提携する研修会社へ会社名、ご担当者名、連絡先、お問い合わせ内容を共有する場合があります。内容を確認し、同意します。
            </span>
          </label>
          <p className="text-[#9CA3AF] text-xs leading-[1.85] mt-3 pt-3" style={{ borderTop: "1px solid #E8E4DC" }}>
            同意いただかない場合、提携研修会社へ情報を共有することはありません。その場合も、株式会社サイプレスからのご返信は行います。詳細は
            <Link href="/privacy-policy" className="underline" style={{ color: "#374151" }}>
              プライバシーポリシー
            </Link>
            をご確認ください。
          </p>
        </div>
      )}

      <p className="text-[#9CA3AF] text-xs leading-relaxed">
        送信いただいた個人情報は、お問い合わせへの対応のみに使用します。ご本人の同意なく第三者へ提供することはありません。
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

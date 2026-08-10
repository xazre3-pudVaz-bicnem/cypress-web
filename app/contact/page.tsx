import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  CONTACT_EMAIL,
  CONTACT_HOURS,
  CONTACT_MAILTO,
  CONTACT_REPLY_TIME,
} from "@/lib/contact";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ｜株式会社サイプレス",
  description:
    "株式会社サイプレスへのお問い合わせフォーム。MEO対策・SEO対策・AIO対策・AI活用支援のご相談をお受けしています。2営業日以内に返信します。",
  keywords: ["お問い合わせ", "MEO相談", "SEO相談", "AI活用相談", "株式会社サイプレス"],
  alternates: { canonical: "https://www.cypress-all.co.jp/contact" },
  robots: { index: false, follow: true },
};

const INFO: { label: string; value: string; href?: string }[] = [
  { label: "メールアドレス", value: CONTACT_EMAIL, href: CONTACT_MAILTO },
  { label: "所在地", value: "東京都葛飾区白鳥4-6-1-623" },
  { label: "対応時間", value: CONTACT_HOURS },
  { label: "返信目安", value: CONTACT_REPLY_TIME },
];

const FAQS = [
  {
    q: "相談は有料ですか？",
    a: "いいえ、初回のご相談は無料です。費用が発生するのはサービスをご契約いただいた場合のみです。",
  },
  {
    q: "相談後、必ず契約しなければなりませんか？",
    a: "いいえ、ご提案後にご納得いただけなければ、遠慮なくお断りください。押し売りや強引な営業は一切行いません。",
  },
  {
    q: "返信はどのくらいかかりますか？",
    a: "通常2営業日以内にご連絡いたします。お急ぎの場合はその旨をお問い合わせ内容にご記載ください。",
  },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // 研修ページのCTAから /contact?type=xxx で遷移した場合に問い合わせ種別を自動選択する。
  const sp = await searchParams;
  const raw = sp.type;
  const typeParam = typeof raw === "string" ? raw : undefined;

  return (
    <>
      <Header />
      <main style={{ background: "#FFFFFF", minHeight: "100vh" }}>
        {/* Hero */}
        <section className="pt-32 pb-16" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] text-[#6B7280] mb-8">
              <Link href="/" className="hover:text-[#0F172A] transition-colors">
                ホーム
              </Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#0F172A" }}>お問い合わせ</span>
            </nav>
            <h1
              className="font-black text-[#0F172A] leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
            >
              お問い合わせ
            </h1>
            <p className="text-[#374151] text-base leading-relaxed max-w-xl">
              お問い合わせ・ご相談はこちらよりお気軽にどうぞ。2営業日以内に返信いたします。
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-24 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10">
            {/* Form */}
            <ScrollReveal>
              <div
                className="p-8"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E8E4DC",
                }}
              >
                <h2 className="font-bold text-[#0F172A] text-lg mb-8">
                  お問い合わせフォーム
                </h2>
                <ContactForm initialType={typeParam} />
              </div>
            </ScrollReveal>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Handshake image — trust visual */}
              <div className="relative overflow-hidden" style={{ height: "240px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_11_20.jpg"
                  alt="信頼のパートナーシップを象徴するビジネス握手"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
              </div>

              {/* Contact Info */}
              <ScrollReveal delay={0.1}>
                <div
                  className="p-6"
                  style={{
                    background: "#F9F8F5",
                    border: "1px solid #E8E4DC",
                  }}
                >
                  <h3
                    className="font-bold text-[#0F172A] text-sm mb-5 pb-4"
                    style={{ borderBottom: "1px solid #E8E4DC" }}
                  >
                    連絡先情報
                  </h3>
                  <div className="space-y-4">
                    {INFO.map((item) => (
                      <div key={item.label}>
                        <p className="text-[#9CA3AF] text-[10px] tracking-wider uppercase mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm underline underline-offset-4 transition-colors hover:text-[#0F172A]"
                            style={{ color: "#0F172A", fontWeight: 500 }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[#374151] text-sm">{item.value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                  <a
                    href={CONTACT_MAILTO}
                    className="mt-5 flex items-center justify-center gap-2 w-full py-3 text-[13px] font-medium transition-all hover:bg-[#0F172A] hover:text-white"
                    style={{ border: "1px solid #0F172A", color: "#0F172A" }}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    メールで問い合わせる
                  </a>
                </div>
              </ScrollReveal>

              {/* Inquiry Types */}
              <ScrollReveal delay={0.15}>
                <div
                  className="p-6"
                  style={{
                    background: "#F9F8F5",
                    border: "1px solid #E8E4DC",
                  }}
                >
                  <h3
                    className="font-bold text-[#0F172A] text-sm mb-4 pb-4"
                    style={{ borderBottom: "1px solid #E8E4DC" }}
                  >
                    お問い合わせ種別
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <p className="text-[#374151] text-xs leading-relaxed font-medium mb-0.5">
                        サービスに関するご相談
                      </p>
                      <p className="text-[#6B7280] text-xs leading-relaxed">
                        MEO・SEO・AIO・制作・SNS・AI支援のご相談
                      </p>
                    </li>
                    <li>
                      <p className="text-[#374151] text-xs leading-relaxed font-medium mb-0.5">
                        研修導入・研修会社の紹介
                      </p>
                      <p className="text-[#6B7280] text-xs leading-relaxed">
                        リスキリング・AI・DX・Webマーケティング研修のご相談。実績ある提携研修会社をご紹介します
                      </p>
                    </li>
                    <li>
                      <p className="text-[#374151] text-xs leading-relaxed font-medium mb-0.5">
                        採用に関するお問い合わせ
                      </p>
                      <p className="text-[#6B7280] text-xs leading-relaxed">
                        求人・採用条件・選考プロセスのご質問
                      </p>
                    </li>
                    <li>
                      <p className="text-[#374151] text-xs leading-relaxed font-medium mb-0.5">
                        その他
                      </p>
                      <p className="text-[#6B7280] text-xs leading-relaxed">
                        上記以外の一般的なお問い合わせ
                      </p>
                    </li>
                  </ul>
                  <p className="text-[#9CA3AF] text-[11px] leading-[1.85] mt-4 pt-4" style={{ borderTop: "1px solid #E8E4DC" }}>
                    株式会社サイプレスは研修会社への紹介窓口です。助成金の申請代行は行っておらず、採択・支給を保証するものではありません。
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-20"
          style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2
              className="font-bold text-[#0F172A] text-lg mb-10 pb-6"
              style={{ borderBottom: "1px solid #E8E4DC" }}
            >
              よくある質問
            </h2>
            <div className="space-y-0">
              {FAQS.map((faq, i) => (
                <div
                  key={faq.q}
                  className="py-6"
                  style={{
                    borderBottom: i < FAQS.length - 1 ? "1px solid #E8E4DC" : "none",
                  }}
                >
                  <p className="font-medium text-[#0F172A] text-sm mb-3">
                    Q. {faq.q}
                  </p>
                  <p className="text-[#374151] text-sm leading-relaxed">
                    A. {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

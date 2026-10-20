import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import PageHero from "@/components/ui/PageHero";
import { PhoneIcon } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { COMPANY, COMPANY_ADDRESS_WITH_POSTAL } from "@/lib/company";
import {
  CONTACT_EMAIL,
  CONTACT_HOURS,
  CONTACT_MAILTO,
  CONTACT_REPLY_TIME,
  CONTACT_TEL,
  CONTACT_TEL_HREF,
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

const FLOW = [
  { title: "フォームを送信", body: "1分ほどで入力できます。" },
  { title: `${CONTACT_REPLY_TIME}にご連絡`, body: "担当者からメールでご連絡します。" },
  { title: "無料相談", body: "オンラインまたは訪問で、現状を伺います。" },
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
      <main>
        <PageHero
          crumbs={[{ name: "ホーム", href: "/" }, { name: "お問い合わせ" }]}
          eyebrow="Contact"
          title="お問い合わせ"
          catchCopy="ご相談は無料です。お気軽にどうぞ。"
          lead={`フォーム送信後、${CONTACT_REPLY_TIME}にご連絡します。お急ぎの方はお電話ください。`}
        >
          <div className="flex flex-wrap gap-3">
            <a
              href={CONTACT_TEL_HREF}
              className="inline-flex h-12 items-center gap-2.5 rounded-full bg-ink px-6 text-[15px] font-semibold text-white transition-colors hover:bg-navy-800"
            >
              <PhoneIcon className="h-4 w-4 text-cyan" />
              <span className="font-en tracking-[0.02em]">{CONTACT_TEL}</span>
            </a>
            <a
              href={CONTACT_MAILTO}
              className="inline-flex h-12 items-center rounded-full px-6 text-[14px] font-semibold text-ink ring-1 ring-inset ring-line-strong transition-colors hover:ring-ink"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <p className="mt-3 text-[13px] text-muted">電話受付 {CONTACT_HOURS}</p>
        </PageHero>

        <section className="bg-white pb-20 md:pb-28">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10">
              <div id="form" className="rounded-[28px] border border-line bg-white p-6 shadow-[0_30px_60px_-40px_rgba(6,20,42,0.35)] sm:p-10">
                <h2 className="text-[22px] font-bold">お問い合わせフォーム</h2>
                <p className="mb-8 mt-2 text-[14px] text-muted">必須の4項目だけで送信できます。</p>
                <ContactForm initialType={typeParam} />
              </div>

              <aside className="space-y-5">
                <div className="rounded-[28px] bg-navy-900 p-7 text-white">
                  <p className="eyebrow mb-5 text-[11px] text-cyan">Flow</p>
                  <h2 className="text-[18px] font-bold !text-white">ご相談までの流れ</h2>
                  <ol className="mt-6 space-y-5">
                    {FLOW.map((f, i) => (
                      <li key={f.title} className="flex gap-4">
                        <span className="t-num flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-[13px] font-semibold text-cyan">
                          {i + 1}
                        </span>
                        <span>
                          <span className="block text-[15px] font-bold">{f.title}</span>
                          <span className="mt-0.5 block text-[13px] text-white/60">{f.body}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-[28px] border border-line bg-surface p-7">
                  <h2 className="text-[16px] font-bold">連絡先</h2>
                  <dl className="mt-4 space-y-3 text-[14px]">
                    <div>
                      <dt className="text-[12px] font-bold text-muted">電話</dt>
                      <dd>
                        <a href={CONTACT_TEL_HREF} className="font-en font-semibold text-ink hover:text-accent">
                          {CONTACT_TEL}
                        </a>
                        <span className="ml-2 text-[12.5px] text-muted">{CONTACT_HOURS}</span>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[12px] font-bold text-muted">メール</dt>
                      <dd>
                        <a href={CONTACT_MAILTO} className="text-ink underline-offset-4 hover:text-accent hover:underline">
                          {CONTACT_EMAIL}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[12px] font-bold text-muted">所在地</dt>
                      <dd className="leading-relaxed text-ink">
                        {COMPANY_ADDRESS_WITH_POSTAL}
                        <span className="block text-[12.5px] text-muted">最寄り駅：{COMPANY.nearestStation}</span>
                      </dd>
                    </div>
                  </dl>
                  <p className="mt-5 border-t border-line pt-4 text-[12px] leading-[1.85] text-muted">
                    株式会社サイプレスは研修会社への紹介窓口です。助成金の申請代行は行っておらず、採択・支給を保証するものではありません。
                  </p>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        <FaqSection items={FAQS} heading="お問い合わせについて" bgColor="#F4F6FA" />
      </main>
      <Footer />
    </>
  );
}

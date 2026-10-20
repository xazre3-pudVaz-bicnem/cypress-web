import { MHLW_SUBSIDY_URL, SUBSIDY_CONFIRMED_ON, SUBSIDY_DISCLAIMERS } from "@/lib/data/trainingPages";

interface Props {
  /** 背景色。セクションの並びに合わせて切り替える。 */
  bgColor?: string;
}

/**
 * 助成金に触れるすべてのページに設置する注意書き。
 * 内容は lib/data/trainingPages.ts に集約し、全ページで文言を一致させる。
 */
export default function SubsidyDisclaimer({ bgColor = "#F9F8F5" }: Props) {
  return (
    <section className="py-16" style={{ background: bgColor, borderTop: "1px solid #E8E4DC" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p
            className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5"
            style={{ color: "#6B7280" }}
          >
            Important Notice
          </p>
          <h2 className="font-bold text-[20px] mb-6 leading-snug" style={{ color: "#0F172A" }}>
            助成金に関するご注意
          </h2>

          <div style={{ borderTop: "1px solid #E8E4DC" }}>
            {SUBSIDY_DISCLAIMERS.map((text) => (
              <p
                key={text}
                className="text-[13px] leading-[1.95] py-4"
                style={{ color: "#374151", borderBottom: "1px solid #E8E4DC" }}
              >
                {text}
              </p>
            ))}
          </div>

          <div className="mt-7">
            <p className="text-[13px] leading-[1.9] mb-3" style={{ color: "#374151" }}>
              人材開発支援助成金の制度内容は、厚生労働省の公式ページでご確認いただけます。
            </p>
            <a
              href={MHLW_SUBSIDY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-medium underline"
              style={{ color: "#0F172A" }}
            >
              厚生労働省「人材開発支援助成金」公式ページ
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <p className="text-[12px] mt-3" style={{ color: "#9CA3AF" }}>
              公式情報の確認日：{SUBSIDY_CONFIRMED_ON}（制度は改定される場合があります。申請前に必ず最新情報をご確認ください）
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

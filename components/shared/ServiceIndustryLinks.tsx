import RelatedPages from "@/components/shared/RelatedPages";
import { getServiceIndustryLinks } from "@/lib/data/industrySubPages";

/** 説明文の最初の一文（長ければ切る）を、リンクの補足に使う */
function firstSentence(text: string): string {
  const end = text.indexOf("。");
  const sentence = end > 0 ? text.slice(0, end + 1) : text;
  return sentence.length > 48 ? `${sentence.slice(0, 47)}…` : sentence;
}

/**
 * サービスのページ（/meo・/seo など）から、業種ごとの解説ページへの入口。
 * 業種別ページは業種ページからしかリンクされておらず、「業種名＋サービス名」で評価されにくかった。
 */
export default function ServiceIndustryLinks({ service, serviceName }: { service: string; serviceName: string }) {
  const links = getServiceIndustryLinks(service);
  if (links.length === 0) return null;
  return (
    <RelatedPages
      heading={`業種別の${serviceName}`}
      links={links.map(({ href, page }) => ({ href, label: page.title, desc: firstSentence(page.metaDescription) }))}
    />
  );
}

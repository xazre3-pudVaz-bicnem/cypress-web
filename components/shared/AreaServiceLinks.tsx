import RelatedPages from "@/components/shared/RelatedPages";
import { getAreaSubPagesByArea } from "@/lib/data/areaSubPages";

/** 説明文の最初の一文（長ければ切る）を、リンクの補足に使う */
function firstSentence(text: string): string {
  const end = text.indexOf("。");
  const sentence = end > 0 ? text.slice(0, end + 1) : text;
  return sentence.length > 48 ? `${sentence.slice(0, 47)}…` : sentence;
}

/**
 * 地域ページから、その地域のサービス別ページ（/area/<地域>/<サービス>）への入口。
 * これが無いとサービス別ページ同士でしかリンクされず、「〇〇区 MEO対策」などで評価されにくい。
 */
export default function AreaServiceLinks({ area, areaName }: { area: string; areaName: string }) {
  const pages = getAreaSubPagesByArea(area);
  if (pages.length === 0) return null;
  return (
    <RelatedPages
      heading={`${areaName}のサービス別ページ`}
      links={pages.map((p) => ({ href: `/area/${area}/${p.slug}`, label: p.title, desc: firstSentence(p.metaDescription) }))}
    />
  );
}

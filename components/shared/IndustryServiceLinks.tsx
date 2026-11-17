import RelatedPages from "@/components/shared/RelatedPages";
import { getIndustryServiceLinks } from "@/lib/data/industrySubPages";

/** 説明文の最初の一文（長ければ切る）を、リンクの補足に使う */
function firstSentence(text: string): string {
  const end = text.indexOf("。");
  const sentence = end > 0 ? text.slice(0, end + 1) : text;
  return sentence.length > 48 ? `${sentence.slice(0, 47)}…` : sentence;
}

/**
 * 業種ページから、その業種のサービス別ページ（/industries/<業種>/<サービス>）への入口。
 * これが無いとサービス別ページはどこからもリンクされず、検索エンジンに見つけてもらえない。
 */
export default function IndustryServiceLinks({ industry }: { industry: string }) {
  const links = getIndustryServiceLinks(industry).filter((l, i, all) => all.findIndex((m) => m.href === l.href) === i);
  if (links.length === 0) return null;
  return (
    <RelatedPages
      heading="サービス別の詳しい解説"
      links={links.map(({ href, page }) => ({ href, label: page.title, desc: firstSentence(page.metaDescription) }))}
    />
  );
}

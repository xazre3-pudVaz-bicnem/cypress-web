import RelatedPages from "@/components/shared/RelatedPages";
import { getIndustrySubPagesByIndustry } from "@/lib/data/industrySubPages";

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
  const pages = getIndustrySubPagesByIndustry(industry).filter(
    (p, i, all) => all.findIndex((q) => q.slug === p.slug) === i,
  );
  if (pages.length === 0) return null;
  return (
    <RelatedPages
      heading="サービス別の詳しい解説"
      links={pages.map((p) => ({ href: `/industries/${industry}/${p.slug}`, label: p.title, desc: firstSentence(p.metaDescription) }))}
    />
  );
}

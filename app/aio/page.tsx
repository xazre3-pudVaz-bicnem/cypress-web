import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AIO対策とは｜生成AI検索で引用される企業になる方法｜株式会社サイプレス",
  description:
    "AIO対策（AI最適化）の基礎から実践まで。ChatGPT・Gemini・Perplexityなどの生成AIに引用・推薦されるための施策を体系的に解説。AI検索時代の新しい集客戦略を東京・葛飾区のサイプレスがご支援します。",
  keywords: ["AIOとは", "AIO対策とは", "AI検索対策", "ChatGPT対策基礎", "生成AI最適化", "AIO", "AI引用対策", "Perplexity対策", "Gemini対策"],
  openGraph: {
    title: "AIO対策とは｜生成AI検索で引用される企業になる方法｜株式会社サイプレス",
    description: "ChatGPT・Gemini・Perplexityに引用される企業になるためのAIO対策完全ガイド。AI検索時代の新しい集客戦略。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_22_31.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/aio" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://www.cypress-all.co.jp/" },
        { "@type": "ListItem", "position": 2, "name": "AIO対策", "item": "https://www.cypress-all.co.jp/aio" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "AIO対策とSEO対策は何が違いますか？", "acceptedAnswer": { "@type": "Answer", "text": "SEO対策がGoogleなどの検索エンジンの順位改善を目的とするのに対し、AIO対策はChatGPT・Gemini・Perplexityなどの生成AIが質問に回答する際に自社情報を引用・推薦するよう最適化します。ただし多くの施策（コンテンツ品質向上・権威性構築・構造化データ実装）は両方に有効であり、SEOとAIOを同時に進めることで相乗効果が生まれます。" } },
        { "@type": "Question", "name": "AIO対策の効果はどのように計測しますか？", "acceptedAnswer": { "@type": "Answer", "text": "主な計測方法は、業界関連クエリをAIに投げて自社が引用されるかを定期チェックする「引用率テスト」、指名検索数の推移、AI経由の問い合わせ数などです。直接的な計測はSEOほど確立されていませんが、当社では月次でAI引用状況のモニタリングレポートを提供しています。" } },
        { "@type": "Question", "name": "AI検索は今後も普及しますか？", "acceptedAnswer": { "@type": "Answer", "text": "はい、AI検索は急速に普及しています。ChatGPTは月間1億人以上、Perplexityは月間ユーザー数が急増しており、GoogleもAI Overviewを標準搭載しています。特に若い世代での採用が速く、今後5年で検索行動の大きなシフトが予測されます。早期に対策を始めることで競合に先行する優位性が得られます。" } },
        { "@type": "Question", "name": "どのような業種・企業がAIO対策を優先すべきですか？", "acceptedAnswer": { "@type": "Answer", "text": "サービス業・専門職・B2B企業・コンサルティング業など、「どの会社がいいですか？」という質問でAIに推薦されることが集客に直結する業種は特に優先度が高いです。また、専門性・権威性が重視される医療・法律・金融・IT分野も重要です。消費者向けのローカルビジネスでもAI検索経由の問い合わせは増加しています。" } },
        { "@type": "Question", "name": "AIO対策を始めるにはどこから着手すればいいですか？", "acceptedAnswer": { "@type": "Answer", "text": "まず自社の情報がAIにどのように認識されているかを診断することが出発点です。会社情報・サービス情報の明確化・FAQ整備・構造化データの実装など、比較的短期間で効果が出る施策から着手します。当社では現状診断から優先施策の特定まで無料でご相談に応じます。" } },
        { "@type": "Question", "name": "SEO対策をしていればAIO対策は不要ですか？", "acceptedAnswer": { "@type": "Answer", "text": "SEO対策でコンテンツ品質を高めている企業は有利な出発点にいますが、AIO特有の施策が別途必要です。具体的には、引用しやすい文章構造（FAQ形式・箇条書き）・著者情報の明示・llms.txt設置・E-E-A-T要素の可視化などが必要です。SEO対策をAIO視点でアップデートすることが最も効率的です。" } },
        { "@type": "Question", "name": "llms.txtとは何ですか？必要ですか？", "acceptedAnswer": { "@type": "Answer", "text": "llms.txtはAIクローラーが自社サイトを読む際に最重要情報を効率よく参照できるよう設計したテキストファイルです。robots.txtのAI版と考えるとわかりやすいです。必須ではありませんが、実装することでAIに正確かつ優先的に自社情報を読ませることができます。特に情報量が多いサイトでは有効です。" } },
        { "@type": "Question", "name": "構造化データ（Schema.org）はAIOに関係ありますか？", "acceptedAnswer": { "@type": "Answer", "text": "はい、密接に関係しています。JSON-LDによる構造化データ実装は、GoogleとAIが自社の情報（組織・サービス・FAQ・著者など）を正確に理解するための土台です。Organization・FAQPage・Article・LocalBusiness Schemaを適切に実装することで、AI引用率とGoogle AI Overview表示率の両方が向上します。" } },
        { "@type": "Question", "name": "AIO対策の費用はどのくらいかかりますか？", "acceptedAnswer": { "@type": "Answer", "text": "施策の範囲・サイト規模・競合状況によって異なります。コンテンツ整備・構造化データ実装・FAQ充実などの初期施策と、継続的なモニタリング・改善の月次支援を組み合わせたプランをご提案しています。まずは無料診断でご相談ください。" } },
        { "@type": "Question", "name": "AIO対策は自分でできますか？", "acceptedAnswer": { "@type": "Answer", "text": "基本的なFAQページ整備・プロフィール情報の充実・著者情報の追加などは自社で実施できます。ただし、構造化データのJSON-LD実装・コンテンツの引用しやすさの最適化・AI引用状況の継続モニタリングには専門知識が必要です。競合が激しい業種では専門家のサポートが有効です。" } },
        { "@type": "Question", "name": "AIO対策の効果が出るまでどのくらいかかりますか？", "acceptedAnswer": { "@type": "Answer", "text": "AIに引用されるタイミングはAIモデルの更新頻度や学習データの更新に依存するため、SEOほど期間の見通しが立てにくいです。ただし、コンテンツ品質向上・構造化データ実装・FAQ整備などの施策はGoogle AI Overviewへの引用としては比較的早期（1〜3ヶ月）に効果が現れることがあります。" } },
        { "@type": "Question", "name": "地域ビジネスにもAIO対策は必要ですか？", "acceptedAnswer": { "@type": "Answer", "text": "はい、地域ビジネスにもAIO対策は重要です。「渋谷でおすすめの美容室は？」「葛飾区でリフォームを依頼できる会社は？」といった質問をAIに投げるユーザーが増えています。MEO対策と組み合わせたローカルAIO戦略が効果的です。Googleビジネスプロフィールの情報整備もAI引用に寄与します。" } },
        { "@type": "Question", "name": "E-E-A-T強化のために具体的に何をすればいいですか？", "acceptedAnswer": { "@type": "Answer", "text": "経験（Experience）: 自社の実績・事例・体験談の掲載。専門性（Expertise）: 著者情報・資格・専門コンテンツの充実。権威性（Authoritativeness）: メディア掲載・被リンク獲得・外部評価の蓄積。信頼性（Trustworthiness）: 会社情報・プライバシーポリシー・SSL・口コミの整備。これら4要素を具体的なコンテンツとして明示することが重要です。" } },
        { "@type": "Question", "name": "Perplexity対策はSEOとどう違いますか？", "acceptedAnswer": { "@type": "Answer", "text": "PerplexityはWebをリアルタイムで検索して回答を生成するため、最新の情報・権威性の高いWebページ・構造化されたコンテンツが引用されやすいです。SEOの延長線上にある施策が多いですが、引用しやすい文章構造（箇条書き・数値・明確な結論）・著者の専門性の明示・E-E-A-T強化がPerplexity対策でも特に重要です。" } },
        { "@type": "Question", "name": "AIに自社を認識させるためにウィキペディアは必要ですか？", "acceptedAnswer": { "@type": "Answer", "text": "ウィキペディアへの掲載はAIの学習データの中で高い権威性を持ちますが、掲載基準が厳しく中小企業では難しい場合があります。ウィキペディアがなくても、業界メディアへの掲載・プレスリリース・高品質な自社コンテンツ・構造化データ（Organization Schema）でAIへの認識を高めることは可能です。" } },
        { "@type": "Question", "name": "AI検索でゼロクリック（サイト訪問なし）が増えますか？", "acceptedAnswer": { "@type": "Answer", "text": "はい、AI検索ではユーザーがサイトを訪問せずに回答を得る「ゼロクリック」が増加しています。一方で、引用元として自社サイトが表示されることは指名検索の増加・ブランド認知向上につながります。ゼロクリック時代においても重要なのは「引用される情報源になること」であり、AIO対策の本質です。" } },
        { "@type": "Question", "name": "ナレッジグラフとは何ですか？AIO対策との関係は？", "acceptedAnswer": { "@type": "Answer", "text": "Googleナレッジグラフは、企業・人物・場所などのエンティティ（実体）間の関係をデータベース化した仕組みです。自社がナレッジグラフに登録されると、Google検索で右側に自社情報パネルが表示され、AIもナレッジグラフの情報を参照します。Organization Schemaの実装・ウィキデータへの登録・一貫した情報発信がナレッジグラフへの登録を促進します。" } },
        { "@type": "Question", "name": "Google AI Overview（旧SGE）に引用されるにはどうすればいいですか？", "acceptedAnswer": { "@type": "Answer", "text": "Google AI Overviewは主にSearch結果の上位ページから情報を引用します。引用されやすくするには、対象キーワードでの検索上位表示（SEO）・FAQ形式コンテンツ・構造化データ実装・専門性の高い情報・簡潔で明確な文章構造が重要です。現在SEOで上位表示されているページが引用されやすい傾向があります。" } },
        { "@type": "Question", "name": "AIO対策はホームページのどの部分から始めればいいですか？", "acceptedAnswer": { "@type": "Answer", "text": "優先順位の高い施策は、①FAQページの充実（引用されやすいQ&A形式のコンテンツ）、②会社概要・著者情報の整備（E-E-A-T強化）、③JSON-LD構造化データの実装（Organization・FAQPage・Service）、④llms.txtの設置、⑤主要サービスページのコンテンツ拡充です。これらを3ヶ月以内に順次実施することを推奨します。" } },
      ],
    },
  ],
};

const subPages = [
  {
    href: "/aio/chatgpt",
    label: "ChatGPT対策・生成AI時代の情報設計",
    desc: "ChatGPTに引用・推薦されるための情報設計と施策。E-E-A-T要素の整備からFAQコンテンツの充実まで。",
  },
  {
    href: "/aio/generative-search",
    label: "生成AI検索・AI Overview対策",
    desc: "Google AI OverviewやPerplexityなどの生成AI検索に引用されやすいコンテンツの特徴と最適化手法。",
  },
  {
    href: "/aio/structured-data",
    label: "構造化データ（Schema.org）の実装",
    desc: "JSON-LDによる構造化データ実装でGoogleとAIの理解度を高め、リッチリザルトとAI引用率を向上。",
  },
  {
    href: "/aio/llm-optimization",
    label: "LLM最適化",
    desc: "GPT・Gemini・Claudeなどの大規模言語モデルが正確に認識する企業情報を構築するための施策。",
  },
  {
    href: "/aio/ai-search",
    label: "AI検索最適化",
    desc: "Perplexity・You.comなどAIネイティブ検索エンジンへの対応と、ゼロクリック検索時代の集客戦略。",
  },
  {
    href: "/aio/entity-optimization",
    label: "エンティティ最適化",
    desc: "AIが「企業」として正しく認識するための情報設計。ナレッジグラフへの登録と一貫した情報発信。",
  },
  {
    href: "/aio/knowledge-graph",
    label: "Googleナレッジグラフ対策",
    desc: "Googleナレッジグラフ・ナレッジパネルへの登録と企業情報の正確な認識のための施策。",
  },
  {
    href: "/aio/faq-optimization",
    label: "FAQ最適化",
    desc: "AIが引用しやすいFAQコンテンツの設計・構造化・配置。AI Overview表示率を高めるFAQ戦略。",
  },
  {
    href: "/aio/llms-txt",
    label: "llms.txt対応",
    desc: "AIクローラー向けllms.txt・llms-full.txtの実装でAIに自社情報を正確かつ効率的に読ませる。",
  },
  {
    href: "/aio/organization-data",
    label: "組織・著者情報の構造化",
    desc: "Organization・Person Schema実装で企業の権威性をGoogleとAIに証明するデータ設計。",
  },
  {
    href: "/aio/answer-engine-optimization",
    label: "AEO（回答エンジン最適化）",
    desc: "AI検索が「回答」として表示する情報ブロックを獲得するためのコンテンツ設計手法。",
  },
  {
    href: "/aio/ai-overview",
    label: "AI Overview（SGE）対策",
    desc: "Google AI Overviewに引用される確率を高めるコンテンツ品質・構造・権威性の最適化。",
  },
];

const faqItems = [
  {
    q: "AIO対策とSEO対策は何が違いますか？",
    a: "SEO対策がGoogleなどの検索エンジンの順位改善を目的とするのに対し、AIO対策はChatGPT・Gemini・Perplexityなどの生成AIが質問に回答する際に自社情報を引用・推薦するよう最適化します。ただし多くの施策（コンテンツ品質向上・権威性構築・構造化データ実装）は両方に有効であり、SEOとAIOを同時に進めることで相乗効果が生まれます。",
  },
  {
    q: "AIO対策の効果はどのように計測しますか？",
    a: "主な計測方法は、業界関連クエリをAIに投げて自社が引用されるかを定期チェックする「引用率テスト」、指名検索数の推移、AI経由の問い合わせ数などです。直接的な計測はSEOほど確立されていませんが、当社では月次でAI引用状況のモニタリングレポートを提供しています。",
  },
  {
    q: "AI検索は今後も普及しますか？",
    a: "はい、AI検索は急速に普及しています。ChatGPTは月間1億人以上、Perplexityは月間ユーザー数が急増しており、GoogleもAI Overviewを標準搭載しています。特に若い世代での採用が速く、今後5年で検索行動の大きなシフトが予測されます。早期に対策を始めることで競合に先行する優位性が得られます。",
  },
  {
    q: "どのような業種・企業がAIO対策を優先すべきですか？",
    a: "サービス業・専門職・B2B企業・コンサルティング業など、「どの会社がいいですか？」という質問でAIに推薦されることが集客に直結する業種は特に優先度が高いです。また、専門性・権威性が重視される医療・法律・金融・IT分野も重要です。消費者向けのローカルビジネスでもAI検索経由の問い合わせは増加しています。",
  },
  {
    q: "AIO対策を始めるにはどこから着手すればいいですか？",
    a: "まず自社の情報がAIにどのように認識されているかを診断することが出発点です。会社情報・サービス情報の明確化・FAQ整備・構造化データの実装など、比較的短期間で効果が出る施策から着手します。当社では現状診断から優先施策の特定まで無料でご相談に応じます。",
  },
  {
    q: "SEO対策をしていればAIO対策は不要ですか？",
    a: "SEO対策でコンテンツ品質を高めている企業は有利な出発点にいますが、AIO特有の施策が別途必要です。具体的には、引用しやすい文章構造（FAQ形式・箇条書き）・著者情報の明示・llms.txt設置・E-E-A-T要素の可視化などが必要です。SEO対策をAIO視点でアップデートすることが最も効率的です。",
  },
  {
    q: "llms.txtとは何ですか？必要ですか？",
    a: "llms.txtはAIクローラーが自社サイトを読む際に最重要情報を効率よく参照できるよう設計したテキストファイルです。robots.txtのAI版と考えるとわかりやすいです。必須ではありませんが、実装することでAIに正確かつ優先的に自社情報を読ませることができます。特に情報量が多いサイトでは有効です。",
  },
  {
    q: "構造化データ（Schema.org）はAIOに関係ありますか？",
    a: "はい、密接に関係しています。JSON-LDによる構造化データ実装は、GoogleとAIが自社の情報（組織・サービス・FAQ・著者など）を正確に理解するための土台です。Organization・FAQPage・Article・LocalBusiness Schemaを適切に実装することで、AI引用率とGoogle AI Overview表示率の両方が向上します。",
  },
  {
    q: "AIO対策の費用はどのくらいかかりますか？",
    a: "施策の範囲・サイト規模・競合状況によって異なります。コンテンツ整備・構造化データ実装・FAQ充実などの初期施策と、継続的なモニタリング・改善の月次支援を組み合わせたプランをご提案しています。まずは無料診断でご相談ください。",
  },
  {
    q: "AIO対策は自分でできますか？",
    a: "基本的なFAQページ整備・プロフィール情報の充実・著者情報の追加などは自社で実施できます。ただし、構造化データのJSON-LD実装・コンテンツの引用しやすさの最適化・AI引用状況の継続モニタリングには専門知識が必要です。競合が激しい業種では専門家のサポートが有効です。",
  },
  {
    q: "AIO対策の効果が出るまでどのくらいかかりますか？",
    a: "AIに引用されるタイミングはAIモデルの更新頻度や学習データの更新に依存するため、SEOほど期間の見通しが立てにくいです。ただし、コンテンツ品質向上・構造化データ実装・FAQ整備などの施策はGoogle AI Overviewへの引用としては比較的早期（1〜3ヶ月）に効果が現れることがあります。",
  },
  {
    q: "地域ビジネスにもAIO対策は必要ですか？",
    a: "はい、地域ビジネスにもAIO対策は重要です。「渋谷でおすすめの美容室は？」「葛飾区でリフォームを依頼できる会社は？」といった質問をAIに投げるユーザーが増えています。MEO対策と組み合わせたローカルAIO戦略が効果的です。Googleビジネスプロフィールの情報整備もAI引用に寄与します。",
  },
  {
    q: "E-E-A-T強化のために具体的に何をすればいいですか？",
    a: "経験（Experience）: 自社の実績・事例・体験談の掲載。専門性（Expertise）: 著者情報・資格・専門コンテンツの充実。権威性（Authoritativeness）: メディア掲載・被リンク獲得・外部評価の蓄積。信頼性（Trustworthiness）: 会社情報・プライバシーポリシー・SSL・口コミの整備。これら4要素を具体的なコンテンツとして明示することが重要です。",
  },
  {
    q: "Perplexity対策はSEOとどう違いますか？",
    a: "PerplexityはWebをリアルタイムで検索して回答を生成するため、最新の情報・権威性の高いWebページ・構造化されたコンテンツが引用されやすいです。SEOの延長線上にある施策が多いですが、引用しやすい文章構造（箇条書き・数値・明確な結論）・著者の専門性の明示・E-E-A-T強化がPerplexity対策でも特に重要です。",
  },
  {
    q: "AIに自社を認識させるためにウィキペディアは必要ですか？",
    a: "ウィキペディアへの掲載はAIの学習データの中で高い権威性を持ちますが、掲載基準が厳しく中小企業では難しい場合があります。ウィキペディアがなくても、業界メディアへの掲載・プレスリリース・高品質な自社コンテンツ・構造化データ（Organization Schema）でAIへの認識を高めることは可能です。",
  },
  {
    q: "AI検索でゼロクリック（サイト訪問なし）が増えますか？",
    a: "はい、AI検索ではユーザーがサイトを訪問せずに回答を得る「ゼロクリック」が増加しています。一方で、引用元として自社サイトが表示されることは指名検索の増加・ブランド認知向上につながります。ゼロクリック時代においても重要なのは「引用される情報源になること」であり、AIO対策の本質です。",
  },
  {
    q: "ナレッジグラフとは何ですか？AIO対策との関係は？",
    a: "Googleナレッジグラフは、企業・人物・場所などのエンティティ（実体）間の関係をデータベース化した仕組みです。自社がナレッジグラフに登録されると、Google検索で右側に自社情報パネルが表示され、AIもナレッジグラフの情報を参照します。Organization Schemaの実装・ウィキデータへの登録・一貫した情報発信がナレッジグラフへの登録を促進します。",
  },
  {
    q: "Google AI Overview（旧SGE）に引用されるにはどうすればいいですか？",
    a: "Google AI Overviewは主にSearch結果の上位ページから情報を引用します。引用されやすくするには、対象キーワードでの検索上位表示（SEO）・FAQ形式コンテンツ・構造化データ実装・専門性の高い情報・簡潔で明確な文章構造が重要です。現在SEOで上位表示されているページが引用されやすい傾向があります。",
  },
  {
    q: "AIO対策はホームページのどの部分から始めればいいですか？",
    a: "優先順位の高い施策は、①FAQページの充実（引用されやすいQ&A形式のコンテンツ）、②会社概要・著者情報の整備（E-E-A-T強化）、③JSON-LD構造化データの実装（Organization・FAQPage・Service）、④llms.txtの設置、⑤主要サービスページのコンテンツ拡充です。これらを3ヶ月以内に順次実施することを推奨します。",
  },
];

export default function AioIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>AIO対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              AI Optimization
            </p>
            <h1 className="font-black text-[40px] md:text-[56px] leading-tight tracking-tight mb-6" style={{ color: "#0F172A" }}>
              AIO対策とは
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-4" style={{ color: "#374151" }}>
              AIO（AI最適化）とは、ChatGPT・Gemini・Perplexity・Claudeなどの生成AIが
              質問に回答する際に、自社の情報を引用・推薦するよう最適化する新しい施策です。
              AI検索が急速に普及する今、SEOと並ぶ重要な集客戦略として注目されています。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              従来のGoogle検索に加えて、「どの会社に頼めばいいか」「○○業界でおすすめのサービスは」という
              購買意欲の高い質問をAIに投げるユーザーが急増しています。
              この「AI経由の認知・推薦」を意図的に獲得することが、これからの集客において不可欠な戦略です。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "400px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_22_31.png"
            alt="AI検索最適化・AIO対策"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.6)" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6">
              <p className="text-white font-black leading-tight" style={{ fontSize: "clamp(20px, 3vw, 36px)" }}>
                ChatGPT・Gemini・Perplexityに<br />引用される企業になる。
              </p>
            </div>
          </div>
        </section>

        {/* AIO対策とは */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What is AIO
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0F172A" }}>
              AIO対策とは何か
            </h2>
            <div className="max-w-3xl space-y-6">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                AIOとは「AI Optimization（AI最適化）」の略で、生成AIやAI検索エンジンで
                自社が正確かつ肯定的に認識・引用されるための施策全般を指します。
                ChatGPTに「○○業界のおすすめ企業を教えて」と質問した際に自社が推薦される、
                Google AI Overviewで自社のコンテンツが引用される、Perplexityで自社の専門情報が参照される
                ———こうした「AIによる露出」を意図的に増やすことがAIO対策の目標です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                AIOが注目される背景には、検索行動の大きな変化があります。従来のGoogleキーワード検索に加えて、
                ChatGPT・Gemini・Perplexityなどの生成AIに直接質問するユーザーが急増しています。
                特に「どの会社に依頼すればいいか」「○○のサービスを提供している企業は？」
                といった購買意欲の高い質問をAIに投げるユーザーが増えており、
                この「AI経由の認知・推薦」が新たな集客チャンネルになりつつあります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                AIO対策の核心は「AIに信頼できる情報源として認識されること」です。
                生成AIは学習データの権威性・露出頻度・情報の一貫性・E-E-A-T（経験・専門性・権威性・信頼性）
                を評価して情報源を選択します。これらを高めることがAIO対策の本質であり、
                多くの施策がSEO対策とも重なります。
              </p>
            </div>
          </div>
        </section>

        {/* 従来のSEOとの違い */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              AIO vs SEO
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0F172A" }}>
              従来のSEOとAIOの違い
            </h2>
            <div className="max-w-3xl">
              <div className="overflow-x-auto">
                <table className="w-full text-[14px]" style={{ borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid #E8E4DC" }}>
                      <th className="text-left py-3 pr-6 font-semibold" style={{ color: "#0F172A", width: "30%" }}>項目</th>
                      <th className="text-left py-3 pr-6 font-semibold" style={{ color: "#0F172A" }}>SEO対策</th>
                      <th className="text-left py-3 font-semibold" style={{ color: "#0F172A" }}>AIO対策</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { item: "対象", seo: "Google等の検索エンジン", aio: "ChatGPT・Gemini・Perplexity等" },
                      { item: "成果", seo: "検索順位・オーガニック流入", aio: "AI引用・AI経由の問い合わせ" },
                      { item: "評価軸", seo: "ページ品質・被リンク・UX", aio: "権威性・情報の正確性・E-E-A-T" },
                      { item: "コンテンツ", seo: "キーワード最適化・網羅性", aio: "引用しやすい構造・専門性・FAQ" },
                      { item: "計測", seo: "順位・セッション数（比較的明確）", aio: "AI引用率・指名検索（計測が難しい）" },
                      { item: "更新頻度", seo: "Googleアルゴリズム更新に追従", aio: "AIモデル更新・学習データに依存" },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid #E8E4DC" }}>
                        <td className="py-4 pr-6 font-medium" style={{ color: "#0F172A" }}>{row.item}</td>
                        <td className="py-4 pr-6" style={{ color: "#374151" }}>{row.seo}</td>
                        <td className="py-4" style={{ color: "#374151" }}>{row.aio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-[14px] leading-[1.9]" style={{ color: "#374151" }}>
                SEOとAIOは対立するものではなく、補完的な関係にあります。
                コンテンツ品質・権威性・構造化データなど多くの施策が両方に有効であり、
                SEO対策の延長上にAIO対策を積み上げることで、従来の検索流入と
                AI経由の認知の両方を効率的に獲得できます。
              </p>
            </div>
          </div>
        </section>

        {/* AIOが今重要な5つの理由 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Why Now
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0F172A" }}>
              AIO対策が今重要な5つの理由
            </h2>
            <div className="max-w-3xl space-y-10">
              {[
                {
                  num: "01",
                  title: "AI検索ユーザーが急増している",
                  body: "ChatGPTの月間アクティブユーザーは1億人を超え、Perplexityも急成長を続けています。GoogleもAI Overviewを検索結果の最上部に表示するようになり、「まずAIに聞く」という行動が当たり前になりつつあります。この変化はすでに始まっており、今対策を始めた企業が先行者利益を得ます。",
                },
                {
                  num: "02",
                  title: "AIへの質問は購買意欲が高い",
                  body: "「おすすめの税理士を教えて」「渋谷で評判の美容室は？」「MEO対策を依頼できる会社は？」——これらはすべて購買前段階の質問です。AIに投げる質問はキーワード検索より具体的で意図が明確なため、AIに引用・推薦された企業は極めて高い確率で問い合わせにつながります。",
                },
                {
                  num: "03",
                  title: "競合がまだ対策していない",
                  body: "SEOは競争が激しく後発参入が難しいのに対し、AIO対策は多くの企業がまだ手をつけていない新興領域です。今から施策を始めることで、AI検索という新しい集客チャンネルで競合に先行できます。業種・地域によっては数ヶ月で引用される企業になれます。",
                },
                {
                  num: "04",
                  title: "ゼロクリック検索への対応が必要",
                  body: "AI検索では、ユーザーがリンクをクリックせずにAIの回答で情報を得る「ゼロクリック」が増加しています。この環境では「AI回答の中に自社が登場する」こと自体がブランド認知と信頼形成に直結します。クリックされなくても名前と専門性が伝わることが、間接的な集客につながります。",
                },
                {
                  num: "05",
                  title: "E-E-A-T強化は長期的な資産になる",
                  body: "AIO対策の核心であるE-E-A-T（経験・専門性・権威性・信頼性）の向上は、SEO評価・ユーザー信頼・CV率の改善にも同時に寄与します。一度構築した専門的なコンテンツ・権威性・著者情報は長期間にわたって資産として機能し、AIモデルが更新されても引き継がれます。",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-8">
                  <span
                    className="text-[28px] font-black shrink-0 leading-none mt-1"
                    style={{ color: "#c4b89a", fontFamily: "var(--font-serif)" }}
                  >
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-[18px] mb-3" style={{ color: "#0F172A" }}>{item.title}</h3>
                    <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AIに引用されるための施策 */}
        <section className="py-20" style={{ background: "#0d1b2a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>
              Key Actions
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#FFFFFF" }}>
              AIに引用されるための8つの施策
            </h2>
            <div className="max-w-3xl space-y-8">
              {[
                {
                  num: "01",
                  title: "E-E-A-Tの明示的な強化",
                  body: "経験（Experience）・専門性（Expertise）・権威性（Authoritativeness）・信頼性（Trustworthiness）を、ページ上で可視化します。代表者プロフィール・著者情報・資格・実績・メディア掲載歴などを明示し、AIが「信頼できる情報源」として認識できるよう設計します。",
                },
                {
                  num: "02",
                  title: "引用しやすいコンテンツ構造の設計",
                  body: "AIは「一文で引用できる明確な回答」を好みます。FAQ形式・箇条書き・定義文（「○○とは〜です」）・数値やデータを含む具体的な記述が引用されやすいです。長文の段落より、短くても情報密度が高い文章が効果的です。",
                },
                {
                  num: "03",
                  title: "FAQ・Q&Aコンテンツの充実",
                  body: "AIが回答を生成する際に最も参照しやすいのがFAQ形式のコンテンツです。ユーザーが実際にAIに投げる質問（「○○業者の選び方は？」「○○の費用相場は？」）を想定したFAQを整備し、明確で簡潔な回答を付けることでAI引用率が大幅に向上します。",
                },
                {
                  num: "04",
                  title: "構造化データ（JSON-LD）の実装",
                  body: "Organization・FAQPage・Article・LocalBusiness・Person Schemaを適切に実装することで、GoogleとAIが自社の情報を機械的に正確に理解できます。構造化データはAI Overview表示の要件の一つであり、実装していないサイトは大きな機会損失があります。",
                },
                {
                  num: "05",
                  title: "llms.txt・llms-full.txtの設置",
                  body: "AIクローラーが自社サイトを読む際の「案内書」となるllms.txtを設置します。会社概要・提供サービス・専門領域・連絡先などを簡潔にまとめ、AIが効率よく正確に自社情報を取得できるようにします。新しい施策ですが実装コストが低く、早期導入の価値があります。",
                },
                {
                  num: "06",
                  title: "著者情報・会社情報の一貫した整備",
                  body: "サイト内の「会社概要」「著者プロフィール」「代表者情報」と、外部サイト（Wikipedia・LinkedInなど）の情報が一致していることが重要です。AIはWeb全体の情報を参照するため、情報の一貫性がエンティティとしての認識精度を高めます。",
                },
                {
                  num: "07",
                  title: "専門性の高いコンテンツの定期発信",
                  body: "業界の専門知識・ノウハウ・事例を体系的に発信することで、特定の専門領域でのAI引用頻度が上がります。特に「○○についての詳しい解説」「○○の選び方ガイド」などの包括的な専門コンテンツが有効です。",
                },
                {
                  num: "08",
                  title: "AI引用状況の継続的モニタリング",
                  body: "定期的に業界関連クエリをChatGPT・Gemini・Perplexityに投げ、自社が引用されているかをチェックします。引用されているなら強化を、引用されていないなら施策の見直しを行います。計測と改善のサイクルを回すことで引用率を継続的に高めます。",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-8">
                  <span
                    className="text-[22px] font-black shrink-0 leading-none mt-1"
                    style={{ color: "#c4b89a", fontFamily: "var(--font-serif)" }}
                  >
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-[17px] mb-2" style={{ color: "#FFFFFF" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#9CA3AF" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サブページナビゲーション */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Knowledge
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0F172A" }}>
              AIO対策を深く学ぶ
            </h2>
            <div className="max-w-3xl">
              {subPages.map((page, i) => (
                <Link key={page.href} href={page.href}>
                  <div
                    className="flex gap-6 py-6 hover:opacity-80 transition-opacity"
                    style={{
                      borderTop: "1px solid #E8E4DC",
                      borderBottom: i === subPages.length - 1 ? "1px solid #E8E4DC" : undefined,
                    }}
                  >
                    <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-bold text-[16px] mb-2 hover:underline" style={{ color: "#0F172A" }}>{page.label}</h3>
                      <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{page.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 業種別AIO活用事例 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Industry Cases
            </p>
            <h2 className="font-black text-[28px] mb-4" style={{ color: "#0F172A" }}>
              業種別AIO対策の活用事例
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-12" style={{ color: "#374151" }}>
              業種によってAIに求められる専門性・引用されやすいコンテンツの形式が異なります。
              代表的な業種ごとのAIO施策のポイントをご紹介します。
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  industry: "コンサルティング・士業",
                  icon: "⚖️",
                  points: [
                    "「税理士の選び方」「弁護士に相談すべき状況」などの専門FAQ",
                    "代表者・担当者の経歴・専門領域の明示",
                    "事例・解決実績のコンテンツ化（匿名可）",
                    "専門誌・メディア掲載実績の可視化",
                  ],
                },
                {
                  industry: "IT・SaaS・テクノロジー",
                  icon: "💻",
                  points: [
                    "「○○ツールのおすすめ」「○○と○○の違い」比較コンテンツ",
                    "機能・料金・スペックの構造化データ",
                    "技術ブログ・チュートリアルによる専門性証明",
                    "GitHub・技術コミュニティとの連携",
                  ],
                },
                {
                  industry: "医療・クリニック",
                  icon: "🏥",
                  points: [
                    "医師プロフィール・資格・専門領域の明示",
                    "症状別・治療法別のFAQ",
                    "医学的根拠・エビデンスの引用",
                    "学会・医師会との関係・監修情報",
                  ],
                },
                {
                  industry: "不動産・リフォーム",
                  icon: "🏠",
                  points: [
                    "「物件選びのポイント」「リフォーム費用相場」などの実用情報",
                    "地域名を含む詳細な情報（○○区の○○事情）",
                    "施工事例・ビフォーアフターの構造化",
                    "担当者・職人の経験・資格の明示",
                  ],
                },
                {
                  industry: "飲食・美容・サロン",
                  icon: "✂️",
                  points: [
                    "「○○の選び方」「○○に行く前に知っておきたいこと」",
                    "Googleビジネスプロフィール情報のAI参照を意識した整備",
                    "メニュー・価格・特徴の構造化データ",
                    "口コミ・レビューのSchema実装",
                  ],
                },
                {
                  industry: "B2B・製造・卸売",
                  icon: "🏭",
                  points: [
                    "「○○業者の選び方」「○○の品質基準とは」業界専門FAQ",
                    "企業規模・設立年・実績の信頼性証明",
                    "取引先・認証・品質基準の明示",
                    "業界団体・規格への対応状況の公開",
                  ],
                },
              ].map((c) => (
                <div
                  key={c.industry}
                  className="p-6"
                  style={{ background: "#FFFFFF", border: "1px solid #E8E4DC" }}
                >
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h3 className="font-bold text-[16px] mb-4" style={{ color: "#0F172A" }}>{c.industry}</h3>
                  <ul className="space-y-2">
                    {c.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-[13px] leading-[1.7]" style={{ color: "#374151" }}>
                        <span className="shrink-0 mt-0.5" style={{ color: "#c4b89a" }}>▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスのAIO支援 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Our Support
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0F172A" }}>
              サイプレスのAIO支援
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-5">
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  株式会社サイプレスは、AIに関する深い技術理解とWebマーケティングの専門性を組み合わせた
                  AIO対策を提供しています。ChatGPT・Gemini・Perplexityそれぞれの特性を把握したうえで、
                  各AIに引用されやすいコンテンツ設計・構造化データ実装・E-E-A-T強化を一貫して支援します。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  AIO対策はSEO・コンテンツ制作・ウェブサイト設計と深く連動します。
                  サイプレスはこれらを横断的に対応できるため、施策の相乗効果を最大化できます。
                  まずはAI検索での現状診断から始めることをお勧めします。
                </p>
                <div className="pt-2">
                  <Link
                    href="/services/aio"
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-[14px] font-medium transition-all hover:bg-[#0F172A] hover:text-white"
                    style={{ border: "1px solid #0F172A", color: "#0F172A" }}
                  >
                    AIO対策サービスの詳細
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "AI引用状況診断", desc: "現在のAI認識状況を調査" },
                  { label: "コンテンツ設計", desc: "引用されやすい構造に最適化" },
                  { label: "構造化データ実装", desc: "JSON-LD・Schema.org対応" },
                  { label: "llms.txt設置", desc: "AIクローラー対応ファイル" },
                  { label: "E-E-A-T強化", desc: "権威性・信頼性の構築" },
                  { label: "継続モニタリング", desc: "月次AI引用状況レポート" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="p-4"
                    style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}
                  >
                    <div className="font-bold text-[13px] mb-1" style={{ color: "#0F172A" }}>{s.label}</div>
                    <div className="text-[12px]" style={{ color: "#9CA3AF" }}>{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AIOとSEOの違い 2col */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden" style={{ height: "360px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_20_52.png"
                  alt="AIOとSEOの違い・デジタル環境でのタイピング"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  AIO × SEO Synergy
                </p>
                <h2 className="font-black text-[26px] mb-6" style={{ color: "#0F172A" }}>
                  AIOとSEOの相乗効果
                </h2>
                <div className="space-y-4">
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    SEOがGoogle検索での順位改善を目的とするのに対し、AIOはChatGPT・Gemini・Perplexityなど生成AIが回答を生成する際に自社情報を引用・推薦させることを目的とします。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    AIOとSEOは競合ではなく補完関係にあります。コンテンツ品質・権威性構築・構造化データ実装はどちらにも有効であり、SEO対策の延長線上でAIO対策を実施することで相乗効果が生まれます。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    AIO特有の施策として、引用しやすい文章構造・FAQ形式コンテンツ・E-E-A-T要素の明示・著者情報の構造化などがあります。これらをSEO施策と組み合わせることが最も効率的です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* よくある失敗パターン */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Common Mistakes
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0F172A" }}>
              AIO対策でよくある失敗パターン
            </h2>
            <div className="max-w-3xl space-y-6">
              {[
                {
                  title: "SEO対策と同じことをするだけ",
                  body: "キーワード密度の最適化やメタデータ整備はSEOには有効ですが、AI引用には不十分です。AIは「回答として使える情報かどうか」を重視するため、FAQコンテンツ・定義文・引用しやすい明確な記述が別途必要です。",
                },
                {
                  title: "AIに投げる質問を想定していない",
                  body: "「ユーザーがAIにどんな質問を投げるか」を考えずにコンテンツを作っても引用されません。「○○の選び方は？」「○○と○○はどう違う？」「○○の費用相場は？」といったAIへの質問を想定したコンテンツ設計が必要です。",
                },
                {
                  title: "会社情報・著者情報が不明確",
                  body: "AIは「誰が書いた情報か」を重視します。会社概要・代表者情報・担当者プロフィール・専門領域が不明確なサイトは信頼性が低いと判断されAI引用が減ります。サイト全体で一貫した著者情報・会社情報を整備することが必須です。",
                },
                {
                  title: "一度実施して終わりにしてしまう",
                  body: "AIモデルは定期的に更新・学習データが更新されます。一度施策を実施しても定期的なモニタリングと改善を怠ると、引用頻度が下がることがあります。月次での引用状況チェックと継続的なコンテンツ更新が必要です。",
                },
                {
                  title: "AIO対策だけを単独で実施する",
                  body: "AIO対策はSEO・MEO・コンテンツマーケティングと連動させることで最大の効果を発揮します。単独で実施すると効果が限定的になります。特にSEOと連動させたコンテンツ戦略が最も費用対効果が高い施策です。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderBottom: "1px solid #E8E4DC" }}>
                  <div
                    className="shrink-0 w-8 h-8 flex items-center justify-center text-[13px] font-bold"
                    style={{ background: "#FEE2E2", color: "#DC2626", borderRadius: "50%" }}
                  >
                    ✕
                  </div>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0F172A" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AIO対策に関するよくある質問" bgColor="#F9F8F5" />

        <RelatedPages
          links={[
            { href: "/services/aio", label: "AIO対策サービス", desc: "サービス内容と料金" },
            { href: "/aio/chatgpt", label: "ChatGPT対策", desc: "ChatGPTへの引用戦略" },
            { href: "/aio/structured-data", label: "構造化データ", desc: "Schema.org実装ガイド" },
            { href: "/aio/generative-search", label: "生成AI検索対策", desc: "AI Overview対策の詳細" },
            { href: "/aio/llm-optimization", label: "LLM最適化", desc: "大規模言語モデルへの最適化" },
            { href: "/aio/ai-search", label: "AI検索最適化", desc: "AIネイティブ検索エンジン対策" },
            { href: "/aio/faq-optimization", label: "FAQ最適化", desc: "AI引用されやすいFAQ設計" },
            { href: "/aio/llms-txt", label: "llms.txt対応", desc: "AIクローラー向けファイル設置" },
            { href: "/aio/entity-optimization", label: "エンティティ最適化", desc: "企業エンティティとしての認識" },
            { href: "/aio/knowledge-graph", label: "ナレッジグラフ対策", desc: "Googleナレッジグラフへの登録" },
            { href: "/seo", label: "SEO対策", desc: "SEOとAIOの連動施策" },
            { href: "/services/seo", label: "SEO対策サービス", desc: "SEOサービス内容と料金" },
            { href: "/meo", label: "MEO対策", desc: "地域ビジネスの集客施策" },
            { href: "/sns", label: "SNS運用", desc: "SNSとAIOの連動戦略" },
            { href: "/knowledge", label: "マーケティング知識", desc: "デジタルマーケティング全般" },
          ]}
        />

        <PageContactCTA
          heading="AIO対策のご相談はサイプレスへ"
          body="ChatGPT・Gemini・Perplexityなどの生成AIに引用・推薦される企業になるためのAIO対策をご提案します。まずは貴社の現状をAI検索でどのように認識されているかを診断します。"
        />
      </main>
      <Footer />
    </>
  );
}

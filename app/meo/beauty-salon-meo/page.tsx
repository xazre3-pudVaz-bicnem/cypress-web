import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "美容室・サロンのMEO対策｜Googleマップ集客",
  description: "美容室・ネイルサロン・エステのGoogleマップ集客。GBPでのサービス設定・施術写真・口コミ管理・予約連携など美容サロン特有のMEO対策を解説。",
};

const faqItems = [
  { q: "美容室でMEO対策をすると具体的にどんな効果がありますか？", a: "「〇〇市 美容室」「〇〇駅 ヘアサロン」などでGoogleマップ上位に表示されるようになります。新規顧客の来店・電話予約・Web予約の増加につながります。" },
  { q: "ホットペッパービューティとMEO対策はどちらが重要ですか？", a: "両方を活用することが理想です。ホットペッパービューティは集客プラットフォームとして有効ですが、掲載費用がかかります。MEO対策はGBPを適切に管理することで無料で集客できるため、コスト効率が高いです。" },
  { q: "施術写真はどのくらい投稿すればいいですか？", a: "最低10枚以上、できれば30〜50枚の施術写真（ビフォーアフター・スタイル別）を用意します。ヘアカラー・パーマ・ヘアセットなどカテゴリ別に整理された写真が効果的です。" },
  { q: "スタイリストごとのGBPを作ることはできますか？", a: "1店舗につき1つのGBPが基本です。スタイリスト個人のInstagramやSNSでフォロワーを獲得し、そこからGBPや予約ページへ誘導する方法が一般的です。" },
  { q: "悪い口コミがついた場合どうすればいいですか？", a: "削除を要求するのではなく、誠実な返信を心がけます。謝罪と改善策を記載した返信は、未来の顧客への信頼度を高めます。Googleが規約違反（スパム等）と判断した口コミは削除申請できます。" },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策とは", desc: "MEO対策の基礎" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "GBP設定" },
  { href: "/meo/review-management", label: "口コミ対策", desc: "口コミ獲得・返信" },
  { href: "/industries/beauty", label: "美容室のWeb集客", desc: "美容業向け総合支援" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/meo">MEO対策</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              美容室・サロンのMEO対策
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Beauty Salon MEO</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              美容室・サロンのMEO対策
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              美容室・ネイルサロン・エステを探すユーザーの多くはGoogleマップで「〇〇駅 美容室」「近く ネイルサロン」と検索しています。競合が多い美容業では、GBPの充実と口コミ管理が集客力の差を生みます。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_21_48.png" alt="美容室・サロンのMEO対策" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Key Actions</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              美容サロン特有のGBP最適化ポイント
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "サービス一覧の詳細設定", b: "カット・カラー・パーマ・トリートメント・ネイル・まつエクなど、提供するすべてのサービスを価格とともに登録します。「縮毛矯正 安い」などの具体的な検索にヒットしやすくなります。" },
                { n: "02", t: "施術写真の充実（ビフォーアフター）", b: "ヘアスタイル・ネイルデザイン・施術後の写真を豊富に用意します。ビフォーアフター写真は来店前の不安を取り除き、予約率を上げる効果があります。" },
                { n: "03", t: "内装・外観・スタッフ写真の追加", b: "店内の雰囲気・清潔感を伝える内装写真、スタッフの笑顔写真を追加します。「どんな雰囲気のお店か」を事前に伝えることで来店ハードルを下げます。" },
                { n: "04", t: "予約システムとの連携", b: "ホットペッパービューティ・LINE予約・自社Webフォームなどの予約URLをGBPに設定します。「今すぐ予約」ボタンで直接予約できる状態にします。" },
                { n: "05", t: "女性専用・男性可などの属性設定", b: "対象性別・バリアフリー対応・駐車場有無などの属性を設定します。「女性専用 美容室」などの絞り込み検索でのヒット率が向上します。" },
                { n: "06", t: "口コミへの感謝コメントと返信", b: "施術を気に入ってくれたお客様に口コミをお願いするフローを作ります。全ての口コミに個別メッセージで返信することで、誠実さと高い顧客対応力をアピールします。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#f8f6f2" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="美容室・サロンのMEO対策ご相談" body="美容室・ネイルサロン・エステのGoogleマップ集客をサポートします。GBP最適化・口コミ対策・写真投稿・予約連携まで一括でご支援します。" />
      </main>
      <Footer />
    </>
  );
}

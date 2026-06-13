import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 株式会社サイプレス",
    default: "株式会社サイプレス | AI×Webマーケティングカンパニー",
  },
  description:
    "MEO・SEO・AIO・ホームページ制作を通じて、中小企業のWeb集客を支援するマーケティングカンパニー。東京都葛飾区。",
  keywords: [
    "MEO対策",
    "SEO対策",
    "AIO対策",
    "ホームページ制作",
    "Webマーケティング",
    "AI活用",
    "中小企業",
    "集客支援",
    "東京",
  ],
  openGraph: {
    title: "株式会社サイプレス | AI×Webマーケティングカンパニー",
    description:
      "MEO・SEO・AIO・ホームページ制作を通じて、中小企業のWeb集客を支援するマーケティングカンパニー。",
    locale: "ja_JP",
    type: "website",
    siteName: "株式会社サイプレス",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

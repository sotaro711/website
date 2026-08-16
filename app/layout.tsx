import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

// 和欧で使えるウェイトを 400 / 500 / 700 に揃えている。
// Zen Kaku Gothic New に 600 が無いため、600 は使わない。
const plexSans = IBM_Plex_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-sans",
});

// 和文。ファイル数が多いので preload は切り、必要になった時点で読ませる。
const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-kaku",
  preload: false,
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "Sotaro Ando",
  description: "Student / Software Engineer Intern",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${plexSans.variable} ${zenKaku.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

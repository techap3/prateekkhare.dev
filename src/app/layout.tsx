import type { Metadata } from "next";
import { Geist, IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-display",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-meta",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const newsreader = Newsreader({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prateek Khare",
  description: "Portfolio of Prateek Khare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${ibmPlexMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-[#111111]">{children}</body>
    </html>
  );
}

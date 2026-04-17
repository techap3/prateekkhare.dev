import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-black">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <Navbar />
          <main className="pb-8">{children}</main>
          <footer className="mt-16 flex items-center justify-between border-t border-zinc-200 py-8 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            <p>Prateek Khare</p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hello@prateekkhare.dev"
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                Email
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

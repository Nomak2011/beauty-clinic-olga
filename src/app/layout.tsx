import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Olga Baher — Kosmetologie in N\u00fcrnberg",
  description:
    "Fachkosmetik in N\u00fcrnberg. Injektions- und apparative Verfahren, \u00e4sthetische Pflege. Nat\u00fcrliche Verj\u00fcngung ohne sichtbare Eingriffe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}

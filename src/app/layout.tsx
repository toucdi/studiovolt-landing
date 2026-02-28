import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Studio Volt — Siti Web Professionali per il Tuo Studio",
  description: "Specializzati nel creare siti web eleganti e ad alte prestazioni per studi dentistici e legali. Minimali, veloci, premium.",
  metadataBase: new URL("https://studiovolt.it"),
  openGraph: {
    title: "Studio Volt — Siti Web Professionali",
    description: "Il tuo studio merita una presenza online all'altezza. €700, tutto incluso.",
    url: "https://studiovolt.it",
    siteName: "Studio Volt",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

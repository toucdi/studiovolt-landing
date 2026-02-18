import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Studio Volt — Siti Web Professionali per il Tuo Studio",
  description: "Creiamo siti web moderni, veloci e ottimizzati per studi medici, dentistici e legali. €700 tutto incluso, online in 7 giorni.",
  keywords: "sito web professionale, sito dentista, sito studio medico, sito avvocato, web design Roma, sito web €700",
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
    <html lang="it" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

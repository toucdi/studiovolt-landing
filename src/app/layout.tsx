import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Studio Volt — Agenti AI Operativi per PMI e Professionisti",
  description: "Agenti AI che lavorano davvero: gestiscono inbox, seguono lead, automatizzano processi. Soluzioni su misura per PMI e professionisti italiani.",
  metadataBase: new URL("https://studiovolt.it"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
    languages: {
      "it-IT": "/",
      "en": "/en",
    },
  },
  openGraph: {
    title: "Studio Volt — Agenti AI Operativi",
    description: "Agenti AI che lavorano per te: inbox, lead, client ops. Tecnologia concreta per PMI italiane.",
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

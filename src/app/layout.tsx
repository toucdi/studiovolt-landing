import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Studio Volt - Siti Web Professionali per Dentisti, Medici, Avvocati | €700",
  description: "Siti web professionali per studi medici, dentistici e legali. Design moderno, mobile-first, SEO ottimizzato. Consegna in 7 giorni a €700 tutto incluso. Preventivo gratuito.",
  keywords: "sito web dentista, sito web medico, sito web avvocato, web agency Roma, siti web professionali, SEO locale, marketing digitale studi",
  authors: [{ name: "Studio Volt" }],
  creator: "Studio Volt",
  publisher: "Studio Volt",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://studiovolt.it",
    siteName: "Studio Volt",
    title: "Studio Volt - Siti Web Professionali €700",
    description: "Siti web professionali per studi medici, dentistici e legali. Design moderno, consegna in 7 giorni, tutto incluso a €700.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Studio Volt - Web Agency per Professionisti"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Volt - Siti Web Professionali €700",
    description: "Siti web professionali per studi medici, dentistici e legali. Consegna in 7 giorni.",
    images: ["/og-image.png"]
  },
  alternates: {
    canonical: "https://studiovolt.it"
  },
  other: {
    "google-site-verification": "your-google-verification-code"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={inter.variable}>
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Studio Volt",
              "description": "Web agency specializzata in siti web per professionisti",
              "url": "https://studiovolt.it",
              "email": "olivia@studiovolt.it",
              "areaServed": {
                "@type": "Country",
                "name": "Italia"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Roma",
                "addressCountry": "IT"
              },
              "priceRange": "€700",
              "serviceType": "Web Design",
              "offers": {
                "@type": "Offer",
                "name": "Sito Web Professionale",
                "price": "700",
                "priceCurrency": "EUR",
                "description": "Sito web professionale tutto incluso con hosting, SEO e supporto"
              }
            })
          }}
        />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        
        {/* Security headers */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
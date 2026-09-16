import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Solutions from "@/components/Solutions";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Volt — Professional Websites for Your Practice",
  description:
    "Specialized in creating elegant, high-performance websites for dental and legal practices. Minimal, fast, premium.",
  metadataBase: new URL("https://studiovolt.it"),
  alternates: {
    canonical: "/en",
    languages: {
      "it-IT": "/",
      "en": "/en",
    },
  },
  openGraph: {
    title: "Studio Volt — Professional Websites",
    description:
      "Your practice deserves an online presence that matches its excellence. €700, all-inclusive.",
    url: "https://studiovolt.it/en",
    siteName: "Studio Volt",
    type: "website",
    locale: "en",
  },
};

export default function EnglishHome() {
  const locale = "en";

  return (
    <main className="relative overflow-hidden">
      <Navbar locale={locale} />
      <Hero locale={locale} />
      <Stats locale={locale} />
      <Services locale={locale} />
      <Process locale={locale} />
      <Pricing locale={locale} />
      <Solutions locale={locale} />
      <FAQ locale={locale} />
      <CTA locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}

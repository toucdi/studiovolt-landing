import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Volt — Operational AI Agents for SMEs and Professionals",
  description:
    "AI agents that truly work: manage inboxes, follow leads, automate processes. Custom solutions for Italian SMEs and professionals.",
  metadataBase: new URL("https://studiovolt.it"),
  alternates: {
    canonical: "/en",
    languages: {
      "it-IT": "/",
      "en": "/en",
    },
  },
  openGraph: {
    title: "Studio Volt — Operational AI Agents",
    description:
      "AI agents working for you: inbox, leads, client ops. Concrete technology for Italian SMEs.",
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
      <Solutions locale={locale} />
      <Portfolio locale={locale} />
      <Process locale={locale} />
      <Pricing locale={locale} />
      <FAQ locale={locale} />
      <CTA locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}

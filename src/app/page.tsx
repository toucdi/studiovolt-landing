import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Solutions from "@/components/Solutions";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const locale = "it";

  return (
    <main className="relative overflow-hidden">
      <Navbar locale={locale} />
      <Hero locale={locale} />
      <Stats locale={locale} />
      <Services locale={locale} />
      <Portfolio locale={locale} />
      <Process locale={locale} />
      <Pricing locale={locale} />
      <Solutions locale={locale} />
      <FAQ locale={locale} />
      <CTA locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}

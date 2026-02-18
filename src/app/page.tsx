import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

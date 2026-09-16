import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/dictionaries";

type FooterProps = {
  locale: Locale;
};

export default function Footer({ locale }: FooterProps) {
  const dict = getDictionary(locale);

  return (
    <footer className="bg-white border-t border-slate-100 py-24">
      <div className="container-minimal">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-black text-lg">
                V
              </div>
              <span className="text-xl font-black uppercase tracking-tighter text-black">
                Studio Volt
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              {dict.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-black mb-6">
              {dict.footer.navTitle}
            </h4>
            <div className="flex flex-col gap-4">
              {dict.footer.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-slate-500 hover:text-black transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-black mb-6">
              {dict.footer.contactTitle}
            </h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:sales@studiovolt.it" className="text-sm text-slate-500 hover:text-black transition-colors">
                sales@studiovolt.it
              </a>
              <p className="text-sm text-slate-400">{dict.footer.vat}</p>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">
            {dict.footer.copyright.replace("{year}", new Date().getFullYear().toString())}
          </p>
          
          {/* Footer Language Switcher */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${
                locale === "it" ? "text-black" : "text-slate-300 hover:text-slate-500"
              }`}
            >
              IT
            </Link>
            <span className="text-slate-300 text-[10px]">|</span>
            <Link
              href="/en"
              className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${
                locale === "en" ? "text-black" : "text-slate-300 hover:text-slate-500"
              }`}
            >
              EN
            </Link>
          </div>

          <p className="text-[10px] text-slate-300 font-medium">
            {dict.footer.edition}
          </p>
        </div>
      </div>
    </footer>
  );
}

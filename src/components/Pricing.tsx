"use client";

const features = [
  "Design personalizzato",
  "Fino a 5 pagine",
  "Responsive mobile-first",
  "SEO on-page ottimizzato",
  "Certificato SSL / HTTPS",
  "Cookie banner GDPR",
  "Google Analytics configurato",
  "Form di contatto",
  "Mappa Google integrata",
  "Hosting primo anno incluso",
  "Dominio .it incluso",
  "Supporto post-lancio 30gg",
];

export default function Pricing() {
  return (
    <section id="prezzi" className="bg-white py-24 md:py-40">
      <div className="container-minimal border-t border-black pt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Header */}
          <div className="md:col-span-12 mb-12">
            <h2 className="text-4xl md:text-8xl font-black text-black tracking-tighter uppercase leading-[0.85]">
              Costo <br />
              <span className="text-slate-200">Trasparente.</span>
            </h2>
          </div>

          {/* Price */}
          <div className="md:col-span-6 flex flex-col justify-between py-12 border-t border-slate-100">
            <div>
              <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-black mb-8">
                SITO WEB PROFESSIONALE
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-slate-400 text-2xl md:text-4xl font-light tracking-tight">a partire da</span>
              </div>
              <div className="text-8xl md:text-[10rem] font-black tracking-tighter text-black leading-none mb-4">
                €700
              </div>
              <p className="text-slate-500 text-lg font-light">Una tantum. Tutto incluso. Nessun extra nascosto.</p>
            </div>

            <div className="mt-12">
              <a
                href="#contatti"
                className="btn-minimal w-full md:w-auto text-xl px-16 py-6"
              >
                Inizia il Progetto
              </a>
              <p className="text-[10px] text-slate-400 mt-6 font-bold tracking-widest uppercase">
                Dominio e hosting inclusi per il 1° anno
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="md:col-span-5 md:col-start-8 border-t border-slate-100 py-12">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-black mb-12">Cosa è incluso</h4>
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 bg-black opacity-20 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-bold tracking-widest uppercase text-black">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-slate-50">
              <p className="text-xs text-slate-400 leading-relaxed italic">
                Sviluppato con metodologie agili. Consegna garantita in 7 giorni lavorativi.
              </p>
            </div>
          </div>
        </div>

        {/* Custom Projects */}
        <div className="mt-24 pt-16 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-black mb-6">
                APP / GESTIONALI / AI / E-COMMERCE
              </div>
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-black uppercase leading-[0.9] mb-6">
                Progetti <span className="text-slate-200">su misura</span>
              </h3>
              <p className="text-slate-500 font-light leading-relaxed max-w-lg">
                Ogni progetto complesso ha esigenze uniche. App mobile, software gestionali,
                soluzioni AI, e-commerce — analizziamo le tue necessità e ti presentiamo
                un preventivo dettagliato, senza sorprese.
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <a
                href="#contatti"
                className="btn-outline-minimal w-full text-sm px-12 py-6 uppercase tracking-[0.15em]"
              >
                Richiedi Preventivo
              </a>
              <p className="text-[10px] text-slate-400 mt-6 font-bold tracking-widest uppercase text-center">
                Risposta entro 48 ore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

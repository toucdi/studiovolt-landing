"use client";

const features = [
  "Analisi processi e discovery",
  "Configurazione agente AI",
  "Integrazione piattaforme esistenti",
  "Training su dati aziendali",
  "Dashboard monitoraggio",
  "Accesso API e log completi",
  "Sicurezza e privacy GDPR",
  "Supporto e manutenzione",
  "Aggiornamenti inclusi",
  "Ottimizzazione continua",
  "Backup e disaster recovery",
  "Documentazione tecnica completa",
];

export default function Pricing() {
  return (
    <section id="prezzi" className="bg-white py-24 md:py-40">
      <div className="container-minimal border-t border-black pt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Header */}
          <div className="md:col-span-12 mb-12">
            <h2 className="text-4xl md:text-8xl font-black text-black tracking-tighter uppercase leading-[0.85]">
              Pacchetti <br />
              <span className="text-slate-200">su misura.</span>
            </h2>
          </div>

          {/* Price */}
          <div className="md:col-span-6 flex flex-col justify-between py-12 border-t border-slate-100">
            <div>
              <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-black mb-8">
                AGENTE AI OPERATIVO
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-slate-400 text-2xl md:text-3xl font-light tracking-tight">Da configurare insieme</span>
              </div>
              <div className="text-5xl md:text-7xl font-black tracking-tighter text-black leading-none mb-6">
                Preventivo
              </div>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Ogni azienda è diversa. Analizziamo il tuo caso, definiamo scope e obiettivi, ti presentiamo un preventivo chiaro. Modello one-time + manutenzione oppure canone mensile all-inclusive.
              </p>
            </div>

            <div className="mt-12">
              <a
                href="#contatti"
                className="btn-minimal w-full md:w-auto text-xl px-16 py-6"
              >
                Richiedi Preventivo
              </a>
              <p className="text-[10px] text-slate-400 mt-6 font-bold tracking-widest uppercase">
                Consulenza gratuita / Risposta entro 24 ore
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
                Setup e go-live tipicamente in 2-4 settimane. Dipende dalla complessità delle integrazioni e dal volume di training necessario.
              </p>
            </div>
          </div>
        </div>

        {/* Custom Projects */}
        <div className="mt-24 pt-16 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-black mb-6">
                SITI WEB / SOFTWARE / INTEGRAZIONI
              </div>
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-black uppercase leading-[0.9] mb-6">
                Sviluppo <span className="text-slate-200">custom</span>
              </h3>
              <p className="text-slate-500 font-light leading-relaxed max-w-lg">
                Oltre agli agenti AI, realizziamo siti web, gestionali, app mobile, e-commerce.
                Se hai bisogno di software su misura o integrazioni complesse, possiamo occuparcene.
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

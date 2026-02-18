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
    <section id="prezzi" className="relative py-24 md:py-32">
      {/* BG glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Pricing</span>
          <h2 className="font-[family-name:var(--font-space)] text-4xl md:text-5xl font-bold mt-4">
            Un prezzo.
            <br />
            <span className="gradient-text">Zero sorprese.</span>
          </h2>
        </div>

        {/* Pricing Card */}
        <div className="relative">
          <div className="gradient-border rounded-3xl p-8 md:p-12 glow-accent">
            <div className="relative z-10 text-center">
              {/* Price */}
              <div className="mb-2">
                <span className="text-volt-400 text-lg">Pacchetto completo</span>
              </div>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="font-[family-name:var(--font-space)] text-7xl md:text-8xl font-bold gradient-text">
                  €700
                </span>
              </div>
              <p className="text-volt-400 mb-10">Una tantum · Nessun abbonamento nascosto</p>

              {/* Features grid */}
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-left max-w-lg mx-auto mb-10">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-accent-2/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-accent-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-volt-200">{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contatti"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-lg transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1"
              >
                Voglio il Mio Sito
                <span>→</span>
              </a>

              <p className="text-volt-500 text-xs mt-4">
                Hosting dal 2° anno: €120/anno · Pagine extra: €100/cad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

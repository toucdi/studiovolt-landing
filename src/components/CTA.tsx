export default function CTA() {
  return (
    <section id="contatti" className="relative py-24 md:py-32">
      {/* BG effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light text-sm text-volt-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent-2 animate-pulse" />
          Disponibilità limitata — max 5 progetti al mese
        </div>

        <h2 className="font-[family-name:var(--font-space)] text-4xl md:text-6xl font-bold mb-6">
          Pronto a portare il tuo
          <br />
          <span className="gradient-text">studio online?</span>
        </h2>

        <p className="text-volt-400 text-lg mb-10 max-w-xl mx-auto">
          Scrivici oggi. Ti rispondiamo entro 24 ore con una proposta personalizzata per il tuo studio. Nessun impegno.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:olivia@studiovolt.it?subject=Richiesta%20sito%20web%20professionale"
            className="group px-10 py-4 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-lg transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1"
          >
            📧 Scrivici una Mail
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <p className="text-volt-500 text-sm mt-6">
          olivia@studiovolt.it · Rispondiamo entro 24h
        </p>
      </div>
    </section>
  );
}

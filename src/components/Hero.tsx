export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid noise">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-2/15 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light text-sm text-volt-300 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent-2 animate-pulse" />
          Siti web per professionisti — da €700
        </div>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-space)] text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 animate-fade-in-up">
          Il tuo studio merita
          <br />
          <span className="gradient-text">un sito all&apos;altezza</span>
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-volt-300 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200" style={{ opacity: 0 }}>
          Creiamo siti web moderni, velocissimi e ottimizzati per i motori di ricerca.
          Pensati per dentisti, medici e avvocati. Chiavi in mano, online in 7 giorni.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300" style={{ opacity: 0 }}>
          <a
            href="#contatti"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-lg transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 animate-pulse-glow"
          >
            Richiedi il Tuo Sito
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#processo"
            className="px-8 py-4 rounded-full glass-light text-volt-200 font-medium text-lg hover:text-white hover:border-white/20 transition-all"
          >
            Come Funziona
          </a>
        </div>

        {/* Browser mockup */}
        <div className="mt-20 animate-fade-in-up delay-500" style={{ opacity: 0 }}>
          <div className="relative mx-auto max-w-4xl">
            <div className="gradient-border p-1">
              <div className="bg-volt-800 rounded-[0.9rem] p-6 md:p-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <div className="flex-1 mx-4 h-7 rounded-lg bg-volt-700/50 flex items-center px-3">
                    <span className="text-xs text-volt-400">studiovolt.it/il-tuo-studio</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 space-y-3">
                    <div className="h-4 bg-gradient-to-r from-accent/30 to-transparent rounded w-3/4" />
                    <div className="h-3 bg-volt-700/50 rounded w-full" />
                    <div className="h-3 bg-volt-700/50 rounded w-5/6" />
                    <div className="h-3 bg-volt-700/50 rounded w-2/3" />
                    <div className="mt-4 h-10 w-40 rounded-lg bg-gradient-to-r from-accent/40 to-accent-2/40" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-24 bg-volt-700/30 rounded-lg" />
                    <div className="h-16 bg-volt-700/30 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-accent/10 blur-3xl rounded-full" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-volt-500 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-accent animate-pulse" />
        </div>
      </div>
    </section>
  );
}

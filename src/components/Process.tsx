const steps = [
  {
    num: "01",
    title: "Ci Contatti",
    desc: "Scrivici una mail o compila il form. Ti rispondiamo entro 24 ore con una proposta personalizzata.",
    accent: "from-accent to-accent-light",
  },
  {
    num: "02",
    title: "Creiamo il Tuo Sito",
    desc: "In 5 giorni lavorativi progettiamo e sviluppiamo il tuo sito. Ti mostriamo una bozza per il tuo feedback.",
    accent: "from-accent-light to-accent-2",
  },
  {
    num: "03",
    title: "Vai Online",
    desc: "Dopo la tua approvazione, pubblichiamo il sito e configuriamo dominio, email e analytics.",
    accent: "from-accent-2 to-emerald-400",
  },
];

export default function Process() {
  return (
    <section id="processo" className="relative py-24 md:py-32 bg-volt-800/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent-2 text-sm font-semibold tracking-widest uppercase">Come Funziona</span>
          <h2 className="font-[family-name:var(--font-space)] text-4xl md:text-5xl font-bold mt-4">
            Da zero a online
            <br />
            <span className="gradient-text">in 3 semplici passi</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent-2 to-transparent hidden md:block" />

          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 md:gap-10 items-start group">
                {/* Number */}
                <div className={`shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.accent} flex items-center justify-center font-[family-name:var(--font-space)] text-xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {step.num}
                </div>
                {/* Content */}
                <div className="pt-2">
                  <h3 className="font-[family-name:var(--font-space)] text-2xl font-bold text-volt-50 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-volt-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

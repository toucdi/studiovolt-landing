const services = [
  {
    icon: "🎨",
    title: "Design Su Misura",
    desc: "Niente template generici. Ogni sito è progettato per riflettere l'identità unica del tuo studio.",
  },
  {
    icon: "⚡",
    title: "Velocità Estrema",
    desc: "Caricamento sotto i 2 secondi. I tuoi pazienti non aspettano, il tuo sito nemmeno.",
  },
  {
    icon: "📱",
    title: "Mobile First",
    desc: "Il 70% dei tuoi pazienti ti cerca dal telefono. Il tuo sito sarà perfetto su ogni schermo.",
  },
  {
    icon: "🔍",
    title: "SEO Ottimizzato",
    desc: "Struttura, meta tag e performance ottimizzate per farti trovare su Google nella tua zona.",
  },
  {
    icon: "🔒",
    title: "HTTPS & GDPR",
    desc: "Certificato SSL incluso, cookie banner e privacy policy conformi alla normativa italiana.",
  },
  {
    icon: "🛠️",
    title: "Manutenzione Inclusa",
    desc: "Aggiornamenti, backup e supporto tecnico. Tu pensi ai pazienti, al sito ci pensiamo noi.",
  },
];

export default function Services() {
  return (
    <section id="servizi" className="relative py-24 md:py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Servizi</span>
          <h2 className="font-[family-name:var(--font-space)] text-4xl md:text-5xl font-bold mt-4">
            Tutto quello che ti serve,
            <br />
            <span className="gradient-text">niente di quello che non serve</span>
          </h2>
          <p className="text-volt-400 mt-4 max-w-xl mx-auto">
            Un sito professionale completo, senza sorprese. Ecco cosa è incluso nel pacchetto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group gradient-border p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-[family-name:var(--font-space)] text-lg font-bold text-volt-50 mb-2">
                  {service.title}
                </h3>
                <p className="text-volt-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

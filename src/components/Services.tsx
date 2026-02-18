export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Sito Web Professionale",
      price: "€700",
      description: "Design moderno e responsive, ottimizzato per convertire i tuoi visitatori in clienti.",
      features: [
        "Design personalizzato",
        "5-8 pagine ottimizzate",
        "Form di contatto",
        "Galleria foto",
        "Certificati SSL incluso",
        "Hosting 1 anno incluso"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "SEO Base",
      price: "Incluso",
      description: "Ottimizzazione per i motori di ricerca per essere trovati dai tuoi potenziali pazienti/clienti.",
      features: [
        "Ricerca parole chiave",
        "Meta tag ottimizzati",
        "Schema markup",
        "Google My Business setup",
        "Sitemap XML",
        "Google Analytics"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile-First",
      price: "Standard",
      description: "Il tuo sito funziona perfettamente su smartphone, tablet e desktop. La maggior parte dei tuoi clienti ti cercherà dal telefono.",
      features: [
        "Design responsive",
        "Caricamento veloce",
        "Touch-friendly",
        "Ottimizzato per Google",
        "Test cross-browser",
        "Performance ottimizzate"
      ]
    }
  ];

  return (
    <section id="servizi" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tutto ciò che serve per avere una presenza online professionale ed efficace
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-100 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">{service.title}</h3>
                <div className="text-3xl font-bold text-gold-500 mb-3">{service.price}</div>
                <p className="text-gray-600">{service.description}</p>
              </div>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gold-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">Pacchetto Completo</h3>
            <p className="text-lg text-gray-700 mb-6">
              Sito web professionale + SEO base + Design mobile-first
            </p>
            <div className="text-4xl font-bold text-gold-500 mb-4">€700</div>
            <p className="text-gray-600">Una tantum • Nessun costo mensile aggiuntivo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
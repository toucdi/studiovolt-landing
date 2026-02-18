export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Ti Contattiamo",
      description: "Dopo aver ricevuto la tua richiesta, ti chiamiamo entro 24 ore per capire le tue esigenze e il tuo target di clienti.",
      icon: (
        <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Creiamo la Bozza",
      description: "Il nostro team sviluppa una bozza personalizzata del tuo sito. Ti mostriamo l'anteprima e raccogliamo i tuoi feedback per perfezionarla.",
      icon: (
        <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Pubblichiamo",
      description: "Una volta approvato, pubblichiamo il tuo sito web e configoriamo tutto il necessario. Il tuo nuovo sito è online e pronto ad attirare clienti!",
      icon: (
        <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="come-funziona" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Come Funziona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processo semplice e trasparente per il tuo nuovo sito web professionale
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-3xl">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-200"></div>
              <div className="absolute top-0 left-0 w-2/3 h-0.5 bg-gold-500"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Mobile Timeline */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-6 top-20 w-0.5 h-20 bg-gray-200"></div>
                )}
                
                <div className="text-center md:text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-white border-4 border-gold-500 rounded-full mb-6 z-10">
                    <span className="text-xl font-bold text-gold-500">{step.number}</span>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-center mb-4">
                      {step.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-black mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold text-black mb-4">⏱️ Tempi di Consegna</h3>
            <p className="text-lg text-gray-700 mb-4">
              Il tuo sito web sarà online in <strong className="text-gold-500">massimo 7 giorni</strong> dalla conferma del progetto.
            </p>
            <p className="text-gray-600">
              La maggior parte dei progetti viene completata in 3-5 giorni lavorativi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
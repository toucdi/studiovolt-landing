export default function About() {
  return (
    <section id="chi-siamo" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Chi Siamo
            </h2>
            <p className="text-xl text-gray-600">
              La passione per il design digitale incontra l'esperienza nel settore professionale
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                {/* Placeholder per la foto */}
                <div className="w-80 h-80 mx-auto lg:mx-0 bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gold-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-gold-600 font-medium">Foto Olivia</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gold-200 rounded-full opacity-60 hidden lg:block"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gold-300 rounded-full opacity-60 hidden lg:block"></div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-black mb-2">
                  Olivia Spendersen
                </h3>
                <p className="text-xl text-gold-500 font-semibold mb-6">
                  Digital Consultant & Founder
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Ciao! Sono Olivia, la fondatrice di Studio Volt. Dopo anni di esperienza nel settore digitale, 
                  ho deciso di specializzarmi nella creazione di siti web per professionisti del settore sanitario e legale.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Comprendo perfettamente le sfide che dentisti, medici e avvocati affrontano nel comunicare online 
                  con i propri pazienti e clienti. Per questo motivo, ogni sito che creo è pensato per 
                  <strong className="text-black"> trasmettere professionalità e instaurare fiducia</strong>.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  La mia missione è semplice: aiutarti a crescere online con un sito web che rappresenti 
                  davvero la qualità dei tuoi servizi professionali.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full">
                  <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">5+ anni di esperienza</span>
                </div>
                
                <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full">
                  <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">50+ siti web realizzati</span>
                </div>
                
                <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full">
                  <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Specializzata in settori professionali</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gold-50 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-black mb-4">La Mia Promessa</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mi impegno personalmente su ogni progetto per garantirti un sito web che non solo sia bello da vedere, 
                ma che funzioni davvero per la crescita del tuo studio professionale. 
                <strong className="text-gold-600"> La tua soddisfazione è la mia priorità assoluta.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
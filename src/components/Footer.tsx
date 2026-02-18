export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold">
                Studio <span className="text-gold-500">Volt</span>
              </span>
              <p className="text-gray-300 mt-3 max-w-md leading-relaxed">
                Creiamo siti web professionali per dentisti, medici e avvocati. 
                Design moderno, consegna rapida e risultati garantiti.
              </p>
            </div>

            <div className="flex space-x-4">
              <a 
                href="mailto:info@studiovolt.it" 
                className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              
              <a 
                href="tel:+391234567890" 
                className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors"
                aria-label="Telefono"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              
              <a 
                href="https://linkedin.com/company/studiovolt" 
                className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Link Rapidi</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-gold-500 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servizi')}
                  className="text-gray-300 hover:text-gold-500 transition-colors text-left"
                >
                  Servizi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('come-funziona')}
                  className="text-gray-300 hover:text-gold-500 transition-colors text-left"
                >
                  Come Funziona
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('chi-siamo')}
                  className="text-gray-300 hover:text-gold-500 transition-colors text-left"
                >
                  Chi Siamo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contatti')}
                  className="text-gray-300 hover:text-gold-500 transition-colors text-left"
                >
                  Contatti
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@studiovolt.it" className="text-gray-300 hover:text-white transition-colors">
                  info@studiovolt.it
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+391234567890" className="text-gray-300 hover:text-white transition-colors">
                  +39 123 456 7890
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">
                  Lun-Ven: 9:00 - 18:00
                </span>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-400 mb-2">
                <strong>Studio Volt di Olivia Spendersen</strong>
              </p>
              <p className="text-sm text-gray-400 mb-1">
                P.IVA: 12345678901
              </p>
              <p className="text-sm text-gray-400">
                Codice Fiscale: SPNLVO85M41H501X
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 Studio Volt. Tutti i diritti riservati.
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="/termini" className="text-gray-400 hover:text-white transition-colors">
                  Termini di Servizio
                </a>
              </div>
            </div>
            
            <div className="text-sm text-gray-400">
              Siti web professionali • Design italiano • Consegna rapida
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
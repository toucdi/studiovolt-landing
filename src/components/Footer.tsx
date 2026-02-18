'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Servizi', href: '#servizi' },
    { label: 'Come Funziona', href: '#come-funziona' },
    { label: 'Chi Siamo', href: '#chi-siamo' },
    { label: 'Contatti', href: '#contatti' }
  ];

  const services = [
    'Siti Web Premium',
    'SEO Ottimizzato',
    'Mobile-First Design',
    'Hosting Incluso',
    'Supporto Dedicato'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-black">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-10 left-20 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-40 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <motion.div 
                  className="text-3xl font-bold mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Studio
                  </span>
                  <span className="text-white">Volt</span>
                </motion.div>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  Siti web professionali che trasformano la presenza digitale dei professionisti italiani. 
                  Design premium, consegna garantita in 7 giorni.
                </p>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-300 text-sm font-medium">Attualmente disponibili</span>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-3">Contattaci subito</h4>
                <div className="space-y-2">
                  <a 
                    href="mailto:olivia@studiovolt.it" 
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                      📧
                    </div>
                    olivia@studiovolt.it
                  </a>
                  <div className="flex items-center gap-3 text-gray-400">
                    <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      🕒
                    </div>
                    Risposta entro 24h
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold text-lg mb-6">Navigazione</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold text-lg mb-6">I nostri servizi</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">€700</div>
                  <div className="text-xs text-gray-300">Tutto incluso</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="text-center bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Pronto a portare il tuo studio online?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Richiedi la tua bozza gratuita e scopri come possiamo trasformare la tua presenza digitale in 7 giorni.
              </p>
              <motion.button
                onClick={() => scrollToSection('#contatti')}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Iniziamo subito →
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © {currentYear} Studio Volt. Tutti i diritti riservati. • P.IVA: [da definire]
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>Made in Italy 🇮🇹</span>
                <span>•</span>
                <span>Roma & Italia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
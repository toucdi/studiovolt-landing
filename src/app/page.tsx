'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ nome: '', email: '', messaggio: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight">
            Studio<span className="text-amber-500">Volt</span>
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#servizi" className="hover:text-gray-900 transition">Servizi</a>
            <a href="#come-funziona" className="hover:text-gray-900 transition">Come Funziona</a>
            <a href="#chi-siamo" className="hover:text-gray-900 transition">Chi Siamo</a>
            <a href="#contatti" className="hover:text-gray-900 transition">Contatti</a>
          </div>
          <a href="#contatti" className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-amber-500 transition">
            Parliamone
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-4xl text-center">
          <div className="inline-block bg-amber-50 text-amber-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            ⚡ Siti consegnati in 7 giorni
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Il tuo studio merita<br />
            <span className="text-amber-500">una presenza online</span><br />
            all&apos;altezza.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Creiamo siti web professionali per studi medici, dentistici e legali.
            Moderni, veloci, ottimizzati per Google. A €700, tutto incluso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contatti" className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-amber-500 transition">
              Richiedi la tua bozza gratuita
            </a>
            <a href="#come-funziona" className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:border-amber-500 hover:text-amber-600 transition">
              Come funziona →
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-12 text-center">
          <div>
            <p className="text-3xl font-bold text-gray-900">7</p>
            <p className="text-sm text-gray-500">Giorni per la consegna</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">€700</p>
            <p className="text-sm text-gray-500">Tutto incluso</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">100%</p>
            <p className="text-sm text-gray-500">Mobile-first</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">SEO</p>
            <p className="text-sm text-gray-500">Ottimizzato per Google</p>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section id="servizi" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Cosa includiamo</h2>
          <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
            Tutto quello che serve al tuo studio per essere trovato online. Niente di più, niente di meno.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌐',
                title: 'Sito Web Professionale',
                desc: 'Design moderno e personalizzato sulla tua attività. Responsive, veloce, con modulo di contatto integrato.',
              },
              {
                icon: '📱',
                title: 'Mobile-First',
                desc: 'L\'80% dei tuoi futuri clienti ti cercherà dal telefono. Il sito è pensato prima per mobile, poi per desktop.',
              },
              {
                icon: '🔍',
                title: 'SEO Base',
                desc: 'Ottimizzazione per i motori di ricerca: meta tag, velocità, struttura. Per farti trovare su Google.',
              },
              {
                icon: '⚡',
                title: 'Hosting Incluso',
                desc: 'Il sito è ospitato su infrastruttura veloce e affidabile. Nessun costo aggiuntivo per il primo anno.',
              },
              {
                icon: '🛡️',
                title: 'HTTPS & Sicurezza',
                desc: 'Certificato SSL incluso. I tuoi visitatori vedranno il lucchetto verde nella barra del browser.',
              },
              {
                icon: '🤝',
                title: 'Assistenza Dedicata',
                desc: 'Dopo la consegna non sparisco. Assistenza e modifiche disponibili con piani personalizzati.',
              },
            ].map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:bg-amber-50 transition group">
                <span className="text-4xl mb-4 block">{s.icon}</span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600 transition">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Come Funziona */}
      <section id="come-funziona" className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Come funziona</h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
            Tre passi. Nessun impegno fino a quando non sei soddisfatto.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Ci sentiamo',
                desc: 'Ti contattiamo o ci scrivi tu. Ci racconti il tuo studio e cosa ti serve. Nessun impegno.',
              },
              {
                step: '02',
                title: 'Creiamo la bozza',
                desc: 'In pochi giorni ti presentiamo un sito web completo, pensato sul tuo studio. Lo vedi prima di decidere.',
              },
              {
                step: '03',
                title: 'Online in 7 giorni',
                desc: 'Se ti piace, ci incontriamo per i dettagli e il sito va online. €700, tutto incluso.',
              },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <span className="text-6xl font-bold text-amber-500/20 block mb-4">{s.step}</span>
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chi Siamo */}
      <section id="chi-siamo" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Chi siamo</h2>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto">
            Un team snello che fa le cose bene, in fretta, e senza farti perdere tempo.
          </p>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center text-3xl mb-4">💫</div>
              <h3 className="text-xl font-bold mb-1">Olivia Spendersen</h3>
              <p className="text-amber-600 text-sm font-medium mb-3">Digital Consultant</p>
              <p className="text-gray-500 leading-relaxed">
                Mi occupo di comunicazione digitale per professionisti. Analizzo la tua presenza online, 
                creo il sito e ti seguo dopo la consegna. Sono il tuo primo punto di contatto.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-1">Alexandru Ouatu</h3>
              <p className="text-amber-600 text-sm font-medium mb-3">Tech Lead & Co-Founder</p>
              <p className="text-gray-500 leading-relaxed">
                Sviluppatore senior full stack con anni di esperienza. Si occupa dell&apos;architettura tecnica 
                e dell&apos;incontro con il cliente per definire i dettagli del progetto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pronto a fare il salto?
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Ti prepariamo una bozza gratuita. Se non ti piace, non ci devi niente.
          </p>
          <a href="#contatti" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-900 hover:text-white transition">
            Richiedi la bozza gratuita
          </a>
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="py-24 px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Parliamone</h2>
          <p className="text-gray-500 text-center mb-12">
            Scrivici e ti ricontattiamo entro 24 ore con una proposta.
          </p>
          {sent ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <span className="text-4xl block mb-4">✅</span>
              <h3 className="text-xl font-bold text-green-800 mb-2">Messaggio inviato!</h3>
              <p className="text-green-600">Ti ricontattiamo entro 24 ore. Grazie!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome e Cognome</label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition"
                  placeholder="Dr. Mario Rossi"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition"
                  placeholder="studio@esempio.it"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Messaggio</label>
                <textarea
                  rows={4}
                  value={formData.messaggio}
                  onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition resize-none"
                  placeholder="Raccontaci del tuo studio e di cosa hai bisogno..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 rounded-full text-lg font-medium hover:bg-amber-500 transition"
              >
                Invia messaggio
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-white text-lg font-bold">
              Studio<span className="text-amber-500">Volt</span>
            </span>
            <p className="text-sm mt-1">Siti web professionali per chi lavora sul serio.</p>
          </div>
          <div className="text-sm text-center md:text-right">
            <p>olivia@studiovolt.it</p>
            <p className="mt-1">P.IVA: [da inserire]</p>
            <p className="mt-1">© {new Date().getFullYear()} Studio Volt. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

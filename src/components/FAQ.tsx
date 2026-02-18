"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Quanto tempo ci vuole per avere il sito pronto?",
    a: "In media 7 giorni lavorativi dalla conferma dell'ordine. Ti mostriamo una bozza al giorno 5 per raccogliere il tuo feedback.",
  },
  {
    q: "Devo fornire i contenuti (testi, foto)?",
    a: "Idealmente sì, ma non è obbligatorio. Possiamo aiutarti a scrivere i testi e utilizzare foto professionali royalty-free se necessario.",
  },
  {
    q: "Posso modificare il sito dopo la consegna?",
    a: "Certo! Ti forniamo l'accesso completo. Per i primi 30 giorni, piccole modifiche sono incluse nel prezzo. Dopo, offriamo pacchetti di assistenza a partire da €50/mese.",
  },
  {
    q: "Il dominio e l'hosting sono inclusi?",
    a: "Sì, dominio .it e hosting sono inclusi per il primo anno. Dal secondo anno il rinnovo è di €120/anno per hosting + dominio.",
  },
  {
    q: "Il sito sarà ottimizzato per Google?",
    a: "Assolutamente. Ogni sito include ottimizzazione SEO on-page: struttura corretta, meta tag, velocità di caricamento e markup schema per attività locali.",
  },
  {
    q: "Lavorate solo con professionisti sanitari?",
    a: "Ci specializziamo in studi medici, dentistici e legali, ma lavoriamo con qualsiasi professionista che necessiti di una presenza online efficace.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-volt-700/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-semibold text-volt-100 group-hover:text-white transition-colors pr-4">
          {q}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full glass-light flex items-center justify-center text-accent transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-volt-400 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-volt-800/50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">FAQ</span>
          <h2 className="font-[family-name:var(--font-space)] text-4xl md:text-5xl font-bold mt-4">
            Domande <span className="gradient-text">frequenti</span>
          </h2>
        </div>
        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

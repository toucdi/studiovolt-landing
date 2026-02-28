"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-slate-100 last:border-b py-8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-lg md:text-xl font-bold text-black group-hover:text-slate-600 transition-colors uppercase tracking-tight">
          <span className="inline-block w-8 text-xs font-medium text-slate-400">0{index + 1}</span>
          {q}
        </span>
        <span className="text-2xl font-light text-black">
          {open ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-slate-500 max-w-2xl pt-6 pl-8 leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 md:py-40">
      <div className="container-minimal">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase leading-[0.9]">
              Domande <br />
              <span className="text-slate-400 underline decoration-1 underline-offset-8">Frequenti</span>
            </h2>
          </div>
          <div className="md:col-span-7 flex items-end">
            <p className="text-slate-500 text-lg max-w-sm">
              Tutto quello che devi sapere sul tuo nuovo sito web professionale.
            </p>
          </div>
        </div>

        <div className="max-w-4xl">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} {...faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

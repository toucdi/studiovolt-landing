"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Cosa intendete per 'agente AI operativo'?",
    a: "Non un semplice chatbot. Un sistema che lavora autonomamente: legge email, classifica richieste, risponde, esegue task, si integra con i tuoi tool (CRM, documenti, calendari). Fa lavoro reale, 24/7.",
  },
  {
    q: "Quali integrazioni supportate?",
    a: "Email (Gmail, Outlook), CRM (HubSpot, Pipedrive), documenti (Google Drive, Dropbox), calendari, Slack, Notion, e molti altri. Se usi un tool standard, probabilmente lo supportiamo o possiamo integrarlo.",
  },
  {
    q: "I miei dati sono al sicuro?",
    a: "Sì. Tutto in conformità GDPR. I dati restano in Europa, non vengono usati per training di modelli pubblici. Accessi tracciati, crittografia end-to-end, contratto DPA disponibile.",
  },
  {
    q: "Quanto costa realmente un agente?",
    a: "Dipende da scope e complessità. Range indicativo: da €2.000 one-time + manutenzione, oppure canone mensile da €500. Ti diamo un preventivo dettagliato dopo la discovery gratuita.",
  },
  {
    q: "L'agente può sbagliare? Come lo controllate?",
    a: "Sì, può sbagliare. Per questo lavoriamo con approval loop su azioni critiche, log completi, dashboard di monitoraggio. Tu vedi tutto quello che fa. Nel tempo migliora, ma la supervisione umana resta importante.",
  },
  {
    q: "Posso iniziare con un progetto piccolo?",
    a: "Assolutamente. Molti clienti partono con un caso d'uso limitato (es. solo gestione inbox) e poi espandono. È il modo migliore per testare il valore prima di investire su larga scala.",
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
              Tutto quello che devi sapere sugli agenti AI operativi per la tua azienda.
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

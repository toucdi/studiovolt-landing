"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getDictionary, type Locale } from "@/lib/dictionaries";

type FAQProps = {
  locale: Locale;
};

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

export default function FAQ({ locale }: FAQProps) {
  const dict = getDictionary(locale);
  const faqs = dict.faq.items;

  return (
    <section id="faq" className="bg-white py-24 md:py-40">
      <div className="container-minimal">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase leading-[0.9]">
              {dict.faq.title} <br />
              <span className="text-slate-400 underline decoration-1 underline-offset-8">{dict.faq.titleUnderline}</span>
            </h2>
          </div>
          <div className="md:col-span-7 flex items-end">
            <p className="text-slate-500 text-lg max-w-sm">
              {dict.faq.intro}
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

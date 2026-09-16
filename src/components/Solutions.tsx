"use client";
import { motion, Variants } from "framer-motion";
import { getDictionary, type Locale } from "@/lib/dictionaries";

type SolutionsProps = {
  locale: Locale;
};

const icons = [
  <svg key="app" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>,
  <svg key="software" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
  <svg key="ai" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  <svg key="ecommerce" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>,
  <svg key="api" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
  <svg key="consulting" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>,
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Solutions({ locale }: SolutionsProps) {
  const dict = getDictionary(locale);
  const solutions = dict.solutions.items.map((item, i) => ({
    ...item,
    icon: icons[i],
  }));

  return (
    <section id="soluzioni" className="section-padding bg-slate-50 border-t border-slate-100">
      <div className="container-minimal">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted mb-4 block">
            {dict.solutions.sectionTag}
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-black">
            {dict.solutions.title}
            <br />
            <span className="text-slate-300">{dict.solutions.titleGray}</span>
          </h2>
          <p className="text-slate-500 font-light leading-relaxed mt-6 max-w-xl">
            {dict.solutions.intro}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              variants={itemVariants}
              className="group p-12 border-t border-slate-200 md:odd:border-r lg:odd:border-r lg:border-r lg:last:border-r-0 last:border-b md:last:border-b-0 border-b md:border-b-0"
            >
              <div className="text-black mb-8">{solution.icon}</div>
              <h3 className="text-lg font-bold text-black mb-4 uppercase tracking-widest">
                {solution.title}
              </h3>
              <p className="text-slate-500 font-light leading-relaxed">{solution.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 pt-12 border-t border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <p className="text-slate-500 font-light max-w-md">
            {dict.solutions.footer}
          </p>
          <a href="#contatti" className="btn-minimal text-sm px-12 py-5">
            {dict.solutions.footerCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

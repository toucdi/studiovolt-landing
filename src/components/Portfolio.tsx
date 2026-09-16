"use client";
import { motion, Variants } from "framer-motion";
import { getDictionary, type Locale } from "@/lib/dictionaries";

type PortfolioProps = {
  locale: Locale;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

export default function Portfolio({ locale }: PortfolioProps) {
  const dict = getDictionary(locale);
  const portfolio = dict.portfolio;

  return (
    <section id="portfolio" className="section-padding bg-white border-t border-slate-100">
      <div className="container-minimal">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted mb-4 block">
            {portfolio.sectionTag}
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-black">
            {portfolio.title}
            <br />
            <span className="text-slate-200">{portfolio.titleGray}</span>
          </h2>
          <p className="text-slate-500 font-light leading-relaxed mt-6 max-w-2xl">
            {portfolio.intro}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3"
        >
          {portfolio.items.map((item) => (
            <motion.a
              key={item.domain}
              variants={itemVariants}
              href={`https://${item.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-12 border-t border-slate-100 md:odd:border-r lg:odd:border-r lg:border-r lg:last:border-r-0 last:border-b md:last:border-b-0 border-b md:border-b-0 hover:bg-slate-50 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-sm font-bold text-black uppercase tracking-widest">
                  {item.domain}
                </h3>
                <svg 
                  className="w-4 h-4 text-slate-300 group-hover:text-black transition-colors flex-shrink-0 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

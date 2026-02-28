"use client";
import { motion, Variants } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Consulenza",
    desc: "Analizziamo le necessità del tuo studio attraverso una diagnosi digitale approfondita.",
  },
  {
    num: "02",
    title: "Progettazione",
    desc: "Sviluppiamo la tua infrastruttura con rigore tecnico e precisione estetica in 5 giorni.",
  },
  {
    num: "03",
    title: "Lancio",
    desc: "Configuriamo la presenza online definitiva, pronta per accogliere nuovi pazienti.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Process() {
  return (
    <section id="processo" className="section-padding bg-white overflow-hidden">
      <div className="container-minimal">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted mb-4 block">Metodologia</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-black">
            L&apos;approccio Studio Volt.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-x-12 gap-y-24"
        >
          {steps.map((step) => (
            <motion.div key={step.num} variants={itemVariants} className="flex flex-col gap-8 group">
              <div className="text-8xl md:text-9xl font-bold tracking-tighter text-slate-50 group-hover:text-black transition-colors duration-500">
                {step.num}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-black uppercase tracking-widest">
                  {step.title}
                </h3>
                <p className="text-slate-500 font-light leading-relaxed text-lg">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

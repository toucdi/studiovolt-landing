"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="container-minimal h-full grid grid-cols-4 md:grid-cols-12 gap-12">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-full border-x border-black" />
          ))}
        </div>
      </div>



      <div className="container-minimal relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <span className="w-12 h-px bg-black" />
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-black">
                Estetica Svizzera / Performance Italiana
              </span>
            </div>

            <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.8] text-black uppercase mb-16">
              Studio <br />
              <span className="text-slate-200">Volt.</span>
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="md:col-span-7"
            >
              <p className="text-xl md:text-3xl text-black font-medium leading-tight tracking-tight">
                Creiamo l&apos;eccellenza digitale per i professionisti che non accettano compromessi. Design minimale, impatto massimo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="md:col-span-4 md:col-start-9 flex flex-col gap-6"
            >
              <a href="#servizi" className="btn-minimal text-xl py-6">
                Avvia Progetto — €700
              </a>
              <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
                Disponibilità limitata / 05 Progetti mese
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section >
  );
}

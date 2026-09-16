"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendContactEmail } from "@/app/actions/contact";

export default function CTA() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Qualcosa è andato storto.");
    }
  };

  return (
    <section id="contatti" className="bg-black py-24 md:py-48 text-white">
      <div className="container-minimal">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.3em] uppercase mb-8 flex items-center gap-4"
            >
              <span className="w-12 h-[1px] bg-white/30" />
              Disponibilità limitata
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-12"
            >
              Prossimo <br />
              <span className="text-white/40 italic">passo</span> <br />
              digitale?
            </motion.h2>

            <p className="text-white/60 text-lg leading-relaxed max-w-sm">
              Scrivici oggi. Riceverai una proposta tecnica entro le prossime 24 ore.
            </p>
          </div>

          <div className="md:col-span-6">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-white/5 border border-white/10 p-12 text-center flex flex-col items-center justify-center min-h-[400px]"
                >
                  <div className="w-16 h-16 border border-white flex items-center justify-center text-3xl mb-8">
                    ✓
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Ricevuto</h3>
                  <p className="text-white/60 max-w-xs uppercase text-xs tracking-widest leading-loose">
                    Ti risponderemo entro 24 ore alla tua email.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-12 text-[10px] font-bold tracking-[0.3em] uppercase underline underline-offset-8 pointer-events-auto"
                  >
                    Invia un altro messaggio
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">Nome</label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="IL TUO NOME"
                        className="bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-lg tracking-tight placeholder:text-white/10"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">Email</label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="EMAIL@ESEMPIO.IT"
                        className="bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-lg tracking-tight placeholder:text-white/10 uppercase"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">Telefono</label>
                      <input
                        required
                        name="phone"
                        type="tel"
                        placeholder="+39 XXX XXX XXXX"
                        className="bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-lg tracking-tight placeholder:text-white/10"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">Azienda / Studio</label>
                      <input
                        required
                        name="company"
                        type="text"
                        placeholder="NOME AZIENDA O STUDIO"
                        className="bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-lg tracking-tight placeholder:text-white/10"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">Messaggio</label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder="DETTAGLI DEL TUO PROGETTO..."
                      className="bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-lg tracking-tight placeholder:text-white/10"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-xs font-bold uppercase tracking-widest">{errorMessage}</p>
                  )}

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="group flex items-center gap-6 bg-white text-black px-12 py-6 font-black uppercase tracking-[0.2em] text-sm hover:bg-slate-200 transition-all disabled:opacity-50"
                  >
                    {status === "loading" ? "Invio in corso..." : "Invia Messaggio"}
                    <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

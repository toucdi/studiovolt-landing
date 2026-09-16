"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendContactEmail } from "@/app/actions/contact";
import { getDictionary, type Locale } from "@/lib/dictionaries";

type CTAProps = {
  locale: Locale;
};

export default function CTA({ locale }: CTAProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const dict = getDictionary(locale);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    formData.append("locale", locale);
    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(result.error || dict.cta.form.errorGeneric);
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
              {dict.cta.tag}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-12"
            >
              {dict.cta.title[0]} <br />
              <span className="text-white/40 italic">{dict.cta.title[1]}</span>
              {dict.cta.title.length > 2 && (
                <>
                  {" "}<br />
                  {dict.cta.title[2]}
                </>
              )}
            </motion.h2>

            <p className="text-white/60 text-lg leading-relaxed max-w-sm">
              {dict.cta.intro}
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
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{dict.cta.success.title}</h3>
                  <p className="text-white/60 max-w-xs uppercase text-xs tracking-widest leading-loose">
                    {dict.cta.success.message}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-12 text-[10px] font-bold tracking-[0.3em] uppercase underline underline-offset-8 pointer-events-auto"
                  >
                    {dict.cta.success.reset}
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
                      <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
                        {dict.cta.form.name}
                      </label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder={dict.cta.form.namePlaceholder}
                        className="bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-lg tracking-tight placeholder:text-white/10"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
                        {dict.cta.form.email}
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder={dict.cta.form.emailPlaceholder}
                        className="bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-lg tracking-tight placeholder:text-white/10 uppercase"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
                        {dict.cta.form.phone}
                      </label>
                      <input
                        required
                        name="phone"
                        type="tel"
                        placeholder={dict.cta.form.phonePlaceholder}
                        className="bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-lg tracking-tight placeholder:text-white/10"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
                        {dict.cta.form.company}
                      </label>
                      <input
                        required
                        name="company"
                        type="text"
                        placeholder={dict.cta.form.companyPlaceholder}
                        className="bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-lg tracking-tight placeholder:text-white/10"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
                      {dict.cta.form.message}
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder={dict.cta.form.messagePlaceholder}
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
                    {status === "loading" ? dict.cta.form.sending : dict.cta.form.submit}
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

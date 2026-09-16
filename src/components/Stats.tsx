"use client";
import { motion } from "framer-motion";
import { getDictionary, type Locale } from "@/lib/dictionaries";

type StatsProps = {
  locale: Locale;
};

export default function Stats({ locale }: StatsProps) {
  const dict = getDictionary(locale);
  const stats = dict.stats;
  return (
    <section className="bg-white border-b border-slate-100 py-24">
      <div className="container-minimal">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              key={stat.label}
              className="flex flex-col"
            >
              <div className="text-4xl md:text-6xl font-black text-black tracking-tighter mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs text-black font-bold tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

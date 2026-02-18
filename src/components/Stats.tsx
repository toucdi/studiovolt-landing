const stats = [
  { value: "7", label: "Giorni per andare online", suffix: "gg" },
  { value: "€700", label: "Tutto incluso, nessun extra", suffix: "" },
  { value: "100%", label: "Mobile responsive", suffix: "" },
  { value: "∞", label: "Supporto post-lancio", suffix: "" },
];

export default function Stats() {
  return (
    <section className="relative py-16 border-y border-volt-700/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-[family-name:var(--font-space)] text-3xl md:text-4xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-volt-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

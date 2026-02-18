export default function Footer() {
  return (
    <footer className="border-t border-volt-700/50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-white text-xs font-bold">
              ⚡
            </div>
            <span className="font-[family-name:var(--font-space)] text-lg font-bold text-volt-200">
              Studio <span className="gradient-text">Volt</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-volt-400">
            <a href="#servizi" className="hover:text-white transition-colors">Servizi</a>
            <a href="#prezzi" className="hover:text-white transition-colors">Prezzi</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="mailto:olivia@studiovolt.it" className="hover:text-white transition-colors">Contatti</a>
          </div>

          <p className="text-xs text-volt-500">
            © {new Date().getFullYear()} Studio Volt · P.IVA in corso di registrazione
          </p>
        </div>
      </div>
    </footer>
  );
}

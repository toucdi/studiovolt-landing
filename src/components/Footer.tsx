export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-24">
      <div className="container-minimal">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-black text-lg">
                V
              </div>
              <span className="text-xl font-black uppercase tracking-tighter text-black">
                Studio Volt
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Agenti AI operativi per PMI e professionisti italiani. Automazione concreta, risultati misurabili.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-black mb-6">Navigazione</h4>
            <div className="flex flex-col gap-4">
              <a href="#servizi" className="text-sm text-slate-500 hover:text-black transition-colors uppercase tracking-widest">Servizi</a>
              <a href="#processo" className="text-sm text-slate-500 hover:text-black transition-colors uppercase tracking-widest">Metodo</a>
              <a href="#prezzi" className="text-sm text-slate-500 hover:text-black transition-colors uppercase tracking-widest">Prezzi</a>
              <a href="#faq" className="text-sm text-slate-500 hover:text-black transition-colors uppercase tracking-widest">FAQ</a>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-black mb-6">Contatti</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:sales@studiovolt.it" className="text-sm text-slate-500 hover:text-black transition-colors">sales@studiovolt.it</a>
              <p className="text-sm text-slate-400">P.IVA in corso di registrazione</p>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} Studio Volt · All Rights Reserved
          </p>
          <p className="text-[10px] text-slate-300 font-medium">
            Swiss Modernism 2.0 / 01
          </p>
        </div>
      </div>
    </footer>
  );
}

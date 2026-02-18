"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Servizi", href: "#servizi" },
    { label: "Come Funziona", href: "#processo" },
    { label: "Prezzi", href: "#prezzi" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3 shadow-lg shadow-black/20" : "py-5 bg-gradient-to-b from-volt-900 via-volt-900/80 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center font-bold text-white text-sm group-hover:scale-110 transition-transform">
            ⚡
          </div>
          <span className="font-[family-name:var(--font-space)] text-xl font-bold text-volt-50">
            Studio <span className="gradient-text">Volt</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-volt-300 hover:text-white transition-colors text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contatti"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-accent to-accent-light text-white text-sm font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all hover:-translate-y-0.5"
          >
            Inizia Ora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-volt-200 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-6 animate-fade-in">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-volt-200 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contatti"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block text-center px-5 py-3 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-semibold"
          >
            Inizia Ora
          </a>
        </div>
      )}
    </nav>
  );
}

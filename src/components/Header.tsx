'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-black">
              Studio <span className="text-gold-500">Volt</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-gold-500 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('servizi')}
              className="text-gray-700 hover:text-gold-500 transition-colors"
            >
              Servizi
            </button>
            <button 
              onClick={() => scrollToSection('come-funziona')}
              className="text-gray-700 hover:text-gold-500 transition-colors"
            >
              Come Funziona
            </button>
            <button 
              onClick={() => scrollToSection('chi-siamo')}
              className="text-gray-700 hover:text-gold-500 transition-colors"
            >
              Chi Siamo
            </button>
            <button 
              onClick={() => scrollToSection('contatti')}
              className="btn-primary"
            >
              Contattaci
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gold-500 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-gray-700 hover:text-gold-500 transition-colors w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('servizi')}
                className="block px-3 py-2 text-gray-700 hover:text-gold-500 transition-colors w-full text-left"
              >
                Servizi
              </button>
              <button 
                onClick={() => scrollToSection('come-funziona')}
                className="block px-3 py-2 text-gray-700 hover:text-gold-500 transition-colors w-full text-left"
              >
                Come Funziona
              </button>
              <button 
                onClick={() => scrollToSection('chi-siamo')}
                className="block px-3 py-2 text-gray-700 hover:text-gold-500 transition-colors w-full text-left"
              >
                Chi Siamo
              </button>
              <button 
                onClick={() => scrollToSection('contatti')}
                className="block px-3 py-2 text-gold-500 font-semibold w-full text-left"
              >
                Contattaci
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
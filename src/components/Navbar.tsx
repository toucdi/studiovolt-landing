"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/dictionaries";

type NavbarProps = {
  locale: Locale;
};

export default function Navbar({ locale }: NavbarProps) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const dict = getDictionary(locale);
  const navLinks = dict.nav.links;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 py-4"
    >
      <div className="container-minimal flex items-center justify-between">
        {/* Logo */}
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          href="#"
          className="flex items-center gap-2 group"
        >
          <Image
            src="/logo-v.png"
            alt="Studio Volt"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl font-bold tracking-tighter text-black uppercase">
            Studio Volt
          </span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              href={link.href}
              className="text-sm font-medium text-black uppercase tracking-widest"
            >
              {link.name}
            </motion.a>
          ))}
          
          {/* Language Switcher */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 border-l border-slate-200 pl-8"
          >
            <Link
              href="/"
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                locale === "it" ? "text-black" : "text-slate-300 hover:text-slate-500"
              }`}
            >
              IT
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              href="/en"
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                locale === "en" ? "text-black" : "text-slate-300 hover:text-slate-500"
              }`}
            >
              EN
            </Link>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            href="#contatti"
            className="bg-black text-white px-6 py-2 text-sm uppercase tracking-widest"
          >
            {dict.nav.contact}
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black p-2"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-black border-b border-slate-50 pb-2 uppercase tracking-widest"
                  onClick={() => setMobileMenu(false)}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-4 justify-center py-2 border-b border-slate-50">
                <Link
                  href="/"
                  className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                    locale === "it" ? "text-black" : "text-slate-300"
                  }`}
                  onClick={() => setMobileMenu(false)}
                >
                  IT
                </Link>
                <span className="text-slate-300">|</span>
                <Link
                  href="/en"
                  className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                    locale === "en" ? "text-black" : "text-slate-300"
                  }`}
                  onClick={() => setMobileMenu(false)}
                >
                  EN
                </Link>
              </div>

              <a
                href="#contatti"
                className="bg-black text-white uppercase tracking-widest py-4 text-center"
                onClick={() => setMobileMenu(false)}
              >
                {dict.nav.contact}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

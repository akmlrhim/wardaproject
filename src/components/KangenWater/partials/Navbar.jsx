import React, { useState, useEffect } from "react";
import { Droplets, MessageCircle, Menu, X, Sparkles } from "lucide-react";
import { WA_LINK } from "../constant";

const navLinks = ["Masalah", "Solusi", "Testimoni", "FAQ"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md border-b border-slate-100" : "bg-white/90 backdrop-blur-sm"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Droplets className="text-white w-5 h-5" />
          </div>
          <span className="text-lg font-black tracking-tight text-slate-900">
            Kangen<span className="text-blue-600">Pure</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link text-sm text-slate-600 hover:text-blue-600 transition-colors font-semibold"
            >
              {link}
            </a>
          ))}
          <a
            href="#ai-consultant"
            className="text-sm font-bold text-blue-600 flex items-center gap-1.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
          >
            <Sparkles size={13} /> AI Konsultan
          </a>
          <a
            href={WA_LINK}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-sm"
          >
            <MessageCircle size={15} /> Chat Sekarang
          </a>
        </div>

        <button
          className="md:hidden text-slate-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-sm font-semibold text-slate-700 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#ai-consultant"
            className="block text-sm font-bold text-blue-600 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            ✨ AI Konsultan
          </a>
          <a
            href={WA_LINK}
            className="block bg-blue-600 text-white text-center py-3 rounded-lg font-bold text-sm"
          >
            Chat WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}

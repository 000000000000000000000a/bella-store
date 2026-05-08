"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, Menu, X } from "lucide-react";

interface NavbarProps {
  currentView: 'landing' | 'catalog';
  setView: (view: 'landing' | 'catalog') => void;
}

const Navbar = ({ currentView, setView }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (view: 'landing' | 'catalog') => {
    setView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToVisit = () => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById('visit-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled || currentView === 'catalog'
          ? "bg-obsidian border-b border-gold/30 py-4 shadow-2xl"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Left Navigation */}
        <div className="hidden md:flex items-center space-x-12 text-[11px] uppercase tracking-[0.2em] font-medium text-white/90">
          <button 
            onClick={() => handleLinkClick('catalog')}
            className={`hover:text-gold transition-colors duration-300 ${currentView === 'catalog' ? 'text-gold' : ''}`}
          >
            Collections
          </button>
          <button className="hover:text-gold transition-colors duration-300">
            Our Story
          </button>
        </div>

        {/* Center Logo */}
        <button 
          onClick={() => handleLinkClick('landing')}
          className="flex flex-col items-center group"
        >
          <span className="font-serif text-2xl md:text-4xl tracking-[0.4em] text-white font-bold transition-all duration-500 group-hover:text-gold">
            BELLA STORE
          </span>
          <span className="text-[9px] tracking-[0.6em] text-gold/80 uppercase mt-2 font-light">
            Agadir • Est. 2024
          </span>
        </button>

        {/* Right Actions */}
        <div className="flex items-center space-x-8 text-white">
          <div className="hidden md:flex items-center space-x-8">
            <button className="hover:text-gold transition-colors duration-300">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button className="hover:text-gold transition-colors duration-300">
              <Heart size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={scrollToVisit}
              className="border border-gold/60 text-gold px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] hover:bg-gold hover:text-obsidian transition-all duration-500 ease-in-out"
            >
              Visit Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 right-0 w-full h-screen bg-obsidian z-[-1] flex flex-col items-center justify-center space-y-10 md:hidden"
          >
            <button onClick={() => handleLinkClick('catalog')} className="text-white text-xl tracking-[0.3em] uppercase hover:text-gold">Collections</button>
            <button className="text-white text-xl tracking-[0.3em] uppercase hover:text-gold">Our Story</button>
            <button onClick={scrollToVisit} className="text-gold text-xl tracking-[0.3em] uppercase underline underline-offset-8">Visit Us</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

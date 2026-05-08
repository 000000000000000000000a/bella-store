"use client";

import { useState } from "react";
import RootLayout from "./app/layout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import StoreLocator from "./components/shared/StoreLocator";
import { motion } from "framer-motion";

function App() {
  const [view, setView] = useState<'landing' | 'catalog'>('landing');

  const navigateToCatalog = () => {
    setView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RootLayout currentView={view} setView={setView}>
      {view === 'landing' ? (
        <>
          <Home />
          
          <StoreLocator />

          {/* Final Invitation CTA */}
          <section className="py-40 bg-ivory border-t border-gold/10 flex flex-col items-center justify-center text-center px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="text-obsidian font-serif text-4xl md:text-7xl tracking-tight max-w-4xl mx-auto leading-tight">
                Ready to find your <br />
                <span className="italic">Signature Essence?</span>
              </h2>
              
              <div className="relative inline-block group">
                <button 
                  onClick={navigateToCatalog}
                  className="relative z-10 block bg-gold text-obsidian px-16 py-6 text-[12px] uppercase tracking-[0.4em] font-bold transition-colors duration-500 group-hover:text-gold"
                >
                  View All Collections
                  <div className="absolute inset-0 bg-obsidian scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -z-10" />
                </button>
                <div className="absolute inset-0 translate-x-3 translate-y-3 border border-gold/20 -z-20 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              </div>
            </motion.div>
          </section>
        </>
      ) : (
        <>
          <Catalog />
          <StoreLocator />
        </>
      )}
    </RootLayout>
  );
}

export default App;

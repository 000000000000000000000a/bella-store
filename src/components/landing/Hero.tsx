"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Background Cinematic Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-subtle-zoom"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2000&auto=format&fit=crop')",
            filter: "brightness(0.4)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-obsidian" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gold text-[10px] md:text-[12px] uppercase tracking-[0.8em] font-light block mb-4"
          >
            Le Parfum d'Agadir
          </motion.span>
          
          <h1 className="text-white font-serif text-5xl md:text-8xl lg:text-9xl leading-tight tracking-[0.05em] mb-8">
            Define Your <br />
            <span className="italic text-gold/90">Signature</span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-ivory/70 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed tracking-wide mb-12"
          >
            Discover an exclusive collection of rare essences, crafted for those 
            who seek the extraordinary. Experience the luxury of Bella Store.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <a 
              href="/catalog" 
              className="bg-gold text-obsidian px-10 py-4 text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-white transition-all duration-500 min-w-[220px]"
            >
              Explore Collection
            </a>
            <a 
              href="/story" 
              className="border border-white/30 text-white px-10 py-4 text-[11px] uppercase tracking-[0.3em] font-semibold hover:border-gold hover:text-gold transition-all duration-500 min-w-[220px]"
            >
              Our Philosophy
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <span className="text-gold/50 text-[9px] uppercase tracking-[0.4em] rotate-90 mb-8 origin-left">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

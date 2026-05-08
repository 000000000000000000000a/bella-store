"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const StoreLocator = () => {
  return (
    <section id="visit-us" className="bg-obsidian text-white overflow-hidden">
      <div className="flex flex-col lg:flex-row h-auto lg:h-[800px]">
        {/* Left Side: The Map */}
        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13753.151756534!2d-9.6105!3d30.422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6f0e0e0e0e1%3A0x0!2zQmVsbGEgU3RvcmUgUGFyZnVtZXJpZQ!5e0!3m2!1sen!2sma!4v1715130000000!5m2!1sen!2sma"
            className="w-full h-full border-none grayscale invert-[0.9] contrast-[1.2] brightness-[0.8]"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-[20px] border-obsidian"></div>
          
          {/* Directions Button Overlay */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <a
              href="https://goo.gl/maps/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-obsidian px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold flex items-center space-x-3 hover:bg-gold hover:text-white transition-all duration-500 shadow-2xl"
            >
              <Navigation size={14} />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Right Side: Contact Details */}
        <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center space-y-16">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-medium">Boutique Agadir</span>
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-tight">
              Visit Our <br />
              <span className="italic">Sanctuary</span>
            </h2>
            <p className="text-ivory/60 font-light leading-relaxed tracking-wide text-lg max-w-md">
              Experience the full Bella Store collection in person. Our fragrance experts 
              are ready to guide you through a private olfactory consultation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Address */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gold">
                <MapPin size={18} strokeWidth={1.5} />
                <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold">Location</h4>
              </div>
              <p className="text-white/80 text-sm font-light leading-loose tracking-wide">
                Avenue Prince Moulay Abdallah,<br />
                Secteur Touristique,<br />
                Agadir 80000, Morocco
              </p>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gold">
                <Clock size={18} strokeWidth={1.5} />
                <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold">Boutique Hours</h4>
              </div>
              <p className="text-white/80 text-sm font-light leading-loose tracking-wide">
                Monday — Sunday<br />
                10:00 AM — 09:00 PM
              </p>
            </div>
          </div>

          {/* Call CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="tel:+212600000000"
              className="inline-flex items-center space-x-4 border border-gold/30 text-gold px-10 py-5 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-gold hover:text-obsidian transition-all duration-500 group"
            >
              <Phone size={16} className="group-hover:rotate-12 transition-transform" />
              <span>Call our Fragrance Expert</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;

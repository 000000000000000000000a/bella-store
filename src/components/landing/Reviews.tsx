"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "A scent that captures the very essence of an Agadir sunset—warm, gold, and eternal.",
    author: "Lina M.",
  },
  {
    quote: "Finally, a boutique in Morocco that understands the true meaning of niche perfumery.",
    author: "Yassine B.",
  },
  {
    quote: "The Oud de l'Atlantique is my new signature. It is rare, powerful, yet incredibly refined.",
    author: "Sofia A.",
  },
  {
    quote: "Walking into Bella Store feels like stepping into a Parisian atelier with a Moroccan soul.",
    author: "Marc D.",
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-40 bg-ivory overflow-hidden">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-medium">The Experience</span>
        </motion.div>

        <div className="relative h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute w-full"
            >
              <blockquote className="font-serif italic text-3xl md:text-5xl text-obsidian leading-tight tracking-wide mb-10">
                "{TESTIMONIALS[index].quote}"
              </blockquote>
              <cite className="not-italic">
                <span className="text-gold text-[11px] uppercase tracking-[0.4em] font-bold">
                  {TESTIMONIALS[index].author}
                </span>
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-4 mt-20">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-[2px] transition-all duration-700 ${
                index === i ? "w-12 bg-gold" : "w-4 bg-gold/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

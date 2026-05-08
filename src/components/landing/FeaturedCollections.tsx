"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Oud de l'Atlantique",
    category: "Woody & Marine",
    price: "1,200 MAD",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Agadir Rose",
    category: "Floral & Elegant",
    price: "950 MAD",
    image: "https://images.unsplash.com/photo-1557170334-a7c3d40a02a9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Desert Gold",
    category: "Amber & Spice",
    price: "1,450 MAD",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1000&auto=format&fit=crop",
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-32 bg-white px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 space-y-8 md:space-y-0">
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold text-[10px] uppercase tracking-[0.5em] font-medium"
            >
              Curated for You
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-obsidian font-serif text-4xl md:text-6xl tracking-tight"
            >
              Featured <span className="italic">Collections</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="/catalog" 
              className="group flex items-center space-x-4 text-obsidian text-[11px] uppercase tracking-[0.3em] font-semibold border-b border-obsidian/10 pb-2 hover:border-gold transition-all duration-500"
            >
              <span>View All Essences</span>
              <ArrowUpRight size={16} className="group-hover:text-gold group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500" />
            </a>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FEATURED_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-ivory mb-8">
                {/* Product Image */}
                <motion.img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-obsidian/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quick View Button (Optional) */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                  <button className="w-full bg-white text-obsidian py-4 text-[10px] uppercase tracking-[0.3em] font-bold shadow-2xl hover:bg-gold hover:text-white transition-colors duration-300">
                    Quick Discovery
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3 text-center md:text-left">
                <span className="text-[9px] uppercase tracking-[0.4em] text-gold/80 font-medium">
                  {product.category}
                </span>
                <h3 className="text-obsidian font-serif text-2xl tracking-wide group-hover:text-gold transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-obsidian/40 text-[12px] uppercase tracking-widest font-light">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;

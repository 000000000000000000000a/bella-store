"use client";

import { motion } from "framer-motion";
import { MessageCircle, Info } from "lucide-react";
import { Product } from "../../data/products";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const WHATSAPP_NUMBER = "212600000000"; // Agadir Boutique Number

  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
          className="group"
        >
          {/* Product Image Container */}
          <div className="relative aspect-[3/4] bg-ivory overflow-hidden mb-6">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* Notes Overlay */}
            <div className="absolute inset-0 bg-obsidian/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 text-center">
              <div className="space-y-6">
                <div>
                  <span className="text-gold text-[9px] uppercase tracking-[0.3em] block mb-1">Top Notes</span>
                  <p className="text-white text-[12px] font-light tracking-wide">{product.topNotes.join(", ")}</p>
                </div>
                <div>
                  <span className="text-gold text-[9px] uppercase tracking-[0.3em] block mb-1">Heart Notes</span>
                  <p className="text-white text-[12px] font-light tracking-wide">{product.heartNotes.join(", ")}</p>
                </div>
                <div>
                  <span className="text-gold text-[9px] uppercase tracking-[0.3em] block mb-1">Base Notes</span>
                  <p className="text-white text-[12px] font-light tracking-wide">{product.baseNotes.join(", ")}</p>
                </div>
              </div>
            </div>

            {/* Price Badge */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1">
              <span className="text-obsidian text-[10px] font-bold tracking-widest">{product.priceFormatted}</span>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-gold text-[9px] uppercase tracking-[0.4em] block mb-1">{product.category} • {product.gender}</span>
                <h3 className="text-obsidian font-serif text-xl tracking-wide group-hover:text-gold transition-colors">{product.name}</h3>
              </div>
            </div>

            {/* WhatsApp Integration Button */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                `Hello Bella Store, I am interested in ${product.name} (${product.priceFormatted}). Could you provide more details?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full border border-obsidian/10 py-3 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 group/btn"
            >
              <MessageCircle size={14} className="group-hover/btn:scale-110 transition-transform" />
              <span>Consult via WhatsApp</span>
            </a>
          </div>
        </motion.div>
      ))}
      
      {products.length === 0 && (
        <div className="col-span-full py-20 text-center space-y-4">
          <p className="text-obsidian/40 italic font-serif text-2xl">No fragrances found matching your selection.</p>
          <button 
            onClick={() => window.location.reload()}
            className="text-gold text-[10px] uppercase tracking-[0.3em] border-b border-gold"
          >
            Reset Catalog
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;

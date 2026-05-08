"use client";

import { useState, useMemo } from "react";
import FilterSidebar from "../components/catalog/FilterSidebar";
import ProductGrid from "../components/catalog/ProductGrid";
import { PRODUCTS } from "../data/products";
import { motion } from "framer-motion";

const Catalog = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedGenders.length > 0) {
      result = result.filter((p) => selectedGenders.includes(p.gender));
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    return result;
  }, [selectedCategories, selectedGenders, sortBy]);

  return (
    <div className="bg-white min-h-screen pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Page Header */}
        <header className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-medium">The Collection</span>
            <h1 className="text-obsidian font-serif text-5xl md:text-7xl tracking-tight">
              Boutique <span className="italic">Catalog</span>
            </h1>
            <p className="text-obsidian/40 text-[12px] uppercase tracking-[0.3em] font-light max-w-xl">
              Exploring the convergence of raw Atlantic power and Sahara mystery through 
              rare olfactory compositions.
            </p>
          </motion.div>
        </header>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Sidebar */}
          <FilterSidebar
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedGenders={selectedGenders}
            setSelectedGenders={setSelectedGenders}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          {/* Grid */}
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;

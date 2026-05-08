"use client";

import { X, ChevronDown } from "lucide-react";

interface FilterSidebarProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  selectedGenders: string[];
  setSelectedGenders: (genders: string[]) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const CATEGORIES = ["Woody", "Floral", "Citrus", "Oriental"];
const GENDERS = ["Men", "Women", "Unisex"];

const FilterSidebar = ({
  selectedCategories,
  setSelectedCategories,
  selectedGenders,
  setSelectedGenders,
  sortBy,
  setSortBy,
}: FilterSidebarProps) => {
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleGender = (gender: string) => {
    if (selectedGenders.includes(gender)) {
      setSelectedGenders(selectedGenders.filter((g) => g !== gender));
    } else {
      setSelectedGenders([...selectedGenders, gender]);
    }
  };

  return (
    <aside className="w-full md:w-64 space-y-12">
      {/* Olfactory Family */}
      <div className="space-y-6">
        <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold flex items-center justify-between">
          Olfactory Family
          <ChevronDown size={14} className="text-obsidian/30" />
        </h4>
        <div className="space-y-4">
          {CATEGORIES.map((category) => (
            <label key={category} className="flex items-center space-x-4 cursor-pointer group">
              <div 
                onClick={() => toggleCategory(category)}
                className={`w-4 h-4 border transition-all duration-300 flex items-center justify-center ${
                  selectedCategories.includes(category) 
                  ? "border-gold bg-gold" 
                  : "border-obsidian/20 group-hover:border-gold"
                }`}
              >
                {selectedCategories.includes(category) && <X size={10} className="text-white" />}
              </div>
              <span className={`text-[12px] uppercase tracking-widest transition-colors duration-300 ${
                selectedCategories.includes(category) ? "text-obsidian font-semibold" : "text-obsidian/60"
              }`}>
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Gender */}
      <div className="space-y-6">
        <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold flex items-center justify-between">
          Gender
          <ChevronDown size={14} className="text-obsidian/30" />
        </h4>
        <div className="space-y-4">
          {GENDERS.map((gender) => (
            <label key={gender} className="flex items-center space-x-4 cursor-pointer group">
              <div 
                onClick={() => toggleGender(gender)}
                className={`w-4 h-4 border transition-all duration-300 flex items-center justify-center ${
                  selectedGenders.includes(gender) 
                  ? "border-gold bg-gold" 
                  : "border-obsidian/20 group-hover:border-gold"
                }`}
              >
                {selectedGenders.includes(gender) && <X size={10} className="text-white" />}
              </div>
              <span className={`text-[12px] uppercase tracking-widest transition-colors duration-300 ${
                selectedGenders.includes(gender) ? "text-obsidian font-semibold" : "text-obsidian/60"
              }`}>
                {gender}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div className="space-y-6">
        <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold">Sort By</h4>
        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full bg-transparent border-b border-obsidian/10 py-2 text-[12px] uppercase tracking-widest focus:ring-0 focus:border-gold outline-none transition-colors"
        >
          <option value="newest">Newest First</option>
          <option value="price-high">Price: High to Low</option>
          <option value="price-low">Price: Low to High</option>
        </select>
      </div>

      {/* Reset Filters */}
      {(selectedCategories.length > 0 || selectedGenders.length > 0) && (
        <button 
          onClick={() => {
            setSelectedCategories([]);
            setSelectedGenders([]);
          }}
          className="text-[9px] uppercase tracking-[0.3em] text-gold underline underline-offset-4 hover:text-obsidian transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </aside>
  );
};

export default FilterSidebar;

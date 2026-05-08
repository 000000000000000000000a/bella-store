"use client";

import Hero from "../components/landing/Hero";
import FeaturedCollections from "../components/landing/FeaturedCollections";
import Reviews from "../components/landing/Reviews";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      
      {/* Brand Story Preview */}
      <section className="py-32 bg-obsidian text-white px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-medium">The Heritage</span>
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-tight">
              A Symphony of <br />
              <span className="italic">Moroccan Soul</span>
            </h2>
            <p className="text-ivory/60 font-light leading-relaxed tracking-wide text-lg">
              Born in the heart of Agadir, Bella Store captures the essence of the Atlantic 
              and the mystery of the Sahara. We don't just sell perfumes; we bottle the 
              emotions of a kingdom.
            </p>
            <button 
              className="inline-block border border-gold/30 text-gold px-12 py-5 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-gold hover:text-obsidian transition-all duration-500"
            >
              Discover Our Roots
            </button>
          </div>
          <div className="relative aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop" 
              alt="Luxury Ingredients"
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-gold/20 -z-10"></div>
          </div>
        </div>
      </section>

      <Reviews />

      {/* Final Invitation CTA - Handled in App.tsx to change view */}
    </>
  );
};

export default Home;

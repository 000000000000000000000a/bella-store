import { Camera, Share2, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-obsidian text-ivory pt-24 pb-12 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Section 1: The Boutique */}
        <div className="space-y-8">
          <h3 className="font-serif text-lg tracking-[0.2em] text-gold uppercase">The Boutique</h3>
          <p className="text-sm font-light leading-relaxed opacity-70 text-justify">
            Our Agadir boutique is more than a store; it is an sensory voyage. 
            We curate rare essences and master perfumery to offer the Agadir 
            elite a signature that lasts a lifetime.
          </p>
        </div>

        {/* Section 2: Customer Care */}
        <div className="space-y-8">
          <h3 className="font-serif text-lg tracking-[0.2em] text-gold uppercase">Customer Care</h3>
          <ul className="space-y-5 text-[12px] uppercase tracking-widest font-light opacity-60">
            <li>
              <a href="https://wa.me/212600000000" className="hover:text-gold hover:opacity-100 transition-all">WhatsApp Concierge</a>
            </li>
            <li>
              <a href="/shipping" className="hover:text-gold hover:opacity-100 transition-all">Shipping & Delivery</a>
            </li>
            <li>
              <a href="/faq" className="hover:text-gold hover:opacity-100 transition-all">Common Inquiries</a>
            </li>
          </ul>
        </div>

        {/* Section 3: Follow Us */}
        <div className="space-y-8">
          <h3 className="font-serif text-lg tracking-[0.2em] text-gold uppercase">Follow Us</h3>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-gold transition-all duration-300">
              <Camera size={22} strokeWidth={1} />
            </a>
            <a href="#" className="hover:text-gold transition-all duration-300">
              <Share2 size={22} strokeWidth={1} />
            </a>
          </div>
        </div>

        {/* Section 4: Newsletter */}
        <div className="space-y-8">
          <h3 className="font-serif text-lg tracking-[0.2em] text-gold uppercase">Newsletter</h3>
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">Joining the Elite List</p>
            <div className="relative border-b border-gold/40 flex items-center group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none focus:ring-0 text-[11px] tracking-widest w-full py-3 placeholder:text-white/20"
              />
              <button className="text-gold group-hover:translate-x-2 transition-transform duration-500">
                <ArrowRight size={18} strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <p className="text-[9px] tracking-[0.4em] uppercase opacity-30">
          © 2024 BELLA STORE LUXE AGADIR.
        </p>
        <div className="flex space-x-12 text-[9px] tracking-[0.4em] uppercase opacity-30">
          <a href="/privacy" className="hover:opacity-100 transition-opacity">Privacy</a>
          <a href="/terms" className="hover:opacity-100 transition-opacity">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

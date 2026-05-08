import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import PageTransition from "../components/shared/PageTransition";

interface RootLayoutProps {
  children: React.ReactNode;
  currentView: 'landing' | 'catalog';
  setView: (view: 'landing' | 'catalog') => void;
}

/**
 * Metadata in Next.js 14 App Router
 */
export const metadata = {
  title: "Bella Store Agadir | Luxury Perfumery & Signature Scents",
  description: "Discover exclusive niche perfumes at Bella Store Agadir. Handcrafted luxury fragrances that define your signature essence in the heart of Morocco.",
  keywords: "Bella Store, Perfumery Agadir, Luxury Perfume Morocco, Niche Fragrances, Agadir Boutique",
};

export default function RootLayout({
  children,
  currentView,
  setView,
}: RootLayoutProps) {
  return (
    <div className="font-sans bg-white text-obsidian antialiased">
      <Navbar currentView={currentView} setView={setView} />
      <PageTransition>
        <main className="min-h-screen">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}

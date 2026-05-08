export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  priceFormatted: string;
  gender: "Men" | "Women" | "Unisex";
  category: "Woody" | "Floral" | "Citrus" | "Oriental";
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Oud de l'Atlantique",
    brand: "Bella Store",
    price: 1200,
    priceFormatted: "1,200 MAD",
    gender: "Unisex",
    category: "Woody",
    topNotes: ["Sea Salt", "Bergamot"],
    heartNotes: ["Oud", "Atlantic Cedar"],
    baseNotes: ["Ambergris", "Sand"],
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Agadir Rose",
    brand: "Bella Store",
    price: 950,
    priceFormatted: "950 MAD",
    gender: "Women",
    category: "Floral",
    topNotes: ["Lychee", "Pink Pepper"],
    heartNotes: ["Damask Rose", "Peony"],
    baseNotes: ["White Musk", "Cashmeran"],
    image: "https://images.unsplash.com/photo-1557170334-a7c3d40a02a9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Desert Gold",
    brand: "Bella Store",
    price: 1450,
    priceFormatted: "1,450 MAD",
    gender: "Men",
    category: "Oriental",
    topNotes: ["Saffron", "Cardamom"],
    heartNotes: ["Leather", "Incense"],
    baseNotes: ["Amber", "Vanilla"],
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Atlas Cedar",
    brand: "Bella Store",
    price: 1100,
    priceFormatted: "1,100 MAD",
    gender: "Men",
    category: "Woody",
    topNotes: ["Grapefruit", "Lemon"],
    heartNotes: ["Cedarwood", "Patchouli"],
    baseNotes: ["Vetiver", "Oakmoss"],
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Souss Citrus",
    brand: "Bella Store",
    price: 850,
    priceFormatted: "850 MAD",
    gender: "Unisex",
    category: "Citrus",
    topNotes: ["Orange Blossom", "Mandarin"],
    heartNotes: ["Neroli", "Jasmine"],
    baseNotes: ["Amber", "Musk"],
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Midnight Jasmine",
    brand: "Bella Store",
    price: 1300,
    priceFormatted: "1,300 MAD",
    gender: "Women",
    category: "Floral",
    topNotes: ["Star Anise", "Clove"],
    heartNotes: ["Night-Blooming Jasmine", "Gardenia"],
    baseNotes: ["Sandalwood", "Tonka Bean"],
    image: "https://images.unsplash.com/photo-1616948055600-8f960bc3bb29?q=80&w=1000&auto=format&fit=crop",
  },
];

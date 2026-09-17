export interface ProductColorway {
  id: string;
  name: string;
  hex: string;
  code: string;
  images: {
    lateral: string;
    topDown: string;
    heel: string;
    onFoot: string;
  };
}

export interface ProductSpec {
  weight: string;
  drop: string;
  stackHeight: string;
  midsole: string;
  plate: string;
  upper: string;
  outsole: string;
  sku: string;
  releaseDate: string;
  recycledPercent: string;
  carbonScore: string;
}

export interface Product {
  id: string;
  name: string;
  subname: string;
  tagline: string;
  category: 'trail' | 'road' | 'recovery';
  price: number;
  inStock: boolean;
  edition: string;
  description: string;
  labNote: string;
  specs: ProductSpec;
  colorways: ProductColorway[];
  sizes: { size: number; half?: boolean; stock: 'in_stock' | 'low' | 'out_of_stock' }[];
  primaryImage: string;
  hoverImage: string;
  badge?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "strata-01",
    name: "STRATA-01 · The Daily Runner",
    subname: "ALL-DAY BOUNCE & STREET ELEGANCE",
    tagline: "Feels like walking on air. Built for 15,000 daily steps with zero fatigue.",
    category: "road",
    price: 220,
    inStock: true,
    edition: "EDITION 04 RESTOCK",
    badge: "BESTSELLER",
    description: "Our signature everyday silhouette. Spun from ocean-bound plastics and cushioned with cloud-soft sugarcane bio-foam. Featherlight, ultra-breathable, and so comfortable you'll forget you're wearing shoes.",
    labNote: "Zero break-in period. 94% recycled content. Looks razor-sharp from early morning commutes to late-night city walks.",
    primaryImage: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80",
    hoverImage: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1000&q=80",
    specs: {
      weight: "215g Barely-There Feel",
      drop: "4.0mm Natural Low Drop",
      stackHeight: "33mm Heel / 29mm Forefoot",
      midsole: "Sugarcane Cloud-Foam™",
      plate: "Springy Composite Arch Shank",
      upper: "Second-Skin Ocean rPET Knit",
      outsole: "30% Recycled Tire Traction Pods",
      sku: "STR-01-ECO-04",
      releaseDate: "2026.08.12",
      recycledPercent: "94.2%",
      carbonScore: "6.4 kg CO₂e",
    },
    colorways: [
      {
        id: "raw-chalk",
        name: "Raw Un-Dyed Chalk",
        hex: "#EBEBE6",
        code: "CLR-01",
        images: {
          lateral: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80",
          topDown: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=80",
          heel: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=1000&q=80",
          onFoot: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1000&q=80",
        }
      },
      {
        id: "basalt-reclaim",
        name: "Basalt Onyx Black",
        hex: "#1B1B1A",
        code: "CLR-02",
        images: {
          lateral: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1000&q=80",
          topDown: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80",
          heel: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=1000&q=80",
          onFoot: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=80",
        }
      },
      {
        id: "moss-sand",
        name: "Forest Moss / Sand",
        hex: "#4E5643",
        code: "CLR-03",
        images: {
          lateral: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1000&q=80",
          topDown: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80",
          heel: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=1000&q=80",
          onFoot: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1000&q=80",
        }
      },
      {
        id: "marine-ocean",
        name: "Ocean Marine Blue",
        hex: "#24405E",
        code: "CLR-04",
        images: {
          lateral: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1000&q=80",
          topDown: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=80",
          heel: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=1000&q=80",
          onFoot: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1000&q=80",
        }
      }
    ],
    sizes: [
      { size: 7.0, stock: "in_stock" },
      { size: 7.5, stock: "in_stock" },
      { size: 8.0, stock: "in_stock" },
      { size: 8.5, stock: "in_stock" },
      { size: 9.0, stock: "in_stock" },
      { size: 9.5, stock: "low" },
      { size: 10.0, stock: "low" },
      { size: 10.5, stock: "in_stock" },
      { size: 11.0, stock: "in_stock" },
      { size: 11.5, stock: "low" },
      { size: 12.0, stock: "in_stock" },
      { size: 13.0, stock: "out_of_stock" },
    ]
  },
  {
    id: "terra-02",
    name: "TERRA-02 · The All-Terrain",
    subname: "TRAIL SCRAMBLE & URBAN HIKER",
    tagline: "Unstoppable grip on wet stone, forest dirt, and city curbs.",
    category: "trail",
    price: 240,
    inStock: true,
    edition: "SERIES 02",
    badge: "ALL-WEATHER",
    description: "Rugged enough for alpine ridges, sleek enough for downtown. Crafted with water-repellent recycled ripstop and sticky natural rubber lugs that refuse to slip.",
    labNote: "400+ miles on scree with zero wear. Water-resistant eco-barrier keeps feet dry through sudden downpours.",
    primaryImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80",
    hoverImage: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1000&q=80",
    specs: {
      weight: "248g Rugged Light",
      drop: "5.0mm Natural Stance",
      stackHeight: "33mm Heel / 28mm Forefoot",
      midsole: "Sugarcane Bio-EVA Dual Core",
      plate: "Upcycled Composite Stone Shield",
      upper: "Recycled Water-Repellent Ripstop",
      outsole: "40% Natural Rubber Deep Lugs",
      sku: "TER-02-TRL-01",
      releaseDate: "2026.07.01",
      recycledPercent: "91.5%",
      carbonScore: "7.1 kg CO₂e",
    },
    colorways: [
      {
        id: "mineral-clay",
        name: "Mineral Clay / Basalt",
        hex: "#3D3835",
        code: "CLR-01",
        images: {
          lateral: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80",
          topDown: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80",
          heel: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=1000&q=80",
          onFoot: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1000&q=80",
        }
      }
    ],
    sizes: [
      { size: 8.0, stock: "in_stock" },
      { size: 8.5, stock: "in_stock" },
      { size: 9.0, stock: "in_stock" },
      { size: 9.5, stock: "in_stock" },
      { size: 10.0, stock: "in_stock" },
      { size: 10.5, stock: "low" },
      { size: 11.0, stock: "in_stock" },
      { size: 12.0, stock: "out_of_stock" },
    ]
  },
  {
    id: "aer-03",
    name: "AER-03 · The Featherweight",
    subname: "SUB-200G BARELY-THERE SNEAKER",
    tagline: "Airflow you can feel with every step. Effortless summer walking.",
    category: "road",
    price: 195,
    inStock: true,
    edition: "LIMITED RUN",
    badge: "ULTRALIGHT 198G",
    description: "Stripped of all excess bulk. Single-layer un-dyed mono mesh breathes like a breeze, resting on a springy sugarcane cushion that takes the sting out of concrete.",
    labNote: "Air permeability index: 480 L/m²/s. Waterless dye method saves 85% freshwater.",
    primaryImage: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=1000&q=80",
    hoverImage: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=80",
    specs: {
      weight: "198g Ultra Featherweight",
      drop: "3.5mm Low Profile",
      stackHeight: "30mm Heel / 26.5mm Forefoot",
      midsole: "Gas-Expanded Sugarcane Core",
      plate: "Flexible Arch Stability Truss",
      upper: "100% Recycled Monofilament Yarn",
      outsole: "Laser-Siped Recycled Rubber Pods",
      sku: "AER-03-STR-03",
      releaseDate: "2026.06.18",
      recycledPercent: "96.8%",
      carbonScore: "5.8 kg CO₂e",
    },
    colorways: [
      {
        id: "chalk-white",
        name: "Pure Un-Dyed Chalk",
        hex: "#EFEFEA",
        code: "CLR-01",
        images: {
          lateral: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=1000&q=80",
          topDown: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=80",
          heel: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=1000&q=80",
          onFoot: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=80",
        }
      }
    ],
    sizes: [
      { size: 7.5, stock: "in_stock" },
      { size: 8.0, stock: "in_stock" },
      { size: 8.5, stock: "low" },
      { size: 9.0, stock: "in_stock" },
      { size: 9.5, stock: "in_stock" },
      { size: 10.0, stock: "low" },
      { size: 10.5, stock: "in_stock" },
      { size: 11.0, stock: "in_stock" },
    ]
  },
  {
    id: "nexus-00",
    name: "NEXUS-00 · The Bio-Slipper",
    subname: "ALGAE-FOAM POST-WALK RELIEF",
    tagline: "Instant arch relief and effortless off-duty comfort.",
    category: "recovery",
    price: 110,
    inStock: true,
    edition: "CORE DROP",
    badge: "ALGAE FOAM",
    description: "Molded from Bloom® harvested algae foam with a deep ergonomic footbed that cradles your heel and unloads foot tension. The easiest slip-on you'll ever own.",
    labNote: "Every pair cleans and restores 80 liters of natural freshwater. 100% circular recyclable.",
    primaryImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=80",
    hoverImage: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=1000&q=80",
    specs: {
      weight: "160g Feather Foam",
      drop: "0.0mm Natural Cradle",
      stackHeight: "28mm Ergonomic Contour",
      midsole: "Sugarcane Bio-EVA + Bloom® Algae",
      plate: "Zero Stiffener (Free Motion)",
      upper: "Sculpted Breathe-Shell",
      outsole: "Non-Marking Recycled Rubber",
      sku: "NEX-00-ECO-01",
      releaseDate: "2026.05.02",
      recycledPercent: "98.0%",
      carbonScore: "4.2 kg CO₂e",
    },
    colorways: [
      {
        id: "basalt",
        name: "Basalt Charcoal",
        hex: "#222220",
        code: "CLR-01",
        images: {
          lateral: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=80",
          topDown: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80",
          heel: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=1000&q=80",
          onFoot: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=1000&q=80",
        }
      }
    ],
    sizes: [
      { size: 7.0, stock: "in_stock" },
      { size: 8.0, stock: "in_stock" },
      { size: 9.0, stock: "in_stock" },
      { size: 10.0, stock: "in_stock" },
      { size: 11.0, stock: "in_stock" },
      { size: 12.0, stock: "in_stock" },
    ]
  }
];

export const EXPLODED_STACK_LAYERS = [
  {
    id: "layer-upper",
    name: "01 · Second-Skin 3D Knit",
    thickness: "Seamless Featherweave",
    material: "100% Ocean-Bound Plastics",
    function: "Wraps your foot like a custom sock. High airflow keeps you cool and blister-free all day.",
    weight: "36g",
  },
  {
    id: "layer-plate",
    name: "02 · Springy Arch Shank",
    thickness: "Torsional Composite",
    material: "Upcycled Carbon Composite",
    function: "Stores kinetic energy on heel strike and releases it forward, keeping your strides effortless.",
    weight: "26g",
  },
  {
    id: "layer-foam",
    name: "03 · Sugarcane Cloud Foam™",
    thickness: "33mm Heel Stack",
    material: "Plant-Based Sugarcane Elastomer",
    function: "Cloud-soft shock absorption that dampens asphalt impact and protects your knees and joints.",
    weight: "116g",
  },
  {
    id: "layer-traction",
    name: "04 · All-Weather Traction Base",
    thickness: "3.0mm Directional Pods",
    material: "30% Recycled Tire Rubber",
    function: "Bites into wet pavement, smooth stone, and gravel so you can move with absolute confidence.",
    weight: "37g",
  },
];

export const HERO_HOTSPOTS = [
  {
    id: "knit-upper",
    title: "Second-Skin Knit",
    spec: "Ocean-Bound Plastics · Breathable",
    description: "Zero friction, zero pressure points. Adapts to your foot for all-day walking comfort.",
    x: 32,
    y: 36,
    color: "#1B4DFF",
  },
  {
    id: "carbon-plate",
    title: "Springy Arch Shank",
    spec: "Upcycled Carbon · Natural Roll",
    description: "Supports your arch and delivers a propulsive spring forward with every step.",
    x: 52,
    y: 62,
    color: "#FF4F00",
  },
  {
    id: "pebax-foam",
    title: "Sugarcane Cloud-Foam™",
    spec: "Plant-Based · All-Day Cushion",
    description: "Absorbs harsh street impact so you can log 15,000 steps without feeling it.",
    x: 72,
    y: 70,
    color: "#1B4DFF",
  },
  {
    id: "traction-lugs",
    title: "All-Weather Grip Sole",
    spec: "Recycled Tires · Wet Traction",
    description: "Engineered hydro-channels prevent slipping on wet crosswalks, stone, and subway stairs.",
    x: 20,
    y: 84,
    color: "#FF4F00",
  },
];

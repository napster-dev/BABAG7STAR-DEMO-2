export type ProductCategory =
  | 'Headphones'
  | 'Speakers'
  | 'Watches'
  | 'Power Banks'
  | 'Wireless Earbuds'
  | 'Charging Cables'
  | 'Chargers'
  | 'Wireless Chargers'
  | 'Keyboards'
  | 'Mice';

export type CategoryGroup =
  | 'All'
  | 'Audio'
  | 'Wearables'
  | 'Smartphone Accessories'
  | 'Computing & Peripherals';

export interface ProductSpec {
  name: string;
  value: string;
}

export interface ProductReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryGroup: CategoryGroup;
  tagline: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  badge?: string;
  image: string;
  accentColor: string;
  colors: { name: string; hex: string }[];
  description: string;
  highlights: string[];
  specs: ProductSpec[];
  inTheBox: string[];
  warrantyYears: number;
  certifications: string[];
  reviews: ProductReview[];
}

export const CATEGORY_GROUPS_MAP: Record<ProductCategory, CategoryGroup> = {
  'Headphones': 'Audio',
  'Speakers': 'Audio',
  'Wireless Earbuds': 'Audio',
  'Watches': 'Wearables',
  'Power Banks': 'Smartphone Accessories',
  'Charging Cables': 'Smartphone Accessories',
  'Chargers': 'Smartphone Accessories',
  'Wireless Chargers': 'Smartphone Accessories',
  'Keyboards': 'Computing & Peripherals',
  'Mice': 'Computing & Peripherals',
};

export const ALL_CATEGORIES: ProductCategory[] = [
  'Headphones',
  'Speakers',
  'Watches',
  'Power Banks',
  'Wireless Earbuds',
  'Charging Cables',
  'Chargers',
  'Wireless Chargers',
  'Keyboards',
  'Mice',
];

export const PRODUCTS: Product[] = [
  // ================= HEADPHONES =================
  {
    id: 'hp-apex-700',
    name: 'Apex 700 Hybrid ANC Wireless Headphones',
    category: 'Headphones',
    categoryGroup: 'Audio',
    tagline: 'Flagship 45mm Bio-Cellulose Drivers with -42dB Active Noise Cancellation',
    price: 179.99,
    originalPrice: 219.99,
    rating: 4.9,
    reviewCount: 142,
    inStock: true,
    stockCount: 18,
    badge: 'UK Bestseller',
    image: '/src/assets/images/headphones_studio_shot_1790260610233.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Matte Obsidian', hex: '#111215' },
      { name: 'Brushed Titanium', hex: '#63666A' },
      { name: 'Champagne Gold Accent', hex: '#D4A337' }
    ],
    description: 'Engineered for discerning UK listeners who refuse to compromise between acoustic fidelity and active silence. The Apex 700 delivers ultra-low harmonic distortion across a 10Hz–40kHz frequency spectrum, complemented by custom memory foam ear cushions sculpted for long commute comfort on London Underground or long-haul travel.',
    highlights: [
      'Hybrid ANC with 6 beamforming microphones (-42dB noise floor reduction)',
      '60-Hour playback with ANC off, 45-hour playback with ANC on',
      'Rapid 10-minute USB-C charge yields 5 hours of listening',
      'High-Resolution Audio certified with LDAC, AAC and aptX Adaptive support',
      'Aircraft-grade aluminium adjustment yokes with soft protein leather'
    ],
    specs: [
      { name: 'Driver Diameter', value: '45mm Bio-Cellulose Dynamic' },
      { name: 'Frequency Range', value: '10Hz – 40,000Hz' },
      { name: 'Bluetooth Version', value: '5.4 with Multipoint Dual Pairing' },
      { name: 'Battery Capacity', value: '820 mAh Li-Polymer' },
      { name: 'Weight', value: '254 grams' },
      { name: 'Charging Port', value: 'USB-C PD Fast Charge' }
    ],
    inTheBox: [
      'Apex 700 Wireless Headphones',
      'Hard Shell Protective Travel Case with Carabiner',
      '1.2m Braided 3.5mm Gold-Plated Audio Cable',
      '0.8m Braided USB-C to USB-C Charging Cable',
      'UKCA Safety and Regulatory Booklet'
    ],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'RoHS', 'Hi-Res Audio'],
    reviews: [
      {
        id: 'rev-hp1',
        author: 'Marcus H.',
        location: 'London, UK',
        rating: 5,
        date: '14 Sept 2026',
        title: 'Completely silences the Northern Line commute',
        comment: 'Superb isolation. Built with genuine metal pivots instead of creaky plastics. The soundstage is remarkably balanced without excessive bass boost.',
        verifiedPurchase: true
      },
      {
        id: 'rev-hp2',
        author: 'Eleanor W.',
        location: 'Edinburgh, UK',
        rating: 5,
        date: '28 Aug 2026',
        title: 'Exceeds German brands at twice the price',
        comment: 'Battery lasts me nearly two weeks of office work before needing a recharge. Delivered next morning via Royal Mail Tracked.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'hp-studio-pro40',
    name: 'Pro-40 Reference Monitoring Studio Headphones',
    category: 'Headphones',
    categoryGroup: 'Audio',
    tagline: 'Flat Reference Acoustic Profile for Production and Precision Listening',
    price: 139.00,
    rating: 4.8,
    reviewCount: 88,
    inStock: true,
    stockCount: 11,
    badge: 'Sound Engineer Choice',
    image: '/src/assets/images/headphones_studio_shot_1790260610233.jpg',
    accentColor: '#A3A3A3',
    colors: [
      { name: 'Studio Black', hex: '#18181B' },
      { name: 'Gunmetal Silver', hex: '#52525B' }
    ],
    description: 'Designed specifically for broadcast editors, podcast producers, and audio purists. Delivers zero colouration, laser-sharp imaging, and detachable coiled cables suitable for mixing desks or portable DAC setups.',
    highlights: [
      'Neutral linear tuning developed in collaboration with UK recording engineers',
      'Replaceable velour ear cushions preventing fatigue during extended sessions',
      'Detachable twist-lock OFC oxygen-free copper cable system',
      'Fold-flat design with 90-degree swivelling ear cups for single-ear monitoring'
    ],
    specs: [
      { name: 'Impedance', value: '38 Ohms (Easy to drive via phones and DACs)' },
      { name: 'Sensitivity', value: '102 dB/mW' },
      { name: 'Cable', value: '3.0m coiled + 1.2m straight with 6.35mm adapter' },
      { name: 'Weight', value: '238 grams' }
    ],
    inTheBox: ['Pro-40 Headphones', '3.0m Coiled Cable', '1.2m Straight Cable', '6.35mm Gold Adapter', 'Drawstring Carry Pouch'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'RoHS'],
    reviews: [
      {
        id: 'rev-hp3',
        author: 'David P.',
        location: 'Manchester, UK',
        rating: 5,
        date: '02 Sept 2026',
        title: 'Phenomenal transient response',
        comment: 'Very truthful headphones. If a mix is bad you will hear it right away. Outstanding build quality.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'hp-stride-air',
    name: 'Stride Air Ultralight Wireless Over-Ear',
    category: 'Headphones',
    categoryGroup: 'Audio',
    tagline: 'Featherweight 185g Design with 40-Hour Everyday Battery',
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.7,
    reviewCount: 96,
    inStock: true,
    stockCount: 24,
    badge: 'Popular',
    image: '/src/assets/images/headphones_studio_shot_1790260610233.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Midnight', hex: '#0F172A' },
      { name: 'Chalk White', hex: '#F1F5F9' }
    ],
    description: 'Weighing only 185 grams, the Stride Air disappears on your head. Featuring intuitive tactile jog dials, dual mic clear call technology, and sweat-resistant ear cushions for active urban walking.',
    highlights: [
      'Sub-200g ergonomic headband with weight-distributing silicone arch',
      'Fast Bluetooth 5.3 with AAC audio streaming for iOS and Android',
      'Integrated tactile volume dial with zero accidental touch triggers'
    ],
    specs: [
      { name: 'Weight', value: '185 grams' },
      { name: 'Battery Life', value: 'Up to 40 Hours' },
      { name: 'Drivers', value: '40mm Neodymium' }
    ],
    inTheBox: ['Stride Air Headphones', 'USB-C Cable', 'User Guide'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE'],
    reviews: []
  },
  {
    id: 'hp-zen-travel',
    name: 'Zenith Fold Travel ANC Wireless',
    category: 'Headphones',
    categoryGroup: 'Audio',
    tagline: 'Dual-Axis Folding Form Factor with Airplane Audio Adapter Included',
    price: 119.50,
    rating: 4.8,
    reviewCount: 64,
    inStock: true,
    stockCount: 15,
    image: '/src/assets/images/headphones_studio_shot_1790260610233.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Graphite', hex: '#27272A' },
      { name: 'Sandstone Grey', hex: '#71717A' }
    ],
    description: 'Tailored for commuters and business flyers. Folds into a compact palm-sized travel pouch. Features ambient transparency pass-through at the touch of a button so you never miss gate announcements.',
    highlights: [
      'Dual-axis hinge folds into a compact 14cm profile',
      'Airplane dual-prong adapter included inside case',
      'Transparency pass-through mode with human voice amplification'
    ],
    specs: [
      { name: 'ANC Level', value: '-38 dB' },
      { name: 'Playtime', value: '38 Hours' },
      { name: 'Drivers', value: '40mm Custom Tuned' }
    ],
    inTheBox: ['Zenith Fold Headphones', 'Hard Travel Case', 'Airplane Dual Adapter', '3.5mm Cable', 'USB-C Cable'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'RoHS'],
    reviews: []
  },

  // ================= SPEAKERS =================
  {
    id: 'spk-soundblock-mini',
    name: 'SoundBlock Mini IP67 Rugged Speaker',
    category: 'Speakers',
    categoryGroup: 'Audio',
    tagline: '360° Omnidirectional Room Sound with Anodised Aluminium Grill',
    price: 69.99,
    originalPrice: 84.99,
    rating: 4.9,
    reviewCount: 115,
    inStock: true,
    stockCount: 22,
    badge: 'Waterproof IP67',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Carbon Black', hex: '#1C1917' },
      { name: 'Forest Green', hex: '#14532D' },
      { name: 'Sand Grey', hex: '#A8A29E' }
    ],
    description: 'Engineered to withstand the unpredictable British weather. Submersible in 1 metre of water for 30 minutes, SoundBlock Mini packs dual passive radiators that produce bass response punching far above its compact footprint.',
    highlights: [
      'IP67 Dustproof and waterproof submersible design',
      'Dual opposing passive radiators for deep distortion-free low end',
      'Stereo Link pair capability to connect two speakers wirelessly',
      'Integrated heavy-duty braided paracord lanyard'
    ],
    specs: [
      { name: 'Output Power', value: '24W Peak (16W RMS)' },
      { name: 'Battery Runtime', value: 'Up to 18 Hours at 60% Volume' },
      { name: 'Water Resistance', value: 'IP67 Certified' },
      { name: 'Weight', value: '440 grams' }
    ],
    inTheBox: ['SoundBlock Mini Speaker', 'Braided USB-C Cable', 'Paracord Lanyard', 'Quick Start Guide'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'IP67'],
    reviews: [
      {
        id: 'rev-spk1',
        author: 'Liam B.',
        location: 'Bristol, UK',
        rating: 5,
        date: '08 Sept 2026',
        title: 'Unbelievable volume from such a neat unit',
        comment: 'Survived heavy rain in the garden without a hitch. The metal grill feels exceptionally solid.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'spk-acoustic-home',
    name: 'Acoustic Studio 80 Desktop Speaker',
    category: 'Speakers',
    categoryGroup: 'Audio',
    tagline: 'High-Res Lossless Optical & Bluetooth 5.4 Bookshelf Monitor',
    price: 189.00,
    rating: 4.8,
    reviewCount: 52,
    inStock: true,
    stockCount: 8,
    badge: 'Audiophile Grade',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Walnut & Black Anodised', hex: '#27201D' },
      { name: 'Matte Ash Black', hex: '#18181B' }
    ],
    description: 'An acoustic centrepiece for desktop workspaces and modern living rooms. Powered by dual Class-D amplifiers driving a silk dome tweeter and Kevlar mid-bass cone, with optical TOSLINK input for TV and PC pairing.',
    highlights: [
      '80W RMS continuous clean output with zero clipping',
      'Silk dome tweeter for sparkling, non-fatiguing high frequencies',
      'Optical TOSLINK, RCA, AUX and Bluetooth 5.4 inputs',
      'Precision machined rotary brass knobs on top face'
    ],
    specs: [
      { name: 'Power Rating', value: '80 Watts RMS' },
      { name: 'Frequency Response', value: '42Hz – 22,000Hz' },
      { name: 'Inputs', value: 'TOSLINK Optical, RCA Line, 3.5mm, BT 5.4' },
      { name: 'Dimensions', value: '240 x 150 x 180 mm' }
    ],
    inTheBox: ['Acoustic Studio 80 Speaker', 'UK 3-Pin Power Cable', 'Optical Cable (1.5m)', 'RCA to 3.5mm Cable', 'User Manual'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'RoHS'],
    reviews: []
  },
  {
    id: 'spk-soundbar-compact',
    name: 'CinemaBeam Compact TV & PC Soundbar',
    category: 'Speakers',
    categoryGroup: 'Audio',
    tagline: 'Slimline Spatial Sound with HDMI eARC and Optical Connectivity',
    price: 119.99,
    originalPrice: 149.99,
    rating: 4.7,
    reviewCount: 73,
    inStock: true,
    stockCount: 14,
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#3B82F6',
    colors: [{ name: 'Sleek Black', hex: '#111827' }],
    description: 'Low-profile 55cm soundbar engineered to fit under any TV or 27–34" computer monitor. Features dedicated dialogue clarity DSP mode for crystal clear speech in BBC dramas and podcasts.',
    highlights: [
      'HDMI eARC for 1-remote TV power & volume synchronisation',
      'Dedicated Dialogue Enhancement EQ preset',
      'Quad racetrack drivers + dual reflex bass ports'
    ],
    specs: [
      { name: 'Peak Power', value: '60W' },
      { name: 'Width', value: '550 mm' },
      { name: 'Connectivity', value: 'HDMI eARC, Optical, Bluetooth, USB' }
    ],
    inTheBox: ['CinemaBeam Soundbar', 'Remote Control', 'UK Power Lead', 'HDMI Cable', 'Wall Mounting Brackets'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE'],
    reviews: []
  },
  {
    id: 'spk-pulse-clip',
    name: 'Pulse Clip Carabiner Shower & Trail Speaker',
    category: 'Speakers',
    categoryGroup: 'Audio',
    tagline: 'Ultra-Portable Carabiner Speaker with Magnetic Base',
    price: 39.99,
    rating: 4.8,
    reviewCount: 164,
    inStock: true,
    stockCount: 35,
    badge: 'Best Value',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Storm Grey', hex: '#4B5563' },
      { name: 'Jet Black', hex: '#18181B' },
      { name: 'Coast Navy', hex: '#1E3A8A' }
    ],
    description: 'Clippable onto backpacks, belt loops, or shower rails. The built-in rare-earth neodymium magnet also adheres firmly to steel surfaces, toolboxes, or gym equipment.',
    highlights: [
      'Integrated aluminium carabiner clip and magnetic backplate',
      'Full IP67 waterproof and floatable casing',
      '12 Hours of punchy music playback'
    ],
    specs: [
      { name: 'Power', value: '8W RMS' },
      { name: 'Battery', value: '2000 mAh' },
      { name: 'Weight', value: '210 grams' }
    ],
    inTheBox: ['Pulse Clip Speaker', 'USB-C Cable', 'Manual'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'IP67'],
    reviews: []
  },

  // ================= WATCHES =================
  {
    id: 'wtch-horizon-titanium',
    name: 'Horizon Pro Titanium Smartwatch',
    category: 'Watches',
    categoryGroup: 'Wearables',
    tagline: 'Grade 5 Titanium Bezel, Sapphire Glass & 14-Day Battery Life',
    price: 249.00,
    originalPrice: 289.00,
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    stockCount: 9,
    badge: 'Flagship Wearable',
    image: '/src/assets/images/smartwatch_studio_shot_1790260625951.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Raw Brushed Titanium', hex: '#94A3B8' },
      { name: 'DLC Midnight Black', hex: '#1E293B' },
      { name: 'Gold Bezel Edition', hex: '#D4A337' }
    ],
    description: 'Precision milled from aerospace Grade 5 titanium with an unscratchable sapphire crystal face. Features dual-frequency GPS for pinpoint tracking across UK city centres and countryside trails, continuous ECG heart monitoring, and 50-metre water resistance.',
    highlights: [
      '1.43-Inch 1000-nit Ultra-Bright AMOLED Display with Always-On Mode',
      'Continuous SpO2, Heart Rate Variability (HRV) and Sleep Apnea tracking',
      'Dual-Band Multi-Constellation GPS (GPS, GLONASS, Galileo, BeiDou)',
      '14-Day regular battery life / 48 hours continuous GPS activity',
      'Supports standard 22mm quick-release straps'
    ],
    specs: [
      { name: 'Case Material', value: 'Grade 5 Aerospace Titanium' },
      { name: 'Display Glass', value: 'Synthetic Sapphire Crystal' },
      { name: 'Water Resistance', value: '5 ATM (50 Metres)' },
      { name: 'Battery Capacity', value: '460 mAh (14 Days normal use)' },
      { name: 'Sensors', value: 'Optical Bio-Tracker 5.0, ECG, Barometer, Compass' },
      { name: 'Compatibility', value: 'iOS 14+ and Android 9.0+' }
    ],
    inTheBox: [
      'Horizon Pro Titanium Smartwatch',
      'High-Grade Fluoroelastomer Sport Strap (Black)',
      'Bonus Italian Leather Dress Strap (Cognac)',
      'Magnetic Rapid Wireless Charging Puck (USB-C)',
      'Warranty Documentation'
    ],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'RoHS', '5ATM'],
    reviews: [
      {
        id: 'rev-wtch1',
        author: 'Dr. Alistair R.',
        location: 'Oxford, UK',
        rating: 5,
        date: '10 Sept 2026',
        title: 'Outstanding battery life and titanium finish',
        comment: 'I charged it on Sunday and over 10 days later I still have 34% remaining with daily gym sessions. Looks classy in client meetings.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'wtch-pulse-fit',
    name: 'Pulse Active GPS Fitness Smartwatch',
    category: 'Watches',
    categoryGroup: 'Wearables',
    tagline: 'Ultralight 32g Sports Watch with 120+ Sport Modes & Training Readiness',
    price: 119.00,
    originalPrice: 139.00,
    rating: 4.8,
    reviewCount: 147,
    inStock: true,
    stockCount: 19,
    badge: 'Runners Choice',
    image: '/src/assets/images/smartwatch_studio_shot_1790260625951.jpg',
    accentColor: '#10B981',
    colors: [
      { name: 'Carbon Black', hex: '#0F172A' },
      { name: 'Chalk White', hex: '#F8FAFC' },
      { name: 'Glacier Blue', hex: '#38BDF8' }
    ],
    description: 'Crafted for marathoners, cyclists, and weekend footballers. Built with breathable silicone band, animated workout coaching, and automatic sync to Strava, Apple Health, and Google Fit.',
    highlights: [
      'Direct Strava and Komoot automatic route synchronisation',
      'VO2 Max, Recovery Time, and Aerobic Training Effect metrics',
      'Sub-35g featherweight design that stays stable during sprint intervals'
    ],
    specs: [
      { name: 'Weight', value: '32g (including strap)' },
      { name: 'Display', value: '1.32" Transflective readable under direct sun' },
      { name: 'Battery', value: '9 Days regular / 24h GPS' },
      { name: 'Water Resistance', value: 'IP68 & 5 ATM' }
    ],
    inTheBox: ['Pulse Active Watch', 'Magnetic Charger', 'Manual'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'RoHS'],
    reviews: []
  },
  {
    id: 'wtch-chrono-smart',
    name: 'Chrono Classic Hybrid Smartwatch',
    category: 'Watches',
    categoryGroup: 'Wearables',
    tagline: 'Physical Mechanical Hands with Hidden E-Paper Notification Display',
    price: 169.99,
    rating: 4.8,
    reviewCount: 43,
    inStock: true,
    stockCount: 7,
    badge: 'Executive Style',
    image: '/src/assets/images/smartwatch_studio_shot_1790260625951.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Stainless Silver & Brown Leather', hex: '#4A3728' },
      { name: 'Black Stainless & Black Leather', hex: '#1C1917' }
    ],
    description: 'The elegance of a traditional Swiss-inspired chronograph combined with modern smart capabilities. Real mechanical hands move out of the way when notifications arrive on the understated monochrome e-paper dial.',
    highlights: [
      'Up to 30 days of battery life on a single 1-hour charge',
      'Physical luminous watch hands made of polished steel',
      'Discrete vibration alerts for WhatsApp, Outlook, and incoming calls'
    ],
    specs: [
      { name: 'Case Size', value: '42mm 316L Stainless Steel' },
      { name: 'Battery', value: '30 Days Runtime' },
      { name: 'Strap Width', value: '20mm Quick Release' }
    ],
    inTheBox: ['Chrono Classic Watch', 'Leather Strap', 'Charging Cradle', 'Certificate'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE'],
    reviews: []
  },
  {
    id: 'wtch-orbit-band',
    name: 'Orbit Band 8 Health & Sleep Tracker',
    category: 'Watches',
    categoryGroup: 'Wearables',
    tagline: 'Slimline Curved AMOLED Fitness Band with Skin Temperature Sensor',
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.7,
    reviewCount: 210,
    inStock: true,
    stockCount: 33,
    badge: 'Best Budget Tracker',
    image: '/src/assets/images/smartwatch_studio_shot_1790260625951.jpg',
    accentColor: '#EC4899',
    colors: [
      { name: 'Graphite', hex: '#374151' },
      { name: 'Soft Sage', hex: '#6EE7B7' }
    ],
    description: 'Ultra-narrow, low-profile band ideal for wearing to sleep without discomfort. Accurately identifies REM, Deep, and Light sleep stages with skin temperature variation monitoring.',
    highlights: [
      '1.47-Inch edge-to-edge curved AMOLED glass display',
      'Skin temperature sensor and stress score analysis',
      'Up to 16 days of typical battery performance'
    ],
    specs: [
      { name: 'Weight', value: '18 grams' },
      { name: 'Water Resistance', value: '50m' },
      { name: 'Sensors', value: 'Heart Rate, SpO2, Skin Temp, 6-Axis Motion' }
    ],
    inTheBox: ['Orbit Band 8', 'Clip-on USB Charger', 'Manual'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE'],
    reviews: []
  },

  // ================= POWER BANKS =================
  {
    id: 'pb-volt-24k',
    name: 'VoltMax 24,000mAh 140W PD 3.1 Laptop Power Bank',
    category: 'Power Banks',
    categoryGroup: 'Smartphone Accessories',
    tagline: 'Dual USB-C 140W Power Delivery with Smart TFT Digital Telemetry Display',
    price: 89.99,
    originalPrice: 114.99,
    rating: 4.9,
    reviewCount: 168,
    inStock: true,
    stockCount: 16,
    badge: 'Airline Safe',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Anodised Space Grey', hex: '#374151' },
      { name: 'Matte Obsidian', hex: '#111827' }
    ],
    description: 'High-power output engineered for UK professionals. Capable of charging a 16" MacBook Pro from 0% to 50% in just 28 minutes while simultaneously fast-charging an iPhone or Pixel. Complies with UK and international airline carry-on regulations (under 100Wh).',
    highlights: [
      'Full 140W single-port PD 3.1 output for power-hungry laptops',
      'Color TFT screen reveals real-time voltage, current, watts, and temperature',
      'Pass-Through charging allows charging the bank and devices at once',
      'Compliant with CAA and TSA carry-on regulations (86.4Wh capacity)'
    ],
    specs: [
      { name: 'Capacity', value: '24,000 mAh / 86.4 Wh' },
      { name: 'Max Total Output', value: '140W' },
      { name: 'Ports', value: '2x USB-C (140W max), 1x USB-A (22.5W max)' },
      { name: 'Recharge Time', value: '55 minutes to 80% with 100W PD input' },
      { name: 'Dimensions', value: '155 x 54 x 49 mm' },
      { name: 'Weight', value: '595 grams' }
    ],
    inTheBox: [
      'VoltMax 24,000mAh 140W Power Bank',
      '1m 240W E-Marker Braided USB-C to USB-C Cable',
      'Protective Travel Carrying Bag',
      'Safety and Warranty Guide'
    ],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'RoHS', 'UN38.3', 'Airline Approved'],
    reviews: [
      {
        id: 'rev-pb1',
        author: 'Tom S.',
        location: 'Leeds, UK',
        rating: 5,
        date: '04 Sept 2026',
        title: 'Powers my MacBook on train trips between London and Leeds',
        comment: 'The display screen is brilliant—seeing the exact wattages going into my laptop gives total peace of mind. Build quality is solid metal.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'pb-mag-slim',
    name: 'MagGrip Ultra-Slim 10,000mAh Magnetic Power Bank',
    category: 'Power Banks',
    categoryGroup: 'Smartphone Accessories',
    tagline: 'Snap-on MagSafe Compatible with 15W Qi2 Fast Wireless & 20W USB-C',
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.8,
    reviewCount: 132,
    inStock: true,
    stockCount: 25,
    badge: 'Qi2 Certified',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Titanium Grey', hex: '#4B5563' },
      { name: 'Pearl White', hex: '#F9FAFB' },
      { name: 'Gold Champagne', hex: '#D4A337' }
    ],
    description: 'Only 14mm thick with an ultra-strong 13N magnetic array that locks firmly onto iPhone 12 through 16 series and Qi2-enabled devices. Soft-touch silicone prevents scratching phone glass.',
    highlights: [
      'Official Qi2 15W magnetic wireless charging (2x faster than 7.5W Qi1)',
      'Slim 14mm profile fits comfortably in pockets while attached to phone',
      'Foldable zinc-alloy kickstand for hands-free video calls and viewing'
    ],
    specs: [
      { name: 'Capacity', value: '10,000 mAh (Charges iPhone 15/16 twice)' },
      { name: 'Wireless Output', value: '15W / 10W / 7.5W Qi2' },
      { name: 'Wired USB-C Output', value: '20W PD Fast Charge' },
      { name: 'Thickness', value: '14.2 mm' }
    ],
    inTheBox: ['MagGrip Power Bank', 'Short 20cm Braided USB-C Cable', 'User Manual'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'Qi2', 'RoHS'],
    reviews: []
  },
  {
    id: 'pb-pocket-5k',
    name: 'NanoPocket 5,000mAh Emergency Power Bank',
    category: 'Power Banks',
    categoryGroup: 'Smartphone Accessories',
    tagline: 'Lipstick-Sized Built-in Foldable USB-C Connector (No Cable Needed)',
    price: 24.99,
    rating: 4.7,
    reviewCount: 94,
    inStock: true,
    stockCount: 40,
    badge: 'Pocket Sized',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#10B981',
    colors: [
      { name: 'Matte Black', hex: '#18181B' },
      { name: 'Lilac Purple', hex: '#C084FC' },
      { name: 'Sage Green', hex: '#86EFAC' }
    ],
    description: 'Plugs directly into the base of your phone without dangling cables. Features pass-through technology so you can plug your charger into the power bank to recharge both overnight.',
    highlights: [
      'Built-in foldable USB-C plug with silicone protector cap',
      'Pass-through charging circuitry',
      'Compact 78mm length weighs only 98 grams'
    ],
    specs: [
      { name: 'Capacity', value: '5,000 mAh' },
      { name: 'Output', value: '18W PD' },
      { name: 'Weight', value: '98 grams' }
    ],
    inTheBox: ['NanoPocket Power Bank', 'USB-C Charging Cable', 'Lanyard'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE'],
    reviews: []
  },
  {
    id: 'pb-rugged-20k',
    name: 'Outback 20,000mAh Solar & Torch Rugged Bank',
    category: 'Power Banks',
    categoryGroup: 'Smartphone Accessories',
    tagline: 'Shockproof & Splashproof with 300-Lumen Camping Flashlight',
    price: 54.99,
    rating: 4.8,
    reviewCount: 61,
    inStock: true,
    stockCount: 17,
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#F59E0B',
    colors: [{ name: 'Orange & Charcoal', hex: '#EA580C' }, { name: 'Tactical Black', hex: '#111827' }],
    description: 'Built for UK camping, hiking in the Lake District, or festival weekends. Features corner rubber bumpers, emergency monocrystalline solar auxiliary trickle panel, and high-intensity LED light.',
    highlights: [
      'Rugged TPU rubberised drop-resistant construction (1.5m drops)',
      'Triple output ports (2x USB-A + 1x USB-C)',
      '3-Mode 300-lumen torch with SOS strobe function'
    ],
    specs: [
      { name: 'Capacity', value: '20,000 mAh' },
      { name: 'Ingress Protection', value: 'IP65 Splash & Dustproof' },
      { name: 'Max Output', value: '22.5W QC & PD' }
    ],
    inTheBox: ['Outback Power Bank', 'Carabiner', 'Rugged Cable', 'Manual'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'IP65'],
    reviews: []
  },

  // ================= WIRELESS EARBUDS =================
  {
    id: 'ear-aurora-pro',
    name: 'Aurora Pro ANC Wireless Earbuds',
    category: 'Wireless Earbuds',
    categoryGroup: 'Audio',
    tagline: '11mm Dual Driver with -48dB Deep Active Noise Cancellation & Spatial Audio',
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.9,
    reviewCount: 178,
    inStock: true,
    stockCount: 21,
    badge: 'Top Rated Audio',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Piano Gloss Black', hex: '#0B0D11' },
      { name: 'Ceramic White', hex: '#FFFFFF' },
      { name: 'Gold Trim Edition', hex: '#D4A337' }
    ],
    description: 'Engineered with hybrid noise-sensing microphones that adjust ANC intensity dynamically to ambient background decibels. The custom 11mm coaxial dual-driver setup separates sub-bass from crisp treble details.',
    highlights: [
      '-48dB Adaptive Noise Cancellation with wind noise suppression',
      'Dual Dynamic + Balanced Armature coaxial driver acoustic architecture',
      '38-Hour total playtime (9 hours continuous per single bud charge)',
      'Wireless Qi charging case + fast USB-C wired charging',
      'IP54 dust and splash resistance for sweatproof training'
    ],
    specs: [
      { name: 'Driver System', value: '11mm Dynamic + Balanced Armature' },
      { name: 'Codecs', value: 'LDAC, AAC, SBC, LC3 Ready' },
      { name: 'Latency', value: '55ms Low-Latency Gaming Mode' },
      { name: 'Case Battery', value: '520 mAh (Provides 3 full recharges)' },
      { name: 'Weight', value: '4.8g per earbud' }
    ],
    inTheBox: [
      'Aurora Pro Earbuds (Left & Right)',
      'Wireless Charging Case with Matte Interior',
      '4 Pairs of Liquid Silicone Ear Tips (XS, S, M, L)',
      '1 Pair of Memory Foam Isolation Tips',
      'USB-C Braided Cable & UK Quick Guide'
    ],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'RoHS', 'Hi-Res Wireless'],
    reviews: [
      {
        id: 'rev-ear1',
        author: 'Sophie T.',
        location: 'London, UK',
        rating: 5,
        date: '12 Sept 2026',
        title: 'Fits securely and cuts out Tube noise',
        comment: 'The sound quality is punchy yet articulate. The wireless charging case is pocket friendly.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'ear-sport-clip',
    name: 'AeroSport Open-Ear Air Conduction Earbuds',
    category: 'Wireless Earbuds',
    categoryGroup: 'Audio',
    tagline: 'Secure Titanium Earhook Design with Full Situational Traffic Awareness',
    price: 74.99,
    rating: 4.8,
    reviewCount: 92,
    inStock: true,
    stockCount: 14,
    badge: 'Cycling & Running',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#10B981',
    colors: [
      { name: 'Midnight Charcoal', hex: '#1F2937' },
      { name: 'Electric Lime', hex: '#84CC16' }
    ],
    description: 'Keeps ear canals completely unobstructed so you hear traffic, approaching cyclists, and pedestrians while running outdoors on British roads. Titanium memory alloy hooks gently contour around any ear size.',
    highlights: [
      'Open-ear directional acoustic design prevents ear fatigue',
      'IPX7 completely waterproof against heavy downpours and sweat',
      '16.2mm oversized dynamic drivers with bass resonance chamber'
    ],
    specs: [
      { name: 'Battery', value: '10 Hours per charge / 30h with case' },
      { name: 'Waterproof Rating', value: 'IPX7 Submersible' },
      { name: 'Weight', value: '8.2g per earbud' }
    ],
    inTheBox: ['AeroSport Earbuds', 'Sport Charging Case', 'USB-C Cable', 'Manual'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'IPX7'],
    reviews: []
  },
  {
    id: 'ear-crystal-lite',
    name: 'Crystal Pods True Wireless Earbuds',
    category: 'Wireless Earbuds',
    categoryGroup: 'Audio',
    tagline: 'Transparent Cyber Shell with Crystal Clear Quad-Mic Call ENC',
    price: 39.99,
    originalPrice: 49.99,
    rating: 4.7,
    reviewCount: 110,
    inStock: true,
    stockCount: 30,
    badge: 'Trending Design',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Smoked Amber Clear', hex: '#78350F' },
      { name: 'Ice White Clear', hex: '#E2E8F0' }
    ],
    description: 'Distinctive transparent case exposing precision circuit traces. Quad environmental noise cancellation (ENC) mics filter out street and coffee shop background chatter on voice calls.',
    highlights: [
      'Sleek transparent enclosure showing internal architecture',
      'ENC Quad-Microphone array for crystal-clear work calls',
      'Fast 1-step Bluetooth instant pairing upon case opening'
    ],
    specs: [
      { name: 'Playtime', value: '6 Hours (24 Hours with Case)' },
      { name: 'Driver', value: '13mm Titanium Diaphragm' },
      { name: 'Charging', value: 'USB-C Fast Charge' }
    ],
    inTheBox: ['Crystal Pods', 'Transparent Case', 'Silicone Tips', 'USB-C Cable'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE'],
    reviews: []
  },
  {
    id: 'ear-sleeppods-pro',
    name: 'QuietRest Ultra-Tiny Sleep Earbuds',
    category: 'Wireless Earbuds',
    categoryGroup: 'Audio',
    tagline: 'Sub-Compact Ergonomic Profile for Side Sleepers with White Noise DSP',
    price: 59.99,
    rating: 4.8,
    reviewCount: 68,
    inStock: true,
    stockCount: 12,
    badge: 'Side Sleeper Friendly',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#6366F1',
    colors: [{ name: 'Cloud White', hex: '#F8FAFC' }, { name: 'Muted Lavender', hex: '#E0E7FF' }],
    description: 'Flushes completely inside the ear concha without exerting pressure when sleeping on your side. Features passive physical noise-blocking silicone wings and built-in soothing sound loops.',
    highlights: [
      'Ultra-miniature 2.6g earbud body designed specifically for side sleepers',
      'Built-in masking audio sounds (rain, ocean waves, white noise)',
      'Soft medical-grade silicone sleeves'
    ],
    specs: [
      { name: 'Thickness', value: 'Under 8mm profile' },
      { name: 'Battery', value: '8 Hours continuous playback' },
      { name: 'Weight', value: '2.6 grams per earbud' }
    ],
    inTheBox: ['QuietRest Sleep Earbuds', 'Compact Case', '3 Pairs Double-Flange Tips', 'Cable'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE'],
    reviews: []
  },

  // ================= CHARGING CABLES =================
  {
    id: 'cbl-titan-240w',
    name: 'TitanWeave 240W USB-C to USB-C Braided Cable (2m)',
    category: 'Charging Cables',
    categoryGroup: 'Smartphone Accessories',
    tagline: 'Kevlar Reinforced Core with E-Marker Chip & 40Gbps Data Transfer',
    price: 18.99,
    rating: 4.9,
    reviewCount: 220,
    inStock: true,
    stockCount: 45,
    badge: '30,000+ Bend Tested',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Charcoal & Gold Thread', hex: '#1C1917' },
      { name: 'Silver Platinum', hex: '#94A3B8' }
    ],
    description: 'The ultimate charging and display cable. Supports up to 240W Power Delivery (48V/5A) for modern laptops, workstations, and smartphones. Wrapped in ballistic nylon with zinc alloy connector housings and an integrated genuine leather cable tie.',
    highlights: [
      'Certified USB-IF PD 3.1 supporting up to 240W fast charging',
      'Dual E-Marker smart chipset regulates stable current and prevents heating',
      'Military ballistic nylon jacket tested through 30,000+ 90-degree bends',
      'Includes premium embossed leather cable management strap'
    ],
    specs: [
      { name: 'Power Rating', value: '240W (48V / 5A)' },
      { name: 'Data Speed', value: 'USB 4.0 / 40 Gbps & 8K@60Hz Video' },
      { name: 'Length', value: '2.0 Metres' },
      { name: 'Conductor', value: 'Oxygen-Free Pure Copper with Kevlar Core' }
    ],
    inTheBox: ['TitanWeave 240W 2m Cable', 'Leather Organizer Snap Strap', 'UK Warranty Card'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'USB-IF', 'RoHS'],
    reviews: [
      {
        id: 'rev-cbl1',
        author: 'Oliver K.',
        location: 'Cambridge, UK',
        rating: 5,
        date: '06 Sept 2026',
        title: 'Heaviest duty cable I have ever owned',
        comment: 'Connects my monitor, charges my laptop at full 100W, and the gold accent weave looks gorgeous on my desk.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'cbl-3in1-universal',
    name: 'OmniCord 100W 3-in-1 Fast Charging Cable (1.5m)',
    category: 'Charging Cables',
    categoryGroup: 'Smartphone Accessories',
    tagline: 'USB-C, Lightning & Micro-USB All-in-One with Smart Power Splitter',
    price: 16.99,
    rating: 4.8,
    reviewCount: 145,
    inStock: true,
    stockCount: 38,
    badge: 'Universal Travel Cable',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#D4A337',
    colors: [{ name: 'Matte Black', hex: '#18181B' }],
    description: 'Eliminates cable clutter in bags and vehicles. One single USB-C or USB-A source splits into USB-C (100W), Lightning (27W), and Micro-USB (10W) with reinforced aluminium alloy joints.',
    highlights: [
      'Multi-device simultaneous fast charging without voltage drop',
      'Double braided nylon sleeve resists tangling',
      'Fits both modern USB-C power bricks and legacy USB-A ports'
    ],
    specs: [
      { name: 'Max Power', value: '100W USB-C / 27W Lightning' },
      { name: 'Length', value: '1.5 Metres' },
      { name: 'Connectors', value: 'USB-C + USB-A to USB-C + Lightning + Micro' }
    ],
    inTheBox: ['OmniCord 3-in-1 Cable', 'Silicone Cable Organizer'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'RoHS'],
    reviews: []
  },
  {
    id: 'cbl-silicone-soft',
    name: 'FlexSilicone 60W USB-C to USB-C Tangle-Free (1.2m)',
    category: 'Charging Cables',
    categoryGroup: 'Smartphone Accessories',
    tagline: 'Silky Soft Liquid Silicone That Never Knots or Tangles',
    price: 12.99,
    rating: 4.8,
    reviewCount: 98,
    inStock: true,
    stockCount: 50,
    badge: 'Tangle Free',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#06B6D4',
    colors: [
      { name: 'Graphite', hex: '#374151' },
      { name: 'Sand White', hex: '#F3F4F6' },
      { name: 'Sky Blue', hex: '#38BDF8' }
    ],
    description: 'Crafted with food-grade liquid silicone exterior that remains completely flexible and supple even in freezing winter conditions. Easily rolls up without memory coils.',
    highlights: [
      'Liquid silicone finish wipes clean with damp cloth',
      '60W Power Delivery charges smartphones to 50% in 25 mins',
      'Graphene inner shielding for optimal heat dissipation'
    ],
    specs: [
      { name: 'Power', value: '60W PD (20V / 3A)' },
      { name: 'Length', value: '1.2 Metres' },
      { name: 'Material', value: 'Liquid Silicone + Graphene' }
    ],
    inTheBox: ['FlexSilicone Cable', 'Cable Strap'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE'],
    reviews: []
  },
  {
    id: 'cbl-angled-right',
    name: '90-Degree Right-Angle Gaming USB-C Cable (2m)',
    category: 'Charging Cables',
    categoryGroup: 'Smartphone Accessories',
    tagline: 'L-Shaped Low Profile Connector for Uninterrupted Hand Grip While Playing',
    price: 14.99,
    rating: 4.7,
    reviewCount: 77,
    inStock: true,
    stockCount: 28,
    badge: 'Mobile Gaming',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#EF4444',
    colors: [{ name: 'Stealth Black & Red', hex: '#1F2937' }],
    description: 'The 90-degree right angle plug hugs the edge of your phone or tablet, preventing palm strain and eliminating bent connector damage during long mobile gaming or video sessions.',
    highlights: [
      'Low profile 90-degree connector profile does not block palm grip',
      'LED power indicator at the tip confirms active fast charging',
      '100W PD rated with braided aramid fibre sheath'
    ],
    specs: [
      { name: 'Rating', value: '100W PD Fast Charge' },
      { name: 'Length', value: '2.0 Metres' },
      { name: 'Angle', value: '90 Degree Right-Angle Head' }
    ],
    inTheBox: ['90-Degree Gaming Cable', 'Warranty Card'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE'],
    reviews: []
  },

  // ================= CHARGERS =================
  {
    id: 'chg-gan-100w',
    name: 'GaN III Pro 100W 4-Port UK Wall Charger',
    category: 'Chargers',
    categoryGroup: 'Smartphone Accessories',
    tagline: 'Compact Gallium Nitride 3x USB-C + 1x USB-A with UK 3-Pin Plug',
    price: 49.99,
    originalPrice: 64.99,
    rating: 4.9,
    reviewCount: 195,
    inStock: true,
    stockCount: 20,
    badge: 'UK Standard 3-Pin',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Matte Obsidian', hex: '#111827' },
      { name: 'Ceramic White', hex: '#F9FAFB' }
    ],
    description: 'Equipped with third-generation Gallium Nitride (GaN III) semiconductors for higher thermal efficiency and 40% smaller footprint than standard OEM chargers. Features BS 1363 UK 3-pin safety shutters and dynamic power allocation across 4 connected devices simultaneously.',
    highlights: [
      '100W Maximum PD output charges MacBook Pro 16", iPad, and iPhone at once',
      'UK 3-Pin standard plug with integrated BS 1362 certified safety fuse',
      'Dynamic power balancing distributes watts according to device battery state',
      'Advanced ActiveProtect 4.0 monitors temperature 3.2 million times per day'
    ],
    specs: [
      { name: 'Total Output', value: '100W Max' },
      { name: 'Ports', value: '3x USB-C (PD 3.0, PPS, QC 4+), 1x USB-A (22.5W QC 3.0)' },
      { name: 'UK Plug Type', value: 'BS 1363 Certified 3-Pin Grounded' },
      { name: 'Input Voltage', value: '100-240V ~ 50/60Hz (Worldwide travel compatible)' },
      { name: 'Dimensions', value: '68 x 68 x 31 mm (excluding pins)' },
      { name: 'Weight', value: '215 grams' }
    ],
    inTheBox: [
      'GaN III Pro 100W 4-Port UK Charger',
      'Instruction and UK Safety Compliance Booklet',
      '2-Year UK Warranty Registration Card'
    ],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'BS 1363', 'RoHS'],
    reviews: [
      {
        id: 'rev-chg1',
        author: 'George M.',
        location: 'London, UK',
        rating: 5,
        date: '11 Sept 2026',
        title: 'Replaced 4 messy chargers on my wall socket',
        comment: 'Runs surprisingly cool even when charging both my laptop and phone together. The solid UK 3-pin plug fits snugly without wobbling.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'chg-gan-65w-slim',
    name: 'GaN 65W Dual USB-C Ultra-Slim UK Travel Charger',
    category: 'Chargers',
    categoryGroup: 'Smartphone Accessories',
    tagline: 'Flat Wall-Hugging Design (Only 18mm Deep) with Foldable UK Ground Pin',
    price: 34.99,
    originalPrice: 42.99,
    rating: 4.8,
    reviewCount: 114,
    inStock: true,
    stockCount: 26,
    badge: 'Behind-Furniture Fit',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Midnight Black', hex: '#18181B' },
      { name: 'Chalk White', hex: '#FAFAFA' }
    ],
    description: 'Designed to fit in tight spaces behind beds, desks, and sofas where bulky plugs fail. Ports exit downward so cables do not kink against walls.',
    highlights: [
      'Ultra-flat 18mm profile hugs the wall socket flush',
      'Dual USB-C ports with 65W single / 45W+20W dual distribution',
      'Down-facing cable orientation prevents bent wires'
    ],
    specs: [
      { name: 'Output', value: '65W Max PD 3.0 / PPS' },
      { name: 'Thickness', value: '18 mm off wall surface' },
      { name: 'Safety', value: 'UKCA Certified with Thermal Fuse' }
    ],
    inTheBox: ['65W Slim UK Charger', 'Manual'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'BS 1363'],
    reviews: []
  },
  {
    id: 'chg-nano-35w',
    name: 'Nano 35W Dual-Port Compact Charger',
    category: 'Chargers',
    categoryGroup: 'Smartphone Accessories',
    tagline: 'Miniature Thumb-Sized Fast Charger for Phones, Tablets and Watches',
    price: 22.99,
    rating: 4.8,
    reviewCount: 153,
    inStock: true,
    stockCount: 32,
    badge: 'Everyday Essential',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#10B981',
    colors: [
      { name: 'Obsidian', hex: '#111827' },
      { name: 'White', hex: '#FFFFFF' }
    ],
    description: 'No larger than a golf ball. Fast charges iPhone 16 / Galaxy S25 from 0 to 50% in under 25 minutes via 35W Power Delivery.',
    highlights: [
      '35W PPS output supports Super Fast Charging 2.0',
      'Dual USB-C ports to charge phone and watch together',
      'Over-voltage and short-circuit protection'
    ],
    specs: [
      { name: 'Power', value: '35W Max' },
      { name: 'Ports', value: '2x USB-C' },
      { name: 'Weight', value: '75 grams' }
    ],
    inTheBox: ['Nano 35W Charger', 'Safety Leaflet'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE'],
    reviews: []
  },
  {
    id: 'chg-desk-station-140w',
    name: 'PowerForge 140W Desktop Power Hub',
    category: 'Chargers',
    categoryGroup: 'Smartphone Accessories',
    tagline: '5-Port Desktop Power Hub with 1.5m UK Mains Lead',
    price: 69.99,
    rating: 4.9,
    reviewCount: 82,
    inStock: true,
    stockCount: 15,
    badge: 'Desk Organisation',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#D4A337',
    colors: [{ name: 'Space Grey & Aluminium', hex: '#374151' }],
    description: 'Brings power directly onto your desk surface without crawling under furniture. Sits flat on rubber non-slip feet with 3x USB-C and 2x USB-A ports.',
    highlights: [
      '140W total output powered by a detachable 1.5m UK mains lead',
      'Dedicated rubber silicone feet to anchor to desk',
      'Smart LED power load indicator'
    ],
    specs: [
      { name: 'Total Power', value: '140W' },
      { name: 'Mains Lead', value: '1.5m UK 3-Pin Fused' },
      { name: 'Ports', value: '3x USB-C, 2x USB-A' }
    ],
    inTheBox: ['PowerForge Hub', '1.5m UK Power Cable', 'Desk Cable Clip', 'Manual'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'RoHS'],
    reviews: []
  },

  // ================= WIRELESS CHARGERS =================
  {
    id: 'wchg-trio-fold',
    name: 'AeroFold 3-in-1 Magnetic Wireless Stand',
    category: 'Wireless Chargers',
    categoryGroup: 'Smartphone Accessories',
    tagline: 'Simultaneous 15W Qi2 Fast Charging for Phone, Smartwatch and Earbuds',
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.9,
    reviewCount: 160,
    inStock: true,
    stockCount: 17,
    badge: '3-in-1 Foldable',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Space Grey Aluminium', hex: '#374151' },
      { name: 'Brushed Silver', hex: '#9CA3AF' },
      { name: 'Champagne Gold Accent', hex: '#D4A337' }
    ],
    description: 'Milled from a single block of aviation aluminium. Folds completely flat for travel or stands upright to support StandBy display clock mode on your bedside table. Charges Phone (15W Qi2), Smartwatch (5W fast puck), and AirPods/buds (5W pad) concurrently.',
    highlights: [
      'Official Qi2 15W high-speed magnetic alignment for iPhone and Android',
      'Heavy weighted anti-slip aluminium base allows 1-handed phone removal',
      'Dual precision friction hinges allow infinite angle tilt from 0° to 85°',
      'Includes 30W UK USB-C wall adapter and 1.5m braided cable in the box'
    ],
    specs: [
      { name: 'Phone Output', value: '15W Qi2 Fast Wireless' },
      { name: 'Watch Output', value: '5W Fast Magnetic Puck' },
      { name: 'Earbuds Pad', value: '5W Qi Inductive Base' },
      { name: 'Construction', value: 'CNC Machined Anodised Aluminium & Silicone' },
      { name: 'Folded Height', value: 'Only 21mm flat' },
      { name: 'Weight', value: '310 grams' }
    ],
    inTheBox: [
      'AeroFold 3-in-1 Aluminium Stand',
      '30W UK 3-Pin GaN USB-C Power Adapter',
      '1.5m Braided USB-C to USB-C Cable',
      'Travel Velvet Pouch & UK Manual'
    ],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'Qi2', 'RoHS'],
    reviews: [
      {
        id: 'rev-wchg1',
        author: 'Charlotte B.',
        location: 'Bath, UK',
        rating: 5,
        date: '09 Sept 2026',
        title: 'Perfect bedside nightstand charger',
        comment: 'The StandBy clock mode on my bedside looks sleek. The weight of the aluminium means it doesn’t lift when pulling my phone away.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'wchg-pad-aluminium',
    name: 'AlumaPad 15W Minimalist Desk Charging Pad',
    category: 'Wireless Chargers',
    categoryGroup: 'Smartphone Accessories',
    tagline: 'Ultra-Thin 6mm CNC Aluminium with Italian Leather Top Surface',
    price: 32.99,
    rating: 4.8,
    reviewCount: 88,
    inStock: true,
    stockCount: 22,
    badge: 'Minimalist Desk',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Obsidian Black Leather', hex: '#18181B' },
      { name: 'Cognac Brown Leather', hex: '#78350F' }
    ],
    description: 'Sits quietly on your executive desk or coffee table. The top surface is lined with genuine vegetable-tanned leather that develops a rich natural patina over time.',
    highlights: [
      '15W Fast inductive charging with FOD (Foreign Object Detection)',
      'Subtle breathing LED indicator automatically dims in dark rooms',
      'Thermally conductive aluminium chassis keeps phone cool'
    ],
    specs: [
      { name: 'Thickness', value: '6.2 mm' },
      { name: 'Diameter', value: '98 mm' },
      { name: 'Material', value: 'Anodised 6063 Aluminium + Top Grain Leather' }
    ],
    inTheBox: ['AlumaPad Wireless Pad', '1.2m Braided Cable', 'Manual'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'Qi Certified'],
    reviews: []
  },
  {
    id: 'wchg-car-mount',
    name: 'MagDrive 15W Magnetic Vent Car Charger',
    category: 'Wireless Chargers',
    categoryGroup: 'Smartphone Accessories',
    tagline: 'Active Peltier Cooling Fan & Steel Hook Vent Clamp for UK Roads',
    price: 39.99,
    originalPrice: 49.99,
    rating: 4.8,
    reviewCount: 104,
    inStock: true,
    stockCount: 18,
    badge: 'UK Pothole Tested',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#3B82F6',
    colors: [{ name: 'Matte Black', hex: '#111827' }],
    description: 'Equipped with a mechanical steel-hook clamp that securely fastens to UK air vent blades. The active semiconductor cooling fan prevents phone overheating when running GPS navigation and 5G in direct sunlight.',
    highlights: [
      'Active CryoFlow semiconductor cooling fan maintains peak 15W speeds',
      'Dual ball-head joint rotates seamlessly between portrait & landscape',
      'N52 neodymium magnet array holds phone over speed humps and potholes'
    ],
    specs: [
      { name: 'Wireless Output', value: '15W Qi2 Fast Wireless' },
      { name: 'Mount Type', value: 'Tension Steel-Hook Vent Mechanism' },
      { name: 'Cooling', value: 'Active Peltier + Silent Hydraulic Fan' }
    ],
    inTheBox: ['MagDrive Car Mount', 'Air Vent Hook Clamp', '1m USB-C Cable', 'Car Adapter'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE'],
    reviews: []
  },
  {
    id: 'wchg-ambient-night',
    name: 'Lumina 15W Nightstand Charger with Ambient Light',
    category: 'Wireless Chargers',
    categoryGroup: 'Smartphone Accessories',
    tagline: 'Warm 2700K Dimmable Halo Nightlight with Magnetic Wireless Base',
    price: 44.99,
    rating: 4.7,
    reviewCount: 75,
    inStock: true,
    stockCount: 14,
    badge: 'Bedside Comfort',
    image: '/src/assets/images/hero_electronics_showcase_1790260595628.jpg',
    accentColor: '#F59E0B',
    colors: [{ name: 'Soft Linen White', hex: '#F9FAFB' }, { name: 'Basalt Charcoal', hex: '#27272A' }],
    description: 'Combines a soothing touch-sensitive bedside nightlight with a fast wireless charging pad. Touch the metal ring to cycle through three calming warm glow brightness levels.',
    highlights: [
      'Touch-sensitive capacitive dimming ring with memory function',
      '15W wireless charging pad with foreign object protection',
      'Non-glare 2700K warm LED glow optimized for melatonin production'
    ],
    specs: [
      { name: 'Light Temperature', value: '2700K Warm Amber' },
      { name: 'Wireless Power', value: '15W Fast Charge' },
      { name: 'Base', value: 'Weighted Silicone Non-Slip' }
    ],
    inTheBox: ['Lumina Lamp Charger', 'USB-C Cable', 'UK Plug', 'Guide'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE'],
    reviews: []
  },

  // ================= KEYBOARDS =================
  {
    id: 'kb-apex-pro75',
    name: 'Apex 75 Aluminium Wireless Mechanical Keyboard',
    category: 'Keyboards',
    categoryGroup: 'Computing & Peripherals',
    tagline: 'CNC Anodised Aluminium Chassis, Gasket Mounted, Pre-Lubed Switches',
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.9,
    reviewCount: 134,
    inStock: true,
    stockCount: 12,
    badge: 'UK ISO Layout Option',
    image: '/src/assets/images/desk_peripherals_shot_1790260640932.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Anodised Midnight', hex: '#111827' },
      { name: 'Lunar Grey', hex: '#4B5563' },
      { name: 'Gold Rotary Accent', hex: '#D4A337' }
    ],
    description: 'Precision machined from a solid 1.8kg billet of aerospace 6063 aluminium. Featuring a multi-layer gasket mount architecture with Poron foam dampening that produces a rich, deep acoustic "thock" on every keypress without ping or rattle. Ships in UK ISO layout with double-shot PBT keycaps.',
    highlights: [
      'Authentic UK ISO layout with standard double-height Enter key & £ symbol',
      'CNC 6063 aluminium enclosure with precision brass weight bar',
      'Factory pre-lubed linear mechanical switches (45g actuation)',
      'Tri-mode connectivity: 2.4GHz wireless dongle, Bluetooth 5.2, USB-C',
      'Hot-swappable 5-pin PCB allows changing switches without soldering',
      'Programmable solid aluminium rotary volume knob'
    ],
    specs: [
      { name: 'Layout', value: '75% Compact (82 Keys) - UK ISO & ANSI available' },
      { name: 'Switch Type', value: 'Custom Linear Gold (Lubed Krytox 205g0)' },
      { name: 'Mounting Style', value: 'Poron Gasket Mount with FR4 Plate' },
      { name: 'Battery Capacity', value: '4000 mAh (Up to 240 hours without RGB)' },
      { name: 'Keycap Profile', value: 'Cherry Profile Double-Shot PBT' },
      { name: 'Weight', value: '1,820 grams (Sturdy non-slip desktop anchor)' }
    ],
    inTheBox: [
      'Apex 75 Aluminium Mechanical Keyboard',
      '2.4GHz Magnetic Wireless USB Receiver',
      '1.8m Braided USB-C to USB-A Gold-Plated Cable',
      '2-in-1 Keycap and Switch Puller Tool',
      '4 Replacement Accent Keycaps & Extra Switches',
      'UK Manual & VIA Key Remapping Guide'
    ],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'RoHS'],
    reviews: [
      {
        id: 'rev-kb1',
        author: 'James C.',
        location: 'Sheffield, UK',
        rating: 5,
        date: '07 Sept 2026',
        title: 'Proper UK ISO layout and godly acoustic sound',
        comment: 'Finding a custom aluminium board in true UK ISO layout with the proper £ key is rare. The gasket feel is cushioned and typing is an absolute pleasure.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'kb-slim-blade',
    name: 'BladeFlow Low-Profile Wireless Keyboard',
    category: 'Keyboards',
    categoryGroup: 'Computing & Peripherals',
    tagline: 'Ultra-Slim 12mm Ergonomic Aluminium Keyboard with Scissor Switches',
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.8,
    reviewCount: 91,
    inStock: true,
    stockCount: 16,
    badge: 'Mac & Windows Dual',
    image: '/src/assets/images/desk_peripherals_shot_1790260640932.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Space Grey', hex: '#374151' },
      { name: 'Silver Aluminium', hex: '#94A3B8' }
    ],
    description: 'Engineered for sleek minimalist desktop aesthetics. Ultra-shallow 1.5mm key travel scissor-switch mechanism ensures whisper-quiet keystrokes and reduced wrist fatigue during all-day typing.',
    highlights: [
      'Instant 1-touch switching between 3 devices (Mac, Windows, iPad)',
      'Smart ambient backlighting illuminates as hands approach keyboard',
      'Brushed aluminium top plate with laser-etched UK layout'
    ],
    specs: [
      { name: 'Height', value: '12mm ultra-slim front profile' },
      { name: 'Battery', value: 'Rechargeable USB-C (3 months runtime)' },
      { name: 'Switches', value: 'Precision Scissor Mechanism' }
    ],
    inTheBox: ['BladeFlow Keyboard', 'USB-C Cable', 'Keyboard Dust Cover', 'Guide'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE'],
    reviews: []
  },
  {
    id: 'kb-zenith-split',
    name: 'ErgoSplit Wireless Ortholinear Keyboard',
    category: 'Keyboards',
    categoryGroup: 'Computing & Peripherals',
    tagline: 'Split Two-Piece Ergonomic Keyboard with Adjustable Tenting Feet',
    price: 189.00,
    rating: 4.8,
    reviewCount: 37,
    inStock: true,
    stockCount: 6,
    badge: 'Physiotherapist Approved',
    image: '/src/assets/images/desk_peripherals_shot_1790260640932.jpg',
    accentColor: '#10B981',
    colors: [{ name: 'Basalt Black', hex: '#18181B' }],
    description: 'Separates left and right typing modules to keep shoulders, forearms, and wrists in a completely natural neutral position. Eliminates ulnar deviation and repetitive strain injuries (RSI).',
    highlights: [
      'Independent split modules linked wirelessly or via TRRS cable',
      'Magnetic wrist rests with high-density memory foam cushioning',
      'Integrated tenting kit angles keys from 5° to 15°'
    ],
    specs: [
      { name: 'Switches', value: 'Kailh Choc Low-Profile Red Linear' },
      { name: 'Connectivity', value: 'Bluetooth 5.3 + 2.4G + USB-C' },
      { name: 'Firmware', value: 'ZMK & QMK Open Source Compatible' }
    ],
    inTheBox: ['ErgoSplit Halves (Left & Right)', 'Connecting Cable', 'Magnetic Palm Rests', 'Case'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'RoHS'],
    reviews: []
  },
  {
    id: 'kb-silent-office',
    name: 'WhisperKey Silent Membrane UK Keyboard',
    category: 'Keyboards',
    categoryGroup: 'Computing & Peripherals',
    tagline: 'Full-Size 104-Key with Dedicated NumPad & Spill-Resistant Seals',
    price: 39.99,
    rating: 4.7,
    reviewCount: 112,
    inStock: true,
    stockCount: 34,
    badge: 'Quiet Office',
    image: '/src/assets/images/desk_peripherals_shot_1790260640932.jpg',
    accentColor: '#6B7280',
    colors: [{ name: 'Office Black', hex: '#111827' }],
    description: 'Designed for quiet open-plan office spaces and library study. Features dampening silicone membrane dome cups that reduce keystroke decibels to under 28dB.',
    highlights: [
      'Sub-28dB typing volume ensures zero disturbance during Zoom calls',
      'Full-size UK layout with dedicated accounting number pad',
      'Spill-resistant internal drainage channels protect against tea accidents'
    ],
    specs: [
      { name: 'Layout', value: 'Full 104-Key UK ISO with Number Pad' },
      { name: 'Key Life', value: '10 Million Keystrokes' },
      { name: 'Connection', value: 'Plug-and-play USB 2.4G Wireless Dongle' }
    ],
    inTheBox: ['WhisperKey Keyboard', 'USB Receiver', 'Batteries', 'Manual'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE'],
    reviews: []
  },

  // ================= MICE =================
  {
    id: 'ms-ergo-master',
    name: 'Precision Vertical Ergonomic Wireless Mouse',
    category: 'Mice',
    categoryGroup: 'Computing & Peripherals',
    tagline: '57° Natural Handshake Angle, 4000 DPI Optical & Dual Metal Scroll Wheels',
    price: 59.99,
    originalPrice: 74.99,
    rating: 4.9,
    reviewCount: 156,
    inStock: true,
    stockCount: 18,
    badge: 'RSI Prevention',
    image: '/src/assets/images/desk_peripherals_shot_1790260640932.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Graphite Black', hex: '#1F2937' },
      { name: 'Sand Grey', hex: '#6B7280' },
      { name: 'Champagne Accent', hex: '#D4A337' }
    ],
    description: 'Scientifically crafted to place your forearm and wrist in an optimal 57-degree natural handshake posture. Drastically alleviates carpal tunnel pressure, tendon strain, and forearm muscle fatigue during intensive spreadsheets and design workflows.',
    highlights: [
      '57° Handshake ergonomic contour tested by ergonomic specialists',
      'Dual precision machined aluminium scroll wheels (vertical & thumb horizontal)',
      'Sub-20dB silent micro-switches prevent click fatigue',
      'Rechargeable 500mAh battery delivers up to 70 days per single charge',
      'Seamless multi-computer pairing across 3 devices via Bluetooth & 2.4G'
    ],
    specs: [
      { name: 'Sensor', value: 'PixArt High-Precision Optical (800-4000 DPI)' },
      { name: 'Angle', value: '57 Degrees Handshake' },
      { name: 'Buttons', value: '6 Programmable Buttons + Thumb Scroll' },
      { name: 'Battery', value: 'USB-C Rechargeable (70 Days Runtime)' },
      { name: 'Weight', value: '135 grams' }
    ],
    inTheBox: [
      'Precision Vertical Ergonomic Mouse',
      'USB-A & USB-C 2.4GHz Nano Receiver',
      '1m Braided USB-C Charging Cable',
      'Ergonomic Workstation Guide & UK Warranty'
    ],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'RoHS'],
    reviews: [
      {
        id: 'rev-ms1',
        author: 'Dr. Rebecca L.',
        location: 'Newcastle, UK',
        rating: 5,
        date: '13 Sept 2026',
        title: 'Cured my persistent wrist ache within two days',
        comment: 'As a radiologist reading imaging scans 9 hours a day, this mouse was an absolute game changer. The thumb wheel makes scrolling through wide Excel sheets effortless.',
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 'ms-feather-49',
    name: 'Vortex Ultra-Light 49g Wireless Gaming Mouse',
    category: 'Mice',
    categoryGroup: 'Computing & Peripherals',
    tagline: 'Featherweight 49g Solid Shell with 32,000 DPI 8000Hz Polling Sensor',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviewCount: 122,
    inStock: true,
    stockCount: 14,
    badge: 'Competitive 8K Polling',
    image: '/src/assets/images/desk_peripherals_shot_1790260640932.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Carbon Black', hex: '#0B0D11' },
      { name: 'Ghost White', hex: '#FFFFFF' }
    ],
    description: 'No honeycomb holes needed. Achieves an astonishing 49-gram weight with a seamless solid magnesium-reinforced shell. Equipped with the flagship PAW3950 sensor for pixel-perfect tracking without micro-stutter.',
    highlights: [
      '49g Ultralight solid shell without dirt-accumulating honeycomb holes',
      'Real 8000Hz hyper-polling rate delivers 0.125ms click response time',
      '100% Virgin Grade PTFE skates for buttery mouse pad glide'
    ],
    specs: [
      { name: 'Sensor', value: 'PAW3950 Flagship (32,000 DPI, 750 IPS, 50G)' },
      { name: 'Weight', value: '49 ± 1.5 grams' },
      { name: 'Switches', value: 'Optical Micro-Switches (100 Million Clicks)' }
    ],
    inTheBox: ['Vortex 49g Mouse', '8K Dongle', 'Paracord Cable', 'Extra PTFE Skates', 'Grip Tape'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE'],
    reviews: []
  },
  {
    id: 'ms-glide-travel',
    name: 'GlidePocket Slim Bluetooth Travel Mouse',
    category: 'Mice',
    categoryGroup: 'Computing & Peripherals',
    tagline: 'Pebble Smooth Flat Profile with Silent Clicks and Dual-Mode Bluetooth',
    price: 24.99,
    rating: 4.7,
    reviewCount: 85,
    inStock: true,
    stockCount: 30,
    badge: 'Portable Travel',
    image: '/src/assets/images/desk_peripherals_shot_1790260640932.jpg',
    accentColor: '#10B981',
    colors: [
      { name: 'Space Grey', hex: '#4B5563' },
      { name: 'Champagne Gold', hex: '#D4A337' },
      { name: 'Pearl Pink', hex: '#F472B6' }
    ],
    description: 'Only 22mm thick, slips neatly into laptop sleeve pockets without bulging. Works reliably on hotel cafe tables, glass, or train trays with optical tracking.',
    highlights: [
      'Slim pocketable profile that takes zero bag space',
      'Whisper-quiet soft clicks for libraries and trains',
      'Dual mode: Bluetooth 5.3 + 2.4G USB receiver'
    ],
    specs: [
      { name: 'Thickness', value: '22 mm' },
      { name: 'Battery', value: 'Up to 12 months on single AA' },
      { name: 'Weight', value: '72 grams' }
    ],
    inTheBox: ['GlidePocket Mouse', 'USB Dongle', 'AA Battery', 'Manual'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE'],
    reviews: []
  },
  {
    id: 'ms-creator-pro',
    name: 'CraftMaster Infinite Scroll Productivity Mouse',
    category: 'Mice',
    categoryGroup: 'Computing & Peripherals',
    tagline: 'Electromagnetic MagSpeed Scroll Wheel with 1000 Lines/Sec Freewheel',
    price: 84.99,
    originalPrice: 104.99,
    rating: 4.9,
    reviewCount: 97,
    inStock: true,
    stockCount: 11,
    badge: 'Creator Choice',
    image: '/src/assets/images/desk_peripherals_shot_1790260640932.jpg',
    accentColor: '#D4A337',
    colors: [
      { name: 'Midnight Charcoal', hex: '#1F2937' },
      { name: 'Pale Grey', hex: '#E5E7EB' }
    ],
    description: 'Engineered for video editors, data scientists, and developers. The electromagnetic steel scroll wheel spins silently through 1,000 lines per second or switches instantly to ratchet precision.',
    highlights: [
      'Electromagnetic machined steel wheel switches between ratchet & free-spin',
      'Dedicated gesture button for rapid desktop spaces switching',
      'Tracks on any surface including clear glass coffee tables'
    ],
    specs: [
      { name: 'Sensor', value: 'Darkfield Laser / Optical 8000 DPI' },
      { name: 'Battery', value: '70 Days via USB-C' },
      { name: 'Connectivity', value: '3 Devices Multi-Pairing' }
    ],
    inTheBox: ['CraftMaster Mouse', 'USB Receiver', 'USB-C Cable', 'Carry Pouch'],
    warrantyYears: 2,
    certifications: ['UKCA', 'CE', 'RoHS'],
    reviews: []
  }
];

// Helper functions for catalog querying
export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts(limit = 6): Product[] {
  return PRODUCTS.filter((p) => p.rating >= 4.85).slice(0, limit);
}

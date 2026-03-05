export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  ingredients: string[];
  netWeightOptions: string[];
  price: number;
  images: string[];
  tags: string[];
  spiceLevel?: 'Mild' | 'Medium' | 'Hot';
  originRegion?: string;
  usageSuggestions: string[];
};

export const products: Product[] = [
  {
    slug: 'haldi-powder',
    name: 'Haldi Powder',
    shortDescription: 'Golden turmeric from single-origin farms in Andhra Pradesh.',
    longDescription:
      'Our Haldi Powder is slow-ground in small batches to preserve curcumin and aroma. It adds warm earthy depth and rich color to everyday Indian cooking.',
    ingredients: ['100% Organic Turmeric Root'],
    netWeightOptions: ['100g', '250g', '500g'],
    price: 149,
    images: ['https://images.unsplash.com/photo-1615486363978-0cf74f5f6ec9?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80'],
    tags: ['Single spice', 'Best seller'],
    spiceLevel: 'Mild',
    originRegion: 'Andhra Pradesh',
    usageSuggestions: ['Dal tadka', 'Golden milk', 'Sabzi base masala']
  },
  {
    slug: 'lal-mirch-powder',
    name: 'Lal Mirch Powder',
    shortDescription: 'Bold, vibrant chilli powder with balanced heat.',
    longDescription:
      'Stone-ground from sun-dried chillies, our Lal Mirch Powder gives dishes bright red color and steady warmth without bitterness.',
    ingredients: ['100% Organic Red Chillies'],
    netWeightOptions: ['100g', '250g'],
    price: 169,
    images: ['https://images.unsplash.com/photo-1615937657715-bc7b4b7962d1?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1599909533603-1cbf68f7705c?auto=format&fit=crop&w=1200&q=80'],
    tags: ['Single spice', 'Best seller'],
    spiceLevel: 'Hot',
    originRegion: 'Rajasthan',
    usageSuggestions: ['Curries', 'Marinades', 'Pickles']
  },
  {
    slug: 'dhania-powder',
    name: 'Dhania Powder',
    shortDescription: 'Fresh coriander seed powder with citrusy aroma.',
    longDescription:
      'Made from premium coriander seeds cleaned and cold-ground to lock in natural oils. A staple for rich North and South Indian gravies.',
    ingredients: ['100% Organic Coriander Seeds'],
    netWeightOptions: ['100g', '250g', '500g'],
    price: 139,
    images: ['https://images.unsplash.com/photo-1600271886742-f049cd5bba3f?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1603048719539-9ecb7f8bbf42?auto=format&fit=crop&w=1200&q=80'],
    tags: ['Single spice'],
    spiceLevel: 'Mild',
    originRegion: 'Madhya Pradesh',
    usageSuggestions: ['Sabzi masala', 'Chutney blends', 'Dry rubs']
  },
  {
    slug: 'jeera-powder',
    name: 'Jeera Powder',
    shortDescription: 'Roasted cumin powder with warm nutty notes.',
    longDescription:
      'Our Jeera Powder is gently roasted before grinding to boost aroma and digestibility. Perfect for raitas, curries, and chaat.',
    ingredients: ['100% Organic Cumin Seeds'],
    netWeightOptions: ['100g', '250g'],
    price: 159,
    images: ['https://images.unsplash.com/photo-1596040033081-4f77867b7b8d?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1633945274309-2fd95d8d86fb?auto=format&fit=crop&w=1200&q=80'],
    tags: ['Single spice'],
    spiceLevel: 'Mild',
    originRegion: 'Gujarat',
    usageSuggestions: ['Raita seasoning', 'Tadka', 'Chaat sprinkle']
  },
  {
    slug: 'garam-masala',
    name: 'Garam Masala',
    shortDescription: 'Traditional aromatic blend for rich gravies and dals.',
    longDescription:
      'A family-style recipe combining whole spices sourced from trusted growers. Freshly ground in micro-batches for superior fragrance and flavor.',
    ingredients: ['Coriander', 'Cumin', 'Black Pepper', 'Cardamom', 'Clove', 'Cinnamon'],
    netWeightOptions: ['100g', '200g'],
    price: 199,
    images: ['https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=1200&q=80'],
    tags: ['Blend', 'Best seller'],
    spiceLevel: 'Medium',
    originRegion: 'Kerala & Rajasthan',
    usageSuggestions: ['Paneer curries', 'Dal makhani', 'Vegetable stews']
  },
  {
    slug: 'chaat-masala',
    name: 'Chaat Masala',
    shortDescription: 'Tangy-spicy blend to elevate snacks and fruits.',
    longDescription:
      'A zesty blend with black salt, dried mango, and premium spices to bring instant street-style punch to chaat and salads.',
    ingredients: ['Dry Mango', 'Black Salt', 'Cumin', 'Coriander', 'Black Pepper'],
    netWeightOptions: ['100g', '200g'],
    price: 179,
    images: ['https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?auto=format&fit=crop&w=1200&q=80'],
    tags: ['Blend'],
    spiceLevel: 'Medium',
    usageSuggestions: ['Fruit chaat', 'Aloo chaat', 'Sprinkle on popcorn']
  },
  {
    slug: 'sambhar-masala',
    name: 'Sambhar Masala',
    shortDescription: 'South Indian blend with roasted lentils and spices.',
    longDescription:
      'Crafted in traditional style with coriander, lentils, curry leaves, and chillies for a comforting, authentic sambhar flavor.',
    ingredients: ['Coriander', 'Red Chillies', 'Fenugreek', 'Chana Dal', 'Curry Leaves'],
    netWeightOptions: ['100g', '250g'],
    price: 189,
    images: ['https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1200&q=80'],
    tags: ['Blend'],
    spiceLevel: 'Medium',
    originRegion: 'Tamil Nadu',
    usageSuggestions: ['Sambhar', 'Rasam variation', 'Vegetable kootu']
  },
  {
    slug: 'kashmiri-mirch',
    name: 'Kashmiri Mirch',
    shortDescription: 'Deep red chilli powder with low heat and bright color.',
    longDescription:
      'Selected Kashmiri chillies are shade-dried and finely milled for vivid natural color and mild flavour, ideal for tandoori and curries.',
    ingredients: ['100% Organic Kashmiri Chillies'],
    netWeightOptions: ['100g', '250g'],
    price: 209,
    images: ['https://images.unsplash.com/photo-1662116765994-1e4200c43589?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1599909533538-74db3920f2f4?auto=format&fit=crop&w=1200&q=80'],
    tags: ['Single spice', 'Best seller'],
    spiceLevel: 'Mild',
    originRegion: 'Kashmir',
    usageSuggestions: ['Butter masala', 'Tandoori marinade', 'Gravy coloring']
  }
];

export const productTags = ['All', 'Single spice', 'Blend', 'Best seller'];

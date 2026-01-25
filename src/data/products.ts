// Sample product data - will be replaced with actual data from spreadsheet
// This follows the structure: Product Name, Variant, Description, SKU, Price

export interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  price: number;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: string;
  variants: ProductVariant[];
  image: string;
  images: string[];
  featured: boolean;
  newArrival: boolean;
  researchApplications: string[];
  productDetails: {
    compound?: string;
    purity?: string;
    form?: string;
    quantity?: string;
    storage?: string;
    grade?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  productCount: number;
}

// Research categories
export const categories: Category[] = [
  { id: '1', name: 'Anti-aging Research', slug: 'anti-aging', description: 'Compounds for anti-aging research applications', productCount: 8 },
  { id: '2', name: 'Brain Research', slug: 'brain', description: 'Peptides for neurological research', productCount: 6 },
  { id: '3', name: 'Immune Research', slug: 'immune', description: 'Compounds for immunology studies', productCount: 5 },
  { id: '4', name: 'Inflammation Research', slug: 'inflammation', description: 'Peptides for inflammation pathway research', productCount: 4 },
  { id: '5', name: 'Muscle Research', slug: 'muscle', description: 'Compounds for muscle physiology research', productCount: 7 },
  { id: '6', name: 'Obesity Research', slug: 'obesity', description: 'Peptides for metabolic research', productCount: 9 },
  { id: '7', name: 'Recovery Research', slug: 'recovery', description: 'Compounds for tissue recovery studies', productCount: 8 },
  { id: '8', name: 'Sexual Research', slug: 'sexual', description: 'Peptides for reproductive research', productCount: 3 },
  { id: '9', name: 'Skin Hair Nail Research', slug: 'skin-hair-nail', description: 'Compounds for dermatological research', productCount: 4 },
  { id: '10', name: 'Vasodilator Research', slug: 'vasodilator', description: 'Peptides for cardiovascular research', productCount: 3 },
  { id: '11', name: 'Reconstitution Solutions', slug: 'reconstitution', description: 'Bacteriostatic water and solutions', productCount: 5 },
];

// Sample products with compliance-focused descriptions
export const products: Product[] = [
  {
    id: '1',
    name: '5-Amino-1MQ',
    slug: '5-amino-1mq',
    description: '5-Amino-1MQ (5-Amino-1-Methylquinolinium) is a small molecule methyltransferase inhibitor studied for its potential impact on cellular metabolism, energy regulation, and fat loss pathways. Research suggests it may inhibit NNMT (Nicotinamide N-Methyltransferase), an enzyme linked to metabolic rate and fat cell energy regulation. Studies have explored 5-Amino-1MQ for its potential role in increasing NAD+ levels, enhancing energy expenditure, and promoting fat metabolism in various models.',
    shortDescription: 'Small molecule NNMT inhibitor for metabolic research',
    category: 'Obesity Research',
    variants: [
      { id: '1-5mg', name: '5mg', sku: 'BM-5A1MQ-5', price: 63.00, inStock: true },
      { id: '1-10mg', name: '10mg', sku: 'BM-5A1MQ-10', price: 110.00, inStock: true },
    ],
    image: '/placeholder.svg',
    images: ['/placeholder.svg'],
    featured: true,
    newArrival: false,
    researchApplications: [
      'Studies on NNMT inhibition and metabolic regulation',
      'NAD+ production and energy pathway research',
      'Fat metabolism and weight loss models',
      'Investigations into cellular energy expenditure',
    ],
    productDetails: {
      compound: '5-Amino-1MQ (5-Amino-1-Methylquinolinium)',
      purity: '>98%',
      form: 'Lyophilized powder',
      quantity: '5mg per vial',
      storage: 'Store at -4°F (-20°C). After reconstitution, refrigerate at 36-46°F (2-8°C) and use within 30 days.',
      grade: 'For research use only. Not for human consumption or therapeutic use.',
    },
  },
  {
    id: '2',
    name: 'BPC-157',
    slug: 'bpc-157',
    description: 'BPC-157 (Body Protection Compound-157) is a synthetic peptide derived from a protective protein found in gastric juice. Research has explored its potential effects on tissue repair, wound healing, and various organ systems in preclinical models.',
    shortDescription: 'Synthetic gastric peptide for tissue research',
    category: 'Recovery Research',
    variants: [
      { id: '2-5mg', name: '5mg', sku: 'BM-BPC157-5', price: 42.00, inStock: true },
      { id: '2-10mg', name: '10mg', sku: 'BM-BPC157-10', price: 62.00, inStock: true },
    ],
    image: '/placeholder.svg',
    images: ['/placeholder.svg'],
    featured: true,
    newArrival: true,
    researchApplications: [
      'Tissue regeneration studies',
      'Wound healing research models',
      'Gastrointestinal research',
      'Musculoskeletal investigations',
    ],
    productDetails: {
      compound: 'BPC-157 (Body Protection Compound-157)',
      purity: '>98%',
      form: 'Lyophilized powder',
      quantity: '5mg per vial',
      storage: 'Store at -4°F (-20°C). After reconstitution, refrigerate at 36-46°F (2-8°C) and use within 30 days.',
      grade: 'For research use only. Not for human consumption or therapeutic use.',
    },
  },
  {
    id: '3',
    name: 'TB-500',
    slug: 'tb-500',
    description: 'TB-500 (Thymosin Beta-4) is a synthetic version of a naturally occurring peptide present in virtually all human and animal cells. Research has investigated its potential role in tissue repair, cell migration, and blood vessel formation.',
    shortDescription: 'Thymosin Beta-4 for tissue repair research',
    category: 'Recovery Research',
    variants: [
      { id: '3-2mg', name: '2mg', sku: 'BM-TB500-2', price: 32.00, inStock: true },
      { id: '3-5mg', name: '5mg', sku: 'BM-TB500-5', price: 58.00, inStock: true },
      { id: '3-10mg', name: '10mg', sku: 'BM-TB500-10', price: 100.00, inStock: true },
    ],
    image: '/placeholder.svg',
    images: ['/placeholder.svg'],
    featured: true,
    newArrival: false,
    researchApplications: [
      'Cell migration studies',
      'Angiogenesis research',
      'Tissue repair models',
      'Inflammatory response investigations',
    ],
    productDetails: {
      compound: 'TB-500 (Thymosin Beta-4)',
      purity: '>98%',
      form: 'Lyophilized powder',
      quantity: '2mg per vial',
      storage: 'Store at -4°F (-20°C). After reconstitution, refrigerate at 36-46°F (2-8°C) and use within 30 days.',
      grade: 'For research use only. Not for human consumption or therapeutic use.',
    },
  },
  {
    id: '4',
    name: 'CJC-1295 (with DAC)',
    slug: 'cjc-1295-dac',
    description: 'CJC-1295 with DAC (Drug Affinity Complex) is a synthetic analog of growth hormone-releasing hormone (GHRH). The DAC modification extends its half-life, making it useful for research into growth hormone secretion patterns.',
    shortDescription: 'GHRH analog with extended half-life',
    category: 'Recovery Research',
    variants: [
      { id: '4-2mg', name: '2mg', sku: 'BM-CJC1295DAC-2', price: 35.00, inStock: true },
      { id: '4-5mg', name: '5mg', sku: 'BM-CJC1295DAC-5', price: 57.00, inStock: true },
    ],
    image: '/placeholder.svg',
    images: ['/placeholder.svg'],
    featured: false,
    newArrival: true,
    researchApplications: [
      'Growth hormone secretion studies',
      'GHRH receptor research',
      'Metabolic pathway investigations',
    ],
    productDetails: {
      compound: 'CJC-1295 with DAC',
      purity: '>98%',
      form: 'Lyophilized powder',
      quantity: '2mg per vial',
      storage: 'Store at -4°F (-20°C). After reconstitution, refrigerate at 36-46°F (2-8°C) and use within 30 days.',
      grade: 'For research use only. Not for human consumption or therapeutic use.',
    },
  },
  {
    id: '6',
    name: 'Tirzepatide',
    slug: 'tirzepatide',
    description: 'Tirzepatide is a dual GIP and GLP-1 receptor agonist studied for its effects on glucose metabolism and body weight regulation in research models. It represents a novel approach to metabolic pathway research.',
    shortDescription: 'Dual GIP/GLP-1 agonist for metabolic studies',
    category: 'Obesity Research',
    variants: [
      { id: '6-5mg', name: '5mg', sku: 'BM-TIRZ-5', price: 99.00, inStock: true },
      { id: '6-10mg', name: '10mg', sku: 'BM-TIRZ-10', price: 179.00, inStock: true },
      { id: '6-15mg', name: '15mg', sku: 'BM-TIRZ-15', price: 249.00, inStock: true },
    ],
    image: '/placeholder.svg',
    images: ['/placeholder.svg'],
    featured: true,
    newArrival: true,
    researchApplications: [
      'Dual receptor pathway studies',
      'Glucose homeostasis research',
      'Weight regulation investigations',
      'Incretin hormone studies',
    ],
    productDetails: {
      compound: 'Tirzepatide',
      purity: '>98%',
      form: 'Lyophilized powder',
      quantity: '5mg per vial',
      storage: 'Store at -4°F (-20°C). After reconstitution, refrigerate at 36-46°F (2-8°C) and use within 30 days.',
      grade: 'For research use only. Not for human consumption or therapeutic use.',
    },
  },
  {
    id: '7',
    name: 'Epithalon',
    slug: 'epithalon',
    description: 'Epithalon (Epitalon) is a synthetic peptide studied for its potential effects on telomerase activity and cellular aging in research models. It is based on the epithalamin extract from the pineal gland.',
    shortDescription: 'Telomerase-related peptide for aging research',
    category: 'Anti-aging Research',
    variants: [
      { id: '7-10mg', name: '10mg', sku: 'BM-EPITH-10', price: 52.00, inStock: true },
      { id: '7-50mg', name: '50mg', sku: 'BM-EPITH-50', price: 180.00, inStock: true },
    ],
    image: '/placeholder.svg',
    images: ['/placeholder.svg'],
    featured: false,
    newArrival: false,
    researchApplications: [
      'Telomerase activity studies',
      'Cellular senescence research',
      'Pineal gland investigations',
      'Longevity pathway research',
    ],
    productDetails: {
      compound: 'Epithalon (Epitalon)',
      purity: '>98%',
      form: 'Lyophilized powder',
      quantity: '10mg per vial',
      storage: 'Store at -4°F (-20°C). After reconstitution, refrigerate at 36-46°F (2-8°C) and use within 30 days.',
      grade: 'For research use only. Not for human consumption or therapeutic use.',
    },
  },
  {
    id: '8',
    name: 'NAD+',
    slug: 'nad-plus',
    description: 'NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme found in all living cells. Research has explored its role in energy metabolism, DNA repair, and cellular signaling pathways.',
    shortDescription: 'Coenzyme for cellular metabolism research',
    category: 'Anti-aging Research',
    variants: [
      { id: '8-100mg', name: '100mg', sku: 'BM-NAD-100', price: 45.00, inStock: true },
      { id: '8-500mg', name: '500mg', sku: 'BM-NAD-500', price: 150.00, inStock: true },
    ],
    image: '/placeholder.svg',
    images: ['/placeholder.svg'],
    featured: false,
    newArrival: true,
    researchApplications: [
      'Energy metabolism studies',
      'DNA repair pathway research',
      'Sirtuin activation investigations',
      'Mitochondrial function research',
    ],
    productDetails: {
      compound: 'NAD+ (Nicotinamide Adenine Dinucleotide)',
      purity: '>98%',
      form: 'Lyophilized powder',
      quantity: '100mg per vial',
      storage: 'Store at -4°F (-20°C). After reconstitution, refrigerate at 36-46°F (2-8°C) and use within 30 days.',
      grade: 'For research use only. Not for human consumption or therapeutic use.',
    },
  },
  {
    id: '9',
    name: 'Bacteriostatic Water',
    slug: 'bacteriostatic-water',
    description: 'Bacteriostatic Water is sterile water containing 0.9% benzyl alcohol as a preservative. It is used in laboratory settings for reconstituting lyophilized research compounds.',
    shortDescription: 'Sterile water with benzyl alcohol preservative',
    category: 'Reconstitution Solutions',
    variants: [
      { id: '9-10ml', name: '10mL', sku: 'BM-BAC-10', price: 8.00, inStock: true },
      { id: '9-30ml', name: '30mL', sku: 'BM-BAC-30', price: 15.00, inStock: true },
    ],
    image: '/placeholder.svg',
    images: ['/placeholder.svg'],
    featured: false,
    newArrival: false,
    researchApplications: [
      'Peptide reconstitution',
      'Laboratory compound preparation',
    ],
    productDetails: {
      compound: 'Sterile Water with 0.9% Benzyl Alcohol',
      purity: 'USP Grade',
      form: 'Liquid',
      quantity: '10mL per vial',
      storage: 'Store at room temperature. Keep away from direct light.',
      grade: 'For research use only. Not for human consumption or therapeutic use.',
    },
  },
  {
    id: '10',
    name: 'DSIP',
    slug: 'dsip',
    description: 'DSIP (Delta Sleep-Inducing Peptide) is a neuropeptide studied for its potential effects on sleep patterns and stress responses in research models.',
    shortDescription: 'Neuropeptide for sleep research',
    category: 'Brain Research',
    variants: [
      { id: '10-5mg', name: '5mg', sku: 'BM-DSIP-5', price: 40.00, inStock: true },
    ],
    image: '/placeholder.svg',
    images: ['/placeholder.svg'],
    featured: false,
    newArrival: false,
    researchApplications: [
      'Sleep cycle research',
      'Stress response studies',
      'Neuropeptide pathway investigations',
    ],
    productDetails: {
      compound: 'DSIP (Delta Sleep-Inducing Peptide)',
      purity: '>98%',
      form: 'Lyophilized powder',
      quantity: '5mg per vial',
      storage: 'Store at -4°F (-20°C). After reconstitution, refrigerate at 36-46°F (2-8°C) and use within 30 days.',
      grade: 'For research use only. Not for human consumption or therapeutic use.',
    },
  },
  {
    id: '12',
    name: 'GHK-Cu',
    slug: 'ghk-cu',
    description: 'GHK-Cu (Copper Peptide) is a naturally occurring tripeptide with copper. Research has explored its potential effects on tissue remodeling and wound repair in various models.',
    shortDescription: 'Copper tripeptide for skin research',
    category: 'Skin Hair Nail Research',
    variants: [
      { id: '12-50mg', name: '50mg', sku: 'BM-GHKCU-50', price: 28.00, inStock: true },
      { id: '12-200mg', name: '200mg', sku: 'BM-GHKCU-200', price: 85.00, inStock: true },
    ],
    image: '/placeholder.svg',
    images: ['/placeholder.svg'],
    featured: false,
    newArrival: true,
    researchApplications: [
      'Tissue remodeling studies',
      'Wound healing research',
      'Collagen synthesis investigations',
      'Skin aging research',
    ],
    productDetails: {
      compound: 'GHK-Cu (Copper Peptide)',
      purity: '>98%',
      form: 'Lyophilized powder',
      quantity: '50mg per vial',
      storage: 'Store at -4°F (-20°C). After reconstitution, refrigerate at 36-46°F (2-8°C) and use within 30 days.',
      grade: 'For research use only. Not for human consumption or therapeutic use.',
    },
  },
];

// Helper functions
export const getProductsByCategory = (categorySlug: string): Product[] => {
  const category = categories.find(c => c.slug === categorySlug);
  if (!category) return [];
  return products.filter(p => p.category === category.name);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(p => p.newArrival);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery)
  );
};

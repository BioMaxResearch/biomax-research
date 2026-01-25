// Product images mapping
// Import all product images here for type-safe usage

// Batch 1
import bacWater10ml from '@/assets/products/bac-water-10ml.png';
import bacWater3ml from '@/assets/products/bac-water-3ml.png';
import thymosinAlpha1 from '@/assets/products/thymosin-alpha-1.png';
import tesamorelin from '@/assets/products/tesamorelin.png';
import tb500 from '@/assets/products/tb-500.png';
import ss31 from '@/assets/products/ss-31.png';
import semax from '@/assets/products/semax.png';
import selank from '@/assets/products/selank.png';
import retatrutide from '@/assets/products/retatrutide.png';
import nadPlus from '@/assets/products/nad-plus.png';

// Batch 2
import melanotan2 from '@/assets/products/melanotan-2.png';
import motsC from '@/assets/products/mots-c.png';
import kpv from '@/assets/products/kpv.png';
import klow from '@/assets/products/klow.png';
import kisspeptin from '@/assets/products/kisspeptin.png';
import ipamorelin from '@/assets/products/ipamorelin.png';
import glutathione from '@/assets/products/glutathione.png';
import glow from '@/assets/products/glow.png';
import ghkCu from '@/assets/products/ghk-cu.png';
import epithalon from '@/assets/products/epithalon.png';

// Batch 3
import dsip from '@/assets/products/dsip.png';
import cjc1295 from '@/assets/products/cjc-1295.png';
import cjc1295Ipamorelin from '@/assets/products/cjc-1295-ipamorelin.png';
import cagrilintide from '@/assets/products/cagrilintide.png';
import aod9604 from '@/assets/products/aod-9604.png';
import amino5_1mq from '@/assets/products/5-amino-1mq.png';
import bpc157 from '@/assets/products/bpc-157.png';

import peptideVialPlaceholder from '@/assets/peptide-vial-placeholder.png';

// Map product slugs to their images
export const productImages: Record<string, string> = {
  // Batch 1
  'bacteriostatic-water': bacWater10ml,
  'bac-water-10ml': bacWater10ml,
  'bac-water-3ml': bacWater3ml,
  'thymosin-alpha-1': thymosinAlpha1,
  'tesamorelin': tesamorelin,
  'tb-500': tb500,
  'ss-31': ss31,
  'semax': semax,
  'selank': selank,
  'retatrutide': retatrutide,
  'nad-plus': nadPlus,
  
  // Batch 2
  'melanotan-2': melanotan2,
  'melanotan-ii': melanotan2,
  'mots-c': motsC,
  'kpv': kpv,
  'klow': klow,
  'kisspeptin': kisspeptin,
  'kisspeptin-10': kisspeptin,
  'ipamorelin': ipamorelin,
  'glutathione': glutathione,
  'glow': glow,
  'ghk-cu': ghkCu,
  'epithalon': epithalon,
  
  // Batch 3
  'dsip': dsip,
  'cjc-1295': cjc1295,
  'cjc-1295-dac': cjc1295,
  'cjc-1295-ipamorelin': cjc1295Ipamorelin,
  'cjc-no-dac-ipamorelin': cjc1295Ipamorelin,
  'cagrilintide': cagrilintide,
  'aod-9604': aod9604,
  'aod9604': aod9604,
  '5-amino-1mq': amino5_1mq,
  '5amino-1mq': amino5_1mq,
  'bpc-157': bpc157,
};

// Get product image by slug, falling back to placeholder
export const getProductImage = (slug: string): string => {
  return productImages[slug] || peptideVialPlaceholder;
};

export { peptideVialPlaceholder };

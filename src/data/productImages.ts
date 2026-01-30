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
import sluPp332 from '@/assets/products/slu-pp-332.png';

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
import tirzepatide from '@/assets/products/tirzepatide.png';
import wolverine from '@/assets/products/wolverine.png';

import peptideVialPlaceholder from '@/assets/peptide-vial-placeholder.png';

// Map product slugs to their images
export const productImages: Record<string, string> = {
  // Bacteriostatic Water
  'bacteriostatic-water': bacWater10ml,
  'bac-water-10ml': bacWater10ml,
  'bac-water-3ml': bacWater3ml,
  
  // Peptides A-C
  '5-amino-1mq': amino5_1mq,
  'aod-9604': aod9604,
  'bpc-157': bpc157,
  'cagrilintide': cagrilintide,
  'cjc-1295': cjc1295,
  'cjc-1295-dac': cjc1295,
  'cjc-1295-ipamorelin': cjc1295Ipamorelin,
  
  // Peptides D-G
  'dsip': dsip,
  'epithalon': epithalon,
  'ghk-cu': ghkCu,
  'glow': glow,
  'glutathione': glutathione,
  
  // Peptides I-M
  'ipamorelin': ipamorelin,
  'kisspeptin': kisspeptin,
  'klow': klow,
  'kpv': kpv,
  'melanotan-2': melanotan2,
  'mots-c': motsC,
  
  // Peptides N-S
  'nad-plus': nadPlus,
  'retatrutide': retatrutide,
  'selank': selank,
  'semax': semax,
  'slu-pp-332': sluPp332,
  'ss-31': ss31,
  
  // Peptides T-Z
  'tb-500': tb500,
  'tesamorelin': tesamorelin,
  'thymosin-alpha-1': thymosinAlpha1,
  'tirzepatide': tirzepatide,
  'wolverine': wolverine,
};

// Get product image by slug, falling back to placeholder
export const getProductImage = (slug: string): string => {
  return productImages[slug] || peptideVialPlaceholder;
};

export { peptideVialPlaceholder };

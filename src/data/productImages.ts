// Product images mapping
// Import all product images here for type-safe usage

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
import peptideVialPlaceholder from '@/assets/peptide-vial-placeholder.png';

// Map product slugs to their images
export const productImages: Record<string, string> = {
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
};

// Get product image by slug, falling back to placeholder
export const getProductImage = (slug: string): string => {
  return productImages[slug] || peptideVialPlaceholder;
};

export { peptideVialPlaceholder };

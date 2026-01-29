import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';
import { ArrowRight } from 'lucide-react';
const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  return <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        
        <ProductGrid products={featuredProducts} columns={4} />
      </div>
    </section>;
};
export default FeaturedProducts;
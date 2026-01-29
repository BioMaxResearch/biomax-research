import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="section-header mb-4">
            BESTSELLERS<span className="section-header-accent">BESTSELLERS</span>
          </h2>
          <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link to="/shop">
              More Products
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
        <ProductGrid products={featuredProducts} columns={4} />
      </div>
    </section>
  );
};

export default FeaturedProducts;

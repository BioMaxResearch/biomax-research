import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getNewArrivals } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';
import { ArrowRight } from 'lucide-react';

const NewArrivals = () => {
  const newProducts = getNewArrivals().slice(0, 5);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-header">
            NEW <span className="section-header-accent">ARRIVALS</span>
          </h2>
          <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link to="/shop">
              More Products
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
        <ProductGrid products={newProducts} columns={5} />
      </div>
    </section>
  );
};

export default NewArrivals;

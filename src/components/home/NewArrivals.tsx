import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getNewArrivals } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';
import { ArrowRight } from 'lucide-react';
const NewArrivals = () => {
  const newProducts = getNewArrivals().slice(0, 5);
  return <section className="bg-muted/30 py-0">
      <div className="container mx-auto px-4">
        
        <ProductGrid products={newProducts} columns={5} />
      </div>
    </section>;
};
export default NewArrivals;
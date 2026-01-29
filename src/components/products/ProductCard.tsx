import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { getProductImage } from '@/data/productImages';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const primaryVariant = product.variants[0];
  const hasMultipleVariants = product.variants.length > 1;

  const priceRange = hasMultipleVariants
    ? `$${Math.min(...product.variants.map(v => v.price)).toFixed(2)} - $${Math.max(...product.variants.map(v => v.price)).toFixed(2)}`
    : `$${primaryVariant.price.toFixed(2)}`;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!hasMultipleVariants) {
      addItem(product, primaryVariant, 1);
    }
  };

  return (
    <Link to={`/product/${product.slug}`} className="block">
      <div className="product-card group">
        {/* Product Image */}
        <div className="relative aspect-square bg-muted overflow-hidden">
          <img
            src={getProductImage(product.slug)}
            alt={product.name}
            className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
          {product.newArrival && (
            <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-2">
          <h3 className="font-bold text-foreground group-hover:text-accent transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-1">
            {product.category}
          </p>
          <p className="font-bold text-accent">
            {priceRange}
          </p>

          {/* Action Button */}
          <Button
            onClick={handleAddToCart}
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-2"
          >
            {hasMultipleVariants ? (
              'Select Options'
            ) : (
              <>
                <ShoppingCart size={16} className="mr-2" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

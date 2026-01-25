import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { getProductBySlug, products } from '@/data/products';
import { getProductImage } from '@/data/productImages';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingCart, ChevronLeft, ChevronRight, AlertTriangle } from 'lucide-react';
import ProductGrid from '@/components/products/ProductGrid';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = getProductBySlug(slug || '');
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
            <Button asChild>
              <Link to="/shop">Back to Shop</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const selectedVariant = product.variants[selectedVariantIndex];
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 5);

  // Quantity discounts
  const quantityDiscounts = [
    { min: 1, max: 4, discount: 0, label: '1-4' },
    { min: 5, max: 9, discount: 5, label: '5-9' },
    { min: 10, max: 20, discount: 10, label: '10-20' },
    { min: 21, max: Infinity, discount: 20, label: '21+' },
  ];

  const getDiscountedPrice = (basePrice: number, qty: number) => {
    const tier = quantityDiscounts.find(t => qty >= t.min && qty <= t.max);
    if (tier && tier.discount > 0) {
      return basePrice * (1 - tier.discount / 100);
    }
    return basePrice;
  };

  const currentDiscount = quantityDiscounts.find(t => quantity >= t.min && quantity <= t.max);
  const displayPrice = getDiscountedPrice(selectedVariant.price, quantity);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CartDrawer />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <Link to="/" className="text-muted-foreground hover:text-accent">Home</Link>
                <span className="text-muted-foreground">/</span>
                <Link to="/shop" className="text-muted-foreground hover:text-accent">{product.category}</Link>
                <span className="text-muted-foreground">/</span>
                <span className="font-bold text-foreground">{product.name}</span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => navigate(-1)} className="p-2 hover:bg-muted rounded">
                  <ChevronLeft size={18} />
                </button>
                <button onClick={() => navigate(1)} className="p-2 hover:bg-muted rounded">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="bg-muted rounded-xl p-8 flex items-center justify-center">
                <img
                  src={getProductImage(product.slug)}
                  alt={product.name}
                  className="max-w-full max-h-96 object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
                
                <p className="text-2xl font-bold text-accent">
                  ${displayPrice.toFixed(2)}
                  {currentDiscount && currentDiscount.discount > 0 && (
                    <span className="ml-2 text-sm text-success">({currentDiscount.discount}% off)</span>
                  )}
                </p>

                {/* Quantity Discount Table */}
                <div className="border border-border rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-2 text-left font-medium">Quantity</th>
                        <th className="px-4 py-2 text-left font-medium">Price</th>
                        <th className="px-4 py-2 text-left font-medium">Discount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quantityDiscounts.map((tier, index) => (
                        <tr 
                          key={index} 
                          className={`border-t border-border ${
                            quantity >= tier.min && quantity <= tier.max ? 'bg-accent/10' : ''
                          }`}
                        >
                          <td className="px-4 py-2">{tier.label}</td>
                          <td className="px-4 py-2 text-accent font-medium">
                            ${getDiscountedPrice(selectedVariant.price, tier.min).toFixed(2)}
                          </td>
                          <td className="px-4 py-2">{tier.discount}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Variant Selection */}
                {product.variants.length > 1 && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Select Variant
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((variant, index) => (
                        <button
                          key={variant.id}
                          onClick={() => setSelectedVariantIndex(index)}
                          className={`px-4 py-2 border rounded-md transition-colors ${
                            index === selectedVariantIndex
                              ? 'border-accent bg-accent/10 text-accent'
                              : 'border-border hover:border-accent'
                          }`}
                        >
                          {variant.name} - ${variant.price.toFixed(2)}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* View Test Reports Button */}
                <Button variant="secondary" className="w-full sm:w-auto">
                  View Test Reports
                </Button>

                {/* Quantity & Add to Cart */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center border border-border rounded-md">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-muted transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-6 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-muted transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <Button
                    onClick={handleAddToCart}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1 sm:flex-none"
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    Add to Cart
                  </Button>

                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1 sm:flex-none"
                  >
                    Buy Now
                  </Button>
                </div>

                {/* SKU */}
                <p className="text-sm text-muted-foreground">
                  SKU: {selectedVariant.sku}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-6">DESCRIPTION</h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-lg font-bold uppercase text-foreground">
                  {product.name} — Research Use Only
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Product Details */}
                <div>
                  <h4 className="font-bold text-foreground mb-3">Product Details:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {product.productDetails.compound && (
                      <li>• Compound: {product.productDetails.compound}</li>
                    )}
                    {product.productDetails.purity && (
                      <li>• Purity: {product.productDetails.purity}</li>
                    )}
                    {product.productDetails.form && (
                      <li>• Form: {product.productDetails.form}</li>
                    )}
                    {product.productDetails.quantity && (
                      <li>• Quantity: {product.productDetails.quantity}</li>
                    )}
                    {product.productDetails.storage && (
                      <li>• Storage: {product.productDetails.storage}</li>
                    )}
                    {product.productDetails.grade && (
                      <li>• Grade: {product.productDetails.grade}</li>
                    )}
                  </ul>
                </div>

                {/* Research Applications */}
                <div>
                  <h4 className="font-bold text-foreground mb-3">Potential Research Applications:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {product.researchApplications.map((app, index) => (
                      <li key={index}>• {app}</li>
                    ))}
                  </ul>
                </div>

                {/* Compliance Warning */}
                <div className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <AlertTriangle className="text-destructive flex-shrink-0" size={24} />
                  <p className="text-destructive font-medium">
                    THIS IS NOT FOR HUMAN CONSUMPTION. SOLD FOR RESEARCH ONLY.
                  </p>
                </div>
              </div>

              {/* Product Image */}
              <div className="bg-muted rounded-xl p-8 flex items-center justify-center">
                <img
                  src={getProductImage(product.slug)}
                  alt={product.name}
                  className="max-w-full max-h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                FREQUENTLY BOUGHT TOGETHER
              </h2>
              <ProductGrid products={relatedProducts} columns={5} />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;

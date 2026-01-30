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
import SEO from '@/components/SEO';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

// Map of product slugs to their test report PDF paths
const testReportPaths: Record<string, string> = {
  'bpc-157': '/test-reports/bpc-157.pdf',
  'cagrilintide': '/test-reports/cagrilintide.pdf',
  'mots-c': '/test-reports/mots-c.pdf',
  'semax': '/test-reports/semax.pdf',
  'tb-500': '/test-reports/tb-500.pdf',
};
const ProductDetail = () => {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  const navigate = useNavigate();
  const {
    addItem
  } = useCart();
  const product = getProductBySlug(slug || '');
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  if (!product) {
    return <div className="min-h-screen flex flex-col">
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
      </div>;
  }
  const selectedVariant = product.variants[selectedVariantIndex];
  const defaultRelatedSlugs = ['retatrutide', 'cagrilintide', 'glow', 'melanotan-2'];
  const relatedSlugs = product.relatedProductSlugs || defaultRelatedSlugs;
  const relatedProducts = products.filter(p => relatedSlugs.includes(p.slug));
  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };
  return <div className="min-h-screen flex flex-col">
      <SEO title={product.name} description={`${product.name} research peptide. ${product.description.slice(0, 120)}... 99%+ purity, lab tested.`} url={`/product/${product.slug}`} type="product" />
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
                <img src={getProductImage(product.slug)} alt={product.name} className="max-w-full max-h-96 object-contain" />
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
                
                <p className="text-2xl font-bold text-accent">
                  ${selectedVariant.price.toFixed(2)}
                </p>

                {/* Variant Selection */}
                {product.variants.length > 1 && <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Select Variant
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((variant, index) => <button key={variant.id} onClick={() => setSelectedVariantIndex(index)} className={`px-4 py-2 border rounded-md transition-colors ${index === selectedVariantIndex ? 'border-accent bg-accent/10 text-accent' : 'border-border hover:border-accent'}`}>
                          {variant.name} - ${variant.price.toFixed(2)}
                        </button>)}
                    </div>
                  </div>}

                {/* View Test Reports Button */}
                {testReportPaths[product.slug] ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full sm:w-auto bg-black text-white hover:bg-black/90">
                        View Test Reports
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[95vw] max-w-4xl h-[85vh] p-3 sm:p-4 flex flex-col gap-3 [&>button]:top-2 [&>button]:right-2 [&>button]:z-10 [&>button]:bg-background/80 [&>button]:rounded-full [&>button]:p-1">
                      <DialogHeader>
                        <DialogTitle className="text-sm sm:text-base">{product.name} - Test Report</DialogTitle>
                      </DialogHeader>
                      <div className="flex-1 flex flex-col gap-3 min-h-0">
                        {/* On mobile, show a prominent button to open in new tab for better UX */}
                        <div className="sm:hidden flex flex-col items-center justify-center flex-1 gap-4 text-center p-4">
                          <p className="text-muted-foreground text-sm">
                            For the best viewing experience on mobile, open the PDF in a new tab.
                          </p>
                          <Button asChild size="lg" className="w-full">
                            <a href={testReportPaths[product.slug]} target="_blank" rel="noopener noreferrer">
                              Open Test Report
                            </a>
                          </Button>
                        </div>
                        {/* On desktop, show the embedded PDF */}
                        <object
                          data={testReportPaths[product.slug]}
                          type="application/pdf"
                          className="hidden sm:block w-full flex-1 min-h-0"
                          title={`${product.name} Test Report`}
                        >
                          <div className="flex flex-col items-center justify-center h-full gap-4 text-center p-8">
                            <p className="text-muted-foreground">Unable to display PDF in browser.</p>
                            <Button asChild>
                              <a href={testReportPaths[product.slug]} target="_blank" rel="noopener noreferrer">
                                Open PDF in New Tab
                              </a>
                            </Button>
                          </div>
                        </object>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Button className="w-full sm:w-auto bg-black text-white hover:bg-black/90" disabled>
                    Test Reports Coming Soon
                  </Button>
                )}

                {/* Quantity & Add to Cart */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center border border-border rounded-md">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-muted transition-colors" aria-label="Decrease quantity">
                      <Minus size={16} />
                    </button>
                    <span className="px-6 font-medium">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-muted transition-colors" aria-label="Increase quantity">
                      <Plus size={16} />
                    </button>
                  </div>

                  <Button onClick={handleAddToCart} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1 sm:flex-none">
                    <ShoppingCart size={18} className="mr-2" />
                    Add to Cart
                  </Button>

                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1 sm:flex-none">
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
                    {product.productDetails.compound && <li>• Compound: {product.productDetails.compound}</li>}
                    {product.productDetails.purity && <li>• Purity: {product.productDetails.purity}</li>}
                    {product.productDetails.form && <li>• Form: {product.productDetails.form}</li>}
                    {product.productDetails.quantity && <li>• Quantity: {product.productDetails.quantity}</li>}
                    {product.productDetails.storage && <li>• Storage: {product.productDetails.storage}</li>}
                    {product.productDetails.grade && <li>• Grade: {product.productDetails.grade}</li>}
                  </ul>
                </div>

                {/* Research Applications */}
                <div>
                  <h4 className="font-bold text-foreground mb-3">Research Applications:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {product.researchApplications.map((app, index) => <li key={index}>• {app}</li>)}
                  </ul>
                </div>

                {/* Compliance Warning */}
                <div className="flex items-start gap-3 p-4 border rounded-lg border-black bg-secondary">
                  <AlertTriangle className="text-destructive flex-shrink-0" size={24} />
                  <p className="font-medium text-black">
                    THIS IS NOT FOR HUMAN CONSUMPTION. SOLD FOR RESEARCH ONLY.
                  </p>
                </div>
              </div>

              {/* Product Image */}
              <div className="bg-muted rounded-xl p-8 flex items-center justify-center">
                <img src={getProductImage(product.slug)} alt={product.name} className="max-w-full max-h-80 object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                FREQUENTLY BOUGHT TOGETHER
              </h2>
              <ProductGrid products={relatedProducts} columns={5} />
            </div>
          </section>}
      </main>

      <Footer />
    </div>;
};
export default ProductDetail;
import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import ProductGrid from '@/components/products/ProductGrid';
import { products, categories, getProductsByCategory, searchProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import SEO from '@/components/SEO';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = useMemo(() => {
    let result = categoryParam ? getProductsByCategory(categoryParam) : products;
    
    if (searchQuery) {
      result = searchProducts(searchQuery).filter(p => 
        !categoryParam || p.category === categories.find(c => c.slug === categoryParam)?.name
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.variants[0].price - b.variants[0].price);
        break;
      case 'price-high':
        result = [...result].sort((a, b) => b.variants[0].price - a.variants[0].price);
        break;
      case 'name':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [categoryParam, searchQuery, sortBy]);

  const handleCategoryClick = (slug: string | null) => {
    if (slug) {
      setSearchParams({ category: slug });
    } else {
      setSearchParams({});
    }
  };

  const currentCategory = categories.find(c => c.slug === categoryParam);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={currentCategory ? `${currentCategory.name} Peptides` : 'Shop Research Peptides'}
        description={currentCategory 
          ? `Browse our selection of ${currentCategory.name} research peptides. 99%+ purity, third-party tested. Fast shipping.`
          : 'Shop premium research peptides with 99%+ purity. BPC-157, TB-500, Ipamorelin & more. Third-party lab tested.'
        }
        url={currentCategory ? `/shop?category=${currentCategory.slug}` : '/shop'}
      />
      <Header />
      <CartDrawer />

      <main className="flex-1 bg-muted/30">
        {/* Breadcrumb */}
        <div className="bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Home</span>
                <span className="text-muted-foreground">/</span>
                <span className="font-bold text-foreground">Shop</span>
                {currentCategory && (
                  <>
                    <span className="text-muted-foreground">/</span>
                    <span className="font-bold text-foreground">{currentCategory.name}</span>
                  </>
                )}
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground hidden sm:inline">
                  Showing {filteredProducts.length} products
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-border rounded-md px-3 py-2 bg-background"
                >
                  <option value="default">Default sorting</option>
                  <option value="name">Name A-Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <aside className="w-64 flex-shrink-0 hidden lg:block">
              <div className="bg-card rounded-lg p-6 shadow-brand-sm sticky top-4">
                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="font-bold text-foreground mb-4">Research Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => handleCategoryClick(null)}
                        className={`text-sm w-full text-left py-1 transition-colors ${
                          !categoryParam 
                            ? 'text-accent font-medium' 
                            : 'text-foreground hover:text-accent'
                        }`}
                      >
                        All Products
                      </button>
                    </li>
                    {categories.map((category) => (
                      <li key={category.id}>
                        <button
                          onClick={() => handleCategoryClick(category.slug)}
                          className={`text-sm w-full text-left py-1 transition-colors ${
                            categoryParam === category.slug 
                              ? 'text-accent font-medium' 
                              : 'text-foreground hover:text-accent'
                          }`}
                        >
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Products */}
            <div className="flex-1">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden mb-4 flex gap-2">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm">
                      <SlidersHorizontal size={16} className="mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-72">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      {/* Mobile Search */}
                      <div className="mb-6">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                          <Input
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                          />
                        </div>
                      </div>

                      {/* Mobile Categories */}
                      <div>
                        <h3 className="font-bold text-foreground mb-4">Research Categories</h3>
                        <ul className="space-y-2">
                          <li>
                            <button
                              onClick={() => handleCategoryClick(null)}
                              className={`text-sm w-full text-left py-2 transition-colors ${
                                !categoryParam 
                                  ? 'text-accent font-medium' 
                                  : 'text-foreground hover:text-accent'
                              }`}
                            >
                              All Products
                            </button>
                          </li>
                          {categories.map((category) => (
                            <li key={category.id}>
                              <button
                                onClick={() => handleCategoryClick(category.slug)}
                                className={`text-sm w-full text-left py-2 transition-colors ${
                                  categoryParam === category.slug 
                                    ? 'text-accent font-medium' 
                                    : 'text-foreground hover:text-accent'
                                }`}
                              >
                                {category.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
                {categoryParam && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCategoryClick(null)}
                    className="text-accent"
                  >
                    <X size={16} className="mr-1" />
                    {currentCategory?.name}
                  </Button>
                )}
              </div>

              <ProductGrid products={filteredProducts} columns={4} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;

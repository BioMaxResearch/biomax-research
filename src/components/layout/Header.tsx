import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { searchProducts, Product } from '@/data/products';
import logo from '@/assets/logo.jpeg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const {
    toggleCart,
    getItemCount
  } = useCart();
  const itemCount = getItemCount();

  // Handle search
  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchProducts(searchQuery).slice(0, 6);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close search on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };
    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchOpen]);

  const handleProductClick = (slug: string) => {
    navigate(`/product/${slug}`);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [{
    to: '/',
    label: 'Home'
  }, {
    to: '/shop',
    label: 'Shop'
  }, {
    to: '/about',
    label: 'About'
  }, {
    to: '/contact',
    label: 'Contact Us'
  }, {
    to: '/faq',
    label: 'FAQ'
  }, {
    to: '/coa',
    label: 'COA Results'
  }];

  return <header className="sticky top-0 z-50">
    {/* Compliance Banner */}
    <div className="compliance-banner">
      <span className="uppercase tracking-wider text-xs">
        Research Purposes Only. Not For Human Consumption.
      </span>
    </div>

    {/* Promo Banner */}
    <div className="promo-banner">
      <span>🧪 Each batch is double tested for quality control purity & potency!<strong></strong>
      </span>
    </div>

    {/* Main Navigation */}
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Left Section - Mobile Menu / Desktop Navigation */}
          <div className="flex items-center">
            <button className="lg:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map(link => <Link key={link.to} to={link.to} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                {link.label}
              </Link>)}
            </div>
          </div>

          {/* Center - Logo (always centered) */}
          <Link to="/" className="flex items-center justify-center">
            <img alt="BioMax Research" className="h-10 md:h-12 w-auto" src="/lovable-uploads/6a0bcaa9-6e9f-49d3-babd-318d60913e53.jpg" />
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center justify-end space-x-4">
            {/* Search */}
            <div className="relative" ref={searchContainerRef}>
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)} 
                className="p-2 text-foreground hover:text-accent transition-colors" 
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              {/* Search Dropdown */}
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-card border border-border rounded-lg shadow-lg z-50">
                  <form onSubmit={handleSearchSubmit} className="p-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                      <Input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9 pr-4"
                      />
                    </div>
                  </form>

                  {/* Search Results */}
                  {searchResults.length > 0 && (
                    <div className="border-t border-border max-h-80 overflow-y-auto">
                      {searchResults.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleProductClick(product.slug)}
                          className="w-full flex items-center gap-3 p-3 hover:bg-muted transition-colors text-left"
                        >
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-10 h-10 object-cover rounded bg-muted"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
                            <p className="text-xs text-muted-foreground">{product.category}</p>
                          </div>
                          <span className="text-sm font-medium text-accent">
                            ${product.variants[0]?.price.toFixed(2)}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* No results */}
                  {searchQuery.trim() && searchResults.length === 0 && (
                    <div className="p-4 text-center text-sm text-muted-foreground border-t border-border">
                      No products found for "{searchQuery}"
                    </div>
                  )}

                  {/* View all results link */}
                  {searchQuery.trim() && searchResults.length > 0 && (
                    <button
                      onClick={handleSearchSubmit}
                      className="w-full p-3 text-sm text-center text-accent hover:bg-muted transition-colors border-t border-border"
                    >
                      View all results for "{searchQuery}"
                    </button>
                  )}
                </div>
              )}
            </div>

            <button className="p-2 text-foreground hover:text-accent transition-colors" aria-label="Account">
              <User size={20} />
            </button>

            <button onClick={toggleCart} className="p-2 text-foreground hover:text-accent transition-colors relative" aria-label="Cart">
              <ShoppingCart size={20} />
              {itemCount > 0 && <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="lg:hidden bg-background border-t border-border animate-fade-in">
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navLinks.map(link => <Link key={link.to} to={link.to} className="block py-2 text-foreground hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            {link.label}
          </Link>)}
        </div>
      </div>}
    </nav>
  </header>;
};
export default Header;
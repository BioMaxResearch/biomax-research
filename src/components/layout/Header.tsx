import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import logo from '@/assets/logo.jpeg';
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    toggleCart,
    getItemCount
  } = useCart();
  const itemCount = getItemCount();
  const navLinks = [{
    to: '/',
    label: 'Home'
  }, {
    to: '/shop',
    label: 'Shop'
  }, {
    to: '/about',
    label: 'About Us'
  }, {
    to: '/contact',
    label: 'Contact Us'
  }, {
    to: '/faq',
    label: 'FAQ'
  }, {
    to: '/lab-results',
    label: 'Lab Results'
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
              <Link to="/admin" className="hidden lg:inline-flex">
                <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Admin Panel
                </Button>
              </Link>

              <button className="p-2 text-foreground hover:text-accent transition-colors" aria-label="Search">
                <Search size={20} />
              </button>

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
              <Link to="/admin" className="block py-2 text-accent font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                Admin Panel
              </Link>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;
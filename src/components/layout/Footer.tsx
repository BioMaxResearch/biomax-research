import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { categories } from '@/data/products';
import logo from '@/assets/logo.jpeg';

const Footer = () => {
  const popularCategories = categories.slice(0, 6);
  
  const usefulLinks = [
    { to: '/contact', label: 'Contact Us' },
    { to: '/about', label: 'About Us' },
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/disclaimer', label: 'Disclaimer' },
    { to: '/refund', label: 'Refund Policy' },
    { to: '/terms', label: 'Terms of Service' },
    { to: '/shipping', label: 'Shipping Policy' },
  ];

  return (
    <footer>
      {/* Main Footer */}
      <div className="footer-gradient text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <Link to="/" className="inline-block">
                <img src={logo} alt="BioMax Research" className="h-14 w-auto bg-white rounded-md p-1" />
              </Link>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-accent" />
                  <span>support@biomaxpeptides.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-accent" />
                  <span>1-800-555-PEPT</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent" />
                  <span>United States</span>
                </div>
              </div>
            </div>

            {/* Research Categories */}
            <div>
              <h4 className="font-bold text-lg mb-4">Research Categories</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                {popularCategories.map((category) => (
                  <li key={category.id}>
                    <Link 
                      to={`/shop?category=${category.slug}`} 
                      className="hover:text-accent transition-colors"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Useful Links</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                {usefulLinks.map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to} 
                      className="hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-lg mb-4">Subscribe for Research Updates</h4>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Get the latest research compounds and exclusive offers.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-2 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 rounded-md bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 py-6">
            <div className="text-xs text-primary-foreground/60 space-y-3">
              <p>
                <strong>Research Use Only:</strong> All products featured on this website are intended exclusively for research and development purposes. 
                They are not designed for any form of human consumption. The claims made on this website have not undergone evaluation by the 
                U.S. Food and Drug Administration.
              </p>
              <p>
                Neither the statements nor the products of this company aim to diagnose, treat, cure, or ward off any disease. 
                BioMax Peptides is a chemical supplier. BioMax Peptides is not a compounding pharmacy or chemical compounding 
                facility as defined under 503A of the Federal Food, Drug, and Cosmetic act. BioMax Peptides is not an outsourcing 
                facility as defined under 503B of the Federal Food, Drug, and Cosmetic act.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 py-4">
            <p className="text-center text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} BioMax Peptides. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

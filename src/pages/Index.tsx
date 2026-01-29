import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import HeroSection from '@/components/home/HeroSection';
import TrustpilotReviews from '@/components/home/TrustpilotReviews';
import TrustBadges from '@/components/home/TrustBadges';
import ResearchCTA from '@/components/home/ResearchCTA';
import LabTestedSection from '@/components/home/LabTestedSection';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO url="/" />
      <Header />
      <CartDrawer />
      
      <main className="flex-1">
        <HeroSection />
        <TrustpilotReviews />
        
        <div className="flex justify-center py-8">
          <Link to="/shop">
            <Button size="lg" className="text-lg px-8">
              Shop Now
            </Button>
          </Link>
        </div>
        
        <TrustBadges />
        <ResearchCTA />
        <LabTestedSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import HeroSection from '@/components/home/HeroSection';
import TrustpilotReviews from '@/components/home/TrustpilotReviews';
import TrustBadges from '@/components/home/TrustBadges';
import ResearchCTA from '@/components/home/ResearchCTA';
import LabTestedSection from '@/components/home/LabTestedSection';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO url="/" />
      <Header />
      <CartDrawer />
      
      <main className="flex-1">
        <HeroSection />
        <TrustpilotReviews />
        <TrustBadges />
        <ResearchCTA />
        <LabTestedSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;

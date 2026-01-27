import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroLabBg from '@/assets/hero-lab-bg.jpg';
const HeroSection = () => {
  return <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroLabBg})`
    }}>
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:py-32 py-[12px]">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Advancing Research,
            <br />
            <span style={{ color: 'hsl(var(--brand-green))' }}>Empowering Discovery</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80">
            Precision. Quality. Reliability.
            <br />
            Premium research-grade peptides for scientific advancement.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
              <Link to="/shop">
                Shop Now
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white bg-white/10 hover:bg-white hover:text-primary">
              <Link to="/lab-results">View Lab Results</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
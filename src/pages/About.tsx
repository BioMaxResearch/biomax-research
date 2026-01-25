import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { FlaskConical, Award, Shield, Users } from 'lucide-react';
import SEO from '@/components/SEO';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="About Us"
        description="Learn about BioMax Research Peptides. We provide 99%+ purity research compounds with third-party lab testing and exceptional customer service."
        url="/about"
      />
      <Header />
      <CartDrawer />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About BioMax Research Peptides
              </h1>
              <p className="text-lg text-muted-foreground">
                Your trusted partner in high-quality research peptides, dedicated to advancing 
                scientific discovery through premium compounds and exceptional service.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  At BioMax Research Peptides, we are committed to providing the scientific 
                  community with the highest quality research compounds available. Our mission 
                  is to support groundbreaking research by offering reliable, pure, and 
                  thoroughly tested peptides.
                </p>
                <p className="text-muted-foreground">
                  We understand the importance of consistency and quality in research, which 
                  is why every batch of our products undergoes rigorous third-party testing 
                  to ensure purity levels of 99% or higher.
                </p>
              </div>
              <div className="bg-card rounded-lg border border-border p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">99%+</div>
                    <p className="text-sm text-muted-foreground">Purity Guaranteed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">50+</div>
                    <p className="text-sm text-muted-foreground">Research Compounds</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">10K+</div>
                    <p className="text-sm text-muted-foreground">Orders Fulfilled</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                    <p className="text-sm text-muted-foreground">Customer Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-card rounded-lg border border-border p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FlaskConical className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Scientific Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  We maintain the highest standards in peptide synthesis and quality control.
                </p>
              </div>
              <div className="bg-card rounded-lg border border-border p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">
                  Every product is third-party tested with certificates of analysis available.
                </p>
              </div>
              <div className="bg-card rounded-lg border border-border p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  Transparent practices and honest communication in all we do.
                </p>
              </div>
              <div className="bg-card rounded-lg border border-border p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Customer Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Dedicated support team ready to assist with your research needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-muted/50 rounded-lg border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Research Use Only</h2>
              <p className="text-muted-foreground mb-4">
                All products sold by BioMax Research Peptides are intended strictly for 
                in-vitro research and laboratory use only. They are not intended for use 
                in food, drugs, cosmetics, or as household chemicals.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>NOT FOR HUMAN CONSUMPTION.</strong> By purchasing from BioMax Research 
                Peptides, you agree that these products will only be used for legitimate 
                research purposes.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

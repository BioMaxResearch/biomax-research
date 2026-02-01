import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { products } from '@/data/products';
import { FileText, Download, CheckCircle, FlaskConical, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import SEO from '@/components/SEO';

const LabResults = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Lab Results & Certificates"
        description="View third-party lab results and Certificates of Analysis for all BioMax research peptides. 99%+ purity verified by HPLC and mass spectrometry."
        url="/coa"
      />
      <Header />
      <CartDrawer />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Lab Results & Certificates
              </h1>
              <p className="text-lg text-muted-foreground">
                Transparency is our priority. View third-party lab results and Certificates 
                of Analysis for all our research peptides.
              </p>
            </div>
          </div>
        </section>

        {/* Testing Info Section */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FlaskConical className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Third-Party Tested</h3>
                <p className="text-sm text-muted-foreground">
                  Every batch is tested by independent, accredited laboratories
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">99%+ Purity</h3>
                <p className="text-sm text-muted-foreground">
                  All peptides verified to exceed 99% purity standards
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">HPLC & MS Verified</h3>
                <p className="text-sm text-muted-foreground">
                  High-performance liquid chromatography and mass spectrometry testing
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Results */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Search */}
            <div className="max-w-md mx-auto mb-12">
              <Input
                type="text"
                placeholder="Search for a peptide..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square bg-muted/30 p-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>99%+ Purity Verified</span>
                    </div>
                    <Button variant="outline" className="w-full" size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      View COA
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* Understanding COA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Understanding Our Lab Results
              </h2>
              
              <div className="bg-card rounded-lg border border-border p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">HPLC Purity Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    High-Performance Liquid Chromatography (HPLC) is used to separate and quantify 
                    compounds in a sample. Our COAs show the percentage of the target peptide vs. 
                    any impurities. We guarantee 99%+ purity on all products.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Mass Spectrometry (MS)</h3>
                  <p className="text-sm text-muted-foreground">
                    Mass spectrometry confirms the molecular identity of the peptide by measuring 
                    its mass-to-charge ratio. This ensures you receive exactly the compound advertised.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Batch Numbers</h3>
                  <p className="text-sm text-muted-foreground">
                    Each product includes a unique batch number that corresponds to a specific 
                    Certificate of Analysis. If you need a COA for a specific batch, please 
                    contact our support team with your batch number.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-muted/50 rounded-lg border border-border p-6 text-center">
              <FlaskConical className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Research Use Only</h3>
              <p className="text-sm text-muted-foreground">
                All products and their associated documentation are provided strictly for 
                research and laboratory use. NOT FOR HUMAN CONSUMPTION.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LabResults;

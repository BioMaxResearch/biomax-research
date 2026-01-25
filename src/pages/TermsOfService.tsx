import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import SEO from '@/components/SEO';
import { AlertTriangle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Terms of Service"
        description="BioMax Research Peptides terms of service. Read our terms and conditions for purchasing research peptides."
        url="/terms"
      />
      <Header />
      <CartDrawer />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: January 2026</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-lg border border-border p-8 space-y-8">
                
                {/* Important Notice */}
                <div className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <AlertTriangle className="text-destructive flex-shrink-0 mt-0.5" size={24} />
                  <div>
                    <p className="text-destructive font-semibold mb-2">IMPORTANT NOTICE</p>
                    <p className="text-destructive text-sm">
                      All products sold by BioMax Research Peptides are intended strictly for in-vitro 
                      research and laboratory use only. They are NOT FOR HUMAN CONSUMPTION. By purchasing 
                      from us, you agree that you are a qualified researcher or represent a research 
                      institution.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using the BioMax Research Peptides website and purchasing our products, 
                    you agree to be bound by these Terms of Service. If you disagree with any part of these 
                    terms, you may not access the website or purchase our products. These Terms of Service 
                    apply to all visitors, users, and customers of the website.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">2. Research Use Only</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All products sold by BioMax Research Peptides are intended exclusively for:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                    <li>In-vitro research and laboratory use only</li>
                    <li>Scientific research and development purposes</li>
                    <li>Educational and academic research</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Our products are NOT intended for use in food, drugs, medical devices, cosmetics, 
                    or as household chemicals. They are not for human or veterinary use. By purchasing 
                    our products, you certify that you will use them only for legitimate research purposes.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">3. Eligibility</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By placing an order with BioMax Research Peptides, you represent and warrant that:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                    <li>You are at least 18 years of age</li>
                    <li>You have the legal capacity to enter into binding contracts</li>
                    <li>You are purchasing for legitimate research purposes only</li>
                    <li>You will not resell products for human consumption</li>
                    <li>You understand and accept all risks associated with handling research chemicals</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">4. Products and Pricing</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We reserve the right to modify or discontinue any product at any time without notice. 
                    Prices for our products are subject to change without notice. We shall not be liable 
                    to you or to any third party for any modification, price change, suspension, or 
                    discontinuance of the product.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We have made every effort to display as accurately as possible the colors and images 
                    of our products. We cannot guarantee that your computer monitor's display of any color 
                    will be accurate.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">5. Orders and Payment</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We reserve the right to refuse any order you place with us. We may, in our sole 
                    discretion, limit or cancel quantities purchased per person, per household, or per 
                    order. These restrictions may include orders placed by or under the same customer 
                    account, the same credit card, and/or orders that use the same billing and/or 
                    shipping address.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to provide current, complete, and accurate purchase and account information 
                    for all purchases made at our store. You agree to promptly update your account and 
                    other information, including your email address and credit card numbers and expiration 
                    dates, so that we can complete your transactions and contact you as needed.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">6. Shipping and Delivery</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Shipping times are estimates only and are not guaranteed. We are not responsible for 
                    delays caused by shipping carriers, customs, or other factors beyond our control. 
                    Risk of loss and title for products purchased pass to you upon delivery to the carrier. 
                    It is your responsibility to ensure that the shipping address provided is correct.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">7. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Site and its entire contents, features, and functionality (including but not 
                    limited to all information, software, text, displays, images, video, and audio, and 
                    the design, selection, and arrangement thereof) are owned by BioMax Research Peptides, 
                    its licensors, or other providers of such material and are protected by United States 
                    and international copyright, trademark, patent, trade secret, and other intellectual 
                    property or proprietary rights laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">8. Disclaimer of Warranties</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    THE PRODUCTS AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES 
                    OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO 
                    APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT 
                    LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
                    AND NON-INFRINGEMENT.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    IN NO EVENT SHALL BIOMAX RESEARCH PEPTIDES, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, 
                    SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
                    OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, 
                    OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO 
                    ACCESS OR USE THE PRODUCTS OR SERVICES.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">10. Indemnification</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to defend, indemnify, and hold harmless BioMax Research Peptides and its 
                    licensees and licensors, and their employees, contractors, agents, officers, and 
                    directors, from and against any and all claims, damages, obligations, losses, 
                    liabilities, costs or debt, and expenses (including but not limited to attorney's 
                    fees), resulting from or arising out of your use and access of the products or a 
                    breach of these Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">11. Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms shall be governed and construed in accordance with the laws of the 
                    United States, without regard to its conflict of law provisions. Our failure to 
                    enforce any right or provision of these Terms will not be considered a waiver of 
                    those rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">12. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at 
                    any time. If a revision is material, we will try to provide at least 30 days' notice 
                    prior to any new terms taking effect. What constitutes a material change will be 
                    determined at our sole discretion.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">13. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Questions about the Terms of Service should be sent to us at:
                  </p>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="text-foreground font-medium">BioMax Research Peptides</p>
                    <p className="text-muted-foreground">Email: support@biomaxpeptides.com</p>
                    <p className="text-muted-foreground">Phone: 1-800-555-PEPT</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;

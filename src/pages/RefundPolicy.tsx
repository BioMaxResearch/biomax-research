import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { RotateCcw, Mail, Clock, Package, CheckCircle } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Refund Policy"
        description="BioMax Research Peptides refund and return policy. Learn about our 30-day satisfaction guarantee and how to request a refund."
        url="/refund"
      />
      <Header />
      <CartDrawer />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Refund Policy</h1>
              <p className="text-muted-foreground">Last updated: January 2026</p>
            </div>
          </div>
        </section>

        {/* Guarantee Badge */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 flex items-center gap-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <RotateCcw className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">30-Day Satisfaction Guarantee</h2>
                  <p className="text-muted-foreground">
                    We stand behind the quality of our products. If you're not completely satisfied, 
                    we'll make it right.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-lg border border-border p-8 space-y-8">
                
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At BioMax Research Peptides, we are committed to providing high-quality research 
                    compounds and exceptional customer service. We understand that sometimes things 
                    don't work out as expected, which is why we offer a straightforward refund policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Eligibility for Refunds</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You may be eligible for a refund in the following situations:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-foreground">Unopened Products</h3>
                        <p className="text-sm text-muted-foreground">
                          Full refund within 30 days of delivery for unopened products in original packaging.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-foreground">Damaged or Defective Products</h3>
                        <p className="text-sm text-muted-foreground">
                          Full refund or replacement for products that arrive damaged or are defective. 
                          Must be reported within 48 hours of delivery with photos.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-foreground">Incorrect Orders</h3>
                        <p className="text-sm text-muted-foreground">
                          Full refund or replacement if you receive the wrong product. Contact us 
                          immediately upon discovery.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-foreground">Quality Issues</h3>
                        <p className="text-sm text-muted-foreground">
                          If testing reveals that a product does not meet our purity standards, 
                          we will provide a full refund or replacement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Non-Refundable Items</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The following items are not eligible for refund:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Opened or used products (due to the nature of research materials)</li>
                    <li>Products returned after 30 days from delivery</li>
                    <li>Products not in original packaging</li>
                    <li>Shipping costs (unless we made an error)</li>
                    <li>Products damaged due to customer mishandling or improper storage</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">How to Request a Refund</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Contact Our Support Team</h3>
                        <p className="text-sm text-muted-foreground">
                          Email us at support@biomaxpeptides.com with your order number and reason for 
                          the refund request. Include photos if applicable.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Receive Return Authorization</h3>
                        <p className="text-sm text-muted-foreground">
                          We will review your request within 24-48 hours and provide a Return 
                          Merchandise Authorization (RMA) number if approved.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Ship the Product Back</h3>
                        <p className="text-sm text-muted-foreground">
                          Pack the product securely and ship it to the address we provide. Include 
                          the RMA number on the outside of the package.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Receive Your Refund</h3>
                        <p className="text-sm text-muted-foreground">
                          Once we receive and inspect the returned product, we will process your 
                          refund within 5-7 business days to your original payment method.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Refund Processing Time</h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg text-center">
                      <Clock className="w-6 h-6 text-accent mx-auto mb-2" />
                      <p className="font-medium text-foreground">24-48 Hours</p>
                      <p className="text-xs text-muted-foreground">Request Review</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg text-center">
                      <Package className="w-6 h-6 text-accent mx-auto mb-2" />
                      <p className="font-medium text-foreground">1-3 Days</p>
                      <p className="text-xs text-muted-foreground">Product Inspection</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg text-center">
                      <RotateCcw className="w-6 h-6 text-accent mx-auto mb-2" />
                      <p className="font-medium text-foreground">5-7 Days</p>
                      <p className="text-xs text-muted-foreground">Refund Processing</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Exchanges</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We are happy to exchange products for a different item or variant. Exchanges follow 
                    the same process as refunds. If the new item costs more, you will be charged the 
                    difference. If it costs less, we will refund the difference.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about our refund policy, please don't hesitate to reach out:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Contact Support
                    </Link>
                  </div>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="text-foreground font-medium">BioMax Research Peptides</p>
                    <p className="text-muted-foreground">Email: support@biomaxpeptides.com</p>
                    <p className="text-muted-foreground">Phone: 1-800-555-PEPT</p>
                    <p className="text-muted-foreground">Hours: Mon-Fri 9AM-6PM EST</p>
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

export default RefundPolicy;

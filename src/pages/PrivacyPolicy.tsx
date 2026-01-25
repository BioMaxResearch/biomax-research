import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import SEO from '@/components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Privacy Policy"
        description="BioMax Research Peptides privacy policy. Learn how we collect, use, and protect your personal information."
        url="/privacy"
      />
      <Header />
      <CartDrawer />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: January 2026</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
              <div className="bg-card rounded-lg border border-border p-8 space-y-8">
                
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    BioMax Research Peptides ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                    when you visit our website and make purchases from us. Please read this privacy policy 
                    carefully. If you do not agree with the terms of this privacy policy, please do not 
                    access the site.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may collect information about you in a variety of ways. The information we may 
                    collect on the Site includes:
                  </p>
                  <h3 className="text-lg font-medium text-foreground mb-2">Personal Data</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Personally identifiable information, such as your name, shipping address, email address, 
                    and telephone number, and demographic information, such as your age, gender, hometown, 
                    and interests, that you voluntarily give to us when you register with the Site or when 
                    you choose to participate in various activities related to the Site, such as online 
                    purchases and newsletters.
                  </p>
                  <h3 className="text-lg font-medium text-foreground mb-2">Derivative Data</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Information our servers automatically collect when you access the Site, such as your 
                    IP address, your browser type, your operating system, your access times, and the pages 
                    you have viewed directly before and after accessing the Site.
                  </p>
                  <h3 className="text-lg font-medium text-foreground mb-2">Financial Data</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Financial information, such as data related to your payment method (e.g., valid credit 
                    card number, card brand, expiration date) that we may collect when you purchase, order, 
                    return, exchange, or request information about our services from the Site. We store only 
                    very limited, if any, financial information that we collect. Otherwise, all financial 
                    information is stored by our payment processor, and you are encouraged to review their 
                    privacy policy and contact them directly for responses to your questions.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">3. Use of Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Having accurate information about you permits us to provide you with a smooth, efficient, 
                    and customized experience. Specifically, we may use information collected about you via 
                    the Site to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Create and manage your account</li>
                    <li>Process your orders and deliver products</li>
                    <li>Email you regarding your account or order</li>
                    <li>Send you newsletters and promotional materials (with your consent)</li>
                    <li>Improve our website and customer service</li>
                    <li>Monitor and analyze usage and trends to improve your experience</li>
                    <li>Prevent fraudulent transactions and protect against criminal activity</li>
                    <li>Respond to product and customer service requests</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">4. Disclosure of Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may share information we have collected about you in certain situations. Your 
                    information may be disclosed as follows:
                  </p>
                  <h3 className="text-lg font-medium text-foreground mb-2">By Law or to Protect Rights</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If we believe the release of information about you is necessary to respond to legal 
                    process, to investigate or remedy potential violations of our policies, or to protect 
                    the rights, property, and safety of others, we may share your information as permitted 
                    or required by any applicable law, rule, or regulation.
                  </p>
                  <h3 className="text-lg font-medium text-foreground mb-2">Third-Party Service Providers</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may share your information with third parties that perform services for us or on our 
                    behalf, including payment processing, data analysis, email delivery, hosting services, 
                    customer service, and marketing assistance.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">5. Security of Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use administrative, technical, and physical security measures to help protect your 
                    personal information. While we have taken reasonable steps to secure the personal 
                    information you provide to us, please be aware that despite our efforts, no security 
                    measures are perfect or impenetrable, and no method of data transmission can be 
                    guaranteed against any interception or other type of misuse. We use 256-bit SSL 
                    encryption for all transactions.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">6. Cookies and Tracking</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may use cookies, web beacons, tracking pixels, and other tracking technologies on 
                    the Site to help customize the Site and improve your experience. When you access the 
                    Site, your personal information is not collected through the use of tracking technology. 
                    Most browsers are set to accept cookies by default. You can remove or reject cookies, 
                    but be aware that such action could affect the availability and functionality of the Site.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">7. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Right to access the personal information we hold about you</li>
                    <li>Right to request correction of inaccurate personal information</li>
                    <li>Right to request deletion of your personal information</li>
                    <li>Right to opt-out of marketing communications</li>
                    <li>Right to data portability</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">8. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions or comments about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;

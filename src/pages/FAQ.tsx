import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
const faqCategories = [{
  title: 'General Questions',
  items: [{
    question: 'What are research peptides?',
    answer: 'Research peptides are short chains of amino acids used in scientific research to study various biological processes. They are synthesized in laboratories and used by researchers to investigate cellular functions, develop new treatments, and advance scientific understanding. All our peptides are sold strictly for research purposes only.'
  }, {
    question: 'Why do you sell the higher quantities as multiple vials of the smaller quantities?',
    answer: 'To be able to offer you the lowest price possible while ensuring you know the exact purity & potency of the vials you will be getting. It also allows you to have a freshly reconstituted vial and not have to worry about degradation or waste.'
  }, {
    question: 'What is the purity of your peptides?',
    answer: 'All of our peptides are synthesized to a minimum purity of 99%. Each batch undergoes rigorous third-party testing, and a Certificate of Analysis (COA) is available for every product. You can view these results on our Lab Results page.'
  }, {
    question: 'Do you provide Certificates of Analysis?',
    answer: 'Yes, we provide third-party Certificates of Analysis (COA) for all our peptides. These documents verify the purity, identity, and quality of each batch. COAs are available on our Lab Results page and can be requested for any specific product.'
  }]
}, {
  title: 'Ordering & Payment',
  items: [{
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for larger orders. All transactions are processed securely with 256-bit SSL encryption.'
  }, {
    question: 'Is my payment information secure?',
    answer: 'Yes, absolutely. We use industry-standard SSL encryption to protect all payment information. We do not store credit card details on our servers. All transactions are processed through secure, PCI-compliant payment processors.'
  }, {
    question: 'Can I modify or cancel my order?',
    answer: 'Orders can be modified or cancelled within 1 hour of placement. After this window, orders enter processing and cannot be changed. Please contact our support team immediately if you need to make changes.'
  }]
}, {
  title: 'Shipping & Delivery',
  items: [{
    question: 'Where do you ship to?',
    answer: 'We currently ship to all 50 US states. International shipping may be available for certain countries - please contact us to inquire about shipping to your location.'
  }, {
    question: 'How long does shipping take?',
    answer: 'Standard shipping typically takes 3-5 business days within the continental US. Expedited options are available at checkout. All orders include tracking information.'
  }, {
    question: 'How much is shipping?',
    answer: 'We charge a flat rate of $9.99 for 3-5 days or $14.99 for 2-day air.'
  }, {
    question: 'What if my order arrives damaged?',
    answer: 'If your order arrives damaged, please take photos of the packaging and products, then contact us within 48 hours of delivery. We will arrange a replacement or refund at no additional cost.'
  }]
}];
const FAQ = () => {
  return <div className="min-h-screen flex flex-col">
      <SEO title="Frequently Asked Questions" description="Find answers to common questions about BioMax research peptides, ordering, shipping, returns, and storage. Get the information you need." url="/faq" />
      <Header />
      <CartDrawer />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our research peptides, ordering, 
                shipping, and more.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => <div key={categoryIndex}>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {category.title}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-3">
                    {category.items.map((item, itemIndex) => <AccordionItem key={itemIndex} value={`${categoryIndex}-${itemIndex}`} className="bg-card border border-border rounded-lg px-6">
                        <AccordionTrigger className="text-left font-medium hover:no-underline">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>)}
                  </Accordion>
                </div>)}
            </div>

            {/* Contact CTA */}
            <div className="max-w-2xl mx-auto mt-16">
              <div className="bg-accent/10 rounded-lg border border-accent/20 p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Still have questions?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our support team is ready to help with any questions about our research peptides.
                </p>
                <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default FAQ;
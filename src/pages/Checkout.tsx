import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/context/CartContext';
import CheckoutProgress from '@/components/checkout/CheckoutProgress';
import ShippingForm from '@/components/checkout/ShippingForm';
import OrderSummary from '@/components/checkout/OrderSummary';
import logo from '@/assets/logo.jpeg';

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { state } = useCart();

  const handleSubmit = (data: any) => {
    // For now, just show success - payment integration would go here
    toast({
      title: 'Shipping Information Saved',
      description: 'Proceeding to payment...',
    });
    console.log('Shipping data:', data);
    // Navigate to payment step or confirmation
  };

  // Redirect if cart is empty
  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-card border-b border-border py-4">
          <div className="container mx-auto px-4 flex justify-center">
            <Link to="/">
              <img src={logo} alt="BioMax Research Peptides" className="h-12 object-contain" />
            </Link>
          </div>
        </header>

        {/* Empty Cart Message */}
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Add some products before checking out.</p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border py-4">
        <div className="container mx-auto px-4 flex justify-center">
          <Link to="/">
            <img src={logo} alt="BioMax Research Peptides" className="h-12 object-contain" />
          </Link>
        </div>
      </header>

      {/* Progress Stepper */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <CheckoutProgress currentStep={2} />
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Shipping Form - Left Side */}
          <div className="lg:col-span-3">
            <ShippingForm onSubmit={handleSubmit} />
          </div>

          {/* Order Summary - Right Side */}
          <div className="lg:col-span-2">
            <OrderSummary />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BioMax Research Peptides. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Products are sold for research and laboratory use only. NOT FOR HUMAN CONSUMPTION.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Checkout;

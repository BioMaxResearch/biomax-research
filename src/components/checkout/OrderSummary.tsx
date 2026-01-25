import { Shield, RotateCcw, FlaskConical } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const OrderSummary = () => {
  const { state, getSubtotal } = useCart();
  const subtotal = getSubtotal();
  const shipping = subtotal >= 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <div className="bg-card rounded-lg border border-border shadow-sm p-6 sticky top-4">
      {/* Header */}
      <h2 className="text-xl font-semibold text-foreground mb-4">Order Summary</h2>

      {/* Cart Items */}
      <div className="space-y-4 mb-6">
        {state.items.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-4">
            Your cart is empty
          </p>
        ) : (
          state.items.map((item) => (
            <div key={item.variant.id} className="flex gap-3">
              <div className="w-16 h-16 bg-muted rounded-md overflow-hidden flex-shrink-0">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-foreground truncate">
                  {item.product.name}
                </h3>
                <p className="text-xs text-muted-foreground">{item.variant.name}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-muted-foreground">
                    Qty: {item.quantity}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    ${(item.variant.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Purchase Type */}
      <div className="flex items-center justify-between py-2 border-t border-border">
        <span className="text-sm text-muted-foreground">Purchase Type</span>
        <span className="text-sm font-medium text-foreground">One Time</span>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-2 py-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Subtotal</span>
          <span className="text-sm text-foreground">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Shipping</span>
          <span className="text-sm text-foreground">
            {shipping === 0 ? (
              <span className="text-green-600 font-medium">FREE</span>
            ) : (
              `$${shipping.toFixed(2)}`
            )}
          </span>
        </div>
        {subtotal < 100 && subtotal > 0 && (
          <p className="text-xs text-muted-foreground">
            Add ${(100 - subtotal).toFixed(2)} more for free shipping
          </p>
        )}
      </div>

      {/* Total */}
      <div className="flex items-center justify-between py-4 border-t border-border">
        <span className="text-lg font-semibold text-foreground">Total</span>
        <span className="text-xl font-bold text-foreground">${total.toFixed(2)}</span>
      </div>

      {/* Guarantee Badge */}
      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-accent flex-shrink-0" />
          <div>
            <h4 className="text-sm font-semibold text-foreground">30-Day Satisfaction Guarantee</h4>
            <p className="text-xs text-muted-foreground">
              Not satisfied? Full refund within 30 days
            </p>
          </div>
        </div>
      </div>

      {/* Refund Policy */}
      <div className="flex items-start gap-2 mb-4">
        <RotateCcw className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
        <p className="text-xs text-muted-foreground">
          Easy returns and refunds. Contact our support team within 30 days of delivery for a full refund on unopened products.
        </p>
      </div>

      {/* Compliance Message */}
      <div className="bg-muted rounded-lg p-3 border border-border">
        <div className="flex items-start gap-2">
          <FlaskConical className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs font-medium text-foreground">Research Use Only</p>
            <p className="text-xs text-muted-foreground">
              NOT FOR HUMAN CONSUMPTION. These products are sold strictly for research and laboratory use only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

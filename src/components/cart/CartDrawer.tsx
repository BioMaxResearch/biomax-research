import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { state, closeCart, removeItem, updateQuantity, getSubtotal, clearCart } = useCart();

  if (!state.isOpen) return null;

  const subtotal = getSubtotal();

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foreground/50 z-50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-xl z-50 animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <ShoppingBag className="text-accent" size={20} />
            Your Cart ({state.items.length})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <ShoppingBag className="text-muted-foreground" size={48} />
              <p className="text-muted-foreground">Your cart is empty</p>
              <Button onClick={closeCart} variant="outline" asChild>
                <Link to="/shop">Browse Products</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div
                  key={item.variant.id}
                  className="flex gap-4 p-3 bg-muted/50 rounded-lg"
                >
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-muted rounded-md flex items-center justify-center flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.variant.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      SKU: {item.variant.sku}
                    </p>
                    <p className="font-bold text-accent mt-1">
                      ${item.variant.price.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.variant.id, item.quantity - 1)}
                        className="p-1 hover:bg-muted rounded transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.variant.id, item.quantity + 1)}
                        className="p-1 hover:bg-muted rounded transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => removeItem(item.variant.id)}
                        className="p-1 ml-2 text-destructive hover:bg-destructive/10 rounded transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Line Total */}
                  <div className="text-right">
                    <p className="font-bold text-foreground">
                      ${(item.variant.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-border p-4 space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-xl font-bold text-foreground">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            {/* Research Disclaimer */}
            <p className="text-xs text-destructive text-center">
              For research purposes only. Not for human consumption.
            </p>

            {/* Actions */}
            <div className="space-y-2">
              <Button
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                size="lg"
                asChild
              >
                <Link to="/checkout" onClick={closeCart}>
                  Proceed to Checkout
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;

import { Shield, Lock, CreditCard } from 'lucide-react';

const TrustBadges = () => {
  return (
    <div className="space-y-4">
      {/* Payment Methods */}
      <div className="flex items-center justify-center gap-3 py-3">
        <div className="flex items-center gap-1 px-3 py-1.5 bg-muted rounded text-xs font-medium text-muted-foreground">
          <CreditCard className="w-4 h-4" />
          Visa
        </div>
        <div className="flex items-center gap-1 px-3 py-1.5 bg-muted rounded text-xs font-medium text-muted-foreground">
          <CreditCard className="w-4 h-4" />
          Mastercard
        </div>
        <div className="flex items-center gap-1 px-3 py-1.5 bg-muted rounded text-xs font-medium text-muted-foreground">
          <CreditCard className="w-4 h-4" />
          Amex
        </div>
        <div className="flex items-center gap-1 px-3 py-1.5 bg-muted rounded text-xs font-medium text-muted-foreground">
          <CreditCard className="w-4 h-4" />
          PayPal
        </div>
      </div>

      {/* Security Badges */}
      <div className="flex items-center justify-center gap-4 py-2 border-t border-border">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Lock className="w-4 h-4 text-accent" />
          <span>SSL Secured</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Shield className="w-4 h-4 text-accent" />
          <span>256-bit Encryption</span>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;

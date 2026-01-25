import { Check } from 'lucide-react';

interface CheckoutProgressProps {
  currentStep: number;
}

const steps = [
  { number: 1, label: 'Select Package' },
  { number: 2, label: 'Complete Checkout' },
  { number: 3, label: 'Order Summary' },
];

const CheckoutProgress = ({ currentStep }: CheckoutProgressProps) => {
  return (
    <div className="flex items-center justify-center w-full py-4">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors ${
                step.number < currentStep
                  ? 'bg-accent border-accent text-accent-foreground'
                  : step.number === currentStep
                  ? 'bg-accent border-accent text-accent-foreground'
                  : 'bg-background border-muted-foreground/30 text-muted-foreground'
              }`}
            >
              {step.number < currentStep ? (
                <Check className="w-4 h-4" />
              ) : (
                <span className="text-sm font-medium">{step.number}</span>
              )}
            </div>
            <span
              className={`mt-2 text-xs font-medium hidden sm:block ${
                step.number <= currentStep ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-12 sm:w-24 h-0.5 mx-2 ${
                step.number < currentStep ? 'bg-accent' : 'bg-muted-foreground/30'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CheckoutProgress;

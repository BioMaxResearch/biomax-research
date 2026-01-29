import { Truck, FlaskConical, ShieldCheck } from 'lucide-react';

const trustBadges = [{
  icon: Truck,
  title: 'Fast & Reliable Shipping',
  description: 'Quick delivery with full tracking on all domestic and international research orders.'
}, {
  icon: FlaskConical,
  title: '3rd Party Lab Tested',
  description: 'Every batch undergoes rigorous third-party testing for purity, identity, and potency verification.'
}, {
  icon: ShieldCheck,
  title: 'Satisfaction Guarantee',
  description: 'We stand behind our products. Full refund if our research compounds don\'t meet your standards.'
}];

const TrustBadges = () => {
  return (
    <section className="bg-accent/10 py-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {trustBadges.map((badge, index) => (
            <div key={index} className="trust-badge">
              <badge.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="font-bold text-foreground mb-2">{badge.title}</h3>
              <p className="text-sm text-muted-foreground text-center">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
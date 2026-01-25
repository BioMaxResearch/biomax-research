import { Star } from 'lucide-react';

const TrustpilotReviews = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-header mb-8">
          TRUSTPILOT <span className="section-header-accent">REVIEWS</span>
        </h2>
        
        <div className="inline-flex items-center gap-4 bg-card shadow-brand-card rounded-lg px-8 py-6">
          <div className="text-left">
            <p className="text-sm text-muted-foreground mb-1">Rated</p>
            <p className="text-3xl font-bold text-foreground">4.9</p>
            <p className="text-sm text-muted-foreground">out of 5 stars</p>
          </div>
          <div className="border-l border-border pl-4">
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={24}
                  className={star <= 4 ? 'fill-success text-success' : 'fill-success/80 text-success/80'}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Based on <strong>1,247</strong> reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotReviews;

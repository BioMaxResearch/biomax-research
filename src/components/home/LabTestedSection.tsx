import { CheckCircle2 } from 'lucide-react';

const LabTestedSection = () => {
  const benefits = [
    'HPLC Purity Analysis',
    'Mass Spectrometry Verification',
    'Sterility Testing',
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="section-header">
              THIRD PARTY <span className="section-header-accent">LAB TESTED</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Third-Party Lab Testing Provides A Verified Source Of Information 
              That Benefits The Consumer Because It Is The Most Comprehensive 
              Method Used For Independent Analysis. The Consumer Can Read The 
              Certificate Of Analysis To Find Detailed Product Information.
            </p>
            
            <div className="space-y-3">
              <h3 className="font-bold text-foreground">Purpose Of Third-Party Testing</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent flex-shrink-0" size={20} />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image placeholder - lab testing visual */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-24 h-24 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-accent" size={48} />
                </div>
                <p className="font-bold text-foreground">Certificate of Analysis</p>
                <p className="text-sm text-muted-foreground">Available for every product</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabTestedSection;

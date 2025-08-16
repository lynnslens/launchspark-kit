import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "$1.5k–$2.5k",
    description: "Perfect for getting started with the essentials",
    features: [
      "Brand basics & messaging guide",
      "1-page professional site",
      "Essential asset pack",
      "Launch checklist"
    ],
    cta: "Book Starter Package",
    popular: false
  },
  {
    name: "Growth", 
    price: "$3k–$5k",
    description: "Comprehensive package for serious growth",
    features: [
      "Complete brand identity system",
      "Multi-page website build",
      "Expanded creative assets",
      "1 custom system setup",
      "Canva template library",
      "Launch & awareness plan"
    ],
    cta: "Book Growth Package",
    popular: true
  },
  {
    name: "Premium",
    price: "$7.5k+", 
    description: "Fast-track & complex builds with custom scope",
    features: [
      "Everything in Growth",
      "1-week fast-track option",
      "Custom integrations",
      "Advanced asset creation",
      "Priority support",
      "Ongoing consultation"
    ],
    cta: "Book Premium Package",
    popular: false
  }
];

const PackageLadder = () => {
  return (
    <section id="packages" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6">
            Choose Your Package
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Transparent pricing for every stage of your journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative border-2 hover:shadow-elevated transition-all duration-300 ${
                pkg.popular 
                  ? 'border-red shadow-red-glow bg-cream' 
                  : 'border-charcoal/10 bg-cream'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red text-cream px-4 py-2 rounded-full flex items-center gap-2 font-semibold">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-heading font-bold text-charcoal mb-2">
                  {pkg.name}
                </CardTitle>
                <div className="text-3xl font-heading font-extrabold text-red mb-3">
                  {pkg.price}
                </div>
                <CardDescription className="text-charcoal/70 text-base">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-red mt-0.5 flex-shrink-0" />
                      <span className="text-charcoal">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full font-semibold py-3 rounded-lg transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-red hover:bg-red/90 text-cream'
                      : 'bg-charcoal hover:bg-charcoal/90 text-cream'
                  }`}
                  onClick={() => window.open('#', '_blank')}
                >
                  {pkg.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageLadder;
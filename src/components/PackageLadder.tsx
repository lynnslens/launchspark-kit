import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "$1.5k–$2.5k",
    description: "Perfect for getting started",
    features: [
      "Brand identity essentials",
      "1-page professional site",
      "Basic asset pack",
      "2-week timeline",
    ],
    cta: "Book Starter",
    popular: false,
  },
  {
    name: "Growth",
    price: "$3k–$5k", 
    description: "Most popular choice",
    features: [
      "Complete brand identity",
      "Multi-page website",
      "Expanded asset library",
      "1 automated system",
      "3-week timeline",
    ],
    cta: "Book Growth",
    popular: true,
  },
  {
    name: "Premium",
    price: "$7.5k+",
    description: "Fast-track everything",
    features: [
      "Full brand transformation",
      "Advanced website features",
      "Complete asset suite",
      "Multiple systems setup",
      "Custom scope & timeline",
      "Priority support",
    ],
    cta: "Book Premium",
    popular: false,
  },
];

const PackageLadder = () => {
  return (
    <section id="packages" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-6">
            Package Ladder
          </h2>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto">
            Choose the perfect package for your brand launch needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative text-center transition-all duration-300 hover:scale-105 ${
                pkg.popular 
                  ? "border-red bg-card shadow-red-glow" 
                  : "border-border bg-card hover:shadow-elevated"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-accent text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-elevated">
                    <Star className="w-4 h-4" />
                    <span className="font-semibold">Most Popular</span>
                  </div>
                </div>
              )}
              
              <CardHeader className="pb-8 pt-12">
                <h3 className="text-2xl font-bold text-charcoal mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-red mb-2">{pkg.price}</div>
                <p className="text-muted-foreground">{pkg.description}</p>
              </CardHeader>
              
              <CardContent className="pb-8">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center gap-3">
                      <Check className="w-5 h-5 text-red flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={pkg.popular ? "hero" : "hero-outline"}
                  size="lg"
                  className="w-full"
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
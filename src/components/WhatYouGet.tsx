import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Globe, Package, Rocket } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Name, tagline, colors, fonts, messaging guide."
  },
  {
    icon: Globe,
    title: "Website Setup", 
    description: "Lovable.dev build, copy, placeholder visuals."
  },
  {
    icon: Package,
    title: "Creative Asset Pack",
    description: "Mockups, Canva templates, icons & imagery."
  },
  {
    icon: Rocket,
    title: "Launch-Ready Systems",
    description: "Repeatable checklists + awareness plan."
  }
];

const WhatYouGet = () => {
  return (
    <section id="what-you-get" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6">
            What You Get
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Everything you need to launch a professional brand that stands out and sells.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-charcoal/10 hover:shadow-elevated transition-all duration-300 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-4 group-hover:shadow-red-glow transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-cream" />
                </div>
                <CardTitle className="text-xl font-heading font-bold text-charcoal">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-charcoal/70 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
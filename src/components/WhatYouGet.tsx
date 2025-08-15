import { Card, CardContent } from "@/components/ui/card";
import { Palette, Globe, FileImage, CheckSquare } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Name/tagline, colors, fonts, messaging guide.",
  },
  {
    icon: Globe,
    title: "Website Setup",
    description: "Lovable.dev build, magnetic copy, on-brand placeholders.",
  },
  {
    icon: FileImage,
    title: "Creative Asset Pack",
    description: "Product mockups, Canva templates, icons & imagery.",
  },
  {
    icon: CheckSquare,
    title: "Launch-Ready Systems",
    description: "Repeatable checklists + simple awareness plan.",
  },
];

const WhatYouGet = () => {
  return (
    <section id="what-you-get" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            What You Get
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to launch your brand with confidence and style.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 bg-card border-border"
            >
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
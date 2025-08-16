import { Calendar, Zap, Package2 } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Kickoff Call",
    description: "Align goals & vibe.",
    number: 1
  },
  {
    icon: Zap,
    title: "Build Sprint", 
    description: "2–4 weeks focused creation.",
    number: 2
  },
  {
    icon: Package2,
    title: "Handoff",
    description: "Editable site, assets, training.",
    number: 3
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6">
            How It Works
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            A simple, proven process that gets you from idea to launch fast.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto shadow-red-glow">
                  <step.icon className="w-10 h-10 text-cream" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-charcoal rounded-full flex items-center justify-center">
                  <span className="text-cream font-bold text-sm">{step.number}</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">
                {step.title}
              </h3>
              
              <p className="text-lg text-charcoal/70 leading-relaxed">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-charcoal/20 transform -translate-x-10 z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
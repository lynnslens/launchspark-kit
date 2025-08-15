import { Phone, Zap, Handshake } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Kickoff Call",
    description: "Clarify goals & vibe.",
    number: "01",
  },
  {
    icon: Zap,
    title: "Build Sprint",
    description: "2–4 weeks of focused creation.",
    number: "02",
  },
  {
    icon: Handshake,
    title: "Handoff",
    description: "Editable site, assets, quick-start training.",
    number: "03",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-6">
            How It Works
          </h2>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto">
            Simple process, powerful results. Your brand journey in three steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="relative mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-accent rounded-full shadow-red-glow">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{step.number}</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-cream mb-4">
                {step.title}
              </h3>
              <p className="text-cream/80 text-lg leading-relaxed">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-red to-red/30 ml-4"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
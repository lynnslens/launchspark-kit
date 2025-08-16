import { Button } from "@/components/ui/button";
import { Mail, Instagram, Rocket } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative rocket icons */}
      <div className="absolute top-10 left-10 opacity-10">
        <Rocket className="w-16 h-16 text-cream" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Rocket className="w-20 h-20 text-cream" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Primary Typography Logo */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold">
            <span className="text-red">Launch</span>
            <span className="text-cream">-in-a-Box</span>
          </h1>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-cream mb-8">
          Ready to launch?
        </h2>
        
        <p className="text-xl text-cream/90 mb-12 leading-relaxed">
          Turn your vision into a professional brand that sells. Let's make it happen.
        </p>
        
        <Button
          className="bg-red hover:bg-red/90 text-cream font-semibold px-8 py-4 text-lg rounded-lg mb-12 animate-pulse-soft"
          size="xl"
          onClick={() => window.open('#', '_blank')}
        >
          Book & Pay Now
        </Button>
        
        <div className="border-t border-cream/20 pt-12">
          <p className="text-cream/80 mb-6">Questions? Get in touch:</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <a
              href="mailto:hello@launchinbox.com"
              className="flex items-center gap-3 text-cream/80 hover:text-cream transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>hello@launchinbox.com</span>
            </a>
            <a
              href="https://instagram.com/launchinbox"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-cream/80 hover:text-cream transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@launchinbox</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
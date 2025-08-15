import { Button } from "@/components/ui/button";
import { Mail, Instagram } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-8">
          Ready to launch?
        </h2>
        
        <p className="text-xl text-cream/90 mb-12 leading-relaxed">
          Turn your vision into a professional brand that sells. Let's make it happen.
        </p>
        
        <Button
          variant="hero"
          size="xl"
          className="mb-12 animate-pulse-soft"
          onClick={() => window.open('#', '_blank')}
        >
          Book & Pay Now
        </Button>
        
        <div className="border-t border-cream/20 pt-12">
          <p className="text-cream/80 mb-6">Questions? Get in touch:</p>
          <div className="flex justify-center items-center gap-8">
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
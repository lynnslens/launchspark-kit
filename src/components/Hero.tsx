import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-dark-workspace.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-hero opacity-95"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
                You bring the dream.{" "}
                <span className="text-red">I build the reality.</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-cream/90 mb-8 leading-relaxed">
                From idea to ready-to-sell brand in 2–4 weeks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => window.open('#', '_blank')}
                  className="animate-pulse-soft"
                >
                  Book & Pay Now
                </Button>
                
                <Button
                  variant="hero-outline"
                  size="xl"
                  onClick={() => scrollToSection("packages")}
                >
                  See Packages
                </Button>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block animate-float">
            <div className="relative">
              <img
                src={heroImage}
                alt="Creative workspace with branding materials"
                className="rounded-2xl shadow-elevated w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-red/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("what-you-get")}
            className="text-cream/70 hover:text-cream transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b771c7cb-d7c8-4723-a8a6-3542508c3420.png" 
              alt="Launch in a Box Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("packages")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Packages
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              FAQ
            </button>
          </div>

          <Button variant="hero" size="lg" onClick={() => window.open('#', '_blank')}>
            Book & Pay Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
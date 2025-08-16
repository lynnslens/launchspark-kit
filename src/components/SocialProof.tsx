import { Quote, Rocket } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Testimonial */}
          <div className="mb-16">
            <div className="relative max-w-4xl mx-auto">
              <Quote className="w-12 h-12 text-red/20 absolute -top-6 -left-6" />
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-charcoal leading-relaxed mb-8">
                "Clear, fast, and fun. Launched in two weeks."
              </blockquote>
              <cite className="text-lg text-charcoal/70 font-medium">
                — Sarah Chen, Creative Director
              </cite>
            </div>
          </div>
          
          {/* Results indicators with rocket accents */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-3 px-6 py-3 border-2 border-charcoal/20 rounded-lg hover:border-red hover:text-red transition-all duration-300">
              <Rocket className="w-5 h-5 text-red" />
              <span className="text-charcoal font-semibold text-lg">Fast Results</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 border-2 border-charcoal/20 rounded-lg hover:border-red hover:text-red transition-all duration-300">
              <Rocket className="w-5 h-5 text-red" />
              <span className="text-charcoal font-semibold text-lg">Professional Quality</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 border-2 border-charcoal/20 rounded-lg hover:border-red hover:text-red transition-all duration-300">
              <Rocket className="w-5 h-5 text-red" />
              <span className="text-charcoal font-semibold text-lg">Launch Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
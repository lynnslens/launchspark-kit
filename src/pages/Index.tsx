import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatYouGet from "@/components/WhatYouGet";
import HowItWorks from "@/components/HowItWorks";
import WhoItsFor from "@/components/WhoItsFor";
import PackageLadder from "@/components/PackageLadder";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhatYouGet />
      <HowItWorks />
      <WhoItsFor />
      <PackageLadder />
      <SocialProof />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Index;
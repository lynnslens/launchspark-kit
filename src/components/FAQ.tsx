import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How fast can we launch?",
    answer: "Most ship in 2–4 weeks. We also offer a 1-Week Fast-Track option for simple projects."
  },
  {
    question: "Do I keep everything?",
    answer: "Yes, you own the site & assets. Everything is transferable and you have full control."
  },
  {
    question: "What platforms do you use?",
    answer: "Lovable.dev for websites, Canva for templates, and various POD platforms for products."
  },
  {
    question: "Is there a rush option?",
    answer: "Ask about the 1-Week Fast-Track. Perfect for urgent launches with simplified scope."
  },
  {
    question: "What's included in the brand identity?",
    answer: "Name refinement, tagline, color palette, fonts, logo concepts, and complete messaging guide."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Initial handoff includes training. Ongoing support available as add-on service."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-charcoal/70">
            Everything you need to know about launching your brand.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-charcoal/20">
              <AccordionTrigger className="text-left font-heading font-semibold text-lg text-charcoal hover:text-red">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
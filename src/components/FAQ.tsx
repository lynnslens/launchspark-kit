import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How fast can we launch?",
    answer: "Most projects ship in 2–4 weeks. We can accommodate rush projects with our 1-Week Fast-Track option for an additional fee.",
  },
  {
    question: "Do I keep everything?",
    answer: "Yes. You own the site and assets completely. We provide everything in editable formats so you can update and expand as needed.",
  },
  {
    question: "What platforms do you use?",
    answer: "Lovable.dev for websites, Canva for templates, and professional POD tools as needed. All platforms are user-friendly and industry-standard.",
  },
  {
    question: "What if I need it ASAP?",
    answer: "Ask about the 1-Week Fast-Track. We can prioritize your project and deliver a complete brand package in just one week for time-sensitive launches.",
  },
  {
    question: "What's included in the training?",
    answer: "Quick-start training covers how to edit your site, use your assets, and implement your launch checklist. All delivered via screen recordings and written guides.",
  },
  {
    question: "Can I make changes during the process?",
    answer: "Absolutely! We include revision rounds in each package and encourage feedback throughout the build process to ensure you love the final result.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about the process.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 hover:shadow-soft transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-charcoal hover:text-red py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
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
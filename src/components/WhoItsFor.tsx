const audiences = [
  "Solopreneurs",
  "Coaches + Consultants", 
  "Small Businesses",
  "Artists + Musicians",
];

const WhoItsFor = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Who It's For
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Perfect for ambitious creators ready to turn their vision into a real brand.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {audiences.map((audience, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-accent text-white rounded-full text-lg font-medium shadow-soft hover:shadow-red-glow transition-all duration-300"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
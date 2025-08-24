const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Intelligence Redefined
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              QuantumNODE is a multi-domain intelligence and insight hub designed to transform raw signals into actionable objectives.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We bridge data, technology, and strategy to empower informed decisions across industries.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-card rounded-xl shadow-card border border-border/50 hover:shadow-neural transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-accent-foreground rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Signal Detection</h3>
              <p className="text-muted-foreground">Advanced pattern recognition across multiple data domains</p>
            </div>

            <div className="p-6 bg-card rounded-xl shadow-card border border-border/50 hover:shadow-neural transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-neural rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Objective Mapping</h3>
              <p className="text-muted-foreground">Transform insights into clear, actionable strategies</p>
            </div>

            <div className="p-6 bg-card rounded-xl shadow-card border border-border/50 hover:shadow-neural transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 border border-accent-foreground rounded-full relative">
                  <div className="absolute inset-1 bg-accent-foreground rounded-full"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Strategic Bridge</h3>
              <p className="text-muted-foreground">Connect data, technology, and decision-making</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
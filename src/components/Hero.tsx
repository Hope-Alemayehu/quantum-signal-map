import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center neural-pattern">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Logo */}
          <div className="mb-8 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-neural rounded-2xl flex items-center justify-center glow-accent">
              <div className="w-8 h-8 border-3 border-primary-foreground rounded-full relative">
                <div className="absolute inset-1 border-2 border-primary-foreground rounded-full"></div>
                <div className="absolute inset-2 bg-primary-foreground rounded-full"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent-muted rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 tracking-tight">
            Quantum<span className="text-accent">NODE</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium tracking-wide">
            See the signal, map the objective.
          </p>


          {/* CTA Button */}
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-accent hover:shadow-glow text-accent-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
          >
            Get Connected
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
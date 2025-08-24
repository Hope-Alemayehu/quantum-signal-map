import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-neural rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-primary-foreground rounded-full relative">
                <div className="absolute inset-1 border border-primary-foreground rounded-full"></div>
                <div className="absolute inset-2 bg-primary-foreground rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary tracking-tight">QuantumNODE</h1>
              <p className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
                See the signal, map the objective
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => scrollToSection('contact')}
          >
            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-primary"></div>
              <div className="w-full h-0.5 bg-primary"></div>
              <div className="w-full h-0.5 bg-primary"></div>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
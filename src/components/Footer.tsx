const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Company */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-primary-foreground rounded-full relative">
                <div className="absolute inset-1 border border-primary-foreground rounded-full"></div>
                <div className="absolute inset-2 bg-primary-foreground rounded-full"></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg">QuantumNODE</h3>
              <p className="text-xs text-primary-foreground/70 font-medium tracking-wider uppercase">
                Intelligence Redefined
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 text-sm">
              © 2025 QuantumNODE. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-xs mt-1">
              Transforming signals into objectives.
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="text-center">
            <p className="text-primary-foreground/50 text-xs">
              Built with precision. Designed for intelligence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
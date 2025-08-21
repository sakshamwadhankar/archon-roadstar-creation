import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/961150df-a464-4cd4-8b84-82c7b536e57f.png" 
              alt="Archon Roadsters Creation" 
              className="h-12 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#performance" className="text-foreground hover:text-primary transition-colors">
              Performance
            </a>
            <a href="#design" className="text-foreground hover:text-primary transition-colors">
              Design
            </a>
            <a href="#specs" className="text-foreground hover:text-primary transition-colors">
              Specifications
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="hero" size="lg">
              Configure Yours
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-black font-brand leading-tight tracking-wider uppercase">
                <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold text-left text-5xl">
                  Archon
                </span>
                <br />
                <span className="text-foreground text-5xl">
                  Roadstar
                </span>
                <br />
                <span className="text-accent text-5xl">
                  Creation
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">Where automotive excellence meets cutting-edge innovation. Experience the pinnacle of luxury performance engineering.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              
              <Button variant="hero" size="lg" className="text-lg px-8 py-6" onClick={() => window.open('https://youtube.com/@archonmotors', '_blank')}>
                Watch Story
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">847</div>
                <div>Horsepower</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">2.8s</div>
                <div>0-60 MPH</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">511</div>
                <div>Top Speed MPH</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <HeroCarousel />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default Hero;
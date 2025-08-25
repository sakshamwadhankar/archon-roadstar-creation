import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import TestDriveForm from "./TestDriveForm";
import CustomizeButton from "./CustomizeButton";
const Cars = () => {
  const [testDriveOpen, setTestDriveOpen] = useState(false);
  const [selectedCarForTestDrive, setSelectedCarForTestDrive] = useState<string>("");
  const carModels = [{
    id: 1,
    name: "ARC Phantom Elite",
    tagline: "The Ultimate Luxury Experience",
    price: "₹2,48,17,000",
    image: "/cars/10.jpg",
    specs: {
      engine: "6.0L V12 Twin-Turbo",
      power: "750 HP",
      torque: "900 Nm",
      acceleration: "0-100 km/h in 3.2s",
      topSpeed: "320 km/h",
      transmission: "8-Speed Automatic"
    },
    features: ["Carbon Fiber Body", "Premium Leather Interior", "Advanced Driver Assistance", "Custom Paint Options"]
  }, {
    id: 2,
    name: "ARC Thunder Sport",
    tagline: "Pure Performance Unleashed",
    price: "₹2,06,67,000",
    image: "/cars/11.jpg",
    specs: {
      engine: "5.2L V10 Naturally Aspirated",
      power: "650 HP",
      torque: "750 Nm",
      acceleration: "0-100 km/h in 3.5s",
      topSpeed: "305 km/h",
      transmission: "7-Speed Dual-Clutch"
    },
    features: ["Aerodynamic Package", "Track-Tuned Suspension", "Racing Seats", "Performance Exhaust"]
  }, {
    id: 3,
    name: "ARC Luxe Grand Tourer",
    tagline: "Elegance Meets Performance",
    price: "₹1,56,87,000",
    image: "/cars/12.jpg",
    specs: {
      engine: "4.0L V8 Twin-Turbo",
      power: "550 HP",
      torque: "700 Nm",
      acceleration: "0-100 km/h in 4.1s",
      topSpeed: "290 km/h",
      transmission: "8-Speed Automatic"
    },
    features: ["Massage Seats", "Premium Sound System", "Panoramic Roof", "Ambient Lighting"]
  }, {
    id: 4,
    name: "ARC Electric Vision",
    tagline: "The Future of Luxury",
    price: "₹1,65,17,000",
    image: "/cars/13.jpg",
    specs: {
      engine: "Dual Electric Motors",
      power: "680 HP",
      torque: "1200 Nm",
      acceleration: "0-100 km/h in 2.8s",
      topSpeed: "280 km/h",
      range: "450 km"
    },
    features: ["Fast Charging", "Autopilot", "Glass Roof", "Premium Interior"]
  }];
  return <section className="py-32 bg-gradient-dark relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-primary rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-accent rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bold font-display mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Models</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Discover the perfect fusion of luxury, performance, and innovation in our exclusive roadster collection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
          {carModels.map((car, index) => <Dialog key={car.id}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="relative overflow-hidden rounded-2xl bg-card/60 backdrop-blur-sm border border-border/30 hover:border-primary/60 transition-all duration-700 hover:shadow-golden hover:scale-[1.02] hover:-translate-y-2">
                    {/* Card glow effect */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-2xl"></div>
                    
                    <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                      <img 
                        src={car.image} 
                        alt={car.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                      
                      {/* Floating price tag */}
                      <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold transform translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                        {car.price}
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-xl lg:text-2xl font-bold font-display text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {car.name}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {car.tagline}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                          <span>Premium Collection</span>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-xs border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-glow transform hover:scale-105"
                        >
                          Explore
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl border-border/50 rounded-3xl">
                <DialogHeader className="text-center pb-6">
                  <DialogTitle className="text-3xl lg:text-4xl font-bold font-display bg-gradient-primary bg-clip-text text-transparent">
                    {car.name}
                  </DialogTitle>
                  <DialogDescription className="text-xl text-muted-foreground font-light">
                    {car.tagline}
                  </DialogDescription>
                  <div className="w-16 h-1 bg-gradient-primary mx-auto mt-4 rounded-full"></div>
                </DialogHeader>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                  <div className="space-y-6">
                    <div className="relative group">
                      <img 
                        src={car.image} 
                        alt={car.name} 
                        className="w-full h-80 object-cover rounded-2xl shadow-golden group-hover:shadow-glow transition-all duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="flex items-center justify-between bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl p-6">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Starting Price</p>
                        <span className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                          {car.price}
                        </span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="bg-primary/10 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
                        onClick={() => {
                          setSelectedCarForTestDrive(car.name);
                          setTestDriveOpen(true);
                        }}
                      >
                        Book Test Drive
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-6">
                      <h4 className="text-xl font-semibold font-display text-foreground mb-6 flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
                        Technical Specifications
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Object.entries(car.specs).map(([key, value]) => (
                          <div key={key} className="flex flex-col space-y-1 p-3 bg-card/50 rounded-lg hover:bg-card/70 transition-colors duration-300">
                            <span className="text-xs text-muted-foreground uppercase tracking-wide">
                              {key.replace(/([A-Z])/g, " $1")}
                            </span>
                            <span className="font-semibold text-foreground text-lg">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator className="bg-border/30" />

                    <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-6">
                      <h4 className="text-xl font-semibold font-display text-foreground mb-6 flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
                        Premium Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {car.features.map((feature, index) => (
                          <Badge 
                            key={index} 
                            variant="secondary" 
                            className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors duration-300 py-2 px-4 justify-center"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-6">
                      <p className="text-muted-foreground leading-relaxed text-center">
                        Experience the pinnacle of automotive excellence with <span className="text-primary font-semibold">{car.name}</span>. 
                        Every detail has been meticulously crafted to deliver an unparalleled driving experience that transcends mere transportation.
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>)}
        </div>

        {/* Customize Button */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: "800ms" }}>
          <CustomizeButton />
        </div>

        <TestDriveForm isOpen={testDriveOpen} onClose={() => setTestDriveOpen(false)} selectedCar={selectedCarForTestDrive} />
      </div>
    </section>;
};
export default Cars;
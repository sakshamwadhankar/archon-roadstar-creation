import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Cars = () => {
  const carModels = [
    {
      id: 1,
      name: "ARC Phantom Elite",
      tagline: "The Ultimate Luxury Experience",
      price: "$299,000",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&h=600&fit=crop",
      specs: {
        engine: "6.0L V12 Twin-Turbo",
        power: "750 HP",
        torque: "900 Nm",
        acceleration: "0-100 km/h in 3.2s",
        topSpeed: "320 km/h",
        transmission: "8-Speed Automatic"
      },
      features: ["Carbon Fiber Body", "Premium Leather Interior", "Advanced Driver Assistance", "Custom Paint Options"]
    },
    {
      id: 2,
      name: "ARC Thunder Sport",
      tagline: "Pure Performance Unleashed",
      price: "$249,000",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop",
      specs: {
        engine: "5.2L V10 Naturally Aspirated",
        power: "650 HP",
        torque: "750 Nm",
        acceleration: "0-100 km/h in 3.5s",
        topSpeed: "305 km/h",
        transmission: "7-Speed Dual-Clutch"
      },
      features: ["Aerodynamic Package", "Track-Tuned Suspension", "Racing Seats", "Performance Exhaust"]
    },
    {
      id: 3,
      name: "ARC Luxe Grand Tourer",
      tagline: "Elegance Meets Performance",
      price: "$189,000",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop",
      specs: {
        engine: "4.0L V8 Twin-Turbo",
        power: "550 HP",
        torque: "700 Nm",
        acceleration: "0-100 km/h in 4.1s",
        topSpeed: "290 km/h",
        transmission: "8-Speed Automatic"
      },
      features: ["Massage Seats", "Premium Sound System", "Panoramic Roof", "Ambient Lighting"]
    },
    {
      id: 4,
      name: "ARC Electric Vision",
      tagline: "The Future of Luxury",
      price: "$199,000",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop",
      specs: {
        engine: "Dual Electric Motors",
        power: "680 HP",
        torque: "1200 Nm",
        acceleration: "0-100 km/h in 2.8s",
        topSpeed: "280 km/h",
        range: "450 km"
      },
      features: ["Fast Charging", "Autopilot", "Glass Roof", "Premium Interior"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect blend of luxury, performance, and innovation in our exclusive car lineup
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {carModels.map((car) => (
            <Dialog key={car.id}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-golden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {car.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">{car.tagline}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{car.price}</span>
                        <Button variant="outline" size="sm" className="text-xs">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary">{car.name}</DialogTitle>
                  <DialogDescription className="text-lg">{car.tagline}</DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-4">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-64 object-cover rounded-lg shadow-golden"
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-primary">{car.price}</span>
                      <Button variant="premium" size="lg">
                        Configure & Order
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Specifications</h4>
                      <div className="space-y-2">
                        {Object.entries(car.specs).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center">
                            <span className="text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1')}:
                            </span>
                            <span className="font-medium text-foreground">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {car.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <p className="text-sm text-muted-foreground">
                        Experience the pinnacle of automotive excellence with {car.name}. 
                        Every detail has been crafted to deliver an unparalleled driving experience.
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cars;
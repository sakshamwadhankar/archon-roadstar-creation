import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Aerodynamic Excellence",
      description:
        "Advanced wind tunnel testing delivers unparalleled aerodynamic efficiency with a drag coefficient of just 0.28.",
      icon: "🏁",
    },
    {
      title: "Carbon Fiber Monocoque",
      description:
        "Ultra-lightweight carbon fiber construction provides exceptional strength while reducing weight by 40%.",
      icon: "⚡",
    },
    {
      title: "Hybrid Powertrain",
      description:
        "Cutting-edge hybrid technology combines performance with efficiency, delivering 847 horsepower sustainably.",
      icon: "🔋",
    },
    {
      title: "Active Suspension",
      description:
        "Advanced adaptive suspension system automatically adjusts to road conditions for optimal comfort and performance.",
      icon: "🎯",
    },
  ];

  return (
    <section id="performance" className="py-24">
      {/* 🔹 Top Part (Heading without video) */}
      <div className="container mx-auto px-6 text-center mb-12 animate-fade-in relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Engineering
          </span>
          <span className="text-foreground"> Excellence</span>
        </h2>
                <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
              
          </span>
          <span className="text-foreground">    </span>
        </h2>
      </div>

      {/* 🔹 Bottom Part (Paragraph + Cards with Video Background) */}
      <div className="relative py-16 overflow-hidden">
        {/* Background Video (sirf md breakpoint ke upar dikhana hai) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/fback.mp4" type="video/mp4" />
        </video>

        {/* Overlay for brightness */}
        <div className="hidden md:block absolute inset-0 bg-black/70" />

        {/* Content above video */}
        <div className="relative container mx-auto px-6 text-center text-white">
          {/* Paragraph with video background */}
          <p className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Every component of the ARC has been meticulously designed and
            engineered to deliver an uncompromising driving experience.
          </p>

          {/* Features Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 bg-card/70 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-premium animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold font-display mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

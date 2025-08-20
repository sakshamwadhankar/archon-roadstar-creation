const Specifications = () => {
  const specs = [
    { category: "Engine", items: [
      { label: "Type", value: "Twin-Turbo V8 + Electric Motor" },
      { label: "Power", value: "847 HP / 632 kW" },
      { label: "Torque", value: "1,050 lb-ft / 1,424 Nm" },
      { label: "Acceleration", value: "0-60 mph in 2.8s" },
    ]},
    { category: "Performance", items: [
      { label: "Top Speed", value: "211 mph / 340 km/h" },
      { label: "Quarter Mile", value: "10.4 seconds" },
      { label: "Range", value: "400 miles combined" },
      { label: "Charging", value: "10-80% in 18 minutes" },
    ]},
    { category: "Design", items: [
      { label: "Weight", value: "3,200 lbs / 1,451 kg" },
      { label: "Length", value: "185.4 in / 4,709 mm" },
      { label: "Width", value: "76.3 in / 1,938 mm" },
      { label: "Height", value: "48.9 in / 1,242 mm" },
    ]},
    { category: "Technology", items: [
      { label: "Infotainment", value: "15.6\" 4K OLED Display" },
      { label: "Audio", value: "Bespoke 1,400W System" },
      { label: "Connectivity", value: "5G + Wi-Fi 6E" },
      { label: "Autonomous", value: "Level 3 Capability" },
    ]},
  ];

  return (
    <section id="specs" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">
            <span className="text-foreground">Technical </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Specifications
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Precision engineering meets cutting-edge technology in every detail.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {specs.map((spec, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="space-y-6 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="text-2xl font-bold font-display text-primary border-b border-primary/30 pb-3">
                {spec.category}
              </h3>
              <div className="space-y-4">
                {spec.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="flex justify-between items-center py-3 border-b border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <span className="text-muted-foreground font-medium">
                      {item.label}
                    </span>
                    <span className="text-foreground font-semibold text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specifications;
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { 
  Zap, 
  Gauge, 
  Ruler, 
  Cpu, 
  ToggleLeft, 
  ToggleRight,
  Car,
  Timer,
  Scale,
  Smartphone
} from 'lucide-react';
import { specsData, type SpecsData } from '@/data/specsData';
import { useUnitToggle } from '@/hooks/useUnitToggle';
import { cn } from '@/lib/utils';

const SpecsByModel = () => {
  const [selectedModel, setSelectedModel] = useState(specsData[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const { unitSystem, toggleUnits, formatSpeed, formatTorque, formatWeight, formatLength, formatPower } = useUnitToggle();

  const currentModel = specsData.find(model => model.id === selectedModel) || specsData[0];

  // Intersection Observer for scroll-based reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('specs-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const specCategories = [
    {
      key: 'engine',
      title: 'Engine',
      icon: Car,
      items: [
        { 
          label: 'Type', 
          value: currentModel.specs.engine.type,
          icon: Car
        },
        { 
          label: 'Power', 
          value: formatPower(currentModel.specs.engine.powerHP, currentModel.specs.engine.powerKW),
          icon: Zap,
          animated: true
        },
        { 
          label: 'Torque', 
          value: formatTorque(currentModel.specs.engine.torqueLbFt, currentModel.specs.engine.torqueNm),
          icon: Gauge,
          animated: true
        },
        { 
          label: 'Acceleration', 
          value: `0-60 mph in ${currentModel.specs.engine.accel0to60s}s`,
          icon: Timer,
          badge: 'performance'
        },
      ],
    },
    {
      key: 'performance',
      title: 'Performance',
      icon: Timer,
      items: [
        { 
          label: 'Top Speed', 
          value: formatSpeed(currentModel.specs.performance.topSpeedMph, currentModel.specs.performance.topSpeedKmh),
          icon: Timer,
          badge: 'speed'
        },
        { 
          label: 'Quarter Mile', 
          value: `${currentModel.specs.performance.quarterMileS} seconds`,
          icon: Gauge
        },
        { 
          label: 'Range', 
          value: `${currentModel.specs.performance.rangeMiles} miles`,
          icon: Zap,
          animated: true
        },
        ...(currentModel.specs.performance.charging10to80Min > 0 ? [{
          label: 'Charging',
          value: `10-80% in ${currentModel.specs.performance.charging10to80Min} min`,
          icon: Zap,
          badge: 'electric'
        }] : [])
      ],
    },
    {
      key: 'design',
      title: 'Design',
      icon: Ruler,
      items: [
        { 
          label: 'Weight', 
          value: formatWeight(currentModel.specs.design.weightLbs, currentModel.specs.design.weightKg),
          icon: Scale
        },
        { 
          label: 'Length', 
          value: formatLength(currentModel.specs.design.lengthIn, currentModel.specs.design.lengthMm),
          icon: Ruler
        },
        { 
          label: 'Width', 
          value: formatLength(currentModel.specs.design.widthIn, currentModel.specs.design.widthMm),
          icon: Ruler
        },
        { 
          label: 'Height', 
          value: formatLength(currentModel.specs.design.heightIn, currentModel.specs.design.heightMm),
          icon: Ruler
        },
      ],
    },
    {
      key: 'technology',
      title: 'Technology',
      icon: Cpu,
      items: [
        { 
          label: 'Infotainment', 
          value: currentModel.specs.technology.infotainment,
          icon: Smartphone
        },
        { 
          label: 'Audio', 
          value: currentModel.specs.technology.audio,
          icon: Cpu
        },
        { 
          label: 'Connectivity', 
          value: currentModel.specs.technology.connectivity,
          icon: Cpu
        },
        { 
          label: 'Autonomous', 
          value: currentModel.specs.technology.autonomousLevel,
          icon: Cpu,
          badge: 'tech'
        },
      ],
    },
  ];

  return (
    <section 
      id="specs-section" 
      className="py-24 bg-background"
      aria-labelledby="specs-heading"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-1000",
          isVisible ? "animate-fade-in opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 id="specs-heading" className="text-4xl lg:text-5xl font-bold font-display mb-6">
            <span className="text-foreground">Technical </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Specifications
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Precision engineering meets cutting-edge technology in every detail.
          </p>
          
          {/* Unit Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-sm text-muted-foreground">Units:</span>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleUnits}
              className="bg-card/50 hover:bg-card/80 transition-all duration-300"
              aria-label={`Switch to ${unitSystem === 'imperial' ? 'metric' : 'imperial'} units`}
            >
              {unitSystem === 'imperial' ? (
                <>
                  <ToggleLeft className="w-4 h-4 mr-2" />
                  Imperial
                </>
              ) : (
                <>
                  <ToggleRight className="w-4 h-4 mr-2" />
                  Metric
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Model Selector */}
        <div className={cn(
          "mb-12 transition-all duration-1000 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Desktop Tabs */}
          <Tabs 
            value={selectedModel} 
            onValueChange={setSelectedModel}
            className="hidden md:block"
            role="tablist"
            aria-label="Select vehicle model"
          >
            <TabsList className="grid w-full grid-cols-4 bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-2">
              {specsData.map((model) => (
                <TabsTrigger
                  key={model.id}
                  value={model.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 rounded-lg font-medium"
                  role="tab"
                  aria-controls={`specs-panel-${model.id}`}
                >
                  <div className="text-center">
                    <div className="font-semibold">{model.name.split(' ')[1]}</div>
                    <div className="text-xs opacity-80">{model.name.split(' ')[2]}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto pb-4">
            <div className="flex gap-3 min-w-max px-4">
              {specsData.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={cn(
                    "flex-shrink-0 px-4 py-3 rounded-xl font-medium transition-all duration-300 min-w-[120px] text-center",
                    selectedModel === model.id
                      ? "bg-primary text-primary-foreground shadow-premium"
                      : "bg-card/50 text-muted-foreground hover:bg-card/80"
                  )}
                  aria-pressed={selectedModel === model.id}
                >
                  <div className="font-semibold text-sm">{model.name.split(' ')[1]}</div>
                  <div className="text-xs opacity-80">{model.name.split(' ')[2]}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Specifications Grid */}
        <div 
          className={cn(
            "grid lg:grid-cols-2 xl:grid-cols-4 gap-8 transition-all duration-1000 delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          role="tabpanel"
          id={`specs-panel-${selectedModel}`}
          aria-labelledby="specs-heading"
          aria-live="polite"
        >
          {specCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.key}
                className={cn(
                  "bg-card/40 backdrop-blur-sm border border-border/30 rounded-2xl p-6 hover:bg-card/60 transition-all duration-500 group",
                  "hover:shadow-premium hover:border-primary/30"
                )}
                style={{ 
                  animationDelay: `${categoryIndex * 150 + 600}ms`,
                  animation: isVisible ? 'fade-in 0.6s ease-out forwards' : 'none'
                }}
              >
                <div className="flex items-center mb-6 pb-3 border-b border-primary/20">
                  <IconComponent className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => {
                    const ItemIcon = item.icon;
                    return (
                      <div 
                        key={itemIndex}
                        className="flex items-center justify-between py-3 border-b border-border/20 hover:border-primary/30 transition-all duration-300 group/item"
                      >
                        <div className="flex items-center space-x-3">
                          <ItemIcon className="w-4 h-4 text-muted-foreground group-hover/item:text-primary transition-colors duration-300" />
                          <span className="text-muted-foreground font-medium group-hover/item:text-foreground transition-colors duration-300">
                            {item.label}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span 
                            className={cn(
                              "text-foreground font-semibold text-right transition-all duration-300",
                              item.animated && "hover:text-primary"
                            )}
                          >
                            {item.value}
                          </span>
                          {item.badge && (
                            <Badge 
                              variant="secondary" 
                              className={cn(
                                "text-xs px-2 py-1 transition-all duration-300",
                                item.badge === 'performance' && "bg-primary/10 text-primary border-primary/30",
                                item.badge === 'speed' && "bg-accent/10 text-accent border-accent/30",
                                item.badge === 'electric' && "bg-green-500/10 text-green-400 border-green-500/30",
                                item.badge === 'tech' && "bg-blue-500/10 text-blue-400 border-blue-500/30"
                              )}
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Model Hero Tagline */}
        <div className={cn(
          "text-center mt-12 transition-all duration-1000 delay-800",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-lg text-muted-foreground italic">
            <span className="text-primary font-semibold">{currentModel.name}</span>
            {" • "}
            {currentModel.heroTagline}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecsByModel;
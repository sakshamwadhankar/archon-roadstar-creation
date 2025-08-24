const InnovationSection = () => {
  return (
    <section className="py-32 bg-gradient-dark relative overflow-hidden">
      {/* Background pattern for visual interest */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-accent rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Large inspiring paragraph box */}
          <div className="bg-card/40 backdrop-blur-md border border-border/30 rounded-2xl p-12 lg:p-16 shadow-golden hover:shadow-glow transition-all duration-700 hover:scale-[1.02] animate-fade-in">
            <h2 className="text-2xl lg:text-3xl font-bold font-display mb-8 bg-gradient-primary bg-clip-text text-transparent">
              ARCHON ROADSTER CREATION
            </h2>
            
            <div className="space-y-6 text-lg lg:text-xl text-muted-foreground leading-relaxed font-light">
              <p className="hover:text-foreground transition-colors duration-500">
                <span className="text-primary font-medium">Innovation</span> drives every curve, every line, every detail of our meticulously crafted roadsters.
              </p>
              <p className="hover:text-foreground transition-colors duration-500">
                <span className="text-primary font-medium">Performance</span> is not just measured in speed, but in the seamless harmony between power and precision.
              </p>
              <p className="hover:text-foreground transition-colors duration-500">
                <span className="text-primary font-medium">Design</span> transcends aesthetics to create an emotional connection between driver and machine.
              </p>
            </div>
            
            <div className="mt-12 h-1 w-32 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
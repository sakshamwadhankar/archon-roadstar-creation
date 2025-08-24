import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InnovationSection from "@/components/InnovationSection";
import Features from "@/components/Features";
import Cars from "@/components/Cars";
import Specifications from "@/components/Specifications";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <InnovationSection />
      <Features />
      <Cars />
      <Specifications />
      <Footer />
    </div>
  );
};

export default Index;

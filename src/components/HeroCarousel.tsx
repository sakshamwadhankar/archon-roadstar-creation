import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
const carImages = [
  { url: "C:/public/cars/1.jpg", alt: "Car 1" },
  { url: "C:/public/cars/2.jpg", alt: "Car 2" },
  { url: "C:/public/cars/3.jpg", alt: "Car 3" },
  { url: "C:/public/cars/4.jpg", alt: "Car 4" },
  { url: "C:/public/cars/5.jpg", alt: "Car 5" },
  { url: "C:/public/cars/6.jpg", alt: "Car 6" },
  { url: "C:/public/cars/7.jpg", alt: "Car 7" },
  { url: "C:/public/cars/8.jpg", alt: "Car 8" },
  { url: "C:/public/cars/9.jpg", alt: "Car 9" }
];

  const nextSlide = () => {
    setCurrentIndex(prevIndex => prevIndex === carImages.length - 1 ? 0 : prevIndex + 1);
  };
  const prevSlide = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? carImages.length - 1 : prevIndex - 1);
  };
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentIndex]);
  return <div className="relative group" onMouseEnter={() => setIsPlaying(false)} onMouseLeave={() => setIsPlaying(true)}>
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-lg shadow-golden">
        <div className="flex transition-transform duration-700 ease-out" style={{
        transform: `translateX(-${currentIndex * 100}%)`
      }}>
          {carImages.map((image, index) => <div key={index} className="min-w-full relative">
              <img src={image.url} alt={image.alt} className="w-full h-auto object-cover aspect-[4/3]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent px-[2px] mx-0" />
            </div>)}
        </div>

        {/* Navigation arrows */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <Button variant="ghost" size="icon" onClick={prevSlide} className="ml-4 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-primary border border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-300 h-12 w-12">
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center">
          <Button variant="ghost" size="icon" onClick={nextSlide} className="mr-4 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-primary border border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-300 h-12 w-12">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carImages.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary shadow-glow" : "bg-background/50 hover:bg-background/70"}`} aria-label={`Go to slide ${index + 1}`} />)}
        </div>

        {/* Play/pause indicator */}
        <div className="absolute top-4 right-4">
          <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isPlaying ? "bg-primary animate-pulse" : "bg-muted-foreground"}`} />
        </div>
      </div>

      {/* Image counter */}
      <div className="absolute top-4 left-4 bg-background/20 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/30">
        <span className="text-sm text-primary font-medium">
          {currentIndex + 1} / {carImages.length}
        </span>
      </div>
    </div>;
};
export default HeroCarousel;
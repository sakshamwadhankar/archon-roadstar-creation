import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // 👇 Local images from /public/cars/
  const carImages = [
    { url: "/cars/1.jpg", alt: "Car 1" },
    { url: "/cars/2.jpg", alt: "Car 2" },
    { url: "/cars/3.jpg", alt: "Car 3" },
    { url: "/cars/4.jpg", alt: "Car 4" },
    { url: "/cars/5.jpg", alt: "Car 5" },
    { url: "/cars/6.jpg", alt: "Car 6" },
    { url: "/cars/7.jpg", alt: "Car 7" },
    { url: "/cars/8.jpg", alt: "Car 8" },
    { url: "/cars/9.jpg", alt: "Car 9" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carImages.length - 1 : prevIndex - 1
    );
  };
  const goToSlide = (index) => setCurrentIndex(index);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentIndex]);

  return (
    <section className="flex items-center justify-between px-12 py-16">
      {/* Left Side (Text + Stats) */}
      <div className="w-1/2 pr-8">
        <h1 className="text-5xl font-bold text-yellow-500 leading-tight">
          ARCHON ROADSTAR CREATION
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Where automotive excellence meets cutting-edge innovation. Experience
          the pinnacle of luxury performance engineering.
        </p>

        <button className="mt-8 px-6 py-3 bg-yellow-500 text-black rounded-lg shadow-lg hover:bg-yellow-400">
          Watch Story
        </button>

        {/* Stats */}
        <div className="mt-8 flex space-x-12 text-gray-200">
          <div>
            <p className="text-3xl font-bold">847</p>
            <p className="text-sm">Horsepower</p>
          </div>
          <div>
            <p className="text-3xl font-bold">2.8s</p>
            <p className="text-sm">0-60 MPH</p>
          </div>
          <div>
            <p className="text-3xl font-bold">511</p>
            <p className="text-sm">Top Speed MPH</p>
          </div>
        </div>
      </div>

      {/* Right Side (Carousel) */}
      <div className="w-1/2 relative group"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* Main carousel container */}
        <div className="relative overflow-hidden rounded-lg shadow-golden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carImages.map((image, index) => (
              <div key={index} className="min-w-full relative">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent mx-[9px] px-[2px]" />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="ml-4 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-primary border border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-300 h-12 w-12"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="mr-4 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-primary border border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-300 h-12 w-12"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary shadow-glow"
                    : "bg-background/50 hover:bg-background/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Play/pause indicator */}
          <div className="absolute top-4 right-4">
            <div
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                isPlaying ? "bg-primary animate-pulse" : "bg-muted-foreground"
              }`}
            />
          </div>
        </div>

        {/* Image counter */}
        <div className="absolute top-4 left-4 bg-background/20 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/30">
          <span className="text-sm text-primary font-medium">
            {currentIndex + 1} / {carImages.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;

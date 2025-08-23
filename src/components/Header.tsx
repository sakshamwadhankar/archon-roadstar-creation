import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Apni 9 images yaha dal
  const carImages = [
    { url: "https://images.unsplash.com/photo-1603584173870-7f23d4f8f6b4" },
    { url: "https://images.unsplash.com/photo-1615197030638-dc85c3ebf1f2" },
    { url: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d" },
    { url: "https://images.unsplash.com/photo-1502877338535-766e1452684a" },
    { url: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759" },
    { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
    { url: "https://images.unsplash.com/photo-1549924231-f129b911e442" },
    { url: "https://images.unsplash.com/photo-1526312426976-f4d754fa9bd6" },
    { url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" },
  ];

  // Auto slide every 3 seconds
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPlaying]);

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? carImages.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === carImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-lg">
      {/* Images */}
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${carImages[currentIndex].url})`,
        }}
      />

      {/* Left Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      {/* Right Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {carImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentDesktopVideo, setCurrentDesktopVideo] = useState(1);
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial state
    setIsMobile(window.innerWidth < 768);
    // Add event listener for window resize
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePlayVideo = () => {
    setIsVideoOpen(true);
    // Optional: Ensure the video plays immediately after the state update
    setTimeout(() => {
        videoRef.current?.play();
    }, 50)
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
    if (!isMobile) {
      // Alternate desktop background video after closing the fullscreen video
      setCurrentDesktopVideo((prev) => (prev === 1 ? 2 : 1));
    }
  };

  const handleVideoEnded = () => {
    handleCloseVideo();
  };

  // Video sources
  const desktopVideos = ["/videos/car.mp4", "/videos/car2.mp4"];
  const mobileVideo = "/videos/car1.mp4";
  
  // Determine the correct video source
  const videoSrc = isMobile ? mobileVideo : desktopVideos[currentDesktopVideo - 1];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero md:bg-black">
      {/* Background Video */}
      {!isVideoOpen && (
         <video
            key={isMobile ? 'mobile' : currentDesktopVideo} // force reload when video changes
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
         >
            <source src={videoSrc} type="video/mp4" />
         </video>
      )}

      {/* Overlays */}
      {!isVideoOpen && (
        <>
            {/* Video Darkening Overlay */}
            <div className="absolute inset-0 bg-black/75 hidden md:block" />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />
        </>
      )}

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
             <div className="space-y-4">
               <h1 className="text-6xl lg:text-7xl font-black font-brand leading-tight tracking-wider uppercase">
                  <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold text-left text-5xl">
                    Archon
                  </span>
                  <br />
                  <span className="text-foreground text-5xl">
                    Roadstar
                  </span>
                  <br />
                  <span className="text-accent text-5xl">
                    Creation
                  </span>
               </h1>
               <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Where automotive excellence meets cutting-edge innovation. Experience the pinnacle of luxury performance engineering.
               </p>
             </div>

            <div className="flex flex-col sm:flex-row gap-4">
               <Button
                  variant="hero"
                  size="lg"
                   className="text-lg px-8 py-6 cursor-target"
                  onClick={handlePlayVideo}
               >
                  PLAY
               </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
               <div className="text-center">
                  <div className="text-2xl font-bold text-primary">847</div>
                  <div>Horsepower</div>
               </div>
               <div className="text-center">
                  <div className="text-2xl font-bold text-accent">2.8s</div>
                  <div>0-60 MPH</div>
               </div>
               <div className="text-center">
                  <div className="text-2xl font-bold text-primary">511</div>
                  <div>Top Speed MPH</div>
               </div>
            </div>
          </div>

          <div className="relative animate-slide-up mx-auto ml-0 mr-auto">
            <HeroCarousel />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      {!isVideoOpen && (
         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
               <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
         </div>
      )}


      {/* Fullscreen Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src={videoSrc} // The source is already determined correctly for mobile/desktop
            autoPlay
            playsInline
            onEnded={handleVideoEnded}
            className="w-full h-full object-cover"
            controls={false}
          />
          <button
            onClick={handleCloseVideo}
            className="absolute top-6 right-6 text-white text-3xl font-bold z-50"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;
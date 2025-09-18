import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MiniGallery = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const pool = [
    "https://i.postimg.cc/zBCYt7f3/Copy-of-IMG-5576.jpg",
    "https://i.postimg.cc/KzrCrY9M/Copy-of-IMG-5577.jpg",
    "https://i.postimg.cc/kM8XtNFV/Copy-of-IMG20241018102512.jpg",
    "https://i.postimg.cc/nz9V2ByP/Copy-of-IMG20241018103503-01.jpg",
    "https://i.postimg.cc/qqQFCZmV/Copy-of-IMG-6853.avif",
    "https://i.postimg.cc/28J9Wvzt/Copy-of-IMG-5599.jpg",
    "https://i.postimg.cc/MGvzZ1pp/Copy-of-IMG20241018154146-01.jpg",
    "https://i.postimg.cc/W4MsCTW2/Copy-of-IMG-5713.jpg"
  ];

  const [images, setImages] = useState(
    pool.slice(0, 4).map((url, i) => ({
      src: url,
      caption: `Event Moment ${i + 1}`,
      description: "JBCNSTARS highlights"
    }))
  );

  useEffect(() => {
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 4);
    setImages(
      shuffled.map((url, i) => ({
        src: url,
        caption: `Event Moment ${i + 1}`,
        description: "JBCNSTARS highlights"
      }))
    );
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground">Event Highlights</h3>
        <Button variant="outline" onClick={() => navigate('/gallery')} className="self-start sm:self-auto text-deep-purple border-deep-purple hover:bg-deep-purple hover:text-white">
          <Eye className="w-4 h-4 mr-2" />
          View Gallery
        </Button>
      </div>

      <div className="relative group">
        {/* Main Image */}
        <div className="relative overflow-hidden rounded-lg sm:rounded-xl aspect-video">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].caption}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Glass Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Caption Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h4 className="text-base sm:text-lg font-semibold mb-1">{images[currentIndex].caption}</h4>
            <p className="text-xs sm:text-sm opacity-90">{images[currentIndex].description}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevImage}
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20 w-8 h-8 sm:w-10 sm:h-10"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={nextImage}
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20 w-8 h-8 sm:w-10 sm:h-10"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-deep-purple w-6" 
                : "bg-foreground-muted hover:bg-sky-purple"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MiniGallery;
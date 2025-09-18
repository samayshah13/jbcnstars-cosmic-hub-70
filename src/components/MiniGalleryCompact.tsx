import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ImageIcon, ArrowRight } from "lucide-react";

const MiniGalleryCompact = () => {
  // Featured images from recent events
  const featuredImages = [
    "https://i.postimg.cc/kM8XtNFV/Copy-of-IMG20241018102512.jpg",
    "https://i.postimg.cc/nz9V2ByP/Copy-of-IMG20241018103503-01.jpg",
    "https://i.postimg.cc/2y4kRm8d/Copy-of-IMG20241018153850-01.jpg",
    "https://i.postimg.cc/HsgW0JB6/Copy-of-IMG20241018153919-01.jpg"
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <ImageIcon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-3">Event Gallery</h3>
        <p className="text-foreground-muted text-sm max-w-md mx-auto">
          Relive the memorable moments from JBCNSTARS competitions
        </p>
      </div>

      {/* Compact Grid */}
      <div className="grid grid-cols-2 gap-3">
        {featuredImages.map((image, index) => (
          <div 
            key={index}
            className="aspect-square rounded-xl overflow-hidden group cursor-pointer hover-scale"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img 
              src={image} 
              alt={`JBCN Stars Event ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/gallery">
          <Button variant="outline" className="group">
            View Full Gallery
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MiniGalleryCompact;
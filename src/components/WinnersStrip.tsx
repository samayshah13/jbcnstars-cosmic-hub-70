import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Trophy, Medal, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const WinnersStrip = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const winners = [
    {
      name: "Aarav Sharma",
      position: "1st Place",
      year: "2024",
      category: "Senior Division",
      icon: Trophy,
      color: "text-yellow-600"
    },
    {
      name: "Priya Patel", 
      position: "2nd Place",
      year: "2024",
      category: "Senior Division",
      icon: Medal,
      color: "text-gray-500"
    },
    {
      name: "Arjun Kumar",
      position: "3rd Place", 
      year: "2024",
      category: "Senior Division",
      icon: Award,
      color: "text-amber-600"
    },
    {
      name: "Sneha Gupta",
      position: "1st Place",
      year: "2024", 
      category: "Junior Division",
      icon: Trophy,
      color: "text-yellow-600"
    },
    {
      name: "Rohan Mehta",
      position: "2nd Place",
      year: "2024",
      category: "Junior Division", 
      icon: Medal,
      color: "text-gray-500"
    }
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, winners.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground">Champion Gallery</h3>
        <div className="flex gap-2 self-start sm:self-auto">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="w-8 h-8"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon" 
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="w-8 h-8"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out gap-4 sm:gap-6"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {winners.map((winner, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-full sm:w-full md:w-1/3 group"
            >
              <div className="glass p-4 sm:p-6 rounded-xl text-center hover:shadow-lg hover:shadow-sky-purple/20 transition-all duration-300 border border-sky-purple/20">
                {/* Winner Avatar */}
                <div className="relative mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-deep-purple to-sky-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-base sm:text-xl">
                      {winner.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  {/* Award Icon */}
                  <div className="absolute -bottom-1 -right-1">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <winner.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${winner.color}`} />
                    </div>
                  </div>
                </div>

                {/* Winner Info */}
                <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{winner.name}</h4>
                <p className="text-xs sm:text-sm text-deep-purple font-medium mb-1">{winner.position}</p>
                <p className="text-xs text-foreground-muted">{winner.category} • {winner.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center space-x-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
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

export default WinnersStrip;
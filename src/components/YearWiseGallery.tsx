import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users, Star } from "lucide-react";

const YearWiseGallery = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const yearlyData = {
    "2024": {
      theme: "Mathematical Excellence",
      participants: "500+",
      schools: "50+",
      highlights: [
        "Largest participation yet",
        "Introduction of AI-powered problems",
        "Virtual reality math challenges",
        "International school participation"
      ],
      images: Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        url: "/api/placeholder/300/200",
        title: `2024 Event ${i + 1}`,
        description: "Mathematical Excellence in Action"
      }))
    },
    "2023": {
      theme: "Logic & Innovation",
      participants: "350+",
      schools: "35+",
      highlights: [
        "First hybrid competition",
        "Team collaboration rounds",
        "Coding integration challenges",
        "Mentor-student programs"
      ],
      images: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        url: "/api/placeholder/300/200",
        title: `2023 Event ${i + 1}`,
        description: "Logic & Innovation Showcase"
      }))
    }
  };

  const years = ["2024", "2023"];
  const currentData = yearlyData[selectedYear as keyof typeof yearlyData];

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Journey Through <span className="text-primary">Years</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Celebrating mathematical excellence since 2023 - witness our growth and the amazing moments
          </p>
        </div>

        {/* Year Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {years.map((year) => (
            <Button
              key={year}
              variant={selectedYear === year ? "default" : "outline"}
              onClick={() => setSelectedYear(year)}
              className="px-8 py-3 text-lg font-semibold"
            >
              <Calendar className="w-5 h-5 mr-2" />
              {year}
            </Button>
          ))}
        </div>

        {/* Year Overview */}
        <div className="card-premium p-8 mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">{selectedYear}</h3>
              <p className="text-foreground-muted font-semibold">{currentData.theme}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{currentData.participants}</h3>
              <p className="text-foreground-muted">Participants</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <Trophy className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{currentData.schools}</h3>
              <p className="text-foreground-muted">Schools</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">4</h3>
              <p className="text-foreground-muted">Days of Competition</p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            {selectedYear} Highlights
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentData.highlights.map((highlight, index) => (
              <div key={index} className="card-premium p-6 text-center">
                <div className="text-4xl mb-4">✨</div>
                <p className="font-semibold">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentData.images.map((image, index) => (
            <div 
              key={image.id}
              className="card-premium p-0 overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                  {selectedYear}
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {image.title}
                </h4>
                <p className="text-sm text-foreground-muted">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YearWiseGallery;
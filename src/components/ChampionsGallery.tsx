import React from "react";
import { Trophy, Star, Medal, Crown } from "lucide-react";

const ChampionsGallery = () => {
  const champions = [
    {
      year: "2024",
      category: "Junior Level",
      teamName: "Math Wizards",
      members: ["Arjun Sharma", "Priya Patel", "Rohit Kumar"],
      school: "St. Xavier's High School",
      achievement: "First Prize - Individual & Team Round"
    },
    {
      year: "2024", 
      category: "Intermediate Level",
      teamName: "Number Ninjas",
      members: ["Kavya Singh", "Aditya Gupta", "Sneha Reddy"],
      school: "Delhi Public School",
      achievement: "Champions - Quiz Round"
    },
    {
      year: "2024",
      category: "Senior Level", 
      teamName: "Equation Eagles",
      members: ["Ravi Mehta", "Ananya Joshi", "Karthik Nair"],
      school: "Ryan International",
      achievement: "Math Star Trophy Winners"
    },
    {
      year: "2023",
      category: "Junior Level",
      teamName: "Logic Lions",
      members: ["Aditi Sharma", "Vikram Rao", "Meera Iyer"],
      school: "Bombay Scottish",
      achievement: "First Prize - Team Challenge"
    },
    {
      year: "2023",
      category: "Intermediate Level",
      teamName: "Formula Force",
      members: ["Harsh Agarwal", "Divya Nair", "Arpit Jain"],
      school: "Cathedral School",
      achievement: "Champions - All Rounds"
    },
    {
      year: "2023",
      category: "Senior Level",
      teamName: "Theorem Titans",
      members: ["Neha Gupta", "Abhishek Modi", "Pooja Singh"],
      school: "Jamnabai Narsee",
      achievement: "Overall Champions"
    }
  ];

  const getIcon = (index: number) => {
    const icons = [Crown, Trophy, Medal, Star];
    return icons[index % icons.length];
  };

  const getColor = (index: number) => {
    const colors = [
      "from-yellow-500 to-orange-600",
      "from-purple-500 to-pink-600", 
      "from-blue-500 to-cyan-600",
      "from-green-500 to-teal-600"
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="mt-20">
      <h2 className="text-4xl font-bold text-center mb-16">
        Champions <span className="text-primary">Gallery</span>
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {champions.map((champion, index) => {
          const Icon = getIcon(index);
          const colorClass = getColor(index);
          
          return (
            <div 
              key={index}
              className="card-premium p-6 text-center group hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-sm text-primary font-semibold">
                  <span>{champion.year}</span>
                  <span>•</span>
                  <span>{champion.category}</span>
                </div>
                
                <h3 className="text-xl font-bold">{champion.teamName}</h3>
                
                <div className="text-sm text-muted-foreground space-y-1">
                  {champion.members.map((member, i) => (
                    <div key={i}>{member}</div>
                  ))}
                </div>
                
                <div className="text-sm font-medium text-accent">
                  {champion.school}
                </div>
                
                <div className="text-sm text-primary font-semibold bg-primary/10 rounded-lg p-2">
                  {champion.achievement}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChampionsGallery;
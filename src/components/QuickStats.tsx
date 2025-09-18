import React from "react";
import { Users, MapPin, Brain } from "lucide-react";

const QuickStats = () => {
  const stats = [
    {
      icon: Users,
      value: "320+",
      label: "Participants",
      color: "text-deep-purple"
    },
    {
      icon: MapPin,
      value: "10+",
      label: "Schools from Mumbai",
      color: "text-sky-purple"
    },
    {
      icon: Brain,
      value: "500+",
      label: "Problems Solved",
      color: "text-deep-purple"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="glass p-4 sm:p-6 rounded-lg sm:rounded-xl text-center group hover:shadow-lg hover:shadow-sky-purple/20 transition-all duration-300"
        >
          <div className="flex justify-center mb-2 sm:mb-3">
            <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-deep-purple mb-1">{stat.value}</div>
          <div className="text-xs sm:text-sm text-foreground-muted font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
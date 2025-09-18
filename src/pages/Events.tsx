import React from "react";
import Layout from "@/components/Layout";
import { Calendar, Clock, MapPin, Users, Trophy, Star, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import RickRollEasterEgg from "@/components/RickRollEasterEgg";

const Events = () => {
  const schedule = [
    {
      time: "7:30 AM",
      activity: "Reporting",
      description: "Participants arrive and check-in begins"
    },
    {
      time: "7:30 AM - 8:00 AM",
      activity: "Registrations",
      description: "Final registration and team verification"
    },
    {
      time: "8:00 AM - 9:00 AM",
      activity: "Round 1 - Individual Round",
      description: "30 multiple choice questions, 60 minutes duration"
    },
    {
      time: "9:00 AM - 9:30 AM",
      activity: "Mid Morning Snack Break",
      description: "Refreshments and networking"
    },
    {
      time: "9:30 AM - 10:30 AM",
      activity: "Round 2 - Team Round",
      description: "10 problems to be solved in teams, 60 minutes"
    },
    {
      time: "10:45 AM - 11:45 AM",
      activity: "Quiz 1 - Junior Level",
      description: "Top 4 junior teams compete"
    },
    {
      time: "11:45 AM - 12:45 PM",
      activity: "Quiz 2 - Intermediate Level",
      description: "Top 4 intermediate teams compete"
    },
    {
      time: "12:45 PM - 1:30 PM",
      activity: "Lunch Break and Math Games",
      description: "Meal and recreational mathematical activities"
    },
    {
      time: "1:30 PM - 2:30 PM",
      activity: "Quiz 3 - Senior Level",
      description: "Top 4 senior teams compete"
    },
    {
      time: "2:30 PM - 3:00 PM",
      activity: "Prize Distribution and Closing Ceremony",
      description: "Awards ceremony and celebration"
    }
  ];

  return (
    <Layout>
      <div className="py-16 sm:py-20 grid-bg">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Competition <span className="text-primary">Schedule</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground-muted max-w-4xl mx-auto leading-relaxed px-4">
              Join us on October 11th, 2025, for an exhilarating display of mathematical prowess and problem-solving skills. 
              JBCNSTARS is a team competition open to students from grades 6-12.
            </p>
          </div>

          {/* Competition Day Schedule */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-16">Competition Day Schedule</h2>
            <p className="text-center text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12">October 11th, 2025, Saturday | 7:30 AM to 3:00 PM | JBCN Parel, Mumbai</p>
            
          <div className="max-w-5xl mx-auto">
              <div className="space-y-8">
                {schedule.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    } animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Time Badge */}
                    <div className="flex-shrink-0 w-28 text-center">
                      <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 px-3 py-2 rounded-lg">
                        <div className="text-primary font-bold text-sm">{item.time}</div>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background shadow-lg"></div>
                      {index < schedule.length - 1 && (
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
                      )}
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 card-glow p-6">
                      <h3 className="text-xl font-bold mb-2 text-primary">{item.activity}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                      
                      {/* Activity Type Indicator */}
                      <div className="flex items-center gap-2">
                        {item.activity.toLowerCase().includes('round') && (
                          <div className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs font-medium">
                            Competition
                          </div>
                        )}
                        {item.activity.toLowerCase().includes('break') && (
                          <div className="px-2 py-1 bg-green-500/20 text-green-400 rounded-md text-xs font-medium">
                            Break
                          </div>
                        )}
                        {item.activity.toLowerCase().includes('ceremony') && (
                          <div className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-md text-xs font-medium">
                            Event
                          </div>
                        )}
                        {item.activity.toLowerCase().includes('registration') && (
                          <div className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-md text-xs font-medium">
                            Setup
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Registration CTA */}
          <div className="mt-24 text-center">
            <div className="card-premium max-w-3xl mx-auto p-12">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Ready to Join the Mathematical Elite?
              </h3>
              <p className="text-foreground-muted mb-8 text-xl leading-relaxed">
                Registration for JBCNSTARS 2025 is now open! Secure your place in this prestigious competition 
                and embark on an extraordinary mathematical journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  variant="default"
                  className="px-8 py-4 text-lg font-semibold" 
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSc4E24X8duHNVdaE7vyYHLVRx2p7aZ13Dxy8lmRPhGMOe43wA/viewform?usp=dialog&urp=gmail_link', '_blank')}
                >
                  Register Now
                </Button>
                <RickRollEasterEgg 
                  liveStreamUrl="https://youtube.com/live/vQbFbA2VoLA?feature=share"
                  className="px-8 py-4 text-lg font-semibold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
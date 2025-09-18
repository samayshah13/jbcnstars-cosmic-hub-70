import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, Star, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import HackingEffect from "@/components/HackingEffect";
import MathSurpriseModal from "@/components/MathSurpriseModal";
import naahamPhoto from "@/assets/naaham-shah-new.jpg";
import samayPhoto from "@/assets/samay-shah-new.jpg";
import dhirPhoto from "@/assets/dhir-jain-new.jpg";
import facultyPhoto from "@/assets/faculty-team-new.jpg";

const Team = () => {
  const [showHacking, setShowHacking] = useState(false);
  const [showMathSurprise, setShowMathSurprise] = useState(false);

  const handleDeveloperClick = () => {
    setShowHacking(true);
  };

  const handleFacultyClick = () => {
    setShowMathSurprise(true);
  };

  const handleHackingComplete = () => {
    setShowHacking(false);
  };

  const handleModalClose = () => {
    setShowMathSurprise(false);
  };

  const developers = [
    {
      name: "Naaham Shah",
      role: "Lead Developer",
      bio: "Full-stack developer passionate about creating innovative educational platforms.",
      image: naahamPhoto,
      skills: ["React", "TypeScript", "UI/UX Design"],
      email: "naahamalt@gmail.com"
    },
    {
      name: "Samay Shah",
      role: "Frontend Developer",
      bio: "Specializes in creating beautiful and interactive user interfaces.",
      image: samayPhoto,
      skills: ["React", "CSS", "Animation"],
      email: "shahsammy13@gmail.com"
    },
    {
      name: "Dhir Jain",
      role: "Backend Developer",
      bio: "Focused on building robust and scalable backend systems.",
      image: dhirPhoto,
      skills: ["Node.js", "Database", "API Development"],
      email: "dhirj907@gmail.com"
    }
  ];

  const teachers = [
    {
      name: "Miss Urvi",
      role: "Mathematics Coordinator",
      department: "Mathematics Department",
      bio: "Experienced educator passionate about making mathematics accessible and engaging.",
      image: "👩‍🏫"
    },
    {
      name: "Miss Neelam",
      role: "Computer Science Teacher",
      department: "Technology Department",
      bio: "Dedicated to integrating technology in education and fostering innovation.",
      image: "👩‍🏫"
    },
    {
      name: "Miss Mansi",
      role: "Academic Coordinator",
      department: "Academic Affairs",
      bio: "Coordinates academic programs and ensures educational excellence.",
      image: "👩‍🏫"
    },
    {
      name: "Other Faculty Members",
      role: "Supporting Faculty",
      department: "Various Departments",
      bio: "Dedicated teachers who support and mentor students in their academic journey.",
      image: "👥"
    }
  ];

  return (
    <Layout>
      <div className="py-16 sm:py-20 grid-bg">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground-muted max-w-3xl mx-auto px-4">
              The dedicated individuals who bring JBCN Stars to life - from passionate educators 
              to talented student developers.
            </p>
          </div>

          {/* Student Developers Section */}
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center justify-center mb-8 sm:mb-12">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Star className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                <h2 className="text-3xl sm:text-4xl font-bold text-center">
                  Student <span className="text-primary">Developers</span>
                </h2>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {developers.map((developer, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-card-border cursor-pointer" 
                  style={{ animationDelay: `${index * 0.1}s` }} 
                  onClick={handleDeveloperClick}
                >
                  <CardContent className="p-6 sm:p-8 text-center">
                    {/* Avatar */}
                    <div className="relative mb-4 sm:mb-6">
                      <div className="w-24 sm:w-32 md:w-36 h-24 sm:h-32 md:h-36 mx-auto rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-300 border-2 border-primary/20">
                        <img 
                          src={developer.image} 
                          alt={developer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2">
                        <div className="w-6 sm:w-8 h-6 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                          <Star className="w-3 sm:w-4 h-3 sm:h-4 text-primary-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">{developer.name}</h3>
                        <p className="text-primary font-semibold text-sm sm:text-base">{developer.role}</p>
                      </div>
                      <p className="text-foreground-muted text-xs sm:text-sm leading-relaxed">
                        {developer.bio}
                      </p>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                        {developer.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Contact Email */}
                      <div className="flex justify-center pt-3 sm:pt-4">
                        <a 
                          href={`mailto:${developer.email}`}
                          className="w-8 sm:w-10 h-8 sm:h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-200 border border-primary/20 hover:border-primary/40"
                        >
                          <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Faculty Section */}
          <div>
            <div className="flex items-center justify-center mb-8 sm:mb-12">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <BookOpen className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                <h2 className="text-3xl sm:text-4xl font-bold text-center">
                  Math Department <span className="text-primary">Team</span>
                </h2>
              </div>
            </div>
            
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-card-border cursor-pointer max-w-2xl mx-auto" onClick={handleFacultyClick}>
              <CardContent className="p-8 sm:p-12 text-center">
                {/* Team Photo */}
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 mx-auto rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300 border-2 border-primary/20">
                    <img 
                      src={facultyPhoto} 
                      alt="Mathematics Department Faculty Team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3">
                    <div className="w-8 sm:w-12 h-8 sm:h-12 bg-primary rounded-full flex items-center justify-center animate-pulse">
                      <Star className="w-4 sm:w-6 h-4 sm:h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Our Amazing Faculty</h3>
                    <p className="text-primary font-semibold text-base sm:text-lg">Mathematics Department Team</p>
                  </div>
                  
                  <p className="text-foreground-muted text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                    Meet the dedicated educators who make JBCNSTARS possible - passionate mathematics teachers, 
                    coordinators, and mentors working together to inspire young minds.
                  </p>
                  
                  <p className="text-xs text-foreground-muted italic mt-3 sm:mt-4">
                    Click for surprise! 🎉
                  </p>
                  
                  {/* Contact Email */}
                  <div className="flex justify-center pt-3 sm:pt-4">
                    <a 
                      href="mailto:jbcnstars.parel@jbcnschool.edu.in"
                      className="w-8 sm:w-10 h-8 sm:h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-200 border border-primary/20 hover:border-primary/40"
                    >
                      <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
      
      <HackingEffect isActive={showHacking} onComplete={handleHackingComplete} />
      <MathSurpriseModal isOpen={showMathSurprise} onClose={handleModalClose} />
    </Layout>
  );
};

export default Team;
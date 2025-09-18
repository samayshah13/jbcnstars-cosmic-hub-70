import React from "react";
import Layout from "@/components/Layout";
import { Calculator, Users, Trophy, Lightbulb, BookOpen, Brain, Puzzle, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/ThemeProvider";
const About = () => {
  const {
    theme
  } = useTheme();
  const jbcnLogoLight = "/lovable-uploads/0c4717fa-88e9-4a9b-890b-35dacdee2812.png";
  const jbcnLogoDark = "/lovable-uploads/a3c54754-ef7c-4fbb-a6ea-6894826a70bf.png";
  const currentLogo = theme === "dark" ? jbcnLogoLight : jbcnLogoDark;
  const hoverLogo = theme === "dark" ? jbcnLogoDark : jbcnLogoLight;
  const starsAcronym = [{
    letter: "S",
    word: "Scholastic",
    icon: BookOpen
  }, {
    letter: "T",
    word: "Tournament for",
    icon: Trophy
  }, {
    letter: "A",
    word: "Advanced Mathematics",
    icon: Calculator
  }, {
    letter: "R",
    word: "Reasoning",
    icon: Brain
  }, {
    letter: "S",
    word: "Skills",
    icon: Puzzle
  }];
  const features = [{
    icon: Calculator,
    title: "Challenging Math Problems",
    description: "Complex mathematical challenges that push the boundaries of logical thinking and creativity."
  }, {
    icon: Users,
    title: "Collaboration & Teamwork",
    description: "Team-based challenges fostering cooperation and collective problem-solving approaches."
  }, {
    icon: Trophy,
    title: "Exciting Prizes & Recognition",
    description: "Prestigious awards and recognition celebrating outstanding mathematical performance."
  }];
  return <Layout>
      <div className="py-16 sm:py-20 space-y-16 sm:space-y-24 grid-bg">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
            {/* Left - Logo */}
            <div className="flex justify-center animate-fade-in">
              <div className="relative group cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                  <img src={currentLogo} alt="JBCNSTARS Logo" className="w-48 h-48 object-contain transition-opacity duration-300 group-hover:opacity-0" />
                  <img src={hoverLogo} alt="JBCNSTARS Logo Hover" className="w-48 h-48 object-contain absolute inset-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-4 sm:space-y-6 text-center md:text-left animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                About <span className="text-primary">JBCNSTARS</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground">
                Scholastic Tournament for Advanced Mathematics Reasoning Skills
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                JBCNSTARS is more than just a mathematics competition—it's a celebration of intellectual curiosity, 
                analytical thinking, and the boundless potential of young minds to solve complex problems.
              </p>
            </div>
          </div>
        </div>

        {/* STARS Acronym Breakdown */}
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What does <span className="text-primary">STARS</span> stand for?</h2>
            <p className="text-muted-foreground text-base sm:text-lg">Each letter represents our core values and mission</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
            {starsAcronym.map((item, index) => <div key={index} className="text-center group" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative bg-card border border-border rounded-full w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{item.letter}</div>
                <div className="text-lg font-semibold">{item.word}</div>
              </div>)}
          </div>
        </div>

        {/* History & Purpose Section */}
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">History & Purpose</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with the vision of making mathematics accessible, engaging, and inspiring, 
                  JBCNSTARS brings together the brightest young minds from across the region to 
                  participate in challenging mathematical competitions.
                </p>
                <p>
                  Our competition is designed to test not just computational skills, but creative 
                  problem-solving, logical reasoning, and the ability to think outside conventional 
                  mathematical frameworks.
                </p>
                <p>
                  Through carefully crafted challenges and collaborative sessions, 
                  participants gain exposure to advanced mathematical concepts while developing 
                  critical thinking skills essential for future academic and professional success.
                </p>
              </div>
            </div>

            {/* Right - Illustration */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-12 text-center">
                  <div className="text-6xl mb-6">🧮</div>
                  <h3 className="text-2xl font-bold mb-4">Competition Highlights</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🏆</span>
                      <span>320+ participants annually</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🧮</span>
                      <span>Multi-level competition structure</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🎯</span>
                      <span>Focus on practical applications</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🌟</span>
                      <span>International recognition</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose <span className="text-primary">JBCNSTARS</span>?</h2>
            <p className="text-muted-foreground text-lg">Discover what makes our competition unique and engaging</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <div key={index} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <div className="relative mx-auto w-16 h-16 mb-4">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative bg-primary rounded-2xl w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>)}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-12">
            <h2 className="text-3xl font-bold">Be a part of the next generation of problem solvers</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join JBCNSTARS and embark on a journey of mathematical discovery, collaboration, and excellence.
            </p>
            <Button size="lg" className="text-lg px-8 py-4">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </Layout>;
};
export default About;
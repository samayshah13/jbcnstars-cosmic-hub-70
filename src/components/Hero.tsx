import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Brain } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import CountdownTimer from "@/components/CountdownTimer";
import heroBrain from "@/assets/hero-brain.jpg";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const jbcnStarsLogo = theme === "dark" ? "/lovable-uploads/94145ce6-007e-4080-b1ef-94129251f35f.png" : "/lovable-uploads/f83e59aa-2799-49ad-9fd2-1b97fe006a7e.png";
  
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroBrain} alt="Mathematics competition" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background-secondary/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              <img 
                src={jbcnStarsLogo} 
                alt="JBCNSTARS" 
                className="w-6 h-6"
              />
              <span className="text-foreground">JBCN's Premier Mathematics Competition</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Welcome to
              <br />
              JBCN<span className="text-primary">STARS!</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed px-4">
              The 3rd edition of our Mathematics Competition: Scholastic Tournament for Advanced Mathematics and Reasoning Skills.
              <br />
              <span className="font-semibold text-primary text-xs sm:text-sm md:text-base">October 11th, 2025, Saturday | 7:30 AM - 3:00 PM | JBCN Parel</span>
              <br />
              <span className="text-xs sm:text-sm">Registration fee: INR 1200 per team (includes breakfast & lunch) | Deadline: October 5, 2025</span>
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-12 px-4">
              <Button variant="outline" onClick={() => navigate('/events')} className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 group border-primary text-primary dark:border-accent dark:text-accent btn-hover-fill">
                <Brain className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:animate-pulse" />
                Explore Events
              </Button>
              <Button variant="secondary" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSc4E24X8duHNVdaE7vyYHLVRx2p7aZ13Dxy8lmRPhGMOe43wA/viewform?usp=dialog&urp=gmail_link', '_blank')} className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 btn-hover-fill">Join the Competition!</Button>
            </div>

            {/* Competition Countdown */}
            <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Competition Countdown</h3>
                <p className="text-foreground-muted text-sm sm:text-base md:text-lg">The mathematical journey begins soon...</p>
              </div>
              <CountdownTimer />
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <Button variant="ghost" size="icon" onClick={scrollToNext} className="rounded-full hover:bg-primary/10 text-primary">
                <ArrowDown className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

    </>;
};
export default Hero;
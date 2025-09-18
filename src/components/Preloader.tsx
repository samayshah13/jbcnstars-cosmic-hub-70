import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 cosmic-bg flex items-center justify-center transition-opacity duration-800 ${isComplete ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        {/* Logo */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cosmic-purple to-neon-blue flex items-center justify-center animate-pulse-glow">
            <Star className="w-12 h-12 text-white animate-spin" style={{ animationDuration: '3s' }} />
          </div>
          <div className="absolute inset-0 bg-cosmic-purple rounded-full blur-xl opacity-30 animate-pulse" />
        </div>

        {/* Title */}
        <h1 className="hero-title text-4xl md:text-6xl mb-8">
          JBCN<span className="text-cosmic-purple">Stars</span>
        </h1>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-4">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cosmic-purple to-neon-blue transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Progress Text */}
        <p className="text-foreground-muted text-lg">
          Loading mathematical excellence... {Math.round(progress)}%
        </p>

        {/* Floating Particles */}
        <div className="fixed inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="particle animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
interface CinematicPreloaderProps {
  onComplete: () => void;
}
const CinematicPreloader: React.FC<CinematicPreloaderProps> = ({
  onComplete
}) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showParticleBurst, setShowParticleBurst] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setShowParticleBurst(true);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 800);
          }, 1000);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);
  const mathSymbols = ['π', 'Σ', '√', '∞', '∫', '∆', 'θ', 'α', 'β', 'γ'];
  return <div className={`fixed inset-0 z-50 bg-gradient-to-br from-background via-background-secondary to-background-tertiary flex items-center justify-center transition-all duration-1000 ${isComplete ? 'opacity-0 blur-sm' : 'opacity-100'}`}>
      
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({
        length: 20
      }).map((_, i) => <div key={i} className="absolute text-primary/20 text-xl font-bold animate-float" style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 4}s`
      }}>
            {mathSymbols[Math.floor(Math.random() * mathSymbols.length)]}
          </div>)}
      </div>

      {/* Main Content */}
      <div className="text-center z-10">
        {/* Logo Container */}
        <div className="relative mb-12">
          {/* Main Logo */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-2xl">
              <Star className="w-16 h-16 text-white animate-spin" style={{
              animationDuration: '4s',
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))'
            }} />
            </div>
            
            {/* Orbiting Math Symbols */}
            {mathSymbols.slice(0, 6).map((symbol, index) => <div key={index} className="absolute w-8 h-8 text-primary font-bold text-lg flex items-center justify-center" style={{
            animation: `orbit 6s linear infinite`,
            animationDelay: `${index * 1}s`,
            transformOrigin: '80px 80px'
          }}>
                {symbol}
              </div>)}
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-30 animate-pulse-glow" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          JBCN<span className="text-primary">STARS</span>
        </h1>
        
        <p className="text-xl text-foreground-muted mb-12 max-w-md mx-auto">
          A Celebration of Mathematical Excellence
        </p>

        {/* Progress Section */}
        <div className="w-96 mx-auto mb-6">
          <div className="h-3 bg-muted rounded-full overflow-hidden backdrop-blur-sm">
            <div className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-300 ease-out rounded-full relative" style={{
            width: `${progress}%`
          }}>
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Progress Text */}
        <p className="text-foreground-muted text-lg font-medium">
          Initializing Mathematical Universe... {Math.round(progress)}%
        </p>

        {/* Loading Messages */}
        <div className="mt-4 h-6">
          {progress < 30 && <p className="text-sm text-foreground-muted/70 animate-fade-in">Loading competition data...</p>}
          {progress >= 30 && progress < 60 && <p className="text-sm text-foreground-muted/70 animate-fade-in">Preparing mathematical challenges...</p>}
          {progress >= 60 && progress < 90 && <p className="text-sm text-foreground-muted/70 animate-fade-in">Connecting to JBCN Stars universe...</p>}
          {progress >= 90 && <p className="text-sm text-foreground-muted/70 animate-fade-in">Welcome to the future of mathematics!</p>}
        </div>
      </div>

      {/* Particle Burst Effect */}
      {showParticleBurst && <div className="absolute inset-0 pointer-events-none">
          {Array.from({
        length: 30
      }).map((_, i) => <div key={i} className="absolute w-2 h-2 bg-primary rounded-full animate-particle-burst" style={{
        top: '50%',
        left: '50%',
        '--burst-angle': `${i * 12}deg`,
        '--burst-distance': `${100 + Math.random() * 200}px`,
        animationDelay: `${Math.random() * 0.5}s`
      } as React.CSSProperties} />)}
        </div>}
    </div>;
};
export default CinematicPreloader;
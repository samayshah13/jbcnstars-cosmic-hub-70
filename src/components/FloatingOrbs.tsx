import React from "react";

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Large floating orbs */}
      <div 
        className="absolute w-32 h-32 top-20 left-10 rounded-full animate-float opacity-20"
        style={{ 
          background: 'radial-gradient(circle, hsl(258 80% 45% / 0.3) 0%, transparent 70%)',
          animationDelay: '0s' 
        }}
      />
      <div 
        className="absolute w-24 h-24 top-40 right-20 rounded-full animate-float opacity-15"
        style={{ 
          background: 'radial-gradient(circle, hsl(266 70% 75% / 0.4) 0%, transparent 70%)',
          animationDelay: '-2s' 
        }}
      />
      <div 
        className="absolute w-16 h-16 bottom-40 left-20 rounded-full animate-float opacity-25"
        style={{ 
          background: 'radial-gradient(circle, hsl(258 80% 45% / 0.2) 0%, transparent 70%)',
          animationDelay: '-4s' 
        }}
      />
      <div 
        className="absolute w-20 h-20 bottom-20 right-40 rounded-full animate-float opacity-20"
        style={{ 
          background: 'radial-gradient(circle, hsl(266 70% 75% / 0.3) 0%, transparent 70%)',
          animationDelay: '-1s' 
        }}
      />
      
      {/* Small particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full animate-twinkle"
          style={{
            background: 'hsl(258 80% 45%)',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;
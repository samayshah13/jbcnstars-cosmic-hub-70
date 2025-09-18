import React, { useEffect, useRef, useState } from 'react';

const InteractiveGridWithHover = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            hsl(266 80% 70% / ${isHovering ? '0.6' : '0.15'}) 0%, 
            hsl(266 70% 60% / ${isHovering ? '0.4' : '0.1'}) 25%, 
            hsl(266 60% 50% / ${isHovering ? '0.25' : '0.05'}) 50%, 
            transparent 75%),
          linear-gradient(to right, hsl(266 70% 65% / 0.4) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(266 70% 65% / 0.4) 1px, transparent 1px)
        `,
        backgroundSize: '35px 35px, 35px 35px, 35px 35px',
        animation: 'grid-move 30s linear infinite',
        transition: 'background 0.5s ease',
        filter: isHovering 
          ? 'drop-shadow(0 0 40px hsl(266 80% 70% / 0.8)) drop-shadow(0 0 80px hsl(266 70% 65% / 0.4))' 
          : 'drop-shadow(0 0 15px hsl(266 70% 65% / 0.3))',
        boxShadow: `
          inset 0 0 100px hsl(266 70% 65% / 0.1),
          inset 0 0 200px hsl(266 60% 50% / 0.05)
        `
      }}
    >
      {/* Enhanced floating glow orb that follows mouse */}
      {isHovering && (
        <div
          className="absolute pointer-events-none z-10 transition-all duration-500 ease-out"
          style={{
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
            width: '300px',
            height: '300px',
            background: `
              radial-gradient(circle, 
                hsl(266 70% 65% / 0.4) 0%, 
                hsl(266 70% 65% / 0.2) 20%,
                hsl(266 38% 50% / 0.15) 40%, 
                hsl(266 38% 50% / 0.05) 60%,
                transparent 80%)
            `,
            borderRadius: '50%',
            filter: 'blur(30px)',
            transform: 'scale(1.5)',
            boxShadow: `
              0 0 60px hsl(266 70% 65% / 0.4),
              0 0 120px hsl(266 70% 65% / 0.2),
              inset 0 0 80px hsl(266 70% 65% / 0.1)
            `
          }}
        />
      )}
      
      {/* Additional pulse effect at mouse position */}
      {isHovering && (
        <div
          className="absolute pointer-events-none z-5 transition-all duration-300 ease-out animate-pulse"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
            width: '100px',
            height: '100px',
            background: `radial-gradient(circle, hsl(266 70% 65% / 0.6) 0%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(15px)',
          }}
        />
      )}
    </div>
  );
};

export default InteractiveGridWithHover;
import React, { useEffect, useRef } from 'react';

const InteractiveGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const targetPositionRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const gridSize = 35;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetPositionRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const drawGrid = () => {
      const { width, height } = canvas;
      timeRef.current += 0.02;

      // Smooth mouse following with easing
      const easing = 0.15;
      mousePositionRef.current.x += (targetPositionRef.current.x - mousePositionRef.current.x) * easing;
      mousePositionRef.current.y += (targetPositionRef.current.y - mousePositionRef.current.y) * easing;

      const { x: mouseX, y: mouseY } = mousePositionRef.current;

      // Clear canvas with slight fade effect for trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
      ctx.fillRect(0, 0, width, height);

      // Draw base grid with subtle animation
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.06 + Math.sin(timeRef.current) * 0.02})`;
      ctx.lineWidth = 0.8;

      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Multiple layered glow effects for maximum intensity
      ctx.globalCompositeOperation = 'screen';

      // Massive outer glow - extends much further
      const massiveGlow = ctx.createRadialGradient(
        mouseX, mouseY, 0,
        mouseX, mouseY, 500
      );
      massiveGlow.addColorStop(0, 'rgba(168, 85, 247, 0.6)');
      massiveGlow.addColorStop(0.1, 'rgba(168, 85, 247, 0.4)');
      massiveGlow.addColorStop(0.3, 'rgba(139, 69, 196, 0.25)');
      massiveGlow.addColorStop(0.6, 'rgba(139, 69, 196, 0.1)');
      massiveGlow.addColorStop(1, 'rgba(139, 69, 196, 0)');
      
      ctx.fillStyle = massiveGlow;
      ctx.fillRect(0, 0, width, height);

      // Outer glow - larger and more intense
      const outerGlow = ctx.createRadialGradient(
        mouseX, mouseY, 0,
        mouseX, mouseY, 350
      );
      outerGlow.addColorStop(0, 'rgba(168, 85, 247, 0.8)');
      outerGlow.addColorStop(0.2, 'rgba(168, 85, 247, 0.6)');
      outerGlow.addColorStop(0.4, 'rgba(139, 69, 196, 0.4)');
      outerGlow.addColorStop(0.7, 'rgba(139, 69, 196, 0.2)');
      outerGlow.addColorStop(1, 'rgba(139, 69, 196, 0)');
      
      ctx.fillStyle = outerGlow;
      ctx.fillRect(0, 0, width, height);

      // Inner glow - much more intense
      const innerGlow = ctx.createRadialGradient(
        mouseX, mouseY, 0,
        mouseX, mouseY, 200
      );
      innerGlow.addColorStop(0, 'rgba(196, 125, 247, 1)');
      innerGlow.addColorStop(0.2, 'rgba(168, 85, 247, 0.9)');
      innerGlow.addColorStop(0.5, 'rgba(139, 69, 196, 0.6)');
      innerGlow.addColorStop(0.8, 'rgba(139, 69, 196, 0.3)');
      innerGlow.addColorStop(1, 'rgba(139, 69, 196, 0)');
      
      ctx.fillStyle = innerGlow;
      ctx.fillRect(0, 0, width, height);

      // Core glow - blazing bright center
      const coreGlow = ctx.createRadialGradient(
        mouseX, mouseY, 0,
        mouseX, mouseY, 120
      );
      coreGlow.addColorStop(0, 'rgba(255, 255, 255, 1)');
      coreGlow.addColorStop(0.1, 'rgba(233, 213, 255, 1)');
      coreGlow.addColorStop(0.3, 'rgba(196, 125, 247, 0.9)');
      coreGlow.addColorStop(0.6, 'rgba(168, 85, 247, 0.7)');
      coreGlow.addColorStop(1, 'rgba(168, 85, 247, 0)');
      
      ctx.fillStyle = coreGlow;
      ctx.fillRect(0, 0, width, height);

      // Ultra-bright center point
      const centerGlow = ctx.createRadialGradient(
        mouseX, mouseY, 0,
        mouseX, mouseY, 60
      );
      centerGlow.addColorStop(0, 'rgba(255, 255, 255, 1)');
      centerGlow.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
      centerGlow.addColorStop(0.6, 'rgba(233, 213, 255, 0.6)');
      centerGlow.addColorStop(1, 'rgba(196, 125, 247, 0)');
      
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'source-over';

      // Enhanced grid lines with dynamic intensity and ripple effect
      const enhanceRadius = 180;
      const rippleEffect = Math.sin(timeRef.current * 3) * 0.3 + 0.7;

      // Find grid intersections near mouse
      const startX = Math.floor((mouseX - enhanceRadius) / gridSize) * gridSize;
      const endX = Math.ceil((mouseX + enhanceRadius) / gridSize) * gridSize;
      const startY = Math.floor((mouseY - enhanceRadius) / gridSize) * gridSize;
      const endY = Math.ceil((mouseY + enhanceRadius) / gridSize) * gridSize;

      // Enhanced vertical lines with glow
      for (let x = startX; x <= endX; x += gridSize) {
        if (x >= 0 && x <= width) {
          const distance = Math.abs(x - mouseX);
          const opacity = Math.max(0, (1 - distance / enhanceRadius) * rippleEffect);
          if (opacity > 0.1) {
            // Line glow
            ctx.strokeStyle = `rgba(196, 125, 247, ${opacity * 0.8})`;
            ctx.lineWidth = 3;
            ctx.shadowColor = 'rgba(196, 125, 247, 0.8)';
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.moveTo(x, Math.max(0, mouseY - enhanceRadius));
            ctx.lineTo(x, Math.min(height, mouseY + enhanceRadius));
            ctx.stroke();
            
            // Clear shadow for next draw
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
            
            // Bright line
            ctx.strokeStyle = `rgba(233, 213, 255, ${opacity * 0.9})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(x, Math.max(0, mouseY - enhanceRadius));
            ctx.lineTo(x, Math.min(height, mouseY + enhanceRadius));
            ctx.stroke();
          }
        }
      }

      // Enhanced horizontal lines with glow
      for (let y = startY; y <= endY; y += gridSize) {
        if (y >= 0 && y <= height) {
          const distance = Math.abs(y - mouseY);
          const opacity = Math.max(0, (1 - distance / enhanceRadius) * rippleEffect);
          if (opacity > 0.1) {
            // Line glow
            ctx.strokeStyle = `rgba(196, 125, 247, ${opacity * 0.8})`;
            ctx.lineWidth = 3;
            ctx.shadowColor = 'rgba(196, 125, 247, 0.8)';
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.moveTo(Math.max(0, mouseX - enhanceRadius), y);
            ctx.lineTo(Math.min(width, mouseX + enhanceRadius), y);
            ctx.stroke();
            
            // Clear shadow for next draw
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
            
            // Bright line
            ctx.strokeStyle = `rgba(233, 213, 255, ${opacity * 0.9})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(Math.max(0, mouseX - enhanceRadius), y);
            ctx.lineTo(Math.min(width, mouseX + enhanceRadius), y);
            ctx.stroke();
          }
        }
      }

      // Add intersection points with pulsing effect
      for (let x = startX; x <= endX; x += gridSize) {
        for (let y = startY; y <= endY; y += gridSize) {
          if (x >= 0 && x <= width && y >= 0 && y <= height) {
            const distance = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
            if (distance < enhanceRadius) {
              const opacity = Math.max(0, (1 - distance / enhanceRadius) * rippleEffect);
              if (opacity > 0.2) {
                const pulseSize = 2 + Math.sin(timeRef.current * 4 + distance * 0.01) * 1;
                
                // Intersection glow
                ctx.fillStyle = `rgba(196, 125, 247, ${opacity * 0.6})`;
                ctx.beginPath();
                ctx.arc(x, y, pulseSize + 2, 0, Math.PI * 2);
                ctx.fill();
                
                // Bright center
                ctx.fillStyle = `rgba(233, 213, 255, ${opacity * 0.9})`;
                ctx.beginPath();
                ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
                ctx.fill();
              }
            }
          }
        }
      }
    };

    const animate = () => {
      drawGrid();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Set initial positions to center
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mousePositionRef.current = { x: centerX, y: centerY };
    targetPositionRef.current = { x: centerX, y: centerY };

    // Event listeners
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize
    resizeCanvas();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'rgb(0, 0, 0)' }}
    />
  );
};

export default InteractiveGrid;
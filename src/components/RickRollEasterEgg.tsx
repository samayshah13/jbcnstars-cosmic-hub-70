import React, { useState, useRef } from "react";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface RickRollEasterEggProps {
  liveStreamUrl: string;
  className?: string;
}

const RickRollEasterEgg: React.FC<RickRollEasterEggProps> = ({ liveStreamUrl, className }) => {
  const [isRickRolled, setIsRickRolled] = useState(false);
  const [isHolding, setIsHolding] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);
  const holdTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const rickRollUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1";

  const handleMouseDown = () => {
    setIsHolding(true);
    setHoldProgress(0);
    
    // Progress animation
    progressIntervalRef.current = setInterval(() => {
      setHoldProgress(prev => {
        const newProgress = prev + 1;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 100);

    // Trigger Rick Roll after 10 seconds
    holdTimeoutRef.current = setTimeout(() => {
      setIsRickRolled(true);
      setIsHolding(false);
      setHoldProgress(0);
      clearInterval(progressIntervalRef.current!);
    }, 10000);
  };

  const handleMouseUp = () => {
    if (!isRickRolled) {
      setIsHolding(false);
      setHoldProgress(0);
      if (holdTimeoutRef.current) {
        clearTimeout(holdTimeoutRef.current);
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      
      // Normal click behavior - open live stream
      if (holdProgress < 100) {
        window.open(liveStreamUrl, '_blank');
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHolding(false);
    setHoldProgress(0);
    if (holdTimeoutRef.current) {
      clearTimeout(holdTimeoutRef.current);
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
  };

  return (
    <>
      <div className="relative">
        <Button
          className={`relative overflow-hidden ${className}`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <Play className="w-5 h-5 mr-2" />
          Watch Live
          
          {isHolding && (
            <div 
              className="absolute bottom-0 left-0 h-1 bg-red-500 transition-all duration-100"
              style={{ width: `${holdProgress}%` }}
            />
          )}
        </Button>
        
        {isHolding && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
            Hold for surprise... {Math.floor((100 - holdProgress) / 10)}s
          </div>
        )}
      </div>

      <Dialog open={isRickRolled} onOpenChange={setIsRickRolled}>
        <DialogContent className="max-w-4xl h-[80vh] p-0 overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-500 to-pink-600 text-white">
            <h2 className="text-xl font-bold">🎉 You've Been Rick Rolled! 🎉</h2>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsRickRolled(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex-1 h-full">
            <iframe
              src={rickRollUrl}
              className="w-full h-full border-0"
              title="Never Gonna Give You Up"
              allow="autoplay; encrypted-media"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RickRollEasterEgg;
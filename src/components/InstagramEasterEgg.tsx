import React, { useState, useRef } from "react";
import { Instagram, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface InstagramEasterEggProps {
  className?: string;
}

const InstagramEasterEgg: React.FC<InstagramEasterEggProps> = ({ className }) => {
  const [showHeart, setShowHeart] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isHolding, setIsHolding] = useState(false);
  const holdTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const heartTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDoubleClick = () => {
    setShowHeart(true);
    // Clear any existing timeout
    if (heartTimeoutRef.current) {
      clearTimeout(heartTimeoutRef.current);
    }
    // Hide heart after animation
    heartTimeoutRef.current = setTimeout(() => {
      setShowHeart(false);
    }, 2000);
  };

  const handleMouseDown = () => {
    setIsHolding(true);
    holdTimeoutRef.current = setTimeout(() => {
      setShowPopup(true);
      setIsHolding(false);
    }, 3000); // 3 seconds hold
  };

  const handleMouseUp = () => {
    setIsHolding(false);
    if (holdTimeoutRef.current) {
      clearTimeout(holdTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHolding(false);
    if (holdTimeoutRef.current) {
      clearTimeout(holdTimeoutRef.current);
    }
  };

  const handleClick = () => {
    if (!isHolding) {
      window.open('https://instagram.com/jbcnstars', '_blank');
    }
  };

  return (
    <>
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className={`text-foreground hover:text-primary transition-colors ${className}`}
          onDoubleClick={handleDoubleClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <Instagram className="w-5 h-5" />
        </Button>
        
        {showHeart && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Heart 
              className="w-8 h-8 text-red-500 animate-ping" 
              fill="currentColor"
            />
          </div>
        )}
      </div>

      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="max-w-4xl h-[80vh] p-0 overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
            <div className="flex items-center gap-2">
              <Instagram className="w-6 h-6" />
              <h2 className="text-xl font-bold">@jbcn_parel</h2>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setShowPopup(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex-1 h-full">
            <iframe
              src="https://www.instagram.com/jbcn_parel/?hl=en"
              className="w-full h-full border-0"
              title="JBCN Parel Instagram"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InstagramEasterEgg;
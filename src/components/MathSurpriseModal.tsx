import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, Lightbulb, RotateCcw, X } from "lucide-react";

interface MathSurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MathSurpriseModal: React.FC<MathSurpriseModalProps> = ({ isOpen, onClose }) => {
  const [currentContent, setCurrentContent] = useState<any>(null);
  const [clickCount, setClickCount] = useState(0);

  const jokes = [
    {
      type: "joke",
      content: "Why did the student wear glasses in math class? To improve division! 👓",
      icon: "😂"
    },
    {
      type: "joke", 
      content: "Parallel lines have so much in common… it's a shame they'll never meet! 📏",
      icon: "😄"
    },
    {
      type: "joke",
      content: "Why was 6 afraid of 7? Because 7, 8, 9! 🔢",
      icon: "😂"
    },
    {
      type: "joke",
      content: "I failed math so many times at school, I can't even count! 🧮",
      icon: "😅"
    },
    {
      type: "joke",
      content: "Why do plants hate math? It gives them square roots! 🌱",
      icon: "😂"
    }
  ];

  const quotes = [
    {
      type: "quote",
      content: "Without mathematics, there's nothing you can do. Everything around you is math.",
      author: "– Shakuntala Devi",
      icon: "📚"
    },
    {
      type: "quote", 
      content: "Mathematics is the music of reason.",
      author: "– James Joseph Sylvester",
      icon: "🎵"
    },
    {
      type: "quote",
      content: "Pure mathematics is, in its way, the poetry of logical ideas.",
      author: "– Albert Einstein",
      icon: "✨"
    },
    {
      type: "quote",
      content: "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.",
      author: "– William Paul Thurston",
      icon: "🧠"
    },
    {
      type: "quote",
      content: "In mathematics, you don't understand things. You just get used to them.",
      author: "– Johann von Neumann",
      icon: "💭"
    }
  ];

  const facts = [
    {
      type: "fact",
      content: "Did you know? A circle has infinite lines of symmetry! ⭕",
      icon: "🤯"
    },
    {
      type: "fact",
      content: "Zero is the only number that can't be represented in Roman numerals! 🏛️",
      icon: "😮"
    },
    {
      type: "fact",
      content: "The word 'mathematics' comes from ancient Greek meaning 'that which is learnt'! 🏺",
      icon: "🤓"
    },
    {
      type: "fact",
      content: "There are more ways to arrange a deck of cards than atoms on Earth! 🃏",
      icon: "🌍"
    },
    {
      type: "fact",
      content: "The symbol π was first used in 1706 by William Jones! 🥧",
      icon: "📐"
    }
  ];

  const specialContent = [
    {
      type: "special",
      content: "🎉 SPECIAL SURPRISE! 🎉\nYou've discovered the secret math enthusiast level!\nKeep exploring mathematics! 🌟",
      icon: "🎊"
    },
    {
      type: "special", 
      content: "✨ MATH MAGIC UNLOCKED! ✨\nFun fact: You're awesome at finding Easter eggs!\nOur Math Department is proud! 🏆",
      icon: "🪄"
    }
  ];

  const getRandomContent = () => {
    const allContent = [...jokes, ...quotes, ...facts];
    
    // Every 5th click shows special content
    if ((clickCount + 1) % 5 === 0) {
      const randomSpecial = specialContent[Math.floor(Math.random() * specialContent.length)];
      return randomSpecial;
    }
    
    const randomItem = allContent[Math.floor(Math.random() * allContent.length)];
    return randomItem;
  };

  const handleGetAnother = () => {
    setClickCount(prev => prev + 1);
    setCurrentContent(getRandomContent());
  };

  useEffect(() => {
    if (isOpen && !currentContent) {
      setCurrentContent(getRandomContent());
    }
  }, [isOpen]);

  const getHeaderIcon = () => {
    if (!currentContent) return <Sparkles className="w-6 h-6" />;
    
    switch (currentContent.type) {
      case "joke": return <span className="text-2xl">😂</span>;
      case "quote": return <BookOpen className="w-6 h-6" />;
      case "fact": return <Lightbulb className="w-6 h-6" />;
      case "special": return <span className="text-2xl">🎊</span>;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  const getHeaderTitle = () => {
    if (!currentContent) return "✨ Math Surprise! ✨";
    
    switch (currentContent.type) {
      case "joke": return "😂 Math Humor! 😂";
      case "quote": return "📚 Math Wisdom 📚";
      case "fact": return "🤯 Math Facts! 🤯";
      case "special": return "🎉 SPECIAL! 🎉";
      default: return "✨ Math Surprise! ✨";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-card border border-primary/20 shadow-2xl">
        <DialogHeader className="text-center space-y-4">
          <div className="flex justify-center items-center space-x-2">
            {getHeaderIcon()}
            <DialogTitle className="text-xl sm:text-2xl font-bold text-primary">
              {getHeaderTitle()}
            </DialogTitle>
            {getHeaderIcon()}
          </div>
        </DialogHeader>
        
        <div className="py-6 px-2">
          {currentContent && (
            <div className="text-center space-y-4">
              <div className="text-4xl mb-4 animate-bounce">
                {currentContent.icon}
              </div>
              
              <div className="space-y-3">
                <p className="text-base sm:text-lg text-foreground leading-relaxed">
                  {currentContent.content}
                </p>
                
                {currentContent.author && (
                  <p className="text-sm text-foreground-muted italic font-medium">
                    {currentContent.author}
                  </p>
                )}
              </div>
              
              {currentContent.type === "special" && (
                <div className="mt-4">
                  <div className="animate-pulse text-2xl">🌟✨🌟</div>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="flex justify-center space-x-3 pt-4 border-t border-primary/10">
          <Button 
            onClick={handleGetAnother}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-semibold"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Give me another!
          </Button>
          
          <Button 
            variant="outline" 
            onClick={onClose}
            className="px-4 py-2 rounded-full"
          >
            <X className="w-4 h-4 mr-2" />
            Close
          </Button>
        </div>
        
        <div className="text-center mt-2">
          <p className="text-xs text-foreground-muted">
            Click count: {clickCount + 1} {(clickCount + 1) % 5 === 0 && "🎉"}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MathSurpriseModal;
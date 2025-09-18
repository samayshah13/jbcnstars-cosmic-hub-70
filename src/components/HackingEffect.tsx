import React, { useState, useEffect } from 'react';

interface HackingEffectProps {
  isActive: boolean;
  onComplete: () => void;
}

const HackingEffect: React.FC<HackingEffectProps> = ({ isActive, onComplete }) => {
  const [hackingText, setHackingText] = useState('');
  const [showJoke, setShowJoke] = useState(false);

  const hackingMessages = [
    'INITIALIZING HACK...',
    'ACCESSING MAINFRAME...',
    'BYPASSING SECURITY...',
    'DECRYPTING FILES...',
    'DOWNLOADING DATABASE...',
    'SYSTEM COMPROMISED...',
    'HACK COMPLETE!'
  ];

  useEffect(() => {
    if (!isActive) return;

    let messageIndex = 0;
    let charIndex = 0;
    let currentMessage = '';

    const typeInterval = setInterval(() => {
      if (messageIndex < hackingMessages.length) {
        const message = hackingMessages[messageIndex];
        
        if (charIndex < message.length) {
          currentMessage += message[charIndex];
          setHackingText(currentMessage + '█');
          charIndex++;
        } else {
          currentMessage += '\n';
          messageIndex++;
          charIndex = 0;
          
          if (messageIndex < hackingMessages.length) {
            setTimeout(() => {}, 500); // Pause between messages
          }
        }
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setShowJoke(true);
          setTimeout(() => {
            onComplete();
          }, 3000);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Matrix-like background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${Math.random() * 20 + 10}px`
            }}
          >
            {Math.random().toString(36).substring(2, 5)}
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center">
        {!showJoke ? (
          <div className="font-mono text-green-400 text-xl md:text-2xl whitespace-pre-line">
            {hackingText}
          </div>
        ) : (
          <div className="space-y-6 animate-fade-in">
            <div className="text-6xl animate-pulse">😄</div>
            <div className="text-white text-2xl md:text-4xl font-bold">
              JUST JOKING!
            </div>
            <div className="text-green-400 text-lg">
              Thanks for discovering the easter egg! 🥚
            </div>
            <div className="text-gray-400 text-sm">
              - The JBCN Stars Development Team
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HackingEffect;
import React from "react";
import RickRollEasterEgg from "@/components/RickRollEasterEgg";
import { Video, Clock } from "lucide-react";

const LiveStreamWidget = () => {
  const liveStreamUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
          <Video className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-3">Live Stream</h3>
        <p className="text-foreground-muted text-sm max-w-md mx-auto">
          Watch the competition live during event day
        </p>
      </div>

      {/* YouTube Embed Style Display */}
      <div className="card-premium p-0 overflow-hidden">
        <div className="relative bg-black">
          {/* YouTube-style header */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Live Competition Stream</span>
            <span className="text-xs bg-white/20 px-2 py-1 rounded">1,247 watching</span>
          </div>
          
          {/* Video area */}
          <div className="aspect-video bg-gradient-to-br from-gray-900 to-black relative flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl font-bold mb-4">JBCN</div>
              <div className="text-4xl font-bold mb-4">STARS</div>
              <div className="text-xl mb-8">Coming Soon</div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                <RickRollEasterEgg 
                  liveStreamUrl={liveStreamUrl}
                  className="bg-red-600 hover:bg-red-700 text-white border-none rounded-lg px-6 py-2"
                />
              </div>
            </div>
          </div>
          
          {/* Video info */}
          <div className="p-4 text-white">
            <h4 className="font-bold text-lg mb-1">JBCNSTARS 2025 - Live Finals</h4>
            <p className="text-gray-300 text-sm">Individual and Team Competitions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamWidget;
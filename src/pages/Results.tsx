import React from "react";
import Layout from "@/components/Layout";
import { Clock } from "lucide-react";

const Results = () => {
  return (
    <Layout>
      <div className="py-16 sm:py-20 grid-bg relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative">
          {/* Big Slant Coming Soon Banner */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="transform rotate-12 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-20 py-8 text-6xl font-bold shadow-2xl opacity-90">
              COMING SOON
            </div>
          </div>
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in opacity-50">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              Competition <span className="text-primary">Results</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground-muted max-w-3xl mx-auto px-4">
              Results will be announced after the competition concludes
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Results;
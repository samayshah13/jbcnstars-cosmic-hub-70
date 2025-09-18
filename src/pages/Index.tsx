import React, { Suspense } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import QuickStats from "@/components/QuickStats";
import MiniGallery from "@/components/MiniGallery";
import MiniSchedule from "@/components/MiniSchedule";
import CountdownTimer from "@/components/CountdownTimer";
import SaveTheDateCalendar from "@/components/SaveTheDateCalendar";
import WinnersStrip from "@/components/WinnersStrip";
const BackgroundAnimation = React.lazy(() => import("@/components/BackgroundAnimation"));
const Index = () => {
  return <Layout>
      {/* Hero Section with Interactive Grid Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        {/* Hero Content */}
        <div className="relative z-10 w-full">
          <Hero />
        </div>
      </div>

      {/* Save The Date Calendar */}
      <section className="py-12 sm:py-20 bg-background grid-bg">
        <div className="container mx-auto px-4 sm:px-6">
          <SaveTheDateCalendar />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 sm:py-20 bg-background-secondary grid-bg">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Quick Statistics</h2>
            <p className="text-foreground-muted text-base sm:text-lg">
              Our competition at a glance
            </p>
          </div>
          <QuickStats />
        </div>
      </section>

      {/* Mini Gallery Preview */}
      <section className="py-8 sm:py-12 bg-background grid-bg">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Event Highlights</h2>
            <p className="text-foreground-muted text-sm sm:text-base">
              Glimpses from our previous competitions and memorable moments
            </p>
          </div>
          <MiniGallery />
        </div>
      </section>

      {/* Mini Schedule Preview */}
      <section className="py-12 sm:py-20 bg-background-secondary grid-bg">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Quiz Round Schedule</h2>
            <p className="text-foreground-muted text-base sm:text-lg">
              The top 4 teams with the highest combined scores from the first two rounds in each grade level will compete in the quiz round
            </p>
          </div>
          <div className="relative">
            {/* Slanted Purple Coming Soon Banner */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="transform -rotate-12 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-12 py-6 text-3xl font-bold shadow-2xl opacity-90">
                COMING SOON
              </div>
            </div>
            <div className="opacity-50 pointer-events-none">
              <MiniSchedule />
            </div>
          </div>
        </div>
      </section>

      {/* Winners Strip */}
      
    </Layout>;
};
export default Index;
import React from "react";
import Navigation from "./Navigation";
import FloatingOrbs from "./FloatingOrbs";
import Footer from "./Footer";
import AnnouncementBanner from "./AnnouncementBanner";
import InteractiveGridWithHover from "./InteractiveGridWithHover";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 -z-10">
        <InteractiveGridWithHover />
      </div>
      <FloatingOrbs />
      <div className="relative z-50">
        <Navigation />
      </div>
      <main className={`pt-20 relative z-10 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
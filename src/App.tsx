import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import CinematicPreloader from "@/components/CinematicPreloader";
import { FaviconUpdater } from "@/components/FaviconUpdater";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Rules from "./pages/Rules";
import Preparation from "./pages/Preparation";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="jbcnstars-ui-theme">
        <FaviconUpdater />
        <TooltipProvider>
          <Toaster />
          <Sonner />
          
          {isLoading ? (
            <CinematicPreloader onComplete={handlePreloaderComplete} />
          ) : (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/team" element={<Team />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/preparation" element={<Preparation />} />
                <Route path="/results" element={<Results />} />
                {/* Redirects for merged pages */}
                <Route path="/faq" element={<Contact />} />
                <Route path="/past-papers" element={<Resources />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          )}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
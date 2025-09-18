import React, { useState, useEffect } from "react";
import { X, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Check cookie on component mount
  useEffect(() => {
    const bannerDismissed = localStorage.getItem('announcement-banner-dismissed');
    if (bannerDismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('announcement-banner-dismissed', 'true');
  };
  const registrationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc4E24X8duHNVdaE7vyYHLVRx2p7aZ13Dxy8lmRPhGMOe43wA/viewform?usp=header";

  if (!isVisible) return null;

  const handleRegisterClick = () => {
    setIsFormOpen(true);
  };

  const handleQuickRegister = () => {
    window.open(registrationUrl, '_blank');
  };

  return (
    <>
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-2 sm:py-3 px-3 sm:px-4 relative animate-fade-in">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="font-semibold text-xs sm:text-sm md:text-base truncate">
              🎉 JBCNSTARS 2025 Registration Open! | Oct 11, 2025
              <span className="hidden sm:inline"> | JBCN Parel</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <Button 
              variant="secondary" 
              size="sm" 
              onClick={handleRegisterClick}
              className="hover:scale-105 transition-transform duration-200 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
            >
              <span className="hidden sm:inline">Register Now</span>
              <span className="sm:hidden">Register</span>
            </Button>
            <button 
              onClick={handleDismiss}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors p-1"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-5xl h-[90vh] sm:h-[90vh] p-0 m-2 sm:m-0 w-[calc(100vw-1rem)] sm:w-auto">
          <DialogHeader className="p-3 sm:p-6 pb-0">
            <DialogTitle className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span className="text-base sm:text-lg">JBCNSTARS 2025 Registration</span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleQuickRegister}
                className="flex items-center gap-2 text-xs sm:text-sm"
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                Open in New Tab
              </Button>
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 p-3 sm:p-6">
            <iframe
              src={registrationUrl}
              className="w-full h-full border-0 rounded-lg"
              title="JBCNSTARS Registration Form"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AnnouncementBanner;
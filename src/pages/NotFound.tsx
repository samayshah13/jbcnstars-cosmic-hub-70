import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Home, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4 sm:px-6">
          {/* 404 Animation */}
          <div className="relative mb-6 sm:mb-8">
            <div className="text-6xl sm:text-8xl md:text-9xl font-black text-transparent bg-gradient-to-br from-primary to-accent bg-clip-text animate-pulse-glow">
              404
            </div>
            <div className="absolute inset-0 text-6xl sm:text-8xl md:text-9xl font-black text-primary/20 blur-lg">
              404
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <Star className="w-5 sm:w-6 h-5 sm:h-6 text-primary animate-spin" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Lost in the <span className="text-primary">Cosmos</span>
              </h1>
              <Star className="w-5 sm:w-6 h-5 sm:h-6 text-primary animate-spin" style={{ animationDirection: 'reverse' }} />
            </div>
            
            <p className="text-lg sm:text-xl text-foreground-muted">
              The page you're looking for has drifted into deep space.
            </p>
            <p className="text-sm sm:text-base text-foreground-muted">
              But don't worry! Our mathematical navigation system can guide you back home.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link to="/">
              <Button className="btn-cosmic group">
                <Home className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Return to Home
              </Button>
            </Link>
            <Button 
              onClick={() => window.history.back()} 
              className="btn-glass"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto opacity-30">
            <div className="h-1 bg-gradient-to-r from-transparent to-cosmic-purple rounded animate-pulse" />
            <div className="h-1 bg-gradient-to-r from-cosmic-purple to-neon-blue rounded animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="h-1 bg-gradient-to-r from-neon-blue to-transparent rounded animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

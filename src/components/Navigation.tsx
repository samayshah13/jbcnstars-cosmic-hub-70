import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/providers/ThemeProvider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import InstagramEasterEgg from "./InstagramEasterEgg";
const Navigation = () => {
  const {
    theme
  } = useTheme();
  const jbcnLogoLight = "/lovable-uploads/94145ce6-007e-4080-b1ef-94129251f35f.png";
  const jbcnLogoDark = "/lovable-uploads/f83e59aa-2799-49ad-9fd2-1b97fe006a7e.png";
  const currentLogo = theme === "dark" ? jbcnLogoLight : jbcnLogoDark;
  const hoverLogo = theme === "dark" ? jbcnLogoDark : jbcnLogoLight;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const dropdownMenus = [{
    title: "About Us",
    items: [{
      name: "About JBCNSTARS",
      path: "/about"
    }, {
      name: "Our Team",
      path: "/team"
    }]
  }, {
    title: "Academics",
    items: [{
      name: "Rules & Guidelines",
      path: "/rules"
    }, {
      name: "Preparation",
      path: "/preparation"
    }, {
      name: "Resources & Past Papers",
      path: "/resources"
    }]
  }];
  const singleNavItems = [{
    name: "Schedule",
    path: "/events"
  }, {
    name: "Gallery",
    path: "/gallery"
  }, {
    name: "Contact & FAQ",
    path: "/contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  const isDropdownActive = (items: {
    path: string;
  }[]) => items.some(item => location.pathname === item.path);
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50" style={{
    boxShadow: 'var(--shadow-navbar)'
  }}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative flex-shrink-0">
              <img src={currentLogo} alt="JBCNSTARS Official Logo" className="h-12 md:h-14 w-auto group-hover:scale-110 transition-all duration-300 group-hover:opacity-0" />
              <img src={hoverLogo} alt="JBCNSTARS Official Logo Hover" className="h-12 md:h-14 w-auto absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-lg md:text-2xl font-black text-foreground hidden sm:block">
              JBCN<span className="text-primary">STARS</span>
            </span>
            <span className="text-lg md:text-2xl font-black text-foreground sm:hidden">
              JBCNSTARS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
              Home
            </Link>
            
            {/* Dropdown Menus */}
            {dropdownMenus.map(menu => <DropdownMenu key={menu.title}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className={`nav-link btn-hover-fill flex items-center gap-1 ${isDropdownActive(menu.items) ? "active" : ""}`}>
                    {menu.title}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48 bg-background backdrop-blur-xl border border-border/50 shadow-lg">
                  {menu.items.map(item => <DropdownMenuItem key={item.path} asChild>
                      <Link to={item.path} className={`w-full cursor-pointer text-foreground hover:text-primary hover:bg-accent/50 ${isActive(item.path) ? "text-primary font-medium" : ""}`}>
                        {item.name}
                      </Link>
                    </DropdownMenuItem>)}
                </DropdownMenuContent>
              </DropdownMenu>)}

            {/* Single Nav Items */}
            {singleNavItems.map(item => <Link key={item.path} to={item.path} className={`nav-link btn-hover-fill text-center ${isActive(item.path) ? "active" : ""}`}>
                {item.name}
              </Link>)}
            
            {/* Instagram Easter Egg */}
            <InstagramEasterEgg />
            
            <ThemeToggle />
          </div>

          {/* Mobile/Tablet Actions */}
          <div className="lg:hidden flex items-center space-x-2">
            <InstagramEasterEgg />
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-primary/10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && <div className="lg:hidden mt-6 pb-6 animate-fade-in">
            <div className="glass rounded-xl p-6 mx-2">
              <div className="flex flex-col space-y-4">
                <Link to="/" className={`nav-link text-lg font-semibold p-3 rounded-lg transition-all duration-300 ${isActive("/") ? "active bg-primary/10" : "hover:bg-primary/5"}`} onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                
                {/* Mobile Dropdown Sections */}
                {dropdownMenus.map(menu => <div key={menu.title} className="space-y-3 border-l-2 border-primary/20 pl-4">
                    <h3 className="font-bold text-primary text-sm uppercase tracking-wide">
                      {menu.title}
                    </h3>
                    <div className="space-y-2">
                      {menu.items.map(item => <Link key={item.path} to={item.path} className={`nav-link text-base block p-2 rounded-lg transition-all duration-300 ${isActive(item.path) ? "active bg-primary/10 font-semibold" : "hover:bg-primary/5"}`} onClick={() => setIsMenuOpen(false)}>
                          {item.name}
                        </Link>)}
                    </div>
                  </div>)}

                {/* Mobile Single Items */}
                <div className="border-t border-border/30 pt-4 space-y-2">
                  {singleNavItems.map(item => <Link key={item.path} to={item.path} className={`nav-link text-lg font-semibold p-3 rounded-lg transition-all duration-300 block ${isActive(item.path) ? "active bg-primary/10" : "hover:bg-primary/5"}`} onClick={() => setIsMenuOpen(false)}>
                      {item.name}
                    </Link>)}
                </div>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;
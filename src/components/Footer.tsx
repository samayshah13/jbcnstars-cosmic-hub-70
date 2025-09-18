import { Link } from "react-router-dom";
import { Star, Mail, MapPin, Phone } from "lucide-react";
export default function Footer() {
  return <footer className="bg-background border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-foreground text-center mx-[22px]">
                JBCN<span className="text-primary">STARS</span>
              </span>
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed text-left">
              Scholastic Tournament for Advanced Mathematics and Reasoning Skills - 
              Empowering young minds through mathematical excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-foreground-muted hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/events" className="block text-sm text-foreground-muted hover:text-primary transition-colors">
                Events
              </Link>
              <Link to="/resources" className="block text-sm text-foreground-muted hover:text-primary transition-colors">
                Resources
              </Link>
              <Link to="/gallery" className="block text-sm text-foreground-muted hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/team" className="block text-sm text-foreground-muted hover:text-primary transition-colors">
                Team
              </Link>
            </div>
          </div>

          {/* Competition Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Competition</h3>
            <div className="space-y-2">
              <Link to="/rules" className="block text-sm text-foreground-muted hover:text-primary transition-colors">
                Rules & Guidelines
              </Link>
              <Link to="/preparation" className="block text-sm text-foreground-muted hover:text-primary transition-colors">
                Preparation
              </Link>
              <Link to="/faq" className="block text-sm text-foreground-muted hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link to="/past-papers" className="block text-sm text-foreground-muted hover:text-primary transition-colors">
                Past Papers
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-foreground-muted">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:jbcnstars.parel@jbcnschool.edu.in"
                  className="hover:text-primary transition-colors underline"
                >
                  jbcnstars.parel@jbcnschool.edu.in
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-foreground-muted">
                <MapPin className="w-4 h-4" />
                <span>JBCN Parel, Mumbai</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-foreground-muted px-0">Copyright ©2025 JBCNSTARS</p>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-foreground-muted">Developed by:</span>
              <Link to="/team" className="text-xs text-primary hover:underline">
                JBCNSTARS Dev Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}
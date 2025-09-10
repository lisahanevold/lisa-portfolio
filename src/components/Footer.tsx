import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const handleLinkClick = () => {
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-playfair font-semibold text-portfolio-primary mb-4">
              Lisa Hanevold
            </h3>
            <p className="text-muted-foreground text-sm">
              UX Designer crafting meaningful digital experiences through user-centered design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-muted-foreground hover:text-portfolio-accent transition-colors"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className="text-muted-foreground hover:text-portfolio-accent transition-colors"
                  onClick={handleLinkClick}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-muted-foreground hover:text-portfolio-accent transition-colors"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/*Services*/}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>UX Design</li>
              <li>Service Design</li>
              <li>Strategic Design</li>
              <li>UX/UI Design</li>
              <li>User Research</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4" />
                <a href="mailto:lisa.hanevold@gmail.com" className="hover:text-portfolio-accent transition-colors">
                  lisa.hanevold@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4" />
                <span>+47 91314509</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4" />
                <span>Oslo, Norway</span>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                <a 
                  href="https://linkedin.com/in/lisahanevold" 
                  className="text-muted-foreground hover:text-portfolio-accent transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://github.com/lisahanevold" 
                  className="text-muted-foreground hover:text-portfolio-accent transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-border/40 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Lisa Hanevold. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Designed & built with passion for great user experiences.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;